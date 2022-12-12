// What person is going to say and also speed, pitch, voice
const msg = new SpeechSynthesisUtterance();

let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices(); // gives us a list of voices
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en')) // filter only ENGLISH voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

// When we change Pitch or Rate
function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

// When speechSynthesis loads ('voiceschanged') - we get a list of voices
speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)
options.forEach(option => option.addEventListener('change', setOption))

speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false))