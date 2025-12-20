// .length - devuelve el número de caracteres
const saludo = "Hola Carlos";
console.log(saludo.length); // 11

// Acceso por índice
console.log(saludo[0]); // "H"
console.log(saludo.at(-1)); // "s" (último carácter)

// Advertencia: .length cuenta todos los caracteres, incluidos espacios y símbolos
const ejemplo = " café ";
console.log(ejemplo.length); // 6

// Comparación con array
const letras = ["c", "a", "f", "é"];
console.log(letras.length); // 4

//******** Casos especiales con .length ********//

// 1. String vacío
const vacio = "";
console.log(vacio.length); // 0

// 2. Solo espacios (NO es vacío)
const espacios = "   ";
console.log(espacios.length); // 3
console.log(espacios.trim().length); // 0 (ahora sí está vacío)

// 3. Emojis y caracteres Unicode especiales
const emoji = "👋";
console.log(emoji.length); // 2 (¡sorpresa! ocupa 2 unidades)

const emojiCompuesto = "👨‍👩‍👧‍👦"; // familia
console.log(emojiCompuesto.length); // 11 (son varios caracteres combinados)

// Para contar emojis correctamente:
const texto = "Hola 👋 mundo 🌍";
console.log(texto.length); // 16
console.log([...texto].length); // 14 (spread operator cuenta correctamente)

// 4. Caracteres especiales de escape cuentan como 1
const conEscape = "Línea1\nLínea2";
console.log(conEscape.length); // 13 (\n cuenta como 1)

//******** Acceso a caracteres ********//

// Diferentes formas de acceder:
const palabra = "JavaScript";

// 1. Notación de corchetes (más común)
console.log(palabra[0]); // "J"
console.log(palabra[palabra.length - 1]); // "t"

// 2. Método charAt() (forma clásica)
console.log(palabra.charAt(0)); // "J"
console.log(palabra.charAt(100)); // "" (cadena vacía, no undefined)

// 3. Método at() (moderno, acepta negativos)
console.log(palabra.at(0)); // "J"
console.log(palabra.at(-1)); // "t" (último)
console.log(palabra.at(-2)); // "p" (penúltimo)

// Diferencias importantes:
console.log(palabra[100]); // undefined
console.log(palabra.charAt(100)); // "" (cadena vacía)
console.log(palabra.at(100)); // undefined

//******** charCodeAt() - Obtener código Unicode ********//

const letra = "A";
console.log(letra.charCodeAt(0)); // 65 (código ASCII/Unicode de 'A')

const acento = "é";
console.log(acento.charCodeAt(0)); // 233

// Casos con emojis (necesitas codePointAt)
const corazon = "❤️";
console.log(corazon.charCodeAt(0)); // 10084
console.log(corazon.codePointAt(0)); // 10084 (más preciso para emojis)

//******** String.fromCharCode() - Crear string desde código ********//

console.log(String.fromCharCode(65)); // "A"
console.log(String.fromCharCode(72, 111, 108, 97)); // "Hola"
console.log(String.fromCharCode(10084)); // "❤"

//******** Validaciones comunes con length ********//

// Verificar si un string está vacío
function estaVacio(str) {
  return str.length === 0;
}

// Verificar si un string tiene solo espacios
function soloEspacios(str) {
  return str.trim().length === 0;
}

// Limitar longitud de texto
function truncar(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

console.log(estaVacio("")); // true
console.log(soloEspacios("   ")); // true
console.log(truncar("Este es un texto muy largo", 10)); // "Este es un..."
