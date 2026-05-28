// EBN translation engine: flat DAG -> ExtendScript string.
//
// Two-pass:
//   1. compileToIR(nodes, edges, globals) -> IRStmt[]
//   2. printIR(ir)                        -> string
//
// Per-node-kind emit logic lives in ./compiler/emitters; this file
// orchestrates the walk, hoisting, and orphan reporting.

import { ir, printIR } from './compiler/ir';
import {
  emitterFor,
  SELF_BRANCHING_TYPES,
  SELF_BRANCHING_LABELS,
  resolveExpressionFor,
} from './compiler/emitters';
import { HELPERS } from './compiler/helpers';
import { flattenGroups } from './graph/groups';

const EXEC_OUT = 'exec_out';
const EXEC_IN  = 'exec_in';

const DEFAULTS = { layer_id: 1, property: 'ADBE Opacity', value: 100, cond: 'true' };

/* ----------------------------- helpers ----------------------------- */

function literalFor(portType, raw) {
  if (portType === 'number') {
    const n = Number(raw);
    return Number.isFinite(n) ? String(n) : '0';
  }
  if (portType === 'boolean') {
    return String(raw === true || raw === 'true');
  }
  if (portType === 'expr') {
    // raw is already a JS expression (e.g. "myVar > 5"). Use verbatim;
    // fall back to `false` for empty so the script stays valid.
    if (raw == null || raw === '') return 'false';
    return String(raw);
  }
  return JSON.stringify(raw == null ? '' : String(raw));
}

function defaultVarName(nodeId) {
  return `var_${String(nodeId).replace(/[^A-Za-z0-9_$]/g, '_')}`;
}

function sanitizeVarName(raw) {
  if (raw == null) return null;
  const trimmed = String(raw).trim();
  if (!trimmed) return null;
  let cleaned = trimmed.replace(/[^A-Za-z0-9_$]/g, '_');
  if (/^[0-9]/.test(cleaned)) cleaned = `_${cleaned}`;
  return cleaned || null;
}

function varNameFor(node) {
  return sanitizeVarName(node.data?.variableName) ?? defaultVarName(node.id);
}

function globalVarName(g) {
  return `global_${sanitizeVarName(g?.name) ?? '_unnamed'}`;
}

function literalForGlobal(g) {
  if (g.type === 'String') return JSON.stringify(String(g.initialValue ?? ''));
  const n = Number(g.initialValue);
  if (!Number.isFinite(n)) return '0';
  return g.type === 'Integer' ? String(Math.trunc(n)) : String(n);
}

function primDeclFor(node) {
  if (node.type === 'integer') {
    const n = Number(node.data?.value);
    const lit = Number.isFinite(n) ? String(Math.trunc(n)) : '0';
    return ir.varDecl(varNameFor(node), lit);
  }
  if (node.type === 'string') {
    const lit = JSON.stringify(String(node.data?.value ?? ''));
    return ir.varDecl(varNameFor(node), lit);
  }
  return null;
}

// Walk back through reroute relays to reach the real upstream node.
// Returns { node, handle } where handle is the sourceHandle on the upstream node.
function resolveSourceNode(byId, edges, targetId, handleId) {
  const edge = edges.find(
    (e) => e.target === targetId && e.targetHandle === handleId,
  );
  if (!edge) return { node: null, handle: null };
  let src = byId.get(edge.source);
  let handle = edge.sourceHandle;
  while (src && src.type === 'reroute') {
    const up = edges.find(
      (e) => e.target === src.id && e.targetHandle === 'in',
    );
    if (!up) return { node: null, handle: null };
    handle = up.sourceHandle;
    src = byId.get(up.source);
  }
  return { node: src, handle };
}

/* ----------------------------- IR build pass ----------------------------- */

