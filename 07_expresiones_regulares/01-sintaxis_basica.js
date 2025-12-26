//==============================================================================
// 01 - SINTAXIS BÁSICA DE REGEX
//==============================================================================

console.log("=== CREAR EXPRESIONES REGULARES ===\n");

// 🔹 FORMA 1: Literal (más común)
const regex1 = /hola/;
console.log("Literal:", regex1);
console.log("  Tipo:", typeof regex1); // object
console.log("  Instancia de RegExp:", regex1 instanceof RegExp);

// 🔹 FORMA 2: Constructor RegExp
const regex2 = new RegExp("hola");
console.log("\nConstructor:", regex2);

// ¿Cuándo usar constructor? Cuando el patrón es dinámico
const palabra = "JavaScript";
const regexDinamico = new RegExp(palabra);
console.log("Dinámico:", regexDinamico);

console.log("\n=== FLAGS (MODIFICADORES) ===\n");

const texto = "JavaScript es JavaScript y javascript";

// g = global (todas las coincidencias)
const conG = /javascript/g;
const sinG = /javascript/;
console.log("Sin flag g:", texto.match(sinG)); // Solo primera
console.log("Con flag g:", texto.match(conG)); // null (case-sensitive)

// i = case-insensitive (ignora mayús/minús)
const conI = /javascript/i;
console.log("\nCon flag i:", texto.match(conI)); // Encuentra "JavaScript"

// gi = global + case-insensitive
const conGI = /javascript/gi;
console.log("Con flags gi:", texto.match(conGI)); // Todas las variantes

// m = multilínea (^ y $ afectan a cada línea)
const textoMulti = "línea 1\nlínea 2\nlínea 3";
const conM = /^\w+/gm;
console.log("\nCon flag m:", textoMulti.match(conM)); // Palabras al inicio de cada línea

console.log("\n=== CARACTERES LITERALES ===\n");

// Coincidencia exacta
const textoTest = "Hola mundo";
console.log("/Hola/.test('Hola mundo'):", /Hola/.test(textoTest)); // true
console.log("/hola/.test('Hola mundo'):", /hola/.test(textoTest)); // false
console.log("/hola/i.test('Hola mundo'):", /hola/i.test(textoTest)); // true

console.log("\n=== EL PUNTO (.) - CUALQUIER CARÁCTER ===\n");

// . coincide con CUALQUIER carácter excepto salto de línea
console.log("/h.la/.test('hola'):", /h.la/.test("hola")); // true
console.log("/h.la/.test('hala'):", /h.la/.test("hala")); // true
console.log("/h.la/.test('h9la'):", /h.la/.test("h9la")); // true
console.log("/h.la/.test('hla'):", /h.la/.test("hla")); // false (falta carácter)

// Para buscar un punto literal, escapar con \
console.log("\n/3.14/.test('3X14'):", /3.14/.test("3X14")); // true (. es comodín)
console.log("/3\\.14/.test('3X14'):", /3\.14/.test("3X14")); // false
console.log("/3\\.14/.test('3.14'):", /3\.14/.test("3.14")); // true

console.log("\n=== ANCLAS: ^ (INICIO) Y $ (FINAL) ===\n");

const textoAncla = "JavaScript";

// ^ = inicio de la cadena
console.log("/^Java/.test('JavaScript'):", /^Java/.test(textoAncla)); // true
console.log("/^Script/.test('JavaScript'):", /^Script/.test(textoAncla)); // false

// $ = final de la cadena
console.log("/Script$/.test('JavaScript'):", /Script$/.test(textoAncla)); // true
console.log("/Java$/.test('JavaScript'):", /Java$/.test(textoAncla)); // false

// Combinadas: validación exacta
console.log("\n/^Java$/.test('Java'):", /^Java$/.test("Java")); // true
console.log("/^Java$/.test('JavaScript'):", /^Java$/.test("JavaScript")); // false

