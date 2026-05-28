import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  addEdge,
  updateEdge,
  useOnSelectionChange,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';

import EBNNode from './EBNNode';
import RerouteNode from './RerouteNode';
import IntegerNode from './IntegerNode';
import StringNode from './StringNode';
import GetGlobalNode from './GetGlobalNode';
import SetGlobalNode from './SetGlobalNode';
import MathNode from './MathNode';
import CompareNode from './CompareNode';
import IfNode from './IfNode';
import SelectNode from './SelectNode';
import ForEachSelectedNode from './ForEachSelectedNode';
import PropertyPathNode from './PropertyPathNode';
import VectorMathNode from './VectorMathNode';
import SplitVectorNode from './SplitVectorNode';
import GroupNode from './GroupNode';
import AddNodeMenu from './AddNodeMenu';
import FlowEdge from './FlowEdge';
import { findCompatibleHandle } from '../nodeLibrary';
import { groupNodes, ungroupNode } from '../graph/groups';

/* ----------------------------- geometry helpers ----------------------------- */

function segDistance(p, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  const len2 = dx * dx + dy * dy;
  if (len2 === 0) return Math.hypot(p.x - a.x, p.y - a.y);
  let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
}

function segIntersect(p1, p2, p3, p4) {
  const d = (p2.x - p1.x) * (p4.y - p3.y) - (p2.y - p1.y) * (p4.x - p3.x);
  if (d === 0) return false;
  const t = ((p3.x - p1.x) * (p4.y - p3.y) - (p3.y - p1.y) * (p4.x - p3.x)) / d;
  const u = ((p3.x - p1.x) * (p2.y - p1.y) - (p3.y - p1.y) * (p2.x - p1.x)) / d;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

// Approximate handle anchor points for a node, in flow coords.
function nodeAnchors(node) {
  const w = node.width ?? 180;
  const h = node.height ?? 60;
  return {
    out: { x: node.position.x + w, y: node.position.y + h / 2 },
    in:  { x: node.position.x,     y: node.position.y + h / 2 },
    center: { x: node.position.x + w / 2, y: node.position.y + h / 2 },
  };
}

/* ----------------------------- insert-on-wire helpers ----------------------------- */

function pickInsertHandles(droppedNode, edge) {
  const data = droppedNode.data || {};
  const inputs  = data.inputs  || [];
  const outputs = data.outputs || [];
  const wantExec =
    edge.sourceHandle === 'exec_out' && edge.targetHandle === 'exec_in';

  if (droppedNode.type === 'reroute') {
    return { targetHandle: 'in', sourceHandle: 'out' };
  }

  if (wantExec) {
    const i = inputs.find((p) => p.type === 'exec');
    const o = outputs.find((p) => p.id === 'exec_out');
    if (i && o) return { targetHandle: i.id, sourceHandle: o.id };
  }
  const i = inputs.find((p) => p.type !== 'exec');
  const o = outputs.find((p) => p.id !== 'exec_out');
  if (i && o) return { targetHandle: i.id, sourceHandle: o.id };
  return null;
}

/* ----------------------------- canvas ----------------------------- */

function FlowCanvasInner({
  nodes,
  edges,
  setNodes,
  setEdges,
  onNodesChange,
  onEdgesChange,
  onSelectionChange,
}) {
  // Report selection up to App. Each canvas has its own provider, so this
  // hook only fires for *this* canvas's selection events. The latest
  // canvas to receive a click wins App.selectedNode.
  const selectedIdsRef = useRef([]);
  useOnSelectionChange({
    onChange: useCallback(
      ({ nodes: selected }) => {
        selectedIdsRef.current = selected.map((n) => n.id);
        onSelectionChange?.(selected[0] ?? null);
      },
      [onSelectionChange],
    ),
  });

  const rf = useReactFlow();
  const wrapperRef = useRef(null);
  const edgeReconnectSuccessful = useRef(true);

  /* ----------------------------- grouping ----------------------------- */

  // Keep a live ref to edges so the group/ungroup closures (which run inside
  // a setNodes updater) can read the current edge list without stale capture.
  const edgesRef = useRef(edges);
  useEffect(() => { edgesRef.current = edges; }, [edges]);

  const doGroup = useCallback(() => {
    const ids = selectedIdsRef.current;
    if (!ids || ids.length < 1) return;
    // Don't allow grouping a lone group (no-op) but allow 1+ normal nodes.
    let result = null;
    setNodes((nds) => {
      // Compute against the live edges via a ref-free closure: we need both
      // nodes and edges, so stash the node result and finish in setEdges.
      result = groupNodes(nds, edgesRef.current, ids);
      return result ? result.nodes : nds;
    });
    if (result) setEdges(() => result.edges);
  }, [setNodes, setEdges]);

  const doUngroup = useCallback(
    (groupId) => {
      let result = null;
      setNodes((nds) => {
        result = ungroupNode(nds, edgesRef.current, groupId);
        return result ? result.nodes : nds;
      });
      if (result) setEdges(() => result.edges);
    },
    [setNodes, setEdges],
  );

  // Ctrl/Cmd+G to group the current selection.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'g' || e.key === 'G')) {
        e.preventDefault();
        doGroup();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [doGroup]);

  // GroupNode dispatches these DOM events (keeps node.data callback-free).
  useEffect(() => {
    const onUngroup = (e) => doUngroup(e.detail?.id);
    const onRename = (e) => {
      const { id, label } = e.detail || {};
      setNodes((nds) =>
        nds.map((n) => (n.id === id ? { ...n, data: { ...n.data, label } } : n)),
      );
    };
    window.addEventListener('ebn-ungroup', onUngroup);
    window.addEventListener('ebn-group-rename', onRename);
    return () => {
      window.removeEventListener('ebn-ungroup', onUngroup);
      window.removeEventListener('ebn-group-rename', onRename);
    };
  }, [doUngroup, setNodes]);

  const nodeTypes = useMemo(
    () => ({
      ebnNode: EBNNode,
      reroute: RerouteNode,
      integer: IntegerNode,
      string: StringNode,
      getGlobal: GetGlobalNode,
      setGlobal: SetGlobalNode,
      math: MathNode,
      compare: CompareNode,
      if: IfNode,
      select: SelectNode,
      forEachSelected: ForEachSelectedNode,
      propertyPath: PropertyPathNode,
      vecMath: VectorMathNode,
      splitVec: SplitVectorNode,
      group: GroupNode,
    }),
    [],
  );

  // Override the default edge so every wire shows a moving dot.
  const edgeTypes = useMemo(() => ({ default: FlowEdge, flow: FlowEdge }), []);

  // A wire is "live" only if it participates in an exec chain rooted at the
  // entry node (Get Active Comp) — either an exec edge in that chain, or a
  // data edge feeding a node that the chain reaches. Inert wires render
  // without the moving dot so the canvas reads less busy.
  const liveEdgeIds = useMemo(() => {
    const live = new Set();
    const entry = nodes.find((n) => n.data?.label === 'Get Active Comp');
    if (!entry) return live;
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const liveNodes = new Set();

    const execStack = [entry.id];
    while (execStack.length) {
      const id = execStack.pop();
      if (liveNodes.has(id)) continue;
      liveNodes.add(id);
      const node = byId.get(id);
      if (!node) continue;
      for (const e of edges) {
        if (e.source !== id) continue;
        const isExec =
          e.sourceHandle?.startsWith('exec_') && e.targetHandle === 'exec_in';
        const isReroutePass =
          node.type === 'reroute' && e.sourceHandle === 'out';
        if (isExec || isReroutePass) {
          live.add(e.id);
          execStack.push(e.target);
        }
      }
    }

    const dataStack = Array.from(liveNodes);
    const visitedData = new Set();
    while (dataStack.length) {
      const id = dataStack.pop();
      if (visitedData.has(id)) continue;
      visitedData.add(id);
      for (const e of edges) {
        if (e.target !== id) continue;
        const isExec =
          e.sourceHandle?.startsWith('exec_') && e.targetHandle === 'exec_in';
        if (isExec) continue;
        live.add(e.id);
        dataStack.push(e.source);
      }
    }

    return live;
  }, [nodes, edges]);

  const decoratedEdges = useMemo(
    () =>
      edges.map((e) =>
        liveEdgeIds.has(e.id) === !!e.data?.live
          ? e
          : { ...e, data: { ...e.data, live: liveEdgeIds.has(e.id) } },
      ),
    [edges, liveEdgeIds],
  );

  /* ------------ connection + reconnect (one wire per input) ------------ */

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => {
        const filtered = eds.filter(
          (e) =>
            !(e.target === params.target && e.targetHandle === params.targetHandle),
        );
        return addEdge(params, filtered);
      }),
    [setEdges],
  );

  const isValidConnection = useCallback(
    (conn) => {
      if (conn.source === conn.target) return false;
      const occupied = edges.some(
        (e) => e.target === conn.target && e.targetHandle === conn.targetHandle,
      );
      return !occupied || edgeReconnectSuccessful.current === false;
    },
    [edges],
  );

  const onReconnectStart = useCallback(() => {
    edgeReconnectSuccessful.current = false;
  }, []);

  const onReconnect = useCallback(
    (oldEdge, newConnection) => {
      edgeReconnectSuccessful.current = true;
      setEdges((eds) => {
        const cleared = eds.filter(
          (e) =>
            e.id === oldEdge.id ||
            !(
              e.target === newConnection.target &&
              e.targetHandle === newConnection.targetHandle
            ),
        );
        return updateEdge(oldEdge, newConnection, cleared);
      });
    },
    [setEdges],
  );

  const onReconnectEnd = useCallback(
    (_, edge) => {
      if (!edgeReconnectSuccessful.current) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      }
      edgeReconnectSuccessful.current = true;
    },
    [setEdges],
  );

  /* ------------ Shift+click on empty canvas: create reroute ------------ */

  const onPaneClick = useCallback(
    (event) => {
      if (!event.shiftKey) return;
      const pos = rf.screenToFlowPosition({ x: event.clientX, y: event.clientY });
      const id = `reroute_${Date.now().toString(36)}`;
      setNodes((nds) => [
        ...nds,
        {
          id,
          type: 'reroute',
          position: { x: pos.x - 6, y: pos.y - 6 },
          data: {},
        },
      ]);
    },
    [rf, setNodes],
  );

  /* ------------ drop node on edge: split & insert ------------ */

  const onNodeDragStop = useCallback(
    (_event, dropped) => {
      // Insert-on-wire is a convenience for *fresh* nodes only. If the
      // dropped node already participates in any edge, the user is just
      // repositioning it — never hijack it into a wire. (This is the fix
      // for "moving nodes around creates connections I didn't want".)
      const alreadyWired = edges.some(
        (e) => e.source === dropped.id || e.target === dropped.id,
      );
      if (alreadyWired) return;

      const c = nodeAnchors(dropped).center;
      const w = dropped.width ?? 40;
      const h = dropped.height ?? 30;
      const halfDiag = Math.hypot(w, h) / 2;

      let hit = null;
      let hitDist = Infinity;
      for (const edge of edges) {
        if (edge.source === dropped.id || edge.target === dropped.id) continue;
        const src = nodes.find((n) => n.id === edge.source);
        const tgt = nodes.find((n) => n.id === edge.target);
        if (!src || !tgt) continue;
        const a = nodeAnchors(src).out;
        const b = nodeAnchors(tgt).in;
        const d = segDistance(c, a, b);
        if (d < halfDiag && d < hitDist) {
          hit = edge;
          hitDist = d;
        }
      }
      if (!hit) return;

      const handles = pickInsertHandles(dropped, hit);
      if (!handles) return;

      setEdges((eds) => {
        const without = eds.filter((e) => e.id !== hit.id);
        const left = {
          id: `${hit.id}__pre_${dropped.id}`,
          source: hit.source,
          sourceHandle: hit.sourceHandle,
          target: dropped.id,
          targetHandle: handles.targetHandle,
        };
        const right = {
          id: `${hit.id}__post_${dropped.id}`,
          source: dropped.id,
          sourceHandle: handles.sourceHandle,
          target: hit.target,
          targetHandle: hit.targetHandle,
        };
        return [...without, left, right];
      });
    },
    [edges, nodes, setEdges],
  );

  /* ------------ Ctrl+drag: knife cuts edges it crosses ------------ */

  const [knife, setKnife] = useState(null); // { start, current } in flow coords

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const onDown = (e) => {
      if (!(e.ctrlKey || e.metaKey) || e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      const start = rf.screenToFlowPosition({ x: e.clientX, y: e.clientY });
      setKnife({ start, current: start });
    };
    // capture so we beat react-flow's own handlers
    el.addEventListener('mousedown', onDown, true);
    return () => el.removeEventListener('mousedown', onDown, true);
  }, [rf]);

  useEffect(() => {
    if (!knife) return;

    const onMove = (e) => {
      const cur = rf.screenToFlowPosition({ x: e.clientX, y: e.clientY });
      setKnife((k) => (k ? { ...k, current: cur } : k));
    };
    const onUp = () => {
      setKnife((k) => {
        if (!k) return null;
        const { start, current } = k;
        const moved = Math.hypot(current.x - start.x, current.y - start.y) > 3;
        if (moved) {
          const survivors = edges.filter((edge) => {
            const src = nodes.find((n) => n.id === edge.source);
            const tgt = nodes.find((n) => n.id === edge.target);
            if (!src || !tgt) return true;
            const a = nodeAnchors(src).out;
            const b = nodeAnchors(tgt).in;
            return !segIntersect(a, b, start, current);
          });
          if (survivors.length !== edges.length) setEdges(survivors);
        }
        return null;
      });
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [knife, rf, edges, nodes, setEdges]);

  /* ------------ knife overlay in screen coords ------------ */

  const knifeScreen = useMemo(() => {
    if (!knife) return null;
    const a = rf.flowToScreenPosition(knife.start);
    const b = rf.flowToScreenPosition(knife.current);
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return {
      x1: a.x - rect.left, y1: a.y - rect.top,
      x2: b.x - rect.left, y2: b.y - rect.top,
    };
  }, [knife, rf]);

  /* ------------ Add-Node menu (right-click + drop-wire-on-pane) ------------ */

  // null | { screen: {x,y}, flow: {x,y}, pending?: {nodeId, handleId, handleType} }
  const [addMenu, setAddMenu] = useState(null);
  const pendingConnRef = useRef(null);

  const openMenuAtClient = useCallback(
    (clientX, clientY, pending) => {
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;
      const flow = rf.screenToFlowPosition({ x: clientX, y: clientY });
      setAddMenu({
        screen: { x: clientX - rect.left, y: clientY - rect.top },
        flow,
        pending: pending || null,
      });
    },
    [rf],
  );

  const onContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      // Only open over the pane / our wrapper — not over an existing node.
      const onNode = e.target.closest?.('.react-flow__node');
      if (onNode) return;
      openMenuAtClient(e.clientX, e.clientY, null);
    },
    [openMenuAtClient],
  );

  const onConnectStart = useCallback((_e, params) => {
    pendingConnRef.current = params; // { nodeId, handleId, handleType }
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      const pending = pendingConnRef.current;
      pendingConnRef.current = null;
      if (!pending) return;
      const tgt = event.target;
      const droppedOnPane =
        tgt?.classList?.contains('react-flow__pane') ||
        tgt?.classList?.contains('ebn-flow-wrapper');
      if (!droppedOnPane) return;
      openMenuAtClient(event.clientX, event.clientY, pending);
    },
    [openMenuAtClient],
  );

  const onPickFromMenu = useCallback(
    (item) => {
      if (!addMenu) return;
      const node = item.factory(addMenu.flow);
      const pending = addMenu.pending;
      setNodes((nds) => [...nds, node]);
      if (pending) {
        const fromExec =
          pending.handleId === 'exec_out' || pending.handleId === 'exec_in';
        // pending.handleType is the dragged-from side. If the user grabbed a
        // source ('exec_out' / output), we need to land on a target handle.
        const role = pending.handleType === 'source' ? 'target' : 'source';
        const compatible = findCompatibleHandle(node.data, role, fromExec);
        if (compatible) {
          const newEdge =
            role === 'target'
              ? {
                  id: `e_${pending.nodeId}_${node.id}_${Date.now().toString(36)}`,
                  source: pending.nodeId,
                  sourceHandle: pending.handleId,
                  target: node.id,
                  targetHandle: compatible,
                }
              : {
                  id: `e_${node.id}_${pending.nodeId}_${Date.now().toString(36)}`,
                  source: node.id,
                  sourceHandle: compatible,
                  target: pending.nodeId,
                  targetHandle: pending.handleId,
                };
          setEdges((eds) => {
            // Honor the one-wire-per-input rule.
            const cleaned = eds.filter(
              (e) =>
                !(
                  e.target === newEdge.target &&
                  e.targetHandle === newEdge.targetHandle
                ),
            );
            return [...cleaned, newEdge];
          });
        }
      }
      setAddMenu(null);
    },
    [addMenu, setNodes, setEdges],
  );

  return (
    <div
      ref={wrapperRef}
      className="ebn-flow-wrapper"
      onContextMenu={onContextMenu}
    >
      <ReactFlow
        nodes={nodes}
        edges={decoratedEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        isValidConnection={isValidConnection}
        onEdgeUpdate={onReconnect}
        onEdgeUpdateStart={onReconnectStart}
        onEdgeUpdateEnd={onReconnectEnd}
        onPaneClick={onPaneClick}
        onNodeDragStop={onNodeDragStop}
        edgesUpdatable
        edgesFocusable
        deleteKeyCode={['Backspace', 'Delete']}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#333" gap={20} size={1} />
        <Controls />
        <MiniMap
          maskColor="rgba(0,0,0,0.6)"
          nodeColor="#2d2d30"
          style={{ background: '#252526' }}
        />
      </ReactFlow>

      {knifeScreen && (
        <svg className="ebn-knife">
          <line
            x1={knifeScreen.x1} y1={knifeScreen.y1}
            x2={knifeScreen.x2} y2={knifeScreen.y2}
            stroke="#ff5a5a"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
        </svg>
      )}

      {addMenu && (
        <AddNodeMenu
          screen={addMenu.screen}
          onPick={onPickFromMenu}
          onClose={() => setAddMenu(null)}
          hint={
            addMenu.pending
              ? `Connecting from ${addMenu.pending.handleId}`
              : null
          }
        />
      )}
    </div>
  );
}

export default function FlowCanvas(props) {
  // One provider per canvas instance keeps each FlowCanvas's viewport
  // ("camera") and internal store fully isolated from the others, so
  // mounting/unmounting one canvas leaf doesn't disturb its siblings.
  return (
    <ReactFlowProvider>
      <FlowCanvasInner {...props} />
    </ReactFlowProvider>
  );
}
