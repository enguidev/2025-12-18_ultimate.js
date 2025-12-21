// 🎯 Casos especiales y sorpresas con Strings en JavaScript

console.log("=== 1. EMOJIS Y LENGTH ===\n");

// Un emoji "simple" ocupa 2 unidades UTF-16
const emoji = "👋";
console.log(`"${emoji}".length:`, emoji.length); // 2 (no 1)

// Emojis compuestos pueden ocupar mucho más
const familia = "👨‍👩‍👧‍👦";
console.log(`"${familia}".length:`, familia.length); // 11

// Para contar correctamente, usa spread operator o Array.from()
console.log(`[...emoji].length:`, [...emoji].length); // 1 (correcto)
console.log(`Array.from(familia).length:`, Array.from(familia).length); // 7

// Caso práctico: limitar tweets a 280 caracteres
function contarCaracteresReales(texto) {
  return [...texto].length; // Cuenta correctamente emojis
}
const tweet = "Hola 👋 mundo 🌍";
console.log("length:", tweet.length); // 16
console.log("caracteres reales:", contarCaracteresReales(tweet)); // 14

console.log("\n=== 2. STRINGS VS ARRAYS ===\n");

// Los strings se parecen a arrays, pero NO son arrays
const str = "abc";
const arr = ["a", "b", "c"];

// Similitudes
console.log("str[0]:", str[0]); // "a"
console.log("arr[0]:", arr[0]); // "a"
console.log("str.length:", str.length); // 3
console.log("arr.length:", arr.length); // 3

// GRAN DIFERENCIA: Los strings son INMUTABLES
str[0] = "x"; // No tiene efecto (en modo estricto daría error)
console.log("str después de str[0]='x':", str); // "abc" (sin cambios)

arr[0] = "x"; // Sí modifica
console.log("arr después de arr[0]='x':", arr); // ["x", "b", "c"]

// Para "modificar" un string, debes crear uno nuevo
let texto = "abc";
texto = "x" + texto.slice(1); // Crear nuevo string
console.log("texto modificado:", texto); // "xbc"

console.log("\n=== 3. COMPARACIÓN DE STRINGS ===\n");

// Comparación lexicográfica (NO numérica)
console.log('"10" < "9":', "10" < "9"); // true (compara carácter por carácter)
console.log('"10" < "2":', "10" < "2"); // true

// Comparación de strings con números
console.log('"100" > "20":', "100" > "20"); // false (lexicográfico)
console.log("100 > 20:", 100 > 20); // true (numérico)

// Para comparar números en strings, conviértelos
const num1 = "100";
const num2 = "20";
console.log("Number(num1) > Number(num2):", Number(num1) > Number(num2)); // true

// Comparación con mayúsculas
console.log('"a" > "A":', "a" > "A"); // true (minúsculas tienen mayor código)
console.log('"a".charCodeAt(0):', "a".charCodeAt(0)); // 97
console.log('"A".charCodeAt(0):', "A".charCodeAt(0)); // 65

console.log("\n=== 4. STRING VACÍO VS ESPACIOS ===\n");

const vacio = "";
const espacios = "   ";
const tab = "\t";

console.log('vacio === "":', vacio === ""); // true
console.log('espacios === "":', espacios === ""); // false
console.log('espacios.trim() === "":', espacios.trim() === ""); // true
console.log('tab.trim() === "":', tab.trim() === ""); // true

// Verificar si un string está "realmente vacío"
function estaVacioReal(str) {
  return str.trim().length === 0;
}
console.log('estaVacioReal("   "):', estaVacioReal("   ")); // true
console.log('estaVacioReal("a"):', estaVacioReal("a")); // false

console.log("\n=== 5. CONCATENACIÓN ===\n");

// Diferentes formas de concatenar
const a = "Hola";
const b = "Mundo";

// 1. Operador + (clásico)
console.log("Con +:", a + " " + b); // "Hola Mundo"

// 2. Template literals (moderno, PREFERIDO)
console.log("Con template:", `${a} ${b}`); // "Hola Mundo"

// 3. concat() (casi nunca se usa)
console.log("Con concat:", a.concat(" ", b)); // "Hola Mundo"

// 4. Array.join() (útil para múltiples strings)
console.log("Con join:", [a, b].join(" ")); // "Hola Mundo"

// Rendimiento: Para pocas concatenaciones, + es rápido
// Para muchas concatenaciones en bucles, usa array + join
const partes = [];
for (let i = 0; i < 5; i++) {
  partes.push(`item${i}`);
}
console.log("Concatenación eficiente:", partes.join(", "));

console.log("\n=== 6. COERCIÓN DE TIPOS ===\n");

// JavaScript convierte tipos automáticamente
console.log('"5" + 3:', "5" + 3); // "53" (concatenación)
console.log('"5" - 3:', "5" - 3); // 2 (resta numérica)
console.log('"5" * 3:', "5" * 3); // 15 (multiplicación numérica)
console.log('"5" / 3:', "5" / 3); // 1.666... (división numérica)

