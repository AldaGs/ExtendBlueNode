import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
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
  const labelIdx = item.label.toLowerCase().indexOf(needle);
  return labelIdx === 0 ? 3 : labelIdx > 0 ? 2 : 1;
}

const CLOSE_GRACE_MS = 120;

export default function AddNodeMenu({ screen, onPick, onClose, hint }) {
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState(0);
  const [openCat, setOpenCat] = useState(null); // category.name
  const [subPos, setSubPos] = useState({ left: 0, top: 0 });

  const inputRef = useRef(null);
  const rootRef = useRef(null);
  const subRef = useRef(null);
  const rowRefs = useRef({}); // catName -> HTMLElement
  const closeTimerRef = useRef(null);

  const flat = useMemo(() => flattenLibrary(), []);

  const filtered = useMemo(() => {
    if (!query.trim()) return null;
    return flat
      .map((it) => ({ it, s: scoreItem(it, query.trim()) }))
      .filter(({ s }) => s >= 0)
      .sort((a, b) => b.s - a.s)
      .map(({ it }) => it);
  }, [flat, query]);

  const categorizedFlat = useMemo(
    () => NODE_LIBRARY.flatMap((c) => c.items.map((i) => ({ ...i, category: c.category }))),
    [],
  );

  const navList = filtered ?? categorizedFlat;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close-the-menu listeners. Esc + any outside pointer/right-click.
  // Mount-once (deps: [onClose]) so they're never torn down by
  // unrelated state churn (highlight, query, etc.). Capture phase so
  // we run before React Flow's own canvas handlers.
  useEffect(() => {
    const isInsideMenu = (target) =>
      !!(rootRef.current?.contains(target) || subRef.current?.contains(target));

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };
    const onOutsideDown = (e) => {
      if (isInsideMenu(e.target)) return;
      onClose();
    };
    const onOutsideContext = (e) => {
      // If a fresh right-click lands outside the menu, let the canvas
      // handler open its own menu — but make sure THIS one closes
      // first so we don't stack two popups.
      if (isInsideMenu(e.target)) return;
      onClose();
    };

    window.addEventListener('keydown', onKey, true);
    window.addEventListener('pointerdown', onOutsideDown, true);
    window.addEventListener('mousedown', onOutsideDown, true);
    window.addEventListener('contextmenu', onOutsideContext, true);
    return () => {
      window.removeEventListener('keydown', onKey, true);
      window.removeEventListener('pointerdown', onOutsideDown, true);
      window.removeEventListener('mousedown', onOutsideDown, true);
      window.removeEventListener('contextmenu', onOutsideContext, true);
    };
  }, [onClose]);

  // Keyboard nav inside the menu — kept separate so it re-binds on
  // highlight/list changes without disturbing the close listeners.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlight((h) => Math.min(h + 1, navList.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlight((h) => Math.max(h - 1, 0));
      } else if (e.key === 'Enter') {
        const pick = navList[highlight];
        if (pick) {
          e.preventDefault();
          onPick(pick);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onPick, navList, highlight]);

  // Close the submenu if the user scrolls anywhere — the row's fixed
  // coords stop being correct otherwise.
  useEffect(() => {
    if (!openCat) return;
    const onScroll = (e) => {
      // Allow scrolling the submenu itself without closing it
      if (subRef.current && subRef.current.contains(e.target)) return;
      setOpenCat(null);
    };
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, [openCat]);

  // Reposition the submenu whenever the active category changes; also
  // scroll the active row into view if it would land off-screen.
  useLayoutEffect(() => {
    if (!openCat) return;
    const row = rowRefs.current[openCat];
    if (!row) return;
    row.scrollIntoView({ block: 'nearest' });
    const r = row.getBoundingClientRect();
    // Anchor the submenu's top to the row's top, shifted up 4 px to
    // overlap nicely. Horizontal: r.right + a hair so it abuts the row.
    let left = r.right + 2;
    let top = r.top - 4;
    // Soft-flip horizontally if we'd run off the right edge of the
    // viewport. (Vertical flip can wait until anyone hits it.)
    const subW = subRef.current?.offsetWidth ?? 200;
    const vw = window.innerWidth || document.documentElement.clientWidth;
    if (left + subW > vw - 4) left = Math.max(4, r.left - subW - 2);
    setSubPos({ left, top });
  }, [openCat]);

  const keepOpen = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = () => {
    keepOpen();
    closeTimerRef.current = setTimeout(() => setOpenCat(null), CLOSE_GRACE_MS);
  };

  // Item rendering for both filtered (flat search) and category view.
  const renderFlatItem = (item, i) => (
    <button
      key={`${item.category}/${item.type}`}
      type="button"
      className={`ebn-addmenu__item${i === highlight ? ' ebn-addmenu__item--hot' : ''}`}
      onMouseEnter={() => setHighlight(i)}
      onClick={() => onPick(item)}
    >
      <span className="ebn-addmenu__cat-tag">{item.category}</span>
      <span className="ebn-addmenu__label">{item.label}</span>
    </button>
  );

  const activeCat =
    openCat && NODE_LIBRARY.find((c) => c.category === openCat);

  return (
    <>
      <div
        ref={rootRef}
        className="ebn-addmenu"
        style={{ left: screen.x, top: screen.y }}
        onContextMenu={(e) => e.preventDefault()}
        onMouseLeave={scheduleClose}
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
            setOpenCat(null);
          }}
        />

        <div className="ebn-addmenu__list">
          {filtered ? (
            filtered.length === 0 ? (
              <div className="ebn-addmenu__empty">No matches.</div>
            ) : (
              filtered.map(renderFlatItem)
            )
          ) : (
            NODE_LIBRARY.map((cat) => {
              const isOpen = openCat === cat.category;
              return (
                <button
                  key={cat.category}
                  type="button"
                  ref={(el) => { rowRefs.current[cat.category] = el; }}
                  className={`ebn-addmenu__cat-row${isOpen ? ' ebn-addmenu__cat-row--open' : ''}`}
                  onMouseEnter={() => { keepOpen(); setOpenCat(cat.category); }}
                  onFocus={() => { keepOpen(); setOpenCat(cat.category); }}
                  onClick={() => setOpenCat(isOpen ? null : cat.category)}
                >
                  <span className="ebn-addmenu__cat-name">{cat.category}</span>
                  <span className="ebn-addmenu__cat-count">{cat.items.length}</span>
                  <svg
                    className="ebn-addmenu__cat-arrow"
                    width="8" height="8" viewBox="0 0 8 8" aria-hidden="true"
                  >
                    <path d="M2.5 1.5l3 2.5-3 2.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
              );
            })
          )}
        </div>
      </div>

      {activeCat && (
        <div
          ref={subRef}
          className="ebn-addmenu__sub"
          style={{
            position: 'fixed',
            left: subPos.left,
            top: subPos.top,
          }}
          onMouseEnter={keepOpen}
          onMouseLeave={scheduleClose}
        >
          {activeCat.items.map((item) => (
            <button
              key={item.type}
              type="button"
              className="ebn-addmenu__item"
              onClick={() => onPick({ ...item, category: activeCat.category })}
            >
              <span className="ebn-addmenu__label">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
