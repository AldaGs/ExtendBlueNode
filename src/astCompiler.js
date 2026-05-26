// EBN translation engine: flat DAG -> ExtendScript string.
//
// Phase 8: inputs can be either literal (typed into the SmartInput on
// the consuming node) or wired (driven by a primitive data node such as
// Integer/String). Wired inputs get a `var node_<id>_val = ...;` line
// at the top of the try-block and the snippet receives the variable
// name in place of the literal.

const EXEC_OUT = 'exec_out';
const EXEC_IN  = 'exec_in';

// Templates use bare {token} slots — the substitution layer adds the
// JS quoting for string literals so the same template handles wired
// and literal inputs uniformly.
const NODE_SNIPPETS = {
  'Get Active Comp':
    "  var activeComp = app.project.activeItem;\n" +
    "  if (!activeComp || !(activeComp instanceof CompItem)) throw new Error('No active composition selected.');\n",
  'Select Layer by ID':
    "  var targetLayer = activeComp.layerByID({layer_id});\n" +
    "  if (!targetLayer) throw new Error('Layer not found.');\n",
  'Set Property':
    '  targetLayer.property({property}).setValue({value});\n',
  // Legacy fixture from the original Phase 5 spec.
  'Set Opacity to 50%':
    '  targetLayer.property("ADBE Opacity").setValue(50);\n',
};

const DEFAULTS = { layer_id: 1, property: 'ADBE Opacity', value: 100 };

function literalFor(portType, raw) {
  if (portType === 'number') {
    const n = Number(raw);
    return Number.isFinite(n) ? String(n) : '0';
  }
  // text / default -> quoted JS string
  return JSON.stringify(raw == null ? '' : String(raw));
}

function varName(nodeId) {
  return `node_${nodeId}_val`;
}

// Walk back through any reroute nodes to find the real upstream source.
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

function primitiveLiteral(srcNode) {
  if (srcNode.type === 'integer') {
    const n = Number(srcNode.data?.value);
    return Number.isFinite(n) ? String(Math.trunc(n)) : '0';
  }
  if (srcNode.type === 'string') {
    return JSON.stringify(String(srcNode.data?.value ?? ''));
  }
  return null;
}

export function compileToExtendScript(nodes, edges) {
  if (!nodes || nodes.length === 0) return '// No nodes to compile.';

  const byId = new Map(nodes.map((n) => [n.id, n]));
  const execEdges = edges.filter(
    (e) => e.sourceHandle === EXEC_OUT && e.targetHandle === EXEC_IN,
  );

  // 1. Find the start node.
  let current = nodes.find((n) => n.data?.label === 'Get Active Comp');
  if (!current) {
    return "// Add a 'Get Active Comp' node to start the execution flow.";
  }

  // 2. Walk execution chain, collecting per-step substitution maps and
  //    the set of upstream primitives that need variable declarations.
  const stepLines = [];
  const variableDecls = new Map(); // srcNodeId -> "  var node_X_val = ...;"
  let safety = 0;

  while (current && safety < 100) {
    safety++;
    if (current.type === 'reroute') {
      const nextEdge = execEdges.find((e) => e.source === current.id);
      current = nextEdge ? byId.get(nextEdge.target) : null;
      continue;
    }

    const tpl = NODE_SNIPPETS[current.data?.label];
    if (tpl) {
      const inputs = (current.data?.inputs || []).filter(
        (p) => p.type !== 'exec',
      );
      const values = current.data?.values || {};

      const params = {};
      for (const port of inputs) {
        const upstream = resolveSource(byId, edges, current.id, port.id);
        if (upstream) {
          const lit = primitiveLiteral(upstream);
          if (lit != null) {
            const name = varName(upstream.id);
            variableDecls.set(
              upstream.id,
              `  var ${name} = ${lit};`,
            );
            params[port.id] = name;
            continue;
          }
          // Non-primitive upstream: reference its var slot anyway (will
          // be defined when its node compiles) — fall back to literal
          // for now so the script stays runnable.
        }
        const inline = values[port.id] ?? DEFAULTS[port.id];
        params[port.id] = literalFor(port.type, inline);
      }

      // Fill any leftover {token}s from DEFAULTS so legacy templates
      // (e.g. "Set Opacity to 50%") don't break.
      const snippet = tpl.replace(/\{(\w+)\}/g, (_, k) => {
        if (params[k] !== undefined) return params[k];
        if (DEFAULTS[k] !== undefined) {
          return literalFor(typeof DEFAULTS[k] === 'number' ? 'number' : 'text', DEFAULTS[k]);
        }
        return `/* missing:${k} */`;
      });
      stepLines.push(snippet);
    } else {
      stepLines.push(`  // WARNING: Unknown node type '${current.data?.label}'\n`);
    }

    const nextEdge = execEdges.find((e) => e.source === current.id);
    current = nextEdge ? byId.get(nextEdge.target) : null;
  }

  // 3. Emit final script.
  let out = 'try {\n';
  out += "  app.beginUndoGroup('EBN Auto-Inject');\n\n";
  if (variableDecls.size) {
    out += [...variableDecls.values()].join('\n') + '\n\n';
  }
  out += stepLines.join('');
  out += '\n  app.endUndoGroup();\n';
  out += '} catch (error) {\n';
  out += "  alert('EBN Execution Error: ' + error.message);\n";
  out += '}';
  return out;
}
