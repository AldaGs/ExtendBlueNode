import { describe, expect, it } from 'vitest';
import { getNodeCatalogSummary, handlesForNode, CUSTOM_NODE_HANDLES } from './nodeLibrary';

describe('handlesForNode', () => {
  it('prefers factory-declared ports', () => {
    const node = { type: 'ebnNode', data: { inputs: [{ id: 'exec_in' }, { id: 'value' }], outputs: [{ id: 'exec_out' }] } };
    expect(handlesForNode(node)).toEqual({ inputs: ['exec_in', 'value'], outputs: ['exec_out'] });
  });

  it('falls back to CUSTOM_NODE_HANDLES for component-defined ports (If)', () => {
    expect(handlesForNode({ type: 'if', data: {} }))
      .toEqual({ inputs: ['exec_in', 'cond'], outputs: ['exec_then', 'exec_else'] });
  });

  it('returns empty for an unknown port-less type', () => {
    expect(handlesForNode({ type: 'mystery', data: {} })).toEqual({ inputs: [], outputs: [] });
  });
});

describe('getNodeCatalogSummary', () => {
  const catalog = getNodeCatalogSummary();

  it('exposes the If branch/condition handles (regression: used to be "—")', () => {
    const line = catalog.split('\n').find((l) => l.startsWith('- "If"'));
    expect(line).toBeTruthy();
    expect(line).toContain('exec_in');
    expect(line).toContain('cond');
    expect(line).toContain('exec_then');
    expect(line).toContain('exec_else');
    expect(line).not.toContain('—');
  });

  it('exposes For Each Selected Layer body/loop handles', () => {
    const line = catalog.split('\n').find((l) => l.startsWith('- "For Each Selected Layer"'));
    expect(line).toContain('exec_body');
    expect(line).toContain('layer');
    expect(line).toContain('exec_done');
  });

  it('keeps every custom-handle type out of the "—" bucket', () => {
    // Each mapped type appears under some label with real handles.
    expect(Object.keys(CUSTOM_NODE_HANDLES).length).toBeGreaterThan(5);
  });
});
