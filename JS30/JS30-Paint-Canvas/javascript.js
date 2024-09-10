const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADASS'; // color
ctx.lineJoin = 'round';
ctx.lineCap = 'round'; // end of the line will look 'round'
ctx.lineWidth = 20; // the width of the line
ctx.globalCompositeOperation = 'multiply'; // when you draw on it, it will JOIN the colors where they overlap

// It should only draw when the MOUSE is clicked, not when we just drag it
let isDrawing = false;
let lastX = 0; // when we start the line from
let lastY = 0;
let hue = 0; // working with color
let direction = true;

function draw(e) {
  if(!isDrawing) return; // stop the function from running when the MOUSE is not clicked
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // starting with 0 - RED
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY) // the values of EVENT
  ctx.stroke(); // it will create a drawing
  // changing lastX and lastY to the last position
  [lastX, lastY] = [e.offsetX, e.offsetY] // ES6 way of assigning variables - destructuring
  hue++; // increasing hue in Color
  if (hue>=360) {
    hue = 0;
  }

  if(ctx.lineWidth >= 50 || ctx.lineWidth <=1) { // when achieving line width 50 or 1 direction of lineWIdth changing changes
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++; // increments line Width if Direction is true
  }
  else {
    ctx.lineWidth--; // decreases line width if Direction is false (meaning line is >=50 or <=1)
  }
 }

 canvas.addEventListener('mousemove', draw); // everytime you move a mouse it calls function Draw()
 canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
 }) // if you press mouse key - drawing starts
 canvas.addEventListener('mouseup', () => isDrawing = false) // if you let go of the mouse key - drawing stops
 canvas.addEventListener('mouseout', () => isDrawing = false) // if your mouse moves OUT the window - drawing stops





