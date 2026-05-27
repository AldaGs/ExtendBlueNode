import { Handle, Position } from 'reactflow';
import './EBNNode.css';
import './MathNode.css';

const THEME = '#3b6fb8';

// Iterates over comp.selectedLayers. Inside the body wire its `layer`
// source handle into anything that takes a Layer (Set Property, etc.)
// and the compiler resolves it to `loopLayer`.
export default function ForEachSelectedNode({ id, data, selected }) {
  return (
    <div className={`ebn-node ebn-math${selected ? ' ebn-node--selected' : ''}`}>
      <div className="ebn-node__header" style={{ background: THEME }}>
        <span className="ebn-node__title">For Each Selected Layer</span>
      </div>
      <div className="ebn-node__body ebn-math__body">
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
          <span className="ebn-node__port-label">Body</span>
          <Handle
            type="source"
            position={Position.Right}
            id="exec_body"
            className="ebn-node__handle"
          />
        </div>
        <div className="ebn-node__port ebn-node__port--out">
          <span className="ebn-node__port-label">Layer</span>
          <Handle
            type="source"
            position={Position.Right}
            id="layer"
            className="ebn-node__handle"
          />
        </div>
        <div className="ebn-node__port ebn-node__port--out">
          <span className="ebn-node__port-label">Done</span>
          <Handle
            type="source"
            position={Position.Right}
            id="exec_done"
            className="ebn-node__handle"
          />
        </div>
      </div>
    </div>
  );
}