export function compileToIR(rawNodes, rawEdges, globalVariables = []) {
  // Expand any group nodes into their constituent flat graph first, so the
  // rest of the compiler never has to reason about nesting.
  const { nodes, edges } = flattenGroups(rawNodes, rawEdges);
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const execEdges = edges.filter(
    (e) => e.sourceHandle === EXEC_OUT ||
           (e.sourceHandle && e.sourceHandle.startsWith('exec_')),
  ).filter((e) => e.targetHandle === EXEC_IN);

  const reached = new Set();
  const emitOrder = []; // labels in exec-emission order (for ordering checks)
  function markReached(node) {
    if (node) reached.add(node.id);
  }

  // Set of helper function names any emitter requested. Each is emitted
  // exactly once at the top of the try-block (after beginUndoGroup).
  const usedHelpers = new Set();

  const ctx = {
    globals: globalVariables,
    varName: varNameFor,
    globalName: globalVarName,
    resolveInput(node, port) {
      const { node: upstream, handle: srcHandle } = resolveSourceNode(byId, edges, node.id, port.id);
      if (upstream) {
        // Mark the upstream so it doesn't get reported as an orphan.
        // The same applies transitively because resolveExpressionFor
        // recurses through ctx.resolveInput.
        markReached(upstream);
        const expr = resolveExpressionFor(upstream, ctx, srcHandle);
        if (expr != null) return expr;
      }
      const inline = node.data?.values?.[port.id];
      if (inline != null && inline !== '') return literalFor(port.type, inline);
      // Per-port raw default (e.g. Set Property.layer => 'targetLayer').
      if (port.default != null) return port.default;
      return literalFor(port.type, DEFAULTS[port.id]);
    },
    sourceOf(node, portId) {
      const { node: upstream } = resolveSourceNode(byId, edges, node.id, portId);
      // Emitters that introspect their upstream (Set Property reading
      // PropertyPath, Get Property Value reading PropertyPath, …) also
      // count as reaching that node.
      markReached(upstream);
      return upstream;
    },
    sanitizeVarName, // exposed for emitters that need raw identifier hygiene
    useHelper(name) {
      if (HELPERS[name]) usedHelpers.add(name);
    },
    walkBranch(nodeId, handleId) {
      const outs = execEdges.filter(
        (e) => e.source === nodeId && e.sourceHandle === handleId,
      );
      const collected = [];
      for (const e of outs) collected.push(...walk(e.target));
      return collected;
    },
  };

  function walk(nodeId) {
    if (reached.has(nodeId)) return [];
    reached.add(nodeId);
    const node = byId.get(nodeId);
    if (!node) return [];
    if (node.data?.label) emitOrder.push(node.data.label);

    const emit = emitterFor(node);
    const own = emit ? emit(node, ctx) : [];

    if (
      SELF_BRANCHING_TYPES.has(node.type) ||
      SELF_BRANCHING_LABELS.has(node.data?.label)
    ) {
      return own;
    }

    // Auto-follow every outgoing exec edge.
    const outs = execEdges.filter((e) => e.source === nodeId);
    const next = [];
    for (const e of outs) next.push(...walk(e.target));
    return [...own, ...next];
  }

  /* --- walk first so helpers / reached / orphans are all settled --- */

  // Chain entry point: prefer an explicit `Start` node, then fall back to
  // `Get Active Comp` so old graphs keep compiling. Both expose `exec_out`
  // and no `exec_in`, so either can act as the root.
  const start =
    nodes.find((n) => n.data?.label === 'Start') ||
    nodes.find((n) => n.data?.label === 'Get Active Comp');
  const chainIR = start ? walk(start.id) : null;

  /* --- now assemble the output in document order --- */

  const out = [];

  if (usedHelpers.size) {
    out.push(ir.comment('--- Runtime Helpers ---'));
    for (const name of usedHelpers) {
      out.push(ir.raw(HELPERS[name]));
    }
    out.push(ir.blank());
  }

  if (globalVariables.length) {
    out.push(ir.comment('--- Global Variables ---'));
    for (const g of globalVariables) {
      out.push(ir.varDecl(globalVarName(g), literalForGlobal(g)));
    }
    out.push(ir.blank());
  }

  const primDecls = nodes.map(primDeclFor).filter(Boolean);
  if (primDecls.length) {
    out.push(ir.comment('--- Primitive Nodes ---'));
    out.push(...primDecls);
    out.push(ir.blank());
  }

  if (chainIR) {
    out.push(ir.comment('--- Execution Chain ---'));
    // ScriptUI ordering check: a `Show Window` must run AFTER every
    // `UI Event Listener` attaches, otherwise (for a modal dialog) .show()
    // blocks before the handlers exist. Surface a non-fatal warning.
    const firstShow = emitOrder.indexOf('Show Window');
    const lastListener = emitOrder.lastIndexOf('UI Event Listener');
    if (firstShow !== -1 && lastListener !== -1 && firstShow < lastListener) {
      const msg =
        "Warning: 'Show Window' runs before a 'UI Event Listener' — attach listeners before showing the window or their handlers may not fire.";
      console.warn(msg);
      out.push(ir.comment(msg));
    }
    out.push(...chainIR);
  } else {
    out.push(ir.comment("(No exec chain — add a 'Start' or 'Get Active Comp' node to begin.)"));
  }

  // Orphan report — every node that contributes logic but wasn't
  // reached by the exec walk.
  const ORPHAN_TYPES = new Set(['ebnNode', 'setGlobal', 'getGlobal', 'if']);
  const orphans = nodes.filter(
    (n) => ORPHAN_TYPES.has(n.type) && !reached.has(n.id),
  );
  if (orphans.length) {
    out.push(ir.blank());
    out.push(ir.comment('--- Orphan Nodes (not in exec chain) ---'));
    for (const n of orphans) {
      const tag =
        n.type === 'ebnNode'   ? (n.data?.label || 'EBN Node')
      : n.type === 'setGlobal' ? 'Set Global'
      : n.type === 'getGlobal' ? 'Get Global'
      : n.type === 'if'        ? 'If'
      : n.type;
      out.push(ir.comment(`  • ${tag} [id=${n.id}]`));
    }
  }

  return out;
}

