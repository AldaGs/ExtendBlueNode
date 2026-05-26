import { useCallback } from 'react';
import { Handle, Position, useReactFlow, useStore } from 'reactflow';

// Selector lives outside the component so the equality check is stable.
const selectEdges = (s) => s.edges;

export default function SmartInput({
  nodeId,
  handleId,
  label,
  type = 'text',
  value = '',
  placeholder,
  editable = true,
}) {
  const { setNodes } = useReactFlow();
  const edges = useStore(selectEdges);

  const isConnected = edges.some(
    (e) => e.target === nodeId && e.targetHandle === handleId,
  );

  const onChange = useCallback(
    (e) => {
      const raw = e.target.value;
      const next = type === 'number' ? (raw === '' ? '' : Number(raw)) : raw;
      setNodes((nds) =>
        nds.map((n) =>
          n.id !== nodeId
            ? n
            : {
                ...n,
                data: {
                  ...n.data,
                  values: { ...(n.data?.values || {}), [handleId]: next },
                },
              },
        ),
      );
    },
    [setNodes, nodeId, handleId, type],
  );

  return (
    <div className="ebn-smart">
      <Handle
        type="target"
        position={Position.Left}
        id={handleId}
        className="ebn-node__handle"
      />
      <span className="ebn-smart__label">{label}</span>
      {editable && (
        isConnected ? (
          <span className="ebn-smart__pill" title="Driven by a wire">
            Linked
          </span>
        ) : (
          <input
            className="ebn-smart__input"
            type={type === 'number' ? 'number' : 'text'}
            value={value ?? ''}
            placeholder={placeholder}
            onChange={onChange}
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          />
        )
      )}
    </div>
  );
}
