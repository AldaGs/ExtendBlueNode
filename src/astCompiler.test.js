import { describe, expect, it } from 'vitest';
import { compileToExtendScript, compileToIR, compileWithLineMap } from './astCompiler';

/* ----------------------------- factories ----------------------------- */

const exec = { type: 'exec' };

function getActiveComp(id = 'gac', pos = { x: 0, y: 0 }) {
  return {
    id, type: 'ebnNode', position: pos,
    data: {
      label: 'Get Active Comp',
      inputs:  [{ id: 'exec_in', label: 'Execution', ...exec }],
      outputs: [
        { id: 'comp', label: 'Comp' },
        { id: 'exec_out', label: 'Execution' },
      ],
    },
  };
}

function selectLayer(id = 'sel', layerIdVal = 1, pos = { x: 0, y: 0 }) {
  return {
    id, type: 'ebnNode', position: pos,
    data: {
      label: 'Select Layer by ID',
      inputs: [
        { id: 'exec_in',  label: 'Execution', ...exec },
        { id: 'comp',     label: 'Comp',     type: 'text' },
        { id: 'layer_id', label: 'Layer ID', type: 'number' },
      ],
      outputs: [
        { id: 'layer', label: 'Layer' },
        { id: 'exec_out', label: 'Execution' },
      ],
      values: { layer_id: layerIdVal },
    },
  };
}

function setProperty(id = 'set', values = {}, pos = { x: 0, y: 0 }) {
  return {
    id, type: 'ebnNode', position: pos,
    data: {
      label: 'Set Property',
      inputs: [
        { id: 'exec_in',  label: 'Execution', ...exec },
        { id: 'layer',    label: 'Layer',    type: 'text' },
        { id: 'property', label: 'Property', type: 'text' },
        { id: 'value',    label: 'Value',    type: 'number' },
      ],
      outputs: [{ id: 'exec_out', label: 'Execution' }],
      values: { property: 'ADBE Opacity', value: 50, ...values },
    },
  };
}

function integer(id = 'i1', value = 0) {
  return { id, type: 'integer', position: { x: 0, y: 0 }, data: { value } };
}

function execEdge(id, source, target) {
  return {
    id, source, sourceHandle: 'exec_out', target, targetHandle: 'exec_in',
  };
}

function dataEdge(id, source, sourceHandle, target, targetHandle) {
  return { id, source, sourceHandle, target, targetHandle };
}

/* ----------------------------- tests ----------------------------- */

