import { Handle, Position } from 'reactflow';
import SmartInput from './SmartInput';
import './EBNNode.css';
import './SmartInput.css';

const THEME = '#7b4fa6';

export default function SplitVectorNode({ id, data, selected }) {
  return (
    <div className={`ebn-node${selected ? ' ebn-node--selected' : ''}`}>
      <div className="ebn-node__header" style={{ background: THEME }}>
        <span className="ebn-node__title">Split Vector</span>
      </div>
      <div className="ebn-node__body">
        <div className="ebn-node__col ebn-node__col--in">
          <SmartInput nodeId={id} handleId="vec" label="Vec" type="expr" value={data?.values?.vec} placeholder="[x, y]" />
        </div>
        <div className="ebn-node__col ebn-node__col--out">
          <div className="ebn-node__port ebn-node__port--out">
            <span className="ebn-node__port-label">X</span>
            <Handle type="source" position={Position.Right} id="x" className="ebn-node__handle" />
          </div>
          <div className="ebn-node__port ebn-node__port--out">
            <span className="ebn-node__port-label">Y</span>
            <Handle type="source" position={Position.Right} id="y" className="ebn-node__handle" />
          </div>
        </div>
      </div>
    </div>
  );
}
