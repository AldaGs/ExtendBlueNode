// EBN translation engine: flat DAG -> ExtendScript string.
//
// Every node in the graph contributes something to the output:
//   - integer / string   : always hoisted as `var <name> = <literal>;`
//                          regardless of whether it's wired anywhere.
//   - getGlobal          : referenced via the hoisted global name.
//   - ebnNode (snippet)  : emitted inline when reached from the exec
//                          chain that starts at "Get Active Comp";
//                          otherwise listed as an orphan comment.
//   - setGlobal          : emits an assignment when reached, comment
//                          when orphan.
//   - reroute            : transparent pass-through (no emit).

const EXEC_OUT = 'exec_out';
const EXEC_IN  = 'exec_in';

const NODE_SNIPPETS = {
  'Get Active Comp':
    "  var activeComp = app.project.activeItem;\n" +
    "  if (!activeComp || !(activeComp instanceof CompItem)) throw new Error('No active composition selected.');\n",
  'Select Layer by ID':
    "  var targetLayer = activeComp.layerByID({layer_id});\n" +
    "  if (!targetLayer) throw new Error('Layer not found.');\n",
  'Set Property':
    '  targetLayer.property({property}).setValue({value});\n',
  'Set Opacity to 50%':
    '  targetLayer.property("ADBE Opacity").setValue(50);\n',
};

const DEFAULTS = { layer_id: 1, property: 'ADBE Opacity', value: 100 };

/* ----------------------------- helpers ----------------------------- */

