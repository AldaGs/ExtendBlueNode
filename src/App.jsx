import { useState } from 'react';
import FlowCanvas from './components/FlowCanvas';
import CodeEditor from './components/CodeEditor';
import './App.css';

const INITIAL_CODE = `// EBN Auto-Generated Code
// Wire nodes on the canvas to generate ExtendScript...
`;

export default function App() {
  const [chatInput, setChatInput] = useState('');
  const [generatedCode, setGeneratedCode] = useState(INITIAL_CODE);
  const activeComp = 'Main_Comp_01';

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
          <FlowCanvas />
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
