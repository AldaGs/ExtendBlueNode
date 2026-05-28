// Per-node-kind IR emitters.
//
// Each emitter takes a node and a `ctx`; returns an array of IR
// statements. The orchestrator handles continuation along exec edges,
// except for control-flow emitters (if/for) which call ctx.walkBranch
// themselves to scope each branch's statements.
//
// ctx shape:
//   resolveInput(node, port) -> string  (JS expression text)
//   globals: GlobalVariable[]
import { ir } from './ir';
import { AE_NODE_EMITTERS, AE_DATA_EMITTERS } from '../generated/aeEmitters';
import {
  serializeTreeToResourceString,
  rootTypeToMode,
} from '../graph/scriptUITree';

/* ----------------------------- property paths ----------------------------- */

// Turn 'ADBE Transform Group/ADBE Opacity' into
// '.property("ADBE Transform Group").property("ADBE Opacity")'.
export function chainPropertyPath(pathString) {
  const segs = String(pathString)
    .split('/')
    .map((s) => s.trim())
    .filter(Boolean);
  if (!segs.length) return '.property("ADBE Opacity")';
  return segs.map((s) => `.property(${JSON.stringify(s)})`).join('');
}

// Decide how to render Set Property's chained .property() calls.
// We prefer compile-time path expansion (so nested groups work) and
// fall back to a single dynamic .property(<expr>) when the upstream
// is a runtime-only expression we can't introspect.
function resolvePropertyChain(node, ctx) {
  const upstream = ctx.sourceOf?.(node, 'property');
  if (upstream && upstream.type === 'propertyPath') {
    return chainPropertyPath(upstream.data?.path || '');
  }
  if (upstream && upstream.type === 'string') {
    return chainPropertyPath(upstream.data?.value || '');
  }
  if (!upstream) {
    const inline = node.data?.values?.property;
    return chainPropertyPath(inline ?? 'ADBE Opacity');
  }
  // Wired but not a statically-known string. Single dynamic call.
  const expr = ctx.resolveInput(node, { id: 'property', type: 'text' });
  return `.property(${expr})`;
}

/* ----------------------------- layer classes ----------------------------- */

// Whitelist the ExtendScript layer class names so a node value can never
// inject arbitrary code into the generated `instanceof <klass>` check.
const LAYER_CLASSES = ['AVLayer', 'TextLayer', 'ShapeLayer', 'CameraLayer', 'LightLayer'];
function sanitizeLayerClass(value) {
  return LAYER_CLASSES.indexOf(value) !== -1 ? value : 'AVLayer';
}

// Shared body for the Select-Layer-by-* emitters: assign the shared
// `targetLayer` (linear-graph fallback) AND a per-node capture variable that
// the selector's data output resolves to (stable under sibling reassignment).
function selectorCapture(node, ctx, expr) {
  return [
    ir.varDecl('targetLayer', expr),
    ir.throwIfNot('targetLayer', 'Layer not found.'),
    ir.varDecl(ctx.varName(node), 'targetLayer'),
  ];
}

/* ----------------------------- math / compare ----------------------------- */

// Inline expression for a wired data input. The orchestrator inlines
// math + compare directly, so these don't appear as IR statements; the
// resolveExpression path in astCompiler handles them.

/* ----------------------------- ebnNode by label ----------------------------- */

