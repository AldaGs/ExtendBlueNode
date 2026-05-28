import { describe, expect, it } from 'vitest';
import { filterConnectActions } from './graphActions';

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
