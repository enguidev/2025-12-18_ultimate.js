//--------------------------------------------------------------------------------------
// VAR, LET Y CONST - DIFERENCIAS
//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
// VAR (ES5) - ⚠️ EVITAR SU USO
//--------------------------------------------------------------------------------------

/*
Características de var:
  - Ámbito de función o global (no de bloque)
  - Permite re-declarar variables
  - Permite re-asignar variables
  - Hoisting: se eleva la declaración al inicio (puede causar bugs)
*/

var nombreVar = "cifpcarlos3";

var f = function () {
  var profe = "Raul";
  console.log(nombreVar); // Accede a la variable global
};

f(); // "cifpcarlos3"
// console.log(profe); // ❌ Error: profe is not defined

// ⚠️ Problema con var: no respeta el ámbito de bloque
if (true) {
  var problema = "Accesible fuera del if";
}
console.log(problema); // "Accesible fuera del if" (¡Sorpresa!)

// var permite re-declarar (puede causar bugs)
var nombreVar = "Otro nombre"; // No da error, sobrescribe

//--------------------------------------------------------------------------------------
// LET (ES6) - ✅ USAR CUANDO NECESITES REASIGNAR
//--------------------------------------------------------------------------------------

/*
Características de let:
  - Ámbito de bloque {} (más predecible)
  - NO permite re-declarar en el mismo ámbito
  - SÍ permite re-asignar
*/

let centro = "cifpcarlos3";
// let centro = "Otro"; // ❌ Error: ya está declarada

// let respeta el ámbito de bloque
if (true) {
  let profe = "Raul";
  console.log(centro); // "cifpcarlos3"
}
// console.log(profe); // ❌ Error: profe is not defined

// let permite reasignar
centro = "Nuevo nombre"; // ✅ OK
console.log(centro); // "Nuevo nombre"

//--------------------------------------------------------------------------------------
// CONST (ES6) - ✅ USAR POR DEFECTO
//--------------------------------------------------------------------------------------

/*
Características de const:
  - Ámbito de bloque {} (igual que let)
  - NO permite re-declarar
  - NO permite re-asignar
  - Debe inicializarse al declararse
*/

const centro2 = "cifpcarlos3";
// const centro2 = "Raúl";  // ❌ Error: ya está declarada
// centro2 = "Otro";        // ❌ Error: no se puede reasignar

// const respeta el ámbito de bloque
if (true) {
  const profe = "Raúl";
  console.log(centro2); // "cifpcarlos3"
}
// console.log(profe); // ❌ Error: profe is not defined

const nombre2 = "Hola desde constantes";
console.log(nombre2);

//--------------------------------------------------------------------------------------
// ⚠️ IMPORTANTE: CONST CON OBJETOS Y ARRAYS
//--------------------------------------------------------------------------------------

/*
const NO hace el valor inmutable, solo impide la reasignación.
Puedes modificar las propiedades de objetos y elementos de arrays.
*/

const persona = { nombre: "Carlos" };
persona.nombre = "Raúl"; // ✅ OK - Modificar propiedad
persona.edad = 30; // ✅ OK - Añadir propiedad
console.log(persona); // { nombre: "Raúl", edad: 30 }

// persona = {};         // ❌ Error: no puedes reasignar

const numeros = [1, 2, 3];
numeros.push(4); // ✅ OK - Modificar el array
numeros[0] = 10; // ✅ OK - Cambiar elemento
console.log(numeros); // [10, 2, 3, 4]

// numeros = [];         // ❌ Error: no puedes reasignar

//--------------------------------------------------------------------------------------
// COMPARACIÓN VISUAL
//--------------------------------------------------------------------------------------

/*
┌───────────────┬─────────┬──────────┬─────────────┬──────────────┐
│ Característica│   var   │   let    │    const    │ Recomendación│
├───────────────┼─────────┼──────────┼─────────────┼──────────────┤
│ Ámbito        │ función │  bloque  │   bloque    │   let/const  │
│ Re-declarar   │   ✅    │    ❌   │     ❌      │      ❌     │
│ Re-asignar    │   ✅    │    ✅   │     ❌      │  depende     │
│ Hoisting      │   ✅    │    ❌   │     ❌      │      ❌     │
│ Uso           │  Evitar │  A veces │  Por defecto│   const > let│
└───────────────┴─────────┴──────────┴─────────────┴──────────────┘
*/

//--------------------------------------------------------------------------------------
// REGLA DE ORO
//--------------------------------------------------------------------------------------

/*
Como norma general:
1. Usa CONST por defecto (mayoría de los casos)
2. Usa LET solo si necesitas reasignar el valor
3. NUNCA uses VAR (problemas de scope y hoisting)

Ventajas:
  - Código más predecible
  - Menos bugs
  - Mejor rendimiento
  - Más fácil de entender
*/

// ✅ Ejemplo de uso correcto
const PI = 3.14159; // Nunca cambia
const MAX_USERS = 100; // Nunca cambia
let contador = 0; // Cambia en un bucle
let resultado; // Se asignará después

for (let i = 0; i < 10; i++) {
  // let en bucles
  contador++;
}
