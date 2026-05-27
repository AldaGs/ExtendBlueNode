# Extend Blue Node — Status Report

**Prepared for:** Project Management
**Date:** 2026-05-26 (updated)
**Build at time of writing:** `main @ dde4b59`
**Latest milestone:** Full end-to-end injection from panel to After Effects validated. Compiler refactored to an IR pass; first wave of expression / control-flow / loop / selector nodes shipped.

---

## 1. Executive summary

EBN's loop is **closed**. A user can wire visual nodes on a Blender-style canvas, the equivalent ExtendScript is regenerated in Monaco on every change, and a single **Compile & Inject** button now sends that script to After Effects through CEP. The first real inject from the panel into AE has been executed and confirmed working by the project owner.

In the last sprint, the compiler was refactored from string templates into a proper IR pipeline, unlocking math / compare / if / for-each-selected / select-ternary / property-path nodes without growing tech debt. The test suite (23 cases, all green) now guards the surface area. The right-click "Add Node" menu was rebuilt as a Blender-style cascade with viewport-aware submenu positioning. Layout, graph, and globals state are autosaved to localStorage and exportable as `.ebn` project files.

What's still stubbed: **Copilot** (local LLM) and **reverse translation** ("paste ExtendScript, get a graph"). Both are scaffolded but not wired to a backend.

## 2. What's shipped

### Foundational (phases 1–16, prior sprint)
Tri-pane UI shell, CEP manifest + AE preview pipeline, ComfyUI/Blender-style node aesthetic, Monaco read-only mirror, AST translation engine, Smart Input ports, primitive Integer/String nodes, Properties panel with validation, global variables (panel + Get/Set nodes + compiler hoist), tabbed views.

### Workspace overhaul (prior sprint)
- Splittable layout tree (Blender-style — every pane can split horizontally / vertically / close).
- Multi-canvas with **independent cameras** (per-canvas `ReactFlowProvider`).
- Modern Adobe-themed view picker per leaf — any pane can host any view.
- Live compile HUD in the header (`N nodes · M edges · HH:MM:SS`).
- Right-click Add Node menu with search + categories.

### This sprint
| Phase | Title | Outcome |
| --- | --- | --- |
| §0 | Hardening | Monaco code-split (app shell 4.1 MB → 363 KB), `cep:doctor` diagnostic script, dead-code prune, compile HUD |
| §1 | Persistence | Autosave to localStorage (debounced 500 ms), full `.ebn` file format with `schemaVersion` + migration hook, `ProjectMenu` (New/Open/Save) with Ctrl/Cmd-O / -S |
| §2 | Real Compile & Inject | `EBN.run(script)` host bridge in `jsx/host.jsx` returning JSON; `runInHost` wrapper around `CSInterface.evalScript`; header Run-status pill (Injected / Run error / Browser mode) with timestamp + tooltip |
| §3 | Compiler IR | New `src/compiler/{ir,emitters}.js` — small typed-statement IR (`comment` / `varDecl` / `assign` / `raw` / `throwIfNot` / `ifElse` / `forIn` / `tryCatch`) + printer; per-node-kind emitter registry; data-side expression composer (`resolveExpressionFor`) for inline math/compare/select chains |
| §4 wave 1 | Math / Compare / If | `+ − × ÷ %` math node, `== != < <= > >=` compare, real `if (cond) {…} else {…}` branching with `walkBranch` |
| §4 wave 2 | Select / loops / selectors / property paths | Ternary Select (data-side), For-Each-Selected-Layer (emits real `for` loop, exposes `loopLayer`), Select Layer by Name / by Index, `/`-separated nested property-path chains, dedicated **Property Path** node with presets |
| — | Vitest suite | 23 regression cases across the compiler — linear chains, multi-branch DFS, primitive hoisting, inline expressions, identifier sanitization, orphan reporting, all new node types |
| — | Animated edges | Subtle moving dot on each wire (exec wires brighter / faster, data wires blue / slower) for at-a-glance flow direction |
| — | Add Node cascade | Categories → side submenu (Blender-style), search field falls back to flat ranked results, viewport-fixed submenu escapes scroll containers, Esc / outside-click / right-click-elsewhere all dismiss reliably |
| — | Docs | `docs/NODES.md` — full guide for adding nodes by hand (factory + emitter + optional component + port types + IR vocabulary + test template). Linked from README |