const EBN_NODE_EMITTERS = {
  'Get Active Comp': () => [
    ir.varDecl('activeComp', 'app.project.activeItem'),
    ir.throwIfNot(
      'activeComp && (activeComp instanceof CompItem)',
      'No active composition selected.',
    ),
  ],

  // Selectors keep `targetLayer` as the shared "most recently selected layer"
  // for the common linear graph (an unwired Set Property falls back to it).
  // They ALSO capture the selection into a per-node variable so an explicitly
  // wired consumer references a stable layer even after a later sibling
  // selector reassigns `targetLayer` — see selectorCapture / its data emitter.
  'Select Layer by ID': (node, ctx) => {
    const layerId = ctx.resolveInput(node, { id: 'layer_id', type: 'number' });
    return selectorCapture(node, ctx, `activeComp.layerByID(${layerId})`);
  },

  'Select Layer by Name': (node, ctx) => {
    const name = ctx.resolveInput(node, { id: 'layer_name', type: 'text' });
    return selectorCapture(node, ctx, `activeComp.layer(${name})`);
  },

  'Select Layer by Index': (node, ctx) => {
    const idx = ctx.resolveInput(node, { id: 'layer_index', type: 'number' });
    return selectorCapture(node, ctx, `activeComp.layer(${idx})`);
  },

  'Set Property': (node, ctx) => {
    // Layer port: a wire (e.g. from a For-Each loop's `layer` output)
    // takes precedence; otherwise we fall back to the most recently
    // declared `targetLayer` so the common linear graph still works.
    const layer = ctx.resolveInput(node, {
      id: 'layer', type: 'expr', default: 'targetLayer',
    });

    // Property port: AE properties are nested chains like
    //   layer.property("ADBE Transform Group").property("ADBE Opacity")
    // The user (or a PropertyPath / String upstream node) supplies a
    // '/'-separated path which we expand into the chain.
    const propChain = resolvePropertyChain(node, ctx);

    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${layer}${propChain}.setValue(${value});`)];
  },

  // Same layer/property resolution as Set Property, but writes the property's
  // `.expression` string instead of a static value.
  'Set Expression': (node, ctx) => {
    const layer = ctx.resolveInput(node, { id: 'layer', type: 'expr', default: 'targetLayer' });
    const propChain = resolvePropertyChain(node, ctx);
    const expr = ctx.resolveInput(node, { id: 'expression', type: 'text', default: '""' });
    return [ir.raw(`${layer}${propChain}.expression = ${expr};`)];
  },

  // Set a keyframe value at a given time on the resolved property.
  'Add Keyframe at Time': (node, ctx) => {
    const layer = ctx.resolveInput(node, { id: 'layer', type: 'expr', default: 'targetLayer' });
    const propChain = resolvePropertyChain(node, ctx);
    const time = ctx.resolveInput(node, { id: 'time', type: 'number' });
    const value = ctx.resolveInput(node, { id: 'value', type: 'number' });
    return [ir.raw(`${layer}${propChain}.setValueAtTime(${time}, ${value});`)];
  },

  // Remove a keyframe by its 1-based key index on the resolved property.
  'Remove Keyframe': (node, ctx) => {
    const layer = ctx.resolveInput(node, { id: 'layer', type: 'expr', default: 'targetLayer' });
    const propChain = resolvePropertyChain(node, ctx);
    const index = ctx.resolveInput(node, { id: 'index', type: 'number' });
    return [ir.raw(`${layer}${propChain}.removeKey(${index});`)];
  },

  'Set Local Variable': (node, ctx) => {
    // The identifier lives in data.variableName (edited via the
    // Properties panel) so it shows up wherever the IR talks about
    // variable names. Fall back to a stable per-node id-derived name
    // when blank so we never emit an invalid `var = …;`.
    const name = ctx.varName(node);
    const expr = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.varDecl(name, expr)];
  },

  'Array Push': (node, ctx) => {
    const arr = ctx.resolveInput(node, { id: 'array', type: 'expr' });
    const val = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${arr}.push(${val});`)];
  },

  'Object Set Key': (node, ctx) => {
    const obj = ctx.resolveInput(node, { id: 'object', type: 'expr' });
    const key = ctx.resolveInput(node, { id: 'key', type: 'text' });
    const val = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.raw(`${obj}[${key}] = ${val};`)];
  },

  // Pure entry point — emits no code, just anchors the exec chain.
  'Start': () => [],

  'Save JSON': (node, ctx) => {
    const payload = ctx.resolveInput(node, { id: 'payload', type: 'expr', default: '{}' });
    const dirMode = node.data?.values?.directory_mode || 'Auto';
    const stmts = [];
    if (dirMode === 'Auto') {
      const fileName = ctx.resolveInput(node, { id: 'file_name', type: 'text', default: '""' });
      stmts.push(
        ir.varDecl('_ebn_userData', 'Folder.userData.fsName'),
        ir.varDecl('_ebn_safeFolder', 'new Folder(_ebn_userData + "/EBN_Saves")'),
        ir.raw('if (!_ebn_safeFolder.exists) { _ebn_safeFolder.create(); }'),
        ir.varDecl('targetFile', `new File(_ebn_safeFolder.fsName + "/" + ${fileName})`)
      );
    } else {
      const fullPath = ctx.resolveInput(node, { id: 'full_path', type: 'text', default: '""' });
      stmts.push(
        ir.varDecl('targetFile', `new File(${fullPath})`)
      );
    }
    stmts.push(
      ir.raw('targetFile.open("w");'),
      ir.raw(`targetFile.write(JSON.stringify(${payload}, undefined, 4));`),
      ir.raw('targetFile.close();')
    );
    return stmts;
  },

  'Load JSON': (node, ctx) => {
    const dirMode = node.data?.values?.directory_mode || 'Auto';
    const stmts = [];
    if (dirMode === 'Auto') {
      const fileName = ctx.resolveInput(node, { id: 'file_name', type: 'text', default: '""' });
      stmts.push(
        ir.varDecl('_ebn_userData', 'Folder.userData.fsName'),
        ir.varDecl('_ebn_safeFolder', 'new Folder(_ebn_userData + "/EBN_Saves")'),
        ir.raw('if (!_ebn_safeFolder.exists) { _ebn_safeFolder.create(); }'),
        ir.varDecl('targetFile', `new File(_ebn_safeFolder.fsName + "/" + ${fileName})`)
      );
    } else {
      const fullPath = ctx.resolveInput(node, { id: 'full_path', type: 'text', default: '""' });
      stmts.push(
        ir.varDecl('targetFile', `new File(${fullPath})`)
      );
    }
    const outVar = ctx.varName(node);
    stmts.push(
      ir.varDecl(outVar, 'null'),
      ir.raw('if (targetFile.exists) {'),
      ir.raw('    targetFile.open("r");'),
      ir.raw('    var rawData = targetFile.read();'),
      ir.raw('    targetFile.close();'),
      ir.raw('    try {'),
      ir.raw(`        ${outVar} = JSON.parse(rawData);`),
      ir.raw('    } catch(e) {'),
      ir.raw(`        ${outVar} = {}; // Fallback on corrupt JSON`),
      ir.raw('    }'),
      ir.raw('} else {'),
      ir.raw(`    ${outVar} = {}; // Fallback on missing file`),
      ir.raw('}')
    );
    return stmts;
  },

  // --- ScriptUI ---
  'ScriptUI Builder': (node, ctx) => {
    // Tree-first: serialize the structured model when present; fall back to
    // the legacy resource string for un-migrated nodes.
    const tree = node.data?.values?.scriptUITree;
    const resource = tree
      ? serializeTreeToResourceString(tree)
      : (node.data?.values?.scriptUI_string || '');
    const stringLiteral = JSON.stringify(resource);
    const stringVar = ctx.varName(node) + '_String';
    const winVar = ctx.varName(node) + '_Window';
    // Window type is owned by the tree root; legacy nodes use ui_mode.
    const mode = tree
      ? rootTypeToMode(tree.type)
      : (node.data?.values?.ui_mode || 'window');
    // Panel mode: when AE runs this script as a dockable panel it binds the
    // Panel to `this`; reuse it, otherwise fall back to a floating window so
    // the same graph still runs from the ScriptUI launcher / ESTK.
    const init =
      mode === 'panel'
        ? `(this instanceof Panel) ? this : new Window(${stringVar})`
        : `new Window(${stringVar})`;
    return [
      ir.varDecl(stringVar, stringLiteral),
      ir.varDecl(winVar, init),
    ];
  },
  'UI Event Listener': (node, ctx) => {
    const target = ctx.resolveInput(node, { id: 'target', type: 'expr', default: 'null' });
    const eventType = node.data?.values?.event_type || 'onClick';
    // exec_callback = code that runs when the event fires.
    const callback = ctx.walkBranch(node.id, 'exec_callback');
    // exec_out = the rest of the setup chain (attach more listeners / show).
    const cont = ctx.walkBranch(node.id, 'exec_out');
    return [
      ir.funcAssign(`${target}.${eventType}`, [], callback),
      ...cont,
    ];
  },
  'Show Window': (node, ctx) => {
    const winObj = ctx.resolveInput(node, { id: 'window_obj', type: 'expr', default: 'null' });
    // Lay out, then show only a real Window. A dockable Panel (panel mode)
    // is already on screen, so calling .show() on it would throw — guard it.
    return [
      ir.raw(`if (${winObj}) { ${winObj}.layout.layout(true); if (${winObj} instanceof Window) ${winObj}.show(); }`),
    ];
  },
  'Custom UI Code': (node, ctx) => {
    const customCode = node.data?.values?.scriptUI_string || '';
    return [
      ir.raw(`// --- Custom UI Code Block ---`),
      ir.raw(customCode)
    ];
  },

  // --- JS control flow (self-branching; see SELF_BRANCHING_LABELS) ---
  'For Loop': (node, ctx) => {
    const start = ctx.resolveInput(node, { id: 'start', type: 'number', default: '0' });
    const end   = ctx.resolveInput(node, { id: 'end',   type: 'number', default: '10' });
    const step  = ctx.resolveInput(node, { id: 'step',  type: 'number', default: '1' });
    const idx   = forLoopIndexVar(node, ctx);
    const body  = ctx.walkBranch(node.id, 'exec_body');
    const done  = ctx.walkBranch(node.id, 'exec_done');
    return [
      ir.forIn(`var ${idx} = ${start}`, `${idx} < ${end}`, `${idx} += ${step}`, body),
      ...done,
    ];
  },
  'While Loop': (node, ctx) => {
    const cond = ctx.resolveInput(node, { id: 'cond', type: 'expr', default: 'true' });
    const body = ctx.walkBranch(node.id, 'exec_body');
    const done = ctx.walkBranch(node.id, 'exec_done');
    return [ir.whileLoop(cond, body), ...done];
  },
  'For Each (Array)': (node, ctx) => {
    const arr  = ctx.resolveInput(node, { id: 'array', type: 'expr', default: '[]' });
    const arrV = `${ctx.varName(node)}_arr`;
    const idxV = forEachArrayIndexVar(node, ctx);
    const itmV = forEachArrayItemVar(node, ctx);
    const body = ctx.walkBranch(node.id, 'exec_body');
    const done = ctx.walkBranch(node.id, 'exec_done');
    return [
      ir.varDecl(arrV, arr),
      ir.forIn(`var ${idxV} = 0`, `${idxV} < ${arrV}.length`, `${idxV}++`, [
        ir.varDecl(itmV, `${arrV}[${idxV}]`),
        ...body,
      ]),
      ...done,
    ];
  },
  // Walks a property's entire descendant tree, running exec_body once per
  // visited property (pre-order). Emits a recursive helper + initial call —
  // the canonical AE "apply to all properties" pattern. The `property` output
  // resolves to the helper's parameter (see resolveExpressionFor).
  'Walk Property Tree': (node, ctx) => {
    const root  = ctx.resolveInput(node, { id: 'root', type: 'expr', default: 'undefined' });
    const fn    = `${ctx.varName(node)}_walk`;
    const param = walkPropertyNodeVar(node, ctx);
    const idx   = `${ctx.varName(node)}_i`;
    const body  = ctx.walkBranch(node.id, 'exec_body');
    const done  = ctx.walkBranch(node.id, 'exec_done');
    return [
      ir.funcDecl(fn, [param], [
        ...body,
        ir.raw(`if (${param}.numProperties == null) { return; }`),
        ir.forIn(`var ${idx} = 1`, `${idx} <= ${param}.numProperties`, `${idx}++`, [
          ir.raw(`${fn}(${param}.property(${idx}));`),
        ]),
      ]),
      ir.raw(`${fn}(${root});`),
      ...done,
    ];
  },
  // Calls a user-defined function by name. A *leaf* exec node: it emits a
  // single call and continues down exec_out (recursion, if any, lives in the
  // generated function body — never in the node walk). Arg count comes from
  // the bound Define Function's parameter list (ctx.functions registry).
  'Call Function': (node, ctx) => {
    const name = ctx.sanitizeVarName(node.data?.values?.functionName);
    if (!name) return [ir.comment('Call Function: no function name set')];
    const def = ctx.functions && ctx.functions.get(name);
    if (!def) return [ir.comment(`Call Function: no Define Function named '${name}'`)];
    const args = def.params.map((_, i) =>
      ctx.resolveInput(node, { id: `arg${i + 1}`, type: 'expr', default: 'undefined' }),
    );
    const outVar = ctx.varName(node);
    return [ir.varDecl(outVar, `${name}(${args.join(', ')})`)];
  },
  // Returns from the enclosing Define Function body. Bare `return;` when no
  // value is wired/inline, otherwise `return <expr>;`.
  'Return': (node, ctx) => {
    const wired = ctx.sourceOf(node, 'value');
    const inline = node.data?.values?.value;
    if (!wired && (inline == null || inline === '')) return [ir.raw('return;')];
    const v = ctx.resolveInput(node, { id: 'value', type: 'expr', default: 'undefined' });
    return [ir.raw(`return ${v};`)];
  },
  'Switch Statement': (node, ctx) => {
    const val = ctx.resolveInput(node, { id: 'value', type: 'expr', default: 'undefined' });
    const cases = [1, 2, 3].map((i) => ({
      val: ctx.resolveInput(node, { id: `case${i}_val`, type: 'expr', default: 'undefined' }),
      body: ctx.walkBranch(node.id, `exec_case${i}`),
    }));
    const def  = ctx.walkBranch(node.id, 'exec_default');
    const done = ctx.walkBranch(node.id, 'exec_done');
    // Lower to an if / else-if chain (=== comparison) — robust in ES3 and
    // sidesteps switch fall-through surprises.
    let chain = def;
    for (let i = cases.length - 1; i >= 0; i--) {
      chain = [ir.ifElse(`${val} === ${cases[i].val}`, cases[i].body, chain)];
    }
    return [...chain, ...done];
  },

  // Inspector: alerts the resolved value at runtime. Use anywhere in the
  // exec chain to see what a wire actually carries. `label` is an optional
  // tag prepended to the alert so multiple Debug nodes are distinguishable.
  'Debug': (node, ctx) => {
    const valExpr = ctx.resolveInput(node, { id: 'value', type: 'expr', default: 'undefined' });
    const tag = String(node.data?.values?.label || node.id || 'Debug');
    // Build a single alert call. ExtendScript coerces objects via toString();
    // wrap in a try so a bad expr doesn't kill the whole chain.
    return [ir.raw(`try { alert(${JSON.stringify('DEBUG[' + tag + ']: ')} + String(${valExpr})); } catch (e) { alert(${JSON.stringify('DEBUG[' + tag + '] error: ')} + e.message); }`)];
  },

  // Legacy fixture from the original Phase 5 spec.
  'Set Opacity to 50%': () => [
    ir.raw('targetLayer.property("ADBE Opacity").setValue(50);'),
  ],
  ...AE_NODE_EMITTERS,
};

