// Devolver número mayor y menor de un array

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
  // Sin ordenar ni iterar más de una vez (pregunta técnica de trabajo):
  let menor = arr[0];
  let mayor = arr[0];

  for (numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor < numero ? mayor : numero;
  }
  return [menor, mayor];
}

let numbers = getMenorMayorArray(array);
console.log(numbers);