Repository: <https://github.com/AldaGs/ExtendBlueNode>

## 3. Demo path (working today)

1. `npm run dev` → IDE opens in browser (CEP optional for the inject step).
2. Right-click the canvas → **Loops → For Each Selected Layer**. Wire `Get Active Comp.Execution → For Each.Execution`.
3. Right-click → **Mutators → Set Property**. Wire `For Each.Body → Set Property.Execution`, `For Each.Layer → Set Property.Layer`.
4. Drop a **Logic → Select**, set inputs `cond=true if_true=100 if_false=0`. Wire `Select.Value → Set Property.Value`.
5. Drop a **Data → Property Path**, pick *Opacity* from the dropdown. Wire `Property Path.Path → Set Property.Property`.
6. Monaco shows a real script: a `for` loop over `activeComp.selectedLayers`, each iteration declares `loopLayer`, and calls `loopLayer.property("ADBE Transform Group").property("ADBE Opacity").setValue((true ? 100 : 0));`.
7. In After Effects, open the panel → click **Compile & Inject** → header pill turns green *Injected HH:MM:SS*. The opacity of selected layers updates.

## 4. Known issues / open threads

| Severity | Item | Notes |
| --- | --- | --- |
| Low | Two-branch graphs reuse `targetLayer` across siblings | Each `Select Layer` reassigns `targetLayer`; the immediately-following `Set Property` uses the right value, but the var name isn't per-branch unique. Cleanest fix lands with the typed-variable extension to the IR (planned alongside scope-aware emitters) |
| Low | Match-names containing literal `/` can't be expressed inline | Workaround: use a String node with the raw name, or call multiple consecutive Set Properties. Documented in `docs/NODES.md`. A per-segment Property Path UI is queued |
| Low | Build bundle ~4 MB un-gzipped (Monaco) | Already split into its own chunk so the app shell loads first (107 KB gzipped). Code-splitting Monaco language workers further is queued (see §0 of the roadmap) |
| Low | Copilot view is a chat shell only | Local LLM backend is the next major phase (§6) |

## 5. Risks & mitigations

- **ExtendScript ES3 ceiling.** Every new compiler feature has to lower to ES3. The IR refactor isolates this: emitters target ES3 idioms, the printer is dumb. The Vitest suite catches accidental ES6+ leaks.
- **AE host churn.** Manifest already declares `Version="[22.0,99.9]"` for AEFT to absorb minor host bumps. The `EBN.run` bridge stringifies errors safely even on older ExtendScript runtimes (ES3 JSON fallback included).
- **DAG complexity creep.** Resolved by the §3 IR refactor — control flow lives in the IR, not in string templates. Adding loops + conditionals + ternary inline expressions cost almost no architectural change.
- **Local LLM latency.** Still the same risk profile. Mitigation plan unchanged.

## 6. Numbers

- **Tests:** 23/23 green.
- **Bundle:** app shell 363 KB (107 KB gzipped), Monaco split into its own 4 MB chunk (loaded on first Code-view mount).
- **Lines of code (rough):** compiler core ~280 lines, IR + emitters ~250, layout system ~110, persistence ~120. Stays small.
- **Commits since last status report:** 11 phase-level commits, all with green-test gating.

## 7. Recommendation

The two-week investment recommended in the prior report (§0 → §2 → §1) is **done**. Recommended next investment: **finish §4 (loops + selectors are landed; queue an "Add to canvas" cross-link from the Globals panel + a couple more selector variants), then start §6 (Copilot)** — the LLM angle is the most quotable differentiator at this point and the IR refactor makes the agent's job a lot easier (it can read/emit IR directly instead of round-tripping through text).

If we land the Copilot in the next sprint, EBN has a defensible pitch end-to-end: artists author visually OR by prompt, the script runs on a real comp, and the graph is portable as a `.ebn` file.
