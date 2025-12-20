// 🔠 Métodos para modificar el contenido textual

const saludo = "  hola mundo  ";
console.log("Cadena original: ", saludo, "\n");

//******** toUpperCase() y toLowerCase() ********//

// toUpperCase() - Convierte a MAYÚSCULAS
console.log("Con toUpperCase(): ", saludo.toUpperCase(), "\n"); // "  HOLA MUNDO  "

// toLowerCase() - Convierte a minúsculas
console.log("Con toLowerCase(): ", saludo.toLowerCase(), "\n"); // "  hola mundo  "

// Nota: No afectan a números ni símbolos
const mixto = "Hola123!@#";
console.log("Mixto toUpperCase():", mixto.toUpperCase()); // "HOLA123!@#"
console.log("Mixto toLowerCase():", mixto.toLowerCase()); // "hola123!@#"

// Caso especial con caracteres Unicode
const aleman = "ßtraße"; // ß es la letra alemana "eszett"
console.log("ßtraße toUpperCase():", aleman.toUpperCase()); // "SSTRASSE" (ß se convierte en SS)

const turco = "istanbul";
console.log("istanbul toUpperCase():", turco.toUpperCase()); // "ISTANBUL"
// En turco, la i se convierte en İ (con punto), pero JS usa las reglas del inglés por defecto

// toLocaleUpperCase() y toLocaleLowerCase() - Con reglas locales
console.log("istanbul toLocaleUpperCase('tr'):", turco.toLocaleUpperCase("tr")); // Puede variar según el idioma

//******** trim(), trimStart(), trimEnd() ********//

console.log("\n=== TRIM ===\n");

// trim() - Elimina espacios al principio y al final de la cadena
console.log("Con trim(): ", saludo.trim(), "\n"); // "hola mundo"

// trimStart() (o trimLeft()) - Elimina espacios al principio de la cadena
console.log("Con trimStart(): ", saludo.trimStart(), "\n"); // "hola mundo  "

// trimEnd() (o trimRight()) - Elimina espacios al final de la cadena
console.log("Con trimEnd(): ", saludo.trimEnd(), "\n"); // "  hola mundo"

// ¿Qué elimina trim()?
const espacios = " \t\n\r  texto  \t\n\r ";
console.log("Trim elimina espacios, tabs, saltos:", `[${espacios.trim()}]`); // "[texto]"

// Casos especiales
const vacio = "   ";
console.log("String solo con espacios trimmed:", `[${vacio.trim()}]`); // "[]"
console.log("¿Es vacío después de trim?:", vacio.trim().length === 0); // true

// trim no elimina espacios internos
const interno = "  hola    mundo  ";
console.log("trim() no afecta espacios internos:", interno.trim()); // "hola    mundo"

//******** padStart() y padEnd() ********//

console.log("\n=== PAD (RELLENO) ===\n");

const codigo = "7";

// padStart(targetLength, padString) - Rellena al inicio hasta alcanzar una longitud deseada
console.log(
  "Con padStart(targetLength, padString): ",
  codigo.padStart(3, "0"),
  "\n"
); // "007"

// padEnd(targetLength, padString) - Rellena al final hasta alcanzar una longitud deseada
console.log(
  "Con padEnd(targetLength, padString): ",
  codigo.padEnd(3, "x"),
  "\n"
); // "7xx"

// Más ejemplos de padStart
console.log("padStart(5, '0'):", "42".padStart(5, "0")); // "00042"
console.log("padStart(10, '*'):", "JS".padStart(10, "*")); // "********JS"

// Si el string ya es más largo, no hace nada
console.log("padStart(2, '0') con '12345':", "12345".padStart(2, "0")); // "12345"

// Si no se especifica padString, usa espacios
console.log("padStart(5) sin segundo arg:", "hi".padStart(5)); // "   hi"

// padString se repite si es necesario
console.log("padStart(10, 'abc'):", "x".padStart(10, "abc")); // "abcabcabcx"

// Si padString es más largo, se trunca
console.log("padStart(5, '12345'):", "x".padStart(5, "12345")); // "1234x"

