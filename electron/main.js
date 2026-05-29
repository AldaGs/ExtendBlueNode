// Electron main process for Extend Blue Node.
//
// Hosts the Vite build (or dev server) in a BrowserWindow and bridges the
// renderer to the AE agent over a localhost TCP socket using the same
// 8-hex-length-prefix protocol that jsx/agent.jsx speaks.

import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import net from 'node:net';
import { spawn, execFile } from 'node:child_process';
import { promises as fsp } from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DEV_URL = process.env.EBN_DEV_URL || 'http://localhost:5173';
const AGENT_HOST = '127.0.0.1';
const AGENT_PORT = Number(process.env.EBN_AGENT_PORT) || 7879;
const AGENT_TIMEOUT_MS = 30_000;

function pad8(n) {
  return n.toString(16).padStart(8, '0');
}

// One request per connection; resolves with the JSON string the agent
// returned (the caller parses). Always resolves — errors come back as a
// well-formed { ok:false, message } payload so the renderer has one path.
function agentRequest(op, script) {
  return new Promise((resolve) => {
    const payload = Buffer.from(JSON.stringify({ op, script }), 'utf8');
    const header = Buffer.from(pad8(payload.length), 'ascii');
    const sock = new net.Socket();
    let buf = Buffer.alloc(0);
    let expected = null;
    let settled = false;

    const done = (obj) => {
      if (settled) return;
      settled = true;
      try { sock.destroy(); } catch {}
      resolve(obj);
    };

    sock.setTimeout(AGENT_TIMEOUT_MS, () => {
      done({ ok: false, message: 'agent: timeout (is the AE agent panel running?)' });
    });
    sock.on('error', (e) => {
      done({
        ok: false,
        offline: true,
        message: `agent: ${e.code || e.message}. Open AE and run jsx/agent.jsx ▸ Start.`,
      });
    });
    sock.on('data', (chunk) => {
      buf = Buffer.concat([buf, chunk]);
      if (expected === null && buf.length >= 8) {
        expected = parseInt(buf.subarray(0, 8).toString('ascii'), 16);
        buf = buf.subarray(8);
      }
      if (expected !== null && buf.length >= expected) {
        const body = buf.subarray(0, expected).toString('utf8');
        try { done(JSON.parse(body)); }
        catch { done({ ok: false, message: 'agent: non-JSON response', raw: body }); }
      }
    });
    sock.on('close', () => {
      if (!settled) done({ ok: false, message: 'agent: connection closed before response' });
    });

    sock.connect(AGENT_PORT, AGENT_HOST, () => {
      sock.write(header);
      sock.write(payload);
    });
  });
}

ipcMain.handle('ebn-agent:run', (_e, script) => agentRequest('run', String(script ?? '')));
ipcMain.handle('ebn-agent:ping', () => agentRequest('ping'));

// ---------- After Effects process detection / launch ----------
//
// All Windows-first for now (the original CEP install path was too). Mac
// support can be added with `pgrep`/`open -a` later without touching the
// renderer surface.

const AE_EXE = 'AfterFX.exe';

function isWindows() {
  return process.platform === 'win32';
}

function tasklistRunning(exeName) {
  return new Promise((resolve) => {
    if (!isWindows()) return resolve(false);
    execFile(
      'tasklist',
      ['/FI', `IMAGENAME eq ${exeName}`, '/NH', '/FO', 'CSV'],
      { windowsHide: true },
      (err, stdout) => {
        if (err) return resolve(false);
        resolve(stdout.toLowerCase().includes(exeName.toLowerCase()));
      },
    );
  });
}

// Cache the discovered AE path between calls — scanning Program Files on
// every poll would be wasteful.
let cachedAePath = null;

async function findAePath() {
  if (cachedAePath) return cachedAePath;
  if (process.env.EBN_AE_PATH) {
    cachedAePath = process.env.EBN_AE_PATH;
    return cachedAePath;
  }
  if (!isWindows()) return null;

  const roots = [
    process.env['ProgramFiles'],
    process.env['ProgramFiles(x86)'],
  ].filter(Boolean).map((r) => path.join(r, 'Adobe'));

  for (const root of roots) {
    let entries;
    try { entries = await fsp.readdir(root); } catch { continue; }
    // Newest install wins — sort descending so "Adobe After Effects 2025"
    // beats "...2024".
    const aeDirs = entries
      .filter((d) => /^Adobe After Effects /i.test(d))
      .sort()
      .reverse();
    for (const d of aeDirs) {
      const candidate = path.join(root, d, 'Support Files', AE_EXE);
      try {
        await fsp.access(candidate);
        cachedAePath = candidate;
        return cachedAePath;
      } catch {}
    }
  }
  return null;
}

ipcMain.handle('ebn-system:ae-status', async () => {
  const [running, exePath] = await Promise.all([tasklistRunning(AE_EXE), findAePath()]);
  return { running, path: exePath, platform: process.platform };
});

ipcMain.handle('ebn-system:launch-ae', async () => {
  const exePath = await findAePath();
  if (!exePath) {
    return {
      ok: false,
      message: 'Could not find AfterFX.exe. Set EBN_AE_PATH to override.',
    };
  }
  try {
    const child = spawn(exePath, [], { detached: true, stdio: 'ignore' });
    child.unref();
    return { ok: true, path: exePath };
  } catch (e) {
    return { ok: false, message: `launch failed: ${e.message}` };
  }
});

async function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const isDev = !app.isPackaged;
  if (isDev) {
    await win.loadURL(DEV_URL);
  } else {
    await win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  }
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
