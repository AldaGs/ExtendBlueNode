import { useState, useRef, useEffect } from 'react';
import { flattenLibrary, getNodeCatalogSummary } from '../nodeLibrary';
import { CLOUD_PROVIDERS, getStoredKey, setStoredKey, callCloud } from '../services/cloudLlmService';
import './CopilotPanel.css'; // Let's create this file next

function suggestLabel(requested, allLabels) {
  if (!requested) return null;
  const norm = s => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().split(/\s+/).filter(Boolean);
  const reqTokens = new Set(norm(requested));
  let best = null;
  let bestScore = 0;
  for (const lbl of allLabels) {
    const lblTokens = norm(lbl);
    let overlap = 0;
    for (const t of lblTokens) if (reqTokens.has(t)) overlap++;
    // Also reward substring containment
    const sub = lbl.toLowerCase().includes(requested.toLowerCase()) || requested.toLowerCase().includes(lbl.toLowerCase());
    const score = overlap + (sub ? 1 : 0);
    if (score > bestScore) { bestScore = score; best = lbl; }
  }
  return bestScore > 0 ? best : null;
}

const OLLAMA_MODELS = [
  'qwen2.5:7b-instruct',
  'llama3.1:8b-instruct',
  'qwen2.5:14b-instruct',
  'qwen2.5-coder:7b',
];

// Provider registry — local Ollama plus the three cloud providers.
const PROVIDERS = {
  ollama:  { label: 'Ollama (local)',    models: OLLAMA_MODELS,                       isCloud: false },
  claude:  { label: CLOUD_PROVIDERS.claude.label, models: CLOUD_PROVIDERS.claude.models, isCloud: true, cloudKey: 'claude' },
  openai:  { label: CLOUD_PROVIDERS.openai.label, models: CLOUD_PROVIDERS.openai.models, isCloud: true, cloudKey: 'openai' },
  gemini:  { label: CLOUD_PROVIDERS.gemini.label, models: CLOUD_PROVIDERS.gemini.models, isCloud: true, cloudKey: 'gemini' },
};

