const form = document.getElementById("form");
const inputmail = document.getElementById("email");
const dismissBtn = document.getElementById("dismiss");
const signupPage = document.getElementById("sign-up");
const successPage = document.getElementById("success");
const submittedEmail = document.getElementById("submittedEmail");
const validationMessage = document.getElementById("validationMessage");
successPage.style.display = "none";

function submitHandler(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");

  validationMessage.innerText = validateEmail(email);

  if (validationMessage.innerText) {
    inputmail.classList.add("email-error");
  } else {
    inputmail.classList.remove("email-error");
    submittedEmail.innerText = email;
    signupPage.classList.add("hidden");
    successPage.style.display = "block";
  }
}

function validateEmail(mail) {
  if (!mail) {
    return "Email is required";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
    return "Please enter a valid email";
  }
  return "";
}

function returnMain() {
  successPage.style.display = "none";
  signupPage.classList.remove("hidden");
  inputmail.value = "";
  inputmail.classList.remove("email-error");
  validationMessage.innerText = "";
}

form.addEventListener("submit", submitHandler);
dismissBtn.addEventListener("click", returnMain);
