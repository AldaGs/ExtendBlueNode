// EBN translation engine: flat DAG -> ExtendScript string.
// Structure mirrors the spec from Phase 5; tuning notes inline.

export function compileToExtendScript(nodes, edges) {
  if (!nodes || nodes.length === 0) return '// No nodes to compile.';

  let generatedCode = 'try {\n';
  generatedCode += "  app.beginUndoGroup('EBN Auto-Inject');\n\n";

  // 1. Dictionaries: node label -> ExtendScript snippet (with {token} slots).
  const nodeDictionary = {
    'Get Active Comp':
      "  var activeComp = app.project.activeItem;\n" +
      "  if (!activeComp || !(activeComp instanceof CompItem)) throw new Error('No active composition selected.');\n",
    'Select Layer by ID':
      "  var targetLayer = activeComp.layerByID({layer_id});\n" +
      "  if (!targetLayer) throw new Error('Layer not found.');\n",
    // Generic Set Property (current dummy graph uses this).
    'Set Property':
      '  targetLayer.property("{property}").setValue({value});\n',
    // Kept for backwards compat with the original spec.
    'Set Opacity to 50%':
      '  targetLayer.property("ADBE Opacity").setValue(50);\n',
  };

  // Walk only execution edges so data wires don't reorder the chain.
  const execEdges = edges.filter(
    (e) => e.sourceHandle === 'exec_out' && e.targetHandle === 'exec_in',
  );

  // 2. Starting node = the "Get Active Comp" block.
  let currentNode = nodes.find((n) => n.data?.label === 'Get Active Comp');
  if (!currentNode) {
    return "// Add a 'Get Active Comp' node to start the execution flow.";
  }

  // 3. Walk the graph following execution edges.
  let safetyCounter = 0;
  while (currentNode && safetyCounter < 100) {
    // Reroute nodes are transparent pass-throughs — skip emitting code.
    if (currentNode.type === 'reroute') {
      const nextEdge = execEdges.find((e) => e.source === currentNode.id);
      currentNode = nextEdge ? nodes.find((n) => n.id === nextEdge.target) : null;
      safetyCounter++;
      continue;
    }

    const label = currentNode.data?.label;

    if (nodeDictionary[label]) {
      const values = currentNode.data?.values || {};
      const params = {
        layer_id: values.layer_id ?? 1,
        property: values.property ?? 'ADBE Opacity',
        value: values.value ?? 100,
      };
      const snippet = nodeDictionary[label].replace(
        /\{(\w+)\}/g,
        (_, k) => (params[k] !== undefined ? String(params[k]) : `/* missing:${k} */`),
      );
      generatedCode += snippet;
    } else {
      generatedCode += `  // WARNING: Unknown node type '${label}'\n`;
    }

    const nextEdge = execEdges.find((e) => e.source === currentNode.id);
    currentNode = nextEdge ? nodes.find((n) => n.id === nextEdge.target) : null;
    safetyCounter++;
  }

  generatedCode += '\n  app.endUndoGroup();\n';
  generatedCode += '} catch (error) {\n';
  generatedCode += "  alert('EBN Execution Error: ' + error.message);\n";
  generatedCode += '}';

  return generatedCode;
}
