import { Handle, Position } from 'reactflow';
import './EBNNode.css';
import './GroupNode.css';

// Collapsed node-group. Renders the synthetic boundary handles captured at
// group time. Double-click (or the ⤢ button) asks FlowCanvas to ungroup via
// a DOM CustomEvent — keeps node.data fully serializable (no callbacks).
export default function GroupNode({ id, data, selected }) {
  const {
    label = 'Group',
    inputs = [],
    outputs = [],
    subNodes = [],
  } = data || {};

  const requestUngroup = () =>
    window.dispatchEvent(new CustomEvent('ebn-ungroup', { detail: { id } }));

  const requestRename = () => {
    const next = window.prompt('Group name:', label);
    if (next != null) {
      window.dispatchEvent(
        new CustomEvent('ebn-group-rename', { detail: { id, label: next } }),
      );
    }
  };

  return (
    <div
      className={`ebn-node ebn-group${selected ? ' ebn-node--selected' : ''}`}
      onDoubleClick={requestUngroup}
      title="Double-click to ungroup"
    >
      <div className="ebn-node__header ebn-group__header">
        <span className="ebn-node__title" onClick={requestRename}>▣ {label}</span>
        <button
          type="button"
          className="ebn-group__ungroup"
          onClick={requestUngroup}
          title="Ungroup"
        >⤢</button>
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
              />
            </div>
          ))}
        </div>
      </div>

      <div className="ebn-group__footer">{subNodes.length} node{subNodes.length === 1 ? '' : 's'}</div>
    </div>
  );
}
