// HaYTo Portfolio - Service Worker for Offline & High Performance Caching
const CACHE_NAME = 'hayto-portfolio-cache-v1.0.38';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './extensions.html',
    './404.html',
    './style.css',
    './script.js',
    './favicon.ico',
    './llms.txt',
    './assets/win98wallpaper.jpg',
    './assets/steam.png',
    './assets/haytool.png',
    './assets/twitter.png',
    './assets/instagram.png',
    './assets/firewall.png',
    './assets/wallpaper.png',
    './assets/webtranslate.png',
    './assets/tabsuspender.png',
    './assets/recycle_icon.png',
    './assets/cloud_startpage.png',
    './assets/xdownloader.png',
    './assets/extensityplus.png',
    './assets/rewriteai.png',
    './assets/start_icon.png',
    './assets/speaker_icon.png',
    './assets/weather.png',
    './assets/notepad_icon.png',
    './assets/mail_icon.png',
    './assets/folder_icon.png',
    './assets/pc_icon.png',
    './assets/warning_icon.png',
    './assets/helium.png',
    './assets/chrome.png',
    './assets/edge.png',
    './assets/github.png',
    './assets/linux.svg',
    './assets/cachyos.svg',
    './assets/windows.svg',
    './assets/macos.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(name => {
                    if (name !== CACHE_NAME) {
                        return caches.delete(name);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    // Sadece GET isteklerini ve kendi alan adımızdaki statik dosyaları önbellekle
    if (event.request.method !== 'GET') return;
    const requestUrl = new URL(event.request.url);

    // Dış telemetri veya sayaç API isteklerini Service Worker önbelleğine alma
    if (requestUrl.origin !== location.origin) {
        return;
    }

    // Stale-While-Revalidate stratejisi:
    // Önbellekten hemen servis et (0 ms gecikme), arka planda yenisini çekip önbelleği tazele
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            const fetchPromise = fetch(event.request).then(networkResponse => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            }).catch(() => cachedResponse);

            return cachedResponse || fetchPromise;
        })
    );
});
