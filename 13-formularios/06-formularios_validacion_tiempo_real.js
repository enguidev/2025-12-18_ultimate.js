// Validación mientras el usuario escribe
const formulario = document.getElementById("formulario");
const inputEmail = formulario.elements["email"];

inputEmail.addEventListener("input", (e) => {
  const email = e.target.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.length > 0) {
    if (regex.test(email)) {
      inputEmail.classList.remove("error");
      inputEmail.classList.add("success");
    } else {
      inputEmail.classList.remove("success");
      inputEmail.classList.add("error");
    }
  }
});
