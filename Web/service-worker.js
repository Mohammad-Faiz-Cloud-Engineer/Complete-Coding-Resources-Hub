const CACHE_VERSION = 'v1.1.0';
const APP_CACHE = `coding-hub-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;
const OFFLINE_DOCUMENT = './index.html';

const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './favicon.svg',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

function isCacheableResponse(response) {
  return Boolean(response && response.ok && response.type === 'basic');
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => (
            (cacheName.startsWith('coding-hub-') && cacheName !== APP_CACHE) ||
            (cacheName.startsWith('runtime-') && cacheName !== RUNTIME_CACHE)
          ))
          .map((cacheName) => caches.delete(cacheName))
      ))
      .then(() => self.clients.claim())
  );
});

async function cacheResponse(cacheName, request, response) {
  if (!isCacheableResponse(response)) {
    return response;
  }

  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
  return response;
}

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    return cacheResponse(RUNTIME_CACHE, request, networkResponse);
  } catch {
    return new Response('Offline', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    return cacheResponse(RUNTIME_CACHE, request, networkResponse);
  } catch {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const offlineFallback = await caches.match(OFFLINE_DOCUMENT);
    if (offlineFallback) {
      return offlineFallback;
    }

    return new Response('Offline', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(cacheFirst(request));
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    event.waitUntil(self.skipWaiting());
    return;
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => caches.delete(cacheName))
      ))
    );
  }
});
