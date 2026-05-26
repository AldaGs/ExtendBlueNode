import './ViewLeaf.css';

// A single Blender-style pane. Controlled — the layout tree in App owns
// the current view and the split/close operations.
//
// Props:
//   viewId          current view id
//   views           { [id]: { title, render(), badge? } }
//   onChangeView    (nextId) => void
//   onBeforeSwitch  (from, to) => boolean (optional veto)
//   onSplit         ('h' | 'v') => void
//   onClose         () => void
//   canClose        boolean — last remaining leaf can't be closed
export default function ViewLeaf({
  viewId,
  views,
  onChangeView,
  onBeforeSwitch,
  onSplit,
  onClose,
  canClose = true,
}) {
  const ids = Object.keys(views);
  const view = views[viewId] || views[ids[0]];

  const change = (next) => {
    if (next === viewId) return;
    if (onBeforeSwitch && !onBeforeSwitch(viewId, next)) return;
    onChangeView?.(next);
  };

  return (
    <div className="ebn-leaf">
      <div className="ebn-leaf__header">
        <select
          className="ebn-leaf__picker"
          value={viewId}
          onChange={(e) => change(e.target.value)}
          title="Switch view"
        >
          {ids.map((id) => (
            <option key={id} value={id}>
              {views[id].title}
            </option>
          ))}
        </select>
        {view?.badge ?? null}

        <span className="ebn-leaf__spacer" />

        <button
          type="button"
          className="ebn-leaf__btn"
          onClick={() => onSplit?.('h')}
          title="Split horizontally (new pane to the right)"
        >
          {/* vertical line icon = split horizontal */}
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <rect x="1" y="1" width="4.5" height="10" fill="none" stroke="currentColor" />
            <rect x="6.5" y="1" width="4.5" height="10" fill="none" stroke="currentColor" />
          </svg>
        </button>
        <button
          type="button"
          className="ebn-leaf__btn"
          onClick={() => onSplit?.('v')}
          title="Split vertically (new pane below)"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <rect x="1" y="1" width="10" height="4.5" fill="none" stroke="currentColor" />
            <rect x="1" y="6.5" width="10" height="4.5" fill="none" stroke="currentColor" />
          </svg>
        </button>
        <button
          type="button"
          className="ebn-leaf__btn ebn-leaf__btn--close"
          onClick={() => onClose?.()}
          disabled={!canClose}
          title={canClose ? 'Close this pane' : 'Cannot close the last pane'}
        >
          ×
        </button>
      </div>
      <div className="ebn-leaf__body">{view?.render?.()}</div>
    </div>
  );
}
