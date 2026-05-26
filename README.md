# Extend Blue Node (EBN)

EBN is a Turing-complete visual programming environment and IDE for Adobe After Effects. It bridges the gap between visual thinkers and heavy-duty scripting by combining a React Flow node canvas with a live Monaco code mirror, powered by local LLM architecture.

## ✨ Core Features

* **Visual ExtendScript Canvas:** Build complex logic loops, selectors, and mutators using a node-based interface (`reactflow`) without typing syntax.
* **Strict DAG Schema:** Under the hood, the visual canvas generates a flat Directed Acyclic Graph (DAG) JSON payload, ensuring stable translation to AST.
* **The "Tri-Pane" Workspace:** A dynamic UI featuring the visual grid, a live read-only Monaco editor mapping the visual logic to JS in real-time, and a local LLM Copilot for instant debugging.
* **The Micro/Macro Protocol:** Seamlessly drop "Custom Code Nodes" into the visual flow for micro-edits, or hit "Eject" to permanently convert a node tree into raw ExtendScript for macro-edits.
* **AI-Powered Blueprints (Experimental):** Send arbitrary ExtendScript to a local LLM to translate raw code back into visual node schema, dynamically spaced via `dagre`.

## 🛠 Tech Stack

* **Frontend:** React (Vite), React Flow (Node UI), Dagre (Auto-Layout)
* **Backend:** ExtendScript (ES3)
* **Bridge:** Adobe CSInterface.js
* **Editor:** `@monaco-editor/react` (bundled locally)
* **AI Integration:** Local Ollama backend (e.g., qwen2.5-coder:7b)

## 🚀 Setup (Developer Mode)
1. Run PowerShell: `$versions = 11..16; foreach ($v in $versions) { New-ItemProperty -Path "HKCU:\Software\Adobe\CSXS.$v" -Name PlayerDebugMode -Value 1 -PropertyType String -Force }`
2. Install dependencies: `npm install reactflow dagre @monaco-editor/react monaco-editor`
3. Symlink to Adobe: `mklink /D "%appdata%\Adobe\CEP\extensions\ebn" "C:\path\to\your\ebn"`

## 🗺 Roadmap

**Phase A — The Visual Foundation**
* [ ] Scaffold the "Tri-Pane" UI layout.
* [ ] Implement the strict DAG JSON schema for `nodes` and `edges`.
* [ ] Build the core React Flow interactions (drag, connect, contextual right-click menu).

**Phase B — The Translation Engine**
* [ ] Integrate Monaco Editor in read-only mode.
* [ ] Write the AST JSON-to-ExtendScript translation parser.
* [ ] Wire the "Compile & Inject" bridge via `CSInterface.js`.

**Phase C — The Micro/Macro Protocol**
* [ ] Implement the "Custom Code Node" component.
* [ ] Build the "Eject" warning sequence and state unlock for the Monaco IDE.
* [ ] Implement Error Traceback: highlight the offending visual node in red upon compilation failure.

**Phase D — The AI Architect**
* [ ] Integrate local Ollama RAG pipeline for the Copilot chat.
* [ ] Build the "✨ Generate Blueprints" experimental reverse-translation pipeline using `dagre` for spatial layout.
* [ ] Launch the Package Manager / Vault for sharing `.json` node trees.