// Con operador +, string "gana"
console.log('3 + 4 + "5":', 3 + 4 + "5"); // "75" (7 + "5")
console.log('"5" + 3 + 4:', "5" + 3 + 4); // "534" ("5" + "3" + "4")

// Conversión explícita vs implícita
console.log("String(123):", String(123)); // "123"
console.log('123 + "":', 123 + ""); // "123"
console.log('Number("123"):', Number("123")); // 123
console.log('"123" - 0:', "123" - 0); // 123

console.log("\n=== 7. NaN Y CONVERSIÓN FALLIDA ===\n");

// Intentar convertir texto no numérico a número
console.log('Number("abc"):', Number("abc")); // NaN
console.log('parseInt("abc"):', parseInt("abc")); // NaN
console.log('+"abc":', +"abc"); // NaN

// parseInt es más permisivo
console.log('parseInt("123abc"):', parseInt("123abc")); // 123
console.log('Number("123abc"):', Number("123abc")); // NaN

// Verificar si conversión fue exitosa
function esNumeroValido(str) {
  return !isNaN(Number(str)) && str.trim() !== "";
}
console.log('esNumeroValido("123"):', esNumeroValido("123")); // true
console.log('esNumeroValido("abc"):', esNumeroValido("abc")); // false
console.log('esNumeroValido(""):', esNumeroValido("")); // false

console.log("\n=== 8. UNICODE Y CARACTERES ESPECIALES ===\n");

// Caracteres con acento pueden representarse de dos formas
const cafe1 = "café"; // é como un solo carácter
const cafe2 = "cafe\u0301"; // e + acento combinado

console.log("cafe1 === cafe2:", cafe1 === cafe2); // false
console.log("cafe1.length:", cafe1.length); // 4
console.log("cafe2.length:", cafe2.length); // 5

// Solución: normalize()
console.log(
  "cafe1.normalize() === cafe2.normalize():",
  cafe1.normalize() === cafe2.normalize()
); // true

// Caracteres especiales
console.log("Zero-width space:", "Hola\u200BMundo"); // Parece "HolaMundo" pero no lo es
console.log("Longitud con zero-width:", "Hola\u200BMundo".length); // 10

console.log("\n=== 9. ESCAPE DE CARACTERES ===\n");

// Caracteres que necesitan escape
const textoConComillas = 'Dijo: "Hola"'; // Mezclar comillas
const textoConComillas2 = 'Dijo: "Hola"'; // Escapar con \

console.log(textoConComillas);
console.log(textoConComillas2);

// Barra invertida
const ruta = "C:\\Users\\Documents";
console.log("Ruta Windows:", ruta); // C:\Users\Documents

// Template literals permiten multilínea sin \n
const multilinea = `
  Primera línea
  Segunda línea
  Tercera línea
`;
console.log(multilinea);

console.log("\n=== 10. MÉTODOS QUE POCOS CONOCEN ===\n");

// repeat() - Repetir string n veces
console.log('"Ha".repeat(3):', "Ha".repeat(3)); // "HaHaHa"
console.log('"=".repeat(20):', "=".repeat(20)); // "===================="

// Crear un separador visual
function separador(char = "=", length = 50) {
  return char.repeat(length);
}
console.log(separador());
console.log(separador("-", 30));

// localeCompare con números
const archivos = ["archivo10", "archivo2", "archivo1"];
archivos.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
console.log("Archivos ordenados:", archivos); // ["archivo1", "archivo2", "archivo10"]

// raw (strings crudos en template literals)
const crudo = String.raw`C:\Users\nuevaCarpeta`;
console.log("String.raw:", crudo); // C:\Users\nuevaCarpeta (sin interpretar \)

console.log("\n=== 11. TRUCOS Y OPTIMIZACIONES ===\n");

// Verificar si string contiene solo números
function soloNumeros(str) {
  return /^\d+$/.test(str);
}
console.log('soloNumeros("123"):', soloNumeros("123")); // true
console.log('soloNumeros("12a3"):', soloNumeros("12a3")); // false

// Invertir un string (cuidado con emojis)
function invertir(str) {
  return str.split("").reverse().join("");
}
console.log('invertir("Hola"):', invertir("Hola")); // "aloH"

// Invertir correctamente con emojis
function invertirSeguro(str) {
  return [...str].reverse().join("");
}
console.log('invertirSeguro("Hola👋"):', invertirSeguro("Hola👋")); // "👋aloH"

// Eliminar duplicados (caracteres)
function eliminarDuplicados(str) {
  return [...new Set(str)].join("");
}
console.log('eliminarDuplicados("aabbcc"):', eliminarDuplicados("aabbcc")); // "abc"

// Contar vocales
function contarVocales(str) {
  const matches = str.match(/[aeiouáéíóú]/gi);
  return matches ? matches.length : 0;
}
console.log('contarVocales("Hola Mundo"):', contarVocales("Hola Mundo")); // 4

// Verificar si es palíndromo
function esPalindromo(str) {
  const limpio = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return limpio === limpio.split("").reverse().join("");
}
console.log(
  'esPalindromo("A man a plan a canal Panama"):',
  esPalindromo("A man a plan a canal Panama")
); // true
