// 🧨 Eventos básicos en elementos

const boton = document.querySelector(".btn");

// Añade un evento de clic al botón
boton.addEventListener("click", function () {
  alert("¡Has hecho clic en el botón!");
});

// También se puede usar una función nombrada
function mostrarMensaje() {
  console.log("Evento mouseover activado");
}
boton.addEventListener("mouseover", mostrarMensaje);
