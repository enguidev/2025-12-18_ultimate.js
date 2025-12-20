/*¿Qué es la Delegación de Eventos?
La delegación de eventos es una técnica donde en lugar de añadir un event listener a cada elemento hijo, añadimos UN SOLO listener al elemento padre. Esto aprovecha el bubbling (propagación) de eventos en el DOM.

Ventajas: Mejor rendimiento, funciona con elementos dinámicos, menos memoria utilizada.*/

// Creamos un conjunto de elementos dentro del contenedor, el objetivo es que cada vez que hagan
// click en uno de ellos se escriba el contenido en el pie de la página
let contenedor = document.createElement("div");

document.body.append(contenedor);

for (let i = 0; i < 10; i++) {
  let cuadrado = document.createElement("div");
  cuadrado.classList.add("cuadrado");
  cuadrado.textContent = i + 1;
  contenedor.append(cuadrado);
  // Una opción seria asignar elementos a cada cuadrado (ejercicio)
}

// Otra opción seria delegar la captura de todos en el contenedor (ejercicio)

//Ejercicio: añadir un botón a la cabecera que borre el pie.
