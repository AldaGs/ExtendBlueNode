import { Handle, Position } from 'reactflow';
import SmartInput from './SmartInput';
import './EBNNode.css';
import './SmartInput.css';
import './MathNode.css';

// Data-side ternary: cond ? if_true : if_false → value.
const THEME = '#5b3fa0';

export default function SelectNode({ id, data, selected }) {
  return (
    <div className={`ebn-node ebn-math${selected ? ' ebn-node--selected' : ''}`}>
      <div className="ebn-node__header" style={{ background: THEME }}>
        <span className="ebn-node__title">Select (a ? b : c)</span>
      </div>
      <div className="ebn-node__body ebn-math__body">
        <SmartInput nodeId={id} handleId="cond"     label="Condition" type="text"   value={data?.values?.cond} placeholder="true" />
        <SmartInput nodeId={id} handleId="if_true"  label="If True"   type="number" value={data?.values?.if_true} />
        <SmartInput nodeId={id} handleId="if_false" label="If False"  type="number" value={data?.values?.if_false} />

        <div className="ebn-node__port ebn-node__port--out">
          <span className="ebn-node__port-label">Value</span>
          <Handle
            type="source"
            position={Position.Right}
            id="value"
            className="ebn-node__handle"
          />
        </div>
      </div>
    </div>
  );
}
