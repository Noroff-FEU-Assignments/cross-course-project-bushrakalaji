const contactForm = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");

const nameError = document.querySelector("#nameError");

const subject = document.querySelector("#subject");

const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");

const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");

const addressError = document.querySelector("#addressError");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 10) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(address.value, 25) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

contactForm.addEventListener("submit", validateForm);

function checkLength(value, num) {
  if (value.trim().length > num) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}