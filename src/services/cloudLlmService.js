// Cloud-LLM providers for the EBN Copilot.
//
// Each provider accepts the same { systemPrompt, history } shape and returns
// the assistant text. Tool calls are intentionally NOT used here — every
// provider is asked to emit the same strict JSON object that the local Ollama
// path already knows how to parse (`{ reply, nodes, edges }`), so the
// downstream `normalizeToActions` pipeline stays unchanged.
//
// API keys live in localStorage under per-provider keys. They are sent
// directly from the browser to the provider; that's fine for a dev tool but
// would need a proxy if this ever ships to untrusted users.

const KEY_STORAGE = {
  claude: 'ebn.copilot.apiKey.claude',
  openai: 'ebn.copilot.apiKey.openai',
  gemini: 'ebn.copilot.apiKey.gemini',
};

export const CLOUD_PROVIDERS = {
  claude: {
    label: 'Claude (Anthropic)',
    defaultModel: 'claude-sonnet-4-5',
    models: ['claude-opus-4-5', 'claude-sonnet-4-5', 'claude-haiku-4-5'],
    keyStorage: KEY_STORAGE.claude,
    keyHelp: 'Anthropic API key (starts with sk-ant-…)',
  },
  openai: {
    label: 'ChatGPT (OpenAI)',
    defaultModel: 'gpt-4o',
    models: ['gpt-4o', 'gpt-4o-mini', 'gpt-4.1'],
    keyStorage: KEY_STORAGE.openai,
    keyHelp: 'OpenAI API key (starts with sk-…)',
  },
  gemini: {
    label: 'Gemini (Google)',
    defaultModel: 'gemini-2.5-flash',
    models: ['gemini-2.5-flash', 'gemini-2.5-pro', 'gemini-2.0-flash', 'gemini-1.5-pro', 'gemini-1.5-flash'],
    keyStorage: KEY_STORAGE.gemini,
    keyHelp: 'Google AI Studio API key',
  },
};

export function getStoredKey(provider) {
  try { return localStorage.getItem(CLOUD_PROVIDERS[provider]?.keyStorage) || ''; }
  catch { return ''; }
}

export function setStoredKey(provider, key) {
  try { localStorage.setItem(CLOUD_PROVIDERS[provider].keyStorage, key); } catch {}
}

// Convert our internal message list into the provider-specific shape.
// `messages` are { role: 'system' | 'user' | 'assistant', content }.

export async function callCloud({ provider, model, systemPrompt, history, apiKey, signal }) {
  if (!apiKey) throw new Error(`Missing API key for ${provider}. Click the key icon to add one.`);
  if (provider === 'claude') return callClaude({ model, systemPrompt, history, apiKey, signal });
  if (provider === 'openai') return callOpenAI({ model, systemPrompt, history, apiKey, signal });
  if (provider === 'gemini') return callGemini({ model, systemPrompt, history, apiKey, signal });
  throw new Error(`Unknown provider: ${provider}`);
}

async function callClaude({ model, systemPrompt, history, apiKey, signal }) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    signal,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model,
      // Large graph translations (Blueprint mode) can run to dozens of nodes
      // and edges; 2048 truncated them mid-JSON. Give ample room.
      max_tokens: 8192,
      system: systemPrompt,
      messages: history
        .filter(m => m.role === 'user' || m.role === 'assistant')
        .map(m => ({ role: m.role, content: m.content })),
    }),
  });
  if (!res.ok) throw new Error(`Anthropic API ${res.status}: ${await res.text()}`);
  const json = await res.json();
  const text = (json.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  return text;
}

async function callOpenAI({ model, systemPrompt, history, apiKey, signal }) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    signal,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      response_format: { type: 'json_object' },
      max_tokens: 8192,
      temperature: 0.2,
      messages: [
        { role: 'system', content: systemPrompt },
        ...history
          .filter(m => m.role === 'user' || m.role === 'assistant')
          .map(m => ({ role: m.role, content: m.content })),
      ],
    }),
  });
  if (!res.ok) throw new Error(`OpenAI API ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return json.choices?.[0]?.message?.content || '';
}

async function callGemini({ model, systemPrompt, history, apiKey, signal }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const contents = history
    .filter(m => m.role === 'user' || m.role === 'assistant')
    .map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));
  const res = await fetch(url, {
    method: 'POST',
    signal,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemPrompt }] },
      contents,
      generationConfig: { temperature: 0.2, responseMimeType: 'application/json', maxOutputTokens: 8192 },
    }),
  });
  if (!res.ok) throw new Error(`Gemini API ${res.status}: ${await res.text()}`);
  const json = await res.json();
  const parts = json.candidates?.[0]?.content?.parts || [];
  return parts.map(p => p.text || '').join('');
}
