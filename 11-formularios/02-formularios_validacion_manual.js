// ===============================
// Validación manual con mensajes visuales
// ===============================

// Recuperamos los elementos del HTML que necesitamos
const formulario = document.getElementById("formulario");
const inputNombre = formulario.elements["nombre"];
const inputEmail = formulario.elements["email"];

// ===================================
// FUNCIONES REUTILIZABLES
// ===================================

/**
 * Muestra un mensaje de error debajo del input
 * @param {HTMLElement} input - El campo de entrada
 * @param {string} mensaje - El mensaje de error a mostrar
 */
function mostrarError(input, mensaje) {
  // Eliminar error anterior si existe
  quitarError(input);

  const divError = document.createElement("div");
  divError.className = "mensaje-error";
  divError.textContent = mensaje;
  divError.style.color = "red";
  divError.style.fontSize = "0.9rem";
  divError.style.marginTop = "0.25rem";
  divError.style.marginBottom = "1rem";

  input.insertAdjacentElement("afterend", divError);
  input.classList.add("error");
  input.classList.remove("success");
}

/**
 * Quita el mensaje de error de un input
 * @param {HTMLElement} input - El campo de entrada
 */
function quitarError(input) {
  const errorSiguiente = input.nextElementSibling;
  if (errorSiguiente && errorSiguiente.classList.contains("mensaje-error")) {
    errorSiguiente.remove();
  }
  input.classList.remove("error");
}

/**
 * Marca un campo como válido
 * @param {HTMLElement} input - El campo de entrada
 */
function marcarExito(input) {
  quitarError(input);
  input.classList.add("success");
  input.classList.remove("error");
}

/**
 * Valida el campo nombre
 * @param {string} nombre - El valor del nombre
 * @returns {boolean} - true si es válido
 */
function validarNombre(nombre) {
  if (nombre.trim() === "") {
    mostrarError(inputNombre, "⚠️ El campo nombre no puede estar vacío");
    return false;
  }

  if (nombre.trim().length < 3) {
    mostrarError(inputNombre, "⚠️ El nombre debe tener al menos 3 caracteres");
    return false;
  }

  marcarExito(inputNombre);
  return true;
}

/**
 * Valida el campo email
 * @param {string} email - El valor del email
 * @returns {boolean} - true si es válido
 */
function validarEmail(email) {
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") {
    mostrarError(inputEmail, "⚠️ El campo email no puede estar vacío");
    return false;
  }

  if (!formatoEmail.test(email)) {
    mostrarError(
      inputEmail,
      "⚠️ El formato del email no es válido (ejemplo: usuario@dominio.com)"
    );
    return false;
  }

  marcarExito(inputEmail);
  return true;
}

// ===================================
// VALIDACIÓN EN SUBMIT
// ===================================

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = inputNombre.value;
  const email = inputEmail.value;

  // Validar todos los campos
  const nombreValido = validarNombre(nombre);
  const emailValido = validarEmail(email);

  // Si todos son válidos, procesar el formulario
  if (nombreValido && emailValido) {
    console.log("✅ Formulario válido");
    console.log("📨 Nombre:", nombre.trim());
    console.log("📨 Email:", email.trim());

    alert("✅ Formulario enviado correctamente");

    // Aquí podrías enviar los datos al servidor
    // fetch('/api/contacto', { method: 'POST', body: JSON.stringify({ nombre, email }) })
  } else {
    console.warn("❌ El formulario contiene errores");
  }
});

// ===================================
// VALIDACIÓN EN TIEMPO REAL (blur)
// ===================================

// Validar cuando el usuario sale del campo nombre
inputNombre.addEventListener("blur", () => {
  if (inputNombre.value.length > 0) {
    validarNombre(inputNombre.value);
  }
});

// Validar cuando el usuario sale del campo email
inputEmail.addEventListener("blur", () => {
  if (inputEmail.value.length > 0) {
    validarEmail(inputEmail.value);
  }
});

// ===================================
// QUITAR ERRORES MIENTRAS ESCRIBE
// ===================================

inputNombre.addEventListener("input", () => {
  if (inputNombre.classList.contains("error")) {
    quitarError(inputNombre);
  }
});

inputEmail.addEventListener("input", () => {
  if (inputEmail.classList.contains("error")) {
    quitarError(inputEmail);
  }
});

console.log("✅ Validación manual cargada correctamente");
