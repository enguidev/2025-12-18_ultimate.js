const cadenaCaracteres =
  "El coche de Paco tiene una avería pero, mi coche está en buenas condiciones";

console.log("\ncadena original: ", cadenaCaracteres, "\n");

//******** replace() ********//

// replace() reemplaza una palabra por otra en su primera aparición
console.log(
  "Replace normal: ",
  cadenaCaracteres.replace("coche", "barco"),
  "\n"
); // Reemplaza la primera aparición de coche por barco

// Uso de una expresión regular con el modificador global para que se cambie la palabra en todas las ocurrencias
console.log(
  "Replace con expresión regular y el modificador global: ",
  cadenaCaracteres.replace(/coche/g, "barco"),
  "\n"
); // Reemplaza en todas las ocurrencias coche por barco

// Replace con insensibilidad a mayúsculas
const texto = "Hola HOLA hola";
console.log("Replace /hola/gi:", texto.replace(/hola/gi, "adiós")); // Reemplaza todas

// Si vemos, la variable string cadenaCaracteres sigue teniendo el mismo valor original
console.log("cadena original: ", cadenaCaracteres, "\n");

//******** replace() con función callback ********//

// La función recibe: (match, p1, p2, ..., offset, string)
const precios = "El producto cuesta 50€ y el otro 30€";
const preciosConIVA = precios.replace(/(\d+)€/g, (match, numero) => {
  const conIVA = Number(numero) * 1.21;
  return `${conIVA.toFixed(2)}€`;
});
console.log("Precios con IVA:", preciosConIVA);
// "El producto cuesta 60.50€ y el otro 36.30€"

// Capitalizar primera letra de cada palabra
function capitalizarPalabras(texto) {
  return texto.replace(/\b\w/g, (letra) => letra.toUpperCase());
}
console.log(capitalizarPalabras("hola mundo JavaScript")); // "Hola Mundo JavaScript"

// Censurar palabras
function censurar(texto, palabras) {
  let resultado = texto;
  palabras.forEach((palabra) => {
    const regex = new RegExp(palabra, "gi");
    resultado = resultado.replace(regex, (match) => "*".repeat(match.length));
  });
  return resultado;
}
console.log(censurar("Este texto tiene palabras malas", ["malas", "texto"]));
// "Este ***** tiene palabras *****"

//******** replaceAll() (Desde ES2021) ********//

console.log(
  "Con replaceAll: ",
  cadenaCaracteres.replaceAll("coche", "barco"),
  "\n"
); // Mismo resultado que replace con /g

// replaceAll también acepta RegExp (debe tener flag 'g')
const texto2 = "uno dos uno tres";
console.log("replaceAll con RegExp:", texto2.replaceAll(/uno/g, "UNO"));

// replaceAll con función callback
const numeros = "1 2 3 4 5";
const duplicados = numeros.replaceAll(/\d/g, (num) => Number(num) * 2);
console.log("Números duplicados:", duplicados); // "2 4 6 8 10"

//******** split() ********//

// split() divide una cadena en un array
console.log("\n--- split() ---\n");

// Separado por comas y espacio
const separadoPorComas = cadenaCaracteres.split(", ");
console.log("Split por ', ':", separadoPorComas);

// Split por espacios
const palabras = "Hola mundo JavaScript";
console.log("Split por espacios:", palabras.split(" ")); // ["Hola", "mundo", "JavaScript"]

// Split con límite (máximo de elementos)
console.log("Split con límite 2:", palabras.split(" ", 2)); // ["Hola", "mundo"]

// Split sin argumento (devuelve array con la cadena completa)
console.log("Split sin argumento:", palabras.split()); // ["Hola mundo JavaScript"]

// Split con string vacío (divide cada carácter)
console.log("Split con '':", "Hola".split("")); // ["H", "o", "l", "a"]

// Split con RegExp
const fecha = "2024-12-20";
console.log("Split fecha:", fecha.split("-")); // ["2024", "12", "20"]

const mixto = "uno,dos;tres.cuatro";
console.log("Split múltiples separadores:", mixto.split(/[,;.]/));
// ["uno", "dos", "tres", "cuatro"]

// Split preservando el separador con grupos de captura
const textoConPuntos = "Hola.Mundo.JavaScript";
console.log("Split preservando separador:", textoConPuntos.split(/(\.)./));
// ["Hola", ".", "Mundo", ".", "JavaScript"]

//******** Casos prácticos combinados ********//

// 1. Limpiar espacios múltiples
function limpiarEspacios(texto) {
  return texto.replace(/\s+/g, " ").trim();
}
console.log(
  "\nlimpiarEspacios('Hola    mundo  JS'):",
  limpiarEspacios("Hola    mundo  JS")
); // "Hola mundo JS"

// 2. Convertir snake_case a camelCase
function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (match, letra) => letra.toUpperCase());
}
console.log(
  "snakeToCamel('mi_variable_larga'):",
  snakeToCamel("mi_variable_larga")
); // "miVariableLarga"

// 3. Obtener iniciales
function obtenerIniciales(nombreCompleto) {
  return nombreCompleto
    .split(" ")
    .map((palabra) => palabra[0].toUpperCase())
    .join("");
}
console.log(
  "obtenerIniciales('Juan Carlos García'):",
  obtenerIniciales("Juan Carlos García")
); // "JCG"

// 4. Slugify (convertir a URL amigable)
function slugify(texto) {
  return texto
    .toLowerCase()
    .replace(/[áäâà]/g, "a")
    .replace(/[éëêè]/g, "e")
    .replace(/[íïîì]/g, "i")
    .replace(/[óöôò]/g, "o")
    .replace(/[úüûù]/g, "u")
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
console.log("slugify('Título con Acentos!'):", slugify("Título con Acentos!")); // "titulo-con-acentos"

// 5. Invertir palabras manteniendo orden
function invertirPalabras(texto) {
  return texto
    .split(" ")
    .map((palabra) => palabra.split("").reverse().join(""))
    .join(" ");
}
console.log("invertirPalabras('Hola mundo'):", invertirPalabras("Hola mundo")); // "aloH odnum"

// 6. Enmascarar datos sensibles
function enmascarar(texto, visible = 4) {
  if (texto.length <= visible) return texto;
  return "*".repeat(texto.length - visible) + texto.slice(-visible);
}
console.log("enmascarar('4532123456789012'):", enmascarar("4532123456789012")); // "************9012"
