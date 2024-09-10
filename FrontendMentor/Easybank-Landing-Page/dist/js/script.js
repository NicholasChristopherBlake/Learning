const hamburger = document.getElementById('hamburger-menu');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');

const triggerMenu = () => {
  if(hamburger.classList.contains('menu-close')) {
    hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>`
    hamburger.classList.add('menu-open');
    hamburger.classList.remove('menu-close');
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
    modalOverlay.classList.add('open');
    modalOverlay.classList.remove('close');
    return;
  } else if (hamburger.classList.contains('menu-open')) {
    hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>`
    hamburger.classList.add('menu-close');
    hamburger.classList.remove('menu-open');
    modal.classList.add('modal-close');
    modal.classList.remove('modal-open');
    modalOverlay.classList.add('close');
    modalOverlay.classList.remove('open');
    return;
  }
}

hamburger.addEventListener('click', () => {
  triggerMenu();
})