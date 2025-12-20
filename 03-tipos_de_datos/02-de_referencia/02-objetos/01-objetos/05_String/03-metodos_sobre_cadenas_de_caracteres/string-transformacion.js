// 🔠 Métodos para modificar el contenido textual

const saludo = "  hola mundo  ";
console.log("Cadena original: ", saludo, "\n");

// toUpperCase() - a mayúsculas
console.log("Con toUpperCase: ", saludo.toUpperCase(), "\n"); // "  HOLA MUNDO  "

// toLowerCase()-  a minúsculas
console.log("Con toLowerCase: ", saludo.toLowerCase(), "\n"); // "  hola mundo  "

// trim() - quita espacios al principio y al final de la cadena
console.log("Con trim(): ", saludo.trim(), "\n"); // "hola mundo"

// trimStart() - quita espacios al principio de la cadena
console.log("Con trimStart(): ", saludo.trimStart(), "\n"); // "hola mundo  "

// trimEnd() - quita espacios al final de la cadena
console.log("Con trimEnd(): ", saludo.trimEnd(), "\n"); // "  hola mundo"

// De relleno
const codigo = "7";

// padStart(targetLength, padString) - Rellena la cadena al inicio hasta alcanzar una longitud deseada.
console.log(
  "Con padStart(targetLength, padString): ",
  codigo.padStart(3, "0"),
  "\n"
); // "007"

// padEnd(targetLength, padString) - Rellena la cadena al final hasta alcanzar una longitud deseada.
console.log(
  "Con padEnd(targetLength, padString): ",
  codigo.padEnd(3, "x"),
  "\n"
); // "7xx"

// normalize([form])
// Útil para comparar acentos y caracteres Unicode
// Normaliza caracteres Unicode. Muy útil para acentos y equivalencias visuales.
// 🧠 Evita errores en búsquedas, comparaciones o validaciones con acentos.
const acento = "café";
const sinAcento = "cafe\u0301"; // 'e' + acento separado
console.log("Sin normalize([form]): ", acento === sinAcento, "\n"); // false
console.log(
  "Con normalize([form]): ",
  acento.normalize() === sinAcento.normalize(),
  "\n"
); // true
