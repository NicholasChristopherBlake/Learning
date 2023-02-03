// Main 3 <li> elements - our nav sections
const triggers = document.querySelectorAll('.cool > li');

const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  // Checks if it already has the Class 'trigger-enter' (because it has 150 ms Timeout), so sometimes
  // it might not be there, and it will mess up
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open') // The WHITE background

  // we do it HERE, not in global, because we need 1 of 3 dropdowns, the exact one
  const dropdown = this.querySelector('.dropdown'); 

  const dropdownCoords = dropdown.getBoundingClientRect(); // get coordinates
  const navCoords = nav.getBoundingClientRect(); // take into account nav coords as well
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top, // need to take into account nav offset
    left: dropdownCoords.left - navCoords.left
  };

  // Set the width and height of the White Background
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px`);

}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open')

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))

triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))
