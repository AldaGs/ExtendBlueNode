import { describe, expect, it } from 'vitest';
import { compileToExtendScript, compileToIR } from './astCompiler';

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
});

describe('compileToIR', () => {
  it('produces statements not strings', () => {
    const irOut = compileToIR([getActiveComp('a')], []);
    expect(Array.isArray(irOut)).toBe(true);
    expect(irOut.some((s) => s.kind === 'varDecl')).toBe(true);
  });
});
