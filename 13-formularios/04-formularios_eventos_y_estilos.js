// ===============================
// Eventos de foco y estilos dinámicos
// ===============================

const formulario = document.getElementById("formulario");
const inputNombre = formulario.elements["nombre"];
const inputEmail = formulario.elements["email"];

// ===================================
// ESTILOS DINÁMICOS CON CLASES CSS
// ===================================

/**
 * Aplicar estilo de foco a un input
 * @param {HTMLElement} input - El campo de entrada
 */
function aplicarEstiloFoco(input) {
  input.classList.add("input-focus");
  console.log(`🎯 Focus en: ${input.name}`);
}

/**
 * Quitar estilo de foco de un input
 * @param {HTMLElement} input - El campo de entrada
 */
function quitarEstiloFoco(input) {
  input.classList.remove("input-focus");
  console.log(`👋 Blur en: ${input.name}`);
}

// ===================================
// EVENTOS FOCUS Y BLUR
// ===================================

// Aplicar a todos los inputs, textareas y selects del formulario
const camposFormulario = formulario.querySelectorAll("input, textarea, select");

camposFormulario.forEach((campo) => {
  // Evento FOCUS - cuando el campo recibe el foco
  campo.addEventListener("focus", () => {
    aplicarEstiloFoco(campo);
  });

  // Evento BLUR - cuando el campo pierde el foco
  campo.addEventListener("blur", () => {
    quitarEstiloFoco(campo);

    // Validar si el campo tiene contenido
    if (campo.value.trim() !== "") {
      validarCampo(campo);
    }
  });

  // Evento INPUT - mientras el usuario escribe
  campo.addEventListener("input", () => {
    // Quitar error mientras escribe
    campo.classList.remove("error");

    console.log(`✏️ Escribiendo en ${campo.name}: "${campo.value}"`);

    // Si el campo tenía un error, quitarlo mientras escribe
    const mensajeError = campo.nextElementSibling;
    if (mensajeError && mensajeError.classList.contains("mensaje-error")) {
      mensajeError.remove();
    }
  });

  // Evento CHANGE - cuando cambia y pierde el foco
  campo.addEventListener("change", () => {
    console.log(`🔄 Campo ${campo.name} cambió a: "${campo.value}"`);
  });
});

// ===================================
// VALIDACIÓN DE CAMPOS
// ===================================

/**
 * Valida un campo individual
 * @param {HTMLElement} campo - El campo a validar
 */
function validarCampo(campo) {
  const valor = campo.value.trim();

  // Validar según el tipo de campo
  if (campo.type === "email") {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(valor)) {
      campo.classList.add("error");
      campo.classList.remove("success");
      console.warn(`❌ Email inválido: ${valor}`);
      return false;
    }
  }

  if (campo.hasAttribute("required") && valor === "") {
    campo.classList.add("error");
    campo.classList.remove("success");
    console.warn(`❌ Campo requerido vacío: ${campo.name}`);
    return false;
  }

  if (campo.hasAttribute("minlength")) {
    const minLength = parseInt(campo.getAttribute("minlength"));
    if (valor.length < minLength) {
      campo.classList.add("error");
      campo.classList.remove("success");
      console.warn(
        `❌ ${campo.name} muy corto. Mínimo ${minLength} caracteres`
      );
      return false;
    }
  }

  // Si todo está bien
  campo.classList.add("success");
  campo.classList.remove("error");
  console.log(`✅ Campo ${campo.name} válido`);
  return true;
}

// ===================================
// FEEDBACK VISUAL EN TIEMPO REAL
// ===================================

// Ejemplo específico para el campo email con validación en tiempo real
if (inputEmail) {
  let timeoutId;

  inputEmail.addEventListener("input", () => {
    // Limpiar timeout anterior
    clearTimeout(timeoutId);

    // Esperar 500ms después de que el usuario deje de escribir
    timeoutId = setTimeout(() => {
      const email = inputEmail.value.trim();

      if (email.length > 0) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (regexEmail.test(email)) {
          inputEmail.classList.add("success");
          inputEmail.classList.remove("error");
          console.log("✅ Email válido en tiempo real");
        } else {
          inputEmail.classList.add("error");
          inputEmail.classList.remove("success");
          console.warn("❌ Email inválido en tiempo real");
        }
      }
    }, 500); // Debounce de 500ms
  });
}

// ===================================
// ANIMACIÓN AL ENVIAR EL FORMULARIO
// ===================================

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validar todos los campos
  let todosValidos = true;

  camposFormulario.forEach((campo) => {
    if (campo.value.trim() !== "") {
      if (!validarCampo(campo)) {
        todosValidos = false;
      }
    } else if (campo.hasAttribute("required")) {
      campo.classList.add("error");
      todosValidos = false;
    }
  });

  if (todosValidos) {
    console.log("✅ Todos los campos son válidos");

    // Animación de éxito
    formulario.style.transition = "all 0.3s ease";
    formulario.style.transform = "scale(0.98)";
    formulario.style.opacity = "0.8";

    setTimeout(() => {
      formulario.style.transform = "scale(1)";
      formulario.style.opacity = "1";
      alert("✅ Formulario enviado correctamente");
    }, 200);
  } else {
    console.warn("❌ Hay campos inválidos");

    // Animación de error (shake)
    formulario.style.animation = "shake 0.5s";
    setTimeout(() => {
      formulario.style.animation = "";
    }, 500);
  }
});

console.log("✅ Eventos y estilos cargados correctamente");
console.log("💡 Interactúa con los campos para ver los efectos visuales");
