// ===============================
// Eventos de foco y estilos
// ===============================

const formulario = document.getElementById("formulario");
const inputNombre = formulario.elements["nombre"];

inputNombre.addEventListener("focus", () => {
  inputNombre.style.border = "2px solid blue";
});

inputNombre.addEventListener("blur", () => {
  inputNombre.style.border = "2px solid #ccc";
});
