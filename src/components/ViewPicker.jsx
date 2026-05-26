import { useEffect, useRef, useState } from 'react';

// Adobe-flavored dark dropdown that replaces the native <select>.
// Controlled: parent owns viewId; onChange fires with the next id.
// onBeforeSwitch can veto by returning false.
export default function ViewPicker({ viewId, views, onChange, onBeforeSwitch }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = (id) => {
    if (id !== viewId) {
      if (onBeforeSwitch && !onBeforeSwitch(viewId, id)) return;
      onChange?.(id);
    }
    setOpen(false);
  };

  const ids = Object.keys(views);
  const current = views[viewId] || views[ids[0]];

  return (
    <div className="ebn-picker" ref={rootRef}>
      <button
        type="button"
        className={`ebn-picker__trigger${open ? ' ebn-picker__trigger--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        title="Switch view"
      >
        <span className="ebn-picker__current">{current?.title}</span>
        <svg
          className={`ebn-picker__caret${open ? ' ebn-picker__caret--up' : ''}`}
          width="9" height="9" viewBox="0 0 10 10" aria-hidden="true"
        >
          <path d="M2 4l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="ebn-picker__menu" role="listbox">
          {ids.map((id) => {
            const v = views[id];
            const active = id === viewId;
            return (
              <button
                key={id}
                type="button"
                role="option"
                aria-selected={active}
                className={`ebn-picker__item${active ? ' ebn-picker__item--active' : ''}`}
                onClick={() => choose(id)}
              >
                <span className="ebn-picker__check" aria-hidden="true">
                  {active ? '✓' : ''}
                </span>
                <span className="ebn-picker__label">{v.title}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
