import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useNodesState, useEdgesState } from 'reactflow';
import Split from './components/Split';
import FlowCanvas from './components/FlowCanvas';
import CodeEditor from './components/CodeEditor';
import PropertiesPanel from './components/PropertiesPanel';
import GlobalVariablesPanel from './components/GlobalVariablesPanel';
import CopilotPanel from './components/CopilotPanel';
import ScriptUIEditor from './components/ScriptUIEditor';
import ScriptUIBuilderPane from './components/ScriptUIBuilderPane';
import ViewLeaf from './components/ViewLeaf';
import ProjectMenu from './components/ProjectMenu';
import { GlobalsProvider } from './state/GlobalsContext';
import { initialNodes, initialEdges } from './graph/initialGraph';
import { compileToExtendScript } from './astCompiler';
import { scriptUIBuilderOutputs } from './graph/scriptui';
import {
  setLeafView,
  splitLeaf,
  closeLeaf,
  countLeaves,
  setSplitSizes,
} from './layoutTree';
import {
  loadFromStorage,
  saveToStorage,
  clearStorage,
  downloadProject,
  pickProjectFile,
} from './persistence';
import { runInHost, isCep } from './cep';
import './App.css';

const INITIAL_LAYOUT = {
  type: 'split',
  id: 'root',
  orientation: 'h',
  sizes: [60, 40],
  children: [
    { type: 'leaf', id: 'l_canvas', viewId: 'canvas' },
    {
      type: 'split',
      id: 'r',
      orientation: 'v',
      sizes: [55, 45],
      children: [
        { type: 'leaf', id: 'l_code', viewId: 'code' },
        { type: 'leaf', id: 'l_copilot', viewId: 'copilot' },
      ],
    },
  ],
};

