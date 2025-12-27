// ===============================
// Acceso a valores del formulario
// ===============================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita recarga
  const nombre = formulario.elements["nombre"].value.trim();
  const email = formulario.elements["email"].value.trim();

  // AÑADIR: Verificar si están vacíos
  if (!nombre || !email) {
    console.warn("⚠️ Campos vacíos detectados");
    return;
  }

  console.log("📨 Nombre:", nombre);
  console.log("📨 Email:", email);
});