describe('compileToExtendScript', () => {
  it('returns a placeholder when the graph is empty', () => {
    expect(compileToExtendScript([], [])).toMatch(/No nodes/);
  });

  it('wraps in try/beginUndoGroup/endUndoGroup', () => {
    const out = compileToExtendScript([getActiveComp()], []);
    expect(out).toMatch(/try \{/);
    expect(out).toMatch(/app\.beginUndoGroup/);
    expect(out).toMatch(/app\.endUndoGroup/);
    expect(out).toMatch(/} catch \(error\)/);
  });

  it('compileWithLineMap traces each emitted line back to its node', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b', 7);
    const c = setProperty('c');
    const { code, lineMap } = compileWithLineMap(
      [a, b, c],
      [execEdge('e1', 'a', 'b'), execEdge('e2', 'b', 'c')],
    );
    const lines = code.split('\n');
    const giLine = lines.findIndex((l) => /app\.project\.activeItem/.test(l));
    const setLine = lines.findIndex((l) => /\.setValue\(50\)/.test(l));
    expect(giLine).toBeGreaterThan(-1);
    expect(setLine).toBeGreaterThan(-1);
    // lineMap is 1-based; the index+1 line traces to the emitting node.
    expect(lineMap[giLine + 1]).toBe('a');
    expect(lineMap[setLine + 1]).toBe('c');
  });

  it('walks a linear chain and emits each step in order', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b', 7);
    const c = setProperty('c');
    const out = compileToExtendScript(
      [a, b, c],
      [execEdge('e1', 'a', 'b'), execEdge('e2', 'b', 'c')],
    );
    expect(out).toMatch(/var activeComp = app\.project\.activeItem/);
    expect(out).toMatch(/var targetLayer = activeComp\.layerByID\(7\)/);
    expect(out).toMatch(/targetLayer\.property\("ADBE Opacity"\)\.setValue\(50\)/);
  });

  it('follows every outgoing exec branch (DFS)', () => {
    const a = getActiveComp('a');
    const b1 = selectLayer('b1', 1);
    const b2 = selectLayer('b2', 2);
    const c1 = setProperty('c1');
    const c2 = setProperty('c2');
    const out = compileToExtendScript(
      [a, b1, b2, c1, c2],
      [
        execEdge('e1', 'a', 'b1'),
        execEdge('e2', 'a', 'b2'),
        execEdge('e3', 'b1', 'c1'),
        execEdge('e4', 'b2', 'c2'),
      ],
    );
    // Both layerByID calls should appear; neither branch should orphan out.
    expect(out).toMatch(/layerByID\(1\)/);
    expect(out).toMatch(/layerByID\(2\)/);
    expect(out).not.toMatch(/Orphan Nodes/);
  });

  it('hoists every primitive node, wired or not', () => {
    const i = integer('lonely', 42);
    const out = compileToExtendScript([i, getActiveComp('a')], []);
    expect(out).toMatch(/var var_lonely = 42;/);
    expect(out).toMatch(/--- Primitive Nodes ---/);
  });

  it('inlines a wired Integer through Set Property\'s value port', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const i = integer('opa', 25);
    const out = compileToExtendScript(
      [a, b, c, i],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'opa', 'value', 'c', 'value'),
      ],
    );
    expect(out).toMatch(/var var_opa = 25;/);
    expect(out).toMatch(/setValue\(var_opa\)/);
  });

  it('hoists globals at the top of the script', () => {
    const out = compileToExtendScript(
      [getActiveComp('a')],
      [],
      [{ id: 'g1', name: 'myOpacity', type: 'Integer', initialValue: '100' }],
    );
    expect(out).toMatch(/var global_myOpacity = 100;/);
    expect(out.indexOf('global_myOpacity')).toBeLessThan(out.indexOf('activeComp'));
  });

  it('sanitizes invalid variable names', () => {
    const a = getActiveComp('a');
    const i = { ...integer('x', 1), data: { value: 1, variableName: '5 weird name!' } };
    const out = compileToExtendScript([a, i], []);
    // Leading digit gets prefixed with _, special chars become _.
    expect(out).toMatch(/var _5_weird_name_ = 1;/);
  });

  it('reports orphan nodes that do not reach the chain', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const lonely = setProperty('lonely');
    const out = compileToExtendScript(
      [a, b, lonely],
      [execEdge('e1', 'a', 'b')],
    );
    expect(out).toMatch(/Orphan Nodes/);
    expect(out).toMatch(/Set Property \[id=lonely\]/);
  });
});

describe('math / compare / if', () => {
  function math(id, op, values = { a: 0, b: 0 }) {
    return { id, type: 'math', position: { x: 0, y: 0 }, data: { op, values } };
  }
  function compare(id, op, values = { a: 0, b: 0 }) {
    return { id, type: 'compare', position: { x: 0, y: 0 }, data: { op, values } };
  }
  function ifNode(id, condInline = 'true') {
    return { id, type: 'if', position: { x: 0, y: 0 }, data: { values: { cond: condInline } } };
  }

  it('inlines a Math (Add) node into a wired Set Property value', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const m = math('m', 'mul', { a: 10, b: 5 });
    const out = compileToExtendScript(
      [a, b, c, m],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'm', 'value', 'c', 'value'),
      ],
    );
    expect(out).toMatch(/setValue\(\(10 \* 5\)\)/);
  });

  it('chains math nodes into nested expressions', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const m1 = math('m1', 'add', { a: 1, b: 2 });
    const m2 = math('m2', 'mul', { a: 0, b: 4 });
    // m2.a is driven by m1's output
    const out = compileToExtendScript(
      [a, b, c, m1, m2],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'm1', 'value', 'm2', 'a'),
        dataEdge('d2', 'm2', 'value', 'c', 'value'),
      ],
    );
    expect(out).toMatch(/setValue\(\(\(1 \+ 2\) \* 4\)\)/);
  });

  it('Compare emits its operator', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const cmp = compare('cmp', 'gt', { a: 7, b: 3 });
    const out = compileToExtendScript(
      [a, b, c, cmp],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'cmp', 'value', 'c', 'value'),
      ],
    );
    expect(out).toMatch(/setValue\(\(7 > 3\)\)/);
  });

  it('If emits if/else with separate then/else branches', () => {
    const a = getActiveComp('a');
    const iff = ifNode('iff', 'true');
    const t = setProperty('t', { property: 'ADBE Opacity', value: 100 });
    const f = setProperty('f', { property: 'ADBE Opacity', value: 0 });
    const out = compileToExtendScript(
      [a, iff, t, f],
      [
        execEdge('e1', 'a', 'iff'),
        { id: 'et', source: 'iff', sourceHandle: 'exec_then', target: 't', targetHandle: 'exec_in' },
        { id: 'ee', source: 'iff', sourceHandle: 'exec_else', target: 'f', targetHandle: 'exec_in' },
      ],
    );
    expect(out).toMatch(/if \(true\) \{/);
    expect(out).toMatch(/\.setValue\(100\)/);
    expect(out).toMatch(/} else \{/);
    expect(out).toMatch(/\.setValue\(0\)/);
  });
});

