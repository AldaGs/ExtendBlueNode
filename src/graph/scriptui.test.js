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

  it('window mode emits new Window; panel mode emits the thisObj guard', () => {
    const win = compileToExtendScript([start('s'), builder('b', 'window')], [eExec('e', 's', 'b')]);
    expect(win).toMatch(/= new Window\(/);
    expect(win).not.toMatch(/instanceof Panel/);

    const panel = compileToExtendScript([start('s'), builder('b', 'panel')], [eExec('e', 's', 'b')]);
    expect(panel).toMatch(/\(this instanceof Panel\) \? this : new Window\(/);
  });
});
