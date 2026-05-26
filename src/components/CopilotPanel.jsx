import { useState } from 'react';

export default function CopilotPanel() {
  const [chatInput, setChatInput] = useState('');

  return (
    <div className="ebn-copilot">
      <div className="ebn-copilot__history">&gt; Local LLM copilot ready.</div>
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
  );
}
