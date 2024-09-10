const menuIcon = document.getElementById('icon-menu');
const menuIconClose = document.getElementById('icon-menu-close');

menuIcon.onclick = () => {
  document.documentElement.style.setProperty(`--styleMenu`, ' ')
  document.documentElement.style.setProperty(`--opacity`, '1')
}
menuIconClose.onclick = () => {
  document.documentElement.style.setProperty(`--styleMenu`, 'none')
}
