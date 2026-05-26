import { useEffect, useState } from 'react';
import { useNodesState, useEdgesState } from 'reactflow';

import FlowCanvas from './components/FlowCanvas';
import CodeEditor from './components/CodeEditor';
import { initialNodes, initialEdges } from './graph/initialGraph';
import { compileToExtendScript } from './astCompiler';
import './App.css';

export default function App() {
  const [chatInput, setChatInput] = useState('');
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [generatedCode, setGeneratedCode] = useState('');
  const activeComp = 'Main_Comp_01';

  useEffect(() => {
    setGeneratedCode(compileToExtendScript(nodes, edges));
  }, [nodes, edges]);

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
            <div className="ebn-pane__body">
              <CodeEditor value={generatedCode} onChange={setGeneratedCode} />
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
