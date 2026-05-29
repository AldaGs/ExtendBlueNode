// Host bridge for Extend Blue Node.
//
// Two transports, tried in order:
//   1. Electron + AE socket agent (jsx/agent.jsx) — exposed by preload as
//      window.ebnAgent. Preferred: works in a standalone window, lets us
//      ship outside CEP.
//   2. Legacy CEP panel — window.__adobe_cep__ + CSInterface.evalScript,
//      kept as a fallback for users still running the extension inside AE.
//
// Outside both (plain browser dev), runInHost short-circuits with an
// `offline:true` result so the UI can still render generated code.

let csiInstance = null;

function getAgent() {
  return typeof window !== 'undefined' && window.ebnAgent && window.ebnAgent.available
    ? window.ebnAgent
    : null;
}

function getSystem() {
  return typeof window !== 'undefined' && window.ebnSystem && window.ebnSystem.available
    ? window.ebnSystem
    : null;
}

// Renderer-facing metadata about the active transport. Used by the
// header status chip to show e.g. "agent · :7879". null when neither
// transport is reachable.
export function bridgeInfo() {
  const agent = getAgent();
  if (agent) return { kind: 'agent', host: agent.host, port: agent.port };
  if (hasCep()) return { kind: 'cep' };
  return null;
}

// System probes (Electron-only). Resolve to a safe stub in plain browser
// mode so callers don't have to feature-detect.
export async function aeStatus() {
  const sys = getSystem();
  if (!sys) return { running: false, path: null, available: false };
  const s = await sys.aeStatus();
  return { ...s, available: true };
}

export async function launchAE() {
  const sys = getSystem();
  if (!sys) return { ok: false, message: 'Launching AE requires the desktop app.' };
  return sys.launchAE();
}

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

function hasCep() {
  return typeof window !== 'undefined' && !!window.__adobe_cep__;
}

// True when *any* host bridge (socket agent or CEP) is reachable from the
// renderer. Kept as `isCep` for backwards compatibility with call sites
// that predate the agent transport.
export function isCep() {
  return !!getAgent() || hasCep();
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

function offline(message) {
  return {
    ok: false,
    offline: true,
    message:
      message ||
      'No After Effects bridge available. Launch AE and run jsx/agent.jsx ▸ Start, or open this panel inside AE via CEP.',
  };
}

function runViaCep(script) {
  return new Promise((resolve) => {
    const ci = getCsi();
    if (!ci) {
      resolve({ ok: false, message: 'CSInterface failed to initialize in this CEP context.' });
      return;
    }
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
          resolve({ ok: false, message: 'Host returned a non-JSON response.', raw: String(raw) });
        }
      });
    } catch (e) {
      resolve({ ok: false, message: `evalScript threw: ${e?.message || String(e)}` });
    }
  });
}

// Evaluate `EBN.run(<script>)` in the After Effects host context.
// Always resolves (never rejects); the result shape is:
//   { ok: boolean, message?, line?, source?, offline?, raw? }
export async function runInHost(script) {
  const agent = getAgent();
  if (agent) return agent.run(script);
  if (hasCep()) return runViaCep(script);
  return offline();
}

// Probes the host. Useful for the cep:doctor surface in-app later.
export async function pingHost() {
  const agent = getAgent();
  if (agent) return agent.ping();
  if (!hasCep()) return offline();
  const ci = getCsi();
  if (!ci) return { ok: false, message: 'no CSInterface' };
  return new Promise((resolve) => {
    ci.evalScript('EBN.ping()', (raw) => {
      try { resolve(JSON.parse(String(raw))); }
      catch { resolve({ ok: false, raw: String(raw) }); }
    });
  });
}
