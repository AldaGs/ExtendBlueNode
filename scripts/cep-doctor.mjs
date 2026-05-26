// Diagnose a CEP "Extend Blue Node panel won't load" report end-to-end.
//
//   node scripts/cep-doctor.mjs
//
// Checks (in order):
//   1. OS / Node sanity
//   2. PlayerDebugMode for CSXS 10–12 (Windows registry / macOS plist)
//   3. Extension folder presence + manifest readability
//   4. .debug file presence + dev port reachability (localhost:8088)

import { execSync, spawnSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir, platform } from 'node:os';
import net from 'node:net';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const BUNDLE_ID = 'com.extendbluenode.panel';

const PASS = '✓'; // ✓
const FAIL = '✗'; // ✗
const WARN = '!';
const colors = {
  ok:   (s) => `\x1b[32m${s}\x1b[0m`,
  bad:  (s) => `\x1b[31m${s}\x1b[0m`,
  warn: (s) => `\x1b[33m${s}\x1b[0m`,
  dim:  (s) => `\x1b[2m${s}\x1b[0m`,
};

function line(state, title, detail) {
  const tag =
    state === 'ok'   ? colors.ok(`${PASS}`) :
    state === 'bad'  ? colors.bad(`${FAIL}`) :
    /* warn */          colors.warn(`${WARN}`);
  console.log(`${tag} ${title}`);
  if (detail) console.log(`  ${colors.dim(detail)}`);
}

function header(title) {
  console.log('');
  console.log(colors.dim('─'.repeat(60)));
  console.log(`  ${title}`);
  console.log(colors.dim('─'.repeat(60)));
}

/* ---------- 1. OS / Node ---------- */
header('Environment');
line('ok', `Node ${process.version} on ${platform()} (${process.arch})`);
line('ok', `Project root: ${projectRoot}`);

/* ---------- 2. PlayerDebugMode ---------- */
header('PlayerDebugMode (unsigned panels can load)');

function checkWindowsDebugMode() {
  for (let v = 10; v <= 12; v += 1) {
    const key = `HKCU\\Software\\Adobe\\CSXS.${v}`;
    const res = spawnSync('reg', ['query', key, '/v', 'PlayerDebugMode'], {
      encoding: 'utf8',
    });
    if (res.status === 0 && /PlayerDebugMode\s+REG_\w+\s+1/.test(res.stdout)) {
      line('ok', `CSXS.${v}: PlayerDebugMode = 1`);
    } else {
      line('bad', `CSXS.${v}: not set`,
        'Run  npm run cep:enable-debug  to set this once per user.');
    }
  }
}

function checkMacDebugMode() {
  for (let v = 10; v <= 12; v += 1) {
    const plist = resolve(homedir(), `Library/Preferences/com.adobe.CSXS.${v}.plist`);
    if (!existsSync(plist)) {
      line('warn', `CSXS.${v}: plist missing`, plist);
      continue;
    }
    const res = spawnSync(
      'defaults',
      ['read', `com.adobe.CSXS.${v}`, 'PlayerDebugMode'],
      { encoding: 'utf8' },
    );
    if (res.status === 0 && res.stdout.trim() === '1') {
      line('ok', `CSXS.${v}: PlayerDebugMode = 1`);
    } else {
      line('bad', `CSXS.${v}: not set`,
        `Run:  defaults write com.adobe.CSXS.${v} PlayerDebugMode 1`);
    }
  }
}

if (platform() === 'win32') checkWindowsDebugMode();
else checkMacDebugMode();

/* ---------- 3. Extension folder ---------- */
header('Extension folder');

function cepExtensionsDir() {
  if (platform() === 'win32') {
    const appData = process.env.APPDATA || resolve(homedir(), 'AppData/Roaming');
    return resolve(appData, 'Adobe/CEP/extensions');
  }
  return resolve(homedir(), 'Library/Application Support/Adobe/CEP/extensions');
}

const target = resolve(cepExtensionsDir(), BUNDLE_ID);

if (!existsSync(target)) {
  line('bad', `Not installed: ${target}`,
    'Run  npm run cep:install  (or  npm run ae:preview  to build+install).');
} else {
  const stat = statSync(target);
  const kind = stat.isSymbolicLink?.() ? 'symlink' : (stat.isDirectory() ? 'directory' : 'unknown');
  line('ok', `Installed (${kind}): ${target}`);

  const manifest = resolve(target, 'CSXS/manifest.xml');
  if (!existsSync(manifest)) {
    line('bad', 'manifest.xml missing in CSXS/');
  } else {
    const xml = readFileSync(manifest, 'utf8');
    const bundleMatch = xml.match(/ExtensionBundleId="([^"]+)"/);
    const hostMatch = xml.match(/<Host[^>]+Name="([^"]+)"[^>]+Version="([^"]+)"/);
    line('ok', `manifest.xml found`,
      `bundleId=${bundleMatch?.[1] || '?'}  host=${hostMatch?.[1] || '?'} ${hostMatch?.[2] || ''}`);
  }

  const dist = resolve(target, 'dist/index.html');
  if (!existsSync(dist)) {
    line('bad', 'dist/index.html missing — panel will not load',
      'Run  npm run build  (or  npm run ae:preview).');
  } else {
    line('ok', 'dist/index.html present');
  }
}

/* ---------- 4. .debug + dev port ---------- */
header('.debug + remote debug port');

const debugFile = resolve(projectRoot, '.debug');
if (!existsSync(debugFile)) {
  line('warn', '.debug not found in project root',
    'OK if PlayerDebugMode is enough for you — required for Chromium devtools.');
} else {
  const xml = readFileSync(debugFile, 'utf8');
  const portMatch = xml.match(/Port="(\d+)"/);
  const port = portMatch ? parseInt(portMatch[1], 10) : null;
  line('ok', `.debug present (Port=${port ?? '?'})`);
  if (port) {
    await new Promise((resolveDone) => {
      const sock = net.createConnection({ host: '127.0.0.1', port }, () => {
        sock.end();
        line('ok', `localhost:${port} accepting connections`,
          `Open http://localhost:${port} in a browser to attach devtools.`);
        resolveDone();
      });
      sock.on('error', () => {
        line('warn', `localhost:${port} not listening`,
          'AE only opens the debug port while the panel is loaded.');
        resolveDone();
      });
      sock.setTimeout(800, () => {
        sock.destroy();
        line('warn', `localhost:${port} timeout`);
        resolveDone();
      });
    });
  }
}

console.log('');
console.log(colors.dim('Done.'));
