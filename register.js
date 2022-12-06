document.addEventListener("DOMContentLoaded", function () {
  // Mong muốn của chúng ta
  Validator({
    form: "#form-1",
    formGroupSelector: ".form-group",
    errorSelector: ".form-message",
    rules: [
      Validator.isRequired("#fullname", "Vui lòng nhập tên đầy đủ của bạn"),
      Validator.isEmail("#email"),
      Validator.minLength("#password", 6),
      Validator.isRequired("#password_confirmation"),
      Validator.isConfirmed(
        "#password_confirmation",
        function () {
          return document.querySelector("#form-1 #password").value;
        },
        "Mật khẩu nhập lại không chính xác"
      ),
    ],
    onSubmit: function (data) {
      // Call API
      console.log(data);
      console.log(typeof data);
    },
  });

  Validator({
    form: "#form-2",
    formGroupSelector: ".form-group",
    errorSelector: ".form-message",
    rules: [Validator.isEmail("#email"), Validator.minLength("#password", 6)],
    onSubmit: function (data) {
      // Call API
      console.log(data);
    },
  });
});
// Đối tượng `Validator`
function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
      console.log(element.parentElement);
    }
  }

  var selectorRules = {};

  // Hàm thực hiện validate
  function validate(inputElement, rule) {
    var errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);
    var errorMessage;

    // Lấy ra các rules của selector
    var rules = selectorRules[rule.selector];

    // Lặp qua từng rule & kiểm tra
    // Nếu có lỗi thì dừng việc kiểm
    for (var i = 0; i < rules.length; ++i) {
      switch (inputElement.type) {
        case "radio":
        case "checkbox":
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ":checked")
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, options.formGroupSelector).classList.add(
        "invalid"
      );
    } else {
      errorElement.innerText = "";
      getParent(inputElement, options.formGroupSelector).classList.remove(
        "invalid"
      );
    }

    return !errorMessage;
  }

  // Lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    // Khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;

      // Lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Trường hợp submit với javascript
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll("[name]");
          var formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            switch (input.type) {
              case "radio":
                values[input.name] = formElement.querySelector(
                  'input[name="' + input.name + '"]:checked'
                ).value;
                break;
              case "checkbox":
                if (!input.matches(":checked")) {
                  values[input.name] = "";
                  return values;
                }
                if (!Array.isArray(values[input.name])) {
                  values[input.name] = [];
                }
                values[input.name].push(input.value);
                break;
              case "file":
                values[input.name] = input.files;
                break;
              default:
                values[input.name] = input.value;
            }

            return values;
          },
          {});
          options.onSubmit(formValues);
        }
        // Trường hợp submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    };

    // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
    options.rules.forEach(function (rule) {
      // Lưu lại các rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElements = formElement.querySelectorAll(rule.selector);

      Array.from(inputElements).forEach(function (inputElement) {
        // Xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        // Xử lý mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          var errorElement = getParent(
            inputElement,
            options.formGroupSelector
          ).querySelector(options.errorSelector);
          errorElement.innerText = "";
          getParent(inputElement, options.formGroupSelector).classList.remove(
            "invalid"
          );
        };
      });
    });
  }
}

// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : message || "Vui lòng nhập tên";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : message || "Vui lòng nhập email";
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || "Giá trị nhập vào không chính xác";
    },
  };
};

function passwordShow() {
  let password = document.getElementById("password");
  let showEye = document.getElementById("showEye");
  let hideEye = document.getElementById("hideEye");
  password.type = "text";
  showEye.style.display = "none";
  hideEye.style.display = "inline";
  password.focus();
}
function passwordHide() {
  let password = document.getElementById("password");
  let showEye = document.getElementById("showEye");
  let hideEye = document.getElementById("hideEye");
  password.type = "password";
  showEye.style.display = "inline";
  hideEye.style.display = "none";
  password.focus();
}
function passwordConfirmShow() {
  let password = document.getElementById("password_confirmation");
  let showEye = document.getElementById("showConfirmEye");
  let hideEye = document.getElementById("hideConfirmEye");
  password.type = "text";
  showEye.style.display = "none";
  hideEye.style.display = "inline";
  password.focus();
}
function passwordConfirmHide() {
  let password = document.getElementById("password_confirmation");
  let showEye = document.getElementById("showConfirmEye");
  let hideEye = document.getElementById("hideConfirmEye");
  password.type = "password";
  showEye.style.display = "inline";
  hideEye.style.display = "none";
  password.focus();
}
// let user = localStorage.setItem(USERNAME, emailField.value);
// let password=  localStorage.setItem(PASSWORD, passwordField.value);
const USERNAME = "username";
const PASSWORD = "password";

let emailField = document.getElementById("email");
let passwordField = document.getElementById("password");
let confirmPasswordField = document.getElementById("password_confirmation");
let submitRegisBtn = document.getElementById("submitBtn");

submitRegisBtn.addEventListener("click", function (e) {
  // kiem tra su hop le cua email
  e.preventDefault();
  if (emailField.value == "") {
    console.log("email khong duoc bo trong");
  } else if (emailField.value.length < 6) {
    console.log("email can lon hon hoac bang 6 ky tu");
  } else if (emailField.value.length > 32) {
    console.log("email can nho hon hoac bang 32 ky tu");
  } else {
    console.log("email ok");
  }

  // kiem tra su hop le cua password
  if (passwordField.value == "") {
    console.log("password khong duoc bo trong");
  } else {
    console.log("password ok");
  }

  // kiem tra su trung khop cua password
  if (confirmPasswordField.value == "") {
    console.log("confirmPasswordField khong duoc bo trong");
  } else if (passwordField.value != confirmPasswordField.value) {
    console.log("mat khau khong trung khop");
  } else {
    console.log("confirm password ok");
  }

  let username = localStorage.getItem(USERNAME);
  if (username != emailField.value) {
    sessionStorage.setItem(USERNAME, emailField.value);
    sessionStorage.setItem(PASSWORD, passwordField.value);
    localStorage.setItem(USERNAME, emailField.value);
    localStorage.setItem(PASSWORD, passwordField.value);
    console.log(1);
    window.location.href = "./index.html";
  } else {
    console.log("tai khoan da ton tai");
  }
});

// if (getCookie("isRemember")) {
//   window.location.href = "./index.html";
// }

// function getCookie(cookieName) {
//   let cookie = {};
//   document.cookie.split(";").forEach(function (el) {
//     let [key, value] = el.split("=");
//     cookie[key.trim()] = value;
//   });
//   return cookie[cookieName];
// }
