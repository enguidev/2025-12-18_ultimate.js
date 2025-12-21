//--------------------------------------------------------------------------------------
// 🎯 HOISTING (ELEVACIÓN)
//--------------------------------------------------------------------------------------
// Hoisting es el comportamiento de JavaScript de "elevar" declaraciones al inicio
// del scope antes de la ejecución del código

//--------------------------------------------------------------------------------------
// 1️⃣ HOISTING DE FUNCIONES (Function Declaration)
//--------------------------------------------------------------------------------------

// ✅ ESTO FUNCIONA - La función se puede llamar antes de ser declarada
console.log(saludar()); // "Hola desde hoisting"

function saludar() {
  return "Hola desde hoisting";
}

// JavaScript internamente lo interpreta así:
/*
function saludar() {
  return "Hola desde hoisting";
}

console.log(saludar());
*/

//--------------------------------------------------------------------------------------
// 2️⃣ NO HAY HOISTING EN FUNCTION EXPRESSIONS
//--------------------------------------------------------------------------------------

// ❌ ESTO FALLA - Function Expression NO se eleva
// console.log(despedir()); // ReferenceError: Cannot access 'despedir' before initialization

const despedir = function () {
  return "Adiós";
};

console.log(despedir()); // Ahora sí funciona: "Adiós"

//--------------------------------------------------------------------------------------
// 3️⃣ NO HAY HOISTING EN ARROW FUNCTIONS
//--------------------------------------------------------------------------------------

// ❌ ESTO FALLA
// console.log(multiplicar(2, 3)); // ReferenceError

const multiplicar = (a, b) => a * b;

console.log(multiplicar(2, 3)); // Ahora sí: 6

//--------------------------------------------------------------------------------------
// 4️⃣ HOISTING CON VAR
//--------------------------------------------------------------------------------------

console.log(edad); // undefined (no error, pero no tiene valor aún)
var edad = 25;
console.log(edad); // 25

// JavaScript lo interpreta así:
/*
var edad; // Declaración elevada
console.log(edad); // undefined
edad = 25; // Asignación en su lugar
console.log(edad); // 25
*/

//--------------------------------------------------------------------------------------
// 5️⃣ LET Y CONST - TEMPORAL DEAD ZONE
//--------------------------------------------------------------------------------------

// ❌ ESTO DA ERROR con let/const
// console.log(nombre); // ReferenceError: Cannot access 'nombre' before initialization
let nombre = "Carlos";

// ❌ También con const
// console.log(apellido); // ReferenceError
const apellido = "García";

// La Temporal Dead Zone (TDZ) es el período entre:
// 1. El inicio del scope
// 2. La línea donde se declara la variable

// Visualización de la TDZ:
{
  // TDZ empieza aquí para 'x'
  // console.log(x); // ❌ ReferenceError
  // TDZ continúa
  let x = 10; // TDZ termina aquí
  console.log(x); // ✅ 10
}

//--------------------------------------------------------------------------------------
// 6️⃣ DIFERENCIAS: VAR vs LET vs CONST
//--------------------------------------------------------------------------------------

// VAR: Hoisting + inicializado con undefined
console.log(a); // undefined
var a = 1;

// LET: Hoisting + TDZ (no se puede acceder antes)
// console.log(b); // ReferenceError
let b = 2;

// CONST: Hoisting + TDZ (no se puede acceder antes)
// console.log(c); // ReferenceError
const c = 3;

//--------------------------------------------------------------------------------------
// 7️⃣ HOISTING EN BLOQUES
//--------------------------------------------------------------------------------------

// VAR: Ignora bloques (function scope)
if (true) {
  var mensaje = "Hola var";
}
console.log(mensaje); // "Hola var" - ¡Accesible fuera del bloque!

// LET: Respeta bloques (block scope)
if (true) {
  let mensaje2 = "Hola let";
}
// console.log(mensaje2); // ReferenceError - No accesible fuera

//--------------------------------------------------------------------------------------
// 8️⃣ HOISTING DE FUNCIONES VS VARIABLES
//--------------------------------------------------------------------------------------

// Las funciones se elevan ANTES que las variables

console.log(foo); // [Function: foo] - La función tiene prioridad

var foo = "variable";

function foo() {
  return "función";
}

console.log(foo); // "variable" - Ahora la variable sobreescribe

// JavaScript lo interpreta así:
/*
function foo() {
  return "función";
}
var foo;

console.log(foo); // [Function: foo]
foo = "variable";
console.log(foo); // "variable"
*/

//--------------------------------------------------------------------------------------
// 9️⃣ CASOS CONFUSOS
//--------------------------------------------------------------------------------------

// Caso 1: Redeclaración con var
var x = 1;
var x = 2; // ✅ Permitido con var
console.log(x); // 2

// Caso 2: No se puede redeclarar con let/const
let y = 1;
// let y = 2; // ❌ SyntaxError: Identifier 'y' has already been declared

// Caso 3: Function dentro de bloque
if (true) {
  function test() {
    return "dentro";
  }
}

// ⚠️ Comportamiento puede variar entre navegadores/engines
// En modo estricto, test NO está disponible fuera del bloque
// console.log(test()); // Puede o no funcionar

