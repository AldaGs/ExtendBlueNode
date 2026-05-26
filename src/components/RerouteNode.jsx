import { Handle, Position } from 'reactflow';
import './RerouteNode.css';

export default function RerouteNode({ selected }) {
  return (
    <div className={`ebn-reroute${selected ? ' ebn-reroute--selected' : ''}`}>
      <Handle type="target" position={Position.Left} id="in"  className="ebn-reroute__handle" />
      <Handle type="source" position={Position.Right} id="out" className="ebn-reroute__handle" />
    </div>
  );
}
