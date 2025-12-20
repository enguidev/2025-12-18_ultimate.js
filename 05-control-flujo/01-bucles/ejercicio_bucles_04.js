//Devolver array de pares dado un array de objetos

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

function toPairs(arr) {
  let pairs = [];

  for (idx in arr) {
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs; // Devuelve el array de pares creado

  let result = toPairs(array);
  console.log(result);
}
