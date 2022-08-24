const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const botonDeMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navBarEmail.addEventListener('click', toggleDesktopMenu);
botonDeMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive')
}