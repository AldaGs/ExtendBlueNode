// Tool definition and helpers for the LLM copilot.

export const PROPOSE_GRAPH_TOOL = {
  name: 'propose_graph',
  description:
    'Add nodes and edges to the ExtendBlueNode canvas. Call this whenever the user asks you to create, build, or add any nodes or workflows.',
  parameters: {
    type: 'object',
    required: ['nodes', 'edges'],
    properties: {
      nodes: {
        type: 'array',
        description: 'Nodes to add to the canvas',
        items: {
          type: 'object',
          required: ['id', 'type', 'position', 'data'],
          properties: {
            id: { type: 'string', description: 'Temporary ID used to wire edges, e.g. "n1", "n2"' },
            type: {
              type: 'string',
              enum: [
                'ebnNode', 'integer', 'string', 'math', 'compare', 'select',
                'if', 'reroute', 'forEachSelected', 'vecMath', 'propertyPath',
                'splitVec', 'getGlobal', 'setGlobal',
              ],
            },
            position: {
              type: 'object',
              required: ['x', 'y'],
              properties: { x: { type: 'number' }, y: { type: 'number' } },
            },
            data: { type: 'object', description: 'Node data payload — see system prompt for schema per type' },
          },
        },
      },
      edges: {
        type: 'array',
        description: 'Edges connecting nodes',
        items: {
          type: 'object',
          required: ['id', 'source', 'target'],
          properties: {
            id: { type: 'string' },
            source: { type: 'string' },
            target: { type: 'string' },
            sourceHandle: { type: 'string' },
            targetHandle: { type: 'string' },
          },
        },
      },
      explanation: {
        type: 'string',
        description: 'One-sentence description of what this graph does, shown to the user',
      },
    },
  },
};

