
const faBars = document.querySelector('.fa-bars');
const faTimes = document.querySelector('.fa-times');
const navLinksContainer = document.querySelector('.navLinksContainer');

faBars.addEventListener('click', () => {
    navLinksContainer.classList.add('showNavLinksContainer');
    faBars.style.display = 'none';
    faTimes.style.display = 'block';
})

faTimes.addEventListener('click', () => {
    navLinksContainer.classList.remove('showNavLinksContainer');
    faBars.style.display = 'block';
    faTimes.style.display = 'none';
})