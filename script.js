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
