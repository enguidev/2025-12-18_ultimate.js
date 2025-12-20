//--------------------------------------------------------------------------------------
// ITERADORES – entries(), keys(), values()
//--------------------------------------------------------------------------------------

/*
🎯 Estos métodos devuelven iteradores que permiten recorrer el array de diferentes formas:
  - entries() → pares [índice, valor]
  - keys() → índices
  - values() → valores
*/

// Array para los ejemplos
let frutas = ["manzana", "plátano", "naranja"];
console.log("Array frutas:", frutas);

//--------------------------------------------------------------------------------------
// entries() – Devuelve pares [índice, valor]
//--------------------------------------------------------------------------------------

console.log("\n--- entries() ---");

// Forma 1: Con for...of
for (let [indice, fruta] of frutas.entries()) {
  console.log(`${indice}: ${fruta}`);
}
/*
0: manzana
1: plátano
2: naranja
*/

// Forma 2: Convertir a array
let pares = Array.from(frutas.entries());
console.log("entries() como array:", pares);
// [[0, 'manzana'], [1, 'plátano'], [2, 'naranja']]

// Forma 3: Con desestructuración en forEach
frutas.entries().forEach(([i, fruta]) => {
  console.log(`Fruta ${i + 1}: ${fruta}`);
});

//--------------------------------------------------------------------------------------
// keys() – Devuelve solo los índices
//--------------------------------------------------------------------------------------

console.log("\n--- keys() ---");

for (let indice of frutas.keys()) {
  console.log("Índice:", indice);
}
/*
Índice: 0
Índice: 1
Índice: 2
*/

// Convertir a array de índices
let indices = Array.from(frutas.keys());
console.log("Todos los índices:", indices); // [0, 1, 2]

//--------------------------------------------------------------------------------------
// values() – Devuelve solo los valores
//--------------------------------------------------------------------------------------

console.log("\n--- values() ---");

for (let fruta of frutas.values()) {
  console.log("Fruta:", fruta);
}
/*
Fruta: manzana
Fruta: plátano
Fruta: naranja
*/

// Convertir a array
let valores = Array.from(frutas.values());
console.log("Todos los valores:", valores); // ['manzana', 'plátano', 'naranja']

//--------------------------------------------------------------------------------------
// 🆚 COMPARATIVA
//--------------------------------------------------------------------------------------

console.log("\n--- COMPARATIVA ---");

/*
┌────────────┬─────────────────┬──────────────────────────────┐
│ Método     │ Devuelve        │ Ejemplo de uso               │
├────────────┼─────────────────┼──────────────────────────────┤
│ entries()  │ [índice, valor] │ Necesitas índice Y valor     │
│ keys()     │ índice          │ Solo necesitas índices       │
│ values()   │ valor           │ Solo necesitas valores       │
│ for...of   │ valor           │ Recorrer valores (más común) │
│ forEach()  │ callback        │ Ejecutar función por cada    │
└────────────┴─────────────────┴──────────────────────────────┘
*/

//--------------------------------------------------------------------------------------
// 💡 CASOS DE USO PRÁCTICOS
//--------------------------------------------------------------------------------------

// Caso 1: Crear un objeto desde un array
let colores = ["rojo", "verde", "azul"];
let objetoColores = Object.fromEntries(colores.entries());
console.log("Objeto desde entries:", objetoColores);
// { 0: 'rojo', 1: 'verde', 2: 'azul' }

// Caso 2: Buscar índice del último elemento que cumple condición
let numeros = [10, 20, 30, 20, 50];
let ultimoIndice20;

for (let [i, valor] of numeros.entries()) {
  if (valor === 20) {
    ultimoIndice20 = i;
  }
}
console.log("Último índice de 20:", ultimoIndice20); // 3

// Caso 3: Crear array de índices específicos
let nombres = ["Ana", "Luis", "María", "Carlos", "Sofia"];
let indicesConA = Array.from(nombres.entries())
  .filter(([i, nombre]) => nombre.includes("a") || nombre.includes("A"))
  .map(([i]) => i);

console.log("Índices con 'a' o 'A':", indicesConA); // [0, 2, 4]

//--------------------------------------------------------------------------------------
// 🔄 DIFERENCIA: for...of vs forEach() con entries()
//--------------------------------------------------------------------------------------

console.log("\n--- for...of vs forEach ---");

// Con for...of (puedes usar break)
console.log("Con for...of:");
for (let [i, fruta] of frutas.entries()) {
  console.log(`${i}: ${fruta}`);
  if (fruta === "plátano") break; // ✅ Puedes usar break
}

// Con forEach (NO puedes usar break)
console.log("\nCon forEach:");
frutas.forEach((fruta, i) => {
  console.log(`${i}: ${fruta}`);
  // ❌ No puedes usar break aquí
});

//--------------------------------------------------------------------------------------
// ⚙️ ITERADORES AVANZADOS
//--------------------------------------------------------------------------------------

// Los iteradores son objetos con método next()
let iterador = frutas.entries();

console.log("\nUsando next() manualmente:");
console.log(iterador.next()); // { value: [0, 'manzana'], done: false }
console.log(iterador.next()); // { value: [1, 'plátano'], done: false }
console.log(iterador.next()); // { value: [2, 'naranja'], done: false }
console.log(iterador.next()); // { value: undefined, done: true }
