var usernameInput = document.getElementById("user-name");
var passwordInput = document.getElementById("user-password");
var submitBtn = document.getElementById("submit-btn");
var userError = document.getElementById("username-error-space");
var passwordError = document.getElementById("password-error-space");
var username;
var password;
var validUser = false;
var validPassword = false;

function fetchInput() {
  username = usernameInput.value;
  password = passwordInput.value;
  console.log(username, password);
  validateUsername();
  console.log(validUser);
}

function validateUsername() {
  let length = username.length;
  if (length > 5 && length < 15) {
    validUser = true;
    userError.innerHTML = "";
  } else {
    userError.innerHTML =
      "Your username needs to be between 6 and 15 letters long";
  }
}
