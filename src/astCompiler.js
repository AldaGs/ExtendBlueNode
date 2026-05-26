// EBN translation engine: flat DAG -> ExtendScript string.
//
// Supported source-side node types:
//   - integer / string : primitive literal -> declares `var <name> = <lit>;`
//   - getGlobal        : references a hoisted global, no extra decl
//
// Supported step node types (executed in exec-edge order):
//   - ebnNode (with snippet) : templated ExtendScript via NODE_SNIPPETS
//   - setGlobal              : emits `global_<name> = <resolved>;`
//   - reroute                : transparent pass-through

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

// Convert an upstream source node into a usable reference.
//  { kind: 'prim',   name, decl }  -> Integer/String literal, needs decl
//  { kind: 'global', name }        -> hoisted global, no decl needed
function resolveUpstreamRef(upstream, globals) {
  if (!upstream) return null;
  if (upstream.type === 'getGlobal') {
    const g = globals.find((x) => x.id === upstream.data?.globalId);
    if (!g) return null;
    return { kind: 'global', name: globalVarName(g) };
  }
  if (upstream.type === 'integer') {
    const n = Number(upstream.data?.value);
    const name = varNameFor(upstream);
    const lit = Number.isFinite(n) ? String(Math.trunc(n)) : '0';
    return { kind: 'prim', name, decl: `  var ${name} = ${lit};` };
  }
  if (upstream.type === 'string') {
    const name = varNameFor(upstream);
    const lit = JSON.stringify(String(upstream.data?.value ?? ''));
    return { kind: 'prim', name, decl: `  var ${name} = ${lit};` };
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

  let current = nodes.find((n) => n.data?.label === 'Get Active Comp');
  if (!current) {
    return "// Add a 'Get Active Comp' node to start the execution flow.";
  }

  const stepLines = [];
  const primDecls = new Map(); // srcNodeId -> decl line
  let safety = 0;

  // resolveInput: returns the JS expression to inject for this input port.
  // Wires take precedence; otherwise the inline SmartInput value is used.
  function resolveInput(stepNode, port) {
    const upstream = resolveSource(byId, edges, stepNode.id, port.id);
    if (upstream) {
      const ref = resolveUpstreamRef(upstream, globalVariables);
      if (ref) {
        if (ref.kind === 'prim') primDecls.set(upstream.id, ref.decl);
        return ref.name;
      }
    }
    const inline = stepNode.data?.values?.[port.id] ?? DEFAULTS[port.id];
    return literalFor(port.type, inline);
  }

  while (current && safety < 100) {
    safety++;

    if (current.type === 'reroute') {
      const nextEdge = execEdges.find((e) => e.source === current.id);
      current = nextEdge ? byId.get(nextEdge.target) : null;
      continue;
    }

    if (current.type === 'setGlobal') {
      const g = globalVariables.find((x) => x.id === current.data?.globalId);
      if (g) {
        const expr = resolveInput(current, {
          id: 'value',
          type: g.type === 'String' ? 'text' : 'number',
        });
        stepLines.push(`  ${globalVarName(g)} = ${expr};\n`);
      } else {
        stepLines.push('  // WARNING: Set Global with no target selected\n');
      }
      const nextEdge = execEdges.find((e) => e.source === current.id);
      current = nextEdge ? byId.get(nextEdge.target) : null;
      continue;
    }

    const tpl = NODE_SNIPPETS[current.data?.label];
    if (tpl) {
      const inputs = (current.data?.inputs || []).filter((p) => p.type !== 'exec');
      const params = {};
      for (const port of inputs) {
        params[port.id] = resolveInput(current, port);
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
    } else {
      stepLines.push(`  // WARNING: Unknown node type '${current.data?.label}'\n`);
    }

    const nextEdge = execEdges.find((e) => e.source === current.id);
    current = nextEdge ? byId.get(nextEdge.target) : null;
  }

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

  if (primDecls.size) {
    out += [...primDecls.values()].join('\n') + '\n\n';
  }

  out += stepLines.join('');
  out += '\n  app.endUndoGroup();\n';
  out += '} catch (error) {\n';
  out += "  alert('EBN Execution Error: ' + error.message);\n";
  out += '}';
  return out;
}
