import { useCallback, useState } from 'react';
import { useReactFlow } from 'reactflow';
import { useGlobals } from '../state/GlobalsContext';

// "Promote to Global" for primitive (Integer / String) nodes.
//
// Converts the node IN PLACE into a Get Global bound to a freshly-created
// global. The primitive and Get Global both expose a single `value` source
// handle, so every downstream edge stays valid through the swap — no edge
// rewiring needed. Returns an onContextMenu handler plus the popup element to
// render inside the node component.
export function usePromoteToGlobal({ nodeId, varType, value }) {
  const { setNodes } = useReactFlow();
  const { globalVariables, setGlobalVariables } = useGlobals();
  const [menu, setMenu] = useState(null);

  const onContextMenu = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setMenu({ x: e.clientX, y: e.clientY });
  }, []);

  const close = useCallback(() => setMenu(null), []);

  const promote = useCallback(() => {
    const base = varType === 'String' ? 'text' : 'num';
    const taken = new Set(globalVariables.map((v) => v.name));
    let name = base;
    let i = 1;
    while (taken.has(name)) name = `${base}${i++}`;
    const gid = `gv_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
    setGlobalVariables((vs) => [
      ...vs,
      { id: gid, name, type: varType, initialValue: String(value ?? '') },
    ]);
    setNodes((nds) =>
      nds.map((n) =>
        n.id !== nodeId ? n : { ...n, type: 'getGlobal', data: { globalId: gid } },
      ),
    );
    setMenu(null);
  }, [varType, value, nodeId, globalVariables, setGlobalVariables, setNodes]);

  const overlay = menu ? (
    <>
      <div className="ebn-ctxmenu__backdrop" onClick={close} onContextMenu={close} />
      <div className="ebn-ctxmenu" style={{ left: menu.x, top: menu.y }}>
        <button type="button" className="ebn-ctxmenu__item" onClick={promote}>
          Promote to Global
        </button>
      </div>
    </>
  ) : null;

  return { onContextMenu, overlay };
}
