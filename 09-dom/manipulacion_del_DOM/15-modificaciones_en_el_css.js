const titulo2 = document.getElementById("titulo2");
const titulo3 = document.getElementById("titulo3");

// Modificar estilos en línea
// Esto no cambia el archivo CSS, pero anula lo que diga el CSS externo para ese elemento.
titulo2.style.color = "red"; // Sobrescribe el color definido en CSS azul por el rojo

// Añadir o quitar clases CSS
// Esto activa o desactiva reglas que ya están en el archivo CSS, según las clases que añadas o quites.
titulo2.classList.add("oculto"); // Añade la clase oculto
titulo2.classList.remove("resaltado"); // Elimina la clase resaltado

// Modificar reglas CSS desde JavaScript (avanzado)
/*
Si el CSS está en una hoja <style> dentro del HTML, puedes acceder a ella:
Esto no funciona con archivos CSS externos si están en otro dominio (por seguridad del navegador).
*/
const hoja = document.styleSheets[0]; // Primera hoja CSS
console.log("Primera hoja CSS:\n", hoja, "\n\n");

const regla = hoja.cssRules[0]; // Primera regla
console.log("Primera regla:\n", regla, "\n\n");

regla.style.color = "green"; // Cambia la regla

// Alternar clases
// Este método añade la clase si no está, y la quita si ya está.
titulo3.classList.toggle("activo"); // Añade o quita 'activo'