/* ----------------------------- top-level dispatcher ----------------------------- */

export function emitterFor(node) {
  if (!node) return null;
  if (node.type === 'reroute') return () => [];

  if (node.type === 'ebnNode') {
    const label = node.data?.label;
    const fn = EBN_NODE_EMITTERS[label];
    if (fn) return fn;
    return () => [ir.comment(`WARNING: unknown ebnNode label '${label}'`)];
  }

  if (node.type === 'setGlobal') {
    return (n, ctx) => {
      const g = ctx.globals.find((x) => x.id === n.data?.globalId);
      if (!g) return [ir.comment('Set Global: no target selected')];
      const expr = ctx.resolveInput(n, {
        id: 'value',
        type: g.type === 'String' ? 'text' : 'number',
      });
      return [ir.assign(ctx.globalName(g), expr)];
    };
  }

  if (node.type === 'if') {
    return (n, ctx) => {
      const cond = ctx.resolveInput(n, { id: 'cond', type: 'expr' });
      const thenBody = ctx.walkBranch(n.id, 'exec_then');
      const elseBody = ctx.walkBranch(n.id, 'exec_else');
      return [ir.ifElse(cond, thenBody, elseBody)];
    };
  }

  if (node.type === 'forEachSelected') {
    return (n, ctx) => {
      const body = ctx.walkBranch(n.id, 'exec_body');
      const done = ctx.walkBranch(n.id, 'exec_done');
      return [
        ir.varDecl('loopLayers', 'activeComp.selectedLayers'),
        ir.forIn('var i = 0', 'i < loopLayers.length', 'i++', [
          ir.varDecl('loopLayer', 'loopLayers[i]'),
          ...body,
        ]),
        ...done,
      ];
    };
  }

  return () => [
    ir.comment(`WARNING: no emitter for node type '${node.type}'`),
  ];
}

