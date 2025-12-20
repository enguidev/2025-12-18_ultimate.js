//==============================================================================
// EXPRESIONES REGULARES (REGEX) - RESUMEN Y GUÍA COMPLETA
//==============================================================================

/*
🔍 ¿QUÉ SON LAS EXPRESIONES REGULARES?

Son PATRONES que describen cómo debe ser una cadena de texto.
Permiten BUSCAR, VALIDAR y MANIPULAR texto de forma muy potente.

Ejemplo: "Que la cadena empiece por 'a' y tenga números"
         Regex: /^a.*\d/
*/

//------------------------------------------------------------------------------
// 📚 CONTENIDO DE ESTA CARPETA
//------------------------------------------------------------------------------

/*
📄 00-resumen_regex.js (ESTE ARCHIVO)
   - Índice y guía rápida
   - Cheat sheet completo
   - Tabla de referencia

📄 01-sintaxis_basica.js
   - Cómo crear regex
   - Caracteres especiales
   - Clases de caracteres

📄 02-cuantificadores.js
   - *, +, ?, {n}, {n,m}
   - Greedy vs Non-greedy
   - Ejemplos prácticos

📄 03_expresiones_regulares.js
   - Archivo principal del profe
   - Ejemplos avanzados

📄 04-grupos_capturas.js
   - Grupos ()
   - Referencias \1, \2
   - Lookahead y Lookbehind

📄 05-metodos_regex.js
   - test(), exec()
   - match(), replace()
   - search(), split()

📄 06-validaciones_comunes.js
   - Email, teléfono, URL
   - Tarjetas, DNI/NIE
   - Fechas, códigos postales

📄 07-ejercicios_regex.js
   - 20 ejercicios prácticos
   - Validaciones reales
   - Soluciones comentadas

📄 08-regex_avanzado.js
   - Lookahead/Lookbehind
   - Flags avanzados
   - Performance tips
*/

//------------------------------------------------------------------------------
// 🗺️ MAPA MENTAL DE REGEX
//------------------------------------------------------------------------------

/*
REGEX
├── Creación
│   ├── /patrón/flags
│   └── new RegExp('patrón', 'flags')
│
├── Caracteres Especiales
│   ├── . (cualquier carácter)
│   ├── ^ (inicio)
│   ├── $ (final)
│   ├── \ (escape)
│   └── | (alternativa)
│
├── Clases de Caracteres
│   ├── \d (dígito)
│   ├── \w (palabra)
│   ├── \s (espacio)
│   ├── \D, \W, \S (negados)
│   └── [abc] (conjunto)
│
├── Cuantificadores
│   ├── * (0 o más)
│   ├── + (1 o más)
│   ├── ? (0 o 1)
│   ├── {n} (exactamente n)
│   └── {n,m} (entre n y m)
│
├── Anclas y Límites
│   ├── ^ (inicio de cadena)
│   ├── $ (final de cadena)
│   ├── \b (límite de palabra)
│   └── \B (no límite)
│
├── Grupos
│   ├── (abc) (grupo captura)
│   ├── (?:abc) (no captura)
│   ├── \1, \2 (referencias)
│   └── (?=abc) (lookahead)
│
└── Flags (modificadores)
    ├── g (global)
    ├── i (case-insensitive)
    ├── m (multilínea)
    └── s (dotall)
*/

//------------------------------------------------------------------------------
// 📊 TABLA RESUMEN - CARACTERES ESPECIALES
//------------------------------------------------------------------------------

console.log("📊 CARACTERES ESPECIALES:\n");

const CARACTERES = {
  ".": "Cualquier carácter (excepto \\n)",
  "^": "Inicio de cadena",
  $: "Final de cadena",
  "*": "0 o más veces",
  "+": "1 o más veces",
  "?": "0 o 1 vez",
  "\\d": "Dígito [0-9]",
  "\\D": "No dígito [^0-9]",
  "\\w": "Letra/número/_ [a-zA-Z0-9_]",
  "\\W": "No palabra [^a-zA-Z0-9_]",
  "\\s": "Espacio en blanco",
  "\\S": "No espacio",
  "\\b": "Límite de palabra",
  "\\B": "No límite de palabra",
  "[abc]": "a, b o c",
  "[^abc]": "No a, b ni c",
  "[a-z]": "De a a z",
  "(abc)": "Grupo de captura",
  "(?:abc)": "Grupo sin captura",
  "a|b": "a o b",
  "\\": "Escape de carácter especial",
};

