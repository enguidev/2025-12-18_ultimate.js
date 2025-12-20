// 🔧 Métodos adicionales de String que no están en otros archivos

console.log("=== 1. REPEAT() ===\n");

// repeat(count) - Repite el string 'count' veces
const estrella = "⭐";
console.log(estrella.repeat(5)); // "⭐⭐⭐⭐⭐"

const guion = "-";
console.log(guion.repeat(30)); // "------------------------------"

// Caso práctico: crear separadores visuales
function crearSeparador(char = "=", longitud = 50, titulo = "") {
  if (titulo) {
    const espacios = longitud - titulo.length - 4;
    const mitad = Math.floor(espacios / 2);
    return `${char.repeat(mitad)} ${titulo} ${char.repeat(espacios - mitad)}`;
  }
  return char.repeat(longitud);
}

console.log(crearSeparador());
console.log(crearSeparador("=", 50, "TÍTULO"));
console.log(crearSeparador("-", 40));

// Crear patrones
function crearPatron(patron, veces) {
  return patron.repeat(veces);
}
console.log(crearPatron("🔥 ", 5)); // "🔥 🔥 🔥 🔥 🔥 "
console.log(crearPatron("01", 8)); // "0101010101010101"

console.log("\n=== 2. CHARAT() ===\n");

// charAt(index) - Obtiene el carácter en la posición indicada
const texto = "JavaScript";

console.log("charAt(0):", texto.charAt(0)); // "J"
console.log("charAt(4):", texto.charAt(4)); // "S"
console.log("charAt(100):", texto.charAt(100)); // "" (string vacío)

// Diferencias entre charAt(), [], y at()
console.log("\nComparación de acceso:");
console.log("texto[100]:", texto[100]); // undefined
console.log("texto.charAt(100):", texto.charAt(100)); // ""
console.log("texto.at(100):", texto.at(100)); // undefined

// charAt no acepta índices negativos
console.log("texto.charAt(-1):", texto.charAt(-1)); // "" (no funciona)
console.log("texto.at(-1):", texto.at(-1)); // "t" (sí funciona)

// Caso práctico: obtener primera letra de cada palabra
function obtenerIniciales(nombreCompleto) {
  return nombreCompleto
    .split(" ")
    .map((palabra) => palabra.charAt(0).toUpperCase())
    .join("");
}
console.log(
  "obtenerIniciales('juan carlos garcía'):",
  obtenerIniciales("juan carlos garcía")
); // "JCG"

console.log("\n=== 3. CHARCODEAT() Y FROMCHARCODE() ===\n");

// charCodeAt(index) - Devuelve el código Unicode del carácter
const letra = "A";
console.log('"A".charCodeAt(0):', letra.charCodeAt(0)); // 65

const minuscula = "a";
console.log('"a".charCodeAt(0):', minuscula.charCodeAt(0)); // 97

const acento = "é";
console.log('"é".charCodeAt(0):', acento.charCodeAt(0)); // 233

// String.fromCharCode() - Crea un string desde códigos Unicode
console.log("String.fromCharCode(65):", String.fromCharCode(65)); // "A"
console.log(
  "String.fromCharCode(72, 111, 108, 97):",
  String.fromCharCode(72, 111, 108, 97)
); // "Hola"

// Caso práctico: Cifrado César (ROT13)
function cifradoCesar(texto, desplazamiento = 3) {
  return texto
    .split("")
    .map((char) => {
      const codigo = char.charCodeAt(0);
      // Solo cifrar letras mayúsculas (A-Z: 65-90)
      if (codigo >= 65 && codigo <= 90) {
        return String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
      }
      // Solo cifrar letras minúsculas (a-z: 97-122)
      if (codigo >= 97 && codigo <= 122) {
        return String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
      }
      return char; // No cifrar otros caracteres
    })
    .join("");
}