/* ----------------------------- control-flow flags ----------------------------- */

// Stable per-node index variable for a "For Loop" node. Shared by the exec
// emitter (loop header) and the data-side resolver (its `index` output).
export function forLoopIndexVar(node, ctx) {
  return `${ctx.varName(node)}_i`;
}

// Stable per-node loop vars for "For Each (Array)". Shared by the exec
// emitter and the `item` / `index` data-side resolvers.
export function forEachArrayIndexVar(node, ctx) {
  return `${ctx.varName(node)}_i`;
}
export function forEachArrayItemVar(node, ctx) {
  return `${ctx.varName(node)}_item`;
}

// Stable per-node parameter var for "Walk Property Tree" — the current
// property being visited. Shared by the exec emitter (helper param) and the
// `property` data-side resolver. Only in scope inside the helper body.
export function walkPropertyNodeVar(node, ctx) {
  return `${ctx.varName(node)}_node`;
}

// --- User-defined functions (Define Function / Call Function) ---

// The function's generated name. Sanitized from the node's `functionName`
// value; falls back to a per-node-unique identifier so an unnamed def still
// produces valid (if uncallable) code.
export function funcDefName(node, ctx) {
  const clean = ctx.sanitizeVarName(node.data?.values?.functionName);
  return clean || `ebnFn_${ctx.varName(node)}`;
}

