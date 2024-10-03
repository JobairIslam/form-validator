const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pasword = document.getElementById("pasword");
const pasword2 = document.getElementById("pasword2");

//show error mesg
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
//show success mesg
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//event listeners

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value == "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  if (email.value == "") {
    showError(email, "email is required");
  } else {
    showSuccess(email);
  }
  if (password.value == "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }
  if (password2.value == "") {
    showError(password2, "confermation is required");
  } else {
    showSuccess(password2);
  }
});
