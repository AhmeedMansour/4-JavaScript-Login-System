let logBtn = document.getElementById("logBtn");
let WeclomeMsg = document.getElementById("WeclomeMsg");

let allUsers = [];

if (localStorage.getItem("allUsers") !== null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

logBtn.addEventListener("click", function () {
  window.location.href = "./index.html";
});

window.addEventListener("load", function () {
  displayUserName();
});

function displayUserName() {
  if (allUsers.length > 0 && allUsers[0].name) {
    let userName = capitalizeFirstLetter(allUsers[0].name);
    WeclomeMsg.innerHTML = `Welcome, <span>${userName}</span>`;
  } else {
    WeclomeMsg.innerHTML = "Welcome, <span>Guest</span>";
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


