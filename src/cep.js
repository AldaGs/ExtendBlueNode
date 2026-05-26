// Thin wrapper around Adobe's CSInterface.
//
// CSInterface.js is loaded by a <script> tag in index.html (the file
// itself lives in public/ so it ships in dist/). When the panel runs
// outside CEP (browser dev), `window.__adobe_cep__` is missing and
// runInHost short-circuits with a clear "offline" result so the UI
// can still show a meaningful status.

let csiInstance = null;

function getCsi() {
  if (csiInstance) return csiInstance;
  if (typeof window === 'undefined') return null;
  const C = window.CSInterface;
  if (!C) return null;
  try {
    csiInstance = new C();
    return csiInstance;
  } catch {
    return null;
  }
}

export function isCep() {
  return typeof window !== 'undefined' && !!window.__adobe_cep__;
}

export function hostInfo() {
  const ci = getCsi();
  if (!ci) return null;
  try {
    return ci.getHostEnvironment();
  } catch {
    return null;
  }
}

// Evaluate `EBN.run(<script>)` in the After Effects host context.
// Always resolves (never rejects); the result shape is:
//   { ok: boolean, message?, line?, source?, offline?, raw? }
export function runInHost(script) {
  return new Promise((resolve) => {
    if (!isCep()) {
      resolve({
        ok: false,
        offline: true,
        message:
          'Not running inside After Effects. Generated script is ready, but the CEP bridge is unavailable in browser dev mode.',
      });
      return;
    }
    const ci = getCsi();
    if (!ci) {
      resolve({
        ok: false,
        message: 'CSInterface failed to initialize in this CEP context.',
      });
      return;
    }
    // ExtendScript receives the script as a single JSON-encoded string
    // arg, so quoting + newlines + unicode round-trip cleanly.
    const payload = `EBN.run(${JSON.stringify(script)})`;
    try {
      ci.evalScript(payload, (raw) => {
        if (raw === 'EvalScript error.') {
          resolve({
            ok: false,
            message:
              'evalScript reported a host-side error. Check that jsx/host.jsx loaded (manifest ScriptPath).',
          });
          return;
        }
        try {
          resolve(JSON.parse(String(raw)));
        } catch {
          resolve({
            ok: false,
            message: 'Host returned a non-JSON response.',
            raw: String(raw),
          });
        }
      });
    } catch (e) {
      resolve({
        ok: false,
        message: `evalScript threw: ${e?.message || String(e)}`,
      });
    }
  });
}

// Probes the host. Useful for the cep:doctor surface in-app later.
export function pingHost() {
  return new Promise((resolve) => {
    if (!isCep()) {
      resolve({ ok: false, offline: true });
      return;
    }
    const ci = getCsi();
    if (!ci) {
      resolve({ ok: false, message: 'no CSInterface' });
      return;
    }
    ci.evalScript('EBN.ping()', (raw) => {
      try {
        resolve(JSON.parse(String(raw)));
      } catch {
        resolve({ ok: false, raw: String(raw) });
      }
    });
  });
}
