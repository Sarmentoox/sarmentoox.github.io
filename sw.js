self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('marcador-store-v2').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      '/capa.jpg',
      '/truco.jpg',
      '/domino.jpg',
      '/cacheta.jpg',
      '/canastra.jpg'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});