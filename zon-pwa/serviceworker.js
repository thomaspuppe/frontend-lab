// use a cacheName for cache versioning
var cacheName = 'v2:static';

// during the install phase you usually want to cache static assets
self.addEventListener('install', function(e) {
    console.log('ServiceWorker installs');
    // once the SW is installed, go ahead and fetch the resources to make this work offline
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('ServiceWorker caches');
            return cache.addAll([
                './',
                './logo.png',
                './css/style.css',
                './js/script.js',
                './offline.html',
                './img/mydino.jpg',
                './img/worker.png'
            ]).then(function() {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a url
self.addEventListener('fetch', function(event) {
    // either respond with the cached object or go ahead and fetch the actual url
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                console.log('ServiceWorker fetches from cache: ' + event.request.url);
                return response;
            }
            // fetch as normal
            console.log('ServiceWorker fetches as normal: ' + event.request.url);
            return fetch(event.request);
        })
    );
});