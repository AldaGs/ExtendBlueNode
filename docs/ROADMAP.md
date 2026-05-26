# Extend Blue Node — Roadmap

Phased. Each phase ends with a tag-worthy deliverable. Effort is rough person-day estimates; everything assumes the current single-developer pace.

---

## 0. Hardening (carryover) — ~0.5 day

Triage before new features. Nothing here is glamorous; all of it is friction the team hits today.

- [ ] **Monaco doesn't refresh on newly added nodes.** Reproduce via right-click → Add Node, confirm `useEffect([nodes, edges, globalVariables])` actually fires; either fix the dep list or the new-node factory's data shape.
- [ ] **CEP "blank panel" diagnostic.** Add a `doctor` script that prints PlayerDebugMode state, manifest reachability, and dev-port status.
- [ ] **Code-split Monaco workers** so the initial bundle drops below ~1 MB gzipped (currently the Monaco language worker bundles dominate).
- [ ] **Cleanup**: remove unused `react-resizable-panels` dep, prune stale CSS in `App.css` left over from the old grid layout.

## 1. Persistence — ~1 day

Goal: open EBN, leave, come back, nothing changed.

- [ ] Serialize the layout tree (`src/layoutTree.js`) to `localStorage` on every change (debounced).
- [ ] Persist `nodes` + `edges` + `globalVariables` likewise. Round-trip via `JSON.stringify`/`parse` (no Date/Map/Set in payload — already clean).
- [ ] **Project file** (`.ebn` JSON): one combined export of layout + graph + globals. Import via header menu.
- [ ] Migrate the seed graph into a "New Project" template instead of always-on initial state.

**Deliverable:** Reloads preserve workspace. "New / Open / Save Project" controls in the header.

## 2. Real Compile & Inject — ~1 day

The most stakeholder-visible win.

- [ ] Implement the host bridge in [`jsx/host.jsx`](../jsx/host.jsx): a single `EBN_run(script)` function that `eval`s the generated string and returns `{ ok, error }`.
- [ ] Hook the panel's **Compile & Inject** button to `CSInterface.evalScript`, render success/error in the Copilot view.
- [ ] **Error traceback v1**: parse AE's error string for a node hint (line number → step index → node id) and outline the offending node in red on the canvas.
- [ ] Show last-run timestamp + status pill in the header.

**Deliverable:** End-to-end demo working on a real AE comp.

## 3. Compiler IR pass — ~2 days

We've grown to the edge of what a straight-line walker can do cleanly. Refactor before adding more node categories.

- [ ] Introduce a `compileToIR(nodes, edges, globals) → IR` pass. IR shape: an array of typed statements (`VarDecl`, `Assign`, `Call`, `If`, `For`, `Block`, `Comment`). All node-type handling moves into per-type "emit IR" functions registered like `nodeLibrary`.
- [ ] `emitExtendScript(IR) → string` becomes a thin printer.
- [ ] Backfill all current node snippets to the new IR.
- [ ] Add unit tests around 20 representative graphs (`vitest`) so future node additions don't silently regress emission.

**Deliverable:** Same Monaco output as today, but the compiler is now extensible without touching string templates. Test suite goes green in CI.

## 4. Node coverage — ~3 days, can fan out

Once IR is in place, growth is mechanical. Each item is ~1 hour with tests.

- [ ] **Math nodes**: Add, Subtract, Multiply, Divide, Modulo, Min/Max, Clamp, Lerp.
- [ ] **Conditionals**: If/Else (branch nodes producing two exec outputs), Compare (==, <, >, ≠).
- [ ] **Loops**: For-each-layer, For-each-keyframe, While. Each loop is a sub-block in the IR.
- [ ] **Selectors**: By name, by index, all selected, by class (`AVLayer`, `TextLayer`).
- [ ] **Keyframe ops**: Add keyframe, Remove, Read value at time.
- [ ] **Expression authoring**: a Math/Expression node that exposes an editable string driven into `.expression`.
- [ ] **Properties panel auto-form**: nodes can declare per-port editors (sliders, color, dropdown) via metadata, no per-node UI code.

**Deliverable:** Enough primitives to author a realistic AE script (e.g., "for every selected layer, scale opacity by a slider").

## 5. Globals UX cross-link — ~0.5 day

Already discussed. Small but high-impact.

- [ ] "Drop on canvas" button on each row in the Globals panel — spawns a `Get Global` (or `Set Global` with Shift) at the viewport center, pre-bound.
- [ ] Rename a global → existing nodes update automatically (they store globalId, so this is free; surface the live name in the dropdown).
- [ ] **Promote to global** action on Integer/String nodes via the node context menu (right-click on a node).

## 6. Copilot integration — ~3 days

- [ ] Pick the runtime: bundle a local Ollama client wrapper that connects to `http://localhost:11434` by default; fall back to a hosted endpoint.
- [ ] **Tools** the model can call:
  - `read_graph()` → returns the current DAG JSON.
  - `read_generated_code()` → the live Monaco text.
  - `propose_graph(patch)` → submit a node/edge diff to apply.
  - `propose_explanation(targetNodeId, text)` → annotate a node.
- [ ] Stream tokens to the Copilot view; render code blocks; "Apply" buttons on `propose_graph` patches.
- [ ] Slash commands: `/explain`, `/fix`, `/refactor`, `/blueprint <paste of ExtendScript>`.

**Deliverable:** Open the Copilot, ask "make the opacity tween from 0 to 100 over 1 second", and watch nodes appear.

## 7. Reverse translation ("Blueprints") — ~2 days

- [ ] `/blueprint` slash command takes pasted ExtendScript, asks the LLM to emit a DAG JSON conforming to our schema.
- [ ] Auto-layout incoming graphs with `dagre`.
- [ ] Diff against the current graph; allow merge or replace.

**Deliverable:** Paste a snippet, get a wired graph back.

## 8. Polish & distribution — ~2 days

- [ ] **Theming**: light variant + the current dark; system preference detection.
- [ ] **Keybindings panel**: discoverable list of every gesture (we already have them; just surface).
- [ ] **Telemetry (opt-in)**: anonymous counts of node types used, compile success/failure, panel uptime. Helps prioritize node coverage.
- [ ] **Build & sign**: ZXP packaging with a self-signed cert for internal distribution; document signing pipeline for App Store / Exchange submission.
- [ ] **Versioned `.ebn` schema** with migration shims (`schemaVersion: 1` → 2 …).

**Deliverable:** A signed, distributable ZXP a TD can install via ZXPInstaller.

---

## Sequencing recommendation

If we're optimizing for **stakeholder demo**: ship **§0 → §2 → §1** in that order. Two weeks gives a polished, runnable end-to-end demo.

If we're optimizing for **product depth**: ship **§3 → §4** alongside, so by the time leadership sees it, the surface area sells itself.

If we're optimizing for **partnership conversations**: prioritize **§6 → §7** — the LLM angle is the most quotable differentiator vs. plain CEP scripting tools.
