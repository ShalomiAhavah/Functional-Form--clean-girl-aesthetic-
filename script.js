let usernameInput = document.getElementById("user-name");
let passwordInput = document.getElementById("user-password");
let submitBtn = document.getElementById("submit-btn");

function getUsername() {
  let username = usernameInput.value;
  console.log(username);
}

function getPassword() {
  let password = passwordInput.value;
  console.log(password);
}

function displayInput() {
  getUsername();
  getPassword();
}
