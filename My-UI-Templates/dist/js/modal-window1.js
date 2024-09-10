const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

modal.addEventListener('click', (e) => {
  if(e.target.nodeName === 'DIALOG') {
    modal.close();
  }
})

closeModal.addEventListener("click", () => {
  modal.setAttribute("closing", "");

  modal.addEventListener("animationend", () => {
      modal.removeAttribute("closing");
      modal.close();
    }, { once: true });
});
