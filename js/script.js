// mobile nav
const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');

hamburger.addEventListener('click', (e) => {
  hamburgerMenu.classList.toggle('toggle-menu');
});
