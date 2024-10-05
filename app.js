const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Email validation
function checkEmail(input) {
  let emailCheck;
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    emailCheck = true;
  } else {
    showError(input, "Please enter a valid email address");
    emailCheck = false;
  }
  return emailCheck;
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
}

// Check length of input
function checkLength(input, min, max) {
  let lengthCheck;
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} is too short`);
    lengthCheck = false;
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} is too long`);
    lengthCheck = false;
  } else {
    showSuccess(input);
    lengthCheck = true;
  }
  return lengthCheck;
}

// Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Confirm password function
function confirmPass() {
  let passwordCheck;
  const passwordValue = password.value;
  const confirmPasswordValue = password2.value;

  if (confirmPasswordValue === "") {
    showError(password2, "Please confirm the password");
    passwordCheck = false;
  } else if (passwordValue !== confirmPasswordValue) {
    showError(password2, "Passwords do not match");
    passwordCheck = false;
  } else {
    showSuccess(password2);
    passwordCheck = true;
  }
  return passwordCheck;
}

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Check required fields first
  const isRequired = checkRequired([username, email, password, password2]);

  // If all required fields are filled, proceed with further validation
  if (!isRequired) {
    const isUsernameValid = checkLength(username, 3, 15);
    const isPasswordValid = checkLength(password, 3, 15);
    const isPasswordConfirmed = confirmPass();
    const isEmailValid = checkEmail(email);

    // If all checks pass, store data and show success message
    if (
      isUsernameValid &&
      isPasswordValid &&
      isPasswordConfirmed &&
      isEmailValid
    ) {
      const formData = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
      };

      // Log the formData to the console
      console.log(formData);

      // Show success message
      alert("Form submitted successfully!");

      // Refresh the page after a delay (e.g., 2 seconds)
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }
});
