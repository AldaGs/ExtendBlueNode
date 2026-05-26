import { useEffect, useRef, useState } from 'react';
import './ProjectMenu.css';

export default function ProjectMenu({ onNew, onOpen, onSave }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
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

  const fire = (fn) => () => {
    setOpen(false);
    fn?.();
  };

  return (
    <div className="ebn-projmenu" ref={ref}>
      <button
        type="button"
        className={`ebn-projmenu__trigger${open ? ' ebn-projmenu__trigger--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
      >
        Project
        <svg
          className={`ebn-projmenu__caret${open ? ' ebn-projmenu__caret--up' : ''}`}
          width="9" height="9" viewBox="0 0 10 10" aria-hidden="true"
        >
          <path d="M2 4l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="ebn-projmenu__menu">
          <button type="button" className="ebn-projmenu__item" onClick={fire(onNew)}>
            New Project
            <span className="ebn-projmenu__kbd">⌘N</span>
          </button>
          <button type="button" className="ebn-projmenu__item" onClick={fire(onOpen)}>
            Open .ebn…
            <span className="ebn-projmenu__kbd">⌘O</span>
          </button>
          <button type="button" className="ebn-projmenu__item" onClick={fire(onSave)}>
            Save As…
            <span className="ebn-projmenu__kbd">⌘S</span>
          </button>
        </div>
      )}
    </div>
  );
}
