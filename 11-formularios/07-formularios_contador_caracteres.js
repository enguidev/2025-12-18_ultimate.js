// Contador de caracteres para textarea
const textarea = document.getElementById("mensaje");
const maxCaracteres = 200;

const contador = document.createElement("div");
contador.style.textAlign = "right";
contador.style.fontSize = "0.9rem";
contador.style.color = "#666";
textarea.after(contador);

textarea.addEventListener("input", () => {
  const longitud = textarea.value.length;
  contador.textContent = `${longitud} / ${maxCaracteres}`;

  if (longitud > maxCaracteres * 0.9) {
    contador.style.color = "red";
  } else {
    contador.style.color = "#666";
  }

  // Limitar caracteres
  if (longitud > maxCaracteres) {
    textarea.value = textarea.value.substring(0, maxCaracteres);
  }
});
