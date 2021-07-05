import { clientsClaim, setCacheNameDetails } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import config from './config';

setCacheNameDetails({
  prefix: config.CACHE_NAME,
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute([
  ...self.__WB_MANIFEST,
  {
    url: 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js',
    revision: 1,
  },
  {
    url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap',
    revision: 1,
  },
]);

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail|review|search))/,
  new StaleWhileRevalidate({
    cacheName: 'restaurant-cache-data',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'image-data',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  }),
);

self.skipWaiting();
clientsClaim();

cleanupOutdatedCaches();
