// Runtime helpers the compiler can hoist into the generated script.
// Each one is keyed by a stable name so emitters can request it via
// ctx.useHelper(name); the orchestrator emits exactly one copy at the
// top of the try-block if any node referenced it.
//
// Helpers must be ES3-compatible (no arrow fns, no const/let, no
// Array.prototype.map / forEach) so they run under After Effects'
// ExtendScript.

export const HELPERS = {
  ebnVec:
    'function ebnVec(a, b, op) {\n' +
    '    var aArr = a && typeof a === "object" && a.length !== undefined;\n' +
    '    var bArr = b && typeof b === "object" && b.length !== undefined;\n' +
    '    if (!aArr && !bArr) {\n' +
    '      if (op === "+") return a + b;\n' +
    '      if (op === "-") return a - b;\n' +
    '      if (op === "*") return a * b;\n' +
    '      if (op === "/") return a / b;\n' +
    '      return 0;\n' +
    '    }\n' +
    '    var n = aArr && bArr ? Math.max(a.length, b.length) : (aArr ? a.length : b.length);\n' +
    '    var r = [];\n' +
    '    for (var i = 0; i < n; i++) {\n' +
    '      var ai = aArr ? (a[i] === undefined ? 0 : a[i]) : a;\n' +
    '      var bi = bArr ? (b[i] === undefined ? 0 : b[i]) : b;\n' +
    '      if (op === "+") r.push(ai + bi);\n' +
    '      else if (op === "-") r.push(ai - bi);\n' +
    '      else if (op === "*") r.push(ai * bi);\n' +
    '      else if (op === "/") r.push(ai / bi);\n' +
    '    }\n' +
    '    return r;\n' +
    '  }',
  ebnHexToRgb:
    'function ebnHexToRgb(h, scale, includeAlpha) {\n' +
    '    if (typeof h !== "string") return includeAlpha ? [0, 0, 0, 1] : [0, 0, 0];\n' +
    '    if (h.charAt(0) === "#") h = h.substring(1);\n' +
    '    var r = parseInt(h.substring(0, 2), 16) / scale;\n' +
    '    var g = parseInt(h.substring(2, 4), 16) / scale;\n' +
    '    var b = parseInt(h.substring(4, 6), 16) / scale;\n' +
    '    return includeAlpha ? [r, g, b, 1] : [r, g, b];\n' +
    '  }',
};
