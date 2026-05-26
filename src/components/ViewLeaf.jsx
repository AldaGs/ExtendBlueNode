import ViewPicker from './ViewPicker';
import './ViewLeaf.css';

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

  return (
    <div className="ebn-leaf">
      <div className="ebn-leaf__header">
        <ViewPicker
          viewId={viewId}
          views={views}
          onChange={onChangeView}
          onBeforeSwitch={onBeforeSwitch}
        />
        {view?.badge ?? null}

        <span className="ebn-leaf__spacer" />

        <button
          type="button"
          className="ebn-leaf__btn"
          onClick={() => onSplit?.('h')}
          title="Split horizontally"
          aria-label="Split horizontally"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <rect x="1" y="2" width="4.2" height="8" rx="1" fill="none" stroke="currentColor" />
            <rect x="6.8" y="2" width="4.2" height="8" rx="1" fill="none" stroke="currentColor" />
          </svg>
        </button>
        <button
          type="button"
          className="ebn-leaf__btn"
          onClick={() => onSplit?.('v')}
          title="Split vertically"
          aria-label="Split vertically"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <rect x="2" y="1" width="8" height="4.2" rx="1" fill="none" stroke="currentColor" />
            <rect x="2" y="6.8" width="8" height="4.2" rx="1" fill="none" stroke="currentColor" />
          </svg>
        </button>
        <button
          type="button"
          className="ebn-leaf__btn ebn-leaf__btn--close"
          onClick={() => onClose?.()}
          disabled={!canClose}
          title={canClose ? 'Close pane' : 'Cannot close last pane'}
          aria-label="Close pane"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="ebn-leaf__body">{view?.render?.()}</div>
    </div>
  );
}
