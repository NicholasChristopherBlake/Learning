const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const icon = document.getElementById('menu-btn-icon');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
  if (btn.classList.contains('open')) {
    icon.setAttribute('src', 'images/icon-close.svg')
  } else {
    icon.setAttribute('src', 'images/icon-hamburger.svg')
  }
})