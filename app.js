const wrapperMain = document.getElementById("wrapper");
const header = document.getElementById("header");
const showForm = document.getElementById("formWrapper");
const getForm = document.getElementById("getStart");
const register = document.getElementById("register");
const logIn = document.getElementById("logIn");
const closeForm = document.getElementById("closeForm");
const email = document.getElementById("email");
const title = document.getElementById("titleForm");
const footer = document.getElementById("footer");
const signIn = document.getElementById("signIn");

const hideEmail = () => {
  showForm.style.display = "flex";
  wrapperMain.style.display = "none";
  header.style.display = "none";
  email.style.display = "none";
  title.innerHTML = "Log In";
  footer.style.display = "none";
};

const visibleForm = () => {
  showForm.style.display = "flex";
  wrapperMain.style.display = "none";
  header.style.display = "none";
  email.style.display = "block";
  title.innerHTML = "Sign Up";
  footer.style.display = "none";
};

getForm.addEventListener("click", visibleForm);
register.addEventListener("click", visibleForm);

logIn.addEventListener("click", hideEmail);
signIn.addEventListener("click", hideEmail);

//Close the form
closeForm.addEventListener("click", function () {
  showForm.style.display = "none";
  wrapperMain.style.display = "flex";
  header.style.display = "block";
  footer.style.display = "grid";
});
