const formulario = document.getElementById("formulario");
const botonEnviar = formulario.querySelector('button[type="submit"]');

botonEnviar.addEventListener("click", (e) => {
  e.preventDefault(); // Evita el envío automático

  if (!formulario.checkValidity()) {
    formulario.reportValidity(); // Muestra los mensajes del navegador
    console.warn("❌ Formulario inválido según HTML5");
  } else {
    console.log("✅ Formulario válido según HTML5");
    // Aquí puedes continuar con el envío manual si lo deseas
  }
});
