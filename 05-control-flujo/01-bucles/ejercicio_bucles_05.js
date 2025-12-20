//Devolver array de objetos dado un array de pares

let array = [
  // Array de objetos
  {
    id: 1,
    nombre: "Cristian",
  },

  {
    id: 2,
    nombre: "Carlos",
  },
  {
    id: 3,
    nombre: "Pedro",
  },
];

let pares = [
  // Array de pares (array de arrays)
  // id y objeto
  [1, { id: 1, nombre: "Cristian" }],
  [2, { id: 2, nombre: "Carlos" }],
  [3, { id: 3, nombre: "Pedro" }],
];

function toCollection(arr) {
  let collection = [];
  let pairs = [];

  for (idx in arr) {
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
  }
  return collection;

  let result = toCollection(pairs);
  console.log(result);
}
