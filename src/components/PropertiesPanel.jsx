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
  onRequestScriptUIEditor,
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

  const patchInputs = useCallback(
    (newInputs) => {
      if (!selectedNode) return;
      setNodes((nds) =>
        nds.map((n) =>
          n.id !== selectedNode.id
            ? n
            : { ...n, data: { ...n.data, inputs: newInputs } },
        ),
      );
    },
    [selectedNode, setNodes],
  );

  const patchValues = useCallback(
    (key, value) => {
      if (!selectedNode) return;
      setNodes((nds) =>
        nds.map((n) =>
          n.id !== selectedNode.id
            ? n
            : { ...n, data: { ...n.data, values: { ...n.data.values, [key]: value } } },
        ),
      );
    },
    [selectedNode, setNodes],
  );

  // ScriptUI Builder output-pin sync now lives in App.jsx (runs for every
  // builder, not just the selected one) — see scriptUIBuilderOutputs.

  if (!selectedNode) {
    return (
      <div className="ebn-props ebn-props--empty">
        Select a node to edit properties.
      </div>
    );
  }

  const { id, type } = selectedNode;
  const nodeLabel = selectedNode.data?.label || '';
  const isObjectBuilder = nodeLabel === 'Object Builder';
  const isJsonIO = nodeLabel === 'Save JSON' || nodeLabel === 'Load JSON';
  const isScriptUIBuilder = nodeLabel === 'ScriptUI Builder';
  const isCustomCode = nodeLabel === 'Custom UI Code';
  const isUIEventListener = nodeLabel === 'UI Event Listener';
  const isLayersByClass = nodeLabel === 'Select Layers by Class';

  const scriptUIString = selectedNode?.data?.values?.scriptUI_string;

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

      {(isScriptUIBuilder || isCustomCode) && (
        <div className="ebn-props__section" style={{ marginTop: '12px' }}>
          <button
            type="button"
            className="ebn-props__btn ebn-btn-primary"
            style={{ width: '100%', padding: '8px' }}
            onClick={() => onRequestScriptUIEditor(isScriptUIBuilder ? 'uiLayout' : 'scriptUIEditor')}
          >
            Edit UI Layout
          </button>
        </div>
      )}

      {isUIEventListener && (
        <label className="ebn-props__field" style={{ marginTop: '12px' }}>
          <span className="ebn-props__label">Event Type</span>
          <select
            className="ebn-props__input"
            value={selectedNode.data.values?.event_type || 'onClick'}
            onChange={(e) => patchValues('event_type', e.target.value)}
          >
            <option value="onClick">onClick</option>
            <option value="onChange">onChange</option>
            <option value="onChanging">onChanging</option>
          </select>
        </label>
      )}

      {isLayersByClass && (
        <label className="ebn-props__field" style={{ marginTop: '12px' }}>
          <span className="ebn-props__label">Layer Class</span>
          <select
            className="ebn-props__input"
            value={selectedNode.data.values?.layer_class || 'AVLayer'}
            onChange={(e) => patchValues('layer_class', e.target.value)}
          >
            <option value="AVLayer">AVLayer</option>
            <option value="TextLayer">TextLayer</option>
            <option value="ShapeLayer">ShapeLayer</option>
            <option value="CameraLayer">CameraLayer</option>
            <option value="LightLayer">LightLayer</option>
          </select>
        </label>
      )}

      {isObjectBuilder && (
        <div className="ebn-props__section">
          <span className="ebn-props__label">Object Properties</span>
          {selectedNode.data.inputs.map((inp, idx) => (
            <div key={inp.id} style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
              <input
                className="ebn-props__input"
                type="text"
                value={inp.label}
                onChange={(e) => {
                  const newInputs = [...selectedNode.data.inputs];
                  newInputs[idx] = { ...inp, label: e.target.value };
                  patchInputs(newInputs);
                }}
                placeholder="Property Key"
              />
              <button
                type="button"
                className="ebn-props__btn"
                style={{ padding: '0 8px', flexShrink: 0 }}
                onClick={() => {
                  const newInputs = selectedNode.data.inputs.filter((_, i) => i !== idx);
                  patchInputs(newInputs);
                }}
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            className="ebn-props__btn"
            style={{ width: '100%', marginTop: '4px' }}
            onClick={() => {
              const newInputs = [
                ...selectedNode.data.inputs,
                { id: `prop_${Date.now()}`, label: `key${selectedNode.data.inputs.length + 1}`, type: 'expr' }
              ];
              patchInputs(newInputs);
            }}
          >
            + Add Property
          </button>
        </div>
      )}

      {isJsonIO && (
        <label className="ebn-props__field" style={{ marginTop: '12px' }}>
          <span className="ebn-props__label">Directory Mode</span>
          <select
            className="ebn-props__input"
            value={selectedNode.data.values?.directory_mode || 'Auto'}
            onChange={(e) => {
              const mode = e.target.value;
              patchValues('directory_mode', mode);
              
              // Update pins based on mode
              let inputs = [...selectedNode.data.inputs];
              inputs = inputs.filter(i => i.id !== 'file_name' && i.id !== 'full_path');
              
              if (mode === 'Auto') {
                inputs.push({ id: 'file_name', label: 'File Name', type: 'text', placeholder: 'settings.json' });
              } else {
                inputs.push({ id: 'full_path', label: 'Full Path', type: 'text', placeholder: 'C:/temp/settings.json' });
              }
              patchInputs(inputs);
            }}
          >
            <option value="Auto">Auto (User Data)</option>
            <option value="Custom">Custom Absolute Path</option>
          </select>
        </label>
      )}
    </div>
  );
}
