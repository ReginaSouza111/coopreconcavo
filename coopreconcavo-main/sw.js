// O navegador exige que o Service Worker tenha um evento 'fetch' para liberar a instalação
self.addEventListener('fetch', function(event) {
    // Por enquanto ele apenas deixa a requisição passar normalmente
});

self.addEventListener('install', function(event) {
    console.log('Service Worker instalado!');
});