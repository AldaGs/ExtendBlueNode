import { useEffect, useMemo, useRef, useState } from 'react';
import { NODE_LIBRARY, flattenLibrary } from '../nodeLibrary';
import './AddNodeMenu.css';

// Score a library item against the user's query. Returns -1 when it
// doesn't match at all.
function scoreItem(item, q) {
  if (!q) return 0;
  const hay = [
    item.label,
    item.category,
    item.type,
    ...(item.keywords || []),
  ]
    .join(' ')
    .toLowerCase();
  const needle = q.toLowerCase();
  if (!hay.includes(needle)) return -1;
  // Crude ranking: earlier matches in label score higher.
  const labelIdx = item.label.toLowerCase().indexOf(needle);
  return labelIdx === 0 ? 3 : labelIdx > 0 ? 2 : 1;
}

export default function AddNodeMenu({ screen, onPick, onClose, hint }) {
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState(0);
  const inputRef = useRef(null);
  const rootRef = useRef(null);

  const flat = useMemo(() => flattenLibrary(), []);

  const filtered = useMemo(() => {
    if (!query.trim()) return null; // signal: use categorized view
    return flat
      .map((it) => ({ it, s: scoreItem(it, query.trim()) }))
      .filter(({ s }) => s >= 0)
      .sort((a, b) => b.s - a.s)
      .map(({ it }) => it);
  }, [flat, query]);

  // Categorized fallback (also used for keyboard nav numbering).
  const categorizedFlat = useMemo(
    () => NODE_LIBRARY.flatMap((c) => c.items.map((i) => ({ ...i, category: c.category }))),
    [],
  );

  const navList = filtered ?? categorizedFlat;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on Esc / outside click.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlight((h) => Math.min(h + 1, navList.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlight((h) => Math.max(h - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const pick = navList[highlight];
        if (pick) onPick(pick);
      }
    };
    const onDocDown = (e) => {
      if (!rootRef.current?.contains(e.target)) onClose();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onDocDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onDocDown);
    };
  }, [onClose, onPick, navList, highlight]);

  return (
    <div
      ref={rootRef}
      className="ebn-addmenu"
      style={{ left: screen.x, top: screen.y }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {hint && <div className="ebn-addmenu__hint">{hint}</div>}
      <input
        ref={inputRef}
        className="ebn-addmenu__search"
        placeholder="Search nodes…"
        value={query}
        spellCheck={false}
        autoComplete="off"
        onChange={(e) => {
          setQuery(e.target.value);
          setHighlight(0);
        }}
      />

      <div className="ebn-addmenu__list">
        {filtered ? (
          filtered.length === 0 ? (
            <div className="ebn-addmenu__empty">No matches.</div>
          ) : (
            filtered.map((item, i) => (
              <button
                key={`${item.category}/${item.type}`}
                type="button"
                className={`ebn-addmenu__item${i === highlight ? ' ebn-addmenu__item--hot' : ''}`}
                onMouseEnter={() => setHighlight(i)}
                onClick={() => onPick(item)}
              >
                <span className="ebn-addmenu__cat">{item.category}</span>
                <span className="ebn-addmenu__label">{item.label}</span>
              </button>
            ))
          )
        ) : (
          NODE_LIBRARY.map((cat) => (
            <div className="ebn-addmenu__group" key={cat.category}>
              <div className="ebn-addmenu__group-title">{cat.category}</div>
              {cat.items.map((item) => {
                const idx = categorizedFlat.findIndex(
                  (x) => x.category === cat.category && x.type === item.type,
                );
                return (
                  <button
                    key={item.type}
                    type="button"
                    className={`ebn-addmenu__item${idx === highlight ? ' ebn-addmenu__item--hot' : ''}`}
                    onMouseEnter={() => setHighlight(idx)}
                    onClick={() => onPick({ ...item, category: cat.category })}
                  >
                    <span className="ebn-addmenu__label">{item.label}</span>
                  </button>
                );
              })}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
