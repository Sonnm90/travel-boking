let text = document.getElementById("textLog");
let btnRegister = document.querySelector("#btnRegister");
let dropdown = document.querySelector(".dropdown");

// console.log(text);
const USERNAME = "username";
let userLogin = document.getElementById("user");
console.log(userLogin.lastChild.previousSibling);

if (sessionStorage.getItem(USERNAME) != null) {
  userLogin.lastChild.previousSibling.innerHTML =
    sessionStorage.getItem(USERNAME);

  dropdown.style.display = "block";
}
