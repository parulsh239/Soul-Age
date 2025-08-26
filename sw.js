const CACHE_NAME = 'soul-age-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './privacy.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
// Security enhancements for GitHub Pages
(function() {
    'use strict';
    
    // Prevent clickjacking
    if (top !== self) {
        top.location = self.location;
    }
    
    // Disable right-click in production
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
    }
    
    // Prevent console access in production
    if (window.location.hostname !== 'localhost') {
        console.log = function() {};
        console.warn = function() {};
        console.error = function() {};
    }
    
    // Set secure cookie attributes if any cookies are used
    document.cookie = "SameSite=Strict; Secure";
})();
