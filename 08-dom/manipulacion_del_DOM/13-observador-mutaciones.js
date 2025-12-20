// 🔍 Observador de mutaciones en el DOM

// Crea un observador que detecta cambios en el DOM
const observador = new MutationObserver((muts) => {
  console.log("Cambios detectados:", muts);
});

// Configura qué tipo de cambios observar
observador.observe(document.body, {
  childList: true, // Nuevos o eliminados hijos
  subtree: true, // Incluye nodos descendientes
});

// Prueba: añade un elemento para disparar el observador
const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);
