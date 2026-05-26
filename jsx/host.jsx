// ExtendScript host bridge for Extend Blue Node.
//
// Exposes EBN.run(scriptString) which evals the generated code inside
// After Effects and returns a JSON string the panel can parse. Errors
// are caught and surfaced with line + source when AE provides them.

#target aftereffects

var EBN = (function () {
    function _stringify(obj) {
        if (typeof JSON !== 'undefined' && JSON && JSON.stringify) {
            return JSON.stringify(obj);
        }
        // ES3 fallback for ancient ExtendScript runtimes.
        var parts = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                var v = obj[k];
                if (v === undefined) continue;
                var safe;
                if (v === null) {
                    safe = 'null';
                } else if (typeof v === 'number' || typeof v === 'boolean') {
                    safe = String(v);
                } else {
                    safe = '"' + String(v)
                        .replace(/\\/g, '\\\\')
                        .replace(/"/g, '\\"')
                        .replace(/[\r\n]/g, ' ') + '"';
                }
                parts.push('"' + k + '":' + safe);
            }
        }
        return '{' + parts.join(',') + '}';
    }

    function run(script) {
        try {
            eval(String(script));
            return _stringify({ ok: true });
        } catch (err) {
            return _stringify({
                ok: false,
                message: String(err && (err.message || err)) || 'Unknown error',
                line: err && err.line,
                source: err && err.source,
                fileName: err && err.fileName
            });
        }
    }

    function ping() {
        var version = '';
        try { version = app.version; } catch (e) {}
        return _stringify({ ok: true, version: version });
    }

    return { run: run, ping: ping };
})();

// Convenience flat aliases.
function EBN_run(script) { return EBN.run(script); }
function EBN_ping()       { return EBN.ping(); }
