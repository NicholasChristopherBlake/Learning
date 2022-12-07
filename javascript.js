const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100 px;

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  // const {offsetWidth: width, offsetHeight: height} = hero; - 
  // alternative way using destructuring
  let { offsetX: x, offsetY: y } = e;

  // If we mouse over CHILD (not .hero element), then we add offset,
  // because the x and y on child element will change
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / width * walk) - (walk / 2));

  // we go not from 100px to 0, but from -50px to 50px
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7), 
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7), 
    ${xWalk}px ${yWalk * -1}px 0 rgba(0,255,0,0.7), 
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0,0,255,0.7)
  `
}

hero.addEventListener('mousemove', shadow);