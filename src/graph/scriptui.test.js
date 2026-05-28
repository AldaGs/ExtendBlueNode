import { describe, expect, it } from 'vitest';
import { parseScriptUIElements, scriptUIBuilderOutputs, scriptUIElementNames } from './scriptui';
import { compileToExtendScript } from '../astCompiler';
import {
  serializeTreeToResourceString,
  scriptUITreeNames,
  rootTypeToMode,
  parseResourceStringToTree,
  SAMPLE_SCRIPTUI_TREE,
} from './scriptUITree';

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

  it('builds builder outputs with the two fixed pins first (legacy string)', () => {
    const outs = scriptUIBuilderOutputs('dialog { ok: Button {} }');
    expect(outs.map((o) => o.id)).toEqual(['exec_out', 'window_obj', 'ui_ok']);
  });

  it('builds builder outputs from a values object (tree-first)', () => {
    const outs = scriptUIBuilderOutputs({ scriptUITree: SAMPLE_SCRIPTUI_TREE });
    expect(outs.map((o) => o.id)).toEqual([
      'exec_out', 'window_obj', 'ui_st_heading', 'ui_btn_ok',
    ]);
  });

  it('falls back to the legacy string when no tree is present', () => {
    const outs = scriptUIBuilderOutputs({ scriptUI_string: 'dialog { ok: Button {} }' });
    expect(outs.map((o) => o.id)).toEqual(['exec_out', 'window_obj', 'ui_ok']);
  });
});

describe('scriptui tree model', () => {
  it('walks the tree for ordered named elements, skipping the root', () => {
    expect(scriptUITreeNames(SAMPLE_SCRIPTUI_TREE)).toEqual(['st_heading', 'btn_ok']);
    expect(scriptUIElementNames({ scriptUITree: SAMPLE_SCRIPTUI_TREE }))
      .toEqual(['st_heading', 'btn_ok']);
  });

  it('serializes a tree into a valid resource string', () => {
    const rs = serializeTreeToResourceString(SAMPLE_SCRIPTUI_TREE);
    // Root keyword is lowercase; named elements keep `name: Type {` form.
    expect(rs.startsWith('window {')).toBe(true);
    expect(rs).toContain('st_heading: StaticText {');
    expect(rs).toContain('btn_ok: Button {');
    expect(rs).toContain('text: "Choose an option:"');
    expect(rs).toContain('alignChildren: ["fill", "top"]');
    expect(rs).toContain('margins: 16');
    // The unnamed Group gets a synthetic name so the string is valid, but
    // pins come from the tree (scriptUITreeNames), never from re-parsing.
    expect(rs).toContain('_group1: Group {');
  });

  it('synthesizes names for unnamed nested elements so the string stays valid', () => {
    const tree = {
      id: 'r', type: 'Window', name: '', props: {},
      children: [{ id: 'g', type: 'Group', name: '', props: {}, children: [] }],
    };
    const rs = serializeTreeToResourceString(tree);
    expect(rs).toMatch(/_group1: Group \{\}/);
    // Synthetic names are NOT exposed as pins.
    expect(scriptUITreeNames(tree)).toEqual([]);
  });

  it('maps root type to legacy window/panel mode', () => {
    expect(rootTypeToMode('Window')).toBe('window');
    expect(rootTypeToMode('Dialog')).toBe('window');
    expect(rootTypeToMode('Palette')).toBe('panel');
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

  it('compiles a tree-backed builder: serializes the tree and derives mode from root type', () => {
    const treeBuilder = (id, rootType) => ({
      id, type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'ScriptUI Builder',
        inputs: [{ id: 'exec_in', label: 'Execution', ...exec }],
        outputs: [{ id: 'exec_out', label: 'Execution' }, { id: 'window_obj', label: 'Window Object' }],
        values: {
          scriptUITree: {
            id: 'r', type: rootType, name: '', props: { text: 'Hi' },
            children: [{ id: 'b1', type: 'Button', name: 'ok', props: { text: 'Go' }, children: [] }],
          },
        },
      },
    });

    const win = compileToExtendScript([start('s'), treeBuilder('b', 'Window')], [eExec('e', 's', 'b')]);
    expect(win).toMatch(/= new Window\(/);
    expect(win).toContain('ok: Button {');     // serialized from the tree
    expect(win).toContain('text: \\"Go\\"');   // (escaped inside the JS string literal)

    // Palette root => dockable-panel guard, with no ui_mode value present.
    const pal = compileToExtendScript([start('s'), treeBuilder('b', 'Palette')], [eExec('e', 's', 'b')]);
    expect(pal).toMatch(/\(this instanceof Panel\) \? this : new Window\(/);
  });
});

describe('parseResourceStringToTree (legacy import)', () => {
  it('parses root type, props, and nested named elements', () => {
    const tree = parseResourceStringToTree(
      'palette { text: "My Panel", orientation: "column", grp: Group { st: StaticText { text: "Hello" }, btn: Button { text: "OK" } } }',
    );
    expect(tree.type).toBe('Palette');
    expect(tree.props.text).toBe('My Panel');
    expect(tree.props.orientation).toBe('column');
    // grp is an unnamed-pin container with two named children.
    expect(tree.children).toHaveLength(1);
    const grp = tree.children[0];
    expect(grp.type).toBe('Group');
    expect(grp.name).toBe('grp');
    expect(scriptUITreeNames(tree)).toEqual(['grp', 'st', 'btn']);
    expect(grp.children[1].props.text).toBe('OK');
  });

  it('round-trips through the serializer (author names + types preserved)', () => {
    const original = serializeTreeToResourceString(SAMPLE_SCRIPTUI_TREE);
    const reparsed = parseResourceStringToTree(original);
    expect(reparsed.type).toBe(SAMPLE_SCRIPTUI_TREE.type);
    // Author-supplied names survive the round-trip (synthetic names the
    // serializer adds for unnamed containers also reappear, which is fine).
    const names = scriptUITreeNames(reparsed);
    for (const n of scriptUITreeNames(SAMPLE_SCRIPTUI_TREE)) {
      expect(names).toContain(n);
    }
  });

  it('parses array props like alignChildren', () => {
    const tree = parseResourceStringToTree('window { alignChildren: ["fill", "top"], margins: 16 }');
    expect(tree.type).toBe('Window');
    expect(tree.props.alignChildren).toEqual(['fill', 'top']);
    expect(tree.props.margins).toBe(16);
  });

  it('returns null for empty/garbage input', () => {
    expect(parseResourceStringToTree('')).toBeNull();
    expect(parseResourceStringToTree('not a resource string')).toBeNull();
  });
});
