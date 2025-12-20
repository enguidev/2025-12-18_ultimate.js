// ===============================
// Métodos de eventos
// ===============================

// Capturar un evento
document.addEventListener("click", () => {
  console.log("🖱️ Se hizo clic en el documento");
});

// Eliminar captura del evento
const handler = () => {
  console.log("🖱️ Listener eliminado");
};
document.removeEventListener("click", handler);

// ===============================
// Eventos clave del ciclo de vida del documento
// ===============================

// Detectar cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 El DOM está completamente cargado y listo\n\n");
});

// Detectar cambios de visibilidad (cuando el usuario cambia de pestaña)
document.addEventListener("visibilitychange", () => {
  console.log("👀 Cambio de visibilidad:\n", document.visibilityState, "\n\n");
});

// Detectar cambios en el estado de carga del documento
document.onreadystatechange = () => {
  console.log("🔄 Estado del documento:\n", document.readyState, "\n\n");
};

// ===============================
// Métodos obsoletos (solo demostrativos)
// ===============================

// ⚠️ Estos métodos eran usados en navegadores antiguos como Netscape
// document.captureEvents(); // capturar evento ⚠️ Obsoleto
// document.releaseEvents(); // Liberar evento ⚠️ Obsoleto
console.log(
  "⚠️ Métodos captureEvents y releaseEvents están obsoletos y no deben usarse\n\n"
);
