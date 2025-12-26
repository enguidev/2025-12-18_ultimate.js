// ===============================
// Métodos de posición
// ===============================
console.log(
  "🎯 Elemento en punto (100,100):",
  document.elementFromPoint(100, 100)
);
console.log("🧠 Texto seleccionado:", document.getSelection().toString());

// ===============================
// Métodos de inspección de estado
// ===============================
console.log("📶 Tiene foco:", document.hasFocus());
console.log("Estado de carga:\n", document.readyState, "\n\n"); // loading, interactive, complete
console.log("Si la ventana tiene el foco:\n", document.hasFocus(), "\n\n");
console.log("Elemento actualmente enfocado:\n", document.activeElement, "\n\n");
console.log(
  "Si el documento está visible:\n",
  document.visibilityState,
  "\n\n"
); // visible, hidden

// ===============================
// Propiedades complementarias de estado
// ===============================
console.log("🔒 Documento oculto (booleano):\n", document.hidden, "\n\n"); // true o false
console.log(
  "🖱️ Elemento con bloqueo de puntero:\n",
  document.pointerLockElement,
  "\n\n"
); // null o el elemento bloqueado
