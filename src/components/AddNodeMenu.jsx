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
  const [openSubCat, setOpenSubCat] = useState(null); // subcategory.name
  const [subPos, setSubPos] = useState({ left: 0, top: 0 });
  const [thirdPos, setThirdPos] = useState({ left: 0, top: 0 });

  const inputRef = useRef(null);
  const rootRef = useRef(null);
  const subRef = useRef(null);
  const thirdRef = useRef(null);
  const rowRefs = useRef({}); // catName -> HTMLElement
  const subRowRefs = useRef({}); // subCatName -> HTMLElement
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

  const navList = filtered ?? flat; // Fall back to flat when keyboard navigating

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close-the-menu listeners
  useEffect(() => {
    const isInsideMenu = (target) =>
      !!(rootRef.current?.contains(target) || subRef.current?.contains(target) || thirdRef.current?.contains(target));

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

  // Keyboard nav inside the menu
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

  // Close submenus on scroll
  useEffect(() => {
    if (!openCat) return;
    const onScroll = (e) => {
      if (subRef.current && subRef.current.contains(e.target)) return;
      if (thirdRef.current && thirdRef.current.contains(e.target)) return;
      setOpenCat(null);
      setOpenSubCat(null);
    };
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, [openCat]);

  // Submenu Positioning
  useLayoutEffect(() => {
    if (!openCat) return;
    const row = rowRefs.current[openCat];
    if (!row) return;
    row.scrollIntoView({ block: 'nearest' });
    const r = row.getBoundingClientRect();
    let left = r.right + 2;
    let top = r.top - 4;
    const subW = subRef.current?.offsetWidth ?? 200;
    const vw = window.innerWidth || document.documentElement.clientWidth;
    if (left + subW > vw - 4) left = Math.max(4, r.left - subW - 2);
    setSubPos({ left, top });
  }, [openCat]);

  // Third Menu Positioning
  useLayoutEffect(() => {
    if (!openSubCat) return;
    const row = subRowRefs.current[openSubCat];
    if (!row) return;
    row.scrollIntoView({ block: 'nearest' });
    const r = row.getBoundingClientRect();
    let left = r.right + 2;
    let top = r.top - 4;
    const thirdW = thirdRef.current?.offsetWidth ?? 200;
    const vw = window.innerWidth || document.documentElement.clientWidth;
    if (left + thirdW > vw - 4) left = Math.max(4, r.left - thirdW - 2);
    setThirdPos({ left, top });
  }, [openSubCat]);

  const keepOpen = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = () => {
    keepOpen();
    closeTimerRef.current = setTimeout(() => {
      setOpenCat(null);
      setOpenSubCat(null);
    }, CLOSE_GRACE_MS);
  };

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

  const activeCat = openCat && NODE_LIBRARY.find((c) => c.category === openCat);
  const activeSubCat = activeCat && activeCat.subcategories && openSubCat && activeCat.subcategories.find((s) => s.category === openSubCat);

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
            setOpenSubCat(null);
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
              const count = cat.items ? cat.items.length : (cat.subcategories ? cat.subcategories.length : 0);
              return (
                <button
                  key={cat.category}
                  type="button"
                  ref={(el) => { rowRefs.current[cat.category] = el; }}
                  className={`ebn-addmenu__cat-row${isOpen ? ' ebn-addmenu__cat-row--open' : ''}`}
                  onMouseEnter={() => { keepOpen(); setOpenCat(cat.category); setOpenSubCat(null); }}
                  onFocus={() => { keepOpen(); setOpenCat(cat.category); setOpenSubCat(null); }}
                  onClick={() => setOpenCat(isOpen ? null : cat.category)}
                >
                  <span className="ebn-addmenu__cat-name">{cat.category}</span>
                  <span className="ebn-addmenu__cat-count">{count}</span>
                  <svg className="ebn-addmenu__cat-arrow" width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
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
          {activeCat.items && activeCat.items.map((item) => (
            <button
              key={item.type}
              type="button"
              className="ebn-addmenu__item"
              onClick={() => onPick({ ...item, category: activeCat.category })}
            >
              <span className="ebn-addmenu__label">{item.label}</span>
            </button>
          ))}
          {activeCat.subcategories && activeCat.subcategories.map((sub) => {
            const isSubOpen = openSubCat === sub.category;
            return (
              <button
                key={sub.category}
                type="button"
                ref={(el) => { subRowRefs.current[sub.category] = el; }}
                className={`ebn-addmenu__cat-row${isSubOpen ? ' ebn-addmenu__cat-row--open' : ''}`}
                onMouseEnter={() => { keepOpen(); setOpenSubCat(sub.category); }}
                onFocus={() => { keepOpen(); setOpenSubCat(sub.category); }}
                onClick={() => setOpenSubCat(isSubOpen ? null : sub.category)}
              >
                <span className="ebn-addmenu__cat-name">{sub.category}</span>
                <span className="ebn-addmenu__cat-count">{sub.items ? sub.items.length : 0}</span>
                <svg className="ebn-addmenu__cat-arrow" width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
                  <path d="M2.5 1.5l3 2.5-3 2.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            )
          })}
        </div>
      )}

      {activeSubCat && (
        <div
          ref={thirdRef}
          className="ebn-addmenu__sub"
          style={{
            position: 'fixed',
            left: thirdPos.left,
            top: thirdPos.top,
          }}
          onMouseEnter={keepOpen}
          onMouseLeave={scheduleClose}
        >
          {activeSubCat.items && activeSubCat.items.map((item) => (
            <button
              key={item.type}
              type="button"
              className="ebn-addmenu__item"
              onClick={() => onPick({ ...item, category: `${activeCat.category} > ${activeSubCat.category}` })}
            >
              <span className="ebn-addmenu__label">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
