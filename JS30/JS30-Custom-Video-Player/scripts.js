/* Get Out Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const fullScreen = player.querySelector('.fullscreen');

/* Build functions */
function togglePlay() {
  if(video.paused) {
    video.play();
  } else {video.pause()};
}

/* Better to create a new function which changes "play" to "pause" in DOM
Then to add it to togglePlay() function.
Because NOT all people will click on video or play button, some may be using plugins or smth
So it's better to listen for THE VIDEO if it's paused or playing than to 'click'*/
function updateButton() {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}

/* Skips 10 seconds back or 25 forward */
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

/* Changes the ranges - volume and speed */
function handleRangeUpdate() {
  video[this.name] = this.value;
}

/* Changes the visual of the progress bar as video goes*/
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

/* When we click on progress bar - it moves us to this point of video*/
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(e);
}

function toggleFullScreen() {
  video.requestFullscreen();
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

/* When someone clicks - mousedown will change to true */
let mousedown = false;
progress.addEventListener('click', scrub)
/* When somebody MOVES the mouse on progress bar - it checks if THE MOUSE is clicked
(mousedown == true) and if it is true then it calls scrub() function */
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click', toggleFullScreen)