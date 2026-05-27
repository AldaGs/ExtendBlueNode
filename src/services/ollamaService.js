// Ollama integration for the EBN Copilot.
//
// Exposes a single tool, `propose_graph`, with a strict JSON schema and a
// few-shot example baked into the description. Small local models (~7B) follow
// concrete examples far more reliably than abstract instructions, so the
// `description` field intentionally contains a miniature, valid payload.

export const PROPOSE_GRAPH_TOOL = {
  type: 'function',
  function: {
    name: 'propose_graph',
    description:
      "Propose a set of nodes and edges to add to the visual node canvas. " +
      "Both `nodes` and `edges` MUST be flat top-level arrays — never nest one inside the other, " +
      "and never wrap them in additional objects. Every node MUST use a `data.label` taken verbatim " +
      "from the catalog provided in the system prompt. " +
      "Example valid payload: { 'nodes': [ { 'id': 'n1', 'type': 'ebnNode', 'data': { 'label': 'Integer', 'values': { 'value': 10 } } }, { 'id': 'n2', 'type': 'ebnNode', 'data': { 'label': 'Set Property', 'values': { 'property': 'ADBE Opacity' } } } ], 'edges': [ { 'id': 'e1', 'source': 'n1', 'target': 'n2', 'sourceHandle': 'value', 'targetHandle': 'value' } ] }. " +
      "Do NOT include nested nodes. Nodes and edges MUST be flat arrays.",
    parameters: {
      type: 'object',
      additionalProperties: false,
      required: ['nodes', 'edges'],
      properties: {
        nodes: {
          type: 'array',
          description: 'Flat list of nodes to add to the canvas.',
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['id', 'type', 'position', 'data'],
            properties: {
              id: { type: 'string', description: 'Unique node id, e.g. "n1".' },
              type: { type: 'string', description: 'React Flow node type. Use "ebnNode" unless you have a reason not to.' },
              position: {
                type: 'object',
                additionalProperties: false,
                required: ['x', 'y'],
                properties: {
                  x: { type: 'number' },
                  y: { type: 'number' },
                },
              },
              data: {
                type: 'object',
                required: ['label'],
                properties: {
                  label: {
                    type: 'string',
                    description: 'Verbatim label from the node catalog in the system prompt.',
                  },
                  values: {
                    type: 'object',
                    description: 'Optional per-node property overrides.',
                  },
                },
              },
            },
          },
        },
        edges: {
          type: 'array',
          description: 'Flat list of edges connecting node handles.',
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['id', 'source', 'target', 'sourceHandle', 'targetHandle'],
            properties: {
              id: { type: 'string' },
              source: { type: 'string', description: 'Source node id.' },
              target: { type: 'string', description: 'Target node id.' },
              sourceHandle: { type: 'string', description: 'Handle id on the source node, e.g. "exec_out" or a data port name.' },
              targetHandle: { type: 'string', description: 'Handle id on the target node, e.g. "exec_in" or a data port name.' },
            },
          },
        },
      },
    },
  },
};

export async function callOllama({ endpoint = 'http://localhost:11434/api/chat', model, messages, signal } = {}) {
  const res = await fetch(endpoint, {
    method: 'POST',
    signal,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      messages,
      stream: false,
      format: 'json',
      tools: [PROPOSE_GRAPH_TOOL],
      options: { temperature: 0.1, top_p: 0.9, num_predict: 1200, repeat_penalty: 1.15 },
    }),
  });
  if (!res.ok) throw new Error(`Ollama API error: ${res.status} ${res.statusText}`);
  return res.json();
}
