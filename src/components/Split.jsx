import { Children, useCallback, useRef } from 'react';
import './Split.css';

// Tiny dependency-free splitter: two children separated by a draggable
// divider. Sizes are controlled by the parent (so the layout tree owns
// the truth and split/merge stays trivial). `orientation`:
//   'h' = horizontal arrangement, vertical 4-px divider, col-resize
//   'v' = vertical arrangement,   horizontal 4-px divider, row-resize
export default function Split({ orientation = 'h', sizes, onResize, children }) {
  const horizontal = orientation === 'h';
  const containerRef = useRef(null);
  const [first, second] = Children.toArray(children);

  const onDown = useCallback(
    (e) => {
      e.preventDefault();
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = horizontal ? rect.width : rect.height;
      if (total <= 0) return;
      const startCoord = horizontal ? e.clientX : e.clientY;
      const [startA, startB] = sizes;
      const sum = startA + startB;
      const min = 6; // percent

      const onMove = (ev) => {
        const cur = horizontal ? ev.clientX : ev.clientY;
        const deltaPct = ((cur - startCoord) / total) * sum;
        const a = Math.max(min, Math.min(sum - min, startA + deltaPct));
        onResize?.([a, sum - a]);
      };
      const onUp = () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
      document.body.style.cursor = horizontal ? 'col-resize' : 'row-resize';
      document.body.style.userSelect = 'none';
    },
    [horizontal, sizes, onResize],
  );

  return (
    <div
      ref={containerRef}
      className={`ebn-split ebn-split--${horizontal ? 'h' : 'v'}`}
    >
      <div className="ebn-split__pane" style={{ flex: `${sizes[0]} 1 0` }}>
        {first}
      </div>
      <div
        className={`ebn-split__divider ebn-split__divider--${horizontal ? 'h' : 'v'}`}
        onMouseDown={onDown}
      />
      <div className="ebn-split__pane" style={{ flex: `${sizes[1]} 1 0` }}>
        {second}
      </div>
    </div>
  );
}
