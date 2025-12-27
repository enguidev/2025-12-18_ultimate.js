// ===============================
// Validación con HTML5
// ===============================

const formulario = document.getElementById("formulario");
const botonEnviar = formulario.querySelector('button[type="submit"]');

// ===================================
// VALIDACIÓN EN SUBMIT
// ===================================

botonEnviar.addEventListener("click", (e) => {
  e.preventDefault(); // Evita el envío automático

  // Verificar si el formulario es válido según HTML5
  if (!formulario.checkValidity()) {
    // Mostrar los mensajes nativos del navegador
    formulario.reportValidity();

    console.warn("❌ Formulario inválido según HTML5");

    // Obtener información detallada de campos inválidos
    const camposInvalidos = formulario.querySelectorAll(":invalid");

    console.log(`📋 Total de campos inválidos: ${camposInvalidos.length}`);

    camposInvalidos.forEach((campo, index) => {
      console.log(`\n  Campo ${index + 1}:`);
      console.log(`    - Nombre: ${campo.name}`);
      console.log(`    - ID: ${campo.id}`);
      console.log(`    - Valor: "${campo.value}"`);
      console.log(`    - Mensaje: ${campo.validationMessage}`);

      // Razón específica de invalidez
      if (campo.validity.valueMissing) {
        console.log(`    - Razón: Campo requerido vacío`);
      }
      if (campo.validity.typeMismatch) {
        console.log(`    - Razón: Tipo de dato incorrecto`);
      }
      if (campo.validity.tooShort) {
        console.log(`    - Razón: Muy corto (min: ${campo.minLength})`);
      }
      if (campo.validity.tooLong) {
        console.log(`    - Razón: Muy largo (max: ${campo.maxLength})`);
      }
      if (campo.validity.patternMismatch) {
        console.log(`    - Razón: No coincide con el patrón`);
      }
    });
  } else {
    // Formulario válido
    console.log("✅ Formulario válido según HTML5\n");

    // Obtener todos los datos con FormData
    const formData = new FormData(formulario);

    console.log("📨 Datos a enviar:");
    for (let [key, value] of formData.entries()) {
      console.log(`  ${key}: ${value}`);
    }

    // Convertir a objeto
    const datos = Object.fromEntries(formData);
    console.log("\n🎯 Objeto JavaScript:", datos);

    // Convertir a JSON (para enviar al servidor)
    const json = JSON.stringify(datos, null, 2);
    console.log("\n📄 Formato JSON:");
    console.log(json);

    alert("✅ Formulario válido. Revisa la consola para ver los datos.");

    // Aquí podrías enviar los datos al servidor
    // fetch('/api/contacto', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: json
    // });
  }
});

// ===================================
// VALIDACIÓN PERSONALIZADA
// ===================================

// Ejemplo: Validar que el nombre no contenga números
const inputNombre = formulario.elements["nombre"];

if (inputNombre) {
  inputNombre.addEventListener("input", () => {
    const tieneNumeros = /\d/.test(inputNombre.value);

    if (tieneNumeros) {
      inputNombre.setCustomValidity("El nombre no puede contener números");
    } else {
      inputNombre.setCustomValidity(""); // Limpiar error personalizado
    }
  });
}

// ===================================
// EVENTO INVALID (cuando un campo no es válido)
// ===================================

formulario.addEventListener(
  "invalid",
  (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto

    console.log(`\n⚠️ Campo inválido detectado:`);
    console.log(`  Campo: ${e.target.name}`);
    console.log(`  Mensaje: ${e.target.validationMessage}`);

    // Añadir clase de error
    e.target.classList.add("error");
  },
  true
); // true = captura (necesario para que funcione con invalid)

// Quitar clase de error cuando el campo se vuelve válido
formulario.querySelectorAll("input, textarea, select").forEach((campo) => {
  campo.addEventListener("input", () => {
    if (campo.validity.valid) {
      campo.classList.remove("error");
      campo.classList.add("success");
    }
  });
});

console.log("✅ Validación HTML5 cargada correctamente");
console.log(
  "💡 Tip: Revisa el HTML para ver los atributos required, minlength, type, etc."
);
