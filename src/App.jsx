import { useEffect, useState, useCallback } from 'react';
import {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useOnSelectionChange,
} from 'reactflow';

import FlowCanvas from './components/FlowCanvas';
import CodeEditor from './components/CodeEditor';
import PropertiesPanel from './components/PropertiesPanel';
import { initialNodes, initialEdges } from './graph/initialGraph';
import { compileToExtendScript } from './astCompiler';
import './App.css';

// Inner component so useOnSelectionChange can read the ReactFlowProvider context.
function AppShell() {
  const [chatInput, setChatInput] = useState('');
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [generatedCode, setGeneratedCode] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeTab, setActiveTab] = useState('code'); // 'code' | 'props'
  const [propsValid, setPropsValid] = useState(true);
  const activeComp = 'Main_Comp_01';

  useEffect(() => {
    setGeneratedCode(compileToExtendScript(nodes, edges));
  }, [nodes, edges]);

  useOnSelectionChange({
    onChange: useCallback(({ nodes: selected }) => {
      setSelectedNode(selected[0] ?? null);
    }, []),
  });

  const goToCodeTab = useCallback(() => {
    if (!propsValid) return;
    setActiveTab('code');
  }, [propsValid]);

  // Keep the selected node reference fresh as the user types in the panel.
  const liveSelected = selectedNode
    ? nodes.find((n) => n.id === selectedNode.id) ?? null
    : null;

  return (
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
        <section className="ebn-canvas">
          <FlowCanvas
            nodes={nodes}
            edges={edges}
            setNodes={setNodes}
            setEdges={setEdges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
          />
        </section>

        <aside className="ebn-right">
          <div className="ebn-pane">
            <div className="ebn-tabs">
              <button
                className={`ebn-tab${activeTab === 'code' ? ' ebn-tab--active' : ''}${!propsValid ? ' ebn-tab--disabled' : ''}`}
                onClick={goToCodeTab}
                disabled={!propsValid}
                title={propsValid ? '' : 'Fix invalid properties first'}
                type="button"
              >
                Code
              </button>
              <button
                className={`ebn-tab${activeTab === 'props' ? ' ebn-tab--active' : ''}`}
                onClick={() => setActiveTab('props')}
                type="button"
              >
                Properties
                {!propsValid && <span className="ebn-tab__dot" aria-hidden="true" />}
              </button>
            </div>
            <div className="ebn-pane__body">
              <div
                className="ebn-tab-panel"
                style={{ display: activeTab === 'code' ? 'block' : 'none' }}
              >
                <CodeEditor value={generatedCode} onChange={setGeneratedCode} />
              </div>
              <div
                className="ebn-tab-panel"
                style={{ display: activeTab === 'props' ? 'block' : 'none' }}
              >
                <PropertiesPanel
                  selectedNode={liveSelected}
                  setNodes={setNodes}
                  onValidityChange={setPropsValid}
                />
              </div>
            </div>
          </div>

          <div className="ebn-pane">
            <div className="ebn-pane__header">Copilot</div>
            <div className="ebn-pane__body">
              <div className="ebn-copilot">
                <div className="ebn-copilot__history">
                  &gt; Local LLM copilot ready.
                </div>
                <form
                  className="ebn-copilot__input"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setChatInput('');
                  }}
                >
                  <input
                    type="text"
                    placeholder="Ask the copilot…"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <AppShell />
    </ReactFlowProvider>
  );
}