console.log("\n=== CLASES DE CARACTERES ===\n");

// \d = dígito [0-9]
console.log("\\d → Dígito:");
console.log("  /\\d/.test('5'):", /\d/.test("5")); // true
console.log("  /\\d/.test('a'):", /\d/.test("a")); // false
console.log("  /\\d+/.test('2024'):", /\d+/.test("2024")); // true

// \D = NO dígito [^0-9]
console.log("\n\\D → NO dígito:");
console.log("  /\\D/.test('a'):", /\D/.test("a")); // true
console.log("  /\\D/.test('5'):", /\D/.test("5")); // false

// \w = palabra [a-zA-Z0-9_]
console.log("\n\\w → Palabra (letra, número, _):");
console.log("  /\\w/.test('a'):", /\w/.test("a")); // true
console.log("  /\\w/.test('5'):", /\w/.test("5")); // true
console.log("  /\\w/.test('_'):", /\w/.test("_")); // true
console.log("  /\\w/.test('-'):", /\w/.test("-")); // false

// \W = NO palabra [^a-zA-Z0-9_]
console.log("\n\\W → NO palabra:");
console.log("  /\\W/.test('-'):", /\W/.test("-")); // true
console.log("  /\\W/.test('@'):", /\W/.test("@")); // true
console.log("  /\\W/.test('a'):", /\W/.test("a")); // false

// \s = espacio en blanco [ \t\n\r]
console.log("\n\\s → Espacio:");
console.log("  /\\s/.test(' '):", /\s/.test(" ")); // true
console.log("  /\\s/.test('\\t'):", /\s/.test("\t")); // true
console.log("  /\\s/.test('a'):", /\s/.test("a")); // false

// \S = NO espacio
console.log("\n\\S → NO espacio:");
console.log("  /\\S/.test('a'):", /\S/.test("a")); // true
console.log("  /\\S/.test(' '):", /\S/.test(" ")); // false

console.log("\n=== CONJUNTOS [abc] ===\n");

// [abc] = a, b o c
console.log("[abc] → a, b o c:");
console.log("  /[abc]/.test('a'):", /[abc]/.test("a")); // true
console.log("  /[abc]/.test('b'):", /[abc]/.test("b")); // true
console.log("  /[abc]/.test('d'):", /[abc]/.test("d")); // false

// [a-z] = rango de a a z
console.log("\n[a-z] → rango minúsculas:");
console.log("  /[a-z]/.test('m'):", /[a-z]/.test("m")); // true
console.log("  /[a-z]/.test('M'):", /[a-z]/.test("M")); // false

// [A-Z] = rango mayúsculas
console.log("\n[A-Z] → rango mayúsculas:");
console.log("  /[A-Z]/.test('M'):", /[A-Z]/.test("M")); // true
console.log("  /[A-Z]/.test('m'):", /[A-Z]/.test("m")); // false

// [0-9] = rango dígitos (equivale a \d)
console.log("\n[0-9] → dígitos:");
console.log("  /[0-9]/.test('5'):", /[0-9]/.test("5")); // true

// [a-zA-Z] = combinación de rangos
console.log("\n[a-zA-Z] → cualquier letra:");
console.log("  /[a-zA-Z]/.test('a'):", /[a-zA-Z]/.test("a")); // true
console.log("  /[a-zA-Z]/.test('M'):", /[a-zA-Z]/.test("M")); // true
console.log("  /[a-zA-Z]/.test('5'):", /[a-zA-Z]/.test("5")); // false

// [^abc] = NEGACIÓN (cualquiera excepto a, b, c)
console.log("\n[^abc] → NO a, b ni c:");
console.log("  /[^abc]/.test('d'):", /[^abc]/.test("d")); // true
console.log("  /[^abc]/.test('a'):", /[^abc]/.test("a")); // false

console.log("\n=== LÍMITES DE PALABRA: \\b y \\B ===\n");

