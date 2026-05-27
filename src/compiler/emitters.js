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
//   walkBranch(nodeId, handleId) -> IRStmt[]  // DFS following an exec_out

import { ir } from './ir';

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

  'Set Property': (node, ctx) => {
    const prop  = ctx.resolveInput(node, { id: 'property', type: 'text' });
    const value = ctx.resolveInput(node, { id: 'value',    type: 'number' });
    return [ir.raw(`targetLayer.property(${prop}).setValue(${value});`)];
  },

  // Legacy fixture from the original Phase 5 spec.
  'Set Opacity to 50%': () => [
    ir.raw('targetLayer.property("ADBE Opacity").setValue(50);'),
  ],
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
      // 'expr' port type means: use the inline string verbatim (so the
      // user can write `myVar > 5`) and fall through unchanged when a
      // Compare node is wired in.
      const cond = ctx.resolveInput(n, { id: 'cond', type: 'expr' });
      const thenBody = ctx.walkBranch(n.id, 'exec_then');
      const elseBody = ctx.walkBranch(n.id, 'exec_else');
      return [ir.ifElse(cond, thenBody, elseBody)];
    };
  }

  return () => [
    ir.comment(`WARNING: no emitter for node type '${node.type}'`),
  ];
}

/* ----------------------------- control-flow flags ----------------------------- */

// Nodes whose emitter takes ownership of their own downstream walking —
// the orchestrator must NOT auto-recurse along their exec_out edges.
export const SELF_BRANCHING_TYPES = new Set(['if']);

/* ----------------------------- data-side expression resolution ----------------------------- */

// Inlined when a data-side node is upstream of a wired input. Returns
// a JS expression string. Recursive: math taking math taking integer
// composes naturally.
export function resolveExpressionFor(node, ctx) {
  if (!node) return null;

  if (node.type === 'getGlobal') {
    const g = ctx.globals.find((x) => x.id === node.data?.globalId);
    return g ? ctx.globalName(g) : 'null';
  }

  if (node.type === 'integer' || node.type === 'string') {
    return ctx.varName(node);
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

  return null;
}

export const MATH_OPS = {
  add: '+', sub: '-', mul: '*', div: '/', mod: '%',
};

export const COMPARE_OPS = {
  eq: '==', neq: '!=', lt: '<', lte: '<=', gt: '>', gte: '>=',
};
