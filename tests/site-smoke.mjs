import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const webDir = path.join(rootDir, 'Web');

function read(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), 'utf8');
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function getLocalAssetPaths(html) {
  const matches = [...html.matchAll(/(?:href|src)="([^"]+)"/g)];
  return matches
    .map(([, assetPath]) => assetPath)
    .filter((assetPath) => assetPath && !assetPath.startsWith('http') && !assetPath.startsWith('data:') && !assetPath.startsWith('#'));
}

const indexHtml = read('Web/index.html');
const manifestJson = JSON.parse(read('Web/manifest.json'));
const serviceWorker = read('Web/service-worker.js');
const scriptJs = read('Web/script.js');

const requiredFiles = [
  'index.html',
  'styles.css',
  'script.js',
  'service-worker.js',
  'manifest.json',
  'favicon.svg',
  'icon-192.png',
  'icon-512.png'
];

requiredFiles.forEach((fileName) => {
  assert(fs.existsSync(path.join(webDir, fileName)), `Missing required web asset: ${fileName}`);
});

getLocalAssetPaths(indexHtml).forEach((assetPath) => {
  assert(fs.existsSync(path.join(webDir, assetPath)), `HTML references missing local asset: ${assetPath}`);
});

manifestJson.icons.forEach((icon) => {
  assert(fs.existsSync(path.join(webDir, icon.src)), `Manifest references missing icon: ${icon.src}`);
});

assert(!indexHtml.includes('user-scalable=no'), 'Viewport must allow user scaling for accessibility.');
assert(!/<script[^>]+src="https?:\/\//.test(indexHtml), 'Production HTML should not depend on external scripts.');
assert(indexHtml.includes('Content-Security-Policy'), 'HTML must define a Content Security Policy.');
assert(!/script-src[^"]*'unsafe-inline'/.test(indexHtml), 'CSP must not allow unsafe inline scripts.');

assert(!scriptJs.includes('contextmenu'), 'Script should not disable right-click.');
assert(!scriptJs.includes('Ctrl+Shift+I'), 'Script should not block developer shortcuts.');
assert(!scriptJs.includes('touchmove'), 'Script should not globally block touchmove events.');

assert(serviceWorker.includes('./icon-192.png'), 'Service worker must cache the 192px app icon.');
assert(serviceWorker.includes('./icon-512.png'), 'Service worker must cache the 512px app icon.');

assert(manifestJson.shortcuts.every((shortcut) => !shortcut.url.startsWith('/')), 'Manifest shortcut URLs must stay relative for GitHub Pages deployments.');

console.log('site-smoke: ok');
