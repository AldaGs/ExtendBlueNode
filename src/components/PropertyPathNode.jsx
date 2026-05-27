import { useCallback } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import './EBNNode.css';
import './MathNode.css';
import './PropertyPathNode.css';

const THEME = '#356a83';

// Common AE match-name chains. The user can still pick "Custom" and
// type a freeform '/'-separated path.
const PRESETS = [
  { id: 'opacity',  label: 'Opacity',  path: 'ADBE Transform Group/ADBE Opacity' },
  { id: 'position', label: 'Position', path: 'ADBE Transform Group/ADBE Position' },
  { id: 'scale',    label: 'Scale',    path: 'ADBE Transform Group/ADBE Scale' },
  { id: 'rotation', label: 'Rotation', path: 'ADBE Transform Group/ADBE Rotate Z' },
  { id: 'anchor',   label: 'Anchor',   path: 'ADBE Transform Group/ADBE Anchor Point' },
  { id: 'custom',   label: 'Custom…',  path: '' },
];

function presetFromPath(path) {
  const hit = PRESETS.find((p) => p.path && p.path === path);
  return hit ? hit.id : 'custom';
}

export default function PropertyPathNode({ id, data, selected }) {
  const { setNodes } = useReactFlow();
  const path = data?.path ?? 'ADBE Transform Group/ADBE Opacity';
  const preset = data?.preset ?? presetFromPath(path);

  const patch = useCallback(
    (next) => {
      setNodes((nds) =>
        nds.map((n) => (n.id !== id ? n : { ...n, data: { ...n.data, ...next } })),
      );
    },
    [setNodes, id],
  );

  const onPresetChange = (e) => {
    const id_ = e.target.value;
    const p = PRESETS.find((x) => x.id === id_);
    if (!p) return;
    patch({ preset: id_, path: id_ === 'custom' ? path : p.path });
  };

  const onPathChange = (e) => {
    patch({ preset: 'custom', path: e.target.value });
  };

  return (
    <div className={`ebn-node ebn-proppath${selected ? ' ebn-node--selected' : ''}`}>
      <div className="ebn-node__header" style={{ background: THEME }}>
        <span className="ebn-node__title">Property Path</span>
      </div>
      <div className="ebn-node__body ebn-math__body">
        <div className="ebn-math__row">
          <span className="ebn-math__row-label">Preset</span>
          <select
            className="ebn-math__select"
            value={preset}
            onChange={onPresetChange}
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {PRESETS.map((p) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
          </select>
        </div>

        <div className="ebn-proppath__row">
          <span className="ebn-proppath__label">Path</span>
          <input
            className="ebn-proppath__input"
            type="text"
            value={path}
            spellCheck={false}
            placeholder="ADBE Transform Group/ADBE Opacity"
            onChange={onPathChange}
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          />
        </div>

        <div className="ebn-node__port ebn-node__port--out">
          <span className="ebn-node__port-label">Path</span>
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
