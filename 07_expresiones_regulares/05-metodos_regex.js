//==============================================================================
// 05 - MÉTODOS DE REGEX
//==============================================================================

console.log("=== MÉTODOS DEL OBJETO REGEXP ===\n");

const texto = "JavaScript es JavaScript y javascript es genial";

//------------------------------------------------------------------------------
// 1️⃣ test() - Devuelve true/false
//------------------------------------------------------------------------------

console.log("1. test() → true/false\n");

const regex1 = /javascript/i;
console.log("Regex:", regex1);
console.log("Texto:", texto);
console.log("¿Coincide?:", regex1.test(texto)); // true

// Uso típico: validaciones
function esEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

console.log("\nValidar email:");
console.log("  'user@mail.com':", esEmail("user@mail.com")); // true
console.log("  'invalido':", esEmail("invalido")); // false

//------------------------------------------------------------------------------
// 2️⃣ exec() - Devuelve array con información detallada
//------------------------------------------------------------------------------

console.log("\n2. exec() → array con detalles\n");

const regex2 = /JavaScript/g;
const resultado1 = regex2.exec(texto);

console.log("Primera ejecución:");
console.log("  Coincidencia:", resultado1[0]);
console.log("  Índice:", resultado1.index);
console.log("  Texto original:", resultado1.input);

// Con flag g, exec() recuerda la posición
const resultado2 = regex2.exec(texto);
console.log("\nSegunda ejecución (con flag g):");
console.log("  Coincidencia:", resultado2[0]);
console.log("  Índice:", resultado2.index);

// Extraer todas las coincidencias con exec()
console.log("\nExtraer todas con exec():");
const regex3 = /\b\w{4,}\b/g; // Palabras de 4+ letras
const palabras = [];
let match;

while ((match = regex3.exec(texto)) !== null) {
  palabras.push(match[0]);
}
console.log("Palabras 4+ letras:", palabras);

// exec() con grupos de captura
console.log("\nexec() con grupos:");
const regexFecha = /(\d{2})\/(\d{2})\/(\d{4})/;
const matchFecha = regexFecha.exec("Hoy es 15/01/2024");

if (matchFecha) {
  console.log("  Match completo:", matchFecha[0]);
  console.log("  Día:", matchFecha[1]);
  console.log("  Mes:", matchFecha[2]);
  console.log("  Año:", matchFecha[3]);
  console.log("  Índice:", matchFecha.index);
}

console.log("\n=== MÉTODOS DEL OBJETO STRING ===\n");

//------------------------------------------------------------------------------
// 3️⃣ match() - Extrae coincidencias
//------------------------------------------------------------------------------

console.log("3. match() → extrae coincidencias\n");

// Sin flag g: similar a exec(), devuelve primera coincidencia + grupos
const match1 = "Precio: $100".match(/\$(\d+)/);
console.log("Sin flag g:");
console.log("  Match:", match1[0]); // "$100"
console.log("  Grupo 1:", match1[1]); // "100"

// Con flag g: devuelve array de todas las coincidencias
const match2 = texto.match(/javascript/gi);
console.log("\nCon flag g:");
console.log("  Coincidencias:", match2); // Array de 3 elementos

// Si no hay coincidencias, devuelve null
const match3 = "abc".match(/\d/);
console.log("\nSin coincidencias:", match3); // null

//------------------------------------------------------------------------------
// 4️⃣ matchAll() - ES2020, todas las coincidencias con detalles
//------------------------------------------------------------------------------

console.log("\n4. matchAll() → iterador con todas las coincidencias\n");

const textoMatch = "El precio es $100 y $200";
const regexPrecio = /\$(\d+)/g;
const matches = [...textoMatch.matchAll(regexPrecio)];

console.log("Usando matchAll():");
matches.forEach((match, i) => {
  console.log(`  Match ${i + 1}:`);
  console.log(`    Completo: ${match[0]}`);
  console.log(`    Número: ${match[1]}`);
  console.log(`    Índice: ${match.index}`);
});

//------------------------------------------------------------------------------
// 5️⃣ search() - Devuelve índice de primera coincidencia
//------------------------------------------------------------------------------

console.log("\n5. search() → índice de primera coincidencia\n");

const textoSearch = "JavaScript es genial";
const indice1 = textoSearch.search(/genial/);
const indice2 = textoSearch.search(/python/);

console.log("Texto:", textoSearch);
console.log("Índice de 'genial':", indice1); // 14
console.log("Índice de 'python':", indice2); // -1 (no encontrado)

// Comparación con indexOf()
console.log("\nComparación con indexOf():");
console.log("  indexOf('genial'):", textoSearch.indexOf("genial"));
console.log("  search(/genial/i):", textoSearch.search(/genial/i));
console.log("  search() acepta regex, indexOf() solo strings");

//------------------------------------------------------------------------------
// 6️⃣ replace() - Reemplazar coincidencias
//------------------------------------------------------------------------------

console.log("\n6. replace() → reemplazar texto\n");

// Reemplazo simple (solo primera coincidencia)
const texto1 = "gato gato gato";
console.log("Original:", texto1);
console.log("replace('gato', 'perro'):", texto1.replace("gato", "perro"));
console.log("replace(/gato/, 'perro'):", texto1.replace(/gato/, "perro"));

// Con flag g: reemplaza todas
console.log("\nCon flag g:");
console.log("replace(/gato/g, 'perro'):", texto1.replace(/gato/g, "perro"));

// Usando grupos de captura con $1, $2, etc.
console.log("\nUsando grupos $1, $2:");
const fecha = "15/01/2024";
const fechaUS = fecha.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3");
console.log("  DD/MM/YYYY:", fecha);
console.log("  MM/DD/YYYY:", fechaUS);

