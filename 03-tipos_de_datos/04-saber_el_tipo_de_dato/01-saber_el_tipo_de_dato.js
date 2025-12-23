// ============================================
// GUÍA COMPLETA DE typeof EN JAVASCRIPT
// ============================================

console.log("=== TIPOS PRIMITIVOS ===\n");

// typeof con tipos primitivos básicos
let numero2 = 42;
let nombre3 = "Hola mundo";
let verdadero2 = true;
let undef2;
let nula = null;

console.log("typeof numero2:", typeof numero2); // "number"
console.log("typeof nombre3:", typeof nombre3); // "string"
console.log("typeof verdadero2:", typeof verdadero2); // "boolean"
console.log("typeof undef2:", typeof undef2); // "undefined"
console.log("typeof nula:", typeof nula); // "object" ⚠️

// Explicación del typeof null
/*
typeof null === "object" por razones históricas.
Más info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type

En la primera implementación de JavaScript, los valores estaban representados por 
una etiqueta y un valor. El tipo de la etiqueta para los objetos era el valor 0.
null era representado por el NULL pointer (0x00 en la mayoría de las plataformas) y como
null tenía 0 como su tipo de etiqueta, la función typeof retorna que es de tipo objeto.

Se generó una propuesta a ECMAScript (typeof null === "null") pero esta fue rechazada.
La forma de razonar/proceso mental de los desarrolladores es que null por lo general está
siendo utilizado cuando existe un listado de objetos por lo que hace representar un objeto 
vacío o la ausencia de un objeto y su creador (Brendan Eich) siguió la misma forma de pensar 
así que lo implementó siguiendo este mismo paradigma.
*/

console.log("\n=== OTROS TIPOS IMPORTANTES ===\n");

// Symbol (ES6+)
let simbolo = Symbol("descripcion");
console.log("typeof simbolo:", typeof simbolo); // "symbol"

// BigInt (ES2020+)
let numeroGrande = 123456789012345678901234567890n;
console.log("typeof numeroGrande:", typeof numeroGrande); // "bigint"

// Funciones
function miFuncion() {
  return "Hola";
}
console.log("typeof miFuncion:", typeof miFuncion); // "function"

// Arrow function
const flecha = () => {};
console.log("typeof flecha:", typeof flecha); // "function"

console.log("\n=== CASOS ESPECIALES CON OBJETOS ===\n");

// Arrays (son objetos)
let arr = [1, 2, 3];
console.log("typeof arr:", typeof arr); // "object"
console.log("Array.isArray(arr):", Array.isArray(arr)); // true (forma correcta)

// Objetos literales
let obj = { nombre: "Juan" };
console.log("typeof obj:", typeof obj); // "object"

// Date
let fecha = new Date();
console.log("typeof fecha:", typeof fecha); // "object"

// RegExp
let regex = /abc/;
console.log("typeof regex:", typeof regex); // "object"

console.log("\n=== FUNCIONES ÚTILES PARA VALIDACIÓN ===\n");

// Función para verificar null específicamente
function esNull(valor) {
  return valor === null;
}

// Función para verificar si es un objeto puro (no null, no array)
function esObjetoPuro(valor) {
  return typeof valor === "object" && valor !== null && !Array.isArray(valor);
}

// Función para verificar si es null o undefined
function esNullOUndefined(valor) {
  return valor == null; // usando == (no ===)
}

// Pruebas
console.log("esNull(null):", esNull(null)); // true
console.log("esNull(undefined):", esNull(undefined)); // false

console.log("esObjetoPuro({}):", esObjetoPuro({})); // true
console.log("esObjetoPuro([]):", esObjetoPuro([])); // false
console.log("esObjetoPuro(null):", esObjetoPuro(null)); // false

console.log("esNullOUndefined(null):", esNullOUndefined(null)); // true
console.log("esNullOUndefined(undefined):", esNullOUndefined(undefined)); // true
console.log("esNullOUndefined(0):", esNullOUndefined(0)); // false

console.log("\n=== CASOS PRÁCTICOS ===\n");

// Validar parámetros en una función
function procesarDatos(datos) {
  if (typeof datos === "undefined") {
    console.log("⚠️ No se proporcionaron datos");
    return;
  }

  if (typeof datos === "string") {
    console.log("✓ Procesando texto:", datos);
  } else if (typeof datos === "number") {
    console.log("✓ Procesando número:", datos);
  } else if (typeof datos === "object" && datos !== null) {
    console.log("✓ Procesando objeto:", datos);
  }
}

procesarDatos("Hola");
procesarDatos(42);
procesarDatos({ id: 1 });
procesarDatos();

console.log("\n=== TABLA RESUMEN ===\n");

// Tabla resumen de todos los tipos
const valores = [
  { valor: 42, nombre: "número" },
  { valor: "texto", nombre: "string" },
  { valor: true, nombre: "boolean" },
  { valor: undefined, nombre: "undefined" },
  { valor: null, nombre: "null" },
  { valor: Symbol(), nombre: "symbol" },
  { valor: 100n, nombre: "bigint" },
  { valor: function () {}, nombre: "función" },
  { valor: [], nombre: "array" },
  { valor: {}, nombre: "objeto literal" },
];

console.log("Valor\t\t\t| typeof resultado");
console.log("------------------------|-----------------");
valores.forEach((item) => {
  const valorStr = String(item.valor).substring(0, 20);
  console.log(`${valorStr.padEnd(24)}| ${typeof item.valor}`);
});

console.log("\n=== CONSEJO FINAL ===");
console.log("💡 Para verificar null específicamente, usa: valor === null");
console.log("💡 Para verificar arrays, usa: Array.isArray(valor)");
console.log("💡 Para verificar NaN, usa: Number.isNaN(valor)");
console.log(
  "💡 typeof es útil pero tiene limitaciones, combínalo con otras verificaciones"
);
