const slider = document.querySelector('.items');
let isDown = false; // our flag variable (clicking or not)
let startX;
let scrollLeft;

// .active class slightly transforms

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft; // if there is margin - we minus it
  scrollLeft = slider.scrollLeft;

});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active')

});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active')

});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return; // stop the function from running when we're not clicking
  e.preventDefault(); // stops selecting text by browser etc.
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // how far we moved the mouse * 2 times
  slider.scrollLeft = scrollLeft - walk;
});