//--------------------------------------------------------------------------------------
// 🔟 HOISTING EN CLASES
//--------------------------------------------------------------------------------------

// ❌ Las clases NO sufren hoisting útil (están en TDZ)
// const perro = new Animal("Bobby"); // ReferenceError

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

const perro = new Animal("Bobby"); // ✅ Ahora sí funciona

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ PROBLEMAS COMUNES CON HOISTING
//--------------------------------------------------------------------------------------

// Problema 1: Variables en bucles con var
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Imprime: 3, 3, 3
  }, 100);
}

// ✅ Solución 1: Usar let (block scope)
for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log(j); // Imprime: 0, 1, 2
  }, 200);
}

// Problema 2: Función dentro de condicional
var resultado;

if (false) {
  resultado = suma(2, 3); // ¿Funciona?
}

function suma(a, b) {
  return a + b;
}

// ✅ Funciona porque la función se eleva
console.log(suma(2, 3)); // 5

// Problema 3: Confusión con scope
var mensaje = "global";

function mostrar() {
  console.log(mensaje); // undefined (no "global")
  var mensaje = "local";
  console.log(mensaje); // "local"
}

mostrar();

// JavaScript lo interpreta así:
/*
function mostrar() {
  var mensaje; // Hoisting
  console.log(mensaje); // undefined
  mensaje = "local";
  console.log(mensaje); // "local"
}
*/

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:

1. Declara variables al inicio del scope
2. Usa let y const en lugar de var
3. Declara funciones antes de usarlas (aunque no es obligatorio)
4. Usa function declarations para funciones que serán llamadas frecuentemente
5. Inicializa variables cuando las declares

❌ EVITAR:

1. Usar var (usa let o const)
2. Llamar funciones antes de declararlas (aunque funcione)
3. Redeclarar variables
4. Depender del hoisting para código funcional
5. Usar variables antes de declararlas
*/

// Ejemplo de código limpio (sin depender de hoisting):

// ✅ BIEN: Declaraciones al inicio
function procesarDatos() {
  const datos = [1, 2, 3, 4, 5];
  let suma = 0;

  for (const num of datos) {
    suma += num;
  }

  return suma;
}

console.log(procesarDatos()); // 15

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ VISUALIZACIÓN DEL HOISTING
//--------------------------------------------------------------------------------------

console.log("\n=== VISUALIZACIÓN DEL HOISTING ===\n");

// Código escrito:
console.log("--- Código escrito ---");
console.log(`
console.log(valor);
var valor = 10;
saludar();

function saludar() {
  console.log("Hola");
}
`);

// Código interpretado por JavaScript:
console.log("--- Código interpretado (con hoisting) ---");
console.log(`
// Funciones se elevan primero
function saludar() {
  console.log("Hola");
}

// Luego declaraciones de variables
var valor;

// Código se ejecuta
console.log(valor); // undefined
valor = 10;
saludar(); // "Hola"
`);

//--------------------------------------------------------------------------------------
// 1️⃣4️⃣ TABLA COMPARATIVA
//--------------------------------------------------------------------------------------

console.log(`
╔════════════════════╦═══════════╦════════════╦══════════════════╗
║ Tipo               ║ Hoisting  ║ TDZ        ║ Scope            ║
╠════════════════════╬═══════════╬════════════╬══════════════════╣
║ var                ║ ✅ Sí     ║ ❌ No      ║ Function         ║
║ let                ║ ⚠️ Sí*    ║ ✅ Sí      ║ Block            ║
║ const              ║ ⚠️ Sí*    ║ ✅ Sí      ║ Block            ║
║ function (decl.)   ║ ✅ Sí     ║ ❌ No      ║ Function         ║
║ function (expr.)   ║ ⚠️ Sí*    ║ ✅ Sí      ║ Block (si let)   ║
║ arrow function     ║ ⚠️ Sí*    ║ ✅ Sí      ║ Block (si const) ║
║ class              ║ ⚠️ Sí*    ║ ✅ Sí      ║ Block            ║
╚════════════════════╩═══════════╩════════════╩══════════════════╝

* Se eleva la declaración, pero no se puede acceder (TDZ)
`);

//--------------------------------------------------------------------------------------
// 1️⃣5️⃣ EJERCICIO PRÁCTICO
//--------------------------------------------------------------------------------------

console.log("\n=== EJERCICIO: ¿Qué imprime cada línea? ===\n");

// Ejercicio 1
var a = 1;
function test1() {
  console.log(a); // ¿Qué imprime? → undefined
  var a = 2;
  console.log(a); // ¿Qué imprime? → 2
}
test1();

// Ejercicio 2
let b2 = 1;
function test2() {
  // console.log(b2); // ¿Qué pasa? → ReferenceError
  let b2 = 2;
  console.log(b2);
}
// test2(); // Descomenta para probar

// Ejercicio 3
console.log(test3()); // ¿Qué imprime? → "función"
function test3() {
  return "función";
}
var test3 = function () {
  return "variable";
};
console.log(test3()); // ¿Qué imprime? → "variable"
