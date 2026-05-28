import Editor from '@monaco-editor/react';
import { useCallback } from 'react';
import './CodeEditor.css'; // Reusing the same CSS for now

const EDITOR_OPTIONS = {
  minimap: { enabled: false },
  wordWrap: 'on',
  fontSize: 12,
  fontFamily: 'ui-monospace, Consolas, "Cascadia Mono", monospace',
  scrollBeyondLastLine: false,
  smoothScrolling: true,
  renderLineHighlight: 'line',
  automaticLayout: true,
  tabSize: 4,
};

export default function ScriptUIEditor({ selectedNode, setNodes }) {
  const value = selectedNode?.data?.values?.scriptUI_string ?? '';

  const onChange = useCallback((newVal) => {
    if (!selectedNode) return;
    setNodes((nds) =>
      nds.map((n) =>
        n.id !== selectedNode.id
          ? n
          : { ...n, data: { ...n.data, values: { ...n.data.values, scriptUI_string: newVal } } }
      )
    );
  }, [selectedNode, setNodes]);

  if (!selectedNode) {
    return (
      <div className="ebn-editor">
        <div className="ebn-editor__header">
          <span className="ebn-editor__title">ScriptUI Editor</span>
        </div>
        <div className="ebn-editor__body" style={{ padding: '16px', color: '#888' }}>
          Select a ScriptUI node to edit its layout.
        </div>
      </div>
    );
  }

  const isScriptUIBuilder = selectedNode.data?.label === 'ScriptUI Builder';
  const isCustomCode = selectedNode.data?.label === 'Custom UI Code';

  if (!isScriptUIBuilder && !isCustomCode) {
    return (
      <div className="ebn-editor">
        <div className="ebn-editor__header">
          <span className="ebn-editor__title">ScriptUI Editor</span>
        </div>
        <div className="ebn-editor__body" style={{ padding: '16px', color: '#888' }}>
          Selected node does not support ScriptUI editing.
        </div>
      </div>
    );
  }

  return (
    <div className="ebn-editor">
      <div className="ebn-editor__header">
        <span className="ebn-editor__title">
          {isScriptUIBuilder ? 'ScriptUI Layout (Resource String)' : 'Custom JS Code'}
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
