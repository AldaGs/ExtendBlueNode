// Node groups — Blender-style "collapse a selection into one reusable node".
//
// A group node looks like:
//   {
//     id, type: 'group', position,
//     data: {
//       label, isGroup: true,
//       subNodes: [...],   // the captured inner nodes (full RF node objects)
//       subEdges: [...],   // edges whose BOTH ends are inner
//       inputs:  [{ id, label, innerNodeId, innerHandle }],   // boundary in
//       outputs: [{ id, label, innerNodeId, innerHandle }],   // boundary out
//     }
//   }
//
// Boundary edges that crossed the selection are re-pointed to the group's
// synthetic handles (gi_* / go_*). At compile time `flattenGroups` splices
// the inner graph back in (with namespaced ids) and reconnects those
// synthetic handles, so the emitters/IR never need to know groups exist.

let _gcounter = 0;
function gid(prefix) {
  _gcounter += 1;
  return `${prefix}_${Date.now().toString(36)}_${_gcounter}`;
}

const IN_PREFIX = 'gi_';
const OUT_PREFIX = 'go_';

// Pretty label for a synthetic boundary handle, e.g. inner node "addComp"
// + handle "name" -> "addComp.name". Falls back to the raw handle.
function boundaryLabel(innerNode, handle) {
  const lbl = innerNode?.data?.label || innerNode?.type || innerNode?.id || '?';
  return `${lbl}.${handle}`;
}

/**
 * Collapse `selectedIds` into a single group node.
 * Returns { nodes, edges } for the new top-level graph, or null if the
 * selection is empty / a single node (nothing useful to group).
 */
export function groupNodes(nodes, edges, selectedIds) {
  const inner = new Set(selectedIds);
  if (inner.size < 1) return null;

  const innerNodes = nodes.filter((n) => inner.has(n.id));
  if (innerNodes.length < 1) return null;

  const innerEdges = [];
  const inputEdges = [];   // outer source -> inner target
  const outputEdges = [];  // inner source -> outer target
  for (const e of edges) {
    const srcIn = inner.has(e.source);
    const tgtIn = inner.has(e.target);
    if (srcIn && tgtIn) innerEdges.push(e);
    else if (!srcIn && tgtIn) inputEdges.push(e);
    else if (srcIn && !tgtIn) outputEdges.push(e);
    // both outer: untouched, stays in graph
  }

  // Synthetic input handles — keyed by (innerTarget, innerHandle) so two
  // outer wires into the same inner port share one group input (shouldn't
  // happen with the one-wire rule, but be safe).
  const inputMap = new Map(); // key -> { id, label, innerNodeId, innerHandle }
  const repointedInputEdges = [];
  const byId = new Map(nodes.map((n) => [n.id, n]));
  for (const e of inputEdges) {
    const key = `${e.target}::${e.targetHandle}`;
    let entry = inputMap.get(key);
    if (!entry) {
      entry = {
        id: `${IN_PREFIX}${inputMap.size + 1}`,
        label: boundaryLabel(byId.get(e.target), e.targetHandle),
        innerNodeId: e.target,
        innerHandle: e.targetHandle,
      };
      inputMap.set(key, entry);
    }
    repointedInputEdges.push({ ...e, target: null, targetHandle: entry.id, _toGroupInput: true });
  }

  // Synthetic output handles — keyed by (innerSource, innerHandle) so many
  // outer consumers of one inner output collapse to a single group output.
  const outputMap = new Map();
  const repointedOutputEdges = [];
  for (const e of outputEdges) {
    const key = `${e.source}::${e.sourceHandle}`;
    let entry = outputMap.get(key);
    if (!entry) {
      entry = {
        id: `${OUT_PREFIX}${outputMap.size + 1}`,
        label: boundaryLabel(byId.get(e.source), e.sourceHandle),
        innerNodeId: e.source,
        innerHandle: e.sourceHandle,
      };
      outputMap.set(key, entry);
    }
    repointedOutputEdges.push({ ...e, source: null, sourceHandle: entry.id, _fromGroupOutput: true });
  }

  // Group node position: centroid of inner nodes.
  const cx = innerNodes.reduce((s, n) => s + (n.position?.x || 0), 0) / innerNodes.length;
  const cy = innerNodes.reduce((s, n) => s + (n.position?.y || 0), 0) / innerNodes.length;

  const groupId = gid('group');
  const groupNode = {
    id: groupId,
    type: 'group',
    position: { x: cx, y: cy },
    data: {
      label: 'Group',
      isGroup: true,
      subNodes: innerNodes,
      subEdges: innerEdges,
      inputs: Array.from(inputMap.values()),
      outputs: Array.from(outputMap.values()),
    },
  };

  // Stamp the now-known group id onto the repointed boundary edges.
  const finalInputEdges = repointedInputEdges.map((e) => {
    const { _toGroupInput, ...rest } = e;
    return { ...rest, target: groupId };
  });
  const finalOutputEdges = repointedOutputEdges.map((e) => {
    const { _fromGroupOutput, ...rest } = e;
    return { ...rest, source: groupId };
  });

  const remainingNodes = nodes.filter((n) => !inner.has(n.id));
  const consumedEdgeIds = new Set([...innerEdges, ...inputEdges, ...outputEdges].map((e) => e.id));
  const remainingEdges = edges.filter((e) => !consumedEdgeIds.has(e.id));

  return {
    nodes: [...remainingNodes, groupNode],
    edges: [...remainingEdges, ...finalInputEdges, ...finalOutputEdges],
    groupId,
  };
}

