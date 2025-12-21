// 🔍 Métodos para buscar contenido dentro de cadenas
const frase = "Aprender JavaScript es divertido";
console.log("\ncadena original: ", frase, "\n");

//******** indexOf() y lastIndexOf() ********//

// indexOf() - En qué índice comienza "Java"
console.log("indexOf('Java'): ", frase.indexOf("Java"), "\n"); // 9

// Si no encuentra, devuelve -1
console.log("indexOf('Python'): ", frase.indexOf("Python"), "\n"); // -1

// Búsqueda desde una posición específica
const texto2 = "uno dos uno tres uno";
console.log("indexOf('uno'): ", texto2.indexOf("uno")); // 0 (primera)
console.log("indexOf('uno', 5): ", texto2.indexOf("uno", 5)); // 8 (desde pos 5)

// lastIndexOf() - Dónde está la última ocurrencia de la letra 'e'
console.log("lastIndexOf('e'): ", frase.lastIndexOf("e"), "\n"); // 26

// lastIndexOf con posición (busca hacia atrás desde esa posición)
console.log("lastIndexOf('e', 20): ", frase.lastIndexOf("e", 20)); // 18

//******** includes() ********//

// includes() - Si incluye la palabra 'divertido'
console.log("includes('divertido'): ", frase.includes("divertido"), "\n"); // true
console.log("includes('aburrido'): ", frase.includes("aburrido"), "\n"); // false

// includes es case-sensitive
console.log("includes('javascript'): ", frase.includes("javascript")); // false
console.log("includes('JavaScript'): ", frase.includes("JavaScript")); // true

// includes desde posición
console.log("includes('es', 20): ", frase.includes("es", 20)); // true

//******** startsWith() y endsWith() ********//

// startsWith() - Si empieza por la palabra 'Aprender'
console.log("startsWith('Aprender'): ", frase.startsWith("Aprender"), "\n"); // true
console.log("startsWith('aprender'): ", frase.startsWith("aprender")); // false (case-sensitive)

// startsWith con posición (verifica desde esa posición)
console.log("startsWith('JavaScript', 9): ", frase.startsWith("JavaScript", 9)); // true

// endsWith() - Si termina por la palabra 'divertido'
console.log("endsWith('divertido'): ", frase.endsWith("divertido"), "\n"); // true

// endsWith con longitud (verifica hasta esa posición)
console.log("endsWith('JavaScript', 21): ", frase.endsWith("JavaScript", 21)); // true

//******** search() con RegExp ********//

// search() - Devuelve la posición de la primera coincidencia
console.log("search(/Java/): ", frase.search(/Java/), "\n"); // 9

// Ventaja de search: permite RegExp con flags
console.log("search(/javascript/i): ", frase.search(/javascript/i)); // 9 (insensible a mayúsculas)

// Diferencia entre search() e indexOf()
console.log("\n--- Diferencia search() vs indexOf() ---");
console.log("indexOf('java'): ", frase.indexOf("java")); // -1 (no encuentra)
console.log("search(/java/i): ", frase.search(/java/i)); // 9 (encuentra con 'i')

// search devuelve -1 si no encuentra
console.log("search(/Python/): ", frase.search(/Python/)); // -1

//******** match() ********//

const texto = "uno, dos, tres, cuatro";

// match() sin flag 'g' - devuelve primera coincidencia con detalles
const primeraCoincidencia = texto.match(/\w+/);
console.log("\nmatch(/\\w+/) sin 'g': ", primeraCoincidencia);
// ["uno", index: 0, input: "uno, dos, tres, cuatro", groups: undefined]

// match() con flag 'g' - devuelve array con todas las coincidencias
// /.../  Delimita la expresión regular.
// \w     Coincide con cualquier carácter alfanumérico: letras (A—Z, a—z), dígitos (0—9) y guion bajo _.
// +      Indica "uno o más" caracteres consecutivos.
// g      Bandera global: busca todas las coincidencias, no solo la primera.
/*
🔎 ¿Por qué esos resultados?
  
  -"uno" → letras → ✅
  -"dos" → letras → ✅
  -"tres" → letras → ✅
  -"cuatro" → letras → ✅
  -Las comas y espacios no se incluyen porque \w no los reconoce.
*/
console.log("match(/\\w+/g): ", texto.match(/\w+/g), "\n"); // ["uno", "dos", "tres", "cuatro"]

// match con grupos de captura
const fecha = "2024-12-20";
const partes = fecha.match(/(\d{4})-(\d{2})-(\d{2})/);
console.log("Año:", partes[1]); // "2024"
console.log("Mes:", partes[2]); // "12"
console.log("Día:", partes[3]); // "20"

// Si no encuentra, match devuelve null
console.log("match(/xyz/): ", texto.match(/xyz/)); // null

//******** matchAll() ********//

// Más potente y flexible que match() cuando necesitas recorrer coincidencias con detalle.
// Devuelve un iterador con todas las coincidencias de una expresión regular.
/*
Cada coincidencia es un array que incluye:

  -El texto coincidente (match[0])
  -Los grupos capturados (si hay paréntesis en la RegExp)
  -La posición (match.index)
  -La cadena original (match.input)
*/

// IMPORTANTE: matchAll() requiere flag 'g'
const coincidencias = texto.matchAll(/\w+/g);

// Recorremos el iterador con for...of
console.log("matchAll(/\\w+/g): ", "\n");
for (const match of coincidencias) {
  console.log(`"${match[0]}" en posición ${match.index}`);
}

// Ejemplo más complejo con grupos de captura
const correos = "Contacto: juan@email.com y maria@empresa.es";
const emails = correos.matchAll(/(\w+)@(\w+\.\w+)/g);

console.log("\nExtrayendo emails con matchAll:");
for (const match of emails) {
  console.log(`Email completo: ${match[0]}`);
  console.log(`Usuario: ${match[1]}`);
  console.log(`Dominio: ${match[2]}`);
  console.log("---");
}

// Convertir iterador a array
const textoNum = "Tengo 25 años y vivo en el año 2024";
const numeros = [...textoNum.matchAll(/\d+/g)];
console.log(
  "\nNúmeros encontrados:",
  numeros.map((m) => m[0])
); // ["25", "2024"]

//******** Casos prácticos ********//

// Validar email simple
function tieneEmail(texto) {
  return /\w+@\w+\.\w+/.test(texto); // test() es más eficiente que match()
}

// Contar ocurrencias
function contarOcurrencias(texto, palabra) {
  const matches = texto.match(new RegExp(palabra, "gi"));
  return matches ? matches.length : 0;
}

// Buscar palabras completas (evita coincidencias parciales)
const textoEjemplo = "El gato y el gato negro";
console.log("\nBúsqueda de 'gato' como palabra completa:");
console.log(textoEjemplo.match(/\bgato\b/g)); // ["gato", "gato"]
// \b = word boundary (límite de palabra)

console.log(
  "\ntieneEmail('Escribe a test@mail.com'):",
  tieneEmail("Escribe a test@mail.com")
); // true
console.log(
  "contarOcurrencias('uno dos uno tres', 'uno'):",
  contarOcurrencias("uno dos uno tres", "uno")
); // 2
