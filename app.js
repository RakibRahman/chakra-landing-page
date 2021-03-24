const wrapperMain = document.getElementById("wrapper");
const header = document.getElementById("header");
const showForm = document.getElementById("formWrapper");
const getForm = document.getElementById("getStart");
const register = document.getElementById("register");
const logIn = document.getElementById("logIn");
const closeForm = document.getElementById("closeForm");
const email = document.getElementById("email");
const title = document.getElementById("titleForm");

const visibleForm = () => {
  showForm.style.display = "flex";
  wrapperMain.style.display = "none";
  header.style.display = "none";
};
const hideEmail = () => {
  showForm.style.display = "flex";
  wrapperMain.style.display = "none";
  header.style.display = "none";
  email.style.display = "none";
  title.innerHTML = "Log In";
};
getForm.addEventListener("click", visibleForm);
logIn.addEventListener("click", hideEmail);
register.addEventListener("click", visibleForm);

//Close the form
closeForm.addEventListener("click", function () {
  showForm.style.display = "none";
  wrapperMain.style.display = "flex";
  header.style.display = "block";
});
