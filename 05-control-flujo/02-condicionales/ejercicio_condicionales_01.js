/**
 * indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */

/* function validarIndice(array, indice) {
  // Validar que el indice no sea menor a cero
  if (indice < 0) {
    throw new Error("Indice no puede ser menor a cero");
  }

  // Validar que el indice este dentro del rango del array
  if (indice >= array.length) {
    throw new Error("Indice fuera de rango");
  }
} */

function getByIdx(arr, idx) {
  if (idx < 0 || arr.length <= idx) return "Elemento no existe";
  return arr[idx];
}

let result = getByIdx([1, 2], 1);
console.log(result); // Output: 2
