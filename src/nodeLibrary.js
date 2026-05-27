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
      {
        type: 'getPropertyValue',
        label: 'Get Property Value',
        keywords: ['get', 'property', 'value', 'read'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Get Property Value',
            category: 'data',
            themeColor: '#3a6b54',
            inputs: [
              { id: 'layer',    label: 'Layer',    type: 'expr' },
              { id: 'property', label: 'Property', type: 'text', placeholder: 'ADBE Transform Group/ADBE Position' },
            ],
            outputs: [
              { id: 'value', label: 'Value' },
            ],
            values: { property: 'ADBE Transform Group/ADBE Position' },
          },
        }),
      },
      {
        type: 'splitVec',
        label: 'Split Vector',
        keywords: ['split', 'vector', 'decompose', 'xy', 'components', 'x', 'y'],
        factory: (pos) => ({
          id: uid('svec'),
          type: 'splitVec',
          position: pos,
          data: { values: { vec: '' } },
        }),
      },
      {
        type: 'vector2',
        label: 'Vector 2 Array',
        keywords: ['array', 'vector', 'position', 'scale', '2d', 'xy'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Vector 2 Array',
            category: 'data',
            themeColor: '#9b59b6',
            inputs: [
              { id: 'x', label: 'X', type: 'number' },
              { id: 'y', label: 'Y', type: 'number' },
            ],
            outputs: [
              { id: 'value', label: '[X, Y]' },
            ],
            values: { x: 960, y: 540 },
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
      {
        type: 'vecMath',
        label: 'Vector Math',
        keywords: ['vector', 'array', 'position', 'multiply', 'scale', 'element-wise', 'broadcast'],
        factory: (pos) => ({
          id: uid('vmath'),
          type: 'vecMath',
          position: pos,
          data: { op: 'mul', values: { a: '0', b: '1' } },
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
      {
        type: 'setLocalVar',
        label: 'Set Local Variable',
        keywords: ['set', 'variable', 'var', 'store', 'local', 'let'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Set Local Variable',
            category: 'logic',
            themeColor: '#a36b1f',
            // Variable name lives in data.variableName so it shows up in the
            // Properties panel like every other identifier. The compiler
            // sanitizes it; falls back to a node-id default if blank.
            variableName: '',
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'value',   label: 'Value',     type: 'expr' },
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'value',    label: 'Variable' },
            ],
            values: { value: '0' },
          },
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
];

// Port shapes for specialized node types whose Handles are baked into
// their React components instead of declared in factory data. Kept in
// sync with the components in src/components/*Node.jsx.
const PRIMITIVE_PORT_MAP = {
  integer:         { inputs: [],                                outputs: ['value'] },
  string:          { inputs: [],                                outputs: ['value'] },
  math:            { inputs: ['a', 'b'],                        outputs: ['value'] },
  compare:         { inputs: ['a', 'b'],                        outputs: ['value'] },
  select:          { inputs: ['cond', 'if_true', 'if_false'],   outputs: ['value'] },
  if:              { inputs: ['exec_in', 'cond'],               outputs: ['exec_then', 'exec_else'] },
  vecMath:         { inputs: ['a', 'b'],                        outputs: ['value'] },
  propertyPath:    { inputs: [],                                outputs: ['value'] },
  splitVec:        { inputs: ['vec'],                           outputs: ['x', 'y'] },
  forEachSelected: { inputs: ['exec_in'],                       outputs: ['exec_body', 'layer', 'exec_done'] },
  reroute:         { inputs: ['in'],                            outputs: ['out'] },
  getGlobal:       { inputs: [],                                outputs: ['value'] },
  setGlobal:       { inputs: ['exec_in', 'value'],              outputs: ['exec_out'] },
};

// Renders a markdown-formatted catalog of every spawnable node, derived
// at runtime from NODE_LIBRARY. Fed into the Copilot's system prompt so
// the LLM always sees the exact, current vocabulary — labels, types,
// and port IDs — and cannot invent nodes that don't exist.
export function getNodeCatalogSummary() {
  const lines = [];
  for (const cat of NODE_LIBRARY) {
    lines.push(`\n### ${cat.category}`);
    for (const item of cat.items) {
      // Run the factory once to extract a representative node template.
      let template;
      try {
        template = item.factory({ x: 0, y: 0 });
      } catch {
        continue;
      }
      const data = template.data || {};
      const reactType = template.type;

      // ebnNode variants declare their ports in data; primitives don't.
      let inputs, outputs;
      if (reactType === 'ebnNode') {
        inputs  = (data.inputs  || []).map((p) => p.id);
        outputs = (data.outputs || []).map((p) => p.id);
      } else {
        const ports = PRIMITIVE_PORT_MAP[reactType] || { inputs: [], outputs: [] };
        inputs  = ports.inputs;
        outputs = ports.outputs;
      }

      // ebnNode lookup key is data.label; primitives are matched by React type.
      const identity =
        reactType === 'ebnNode'
          ? `"${data.label}" (type: "ebnNode", data.label: "${data.label}")`
          : `"${item.label}" (type: "${reactType}")`;

      const inStr  = inputs.length  ? inputs.join(', ')  : '(none)';
      const outStr = outputs.length ? outputs.join(', ') : '(none)';
      lines.push(`- ${identity}\n    Inputs: ${inStr}\n    Outputs: ${outStr}`);
    }
  }
  return lines.join('\n');
}

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
