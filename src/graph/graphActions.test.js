import { describe, expect, it } from 'vitest';
import { filterConnectActions, autoChainActions } from './graphActions';

// Minimal fake library: two node labels with known handles.
const HANDLES = {
  'AVLayer property (name)': { inputs: new Set(['exec_in', 'AVLayer', 'name']), outputs: new Set(['exec_out', 'Result']) },
  'Call Function': { inputs: new Set(['exec_in', 'arg1', 'arg2', 'arg3', 'arg4']), outputs: new Set(['exec_out', 'Result']) },
  Reroute: { inputs: new Set(), outputs: new Set() }, // port-less
};
const handlesForLabel = (l) => HANDLES[l] || { inputs: new Set(), outputs: new Set() };
const labels = { a: 'AVLayer property (name)', b: 'Call Function', r: 'Reroute' };
const labelOf = (id) => labels[id] || null;
const conn = (sourceId, sourceHandle, targetId, targetHandle) => ({
  action: 'connect_nodes', args: { sourceId, sourceHandle, targetId, targetHandle },
});

describe('filterConnectActions', () => {
  it('keeps a valid exec edge and a valid data edge', () => {
    const { valid, dropped } = filterConnectActions(
      [conn('a', 'exec_out', 'b', 'exec_in'), conn('a', 'Result', 'b', 'arg1')],
      labelOf, handlesForLabel,
    );
    expect(valid).toHaveLength(2);
    expect(Object.values(dropped).every((n) => n === 0)).toBe(true);
  });

  it('rejects the "fan": exec_out sprayed into data inputs', () => {
    const { valid, dropped } = filterConnectActions(
      [
        conn('a', 'exec_out', 'b', 'arg1'),
        conn('a', 'exec_out', 'b', 'arg2'),
        conn('a', 'exec_out', 'b', 'arg3'),
      ],
      labelOf, handlesForLabel,
    );
    expect(valid).toHaveLength(0);
    expect(dropped.typeMismatch).toBe(3);
  });

  it('rejects a data output wired into an exec input', () => {
    const { valid, dropped } = filterConnectActions(
      [conn('a', 'Result', 'b', 'exec_in')], labelOf, handlesForLabel,
    );
    expect(valid).toHaveLength(0);
    expect(dropped.typeMismatch).toBe(1);
  });

  it('allows only one wire per input handle (drops competing sources)', () => {
    const { valid, dropped } = filterConnectActions(
      [conn('a', 'Result', 'b', 'arg1'), conn('b', 'Result', 'b', 'arg1')],
      labelOf, handlesForLabel,
    );
    expect(valid).toHaveLength(1);
    expect(dropped.inputTaken).toBe(1);
  });

  it('dedupes identical edges and drops nonexistent handles + missing nodes', () => {
    const { valid, dropped } = filterConnectActions(
      [
        conn('a', 'exec_out', 'b', 'exec_in'),
        conn('a', 'exec_out', 'b', 'exec_in'), // exact duplicate
        conn('a', 'Result', 'b', 'noSuchHandle'), // bad handle
        conn('a', 'Result', 'ghost', 'arg1'), // missing node
      ],
      labelOf, handlesForLabel,
    );
    expect(valid).toHaveLength(1);
    expect(dropped.duplicate).toBe(1);
    expect(dropped.badHandle).toBe(1);
    expect(dropped.missingNode).toBe(1);
  });

  it('allows any handle on a port-less node (reroute)', () => {
    const { valid } = filterConnectActions(
      [conn('r', 'out', 'b', 'arg1')], labelOf, handlesForLabel,
    );
    expect(valid).toHaveLength(1);
  });
});

describe('autoChainActions', () => {
  const H = {
    Start: { inputs: new Set(), outputs: new Set(['exec_out']) },
    'Get Active Comp': { inputs: new Set(['exec_in']), outputs: new Set(['exec_out', 'comp']) },
    'Set Property': { inputs: new Set(['exec_in', 'layer', 'value']), outputs: new Set(['exec_out']) },
    'Read Value at Time': { inputs: new Set(['layer', 'time']), outputs: new Set(['value']) },
  };
  const hfl = (l) => H[l] || { inputs: new Set(), outputs: new Set() };
  const n = (id, label) => ({ id, label });
  const conn = (s, sh, t, th) => ({ action: 'connect_nodes', args: { sourceId: s, sourceHandle: sh, targetId: t, targetHandle: th } });

  it('injects a Start and chains unwired action nodes in order', () => {
    const ordered = [n('a', 'Set Property'), n('b', 'Set Property')];
    const { startNode, chainEdges } = autoChainActions(ordered, [], hfl, { startId: 's0' });
    expect(startNode.args.label).toBe('Start');
    // Start -> a -> b
    expect(chainEdges).toHaveLength(2);
    expect(chainEdges[0].args).toMatchObject({ sourceId: 's0', sourceHandle: 'exec_out', targetId: 'a', targetHandle: 'exec_in' });
    expect(chainEdges[1].args).toMatchObject({ sourceId: 'a', targetId: 'b' });
  });

  it('does not inject Start when a root already exists (Get Active Comp)', () => {
    const ordered = [n('g', 'Get Active Comp'), n('a', 'Set Property')];
    const { startNode, chainEdges } = autoChainActions(ordered, [], hfl);
    expect(startNode).toBeNull();
    expect(chainEdges).toHaveLength(1);
    expect(chainEdges[0].args).toMatchObject({ sourceId: 'g', targetId: 'a' });
  });

  it('fills only gaps — never clobbers a model-supplied exec edge', () => {
    const ordered = [n('g', 'Get Active Comp'), n('a', 'Set Property'), n('b', 'Set Property')];
    // Model already wired g -> b. So g is "out", b is "in"; only a is loose.
    const model = [conn('g', 'exec_out', 'b', 'exec_in')];
    const { chainEdges } = autoChainActions(ordered, model, hfl);
    // g already continues (to b) and b already triggered, so no g->a or a->b
    // would clobber; the only safe edge is none here (a stays loose rather than
    // creating a second exec_out on g or second exec_in on b).
    for (const e of chainEdges) {
      expect(e.args.sourceId).not.toBe('g'); // g already has an exec_out
      expect(e.args.targetId).not.toBe('b'); // b already has an exec_in
    }
  });

  it('ignores data-only nodes (no exec handles)', () => {
    const ordered = [n('r', 'Read Value at Time'), n('a', 'Set Property')];
    const { startNode, chainEdges } = autoChainActions(ordered, [], hfl, { startId: 's0' });
    // Only 'a' is an action node; Start injected and chained to a, r untouched.
    expect(startNode.args.label).toBe('Start');
    expect(chainEdges).toHaveLength(1);
    expect(chainEdges[0].args).toMatchObject({ sourceId: 's0', targetId: 'a' });
  });

  it('returns nothing when there are no action nodes', () => {
    const { startNode, chainEdges } = autoChainActions([n('r', 'Read Value at Time')], [], hfl);
    expect(startNode).toBeNull();
    expect(chainEdges).toHaveLength(0);
  });
});
