self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('coop-cache').then((cache) => cache.addAll(['/', '/index.html', '/css/style.css'])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});