let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const timeLimit = 100;

function timer(seconds) {
  // Clear any existing timers
  clearInterval(countdown);

  const now = Date.now(); // new method
  const then = now + seconds * 1000;
  displayTimeLeft(seconds); // so it shows it from the start
  displayEndTime(then); // when to be Back

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display seconds
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  // if we have less then 10 seconds adds '0' to it
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display; // shows time in TITLE browser tab as well
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  // const adjustedHour = hour > 10 ? hour - 12 : hour; // for Americans
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
})
