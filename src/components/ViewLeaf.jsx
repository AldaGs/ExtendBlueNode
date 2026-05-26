import { useState } from 'react';
import './ViewLeaf.css';

// A single Blender-style pane. Owns which view it is showing.
// `views` is an object: { [id]: { title, render(), badge? } }.
// `onBeforeSwitch(fromId, toId) => boolean` can veto a switch (returns false).
export default function ViewLeaf({
  initialView,
  views,
  onBeforeSwitch,
}) {
  const ids = Object.keys(views);
  const [viewId, setViewId] = useState(
    ids.includes(initialView) ? initialView : ids[0],
  );
  const view = views[viewId] || views[ids[0]];

  const onChange = (next) => {
    if (next === viewId) return;
    if (onBeforeSwitch && !onBeforeSwitch(viewId, next)) return;
    setViewId(next);
  };

  return (
    <div className="ebn-leaf">
      <div className="ebn-leaf__header">
        <select
          className="ebn-leaf__picker"
          value={viewId}
          onChange={(e) => onChange(e.target.value)}
          title="Switch view"
        >
          {ids.map((id) => (
            <option key={id} value={id}>
              {views[id].title}
            </option>
          ))}
        </select>
        {view?.badge ?? null}
      </div>
      <div className="ebn-leaf__body">{view?.render?.()}</div>
    </div>
  );
}
