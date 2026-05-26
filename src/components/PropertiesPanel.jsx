import { useCallback } from 'react';
import './PropertiesPanel.css';

export default function PropertiesPanel({ selectedNode, setNodes }) {
  const patch = useCallback(
    (key, value) => {
      if (!selectedNode) return;
      setNodes((nds) =>
        nds.map((n) =>
          n.id !== selectedNode.id
            ? n
            : { ...n, data: { ...n.data, [key]: value } },
        ),
      );
    },
    [selectedNode, setNodes],
  );

  if (!selectedNode) {
    return (
      <div className="ebn-props ebn-props--empty">
        Select a node to edit properties.
      </div>
    );
  }

  const { id, type } = selectedNode;
  const label = selectedNode.data?.label ?? '';
  const variableName = selectedNode.data?.variableName ?? '';

  return (
    <div className="ebn-props">
      <div className="ebn-props__meta">
        <span className="ebn-props__chip">{type}</span>
        <span className="ebn-props__id">{id}</span>
      </div>

      <label className="ebn-props__field">
        <span className="ebn-props__label">Node Label</span>
        <input
          className="ebn-props__input"
          type="text"
          value={label}
          onChange={(e) => patch('label', e.target.value)}
          placeholder="Display name"
        />
      </label>

      <label className="ebn-props__field">
        <span className="ebn-props__label">Variable Name</span>
        <input
          className="ebn-props__input"
          type="text"
          value={variableName}
          onChange={(e) => patch('variableName', e.target.value)}
          placeholder="e.g. opacity_offset"
          spellCheck={false}
          autoComplete="off"
        />
        <span className="ebn-props__hint">
          Used by the compiler. Invalid characters are sanitized to underscores.
        </span>
      </label>
    </div>
  );
}
