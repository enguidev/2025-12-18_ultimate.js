//--------------------------------------------------------------------------------------
// CONVERSIÓN DE TIPOS PRIMITIVOS
//--------------------------------------------------------------------------------------

/*
JavaScript permite convertir entre tipos primitivos de dos formas:
  1. CONVERSIÓN IMPLÍCITA (Type Coercion) - JavaScript convierte automáticamente
  2. CONVERSIÓN EXPLÍCITA - El programador convierte manualmente
*/

//--------------------------------------------------------------------------------------
// CONVERSIÓN IMPLÍCITA (TYPE COERCION)
//--------------------------------------------------------------------------------------

/*
JavaScript convierte automáticamente tipos en ciertos contextos.
Esto puede causar comportamientos inesperados si no se entiende bien.
*/

// CONVERSIÓN CON EL OPERADOR +
console.log("5" + 3); // "53" (concatenación, 3 → "3")
console.log(5 + "3"); // "53" (concatenación, 5 → "5")
console.log("5" + "3"); // "53" (concatenación)
console.log(5 + 3); // 8 (suma)

// CONVERSIÓN CON OPERADORES ARITMÉTICOS (-, *, /, %)
console.log("5" - 3); // 2 (resta, "5" → 5)
console.log("10" * "2"); // 20 (multiplicación, ambos → number)
console.log("20" / "4"); // 5 (división, ambos → number)
console.log("10" % 3); // 1 (módulo, "10" → 10)

// CONVERSIÓN CON BOOLEANOS
console.log(true + 1); // 2 (true → 1)
console.log(false + 1); // 1 (false → 0)
console.log(true + true); // 2 (ambos → 1)
console.log(true * 5); // 5 (true → 1)

// CONVERSIÓN EN CONTEXTOS BOOLEANOS
if ("hola") {
  console.log("String no vacío es truthy");
}

if (0) {
  console.log("No se ejecuta"); // 0 es falsy
}

// CONVERSIÓN CON COMPARACIONES
console.log("5" == 5); // true (convierte "5" a 5)
console.log("5" === 5); // false (no convierte, compara tipo también)
console.log(null == undefined); // true (caso especial)
console.log(null === undefined); // false

// CONVERSIÓN CON OPERADORES LÓGICOS
console.log("" || "valor"); // "valor" ("" es falsy)
console.log(0 || 100); // 100 (0 es falsy)
console.log("hola" && "mundo"); // "mundo" (ambos truthy, devuelve el último)
console.log(null && "mundo"); // null (null es falsy, cortocircuito)

//--------------------------------------------------------------------------------------
// CONVERSIÓN EXPLÍCITA A NUMBER
//--------------------------------------------------------------------------------------

// 1. Number() - Conversión estricta
console.log(Number("123")); // 123
console.log(Number("123.45")); // 123.45
console.log(Number("123abc")); // NaN (no puede convertir todo)
console.log(Number("")); // 0 (string vacío)
console.log(Number("   456   ")); // 456 (ignora espacios)
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// 2. parseInt() - Parsea enteros
console.log(parseInt("123")); // 123
console.log(parseInt("123.45")); // 123 (ignora decimales)
console.log(parseInt("123abc")); // 123 (parsea hasta encontrar no-dígito)
console.log(parseInt("abc123")); // NaN (empieza con letra)
console.log(parseInt("  456  ")); // 456

// parseInt con radix (base numérica)
console.log(parseInt("1010", 2)); // 10 (binario)
console.log(parseInt("FF", 16)); // 255 (hexadecimal)
console.log(parseInt("77", 8)); // 63 (octal)

// ⚠️ SIEMPRE especifica el radix
console.log(parseInt("08")); // 8
console.log(parseInt("08", 10)); // 8 (recomendado)

// 3. parseFloat() - Parsea decimales
console.log(parseFloat("123.45")); // 123.45
console.log(parseFloat("123.45.67")); // 123.45 (solo primer punto)
console.log(parseFloat("123abc")); // 123
console.log(parseFloat("abc123")); // NaN

// Notación científica
console.log(parseFloat("1e3")); // 1000
console.log(parseFloat("1.5e2")); // 150

// 4. Operador unario + (conversión rápida)
console.log(+"123"); // 123
console.log(+"123.45"); // 123.45
console.log(+"123abc"); // NaN
console.log(+true); // 1
console.log(+false); // 0

//--------------------------------------------------------------------------------------
// TABLA COMPARATIVA: Number(), parseInt(), parseFloat()
//--------------------------------------------------------------------------------------

/*
┌─────────────────┬──────────┬──────────┬──────────────┬───────────┐
│ Input           │ Number() │ parseInt │ parseFloat() │     +     │
├─────────────────┼──────────┼──────────┼──────────────┼───────────┤
│ "123"           │   123    │   123    │     123      │    123    │
│ "123.45"        │  123.45  │   123    │    123.45    │   123.45  │
│ "123abc"        │   NaN    │   123    │     123      │    NaN    │
│ "abc123"        │   NaN    │   NaN    │     NaN      │    NaN    │
│ ""              │    0     │   NaN    │     NaN      │     0     │
│ "  456  "       │   456    │   456    │     456      │    456    │
│ "0xFF"          │   255    │   255    │      0       │    255    │
│ "1e3"           │  1000    │    1     │    1000      │   1000    │
│ true            │    1     │   NaN    │     NaN      │     1     │
│ null            │    0     │   NaN    │     NaN      │     0     │
│ undefined       │   NaN    │   NaN    │     NaN      │    NaN    │
└─────────────────┴──────────┴──────────┴──────────────┴───────────┘
*/