console.log('cifradoCesar("HOLA", 3):', cifradoCesar("HOLA", 3)); // "KROD"
console.log('cifradoCesar("KROD", -3):', cifradoCesar("KROD", -3)); // "HOLA"

// Caso práctico: Generar rango de letras
function rangoLetras(inicio, fin) {
  const codigoInicio = inicio.charCodeAt(0);
  const codigoFin = fin.charCodeAt(0);
  const letras = [];

  for (let i = codigoInicio; i <= codigoFin; i++) {
    letras.push(String.fromCharCode(i));
  }

  return letras;
}

console.log("rangoLetras('A', 'E'):", rangoLetras("A", "E"));
// ["A", "B", "C", "D", "E"]

console.log("\n=== 4. CODEPOINTAT() Y FROMCODEPOINT() ===\n");

// Para caracteres fuera del BMP (Basic Multilingual Plane)
// Como emojis, necesitas codePointAt en lugar de charCodeAt

const emoji = "😀";
console.log('"😀".charCodeAt(0):', emoji.charCodeAt(0)); // 55357 (incorrecto)
console.log('"😀".codePointAt(0):', emoji.codePointAt(0)); // 128512 (correcto)

// String.fromCodePoint() - Para crear caracteres desde código completo
console.log("String.fromCodePoint(128512):", String.fromCodePoint(128512)); // "😀"
console.log("String.fromCodePoint(127775):", String.fromCodePoint(127775)); // "🌟"

// Caso práctico: Generar emojis aleatorios
function emojiAleatorio() {
  // Rango de emojis comunes: 128512 - 128580
  const codigo = Math.floor(Math.random() * (128580 - 128512 + 1)) + 128512;
  return String.fromCodePoint(codigo);
}

console.log("Emoji aleatorio:", emojiAleatorio());
console.log(
  "5 emojis aleatorios:",
  Array.from({ length: 5 }, () => emojiAleatorio()).join(" ")
);

console.log("\n=== 5. CONCAT() ===\n");

// concat() - Concatena strings (casi nunca se usa)
const str1 = "Hola";
const str2 = " ";
const str3 = "Mundo";

console.log("concat():", str1.concat(str2, str3)); // "Hola Mundo"
console.log("concat múltiple:", "A".concat("B", "C", "D")); // "ABCD"

// Comparación con otros métodos
console.log("\nFormas de concatenar:");
console.log("1. Operador +:", str1 + str2 + str3);
console.log("2. Template literals:", `${str1}${str2}${str3}`);
console.log("3. concat():", str1.concat(str2, str3));
console.log("4. join():", [str1, str2, str3].join(""));

// 💡 Recomendación: Usa template literals (opción 2) para mayor legibilidad

console.log("\n=== 6. TOSTRING() Y VALUEOF() ===\n");

// Estos métodos son más útiles con objetos String (no primitivos)

const primitivo = "texto";
const objeto = new String("texto");

console.log("typeof primitivo:", typeof primitivo); // "string"
console.log("typeof objeto:", typeof objeto); // "object"

// toString() y valueOf() hacen lo mismo con strings
console.log("objeto.toString():", objeto.toString()); // "texto"
console.log("objeto.valueOf():", objeto.valueOf()); // "texto"

// Comparación
console.log("primitivo === objeto:", primitivo === objeto); // false (tipo diferente)
console.log("primitivo == objeto:", primitivo == objeto); // true (coerción)
console.log("primitivo === objeto.valueOf():", primitivo === objeto.valueOf()); // true

// Caso donde SÍ son útiles: convertir cualquier valor a string
console.log("\nConvertir a string:");
console.log("(123).toString():", (123).toString()); // "123"
console.log("true.toString():", true.toString()); // "true"
console.log("[1,2,3].toString():", [1, 2, 3].toString()); // "1,2,3"

// toString() con bases numéricas
const numero = 255;
console.log("255 en binario:", numero.toString(2)); // "11111111"
console.log("255 en octal:", numero.toString(8)); // "377"
console.log("255 en hexadecimal:", numero.toString(16)); // "ff"

