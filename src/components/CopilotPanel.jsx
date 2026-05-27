import { useState, useEffect, useRef, useCallback } from 'react';
import { sendMessage, PROVIDERS } from '../services/llmService';
import { applyPatch } from '../services/graphTools';
import './CopilotPanel.css';

const LS_PROVIDER  = 'ebn_copilot_provider';
const LS_KEY_PFX   = 'ebn_copilot_key_';
const LS_OLLAMA_M  = 'ebn_copilot_ollama_model';

const PROVIDER_LABELS = {
  [PROVIDERS.GEMINI]: 'Gemini 2.0 Flash (free)',
  [PROVIDERS.CLAUDE]: 'Claude Haiku',
  [PROVIDERS.OLLAMA]: 'Ollama (local)',
};

export default function CopilotPanel({ nodes, edges, setNodes, setEdges }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  const [provider, setProvider] = useState(
    () => localStorage.getItem(LS_PROVIDER) || PROVIDERS.GEMINI,
  );
  const [apiKey, setApiKey] = useState(
    () => localStorage.getItem(LS_KEY_PFX + (localStorage.getItem(LS_PROVIDER) || PROVIDERS.GEMINI)) || '',
  );
  const [ollamaModel, setOllamaModel] = useState(
    () => localStorage.getItem(LS_OLLAMA_M) || 'llama3.2',
  );

  const historyEndRef = useRef(null);

  // Persist settings
  useEffect(() => {
    localStorage.setItem(LS_PROVIDER, provider);
  }, [provider]);

  useEffect(() => {
    localStorage.setItem(LS_KEY_PFX + provider, apiKey);
  }, [provider, apiKey]);

  useEffect(() => {
    localStorage.setItem(LS_OLLAMA_M, ollamaModel);
  }, [ollamaModel]);

  // Load API key when provider changes
  const handleProviderChange = useCallback((newProvider) => {
    setProvider(newProvider);
    setApiKey(localStorage.getItem(LS_KEY_PFX + newProvider) || '');
    setError(null);
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Build history array for the LLM (plain text only — no patch metadata)
  const buildHistory = useCallback(
    () =>
      messages.map((m) => ({
        role: m.role,
        content: m.patch
          ? (m.content ? m.content + ' ' : '') +
            `[Graph: ${m.patch.nodes?.length ?? 0} nodes, ${m.patch.edges?.length ?? 0} edges]`
          : m.content,
      })),
    [messages],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const text = input.trim();
      if (!text || loading) return;

      if (provider !== PROVIDERS.OLLAMA && !apiKey.trim()) {
        setError('Enter an API key in settings first.');
        setShowSettings(true);
        return;
      }

      setInput('');
      setError(null);
      setMessages((prev) => [...prev, { role: 'user', content: text }]);
      setLoading(true);

      const result = await sendMessage({
        provider,
        apiKey: apiKey.trim(),
        ollamaModel,
        history: buildHistory(),
        userMessage: text,
      });

      setLoading(false);

      if (result.error) {
        setError(result.error);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: result.text ?? '',
          patch: result.patch ?? null,
          applied: false,
        },
      ]);
    },
    [input, loading, provider, apiKey, ollamaModel, buildHistory],
  );

  const handleApply = useCallback(
    (msgIndex) => {
      const msg = messages[msgIndex];
      if (!msg?.patch) return;
      applyPatch(setNodes, setEdges, msg.patch);
      setMessages((prev) =>
        prev.map((m, i) => (i === msgIndex ? { ...m, applied: true } : m)),
      );
    },
    [messages, setNodes, setEdges],
  );

  const needsKey = provider !== PROVIDERS.OLLAMA;

  return (
    <div className="ebn-copilot">
      {/* Settings toggle */}
      <button
        className={`ebn-copilot__toggle-settings${showSettings ? ' ebn-copilot__toggle-settings--open' : ''}`}
        onClick={() => setShowSettings((v) => !v)}
        type="button"
      >
        <svg width="9" height="9" viewBox="0 0 9 9" fill="currentColor">
          <polygon points="2,1 8,4.5 2,8" />
        </svg>
        Settings
        {needsKey && !apiKey && (
          <span style={{ color: '#e8a020', marginLeft: 4 }}>— API key required</span>
        )}
      </button>

      {/* Settings panel */}
      {showSettings && (
        <div className="ebn-copilot__settings">
          <div className="ebn-copilot__settings-row">
            <label>Provider</label>
            <select value={provider} onChange={(e) => handleProviderChange(e.target.value)}>
              {Object.entries(PROVIDER_LABELS).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>

          {needsKey && (
            <div className="ebn-copilot__settings-row">
              <label>API key</label>
              <input
                type="password"
                placeholder={provider === PROVIDERS.GEMINI ? 'AIza…' : 'sk-ant-…'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                autoComplete="off"
              />
            </div>
          )}

          {provider === PROVIDERS.OLLAMA && (
            <div className="ebn-copilot__settings-row">
              <label>Model</label>
              <input
                type="text"
                placeholder="llama3.2"
                value={ollamaModel}
                onChange={(e) => setOllamaModel(e.target.value)}
              />
            </div>
          )}
        </div>
      )}

      {/* Message history */}
      <div className="ebn-copilot__history">
        {messages.length === 0 && (
          <div className="ebn-copilot__placeholder">
            Ask the Copilot to build a node graph.
            <br />
            e.g. "Set opacity of layer 1 to 75%"
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`ebn-copilot__msg ebn-copilot__msg--${msg.role}`}>
            {msg.content && (
              <div className="ebn-copilot__bubble">{msg.content}</div>
            )}

            {msg.patch && (
              <div className="ebn-copilot__patch">
                <div className="ebn-copilot__patch-info">
                  {msg.patch.explanation
                    ? msg.patch.explanation
                    : `${msg.patch.nodes?.length ?? 0} nodes · ${msg.patch.edges?.length ?? 0} edges`}
                </div>
                <div className="ebn-copilot__patch-btns">
                  {msg.applied ? (
                    <span className="ebn-copilot__applied-tag">✓ Applied to canvas</span>
                  ) : (
                    <button
                      className="ebn-copilot__btn-apply"
                      onClick={() => handleApply(i)}
                    >
                      Add to canvas
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="ebn-copilot__loading">Thinking…</div>
        )}

        <div ref={historyEndRef} />
      </div>

      {/* Error */}
      {error && <div className="ebn-copilot__error">{error}</div>}

      {/* Input */}
      <form className="ebn-copilot__footer" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask the copilot…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()}>
          {loading ? '…' : 'Send'}
        </button>
      </form>
    </div>
  );
}
