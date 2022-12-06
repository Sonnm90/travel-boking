let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");
let textLog = document.querySelector("#textLog");
let hideMenu = document.querySelector(".myMenu");
let dropdown = document.querySelector(".dropdown");
let logOut = document.querySelector("#logOut");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

// formBtn.addEventListener('click', () =>{
//     loginForm.classList.add('active');
// });
function login() {
  loginForm.classList.add("active");
}
textLog.addEventListener("click", login);

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

/*Kiểm tra user đăng nhập
 */

// localStorage.setItem(USERNAME, emailField.value);
//   localStorage.setItem(PASSWORD, passwordField.value);
const USERNAME = "username";
const PASSWORD = "password";

let emailField = document.getElementById("email");
let passwordField = document.getElementById("password");
let submitLoginField = document.getElementById("loginBtn");
let remember = document.getElementById("remember_me");

submitLoginField.addEventListener("click", (e) => {
  // kiem tra su hop le cua email
  e.preventDefault();
  if (emailField.value == "") {
    console.warn("email khong duoc bo trong");
  } else if (emailField.value.length < 6) {
    console.warn("email can lon hon hoac bang 6 ky tu");
  } else if (emailField.value.length > 32) {
    console.error("email can nho hon hoac bang 32 ky tu");
  } else {
    console.log("email ok");
  }

  // kiem tra su hop le cua password
  if (passwordField.value == "") {
    console.warn("password khong duoc bo trong");
  } else {
    console.log("password ok");
  }

  let username = localStorage.getItem(USERNAME);
  let password = localStorage.getItem(PASSWORD);

  if (username == emailField.value && password == passwordField.value) {
    // console.log("vung oi mo ra");

    // if (remember.checked) {
    //   // Lay ra thoi gian sau 24 gio
    //   var currentDateObj = new Date();
    //   var numberOfMlSeconds = currentDateObj.getTime();
    //   var date24 = new Date(numberOfMlSeconds + 24 * 60 * 60 * 1000);

    //   document.cookie = "isRemember=true; expires=" + date24;
    // }
    sessionStorage.setItem(USERNAME, emailField.value);
    sessionStorage.setItem(PASSWORD, passwordField.value);
    localStorage.setItem(USERNAME, emailField.value);
    localStorage.setItem(PASSWORD, passwordField.value);
    window.location.href = "./index.html";
  } else {
    console.log("chuc ban may man lan sau");
  }
});

if (getCookie("isRemember")) {
  window.location.href = "./index.html";
}

function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  return cookie[cookieName];
}

/* Kiểm tra Session nếu có load giao diện User
 */
let text = document.querySelector("#textLog");
let btnRegister = document.querySelector("#btnRegister");
let formlogin = document.querySelector("#form-login");
let addHeart = document.querySelectorAll(".addFavourite");
let books = document.querySelectorAll(".btnBook");
let listHearts = [];
let span = document.querySelectorAll("span");
let booking = document.querySelectorAll(".booking");

// Kiểm tra Session
if (sessionStorage.getItem(USERNAME) != null) {
  textLog.removeEventListener("click", login);
  // Thay đổi hiển thị tên User
  span[1].lastChild.textContent = sessionStorage.getItem(USERNAME);
  btnRegister.style.display = "none";
  dropdown.style.display = "block";

  logOut.addEventListener("click", () => {
    sessionStorage.removeItem(USERNAME);
    window.location.href = "./index.html";
  });
  booking.forEach((book) => {
    book.addEventListener("click", () => {
      window.location.href = "./mybooking.html";
    });
  });
  // Load tính năng yêu thích
  //  let addHeart = document.querySelectorAll('.addFavourite');
  console.log(addHeart);

  console.log(addHeart[1]);
  console.log(addHeart[1].parentNode.parentNode.parentNode.childNodes[1].src);
  console.log(
    addHeart[1].parentNode.parentNode.childNodes[1].childNodes[1].textContent
  );
  console.log(
    addHeart[1].parentNode.parentNode.childNodes[7].childNodes[2].textContent
  );

  for (i = 0; i < addHeart.length; i++) {
    addHeart[i].addEventListener("click", function () {
      this.style.color = this.style.color == "orange" ? "black" : "orange";

      listHearts.push({
        img: this.parentNode.parentNode.parentNode.childNodes[1].src,
        name: this.parentNode.parentNode.childNodes[1].childNodes[1]
          .textContent,
        price:
          this.parentNode.parentNode.childNodes[7].childNodes[2].textContent,
      });
      console.log(listHearts);
      localStorage.setItem(
        sessionStorage.getItem(USERNAME),
        JSON.stringify(listHearts)
      );
    });
  }
  // Load tính năng Booking

  books.forEach((book) => {
    book.addEventListener("click", () => {});
  });
} else {
}
