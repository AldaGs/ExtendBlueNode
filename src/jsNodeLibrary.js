import { NODE_THEME } from './graph/initialGraph';
import { createDefaultScriptUITree } from './graph/scriptUITree';

let counter = 0;
function uid(prefix) {
  counter += 1;
  return `${prefix}_${Date.now().toString(36)}_${counter}`;
}

export const JS_NODE_LIBRARY = [
  {
    category: 'Javascript',
    subcategories: [
      {
        category: 'Control Flow',
        items: [
          {
            type: 'forLoop',
            label: 'For Loop',
            keywords: ['loop', 'for', 'repeat', 'iterate'],
            factory: (pos) => ({
              id: uid('for'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'For Loop',
                category: 'logic',
                themeColor: '#a36b1f',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'start', label: 'Start Index', type: 'number', placeholder: '0' },
                  { id: 'end', label: 'End Index (Exclusive)', type: 'number', placeholder: '10' },
                  { id: 'step', label: 'Step', type: 'number', placeholder: '1' },
                ],
                outputs: [
                  { id: 'exec_body', label: 'Loop Body', type: 'exec' },
                  { id: 'index', label: 'Index' },
                  { id: 'exec_done', label: 'Completed', type: 'exec' },
                ],
                values: { start: 0, end: 10, step: 1 },
              },
            }),
          },
          {
            type: 'walkPropertyTree',
            label: 'Walk Property Tree',
            keywords: ['walk', 'recurse', 'tree', 'property', 'contents', 'descend', 'traverse'],
            factory: (pos) => ({
              id: uid('walk'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Walk Property Tree',
                category: 'logic',
                themeColor: '#a36b1f',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'root', label: 'Root Property', type: 'expr' },
                ],
                outputs: [
                  { id: 'exec_body', label: 'Per Property', type: 'exec' },
                  { id: 'property', label: 'Property' },
                  { id: 'exec_done', label: 'Completed', type: 'exec' },
                ],
                values: {},
              },
            }),
          },
          {
            type: 'defineFunction',
            label: 'Define Function',
            keywords: ['function', 'define', 'def', 'declare', 'subroutine', 'recurse'],
            factory: (pos) => ({
              id: uid('fn'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Define Function',
                category: 'logic',
                themeColor: '#7a2b6b',
                inputs: [
                  { id: 'functionName', label: 'Name', type: 'text', placeholder: 'myFunc' },
                  { id: 'params', label: 'Params (comma-sep)', type: 'text', placeholder: 'a, b' },
                ],
                outputs: [
                  { id: 'exec_body', label: 'Body', type: 'exec' },
                  { id: 'param1', label: 'Param 1' },
                  { id: 'param2', label: 'Param 2' },
                  { id: 'param3', label: 'Param 3' },
                  { id: 'param4', label: 'Param 4' },
                ],
                values: { functionName: 'myFunc', params: '' },
              },
            }),
          },
          {
            type: 'callFunction',
            label: 'Call Function',
            keywords: ['function', 'call', 'invoke', 'run', 'apply'],
            factory: (pos) => ({
              id: uid('call'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Call Function',
                category: 'logic',
                themeColor: '#7a2b6b',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'arg1', label: 'Arg 1', type: 'expr' },
                  { id: 'arg2', label: 'Arg 2', type: 'expr' },
                  { id: 'arg3', label: 'Arg 3', type: 'expr' },
                  { id: 'arg4', label: 'Arg 4', type: 'expr' },
                ],
                outputs: [
                  { id: 'exec_out', label: 'Execution', type: 'exec' },
                  { id: 'result', label: 'Result' },
                ],
                values: { functionName: 'myFunc' },
              },
            }),
          },
          {
            type: 'returnNode',
            label: 'Return',
            keywords: ['return', 'result', 'output', 'yield'],
            factory: (pos) => ({
              id: uid('return'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Return',
                category: 'logic',
                themeColor: '#7a2b6b',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'value', label: 'Value', type: 'expr' },
                ],
                outputs: [],
                values: { value: '' },
              },
            }),
          },
          {
            type: 'whileLoop',
            label: 'While Loop',
            keywords: ['loop', 'while', 'repeat', 'condition'],
            factory: (pos) => ({
              id: uid('while'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'While Loop',
                category: 'logic',
                themeColor: '#a36b1f',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'cond', label: 'Condition', type: 'expr', placeholder: 'true' },
                ],
                outputs: [
                  { id: 'exec_body', label: 'Loop Body', type: 'exec' },
                  { id: 'exec_done', label: 'Completed', type: 'exec' },
                ],
                values: { cond: 'true' },
              },
            }),
          },
          {
            type: 'switchCase',
            label: 'Switch Statement',
            keywords: ['switch', 'case', 'condition', 'logic'],
            factory: (pos) => ({
              id: uid('switch'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Switch Statement',
                category: 'logic',
                themeColor: '#a36b1f',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'value', label: 'Value to Match', type: 'expr' },
                  { id: 'case1_val', label: 'Case 1 Value', type: 'expr' },
                  { id: 'case2_val', label: 'Case 2 Value', type: 'expr' },
                  { id: 'case3_val', label: 'Case 3 Value', type: 'expr' },
                ],
                outputs: [
                  { id: 'exec_case1', label: 'Case 1 Body', type: 'exec' },
                  { id: 'exec_case2', label: 'Case 2 Body', type: 'exec' },
                  { id: 'exec_case3', label: 'Case 3 Body', type: 'exec' },
                  { id: 'exec_default', label: 'Default Body', type: 'exec' },
                  { id: 'exec_done', label: 'Completed', type: 'exec' },
                ],
                values: {},
              },
            }),
          },
          {
            type: 'forEachArray',
            label: 'For Each (Array)',
            keywords: ['loop', 'foreach', 'iterate', 'array', 'list'],
            factory: (pos) => ({
              id: uid('feach'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'For Each (Array)',
                category: 'logic',
                themeColor: '#a36b1f',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'array', label: 'Array', type: 'expr' },
                ],
                outputs: [
                  { id: 'exec_body', label: 'Loop Body', type: 'exec' },
                  { id: 'item', label: 'Item' },
                  { id: 'index', label: 'Index' },
                  { id: 'exec_done', label: 'Completed', type: 'exec' },
                ],
                values: {},
              },
            }),
          },
        ]
      },
      {
        category: 'Array',
        items: [
          {
            type: 'newArray',
            label: 'New Array',
            keywords: ['array', 'list', 'create', '[]'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'New Array',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [],
                outputs: [{ id: 'array', label: 'Array' }],
                values: {},
              },
            }),
          },
          {
            type: 'arrayPush',
            label: 'Array Push',
            keywords: ['array', 'push', 'add', 'append', 'insert'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Array Push',
                category: 'action',
                themeColor: '#2b5c7a',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'array', label: 'Array', type: 'expr' },
                  { id: 'value', label: 'Value', type: 'expr' },
                ],
                outputs: [
                  { id: 'exec_out', label: 'Execution' },
                  { id: 'length', label: 'New Length' },
                ],
                values: {},
              },
            }),
          },
          {
            type: 'arrayLength',
            label: 'Array Length',
            keywords: ['array', 'length', 'count', 'size'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Array Length',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [{ id: 'array', label: 'Array', type: 'expr' }],
                outputs: [{ id: 'length', label: 'Length' }],
                values: {},
              },
            }),
          },
          {
            type: 'arrayGet',
            label: 'Array Get Element',
            keywords: ['array', 'get', 'index', 'read', 'element'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Array Get Element',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [
                  { id: 'array', label: 'Array', type: 'expr' },
                  { id: 'index', label: 'Index', type: 'number', placeholder: '0' },
                ],
                outputs: [{ id: 'value', label: 'Value' }],
                values: { index: 0 },
              },
            }),
          },
        ],
      },
      {
        category: 'Math',
        items: [
          {
            type: 'mathFunction',
            label: 'Math Function',
            keywords: ['math', 'floor', 'ceil', 'round', 'abs', 'min', 'max'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Math Function',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [
                  { id: 'a', label: 'A', type: 'number' },
                  { id: 'b', label: 'B (Optional)', type: 'number' },
                ],
                outputs: [{ id: 'result', label: 'Result' }],
                values: { func: 'round' }, // Will need a dropdown in the UI if possible, or just default to round
              },
            }),
          },
          {
            type: 'mathRandom',
            label: 'Math Random',
            keywords: ['math', 'random', 'rng', 'number'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Math Random',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [],
                outputs: [{ id: 'result', label: 'Result [0-1)' }],
                values: {},
              },
            }),
          },
          {
            type: 'randomInteger',
            label: 'Random Integer',
            keywords: ['math', 'random', 'integer', 'int', 'range', 'rng'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Random Integer',
                category: 'data',
                themeColor: '#3a6b54',
                // Inclusive [min, max].
                inputs: [
                  { id: 'min', label: 'Min', type: 'number', placeholder: '0' },
                  { id: 'max', label: 'Max', type: 'number', placeholder: '100' },
                ],
                outputs: [{ id: 'result', label: 'Result' }],
                values: { min: 0, max: 100 },
              },
            }),
          },
        ],
      },
      {
        category: 'Logic',
        items: [
          {
            type: 'boolean',
            label: 'Boolean',
            keywords: ['bool', 'true', 'false', 'flag', 'toggle'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Boolean',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [{ id: 'value', label: 'Value', type: 'boolean' }],
                outputs: [{ id: 'value', label: 'Bool' }],
                values: { value: true },
              },
            }),
          },
          {
            type: 'logicAnd',
            label: 'And',
            keywords: ['logic', 'and', '&&', 'both', 'boolean'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'And',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [
                  { id: 'a', label: 'A', type: 'expr' },
                  { id: 'b', label: 'B', type: 'expr' },
                ],
                outputs: [{ id: 'result', label: 'Result' }],
                values: {},
              },
            }),
          },
          {
            type: 'logicOr',
            label: 'Or',
            keywords: ['logic', 'or', '||', 'either', 'boolean'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Or',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [
                  { id: 'a', label: 'A', type: 'expr' },
                  { id: 'b', label: 'B', type: 'expr' },
                ],
                outputs: [{ id: 'result', label: 'Result' }],
                values: {},
              },
            }),
          },
          {
            type: 'logicNot',
            label: 'Not',
            keywords: ['logic', 'not', '!', 'invert', 'negate', 'boolean'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Not',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [{ id: 'a', label: 'A', type: 'expr' }],
                outputs: [{ id: 'result', label: 'Result' }],
                values: {},
              },
            }),
          },
          {
            type: 'toString',
            label: 'To String',
            keywords: ['convert', 'string', 'cast', 'tostring', 'text'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'To String',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [{ id: 'value', label: 'Value', type: 'expr' }],
                outputs: [{ id: 'result', label: 'Result' }],
                values: {},
              },
            }),
          },
          {
            type: 'parseNumber',
            label: 'Parse Number',
            keywords: ['convert', 'number', 'parse', 'parsefloat', 'parseint', 'cast'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Parse Number',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [{ id: 'value', label: 'Value', type: 'text' }],
                outputs: [{ id: 'result', label: 'Result' }],
                values: {},
              },
            }),
          },
        ],
      },
      {
        category: 'String',
        items: [
          {
            type: 'stringSplit',
            label: 'String Split',
            keywords: ['string', 'split', 'tokenize', 'array'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'String Split',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [
                  { id: 'string', label: 'String', type: 'text' },
                  { id: 'separator', label: 'Separator', type: 'text', placeholder: ',' },
                ],
                outputs: [{ id: 'array', label: 'Array' }],
                values: { separator: ',' },
              },
            }),
          },
          {
            type: 'stringReplace',
            label: 'String Replace',
            keywords: ['string', 'replace', 'find', 'swap'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'String Replace',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [
                  { id: 'string', label: 'String', type: 'text' },
                  { id: 'find', label: 'Find', type: 'text' },
                  { id: 'replace', label: 'Replace', type: 'text' },
                ],
                outputs: [{ id: 'result', label: 'Result' }],
                values: { find: '', replace: '' },
              },
            }),
          },
          {
            type: 'stringLength',
            label: 'String Length',
            keywords: ['string', 'length', 'count', 'size'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'String Length',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [{ id: 'string', label: 'String', type: 'text' }],
                outputs: [{ id: 'length', label: 'Length' }],
                values: {},
              },
            }),
          },
          {
            type: 'concatenate',
            label: 'Concatenate',
            keywords: ['string', 'concat', 'join', 'append', 'combine', 'name'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Concatenate',
                category: 'data',
                themeColor: '#3a6b54',
                // Numbers auto-coerce to strings under "+", so this doubles
                // as a "prefix + number" name builder.
                inputs: [
                  { id: 'a', label: 'A', type: 'text' },
                  { id: 'b', label: 'B', type: 'text' },
                ],
                outputs: [{ id: 'result', label: 'Result' }],
                values: { a: '', b: '' },
              },
            }),
          },
        ]
      },
      {
        category: 'Object',
        items: [
          {
            type: 'objectBuilder',
            label: 'Object Builder',
            keywords: ['object', 'build', 'create', 'json', 'data'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Object Builder',
                category: 'data',
                themeColor: '#3a6b54',
                // Start with an empty object (no inputs). Users add them via Properties Panel.
                inputs: [],
                outputs: [{ id: 'object', label: 'Object' }],
                values: {},
              },
            }),
          },
          {
            type: 'newObject',
            label: 'New Object',
            keywords: ['object', 'dict', 'map', 'create', '{}'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'New Object',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [],
                outputs: [{ id: 'object', label: 'Object' }],
                values: {},
              },
            }),
          },
          {
            type: 'objectGet',
            label: 'Object Get Key',
            keywords: ['object', 'get', 'key', 'read', 'property'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Object Get Key',
                category: 'data',
                themeColor: '#3a6b54',
                inputs: [
                  { id: 'object', label: 'Object', type: 'expr' },
                  { id: 'key', label: 'Key (String)', type: 'text' },
                ],
                outputs: [{ id: 'value', label: 'Value' }],
                values: { key: '' },
              },
            }),
          },
          {
            type: 'objectSet',
            label: 'Object Set Key',
            keywords: ['object', 'set', 'key', 'write', 'property'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Object Set Key',
                category: 'action',
                themeColor: '#2b5c7a',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'object', label: 'Object', type: 'expr' },
                  { id: 'key', label: 'Key (String)', type: 'text' },
                  { id: 'value', label: 'Value', type: 'expr' },
                ],
                outputs: [{ id: 'exec_out', label: 'Execution' }],
                values: { key: '' },
              },
            }),
          },
        ]
      },
      {
        category: 'File I/O',
        items: [
          {
            type: 'saveJson',
            label: 'Save JSON',
            keywords: ['file', 'save', 'json', 'write', 'export'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Save JSON',
                category: 'action',
                themeColor: '#2b5c7a',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'payload', label: 'Payload', type: 'expr' },
                  { id: 'file_name', label: 'File Name', type: 'text', placeholder: 'settings.json' },
                ],
                outputs: [
                  { id: 'exec_out', label: 'Execution' },
                ],
                values: { directory_mode: 'Auto' },
              },
            }),
          },
          {
            type: 'loadJson',
            label: 'Load JSON',
            keywords: ['file', 'load', 'json', 'read', 'import'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Load JSON',
                category: 'action',
                themeColor: '#2b5c7a',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'file_name', label: 'File Name', type: 'text', placeholder: 'settings.json' },
                ],
                outputs: [
                  { id: 'exec_out', label: 'Execution' },
                  { id: 'payload', label: 'Payload' },
                ],
                values: { directory_mode: 'Auto' },
              },
            }),
          },
        ]
      },
      {
        category: 'ScriptUI',
        items: [
          {
            type: 'scriptUIBuilder',
            label: 'ScriptUI Builder',
            keywords: ['scriptui', 'ui', 'window', 'panel', 'dialog', 'layout', 'resource', 'string'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'ScriptUI Builder',
                category: 'action',
                themeColor: '#ff1493', // Deep Pink
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                ],
                outputs: [
                  { id: 'exec_out', label: 'Execution' },
                  { id: 'window_obj', label: 'Window Object' },
                ],
                values: {
                  // Tree is the source of truth; root type owns window/panel
                  // mode, so ui_mode is no longer stored.
                  scriptUITree: createDefaultScriptUITree(),
                },
              },
            }),
          },
          {
            type: 'uiEventListener',
            label: 'UI Event Listener',
            keywords: ['scriptui', 'ui', 'event', 'listen', 'click', 'change'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'UI Event Listener',
                category: 'action',
                themeColor: '#ff1493',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'target', label: 'Target Element', type: 'expr' },
                ],
                outputs: [
                  { id: 'exec_out', label: 'Execution' },
                  { id: 'exec_callback', label: 'On Event', type: 'exec' },
                ],
                values: {
                  event_type: 'onClick'
                },
              },
            }),
          },
          {
            type: 'showWindow',
            label: 'Show Window',
            keywords: ['scriptui', 'ui', 'show', 'display', 'dialog'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Show Window',
                category: 'action',
                themeColor: '#ff1493',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                  { id: 'window_obj', label: 'Window Object', type: 'expr' },
                ],
                outputs: [
                  { id: 'exec_out', label: 'Execution' },
                ],
                values: {},
              },
            }),
          },
          {
            type: 'customUICode',
            label: 'Custom UI Code',
            keywords: ['scriptui', 'ui', 'custom', 'code', 'javascript', 'js'],
            factory: (pos) => ({
              id: uid('node'),
              type: 'ebnNode',
              position: pos,
              data: {
                label: 'Custom UI Code',
                category: 'action',
                themeColor: '#ff1493',
                inputs: [
                  { id: 'exec_in', label: 'Execution', type: 'exec' },
                ],
                outputs: [
                  { id: 'exec_out', label: 'Execution' },
                ],
                values: {
                  scriptUI_string: '// Write custom UI ExtendScript logic here\n'
                },
              },
            }),
          },
        ]
      }
    ]
  }
];
