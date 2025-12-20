// Devolver cantidad de números positivos de un array

let array = [2, 5, 7, 15, -5, -100, 55];

function countPositiveNumbers(arr) {
  let cantidad = 0;

  for (element of arr) if (element > 0) cantidad++;

  return cantidad;
}

let result = customElements(array);
console.log(result);
