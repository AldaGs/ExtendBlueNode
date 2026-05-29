# Extend Blue Node — Roadmap

Phased. Each phase ends with a tag-worthy deliverable. Effort is rough person-day estimates; everything assumes the current single-developer pace. Items marked **✅** have landed in `main`.

---

## 0. Hardening — ✅ shipped (`d593113`)

- [x] **Monaco doesn't refresh on newly added nodes** — root cause was the compiler not surfacing orphan nodes. Compiler now lists every node (hoisted primitives, exec-chain, orphan comment block) so the user always sees feedback.
- [x] **CEP "blank panel" diagnostic** — `npm run cep:doctor`: PlayerDebugMode for CSXS 10–12, extension folder + manifest + dist sanity, dev port probe.
- [x] **Code-split Monaco workers** — `vite.config.js` `manualChunks` puts Monaco in its own bundle. App shell now 363 KB (107 KB gzipped).
- [x] **Cleanup** — removed unused `react-resizable-panels` dep, pruned stale `App.css`.
- [x] **Compile status HUD** — green-pulse "N nodes · M edges · HH:MM:SS" in the header so any future "did anything happen?" question is observable.

## 1. Persistence — ✅ shipped (`f43dc0b`)

- [x] Serialize the layout tree to `localStorage` on every change (debounced 500 ms).
- [x] Persist `nodes` + `edges` + `globalVariables` likewise. Clean payload — RF runtime-only fields stripped on save.
- [x] **`.ebn` file format** (`schemaVersion: 1`, `savedAt`, `layout`, `graph`, `globals`) with forward-migration hook.
- [x] **Project menu** in header: New / Open .ebn / Save As, plus Ctrl/Cmd-S / -O shortcuts.
- [x] `saved HH:MM:SS` indicator in the header next to the compile HUD.

## 2. Real Compile & Inject — ✅ shipped (`e22e77e`)

- [x] `jsx/host.jsx`: `EBN.run(scriptString)` evals + try/catch + returns JSON with `{ ok, message, line, source }`. ES3-safe JSON.stringify fallback.
- [x] `src/cep.js`: `isCep()`, `runInHost(script)`, `pingHost()`. Always resolves, translates the cryptic "EvalScript error." to a helpful manifest-path hint.
- [x] Wire the button: shows *Injecting…*, then a colored Run-status pill (*Injected* green / *Run error* red / *Browser mode* grey) with the timestamp and message tooltip.
- [x] **First successful inject from the panel into AE confirmed** by project owner.
- [x] **Error traceback v1 (Wave 2)** — IR now tracks `lineNo → nodeId`; a failed inject highlights the offending node. See §4 wave 3.

## 3. Compiler IR pass — ✅ shipped (`c135439`)

- [x] `src/compiler/ir.js` — typed statements (`comment` / `blank` / `varDecl` / `assign` / `raw` / `throwIfNot` / `ifElse` / `forIn` / `tryCatch`) + printer that handles indentation.
- [x] `src/compiler/emitters.js` — per-node-kind emitters keyed by label (ebnNode) and type (everything else); `resolveExpressionFor` for inline data-side expression composition.
- [x] `src/astCompiler.js` is now a thin orchestrator: hoist globals + primitives, DFS-walk the exec chain, list orphans, `printIR`. `compileToIR` exported for tooling.
- [x] **Vitest** suite — 23 cases, all green. Empty input, try-frame, linear chain, two-branch DFS, primitive hoist, inline expressions, identifier sanitization, orphan reporting, math/compare/if branches, ternary, for-each, selector variants, property-path chains.

## 4. Node coverage — partially ✅

