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
