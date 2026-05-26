import { existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { platform, homedir } from 'node:os';

const BUNDLE_ID = 'com.extendbluenode.panel';

function cepExtensionsDir() {
  if (platform() === 'win32') {
    const appData = process.env.APPDATA || resolve(homedir(), 'AppData/Roaming');
    return resolve(appData, 'Adobe/CEP/extensions');
  }
  return resolve(homedir(), 'Library/Application Support/Adobe/CEP/extensions');
}

const target = resolve(cepExtensionsDir(), BUNDLE_ID);

if (existsSync(target)) {
  rmSync(target, { recursive: true, force: true });
  console.log(`Removed ${target}`);
} else {
  console.log(`Nothing to remove at ${target}`);
}
