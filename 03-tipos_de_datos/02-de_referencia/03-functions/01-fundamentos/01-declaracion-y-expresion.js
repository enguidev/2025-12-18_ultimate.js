//--------------------------------------------------------------------------------------
// 🎯 DECLARACIÓN Y EXPRESIÓN DE FUNCIONES
//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
// 1️⃣ FUNCTION DECLARATION (Declaración de función)
//--------------------------------------------------------------------------------------
// Es la forma tradicional y más común de crear funciones en JavaScript

function saludar() {
  console.log("Hola desde una declaración de función");
}

saludar(); // Hola desde una declaración de función

// ✅ Características de Function Declaration:
// - Se puede llamar ANTES de ser declarada (hoisting)
// - Tiene nombre obligatorio
// - Se "eleva" al principio del scope
// - Ideal para funciones que serán llamadas múltiples veces

//--------------------------------------------------------------------------------------
// 2️⃣ FUNCTION EXPRESSION (Expresión de función)
//--------------------------------------------------------------------------------------
// La función se asigna a una variable

const despedir = function () {
  console.log("Adiós desde una expresión de función");
};

despedir(); // Adiós desde una expresión de función

// ✅ Características de Function Expression:
// - NO se puede llamar antes de ser declarada
// - Puede ser anónima o tener nombre
// - No sufre hoisting (la variable sí, pero no su valor)
// - Útil para callbacks y funciones que se pasan como argumentos

//--------------------------------------------------------------------------------------
// 3️⃣ DIFERENCIA CLAVE: HOISTING
//--------------------------------------------------------------------------------------

// ✅ ESTO FUNCIONA (Function Declaration)
console.log(sumar(2, 3)); // 5

function sumar(a, b) {
  return a + b;
}

// ❌ ESTO DA ERROR (Function Expression)
// console.log(restar(5, 3)); // ReferenceError: Cannot access 'restar' before initialization

const restar = function (a, b) {
  return a - b;
};

console.log(restar(5, 3)); // 2 (ahora sí funciona)

//--------------------------------------------------------------------------------------
// 4️⃣ NAMED FUNCTION EXPRESSION (Expresión con nombre)
//--------------------------------------------------------------------------------------
// Útil para recursión y debugging

const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Puede llamarse a sí misma usando 'fact'
};

console.log(factorial(5)); // 120

// El nombre 'fact' SOLO existe dentro de la función
// console.log(fact); // ReferenceError: fact is not defined

//--------------------------------------------------------------------------------------
// 5️⃣ ARROW FUNCTION (Función flecha) - ES6
//--------------------------------------------------------------------------------------
// Sintaxis más concisa introducida en ES2015

const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5)); // 20

// ✅ Características de Arrow Functions:
// - Sintaxis más corta
// - NO tiene su propio 'this'
// - NO tiene 'arguments'
// - NO se puede usar como constructor
// - Return implícito en una línea

//--------------------------------------------------------------------------------------
// 6️⃣ IIFE (Immediately Invoked Function Expression)
//--------------------------------------------------------------------------------------
// Función que se ejecuta inmediatamente después de ser creada

(function () {
  console.log("IIFE ejecutada inmediatamente");
})();

// Con parámetros
(function (nombre) {
  console.log(`Hola ${nombre} desde IIFE`);
})("Carlos");

// IIFE con arrow function
(() => {
  console.log("IIFE con arrow function");
})();

//--------------------------------------------------------------------------------------
// 7️⃣ FUNCTION CONSTRUCTOR (⚠️ No recomendado)
//--------------------------------------------------------------------------------------
// Forma dinámica pero insegura de crear funciones

const dividir = new Function("a", "b", "return a / b");
console.log(dividir(10, 2)); // 5

// ⚠️ Problemas:
// - Difícil de depurar
// - Problemas de rendimiento
// - Riesgos de seguridad (similar a eval)
// - NO se recomienda su uso

//--------------------------------------------------------------------------------------
// 8️⃣ MÉTODO EN OBJETO
//--------------------------------------------------------------------------------------
// Funciones como propiedades de objetos

const persona = {
  nombre: "Ana",

  // Método tradicional
  saludar: function () {
    return `Hola, soy ${this.nombre}`;
  },

  // Método abreviado (ES6)
  despedir() {
    return `Adiós de ${this.nombre}`;
  },

  // ❌ Arrow function como método (NO recomendado)
  presentar: () => {
    return `Hola, soy ${this.nombre}`; // this no funciona correctamente
  },
};

