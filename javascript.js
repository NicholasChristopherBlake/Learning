const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const prom = fetch(endpoint)
  .then(data => data.json())
  .then(data2 => cities.push(...data2))

console.log(cities)
// Filters the "Cities" array
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

// Function changes Number by Adding , to it
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Function which Displays the matching city of state name
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex2 = new RegExp(this.value, 'gi');
    const cityNameHighlighted = place.city.replace(regex2, 
      `<span class="hl">${this.value}</span>`);
    const stateNameHighlighted = place.state.replace(regex2, 
        `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityNameHighlighted}, ${stateNameHighlighted}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);