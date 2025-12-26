// 📌 Selección de elementos del DOM

// Selecciona un elemento por su ID único
const titulo = document.getElementById("titulo");
console.log("Elemento con ID titulo:\n", titulo, "\n\n"); // Lo muestra por consola

// Selecciona todos los elementos con una clase (devuelve HTMLCollection vacío porque no existe elemento con la clase item)
const items = document.getElementsByClassName("item");
console.log("Elementos con con la clase item:\n", items, "\n\n"); // Lo muestra por consola

// Selecciona todos los elementos con una clase (devuelve HTMLCollection con 4 elementos que tienen la clase parrafo)
const items2 = document.getElementsByClassName("parrafo");
console.log("Elementos con con la clase parrafo:\n", items2, "\n\n"); // Lo muestra por consola

// Selecciona todos los elementos con una etiqueta específica
const parrafos = document.getElementsByTagName("p");
console.log("Elementos con con la etiqueta p:\n", parrafos, "\n\n"); // Lo muestra por consola

// Selecciona el primer elemento que coincida con un selector CSS
const boton = document.querySelector(".btn");
console.log("Primer elemento la clase btn en el CSS:\n", boton, "\n\n"); // Lo muestra por consola

// Selecciona todos los elementos que coincida con un selector CSS
const boton2 = document.querySelectorAll(".btn");
console.log(
  "Todos los elementos con la clase btn en el CSS:\n",
  boton2,
  "\n\n"
); // Lo muestra por consol

// Selecciona todos los elementos con la clase .span que estén dentro de un elemento con clase .parrafo2
const destacados = document.querySelectorAll(".parrafo2 .span");
console.log(
  "con la clase .span que estén dentro de un elemento con clase .parrafo2:\n",
  destacados,
  "\n\n"
); // Lo muestra por consola

// Para seleccionar elementos que tengan simultáneamente las clases parrafo y especial, debes usar un selector compuesto sin espacio:
const elementos = document.querySelectorAll(".parrafo.especial");
console.log(
  "Elementos que tengan simultáneamente las clases parrafo y especial:\n",
  elementos,
  "\n\n"
);
