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

const INDENT = '  ';

function indent(n) {
  return INDENT.repeat(Math.max(0, n));
}

function printOne(s, depth) {
  switch (s.kind) {
    case 'blank':
      return '';
    case 'comment':
      return `${indent(depth)}// ${s.text}`;
    case 'varDecl':
      return `${indent(depth)}var ${s.name} = ${s.expr};`;
    case 'assign':
      return `${indent(depth)}${s.target} = ${s.expr};`;
    case 'raw':
      return `${indent(depth)}${s.line}`;
    case 'throwIfNot':
      return `${indent(depth)}if (!(${s.cond})) throw new Error(${JSON.stringify(s.message)});`;
    case 'ifElse': {
      const lines = [`${indent(depth)}if (${s.cond}) {`];
      lines.push(printIR(s.then, depth + 1));
      if (s.else && s.else.length) {
        lines.push(`${indent(depth)}} else {`);
        lines.push(printIR(s.else, depth + 1));
      }
      lines.push(`${indent(depth)}}`);
      return lines.filter((l) => l !== '').join('\n');
    }
    case 'forIn': {
      const head = `${indent(depth)}for (${s.init}; ${s.cond}; ${s.step}) {`;
      return [head, printIR(s.body, depth + 1), `${indent(depth)}}`]
        .filter((l) => l !== '')
        .join('\n');
    }
    case 'whileLoop': {
      const head = `${indent(depth)}while (${s.cond}) {`;
      return [head, printIR(s.body, depth + 1), `${indent(depth)}}`]
        .filter((l) => l !== '')
        .join('\n');
    }
    case 'funcAssign': {
      const head = `${indent(depth)}${s.target} = function (${s.params.join(', ')}) {`;
      return [head, printIR(s.body, depth + 1), `${indent(depth)}};`]
        .filter((l) => l !== '')
        .join('\n');
    }
    case 'funcDecl': {
      const head = `${indent(depth)}function ${s.name}(${s.params.join(', ')}) {`;
      return [head, printIR(s.body, depth + 1), `${indent(depth)}}`]
        .filter((l) => l !== '')
        .join('\n');
    }
    case 'tryCatch': {
      const lines = [
        `${indent(depth)}try {`,
        printIR(s.body, depth + 1),
        `${indent(depth)}} catch (${s.errVar}) {`,
        printIR(s.catchBody, depth + 1),
        `${indent(depth)}}`,
      ];
      return lines.filter((l) => l !== '').join('\n');
    }
    default:
      return `${indent(depth)}// unknown IR kind: ${s.kind}`;
  }
}

export function printIR(stmts, depth = 0) {
  return stmts.map((s) => printOne(s, depth)).join('\n');
}
