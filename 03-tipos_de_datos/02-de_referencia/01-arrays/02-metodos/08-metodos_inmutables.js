//--------------------------------------------------------------------------------------
// MÉTODOS INMUTABLES (ES2023) – Versiones que NO modifican el array original
//--------------------------------------------------------------------------------------

/*
🎯 Estos métodos son versiones "seguras" de los métodos mutables clásicos.
La ventaja es que NO modifican el array original, sino que devuelven una copia modificada.

Métodos clásicos (MUTAN):        Nuevos métodos (NO MUTAN):
- sort()                    →    - toSorted()
- reverse()                 →    - toReversed()
- splice()                  →    - toSpliced()
*/

// Array para los ejemplos
let numeros = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Array original:", numeros); // [3, 1, 4, 1, 5, 9, 2, 6]

//--------------------------------------------------------------------------------------
// toSorted() – Ordena SIN modificar el original
//--------------------------------------------------------------------------------------

let ordenado = numeros.toSorted();
console.log("toSorted():", ordenado); // [1, 1, 2, 3, 4, 5, 6, 9]
console.log("Original sigue igual:", numeros); // [3, 1, 4, 1, 5, 9, 2, 6]

// Con función de comparación (orden descendente)
let descendente = numeros.toSorted((a, b) => b - a);
console.log("toSorted descendente:", descendente); // [9, 6, 5, 4, 3, 2, 1, 1]

// 🧪 Ejemplo con strings
let palabras = ["zebra", "manzana", "banana"];
let palabrasOrdenadas = palabras.toSorted();
console.log("Palabras ordenadas:", palabrasOrdenadas); // ['banana', 'manzana', 'zebra']
console.log("Original:", palabras); // ['zebra', 'manzana', 'banana']

//--------------------------------------------------------------------------------------
// toReversed() – Invierte SIN modificar el original
//--------------------------------------------------------------------------------------

let invertido = numeros.toReversed();
console.log("toReversed():", invertido); // [6, 2, 9, 5, 1, 4, 1, 3]
console.log("Original sigue igual:", numeros); // [3, 1, 4, 1, 5, 9, 2, 6]

// 🧪 Combinar toSorted() + toReversed()
let ordenDescendente = numeros.toSorted().toReversed();
console.log("Ordenado y después invertido:", ordenDescendente); // [9, 6, 5, 4, 3, 2, 1, 1]

//--------------------------------------------------------------------------------------
// toSpliced() – Elimina/inserta SIN modificar el original
//--------------------------------------------------------------------------------------
// Sintaxis: array.toSpliced(inicio, cantidadEliminar, ...elementosInsertar)

let letras = ["a", "b", "c", "d", "e"];
console.log("Array letras:", letras); // ['a', 'b', 'c', 'd', 'e']

// Eliminar elementos desde una posición
let sinC = letras.toSpliced(2, 1); // Elimina 1 elemento desde índice 2
console.log("toSpliced(2, 1):", sinC); // ['a', 'b', 'd', 'e']
console.log("Original:", letras); // ['a', 'b', 'c', 'd', 'e']

// Insertar elementos sin eliminar
let conX = letras.toSpliced(2, 0, "x", "y"); // En índice 2, elimina 0, inserta 'x' e 'y'
console.log("toSpliced(2, 0, 'x', 'y'):", conX); // ['a', 'b', 'x', 'y', 'c', 'd', 'e']

// Reemplazar elementos
let reemplazado = letras.toSpliced(1, 2, "Z"); // En índice 1, elimina 2, inserta 'Z'
console.log("toSpliced(1, 2, 'Z'):", reemplazado); // ['a', 'Z', 'd', 'e']

//--------------------------------------------------------------------------------------
// 🆚 COMPARATIVA: Métodos mutables vs inmutables
//--------------------------------------------------------------------------------------

console.log("\n--- COMPARATIVA: MUTABLES vs INMUTABLES ---\n");

// EJEMPLO CON sort() (MUTABLE)
let arr1 = [3, 1, 2];
let resultado1 = arr1.sort();
console.log("Con sort() - resultado:", resultado1); // [1, 2, 3]
console.log("Con sort() - original:", arr1); // [1, 2, 3] ⚠️ MODIFICADO

// EJEMPLO CON toSorted() (INMUTABLE)
let arr2 = [3, 1, 2];
let resultado2 = arr2.toSorted();
console.log("Con toSorted() - resultado:", resultado2); // [1, 2, 3]
console.log("Con toSorted() - original:", arr2); // [3, 1, 2] ✅ INTACTO

//--------------------------------------------------------------------------------------
// 💡 TABLA RESUMEN
//--------------------------------------------------------------------------------------
/*
┌──────────────┬─────────────┬──────────────────────────────────┐
│ Método       │ Modifica    │ Cuándo usar                      │
├──────────────┼─────────────┼──────────────────────────────────┤
│ sort()       │ SÍ          │ Cuando no importa el original    │
│ toSorted()   │ NO          │ Cuando necesitas el original     │
├──────────────┼─────────────┼──────────────────────────────────┤
│ reverse()    │ SÍ          │ Cuando no importa el original    │
│ toReversed() │ NO          │ Cuando necesitas el original     │
├──────────────┼─────────────┼──────────────────────────────────┤
│ splice()     │ SÍ          │ Cuando quieres modificar in-situ │
│ toSpliced()  │ NO          │ Cuando necesitas el original     │
└──────────────┴─────────────┴──────────────────────────────────┘
*/

//--------------------------------------------------------------------------------------
// 🎯 CASOS DE USO REALES
//--------------------------------------------------------------------------------------

// Caso 1: Mantener el estado original en React/Vue
function ordenarProductos(productos) {
  // ✅ CORRECTO: No muta el estado original
  return productos.toSorted((a, b) => a.precio - b.precio);

  // ❌ INCORRECTO: Mutaría el estado original
  // return productos.sort((a, b) => a.precio - b.precio);
}

// Caso 2: Procesar datos sin afectar caché
let cacheUsuarios = [
  { nombre: "Carlos", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 35 },
];

// Queremos mostrar ordenados, pero mantener el caché intacto
let usuariosOrdenados = cacheUsuarios.toSorted((a, b) =>
  a.nombre.localeCompare(b.nombre)
);

console.log("Ordenados:", usuariosOrdenados);
console.log("Caché intacto:", cacheUsuarios);

//--------------------------------------------------------------------------------------
// ⚠️ COMPATIBILIDAD
//--------------------------------------------------------------------------------------
/*
Estos métodos están disponibles desde:
  - Chrome/Edge: v110+
  - Firefox: v115+
  - Safari: v16.0+
  - Node.js: v20.0+

Para navegadores antiguos, puedes usar alternativas:
*/

// Alternativa para toSorted() en navegadores antiguos
if (!Array.prototype.toSorted) {
  Array.prototype.toSorted = function (compareFn) {
    return [...this].sort(compareFn);
  };
}

// Alternativa para toReversed()
if (!Array.prototype.toReversed) {
  Array.prototype.toReversed = function () {
    return [...this].reverse();
  };
}

// Alternativa para toSpliced()
if (!Array.prototype.toSpliced) {
  Array.prototype.toSpliced = function (start, deleteCount, ...items) {
    const copy = [...this];
    copy.splice(start, deleteCount, ...items);
    return copy;
  };
}
