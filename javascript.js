const pressed = [];
const secretCode = 'takes';

window.addEventListener('keyup', (e) => {
  console.log(e.key)
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
  if(pressed.join('').includes(secretCode)) {
    console.log('DING DING YOU DID IT!');
    cornify_add(); // secret fun function in js that adds unicorns
  }
})
