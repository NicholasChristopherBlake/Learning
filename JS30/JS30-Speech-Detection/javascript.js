window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition(); // creates new instance
// if it isn't here, then it will only show text when you STOP speaking
recognition.interimResults = true;
recognition.lang = 'en-US'; 

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    p.textContent = transcript;
    // Checks if the sentence is finished and if so adds a new paragraph
    if(e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }

    // HOW YOU CAN LISTEN TO COMMANDS like Weather API
    if(transcript.includes('get the weather')) {
      console.log('Getting the weather FOR YOU!');
    }
  console.log(transcript);
})

// When the recognition ends starts a new one
recognition.addEventListener('end', recognition.start); 

recognition.start();
