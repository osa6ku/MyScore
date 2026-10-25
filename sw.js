const CACHE_NAME = 'myscore-pwa-v1.0.32';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/apple-touch-icon-180.png',
  './icons/pwa-icon-192.png',
  './icons/pwa-icon-512.png',
  './icons/maskable-icon-512.png',
  './icons/favicon-48.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
