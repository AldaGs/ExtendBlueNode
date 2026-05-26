// Translates the EBN DAG (nodes + edges) into a runnable ExtendScript string.
// Execution order is determined by walking edges whose handles are the
// reserved execution ports (`exec_out` -> `exec_in`).

const EXEC_OUT = 'exec_out';
const EXEC_IN = 'exec_in';

// label -> ExtendScript template. Templates may use {token} placeholders
// that get filled from the node's data.params (falling back to a literal).
const NODE_SNIPPETS = {
  'Get Active Comp':    'var activeComp = app.project.activeItem;',
  'Select Layer by ID': 'var targetLayer = activeComp.layerByID({layer_id});',
  'Set Property':       'targetLayer.property("{property}").setValue({value});',
  // Legacy fallback for old fixtures.
  'Set Opacity to 50%': 'targetLayer.property("ADBE Opacity").setValue(50);',
};

const DEFAULT_PARAMS = {
  layer_id: 1,
  property: 'ADBE Opacity',
  value: 100,
};

function fillTemplate(tpl, params) {
  return tpl.replace(/\{(\w+)\}/g, (_, key) => {
    const v = params[key];
    return v === undefined || v === null ? `/* missing:${key} */` : String(v);
  });
}

function indexById(items) {
  const m = new Map();
  for (const it of items) m.set(it.id, it);
  return m;
}

// Pick the starting node: has an outgoing execution edge AND no incoming one.
// Fallback to any node with an outgoing exec edge if nothing matches.
function findStartNodeId(nodes, execEdges) {
  const incoming = new Set(execEdges.map((e) => e.target));
  const outgoing = new Set(execEdges.map((e) => e.source));
  for (const n of nodes) {
    if (outgoing.has(n.id) && !incoming.has(n.id)) return n.id;
  }
  return [...outgoing][0] || (nodes[0] && nodes[0].id) || null;
}

function buildExecOrder(startId, execEdges) {
  const next = new Map();
  for (const e of execEdges) {
    if (!next.has(e.source)) next.set(e.source, []);
    next.get(e.source).push(e.target);
  }
  const order = [];
  const seen = new Set();
  let cur = startId;
  while (cur && !seen.has(cur)) {
    seen.add(cur);
    order.push(cur);
    const outs = next.get(cur);
    cur = outs && outs[0];
  }
  return order;
}

export function compileToExtendScript(nodes, edges, context = {}) {
  if (!nodes || nodes.length === 0) {
    return '// EBN: empty graph — drop nodes onto the canvas to begin.\n';
  }

  const execEdges = (edges || []).filter(
    (e) => e.sourceHandle === EXEC_OUT && e.targetHandle === EXEC_IN,
  );

  const byId = indexById(nodes);
  const startId = findStartNodeId(nodes, execEdges);
  const order = startId ? buildExecOrder(startId, execEdges) : nodes.map((n) => n.id);

  const lines = [];
  const skipped = [];

  for (const id of order) {
    const node = byId.get(id);
    if (!node) continue;
    const label = node.data?.label;
    const tpl = NODE_SNIPPETS[label];
    if (!tpl) {
      skipped.push(label || id);
      continue;
    }
    const params = {
      ...DEFAULT_PARAMS,
      ...(node.data?.values || {}),
      ...(node.data?.params || {}),
      ...context,
    };
    lines.push('    ' + fillTemplate(tpl, params));
  }

  const header = [
    '// EBN Auto-Generated Code',
    `// Nodes: ${nodes.length}  Edges: ${edges?.length ?? 0}  ExecSteps: ${lines.length}`,
  ];
  if (skipped.length) {
    header.push(`// Skipped (no snippet mapping): ${skipped.join(', ')}`);
  }

  const body = lines.length
    ? lines.join('\n')
    : '    // No executable nodes in this graph.';

  return [
    header.join('\n'),
    '',
    '(function () {',
    '    try {',
    body,
    '    } catch (err) {',
    '        alert("EBN runtime error: " + err.toString());',
    '    }',
    '})();',
    '',
  ].join('\n');
}
