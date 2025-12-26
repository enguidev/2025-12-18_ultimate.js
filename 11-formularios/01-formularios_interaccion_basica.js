// ===============================
// Acceso a valores del formulario
// ===============================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita recarga
  const nombre = formulario.elements["nombre"].value;
  const email = formulario.elements["email"].value;
  console.log("📨 Nombre:", nombre);
  console.log("📨 Email:", email);
});
