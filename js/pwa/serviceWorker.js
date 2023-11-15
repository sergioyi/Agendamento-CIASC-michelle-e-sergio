/*if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceWorker.js')
      .then(function(registration) {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(function(error) {
        console.log('Falha ao registrar o Service Worker:', error);
      });
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache')
      .then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          'index-Login.html',
          'index-inicio.html',
          'index-nova-consulta.html',
          'index-pesquisa-coneulta.html',
          'index-cadastro-paciente.html',
          'index-cadastro-recepcionista.html'
          // Adicione aqui os recursos que você deseja armazenar em cache
        ]);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
self.addEventListener('install', function(event) {
  // Lógica de instalação do <link category="WEBPAGE">Service Worker</link>
});

self.addEventListener('activate', function(event) {
  // Lógica de ativação do <link category="WEBPAGE">Service Worker</link>
});
self.addEventListener('install', function(event) {
  event.waitUntil(
    // Lógica de instalação do <link category="WEBPAGE">Service Worker</link>

    // Exibir a notificação de instalação
    self.registration.showNotification('Deseja instalar?', {
      body: 'Clique aqui para instalar esta <link category="WEBPAGE">PWA</link>.',
      icon: 'caminho/para/o/ícone.png',
      actions: [
        { action: 'install', title: 'Instalar' },
        { action: 'dismiss', title: 'Fechar' }
      ]
    })
  );
});
*/
// aquele video do joguinho
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/serviceWorker.js')
  .then(function(){
    console.log('Service Worker Registered');
  })
  .catch(function(error){
    console.log(error);
  }
}

//site
const ciascache = "ciascias-v1";
const ciascfiles = [
  "/",
  "/index-nova-consulta.html",
  "/index-pesquisa-consulta.html",
  "/index-cadastro-paciente.html",
  "/style/Inicio.css"
]
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fech", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )

})

const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/coffee1.jpg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})