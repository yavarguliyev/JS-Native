const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(ev) {
    imgs.forEach(img => (img.style.opacity = 1));

    current.src = ev.target.src;

    current.classList.add('fade-in');

    setTimeout(() => current.classList.remove('fade-in'), 500);

    ev.target.style.opacity = opacity;
}