// 🧠 Delegación de eventos (útil para elementos dinámicos)

// Añade un único listener al contenedor <ul>
document.querySelector("ul").addEventListener("click", function (e) {
  // Verifica si el clic fue sobre un <li>
  if (e.target.tagName === "LI") {
    // Alterna la clase 'seleccionado' en el ítem clicado
    e.target.classList.toggle("seleccionado");
  }
});
