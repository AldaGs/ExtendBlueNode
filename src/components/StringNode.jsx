import { useCallback } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import './PrimitiveNode.css';

const THEME = '#7a3fa0'; // muted data-purple

export default function StringNode({ id, data, selected }) {
  const { setNodes } = useReactFlow();
  const value = data?.value ?? '';

  const onChange = useCallback(
    (e) => {
      const next = e.target.value;
      setNodes((nds) =>
        nds.map((n) =>
          n.id !== id ? n : { ...n, data: { ...n.data, value: next } },
        ),
      );
    },
    [setNodes, id],
  );

  return (
    <div className={`ebn-prim${selected ? ' ebn-prim--selected' : ''}`}>
      <div className="ebn-prim__header" style={{ background: THEME }}>
        {data?.label ?? 'String'}
      </div>
      <div className="ebn-prim__body">
        <input
          className="ebn-prim__input"
          type="text"
          value={value}
          onChange={onChange}
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="value"
          className="ebn-prim__handle"
        />
      </div>
    </div>
  );
}
