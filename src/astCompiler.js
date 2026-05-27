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
  resolveExpressionFor,
} from './compiler/emitters';
import { HELPERS } from './compiler/helpers';

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
function resolveSourceNode(byId, edges, targetId, handleId) {
  const edge = edges.find(
    (e) => e.target === targetId && e.targetHandle === handleId,
  );
  if (!edge) return null;
  let src = byId.get(edge.source);
  while (src && src.type === 'reroute') {
    const up = edges.find(
      (e) => e.target === src.id && e.targetHandle === 'in',
    );
    if (!up) return null;
    src = byId.get(up.source);
  }
  return src;
}

/* ----------------------------- IR build pass ----------------------------- */

export function compileToIR(nodes, edges, globalVariables = []) {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const execEdges = edges.filter(
    (e) => e.sourceHandle === EXEC_OUT ||
           (e.sourceHandle && e.sourceHandle.startsWith('exec_')),
  ).filter((e) => e.targetHandle === EXEC_IN);

  const reached = new Set();
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
      const upstream = resolveSourceNode(byId, edges, node.id, port.id);
      if (upstream) {
        // Mark the upstream so it doesn't get reported as an orphan.
        // The same applies transitively because resolveExpressionFor
        // recurses through ctx.resolveInput.
        markReached(upstream);
        const expr = resolveExpressionFor(upstream, ctx);
        if (expr != null) return expr;
      }
      const inline = node.data?.values?.[port.id];
      if (inline != null && inline !== '') return literalFor(port.type, inline);
      // Per-port raw default (e.g. Set Property.layer => 'targetLayer').
      if (port.default != null) return port.default;
      return literalFor(port.type, DEFAULTS[port.id]);
    },
    sourceOf(node, portId) {
      const upstream = resolveSourceNode(byId, edges, node.id, portId);
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

    const emit = emitterFor(node);
    const own = emit ? emit(node, ctx) : [];

    if (SELF_BRANCHING_TYPES.has(node.type)) {
      return own;
    }

    // Auto-follow every outgoing exec edge.
    const outs = execEdges.filter((e) => e.source === nodeId);
    const next = [];
    for (const e of outs) next.push(...walk(e.target));
    return [...own, ...next];
  }

  /* --- walk first so helpers / reached / orphans are all settled --- */

  const start = nodes.find((n) => n.data?.label === 'Get Active Comp');
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
    out.push(...chainIR);
  } else {
    out.push(ir.comment("(No exec chain — add a 'Get Active Comp' node to begin.)"));
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

export function compileToExtendScript(nodes, edges, globalVariables = []) {
  if (!nodes || nodes.length === 0) return '// No nodes to compile.';

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

  return printIR([ir.tryCatch(bodyIR, catchIR)]);
}
