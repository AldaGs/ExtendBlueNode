// Topological left-to-right layout for a freshly-translated ("blueprinted")
// graph. Column = longest edge-path depth from a root; rows stack within a
// column. Produces a readable flow (the exec chain reads left -> right, data
// feeders sit in earlier columns) without a dagre dependency.
//
// Input/output is the Copilot's action list: propose_node actions carry
// `args.id` and get `args.x/args.y` assigned; connect_nodes actions define the
// edges. Non-node actions pass through untouched.

const COL_W = 320; // horizontal spacing per column
const ROW_H = 180; // vertical spacing per row within a column

export function layoutGraphTopo(actions, originX = 80, originY = 80) {
  const ids = [];
  const adj = new Map();   // id -> [targetId]
  const indeg = new Map();

  for (const a of actions) {
    if (a.action === 'propose_node' && a.args?.id != null) {
      ids.push(a.args.id);
      if (!adj.has(a.args.id)) adj.set(a.args.id, []);
      if (!indeg.has(a.args.id)) indeg.set(a.args.id, 0);
    }
  }
  for (const a of actions) {
    if (a.action !== 'connect_nodes') continue;
    const { sourceId, targetId } = a.args || {};
    if (!adj.has(sourceId) || !indeg.has(targetId)) continue;
    adj.get(sourceId).push(targetId);
    indeg.set(targetId, indeg.get(targetId) + 1);
  }

  // Longest-path layering. Iterate relaxing depths; bounded by node count so a
  // stray cycle can't loop forever.
  const depth = new Map(ids.map((id) => [id, 0]));
  const order = [...ids].sort((a, b) => (indeg.get(a) || 0) - (indeg.get(b) || 0));
  for (let pass = 0; pass < ids.length; pass++) {
    let changed = false;
    for (const id of order) {
      const d = depth.get(id);
      for (const t of adj.get(id) || []) {
        if (depth.get(t) < d + 1) { depth.set(t, d + 1); changed = true; }
      }
    }
    if (!changed) break;
  }

  const rowCursor = new Map(); // column -> next row index
  const pos = new Map();
  for (const id of ids) {
    const col = depth.get(id) || 0;
    const row = rowCursor.get(col) || 0;
    rowCursor.set(col, row + 1);
    pos.set(id, { x: originX + col * COL_W, y: originY + row * ROW_H });
  }

  return actions.map((a) =>
    a.action === 'propose_node' && pos.has(a.args.id)
      ? { ...a, args: { ...a.args, ...pos.get(a.args.id) } }
      : a,
  );
}
