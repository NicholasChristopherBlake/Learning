const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')
const hand = document.getElementsByClassName('hand')

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  if (seconds == 0 || minutes == 0 || hours == 12 || hours == 0) {
    for (const elem of hand) {
      elem.style.transition = '';
    } 
  }
  else {
    for (const elem of hand) {
      elem.style.transition = 'all 0.05s';
      elem.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
    }
  }
  const secondsDegrees = (seconds * 6) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutesDegrees = (minutes * 6) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hoursDegrees = (hours / 12 * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hours, minutes, seconds)
}

setInterval(setDate, 1000);