/* ----------------------------- public API ----------------------------- */

const JSON_POLYFILL = `// JSON Polyfill
if(typeof JSON!=="object"){JSON={};}(function(){"use strict";var rx_one=/^[\\],:{}\\s]*$/,rx_two=/\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\\\\n\\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,rx_four=/(?:^|:|,)(?:\\s*\\[)+/g,rx_escapable=/[\\\\\\"\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g,rx_dangerous=/[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g;function f(n){return n<10?"0"+n:n;}function this_value(){return this.valueOf();}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}var gap,indent,meta,rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?"\\\""+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})+"\\\"":"\\\""+string+"\\\"";}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key);}if(typeof rep==="function"){value=rep.call(holder,key,value);}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null";}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null";}v=partial.length===0?"[]":gap?"[\\n"+gap+partial.join(",\\n"+gap)+"\\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v;}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}v=partial.length===0?"{}":gap?"{\\n"+gap+partial.join(",\\n"+gap)+"\\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v;}}if(typeof JSON.stringify!=="function"){meta={"\\b":"\\\\b","\\t":"\\\\t","\\n":"\\\\n","\\f":"\\\\f","\\r":"\\\\r","\\\"":"\\\\\\\"","\\\\":"\\\\\\\\"};JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" ";}}else if(typeof space==="string"){indent=space;}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify");}return str("",{"":value});};}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}text=String(text);rx_dangerous.lastIndex=0;if(rx_dangerous.test(text)){text=text.replace(rx_dangerous,function(a){return"\\\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);});}if(rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,""))){j=eval("("+text+")");return(typeof reviver==="function")?walk({"":j},""):j;}throw new SyntaxError("JSON.parse");};}}());`;

export function compileToExtendScript(nodes, edges, globalVariables = []) {
  if (!nodes || nodes.length === 0) return '// No nodes to compile.';

  const needsJson = nodes.some(n => n.data?.label === 'Save JSON' || n.data?.label === 'Load JSON');

  const hasScriptUIBuilder = nodes.some(n => n.data?.label === 'ScriptUI Builder');
  const hasShowWindow = nodes.some(n => n.data?.label === 'Show Window');

  if (hasScriptUIBuilder && !hasShowWindow) {
    console.warn("Warning: ScriptUI Builder compiled, but no 'Show Window' node was detected. Your panel will not be visible.");
  }

  const bodyIR = [
    ir.raw("app.beginUndoGroup('EBN Auto-Inject');"),
    ir.blank(),
    ...compileToIR(nodes, edges, globalVariables),
    ir.blank(),
    ir.raw('app.endUndoGroup();'),
  ];
  const catchIR = [
    ir.raw("alert('EBN Execution Error: ' + error.message);"),
  ];

  const mainScript = printIR([ir.tryCatch(bodyIR, catchIR)]);

  if (needsJson) {
    return JSON_POLYFILL + '\n\n' + mainScript;
  }

  return mainScript;
}
