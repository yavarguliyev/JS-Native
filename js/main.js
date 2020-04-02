// Make sure services workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../cache-site.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => `Service Worker: Error: ${err}`);
    });
}