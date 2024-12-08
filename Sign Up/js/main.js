/* 
email regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
username regex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/
Password regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
*/

let registerForm = document.getElementById("registerForm");
let signName = document.getElementById("signName");
let signEmail = document.getElementById("signEmail");
let signPassword = document.getElementById("signPassword");
let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let existAlert = document.getElementById("existAlert");
let successAlert = document.getElementById("successAlert");
let eyeIcon = document.getElementById("eyeIcon");

let allUsers = [];

if (localStorage.getItem("allUsers") !== null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (checkAllInputs()) {
    addUser();
  } else {
  }
});

function addUser() {
  let newUser = {
    name: signName.value,
    email: signEmail.value,
    password: signPassword.value,
  };

  if (isExist(newUser) == true) {   
    return true;
  } else {
    successAlert.classList.replace("d-none", "d-block");
    existAlert.classList.replace("d-block", "d-none");
    allUsers.push(newUser);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));

    setTimeout(function () {
        window.location.href = './index.html';
    }, 1700)
  }

  function isExist(newUser) {
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()) {
        existAlert.classList.replace("d-none", "d-block");
        return true;
      }
    }
  }
}

function validateAllInputs(regex, element, alertMsg) {
  let pattern = regex;

  if (pattern.test(element.value) == true) {
    alertMsg.classList.replace("d-block", "d-none");
    return true;
  } else {
    alertMsg.classList.replace("d-none", "d-block");
    return false;
  }
}

function checkAllInputs() {
  if (
    validateAllInputs(/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/, signName, nameAlert) &&
    validateAllInputs(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      signEmail,
      emailAlert
    ) &&
    validateAllInputs(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      signPassword,
      passwordAlert
    )
  ) {
    return true;
  } else {
    return false;
  }
}

eyeIcon.addEventListener("click", function () {
  signPassword.type = signPassword.type === "password" ? "text" : "password";
  eyeIcon.classList.toggle("fa-eye-slash");
});