Shipped (`84528b9` + `1c51da3` + `c8065f8`):
- [x] **Math** (single node, dropdown for `+ − × ÷ %`) — inlined as `(a op b)`, chains naturally for nested expressions.
- [x] **Compare** (`== != < <= > >=`) — inline boolean expression.
- [x] **If** — exec-side branching with separate Then / Else exec_out handles; emits a real `if (...) { … } else { … }`.
- [x] **Select** (ternary) — data-side, inline `(cond ? a : b)`. The right tool for "pick a value", complementing If's branching.
- [x] **For Each Selected Layer** — emits real `for` loop iterating `activeComp.selectedLayers`, exposes `loopLayer` as a data output.
- [x] **Select Layer by Name** / **by Index** — both produce `activeComp.layer(...)`.
- [x] **Property Path** (data-side) — presets dropdown (Opacity / Position / Scale / Rotation / Anchor) + free-form path field. `/`-separated paths expand into chained `.property()` calls at compile time. Also works via String node upstream.
- [x] **Set Property** rewritten — honors a wired `layer` input (e.g. from For-Each), falls back to `targetLayer` when nothing is wired, and chains nested property paths.

Queued for §4 wave 3:
- [x] **More AE selectors** — All Selected Layers (`<comp>.selectedLayers`, pairs with For Each (Array)) and Select Layers by Class (whitelisted `AVLayer` / `TextLayer` / `ShapeLayer` / `CameraLayer` / `LightLayer`, filtered via the hoisted `ebnLayersByClass` helper). Class picker in the Properties panel.
- [x] **Keyframe ops (Wave 3)** — Add Keyframe at Time (`setValueAtTime`), Remove Keyframe (`removeKey` by index), Read Value at Time (`valueAtTime`, data-side). All reuse Set Property's layer/property-chain resolution.
- [x] **Expression authoring (Wave 3)** — Set Expression node writes the resolved property's `.expression` string instead of `.setValue`.
- [x] **Line-map for error traceback (Wave 2)** — the IR printer is line-oriented and tags every line with its originating `nodeId` (`printIRWithMap`); `compileWithLineMap` returns `{ code, lineMap }`. On a failed inject, `App` maps the host's `err.line` to a node and flags it with a pulsing red outline on the canvas (cleared on the next edit).

## 4b. JavaScript general-purpose nodes — ✅ shipped (`da1640c` + `8367247`)

A full tier of language-level nodes landed, well beyond the original §4 scope. All carry emitters and appear in the audit (`npm run audit:nodes`).

- [x] **Array** — New Array, Array Push, Array Get Element, Array Length.
- [x] **Object** — New Object, Object Builder, Object Get/Set Key.
- [x] **String** — Concatenate, String Length, String Replace, String Split.
- [x] **Logic** — And / Or / Not / Boolean, Parse Number, To String.
- [x] **Math (JS)** — Math Function, Math Random, Random Integer.
- [x] **Control flow (JS)** — For Loop, For Each (Array), While Loop, Switch Statement.
- [x] **User-defined functions** — Define Function (hoisted) / Call Function / Return. (`audit:nodes` flags Define Function as "no exec emitter" — false positive; it is hoisted in `astCompiler.js`, not part of the exec chain, and is test-covered.)
- [x] **File I/O** — Load JSON / Save JSON, New File / New Folder.
- [x] **Misc** — Debug, Set Local Variable, Color Picker, Vector Math, Split Vector, Vector 2 Array.

## 4c. Auto-generated After Effects DOM nodes — ✅ shipped (`d9d52d1`)

- [x] **`scripts/generate-ae-nodes.mjs`** emits ~1,566 nodes covering the AE scripting DOM (property-tree walk, writable-property setters, collection methods), bringing the library to **1,629 nodes total** (63 hand-authored + 1,566 generated).
- [x] **`scripts/audit-nodes.mjs`** (`npm run audit:nodes` / `catalog:nodes`) spawns every node via its factory, verifies a matching emitter, and regenerates `docs/NODE_CATALOG.md`. Current state: 1,628 OK, 1 audit false-positive (Define Function, see §4b).

## 5. Globals UX cross-link — ✅ shipped (Wave 1)

Small but high-impact.

- [x] **Add to canvas** buttons on each row in the Globals panel — "+ Get" / "+ Set" chips spawn a pre-bound `Get/Set Global` node (staggered placement). `App.onSpawnGlobalRef`.
- [x] Live rename — globals store `id` (immutable) + `name` (renamable); `Get/Set Global` track by id and surface the live name in their dropdowns.
- [x] **Promote to Global** — right-click an Integer / String node → "Promote to Global". Creates a uniquely-named global from the inline value and converts the node in place to a `Get Global` bound to it. Both nodes expose the same `value` output handle, so downstream edges survive the swap (`usePromoteToGlobal`).