console.log(persona.saludar()); // Hola, soy Ana
console.log(persona.despedir()); // Adiós de Ana
console.log(persona.presentar()); // Hola, soy undefined

//--------------------------------------------------------------------------------------
// 9️⃣ COMPARACIÓN COMPLETA
//--------------------------------------------------------------------------------------

// Function Declaration
function suma1(a, b) {
  return a + b;
}

// Function Expression
const suma2 = function (a, b) {
  return a + b;
};

// Arrow Function
const suma3 = (a, b) => a + b;

// Todas hacen lo mismo
console.log(suma1(2, 3)); // 5
console.log(suma2(2, 3)); // 5
console.log(suma3(2, 3)); // 5

//--------------------------------------------------------------------------------------
// 🔟 CUÁNDO USAR CADA UNA
//--------------------------------------------------------------------------------------

/*
✅ USA FUNCTION DECLARATION cuando:
  - Necesites hoisting (llamar antes de declarar)
  - Funciones principales del programa
  - Funciones que necesitan ser muy visibles
  - Quieras código más legible y tradicional

✅ USA FUNCTION EXPRESSION cuando:
  - Quieras evitar hoisting
  - Necesites condicionalidad (crear función según condición)
  - Quieras asignar la función a una propiedad de objeto
  - Estés creando closures

✅ USA ARROW FUNCTION cuando:
  - Callbacks cortos (map, filter, reduce)
  - No necesites 'this' propio
  - Quieras código conciso
  - Funciones anónimas simples

❌ EVITA ARROW FUNCTION cuando:
  - Necesites 'this' propio (métodos de objeto)
  - Necesites 'arguments'
  - Vayas a usar como constructor
  - Necesites funciones generadoras
*/

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ EJEMPLOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// Ejemplo 1: Función que retorna otra función (Factory)
function crearMultiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

const doble = crearMultiplicador(2);
const triple = crearMultiplicador(3);

console.log(doble(5)); // 10
console.log(triple(5)); // 15

// Ejemplo 2: Función condicional
let operacion;

const tipo = "suma";

if (tipo === "suma") {
  operacion = function (a, b) {
    return a + b;
  };
} else {
  operacion = function (a, b) {
    return a - b;
  };
}

console.log(operacion(10, 5)); // 15

// Ejemplo 3: Callback con diferentes sintaxis
const numeros = [1, 2, 3, 4];

// Function expression
const cuadrados1 = numeros.map(function (n) {
  return n * n;
});

// Arrow function (más concisa)
const cuadrados2 = numeros.map((n) => n * n);

console.log(cuadrados1); // [1, 4, 9, 16]
console.log(cuadrados2); // [1, 4, 9, 16]

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ TABLA COMPARATIVA
//--------------------------------------------------------------------------------------

console.log(`
╔══════════════════════════╦═══════════════╦═══════════════╦═══════════════╗
║ Característica           ║ Declaration   ║ Expression    ║ Arrow         ║
╠══════════════════════════╬═══════════════╬═══════════════╬═══════════════╣
║ Hoisting                 ║ ✅ Sí         ║ ❌ No         ║ ❌ No         ║
║ Nombre obligatorio       ║ ✅ Sí         ║ ❌ No         ║ ❌ No         ║
║ this propio              ║ ✅ Sí         ║ ✅ Sí         ║ ❌ No         ║
║ arguments                ║ ✅ Sí         ║ ✅ Sí         ║ ❌ No         ║
║ Puede ser constructor    ║ ✅ Sí         ║ ✅ Sí         ║ ❌ No         ║
║ Return implícito         ║ ❌ No         ║ ❌ No         ║ ✅ Sí         ║
║ Sintaxis concisa         ║ ❌ No         ║ ❌ No         ║ ✅ Sí         ║
╚══════════════════════════╩═══════════════╩═══════════════╩═══════════════╝
`);

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ ANTI-PATRONES (QUÉ NO HACER)
//--------------------------------------------------------------------------------------

// ❌ No redefinas funciones en el mismo scope
function miFuncion() {
  return "Primera versión";
}

function miFuncion() {
  return "Segunda versión"; // ¡Sobreescribe la primera!
}

console.log(miFuncion()); // "Segunda versión"

// ❌ No uses Function constructor
// const malaIdea = new Function('x', 'return x * 2');

// ❌ No uses arrow functions como métodos de objeto
const objetoMal = {
  nombre: "Test",
  saludar: () => {
    console.log(this.nombre); // undefined
  },
};

// ✅ Usa función tradicional o método abreviado
const objetoBien = {
  nombre: "Test",
  saludar() {
    console.log(this.nombre); // "Test"
  },
};
