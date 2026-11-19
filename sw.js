const CACHE_NAME = 'marcador-store-v5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './capa_2.jpg',
  './truco_2.jpg',
  './domino_2.jpg',
  './cacheta_2.jpg',
  './canastra_2.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});