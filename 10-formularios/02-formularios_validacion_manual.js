// ===============================
// Validación manual con mensajes visuales
// ===============================

// Recuperamos los elementos del html que necesitamos
const formulario = document.getElementById("formulario");
const inputNombre = formulario.elements["nombre"];
const inputEmail = formulario.elements["email"];

// Crear contenedores de error si no existen
const mensajeNombre = document.createElement("div");
mensajeNombre.style.color = "red";
mensajeNombre.style.fontSize = "0.9rem";
mensajeNombre.style.marginTop = "-0.5rem";
mensajeNombre.style.marginBottom = "1rem";

const mensajeEmail = document.createElement("div");
mensajeEmail.style.color = "red";
mensajeEmail.style.fontSize = "0.9rem";
mensajeEmail.style.marginTop = "-0.5rem";
mensajeEmail.style.marginBottom = "1rem";

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Eliminar mensajes anteriores si existen
  mensajeNombre.remove();
  mensajeEmail.remove();

  let valido = true;

  // Validación campo nombre
  if (inputNombre.value.trim() === "") {
    mensajeNombre.textContent = "⚠️ El campo nombre no puede estar vacío";
    inputNombre.insertAdjacentElement("afterend", mensajeNombre);
    valido = false;
  }

  // Validación campo email
  const email = inputEmail.value.trim();
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    mensajeEmail.textContent = "⚠️ El campo email no puede estar vacío";
    inputEmail.insertAdjacentElement("afterend", mensajeEmail);
    valido = false;
  } else if (!formatoEmail.test(email)) {
    mensajeEmail.textContent = "⚠️ El formato del email no es válido";
    inputEmail.insertAdjacentElement("afterend", mensajeEmail);
    valido = false;
  }

  if (valido) {
    console.log("✅ Nombre:", inputNombre.value);
    console.log("✅ Email:", email);
  }
});
