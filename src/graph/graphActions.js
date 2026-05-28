// Validation for the Copilot/Blueprint "connect_nodes" actions before they hit
// the canvas. The LLM frequently emits structurally invalid edges — duplicates,
// references to dropped nodes, handles that don't exist, exec outputs wired
// into data inputs ("the fan"), or many sources competing for one input. This
// pure filter is the robust gate; it's unit-tested independently of the model.

const isExecHandle = (h) => typeof h === 'string' && h.startsWith('exec');

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
