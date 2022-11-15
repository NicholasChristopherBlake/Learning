// Interactivity of Rating elements. Ability to choose one

let numbers = document.querySelectorAll(`p[class="circle"]`);
let rating;

numbers.forEach(number => number.onclick = () => {
  if (number.getAttribute("pressed") == 0) {
    try {
      let oldElement = document.querySelector('[pressed="1"]');
      oldElement.setAttribute('pressed', 0);
    }
    catch(err) {
      console.log(err)
    }
    number.setAttribute("pressed", 1)
    rating = number.getAttribute("rating");
  }
  else if (number.getAttribute("pressed") == 1) {
    number.setAttribute("pressed", 0)
    rating = undefined;
  }
  console.log('Rating IS', rating)
  return rating;
})

// Clicking "Submit" - Taking the stored "RATING" and changing the CONTAINER element to "Thank You" State

let submitBtn = document.getElementById('submit')
submitBtn.onclick = () => {
  if (rating == undefined) return;
  let container = document.getElementById('state1')
  let container2 = document.getElementById('state2')
  container.innerHTML = container2.innerHTML
  let rating = document.getElementById('rating');
  rating.innerText = rating;
  container.setAttribute('style', "text-align: center;")
}