describe('select + selectors + for-each', () => {
  function selectNode(id, values = {}) {
    return {
      id, type: 'select', position: { x: 0, y: 0 },
      data: { values: { cond: 'true', if_true: 1, if_false: 0, ...values } },
    };
  }
  function selectLayerByName(id, name) {
    return {
      id, type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'Select Layer by Name',
        inputs: [
          { id: 'exec_in',    type: 'exec' },
          { id: 'layer_name', type: 'text' },
        ],
        outputs: [
          { id: 'layer' },
          { id: 'exec_out' },
        ],
        values: { layer_name: name },
      },
    };
  }
  function selectLayerByIndex(id, idx) {
    return {
      id, type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'Select Layer by Index',
        inputs: [
          { id: 'exec_in',     type: 'exec' },
          { id: 'layer_index', type: 'number' },
        ],
        outputs: [
          { id: 'layer' },
          { id: 'exec_out' },
        ],
        values: { layer_index: idx },
      },
    };
  }
  function forEachSelected(id) {
    return { id, type: 'forEachSelected', position: { x: 0, y: 0 }, data: {} };
  }

  it('Select inlines as a ternary expression', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const s = selectNode('s', { cond: 'true', if_true: 100, if_false: 0 });
    const out = compileToExtendScript(
      [a, b, c, s],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 's', 'value', 'c', 'value'),
      ],
    );
    expect(out).toMatch(/setValue\(\(true \? 100 : 0\)\)/);
  });

  it('Select Layer by Name emits activeComp.layer("name")', () => {
    const a = getActiveComp('a');
    const b = selectLayerByName('b', 'Title');
    const out = compileToExtendScript([a, b], [execEdge('e', 'a', 'b')]);
    expect(out).toMatch(/var targetLayer = activeComp\.layer\("Title"\)/);
  });

  it('Select Layer by Index emits activeComp.layer(<n>)', () => {
    const a = getActiveComp('a');
    const b = selectLayerByIndex('b', 3);
    const out = compileToExtendScript([a, b], [execEdge('e', 'a', 'b')]);
    expect(out).toMatch(/var targetLayer = activeComp\.layer\(3\)/);
  });

  function allSelectedLayers(id) {
    return {
      id, type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'All Selected Layers',
        inputs: [{ id: 'comp', label: 'Comp', type: 'expr', default: 'activeComp' }],
        outputs: [{ id: 'layers', label: 'Layers' }],
      },
    };
  }
  function selectLayersByClass(id, klass) {
    return {
      id, type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'Select Layers by Class',
        inputs: [{ id: 'comp', label: 'Comp', type: 'expr', default: 'activeComp' }],
        outputs: [{ id: 'layers', label: 'Layers' }],
        values: { layer_class: klass },
      },
    };
  }

  it('All Selected Layers resolves to <comp>.selectedLayers', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const sel = allSelectedLayers('sel');
    const out = compileToExtendScript(
      [a, b, c, sel],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'sel', 'layers', 'c', 'value'),
      ],
    );
    expect(out).toMatch(/setValue\(activeComp\.selectedLayers\)/);
  });

  it('Select Layers by Class hoists ebnLayersByClass and filters by whitelisted class', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const sel = selectLayersByClass('sel', 'TextLayer');
    const out = compileToExtendScript(
      [a, b, c, sel],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'sel', 'layers', 'c', 'value'),
      ],
    );
    expect(out).toMatch(/function ebnLayersByClass\(comp, klass\)/);
    expect(out).toMatch(/ebnLayersByClass\(activeComp, TextLayer\)/);
  });

  it('Select Layers by Class rejects a non-whitelisted class, falling back to AVLayer', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const sel = selectLayersByClass('sel', 'app.system.callSystem');
    const out = compileToExtendScript(
      [a, b, c, sel],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'sel', 'layers', 'c', 'value'),
      ],
    );
    expect(out).toMatch(/ebnLayersByClass\(activeComp, AVLayer\)/);
    expect(out).not.toMatch(/callSystem/);
  });

  it('For Each Selected emits a for-loop and exposes loopLayer', () => {
    const a = getActiveComp('a');
    const f = forEachSelected('f');
    const inner = setProperty('inner');
    const out = compileToExtendScript(
      [a, f, inner],
      [
        execEdge('e1', 'a', 'f'),
        // 'exec_body' is the inner branch
        { id: 'eb', source: 'f', sourceHandle: 'exec_body', target: 'inner', targetHandle: 'exec_in' },
        // Set Property's `layer` input wired to the loop's `layer` output
        { id: 'dl', source: 'f', sourceHandle: 'layer', target: 'inner', targetHandle: 'layer' },
      ],
    );
    expect(out).toMatch(/var loopLayers = activeComp\.selectedLayers;/);
    expect(out).toMatch(/for \(var i = 0; i < loopLayers\.length; i\+\+\) \{/);
    expect(out).toMatch(/var loopLayer = loopLayers\[i\];/);
    // The inner Set Property references loopLayer (not the default targetLayer).
    expect(out).toMatch(/loopLayer\.property\("ADBE Opacity"\)\.setValue\(50\)/);
  });

  it('Set Property falls back to targetLayer when nothing is wired', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const out = compileToExtendScript(
      [a, b, c],
      [execEdge('e1', 'a', 'b'), execEdge('e2', 'b', 'c')],
    );
    expect(out).toMatch(/targetLayer\.property\("ADBE Opacity"\)\.setValue\(50\)/);
  });

  it('two wired selectors keep independent layers (no targetLayer clobber)', () => {
    // a -> s1 -> c1 -> s2 -> c2 ; each Set Property wired to its own selector.
    // After s2 reassigns targetLayer, c1 must still act on s1's captured layer.
    const a = getActiveComp('a');
    const s1 = selectLayerByName('s1', 'Title');
    const c1 = setProperty('c1', { value: 10 });
    const s2 = selectLayerByName('s2', 'Subtitle');
    const c2 = setProperty('c2', { value: 20 });
    const out = compileToExtendScript(
      [a, s1, c1, s2, c2],
      [
        execEdge('e1', 'a', 's1'),
        execEdge('e2', 's1', 'c1'),
        execEdge('e3', 'c1', 's2'),
        execEdge('e4', 's2', 'c2'),
        dataEdge('d1', 's1', 'layer', 'c1', 'layer'),
        dataEdge('d2', 's2', 'layer', 'c2', 'layer'),
      ],
    );
    // Each selector captures into its own var_<id>.
    expect(out).toMatch(/var var_s1 = targetLayer;/);
    expect(out).toMatch(/var var_s2 = targetLayer;/);
    // Each Set Property targets its own captured layer, not the shared one.
    expect(out).toMatch(/var_s1\.property\("ADBE Opacity"\)\.setValue\(10\)/);
    expect(out).toMatch(/var_s2\.property\("ADBE Opacity"\)\.setValue\(20\)/);
  });
});

