/* 
================================================================================
  OBJETO NUMBER EN JAVASCRIPT
================================================================================
  Number es un objeto predefinido que permite trabajar con valores numéricos. 
  Proporciona propiedades y métodos útiles para manejar números en diferentes 
  formatos y realizar varias operaciones matemáticas. 
*/

//------------------------------------------------------------------------------
// CREACIÓN DE NÚMEROS
//------------------------------------------------------------------------------

// Forma primitiva (recomendada)
let num1 = 123;

// Forma de objeto (NO recomendada - consumo innecesario de memoria)
let num2 = new Number(123);

console.log(typeof num1); // "number"
console.log(typeof num2); // "object"

// Notaciones especiales
let numExponencial = 1e9; // 1,000,000,000
let numHexadecimal = 0xff; // 255 en decimal
let numBinario = 0b1111011; // 123 en decimal
let numOctal = 0o173; // 123 en decimal

console.log(numExponencial); // 1000000000
console.log(numHexadecimal); // 255
console.log(numBinario); // 123
console.log(numOctal); // 123

// BigInt para números muy grandes (ES2020)
let bigNum = 9007199254740991n;
console.log(typeof bigNum); // "bigint"

//------------------------------------------------------------------------------
// PROPIEDADES ESTÁTICAS DE NUMBER
//------------------------------------------------------------------------------

console.log("=== PROPIEDADES ESTÁTICAS ===");

// Valor numérico más grande representable
console.log("MAX_VALUE:", Number.MAX_VALUE);
// 1.7976931348623157e+308

// Valor positivo más pequeño representable
console.log("MIN_VALUE:", Number.MIN_VALUE);
// 5e-324

// Representa "Not-A-Number"
console.log("NaN:", Number.NaN);
// NaN

// Infinito negativo
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
// -Infinity

// Infinito positivo
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
// Infinity

// Mayor entero seguro (2^53 - 1)
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
// 9007199254740991

// Menor entero seguro (-(2^53 - 1))
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
// -9007199254740991

// Diferencia más pequeña entre dos números
console.log("EPSILON:", Number.EPSILON);
// 2.220446049250313e-16

//------------------------------------------------------------------------------
// MÉTODOS ESTÁTICOS DE NUMBER
//------------------------------------------------------------------------------

console.log("\n=== MÉTODOS ESTÁTICOS ===");

