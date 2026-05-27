// Registry of every node the user can drop on the canvas.
// One source of truth — used by the Add-Node menu and any future palette.
//
// Each item declares:
//   type      : nodeTypes key registered in FlowCanvas
//   label     : display name in the menu
//   keywords  : optional extra search terms
//   factory(flowPos) -> a React Flow node payload, ready for setNodes

import { NODE_THEME } from './graph/initialGraph';

let counter = 0;
function uid(prefix) {
  counter += 1;
  return `${prefix}_${Date.now().toString(36)}_${counter}`;
}

export const NODE_LIBRARY = [
  {
    category: 'Flow',
    items: [
      {
        type: 'reroute',
        label: 'Reroute',
        keywords: ['relay', 'pass-through', 'dot'],
        factory: (pos) => ({
          id: uid('reroute'),
          type: 'reroute',
          position: { x: pos.x - 6, y: pos.y - 6 },
          data: {},
        }),
      },
    ],
  },
  {
    category: 'Selectors',
    items: [
      {
        type: 'getActiveComp',
        label: 'Get Active Comp',
        keywords: ['composition', 'active item'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Get Active Comp',
            category: 'selector',
            themeColor: NODE_THEME.selector,
            inputs: [{ id: 'exec_in', label: 'Execution', type: 'exec' }],
            outputs: [
              { id: 'comp', label: 'Comp' },
              { id: 'exec_out', label: 'Execution' },
            ],
          },
        }),
      },
      {
        type: 'selectLayerByName',
        label: 'Select Layer by Name',
        keywords: ['layer', 'name'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Select Layer by Name',
            category: 'selector',
            themeColor: NODE_THEME.selector,
            inputs: [
              { id: 'exec_in',    label: 'Execution', type: 'exec' },
              { id: 'comp',       label: 'Comp',      type: 'text' },
              { id: 'layer_name', label: 'Layer Name', type: 'text', placeholder: 'My Layer' },
            ],
            outputs: [
              { id: 'layer',    label: 'Layer' },
              { id: 'exec_out', label: 'Execution' },
            ],
            values: { layer_name: '' },
          },
        }),
      },
      {
        type: 'selectLayerByIndex',
        label: 'Select Layer by Index',
        keywords: ['layer', 'index', 'position'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Select Layer by Index',
            category: 'selector',
            themeColor: NODE_THEME.selector,
            inputs: [
              { id: 'exec_in',     label: 'Execution', type: 'exec' },
              { id: 'comp',        label: 'Comp',      type: 'text' },
              { id: 'layer_index', label: 'Layer Index', type: 'number' },
            ],
            outputs: [
              { id: 'layer',    label: 'Layer' },
              { id: 'exec_out', label: 'Execution' },
            ],
            values: { layer_index: 1 },
          },
        }),
      },
    ],
  },
  {
    category: 'Actions',
    items: [
      {
        type: 'selectLayerById',
        label: 'Select Layer by ID',
        keywords: ['layer', 'pick'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
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
            values: { layer_id: 1 },
          },
        }),
      },
    ],
  },
  {
    category: 'Mutators',
    items: [
      {
        type: 'setProperty',
        label: 'Set Property',
        keywords: ['opacity', 'transform', 'setvalue'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
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
            outputs: [{ id: 'exec_out', label: 'Execution' }],
            values: { property: 'ADBE Opacity', value: 50 },
          },
        }),
      },
    ],
  },
  {
    category: 'Data',
    items: [
      {
        type: 'integer',
        label: 'Integer',
        keywords: ['number', 'int', 'literal'],
        factory: (pos) => ({
          id: uid('int'),
          type: 'integer',
          position: pos,
          data: { label: 'Integer', value: 0 },
        }),
      },
      {
        type: 'string',
        label: 'String',
        keywords: ['text', 'literal'],
        factory: (pos) => ({
          id: uid('str'),
          type: 'string',
          position: pos,
          data: { label: 'String', value: '' },
        }),
      },
      {
        type: 'propertyPath',
        label: 'Property Path',
        keywords: ['property', 'transform', 'opacity', 'position', 'scale', 'rotation', 'matchname'],
        factory: (pos) => ({
          id: uid('prop'),
          type: 'propertyPath',
          position: pos,
          data: {
            preset: 'opacity',
            path: 'ADBE Transform Group/ADBE Opacity',
          },
        }),
      },
    ],
  },
  {
    category: 'Math',
    items: [
      {
        type: 'math',
        label: 'Math',
        keywords: ['add', 'subtract', 'multiply', 'divide', 'modulo', 'arithmetic'],
        factory: (pos) => ({
          id: uid('math'),
          type: 'math',
          position: pos,
          data: { op: 'add', values: { a: 0, b: 0 } },
        }),
      },
      {
        type: 'compare',
        label: 'Compare',
        keywords: ['equal', 'less', 'greater', 'boolean', 'condition'],
        factory: (pos) => ({
          id: uid('cmp'),
          type: 'compare',
          position: pos,
          data: { op: 'eq', values: { a: 0, b: 0 } },
        }),
      },
    ],
  },
  {
    category: 'Logic',
    items: [
      {
        type: 'if',
        label: 'If',
        keywords: ['branch', 'condition', 'then', 'else'],
        factory: (pos) => ({
          id: uid('if'),
          type: 'if',
          position: pos,
          data: { values: { cond: 'true' } },
        }),
      },
      {
        type: 'select',
        label: 'Select (a ? b : c)',
        keywords: ['ternary', 'pick', 'choose', 'switch', 'value'],
        factory: (pos) => ({
          id: uid('sel'),
          type: 'select',
          position: pos,
          data: { values: { cond: 'true', if_true: 1, if_false: 0 } },
        }),
      },
    ],
  },
  {
    category: 'Loops',
    items: [
      {
        type: 'forEachSelected',
        label: 'For Each Selected Layer',
        keywords: ['loop', 'iterate', 'selection'],
        factory: (pos) => ({
          id: uid('feach'),
          type: 'forEachSelected',
          position: pos,
          data: {},
        }),
      },
    ],
  },
  {
    category: 'Globals',
    items: [
      {
        type: 'getGlobal',
        label: 'Get Global',
        keywords: ['variable', 'read'],
        factory: (pos) => ({
          id: uid('getg'),
          type: 'getGlobal',
          position: pos,
          data: { globalId: null },
        }),
      },
      {
        type: 'setGlobal',
        label: 'Set Global',
        keywords: ['variable', 'assign', 'write'],
        factory: (pos) => ({
          id: uid('setg'),
          type: 'setGlobal',
          position: pos,
          data: { globalId: null, values: {} },
        }),
      },
    ],
  },
  {
  type: 'getProperty',
  label: 'Get Property Value',
  keywords: ['get', 'property', 'value', 'read'],
    factory: (pos) => ({
      id: uid('node'),
      type: 'ebnNode',
      position: pos,
      data: {
        label: 'Get Property Value',
        category: 'data',
        themeColor: '#3498db', // Blue for data
        inputs: [
          { id: 'layer', label: 'Layer', type: 'expr' },
          { id: 'propPath', label: 'Property Path', type: 'text', default: 'ADBE Position' },
        ],
        outputs: [
          { id: 'value', label: 'Value' },
        ],
        values: { propPath: 'ADBE Position' },
      },
    }),
  },
  {
  type: 'setLocalVar',
  label: 'Set Local Variable',
  keywords: ['set', 'variable', 'var', 'store'],
    factory: (pos) => ({
      id: uid('node'),
      type: 'ebnNode',
      position: pos,
      data: {
        label: 'Set Local Variable',
        category: 'action',
        themeColor: '#e67e22', // Orange for actions
        inputs: [
          { id: 'exec_in', label: 'Execution', type: 'exec' },
          { id: 'varName', label: 'Var Name', type: 'text', default: 'myVar' },
          { id: 'value', label: 'Value', type: 'expr' },
        ],
        outputs: [
          { id: 'exec_out', label: 'Execution' },
          { id: 'outValue', label: 'Variable' }, // Passes the variable name forward
        ],
        values: { varName: 'myVar', value: '0' },
      },
    }),
  },
  {
  type: 'vector2',
  label: 'Vector 2 Array',
  keywords: ['array', 'vector', 'position', 'scale', '2d'],
    factory: (pos) => ({
      id: uid('node'),
      type: 'ebnNode',
      position: pos,
      data: {
        label: 'Vector 2 Array',
        category: 'data',
        themeColor: '#9b59b6', // Purple for complex data
        inputs: [
          { id: 'x', label: 'X', type: 'number' },
          { id: 'y', label: 'Y', type: 'number' },
        ],
        outputs: [
          { id: 'arrayOut', label: '[X, Y]' },
        ],
        values: { x: 960, y: 540 },
      },
    }),
  },
];

// Flattened list with category attached — handy for search ranking.
export function flattenLibrary() {
  const out = [];
  for (const cat of NODE_LIBRARY) {
    for (const item of cat.items) {
      out.push({ ...item, category: cat.category });
    }
  }
  return out;
}

// Find the first input/output port on a node template that matches a source
// handle being dropped onto empty canvas. Used to auto-wire after pick.
export function findCompatibleHandle(nodeData, role, isExec) {
  // role = 'target' (we need an input) | 'source' (we need an output)
  if (role === 'target') {
    const inputs = nodeData?.inputs || [];
    // reroute has no inputs[] structure but always exposes 'in'
    if (!inputs.length) return 'in';
    if (isExec) return inputs.find((p) => p.type === 'exec')?.id ?? null;
    return inputs.find((p) => p.type !== 'exec')?.id ?? null;
  }
  const outputs = nodeData?.outputs || [];
  if (!outputs.length) return 'out';
  if (isExec) return outputs.find((p) => p.id === 'exec_out')?.id ?? null;
  return outputs.find((p) => p.id !== 'exec_out')?.id ?? null;
}
