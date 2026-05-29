# Standalone Bridge — Electron app + AE socket agent

**Status:** shipped
**Replaces (optionally):** CEP panel transport (still kept as fallback)

## Why

EBN previously had to run *inside* After Effects as a CEP panel. That coupled
the editor's lifecycle to AE's, locked the UI into AE's window chrome, and
made shipping a "just install and go" build awkward. The bridge to AE was
already a single function (`runInHost` in `src/cep.js`), so we replaced the
transport rather than the app — the renderer, compiler, and node library
didn't move.

Closest reference: **Adobe ExtendScript Toolkit CC**, which was a separate
desktop IDE that pushed scripts into AE/PS over a side channel. EBN now
works the same way: standalone Electron window ↔ TCP socket ↔ resident
ExtendScript agent inside AE.

## Architecture

```
┌──────────────────────────┐   IPC    ┌────────────────────┐   TCP   ┌────────────────────────┐
│ Renderer (Vite + React)  │ ───────▶ │ Electron main.js   │ ──────▶ │ AE: EBN Agent panel    │
│  window.ebnAgent.run()   │          │  net.Socket client │         │  Socket.listen(7879)   │
│  window.ebnSystem.*      │          │  tasklist / spawn  │         │  → EBN.run / EBN.ping  │
└──────────────────────────┘          └────────────────────┘         └────────────────────────┘
                       ▲                                                          ▲
                       │ fallback: window.__adobe_cep__ (legacy CEP)              │
                       └──────────────────────────────────────────────────────────┘
```

### Transports, in priority order

1. **Socket agent** (`window.ebnAgent`). Preferred. Works in the standalone
   Electron app.
2. **CEP `evalScript`** (`window.__adobe_cep__`). Kept as a fallback so the
   existing CSXS panel install path keeps working unchanged during the
   transition.
3. **Offline** — neither bridge present (plain `npm run dev` in a browser).
   Renderer still functions, generated code is visible, inject reports
   `{ ok: false, offline: true }`.

`src/cep.js` is the single dispatcher; nothing else in the renderer knows
which transport ran.

## Wire protocol

Each request is one short-lived TCP connection on `127.0.0.1:7879`. Both
directions use the same framing:

```
8 ASCII hex chars   →  payload length in bytes (max 16 MiB)
N bytes of UTF-8    →  JSON
```

Requests:

```json
{ "op": "ping" }
{ "op": "run", "script": "<ExtendScript source>" }
```

Responses are whatever `EBN.ping` / `EBN.run` from `jsx/host.jsx` already
returned — same `{ ok, message, line, source, ... }` shape the CEP path
produced, so call sites in `App.jsx` didn't change.

Length-prefixing avoids guessing message boundaries on ExtendScript's
blocking `Socket` (no half-close, partial reads are common). One request
per connection keeps the agent's state-machine trivial.

## Pieces

### `jsx/agent.jsx` — dockable AE panel

- ScriptUI **Panel** (not Palette) so it docks like a native AE panel.
  Install path: `<AE>/Support Files/Scripts/ScriptUI Panels/EBN Agent.jsx`.
  Open from **Window ▸ EBN Agent**.
- **Auto-starts** listening on load (`AUTOSTART = true`).
- Uses `app.scheduleTask(..., 60ms, repeat=true)` to poll `Socket.poll()`
  on the AE main thread without freezing the UI.
- Reuses `EBN.run` / `EBN.ping` from `jsx/host.jsx` verbatim — the agent is
  pure transport.
- UI shows: status dot (green/red/grey), port, listener on/off, request
  count, last event timestamp + ok/err mark.

### `electron/main.js` — desktop shell

- Loads `http://localhost:5173` in dev, `dist/index.html` when packaged.
- IPC handlers:
  - `ebn-agent:run` / `ebn-agent:ping` → opens a `net.Socket` to the agent,
    speaks the length-prefix protocol, always resolves (no rejections).
    30 s timeout.
  - `ebn-system:ae-status` → `tasklist /FI "IMAGENAME eq AfterFX.exe"` on
    Windows. Returns `{ running, path, platform }`.
  - `ebn-system:launch-ae` → detached `spawn` of `AfterFX.exe`.
