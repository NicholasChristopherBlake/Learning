// Interactivity of Rating elements. Ability to choose one

let numbers = document.querySelectorAll(`p[class="circle"]`);
let value;

numbers.forEach(number => number.onclick = () => {
  if (number.getAttribute("state") == 0) {
    try {
      let oldElement = document.querySelector('[state="1"]');
      oldElement.setAttribute('state', 0);
    }
    catch(err) {
      console.log(err)
    }
    number.setAttribute("state", 1)
    value = number.getAttribute("value");
  }
  else if (number.getAttribute("state") == 1) {
    number.setAttribute("state", 0)
    value = undefined;
  }
  console.log('VALUE IS', value)
  return value;
})

// Clicking "Submit" - Taking the stored "RATING" and changing the CONTAINER element to "Thank You" State

let submitBtn = document.getElementById('submit')
submitBtn.onclick = () => {
  if (value == undefined) return;
  let container = document.getElementById('state1')
  let container2 = document.getElementById('state2')
  container.innerHTML = container2.innerHTML
  let rating = document.getElementById('value');
  rating.innerText = value;
  container.setAttribute('style', "text-align: center;")
}
