// Symlinks (or copies) the project into the Adobe CEP extensions folder
// so After Effects loads it as an unsigned dev panel.
//
// Requires PlayerDebugMode = 1 (run `npm run cep:enable-debug` once).
// On Windows, symlink creation needs either Developer Mode enabled or an
// elevated terminal. If symlinking fails, this script falls back to copying.

import { existsSync, lstatSync, mkdirSync, rmSync, symlinkSync, cpSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { platform, homedir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const BUNDLE_ID = 'com.extendbluenode.panel';

function cepExtensionsDir() {
  if (platform() === 'win32') {
    const appData = process.env.APPDATA || resolve(homedir(), 'AppData/Roaming');
    return resolve(appData, 'Adobe/CEP/extensions');
  }
  return resolve(homedir(), 'Library/Application Support/Adobe/CEP/extensions');
}

const target = resolve(cepExtensionsDir(), BUNDLE_ID);

if (existsSync(target) || lstatSync(target, { throwIfNoEntry: false })) {
  console.log(`Removing existing: ${target}`);
  rmSync(target, { recursive: true, force: true });
}

mkdirSync(dirname(target), { recursive: true });

try {
  symlinkSync(projectRoot, target, 'junction');
  console.log(`Linked  ${projectRoot}\n     -> ${target}`);
} catch (err) {
  console.warn(`Symlink failed (${err.code}); copying instead.`);
  cpSync(projectRoot, target, {
    recursive: true,
    filter: (src) => !/[\\/](node_modules|\.git)([\\/]|$)/.test(src),
  });
  console.log(`Copied  ${projectRoot}\n     -> ${target}`);
}

console.log('\nNext: launch After Effects -> Window > Extensions > Extend Blue Node');