// Parsed parameter identifiers from the comma-separated `params` value,
// sanitized to valid identifiers. Shared by the hoist pass (signature) and
// the `paramN` data-side resolver (references inside the body).
export function funcDefParams(node, ctx) {
  const raw = node.data?.values?.params || '';
  return String(raw)
    .split(',')
    .map((s) => ctx.sanitizeVarName(s))
    .filter(Boolean);
}

// Nodes whose emitter takes ownership of their own downstream walking —
// the orchestrator must NOT auto-recurse along their exec_out edges.
// Keyed by node.type for the dedicated node kinds…
export const SELF_BRANCHING_TYPES = new Set(['if', 'forEachSelected']);
// …and by ebnNode label for the JS control-flow nodes (which are all
// type 'ebnNode'). astCompiler checks both.
export const SELF_BRANCHING_LABELS = new Set([
  'For Loop', 'While Loop', 'Switch Statement', 'For Each (Array)',
  'Walk Property Tree',
  // Walks exec_callback (handler body) itself and continues via exec_out, so
  // the orchestrator must not auto-follow its outgoing exec edges.
  'UI Event Listener',
]);

/* ----------------------------- data-side expression resolution ----------------------------- */

// Inlined when a data-side node is upstream of a wired input. Returns
// a JS expression string. Recursive: math taking math taking integer
// composes naturally.
export function resolveExpressionFor(node, ctx, outputHandle) {
  if (!node) return null;

  if (node.type === 'getGlobal') {
    const g = ctx.globals.find((x) => x.id === node.data?.globalId);
    return g ? ctx.globalName(g) : 'null';
  }

  if (node.type === 'integer' || node.type === 'string') {
    return ctx.varName(node);
  }

  // Property Path nodes, when wired into something other than Set
  // Property's property port, act as a plain string literal of the
  // current path. Set Property has its own special-case in resolvePropertyChain.
  if (node.type === 'propertyPath') {
    return JSON.stringify(String(node.data?.path ?? ''));
  }

  if (node.type === 'math') {
    const op = MATH_OPS[node.data?.op] || '+';
    const a = ctx.resolveInput(node, { id: 'a', type: 'number' });
    const b = ctx.resolveInput(node, { id: 'b', type: 'number' });
    return `(${a} ${op} ${b})`;
  }

  if (node.type === 'compare') {
    const op = COMPARE_OPS[node.data?.op] || '==';
    const a = ctx.resolveInput(node, { id: 'a', type: 'number' });
    const b = ctx.resolveInput(node, { id: 'b', type: 'number' });
    return `(${a} ${op} ${b})`;
  }

  if (node.type === 'select') {
    const cond  = ctx.resolveInput(node, { id: 'cond',     type: 'expr' });
    const tVal  = ctx.resolveInput(node, { id: 'if_true',  type: 'number' });
    const fVal  = ctx.resolveInput(node, { id: 'if_false', type: 'number' });
    return `(${cond} ? ${tVal} : ${fVal})`;
  }

  // Vector math: element-wise with scalar broadcasting. Delegates to a
  // tiny runtime helper hoisted at the top of the script — keeps call
  // sites concise even for chains of vector ops.
  if (node.type === 'vecMath') {
    ctx.useHelper?.('ebnVec');
    const op = VEC_OPS[node.data?.op] || '+';
    const a = ctx.resolveInput(node, { id: 'a', type: 'expr' });
    const b = ctx.resolveInput(node, { id: 'b', type: 'expr' });
    return `ebnVec(${a}, ${b}, ${JSON.stringify(op)})`;
  }

  if (node.type === 'splitVec') {
    const vec = ctx.resolveInput(node, { id: 'vec', type: 'expr' });
    const idx = outputHandle === 'y' ? 1 : 0;
    return `(${vec})[${idx}]`;
  }

  // For-Each-Selected's `layer` output references the loop-local variable.
  // Wiring it outside the loop body is the user's responsibility for now.
  if (node.type === 'forEachSelected') {
    return 'loopLayer';
  }

  // For loop output
  if (node.type === 'forLoop') {
    if (outputHandle === 'index') {
      return ctx.varName(node) + '_i';
    }
  }

  // Data-side ebnNode dispatch — keyed by label so these nodes can use
  // the generic shell and still participate in expression composition.
  if (node.type === 'ebnNode') {
    const label = node.data?.label;
    const fn = EBN_DATA_EMITTERS[label];
    if (fn) return fn(node, ctx, outputHandle);
    // Generic fallback: every action node's exec emitter assigns its return
    // value to `ctx.varName(node)`. When something downstream wires that
    // node's `result` output, just reuse that variable name — that's what
    // the action produced. Without this, `addComp.result` → `openInViewer`
    // silently falls back to the `activeComp` default and the wire does
    // nothing visible.
    if (outputHandle === 'result' && EBN_NODE_EMITTERS[label]) {
      return ctx.varName(node);
    }
  }

  return null;
}

