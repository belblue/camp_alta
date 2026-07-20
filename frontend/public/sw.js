const CACHE_VERSION = '2026072001'; // Update this to bust cache
const STATIC_CACHE = `camp-alta-static-v${CACHE_VERSION}`;

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

// Activate event - delete caches from previous versions only, no forced
// reload: open pages keep running and pick up the new caches naturally.
self.addEventListener('activate', event => {
  const expectedCaches = [
    STATIC_CACHE,
    ...Object.values(CACHE_STRATEGIES).map(strategy => strategy.cacheName)
  ];
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith('camp-alta-') && !expectedCaches.includes(cacheName))
          .map(cacheName => caches.delete(cacheName))
      ))
      .then(() => self.clients.claim())
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
      .catch(async () => {
        const offline = await caches.match('/offline.html');
        return offline || new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      })
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
    cache.put(request, await stampCacheTime(response));
  }

  return response;
}

// Network-first strategy for dynamic content
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await getCacheForRequest(request);
      cache.put(request, await stampCacheTime(response));
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

// Copy of a response with an sw-cache-time header so cleanupCache can
// age-evict entries. Safe: cross-origin (opaque) responses never get here.
async function stampCacheTime(response) {
  const headers = new Headers(response.headers);
  headers.set('sw-cache-time', Date.now().toString());
  const body = await response.clone().blob();
  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
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
    if (!response) continue;
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