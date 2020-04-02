const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'about.html',
    'contact.html',
    'face-detection.html',
    '/scss/style.css',
    '/js/main.js',
    // '/js/active-class',
    // '/js/add-to-card.js',
    // '/js/book-app.js',
    // '/js/drag-drop.js',
    // '/js/image-gallery.js',
    // '/js/modal.js',
    // '/js/multi-select-search.js',
    // '/js/rating.js',
    // '/js/search-by-datas.js',
    // '/js/search-by-json.js',
    // '/js/search.js',
    // '/js/slider.js',
    // '/js/sortable.js',
    // '/js/table.js',
    // '/js/test.js'
];

// Call Install Event
self.addEventListener('install', ev => {
    console.log('Service Worker: Installed');

    ev.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

// Call Activate Event
self.addEventListener('activate', ev => {
    console.log('Service Worker: Activated');

    // Remove unwanted caches
    ev.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});