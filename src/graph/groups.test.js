import { describe, expect, it } from 'vitest';
import { groupNodes, ungroupNode, flattenGroups } from './groups';
import { compileToExtendScript } from '../astCompiler';

const exec = { type: 'exec' };

function getActiveComp(id) {
  return {
    id, type: 'ebnNode', position: { x: 0, y: 0 },
    data: {
      label: 'Get Active Comp',
      inputs: [{ id: 'exec_in', label: 'Execution', ...exec }],
      outputs: [{ id: 'comp', label: 'Comp' }, { id: 'exec_out', label: 'Execution' }],
    },
  };
}

function setProp(id, value) {
  return {
    id, type: 'ebnNode', position: { x: 200, y: 0 },
    data: {
      label: 'Set Property',
      inputs: [
        { id: 'exec_in', label: 'Execution', ...exec },
        { id: 'layer', label: 'Layer', type: 'text' },
        { id: 'property', label: 'Property', type: 'text' },
        { id: 'value', label: 'Value', type: 'number' },
      ],
      outputs: [{ id: 'exec_out', label: 'Execution' }],
      values: { property: 'ADBE Opacity', value, layer: 'targetLayer' },
    },
  };
}

function build() {
  const nodes = [getActiveComp('a'), setProp('b', 50), setProp('c', 80)];
  const edges = [
    { id: 'e1', source: 'a', sourceHandle: 'exec_out', target: 'b', targetHandle: 'exec_in' },
    { id: 'e2', source: 'b', sourceHandle: 'exec_out', target: 'c', targetHandle: 'exec_in' },
  ];
  return { nodes, edges };
}

describe('node groups', () => {
  it('groups a middle node and exposes boundary handles', () => {
    const { nodes, edges } = build();
    const res = groupNodes(nodes, edges, ['b']);
    expect(res).not.toBeNull();
    const group = res.nodes.find((n) => n.data?.isGroup);
    expect(group).toBeTruthy();
    // 'b' had one incoming exec (from a) and one outgoing exec (to c).
    expect(group.data.inputs).toHaveLength(1);
    expect(group.data.outputs).toHaveLength(1);
    // boundary edges now reference the group + synthetic handles
    const inEdge = res.edges.find((e) => e.source === 'a');
    expect(inEdge.target).toBe(group.id);
    expect(inEdge.targetHandle).toBe(group.data.inputs[0].id);
    const outEdge = res.edges.find((e) => e.target === 'c');
    expect(outEdge.source).toBe(group.id);
    expect(outEdge.sourceHandle).toBe(group.data.outputs[0].id);
  });

  it('round-trips group -> ungroup back to an equivalent graph', () => {
    const { nodes, edges } = build();
    const grouped = groupNodes(nodes, edges, ['b']);
    const group = grouped.nodes.find((n) => n.data?.isGroup);
    const back = ungroupNode(grouped.nodes, grouped.edges, group.id);
    // node 'b' restored
    expect(back.nodes.map((n) => n.id).sort()).toEqual(['a', 'b', 'c']);
    // a->b and b->c exec edges restored
    const ab = back.edges.find((e) => e.source === 'a' && e.target === 'b');
    const bc = back.edges.find((e) => e.source === 'b' && e.target === 'c');
    expect(ab).toBeTruthy();
    expect(bc).toBeTruthy();
  });

  it('compiles a grouped graph identically to the flat one', () => {
    const { nodes, edges } = build();
    const flat = compileToExtendScript(nodes, edges);
    const grouped = groupNodes(nodes, edges, ['b']);
    const groupedCode = compileToExtendScript(grouped.nodes, grouped.edges);
    // Both should set opacity to 50 then 80 in the exec chain.
    expect(groupedCode).toContain('setValue(50)');
    expect(groupedCode).toContain('setValue(80)');
    expect(flat).toContain('setValue(50)');
    expect(flat).toContain('setValue(80)');
  });

  it('flattenGroups removes all group nodes', () => {
    const { nodes, edges } = build();
    const grouped = groupNodes(nodes, edges, ['b', 'c']);
    const { nodes: flatNodes } = flattenGroups(grouped.nodes, grouped.edges);
    expect(flatNodes.some((n) => n.data?.isGroup)).toBe(false);
  });
});