export function buildSystemPrompt() {
  return `You are the Copilot for ExtendBlueNode — a visual node editor that compiles graphs to Adobe After Effects ExtendScript. Help users build automation workflows by creating nodes.

## Primary Rule
Whenever the user asks you to create, build, or add nodes, ALWAYS call \`propose_graph\`. Never describe nodes in text without calling the function.

## Node Type Reference

### Execution Nodes (type: "ebnNode") — connected via exec handles

**Get Active Comp**
\`\`\`json
{ "label": "Get Active Comp", "category": "selector", "themeColor": "#4a8a3f",
  "inputs": [{"id":"exec_in","label":"Execution","type":"exec"}],
  "outputs": [{"id":"comp","label":"Comp"},{"id":"exec_out","label":"Execution"}] }
\`\`\`

**Select Layer by Name**
\`\`\`json
{ "label": "Select Layer by Name", "category": "selector", "themeColor": "#4a8a3f",
  "inputs": [{"id":"exec_in","label":"Execution","type":"exec"},{"id":"comp","label":"Comp","type":"text"},{"id":"layer_name","label":"Layer Name","type":"text"}],
  "outputs": [{"id":"layer","label":"Layer"},{"id":"exec_out","label":"Execution"}],
  "values": {"layer_name":"My Layer"} }
\`\`\`

**Select Layer by Index**
\`\`\`json
{ "label": "Select Layer by Index", "category": "selector", "themeColor": "#4a8a3f",
  "inputs": [{"id":"exec_in","label":"Execution","type":"exec"},{"id":"comp","label":"Comp","type":"text"},{"id":"layer_index","label":"Layer Index","type":"number"}],
  "outputs": [{"id":"layer","label":"Layer"},{"id":"exec_out","label":"Execution"}],
  "values": {"layer_index":1} }
\`\`\`

**Select Layer by ID**
\`\`\`json
{ "label": "Select Layer by ID", "category": "action", "themeColor": "#3b6fb8",
  "inputs": [{"id":"exec_in","label":"Execution","type":"exec"},{"id":"comp","label":"Comp","type":"text"},{"id":"layer_id","label":"Layer ID","type":"number"}],
  "outputs": [{"id":"layer","label":"Layer"},{"id":"exec_out","label":"Execution"}],
  "values": {"layer_id":1} }
\`\`\`

**Set Property**
\`\`\`json
{ "label": "Set Property", "category": "mutator", "themeColor": "#a8632a",
  "inputs": [{"id":"exec_in","label":"Execution","type":"exec"},{"id":"layer","label":"Layer","type":"text"},{"id":"property","label":"Property","type":"text"},{"id":"value","label":"Value","type":"number"}],
  "outputs": [{"id":"exec_out","label":"Execution"}],
  "values": {"property":"ADBE Transform Group/ADBE Opacity","value":100} }
\`\`\`

**Get Property Value** (data, no exec)
\`\`\`json
{ "label": "Get Property Value", "category": "data", "themeColor": "#3a6b54",
  "inputs": [{"id":"layer","label":"Layer","type":"expr"},{"id":"property","label":"Property","type":"text"}],
  "outputs": [{"id":"value","label":"Value"}],
  "values": {"property":"ADBE Transform Group/ADBE Position"} }
\`\`\`

**Vector 2 Array** (data, no exec)
\`\`\`json
{ "label": "Vector 2 Array", "category": "data", "themeColor": "#9b59b6",
  "inputs": [{"id":"x","label":"X","type":"number"},{"id":"y","label":"Y","type":"number"}],
  "outputs": [{"id":"value","label":"[X, Y]"}],
  "values": {"x":960,"y":540} }
\`\`\`

**Set Local Variable**
\`\`\`json
{ "label": "Set Local Variable", "category": "logic", "themeColor": "#a36b1f",
  "variableName": "myVar",
  "inputs": [{"id":"exec_in","label":"Execution","type":"exec"},{"id":"value","label":"Value","type":"expr"}],
  "outputs": [{"id":"exec_out","label":"Execution"},{"id":"value","label":"Variable"}],
  "values": {"value":"0"} }
\`\`\`

### Standalone Data Nodes

**integer** — data: \`{"label":"Integer","value":0}\` — output handle: "value"
**string** — data: \`{"label":"String","value":""}\` — output handle: "value"
**math** — data: \`{"op":"add","values":{"a":0,"b":0}}\` — op: add|sub|mul|div|mod — inputs: a, b — output: value
**compare** — data: \`{"op":"eq","values":{"a":0,"b":0}}\` — op: eq|neq|lt|lte|gt|gte — inputs: a, b — output: value
**select** — data: \`{"values":{"cond":"true","if_true":1,"if_false":0}}\` — inputs: cond, if_true, if_false — output: value
**if** — data: \`{"values":{"cond":"true"}}\` — inputs: exec_in, cond — outputs: exec_then, exec_else
**vecMath** — data: \`{"op":"mul","values":{"a":"0","b":"1"}}\` — op: add|sub|mul|div — inputs: a, b — output: value
**propertyPath** — data: \`{"preset":"opacity","path":"ADBE Transform Group/ADBE Opacity"}\` — output: path
**splitVec** — data: \`{"values":{"vec":""}}\` — input: vec — outputs: x, y
**forEachSelected** — data: \`{}\` — outputs: exec_body, layer, exec_done

## Common AE Property Paths
- Opacity: "ADBE Transform Group/ADBE Opacity"
- Position: "ADBE Transform Group/ADBE Position"
- Scale: "ADBE Transform Group/ADBE Scale"
- Rotation: "ADBE Transform Group/ADBE Rotate Z"
- Anchor: "ADBE Transform Group/ADBE Anchor Point"

## Layout & Wiring
- Left-to-right layout: data nodes x: 50–300, selectors x: 300–600, mutators x: 600–900
- Space nodes 130px vertically, start at y: 150
- Exec chain: sourceHandle "exec_out" → targetHandle "exec_in"
- Comp wire: source "comp" → target "comp"
- Layer wire: source "layer" → target "layer"
`;
}

// Safely merges a proposed patch onto the existing graph.
// Re-maps IDs to avoid collisions with existing nodes.
export function applyPatch(setNodes, setEdges, patch) {
  const suffix = Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  const idMap = {};

  const newNodes = (patch.nodes || []).map((n, i) => {
    const newId = `cp_${suffix}_${i}`;
    idMap[n.id] = newId;
    return {
      ...n,
      id: newId,
      position: {
        x: (n.position?.x ?? 100),
        y: (n.position?.y ?? 100),
      },
    };
  });

  const newEdges = (patch.edges || []).map((e, i) => ({
    ...e,
    id: `cp_e_${suffix}_${i}`,
    source: idMap[e.source] ?? e.source,
    target: idMap[e.target] ?? e.target,
  }));

  setNodes((nds) => [...nds, ...newNodes]);
  setEdges((eds) => [...eds, ...newEdges]);
}
