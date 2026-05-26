// Theme palette per node category (Blender/ComfyUI inspired).
export const NODE_THEME = {
  selector: '#4a8a3f', // green
  action:   '#3b6fb8', // blue
  mutator:  '#a8632a', // orange
  logic:    '#7a3fa0', // purple
};

export const initialNodes = [
  {
    id: 'node_1',
    type: 'ebnNode',
    position: { x: 60, y: 120 },
    data: {
      label: 'Get Active Comp',
      category: 'selector',
      themeColor: NODE_THEME.selector,
      inputs: [
        { id: 'exec_in', label: 'Execution' },
      ],
      outputs: [
        { id: 'comp', label: 'Comp' },
        { id: 'exec_out', label: 'Execution' },
      ],
    },
  },
  {
    id: 'node_2',
    type: 'ebnNode',
    position: { x: 360, y: 140 },
    data: {
      label: 'Select Layer by ID',
      category: 'action',
      themeColor: NODE_THEME.action,
      inputs: [
        { id: 'exec_in', label: 'Execution' },
        { id: 'comp', label: 'Comp' },
        { id: 'layer_id', label: 'Layer ID' },
      ],
      outputs: [
        { id: 'layer', label: 'Layer' },
        { id: 'exec_out', label: 'Execution' },
      ],
    },
  },
  {
    id: 'node_3',
    type: 'ebnNode',
    position: { x: 680, y: 180 },
    data: {
      label: 'Set Opacity to 50%',
      category: 'mutator',
      themeColor: NODE_THEME.mutator,
      inputs: [
        { id: 'exec_in', label: 'Execution' },
        { id: 'layer', label: 'Layer' },
        { id: 'value', label: 'Value' },
      ],
      outputs: [
        { id: 'exec_out', label: 'Execution' },
      ],
    },
  },
];

export const initialEdges = [
  {
    id: 'edge_1',
    source: 'node_1',
    sourceHandle: 'exec_out',
    target: 'node_2',
    targetHandle: 'exec_in',
  },
  {
    id: 'edge_2',
    source: 'node_2',
    sourceHandle: 'exec_out',
    target: 'node_3',
    targetHandle: 'exec_in',
  },
];
