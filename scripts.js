const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// It returns promise
// LocalMediaStream ia an object, so for it to be shown in "video"
// we need to convert it into URL (for src)
function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false})
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream; //converts to URL
      video.play(); // so the video will be played, otherwise it will not update itself
    })
    // Handles if the user didn't ALLOW camera
    .catch(err => {
      console.error(`OH NO!!! You denied the Webcam`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  // Change canvas width and height to the VIDEO's width and height
  canvas.width = width;
  canvas.height = height;
  // Return it if we ever need to stop this
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height) // draws image in Canvas every 16 ms from Webcam
    // Take the pixels Out
    let pixels = ctx.getImageData(0, 0, width, height);
    // CHANGE PIXELS
    // pixels = redEffect(pixels); // FOR RED EFFECT
    // pixels = rgbSplit(pixels); // FOR RGB SPLIT
    // ctx.globalAlpha = 0.1;
    pixels = greenScreen(pixels); // FOR GREEN SCREEN
    // Put them back
    ctx.putImageData(pixels, 0, 0);

    // from 0 left, 0 top, with width and height
  }, 16) // interval 16 ms
}

function takePhoto() {
  // Plays the "photo" sound
  snap.currentTime = 0;
  snap.play();

  // Take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg'); // or png
  const link = document.createElement('a');
  link.href = data;
  // Allows to download this image
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i< pixels.data.length; i+=4) {
    pixels.data[i] = pixels.data[i] + 100; // red channel
    pixels.data[i+1] = pixels.data[i + 1] - 50; // green channel
    pixels.data[i+2] = pixels.data[i + 2] * 0.5; // blue channel
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i< pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i]; // red channel
    pixels.data[i + 500] = pixels.data[i + 1]; // green channel
    pixels.data[i - 550] = pixels.data[i + 2]; // blue channel
  }
  return pixels;
}

function greenScreen(pixels) {
  // Holds our minimum and maximum green
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  // Loop over EVERY single pixels and if any of those are INBETWEEN our min and max values
  // we TAKE them out (set the ALPHA (transparency) to 0)
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    // if any of those are in range - take them OUT (transpancy = 0)
    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

// Once the video is played, it will call paintToCanvas() function
video.addEventListener('canplay', paintToCanvas);

