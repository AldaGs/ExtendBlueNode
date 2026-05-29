// Bridges the AE socket agent + system probes to the renderer. The
// renderer sees a small, fully-typed surface on window.ebnAgent /
// window.ebnSystem and can't touch Node.
//
// CommonJS (.cjs) because Electron's preload runs as CJS regardless of
// the renderer/main being ESM.

const { contextBridge, ipcRenderer } = require('electron');

const AGENT_PORT = Number(process.env.EBN_AGENT_PORT) || 7879;
const AGENT_HOST = '127.0.0.1';

contextBridge.exposeInMainWorld('ebnAgent', {
  available: true,
  host: AGENT_HOST,
  port: AGENT_PORT,
  run: (script) => ipcRenderer.invoke('ebn-agent:run', script),
  ping: () => ipcRenderer.invoke('ebn-agent:ping'),
});

contextBridge.exposeInMainWorld('ebnSystem', {
  available: true,
  platform: process.platform,
  aeStatus: () => ipcRenderer.invoke('ebn-system:ae-status'),
  launchAE: () => ipcRenderer.invoke('ebn-system:launch-ae'),
});
