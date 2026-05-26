import { useCallback } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { useGlobals } from '../state/GlobalsContext';
import './PrimitiveNode.css';
import './GlobalNode.css';

const THEME = '#4a2a6a'; // dark purple

export default function GetGlobalNode({ id, data, selected }) {
  const { setNodes } = useReactFlow();
  const { globalVariables } = useGlobals();
  const globalId = data?.globalId ?? '';

  const onChange = useCallback(
    (e) => {
      const next = e.target.value || null;
      setNodes((nds) =>
        nds.map((n) =>
          n.id !== id ? n : { ...n, data: { ...n.data, globalId: next } },
        ),
      );
    },
    [setNodes, id],
  );

  return (
    <div className={`ebn-prim ebn-global${selected ? ' ebn-prim--selected' : ''}`}>
      <div className="ebn-prim__header" style={{ background: THEME }}>
        Get Global
      </div>
      <div className="ebn-prim__body">
        <select
          className="ebn-global__select"
          value={globalId || ''}
          onChange={onChange}
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <option value="">— select —</option>
          {globalVariables.map((v) => (
            <option key={v.id} value={v.id}>
              {v.name || '(unnamed)'}
            </option>
          ))}
        </select>
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
