// Single source of truth for ScriptUI resource-string parsing.
//
// A ScriptUI resource string declares named elements like:
//   myBtn: Button { text: "Go" }, grp: Group { st: StaticText { ... } }
// The "ScriptUI Builder" node turns each named element into an output pin
// (`ui_<name>`) so the visual graph can wire up event listeners.
//
// Both the PropertiesPanel (pin sync) and the compiler's data-side resolver
// must agree on which names exist — so the extraction lives here, once.

// Matches `name: Type {` where Type starts uppercase (ScriptUI control or
// container). This is intentionally broad: it catches Slider, Progressbar,
// IconButton, RadioButton, ListBox, TreeView, image, etc. — anything the
// grammar allows — rather than a hard-coded whitelist.
const ELEMENT_RE = /\b([a-zA-Z_$][\w$]*)\s*:\s*([A-Z][\w]*)\s*\{/g;

// Resource-string structural keywords that are NOT user element names.
const RESERVED = new Set(['dialog', 'palette', 'window']);

/**
 * Extract the ordered, de-duplicated list of named element identifiers from a
 * ScriptUI resource string. Returns [] for empty/invalid input.
 */
export function parseScriptUIElements(resourceString) {
  if (!resourceString || typeof resourceString !== 'string') return [];
  const names = [];
  const seen = new Set();
  let m;
  ELEMENT_RE.lastIndex = 0;
  while ((m = ELEMENT_RE.exec(resourceString)) !== null) {
    const name = m[1];
    if (RESERVED.has(name)) continue;
    if (seen.has(name)) continue;
    seen.add(name);
    names.push(name);
  }
  return names;
}

/**
 * Build the full output-pin list for a ScriptUI Builder node from its
 * resource string: the two fixed pins plus one `ui_<name>` per element.
 */
export function scriptUIBuilderOutputs(resourceString) {
  const outs = [
    { id: 'exec_out', label: 'Execution' },
    { id: 'window_obj', label: 'Window Object' },
  ];
  for (const name of parseScriptUIElements(resourceString)) {
    outs.push({ id: `ui_${name}`, label: name });
  }
  return outs;
}
