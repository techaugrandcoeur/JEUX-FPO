const CACHE_NAME = "jeux-app-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./jeux.js",
  "./jeux.css",
  "./manifest.json",
  "./images/FPO.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});