## 5b. ScriptUI panels & dialogs — ✅ shipped (`da1640c` → `8367247`)

Declarative ScriptUI authoring, both by hand and via the visual builder. Full how-to in [`NODES.md`](./NODES.md#scriptui-panels--dialogs).

- [x] **Four nodes** (Javascript › ScriptUI): ScriptUI Builder, UI Event Listener, Show Window, Custom UI Code.
- [x] **Structured tree model** (`src/graph/scriptUITree.js`) replaces the legacy free-text resource string as the source of truth; serializer turns it back into a valid ExtendScript resource string at compile time. Legacy string remains a fallback for un-migrated nodes.
- [x] **Visual ScriptUI Builder pane** — edit the element tree directly; live **`ui_<name>`** output-pin sync (one pin per named element) shared with the compiler via `src/graph/scriptui.js`.
- [x] **Chainable event listeners** — fixes the orphan-callback bug; emits an ordering warning if a modal dialog is shown before listeners attach.
- [x] **Palette-first default** — new builders default to a non-modal `Palette` root so the After Effects UI stays usable while the panel is open (`Window` / `Dialog` still available).
- [x] **Builder pane polish (Wave 1)** — added control types (RadioButton, Slider, Progressbar, DropDownList), an alignChildren `[horizontal, vertical]` widget, Slider/Progressbar value + min/max editors, and a preferredSize (w × h) editor. Event Type select already covers onClick / onChange / onChanging.
- [x] **String→tree import (Wave 3)** — `parseResourceStringToTree` (recursive-descent inverse of the serializer) lets a legacy `scriptUI_string`-only node be imported into the visual builder via an "Import legacy layout" button.
- [ ] **Next**: per-control item editors for DropDownList/ListBox; more event types as needed.

## 6. Copilot integration — partially ✅ shipped

The chat shell is now wired to real backends and generates graphs from prompts.

- [x] **Runtime selector** — `src/services/ollamaService.js` (local, `http://localhost:11434`) and `src/services/cloudLlmService.js` (Claude / OpenAI / Gemini via user-supplied API key).
- [x] **Graph generation** — `CopilotPanel` builds a system prompt from the live node catalog (`getNodeCatalogSummary`) plus a ScriptUI authoring section (`getScriptUIPromptSection`), and emits strict DAG JSON that is applied to the canvas.
- [ ] **Tools the model can call** (LLM tool-use):
  - `read_graph()` → current DAG JSON.
  - `read_ir()` → compiled IR (post-§3 this is cheap).
  - `read_generated_code()` → live Monaco text.
  - `propose_graph(patch)` → submit a node/edge diff to apply.
  - `propose_node(nodeJson)` → spawn a single node at viewport center.
  - `set_property(node_id, key, value)` → tweak a node's inline value.
  - `read_globals()` / `propose_global(spec)`.
- [ ] **Streaming tokens** to the Copilot view, with code-block rendering and per-message "Apply" buttons on graph patches (preview diff before applying).
- [ ] **Slash commands**: `/explain`, `/fix`, `/refactor`, `/blueprint <paste>` (see §7).
- [ ] **Conversation memory** scoped to the current `.ebn` project.

## 6.5 Node Groups — ✅ v1 shipped

Blender-style "collapse a selection into one reusable node".

- [x] **`src/graph/groups.js`** — pure `groupNodes()` / `ungroupNode()` / `flattenGroups()`. Boundary edges crossing the selection are re-pointed to synthetic `gi_*` / `go_*` handles; the mapping back to inner `(nodeId, handle)` is stored on the group node's `data`.
- [x] **Compile-time flattening** — `compileToIR` calls `flattenGroups` first (recursive, id-namespaced), so emitters/IR never need to know groups exist. Nested groups work.
- [x] **`GroupNode` component** — dynamic boundary handles, click-to-rename, double-click / ⤢ to ungroup (via DOM CustomEvents so `node.data` stays serializable).
- [x] **FlowCanvas wiring** — Ctrl/Cmd+G groups the current multi-selection; tracks the full selection set.
- [x] **Vitest** — boundary-handle exposure, group→ungroup round-trip, grouped-vs-flat compile parity, flatten removes all groups.
- [ ] **Next**: full nested-canvas editing (enter a group, Group Input/Output proxy nodes, breadcrumb nav); a "Save Group as Preset" library so groups become first-class reusable nodes; AddNodeMenu / context-menu entries for group/ungroup.

## 7. Reverse translation ("Blueprints") — ✅ v1 shipped (Wave 7)

Paste existing ExtendScript, get the visual graph that would generate it — for understanding/sharing code you already wrote.

- [x] **Blueprint mode** in the Copilot — a 📐 toggle reframes the panel: paste an ExtendScript program and a reverse-translation system prompt (`getBlueprintSystemPrompt`) asks the model to reconstruct the DAG JSON using only catalog labels, preserving exec order and data flow. Reuses the existing label/handle/edge validation + preview + apply pipeline.
- [x] **Auto-layout** — `src/graph/blueprintLayout.js` `layoutGraphTopo`: longest-path layering places the exec chain left→right with data feeders in earlier columns and siblings stacked. No `dagre` dependency (offline-safe). Unit-tested.
- [x] **Replace or append** — a "Replace canvas" checkbox swaps the current graph for the translation, or appends to it.
- [x] **Robust edge filter** (`src/graph/graphActions.js`) — the apply pipeline now rejects, with a per-reason report: duplicate edges, edges to missing nodes, nonexistent handles, **exec/data type mismatches** (an exec output sprayed into data inputs — the "fan"), and **competing wires into one input** (one-wire-per-input). Pure + unit-tested.
- [x] **Auto-chain recovery** (`autoChainActions`) — when the model proposes action nodes but leaves them unwired (the "all orphans" compile), the pipeline chains them in proposed order and injects a `Start` anchor if there's no root, so a blueprint actually runs. Gap-filling only — never clobbers model-supplied wiring. Reported in the reply. Pure + unit-tested.
- [x] **Fuzzy label auto-correction** (`src/graph/labelMatch.js`) — camelCase/Pascal-aware tokenizer so class stems match (PropertyBase ↔ PropertyGroup), with a token-count tiebreaker that picks the precise class over a longer near-name (e.g. PropertyGroup over MaskPropertyGroup). A confident unique match is auto-substituted instead of dropping the node (which would cascade into lost edges); ambiguous cases still fall back to a "did you mean?" report. Pure + unit-tested.
- [ ] **Next**: true diff/merge against the current graph (highlight what changed before applying); a deterministic pre-parser to seed the LLM with statement structure for long programs.

## 8. Polish & distribution

- [ ] Light theme + system preference detection.
- [ ] Keybindings panel — surface every gesture we already support.
- [ ] **Telemetry (opt-in)**: anonymous counts of node types used, compile success/failure, panel uptime. Helps prioritize node coverage.
- [ ] **Build & sign**: ZXP packaging with a signing pipeline; ZXPInstaller-ready distributable.
- [ ] Versioned `.ebn` schema with migration shims.

---

## Sequencing recommendation

- For **stakeholder demo polish**: §5 + §4 wave 3 (selectors + keyframes). Visible, shareable, lots of "look what I made".
- For **product depth**: §6 → §7. The LLM angle plus reverse-translation is the moat against plain CEP authoring tools. The §3 IR refactor lowered the agent's integration cost significantly.
- For **partnership conversations**: cut a signed ZXP from §8 first so prospects can install it without enabling dev mode. Then layer the Copilot demo on top.

Current single-dev recommendation: **Waves 1–3 + §7 Blueprints are shipped** — demo polish (§5 Globals cross-link, more selectors, ScriptUI builder polish), demo reliability (line-map error traceback, per-branch scoping, audit cleanup), node-coverage depth (keyframe ops, Set Expression, ScriptUI string→tree import), and reverse translation (paste ExtendScript → graph). Remaining moat work: **§6 Copilot tool-use** (let the model read the graph/IR and propose previewable diffs) and Blueprint v2 (true diff/merge). Plus §6.5 nested-group editing and §8 distribution (signed ZXP) when partnership-ready.
