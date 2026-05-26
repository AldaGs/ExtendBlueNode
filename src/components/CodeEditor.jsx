import Editor from '@monaco-editor/react';
import './CodeEditor.css';

const EDITOR_OPTIONS = {
  readOnly: true,
  minimap: { enabled: false },
  wordWrap: 'on',
  fontSize: 12,
  fontFamily: 'ui-monospace, Consolas, "Cascadia Mono", monospace',
  scrollBeyondLastLine: false,
  smoothScrolling: true,
  renderLineHighlight: 'line',
  automaticLayout: true,
  tabSize: 2,
};

export default function CodeEditor({ value, onChange }) {
  return (
    <div className="ebn-editor">
      <div className="ebn-editor__header">
        <span className="ebn-editor__title">Generated ExtendScript</span>
        <span className="ebn-editor__badge" title="Generated from the node graph — not user-editable">
          <svg
            className="ebn-editor__lock"
            width="10"
            height="10"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-.5V4.5A3.5 3.5 0 0 0 8 1Zm-2 6V4.5a2 2 0 1 1 4 0V7H6Z" />
          </svg>
          Read-Only
        </span>
      </div>
      <div className="ebn-editor__body">
        <Editor
          height="100%"
          language="javascript"
          theme="vs-dark"
          value={value}
          onChange={onChange}
          options={EDITOR_OPTIONS}
        />
      </div>
    </div>
  );
}
