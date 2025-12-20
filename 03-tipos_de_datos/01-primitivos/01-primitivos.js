//--------------------------------------------------------------------------------------
// TIPOS DE DATOS PRIMITIVOS
//--------------------------------------------------------------------------------------

/*
TIPOS PRIMITIVOS EN JAVASCRIPT:
  - Number (números enteros y decimales)
  - String (cadenas de texto)
  - Boolean (verdadero/falso)
  - Undefined (variable declarada sin valor)
  - Null (ausencia intencional de valor)
  - Symbol (valores únicos e inmutables) - ES6
  - BigInt (números enteros muy grandes) - ES2020
*/

//--------------------------------------------------------------------------------------
// NUMBER
//--------------------------------------------------------------------------------------
// JavaScript no diferencia entre enteros y decimales, ambos son tipo Number

let numero = 1; // entero
let numeroDecimal = 1.4; // decimal
let numeroNegativo = -10;
let infinito = Infinity;
let infinitoNegativo = -Infinity;
let noEsNumero = NaN; // Not a Number

// Operaciones que dan NaN
console.log("texto" * 2); // NaN
console.log(Math.sqrt(-1)); // NaN

// Valores numéricos especiales
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(0 / 0); // NaN

//--------------------------------------------------------------------------------------
// STRING
//--------------------------------------------------------------------------------------
// Cadenas de texto (pueden usar comillas simples, dobles o backticks)

let texto = "Hola mundo";
let textoSimple = "También válido";
let textoTemplate = `Valor: ${numero}`; // Template literals (ES6)

// Strings multilínea con template literals
let parrafo = `Esta es
una cadena
multilínea`;

/*
Los primitivos no tienen métodos propios, pero JavaScript los envuelve
temporalmente en un objeto String cuando usas métodos (autoboxing)
*/
console.log(texto.toUpperCase()); // "HOLA MUNDO"
console.log(texto.length); // 10
console.log(texto.charAt(0)); // "H"
console.log(texto.slice(0, 4)); // "Hola"

//--------------------------------------------------------------------------------------
// BOOLEAN
//--------------------------------------------------------------------------------------
// Valores lógicos: true o false

let esVerdadero = true;
let esFalso = false;

// Convención de nombrado: usar prefijos como is, has, should
let isActive = true;
let hasPermission = false;
let shouldUpdate = true;
let canEdit = false;

//--------------------------------------------------------------------------------------
// UNDEFINED
//--------------------------------------------------------------------------------------
// Variable declarada pero sin valor asignado

let noDefinido; // automáticamente es undefined
console.log(noDefinido); // undefined

// Asignación explícita (poco común, pero válido)
let explicitamenteUndefined = undefined;

// Casos comunes de undefined
let objeto = {};
console.log(objeto.propiedadInexistente); // undefined

function sinReturn() {}
console.log(sinReturn()); // undefined

//--------------------------------------------------------------------------------------
// NULL
//--------------------------------------------------------------------------------------
// Ausencia intencional de valor

let nulo = null;

/*
DIFERENCIA CLAVE:
  - undefined: "no se ha asignado ningún valor" (JavaScript lo asigna)
  - null: "intencionalmente sin valor" (el programador lo asigna)
*/

let usuario; // undefined (no inicializado)
let datosUsuario = null; // null (intencionalmente vacío)

//--------------------------------------------------------------------------------------
// SYMBOL (ES6)
//--------------------------------------------------------------------------------------
// Valores únicos e inmutables (uso avanzado)

const simbolo1 = Symbol("descripcion");
const simbolo2 = Symbol("descripcion");
console.log(simbolo1 === simbolo2); // false (cada Symbol es único)

// Uso típico: crear propiedades únicas en objetos
const ID = Symbol("id");
const obj = {
  [ID]: 12345,
  nombre: "Ejemplo",
};
console.log(obj[ID]); // 12345

//--------------------------------------------------------------------------------------
// BIGINT (ES2020)
//--------------------------------------------------------------------------------------
// Para números enteros muy grandes (más allá del límite de Number)

const numeroGrande = 1234567890123456789012345678901234567890n;
const otraForma = BigInt("1234567890123456789012345678901234567890");

console.log(typeof numeroGrande); // "bigint"

// BigInt no se puede mezclar con Number sin conversión
// console.log(numeroGrande + 10); // ❌ Error
console.log(numeroGrande + 10n); // ✅ OK

//--------------------------------------------------------------------------------------
// TIPADO DINÁMICO
//--------------------------------------------------------------------------------------
// JavaScript permite cambiar el tipo de una variable

let variable = "Cadena de caracteres";
console.log(variable); // "Cadena de caracteres"
console.log(typeof variable); // "string"

variable = 42;
console.log(variable); // 42
console.log(typeof variable); // "number"

variable = true;
console.log(variable); // true
console.log(typeof variable); // "boolean"

//--------------------------------------------------------------------------------------
// AUTOBOXING (ENVOLTURA AUTOMÁTICA)
//--------------------------------------------------------------------------------------
/*
Los primitivos no tienen métodos propios, pero JavaScript los envuelve
temporalmente en objetos cuando intentas usar métodos sobre ellos.
*/

let saludo = "hola";
console.log(saludo.toUpperCase()); // "HOLA"
// JavaScript crea temporalmente un objeto String, llama al método, y lo destruye

let num = 42;
console.log(num.toFixed(2)); // "42.00"
// JavaScript crea temporalmente un objeto Number

//--------------------------------------------------------------------------------------
// VERIFICACIÓN DE TIPOS
//--------------------------------------------------------------------------------------

console.log(typeof 42); // "number"
console.log(typeof 3.14); // "number"
console.log(typeof "texto"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" ⚠️ (bug histórico de JavaScript)
console.log(typeof Symbol()); // "symbol"
console.log(typeof 123n); // "bigint"

// Para verificar null correctamente (ya que typeof null da "object"):
let valor = null;
console.log(valor === null); // true
console.log(valor === undefined); // false

// Verificar si algo es realmente undefined
console.log(valor === undefined); // false
console.log(typeof valor === "undefined"); // false

//--------------------------------------------------------------------------------------
// VALORES TRUTHY Y FALSY
//--------------------------------------------------------------------------------------

/*
FALSY (se evalúan como false):
  - false
  - 0
  - -0
  - 0n (BigInt zero)
  - "" (string vacío)
  - null
  - undefined
  - NaN

TODO LO DEMÁS es TRUTHY (se evalúa como true)
*/

if (0) {
  console.log("No se ejecuta"); // 0 es falsy
}

if ("hola") {
  console.log("Se ejecuta"); // string no vacío es truthy
}

if ([]) {
  console.log("Se ejecuta"); // array vacío es truthy
}

if ({}) {
  console.log("Se ejecuta"); // objeto vacío es truthy
}

// Uso práctico: valores por defecto
let nombre = "";
let nombreFinal = nombre || "Anónimo"; // "Anónimo" (porque "" es falsy)

let edad = 0;
let edadFinal = edad || 18; // 18 (porque 0 es falsy)
// ⚠️ Cuidado: esto puede no ser lo que quieres si 0 es válido

// Alternativa moderna: Nullish coalescing operator (??)
let edadSegura = edad ?? 18; // 0 (porque 0 no es null ni undefined)
let nombreSeguro = nombre ?? "Anónimo"; // "" (porque "" no es null ni undefined)