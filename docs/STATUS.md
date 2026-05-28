# Extend Blue Node — Status Report

**Prepared for:** Project Management
**Date:** 2026-05-28 (updated)
**Build at time of writing:** `main @ 8367247`
**Latest milestone:** Node library scaled to **1,629 nodes** (63 hand-authored + 1,566 auto-generated from the AE scripting DOM). A full tier of JavaScript general-purpose nodes, the ScriptUI panel/dialog suite (with a visual builder), and a working LLM Copilot (cloud + local) all landed on top of the IR compiler.

---

## 1. Executive summary

EBN's loop is **closed**. A user can wire visual nodes on a Blender-style canvas, the equivalent ExtendScript is regenerated in Monaco on every change, and a single **Compile & Inject** button now sends that script to After Effects through CEP. The first real inject from the panel into AE has been executed and confirmed working by the project owner.

Since the last report the surface area expanded dramatically. The node library grew from ~20 hand-authored nodes to **1,629** — a `generate-ae-nodes.mjs` script emits 1,566 nodes covering the After Effects scripting DOM, and a full tier of hand-authored JavaScript nodes (Array / Object / String / Logic / Math / control-flow loops + switch / user-defined functions / File I/O) was added. The **ScriptUI** suite shipped with a visual builder (structured tree model, live output-pin sync, palette-first non-modal default). The **Copilot** is now wired to real backends — local Ollama and cloud (Claude / OpenAI / Gemini) — and generates canvas graphs from prompts. The test suite is now **59 cases, all green**, and an audit script (`npm run audit:nodes`) verifies every node has a matching emitter.

**Reverse translation** ("paste ExtendScript, get a graph") now has a working v1 — the Copilot's Blueprint mode reconstructs the node graph from pasted code, auto-lays it out, and replaces or appends the canvas. What's still open: Copilot **tool-use** (read graph/IR, propose diffs with preview) and Blueprint **v2** (true diff/merge against the current graph).

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

### Since last report (this sprint)
| Area | Title | Outcome |
| --- | --- | --- |
| Node scale | Auto-generated AE DOM | `scripts/generate-ae-nodes.mjs` emits 1,566 nodes (property-tree walk, writable-property setters, collection methods). `audit:nodes` / `catalog:nodes` verify emitters and regenerate `docs/NODE_CATALOG.md`. Library now 1,629 nodes total |
| JS nodes | General-purpose tier | Array, Object, String, Logic, Math, control-flow (For Loop / For Each / While / Switch), user-defined functions (Define / Call / Return), File I/O (Load/Save JSON, New File/Folder), Debug, Set Local Variable, Color Picker, Vector Math |
| ScriptUI | Panels & dialogs | Four nodes (Builder / Event Listener / Show Window / Custom UI Code), structured-tree model + serializer, visual builder pane with live `ui_<name>` pin sync, chainable listeners with ordering warning, palette-first non-modal default |
| Copilot | LLM backends | Local Ollama + cloud (Claude / OpenAI / Gemini) services; system prompt built from live node catalog + ScriptUI authoring section; emits DAG JSON applied to the canvas |
| Tests | Suite growth | 23 → 64 cases, all green; new control-flow, ScriptUI, selector, scoping, and line-map coverage |
| Wave 1 | Demo polish | Globals "+ Get/+ Set" + Promote-to-Global; new selectors (All Selected Layers, Select Layers by Class); ScriptUI builder pane gains more controls, alignChildren / slider / preferredSize editors |
| Wave 2 | Demo reliability | Line-map error traceback (failed inject highlights the offending node in red); per-branch variable scoping fix; `audit:nodes` false-positive cleanup (0 broken) |
| Wave 3 | Node coverage depth | Keyframe ops (Add Keyframe at Time / Remove Keyframe / Read Value at Time), Set Expression node, and legacy ScriptUI string→tree import for the visual builder |
| §7 | Reverse translation (Blueprints) | Copilot "Blueprint" mode: paste ExtendScript → reconstructed node graph via a reverse-translation prompt; topological left→right auto-layout (no dagre); replace-or-append the canvas; robust edge filter (rejects exec/data mismatches, input fans, duplicates, bad handles) |

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
| ~~Low~~ Fixed (Wave 2) | ~~Two-branch graphs reuse `targetLayer` across siblings~~ | Selectors still set the shared `targetLayer` (linear-graph fallback) but also capture the selection into a per-node variable that the selector's data output resolves to, so an explicitly-wired consumer is stable even after a sibling selector reassigns `targetLayer` |
| Low | Match-names containing literal `/` can't be expressed inline | Workaround: use a String node with the raw name, or call multiple consecutive Set Properties. Documented in `docs/NODES.md`. A per-segment Property Path UI is queued |
| Low | Build bundle ~4 MB un-gzipped (Monaco) | Already split into its own chunk so the app shell loads first (107 KB gzipped). Code-splitting Monaco language workers further is queued (see §0 of the roadmap) |
| Low | Copilot generates graphs but can't yet read/patch them | Backends are live (Ollama + cloud); LLM tool-use (read graph/IR, propose diffs with preview) is the next §6 increment |
| ~~Low~~ Fixed (Wave 2) | ~~`audit:nodes` reports Define Function as broken~~ | The audit now whitelists hoisted node labels (`HOISTED_LABELS`), so it reports 0 broken |

## 5. Risks & mitigations

- **ExtendScript ES3 ceiling.** Every new compiler feature has to lower to ES3. The IR refactor isolates this: emitters target ES3 idioms, the printer is dumb. The Vitest suite catches accidental ES6+ leaks.
- **AE host churn.** Manifest already declares `Version="[22.0,99.9]"` for AEFT to absorb minor host bumps. The `EBN.run` bridge stringifies errors safely even on older ExtendScript runtimes (ES3 JSON fallback included).
- **DAG complexity creep.** Resolved by the §3 IR refactor — control flow lives in the IR, not in string templates. Adding loops + conditionals + ternary inline expressions cost almost no architectural change.
- **Local LLM latency.** Still the same risk profile. Mitigation plan unchanged.

## 6. Numbers

- **Tests:** 82/82 green.
- **Nodes:** 1,635 total (69 hand-authored + 1,566 auto-generated AE DOM); audit reports 0 broken.
- **Bundle:** app shell 363 KB (107 KB gzipped), Monaco split into its own 4 MB chunk (loaded on first Code-view mount).
- **Commits since last status report:** ScriptUI + JS-node + AE-DOM-generation + Copilot-backend waves, all with green-test gating.

## 7. Recommendation

The earlier investments (§0–§4) plus the large node-coverage, ScriptUI, and Copilot-backend waves are **done**. EBN now has the defensible end-to-end pitch in hand: artists author visually OR by prompt, the script runs on a real comp, and the graph is portable as a `.ebn` file.

Recommended next investment: **Copilot tool-use** — let the model read the current graph/IR and propose diffs the user previews before applying (the IR makes this cheap), then **reverse translation** (§7, "paste ExtendScript → graph"), which is the strongest moat against plain CEP authoring tools. Smaller wins available anytime: the Globals "Add to canvas" cross-link (§5) and a couple more AE selector variants.