function literalFor(portType, raw) {
  if (portType === 'number') {
    const n = Number(raw);
    return Number.isFinite(n) ? String(n) : '0';
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
  return `global_${sanitizeVarName(g.name) ?? '_unnamed'}`;
}

function literalForGlobal(g) {
  if (g.type === 'String') {
    return JSON.stringify(String(g.initialValue ?? ''));
  }
  const n = Number(g.initialValue);
  if (!Number.isFinite(n)) return '0';
  return g.type === 'Integer' ? String(Math.trunc(n)) : String(n);
}

function primDeclFor(node) {
  if (node.type === 'integer') {
    const n = Number(node.data?.value);
    const lit = Number.isFinite(n) ? String(Math.trunc(n)) : '0';
    return `  var ${varNameFor(node)} = ${lit};`;
  }
  if (node.type === 'string') {
    const lit = JSON.stringify(String(node.data?.value ?? ''));
    return `  var ${varNameFor(node)} = ${lit};`;
  }
  return null;
}

// Walk back through reroute relays to reach the real upstream node.
function resolveSource(byId, edges, targetId, handleId) {
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

// Reference shape produced by resolveUpstreamRef.
//   { kind: 'prim',   name }  -> Integer/String literal (already hoisted)
//   { kind: 'global', name }  -> hoisted global, no decl needed
function resolveUpstreamRef(upstream, globals) {
  if (!upstream) return null;
  if (upstream.type === 'getGlobal') {
    const g = globals.find((x) => x.id === upstream.data?.globalId);
    if (!g) return null;
    return { kind: 'global', name: globalVarName(g) };
  }
  if (upstream.type === 'integer' || upstream.type === 'string') {
    return { kind: 'prim', name: varNameFor(upstream) };
  }
  return null;
}

/* ----------------------------- main ----------------------------- */

export function compileToExtendScript(nodes, edges, globalVariables = []) {
  if (!nodes || nodes.length === 0) return '// No nodes to compile.';

  const byId = new Map(nodes.map((n) => [n.id, n]));
  const execEdges = edges.filter(
    (e) => e.sourceHandle === EXEC_OUT && e.targetHandle === EXEC_IN,
  );

  // Hoist every primitive node up-front. Always-emit means a newly
  // added Integer/String is immediately visible in Monaco even
  // before the user wires it anywhere.
  const primDecls = [];
  for (const n of nodes) {
    const decl = primDeclFor(n);
    if (decl) primDecls.push(decl);
  }

  // Track which nodes were touched by the exec walk so we can list
  // the rest as orphans at the end.
  const reachedIds = new Set();
  const stepLines = [];

  function resolveInput(stepNode, port) {
    const upstream = resolveSource(byId, edges, stepNode.id, port.id);
    if (upstream) {
      const ref = resolveUpstreamRef(upstream, globalVariables);
      if (ref) return ref.name;
    }
    const inline = stepNode.data?.values?.[port.id] ?? DEFAULTS[port.id];
    return literalFor(port.type, inline);
  }

  // Find the chain start. Multiple Get-Active-Comp nodes are allowed,
  // but the walker uses the first found and reports the rest as
  // orphans through the reached-set check below.
  const start = nodes.find((n) => n.data?.label === 'Get Active Comp');

  // Emit code for a single (already visited) node.
  function emitNode(node) {
    if (node.type === 'reroute') return; // transparent pass-through

    if (node.type === 'setGlobal') {
      const g = globalVariables.find((x) => x.id === node.data?.globalId);
      if (g) {
        const expr = resolveInput(node, {
          id: 'value',
          type: g.type === 'String' ? 'text' : 'number',
        });
        stepLines.push(`  ${globalVarName(g)} = ${expr};\n`);
      } else {
        stepLines.push('  // WARNING: Set Global with no target selected\n');
      }
      return;
    }

    const tpl = NODE_SNIPPETS[node.data?.label];
    if (!tpl) {
      stepLines.push(
        `  // WARNING: Unknown node type '${node.data?.label}'\n`,
      );
      return;
    }
    const inputs = (node.data?.inputs || []).filter((p) => p.type !== 'exec');
    const params = {};
    for (const port of inputs) {
      params[port.id] = resolveInput(node, port);
    }
    const snippet = tpl.replace(/\{(\w+)\}/g, (_, k) => {
      if (params[k] !== undefined) return params[k];
      if (DEFAULTS[k] !== undefined) {
        return literalFor(
          typeof DEFAULTS[k] === 'number' ? 'number' : 'text',
          DEFAULTS[k],
        );
      }
      return `/* missing:${k} */`;
    });
    stepLines.push(snippet);
  }

  // DFS over execution edges so EVERY downstream branch from a node
  // with multiple exec_out wires is walked, not just the first one
  // matched by Array.find. `reachedIds` doubles as the cycle guard.
  function walk(nodeId) {
    if (reachedIds.has(nodeId)) return;
    reachedIds.add(nodeId);
    const node = byId.get(nodeId);
    if (!node) return;
    emitNode(node);
    const outs = execEdges.filter((e) => e.source === nodeId);
    for (const e of outs) walk(e.target);
  }

  if (start) walk(start.id);

  // Anything that contributes to the script logic but wasn't reached.
  // Primitives are always hoisted so they don't count as orphans here.
  const ORPHAN_TYPES = new Set(['ebnNode', 'setGlobal', 'getGlobal']);
  const orphans = nodes.filter(
    (n) => ORPHAN_TYPES.has(n.type) && !reachedIds.has(n.id),
  );

  /* ----------------------------- emit ----------------------------- */

  let out = 'try {\n';
  out += "  app.beginUndoGroup('EBN Auto-Inject');\n\n";

  if (globalVariables.length) {
    out += '  // --- Global Variables ---\n';
    for (const g of globalVariables) {
      out += `  var ${globalVarName(g)} = ${literalForGlobal(g)};\n`;
    }
    out += '\n';
  }

  if (primDecls.length) {
    out += '  // --- Primitive Nodes ---\n';
    out += primDecls.join('\n') + '\n\n';
  }

  if (!start) {
    out += "  // (No exec chain — add a 'Get Active Comp' node to begin.)\n";
  } else {
    out += '  // --- Execution Chain ---\n';
    out += stepLines.join('');
  }

  if (orphans.length) {
    out += '\n  // --- Orphan Nodes (not in exec chain) ---\n';
    for (const n of orphans) {
      const tag =
        n.type === 'ebnNode'   ? (n.data?.label || 'EBN Node')
      : n.type === 'setGlobal' ? 'Set Global'
      : n.type === 'getGlobal' ? 'Get Global'
      : n.type;
      out += `  //   • ${tag} [id=${n.id}]\n`;
    }
  }

  out += '\n  app.endUndoGroup();\n';
  out += '} catch (error) {\n';
  out += "  alert('EBN Execution Error: ' + error.message);\n";
  out += '}';
  return out;
}
