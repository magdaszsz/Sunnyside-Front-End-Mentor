const navToggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu');

navToggler.addEventListener('click', () => {
  menu.classList.toggle('mobile');
})