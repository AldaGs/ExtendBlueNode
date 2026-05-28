import { describe, expect, it } from 'vitest';
import { layoutGraphTopo } from './blueprintLayout';

const node = (id) => ({ action: 'propose_node', args: { id, label: 'X' } });
const edge = (s, t) => ({ action: 'connect_nodes', args: { sourceId: s, sourceHandle: 'exec_out', targetId: t, targetHandle: 'exec_in' } });
const xy = (out, id) => {
  const a = out.find((a) => a.action === 'propose_node' && a.args.id === id);
  return { x: a.args.x, y: a.args.y };
};

describe('layoutGraphTopo', () => {
  it('places a linear chain in increasing columns, same row', () => {
    const out = layoutGraphTopo([node('a'), node('b'), node('c'), edge('a', 'b'), edge('b', 'c')]);
    expect(xy(out, 'a').x).toBeLessThan(xy(out, 'b').x);
    expect(xy(out, 'b').x).toBeLessThan(xy(out, 'c').x);
    // All roots/first-in-column share the top row.
    expect(xy(out, 'a').y).toBe(xy(out, 'b').y);
  });

  it('uses longest-path depth so a feeder lands left of its consumer', () => {
    // a -> b -> c, and a -> c directly: c must sit past b (depth 2), not depth 1.
    const out = layoutGraphTopo([node('a'), node('b'), node('c'), edge('a', 'b'), edge('b', 'c'), edge('a', 'c')]);
    expect(xy(out, 'c').x).toBeGreaterThan(xy(out, 'b').x);
  });

  it('stacks siblings in the same column on different rows', () => {
    // a -> b and a -> c: b and c are both depth 1, so same x, different y.
    const out = layoutGraphTopo([node('a'), node('b'), node('c'), edge('a', 'b'), edge('a', 'c')]);
    expect(xy(out, 'b').x).toBe(xy(out, 'c').x);
    expect(xy(out, 'b').y).not.toBe(xy(out, 'c').y);
  });

  it('passes non-node actions through and tolerates edges to unknown ids', () => {
    const sp = { action: 'set_property', args: { nodeId: 'a', key: 'k', value: 1 } };
    const out = layoutGraphTopo([node('a'), sp, edge('a', 'ghost')]);
    expect(out).toContain(sp);
    expect(xy(out, 'a')).toEqual({ x: 80, y: 80 });
  });
});
