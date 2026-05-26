import { Handle, Position } from 'reactflow';
import './EBNNode.css';

export default function EBNNode({ data, selected }) {
  const {
    label = 'Node',
    themeColor = '#4a8fe0',
    inputs = [],
    outputs = [],
  } = data || {};

  return (
    <div className={`ebn-node${selected ? ' ebn-node--selected' : ''}`}>
      <div className="ebn-node__header" style={{ background: themeColor }}>
        <span className="ebn-node__title">{label}</span>
      </div>

      <div className="ebn-node__body">
        <div className="ebn-node__col ebn-node__col--in">
          {inputs.map((port) => (
            <div className="ebn-node__port" key={`in-${port.id}`}>
              <Handle
                type="target"
                position={Position.Left}
                id={port.id}
                className="ebn-node__handle"
                style={port.color ? { background: port.color } : undefined}
              />
              <span className="ebn-node__port-label">{port.label}</span>
            </div>
          ))}
        </div>

        <div className="ebn-node__col ebn-node__col--out">
          {outputs.map((port) => (
            <div className="ebn-node__port ebn-node__port--out" key={`out-${port.id}`}>
              <span className="ebn-node__port-label">{port.label}</span>
              <Handle
                type="source"
                position={Position.Right}
                id={port.id}
                className="ebn-node__handle"
                style={port.color ? { background: port.color } : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