// Casos prácticos con pad
function formatearHora(hora, minuto, segundo) {
  return `${hora.toString().padStart(2, "0")}:${minuto
    .toString()
    .padStart(2, "0")}:${segundo.toString().padStart(2, "0")}`;
}
console.log("\nformatearHora(9, 5, 3):", formatearHora(9, 5, 3)); // "09:05:03"

function formatearPrecio(precio) {
  return "€" + precio.toFixed(2).padStart(8, " ");
}
console.log("formatearPrecio(42.5):", formatearPrecio(42.5)); // "€   42.50"

// Crear tabla ASCII
function crearFila(col1, col2, col3) {
  return `| ${col1.padEnd(15)} | ${col2.padEnd(10)} | ${col3.padEnd(8)} |`;
}
console.log("\nTabla ASCII:");
console.log(crearFila("Nombre", "Edad", "Ciudad"));
console.log(crearFila("Juan García", "25", "Madrid"));
console.log(crearFila("Ana López", "30", "BCN"));

//******** normalize() ********//

console.log("\n=== NORMALIZE ===\n");

// Útil para comparar acentos y caracteres Unicode
// Normaliza caracteres Unicode. Muy útil para acentos y equivalencias visuales.
// 🧠 Evita errores en búsquedas, comparaciones o validaciones con acentos.

const acento = "café";
const sinAcento = "cafe\u0301"; // 'e' + acento separado

console.log("Sin normalize():");
console.log("  acento:", acento, "- length:", acento.length); // 4
console.log("  sinAcento:", sinAcento, "- length:", sinAcento.length); // 5
console.log("  ¿Son iguales?:", acento === sinAcento, "\n"); // false

console.log("Con normalize():");
console.log("  acento.normalize():", acento.normalize());
console.log("  sinAcento.normalize():", sinAcento.normalize());
console.log(
  "  ¿Son iguales?:",
  acento.normalize() === sinAcento.normalize(),
  "\n"
); // true

// Formas de normalización
console.log("=== Formas de normalize() ===\n");

const texto = "Ñoño";

// NFD - Canonical Decomposition (descompone caracteres)
console.log(
  "NFD:",
  texto.normalize("NFD"),
  "- length:",
  texto.normalize("NFD").length
);

// NFC - Canonical Composition (compone caracteres) - POR DEFECTO
console.log(
  "NFC:",
  texto.normalize("NFC"),
  "- length:",
  texto.normalize("NFC").length
);

// NFKD - Compatibility Decomposition
console.log("NFKD:", texto.normalize("NFKD"));

// NFKC - Compatibility Composition
console.log("NFKC:", texto.normalize("NFKC"));

// Caso práctico: búsqueda sin importar acentos
function buscarSinAcentos(array, busqueda) {
  const busquedaNorm = busqueda
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return array.filter((item) => {
    const itemNorm = item.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return itemNorm.toLowerCase().includes(busquedaNorm.toLowerCase());
  });
}

const ciudades = ["Málaga", "Cádiz", "Córdoba", "León"];
console.log(
  '\nbuscarSinAcentos(ciudades, "cadiz"):',
  buscarSinAcentos(ciudades, "cadiz")
); // ["Cádiz"]

//******** Casos prácticos combinados ********//

console.log("\n=== CASOS PRÁCTICOS ===\n");

// 1. Capitalizar primera letra
function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log("capitalizar('jAVAsCRIPT'):", capitalizar("jAVAsCRIPT")); // "Javascript"

// 2. Capitalizar cada palabra (Title Case)
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}
console.log(
  "titleCase('hola mundo desde JAVASCRIPT'):",
  titleCase("hola mundo desde JAVASCRIPT")
); // "Hola Mundo Desde Javascript"

// 3. Limpiar string (trim + eliminar espacios múltiples)
function limpiar(str) {
  return str.trim().replace(/\s+/g, " ");
}
console.log("limpiar('  hola    mundo  '):", limpiar("  hola    mundo  ")); // "hola mundo"

// 4. Centrar texto
function centrar(str, ancho, relleno = " ") {
  if (str.length >= ancho) return str;
  const espaciosTotal = ancho - str.length;
  const izq = Math.floor(espaciosTotal / 2);
  const der = espaciosTotal - izq;
  return relleno.repeat(izq) + str + relleno.repeat(der);
}
console.log("Centrado:", "|" + centrar("TÍTULO", 20) + "|");

