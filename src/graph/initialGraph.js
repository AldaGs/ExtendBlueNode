export const NODE_THEME = {
  selector: '#4a8a3f',
  action:   '#3b6fb8',
  mutator:  '#a8632a',
  logic:    '#7a3fa0',
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
        { id: 'exec_in', label: 'Execution', type: 'exec' },
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
        { id: 'exec_in',  label: 'Execution', type: 'exec' },
        { id: 'comp',     label: 'Comp',      type: 'text' },
        { id: 'layer_id', label: 'Layer ID',  type: 'number' },
      ],
      outputs: [
        { id: 'layer', label: 'Layer' },
        { id: 'exec_out', label: 'Execution' },
      ],
      values: {
        layer_id: 1,
      },
    },
  },
  {
    id: 'node_3',
    type: 'ebnNode',
    position: { x: 680, y: 180 },
    data: {
      label: 'Set Property',
      category: 'mutator',
      themeColor: NODE_THEME.mutator,
      inputs: [
        { id: 'exec_in',  label: 'Execution', type: 'exec' },
        { id: 'layer',    label: 'Layer',     type: 'text' },
        { id: 'property', label: 'Property',  type: 'text',   placeholder: 'ADBE Opacity' },
        { id: 'value',    label: 'Value',     type: 'number', placeholder: '0' },
      ],
      outputs: [
        { id: 'exec_out', label: 'Execution' },
      ],
      values: {
        property: 'ADBE Opacity',
        value: 50,
      },
    },
  },
];

// Primitive data nodes — drive a Set Property value via a wire to
// demonstrate the dynamic-variable compiler path.
initialNodes.push(
  {
    id: 'int_1',
    type: 'integer',
    position: { x: 680, y: 420 },
    data: { label: 'Integer', value: 25 },
  },
  {
    id: 'str_1',
    type: 'string',
    position: { x: 680, y: 520 },
    data: { label: 'String', value: 'ADBE Opacity' },
  },
);

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
