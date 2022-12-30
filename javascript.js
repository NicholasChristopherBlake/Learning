// The Game is 10 seconds long
// How long the Mole appears - is RANDOM from 200 ms and 1 s
const first = 0;

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

// Gives a random amount of time
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  // This way we will never get the same hole twice in a row
  if(hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes) // recursion
  }

  lastHole = hole; // Save the last Hole
  return hole; // gives recursion in case we got the same hole
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) peep(); // run again after the mole disappears until time is Up
  }, time)
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000) // after 10 sec the game will stop
}

// When we click the moles
function bonk(e) {
  if(!e.isTrusted) return; // Cheater! Click is fake
  score++;
  this.classList.remove('up'); // if you click - the mole goes down immediately;
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk))