- AE discovery: `EBN_AE_PATH` env override → newest
  `Adobe After Effects YYYY\Support Files\AfterFX.exe` under
  `Program Files\Adobe` (and the x86 root). Cached after first hit.
- Windows-only for now. macOS (`pgrep` / `open -a`) is a future addition
  with no renderer changes.

### `electron/preload.cjs` — bridge surface

Exposes via `contextBridge`:

```js
window.ebnAgent = {
  available: true,
  host: '127.0.0.1',
  port: 7879,
  run(script), ping()
}
window.ebnSystem = {
  available: true,
  platform,
  aeStatus(), launchAE()
}
```

The renderer never touches Node APIs directly.

### `src/cep.js` — transport dispatcher

Public surface (unchanged for `runInHost` / `pingHost` / `isCep`):

| export          | behavior                                                              |
| --------------- | --------------------------------------------------------------------- |
| `runInHost`     | agent → CEP → offline                                                 |
| `pingHost`      | agent → CEP → offline                                                 |
| `isCep()`       | true if *any* bridge is reachable (renamed in spirit, kept for compat)|
| `bridgeInfo()`  | `{ kind: 'agent' \| 'cep', host?, port? }` or `null`                   |
| `aeStatus()`    | `{ running, path, available }` — safe stub in browser mode            |
| `launchAE()`    | `{ ok, path?, message? }`                                             |

### `src/components/ConnectionStatus.jsx` — header chips

Two compact chips, mounted next to **Compile & Inject**:

- **AE running / not running / browser** — from `ebnSystem.aeStatus()`.
- **Linked · :7879 / No link · :7879 / CEP linked / No bridge** — from
  `bridgeInfo()` + a live `pingHost()`.

Polls every 3 s, pauses on `document.visibilitychange` (no beating on the
agent when the window is hidden). Pulses the green dot only when *both*
AE is running and the socket ping succeeded — i.e. the link is actually
live, not just "feature exists." A **Launch AE** button appears inline
only when AE is detectable-but-not-running, and disappears in plain
browser mode where it can't work.

## Minimum refactor — what actually moved

| Area                | Before                          | After                                          |
| ------------------- | ------------------------------- | ---------------------------------------------- |
| Transport           | only `CSInterface.evalScript`   | socket agent first, CEP fallback, offline last |
| Editor host         | CEP panel inside AE             | Electron window (CEP still works)              |
| Bridge surface      | 1 file: `src/cep.js`            | same file, dispatcher only                     |
| AE-side script      | `jsx/host.jsx` (EBN.run/ping)   | unchanged; `jsx/agent.jsx` wraps it            |
| Renderer call sites | `runInHost`, `isCep` in App.jsx | unchanged                                      |

Three new files (`electron/main.js`, `electron/preload.cjs`,
`jsx/agent.jsx`, `src/components/ConnectionStatus.jsx`), one new dev
dependency (`electron`), one CSS block, and additive edits to `cep.js`
and `App.jsx`. Nothing was deleted; the CSXS install path still works.

## Running it

```bash
npm install                # picks up electron
npm run dev                # terminal 1 — Vite at :5173
npm run electron:dev       # terminal 2 — standalone window

# Inside AE (one-time install for docking)
# Copy jsx/agent.jsx → <AE>/Support Files/Scripts/ScriptUI Panels/
# Then: Window ▸ EBN Agent  (auto-starts the listener)
```

Env overrides:

- `EBN_AGENT_PORT` — change the TCP port (must match the agent panel's port field).
- `EBN_AE_PATH`    — point at `AfterFX.exe` directly if discovery misses it.
- `EBN_DEV_URL`    — override the Vite URL Electron loads in dev.

## Known limits / follow-ups

- Windows-only AE detection and discovery; macOS branch is a small addition.
- 60 ms poll interval inside AE bounds round-trip latency. Fine for
  Compile & Inject, not a debugger REPL — tunable in `agent.jsx`.
- No authentication on the listener. Bound to `127.0.0.1` only, which is
  adequate locally. If we ever expose this off-host, add a shared-secret
  handshake before the length header.
- One request per TCP connection. Throughput is fine; persistent
  connections are a future option if we add a live REPL.