export default function App() {
  // One-time read of the autosave so hydration happens before any
  // setters run. If parsing fails, restored is null and we fall back
  // to the seed graph + INITIAL_LAYOUT.
  const restored = useMemo(() => loadFromStorage(), []);

  const [nodes, setNodes, onNodesChange] = useNodesState(
    restored?.nodes ?? initialNodes,
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    restored?.edges ?? initialEdges,
  );
  const [generatedCode, setGeneratedCode] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [propsValid, setPropsValid] = useState(true);
  const [globalVariables, setGlobalVariables] = useState(
    restored?.globalVariables ?? [],
  );
  const [layout, setLayout] = useState(restored?.layout ?? INITIAL_LAYOUT);
  const [lastCompile, setLastCompile] = useState(null); // {at, nodes, edges}
  const [lastSave, setLastSave] = useState(restored ? Date.now() : null);
  const [running, setRunning] = useState(false);
  const [lastRun, setLastRun] = useState(null); // {at, ok, message, offline}
  const activeComp = 'Main_Comp_01';

  // Cursor for staggering spawned-from-panel nodes so they don't pile on top.
  const spawnCursorRef = useRef(0);

  const globalsContextValue = useMemo(
    () => ({ globalVariables, setGlobalVariables }),
    [globalVariables],
  );

  useEffect(() => {
    setGeneratedCode(compileToExtendScript(nodes, edges, globalVariables));
    setLastCompile({
      at: Date.now(),
      nodes: nodes.length,
      edges: edges.length,
    });
  }, [nodes, edges, globalVariables]);

  // Keep every ScriptUI Builder's output pins in sync with its layout tree
  // (or legacy resource string) — regardless of selection. (Previously this only ran for the
  // selected node in PropertiesPanel, so pins went stale after loading a
  // project or editing the string without selecting the node.) Guarded so
  // it only writes when a pin set actually changed, avoiding render loops.
  useEffect(() => {
    let dirty = false;
    const next = nodes.map((n) => {
      if (n.data?.label !== 'ScriptUI Builder') return n;
      const desired = scriptUIBuilderOutputs(n.data?.values);
      const cur = n.data?.outputs || [];
      const same =
        cur.length === desired.length &&
        desired.every((o, i) => o.id === cur[i]?.id && o.label === cur[i]?.label);
      if (same) return n;
      dirty = true;
      return { ...n, data: { ...n.data, outputs: desired } };
    });
    if (dirty) setNodes(next);
  }, [nodes, setNodes]);

  // Debounced autosave. Cancels the pending write on every subsequent
  // change so we only persist after the user pauses for ~500 ms.
  const hasMountedRef = useRef(false);
  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return; // skip the initial mount — nothing actually changed
    }
    const t = setTimeout(() => {
      const ok = saveToStorage({ nodes, edges, globalVariables, layout });
      if (ok) setLastSave(Date.now());
    }, 500);
    return () => clearTimeout(t);
  }, [nodes, edges, globalVariables, layout]);

  /* ----------------------------- project menu ----------------------------- */

  const onNewProject = useCallback(() => {
    const confirmed = window.confirm(
      'New project: this will discard the current graph and layout. Continue?',
    );
    if (!confirmed) return;
    setNodes(initialNodes);
    setEdges(initialEdges);
    setGlobalVariables([]);
    setLayout(INITIAL_LAYOUT);
    setSelectedNode(null);
    clearStorage();
    setLastSave(null);
  }, [setNodes, setEdges]);

  const onOpenProject = useCallback(async () => {
    try {
      const loaded = await pickProjectFile();
      if (!loaded) return;
      setNodes(loaded.nodes);
      setEdges(loaded.edges);
      setGlobalVariables(loaded.globalVariables);
      setLayout(loaded.layout);
      setSelectedNode(null);
    } catch (e) {
      window.alert(`Couldn't open project: ${e.message}`);
    }
  }, [setNodes, setEdges]);

  /* ----------------------------- Globals -> canvas ----------------------------- */

  const onSpawnGlobalRef = useCallback(
    (globalId, kind /* 'get' | 'set' */) => {
      // Stagger spawns so successive clicks don't stack the new nodes
      // on top of each other.
      const i = spawnCursorRef.current;
      spawnCursorRef.current = (i + 1) % 24;
      const base = { x: 80 + i * 24, y: 80 + i * 24 };

      const node =
        kind === 'set'
          ? {
              id: `setg_${Date.now().toString(36)}_${Math.random()
                .toString(36)
                .slice(2, 5)}`,
              type: 'setGlobal',
              position: base,
              data: { globalId, values: {} },
            }
          : {
              id: `getg_${Date.now().toString(36)}_${Math.random()
                .toString(36)
                .slice(2, 5)}`,
              type: 'getGlobal',
              position: base,
              data: { globalId },
            };

      setNodes((nds) => [...nds, node]);
    },
    [setNodes],
  );

  /* ----------------------------- Compile & Inject ----------------------------- */

  const onCompileInject = useCallback(async () => {
    if (running) return;
    setRunning(true);
    try {
      const result = await runInHost(generatedCode);
      setLastRun({
        at: Date.now(),
        ok: !!result.ok,
        offline: !!result.offline,
        message: result.ok
          ? 'Injected successfully.'
          : (result.message || 'Unknown host error.') +
            (result.line ? ` (line ${result.line})` : ''),
      });
      if (!result.ok) {
        // Mirror to console so DevTools always has the full payload.
        // eslint-disable-next-line no-console
        console.warn('[ebn] inject failed:', result);
      }
    } finally {
      setRunning(false);
    }
  }, [generatedCode, running]);

  const onSaveProject = useCallback(() => {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    downloadProject(
      { nodes, edges, globalVariables, layout },
      `ebn-${stamp}.ebn`,
    );
  }, [nodes, edges, globalVariables, layout]);

  // Keyboard shortcuts: Ctrl/Cmd + N / O / S.
  useEffect(() => {
    const onKey = (e) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      const k = e.key.toLowerCase();
      if (k === 's') {
        e.preventDefault();
        onSaveProject();
      } else if (k === 'o') {
        e.preventDefault();
        onOpenProject();
      } else if (k === 'n') {
        // Browsers reserve Ctrl/Cmd+N for new window; we can't reliably
        // override it. Leave it to the menu.
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onSaveProject, onOpenProject]);

  const liveSelected = selectedNode
    ? nodes.find((n) => n.id === selectedNode.id) ?? null
    : null;

  // ----- view registry: each render returns a fresh element.
  // Canvas in particular intentionally gets a stable React key per leaf
  // so its internal ReactFlow store / camera is preserved across re-renders
  // of unrelated tree changes.
  const views = useMemo(
    () => ({
      canvas: {
        title: 'Canvas',
        render: () => (
          <FlowCanvas
            nodes={nodes}
            edges={edges}
            setNodes={setNodes}
            setEdges={setEdges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onSelectionChange={setSelectedNode}
          />
        ),
      },
      code: {
        title: 'Code',
        render: () => (
          <CodeEditor value={generatedCode} onChange={setGeneratedCode} />
        ),
      },
      properties: {
        title: 'Properties',
        badge: !propsValid ? (
          <span className="ebn-leaf__badge" aria-hidden="true" />
        ) : null,
        render: () => (
          <PropertiesPanel
            selectedNode={liveSelected}
            setNodes={setNodes}
            onValidityChange={setPropsValid}
            onRequestScriptUIEditor={(viewId = 'scriptUIEditor') => {
              setLayout(t => {
                let foundId = null;
                function findLeaf(node) {
                  if (node.type === 'leaf' && node.viewId !== 'canvas') foundId = node.id;
                  else if (node.type === 'split') {
                    findLeaf(node.children[0]);
                    if (!foundId) findLeaf(node.children[1]);
                  }
                }
                findLeaf(t);
                if (foundId) {
                  return setLeafView(t, foundId, viewId);
                }
                return t;
              });
            }}
          />
        ),
      },
      globals: {
        title: 'Globals',
        render: () => (
          <GlobalVariablesPanel
            globalVariables={globalVariables}
            setGlobalVariables={setGlobalVariables}
            onSpawnRef={onSpawnGlobalRef}
          />
        ),
      },
      copilot: {
        title: 'Copilot',
        render: () => (
          <CopilotPanel
            nodes={nodes}
            edges={edges}
            setNodes={setNodes}
            setEdges={setEdges}
            globalVariables={globalVariables}
          />
        ),
      },
      scriptUIEditor: {
        title: 'ScriptUI Editor',
        render: () => (
          <ScriptUIEditor
            selectedNode={liveSelected}
            setNodes={setNodes}
          />
        ),
      },
      uiLayout: {
        title: 'UI Layout',
        render: () => (
          <ScriptUIBuilderPane
            selectedNode={liveSelected}
            setNodes={setNodes}
          />
        ),
      },
    }),
    [
      nodes, edges, setNodes, setEdges, onNodesChange, onEdgesChange,
      generatedCode, liveSelected, propsValid, globalVariables,
      onSpawnGlobalRef,
    ],
  );

  const onBeforeSwitch = useCallback(
    (from, to) => {
      if (from === 'properties' && !propsValid) return false;
      return true;
    },
    [propsValid],
  );

  const totalLeaves = countLeaves(layout);

  const handleChangeView = useCallback(
    (leafId, viewId) => setLayout((t) => setLeafView(t, leafId, viewId)),
    [],
  );
  const handleSplit = useCallback(
    (leafId, orientation) =>
      setLayout((t) => splitLeaf(t, leafId, orientation)),
    [],
  );
  const handleClose = useCallback(
    (leafId) => setLayout((t) => closeLeaf(t, leafId)),
    [],
  );

  const renderPane = (pane) => {
    if (pane.type === 'leaf') {
      return (
        <ViewLeaf
          key={pane.id}
          viewId={pane.viewId}
          views={views}
          onChangeView={(v) => handleChangeView(pane.id, v)}
          onBeforeSwitch={onBeforeSwitch}
          onSplit={(o) => handleSplit(pane.id, o)}
          onClose={() => handleClose(pane.id)}
          canClose={totalLeaves > 1}
        />
      );
    }
    return (
      <Split
        key={pane.id}
        orientation={pane.orientation}
        sizes={pane.sizes}
        onResize={(s) =>
          setLayout((t) => setSplitSizes(t, pane.id, s))
        }
      >
        {renderPane(pane.children[0])}
        {renderPane(pane.children[1])}
      </Split>
    );
  };

  return (
    <GlobalsProvider value={globalsContextValue}>
      <div className="ebn-app">
        <header className="ebn-header">
          <div className="ebn-header__title">Extend Blue Node</div>
          <ProjectMenu
            onNew={onNewProject}
            onOpen={onOpenProject}
            onSave={onSaveProject}
          />
          <div className="ebn-header__status">
            Active Comp:<strong>{activeComp}</strong>
          </div>
          {lastCompile && (
            <div className="ebn-compile-tag" title="Live AST compile status">
              <span className="ebn-compile-tag__dot" />
              <span>
                {lastCompile.nodes} nodes &middot; {lastCompile.edges} edges
              </span>
              <span className="ebn-compile-tag__time">
                {new Date(lastCompile.at).toLocaleTimeString()}
              </span>
            </div>
          )}
          {lastSave && (
            <div
              className="ebn-compile-tag ebn-compile-tag--muted"
              title="Autosaved to browser storage"
            >
              <span className="ebn-compile-tag__dot ebn-compile-tag__dot--idle" />
              <span>saved</span>
              <span className="ebn-compile-tag__time">
                {new Date(lastSave).toLocaleTimeString()}
              </span>
            </div>
          )}
          {lastRun && (
            <div
              className={`ebn-run-tag ebn-run-tag--${
                lastRun.ok ? 'ok' : lastRun.offline ? 'offline' : 'err'
              }`}
              title={lastRun.message}
            >
              <span className="ebn-run-tag__dot" />
              <span>
                {lastRun.ok
                  ? 'Injected'
                  : lastRun.offline
                  ? 'Browser mode'
                  : 'Run error'}
              </span>
              <span className="ebn-run-tag__time">
                {new Date(lastRun.at).toLocaleTimeString()}
              </span>
            </div>
          )}
          <button
            className="ebn-btn-primary"
            type="button"
            onClick={onCompileInject}
            disabled={running}
            title={
              isCep()
                ? 'Send generated ExtendScript to After Effects'
                : 'Open in After Effects to inject — browser shows status only'
            }
          >
            {running ? 'Injecting…' : 'Compile & Inject'}
          </button>
        </header>

        <div className="ebn-workspace">{renderPane(layout)}</div>
      </div>
    </GlobalsProvider>
  );
}
