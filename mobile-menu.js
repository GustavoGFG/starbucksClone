const mobileMenu = document.getElementById('mobile-menu');
const navBar = document.getElementById('nav-bar');
const mobileBackground = document.getElementById('mobile-background');

mobileMenu.addEventListener('click', () => {
  console.log('clicou');
  navBar.classList.toggle('nav-hide');
  mobileBackground.classList.toggle('nav-hide');
});

mobileBackground.addEventListener('click', () => {
  navBar.classList.toggle('nav-hide');
  mobileBackground.classList.toggle('nav-hide');
});
