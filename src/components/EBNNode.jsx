import { Handle, Position } from 'reactflow';
import SmartInput from './SmartInput';
import './EBNNode.css';
import './SmartInput.css';

export default function EBNNode({ id, data, selected }) {
  const {
    label = 'Node',
    themeColor = '#4a8fe0',
    inputs = [],
    outputs = [],
    values = {},
  } = data || {};

  return (
    <div className={`ebn-node${selected ? ' ebn-node--selected' : ''}`}>
      <div className="ebn-node__header" style={{ background: themeColor }}>
        <span className="ebn-node__title">{label}</span>
      </div>

      <div className="ebn-node__body">
        <div className="ebn-node__col ebn-node__col--in">
          {inputs.map((port) => {
            const isExec = port.type === 'exec';
            if (isExec) {
              return (
                <div className="ebn-node__port" key={`in-${port.id}`}>
                  <Handle
                    type="target"
                    position={Position.Left}
                    id={port.id}
                    className="ebn-node__handle"
                  />
                  <span className="ebn-node__port-label">{port.label}</span>
                </div>
              );
            }
            return (
              <SmartInput
                key={`in-${port.id}`}
                nodeId={id}
                handleId={port.id}
                label={port.label}
                type={port.type || 'text'}
                value={values[port.id]}
                placeholder={port.placeholder}
              />
            );
          })}
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
