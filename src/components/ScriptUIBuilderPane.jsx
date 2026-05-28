import { useCallback, useState } from 'react';
import { newElementId, ROOT_TYPES } from '../graph/scriptUITree';
import './PropertiesPanel.css'; // reuse ebn-props__* form primitives
import './ScriptUIBuilderPane.css';

// Types the palette can add, and which of them can hold children.
const PALETTE_TYPES = [
  'Group', 'Panel', 'Button', 'StaticText', 'EditText', 'Checkbox',
  'RadioButton', 'Slider', 'Progressbar', 'DropDownList',
];
const CONTAINER_TYPES = new Set(['Window', 'Palette', 'Dialog', 'Group', 'Panel']);

const ORIENTATIONS = ['row', 'column', 'stack'];
// alignChildren is a [horizontal, vertical] pair in ScriptUI.
const ALIGN_H = ['left', 'center', 'right', 'fill'];
const ALIGN_V = ['top', 'center', 'bottom', 'fill'];

function defaultPropsFor(type) {
  if (CONTAINER_TYPES.has(type)) return { orientation: 'column' };
  if (type === 'StaticText') return { text: 'Label' };
  if (type === 'Checkbox' || type === 'RadioButton') return { text: 'Option' };
  if (type === 'EditText') return { text: '' };
  if (type === 'Slider' || type === 'Progressbar') {
    return { minvalue: 0, maxvalue: 100, value: type === 'Slider' ? 50 : 0 };
  }
  if (type === 'DropDownList') return {};
  return { text: type }; // Button etc.
}

/* ----------------------- pure immutable tree helpers ---------------------- */

function findElement(node, id) {
  if (!node) return null;
  if (node.id === id) return node;
  for (const c of node.children || []) {
    const hit = findElement(c, id);
    if (hit) return hit;
  }
  return null;
}

// Return a new tree with `fn(el)` applied to the element whose id matches.
function mapElement(node, id, fn) {
  if (node.id === id) return fn(node);
  if (!node.children?.length) return node;
  let changed = false;
  const children = node.children.map((c) => {
    const next = mapElement(c, id, fn);
    if (next !== c) changed = true;
    return next;
  });
  return changed ? { ...node, children } : node;
}

// Return a new tree with the element `id` (and its subtree) removed.
function removeElement(node, id) {
  if (!node.children?.length) return node;
  const kept = node.children.filter((c) => c.id !== id);
  const children = kept.map((c) => removeElement(c, id));
  return { ...node, children };
}

// Find the id of an element's parent (null for the root).
function findParentId(node, id, parentId = null) {
  if (node.id === id) return parentId;
  for (const c of node.children || []) {
    const hit = findParentId(c, id, node.id);
    if (hit !== undefined) return hit;
  }
  return undefined;
}

// Move `dragId` (and its subtree) to become the last child of `targetId`.
// Assumes the caller has already validated the move (see canReparent).
function reparent(tree, dragId, targetId) {
  const dragged = findElement(tree, dragId);
  if (!dragged) return tree;
  const without = removeElement(tree, dragId);
  return mapElement(without, targetId, (el) => ({
    ...el,
    children: [...(el.children || []), dragged],
  }));
}

// A move is valid when: it's a real move to a different element, the target is
// a container, and the target is NOT inside the dragged subtree (no cycle).
function canReparent(tree, dragId, targetId, containerTypes) {
  if (!dragId || !targetId || dragId === targetId) return false;
  if (dragId === tree.id) return false; // never move the root
  const dragged = findElement(tree, dragId);
  const target = findElement(tree, targetId);
  if (!dragged || !target) return false;
  if (!containerTypes.has(target.type)) return false;
  if (findParentId(tree, dragId) === targetId) return false; // already a child
  if (findElement(dragged, targetId)) return false; // target within dragged subtree
  return true;
}

/* -------------------------------- tree row -------------------------------- */

