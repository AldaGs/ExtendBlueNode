// Intermediate Representation for EBN's compiler.
//
// A graph is lowered to an array of IR statements first; a separate
// printer turns that array into ExtendScript text. This split lets us
// add control-flow nodes (if/for) without touching string templates,
// and gives the test suite a clean target.
//
// All identifiers in IR are bare JS expression text — the IR is not
// AST-typed. Keeping it stringly-typed at this stage avoids a JS AST
// dependency; we can swap in a real AST when the value justifies it.

/* ----------------------------- constructors ----------------------------- */

export const ir = {
  comment: (text) => ({ kind: 'comment', text }),
  blank:   () => ({ kind: 'blank' }),
  varDecl: (name, expr) => ({ kind: 'varDecl', name, expr }),
  assign:  (target, expr) => ({ kind: 'assign', target, expr }),
  raw:     (line) => ({ kind: 'raw', line }),
  throwIfNot: (cond, message) => ({ kind: 'throwIfNot', cond, message }),
  ifElse:  (cond, thenStmts, elseStmts = []) => ({
    kind: 'ifElse', cond, then: thenStmts, else: elseStmts,
  }),
  forIn:   (init, cond, step, body) => ({
    kind: 'forIn', init, cond, step, body,
  }),
  whileLoop: (cond, body) => ({ kind: 'whileLoop', cond, body }),
  // `target = function(params) { body };` — e.g. ScriptUI event callbacks.
  funcAssign: (target, params, body) => ({
    kind: 'funcAssign', target, params: params || [], body,
  }),
  // `function name(params) { body }` — a hoisted named declaration, e.g. the
  // recursive helper emitted by "Walk Property Tree".
  funcDecl: (name, params, body) => ({
    kind: 'funcDecl', name, params: params || [], body,
  }),
  tryCatch: (body, catchBody, errVar = 'error') => ({
    kind: 'tryCatch', body, catchBody, errVar,
  }),
};

/* ----------------------------- printer ----------------------------- */
//
// The printer is line-oriented: every statement lowers to an array of
// { text, nodeId } records. This lets us build a line -> nodeId map for error
// traceback (a runtime error on line N highlights the originating node) while
// keeping printIR's string output byte-identical to the previous joiner.
//
// A statement carries `nodeId` when the compiler tagged it during the walk
// (see astCompiler). Container statements pass their own nodeId down as the
// fallback for nested lines that weren't individually tagged.

const INDENT = '  ';

function indent(n) {
  return INDENT.repeat(Math.max(0, n));
}

// Returns an array of { text, nodeId }. `inherited` is the fallback nodeId for
// this statement and its braces/nested-but-untagged lines.
function linesOf(s, depth, inherited) {
  const id = s.nodeId != null ? s.nodeId : (inherited != null ? inherited : null);
  const pad = indent(depth);
  const one = (text, nodeId = id) => [{ text, nodeId }];

  switch (s.kind) {
    case 'blank':
      return [{ text: '', nodeId: null }];
    case 'comment':
      return one(`${pad}// ${s.text}`);
    case 'varDecl':
      return one(`${pad}var ${s.name} = ${s.expr};`);
    case 'assign':
      return one(`${pad}${s.target} = ${s.expr};`);
    case 'raw': {
      // raw may carry embedded newlines (multi-line helpers / polyfill). Split
      // so the line map covers each physical line; only the first is indented,
      // matching the previous `${pad}${s.line}` behavior when re-joined.
      const parts = String(s.line).split('\n');
      return parts.map((t, i) => ({ text: i === 0 ? `${pad}${t}` : t, nodeId: id }));
    }
    case 'throwIfNot':
      return one(`${pad}if (!(${s.cond})) throw new Error(${JSON.stringify(s.message)});`);
    case 'ifElse': {
      const out = [{ text: `${pad}if (${s.cond}) {`, nodeId: id }];
      out.push(...linesOfList(s.then, depth + 1, id));
      if (s.else && s.else.length) {
        out.push({ text: `${pad}} else {`, nodeId: id });
        out.push(...linesOfList(s.else, depth + 1, id));
      }
      out.push({ text: `${pad}}`, nodeId: id });
      return out;
    }
    case 'forIn': {
      const out = [{ text: `${pad}for (${s.init}; ${s.cond}; ${s.step}) {`, nodeId: id }];
      out.push(...linesOfList(s.body, depth + 1, id));
      out.push({ text: `${pad}}`, nodeId: id });
      return out;
    }
    case 'whileLoop': {
      const out = [{ text: `${pad}while (${s.cond}) {`, nodeId: id }];
      out.push(...linesOfList(s.body, depth + 1, id));
      out.push({ text: `${pad}}`, nodeId: id });
      return out;
    }
    case 'funcAssign': {
      const out = [{ text: `${pad}${s.target} = function (${s.params.join(', ')}) {`, nodeId: id }];
      out.push(...linesOfList(s.body, depth + 1, id));
      out.push({ text: `${pad}};`, nodeId: id });
      return out;
    }
    case 'funcDecl': {
      const out = [{ text: `${pad}function ${s.name}(${s.params.join(', ')}) {`, nodeId: id }];
      out.push(...linesOfList(s.body, depth + 1, id));
      out.push({ text: `${pad}}`, nodeId: id });
      return out;
    }
    case 'tryCatch': {
      const out = [{ text: `${pad}try {`, nodeId: id }];
      out.push(...linesOfList(s.body, depth + 1, id));
      out.push({ text: `${pad}} catch (${s.errVar}) {`, nodeId: id });
      out.push(...linesOfList(s.catchBody, depth + 1, id));
      out.push({ text: `${pad}}`, nodeId: id });
      return out;
    }
    default:
      return one(`${pad}// unknown IR kind: ${s.kind}`);
  }
}

// Lower a statement list to lines. An empty body contributes no lines (matches
// the previous printer, which filtered an empty sub-block out entirely).
function linesOfList(stmts, depth, inherited) {
  const out = [];
  for (const s of stmts) out.push(...linesOf(s, depth, inherited));
  return out;
}

export function printIR(stmts, depth = 0) {
  return linesOfList(stmts, depth, null).map((l) => l.text).join('\n');
}

// Like printIR, but also returns a 1-based { lineNumber: nodeId } map for every
// line that traces back to a node. `lineOffset` shifts the numbers when the
// code is later prefixed (e.g. by the JSON polyfill).
export function printIRWithMap(stmts, lineOffset = 0) {
  const lines = linesOfList(stmts, 0, null);
  const lineMap = {};
  lines.forEach((l, i) => {
    if (l.nodeId != null) lineMap[i + 1 + lineOffset] = l.nodeId;
  });
  return { code: lines.map((l) => l.text).join('\n'), lineMap };
}
