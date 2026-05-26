import { useCallback } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import './PrimitiveNode.css';

const THEME = '#5b7eb3'; // muted data-blue

export default function IntegerNode({ id, data, selected }) {
  const { setNodes } = useReactFlow();
  const value = data?.value ?? 0;

  const onChange = useCallback(
    (e) => {
      const raw = e.target.value;
      const next = raw === '' ? 0 : Math.trunc(Number(raw));
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
        {data?.label ?? 'Integer'}
      </div>
      <div className="ebn-prim__body">
        <input
          className="ebn-prim__input"
          type="number"
          step="1"
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
