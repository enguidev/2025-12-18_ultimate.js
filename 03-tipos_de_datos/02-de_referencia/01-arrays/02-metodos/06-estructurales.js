// flat() – Aplana arrays anidados
let anidado = [1, [2, [3, [4]]]];
console.log("Array anidado: ", anidado); // Array anidado: [1, [2, [3, [4]]]]

let plano1 = anidado.flat(); // Solo aplana un nivel
console.log("flat(): ", plano1); // flat(): [1, 2, [3, [4]]]

let plano2 = anidado.flat(2); // Aplana dos niveles
console.log("flat(2): ", plano2); // flat(2): [1, 2, 3, [4]]

/*
Aplana todos los niveles (el parámetro es cuantos niveles de arrays anidados 
debe aplanar).
Infinity es una constante numérica incorporada en JavaScript que representa 
un valor mayor que cualquier número finito. Es parte del lenguaje, como NaN 
o undefined.
*/
let planoTotal = anidado.flat(Infinity);
console.log("flat(Infinity): ", planoTotal); // flat(Infinity): [1, 2, 3, 4]

// flatMap() – Mapea y aplana en un solo paso
/*
Es una combinación de dos pasos:

  -map(): transforma cada elemento

  -flat(1): aplana el resultado un nivel
Es decir, es equivalente a:
  [1, 2, 3].map(x => [x, x * 2]).flat();
*/
/*
1-map(x => [x, x * 2]) genera:

[
  [1, 2], // x = 1
  [2, 4], // x = 2
  [3, 6]  // x = 3
]

2-flat() aplana un nivel:
  [1, 2, 2, 4, 3, 6]
*/
let duplicado = [1, 2, 3].flatMap((x) => [x, x * 2]);
console.log("flatMap(x => [x, x * 2]): ", duplicado); // flatMap(x => [x, x * 2]): [1, 2, 2, 4, 3, 6]

// Array.isArray() – Verifica si es un array (no es método de instancia)
console.log("Array.isArray([1, 2, 3]): ", Array.isArray([1, 2, 3])); // Array.isArray([1, 2, 3]): true
console.log("Array.isArray('texto'): ", Array.isArray("texto")); // Array.isArray('texto'): false
console.log("Array.isArray({}): ", Array.isArray({})); // Array.isArray({}): false

// COMPARATIVA //
// Comparativa entre métodos estructurales
/*
✅ flat()
  - Aplana arrays anidados
  - Devuelve nuevo array
  - Parámetro: profundidad (número o Infinity)

✅ flatMap()
  - Mapea y aplana en un solo paso
  - Equivale a map() + flat(1)
  - Solo aplana un nivel

✅ Array.isArray()
  - Verifica si una variable es un array
  - No es método de instancia
  - Devuelve true o false
*/
