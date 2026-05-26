import { useCallback, useEffect, useRef } from 'react';
import './PropertiesPanel.css';

const JS_IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

function shake(el) {
  if (!el || typeof el.animate !== 'function') return;
  el.animate(
    [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-4px)' },
      { transform: 'translateX(4px)' },
      { transform: 'translateX(-3px)' },
      { transform: 'translateX(3px)' },
      { transform: 'translateX(0)' },
    ],
    { duration: 320, easing: 'ease-out' },
  );
}

export default function PropertiesPanel({
  selectedNode,
  setNodes,
  onValidityChange,
}) {
  const labelRef = useRef(null);
  const varRef = useRef(null);

  const label = selectedNode?.data?.label ?? '';
  const variableName = selectedNode?.data?.variableName ?? '';

  const labelValid = !selectedNode || label.trim().length > 0;
  // Variable name is optional. If present, must be a valid JS identifier.
  const varValid =
    !selectedNode || variableName === '' || JS_IDENTIFIER.test(variableName);

  useEffect(() => {
    onValidityChange?.(labelValid && varValid);
  }, [labelValid, varValid, onValidityChange]);

  const patch = useCallback(
    (key, value, ref) => {
      if (!selectedNode) return;
      setNodes((nds) =>
        nds.map((n) =>
          n.id !== selectedNode.id
            ? n
            : { ...n, data: { ...n.data, [key]: value } },
        ),
      );
      // Validate the new value and shake if it would land in an invalid state.
      const wouldBeInvalid =
        (key === 'label' && value.trim().length === 0) ||
        (key === 'variableName' && value !== '' && !JS_IDENTIFIER.test(value));
      if (wouldBeInvalid) shake(ref.current);
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

  return (
    <div className="ebn-props">
      <div className="ebn-props__meta">
        <span className="ebn-props__chip">{type}</span>
        <span className="ebn-props__id">{id}</span>
      </div>

      <label className="ebn-props__field">
        <span className="ebn-props__label">Node Label</span>
        <input
          ref={labelRef}
          className={`ebn-props__input${labelValid ? '' : ' ebn-props__input--invalid'}`}
          type="text"
          value={label}
          onChange={(e) => patch('label', e.target.value, labelRef)}
          placeholder="Display name"
        />
        {!labelValid && (
          <span className="ebn-props__error">Label cannot be empty.</span>
        )}
      </label>

      <label className="ebn-props__field">
        <span className="ebn-props__label">Variable Name</span>
        <input
          ref={varRef}
          className={`ebn-props__input${varValid ? '' : ' ebn-props__input--invalid'}`}
          type="text"
          value={variableName}
          onChange={(e) => patch('variableName', e.target.value, varRef)}
          placeholder="e.g. opacity_offset"
          spellCheck={false}
          autoComplete="off"
        />
        {varValid ? (
          <span className="ebn-props__hint">
            Letters, digits, _ and $. Must not start with a digit. Leave blank for the auto name.
          </span>
        ) : (
          <span className="ebn-props__error">
            Invalid identifier — no spaces or special characters, and can't start with a digit.
          </span>
        )}
      </label>
    </div>
  );
}
