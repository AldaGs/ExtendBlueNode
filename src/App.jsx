import { useEffect, useMemo, useState, useCallback } from 'react';
import { useNodesState, useEdgesState } from 'reactflow';
import { Group, Panel, Separator } from 'react-resizable-panels';

import FlowCanvas from './components/FlowCanvas';
import CodeEditor from './components/CodeEditor';
import PropertiesPanel from './components/PropertiesPanel';
import GlobalVariablesPanel from './components/GlobalVariablesPanel';
import CopilotPanel from './components/CopilotPanel';
import ViewLeaf from './components/ViewLeaf';
import { GlobalsProvider } from './state/GlobalsContext';
import { initialNodes, initialEdges } from './graph/initialGraph';
import { compileToExtendScript } from './astCompiler';
import {
  setLeafView,
  splitLeaf,
  closeLeaf,
  countLeaves,
} from './layoutTree';
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
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [generatedCode, setGeneratedCode] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [propsValid, setPropsValid] = useState(true);
  const [globalVariables, setGlobalVariables] = useState([]);
  const [layout, setLayout] = useState(INITIAL_LAYOUT);
  const activeComp = 'Main_Comp_01';

  const globalsContextValue = useMemo(
    () => ({ globalVariables, setGlobalVariables }),
    [globalVariables],
  );

  useEffect(() => {
    setGeneratedCode(compileToExtendScript(nodes, edges, globalVariables));
  }, [nodes, edges, globalVariables]);

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
          />
        ),
      },
      globals: {
        title: 'Globals',
        render: () => (
          <GlobalVariablesPanel
            globalVariables={globalVariables}
            setGlobalVariables={setGlobalVariables}
          />
        ),
      },
      copilot: {
        title: 'Copilot',
        render: () => <CopilotPanel />,
      },
    }),
    [
      nodes, edges, setNodes, setEdges, onNodesChange, onEdgesChange,
      generatedCode, liveSelected, propsValid, globalVariables,
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
    const horizontal = pane.orientation === 'h';
    return (
      <Group
        key={pane.id}
        orientation={horizontal ? 'horizontal' : 'vertical'}
        id={pane.id}
      >
        <Panel
          id={`${pane.id}-a`}
          defaultSize={pane.sizes[0]}
          minSize={10}
        >
          {renderPane(pane.children[0])}
        </Panel>
        <Separator
          className={`ebn-resizer ebn-resizer--${horizontal ? 'v' : 'h'}`}
        />
        <Panel
          id={`${pane.id}-b`}
          defaultSize={pane.sizes[1]}
          minSize={10}
        >
          {renderPane(pane.children[1])}
        </Panel>
      </Group>
    );
  };

  return (
    <GlobalsProvider value={globalsContextValue}>
      <div className="ebn-app">
        <header className="ebn-header">
          <div className="ebn-header__title">Extend Blue Node</div>
          <div className="ebn-header__status">
            Active Comp:<strong>{activeComp}</strong>
          </div>
          <button className="ebn-btn-primary" type="button">
            Compile &amp; Inject
          </button>
        </header>

        <div className="ebn-workspace">{renderPane(layout)}</div>
      </div>
    </GlobalsProvider>
  );
}
