if (username.value == "") {
showError(username, "Username is required");
} else {
showSuccess(username);
}
if (email.value == "") {
showError(email, "email is required");
} else if (!isValidEmail(email.value)) {
showError(email, "address is not valid");
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
