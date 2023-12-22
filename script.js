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

// // API
// async function fetchAPI(longURL) {
//   try {
//     let url = encodeURIComponent(longURL);
//     const response = await fetch("https://cleanuri.com/api/v1/shorten", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         // "Access-Control-Allow-Origin": "*",
//         // "Access-Control-Allow-Credentials": true,
//       },
//       body: JSON.stringify(url),
//     });
//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error", error);
//   }

//   // let longURL =
//   // "https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data";
// }
// fetchAPI("https://google.com/sdf?%sd sdkfj 20");

async function fetchAPI() {
  const url = "https://free-url-shortener.p.rapidapi.com/api/write/post";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f",
      "X-RapidAPI-Host": "free-url-shortener.p.rapidapi.com",
    },
    body: new URLSearchParams({
      type: "json",
      url: "https://url.com",
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
