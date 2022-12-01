const buttonMenu = document.querySelector('.button-menu');
const menu = document.querySelector('.menu');

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
})