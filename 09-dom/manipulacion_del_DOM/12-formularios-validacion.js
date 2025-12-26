// 📋 Validación básica de formularios

const form = document.querySelector("form");

// Intercepta el envío del formulario
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el envío real

  // Obtiene el valor del campo 'nombre'
  const nombre = form.querySelector('input[name="nombre"]').value;

  // Verifica si el campo está vacío
  if (nombre.trim() === "") {
    alert("El nombre es obligatorio");
  } else {
    console.log("Formulario enviado con nombre:", nombre);
  }
});
