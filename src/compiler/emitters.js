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

  'Select Layer by ID': (node, ctx) => {
    const layerId = ctx.resolveInput(node, { id: 'layer_id', type: 'number' });
    return [
      ir.varDecl('targetLayer', `activeComp.layerByID(${layerId})`),
      ir.throwIfNot('targetLayer', 'Layer not found.'),
    ];
  },

  'Select Layer by Name': (node, ctx) => {
    const name = ctx.resolveInput(node, { id: 'layer_name', type: 'text' });
    return [
      ir.varDecl('targetLayer', `activeComp.layer(${name})`),
      ir.throwIfNot('targetLayer', 'Layer not found.'),
    ];
  },

  'Select Layer by Index': (node, ctx) => {
    const idx = ctx.resolveInput(node, { id: 'layer_index', type: 'number' });
    return [
      ir.varDecl('targetLayer', `activeComp.layer(${idx})`),
      ir.throwIfNot('targetLayer', 'Layer not found.'),
    ];
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

  'Set Local Variable': (node, ctx) => {
    // The identifier lives in data.variableName (edited via the
    // Properties panel) so it shows up wherever the IR talks about
    // variable names. Fall back to a stable per-node id-derived name
    // when blank so we never emit an invalid `var = …;`.
    const name = ctx.varName(node);
    const expr = ctx.resolveInput(node, { id: 'value', type: 'expr' });
    return [ir.varDecl(name, expr)];
  },

  // Pure entry point — emits no code, just anchors the exec chain.
  'Start': () => [],

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

// Nodes whose emitter takes ownership of their own downstream walking —
// the orchestrator must NOT auto-recurse along their exec_out edges.
export const SELF_BRANCHING_TYPES = new Set(['if', 'forEachSelected']);

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

  // Data-side ebnNode dispatch — keyed by label so these nodes can use
  // the generic shell and still participate in expression composition.
  if (node.type === 'ebnNode') {
    const fn = EBN_DATA_EMITTERS[node.data?.label];
    if (fn) return fn(node, ctx, outputHandle);
  }

  return null;
}

/* ----------------------------- data-side label dispatch ----------------------------- */

const EBN_DATA_EMITTERS = {
  // Expose execution variables to the data graph when explicitly wired
  'Get Active Comp': () => 'activeComp',
  // The global `app` object — wire into any AE getter's `Application` input.
  'Get Application': () => 'app',
  'Select Layer by ID': () => 'targetLayer',
  'Select Layer by Name': () => 'targetLayer',
  'Select Layer by Index': () => 'targetLayer',
  'Set Local Variable': (node, ctx) => ctx.varName(node),

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

  'Vector 2 Array': (node, ctx) => {
    const x = ctx.resolveInput(node, { id: 'x', type: 'number' });
    const y = ctx.resolveInput(node, { id: 'y', type: 'number' });
    return `[${x}, ${y}]`;
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
