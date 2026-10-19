const CACHE = "smartmeal-v2";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/recetas.js",
  "./js/motor.js",
  "./js/app.js",
  "./assets/img/logo.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-maskable-512.png",
  "./assets/icons/apple-touch-icon.png"
];

self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", evento => {
  evento.waitUntil(
    caches.keys().then(claves =>
      Promise.all(
        claves.filter(c => c !== CACHE).map(c => caches.delete(c))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", evento => {
  const url = new URL(evento.request.url);
  if (evento.request.method !== "GET" || url.origin !== self.location.origin) return;

  evento.respondWith(
    caches.match(evento.request).then(cachada => {
      if (cachada) return cachada;
      return fetch(evento.request).then(respuesta => {
        if (respuesta.ok) {
          const copia = respuesta.clone();
          caches.open(CACHE).then(cache => cache.put(evento.request, copia));
        }
        return respuesta;
      }).catch(() => {
        if (evento.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});
