// Menu toggle
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

// Validation
const check = () => {
  let valid = true;
  let field = document.getElementById("input");
  let error = document.getElementById("error-message");
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

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.result_url);

    if (result.result_url != undefined) {
      const newResultCard = document.createElement("div");
      newResultCard.classList.add("results-card");
      newResultCard.setAttribute("data-state", "fetched");
      const userURL = document.createElement("p");
      userURL.classList.add("user-url");
      userURL.innerHTML = enteredURL;
      const hr = document.createElement("hr");
      const shortURL = document.createElement("a");
      shortURL.classList.add("short-url");
      shortURL.setAttribute("href", result.result_url);
      shortURL.innerHTML = result.result_url;
      const copyButton = document.createElement("button");
      copyButton.classList.add("copy-button");
      copyButton.setAttribute("data-state", "unpressed");
      copyButton.setAttribute("onclick", "copy(this)");
      copyButton.innerHTML = "Copy";
      newResultCard.appendChild(userURL);
      newResultCard.appendChild(hr);
      newResultCard.appendChild(shortURL);
      newResultCard.appendChild(copyButton);
      results.appendChild(newResultCard);
    }
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
  // console.log(encodeURIComponent(input.value));
  // const validURL = encodeURIComponent(input.value);
  fetchAPI(input.value);
});

// Copy Button

function copy(a) {
  a.setAttribute("data-state", "pressed");
  a.innerText = "Copied!";
}