/* ----------------------------- data-side label dispatch ----------------------------- */

const EBN_DATA_EMITTERS = {
  // Expose execution variables to the data graph when explicitly wired
  'Get Active Comp': () => 'activeComp',
  // The global `app` object — wire into any AE getter's `Application` input.
  'Get Application': () => 'app',
  // Shorthand for the ubiquitous Get Application → project → items chain.
  'Get Project Items': () => 'app.project.items',
  // Debug's data-side output is a pass-through of its wired `value` input,
  // so it can be inserted mid-chain on a data wire without breaking it.
  'Debug': (node, ctx) => ctx.resolveInput(node, { id: 'value', type: 'expr', default: 'undefined' }),
  // The per-node capture variable declared by selectorCapture — stable even
  // after a later sibling selector reassigns the shared `targetLayer`.
  'Select Layer by ID': (node, ctx) => ctx.varName(node),
  'Select Layer by Name': (node, ctx) => ctx.varName(node),
  'Select Layer by Index': (node, ctx) => ctx.varName(node),
  'Set Local Variable': (node, ctx) => ctx.varName(node),

  // Array of the comp's currently selected layers — pairs with For Each (Array).
  'All Selected Layers': (node, ctx) => {
    const comp = ctx.resolveInput(node, { id: 'comp', type: 'expr', default: 'activeComp' });
    return `${comp}.selectedLayers`;
  },
  // Array of the comp's layers filtered by ScriptUI/AE layer class.
  'Select Layers by Class': (node, ctx) => {
    ctx.useHelper?.('ebnLayersByClass');
    const comp = ctx.resolveInput(node, { id: 'comp', type: 'expr', default: 'activeComp' });
    const klass = sanitizeLayerClass(node.data?.values?.layer_class);
    return `ebnLayersByClass(${comp}, ${klass})`;
  },

  'New File': (node, ctx) => {
    const pathStr = ctx.resolveInput(node, { id: 'path', type: 'text' });
    return `new File(${pathStr})`;
  },
  'New Folder': (node, ctx) => {
    const pathStr = ctx.resolveInput(node, { id: 'path', type: 'text' });
    return `new Folder(${pathStr})`;
  },

  'Color Picker': (node, ctx, outputHandle) => {
    const hex = ctx.resolveInput(node, { id: 'color', type: 'text', default: '#ff0000' });
    if (outputHandle === 'hex') return hex;
    ctx.useHelper?.('ebnHexToRgb');
    if (outputHandle === 'rgb255') return `ebnHexToRgb(${hex}, 1, false)`;
    if (outputHandle === 'rgba') return `ebnHexToRgb(${hex}, 255, true)`;
    return `ebnHexToRgb(${hex}, 255, false)`; // default 'rgb' is 0-1 scale without alpha
  },

  // Reads layer.property("…").property("…").value, reusing the same
  // slash-path expansion as Set Property so paths stay uniform.
  'Get Property Value': (node, ctx) => {
    const layer = ctx.resolveInput(node, {
      id: 'layer', type: 'expr', default: 'targetLayer',
    });
    const propChain = resolvePropertyChain(node, ctx);
    return `${layer}${propChain}.value`;
  },

  // Samples the property's animated value at a given time (no expressions).
  'Read Value at Time': (node, ctx) => {
    const layer = ctx.resolveInput(node, {
      id: 'layer', type: 'expr', default: 'targetLayer',
    });
    const propChain = resolvePropertyChain(node, ctx);
    const time = ctx.resolveInput(node, { id: 'time', type: 'number' });
    return `${layer}${propChain}.valueAtTime(${time}, false)`;
  },

  'Vector 2 Array': (node, ctx) => {
    const x = ctx.resolveInput(node, { id: 'x', type: 'number' });
    const y = ctx.resolveInput(node, { id: 'y', type: 'number' });
    return `[${x}, ${y}]`;
  },
  
  // Array
  'New Array': () => `[]`,
  'Array Length': (node, ctx) => {
    const arr = ctx.resolveInput(node, { id: 'array', type: 'expr', default: '[]' });
    return `${arr}.length`;
  },
  'Array Get Element': (node, ctx) => {
    const arr = ctx.resolveInput(node, { id: 'array', type: 'expr', default: '[]' });
    const idx = ctx.resolveInput(node, { id: 'index', type: 'number', default: '0' });
    return `${arr}[${idx}]`;
  },
  
  // Math
  'Math Function': (node, ctx) => {
    const a = ctx.resolveInput(node, { id: 'a', type: 'number', default: '0' });
    const b = ctx.resolveInput(node, { id: 'b', type: 'number', default: '0' });
    const funcName = node.data?.values?.func || 'round';
    // Math.min/max can take multiple args, others usually one.
    if (['min', 'max'].includes(funcName)) return `Math.${funcName}(${a}, ${b})`;
    return `Math.${funcName}(${a})`;
  },
  'Math Random': () => `Math.random()`,
  // Ranged inclusive integer: Math.floor(Math.random()*(max-min+1))+min
  'Random Integer': (node, ctx) => {
    const min = ctx.resolveInput(node, { id: 'min', type: 'number', default: '0' });
    const max = ctx.resolveInput(node, { id: 'max', type: 'number', default: '100' });
    return `(Math.floor(Math.random() * ((${max}) - (${min}) + 1)) + (${min}))`;
  },
  // For Loop's `index` output references the loop's counter variable.
  'For Loop': (node, ctx, outputHandle) =>
    outputHandle === 'index' ? forLoopIndexVar(node, ctx) : null,
  // For Each (Array)'s loop-local outputs.
  'For Each (Array)': (node, ctx, outputHandle) => {
    if (outputHandle === 'item') return forEachArrayItemVar(node, ctx);
    if (outputHandle === 'index') return forEachArrayIndexVar(node, ctx);
    return null;
  },
  // Walk Property Tree's `property` output references the helper's parameter.
  'Walk Property Tree': (node, ctx, outputHandle) =>
    outputHandle === 'property' ? walkPropertyNodeVar(node, ctx) : null,
  // Define Function's `paramN` outputs reference the Nth parameter identifier,
  // in scope only inside the function body.
  'Define Function': (node, ctx, outputHandle) => {
    const m = /^param(\d+)$/.exec(outputHandle || '');
    if (!m) return null;
    return funcDefParams(node, ctx)[Number(m[1]) - 1] ?? null;
  },
  // Call Function's `result` references the captured return value.
  'Call Function': (node, ctx, outputHandle) =>
    outputHandle === 'result' ? ctx.varName(node) : null,
  // Boolean literal — resolves its (input-or-inline) value as a bool.
  'Boolean': (node, ctx) =>
    ctx.resolveInput(node, { id: 'value', type: 'boolean', default: 'false' }),
  // Logic gates.
  'And': (node, ctx) => {
    const a = ctx.resolveInput(node, { id: 'a', type: 'expr', default: 'false' });
    const b = ctx.resolveInput(node, { id: 'b', type: 'expr', default: 'false' });
    return `(${a} && ${b})`;
  },
  'Or': (node, ctx) => {
    const a = ctx.resolveInput(node, { id: 'a', type: 'expr', default: 'false' });
    const b = ctx.resolveInput(node, { id: 'b', type: 'expr', default: 'false' });
    return `(${a} || ${b})`;
  },
  'Not': (node, ctx) => {
    const a = ctx.resolveInput(node, { id: 'a', type: 'expr', default: 'false' });
    return `(!${a})`;
  },
  // Conversions.
  'To String': (node, ctx) =>
    `String(${ctx.resolveInput(node, { id: 'value', type: 'expr', default: '""' })})`,
  'Parse Number': (node, ctx) =>
    `parseFloat(${ctx.resolveInput(node, { id: 'value', type: 'text', default: '"0"' })})`,
  // Concatenate: string-join two inputs. Resolve as 'text' so inline
  // literals get quoted while wired upstream expressions pass through raw
  // (ExtendScript coerces numbers to strings under "+").
  'Concatenate': (node, ctx) => {
    const a = ctx.resolveInput(node, { id: 'a', type: 'text', default: '""' });
    const b = ctx.resolveInput(node, { id: 'b', type: 'text', default: '""' });
    return `(${a} + ${b})`;
  },

  // String
  'String Split': (node, ctx) => {
    const str = ctx.resolveInput(node, { id: 'string', type: 'text', default: '""' });
    const sep = ctx.resolveInput(node, { id: 'separator', type: 'text', default: '","' });
    return `${str}.split(${sep})`;
  },
  'String Replace': (node, ctx) => {
    const str = ctx.resolveInput(node, { id: 'string', type: 'text', default: '""' });
    const find = ctx.resolveInput(node, { id: 'find', type: 'text', default: '""' });
    const replace = ctx.resolveInput(node, { id: 'replace', type: 'text', default: '""' });
    return `${str}.replace(${find}, ${replace})`;
  },
  'String Length': (node, ctx) => {
    const str = ctx.resolveInput(node, { id: 'string', type: 'text', default: '""' });
    return `${str}.length`;
  },

  // Object
  'ScriptUI Builder': (node, ctx, outputHandle) => {
    const winVar = ctx.varName(node) + '_Window';
    if (outputHandle === 'window_obj') return winVar;
    if (outputHandle && outputHandle.startsWith('ui_')) {
      return `${winVar}.${outputHandle.slice(3)}`;
    }
    return null;
  },
  'Object Builder': (node, ctx) => {
    const inputs = node.data?.inputs || [];
    const props = inputs.map(inp => {
      const keyStr = JSON.stringify(inp.label || inp.id);
      const valExpr = ctx.resolveInput(node, { id: inp.id, type: 'expr', default: 'null' });
      return `${keyStr}: ${valExpr}`;
    });
    return `{ ${props.join(', ')} }`;
  },
  'New Object': () => `{}`,
  'Object Get Key': (node, ctx) => {
    const obj = ctx.resolveInput(node, { id: 'object', type: 'expr', default: '{}' });
    const key = ctx.resolveInput(node, { id: 'key', type: 'text', default: '""' });
    return `${obj}[${key}]`;
  },
  ...AE_DATA_EMITTERS,
};

export const MATH_OPS = {
  add: '+', sub: '-', mul: '*', div: '/', mod: '%',
};

export const COMPARE_OPS = {
  eq: '==', neq: '!=', lt: '<', lte: '<=', gt: '>', gte: '>=',
};

export const VEC_OPS = {
  add: '+', sub: '-', mul: '*', div: '/',
};