function TreeRow({
  el, depth, selectedId, collapsed, onToggle, onSelect, onDelete, isRoot,
  dragOverId, onDragStartRow, onDragOverRow, onDropRow, onDragEndRow,
}) {
  const hasChildren = (el.children?.length ?? 0) > 0;
  const isCollapsed = collapsed.has(el.id);
  const isSelected = el.id === selectedId;
  const isDropTarget = el.id === dragOverId;
  return (
    <>
      <div
        className={`ebn-sui-row${isSelected ? ' ebn-sui-row--sel' : ''}${isDropTarget ? ' ebn-sui-row--drop' : ''}`}
        style={{ paddingLeft: 6 + depth * 14 }}
        onClick={() => onSelect(el.id)}
        draggable={!isRoot}
        onDragStart={(e) => {
          e.stopPropagation();
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/plain', el.id);
          onDragStartRow(el.id);
        }}
        onDragOver={(e) => onDragOverRow(e, el.id)}
        onDrop={(e) => { e.preventDefault(); e.stopPropagation(); onDropRow(el.id); }}
        onDragEnd={onDragEndRow}
      >
        <button
          type="button"
          className="ebn-sui-row__fold"
          onClick={(e) => { e.stopPropagation(); if (hasChildren) onToggle(el.id); }}
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {hasChildren ? (isCollapsed ? '▸' : '▾') : ''}
        </button>
        <span className="ebn-sui-row__type">{el.type}</span>
        {el.name ? <span className="ebn-sui-row__name">{el.name}</span> : null}
        {!isRoot && (
          <button
            type="button"
            className="ebn-sui-row__del"
            onClick={(e) => { e.stopPropagation(); onDelete(el.id); }}
            aria-label="Delete element"
            title="Delete element"
          >
            ✕
          </button>
        )}
      </div>
      {hasChildren && !isCollapsed &&
        el.children.map((c) => (
          <TreeRow
            key={c.id}
            el={c}
            depth={depth + 1}
            selectedId={selectedId}
            collapsed={collapsed}
            onToggle={onToggle}
            onSelect={onSelect}
            onDelete={onDelete}
            isRoot={false}
            dragOverId={dragOverId}
            onDragStartRow={onDragStartRow}
            onDragOverRow={onDragOverRow}
            onDropRow={onDropRow}
            onDragEndRow={onDragEndRow}
          />
        ))}
    </>
  );
}

/* ------------------------------ the pane ---------------------------------- */

