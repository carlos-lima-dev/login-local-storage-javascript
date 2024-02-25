let userLogin = document.querySelector(`#user`);
let userLabelLogin = document.querySelector('label[for="user"]');
let passwordLogin = document.querySelector(`#password`);
let passwordLabel = document.querySelector('label[for="password"]');
let validMsgLogin = document.getElementById("msg_valid");
let errorMsgLogin = document.getElementById("msg_error");
let submitLogin = document.getElementById(`btnlogin`);
let btnlogin = document.querySelector(".lnr-e");
let msgWelcome = document.querySelector(`.welcome_card`);
// name and password lenght
userLogin.addEventListener(`keyup`, function (event) {
  event.preventDefault();
  if (userLogin.value.length < 3) {
    userLabelLogin.style.color = "red";
    userLogin.style.borderColor = "red";
  } else {
    userLabelLogin.style.color = "green";
    userLogin.style.borderColor = "green";
  }
});

passwordLogin.addEventListener(`keyup`, function (event) {
  event.preventDefault();
  if (passwordLogin.value.length < 5) {
    passwordLabel.style.color = "red";
    passwordLogin.style.borderColor = "red";
  } else {
    passwordLabel.style.color = "green";
    passwordLogin.style.borderColor = "green";
  }
});

submitLogin.addEventListener(`click`, (event) => {
  event.preventDefault();

  // Retrieve user data from local storage
  const storeUser = JSON.parse(localStorage.getItem("user_data")) || [];

  let userFound = false;
  storeUser.forEach((user) => {
    if (
      userLogin.value === user.username &&
      passwordLogin.value === user.password
    ) {
      userFound = true;
    }
  });

  if (userFound) {
    validMsgLogin.classList.remove(`valid_user`);
    validMsgLogin.classList.add(`valid_user_1`);
    setTimeout(() => {
      window.location.href = "index3.html";
    }, 4000);
  } else {
    errorMsgLogin.classList.remove(`error`);
    errorMsgLogin.classList.add(`error_1`);
    errorMsgLogin.innerHTML = `Invalid user or password`;
    setTimeout(() => {
      errorMsgLogin.classList.remove(`error_1`);
      errorMsgLogin.innerHTML = ``;
    }, 4000);
  }
});

// Event listener for checking password visibility
btnlogin.addEventListener("mouseenter", function () {
  let input = document.querySelector("#password");
  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});

// Welcome message
function welcome() {
  setTimeout(() => {
    msgWelcome.classList.remove(`welcome_card`);
    msgWelcome.innerHTML = `<h1>Welcome to my login!</h1><h1>Tap to close!</h1>`;
    msgWelcome.classList.add(`welcome_card_add`);
  }, 2000);
}

msgWelcome.addEventListener(`click`, () => {
  msgWelcome.classList.remove(`welcome_card_add`);
  msgWelcome.innerHTML = ``;
});
