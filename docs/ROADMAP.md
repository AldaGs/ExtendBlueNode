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
- [ ] **Error traceback v1** — needs the IR to track `lineNo → nodeId`. Cheap once we extend the printer (rolled into §4 polish below).

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
- [ ] **Globals UX cross-link (§5 below)** — "Add Get / Add Set" buttons on each Globals row.
- [ ] **More selectors** — All Selected Layers (returns an array, pairs with a separate For-Each), Layer by Class (`AVLayer`, `TextLayer`).
- [ ] **Keyframe ops** — Add Keyframe at Time, Remove Keyframe, Read Value at Time.
- [ ] **Expression authoring** — a Math/Expression node that writes into `.expression` instead of `.setValue`.
- [ ] **Math extensions** — Clamp, Lerp, Min/Max, Modulo wraparound. Already easy with the IR; just emitters + UI.
- [ ] **Line-map for error traceback** — IR printer tracks `lineNo → nodeId`; AE error parser highlights the offending node in red on the canvas.

## 5. Globals UX cross-link — next

Already discussed. Small but high-impact.

- [ ] **Add to canvas** buttons on each row in the Globals panel — spawn a `Get Global` (left button) or `Set Global` (right button) at a sensible viewport position, pre-bound by `globalId`.
- [ ] Live rename — globals already store `id` (immutable) and `name` (renamable); existing `Get/Set Global` nodes already track by id, so we just need to surface the live name in the node dropdowns. (Already works in practice — verify and document.)
- [ ] **Promote to global** action on Integer / String nodes via the node context menu. Right-click on a primitive → "Promote to Global myFoo"; converts the inline value into a new global and rewires every wired downstream consumer to a `Get Global myFoo`.

## 6. Copilot integration — next major phase

- [ ] **Runtime selector**: bundle a local Ollama client targeting `http://localhost:11434` by default; fall back to a hosted endpoint when the user provides an API key.
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

## 7. Reverse translation ("Blueprints")

- [ ] `/blueprint` slash command takes pasted ExtendScript, LLM emits a DAG JSON conforming to our schema.
- [ ] Auto-layout incoming graphs with `dagre`.
- [ ] Diff against the current graph; allow merge or replace.

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

Current single-dev recommendation: **§5 next (~half day), then §6 starts** — the IR makes it the right moment to bring the agent in.
