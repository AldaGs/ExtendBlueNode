import { useCallback } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import SmartInput from './SmartInput';
import { useGlobals } from '../state/GlobalsContext';
import './EBNNode.css';
import './SmartInput.css';
import './GlobalNode.css';

const THEME = '#4a2a6a';

export default function SetGlobalNode({ id, data, selected }) {
  const { setNodes } = useReactFlow();
  const { globalVariables } = useGlobals();
  const globalId = data?.globalId ?? '';
  const selectedGlobal = globalVariables.find((g) => g.id === globalId);
  const inputType = selectedGlobal?.type === 'String' ? 'text' : 'number';

  const onSelect = useCallback(
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
    <div className={`ebn-node ebn-set-global${selected ? ' ebn-node--selected' : ''}`}>
      <div className="ebn-node__header" style={{ background: THEME }}>
        <span className="ebn-node__title">Set Global</span>
      </div>

      <div className="ebn-node__body ebn-set-global__body">
        <div className="ebn-node__port">
          <Handle
            type="target"
            position={Position.Left}
            id="exec_in"
            className="ebn-node__handle"
          />
          <span className="ebn-node__port-label">Execution</span>
        </div>
        <div className="ebn-node__port ebn-node__port--out">
          <span className="ebn-node__port-label">Execution</span>
          <Handle
            type="source"
            position={Position.Right}
            id="exec_out"
            className="ebn-node__handle"
          />
        </div>

        <div className="ebn-set-global__row">
          <span className="ebn-set-global__row-label">Target</span>
          <select
            className="ebn-global__select"
            value={globalId || ''}
            onChange={onSelect}
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
        </div>

        <SmartInput
          nodeId={id}
          handleId="value"
          label="Value"
          type={inputType}
          value={data?.values?.value}
        />
      </div>
    </div>
  );
}