console.log("\n=== 7. LOCALCOMPARE() AVANZADO ===\n");

// localeCompare() con opciones avanzadas

const palabras = ["año", "árbol", "casa", "ñandu"];
palabras.sort((a, b) => a.localeCompare(b, "es"));
console.log("Ordenado con localeCompare:", palabras);
// ["año", "árbol", "casa", "ñandu"]

// Ignorar acentos
const conAcentos = ["café", "cafe", "árbol", "arbol"];
conAcentos.sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" }));
console.log("Ignorando acentos:", conAcentos);

// Ordenación numérica en strings
const archivos = ["archivo10", "archivo2", "archivo1", "archivo20"];
archivos.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
console.log("Ordenación numérica:", archivos);
// ["archivo1", "archivo2", "archivo10", "archivo20"]

// Case insensitive
const nombres = ["Ana", "maría", "Carlos", "josé"];
nombres.sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" }));
console.log("Case insensitive:", nombres);

console.log("\n=== 8. STRING.RAW() ===\n");

// String.raw() - Obtiene string sin procesar escapes
const rutaConEscape = "C:\\Users\\Documents\\file.txt";
const rutaRaw = String.raw`C:\Users\Documents\file.txt`;

console.log("Con escape:", rutaConEscape);
console.log("String.raw:", rutaRaw);

// Útil para expresiones regulares
const regexString = String.raw`\d+\.\d+`;
console.log("RegEx string:", regexString); // "\d+\.\d+"

// También funciona con variables en template literals
const carpeta = "Documents";
const archivo = "file.txt";
const ruta = String.raw`C:\Users\${carpeta}\${archivo}`;
console.log("Ruta con variables:", ruta);

console.log("\n=== 9. ANCHOR(), LINK(), BIG(), etc. (OBSOLETOS) ===\n");

// ⚠️ Estos métodos HTML están obsoletos, NO los uses en código nuevo

const textoHTML = "Hola";

// Generan HTML (pero están deprecated)
console.log("anchor():", textoHTML.anchor("seccion1")); // <a name="seccion1">Hola</a>
console.log("link():", textoHTML.link("https://ejemplo.com")); // <a href="...">Hola</a>
console.log("bold():", textoHTML.bold()); // <b>Hola</b>
console.log("italics():", textoHTML.italics()); // <i>Hola</i>

// 💡 En lugar de esto, usa template literals para generar HTML:
const nombre = "Juan";
const url = "https://ejemplo.com";
const htmlModerno = `<a href="${url}">${nombre}</a>`;
console.log("HTML moderno:", htmlModerno);

console.log("\n=== 10. MÉTODOS ÚTILES COMBINADOS ===\n");

// Capitalizar primera letra
function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log('capitalizar("jAVAsCRIPT"):', capitalizar("jAVAsCRIPT")); // "Javascript"

// Truncar texto con elipsis
function truncar(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
}
console.log(
  'truncar("Este es un texto largo", 15):',
  truncar("Este es un texto largo", 15)
); // "Este es un t..."

// Centrar texto
function centrar(str, ancho, relleno = " ") {
  if (str.length >= ancho) return str;
  const espaciosTotal = ancho - str.length;
  const izq = Math.floor(espaciosTotal / 2);
  const der = espaciosTotal - izq;
  return relleno.repeat(izq) + str + relleno.repeat(der);
}
console.log("|" + centrar("TÍTULO", 20) + "|");

// Contar palabras
function contarPalabras(str) {
  return str.trim().split(/\s+/).length;
}
console.log(
  'contarPalabras("Hola mundo JavaScript"):',
  contarPalabras("Hola mundo JavaScript")
); // 3

// Extraer dominio de email
function extraerDominio(email) {
  return email.slice(email.indexOf("@") + 1);
}
console.log(
  'extraerDominio("user@ejemplo.com"):',
  extraerDominio("user@ejemplo.com")
); // "ejemplo.com"
