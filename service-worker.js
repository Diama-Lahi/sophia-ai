const CACHE_NAME = 'sophia-ai-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/translations.js',
  '/data.js',
  '/search-engine.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// 1. Installation : mise en cache des fichiers essentiels
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache ouvert : mise en cache des ressources');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error('Échec du cache:', err))
  );
  self.skipWaiting();
});

// 2. Activation : nettoyage des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Fetch : stratégie "Cache First, puis Network"
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si trouvé dans le cache, on le retourne
        if (response) {
          return response;
        }
        // Sinon, on fait la requête réseau
        return fetch(event.request).then(
          response => {
            // Vérifier si la réponse est valide
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Cloner la réponse pour la mettre en cache
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        ).catch(() => {
          // Fallback hors ligne si nécessaire
          return new Response('Vous êtes hors ligne.', { status: 503, statusText: 'Service Unavailable' });
        });
      })
  );
});