export default function CopilotPanel({ nodes, edges, setNodes, setEdges, globalVariables }) {
  const [chatInput, setChatInput] = useState('');
  const [provider, setProvider] = useState('ollama');
  const [model, setModel] = useState(OLLAMA_MODELS[0]);
  const [apiKeys, setApiKeys] = useState({
    claude: getStoredKey('claude'),
    openai: getStoredKey('openai'),
    gemini: getStoredKey('gemini'),
  });
  const [showKeyEditor, setShowKeyEditor] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', content: '> Copilot ready.\n> Pick a provider and type a request to build or modify nodes.' }
  ]);
  const [isGenerating, setIsGenerating] = useState(false);
  const bottomRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleAction = (action, args) => {
    if (action === 'propose_node') {
      const library = flattenLibrary();
      const template = library.find(t => t.label === args.label || t.type === args.label);
      if (!template) {
        alert(`Copilot tried to spawn a node "${args.label}" but it's not in the library!`);
        return;
      }
      const newNode = template.factory({ x: args.x || 100, y: args.y || 100 });
      if (args.id) newNode.id = args.id; // Allow LLM to specify ID for wiring
      setNodes(nds => [...nds, newNode]);
    } else if (action === 'connect_nodes') {
      setEdges(eds => [...eds, {
        id: `e_${args.sourceId}_${args.targetId}_${Date.now()}`,
        source: args.sourceId,
        sourceHandle: args.sourceHandle,
        target: args.targetId,
        targetHandle: args.targetHandle,
      }]);
    } else if (action === 'set_property') {
      setNodes(nds => nds.map(n => {
        if (n.id !== args.nodeId) return n;
        return {
          ...n,
          data: {
            ...n.data,
            values: { ...(n.data.values || {}), [args.key]: args.value }
          }
        };
      }));
    }
  };

  const normalizeToActions = (obj) => {
    // Accept many natural DAG shapes the LLM might emit.
    // Shape A: { actions: [...] }
    if (Array.isArray(obj.actions)) return obj.actions;
    if (Array.isArray(obj.tool_calls)) return obj.tool_calls;
    if (Array.isArray(obj)) return obj;
    if (obj.action && obj.args) return [obj];

    // Shape B: { nodes: [{id, type|label, x?, y?}], edges: [{from, to, fromHandle?, toHandle?}] }
    const actions = [];
    const nodeList = Array.isArray(obj.nodes) ? obj.nodes : null;
    const edgeList = Array.isArray(obj.edges) ? obj.edges : (Array.isArray(obj.connections) ? obj.connections : null);
    if (nodeList) {
      nodeList.forEach((n, i) => {
        actions.push({
          action: 'propose_node',
          args: {
            id: n.id || `n${i+1}`,
            label: n.label || n.type || n.name || '',
            x: typeof n.x === 'number' ? n.x : 100 + i * 260,
            y: typeof n.y === 'number' ? n.y : 100,
          }
        });
        // Also forward any inline property values
        if (n.values && typeof n.values === 'object') {
          for (const [k, v] of Object.entries(n.values)) {
            actions.push({ action: 'set_property', args: { nodeId: n.id, key: k, value: v } });
          }
        }
      });
    }
    if (edgeList) {
      edgeList.forEach(e => {
        actions.push({
          action: 'connect_nodes',
          args: {
            sourceId: e.from || e.source || e.sourceId,
            sourceHandle: e.fromHandle || e.sourceHandle || 'exec_out',
            targetId: e.to || e.target || e.targetId,
            targetHandle: e.toHandle || e.targetHandle || 'exec_in',
          }
        });
      });
    }
    return actions;
  };

  const parseStructuredResponse = (text) => {
    try {
      const obj = JSON.parse(text);
      console.log('[Copilot] parsed model JSON:', obj);
      const reply =
        (typeof obj.reply === 'string' && obj.reply) ||
        (typeof obj.message === 'string' && obj.message) ||
        (typeof obj.response === 'string' && obj.response) ||
        (typeof obj.text === 'string' && obj.text) ||
        (typeof obj.explanation === 'string' && obj.explanation) ||
        '';
      const actions = normalizeToActions(obj);
      const fallbackReply = actions.length
        ? `Proposed ${actions.length} action(s).`
        : `(model returned no recognized actions)`;
      return { reply: reply || fallbackReply, actions };
    } catch (e) {
      console.error("Failed to parse structured JSON response:", e, text);
      return { reply: `(parse error — raw output):\n${text}`, actions: [] };
    }
  };

  const getSystemPrompt = () => {
    const catalog = getNodeCatalogSummary();

    return `You are EBN Copilot. You generate strict DAG JSON for a visual node canvas.

CRITICAL INSTRUCTION: You may ONLY use the exact node labels listed below. Do NOT invent node types, labels, or ports that are not in this list.

=================================================================
NODE CATALOG (verbatim labels + valid handle ids):
${catalog}
=================================================================

Required JSON shape:
{
  "reply": "<one short sentence>",
  "nodes": [ { "id": "<unique>", "label": "<verbatim from the list above>", "x": <number>, "y": <number>, "values": { <optional prop overrides> } } ],
  "edges": [ { "from": "<node id>", "fromHandle": "exec_out", "to": "<node id>", "toHandle": "exec_in" } ]
}

Rules:
- Every "label" MUST be a verbatim copy of one entry from the list above. Case-sensitive. No paraphrasing, no inventing.
- Exec-flow handles are "exec_out" / "exec_in". For data wires, use the property key name as the handle.
- Action nodes (any node that exposes BOTH "exec_in" and "exec_out") MUST be chained: connect "exec_out" of one action to "exec_in" of the next, in the order they should run. The chain MUST start at a node that has "exec_out" but no "exec_in" — typically "Start" (for general scripts) or "Get Active Comp" (when you need the active composition). Without this, the actions become orphans and are not executed.
- Any AE getter whose input is "Application" must be wired from a "Get Application" node — there is no implicit global "app".
- Lay nodes left-to-right: first at x=100, then +260 per node, y around 100.
- If the request cannot be fulfilled with the labels above, return {"reply": "<explanation>", "nodes": [], "edges": []}.
- The JSON must be complete and parseable. Close every brace and bracket.
- Keep total response under ~40 lines. Be terse.
- NEVER include comments, "#" annotations, or explanations inside string values.
- "reply" must be ONE short sentence. Not a tutorial.

Example — request: "Spawn a node to get the active comp, and connect it to a new File node":
{"reply":"Adding both nodes and wiring exec flow.","nodes":[{"id":"n1","label":"Get Active Comp","x":100,"y":100},{"id":"n2","label":"New File","x":360,"y":100}],"edges":[{"from":"n1","fromHandle":"exec_out","to":"n2","toHandle":"exec_in"}]}

Current Canvas State:
Nodes: ${JSON.stringify(nodes.map(n => ({ id: n.id, label: n.data?.label })))}
Edges: ${JSON.stringify(edges.map(e => ({ source: e.source, target: e.target })))}
`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim() || isGenerating) return;

    const userText = chatInput.trim();
    setChatInput('');
    
    const newMessages = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setIsGenerating(true);

    try {
      const systemPrompt = getSystemPrompt();
      const recentHistory = newMessages.filter(m => m.role !== 'system').slice(-6);
      const providerCfg = PROVIDERS[provider];

      let assistantContent = '';
      setMessages(msgs => [...msgs, { role: 'assistant', content: '' }]);

      if (providerCfg.isCloud) {
        assistantContent = await callCloud({
          provider: providerCfg.cloudKey,
          model,
          systemPrompt,
          history: recentHistory,
          apiKey: apiKeys[providerCfg.cloudKey],
        });
        setMessages(msgs => {
          const clone = [...msgs];
          clone[clone.length - 1].content = assistantContent;
          return clone;
        });
      } else {
        const res = await fetch('http://localhost:11434/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model,
            messages: [{ role: 'system', content: systemPrompt }, ...recentHistory],
            stream: true,
            format: 'json',
            options: { temperature: 0.1, top_p: 0.9, num_predict: 800, repeat_penalty: 1.15 },
          }),
        });
        if (!res.ok) throw new Error(`Ollama API error: ${res.statusText}`);

        const reader = res.body.getReader();
        const decoder = new TextDecoder('utf-8');

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunkStr = decoder.decode(value, { stream: true });
          const lines = chunkStr.split('\n').filter(l => l.trim() !== '');
          for (const line of lines) {
            const parsed = JSON.parse(line);
            if (parsed.message?.content) {
              assistantContent += parsed.message.content;
              setMessages(msgs => {
                const clone = [...msgs];
                clone[clone.length - 1].content = assistantContent;
                return clone;
              });
            }
          }
        }
      }

      const { reply, actions } = parseStructuredResponse(assistantContent);

      // Validate proposed labels against the library and report unknowns
      const library = flattenLibrary();
      const knownLabels = new Set(library.map(t => t.label));
      const lcMap = new Map(library.map(t => [t.label.toLowerCase(), t.label]));
      const unknown = [];
      const validActions = [];
      for (const a of actions) {
        if (a.action === 'propose_node') {
          const lbl = a.args?.label || '';
          if (knownLabels.has(lbl)) {
            validActions.push(a);
          } else {
            // Try case-insensitive match before reporting as unknown
            const ci = lcMap.get(lbl.toLowerCase());
            if (ci) {
              validActions.push({ ...a, args: { ...a.args, label: ci } });
            } else {
              const suggestion = suggestLabel(lbl, library.map(t => t.label));
              unknown.push({ requested: lbl, suggestion });
            }
          }
        } else {
          validActions.push(a);
        }
      }

      let finalReply = reply || '(no reply)';
      if (unknown.length) {
        const lines = unknown.map(u =>
          `  • "${u.requested}"${u.suggestion ? ` — did you mean "${u.suggestion}"?` : ' — no close match'}`
        ).join('\n');
        finalReply += `\n\n⚠ ${unknown.length} unknown node label(s) rejected:\n${lines}`;
      }

      setMessages(msgs => {
        const clone = [...msgs];
        clone[clone.length - 1].content = finalReply;
        return clone;
      });
      if (validActions.length > 0) {
        setMessages(msgs => [
          ...msgs,
          { role: 'system', content: '', pendingActions: validActions }
        ]);
      }

    } catch (err) {
      setMessages(msgs => [...msgs, { role: 'system', content: `> Error: ${err.message}` }]);
    } finally {
      setIsGenerating(false);
    }
  };

  const applyActions = (actions, msgIndex) => {
    actions.forEach(a => handleAction(a.action, a.args));
    // Remove the pending actions from the message so the button goes away
    setMessages(msgs => msgs.map((m, i) => i === msgIndex ? { ...m, pendingActions: null, content: '> Actions applied.' } : m));
  };

  return (
    <div className="ebn-copilot">
      <div className="ebn-copilot__history">
        {messages.map((m, i) => (
          <div key={i} className={`ebn-copilot__msg ebn-copilot__msg--${m.role}`}>
            {m.role === 'user' && <strong>You: </strong>}
            {m.role === 'assistant' && <strong>Copilot: </strong>}
            <div className="ebn-copilot__content">
              {m.content}
            </div>
            {m.pendingActions && (
              <button 
                className="ebn-btn-primary"
                onClick={() => applyActions(m.pendingActions, i)}
              >
                Apply {m.pendingActions.length} Action(s)
              </button>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      {showKeyEditor && PROVIDERS[provider].isCloud && (
        <div className="ebn-copilot__keyrow">
          <input
            type="password"
            placeholder={CLOUD_PROVIDERS[PROVIDERS[provider].cloudKey].keyHelp}
            value={apiKeys[PROVIDERS[provider].cloudKey] || ''}
            onChange={(e) => {
              const k = PROVIDERS[provider].cloudKey;
              const v = e.target.value;
              setApiKeys(prev => ({ ...prev, [k]: v }));
              setStoredKey(k, v);
            }}
          />
          <button type="button" onClick={() => setShowKeyEditor(false)}>Done</button>
        </div>
      )}
      <form className="ebn-copilot__input" onSubmit={onSubmit}>
        <select
          value={provider}
          onChange={(e) => {
            const p = e.target.value;
            setProvider(p);
            setModel(PROVIDERS[p].models[0]);
          }}
          disabled={isGenerating}
          title="LLM provider"
        >
          {Object.entries(PROVIDERS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
        </select>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          disabled={isGenerating}
          title="Model"
        >
          {PROVIDERS[provider].models.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        {PROVIDERS[provider].isCloud && (
          <button
            type="button"
            onClick={() => setShowKeyEditor(s => !s)}
            title="Set API key"
          >🔑</button>
        )}
        <input
          type="text"
          placeholder={isGenerating ? "Thinking..." : "Ask the copilot..."}
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          disabled={isGenerating}
        />
        <button type="submit" disabled={isGenerating}>Send</button>
      </form>
    </div>
  );
}
