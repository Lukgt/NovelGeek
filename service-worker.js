var cacheName = 'WorkOut+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './Home.html',

        './css/Home.css',
        './css/Menu.css',
        './css/Perfil.css',
        './css/Comunidade.css',

        './js/Script.js',

        './img/logo.svg',
        './img/novel1.webp',
        './img/novel2.webp',
        './img/novel3.webp',
        './img/novel4.webp',
        
       
        // Novos ícones
        './img/icon/29.png',
        './img/icon/40.png',
        './img/icon/57.png',
        './img/icon/58.png',
        './img/icon/60.png',
        './img/icon/80.png',
        './img/icon/87.png',
        './img/icon/114.png',
        './img/icon/120.png',
        './img/icon/180.png',
        './img/icon/1024.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});