// 5. Formatear número de teléfono
function formatearTelefono(numero) {
  const limpio = numero.replace(/\D/g, ""); // Eliminar no-dígitos
  if (limpio.length === 9) {
    return limpio.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");
  }
  return numero;
}
console.log("formatearTelefono('612345678'):", formatearTelefono("612345678")); // "612 345 678"

// 6. Convertir a snake_case
function toSnakeCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w_]/g, "");
}
console.log("toSnakeCase('Hola Mundo JS'):", toSnakeCase("Hola Mundo JS")); // "hola_mundo_js"

// 7. Convertir a kebab-case
function toKebabCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}
console.log("toKebabCase('Hola Mundo JS'):", toKebabCase("Hola Mundo JS")); // "hola-mundo-js"

// 8. Convertir a camelCase
function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}
console.log("toCamelCase('hola mundo JS'):", toCamelCase("hola mundo JS")); // "holaMundoJs"

// 9. Convertir a PascalCase
function toPascalCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
    .replace(/^(.)/, (match, chr) => chr.toUpperCase());
}
console.log("toPascalCase('hola mundo JS'):", toPascalCase("hola mundo JS")); // "HolaMundoJs"

// 10. Eliminar acentos completamente
function eliminarAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
console.log(
  "eliminarAcentos('José García Ñoño'):",
  eliminarAcentos("José García Ñoño")
); // "Jose Garcia Ñoño"

// 11. Formatear código postal español
function formatearCodigoPostal(cp) {
  const limpio = cp.replace(/\D/g, "");
  return limpio.padStart(5, "0");
}
console.log("formatearCodigoPostal('8001'):", formatearCodigoPostal("8001")); // "08001"

// 12. Crear máscara de tarjeta de crédito
function formatearTarjeta(numero) {
  const limpio = numero.replace(/\s/g, "");
  return limpio.replace(/(\d{4})/g, "$1 ").trim();
}
console.log(
  "formatearTarjeta('1234567890123456'):",
  formatearTarjeta("1234567890123456")
); // "1234 5678 9012 3456"

//******** Validaciones con transformación ********//

console.log("\n=== VALIDACIONES ===\n");

// Verificar si un string está vacío (ignorando espacios)
function estaVacioReal(str) {
  return str.trim().length === 0;
}
console.log("estaVacioReal('   '):", estaVacioReal("   ")); // true

// Verificar si dos strings son iguales ignorando mayúsculas y acentos
function sonIguales(str1, str2) {
  const norm1 = str1
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const norm2 = str2
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return norm1 === norm2;
}
console.log("sonIguales('Café', 'CAFE'):", sonIguales("Café", "CAFE")); // true

//******** Transformaciones especiales ********//

console.log("\n=== TRANSFORMACIONES ESPECIALES ===\n");

// Alternar mayúsculas/minúsculas (toggle case)
function toggleCase(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}
console.log("toggleCase('HoLa MuNdO'):", toggleCase("HoLa MuNdO")); // "hOlA mUnDo"

// Convertir a alternancia (aLtErNaNcIa)
function alternancia(str) {
  return str
    .split("")
    .map((char, i) => (i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
    .join("");
}
console.log("alternancia('hola mundo'):", alternancia("hola mundo")); // "hOlA MuNdO"

// Invertir case solo de letras
function invertirCase(str) {
  return str
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") return char.toUpperCase();
      if (char >= "A" && char <= "Z") return char.toLowerCase();
      return char;
    })
    .join("");
}
console.log("invertirCase('Hola123'):", invertirCase("Hola123")); // "hOLA123"

//******** Resumen de métodos ********//

console.log("\n=== RESUMEN ===\n");
console.log(`
Método              | Qué hace
--------------------|------------------------------------------
toUpperCase()       | Convierte a MAYÚSCULAS
toLowerCase()       | Convierte a minúsculas
trim()              | Elimina espacios al inicio y final
trimStart()         | Elimina espacios al inicio
trimEnd()           | Elimina espacios al final
padStart()          | Rellena al inicio hasta longitud deseada
padEnd()            | Rellena al final hasta longitud deseada
normalize()         | Normaliza caracteres Unicode (acentos)

💡 NINGUNO modifica el string original (inmutabilidad)
💡 Todos devuelven un NUEVO string
`);
