# Extend Blue Node — Status Report

**Prepared for:** Project Management
**Date:** 2026-05-26
**Build at time of writing:** `main @ 2e479f6`
**Phase complete:** UI foundation, translation engine, primitives, globals, splittable workspace, add-node menu.

---

## 1. Executive summary

EBN now demonstrates the **complete inner loop** the product was pitched on: a user can wire visual nodes on a Blender-style canvas and the equivalent ExtendScript appears in a live Monaco editor in the same frame. The visual editor itself is past prototype quality — it's a usable workspace with multi-pane splits, modern dropdowns, and graph gestures that mirror ComfyUI/Blender conventions. The compiler is small but type-aware, supports both inline literals and wired variables, and emits AE-safe code wrapped in `app.beginUndoGroup` + `try/catch`.

Two areas are deliberately stubbed and intentionally deferred: the **Compile & Inject** bridge from the panel into After Effects' host script context, and the **Copilot** LLM integration. Both are scaffolded (manifest, host script slot, chat UI shell) but not yet wired to live targets.

## 2. What's shipped (phases 1–16 + workspace overhaul)

| Phase | Title | Outcome |
| --- | --- | --- |
| 1 | Tri-Pane UI skeleton | Dark Adobe-style layout, header, splits |
| 2 | CEP manifest + AE preview pipeline | Loadable as an AE panel via `npm run ae:preview` |
| 3 | Custom Blender/ComfyUI-style nodes | Themed cards, exec + data ports |
| 4 | Monaco editor (read-only) | Read-only mirror with "Generated ExtendScript" badge |
| 5 | AST translation engine v1 | Walks exec edges from Get Active Comp, emits ExtendScript |
| 6 | Smart Input ports | Inline editor that collapses to "Linked" when wired |
| 7 | Primitive nodes (Integer / String) | Single source handles + inline value |
| 8 | Compiler upgrade for primitives | Hoisted `var node_X_val = …;` per upstream literal |
| 11 | Properties panel | Edit `label` + `variableName` with validation glow/shake |
| 12 | Compiler honors `variableName` | Sanitizes user input → JS identifier |
| 14 | Globals panel + state | `{id, name, type, initialValue}` collection |
| 15 | Get / Set Global nodes | Purple-headed nodes referencing global by stable id |
| 16 | Compiler hoists globals | `var global_<sanitized> = literal;` at script top |
| A | Add-node menu | Searchable, categorized, right-click + drop-wire-on-pane |
| — | Workspace overhaul | Splittable layout tree, per-canvas providers, modern view picker |

Repository: <https://github.com/AldaGs/ExtendBlueNode>

## 3. What "working" means right now

End-to-end demo path the team can run today:

1. `npm run dev` opens the IDE in a browser (CEP optional).
2. The seed graph shows `Get Active Comp → Select Layer by ID → Set Property`, with an Integer and a String literal off to the side.
3. Wire the Integer into Set Property's *Value* port. Monaco updates instantly:
   ```js
   var node_int_1_val = 25;
   …
   targetLayer.property("ADBE Opacity").setValue(node_int_1_val);
   ```
4. Open the **Globals** view, add `myOpacity` / Integer / `100`. Drop a *Get Global* node (right-click → Globals), wire it instead — Monaco swaps the var reference for the hoisted `global_myOpacity`.
5. Click any node → Properties panel shows label and variable name; rename either, Monaco re-emits with the new identifier.
6. Right-click on canvas → searchable menu; drop any node category onto the graph.
7. Drag the canvas's pane corner buttons to split the workspace vertically/horizontally and host another view in either half.

The same flow works inside After Effects once the panel is installed; only the **Compile & Inject** button is non-functional in either environment.

## 4. Known issues / open threads

| Severity | Item | Notes |
| --- | --- | --- |
| Medium | Newly added nodes don't always re-trigger the compile `useEffect` until interacted with. | Most likely a stale-deps issue or the new node's data shape missing a key the compiler indexes on. Reproducible from the Add-node menu. |
| Medium | CEP debug session "blank panel" reported once. | Could not reproduce; suspect `PlayerDebugMode` not yet enabled or stale extension folder. Add diagnostic to `npm run ae:preview` next pass. |
| Low | No persistence. | Layout tree, globals, and graph reset on reload — by design until Phase D. |
| Low | "Compile & Inject" button is decorative. | Bridge to AE via `CSInterface.evalScript` not yet wired. |
| Low | Copilot view is a chat shell only. | No backend, no streaming, no graph-aware tools. |
| Low | Build bundle ~4 MB un-gzip (Monaco). | Code-splitting planned alongside the persistence pass. |

## 5. Risks & mitigations

- **ExtendScript ES3 ceiling.** The runtime is locked to After Effects' ExtendScript (ES3-era). Every new compiler feature has to compile down to that target. Mitigation: keep a small whitelist of allowed JS idioms in `astCompiler.js` and unit-test against real AE on the larger ones.
- **AE manifest churn.** Adobe occasionally bumps CSXS versions. Mitigation: the manifest already declares `Version="[22.0,99.9]"` for AEFT to absorb minor host bumps; we'll lock to the lowest CSXS still alive at release time.
- **Local LLM latency.** The Copilot's promise (real-time editing + reverse-translation) requires sub-second token throughput on commodity hardware. Mitigation: target Qwen2.5-Coder-7B with a quantized GGUF; degrade gracefully to a hosted endpoint for users without local capacity.
- **DAG complexity creep.** As we add node categories (math, conditionals, loops) the compiler's straight-line walk needs to grow into a proper topological pass with subgraph handling. Mitigation: refactor `astCompiler.js` into an IR step before adding control-flow primitives (planned in Roadmap §3).

## 6. Recommendation

We're past the "is this feasible?" gate. The recommended next investment is **two weeks** on the items below in `docs/ROADMAP.md` §1–§3:

1. **Fix the Monaco-after-add-node refresh** + ship **layout/graph persistence** (one short pass).
2. **Wire Compile & Inject** through `CSInterface.evalScript` so the script actually runs in AE — the most valuable demo we can give stakeholders.
3. **Refactor the compiler into an IR** so we can land math + conditionals + loops without growing tech debt.

If we land those, EBN has a defensible end-to-end demo: author visually → see code → run it on a real comp.
