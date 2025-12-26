// ➕ Agregar ítems dinámicamente a una lista

function agregarItem(texto) {
  // Crea un nuevo elemento <li>
  const nuevoItem = document.createElement("li");

  // Asigna el texto recibido como contenido
  nuevoItem.textContent = texto;

  // Añade el nuevo ítem a la lista existente
  document.querySelector("ul").appendChild(nuevoItem);
}

// Ejemplo de uso
agregarItem("Nuevo ítem dinámico");

/*
Tenemos una lista con 5 elementos y queremos agregar
un elemento nuevo entre el 3º y 4º elemento.
*/
// Creamos el elemento nuevo
const elementoNuevo = document.createElement("li");

// Seleccionamos el contenedor
const lista = document.getElementById("lista");

// Insertamos el elemento nuevo entre el 3º y 4º (antes del 4º)
lista.insertBefore(elementoNuevo, lista.children[3]);

// ***************************************************************

// ¿Y si queremos intercambiar el elemento 2º por el 4º?

// Recuperamos la lista (ya lo hemos hecho arriba)
// const lista = document.getElementById("lista");

// Seleccionamos los elementos a intercambiar
const elemento2 = lista.children[1];
const elemento4 = lista.children[3];

// Clonamos uno de ellos para poder intercambiar
const clon2 = elemento2.cloneNode(true);
const clon4 = elemento4.cloneNode(true);

// Sustituimos
lista.replaceChild(clon2, elemento4);
lista.replaceChild(clon4, elemento2);

// También podemos hacerlo con insertBefore //

// Recuperamos la lista (ya lo hemos hecho arriba)
// const lista = document.getElementById("lista");

// Seleccionamos los elementos a intercambiar (que ya hemos hecho arriba)
// const elemento2= lista.children[1];
// const elemento4= lista.children[3];

// Guardamos la referencia al siguiente del 2º
const despuesDel2 = elemento2.nextElementSibling;

// Movemos el 4º antes del 2º
lista.insertBefore(elemento4, elemento2);

// Movemos el 2º antes del que era el siguiente del 4º
lista.insertBefore(elemento2, despuesDel2);

// ***************************************************************

// ¿Y si dice que el 2º lo pongamos entre el 3º y 4º?

// Recuperamos la lista (ya lo hemos hecho arriba)
// const lista = document.getElementById("lista");

// Seleccionamos los elementos a intercambiar (que ya hemos hecho arriba)
// const elemento2= lista.children[1];
// const elemento4= lista.children[3];

// insertamos el 2 justo antes del 4
lista.insertBefore(elemento2, elemento4);

// También podemos hacerlo con nextElementSibling //

// Recuperamos la lista (ya lo hemos hecho arriba)
// const lista = document.getElementById("lista");

// Seleccionamos los elementos a intercambiar
// const elemento2= lista.children[1];
 const elemento3= lista.children[2];

// Insertamos el 2 justo antes del hermano siguiente del 3 (que es el 4)
lista.insertBefore(elemento2, elemento3.nextElementSibling);
