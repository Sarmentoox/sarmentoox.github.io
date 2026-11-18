self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('marcador-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/capa.jpg'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});