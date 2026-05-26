import { useCallback, useMemo, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  updateEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { initialNodes, initialEdges } from '../graph/initialGraph';
import EBNNode from './EBNNode';

function FlowCanvasInner() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(() => ({ ebnNode: EBNNode }), []);

  // Inputs are single-fan-in: drop any pre-existing edge to the same
  // target handle before adding the new one ("split / replace").
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => {
        const filtered = eds.filter(
          (e) =>
            !(
              e.target === params.target &&
              e.targetHandle === params.targetHandle
            ),
        );
        return addEdge(params, filtered);
      }),
    [setEdges],
  );

  // Enforce one connection per input handle from any source (paste/programmatic too).
  const isValidConnection = useCallback(
    (conn) => {
      if (conn.source === conn.target) return false;
      const occupied = edges.some(
        (e) => e.target === conn.target && e.targetHandle === conn.targetHandle,
      );
      // Allowed during reconnect because the old edge is dropped first.
      return !occupied || edgeReconnectSuccessful.current === false;
    },
    [edges],
  );

  // Reconnect (drag an existing endpoint to a new handle). If the drop
  // lands on empty canvas, delete the edge instead — that's the
  // "disconnect" gesture.
  const edgeReconnectSuccessful = useRef(true);

  const onReconnectStart = useCallback(() => {
    edgeReconnectSuccessful.current = false;
  }, []);

  const onReconnect = useCallback(
    (oldEdge, newConnection) => {
      edgeReconnectSuccessful.current = true;
      setEdges((eds) => {
        // Drop anything occupying the new target slot, then move the edge.
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

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      isValidConnection={isValidConnection}
      onEdgeUpdate={onReconnect}
      onEdgeUpdateStart={onReconnectStart}
      onEdgeUpdateEnd={onReconnectEnd}
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
  );
}

export default function FlowCanvas() {
  return (
    <ReactFlowProvider>
      <FlowCanvasInner />
    </ReactFlowProvider>
  );
}
