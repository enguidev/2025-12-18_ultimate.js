// ===============================
// Clipboard API moderna (navigator)
// ===============================

// Copiar texto al portapapeles
navigator.clipboard
  .writeText("Texto copiado con Clipboard API")
  .then(() => {
    console.log("✅ Texto copiado correctamente\n\n");
  })
  .catch((err) => {
    console.error("❌ Error al copiar el texto:\n", err, "\n\n");
  });

// Leer texto del portapapeles
navigator.clipboard
  .readText()
  .then((texto) => {
    console.log("📋 Texto leído del portapapeles:\n", texto, "\n\n");
  })
  .catch((err) => {
    console.error("❌ Error al leer el texto del portapapeles:\n", err, "\n\n");
  });

// ===============================
// Advertencias y requisitos de seguridad
// ===============================

// ⚠️ navigator.clipboard solo funciona en contextos seguros (HTTPS o localhost)
// ⚠️ Requiere interacción del usuario (clic, input, etc.) para activarse
// ⚠️ Puede estar restringido por permisos del navegador

// ===============================
// Comparativa con método obsoleto
// ===============================

// document.execCommand("copy"); // ⚠️ Obsoleto y no fiable en navegadores modernos
console.log(
  "⚠️ El método document.execCommand('copy') está obsoleto y no debe usarse\n\n"
);
