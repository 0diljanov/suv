// AquaFlow Service Worker — Cache-first для оболочки, network-first для CDN
const VERSION = 'aquaflow-v2';
const CORE = [
  './',
  './index.html',
  './app.html',
  './manifest.webmanifest',
  './assets/css/style.css',
  './assets/js/i18n.js',
  './assets/js/data.js',
  './assets/js/app.js',
  './assets/icons/icon-180.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/favicon-64.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(CORE).catch(() => null))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // GitHub API never cached
  if (url.host === 'api.github.com') return;

  // Same-origin or known CDN: stale-while-revalidate
  event.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const cached = await cache.match(req);
    const networkPromise = fetch(req).then((res) => {
      if (res && res.status === 200 && res.type !== 'opaque') {
        cache.put(req, res.clone()).catch(() => {});
      }
      return res;
    }).catch(() => cached);
    return cached || networkPromise;
  })());
});

// Optional: skipWaiting via postMessage
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
