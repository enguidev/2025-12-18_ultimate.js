// ===============================
// Resetear o limpiar campos
// ===============================

const formulario = document.getElementById("formulario");

document.querySelector(".btn").addEventListener("click", () => {
  formulario.reset(); // Limpia todos los campos
  console.log("🧹 Formulario reseteado");
});
