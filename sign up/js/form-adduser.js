// form add new user
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let userName = document.querySelector(`#username`);
let userNameLabel = document.querySelector(`label[for="username"`);

let email = document.querySelector(`#email`);
let emailLabel = document.querySelector(`label[for="email"`);

let password1 = document.querySelector(`#password1`);
let password1Label = document.querySelector(`label[for="password1"`);

let password2 = document.querySelector(`#password2`);
let password2Label = document.querySelector(`label[for="password2"`);

let validMsg = document.getElementById("msgvalid");
let errorMsg = document.getElementById("msgerror");

let btnsubmit = document.getElementById(`btn`);

// Load existing data from localStorage
const storedData = localStorage.getItem("user_data");
const store = storedData ? JSON.parse(storedData) : [];

userName.addEventListener(`keyup`, function (event) {
  event.preventDefault();
  if (userName.value.length < 3) {
    userNameLabel.style.color = "red";
    userName.style.borderColor = "red";
  } else {
    userNameLabel.style.color = "green";
    userName.style.borderColor = "green";
  }
});

email.addEventListener(`keyup`, function (event) {
  event.preventDefault();
  if (!email.value.match(emailPattern)) {
    emailLabel.style.color = "red";
    email.style.borderColor = "red";
  } else {
    emailLabel.style.color = "green";
    email.style.borderColor = "green";
  }
});

password1.addEventListener(`keyup`, function (event) {
  event.preventDefault();
  if (password1.value.length < 5) {
    password1Label.style.color = "red";
    password1.style.borderColor = "red";
  } else {
    password1Label.style.color = "green";
    password1.style.borderColor = "green";
  }
});
password2.addEventListener(`keyup`, function (event) {
  event.preventDefault();
  if (password1.value === password2.value && password2.value.length >= 5) {
    password2Label.style.color = "green";
    password2.style.borderColor = "green";
  } else {
    password2Label.style.color = "red";
    password2.style.borderColor = "red";
  }
});

// submit form
btnsubmit.addEventListener(`click`, function (event) {
  event.preventDefault();
  if (
    userName.style.borderColor === "green" &&
    email.style.borderColor === "green" &&
    password1.value === password2.value &&
    password1.value.length > 0 &&
    password2.value.length > 0
  ) {
    validMsg.classList.remove(`valid_user`);
    validMsg.classList.add(`valid_user_1`);

    // Save data to localStorage
    const userData = {
      username: userName.value,
      email: email.value,
      password: password1.value,
    };

    // Add new data to existing data
    store.push(userData);

    // Save the updated data back to localStorage
    localStorage.setItem("user_data", JSON.stringify(store));

    console.log(userData);

    setTimeout(() => {
      window.location.href = "index.html";
    }, 4000);
  } else {
    errorMsg.classList.remove(`error`);
    errorMsg.classList.add(`error_1`);
    errorMsg.innerHTML = `Error`;
    setTimeout(() => {
      errorMsg.classList.remove(`error_1`);
      errorMsg.innerHTML = ``;
    }, 4000);
  }
});

// ckeck password
let btn1 = document.querySelector("#eye");
btn1.addEventListener("mouseenter", function () {
  let input = document.querySelector("#password1");
  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});

let btn2 = document.querySelector("#ey");
btn2.addEventListener("mouseleave", function () {
  let input = document.querySelector("#password2");
  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});
