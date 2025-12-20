// Categoría: Métodos que modifican el array original
// Relacionado con: slice() en 02-de_busqueda_y_acceso.js y copyWithin() en 04-de_tranformacion_y_orden.js

// ⚠️ Muchos de estos métodos modifican el array original.
// Si necesitas conservar el array original, crea una copia antes de aplicar cambios:
let copia = [...numeros]; // Usando spread operator

//--------------------------------------------------------------------------------------
// Array base para los ejemplos
//--------------------------------------------------------------------------------------
let numeros = [1];
console.log("Inicial: ", numeros); // Inicial: [1]

//--------------------------------------------------------------------------------------
// push() – Añadir al final
//--------------------------------------------------------------------------------------
numeros.push(2);
numeros.push(4);
numeros.push(6);
numeros.push(8);
console.log("push(): ", numeros); // push(): [1, 2, 4, 6, 8]

//--------------------------------------------------------------------------------------
// unshift() – Añadir al inicio
//--------------------------------------------------------------------------------------
numeros.unshift(0);
numeros.unshift(-1);
numeros.unshift(-2);
console.log("unshift(): ", numeros); // unshift(): [ -2, -1, 0, 1, 2, 4, 6, 8 ]

//--------------------------------------------------------------------------------------
// shift() – Eliminar el primero
//--------------------------------------------------------------------------------------
numeros.shift();
console.log("shift(): ", numeros); // shift(): [ -1, 0, 1, 2, 4, 6, 8 ]

//--------------------------------------------------------------------------------------
// pop() – Eliminar el último
//--------------------------------------------------------------------------------------
numeros.pop();
console.log("pop(): ", numeros); // pop(): [ -1, 0, 1, 2, 4, 6 ]

//--------------------------------------------------------------------------------------
// splice() – Añadir, eliminar o reemplazar en cualquier posición
//--------------------------------------------------------------------------------------
// Sintaxis: array.splice(inicio, cantidad_a_eliminar, ...elementos_a_insertar)

// Eliminar elementos desde una posición
numeros.splice(3, 2); // Elimina 2 elementos desde el índice 3 (inclusive)
console.log("splice() eliminar: ", numeros); // splice() eliminar: [ -1, 0, 1, 6 ]

// Insertar elementos en una posición concreta
numeros.splice(2, 0, 10, 12); // En índice 2, no elimina nada, inserta 10 y 12
console.log("splice() insertar: ", numeros); // splice() insertar: [ -1, 0, 10, 12, 1, 6 ]

// Reemplazar elementos
numeros.splice(4, 1, 99); // En índice 4, elimina 1 y pone 99
console.log("splice() reemplazar: ", numeros); // splice() reemplazar: [ -1, 0, 10, 12, 99, 6 ]

//--------------------------------------------------------------------------------------
// Navegación relacionada
//--------------------------------------------------------------------------------------
// Ver también:
// - slice() en 02-de_busqueda_y_acceso.js → copia sin modificar
// - copyWithin() en 04-de_tranformacion_y_orden.js → copia interna modificando
