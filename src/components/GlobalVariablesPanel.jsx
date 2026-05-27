import { useCallback } from 'react';
import './GlobalVariablesPanel.css';

const TYPES = ['Integer', 'Float', 'String'];

function newId() {
  return `gv_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
}

export default function GlobalVariablesPanel({
  globalVariables,
  setGlobalVariables,
  onSpawnRef,
}) {
  const add = useCallback(() => {
    setGlobalVariables((vs) => [
      ...vs,
      { id: newId(), name: '', type: 'Integer', initialValue: '0' },
    ]);
  }, [setGlobalVariables]);

  const patch = useCallback(
    (id, key, value) => {
      setGlobalVariables((vs) =>
        vs.map((v) => (v.id === id ? { ...v, [key]: value } : v)),
      );
    },
    [setGlobalVariables],
  );

  const remove = useCallback(
    (id) => {
      setGlobalVariables((vs) => vs.filter((v) => v.id !== id));
    },
    [setGlobalVariables],
  );

  return (
    <div className="ebn-globals">
      <button type="button" className="ebn-globals__add" onClick={add}>
        + Add New Variable
      </button>

      {globalVariables.length === 0 && (
        <div className="ebn-globals__empty">
          No globals defined. Add one to use it in Get / Set Global nodes.
        </div>
      )}

      <ul className="ebn-globals__list">
        {globalVariables.map((v) => (
          <li key={v.id} className="ebn-globals__row">
            <input
              className="ebn-globals__input ebn-globals__input--name"
              type="text"
              placeholder="name"
              value={v.name}
              spellCheck={false}
              onChange={(e) => patch(v.id, 'name', e.target.value)}
            />
            <select
              className="ebn-globals__select"
              value={v.type}
              onChange={(e) => patch(v.id, 'type', e.target.value)}
            >
              {TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <input
              className="ebn-globals__input ebn-globals__input--value"
              type={v.type === 'String' ? 'text' : 'number'}
              step={v.type === 'Float' ? 'any' : '1'}
              placeholder="initial"
              value={v.initialValue}
              onChange={(e) => patch(v.id, 'initialValue', e.target.value)}
            />
            <button
              type="button"
              className="ebn-globals__chip ebn-globals__chip--get"
              onClick={() => onSpawnRef?.(v.id, 'get')}
              disabled={!v.name?.trim() || !onSpawnRef}
              title="Add Get Global node referencing this variable"
            >
              + Get
            </button>
            <button
              type="button"
              className="ebn-globals__chip ebn-globals__chip--set"
              onClick={() => onSpawnRef?.(v.id, 'set')}
              disabled={!v.name?.trim() || !onSpawnRef}
              title="Add Set Global node referencing this variable"
            >
              + Set
            </button>
            <button
              type="button"
              className="ebn-globals__del"
              onClick={() => remove(v.id)}
              title="Delete"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
