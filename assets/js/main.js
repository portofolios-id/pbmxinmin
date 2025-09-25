const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');

toggle?.addEventListener('click', () => {
  menu?.classList.toggle('is-active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 960) {
    menu?.classList.remove('is-active');
  }
});