// Función de reemplazo
console.log("\nFunción de reemplazo:");
const textoPrecios = "Precio: $100 y $200";
const conIVA = textoPrecios.replace(/\$(\d+)/g, (match, precio) => {
  return `$${parseInt(precio) * 1.21}`;
});
console.log("  Original:", textoPrecios);
console.log("  Con IVA 21%:", conIVA);

// Capitalizar palabras
console.log("\nCapitalizar palabras:");
const textoMin = "hola mundo desde javascript";
const textoMay = textoMin.replace(/\b\w/g, (letra) => letra.toUpperCase());
console.log("  Original:", textoMin);
console.log("  Capitalizado:", textoMay);

// Censurar palabras
console.log("\nCensurar palabras:");
const textoCensurar = "Esta palabra es mala y esta palabra también";
const textoCensurado = textoCensurar.replace(/palabra/gi, (match) =>
  "*".repeat(match.length)
);
console.log("  Original:", textoCensurar);
console.log("  Censurado:", textoCensurado);

//------------------------------------------------------------------------------
// 7️⃣ replaceAll() - ES2021, reemplazar todas sin flag g
//------------------------------------------------------------------------------

console.log("\n7. replaceAll() → reemplazar todas (ES2021)\n");

const textoReplace = "gato gato gato";
console.log("Original:", textoReplace);
console.log(
  "replaceAll('gato', 'perro'):",
  textoReplace.replaceAll("gato", "perro")
);
console.log(
  "replaceAll(/gato/gi, 'perro'):",
  textoReplace.replaceAll(/gato/gi, "perro")
);

//------------------------------------------------------------------------------
// 8️⃣ split() - Dividir string en array
//------------------------------------------------------------------------------

console.log("\n8. split() → dividir en array\n");

// Split por string literal
const csv = "nombre,edad,ciudad";
console.log("CSV:", csv);
console.log("split(','):", csv.split(","));

// Split por regex
const textoSplit = "uno  dos   tres    cuatro";
console.log("\nTexto con espacios variables:", textoSplit);
console.log("split(/\\s+/):", textoSplit.split(/\s+/));

// Split con límite
console.log("\nCon límite:");
console.log("split(',', 2):", csv.split(",", 2));

// Split complejo
const log = "ERROR: Mensaje de error | WARN: Advertencia | INFO: Info";
const mensajes = log.split(/\s*\|\s*/);
console.log("\nLog:", log);
console.log("Mensajes:", mensajes);

console.log("\n=== COMPARACIÓN DE MÉTODOS ===\n");

const comparacion = {
  "test()": {
    Objeto: "RegExp",
    Retorna: "boolean",
    Uso: "Validar si coincide",
  },
  "exec()": {
    Objeto: "RegExp",
    Retorna: "Array o null",
    Uso: "Info detallada, iteración",
  },
  "match()": {
    Objeto: "String",
    Retorna: "Array o null",
    Uso: "Extraer coincidencias",
  },
  "matchAll()": {
    Objeto: "String",
    Retorna: "Iterador",
    Uso: "Todas con detalles",
  },
  "search()": {
    Objeto: "String",
    Retorna: "Number",
    Uso: "Encontrar índice",
  },
  "replace()": {
    Objeto: "String",
    Retorna: "String",
    Uso: "Reemplazar texto",
  },
  "split()": {
    Objeto: "String",
    Retorna: "Array",
    Uso: "Dividir texto",
  },
};

console.table(comparacion);

console.log("\n=== EJEMPLOS PRÁCTICOS ===\n");

// 1. Validar y extraer
function validarYExtraerTelefono(texto) {
  const regex = /\b(\d{3})-(\d{3})-(\d{4})\b/;

  if (regex.test(texto)) {
    const match = texto.match(regex);
    return {
      valido: true,
      completo: match[0],
      area: match[1],
      prefijo: match[2],
      numero: match[3],
    };
  }

  return { valido: false };
}

console.log("Validar y extraer teléfono:");
console.log(validarYExtraerTelefono("Llamar al 123-456-7890"));
console.log(validarYExtraerTelefono("Número inválido"));

// 2. Limpiar espacios
function limpiarEspacios(texto) {
  return texto
    .replace(/^\s+/, "") // Inicio
    .replace(/\s+$/, "") // Final
    .replace(/\s+/g, " "); // Múltiples espacios
}

console.log("\nLimpiar espacios:");
const textoSucio = "  hola   mundo  ";
console.log("Original: '" + textoSucio + "'");
console.log("Limpio: '" + limpiarEspacios(textoSucio) + "'");

// 3. Extraer hashtags
function extraerHashtags(texto) {
  const regex = /#\w+/g;
  return texto.match(regex) || [];
}

console.log("\nExtraer hashtags:");
const tweet = "Me encanta #JavaScript y #RegEx #Coding";
console.log("Tweet:", tweet);
console.log("Hashtags:", extraerHashtags(tweet));

// 4. Formatear números
function formatearNumero(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

console.log("\nFormatear números:");
console.log("1234567 →", formatearNumero(1234567));
console.log("1000000 →", formatearNumero(1000000));

// 5. Validar y sanear HTML
function sanearHTML(texto) {
  return texto
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

console.log("\nSanear HTML:");
const htmlPeligroso = '<script>alert("XSS")</script>';
console.log("Original:", htmlPeligroso);
console.log("Saneado:", sanearHTML(htmlPeligroso));

console.log("\n=== RESUMEN ===");
console.log("✅ test() → validar (true/false)");
console.log("✅ exec() → info detallada");
console.log("✅ match() → extraer coincidencias");
console.log("✅ search() → encontrar índice");
console.log("✅ replace() → reemplazar");
console.log("✅ split() → dividir en array");
console.log("✅ matchAll() → iterador completo");
