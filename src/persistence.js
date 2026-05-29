// Project (.ebn) serialization + localStorage autosave.
//
// Schema version bumps when the shape changes. Older payloads are
// migrated through `migrate()` on load so existing files keep working.

export const CURRENT_SCHEMA = 1;
const STORAGE_KEY = 'ebn:autoSave';

export function makeProject({ nodes, edges, globalVariables, layout }) {
  return {
    schemaVersion: CURRENT_SCHEMA,
    savedAt: new Date().toISOString(),
    layout,
    globals: globalVariables,
    graph: { nodes, edges },
  };
}

// Strip React Flow's runtime-only fields so the file diffs nicely and
// doesn't bloat localStorage with computed widths/heights/positions
// that get re-derived on mount.
function cleanNode(n) {
  const { width, height, dragging, positionAbsolute, selected, ...rest } = n;
  return rest;
}

function cleanEdge(e) {
  const { selected, ...rest } = e;
  return rest;
}

export function serializeProject(state) {
  const project = makeProject(state);
  project.graph.nodes = project.graph.nodes.map(cleanNode);
  project.graph.edges = project.graph.edges.map(cleanEdge);
  return project;
}

export function projectToJson(state) {
  return JSON.stringify(serializeProject(state), null, 2);
}

function migrate(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const v = raw.schemaVersion ?? 0;
  if (v > CURRENT_SCHEMA) {
    console.warn('[ebn] file is from a newer schema; loading best-effort.');
  }
  // Add migrations here when CURRENT_SCHEMA bumps.
  return raw;
}

export function parseProject(jsonOrObj) {
  const raw = typeof jsonOrObj === 'string' ? JSON.parse(jsonOrObj) : jsonOrObj;
  const project = migrate(raw);
  if (!project) throw new Error('Not an EBN project payload.');
  const { layout, globals, graph } = project;
  if (!layout || !graph) throw new Error('Project is missing layout or graph.');
  return {
    layout,
    globalVariables: globals || [],
    nodes: graph.nodes || [],
    edges: graph.edges || [],
  };
}

/* ----------------------------- localStorage ----------------------------- */

export function saveToStorage(state) {
  try {
    localStorage.setItem(STORAGE_KEY, projectToJson(state));
    return true;
  } catch (e) {
    console.warn('[ebn] autosave failed:', e);
    return false;
  }
}

export function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return parseProject(raw);
  } catch (e) {
    console.warn('[ebn] autosave restore failed:', e);
    return null;
  }
}

export function clearStorage() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {/* ignore */}
}

/* ----------------------------- copilot session ----------------------------- */
// Persisted separately from the project so the chosen provider/model and the
// conversation survive a full restart AND a layout split (which remounts the
// Copilot panel). Messages are capped so localStorage doesn't balloon.

const COPILOT_KEY = 'ebn:copilot';
const MAX_PERSISTED_MESSAGES = 50;

export function loadCopilotState() {
  try {
    const raw = localStorage.getItem(COPILOT_KEY);
    if (!raw) return null;
    const obj = JSON.parse(raw);
    return obj && typeof obj === 'object' ? obj : null;
  } catch {
    return null;
  }
}

export function saveCopilotState({ provider, model, messages }) {
  try {
    const trimmed = Array.isArray(messages)
      ? messages.slice(-MAX_PERSISTED_MESSAGES)
      : [];
    localStorage.setItem(COPILOT_KEY, JSON.stringify({ provider, model, messages: trimmed }));
  } catch {/* ignore quota / serialization errors */}
}

/* ----------------------------- file IO ----------------------------- */

export function downloadProject(state, filename = 'project.ebn') {
  const blob = new Blob([projectToJson(state)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function pickProjectFile() {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.ebn,.json,application/json';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return resolve(null);
      const reader = new FileReader();
      reader.onload = () => {
        try {
          resolve(parseProject(String(reader.result)));
        } catch (e) {
          reject(e);
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    };
    input.click();
  });
}
