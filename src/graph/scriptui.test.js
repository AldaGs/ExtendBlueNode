import { describe, expect, it } from 'vitest';
import { parseScriptUIElements, scriptUIBuilderOutputs } from './scriptui';
import { compileToExtendScript } from '../astCompiler';

const exec = { type: 'exec' };
const builder = (id, mode) => ({
  id, type: 'ebnNode', position: { x: 0, y: 0 },
  data: {
    label: 'ScriptUI Builder',
    inputs: [{ id: 'exec_in', label: 'Execution', ...exec }],
    outputs: [{ id: 'exec_out', label: 'Execution' }, { id: 'window_obj', label: 'Window Object' }],
    values: { scriptUI_string: 'palette { ok: Button {} }', ui_mode: mode },
  },
});
const start = (id) => ({ id, type: 'ebnNode', position: { x: 0, y: 0 }, data: { label: 'Start', inputs: [], outputs: [{ id: 'exec_out', label: 'Execution' }] } });
const eExec = (id, s, t) => ({ id, source: s, sourceHandle: 'exec_out', target: t, targetHandle: 'exec_in' });

describe('scriptui resource parsing', () => {
  it('extracts named elements of any control type', () => {
    const rs = 'dialog { text:"x", btn: Button { text:"Go" }, sl: Slider {}, grp: Group { st: StaticText {} } }';
    expect(parseScriptUIElements(rs)).toEqual(['btn', 'sl', 'grp', 'st']);
  });

  it('ignores the dialog/palette/window keyword and dedupes', () => {
    const rs = 'palette { a: Button {} , a: Button {} }';
    expect(parseScriptUIElements(rs)).toEqual(['a']);
  });

  it('returns [] for empty/invalid input', () => {
    expect(parseScriptUIElements('')).toEqual([]);
    expect(parseScriptUIElements(null)).toEqual([]);
  });

  it('builds builder outputs with the two fixed pins first', () => {
    const outs = scriptUIBuilderOutputs('dialog { ok: Button {} }');
    expect(outs.map((o) => o.id)).toEqual(['exec_out', 'window_obj', 'ui_ok']);
  });

  it('UI Event Listener attaches an indented callback and continues the chain', () => {
    const b = builder('b', 'window');
    const listener = {
      id: 'l', type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'UI Event Listener',
        inputs: [
          { id: 'exec_in', label: 'Execution', ...exec },
          { id: 'target', label: 'Target', type: 'expr' },
        ],
        outputs: [
          { id: 'exec_out', label: 'Execution' },
          { id: 'exec_callback', label: 'On Event', ...exec },
        ],
        values: { event_type: 'onClick' },
      },
    };
    const show = {
      id: 'w', type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'Show Window',
        inputs: [
          { id: 'exec_in', label: 'Execution', ...exec },
          { id: 'window_obj', label: 'Window Object', type: 'expr' },
        ],
        outputs: [{ id: 'exec_out', label: 'Execution' }],
        values: {},
      },
    };
    const out = compileToExtendScript(
      [start('s'), b, listener, show],
      [
        eExec('e1', 's', 'b'),
        eExec('e2', 'b', 'l'),       // builder -> listener (attach)
        eExec('e3', 'l', 'w'),       // listener -> show (after attach)
        { id: 'dw', source: 'b', sourceHandle: 'window_obj', target: 'w', targetHandle: 'window_obj' },
        { id: 'dt', source: 'b', sourceHandle: 'ui_ok', target: 'l', targetHandle: 'target' },
      ],
    );
    expect(out).toMatch(/\.onClick = function \(\) \{/);
    expect(out).toMatch(/instanceof Window\) \w+_Window\.show\(\);/);
    expect(out).not.toMatch(/Warning: 'Show Window' runs before/);
  });

  it('warns when Show Window runs before a UI Event Listener', () => {
    const b = builder('b', 'window');
    const listener = {
      id: 'l', type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'UI Event Listener',
        inputs: [{ id: 'exec_in', ...exec }, { id: 'target', type: 'expr' }],
        outputs: [{ id: 'exec_out' }, { id: 'exec_callback', ...exec }],
        values: { event_type: 'onClick' },
      },
    };
    const show = {
      id: 'w', type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'Show Window',
        inputs: [{ id: 'exec_in', ...exec }, { id: 'window_obj', type: 'expr' }],
        outputs: [{ id: 'exec_out' }],
        values: {},
      },
    };
    const out = compileToExtendScript(
      [start('s'), b, show, listener],
      [
        eExec('e1', 's', 'b'),
        eExec('e2', 'b', 'w'),  // show BEFORE listener — wrong order
        eExec('e3', 'w', 'l'),
        { id: 'dt', source: 'b', sourceHandle: 'ui_ok', target: 'l', targetHandle: 'target' },
      ],
    );
    expect(out).toMatch(/Warning: 'Show Window' runs before/);
  });

  it('window mode emits new Window; panel mode emits the thisObj guard', () => {
    const win = compileToExtendScript([start('s'), builder('b', 'window')], [eExec('e', 's', 'b')]);
    expect(win).toMatch(/= new Window\(/);
    expect(win).not.toMatch(/instanceof Panel/);

    const panel = compileToExtendScript([start('s'), builder('b', 'panel')], [eExec('e', 's', 'b')]);
    expect(panel).toMatch(/\(this instanceof Panel\) \? this : new Window\(/);
  });
});