//--------------------------------------------------------------------------------------
// CONVERSIÓN EXPLÍCITA A STRING
//--------------------------------------------------------------------------------------

// 1. String() - Convierte cualquier valor a string
console.log(String(123)); // "123"
console.log(String(123.45)); // "123.45"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String([1, 2, 3])); // "1,2,3"
console.log(String({ a: 1 })); // "[object Object]"

// 2. .toString() - Método disponible en la mayoría de valores
let numero = 123;
console.log(numero.toString()); // "123"
console.log((123).toString()); // "123"
console.log(true.toString()); // "true"

// toString con base (solo para números)
console.log((10).toString(2)); // "1010" (binario)
console.log((255).toString(16)); // "ff" (hexadecimal)
console.log((8).toString(8)); // "10" (octal)

// ⚠️ null y undefined NO tienen toString()
// console.log(null.toString()); // ❌ Error
// console.log(undefined.toString()); // ❌ Error

// 3. Template literals (conversión implícita)
let edad = 25;
console.log(`Tengo ${edad} años`); // "Tengo 25 años"

// 4. Concatenación con string vacío
console.log(123 + ""); // "123"
console.log(true + ""); // "true"

//--------------------------------------------------------------------------------------
// CONVERSIÓN EXPLÍCITA A BOOLEAN
//--------------------------------------------------------------------------------------

// 1. Boolean() - Convierte a booleano
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hola")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean([])); // true (array vacío es truthy)
console.log(Boolean({})); // true (objeto vacío es truthy)

// 2. Doble negación !! (conversión rápida)
console.log(!!1); // true
console.log(!!0); // false
console.log(!!"hola"); // true
console.log(!!""); // false

// Recordatorio de valores falsy
const valoresFalsy = [false, 0, -0, 0n, "", null, undefined, NaN];
valoresFalsy.forEach((valor) => {
  console.log(`${valor} es falsy:`, !valor);
});

//--------------------------------------------------------------------------------------
// VALIDACIÓN: isNaN() vs Number.isNaN()
//--------------------------------------------------------------------------------------

// isNaN() - Convierte a número primero (legacy)
console.log(isNaN(NaN)); // true
console.log(isNaN("abc")); // true (convierte "abc" a NaN)
console.log(isNaN("123")); // false (convierte "123" a 123)
console.log(isNaN(undefined)); // true

// Number.isNaN() - No convierte, más preciso (moderno)
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("abc")); // false (no convierte)
console.log(Number.isNaN("123")); // false
console.log(Number.isNaN(undefined)); // false

// ✅ RECOMENDACIÓN: Usa Number.isNaN()

//--------------------------------------------------------------------------------------
// VALIDACIÓN: isFinite() vs Number.isFinite()
//--------------------------------------------------------------------------------------

// isFinite() - Convierte primero (legacy)
console.log(isFinite(123)); // true
console.log(isFinite("123")); // true (convierte)
console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false

// Number.isFinite() - No convierte (moderno)
console.log(Number.isFinite(123)); // true
console.log(Number.isFinite("123")); // false (no convierte)
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false

// ✅ RECOMENDACIÓN: Usa Number.isFinite()

//--------------------------------------------------------------------------------------
// VALIDACIÓN: Number.isInteger()
//--------------------------------------------------------------------------------------

console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(123.0)); // true (123.0 === 123)
console.log(Number.isInteger(123.45)); // false
console.log(Number.isInteger("123")); // false (no convierte)
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(NaN)); // false

//--------------------------------------------------------------------------------------
// REDONDEO DE NÚMEROS
//--------------------------------------------------------------------------------------

const num = 123.456;

// Math.round() - Redondea al más cercano
console.log(Math.round(num)); // 123
console.log(Math.round(123.5)); // 124
console.log(Math.round(123.4)); // 123

// Math.floor() - Redondea hacia abajo
console.log(Math.floor(num)); // 123
console.log(Math.floor(123.9)); // 123
console.log(Math.floor(-123.1)); // -124

// Math.ceil() - Redondea hacia arriba
console.log(Math.ceil(num)); // 124
console.log(Math.ceil(123.1)); // 124
console.log(Math.ceil(-123.9)); // -123

// Math.trunc() - Elimina decimales (trunca)
console.log(Math.trunc(num)); // 123
console.log(Math.trunc(-123.9)); // -123

// toFixed() - Redondea a N decimales (devuelve string)
console.log(num.toFixed(2)); // "123.46" (string)
console.log(num.toFixed(0)); // "123"
console.log(parseFloat(num.toFixed(2))); // 123.46 (número)

