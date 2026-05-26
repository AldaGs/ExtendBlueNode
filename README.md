# Extend Blue Node (EBN)

EBN is a visual programming environment and IDE for Adobe After Effects. It pairs a [React Flow](https://reactflow.dev/) node canvas with a live Monaco code mirror, so artists and TDs can author ExtendScript by wiring intent — and watch the script materialize in real time. Loaded as a CEP panel inside After Effects.

> Status: pre-alpha. Pipeline (canvas → AST → ExtendScript → CEP host) is working end-to-end for the seeded node set. UI is feature-complete enough to start using; node coverage and persistence are the next investments.

---

## ✨ What works today

- **Splittable workspace.** A Blender-style layout tree — every pane can be split horizontally or vertically, resized by dragging the gutter, or closed. Any pane can host any view (Canvas / Code / Properties / Globals / Copilot) via a modern Adobe-styled view picker.
- **Multi-canvas with independent cameras.** Each canvas leaf has its own `ReactFlowProvider`, so you can open two canvases with independent pan/zoom and selection.
- **Custom node aesthetic.** ComfyUI/Blender-inspired dark cards with themed headers per category (Selectors / Actions / Mutators / Data / Globals). Handles are unclipped, wires render above nodes, single-input enforcement.
- **Smart Input ports.** Each input renders either an inline dark editor (number / text) or a "Linked" pill when a wire is plugged in. Editing writes into `node.data.values[handleId]`.
- **Primitive data nodes.** `Integer` and `String` literal nodes drive any input by wire — the compiler hoists their values into named variables.
- **Global variables.** Defined in the Globals panel (`{ id, name, type, initialValue }`). `Get Global` and `Set Global` nodes use them on the canvas. The compiler hoists every global to the top of the script and emits assignments in the exec chain.
- **Properties panel.** Edits a selected node's `label` and `variableName` with live validation — a red glow + shake on invalid identifiers, and the panel blocks tab-switching away while invalid.
- **Add-node menu.** Right-click on empty canvas opens a categorized, searchable picker. Drag a wire onto empty pane and it opens pre-targeted, auto-wiring the spawned node to the source handle on compatible ports.
- **Canvas gestures.**
  - Drag node onto a wire → edge splits and rewires through the node.
  - **Shift+click** empty canvas → drops a Reroute relay node.
  - **Ctrl/Cmd-drag** → knife tool; deletes every edge it crosses.
  - Drag an edge endpoint to another handle → reconnects; drop on empty canvas → disconnects.
  - Delete / Backspace deletes selected edges.
- **Live AST → ExtendScript.** [`src/astCompiler.js`](src/astCompiler.js) walks the execution edges from `Get Active Comp`, hoists globals + primitives, substitutes `{token}` slots with either inline values or wired references, and emits a `try { app.beginUndoGroup(...) … } catch { alert(...) }` block. Recompiles on every graph change.
- **Local Monaco.** Bundled locally with `monaco-editor` + Vite `?worker` imports — no CDN, works under `file://` in CEP.

## 🛠 Tech stack

| Layer | Choice |
| --- | --- |
| App shell | React 19, Vite |
| Node UI | `reactflow` v11 |
| Editor | `@monaco-editor/react` (locally bundled) |
| Splittable layout | custom flexbox-based [`Split`](src/components/Split.jsx) |
| AE bridge | Adobe CEP 11 (`CSInterface.js`) |
| Generated runtime | ExtendScript (ES3) |
| LLM (planned) | local Ollama (e.g. `qwen2.5-coder:7b`) |

## 📁 Project layout

```
src/
  App.jsx                   Layout tree, view registry, top-level state
  astCompiler.js            DAG → ExtendScript translation engine
  nodeLibrary.js            Single source of truth for spawnable nodes
  layoutTree.js             Pure operations: setLeafView/splitLeaf/closeLeaf/setSplitSizes
  state/GlobalsContext.jsx  Global variables context
  graph/initialGraph.js     Seed graph + node theme palette
  monaco-setup.js           Local Monaco loader + worker wiring
  components/
    FlowCanvas.jsx          ReactFlow wrapper (one provider per canvas)
    EBNNode.jsx             Themed action/selector/mutator node
    RerouteNode.jsx         Pass-through relay dot
    IntegerNode.jsx / StringNode.jsx   Primitive data sources
    GetGlobalNode.jsx / SetGlobalNode.jsx
    SmartInput.jsx          Conditional handle + inline editor
    AddNodeMenu.jsx         Right-click / drop-wire-on-pane picker
    PropertiesPanel.jsx     Node label + variableName editor
    GlobalVariablesPanel.jsx
    CodeEditor.jsx          Monaco wrapper
    CopilotPanel.jsx        Local LLM chat (stub)
    Split.jsx / ViewLeaf.jsx / ViewPicker.jsx   Workspace primitives
CSXS/manifest.xml           CEP 11 manifest (AEFT 22+)
.debug                      Unsigned-dev port mapping (8088 for AE)
jsx/host.jsx                ExtendScript host stub
scripts/install-cep.mjs     Symlink the project into the AE extensions folder
```

## 🚀 Setup

### Web dev (fastest iteration)
```bash
npm install
npm run dev
```
The full UI works in any modern browser. The CEP bridge is stubbed but compilation/AST/canvas all behave identically.

### Inside After Effects (CEP panel)
One-time, on Windows:
```bash
npm run cep:enable-debug       # sets PlayerDebugMode=1 in HKCU for CSXS 10 & 11
```
You may also need to enable Windows Developer Mode (so symlink creation doesn't require admin), or run the next step in an elevated terminal — it falls back to a copy if symlinking is denied.

Then, every time you want to refresh the panel:
```bash
npm run ae:preview             # build + install into %APPDATA%/Adobe/CEP/extensions
```
Launch After Effects → **Window → Extensions → Extend Blue Node**.
To attach DevTools, open `http://localhost:8088` in any browser while AE has the panel open.

## ⌨ Canvas reference

| Gesture | Effect |
| --- | --- |
| Right-click empty pane | Add-node menu |
| Drop wire on empty pane | Add-node menu + auto-wire |
| Drag node onto wire | Insert node into the edge |
| Shift + click empty pane | Spawn a Reroute relay |
| Ctrl/Cmd + drag | Knife — cuts edges crossed |
| Drag edge endpoint to another handle | Reconnect |
| Drop edge endpoint on pane | Disconnect |
| Select edge + Delete / Backspace | Remove edge |
| Drag pane gutter | Resize |
| Pane header buttons | Split-h / split-v / close |

## 📑 Documentation

- [`docs/STATUS.md`](docs/STATUS.md) — Latest state-of-the-project report for the PM.
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — Phased plan for what comes next.
