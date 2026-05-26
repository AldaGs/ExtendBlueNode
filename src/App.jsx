import { useEffect, useMemo, useState, useCallback } from 'react';
import {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useOnSelectionChange,
} from 'reactflow';
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
import './App.css';

function AppShell() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [generatedCode, setGeneratedCode] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [propsValid, setPropsValid] = useState(true);
  const [globalVariables, setGlobalVariables] = useState([]);
  const activeComp = 'Main_Comp_01';

  const globalsContextValue = useMemo(
    () => ({ globalVariables, setGlobalVariables }),
    [globalVariables],
  );

  useEffect(() => {
    setGeneratedCode(compileToExtendScript(nodes, edges, globalVariables));
  }, [nodes, edges, globalVariables]);

  useOnSelectionChange({
    onChange: useCallback(({ nodes: selected }) => {
      setSelectedNode(selected[0] ?? null);
    }, []),
  });

  // Keep the panel's reference fresh while editing.
  const liveSelected = selectedNode
    ? nodes.find((n) => n.id === selectedNode.id) ?? null
    : null;

  // ----- view registry: each entry produces a fresh element on render.
  // Switching a leaf to a view re-mounts the component. Monaco + ReactFlow
  // both handle re-mount cleanly thanks to local config (monaco-setup) and
  // their internal layout systems.
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

  // Veto leaving 'properties' while the form is invalid.
  const onBeforeSwitch = useCallback(
    (from, to) => {
      if (from === 'properties' && !propsValid) return false;
      return true;
    },
    [propsValid],
  );

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

        <div className="ebn-workspace">
          <Group orientation="horizontal" id="ebn-root">
            <Panel id="left" defaultSize={60} minSize={20}>
              <ViewLeaf
                initialView="canvas"
                views={views}
                onBeforeSwitch={onBeforeSwitch}
              />
            </Panel>
            <Separator className="ebn-resizer ebn-resizer--v" />
            <Panel id="right" defaultSize={40} minSize={20}>
              <Group orientation="vertical" id="ebn-right">
                <Panel id="top" defaultSize={55} minSize={15}>
                  <ViewLeaf
                    initialView="code"
                    views={views}
                    onBeforeSwitch={onBeforeSwitch}
                  />
                </Panel>
                <Separator className="ebn-resizer ebn-resizer--h" />
                <Panel id="bottom" defaultSize={45} minSize={15}>
                  <ViewLeaf
                    initialView="copilot"
                    views={views}
                    onBeforeSwitch={onBeforeSwitch}
                  />
                </Panel>
              </Group>
            </Panel>
          </Group>
        </div>
      </div>
    </GlobalsProvider>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <AppShell />
    </ReactFlowProvider>
  );
}
