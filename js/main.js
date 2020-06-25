// Make sure services workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../cache-site.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => `Service Worker: Error: ${err}`);
    });
}

window.addEventListener('click', (ev) => {
    ev.preventDefault();

    window.scrollTo(500, 0);
});

console.log(window.pageYOffset);
console.log(window.pageYOffset);