// Number.isFinite() - Determina si es un número finito
console.log("isFinite(123):", Number.isFinite(123)); // true
console.log("isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("isFinite(NaN):", Number.isFinite(NaN)); // false
console.log("isFinite('123'):", Number.isFinite("123")); // false (no convierte)

// Number.isInteger() - Determina si es un entero
console.log("isInteger(123):", Number.isInteger(123)); // true
console.log("isInteger(123.456):", Number.isInteger(123.456)); // false
console.log("isInteger(123.0):", Number.isInteger(123.0)); // true

// Number.isNaN() - Determina si es NaN
console.log("isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("isNaN(123):", Number.isNaN(123)); // false
console.log("isNaN('hello'):", Number.isNaN("hello")); // false (no convierte)

// Number.isSafeInteger() - Determina si es un entero seguro
console.log("isSafeInteger(3):", Number.isSafeInteger(3)); // true
console.log(
  "isSafeInteger(Math.pow(2, 53)):",
  Number.isSafeInteger(Math.pow(2, 53))
); // false
console.log(
  "isSafeInteger(9007199254740991):",
  Number.isSafeInteger(9007199254740991)
); // true

// Number.parseFloat() - Convierte string a número decimal
console.log("parseFloat('123.45'):", Number.parseFloat("123.45")); // 123.45
console.log("parseFloat('123.45px'):", Number.parseFloat("123.45px")); // 123.45
console.log("parseFloat('abc'):", Number.parseFloat("abc")); // NaN

// Number.parseInt() - Convierte string a entero con base opcional
console.log("parseInt('123'):", Number.parseInt("123")); // 123
console.log("parseInt('123', 10):", Number.parseInt("123", 10)); // 123 (decimal)
console.log("parseInt('7B', 16):", Number.parseInt("7B", 16)); // 123 (hexadecimal)
console.log("parseInt('1111011', 2):", Number.parseInt("1111011", 2)); // 123 (binario)
console.log("parseInt('173', 8):", Number.parseInt("173", 8)); // 123 (octal)

//------------------------------------------------------------------------------
// MÉTODOS DE INSTANCIA (PROTOTIPO)
//------------------------------------------------------------------------------

console.log("\n=== MÉTODOS DE INSTANCIA ===");

let num = 123.456789;

// toFixed() - Redondea a n decimales (devuelve string)
console.log("toFixed(2):", num.toFixed(2)); // "123.46"
console.log("toFixed(0):", num.toFixed(0)); // "123"
console.log("toFixed(4):", num.toFixed(4)); // "123.4568"

// toPrecision() - Formatea con n dígitos significativos (devuelve string)
console.log("toPrecision(4):", num.toPrecision(4)); // "123.5"
console.log("toPrecision(6):", num.toPrecision(6)); // "123.457"
console.log("toPrecision(2):", num.toPrecision(2)); // "1.2e+2"

// toExponential() - Notación exponencial (devuelve string)
console.log("toExponential():", num.toExponential()); // "1.23456789e+2"
console.log("toExponential(2):", num.toExponential(2)); // "1.23e+2"
console.log("toExponential(4):", num.toExponential(4)); // "1.2346e+2"

// toString() - Convierte a string en base n
let num123 = 123;
console.log("toString():", num123.toString()); // "123" (decimal)
console.log("toString(2):", num123.toString(2)); // "1111011" (binario)
console.log("toString(16):", num123.toString(16)); // "7b" (hexadecimal)
console.log("toString(8):", num123.toString(8)); // "173" (octal)

// toLocaleString() - Formato según locale
let precio = 1234567.89;
console.log("toLocaleString('es-ES'):", precio.toLocaleString("es-ES")); // "1.234.567,89"
console.log("toLocaleString('en-US'):", precio.toLocaleString("en-US")); // "1,234,567.89"

// valueOf() - Retorna el valor primitivo
let numObj = new Number(42);
console.log("valueOf():", numObj.valueOf()); // 42
console.log("typeof valueOf():", typeof numObj.valueOf()); // "number"

//------------------------------------------------------------------------------
// APLICACIÓN PRÁCTICA: Number.EPSILON
//------------------------------------------------------------------------------

console.log("\n=== APLICACIÓN PRÁCTICA: COMPARAR DECIMALES ===");

/* 
  JavaScript tiene problemas de precisión con decimales debido a 
  la representación interna en punto flotante (IEEE 754).
  Number.EPSILON nos ayuda a comparar si dos números son "casi iguales".
*/

// Problema de precisión:
console.log(0.1 + 0.2); // 0.30000000000000004 (¡no es exactamente 0.3!)
console.log(0.1 + 0.2 === 0.3); // false

// Solución con EPSILON:
function casiIguales(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

// Ejemplos de uso:
let suma = 0.1 + 0.2;
let esperado = 0.3;

console.log(`¿${suma} == ${esperado}?`, suma === esperado); // false
console.log(`¿Casi iguales?`, casiIguales(suma, esperado)); // true

// Más ejemplos:
let num3 = 0.1 + 0.2 + 0.3;
let num4 = 0.6;
console.log(`Comparar ${num3} y ${num4}:`, casiIguales(num3, num4)); // true

let num5 = Math.sqrt(2) * Math.sqrt(2);
let num6 = 2;
console.log(`Comparar √2 * √2 (${num5}) y 2:`, casiIguales(num5, num6)); // true

// Caso más complejo
let resultado = (0.1 + 0.2) * 3;
let esperado2 = 0.9;
console.log(
  `Comparar (0.1 + 0.2) * 3 y 0.9:`,
  casiIguales(resultado, esperado2)
); // true

//------------------------------------------------------------------------------
// CONVERSIONES Y VALIDACIONES
//------------------------------------------------------------------------------

console.log("\n=== CONVERSIONES Y VALIDACIONES ===");

// Diferentes formas de convertir a número
console.log("Number('123'):", Number("123")); // 123
console.log("Number('123.45'):", Number("123.45")); // 123.45
console.log("Number('0xff'):", Number("0xff")); // 255
console.log("Number(true):", Number(true)); // 1
console.log("Number(false):", Number(false)); // 0
console.log("Number(null):", Number(null)); // 0
console.log("Number(undefined):", Number(undefined)); // NaN
console.log("Number('hello'):", Number("hello")); // NaN

// Operador unario + (conversión rápida)
console.log("+'123':", +"123"); // 123
console.log("+true:", +true); // 1

// Diferencia entre Number() y parseInt/parseFloat
console.log("Number('123px'):", Number("123px")); // NaN
console.log("parseInt('123px'):", parseInt("123px")); // 123
console.log("parseFloat('123.45px'):", parseFloat("123.45px")); // 123.45

// Validar si es un número
function esNumeroValido(valor) {
  return typeof valor === "number" && !isNaN(valor) && isFinite(valor);
}

console.log("\nValidaciones:");
console.log("esNumeroValido(123):", esNumeroValido(123)); // true
console.log("esNumeroValido(NaN):", esNumeroValido(NaN)); // false
console.log("esNumeroValido(Infinity):", esNumeroValido(Infinity)); // false
console.log("esNumeroValido('123'):", esNumeroValido("123")); // false

//------------------------------------------------------------------------------
// CASOS ESPECIALES Y BUENAS PRÁCTICAS
//------------------------------------------------------------------------------

console.log("\n=== CASOS ESPECIALES ===");

// Operaciones con NaN
console.log("NaN + 5:", NaN + 5); // NaN
console.log("NaN === NaN:", NaN === NaN); // false (¡único valor que no es igual a sí mismo!)
console.log("isNaN(NaN):", isNaN(NaN)); // true

// Operaciones con Infinity
console.log("1 / 0:", 1 / 0); // Infinity
console.log("-1 / 0:", -1 / 0); // -Infinity
console.log("Infinity + 1:", Infinity + 1); // Infinity
console.log("Infinity - Infinity:", Infinity - Infinity); // NaN

// Redondeo
console.log("\nRedondeo:");
let decimal = 3.7;
console.log("Math.round(3.7):", Math.round(decimal)); // 4 (redondeo estándar)
console.log("Math.floor(3.7):", Math.floor(decimal)); // 3 (hacia abajo)
console.log("Math.ceil(3.7):", Math.ceil(decimal)); // 4 (hacia arriba)
console.log("Math.trunc(3.7):", Math.trunc(decimal)); // 3 (elimina decimales)

// Límites de precisión
console.log("\nLímites de precisión:");
console.log("0.1 + 0.2:", 0.1 + 0.2); // 0.30000000000000004
console.log("9007199254740992 + 1:", 9007199254740992 + 1); // 9007199254740992 (pierde precisión)
console.log("9007199254740991 + 1:", 9007199254740991 + 1); // 9007199254740992 (correcto)

//------------------------------------------------------------------------------
// BUENAS PRÁCTICAS
//------------------------------------------------------------------------------

console.log("\n=== BUENAS PRÁCTICAS ===");

// ✅ HACER: Usar primitivos en lugar de objetos Number
let buenNumero = 42;
let malNumero = new Number(42); // ❌ NO hacer esto

console.log("buenNumero === 42:", buenNumero === 42); // true
console.log("malNumero === 42:", malNumero === 42); // false (es un objeto)
console.log("malNumero.valueOf() === 42:", malNumero.valueOf() === 42); // true

// ✅ HACER: Usar Number.isNaN() en lugar de isNaN()
console.log("\nDiferencia isNaN vs Number.isNaN:");
console.log("isNaN('hello'):", isNaN("hello")); // true (convierte a número)
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false (no convierte)

// ✅ HACER: Usar Number.isFinite() en lugar de isFinite()
console.log("\nDiferencia isFinite vs Number.isFinite:");
console.log("isFinite('123'):", isFinite("123")); // true (convierte)
console.log("Number.isFinite('123'):", Number.isFinite("123")); // false (no convierte)

// ✅ HACER: Validar enteros seguros
function sumarSiEsSeguro(a, b) {
  if (Number.isSafeInteger(a) && Number.isSafeInteger(b)) {
    const resultado = a + b;
    if (Number.isSafeInteger(resultado)) {
      return resultado;
    }
  }
  throw new Error("Operación fuera del rango seguro");
}

console.log("\nSuma segura:");
console.log("sumarSiEsSeguro(1, 2):", sumarSiEsSeguro(1, 2)); // 3

// ✅ HACER: Redondear antes de comparar decimales
function compararConRedondeo(a, b, decimales = 2) {
  const factor = Math.pow(10, decimales);
  return Math.round(a * factor) === Math.round(b * factor);
}

console.log("\nComparación con redondeo:");
console.log(
  "compararConRedondeo(0.1 + 0.2, 0.3):",
  compararConRedondeo(0.1 + 0.2, 0.3)
); // true

//------------------------------------------------------------------------------
// RESUMEN
//------------------------------------------------------------------------------

console.log("\n=== RESUMEN ===");
console.log(`
✅ Propiedades principales:
   - MAX_VALUE, MIN_VALUE
   - MAX_SAFE_INTEGER, MIN_SAFE_INTEGER
   - EPSILON, NaN, Infinity

✅ Métodos estáticos clave:
   - Number.isFinite() - verifica si es finito (sin conversión)
   - Number.isInteger() - verifica si es entero
   - Number.isNaN() - verifica si es NaN (sin conversión)
   - Number.isSafeInteger() - verifica rango seguro
   - Number.parseInt() - convierte a entero
   - Number.parseFloat() - convierte a decimal

✅ Métodos de instancia:
   - toFixed() - formatea decimales
   - toPrecision() - formatea dígitos significativos
   - toExponential() - notación científica
   - toString() - convierte a string (con base opcional)
   - toLocaleString() - formato según región

✅ Buenas prácticas:
   - Usar primitivos, no new Number()
   - Usar Number.isNaN() en lugar de isNaN()
   - Comparar decimales con EPSILON o redondeo
   - Verificar rangos seguros con isSafeInteger()
   - Usar BigInt para números muy grandes
`);

console.log("✅ Archivo completado correctamente");
