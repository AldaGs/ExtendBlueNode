// Tool definition and helpers for the LLM copilot.

import { getNodeCatalogSummary } from '../nodeLibrary';

// Few-shot example: a correct, complete propose_graph payload that wires
// an Integer node into the Value port of a Set Property node. Embedded
// in the tool description because small models follow examples far
// better than abstract instructions.
const FEW_SHOT_PAYLOAD = JSON.stringify({
  nodes: [
    {
      id: 'n1',
      type: 'integer',
      position: { x: 100, y: 200 },
      data: { label: 'Integer', value: 75 },
    },
    {
      id: 'n2',
      type: 'ebnNode',
      position: { x: 600, y: 150 },
      data: {
        label: 'Set Property',
        category: 'mutator',
        themeColor: '#a8632a',
        inputs: [
          { id: 'exec_in',  label: 'Execution', type: 'exec' },
          { id: 'layer',    label: 'Layer',     type: 'text' },
          { id: 'property', label: 'Property',  type: 'text' },
          { id: 'value',    label: 'Value',     type: 'number' },
        ],
        outputs: [{ id: 'exec_out', label: 'Execution' }],
        values: { property: 'ADBE Transform Group/ADBE Opacity', value: 75 },
      },
    },
  ],
  edges: [
    {
      id: 'e1',
      source: 'n1',
      target: 'n2',
      sourceHandle: 'value',
      targetHandle: 'value',
    },
  ],
  explanation: 'Sets layer opacity to 75 using a literal Integer value.',
});

export const PROPOSE_GRAPH_TOOL = {
  name: 'propose_graph',
  description:
    'Add nodes and edges to the ExtendBlueNode canvas. Call this whenever the user asks you to create, build, or add any nodes or workflows.\n\n' +
    `Example valid payload: ${FEW_SHOT_PAYLOAD}\n\n` +
    'Do NOT include nested nodes. Nodes and edges MUST be flat arrays.',
  parameters: {
    type: 'object',
    required: ['nodes', 'edges'],
    properties: {
      nodes: {
        type: 'array',
        description: 'Flat array of nodes to add. Never nest nodes inside other nodes.',
        items: {
          type: 'object',
          required: ['id', 'type', 'position', 'data'],
          properties: {
            id: {
              type: 'string',
              description: 'Temporary ID used for wiring edges in this payload (e.g. "n1", "n2"). Will be remapped on apply.',
            },
            type: {
              type: 'string',
              description: 'React Flow node type. Must be one of the values in the catalog.',
              enum: [
                'ebnNode', 'integer', 'string', 'math', 'compare', 'select',
                'if', 'reroute', 'forEachSelected', 'vecMath', 'propertyPath',
                'splitVec', 'getGlobal', 'setGlobal',
              ],
            },
            position: {
              type: 'object',
              required: ['x', 'y'],
              properties: {
                x: { type: 'number' },
                y: { type: 'number' },
              },
            },
            data: {
              type: 'object',
              required: ['label'],
              description:
                'Node data payload. data.label is REQUIRED for every node and must match the exact label from the catalog. ' +
                'For ebnNode, also include category, themeColor, inputs, outputs, and values. ' +
                'For primitives (integer, string, math, etc.) the label can match the type-name (e.g. "Integer", "Math").',
              properties: {
                label: {
                  type: 'string',
                  description: 'REQUIRED. Must exactly match a node label from the catalog.',
                },
              },
            },
          },
        },
      },
      edges: {
        type: 'array',
        description: 'Flat array of edges connecting nodes. Every edge MUST specify both sourceHandle and targetHandle.',
        items: {
          type: 'object',
          required: ['id', 'source', 'target', 'sourceHandle', 'targetHandle'],
          properties: {
            id: { type: 'string', description: 'Unique edge id, e.g. "e1".' },
            source: { type: 'string', description: 'id of the source node from the nodes array.' },
            target: { type: 'string', description: 'id of the target node from the nodes array.' },
            sourceHandle: {
              type: 'string',
              description: 'Output port id on the source node. Must match a port in the catalog (e.g. "exec_out", "value", "layer", "comp").',
            },
            targetHandle: {
              type: 'string',
              description: 'Input port id on the target node. Must match a port in the catalog (e.g. "exec_in", "value", "layer", "property").',
            },
          },
        },
      },
      explanation: {
        type: 'string',
        description: 'One-sentence description of what this graph does, shown to the user.',
      },
    },
  },
};

export function buildSystemPrompt() {
  const catalog = getNodeCatalogSummary();
  return `You are EBN Copilot. You generate strict DAG JSON for a visual node canvas that compiles to Adobe After Effects ExtendScript.

CRITICAL INSTRUCTION: You may ONLY use the exact node labels and port IDs listed below. Do NOT invent node types, labels, or ports that are not in this list. If a task cannot be expressed with these nodes, say so plainly — do not hallucinate new node types.

## Primary Rule
Whenever the user asks you to create, build, or add nodes, ALWAYS call the \`propose_graph\` function. Never describe nodes in plain text without calling the function.

## Node Catalog (the ONLY valid nodes)
${catalog}

## Node Data Schemas

For execution nodes (type: "ebnNode"), include the full data payload from the canonical schemas (category, themeColor, inputs[], outputs[], values). The label must exactly match one from the catalog above.

For primitive data nodes, the minimal data payload is:
- integer:         \`{ "label": "Integer", "value": 0 }\`
- string:          \`{ "label": "String", "value": "" }\`
- math:            \`{ "label": "Math", "op": "add", "values": {"a": 0, "b": 0} }\`  (op: add|sub|mul|div|mod)
- compare:         \`{ "label": "Compare", "op": "eq", "values": {"a": 0, "b": 0} }\` (op: eq|neq|lt|lte|gt|gte)
- select:          \`{ "label": "Select", "values": {"cond": "true", "if_true": 1, "if_false": 0} }\`
- if:              \`{ "label": "If", "values": {"cond": "true"} }\`
- vecMath:         \`{ "label": "Vector Math", "op": "mul", "values": {"a": "0", "b": "1"} }\` (op: add|sub|mul|div)
- propertyPath:    \`{ "label": "Property Path", "preset": "opacity", "path": "ADBE Transform Group/ADBE Opacity" }\`
- splitVec:        \`{ "label": "Split Vector", "values": {"vec": ""} }\`
- forEachSelected: \`{ "label": "For Each Selected Layer" }\`
- reroute:         \`{ "label": "Reroute" }\`
- getGlobal:       \`{ "label": "Get Global", "globalId": null }\`
- setGlobal:       \`{ "label": "Set Global", "globalId": null, "values": {} }\`

## Common AE Property Paths
- Opacity:  "ADBE Transform Group/ADBE Opacity"
- Position: "ADBE Transform Group/ADBE Position"
- Scale:    "ADBE Transform Group/ADBE Scale"
- Rotation: "ADBE Transform Group/ADBE Rotate Z"
- Anchor:   "ADBE Transform Group/ADBE Anchor Point"

## Layout & Wiring
- Left-to-right layout: data nodes x: 50–300, selectors x: 300–600, mutators x: 600–900.
- Space nodes 130px vertically, start at y: 150.
- Exec chain: sourceHandle "exec_out" → targetHandle "exec_in".
- Every edge MUST specify both sourceHandle and targetHandle.
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