// toPrecision() - N dígitos significativos (devuelve string)
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toPrecision(2)); // "1.2e+2"

//--------------------------------------------------------------------------------------
// EJEMPLOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// 1. Validar entrada numérica
function validarNumero(input) {
  const num = Number(input);

  if (Number.isNaN(num)) {
    return { valido: false, error: "No es un número válido" };
  }

  if (!Number.isFinite(num)) {
    return { valido: false, error: "El número no es finito" };
  }

  return { valido: true, valor: num };
}

console.log(validarNumero("123")); // { valido: true, valor: 123 }
console.log(validarNumero("abc")); // { valido: false, error: ... }

// 2. Parsear precio
function parsearPrecio(precio) {
  // Eliminar símbolo $ y espacios, reemplazar comas
  const limpio = precio.replace(/[$\s]/g, "").replace(",", ".");
  return parseFloat(limpio);
}

console.log(parsearPrecio("$123.45")); // 123.45
console.log(parsearPrecio("$ 1.234,56")); // 1.234 (cuidado con formato europeo)

// 3. Convertir a booleano de forma segura
function toBoolean(valor) {
  // Maneja strings especiales
  if (typeof valor === "string") {
    const lower = valor.toLowerCase().trim();
    if (lower === "true" || lower === "1" || lower === "yes") return true;
    if (lower === "false" || lower === "0" || lower === "no") return false;
  }

  return Boolean(valor);
}

console.log(toBoolean("true")); // true
console.log(toBoolean("false")); // false
console.log(toBoolean("yes")); // true
console.log(toBoolean(1)); // true

//--------------------------------------------------------------------------------------
// BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
1. Usa conversión explícita para claridad:
   - Number(input) es más claro que +input
   
2. Especifica siempre el radix en parseInt():
   - Usa parseInt("08", 10) en lugar de parseInt("08")
   
3. Usa Number.isNaN() en lugar de isNaN():
   - Number.isNaN(valor) no convierte antes de verificar
   - isNaN(valor) convierte primero (puede dar falsos positivos)
   
4. Valida después de convertir:
   - Siempre verifica que la conversión fue exitosa
   - Usa Number.isNaN() y Number.isFinite() para validar
   
5. Cuidado con el operador de igualdad ==:
   - Usa === para evitar conversión automática de tipos
   - "5" == 5 es true (hay coerción)
   - "5" === 5 es false (sin coerción)
   
6. El operador + con strings concatena:
   - "10" + 5 resulta en "105" (concatenación)
   - Para sumar: Number("10") + 5 resulta en 15
   
7. parseInt en arrays puede dar sorpresas:
   - ["1", "2", "3"].map(parseInt) da [1, NaN, NaN]
   - Usa ["1", "2", "3"].map(x => parseInt(x, 10)) para obtener [1, 2, 3]
*/

// Ejemplos de buenas prácticas:

// ✅ BUENO: Conversión explícita
const numero1 = Number(input);

// ⚠️ EVITAR: Conversión con operador unario (menos claro)
const numero2 = +input;

// ✅ BUENO: Especificar radix
const entero1 = parseInt("08", 10);

// ⚠️ EVITAR: Sin radix
const entero2 = parseInt("08");

// ✅ BUENO: Number.isNaN (no convierte)
if (Number.isNaN(valor)) {
  console.log("Es NaN");
}

// ⚠️ EVITAR: isNaN (convierte primero)
if (isNaN(valor)) {
  console.log("Puede dar falsos positivos");
}

// ✅ BUENO: Validar después de convertir
const num2 = Number(input);
if (Number.isNaN(num2)) {
  console.error("Error: no es un número válido");
}

// ✅ BUENO: Usar === para evitar coerción
if ("5" === 5) {
  console.log("No se ejecuta"); // false
}

// ⚠️ EVITAR: Usar ==
if ("5" == 5) {
  console.log("Se ejecuta"); // true (coerción)
}

// ✅ BUENO: Convertir antes de sumar
const suma = Number("10") + 5; // 15

// ⚠️ EVITAR: Concatenación accidental
const concatenacion = "10" + 5; // "105"

// ✅ BUENO: parseInt con arrow function y radix
const numeros = ["1", "2", "3"].map((x) => parseInt(x, 10)); // [1, 2, 3]

// ⚠️ EVITAR: parseInt directamente (pasa el índice como segundo parámetro)
const incorrecto = ["1", "2", "3"].map(parseInt); // [1, NaN, NaN]

//--------------------------------------------------------------------------------------
// CASOS ESPECIALES
//--------------------------------------------------------------------------------------

// NaN es único: no es igual a sí mismo
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true (forma correcta)

// Comparación de strings numéricas
console.log("10" > "9"); // false (compara lexicográficamente)
console.log(10 > 9); // true

// parseInt con notación científica
console.log(parseInt(0.0000008)); // 8 (se convierte a "8e-7")
console.log(parseInt(1000000000000000000000)); // 1

// Infinito en operaciones
console.log(Infinity + 1); // Infinity
console.log(Infinity - Infinity); // NaN
console.log(1 / Infinity); // 0
