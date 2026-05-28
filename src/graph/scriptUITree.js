// Structured ScriptUI tree — the data model for the "ScriptUI Builder" node.
//
// This REPLACES the old free-text `scriptUI_string` as the source of truth.
// The visual builder pane edits this tree; the serializer (Phase 2) turns it
// back into a valid ExtendScript resource string for the compiler, and the
// pin-sync logic walks it to expose one `ui_<name>` output per named element.
//
// ---------------------------------------------------------------------------
// SCHEMA
// ---------------------------------------------------------------------------
//
// A node's `data.values.scriptUITree` holds a single ROOT element. Every
// element (root or nested) has the same shape:
//
//   {
//     id:       string   // unique within the tree; stable handle for the UI
//                        //   (selection, drag/drop). NOT emitted to script.
//     type:     string   // ScriptUI control/container type. The ROOT must be
//                        //   a top-level container: 'Window' | 'Palette' |
//                        //   'Dialog'. Children are any control/container:
//                        //   'Group' | 'Panel' | 'Button' | 'StaticText' |
//                        //   'EditText' | 'Checkbox' | 'Slider' | ... (broad,
//                        //   not a hard whitelist).
//     name:     string   // identifier exposed as the `ui_<name>` output pin
//                        //   and used as the resource-string element name.
//                        //   Empty string = no pin (typical for the root and
//                        //   for purely structural Groups).
//     props:    object   // ScriptUI properties: { text, orientation,
//                        //   alignChildren, margins, spacing, ... }. Values
//                        //   are stored raw; the serializer formats them.
//     children: Element[] // nested elements; leaf controls use [].
//   }
//
// SINGLE SOURCE OF TRUTH FOR WINDOW TYPE
//   The root `type` (Window / Palette / Dialog) is authoritative and REPLACES
//   the legacy `values.ui_mode` ('window' | 'panel') toggle. Mapping:
//     Window | Dialog  -> floating window  (was ui_mode 'window')
//     Palette          -> dockable panel   (was ui_mode 'panel')
//   Phase 2's emitter derives the panel/window wrapper from the root type, so
//   `ui_mode` is retired — do not store window type in two places.
//
// MIGRATION / FALLBACK RULE
//   A node may carry the legacy `scriptUI_string`, the new `scriptUITree`, or
//   (transitionally) both. Resolution order:
//     1. If `scriptUITree` is present -> it is the source of truth.
//     2. Else if `scriptUI_string` is present -> use the legacy string as-is.
//   So the string "wins" only for un-migrated nodes that have no tree yet; any
//   node touched by the visual builder gets a tree and the string is ignored.
//   (A one-time string->tree import can be added later; for now legacy nodes
//   simply keep working through path 2.)

/**
 * @typedef {Object} ScriptUIElement
 * @property {string} id        Unique-within-tree handle (UI only, not emitted).
 * @property {string} type      ScriptUI type. Root: 'Window'|'Palette'|'Dialog'.
 * @property {string} name      Pin/element name; '' = no output pin.
 * @property {Record<string, unknown>} props  ScriptUI properties.
 * @property {ScriptUIElement[]} children     Nested elements.
 */

/**
 * Root container types allowed at the top of the tree. Palette is first so it
 * is the default: a palette resource passed to `new Window(...)` is non-modal,
 * keeping the After Effects UI usable while the panel is open. Window/Dialog
 * remain for cases that genuinely need a floating or modal-blocking window.
 */
export const ROOT_TYPES = ['Palette', 'Window', 'Dialog'];

/** Map a root container type to the legacy ui_mode the emitter used to read. */
export function rootTypeToMode(rootType) {
  return rootType === 'Palette' ? 'panel' : 'window';
}

let _seq = 0;
/** Generate a tree-local element id. Not globally unique — scoped per node. */
export function newElementId(type = 'el') {
  _seq += 1;
  return `${type.toLowerCase()}_${Date.now().toString(36)}_${_seq}`;
}

