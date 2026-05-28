// Registry of every node the user can drop on the canvas.
// One source of truth — used by the Add-Node menu and any future palette.
//
// Each item declares:
//   type      : nodeTypes key registered in FlowCanvas
//   label     : display name in the menu
//   keywords  : optional extra search terms
//   factory(flowPos) -> a React Flow node payload, ready for setNodes

import { NODE_THEME } from './graph/initialGraph';
import { AE_NODE_LIBRARY } from './generated/aeNodeLibrary';
import { JS_NODE_LIBRARY } from './jsNodeLibrary';

let counter = 0;
function uid(prefix) {
  counter += 1;
  return `${prefix}_${Date.now().toString(36)}_${counter}`;
}

const _BASE_NODE_LIBRARY = [
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
      {
        type: 'start',
        label: 'Start',
        keywords: ['entry', 'begin', 'on run', 'main'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Start',
            category: 'flow',
            themeColor: NODE_THEME.selector,
            inputs: [],
            outputs: [{ id: 'exec_out', label: 'Execution' }],
          },
        }),
      },
      {
        type: 'debug',
        label: 'Debug',
        keywords: ['log', 'inspect', 'print', 'alert', 'console'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Debug',
            category: 'flow',
            themeColor: NODE_THEME.action,
            inputs: [
              { id: 'exec_in', label: 'Execution', type: 'exec' },
              { id: 'value',   label: 'Value',     type: 'expr'  },
              { id: 'label',   label: 'Label',     type: 'text', placeholder: 'tag (optional)' },
            ],
            outputs: [
              { id: 'exec_out', label: 'Execution' },
              { id: 'value',    label: 'Value' },
            ],
            values: { label: '' },
          },
        }),
      },
      {
        type: 'getApplication',
        label: 'Get Application',
        keywords: ['app', 'application', 'global'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Get Application',
            category: 'data',
            themeColor: NODE_THEME.selector,
            inputs: [],
            outputs: [{ id: 'value', label: 'app' }],
          },
        }),
      },
      {
        type: 'getProjectItems',
        label: 'Get Project Items',
        keywords: ['project', 'items', 'app', 'itemcollection', 'addComp'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Get Project Items',
            category: 'data',
            themeColor: NODE_THEME.selector,
            inputs: [],
            // Shorthand for Get Application → Application Get project →
            // Project Get items. Wire this straight into addComp's
            // "ItemCollection" input.
            outputs: [{ id: 'value', label: 'items' }],
          },
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
        type: 'colorPicker',
        label: 'Color Picker',
        keywords: ['color', 'rgb', 'hex', 'hsv', 'palette'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'Color Picker',
            category: 'data',
            themeColor: '#e84393',
            inputs: [
              { id: 'color', label: 'Color', type: 'color' },
            ],
            outputs: [
              { id: 'hex', label: 'HEX' },
              { id: 'rgb', label: 'RGB [0-1]' },
              { id: 'rgba', label: 'RGBA [0-1]' },
              { id: 'rgb255', label: 'RGB [0-255]' },
            ],
            values: { color: '#ff0000' },
          },
        }),
      },
      {
        type: 'newFile',
        label: 'New File',
        keywords: ['file', 'path', 'io'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'New File',
            category: 'data',
            themeColor: '#e67e22',
            inputs: [
              { id: 'path', label: 'Path', type: 'text', placeholder: '~/Desktop/render.png' },
            ],
            outputs: [
              { id: 'file', label: 'File' },
            ],
            values: { path: '' },
          },
        }),
      },
      {
        type: 'newFolder',
        label: 'New Folder',
        keywords: ['folder', 'path', 'io', 'directory'],
        factory: (pos) => ({
          id: uid('node'),
          type: 'ebnNode',
          position: pos,
          data: {
            label: 'New Folder',
            category: 'data',
            themeColor: '#e67e22',
            inputs: [
              { id: 'path', label: 'Path', type: 'text', placeholder: '~/Desktop/renders' },
            ],
            outputs: [
              { id: 'folder', label: 'Folder' },
            ],
            values: { path: '' },
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

export const NODE_LIBRARY = [
  ..._BASE_NODE_LIBRARY,
  ...JS_NODE_LIBRARY,
  {
    category: 'After Effects DOM',
    subcategories: AE_NODE_LIBRARY
  }
];

// Flattened list with category attached — handy for search ranking.
export function flattenLibrary() {
  const out = [];
  for (const cat of NODE_LIBRARY) {
    if (cat.items) {
      for (const item of cat.items) {
        out.push({ ...item, category: cat.category });
      }
    }
    if (cat.subcategories) {
      for (const sub of cat.subcategories) {
        if (sub.items) {
          for (const item of sub.items) {
            out.push({ ...item, category: `${cat.category} > ${sub.category}` });
          }
        }
      }
    }
  }
  return out;
}

// Build a human-readable catalog of every node, including its input/output handles.
// Used to inject the allowed vocabulary into the Copilot LLM's system prompt so
// it stops hallucinating node types that don't exist.
export function getNodeCatalogSummary() {
  const lines = [];
  for (const entry of flattenLibrary()) {
    let inputs = [];
    let outputs = [];
    try {
      const sample = entry.factory({ x: 0, y: 0 });
      const data = sample?.data || {};
      inputs = Array.isArray(data.inputs) ? data.inputs.map(p => p.id) : [];
      outputs = Array.isArray(data.outputs) ? data.outputs.map(p => p.id) : [];
    } catch {
      // Some node types (reroute, getGlobal, setGlobal) don't declare inputs/outputs;
      // fall back to an empty handle list rather than crashing the prompt build.
    }
    const inStr = inputs.length ? inputs.join(', ') : '—';
    const outStr = outputs.length ? outputs.join(', ') : '—';
    lines.push(`- "${entry.label}" (Inputs: ${inStr}. Outputs: ${outStr})`);
  }
  return lines.join('\n');
}

// Find a handle to auto-wire to after dropping a node on the pane.
//
// Policy: auto-wire ONLY for handle-less nodes (e.g. reroute) — anything
// with declared input/output ports must be wired explicitly by the user,
// because picking the wrong port silently is more confusing than no wire.
export function findCompatibleHandle(nodeData, role /*, isExec */) {
  if (role === 'target') {
    const inputs = nodeData?.inputs || [];
    return inputs.length ? null : 'in';
  }
  const outputs = nodeData?.outputs || [];
  return outputs.length ? null : 'out';
}