console.table(CARACTERES);

//------------------------------------------------------------------------------
// 📋 CHEAT SHEET RÁPIDA
//------------------------------------------------------------------------------

console.log("\n📋 CHEAT SHEET:\n");

console.log("🆕 CREAR REGEX:");
console.log("  /patrón/flags           → Literal");
console.log("  new RegExp('patrón')    → Constructor");

console.log("\n🔤 CARACTERES:");
console.log("  \\d → Dígito             [0-9]");
console.log("  \\w → Palabra            [a-zA-Z0-9_]");
console.log("  \\s → Espacio            [ \\t\\n]");
console.log("  .  → Cualquier carácter (excepto \\n)");

console.log("\n🔢 CUANTIFICADORES:");
console.log("  *   → 0 o más            {0,}");
console.log("  +   → 1 o más            {1,}");
console.log("  ?   → 0 o 1              {0,1}");
console.log("  {3} → Exactamente 3");
console.log("  {2,5} → Entre 2 y 5");

console.log("\n⚓ ANCLAS:");
console.log("  ^  → Inicio de cadena");
console.log("  $  → Final de cadena");
console.log("  \\b → Límite de palabra");

console.log("\n📦 GRUPOS:");
console.log("  (abc)   → Captura");
console.log("  (?:abc) → No captura");
console.log("  \\1, \\2  → Referencia");

console.log("\n🏳️ FLAGS:");
console.log("  g → Global (todas las coincidencias)");
console.log("  i → Case-insensitive (ignora mayús/minús)");
console.log("  m → Multilínea");

//------------------------------------------------------------------------------
// 💡 EJEMPLOS RÁPIDOS
//------------------------------------------------------------------------------

console.log("\n💡 EJEMPLOS RÁPIDOS:\n");

// Email simple
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log("Email válido:", emailRegex.test("usuario@ejemplo.com"));

// Teléfono español
const telRegex = /^[6-9]\d{8}$/;
console.log("Teléfono válido:", telRegex.test("612345678"));

// Matrícula española
const matriculaRegex = /^\d{4}-?[A-Z]{3}$/;
console.log("Matrícula válida:", matriculaRegex.test("1234ABC"));

// Código postal
const cpRegex = /^\d{5}$/;
console.log("CP válido:", cpRegex.test("08001"));

// DNI/NIE
const dniRegex = /^[0-9]{8}[A-Z]$/;
console.log("DNI válido:", dniRegex.test("12345678A"));

//------------------------------------------------------------------------------
// 🎯 PATRONES MÁS COMUNES
//------------------------------------------------------------------------------

console.log("\n🎯 PATRONES COMUNES:\n");

const PATRONES = {
  Email: "/^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/i",
  "Teléfono ES": "/^[6-9]\\d{8}$/",
  URL: "/^https?:\\/\\/[\\w.-]+\\.[a-z]{2,}.*$/i",
  "Fecha (DD/MM/YYYY)": "/^\\d{2}\\/\\d{2}\\/\\d{4}$/",
  "Hora (HH:MM)": "/^([01]\\d|2[0-3]):[0-5]\\d$/",
  DNI: "/^\\d{8}[A-Z]$/",
  "Código Postal": "/^\\d{5}$/",
  "Tarjeta crédito": "/^\\d{16}$/",
  "Color Hex": "/^#[0-9A-F]{6}$/i",
  IPv4: "/^(\\d{1,3}\\.){3}\\d{1,3}$/",
  Username: "/^[a-zA-Z0-9_-]{3,16}$/",
  "Contraseña fuerte": "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/",
};

Object.entries(PATRONES).forEach(([nombre, patron]) => {
  console.log(`${nombre}:\n  ${patron}\n`);
});

//------------------------------------------------------------------------------
// ⚠️ ERRORES COMUNES
//------------------------------------------------------------------------------

