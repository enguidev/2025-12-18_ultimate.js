// MODIFICAN EL ARRAY //
// Array para los ejemplos
let numeros = [5, 2, 8, 1, 4];
console.log("Array original: ", numeros); // Array original: [5, 2, 8, 1, 4]

// sort() – Ordena los elementos (por defecto como strings)
numeros.sort(); // Ordena como si fueran strings: [1, 2, 4, 5, 8]
console.log("sort() por defecto: ", numeros); // sort() por defecto: [ 1, 2, 4, 5, 8 ]

// Creamos un array de objetos
let arr2 = [
  { nombre: "manzanas", precio: "5" },
  { nombre: "peras", precio: "8" },
  { nombre: "sandia", precio: "4" },
  { nombre: "aguacate", precio: "12" },
  { nombre: "melon", precio: "9" },
  { nombre: "platanos", precio: "7" },
];
let resultado;

// Declaramos el array de ejemplo
let arr1 = ["banana", "manzana", "kiwi", "aguacate", "pera"];

// sort admite una función como parámetro que indique el orden
// Devuelve un array ordenado por precio
resultado = arr2.sort((a, b) => {
  // Sin parámetros ordena un array por orden lexicográfico
  return a.precio - b.precio;
});
console.log(resultado); // Array ordenado por el precio

// Devuelve un array ordenado por precio
resultado = arr2.sort((a, b) => {
  return a.precio - b.precio;
});
console.log(resultado); // Array ordenado por el precio

// reverse() – Invierte el orden
numeros.reverse();
console.log("reverse(): ", numeros); // reverse(): [8, 5, 4, 2, 1]

// fill() – Rellena con un valor
numeros.fill(0); // Rellena todo con 0
console.log("fill(0): ", numeros); // fill(0): [0, 0, 0, 0, 0]
// Rellenar parcialmente
numeros = [1, 2, 3, 4, 5];
numeros.fill(9, 1, 4); // Desde índice 1 hasta 3 (no incluye el 4)
console.log("fill(9, 1, 4): ", numeros); // fill(9, 1, 4): [1, 9, 9, 9, 5]

// copyWithin() – Copia parte del array dentro del mismo
/*
Sintaxis: array.copyWithin(destino, inicio, fin);

  -destino: índice donde se empieza a copiar

  -inicio: índice desde donde se empieza a tomar los elementos

  -fin (opcional): índice hasta donde se toma (no incluido)
*/
numeros = [10, 20, 30, 40, 50];
numeros.copyWithin(0, 3); // Copia desde índice 3 (inclusive) al índice 0
console.log("copyWithin(0, 3): ", numeros); // copyWithin(0, 3): [40, 50, 30, 40, 50]
/*
🔍 ¿Qué pasó aquí?

  -inicio = 3 → empieza a copiar desde el valor 40

  -Como no se indica fin, copia hasta el final → [40, 50]

  -destino = 0 → esos valores se colocan en las posiciones 0 y 1

  -Resultado: los valores [10, 20] fueron reemplazados por [40, 50]
*/
let letras = ["a", "b", "c", "d", "e", "f"];
// Copia desde índice 3 hasta 4 (no incluye el 5), y lo pega en índice 1 (sustituyendo las que haya)
letras.copyWithin(1, 3, 5);
console.log(letras); // [ 'a', 'd', 'e', 'd', 'e', 'f' ]
/*
🔍 ¿Qué pasó aquí?

  -inicio = 3 (2º parámetro) → empieza a copiar desde "d"

  -fin = 5 →  (3º parámetro) copia hasta el índice 4 (no incluye el 5), o sea: ["d", "e"]

  -destino = 1  (1º parámetro) → esos valores se colocan en las posiciones 1 y 2 (sustituyendo los que haya)

Resultado: "b" y "c" fueron reemplazados por "d" y "e"
*/

// Si hay algún parámetro fuera de rango no modifica el array
// 🧪 Ejemplo con parámetros que no existen
let datos = [10, 20, 30, 40, 50];
datos.copyWithin(10, 2, 4); // destino = 10 (fuera de rango)
console.log(datos); // [10, 20, 30, 40, 50] → No pasa nada

// 🧪 Otro caso: inicio fuera de rango
let datos2 = [10, 20, 30, 40, 50];
datos.copyWithin(0, 99); // inicio = 99 (fuera de rango)
console.log(datos2); // [10, 20, 30, 40, 50] → No copia nada

// 🧪 Caso con fin menor que inicio
let datos3 = [10, 20, 30, 40, 50];
datos.copyWithin(0, 3, 2); // fin < inicio
console.log(datos3); // [10, 20, 30, 40, 50] → No copia nada
