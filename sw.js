const CACHE_NAME = 'ratgames-cache-v1';
const urlsToCache = ['home.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});
