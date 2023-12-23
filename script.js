// Mobile menu toggle
const menuToggle = document.getElementById("menu");
const siteNavigation = document.getElementById("nav");

function toggleMenu() {
  const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
  isOpened ? closeMenu() : openMenu();
}
function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  siteNavigation.setAttribute("data-state", "opened");
}
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  siteNavigation.setAttribute("data-state", "closing");
  siteNavigation.addEventListener(
    "animationend",
    () => {
      siteNavigation.setAttribute("data-state", "closed");
    },
    { once: true }
  );
}

// Validation for empty field
const field = document.getElementById("input");
const error = document.getElementById("error-message");
const check = () => {
  let valid = true;
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Please add a link";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  return valid;
};

// API
const form = document.getElementById("form");
const input = document.getElementById("input");
const results = document.getElementById("results");

async function fetchAPI(enteredURL) {
  const url = "https://url-shortener-service.p.rapidapi.com/shorten";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    body: new URLSearchParams({
      url: enteredURL,
    }),
  };

  if (enteredURL == "") return;

  if (document.querySelector(`p.user-url[data-id="${enteredURL}"]`)) {
    input.value = "";
  } else {
    try {
      field.classList.remove("err");
      error.innerHTML = "";
      const response = await fetch(url, options);
      if (response.status == 400) {
        throw new Error("Error 400 Bad Request");
      }
      const result = await response.json();

      // Create result card
      if (result.result_url != undefined) {
        const newResultCard = document.createElement("div");
        const newId = Date.now().toString(4);
        newResultCard.classList.add("results-card");
        newResultCard.setAttribute("data-state", "fetched");
        newResultCard.innerHTML = `<p class="user-url" data-id="${enteredURL}">${enteredURL}</p>
      <hr />
      <div class="results-right-side"> 
      <a class="short-url" data-id=${newId} href="${result.result_url}">${result.result_url}</a>
      <button class="copy-button" data-id=${newId} data-state="unpressed" onclick="copy(this)">Copy</button>
      </div>
      `;
        results.appendChild(newResultCard);
        // Save to Local Storage
        localStorage.setItem(enteredURL, result.result_url);
        input.value = "";
        return result;
      }
    } catch (err) {
      field.classList.add("err");
      error.innerHTML = "Please enter a correct link";
    }
  }
}

// Get Items from local storage
const getItems = () => {
  if (localStorage.length !== 0) {
    for (const [key, value] of Object.entries(localStorage)) {
      const newResultCard = document.createElement("div");
      const newId = Date.now().toString(4);
      newResultCard.classList.add("results-card");
      newResultCard.setAttribute("data-state", "fetched");
      newResultCard.innerHTML = `<p class="user-url" data-id="${key}">${key}</p>
      <hr />
      <div class="results-right-side">
      <a class="short-url" data-id=${newId} href="${value}">${value}</a>
      <button class="copy-button" data-id=${newId} data-state="unpressed" onclick="copy(this)">Copy</button>
      </div>`;
      results.appendChild(newResultCard);
    }
  }
};

getItems();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchAPI(input.value);
});

// Copy Button

function copy(a) {
  const pressedButton = document.querySelector(`button[data-state="pressed"]`);
  if (pressedButton !== null) {
    pressedButton.setAttribute("data-state", "unpressed");
    pressedButton.innerText = "Copy";
  }
  a.setAttribute("data-state", "pressed");
  a.innerText = "Copied!";
  const id = a.getAttribute("data-id");
  const copiedLink = document.querySelector(`a[data-id="${id}"]`);
  navigator.clipboard.writeText(copiedLink.innerText);
}
