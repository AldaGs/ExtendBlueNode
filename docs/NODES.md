# Extending EBN with new nodes

Every node lives at three coordinates: a **factory** (how to spawn it), an **emitter** (what code it produces), and an optional **component** (how it renders on the canvas). For most additions you only touch one or two of these files.

```
src/
  nodeLibrary.js          factory registry (right-click menu)
  compiler/emitters.js    per-node-kind IR emitters + data-side expressions
  components/<Name>Node.jsx   optional custom UI (only if EBNNode's generic shell isn't enough)
  components/FlowCanvas.jsx   register custom node types here
```

The simplest path is below — copy-paste, rename, ship.

---

## 1. Adding a node that needs no custom UI

The seed nodes (`Get Active Comp`, `Select Layer by ID`, `Set Property`, etc.) all use the generic [`EBNNode`](../src/components/EBNNode.jsx) shell — they're just data shapes, not their own React components. To add another one in the same family:

### a. Register a factory in `src/nodeLibrary.js`

```js
{
  type: 'newAction',                         // becomes the menu type id
  label: 'My New Action',
  keywords: ['rotate', 'spin', 'transform'], // searched by the Add-Node menu
  factory: (pos) => ({
    id: uid('node'),
    type: 'ebnNode',                         // uses the generic shell
    position: pos,
    data: {
      label: 'My New Action',                // human-readable, also key for emitter
      category: 'action',                    // drives header color
      themeColor: NODE_THEME.action,
      inputs: [
        { id: 'exec_in',  label: 'Execution', type: 'exec' },
        { id: 'amount',   label: 'Amount',   type: 'number' },
      ],
      outputs: [
        { id: 'exec_out', label: 'Execution' },
      ],
      values: { amount: 45 },                // inline defaults
    },
  }),
}
```

Place it inside the right `category` block (or add a new category). It now appears in the right-click Add-Node menu automatically.

### b. Add the emitter in `src/compiler/emitters.js`

```js
const EBN_NODE_EMITTERS = {
  // …existing entries
  'My New Action': (node, ctx) => {
    const amount = ctx.resolveInput(node, { id: 'amount', type: 'number' });
    return [ir.raw(`targetLayer.rotation.setValue(${amount});`)];
  },
};
```

Key matches `data.label`. Done — the node compiles end-to-end.

### Port types

| `port.type` | What the compiler does with the inline value | When to use |
| --- | --- | --- |
| `'number'` | `Number(raw)` → raw numeric text (e.g. `42`) | numeric scalars |
| `'text'` | `JSON.stringify(raw)` (so quotes are added) | string literals |
| `'expr'` | raw verbatim (no quoting) | JS expressions (`myVar > 5`, identifiers like `targetLayer`) |
| `'boolean'` | `'true'` or `'false'` | toggles |
| `'exec'` | not a value; signals an execution edge endpoint | wiring exec_in / exec_out |

`port.default` (raw string) overrides the global `DEFAULTS` lookup — useful when an unwired port should resolve to an identifier rather than a literal (`Set Property.layer → 'targetLayer'`).

---

## 2. Adding a data-only node (no exec, just a value)

Examples: `Integer`, `String`, `Math`, `Compare`, `Select`. These don't appear in the execution chain — they're inlined into consumer expressions.

### a. Factory entry (`nodeLibrary.js`)

Use a unique `type` string (the menu key, not `ebnNode`):

```js
{
  type: 'clamp',
  label: 'Clamp',
  factory: (pos) => ({
    id: uid('clamp'),
    type: 'clamp',                           // distinct from 'ebnNode'
    position: pos,
    data: { values: { value: 0, min: 0, max: 100 } },
  }),
}
```

### b. UI component (`src/components/ClampNode.jsx`)

Easiest is to copy [`MathNode.jsx`](../src/components/MathNode.jsx) and adjust the inputs / header.

### c. Register the component (`src/components/FlowCanvas.jsx`)

```js
const nodeTypes = useMemo(
  () => ({
    /* …existing… */
    clamp: ClampNode,
  }),
  [],
);
```

### d. Data-side expression (`src/compiler/emitters.js → resolveExpressionFor`)

```js
if (node.type === 'clamp') {
  const v   = ctx.resolveInput(node, { id: 'value', type: 'number' });
  const lo  = ctx.resolveInput(node, { id: 'min',   type: 'number' });
  const hi  = ctx.resolveInput(node, { id: 'max',   type: 'number' });
  return `Math.max(${lo}, Math.min(${hi}, ${v}))`;
}
```

Now `Clamp.value` wires into any consumer like a primitive.

---

## 3. Adding a control-flow node (if, for, …)

Two extra steps on top of #1:

1. **Emitter calls `ctx.walkBranch(nodeId, handleId)`** for each exec-out you want to scope as a branch.
2. **Register it in `SELF_BRANCHING_TYPES`** so the orchestrator stops auto-recursing along its exec edges.

The existing `if` and `forEachSelected` emitters in `emitters.js` are the working references. The IR has `ir.ifElse(cond, then, else)` and `ir.forIn(init, cond, step, body)` ready to use — the printer indents nested blocks automatically.

---

## 4. Resolving inputs (the `ctx` API)

Inside an emitter you have `(node, ctx)` and can call:

