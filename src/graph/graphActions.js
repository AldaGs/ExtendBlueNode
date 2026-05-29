// Validation for the Copilot/Blueprint "connect_nodes" actions before they hit
// the canvas. The LLM frequently emits structurally invalid edges — duplicates,
// references to dropped nodes, handles that don't exist, exec outputs wired
// into data inputs ("the fan"), or many sources competing for one input. This
// pure filter is the robust gate; it's unit-tested independently of the model.

const isExecHandle = (h) => typeof h === 'string' && h.startsWith('exec');

/**
 * Parse a model response into an object, tolerating the common ways LLMs wrap
 * JSON: a ```json … ``` markdown fence, leading prose, or trailing chatter.
 * Falls back to slicing from the first "{" to the last "}". Returns null when
 * nothing parses (e.g. the response was truncated mid-JSON).
 * @param {string} text
 * @returns {object|null}
 */
export function extractJsonObject(text) {
  if (typeof text !== 'string') return null;
  let s = text.trim();

  // Prefer the contents of a fenced block if present.
  const fence = s.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) s = fence[1].trim();

  // Direct parse first.
  try { return JSON.parse(s); } catch { /* fall through */ }

  // Otherwise slice the outermost object span and try that.
  const first = s.indexOf('{');
  const last = s.lastIndexOf('}');
  if (first !== -1 && last > first) {
    try { return JSON.parse(s.slice(first, last + 1)); } catch { /* fall through */ }
  }
  return null;
}

/**
 * @param {object[]} actions  the full action list (only connect_nodes are processed)
 * @param {(id:string)=>string|null} labelOf  resolve a node id to its label (proposed or existing)
 * @param {(label:string)=>{inputs:Set<string>,outputs:Set<string>}} handlesForLabel
 * @returns {{ valid: object[], dropped: Record<string, number> }}
 */
export function filterConnectActions(actions, labelOf, handlesForLabel) {
  const seenEdges = new Set();
  const takenInputs = new Set();
  const valid = [];
  const dropped = {
    duplicate: 0, missingNode: 0, badHandle: 0, typeMismatch: 0, inputTaken: 0,
  };

  for (const a of actions) {
    if (a.action !== 'connect_nodes') continue;
    const { sourceId, sourceHandle, targetId, targetHandle } = a.args || {};

    const edgeKey = `${sourceId}::${sourceHandle}->${targetId}::${targetHandle}`;
    if (seenEdges.has(edgeKey)) { dropped.duplicate++; continue; }
    seenEdges.add(edgeKey);

    const srcLabel = labelOf(sourceId);
    const tgtLabel = labelOf(targetId);
    if (!srcLabel || !tgtLabel) { dropped.missingNode++; continue; }

    const srcH = handlesForLabel(srcLabel);
    const tgtH = handlesForLabel(tgtLabel);
    // Unknown handles allowed only for port-less nodes (e.g. reroute).
    const srcOk = srcH.outputs.size === 0 || srcH.outputs.has(sourceHandle);
    const tgtOk = tgtH.inputs.size === 0 || tgtH.inputs.has(targetHandle);
    if (!srcOk || !tgtOk) { dropped.badHandle++; continue; }

    // exec_out -> exec_in only; data output -> data input only.
    if (isExecHandle(sourceHandle) !== isExecHandle(targetHandle)) {
      dropped.typeMismatch++;
      continue;
    }

    // One wire per input handle: keep the first, drop competing sources.
    const inputKey = `${targetId}::${targetHandle}`;
    if (takenInputs.has(inputKey)) { dropped.inputTaken++; continue; }
    takenInputs.add(inputKey);

    valid.push(a);
  }

  return { valid, dropped };
}

export const _isExecHandle = isExecHandle; // exported for tests

// Resolve the exec input / output handle id for a label (prefer the canonical
// exec_in / exec_out, else any handle starting with "exec").
function execInOf(handles) {
  if (handles.inputs.has('exec_in')) return 'exec_in';
  for (const h of handles.inputs) if (isExecHandle(h)) return h;
  return null;
}
function execOutOf(handles) {
  if (handles.outputs.has('exec_out')) return 'exec_out';
  for (const h of handles.outputs) if (isExecHandle(h)) return h;
  return null;
}

/**
 * Recover a runnable exec chain when the model proposed action nodes but did
 * not wire them (the "all orphans" case). Chains action nodes (those with BOTH
 * an exec input and an exec output) in their proposed ORDER, filling only gaps
 * — it never adds a second exec_out to a node that already continues, nor a
 * second exec_in to a node already triggered, so model-supplied wiring wins.
 *
 * If nothing can act as a root (no node with an exec output but no exec input,
 * and no Start / Get Active Comp), injects a Start node to anchor the walk.
 *
 * @param {{id:string,label:string}[]} orderedNodes  valid proposed nodes, in order
 * @param {object[]} modelConnects                   the model's connect_nodes actions
 * @param {(label:string)=>{inputs:Set<string>,outputs:Set<string>}} handlesForLabel
 * @param {{injectStart?:boolean, startId?:string}} [opts]
 * @returns {{ startNode: object|null, chainEdges: object[] }}
 */
export function autoChainActions(orderedNodes, modelConnects, handlesForLabel, opts = {}) {
  const hOf = (label) => handlesForLabel(label);
  const execIn = (label) => execInOf(hOf(label));
  const execOut = (label) => execOutOf(hOf(label));

  // Existing exec connectivity from the model's edges.
  const hasIn = new Set();
  const hasOut = new Set();
  for (const a of modelConnects) {
    if (a.action !== 'connect_nodes') continue;
    const { sourceId, sourceHandle, targetId, targetHandle } = a.args || {};
    if (isExecHandle(targetHandle)) hasIn.add(targetId);
    if (isExecHandle(sourceHandle)) hasOut.add(sourceId);
  }

  const actionNodes = orderedNodes.filter((n) => execIn(n.label) && execOut(n.label));
  if (!actionNodes.length) return { startNode: null, chainEdges: [] };

  const labels = new Set(orderedNodes.map((n) => n.label));
  const hasRoot =
    orderedNodes.some((n) => execOut(n.label) && !execIn(n.label)) ||
    labels.has('Start') ||
    labels.has('Get Active Comp');

  let startNode = null;
  if (!hasRoot && opts.injectStart !== false) {
    startNode = {
      action: 'propose_node',
      args: { id: opts.startId || `bp_start_${Date.now().toString(36)}`, label: 'Start' },
    };
  }

  const seq = startNode
    ? [{ id: startNode.args.id, label: 'Start' }, ...actionNodes]
    : actionNodes;

  const chainEdges = [];
  for (let i = 1; i < seq.length; i++) {
    const prev = seq[i - 1];
    const cur = seq[i];
    if (hasOut.has(prev.id) || hasIn.has(cur.id)) continue; // don't clobber model wiring
    const so = execOut(prev.label);
    const ti = execIn(cur.label);
    if (!so || !ti) continue;
    chainEdges.push({
      action: 'connect_nodes',
      args: { sourceId: prev.id, sourceHandle: so, targetId: cur.id, targetHandle: ti },
    });
    hasOut.add(prev.id);
    hasIn.add(cur.id);
  }

  return { startNode, chainEdges };
}
