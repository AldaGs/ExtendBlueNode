// Recursive layout tree for Blender-style splittable panes.
//
//   leaf  = { type:'leaf',  id, viewId }
//   split = { type:'split', id, orientation:'h'|'v', sizes:[a,b], children:[Pane,Pane] }

let counter = 0;
export function newId(prefix = 'leaf') {
  counter += 1;
  return `${prefix}_${Date.now().toString(36)}_${counter}`;
}

export function makeLeaf(viewId) {
  return { type: 'leaf', id: newId('leaf'), viewId };
}

// Bottom-up walk: recurse into the ORIGINAL children first, then apply
// `fn` to the current node. This way, when `fn` swaps a leaf for a split
// containing that leaf (splitLeaf), we don't recurse into the freshly
// produced subtree and re-match the same leaf forever.
function map(tree, fn) {
  if (tree.type === 'split') {
    const a = map(tree.children[0], fn);
    const b = map(tree.children[1], fn);
    return fn({ ...tree, children: [a, b] });
  }
  return fn(tree);
}

export function setSplitSizes(tree, splitId, sizes) {
  return map(tree, (n) =>
    n.type === 'split' && n.id === splitId ? { ...n, sizes } : n,
  );
}

export function setLeafView(tree, leafId, viewId) {
  return map(tree, (n) =>
    n.type === 'leaf' && n.id === leafId ? { ...n, viewId } : n,
  );
}

// Split a leaf into a split with the original on one side and a new leaf
// (same viewId) on the other. `orientation` 'h' = horizontal split (new
// leaf to the right), 'v' = vertical (new leaf below).
export function splitLeaf(tree, leafId, orientation) {
  return map(tree, (n) => {
    if (n.type !== 'leaf' || n.id !== leafId) return n;
    const fresh = makeLeaf(n.viewId);
    return {
      type: 'split',
      id: newId('split'),
      orientation,
      sizes: [50, 50],
      children: [n, fresh],
    };
  });
}

// Remove a leaf. Its parent split collapses into the surviving sibling.
// Returns the same tree if the leaf is the root (can't close last pane).
export function closeLeaf(tree, leafId) {
  if (tree.type === 'leaf') return tree; // root leaf — refuse
  function walk(node) {
    if (node.type !== 'split') return node;
    const [a, b] = node.children;
    if (a.type === 'leaf' && a.id === leafId) return walk(b);
    if (b.type === 'leaf' && b.id === leafId) return walk(a);
    return {
      ...node,
      children: [walk(a), walk(b)],
    };
  }
  return walk(tree);
}

export function countLeaves(tree) {
  if (tree.type === 'leaf') return 1;
  return countLeaves(tree.children[0]) + countLeaves(tree.children[1]);
}
