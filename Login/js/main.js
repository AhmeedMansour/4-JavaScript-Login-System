let loginForm = document.getElementById("loginForm");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginAlert = document.getElementById("loginAlert");
let loginSuccessAlert = document.getElementById("loginSuccessAlert");
let eyeIcon = document.getElementById("eyeIcon");
let allUsers = [];

if (localStorage.getItem("allUsers") !== null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
}
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  login();
});

function login() {
  let userData = {
    email: loginEmail.value,
    password: loginPassword.value,
  };
  if (isLoginValid(userData)) {
    console.log("Welcome!");
    loginSuccessAlert.classList.replace("d-none", "d-block");
    setTimeout(function () {
      window.location.href = "./home.html";      
    }, 1500)
  } else {
    loginAlert.classList.replace("d-none", "d-block");
    loginPassword.value = "";
    setTimeout(function () {
      loginAlert.classList.replace("d-block", "d-none");
    }, 3000);
  }
}

function isLoginValid(userData) {
  for (let i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email.toLowerCase() == userData.email.toLowerCase() &&
      allUsers[i].password == userData.password
    ) {
      return true;
    }
  }
}

eyeIcon.addEventListener("click", function () {
  loginPassword.type = loginPassword.type === "password" ? "text" : "password";
  eyeIcon.classList.toggle("fa-eye-slash");
});