/**
 * Expand a single group node back into its constituent nodes/edges.
 * Returns { nodes, edges } or null if `groupId` is not a group.
 */
export function ungroupNode(nodes, edges, groupId) {
  const group = nodes.find((n) => n.id === groupId && n.data?.isGroup);
  if (!group) return null;
  const { subNodes = [], subEdges = [], inputs = [], outputs = [] } = group.data;

  const inputByHandle = new Map(inputs.map((p) => [p.id, p]));
  const outputByHandle = new Map(outputs.map((p) => [p.id, p]));

  const restoredEdges = [];
  for (const e of edges) {
    if (e.target === groupId && inputByHandle.has(e.targetHandle)) {
      const p = inputByHandle.get(e.targetHandle);
      restoredEdges.push({ ...e, target: p.innerNodeId, targetHandle: p.innerHandle });
    } else if (e.source === groupId && outputByHandle.has(e.sourceHandle)) {
      const p = outputByHandle.get(e.sourceHandle);
      restoredEdges.push({ ...e, source: p.innerNodeId, sourceHandle: p.innerHandle });
    } else if (e.source === groupId || e.target === groupId) {
      // Edge referencing a handle that no longer exists — drop it.
      continue;
    } else {
      restoredEdges.push(e);
    }
  }

  const remainingNodes = nodes.filter((n) => n.id !== groupId);
  return {
    nodes: [...remainingNodes, ...subNodes],
    edges: [...restoredEdges, ...subEdges],
  };
}

/**
 * Recursively expand every group node so the compiler sees a flat graph.
 * Inner node/edge ids are namespaced with the group id to avoid collisions
 * across multiple instances of the same captured subgraph.
 */
export function flattenGroups(nodes, edges) {
  let flatNodes = nodes;
  let flatEdges = edges;
  let guard = 0;
  while (flatNodes.some((n) => n.data?.isGroup) && guard++ < 64) {
    const group = flatNodes.find((n) => n.data?.isGroup);
    const gidStr = group.id;
    const ns = (id) => `${gidStr}__${id}`;
    const { subNodes = [], subEdges = [], inputs = [], outputs = [] } = group.data;

    const inputByHandle = new Map(inputs.map((p) => [p.id, p]));
    const outputByHandle = new Map(outputs.map((p) => [p.id, p]));

    const spliceNodes = subNodes.map((n) => ({ ...n, id: ns(n.id), selected: false }));
    const spliceEdges = subEdges.map((e) => ({
      ...e,
      id: ns(e.id),
      source: ns(e.source),
      target: ns(e.target),
    }));

    const rewired = [];
    for (const e of flatEdges) {
      if (e.target === gidStr && inputByHandle.has(e.targetHandle)) {
        const p = inputByHandle.get(e.targetHandle);
        rewired.push({ ...e, target: ns(p.innerNodeId), targetHandle: p.innerHandle });
      } else if (e.source === gidStr && outputByHandle.has(e.sourceHandle)) {
        const p = outputByHandle.get(e.sourceHandle);
        rewired.push({ ...e, source: ns(p.innerNodeId), sourceHandle: p.innerHandle });
      } else if (e.source === gidStr || e.target === gidStr) {
        continue; // stale handle
      } else {
        rewired.push(e);
      }
    }

    flatNodes = [...flatNodes.filter((n) => n.id !== gidStr), ...spliceNodes];
    flatEdges = [...rewired, ...spliceEdges];
  }
  return { nodes: flatNodes, edges: flatEdges };
}
