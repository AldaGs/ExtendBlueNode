import { BaseEdge, getBezierPath } from 'reactflow';
import './FlowEdge.css';

// Default edge for EBN. Renders the standard bezier line plus a small
// dot riding the path so data flow direction reads at a glance.
// Exec wires get a slightly larger / faster dot than data wires.
export default function FlowEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  style,
  selected,
  sourceHandleId,
}) {
  const [path] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const isExec = sourceHandleId === 'exec_out';

  return (
    <>
      <BaseEdge
        id={id}
        path={path}
        markerEnd={markerEnd}
        style={style}
      />
      <circle
        r={isExec ? 2.6 : 2.1}
        className={[
          'ebn-edge__dot',
          isExec ? 'ebn-edge__dot--exec' : 'ebn-edge__dot--data',
          selected ? 'ebn-edge__dot--selected' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <animateMotion
          dur={isExec ? '1.6s' : '2.2s'}
          repeatCount="indefinite"
          path={path}
          rotate="auto"
        />
      </circle>
    </>
  );
}