export default function ScriptUIBuilderPane({ selectedNode, setNodes }) {
  const [selectedId, setSelectedId] = useState(null);
  const [collapsed, setCollapsed] = useState(() => new Set());
  const [dragId, setDragId] = useState(null);
  const [dragOverId, setDragOverId] = useState(null);

  const isBuilder = selectedNode?.data?.label === 'ScriptUI Builder';
  const tree = selectedNode?.data?.values?.scriptUITree ?? null;

  // Persist a transformed tree back onto the node.
  const commitTree = useCallback(
    (nextTree) => {
      if (!selectedNode) return;
      setNodes((nds) =>
        nds.map((n) =>
          n.id !== selectedNode.id
            ? n
            : { ...n, data: { ...n.data, values: { ...n.data.values, scriptUITree: nextTree } } },
        ),
      );
    },
    [selectedNode, setNodes],
  );

  const toggle = useCallback((id) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const addElement = useCallback(
    (type) => {
      if (!tree) return;
      // Drop into the selected element if it's a container, else its nearest
      // container ancestor, else the root.
      let targetId = tree.id;
      if (selectedId) {
        const sel = findElement(tree, selectedId);
        if (sel && CONTAINER_TYPES.has(sel.type)) targetId = sel.id;
        else {
          const parentId = findParentId(tree, selectedId);
          if (parentId) targetId = parentId;
        }
      }
      const child = {
        id: newElementId(type),
        type,
        name: '',
        props: defaultPropsFor(type),
        children: [],
      };
      const next = mapElement(tree, targetId, (el) => ({
        ...el,
        children: [...(el.children || []), child],
      }));
      commitTree(next);
      // Make sure the new child is visible and selected.
      setCollapsed((prev) => { const n = new Set(prev); n.delete(targetId); return n; });
      setSelectedId(child.id);
    },
    [tree, selectedId, commitTree],
  );

  const patchProp = useCallback(
    (id, key, value) => {
      const next = mapElement(tree, id, (el) => ({
        ...el,
        props: { ...el.props, [key]: value },
      }));
      commitTree(next);
    },
    [tree, commitTree],
  );

  const patchName = useCallback(
    (id, value) => commitTree(mapElement(tree, id, (el) => ({ ...el, name: value }))),
    [tree, commitTree],
  );

  const patchRootType = useCallback(
    (value) => commitTree({ ...tree, type: value }),
    [tree, commitTree],
  );

  const deleteElement = useCallback(
    (id) => {
      if (id === tree?.id) return; // never delete the root
      commitTree(removeElement(tree, id));
      if (selectedId === id) setSelectedId(null);
    },
    [tree, selectedId, commitTree],
  );

  /* -------------------------- drag-to-reparent --------------------------- */

  const onDragStartRow = useCallback((id) => setDragId(id), []);

  const onDragOverRow = useCallback(
    (e, id) => {
      if (tree && canReparent(tree, dragId, id, CONTAINER_TYPES)) {
        e.preventDefault(); // signal a valid drop target
        e.dataTransfer.dropEffect = 'move';
        if (dragOverId !== id) setDragOverId(id);
      }
    },
    [tree, dragId, dragOverId],
  );

  const onDropRow = useCallback(
    (targetId) => {
      if (tree && canReparent(tree, dragId, targetId, CONTAINER_TYPES)) {
        commitTree(reparent(tree, dragId, targetId));
        setCollapsed((prev) => { const n = new Set(prev); n.delete(targetId); return n; });
        setSelectedId(dragId);
      }
      setDragId(null);
      setDragOverId(null);
    },
    [tree, dragId, commitTree],
  );

  const onDragEndRow = useCallback(() => { setDragId(null); setDragOverId(null); }, []);

  /* ------------------------------ empty states --------------------------- */

  if (!isBuilder || !tree) {
    return (
      <div className="ebn-sui ebn-sui--empty">
        Select a ScriptUI node to edit its layout.
      </div>
    );
  }

  const selected = selectedId ? findElement(tree, selectedId) : null;
  const isRootSelected = selected && selected.id === tree.id;
  const selectedIsContainer = selected && CONTAINER_TYPES.has(selected.type);

  return (
    <div className="ebn-sui">
      {/* Palette */}
      <div className="ebn-sui__palette">
        {PALETTE_TYPES.map((t) => (
          <button
            key={t}
            type="button"
            className="ebn-props__btn ebn-sui__pal-btn"
            onClick={() => addElement(t)}
            title={`Add ${t}`}
          >
            + {t}
          </button>
        ))}
      </div>

      <div className="ebn-sui__body">
        {/* DOM tree */}
        <div className="ebn-sui__tree">
          <TreeRow
            el={tree}
            depth={0}
            selectedId={selectedId}
            collapsed={collapsed}
            onToggle={toggle}
            onSelect={setSelectedId}
            onDelete={deleteElement}
            isRoot
            dragOverId={dragOverId}
            onDragStartRow={onDragStartRow}
            onDragOverRow={onDragOverRow}
            onDropRow={onDropRow}
            onDragEndRow={onDragEndRow}
          />
        </div>

        {/* Inline properties form */}
        <div className="ebn-sui__props">
          {!selected ? (
            <div className="ebn-sui__props-empty">Select an element to edit its properties.</div>
          ) : (
            <>
              <div className="ebn-props__meta">
                <span className="ebn-props__chip">{selected.type}</span>
              </div>

              {isRootSelected ? (
                <label className="ebn-props__field">
                  <span className="ebn-props__label">Window Type</span>
                  <select
                    className="ebn-props__input"
                    value={selected.type}
                    onChange={(e) => patchRootType(e.target.value)}
                  >
                    {ROOT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <span className="ebn-props__hint">
                    Palette = dockable panel; Window/Dialog = floating window.
                  </span>
                </label>
              ) : (
                <label className="ebn-props__field">
                  <span className="ebn-props__label">Name (output pin)</span>
                  <input
                    className="ebn-props__input"
                    type="text"
                    value={selected.name ?? ''}
                    onChange={(e) => patchName(selected.id, e.target.value)}
                    placeholder="e.g. btn_submit — blank for no pin"
                    spellCheck={false}
                    autoComplete="off"
                  />
                </label>
              )}

              {'text' in (selected.props || {}) || !selectedIsContainer ? (
                <label className="ebn-props__field">
                  <span className="ebn-props__label">Text</span>
                  <input
                    className="ebn-props__input"
                    type="text"
                    value={selected.props?.text ?? ''}
                    onChange={(e) => patchProp(selected.id, 'text', e.target.value)}
                  />
                </label>
              ) : null}

              {selectedIsContainer && (
                <>
                  <label className="ebn-props__field">
                    <span className="ebn-props__label">Orientation</span>
                    <select
                      className="ebn-props__input"
                      value={selected.props?.orientation ?? 'column'}
                      onChange={(e) => patchProp(selected.id, 'orientation', e.target.value)}
                    >
                      {ORIENTATIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </label>
                  <label className="ebn-props__field">
                    <span className="ebn-props__label">Align Children</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <select
                        className="ebn-props__input"
                        value={selected.props?.alignChildren?.[0] ?? 'fill'}
                        onChange={(e) =>
                          patchProp(selected.id, 'alignChildren',
                            [e.target.value, selected.props?.alignChildren?.[1] ?? 'top'])}
                      >
                        {ALIGN_H.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                      <select
                        className="ebn-props__input"
                        value={selected.props?.alignChildren?.[1] ?? 'top'}
                        onChange={(e) =>
                          patchProp(selected.id, 'alignChildren',
                            [selected.props?.alignChildren?.[0] ?? 'fill', e.target.value])}
                      >
                        {ALIGN_V.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>
                  </label>
                  <label className="ebn-props__field">
                    <span className="ebn-props__label">Margins</span>
                    <input
                      className="ebn-props__input"
                      type="number"
                      value={selected.props?.margins ?? ''}
                      onChange={(e) =>
                        patchProp(selected.id, 'margins',
                          e.target.value === '' ? '' : Number(e.target.value))}
                      placeholder="e.g. 16"
                    />
                  </label>
                  <label className="ebn-props__field">
                    <span className="ebn-props__label">Spacing</span>
                    <input
                      className="ebn-props__input"
                      type="number"
                      value={selected.props?.spacing ?? ''}
                      onChange={(e) =>
                        patchProp(selected.id, 'spacing',
                          e.target.value === '' ? '' : Number(e.target.value))}
                      placeholder="e.g. 10"
                    />
                  </label>
                </>
              )}

              {(selected.type === 'Slider' || selected.type === 'Progressbar') && (
                <>
                  <label className="ebn-props__field">
                    <span className="ebn-props__label">Value</span>
                    <input
                      className="ebn-props__input"
                      type="number"
                      value={selected.props?.value ?? 0}
                      onChange={(e) => patchProp(selected.id, 'value', Number(e.target.value))}
                    />
                  </label>
                  <label className="ebn-props__field">
                    <span className="ebn-props__label">Min / Max</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <input
                        className="ebn-props__input"
                        type="number"
                        value={selected.props?.minvalue ?? 0}
                        onChange={(e) => patchProp(selected.id, 'minvalue', Number(e.target.value))}
                      />
                      <input
                        className="ebn-props__input"
                        type="number"
                        value={selected.props?.maxvalue ?? 100}
                        onChange={(e) => patchProp(selected.id, 'maxvalue', Number(e.target.value))}
                      />
                    </div>
                  </label>
                </>
              )}

              {!isRootSelected && (
                <label className="ebn-props__field">
                  <span className="ebn-props__label">Preferred Size (w × h, −1 = auto)</span>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <input
                      className="ebn-props__input"
                      type="number"
                      value={selected.props?.preferredSize?.[0] ?? ''}
                      placeholder="auto"
                      onChange={(e) =>
                        patchProp(selected.id, 'preferredSize',
                          [e.target.value === '' ? -1 : Number(e.target.value),
                           selected.props?.preferredSize?.[1] ?? -1])}
                    />
                    <input
                      className="ebn-props__input"
                      type="number"
                      value={selected.props?.preferredSize?.[1] ?? ''}
                      placeholder="auto"
                      onChange={(e) =>
                        patchProp(selected.id, 'preferredSize',
                          [selected.props?.preferredSize?.[0] ?? -1,
                           e.target.value === '' ? -1 : Number(e.target.value)])}
                    />
                  </div>
                </label>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