const frase = "The cat sat on the catalog";

// \b = límite de palabra
console.log("\\b → límite de palabra:");
console.log("  /\\bcat\\b/.test(frase):", /\bcat\b/.test(frase)); // true (cat aislado)
console.log("  /\\bcat\\b/.test('catalog'):", /\bcat\b/.test("catalog")); // false

// \B = NO límite de palabra
console.log("\n\\B → NO límite:");
console.log("  /\\Bcat/.test('catalog'):", /\Bcat/.test("catalog")); // true (dentro)
console.log("  /\\Bcat/.test('cat'):", /\Bcat/.test("cat")); // false (inicio)

console.log("\n=== ALTERNANCIA: | (OR) ===\n");

// a|b = a o b
console.log(
  "/gato|perro/.test('tengo un gato'):",
  /gato|perro/.test("tengo un gato")
); // true
console.log(
  "/gato|perro/.test('tengo un perro'):",
  /gato|perro/.test("tengo un perro")
); // true
console.log(
  "/gato|perro/.test('tengo un pez'):",
  /gato|perro/.test("tengo un pez")
); // false

// Se puede combinar con grupos
console.log(
  "/JavaScript|Python/.test('Uso JavaScript'):",
  /JavaScript|Python/.test("Uso JavaScript")
);

console.log("\n=== ESCAPAR CARACTERES ESPECIALES ===\n");

// Caracteres que necesitan escape: . * + ? ^ $ { } ( ) | [ ] \ /
const especiales = [
  ".",
  "*",
  "+",
  "?",
  "^",
  "$",
  "{",
  "}",
  "(",
  ")",
  "|",
  "[",
  "]",
  "\\",
];

console.log("Caracteres que necesitan \\ para búsqueda literal:");
especiales.forEach((char) => {
  console.log(`  ${char} → \\${char}`);
});

console.log("\nEjemplos:");
console.log("  /\\./.test('.'):", /\./.test(".")); // true (punto literal)
console.log("  /\\*/.test('*'):", /\*/.test("*")); // true (asterisco literal)
console.log("  /\\$/.test('$'):", /\$/.test("$")); // true (dólar literal)

console.log("\n=== EJEMPLOS PRÁCTICOS ===\n");

// Validar que es solo números
const soloNumeros = /^\d+$/;
console.log("Solo números /^\\d+$/:");
console.log("  '12345':", soloNumeros.test("12345")); // true
console.log("  '123a5':", soloNumeros.test("123a5")); // false

// Validar que empieza con letra mayúscula
const empiezaMayus = /^[A-Z]/;
console.log("\nEmpieza con mayúscula /^[A-Z]/:");
console.log("  'Hola':", empiezaMayus.test("Hola")); // true
console.log("  'hola':", empiezaMayus.test("hola")); // false

// Contiene al menos un dígito
const tieneDigito = /\d/;
console.log("\nContiene dígito /\\d/:");
console.log("  'abc123':", tieneDigito.test("abc123")); // true
console.log("  'abcdef':", tieneDigito.test("abcdef")); // false

// Email muy simple (solo ejemplo básico)
const emailBasico = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+$/;
console.log("\nEmail básico:");
console.log("  'user@mail.com':", emailBasico.test("user@mail.com")); // true
console.log("  'invalido':", emailBasico.test("invalido")); // false

console.log("\n=== RESUMEN ===");
console.log("✅ Dos formas: /patrón/ o new RegExp('patrón')");
console.log("✅ Flags: g (global), i (case-insensitive), m (multilínea)");
console.log("✅ ^ inicio, $ final");
console.log("✅ . cualquier carácter");
console.log("✅ \\d dígito, \\w palabra, \\s espacio");
console.log("✅ [abc] conjunto, [^abc] negación");
console.log("✅ | alternancia (OR)");
console.log("✅ \\ escape para caracteres especiales");
