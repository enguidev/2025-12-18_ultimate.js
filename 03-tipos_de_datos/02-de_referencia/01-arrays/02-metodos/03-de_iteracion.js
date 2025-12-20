// Array para los ejemplos
let numeros = [1, 2, 3, 4, 5];
console.log("Array original: ", numeros); // Array original: [1, 2, 3, 4, 5]

// forEach() – Ejecuta una función por cada elemento (no devuelve nada)
numeros.forEach((x, i) => {
  console.log(`Elemento en posición ${i}:`, x);
});
// No devuelve array, solo ejecuta la función
/*
Elemento en posición 0: 1
Elemento en posición 1: 2
Elemento en posición 2: 3
Elemento en posición 3: 4
Elemento en posición 4: 5
*/

// map() – Crea un nuevo array con los resultados
let doble = numeros.map((x) => x * 2);
console.log("map(x * 2): ", doble); // map(x * 2): [ 2, 4, 6, 8, 10 ]

// Declaramos el array primero
let arr1 = ["manzanas", "pera", "sandia", "melon", "kiwi", "plátano"];

// Muestra la longitud de cada uno de los elementos (valores)
resultado = arr1.map((elemento) => elemento.length);
console.log(resultado); //[6,4,5,4,3,6]

// Devuelve true o false si cada uno de los elementos (valores) tiene una longitud mayor a 3
// Devuelve un array de booleanos según si la longitud es mayor a 3
resultado = arr1.map((elemento) => elemento.length > 3);
console.log(resultado); //[true,true,true,true,false,true]

// filter() – Crea un nuevo array con elementos que cumplen una condición
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

// Asigna los números pares dell array numeros al nuevo array pares
let pares = numeros.filter((x) => x % 2 === 0);
console.log("filter(x % 2 === 0): ", pares); // filter(x % 2 === 0): [2, 4]

// Usamos el array arr2 que ya está declarado, o declaramos arr1 si queremos nombres
let nombresPersonas = ["ana", "carmen", "luis", "adolfo"];

// Elementos (valores) que empiecen por a
resultado = nombresPersonas.filter((elemento) => elemento.charAt(0) == "a");
console.log(resultado); // ['ana', 'adolfo']

// reduce() – Reduce el array a un único valor (de izquierda a derecha)
let suma = numeros.reduce((acum, x) => acum + x, 0);
console.log("reduce(suma): ", suma); // reduce(suma): 15

// reduceRight() – Igual que reduce, pero de derecha a izquierda
let resta = numeros.reduceRight((acum, x) => acum - x);
// ((((5 - 4) - 3) - 2) - 1)= -5
console.log("reduceRight(resta): ", resta); // reduceRight(resta): -5

// some() – Verifica si algún elemento cumple una condición (devuelve un booleano)
let hayMayorQueCuatro = numeros.some((x) => x > 4);
console.log("some(x > 4): ", hayMayorQueCuatro); // some(x > 4): true

//Devuelve true si al menos un elemento (valor) de precio es menor de 10
resultado = arr2.some((e) => {
  return e.precio < 10;
});
console.log(resultado); //true

// every() – Verifica si todos los elementos cumplen una condición (devuelve un booleano)
let todosSonPositivos = numeros.every((x) => x > 0);
console.log("every(x > 0): ", todosSonPositivos); // every(x > 0): true

// Devuelve true o false si todos los precios del array son menores de 10
resultado = arr2.every((e) => {
  return e.precio < 10;
});
console.log(resultado); //false

//--------------------------------------------------------------------------------------
// for...of – Bucle para recorrer los valores de un array (estructura complementaria)
//--------------------------------------------------------------------------------------
// Recorre directamente los valores del array, sin necesidad de índice
for (let valor of numeros) {
  console.log("for...of valor:", valor);
}
/*
for...of valor: 1
for...of valor: 2
for...of valor: 3
for...of valor: 4
for...of valor: 5
*/

// Comparativa rápida entre forEach() y for...of
/*
✅ forEach()
  - Ejecuta una función por cada elemento
  - No permite break ni continue
  - No es compatible con await directamente
  - No devuelve nada

✅ for...of
  - Sintaxis más simple
  - Permite break y continue
  - Compatible con await
  - Recorre directamente los valores
*/
//--------------------------------------------------------------------------------------
// MÉTODO MODERNO (ES2023) – with()
//--------------------------------------------------------------------------------------
// with() – Devuelve una copia del array con un valor modificado en una posición
let modificado = numeros.with(2, 99); // Sustituye el índice 2 por 99
console.log("with(2, 99):", modificado); // [1, 2, 99, 4, 5]
console.log("Array original sigue igual:", numeros); // [1, 2, 3, 4, 5]

/*
⚠️ Este método está disponible desde ES2023.
No funciona en versiones antiguas de navegadores o entornos sin soporte moderno.
*/

//--------------------------------------------------------------------------------------
// COMPARATIVA FINAL – Iteradores vs map/filter/reduce
/*
✅ map()
  - Devuelve nuevo array
  - Transforma cada elemento

✅ filter()
  - Devuelve nuevo array
  - Conserva solo los que cumplen condición

✅ reduce()
  - Devuelve un único valor
  - Acumula resultado

✅ forEach()
  - Ejecuta función por cada elemento
  - No devuelve nada

✅ for...of
  - Recorre directamente los valores
  - Permite break y continue

✅ entries(), keys(), values()
  - Iteradores explícitos
  - Útiles para recorrer índice, valor o ambos

✅ with()
  - Devuelve copia modificada
  - No altera el original
*/
