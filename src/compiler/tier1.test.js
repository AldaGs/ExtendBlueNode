import { describe, expect, it } from 'vitest';
import { compileToExtendScript } from '../astCompiler';

const exec = { type: 'exec' };
const start = (id = 's') => ({
  id, type: 'ebnNode', position: { x: 0, y: 0 },
  data: { label: 'Start', inputs: [], outputs: [{ id: 'exec_out', label: 'Execution' }] },
});
const eExec = (id, s, t) => ({ id, source: s, sourceHandle: 'exec_out', target: t, targetHandle: 'exec_in' });
const eData = (id, s, sh, t, th) => ({ id, source: s, sourceHandle: sh, target: t, targetHandle: th });

// A simple exec sink that reads a `value` input so we can observe expressions.
function setLocal(id, label = 'Set Local Variable') {
  return {
    id, type: 'ebnNode', position: { x: 0, y: 0 },
    data: {
      label,
      variableName: 'out',
      inputs: [
        { id: 'exec_in', label: 'Execution', ...exec },
        { id: 'value', label: 'Value', type: 'expr' },
      ],
      outputs: [{ id: 'exec_out', label: 'Execution' }, { id: 'value', label: 'Value' }],
      values: {},
    },
  };
}

const dataNode = (id, label, inputs, outputs, values = {}) => ({
  id, type: 'ebnNode', position: { x: 0, y: 0 },
  data: { label, inputs, outputs, values },
});

describe('Tier-1 nodes', () => {
  it('For Each (Array) emits an indexed loop exposing item + index', () => {
    const arr = dataNode('a', 'New Array', [], [{ id: 'array', label: 'Array' }]);
    const fe = dataNode('fe', 'For Each (Array)',
      [{ id: 'exec_in', label: 'Execution', ...exec }, { id: 'array', label: 'Array', type: 'expr' }],
      [
        { id: 'exec_body', label: 'Body', ...exec },
        { id: 'item', label: 'Item' },
        { id: 'index', label: 'Index' },
        { id: 'exec_done', label: 'Done', ...exec },
      ]);
    const sink = setLocal('sink');
    const out = compileToExtendScript(
      [start('s'), arr, fe, sink],
      [
        eExec('e1', 's', 'fe'),
        eData('da', 'a', 'array', 'fe', 'array'),
        { id: 'eb', source: 'fe', sourceHandle: 'exec_body', target: 'sink', targetHandle: 'exec_in' },
        eData('di', 'fe', 'item', 'sink', 'value'),
      ],
    );
    expect(out).toMatch(/var \w+_arr = \[\];/);
    expect(out).toMatch(/for \(var \w+_i = 0; \w+_i < \w+_arr\.length; \w+_i\+\+\)/);
    expect(out).toMatch(/var \w+_item = \w+_arr\[\w+_i\];/);
    expect(out).toMatch(/out = \w+_item;/);
  });

  it('Boolean / And / Or / Not compile to JS operators', () => {
    const b1 = dataNode('b1', 'Boolean', [{ id: 'value', type: 'boolean' }], [{ id: 'value' }], { value: true });
    const b2 = dataNode('b2', 'Boolean', [{ id: 'value', type: 'boolean' }], [{ id: 'value' }], { value: false });
    const and = dataNode('and', 'And', [{ id: 'a', type: 'expr' }, { id: 'b', type: 'expr' }], [{ id: 'result' }]);
    const not = dataNode('not', 'Not', [{ id: 'a', type: 'expr' }], [{ id: 'result' }]);
    const sink = setLocal('sink');
    const out = compileToExtendScript(
      [start('s'), b1, b2, and, not, sink],
      [
        eExec('e1', 's', 'sink'),
        eData('d1', 'b1', 'value', 'and', 'a'),
        eData('d2', 'b2', 'value', 'and', 'b'),
        eData('d3', 'and', 'result', 'not', 'a'),
        eData('d4', 'not', 'result', 'sink', 'value'),
      ],
    );
    expect(out).toContain('out = (!(true && false));');
  });

  it('To String / Parse Number wrap with String() / parseFloat()', () => {
    const ts = dataNode('ts', 'To String', [{ id: 'value', type: 'expr' }], [{ id: 'result' }], { value: 5 });
    const pn = dataNode('pn', 'Parse Number', [{ id: 'value', type: 'text' }], [{ id: 'result' }], { value: '42' });
    const sinkA = setLocal('sa');
    const sinkB = setLocal('sb');
    const out = compileToExtendScript(
      [start('s'), ts, pn, sinkA, sinkB],
      [
        eExec('e1', 's', 'sa'),
        eExec('e2', 'sa', 'sb'),
        eData('d1', 'ts', 'result', 'sa', 'value'),
        eData('d2', 'pn', 'result', 'sb', 'value'),
      ],
    );
    expect(out).toContain('String(5)');
    expect(out).toContain('parseFloat("42")');
  });
});
