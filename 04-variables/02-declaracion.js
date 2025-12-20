//--------------------------------------------------------------------------------------
// DECLARACIÓN DE VARIABLES
//--------------------------------------------------------------------------------------

/*
En JavaScript hay 3 formas de declarar variables:
  - var (ES5) - Evitar su uso
  - let (ES6) - Para variables que cambian
  - const (ES6) - Para valores que no cambian (recomendado por defecto)
*/

//--------------------------------------------------------------------------------------
// DECLARACIÓN SIMPLE
//--------------------------------------------------------------------------------------

let nombre = "Hola desde variables";
console.log(nombre);

//--------------------------------------------------------------------------------------
// DECLARACIÓN MÚLTIPLE
//--------------------------------------------------------------------------------------

// Se pueden declarar varias variables en la misma línea
// (no muy recomendable, menos legible)
let apellido, calle;

// Mejor así (más claro):
let ciudad;
let codigoPostal;

// También se pueden inicializar múltiples variables
let edad = 25,
  peso = 70,
  altura = 1.75;

// Pero es más legible así:
let edad2 = 25;
let peso2 = 70;
let altura2 = 1.75;

//--------------------------------------------------------------------------------------
// DECLARACIÓN SIN INICIALIZACIÓN
//--------------------------------------------------------------------------------------

let sinValor;
console.log(sinValor); // undefined

// Es mejor inicializar siempre que sea posible
let conValor = 0;
console.log(conValor); // 0

//--------------------------------------------------------------------------------------
// BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
1. Usa const por defecto, let solo si necesitas reasignar
2. Declara una variable por línea para mayor claridad
3. Inicializa las variables al declararlas cuando sea posible
4. Declara las variables al principio del bloque donde las uses
5. Agrupa las declaraciones relacionadas
*/

// ❌ Evitar
let x, y, z;
x = 10;

// ✅ Preferir
const PI = 3.14159;
let contador = 0;
let resultado;
