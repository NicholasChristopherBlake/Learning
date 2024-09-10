const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// .watchPosition() gives position CONTINUOUSLY
// navigator.geolocation.getCurrentPosition(); // gives position ONCE
navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = Math.round(data.coords.speed);
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => { // handles error if geolocation is not available
  console.error(err);
  alert('You gotta allow GEOLOCATION');
}); 
