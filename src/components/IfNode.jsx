import { Handle, Position } from 'reactflow';
import SmartInput from './SmartInput';
import './EBNNode.css';
import './SmartInput.css';
import './IfNode.css';

const THEME = '#a36b1f';

export default function IfNode({ id, data, selected }) {
  return (
    <div className={`ebn-node ebn-if${selected ? ' ebn-node--selected' : ''}`}>
      <div className="ebn-node__header" style={{ background: THEME }}>
        <span className="ebn-node__title">If</span>
      </div>
      <div className="ebn-node__body ebn-if__body">
        <div className="ebn-node__port">
          <Handle
            type="target"
            position={Position.Left}
            id="exec_in"
            className="ebn-node__handle"
          />
          <span className="ebn-node__port-label">Execution</span>
        </div>

        <SmartInput
          nodeId={id}
          handleId="cond"
          label="Condition"
          type="text"
          value={data?.values?.cond}
          placeholder="true"
        />

        <div className="ebn-node__port ebn-node__port--out">
          <span className="ebn-node__port-label">Then</span>
          <Handle
            type="source"
            position={Position.Right}
            id="exec_then"
            className="ebn-node__handle"
          />
        </div>
        <div className="ebn-node__port ebn-node__port--out">
          <span className="ebn-node__port-label">Else</span>
          <Handle
            type="source"
            position={Position.Right}
            id="exec_else"
            className="ebn-node__handle"
          />
        </div>
      </div>
    </div>
  );
}