describe('property path chains', () => {
  function propertyPath(id, path) {
    return { id, type: 'propertyPath', position: { x: 0, y: 0 }, data: { path } };
  }
  function stringNode(id, value) {
    return { id, type: 'string', position: { x: 0, y: 0 }, data: { value } };
  }

  it('expands a slash-separated inline value into chained .property() calls', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c', { property: 'ADBE Transform Group/ADBE Opacity' });
    const out = compileToExtendScript(
      [a, b, c],
      [execEdge('e1', 'a', 'b'), execEdge('e2', 'b', 'c')],
    );
    expect(out).toMatch(/targetLayer\.property\("ADBE Transform Group"\)\.property\("ADBE Opacity"\)\.setValue\(50\)/);
  });

  it('PropertyPath upstream drives the chain (preset path)', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const p = propertyPath('p', 'ADBE Transform Group/ADBE Position');
    const out = compileToExtendScript(
      [a, b, c, p],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'p', 'value', 'c', 'property'),
      ],
    );
    expect(out).toMatch(/\.property\("ADBE Transform Group"\)\.property\("ADBE Position"\)\.setValue/);
  });

  it('a String upstream is treated the same way', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const s = stringNode('s', 'ADBE Effect Parade/Drop Shadow/ADBE Drop Shadow-0008');
    const out = compileToExtendScript(
      [a, b, c, s],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 's', 'value', 'c', 'property'),
      ],
    );
    expect(out).toMatch(/\.property\("ADBE Effect Parade"\)\.property\("Drop Shadow"\)\.property\("ADBE Drop Shadow-0008"\)\.setValue/);
  });

  it('falls back to single .property() when the upstream is dynamic (e.g. Math)', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    // Math output isn't a static string — compiler emits a single dynamic property() call.
    const m = { id: 'm', type: 'math', position: { x: 0, y: 0 }, data: { op: 'add', values: { a: 1, b: 2 } } };
    const out = compileToExtendScript(
      [a, b, c, m],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'm', 'value', 'c', 'property'),
      ],
    );
    expect(out).toMatch(/\.property\(\(1 \+ 2\)\)\.setValue/);
  });
});