console.log("\n⚠️ ERRORES COMUNES:\n");

// ❌ ERROR 1: Olvidar escapar caracteres especiales
const mal1 = /3.14/; // Coincide con "3X14", "3-14", etc.
const bien1 = /3\.14/; // Solo coincide con "3.14"
console.log("❌ Sin escape:", mal1.test("3X14")); // true
console.log("✅ Con escape:", bien1.test("3X14")); // false

// ❌ ERROR 2: No usar ^ y $ para validación exacta
const mal2 = /\d{3}/; // Coincide con "abc123def"
const bien2 = /^\d{3}$/; // Solo "123"
console.log("❌ Sin anclas:", mal2.test("abc123def")); // true
console.log("✅ Con anclas:", bien2.test("abc123def")); // false

// ❌ ERROR 3: Confundir [] con ()
const mal3 = /[abc]+/; // Cualquiera de a, b, c repetido
const bien3 = /(abc)+/; // "abc" repetido
console.log("❌ [abc]+:", mal3.test("aaa")); // true
console.log("✅ (abc)+:", bien3.test("aaa")); // false

//------------------------------------------------------------------------------
// 🔧 MÉTODOS PRINCIPALES
//------------------------------------------------------------------------------

console.log("\n🔧 MÉTODOS:\n");

const texto = "JavaScript 2024";

console.log("MÉTODOS DE REGEX:");
console.log("  test():", /Java/.test(texto)); // true/false
console.log("  exec():", /(\d+)/.exec(texto)); // Array con info

console.log("\nMÉTODOS DE STRING:");
console.log("  match():", texto.match(/\d+/g)); // ["2024"]
console.log("  search():", texto.search(/\d/)); // 11
console.log("  replace():", texto.replace(/2024/, "2025"));
console.log("  split():", "a,b,c".split(/,/)); // ["a","b","c"]

//------------------------------------------------------------------------------
// 📖 ORDEN DE ESTUDIO
//------------------------------------------------------------------------------

console.log("\n📖 ORDEN DE ESTUDIO:\n");

console.log("1. Básico:");
console.log("   00-resumen_regex.js (este archivo)");
console.log("   01-sintaxis_basica.js");
console.log("   02-cuantificadores.js");

console.log("\n2. Intermedio:");
console.log("   03_expresiones_regulares.js (del profe)");
console.log("   04-grupos_capturas.js");
console.log("   05-metodos_regex.js");

console.log("\n3. Práctico:");
console.log("   06-validaciones_comunes.js");
console.log("   07-ejercicios_regex.js");
console.log("   08-regex_avanzado.js");

//------------------------------------------------------------------------------
// 🌐 RECURSOS ÚTILES
//------------------------------------------------------------------------------

console.log("\n🌐 RECURSOS:\n");

console.log("📖 Documentación:");
console.log(
  "  MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions"
);
console.log("  RegexOne: https://regexone.com/ (Tutorial interactivo)");

console.log("\n🧪 Testeadores online:");
console.log("  RegExr: https://regexr.com/");
console.log("  Regex101: https://regex101.com/");
console.log("  RegexPal: https://www.regexpal.com/");

console.log("\n📚 Cheat sheets:");
console.log("  https://www.rexegg.com/regex-quickstart.html");
console.log(
  "  https://cheatography.com/davechild/cheat-sheets/regular-expressions/"
);

//------------------------------------------------------------------------------
// ✅ RESUMEN EJECUTIVO
//------------------------------------------------------------------------------

console.log("\n✅ RESUMEN EJECUTIVO:\n");
console.log("Las Regex son PATRONES para trabajar con texto.");
console.log("\nConceptos clave:");
console.log("  • Usar / / para crear regex literales");
console.log("  • ^ y $ para inicio y fin exactos");
console.log("  • \\ para escapar caracteres especiales");
console.log("  • test() para validar, match() para extraer");
console.log("  • Flags: g (global), i (case-insensitive)");
console.log("\n🎯 Siguiente paso: Abre 01-sintaxis_basica.js");

console.log("\n✅ Archivo 00-resumen_regex.js cargado");
