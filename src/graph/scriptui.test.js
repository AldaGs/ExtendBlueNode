import { describe, expect, it } from 'vitest';
import { parseScriptUIElements, scriptUIBuilderOutputs } from './scriptui';

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
});
