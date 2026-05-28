import { useState, useRef, useEffect } from 'react';
import { flattenLibrary, getNodeCatalogSummary } from '../nodeLibrary';
import { getScriptUIPromptSection } from '../graph/scriptUITree';
import { layoutGraphTopo } from '../graph/blueprintLayout';
import { filterConnectActions, autoChainActions } from '../graph/graphActions';
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

// Reverse translation ("Blueprint"): given pasted ExtendScript, ask the model
// to reconstruct the node graph. Reuses the same catalog + JSON contract as the
// forward prompt so the existing validate/apply pipeline handles the result.
function getBlueprintSystemPrompt() {
  const catalog = getNodeCatalogSummary();
  return `You are EBN Blueprint. You convert an existing After Effects ExtendScript (.jsx) program INTO the visual node graph that would generate it. This is reverse-engineering: read the code, map each operation to the closest node, and wire them up.

CRITICAL INSTRUCTION: You may ONLY use the exact node labels listed below. Do NOT invent node types, labels, or ports.

=================================================================
NODE CATALOG (verbatim labels + valid handle ids):
${catalog}
=================================================================

Required JSON shape:
{
  "reply": "<one short sentence describing the translation>",
  "nodes": [ { "id": "<unique>", "label": "<verbatim from the list above>", "values": { <inline prop overrides matching the code> } } ],
  "edges": [ { "from": "<node id>", "fromHandle": "exec_out", "to": "<node id>", "toHandle": "exec_in" } ]
}

Translation rules:
- Map each statement/operation in the source to the closest node label. Preserve EXECUTION ORDER: chain action nodes via "exec_out" -> "exec_in" in the order the statements run. The chain starts at "Start" (or "Get Active Comp" when the code reads app.project.activeItem).
- Capture literal arguments as inline "values" keyed by the matching input handle id (e.g. a comp width/height/duration, a setValue amount, a property match-name). Do NOT create Integer/String nodes for plain literals.
- Reconstruct DATA FLOW: when one operation's result feeds another (a selected layer passed to a property setter, a comp passed to a layer collection), wire the producing node's data output to the consuming node's data input. Data getters have no exec handles.
- For a property setter, put the match-name / slash path in the consuming node's "property" value; setValue amount in "value".
- If a statement has NO matching node, skip it and mention it in "reply" (do not invent a label). Prefer "Custom UI Code" only for ScriptUI blocks.
- x/y are optional and ignored — the app lays the graph out automatically.
- Output ONLY the JSON object. It must be complete and parseable. No comments inside string values.

${getScriptUIPromptSection()}`;
}

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
  const [blueprintMode, setBlueprintMode] = useState(false);
  const [replaceCanvas, setReplaceCanvas] = useState(true);
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
      setEdges(eds => {
        // One wire per input handle — evict any existing edge landing on
        // the same (target, targetHandle), matching the manual-drop policy
        // enforced in FlowCanvas.onConnect.
        const cleaned = eds.filter(
          e => !(e.target === args.targetId && e.targetHandle === args.targetHandle)
        );
        return [...cleaned, {
          id: `e_${args.sourceId}_${args.targetId}_${Date.now()}`,
          source: args.sourceId,
          sourceHandle: args.sourceHandle,
          target: args.targetId,
          targetHandle: args.targetHandle,
        }];
      });
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
- Data-side getters (e.g. "Get Application", "Application Get project", "Project Get items", "CompItem Get layers") have NO "exec_in"/"exec_out". DO NOT chain them via "exec_out" → "exec_in". They participate purely through data wires: connect their data output to the matching data input of the node that needs the value. Wiring them with exec handles will be rejected as invalid.
- Any AE getter whose input is "Application" must be wired from a "Get Application" node — there is no implicit global "app".
- SHORTCUT: to feed an "addComp" (or anything needing the project's ItemCollection), use the single "Get Project Items" node and wire its "items" output straight into the "ItemCollection" input. Do NOT build the long "Get Application" → "Application Get project" → "Project Get items" chain unless you specifically need the intermediate project or app object.
- NEVER emit duplicate edges. Each (source, sourceHandle, target, targetHandle) tuple must appear at most once.
- For an action node's data inputs (e.g. addComp's "name", "width"), wire each input EXACTLY ONCE. Do not connect the same value to multiple inputs unless explicitly asked to.
- PREFER INLINE LITERALS over primitive nodes. When an input is a fixed number or string, put it directly in that node's "values" map keyed by the input handle id — do NOT create separate "Integer"/"String" nodes and wire them. Example: an addComp node should carry "values": { "name": "YouTube Video", "width": 1920, "height": 1080, "pixelAspect": 1, "duration": 30, "frameRate": 30 } and have NO wires into name/width/height/etc. Only use "Integer"/"String" nodes when the value must be reused by several nodes or computed by math.
- Reuse derived values via wires, not duplication: e.g. a solid that "matches" the comp should take the same literal width/height/duration in its own "values" map (or be wired from the comp's outputs if such outputs exist).
- COLORS: a "color"-type input (e.g. addSolid's "color") wants an RGB array in the 0-1 range. Inline it directly as a string literal like "color": "[1, 0, 0]" (red) or "[0, 0, 0]" (black). A "Color Picker" node's "color" value, by contrast, must be a HEX string like "#ff0000" — NEVER put "1,0,0" or "[1,0,0]" into a Color Picker. Prefer inlining the array on the consuming node over adding a Color Picker.
- Lay nodes left-to-right with generous spacing: x starts at 100 and increases by AT LEAST 320 per column; y rows are spaced by AT LEAST 220. Never reuse the exact same (x, y). Wrap to a new row after ~6 nodes. The app will re-grid for safety, but produce well-spaced coordinates anyway.
- If the request cannot be fulfilled with the labels above, return {"reply": "<explanation>", "nodes": [], "edges": []}.
- The JSON must be complete and parseable. Close every brace and bracket.
- Keep total response under ~40 lines. Be terse.
- NEVER include comments, "#" annotations, or explanations inside string values.
- "reply" must be ONE short sentence. Not a tutorial.

Example — request: "Make a 30s 1080p comp and add a solid that matches it":
{"reply":"Creating comp and matching solid.","nodes":[{"id":"n1","label":"Start","x":100,"y":100},{"id":"n2","label":"ItemCollection addComp","x":420,"y":100,"values":{"name":"YouTube Video","width":1920,"height":1080,"pixelAspect":1,"duration":30,"frameRate":30}},{"id":"n3","label":"CompItem Get layers","x":740,"y":100},{"id":"n4","label":"LayerCollection addSolid","x":1060,"y":100,"values":{"color":"[1,0,0]","name":"BG","width":1920,"height":1080,"pixelAspect":1,"duration":30}}],"edges":[{"from":"n1","fromHandle":"exec_out","to":"n2","toHandle":"exec_in"},{"from":"n2","fromHandle":"exec_out","to":"n4","toHandle":"exec_in"},{"from":"n2","fromHandle":"result","to":"n3","toHandle":"target"},{"from":"n3","fromHandle":"value","to":"n4","toHandle":"target"}]}
Note: literal sizes live in each node's "values" map (NO Integer/String nodes created); the comp's "result" goes through "CompItem Get layers" to reach addSolid's LayerCollection "target".

=================================================================
${getScriptUIPromptSection()}
=================================================================

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
      // Blueprint mode reverse-translates a single pasted program: a focused
      // system prompt + only the pasted code (no chat history). Chat mode keeps
      // the rolling history so follow-up edits have context.
      const systemPrompt = blueprintMode ? getBlueprintSystemPrompt() : getSystemPrompt();
      const recentHistory = blueprintMode
        ? [{ role: 'user', content: `Translate this ExtendScript into the node graph:\n\n${userText}` }]
        : newMessages.filter(m => m.role !== 'system').slice(-6);
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
      // Cache handle sets per label so we can validate edges without
      // spawning the actual node.
      const handleCache = new Map();
      const handlesForLabel = (label) => {
        if (handleCache.has(label)) return handleCache.get(label);
        const tmpl = library.find(t => t.label === label);
        let inputs = new Set(), outputs = new Set();
        try {
          const sample = tmpl?.factory({ x: 0, y: 0 });
          (sample?.data?.inputs || []).forEach(p => inputs.add(p.id));
          (sample?.data?.outputs || []).forEach(p => outputs.add(p.id));
        } catch {}
        const out = { inputs, outputs };
        handleCache.set(label, out);
        return out;
      };

      const unknown = [];
      const validActions = [];
      // Track the id -> label of nodes the LLM is proposing in *this* batch
      // so we can validate the edges that reference them.
      const proposedNodeLabel = new Map();
      // Also map existing canvas nodes for edges that target current state.
      const existingNodeLabel = new Map();
      nodes.forEach(n => existingNodeLabel.set(n.id, n.data?.label || ''));

      for (const a of actions) {
        if (a.action === 'propose_node') {
          const lbl = a.args?.label || '';
          let resolved = lbl;
          if (!knownLabels.has(lbl)) {
            const ci = lcMap.get(lbl.toLowerCase());
            if (ci) {
              resolved = ci;
            } else {
              const suggestion = suggestLabel(lbl, library.map(t => t.label));
              unknown.push({ requested: lbl, suggestion });
              continue;
            }
          }
          proposedNodeLabel.set(a.args.id, resolved);
          validActions.push({ ...a, args: { ...a.args, label: resolved } });
        } else if (a.action !== 'connect_nodes') {
          validActions.push(a);
        }
      }

      // Blueprint recovery: if the model proposed action nodes but left them
      // unwired, deterministically chain them in proposed order (and anchor a
      // Start if there's no root) so the result actually runs instead of
      // compiling to all-orphans. Gap-filling only — never clobbers model edges.
      let extraEdges = [];
      let autoChainedCount = 0;
      let startInjected = false;
      if (blueprintMode) {
        const ordered = [...proposedNodeLabel.entries()].map(([id, label]) => ({ id, label }));
        const { startNode, chainEdges } = autoChainActions(ordered, actions, handlesForLabel);
        if (startNode) {
          validActions.push(startNode);
          proposedNodeLabel.set(startNode.args.id, 'Start');
          startInjected = true;
        }
        extraEdges = chainEdges;
        autoChainedCount = chainEdges.length;
      }

      // Edge validation pass (see graphActions.filterConnectActions): drops
      // duplicates, edges to missing nodes, nonexistent handles, exec/data
      // type mismatches (the "fan"), and competing wires into one input.
      const labelOf = (id) => proposedNodeLabel.get(id) || existingNodeLabel.get(id) || null;
      const { valid: validEdges, dropped } = filterConnectActions([...actions, ...extraEdges], labelOf, handlesForLabel);
      validActions.push(...validEdges);
      const droppedDuplicate = dropped.duplicate;
      const droppedBadHandle = dropped.badHandle;
      const droppedMissingNode = dropped.missingNode;
      const droppedTypeMismatch = dropped.typeMismatch;
      const droppedInputTaken = dropped.inputTaken;

      let finalReply = reply || '(no reply)';
      if (unknown.length) {
        const lines = unknown.map(u =>
          `  • "${u.requested}"${u.suggestion ? ` — did you mean "${u.suggestion}"?` : ' — no close match'}`
        ).join('\n');
        finalReply += `\n\n⚠ ${unknown.length} unknown node label(s) rejected:\n${lines}`;
      }
      const edgeDrops = droppedDuplicate + droppedBadHandle + droppedMissingNode
        + droppedTypeMismatch + droppedInputTaken;
      if (edgeDrops) {
        finalReply += `\n\n⚠ ${edgeDrops} edge(s) rejected (${droppedDuplicate} duplicate, ${droppedBadHandle} bad handle, ${droppedMissingNode} missing node, ${droppedTypeMismatch} exec/data mismatch, ${droppedInputTaken} input already wired).`;
      }
      if (autoChainedCount || startInjected) {
        const bits = [];
        if (startInjected) bits.push('added a Start anchor');
        if (autoChainedCount) bits.push(`chained ${autoChainedCount} unwired action node(s)`);
        finalReply += `\n\n🔗 Auto-recovered exec flow: ${bits.join(' and ')}.`;
      }

      setMessages(msgs => {
        const clone = [...msgs];
        clone[clone.length - 1].content = finalReply;
        return clone;
      });
      if (validActions.length > 0) {
        setMessages(msgs => [
          ...msgs,
          {
            role: 'system',
            content: '',
            pendingActions: validActions,
            blueprint: blueprintMode,
            replace: blueprintMode && replaceCanvas,
          },
        ]);
      }

    } catch (err) {
      setMessages(msgs => [...msgs, { role: 'system', content: `> Error: ${err.message}` }]);
    } finally {
      setIsGenerating(false);
    }
  };

  // Re-flow proposed nodes onto a non-overlapping grid before they hit the
  // canvas. The LLM's x/y suggestions are unreliable (overlaps, identical
  // coordinates) so we honor only the relative ORDER and reposition.
  const relayoutProposedNodes = (actions) => {
    const COL_W = 320;   // horizontal spacing per "column"
    const ROW_H = 220;   // vertical spacing per row
    const PER_ROW = 6;   // wrap after this many nodes
    // Anchor relative to the existing canvas so we don't land on top of
    // nodes that are already there.
    const existingMaxX = nodes.reduce((m, n) => Math.max(m, n.position?.x || 0), 0);
    const originX = nodes.length ? existingMaxX + COL_W : 80;
    const originY = 80;
    let i = 0;
    return actions.map(a => {
      if (a.action !== 'propose_node') return a;
      const col = i % PER_ROW;
      const row = Math.floor(i / PER_ROW);
      i++;
      return { ...a, args: { ...a.args, x: originX + col * COL_W, y: originY + row * ROW_H } };
    });
  };

  const applyActions = (actions, msgIndex, opts = {}) => {
    // Blueprint results get a readable topological layout (and may replace the
    // canvas); chat results keep the relative-order grid re-flow.
    const laidOut = opts.blueprint
      ? layoutGraphTopo(actions)
      : relayoutProposedNodes(actions);
    if (opts.replace) {
      setNodes(() => []);
      setEdges(() => []);
    }
    laidOut.forEach(a => handleAction(a.action, a.args));
    // Remove the pending actions from the message so the button goes away
    setMessages(msgs => msgs.map((m, i) => i === msgIndex ? { ...m, pendingActions: null, content: '> Actions applied.' } : m));
  };

  const onTextareaKeyDown = (e) => {
    // Enter submits; Shift+Enter inserts a newline.
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  // Auto-grow the textarea up to a max height, then scroll.
  const autoSize = (el) => {
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 400)}px`;
  };

  return (
    <div className="ebn-copilot">
      <div className="ebn-copilot__toolbar">
        <select
          className="ebn-copilot__select"
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
          className="ebn-copilot__select"
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
            className="ebn-copilot__keybtn"
            onClick={() => setShowKeyEditor(s => !s)}
            title="Set API key"
          >🔑</button>
        )}
        <button
          type="button"
          className={`ebn-copilot__keybtn${blueprintMode ? ' ebn-copilot__keybtn--active' : ''}`}
          onClick={() => setBlueprintMode(b => !b)}
          disabled={isGenerating}
          title="Blueprint mode: paste ExtendScript to translate it into nodes"
        >📐 Blueprint</button>
        {blueprintMode && (
          <label className="ebn-copilot__check" title="Replace the current canvas with the translation">
            <input
              type="checkbox"
              checked={replaceCanvas}
              onChange={(e) => setReplaceCanvas(e.target.checked)}
              disabled={isGenerating}
            />
            Replace canvas
          </label>
        )}
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
                onClick={() => applyActions(m.pendingActions, i, { blueprint: m.blueprint, replace: m.replace })}
              >
                {m.blueprint
                  ? `${m.replace ? 'Replace canvas with' : 'Add'} ${m.pendingActions.length} node action(s)`
                  : `Apply ${m.pendingActions.length} Action(s)`}
              </button>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form className="ebn-copilot__input" onSubmit={onSubmit}>
        <textarea
          rows={1}
          placeholder={
            isGenerating
              ? "Thinking..."
              : blueprintMode
                ? "Paste ExtendScript (.jsx) to translate into nodes…  (Shift+Enter for newline)"
                : "Ask the copilot…  (Enter to send, Shift+Enter for newline)"
          }
          value={chatInput}
          onChange={(e) => { setChatInput(e.target.value); autoSize(e.target); }}
          onKeyDown={onTextareaKeyDown}
          disabled={isGenerating}
        />
        <button type="submit" disabled={isGenerating}>Send</button>
      </form>
    </div>
  );
}
