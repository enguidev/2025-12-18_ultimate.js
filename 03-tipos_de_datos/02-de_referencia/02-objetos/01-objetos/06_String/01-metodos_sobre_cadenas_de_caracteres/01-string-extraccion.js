// ✂️ Métodos para extraer partes de una cadena

const texto = "JavaScript";
console.log("\nTexto original:", texto, "\n");

//******** slice(start, end) ********//

// Extrae desde 'start' hasta 'end' (sin incluirlo). Permite índices negativos.
console.log("=== slice(start, end) ===\n");

console.log("slice(4, 10):", texto.slice(4, 10)); // "Script"
console.log("slice(4):", texto.slice(4)); // "Script" (desde índice 4 hasta el final)
console.log("slice(-6):", texto.slice(-6)); // "Script" (últimos 6 caracteres)
console.log("slice(0, 4):", texto.slice(0, 4)); // "Java"

// Índices negativos cuentan desde el final
console.log("slice(-10, -6):", texto.slice(-10, -6)); // "Java"
console.log("slice(2, -2):", texto.slice(2, -2)); // "vaScri" (desde índice 2 hasta 2 antes del final)

// Si start > end con slice, devuelve cadena vacía
console.log("slice(6, 2):", texto.slice(6, 2)); // ""

// slice no modifica el string original
console.log("Texto original sigue igual:", texto); // "JavaScript"

//******** substring(start, end) ********//

// Similar a slice, pero NO acepta negativos. Intercambia los valores si start > end.
console.log("\n=== substring(start, end) ===\n");

console.log("substring(4, 10):", texto.substring(4, 10)); // "Script"
console.log("substring(4):", texto.substring(4)); // "Script"

// DIFERENCIA CLAVE: intercambia automáticamente si start > end
console.log("substring(10, 4):", texto.substring(10, 4)); // "Script" (invierte los índices)
console.log("slice(10, 4):", texto.slice(10, 4)); // "" (no invierte, devuelve vacío)

// NO acepta índices negativos (los trata como 0)
console.log("substring(-6):", texto.substring(-6)); // "JavaScript" (trata -6 como 0)
console.log("substring(-6, 4):", texto.substring(-6, 4)); // "Java" (trata -6 como 0)

// Si ambos negativos
console.log("substring(-10, -6):", texto.substring(-10, -6)); // "" (ambos se vuelven 0)

//******** substr(start, length) ⚠️ OBSOLETO ********//

// ⚠️ Obsoleto. Extrae desde 'start' con longitud 'length'.
console.log("\n=== substr(start, length) - ⚠️ OBSOLETO ===\n");

console.log("substr(4, 6):", texto.substr(4, 6)); // "Script"
console.log("substr(0, 4):", texto.substr(0, 4)); // "Java"
console.log("substr(4):", texto.substr(4)); // "Script" (sin segundo parámetro = hasta el final)

// Acepta start negativo (cuenta desde el final)
console.log("substr(-6, 6):", texto.substr(-6, 6)); // "Script"
console.log("substr(-10, 4):", texto.substr(-10, 4)); // "Java"

// 🔎 Advertencia: Evita substr() en nuevos proyectos. Usa slice() para mayor compatibilidad.

//******** Comparación de los tres métodos ********//

console.log("\n=== COMPARACIÓN ===\n");

const ejemplo = "0123456789";
console.log("String de ejemplo:", ejemplo);

console.log("\nExtrayendo del índice 2 al 5:");
console.log("slice(2, 5):", ejemplo.slice(2, 5)); // "234"
console.log("substring(2, 5):", ejemplo.substring(2, 5)); // "234"
console.log("substr(2, 3):", ejemplo.substr(2, 3)); // "234" (length=3)

console.log("\nCon índices invertidos:");
console.log("slice(5, 2):", ejemplo.slice(5, 2)); // ""
console.log("substring(5, 2):", ejemplo.substring(5, 2)); // "234" (invierte)

console.log("\nCon índices negativos:");
console.log("slice(-5, -2):", ejemplo.slice(-5, -2)); // "567"
console.log("substring(-5, -2):", ejemplo.substring(-5, -2)); // "" (trata negativos como 0)
console.log("substr(-5, 3):", ejemplo.substr(-5, 3)); // "567"

//******** Tabla comparativa ********//

console.log("\n=== TABLA COMPARATIVA ===\n");
console.log(`
Método         | Acepta negativos | Invierte si start>end | Segundo parámetro
---------------|------------------|----------------------|------------------
slice()        | ✅ Sí            | ❌ No                | end (índice)
substring()    | ❌ No (trata=0)  | ✅ Sí                | end (índice)
substr() ⚠️    | ✅ Sí (start)    | ❌ No                | length (longitud)
`);

//******** Casos prácticos ********//

console.log("=== CASOS PRÁCTICOS ===\n");

// 1. Obtener extensión de archivo
function obtenerExtension(nombreArchivo) {
  const puntoIndex = nombreArchivo.lastIndexOf(".");
  return puntoIndex !== -1 ? nombreArchivo.slice(puntoIndex + 1) : "";
}
console.log(
  'obtenerExtension("documento.pdf"):',
  obtenerExtension("documento.pdf")
); // "pdf"
console.log(
  'obtenerExtension("imagen.backup.jpg"):',
  obtenerExtension("imagen.backup.jpg")
); // "jpg"

