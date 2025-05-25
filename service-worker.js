self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Basic fetch passthrough (you can add caching here if you want)
});