describe('local vars, get property, vector2', () => {
  function setLocalVar(id, name, value) {
    return {
      id, type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'Set Local Variable',
        variableName: name,
        inputs: [
          { id: 'exec_in', type: 'exec' },
          { id: 'value',   type: 'expr' },
        ],
        outputs: [
          { id: 'exec_out' },
          { id: 'value' },
        ],
        values: { value },
      },
    };
  }

  function getPropertyValue(id, propertyPath = 'ADBE Transform Group/ADBE Opacity') {
    return {
      id, type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'Get Property Value',
        inputs: [
          { id: 'layer',    type: 'expr' },
          { id: 'property', type: 'text' },
        ],
        outputs: [{ id: 'value' }],
        values: { property: propertyPath },
      },
    };
  }

  function vector2(id, x = 0, y = 0) {
    return {
      id, type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'Vector 2 Array',
        inputs: [
          { id: 'x', type: 'number' },
          { id: 'y', type: 'number' },
        ],
        outputs: [{ id: 'value' }],
        values: { x, y },
      },
    };
  }

  it('Set Local Variable emits var <sanitized name> = <expr>;', () => {
    const a = getActiveComp('a');
    const lv = setLocalVar('lv', 'my offset!', '12 + 5');
    const out = compileToExtendScript(
      [a, lv],
      [execEdge('e1', 'a', 'lv')],
    );
    // Sanitized: "my offset!" -> "my_offset_"
    expect(out).toMatch(/var my_offset_ = 12 \+ 5;/);
  });

  it('Set Local Variable falls back to a stable id-derived name when blank', () => {
    const a = getActiveComp('a');
    const lv = {
      ...setLocalVar('lv7', '', '42'),
      data: { ...setLocalVar('lv7', '', '42').data, variableName: '' },
    };
    const out = compileToExtendScript(
      [a, lv],
      [execEdge('e1', 'a', 'lv7')],
    );
    expect(out).toMatch(/var var_lv7 = 42;/);
  });

  it('Get Property Value reads .value at the end of the chain', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const g = getPropertyValue('g', 'ADBE Transform Group/ADBE Opacity');
    const out = compileToExtendScript(
      [a, b, c, g],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'g', 'value', 'c', 'value'),
      ],
    );
    expect(out).toMatch(/setValue\(targetLayer\.property\("ADBE Transform Group"\)\.property\("ADBE Opacity"\)\.value\)/);
  });

  it('Get Property Value honors a wired Layer input', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const g = getPropertyValue('g', 'ADBE Transform Group/ADBE Position');
    // For Each loops would normally drive `layer` — emulate that
    // with a tiny upstream that resolves to a known identifier.
    const f = { id: 'f', type: 'forEachSelected', position: { x: 0, y: 0 }, data: {} };
    const out = compileToExtendScript(
      [a, b, c, g, f],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'g', 'value', 'c', 'value'),
        dataEdge('d2', 'f', 'layer', 'g', 'layer'),
      ],
    );
    expect(out).toMatch(/loopLayer\.property\("ADBE Transform Group"\)\.property\("ADBE Position"\)\.value/);
  });

  it('data-side ebnNodes wired into the chain are NOT reported as orphans', () => {
    const a = getActiveComp('a');
    const c = setProperty('c');
    const g = getPropertyValue('g', 'ADBE Transform Group/ADBE Position');
    const v = vector2('v', 0, 540);
    const out = compileToExtendScript(
      [a, c, g, v],
      [
        execEdge('e1', 'a', 'c'),
        dataEdge('d1', 'g', 'value', 'v', 'x'),
        dataEdge('d2', 'v', 'value', 'c', 'value'),
      ],
    );
    expect(out).not.toMatch(/Get Property Value \[id=g\]/);
    expect(out).not.toMatch(/Vector 2 Array \[id=v\]/);
  });

  it('Vector Math emits ebnVec(a, b, op) and hoists the helper once', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const v = {
      id: 'v', type: 'vecMath', position: { x: 0, y: 0 },
      data: { op: 'mul', values: { a: '[10, 20]', b: '2' } },
    };
    const out = compileToExtendScript(
      [a, b, c, v],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'v', 'value', 'c', 'value'),
      ],
    );
    expect(out).toMatch(/Runtime Helpers/);
    expect(out).toMatch(/function ebnVec/);
    // Helper appears exactly once even with multiple vector ops.
    expect((out.match(/function ebnVec/g) || []).length).toBe(1);
    expect(out).toMatch(/setValue\(ebnVec\(\[10, 20\], 2, "\*"\)\)/);
  });

  it('scales Position by a scalar end-to-end (the user\'s graph)', () => {
    const a = getActiveComp('a');
    const f = { id: 'f', type: 'forEachSelected', position: { x: 0, y: 0 }, data: {} };
    const pp = { id: 'pp', type: 'propertyPath', position: { x: 0, y: 0 }, data: { path: 'ADBE Transform Group/ADBE Position' } };
    const g = getPropertyValue('g', 'ADBE Transform Group/ADBE Position');
    const vm = {
      id: 'vm', type: 'vecMath', position: { x: 0, y: 0 },
      data: { op: 'mul', values: { a: '0', b: '2' } },
    };
    const setPos = {
      id: 'setPos', type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'Set Property',
        inputs: [
          { id: 'exec_in',  type: 'exec' },
          { id: 'layer',    type: 'expr' },
          { id: 'property', type: 'text' },
          { id: 'value',    type: 'number' },
        ],
        outputs: [{ id: 'exec_out' }],
        values: {}, // no inline; everything is wired
      },
    };

    const out = compileToExtendScript(
      [a, f, pp, g, vm, setPos],
      [
        execEdge('e1', 'a', 'f'),
        { id: 'eb', source: 'f', sourceHandle: 'exec_body', target: 'setPos', targetHandle: 'exec_in' },
        // Layer: For-Each.layer → both Get Property Value AND Set Property
        dataEdge('dl1', 'f', 'layer', 'g', 'layer'),
        dataEdge('dl2', 'f', 'layer', 'setPos', 'layer'),
        // Property path drives both reads and writes
        dataEdge('dp1', 'pp', 'value', 'g', 'property'),
        dataEdge('dp2', 'pp', 'value', 'setPos', 'property'),
        // Read .value → multiply by 2 → write back
        dataEdge('dv1', 'g', 'value', 'vm', 'a'),
        dataEdge('dv2', 'vm', 'value', 'setPos', 'value'),
      ],
    );
    expect(out).toMatch(/function ebnVec/);
    // Inside the for-loop body: read loopLayer's Position, multiply by 2,
    // set it back at the same Position path.
    expect(out).toMatch(
      /loopLayer\.property\("ADBE Transform Group"\)\.property\("ADBE Position"\)\.setValue\(ebnVec\(loopLayer\.property\("ADBE Transform Group"\)\.property\("ADBE Position"\)\.value, 2, "\*"\)\)/,
    );
    expect(out).not.toMatch(/Orphan/);
  });

  it('Vector 2 Array emits [x, y] inline', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const c = setProperty('c');
    const v = vector2('v', 960, 540);
    const out = compileToExtendScript(
      [a, b, c, v],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'c'),
        dataEdge('d1', 'v', 'value', 'c', 'value'),
      ],
    );
    expect(out).toMatch(/setValue\(\[960, 540\]\)/);
  });

  it('Split Vector emits vec[0] for X and vec[1] for Y', () => {
    const a = getActiveComp('a');
    const b = selectLayer('b');
    const cX = setProperty('cX');
    const cY = setProperty('cY');
    const sv = {
      id: 'sv', type: 'splitVec', position: { x: 0, y: 0 },
      data: { values: { vec: '[100, 200]' } },
    };
    const outX = compileToExtendScript(
      [a, b, cX, sv],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'cX'),
        dataEdge('dx', 'sv', 'x', 'cX', 'value'),
      ],
    );
    expect(outX).toMatch(/setValue\(\(\[100, 200\]\)\[0\]\)/);

    const outY = compileToExtendScript(
      [a, b, cY, sv],
      [
        execEdge('e1', 'a', 'b'),
        execEdge('e2', 'b', 'cY'),
        dataEdge('dy', 'sv', 'y', 'cY', 'value'),
      ],
    );
    expect(outY).toMatch(/setValue\(\(\[100, 200\]\)\[1\]\)/);
  });

  it('Split Vector + scalar Math + Vector 2 Array round-trips position components', () => {
    // Graph: Get Position → Split Vector → Math(X * 2) + Math(Y + 10) → Vector 2 Array → Set Position
    const a = getActiveComp('a');
    const f = { id: 'f', type: 'forEachSelected', position: { x: 0, y: 0 }, data: {} };
    const pp = { id: 'pp', type: 'propertyPath', position: { x: 0, y: 0 }, data: { path: 'ADBE Transform Group/ADBE Position' } };
    const g = getPropertyValue('g', 'ADBE Transform Group/ADBE Position');
    const sv = { id: 'sv', type: 'splitVec', position: { x: 0, y: 0 }, data: { values: { vec: '' } } };
    const mx = { id: 'mx', type: 'math', position: { x: 0, y: 0 }, data: { op: 'mul', values: { a: 0, b: 2 } } };
    const my = { id: 'my', type: 'math', position: { x: 0, y: 0 }, data: { op: 'add', values: { a: 0, b: 10 } } };
    const v2 = vector2('v2', 0, 0);
    const setPos = {
      id: 'setPos', type: 'ebnNode', position: { x: 0, y: 0 },
      data: {
        label: 'Set Property',
        inputs: [
          { id: 'exec_in',  type: 'exec' },
          { id: 'layer',    type: 'expr' },
          { id: 'property', type: 'text' },
          { id: 'value',    type: 'number' },
        ],
        outputs: [{ id: 'exec_out' }],
        values: {},
      },
    };

    const out = compileToExtendScript(
      [a, f, pp, g, sv, mx, my, v2, setPos],
      [
        execEdge('e1', 'a', 'f'),
        { id: 'eb', source: 'f', sourceHandle: 'exec_body', target: 'setPos', targetHandle: 'exec_in' },
        dataEdge('dl1', 'f', 'layer', 'g', 'layer'),
        dataEdge('dl2', 'f', 'layer', 'setPos', 'layer'),
        dataEdge('dp1', 'pp', 'value', 'g', 'property'),
        dataEdge('dp2', 'pp', 'value', 'setPos', 'property'),
        dataEdge('dg', 'g', 'value', 'sv', 'vec'),
        dataEdge('dsx', 'sv', 'x', 'mx', 'a'),
        dataEdge('dsy', 'sv', 'y', 'my', 'a'),
        dataEdge('dmx', 'mx', 'value', 'v2', 'x'),
        dataEdge('dmy', 'my', 'value', 'v2', 'y'),
        dataEdge('dv2', 'v2', 'value', 'setPos', 'value'),
      ],
    );

    // X component: (position.value)[0] * 2, Y: (position.value)[1] + 10
    const posRead = 'loopLayer\\.property\\("ADBE Transform Group"\\)\\.property\\("ADBE Position"\\)\\.value';
    expect(out).toMatch(new RegExp(`\\(\\(${posRead}\\)\\[0\\] \\* 2\\)`));
    expect(out).toMatch(new RegExp(`\\(\\(${posRead}\\)\\[1\\] \\+ 10\\)`));
    expect(out).not.toMatch(/Orphan/);
  });
});

describe('compileToIR', () => {
  it('produces statements not strings', () => {
    const irOut = compileToIR([getActiveComp('a')], []);
    expect(Array.isArray(irOut)).toBe(true);
    expect(irOut.some((s) => s.kind === 'varDecl')).toBe(true);
  });
});
