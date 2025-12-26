// ===============================
// Resetear y limpiar formularios
// ===============================

const formulario = document.getElementById("formulario");
const btnReset = document.querySelector(".btn");

// ===================================
// MÉTODO 1: USAR form.reset()
// ===================================

btnReset.addEventListener("click", () => {
  // Mostrar confirmación antes de limpiar
  const confirmacion = confirm(
    "¿Estás seguro de que quieres limpiar el formulario?"
  );

  if (confirmacion) {
    // Resetear el formulario
    formulario.reset();

    // Limpiar mensajes de error
    limpiarMensajesError();

    // Limpiar clases de validación
    limpiarClasesValidacion();

    console.log("🧹 Formulario reseteado completamente");
    console.log("  - Campos limpiados ✅");
    console.log("  - Mensajes de error eliminados ✅");
    console.log("  - Clases CSS removidas ✅");
  } else {
    console.log("❌ Reset cancelado por el usuario");
  }
});

// ===================================
// MÉTODO 2: ESCUCHAR EVENTO RESET NATIVO
// ===================================

formulario.addEventListener("reset", (e) => {
  console.log("🔄 Evento reset disparado");

  // Puedes prevenir el reset si quieres
  // e.preventDefault();

  // Realizar limpieza adicional después del reset
  setTimeout(() => {
    limpiarMensajesError();
    limpiarClasesValidacion();
    console.log("✅ Limpieza post-reset completada");
  }, 10); // Pequeño delay para que el reset termine
});

// ===================================
// FUNCIONES DE LIMPIEZA
// ===================================

/**
 * Elimina todos los mensajes de error del formulario
 */
function limpiarMensajesError() {
  const mensajesError = document.querySelectorAll(".mensaje-error");
  mensajesError.forEach((mensaje) => mensaje.remove());

  console.log(`  🗑️ ${mensajesError.length} mensajes de error eliminados`);
}

/**
 * Elimina todas las clases de validación de los campos
 */
function limpiarClasesValidacion() {
  const campos = formulario.querySelectorAll("input, textarea, select");

  let clasesEliminadas = 0;

  campos.forEach((campo) => {
    const teniaCases =
      campo.classList.contains("error") ||
      campo.classList.contains("success") ||
      campo.classList.contains("input-focus");

    campo.classList.remove("error", "success", "input-focus");

    if (teniaCases) clasesEliminadas++;
  });

  console.log(
    `  🎨 Clases de validación eliminadas de ${clasesEliminadas} campos`
  );
}

/**
 * Limpia el formulario manualmente (sin usar reset())
 */
function limpiarFormularioManual() {
  const campos = formulario.querySelectorAll("input, textarea, select");

  campos.forEach((campo) => {
    if (campo.type === "checkbox" || campo.type === "radio") {
      campo.checked = false;
    } else {
      campo.value = "";
    }
  });

  limpiarMensajesError();
  limpiarClasesValidacion();

  console.log("🧹 Formulario limpiado manualmente");
}

// ===================================
// MÉTODO 3: BOTÓN DE LIMPIEZA MANUAL
// ===================================

// Crear un botón adicional para limpieza manual
const btnLimpiarManual = document.createElement("button");
btnLimpiarManual.type = "button";
btnLimpiarManual.textContent = "🗑️ Limpiar Manual";
btnLimpiarManual.style.cssText = "margin-left: 10px; background: #dc3545;";

// Añadir el botón después del botón de reset
btnReset.after(btnLimpiarManual);

btnLimpiarManual.addEventListener("click", () => {
  limpiarFormularioManual();
  alert("✅ Formulario limpiado manualmente");
});

// ===================================
// MÉTODO 4: LIMPIAR CAMPOS INDIVIDUALES
// ===================================

/**
 * Limpia un campo específico
 * @param {string} nombreCampo - El nombre del campo a limpiar
 */
function limpiarCampo(nombreCampo) {
  const campo = formulario.elements[nombreCampo];

  if (campo) {
    campo.value = "";
    campo.classList.remove("error", "success", "input-focus");

    // Eliminar mensaje de error si existe
    const mensajeError = campo.nextElementSibling;
    if (mensajeError && mensajeError.classList.contains("mensaje-error")) {
      mensajeError.remove();
    }

    console.log(`✅ Campo "${nombreCampo}" limpiado`);
  } else {
    console.warn(`⚠️ Campo "${nombreCampo}" no encontrado`);
  }
}

// Ejemplo de uso:
// limpiarCampo("nombre");
// limpiarCampo("email");

// ===================================
// MÉTODO 5: RESTAURAR VALORES POR DEFECTO
// ===================================

// Guardar valores iniciales
const valoresIniciales = {};

formulario.querySelectorAll("input, textarea, select").forEach((campo) => {
  valoresIniciales[campo.name] = campo.value;
});

/**
 * Restaura los valores por defecto del formulario
 */
function restaurarValoresDefecto() {
  Object.keys(valoresIniciales).forEach((nombre) => {
    const campo = formulario.elements[nombre];
    if (campo) {
      campo.value = valoresIniciales[nombre];
    }
  });

  limpiarMensajesError();
  limpiarClasesValidacion();

  console.log("🔄 Valores por defecto restaurados");
}

// Crear botón para restaurar valores
const btnRestaurar = document.createElement("button");
btnRestaurar.type = "button";
btnRestaurar.textContent = "↩️ Restaurar Defecto";
btnRestaurar.style.cssText =
  "margin-left: 10px; background: #ffc107; color: #333;";

btnLimpiarManual.after(btnRestaurar);

btnRestaurar.addEventListener("click", () => {
  restaurarValoresDefecto();
  alert("↩️ Valores por defecto restaurados");
});

// ===================================
// MÉTODO 6: PREVENIR PÉRDIDA DE DATOS ACCIDENTAL
// ===================================

// Advertir si el usuario intenta salir con datos sin guardar
let formularioModificado = false;

formulario.addEventListener("input", () => {
  formularioModificado = true;
});

formulario.addEventListener("submit", () => {
  formularioModificado = false; // Ya se guardó
});

formulario.addEventListener("reset", () => {
  formularioModificado = false; // Ya se limpió intencionalmente
});

window.addEventListener("beforeunload", (e) => {
  if (formularioModificado) {
    e.preventDefault();
    e.returnValue = ""; // Necesario para algunos navegadores
    return "¿Seguro que quieres salir? Tienes cambios sin guardar.";
  }
});

console.log("✅ Reset y limpieza de formularios cargado correctamente");
console.log("💡 Métodos disponibles:");
console.log("  1. form.reset() - Reset nativo del navegador");
console.log("  2. Limpieza manual de campos");
console.log("  3. Restaurar valores por defecto");
console.log("  4. Prevención de pérdida de datos");
