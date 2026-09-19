// JavaScript for Jay's Store

const menuButton = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    menuButton.setAttribute("aria-expanded", "false");
  }
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the values typed into the form.
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const success = document.getElementById("formSuccess");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  name.classList.remove("invalid");
  email.classList.remove("invalid");
  message.classList.remove("invalid");
  success.classList.remove("show");

  let valid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    name.classList.add("invalid");
    valid = false;
  }

  if (email.value.trim() === "" || !email.value.includes("@")) {
    emailError.textContent = "Please enter a valid email.";
    email.classList.add("invalid");
    valid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Please enter a message.";
    message.classList.add("invalid");
    valid = false;
  }

  if (valid) {
    success.textContent = "Your enquiry was submitted. This is a demo form.";
    success.classList.add("show");
    form.reset();
  }
});