/** Map a root container type to its lowercase resource-string keyword. */
function rootKeyword(rootType) {
  return (rootType || 'Window').toLowerCase();
}

/**
 * Walk the tree depth-first and return the ordered, de-duplicated list of
 * element `name`s. The root's name is conventionally '' (skipped); only named
 * elements become `ui_<name>` output pins. Mirrors the old string parser's
 * contract so the rest of the graph is unaffected by the data-model swap.
 * @param {ScriptUIElement|null|undefined} root
 * @returns {string[]}
 */
export function scriptUITreeNames(root) {
  const names = [];
  const seen = new Set();
  // Skip the root element itself; its name is not a child pin.
  const walk = (el) => {
    if (!el || !Array.isArray(el.children)) return;
    for (const child of el.children) {
      const name = typeof child.name === 'string' ? child.name.trim() : '';
      if (name && !seen.has(name)) {
        seen.add(name);
        names.push(name);
      }
      walk(child);
    }
  };
  walk(root);
  return names;
}

/** Format a single ScriptUI property value into resource-string syntax. */
function formatPropValue(value) {
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) return `[${value.map(formatPropValue).join(', ')}]`;
  // Objects (rare — e.g. nested layout hints) fall back to JSON.
  if (value && typeof value === 'object') return JSON.stringify(value);
  return JSON.stringify(value ?? null);
}

