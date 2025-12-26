// 🧭 Navegación entre nodos del DOM

const lista = document.querySelector("ul");

// Accede al primer elemento hijo
const primero = lista.firstElementChild;

// Accede al último elemento hijo
const ultimo = lista.lastElementChild;

// Accede al padre del primer ítem
const padre = primero.parentElement;

// Accede al siguiente hermano del primer ítem
const siguiente = primero.nextElementSibling;
