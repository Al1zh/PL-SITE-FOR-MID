const themeButton = document.getElementById('theme-toggle');
const burger = document.getElementById('burger');
const navbar = document.querySelector('.navbar');
const icon = burger.querySelector('i');

function setMenu(open) {
  navbar.classList.toggle('open', open);
  icon.classList.toggle('fa-bars', !open);
  icon.classList.toggle('fa-xmark', open);
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

burger.addEventListener('click', () => {
  setMenu(!navbar.classList.contains('open'));
});

navbar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

const scrollTopBtn = document.querySelector('.scroll-top');

scrollTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});