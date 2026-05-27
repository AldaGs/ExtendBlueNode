// Provider-agnostic LLM service.
// Supports Gemini (default, free tier), Claude (Anthropic), and Ollama (local).
//
// sendMessage returns { text, patch, error }
//   text:  string | null — assistant reply text
//   patch: { nodes, edges, explanation } | null — graph to apply
//   error: string | null

import { buildSystemPrompt, PROPOSE_GRAPH_TOOL } from './graphTools.js';

export const PROVIDERS = {
  GEMINI: 'gemini',
  CLAUDE: 'claude',
  OLLAMA: 'ollama',
};

const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const CLAUDE_URL = 'https://api.anthropic.com/v1/messages';
const OLLAMA_CHAT_URL = 'http://localhost:11434/api/chat';

// history: [{ role: 'user'|'assistant', content: string }]
export async function sendMessage({ provider, apiKey, ollamaModel, history, userMessage }) {
  const systemPrompt = buildSystemPrompt();
  switch (provider) {
    case PROVIDERS.GEMINI:
      return callGemini({ apiKey, history, userMessage, systemPrompt });
    case PROVIDERS.CLAUDE:
      return callClaude({ apiKey, history, userMessage, systemPrompt });
    case PROVIDERS.OLLAMA:
      return callOllama({ ollamaModel, history, userMessage, systemPrompt });
    default:
      return { text: null, patch: null, error: `Unknown provider: ${provider}` };
  }
}

// ─── Gemini ────────────────────────────────────────────────────────────────────

async function callGemini({ apiKey, history, userMessage, systemPrompt }) {
  const contents = [
    ...history.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    })),
    { role: 'user', parts: [{ text: userMessage }] },
  ];

  const body = {
    systemInstruction: { parts: [{ text: systemPrompt }] },
    contents,
    tools: [{ functionDeclarations: [PROPOSE_GRAPH_TOOL] }],
    toolConfig: { functionCallingConfig: { mode: 'AUTO' } },
    generationConfig: { temperature: 0.2 },
  };

  let res;
  try {
    res = await fetch(`${GEMINI_URL}?key=${encodeURIComponent(apiKey)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (e) {
    return { text: null, patch: null, error: `Network error: ${e.message}` };
  }

  if (!res.ok) {
    const errText = await res.text().catch(() => res.statusText);
    let msg = errText;
    try {
      const parsed = JSON.parse(errText);
      msg = parsed?.error?.message ?? errText;
    } catch { /* ignore */ }
    return { text: null, patch: null, error: `Gemini ${res.status}: ${msg}` };
  }

  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts ?? [];

  let text = null;
  let patch = null;
  for (const part of parts) {
    if (part.text) text = (text ?? '') + part.text;
    if (part.functionCall?.name === 'propose_graph') patch = part.functionCall.args;
  }

  return { text, patch, error: null };
}

// ─── Claude ────────────────────────────────────────────────────────────────────

async function callClaude({ apiKey, history, userMessage, systemPrompt }) {
  const messages = [
    ...history.map((m) => ({ role: m.role, content: m.content })),
    { role: 'user', content: userMessage },
  ];

  const claudeTool = {
    name: PROPOSE_GRAPH_TOOL.name,
    description: PROPOSE_GRAPH_TOOL.description,
    input_schema: PROPOSE_GRAPH_TOOL.parameters,
  };

  const body = {
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 4096,
    system: systemPrompt,
    messages,
    tools: [claudeTool],
  };

  let res;
  try {
    res = await fetch(CLAUDE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });
  } catch (e) {
    return { text: null, patch: null, error: `Network error: ${e.message}` };
  }

  if (!res.ok) {
    const errText = await res.text().catch(() => res.statusText);
    let msg = errText;
    try {
      const parsed = JSON.parse(errText);
      msg = parsed?.error?.message ?? errText;
    } catch { /* ignore */ }
    return { text: null, patch: null, error: `Claude ${res.status}: ${msg}` };
  }

  const data = await res.json();
  let text = null;
  let patch = null;
  for (const block of data.content ?? []) {
    if (block.type === 'text') text = (text ?? '') + block.text;
    if (block.type === 'tool_use' && block.name === 'propose_graph') patch = block.input;
  }

  return { text, patch, error: null };
}

// ─── Ollama ────────────────────────────────────────────────────────────────────

async function callOllama({ ollamaModel, history, userMessage, systemPrompt }) {
  const model = ollamaModel || 'llama3.2';

  const jsonInstruction =
    '\n\nWhen creating nodes output ONLY a JSON object with shape: ' +
    '{"explanation":"...","nodes":[...],"edges":[...]} — no surrounding text.';

  const messages = [
    { role: 'system', content: systemPrompt + jsonInstruction },
    ...history.map((m) => ({ role: m.role, content: m.content })),
    { role: 'user', content: userMessage },
  ];

  let res;
  try {
    res = await fetch(OLLAMA_CHAT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, messages, stream: false }),
    });
  } catch {
    return {
      text: null,
      patch: null,
      error: 'Ollama not reachable at localhost:11434. Make sure it is running.',
    };
  }

  if (!res.ok) {
    return { text: null, patch: null, error: `Ollama ${res.status}: ${res.statusText}` };
  }

  const data = await res.json();
  const content = data.message?.content ?? '';

  // Try to extract a JSON graph patch from the response
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      const parsed = JSON.parse(jsonMatch[0]);
      if (Array.isArray(parsed.nodes)) {
        return { text: parsed.explanation ?? null, patch: parsed, error: null };
      }
    } catch { /* not valid JSON */ }
  }

  return { text: content, patch: null, error: null };
}