/** Format an element's `props` object into a comma-separated property list. */
function formatProps(props) {
  if (!props || typeof props !== 'object') return [];
  return Object.entries(props)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${k}: ${formatPropValue(v)}`);
}

/**
 * REQUIREMENT 1 (Phase 2) — serialize the structured tree into a valid
 * ExtendScript resource string that `new Window(...)` accepts.
 *
 * Output shape:
 *   <rootKeyword> { <props...>, <name>: <Type> { <props...>, <children...> }, ... }
 *
 * Nested elements in a resource string must be named, so an element with an
 * empty `name` gets a synthetic one derived from its id (kept stable and a
 * valid identifier). Synthetic names are NOT exposed as pins — only the
 * author-supplied names from {@link scriptUITreeNames} are.
 *
 * @param {ScriptUIElement|null|undefined} root
 * @returns {string} resource string, or '' for an empty/invalid tree.
 */
export function serializeTreeToResourceString(root) {
  if (!root || typeof root !== 'object') return '';

  let auto = 0;
  const safeName = (el) => {
    const n = typeof el.name === 'string' ? el.name.trim() : '';
    if (n) return n;
    auto += 1;
    // Synthesize a valid, stable-ish identifier from the type.
    return `_${(el.type || 'el').toLowerCase()}${auto}`;
  };

  // Serialize a child element: `name: Type { body }`.
  const child = (el) => {
    const inner = body(el);
    return `${safeName(el)}: ${el.type || 'Group'} {${inner ? ` ${inner} ` : ''}}`;
  };

  // Shared body: props first, then child elements, comma-separated.
  const body = (el) => {
    const parts = formatProps(el.props);
    if (Array.isArray(el.children)) {
      for (const c of el.children) parts.push(child(c));
    }
    return parts.join(', ');
  };

  const inner = body(root);
  return `${rootKeyword(root.type)} {${inner ? ` ${inner} ` : ''}}`;
}

/**
 * Build an empty default tree for a freshly created ScriptUI Builder node:
 * a non-modal Palette with a single Submit button.
 * @returns {ScriptUIElement}
 */
export function createDefaultScriptUITree() {
  return {
    id: newElementId('palette'),
    type: 'Palette',
    name: '',
    props: { text: 'My Panel', orientation: 'column', alignChildren: ['fill', 'top'] },
    children: [
      {
        id: newElementId('button'),
        type: 'Button',
        name: 'btn_submit',
        props: { text: 'Submit' },
        children: [],
      },
    ],
  };
}

/**
 * REQUIREMENT 3 — sample payload: a Window containing one Group, which
 * contains one StaticText and one Button. Exported for tests/docs.
 * @type {ScriptUIElement}
 */
export const SAMPLE_SCRIPTUI_TREE = {
  id: 'win_root',
  type: 'Window',
  name: '',
  props: {
    text: 'Export Settings',
    orientation: 'column',
    alignChildren: ['fill', 'top'],
    margins: 16,
    spacing: 10,
  },
  children: [
    {
      id: 'grp_main',
      type: 'Group',
      name: '',
      props: { orientation: 'column', alignChildren: ['left', 'center'], spacing: 6 },
      children: [
        {
          id: 'st_heading',
          type: 'StaticText',
          name: 'st_heading',
          props: { text: 'Choose an option:' },
          children: [],
        },
        {
          id: 'btn_ok',
          type: 'Button',
          name: 'btn_ok',
          props: { text: 'OK' },
          children: [],
        },
      ],
    },
  ],
};

/**
 * Canonical ScriptUI guidance for the Copilot system prompt. Lives here, next
 * to the schema and serializer, so the LLM's instructions can never drift from
 * the actual data model. Consumed by CopilotPanel's getSystemPrompt().
 */
export function getScriptUIPromptSection() {
  return `SCRIPTUI (building UI panels):
To author a panel, emit a "ScriptUI Builder" node and put a "scriptUITree" object in its "values" map. The tree describes the UI declaratively.

scriptUITree element shape (root and every nested element are the same shape):
  { "type": <ScriptUI type>, "name": <pin name or "">, "props": { ... }, "children": [ ... ] }
- The ROOT "type" should be "Palette" (non-modal — keeps After Effects usable while open). Use "Window" or "Dialog" only when a floating or modal-blocking window is explicitly required.
- "type" of children is any ScriptUI control/container: "Group", "Panel", "Button", "StaticText", "EditText", "Checkbox", "Slider", "DropDownList", etc.
- "name" is the identifier exposed as a dynamic "ui_<name>" OUTPUT PIN on the Builder. Give a name ONLY to elements you need to wire (e.g. buttons that fire events). Use "" for the root and purely structural Groups.
- "props" are ScriptUI properties: { "text": "OK", "orientation": "column", "alignChildren": ["fill","top"], "margins": 16, "spacing": 10 }.

DYNAMIC PINS: each named element produces a "ui_<name>" output pin. Example: a child {"type":"Button","name":"btn_go",...} creates pin "ui_btn_go" on the Builder.

WIRING ORDER (mandatory): Builder → UI Event Listener(s) → Show Window, chained via exec_out→exec_in in that order. Listeners must attach BEFORE Show Window.
- Wire a Builder "ui_<name>" pin into a "UI Event Listener" node's "target" input.
- The listener's "exec_callback" branch is what runs when the event fires; its "exec_out" continues the setup chain to the next listener or to Show Window.
- Wire the Builder's "window_obj" output into "Show Window"'s "window_obj" input.

Example — a palette with one button that runs an action when clicked:
{"reply":"Building a panel with a button.","nodes":[
  {"id":"u1","label":"ScriptUI Builder","x":100,"y":100,"values":{"scriptUITree":{"type":"Palette","name":"","props":{"text":"My Panel","orientation":"column","alignChildren":["fill","top"],"margins":16},"children":[{"type":"Button","name":"btn_go","props":{"text":"Run"},"children":[]}]}}},
  {"id":"u2","label":"UI Event Listener","x":420,"y":100,"values":{"event_type":"onClick"}},
  {"id":"u3","label":"Show Window","x":740,"y":100}
],"edges":[
  {"from":"u1","fromHandle":"exec_out","to":"u2","toHandle":"exec_in"},
  {"from":"u2","fromHandle":"exec_out","to":"u3","toHandle":"exec_in"},
  {"from":"u1","fromHandle":"ui_btn_go","to":"u2","toHandle":"target"},
  {"from":"u1","fromHandle":"window_obj","to":"u3","toHandle":"window_obj"}
]}`;
}
