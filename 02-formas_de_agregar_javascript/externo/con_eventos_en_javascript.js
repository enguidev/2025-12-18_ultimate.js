/*
1. DOMContentLoaded (más común)
Se ejecuta cuando el HTML está completamente parseado, sin esperar imágenes/CSS:
*/
document.addEventListener("DOMContentLoaded", function () {
  console.log("HTML cargado y listo");
  // Tu código aquí
  document.querySelector("h1").textContent = "Cambiado!";
});

// Versión corta con función anónima
document.addEventListener("DOMContentLoaded", () => {
  console.log("Listo con arrow function");
});

/*
2. window.onload
Espera a que TODO esté cargado (HTML, CSS, imágenes, etc.):
*/
window.addEventListener("load", function () {
  console.log("TODO cargado: HTML, imágenes, CSS");
  // Tu código aquí
});
// Sintaxis antigua (aún funciona)
window.onload = function () {
  console.log("Forma antigua");
};