// 2. Obtener nombre sin extensión
function obtenerNombreSinExtension(nombreArchivo) {
  const puntoIndex = nombreArchivo.lastIndexOf(".");
  return puntoIndex !== -1 ? nombreArchivo.slice(0, puntoIndex) : nombreArchivo;
}
console.log(
  'obtenerNombreSinExtension("documento.pdf"):',
  obtenerNombreSinExtension("documento.pdf")
); // "documento"

// 3. Extraer primeras N palabras
function primerasPalabras(texto, n) {
  const palabras = texto.split(" ");
  return palabras.slice(0, n).join(" ");
}
console.log(
  'primerasPalabras("Hola mundo desde JavaScript", 2):',
  primerasPalabras("Hola mundo desde JavaScript", 2)
); // "Hola mundo"

// 4. Extraer iniciales de nombre completo
function obtenerIniciales(nombreCompleto) {
  return nombreCompleto
    .split(" ")
    .map((palabra) => palabra.slice(0, 1).toUpperCase())
    .join("");
}
console.log(
  'obtenerIniciales("Juan Carlos García López"):',
  obtenerIniciales("Juan Carlos García López")
); // "JCGL"

// 5. Recortar texto con elipsis
function recortar(texto, maxLength) {
  if (texto.length <= maxLength) return texto;
  return texto.slice(0, maxLength - 3) + "...";
}
console.log(
  'recortar("Este es un texto muy largo", 15):',
  recortar("Este es un texto muy largo", 15)
); // "Este es un t..."

// 6. Extraer dominio de URL
function extraerDominio(url) {
  // Eliminar protocolo
  let dominio = url.replace(/^https?:\/\//, "");
  // Eliminar todo después del primer /
  const slashIndex = dominio.indexOf("/");
  if (slashIndex !== -1) {
    dominio = dominio.slice(0, slashIndex);
  }
  return dominio;
}
console.log(
  'extraerDominio("https://www.ejemplo.com/pagina"):',
  extraerDominio("https://www.ejemplo.com/pagina")
); // "www.ejemplo.com"

// 7. Obtener últimos N caracteres
function ultimosCaracteres(texto, n) {
  return texto.slice(-n);
}
console.log(
  'ultimosCaracteres("JavaScript", 6):',
  ultimosCaracteres("JavaScript", 6)
); // "Script"

// 8. Extraer substring entre dos delimitadores
function extraerEntre(texto, inicio, fin) {
  const startIndex = texto.indexOf(inicio);
  if (startIndex === -1) return "";

  const endIndex = texto.indexOf(fin, startIndex + inicio.length);
  if (endIndex === -1) return "";

  return texto.slice(startIndex + inicio.length, endIndex);
}
console.log(
  'extraerEntre("Hola [mundo] adiós", "[", "]"):',
  extraerEntre("Hola [mundo] adiós", "[", "]")
); // "mundo"

// 9. Enmascarar número de tarjeta (mostrar solo últimos 4)
function enmascararTarjeta(numero) {
  if (numero.length <= 4) return numero;
  return "*".repeat(numero.length - 4) + numero.slice(-4);
}
console.log(
  'enmascararTarjeta("1234567890123456"):',
  enmascararTarjeta("1234567890123456")
); // "************3456"

// 10. Extraer username de email
function extraerUsername(email) {
  const atIndex = email.indexOf("@");
  return atIndex !== -1 ? email.slice(0, atIndex) : email;
}
console.log(
  'extraerUsername("usuario@ejemplo.com"):',
  extraerUsername("usuario@ejemplo.com")
); // "usuario"

//******** Diferencias sutiles importantes ********//

console.log("\n=== DIFERENCIAS SUTILES ===\n");

// slice() es más flexible y predecible
const str = "0123456789";

// Caso 1: Índices fuera de rango
console.log("slice(5, 100):", str.slice(5, 100)); // "56789" (se ajusta automáticamente)
console.log("substring(5, 100):", str.substring(5, 100)); // "56789" (se ajusta automáticamente)

// Caso 2: Start mayor que length
console.log("slice(20):", str.slice(20)); // ""
console.log("substring(20):", str.substring(20)); // ""

// Caso 3: Negativos que resultan en índice antes de 0
console.log("slice(-100, 3):", str.slice(-100, 3)); // "012" (ajusta -100 a 0)
console.log("substring(-100, 3):", str.substring(-100, 3)); // "012" (trata -100 como 0)

// Caso 4: Solo negativos
console.log("slice(-3, -1):", str.slice(-3, -1)); // "78"
console.log("substring(-3, -1):", str.substring(-3, -1)); // "" (ambos son 0)

//******** Recomendaciones finales ********//

console.log("\n=== RECOMENDACIONES ===\n");
console.log(`
✅ Usa slice() por defecto:
   - Más flexible (acepta negativos)
   - Comportamiento predecible
   - Más moderno

⚠️ Usa substring() solo si:
   - Necesitas invertir automáticamente start/end
   - Estás manteniendo código legacy

❌ Evita substr():
   - Está obsoleto (deprecated)
   - Puede ser eliminado en futuras versiones
   - Usa slice() en su lugar
`);

//******** Performance ********//

console.log("=== NOTA DE PERFORMANCE ===\n");
console.log(`
En JavaScript moderno, slice() y substring() tienen 
performance similar. La diferencia es negligible para 
la mayoría de casos de uso.

slice() es generalmente preferido por:
1. Sintaxis más clara con negativos
2. Comportamiento más intuitivo
3. Es el estándar en otros lenguajes (Python, Ruby)
`);
