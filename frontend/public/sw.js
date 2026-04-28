const CACHE_VERSION = '2026042802'; // Update this to bust cache
const CACHE_NAME = `camp-alta-v${CACHE_VERSION}`;
const STATIC_CACHE = `camp-alta-static-v${CACHE_VERSION}`;
const DYNAMIC_CACHE = `camp-alta-dynamic-v${CACHE_VERSION}`;

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/favicon/site.webmanifest',
  '/favicon/favicon.ico',
  '/logo.svg',
  '/offline.html'
];

// Cache strategies for different content types
const CACHE_STRATEGIES = {
  images: {
    cacheName: `camp-alta-images-v${CACHE_VERSION}`,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxEntries: 100
  },
  pages: {
    cacheName: `camp-alta-pages-v${CACHE_VERSION}`,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    maxEntries: 50
  },
  api: {
    cacheName: `camp-alta-api-v${CACHE_VERSION}`,
    maxAge: 5 * 60 * 1000, // 5 minutes
    maxEntries: 20
  }
};

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        self.skipWaiting();
      })
  );
});

// Activate event - clean up ALL old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        // Delete ALL existing caches to force complete refresh
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      })
      .then(() => {
        self.clients.claim();
        // Force all pages to reload
        return self.clients.matchAll().then(clients => {
          clients.forEach(client => client.navigate(client.url));
        });
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (url.origin !== location.origin) return;

  event.respondWith(
    cacheFirst(request)
      .catch(() => networkFirst(request))
      .catch(() => caches.match('/offline.html'))
  );
});

// Cache-first strategy for static assets
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await fetch(request);
  if (response.status === 200) {
    const cache = await getCacheForRequest(request);
    cache.put(request, response.clone());
  }
  
  return response;
}

// Network-first strategy for dynamic content
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await getCacheForRequest(request);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Get appropriate cache for request
async function getCacheForRequest(request) {
  const url = new URL(request.url);
  
  if (url.pathname.match(/\.(png|jpg|webp|jpeg|gif|webp|svg|ico)$/)) {
    return caches.open(CACHE_STRATEGIES.images.cacheName);
  }
  
  if (url.pathname.startsWith('/api/')) {
    return caches.open(CACHE_STRATEGIES.api.cacheName);
  }
  
  return caches.open(CACHE_STRATEGIES.pages.cacheName);
}

// Clean up old cache entries
async function cleanupCache(cacheName, maxEntries, maxAge) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  // Remove old entries
  if (keys.length > maxEntries) {
    const keysToDelete = keys.slice(0, keys.length - maxEntries);
    await Promise.all(keysToDelete.map(key => cache.delete(key)));
  }
  
  // Remove expired entries
  const now = Date.now();
  for (const key of keys) {
    const response = await cache.match(key);
    const cachedTime = response.headers.get('sw-cache-time');
    if (cachedTime && (now - parseInt(cachedTime)) > maxAge) {
      await cache.delete(key);
    }
  }
}

// Periodic cache cleanup
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CLEANUP_CACHE') {
    Object.values(CACHE_STRATEGIES).forEach(strategy => {
      cleanupCache(strategy.cacheName, strategy.maxEntries, strategy.maxAge);
    });
  }
});