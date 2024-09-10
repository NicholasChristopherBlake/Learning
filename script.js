// Function that plays our Sound when we hit the correct key
const playSound = (e) => {
  console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // stop the function from running if 'audio' doesn't exist
    audio.currentTime = 0; // rewind audio to the start (so it starts again when we hit button)
    audio.play();
    key.classList.add('playing'); // adds class 'playing' and CSS for it
}

// adds Event Listener on the browser page and calls function playSound()
window.addEventListener('keydown', playSound)

// removes class 'playing' from this key
function removeTransition(e) {
  if (e.propertyName != 'transform') return; // skip it if it's not a transform
  this.classList.remove('playing');
}

// waits for the transition to end and removes class 'playing' and CSS for it
const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend', removeTransition))