- **`ctx.resolveInput(node, port)`** — returns a JS expression string. Wired upstream takes precedence; otherwise the inline `data.values[port.id]` is used; if that's empty `port.default` is used; otherwise a global `DEFAULTS` fallback.
- **`ctx.walkBranch(nodeId, handleId)`** — DFS-walks every exec edge that leaves `handleId` on `nodeId`, returns `IRStmt[]`. Use for control-flow.
- **`ctx.globals`** — the `globalVariables[]` array.
- **`ctx.globalName(g)`** — sanitized JS identifier (`global_<name>`).
- **`ctx.varName(node)`** — JS identifier for this node (uses `data.variableName` if set, otherwise auto).
- **`ctx.useHelper(name)`** — request a runtime helper from `src/compiler/helpers.js` to be hoisted once at the top of the script. Emit a single call site in your expression; the helper itself is shared across all consumers.

---

## 5. The IR statements you can return

From [`src/compiler/ir.js`](../src/compiler/ir.js):

| Constructor | Emits |
| --- | --- |
| `ir.comment(text)` | `// text` |
| `ir.blank()` | empty line |
| `ir.varDecl(name, expr)` | `var name = expr;` |
| `ir.assign(target, expr)` | `target = expr;` |
| `ir.raw(line)` | `line` (whatever, no trailing semicolon added) |
| `ir.throwIfNot(cond, msg)` | `if (!(cond)) throw new Error("msg");` |
| `ir.ifElse(cond, then, else_)` | `if (cond) { … } else { … }` |
| `ir.forIn(init, cond, step, body)` | `for (init; cond; step) { … }` |
| `ir.tryCatch(body, catchBody, errVar)` | `try { … } catch (errVar) { … }` |

The orchestrator already wraps your statements in the outer `try / app.beginUndoGroup` / `app.endUndoGroup` shell, so don't repeat that in your emitter.

---

## 6. Testing the new node

Drop a case in [`src/astCompiler.test.js`](../src/astCompiler.test.js). The existing helpers make this short:

```js
it('My New Action emits a rotation', () => {
  const a = getActiveComp('a');
  const b = selectLayer('b');
  const x = {
    id: 'x', type: 'ebnNode', position: { x: 0, y: 0 },
    data: {
      label: 'My New Action',
      inputs: [{ id: 'exec_in', type: 'exec' }, { id: 'amount', type: 'number' }],
      outputs: [{ id: 'exec_out' }],
      values: { amount: 90 },
    },
  };
  const out = compileToExtendScript(
    [a, b, x],
    [execEdge('e1', 'a', 'b'), execEdge('e2', 'b', 'x')],
  );
  expect(out).toMatch(/targetLayer\.rotation\.setValue\(90\)/);
});
```

Run with `npm test` (or `npm run test:watch`).

---

## 7. Naming tips

- **Snake or camel for node `type`** — matches across menu + emitter + nodeTypes registry. Stay consistent.
- **`data.label`** is the emitter key for `ebnNode`. Keep it human-readable; the compiler keys on it directly.
- **Avoid collisions in default identifier names.** `targetLayer`, `activeComp`, `loopLayer`, `loopLayers` are taken by existing emitters. If your node introduces a new shared identifier, prefix it (`var_xxx`, `clamp_result`, etc.) or let it inherit `varNameFor(node)`.

---

## 8. Quick reference: current node catalog

| Menu entry | Node type | Where to edit emitter |
| --- | --- | --- |
| Get Active Comp / Select Layer by ID, Name, Index / Set Property | `ebnNode` + label | `EBN_NODE_EMITTERS` |
| Reroute | `reroute` | (no emit) |
| Integer / String | `integer`, `string` | hoisted automatically by the orchestrator |
| Get Global / Set Global | `getGlobal`, `setGlobal` | `emitterFor` switch |
| Math / Compare / Select | `math`, `compare`, `select` | `resolveExpressionFor` |
| Vector Math | `vecMath` | `resolveExpressionFor` — calls `ctx.useHelper('ebnVec')`, emits `ebnVec(a, b, op)`. Helper is hoisted at script top exactly once when used. |
| If | `if` | `emitterFor` switch (control-flow) |
| For Each Selected Layer | `forEachSelected` | `emitterFor` switch (control-flow) |
| Property Path | `propertyPath` | special-cased in Set Property's `resolvePropertyChain` |
| Get Property Value | `ebnNode` ("Get Property Value") | `EBN_DATA_EMITTERS` — data-side, reads `.value` off a chain |
| Vector 2 Array | `ebnNode` ("Vector 2 Array") | `EBN_DATA_EMITTERS` — emits `[x, y]` for array-valued props |
| Set Local Variable | `ebnNode` ("Set Local Variable") | `EBN_NODE_EMITTERS` — emits `var <name> = <expr>;` |

### Property paths

After Effects properties nest, so `Set Property` accepts a `/`-separated path that the compiler expands into a chain of `.property()` calls:

```
ADBE Transform Group/ADBE Opacity
  → layer.property("ADBE Transform Group").property("ADBE Opacity")
```

You can type the path inline on Set Property, wire a String node with the path as its value, or use the **Property Path** node (under *Data*) which exposes a presets dropdown for the common transform sub-properties plus a free-form path field.

Limitation: match-names with a literal `/` in them aren't supported by the path-splitter yet. If you need one, wire the chain through a chain of separate nodes (planned for a future iteration of Property Path).
