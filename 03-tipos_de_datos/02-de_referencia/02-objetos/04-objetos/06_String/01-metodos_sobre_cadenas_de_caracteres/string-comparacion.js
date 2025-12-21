// 🧪 Métodos para comparar y convertir cadenas

const a = "manzana";
console.log("\nvalor variable a: ", a, "\n");

const b = "Manzana";
console.log("valor variable b: ", b, "\n");

//******** localeCompare() ********//

// 🌍 Tip: localeCompare() permite ordenación alfabética sensible al idioma. Útil para listas.
/*
localeCompare()
Compara dos cadenas según las reglas del idioma local. Devuelve:

  -1 si la primera cadena va antes (es "menor")
  0 si son iguales
  1 si la primera va después (es "mayor")
*/
console.log("localeCompare(b): ", a.localeCompare(b), "\n"); // -1, 0 o 1 según el idioma

// Puedes especificar el idioma, aunque por defecto usa el idioma del navegador o sistema operativo:
console.log(
  'localeCompare(b, "es", { sensitivity: "base" }): ',
  a.localeCompare(b, "es", { sensitivity: "base" }),
  "\n"
); // 0 (Ignora mayúsculas y acentos, así que "manzana" === "Manzana")

//******** Opciones de localeCompare() ********//

console.log("--- Opciones de sensitivity ---\n");

// sensitivity: "base" - ignora mayúsculas y acentos
console.log(
  '"a".localeCompare("A", "es", { sensitivity: "base" }):',
  "a".localeCompare("A", "es", { sensitivity: "base" })
); // 0

// sensitivity: "accent" - distingue acentos, ignora mayúsculas
console.log(
  '"a".localeCompare("á", "es", { sensitivity: "accent" }):',
  "a".localeCompare("á", "es", { sensitivity: "accent" })
); // -1

// sensitivity: "case" - distingue mayúsculas, ignora acentos
console.log(
  '"a".localeCompare("A", "es", { sensitivity: "case" }):',
  "a".localeCompare("A", "es", { sensitivity: "case" })
); // -1

// sensitivity: "variant" (por defecto) - distingue todo
console.log(
  '"a".localeCompare("A", "es", { sensitivity: "variant" }):',
  "a".localeCompare("A", "es", { sensitivity: "variant" })
); // -1

// Ordenación numérica en strings
console.log("\n--- Ordenación numérica ---\n");

const archivos = ["archivo10", "archivo2", "archivo1", "archivo20"];
console.log("Sin numeric:", archivos.sort());
// ["archivo1", "archivo10", "archivo2", "archivo20"] (orden lexicográfico)

const archivos2 = ["archivo10", "archivo2", "archivo1", "archivo20"];
archivos2.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
console.log("Con numeric:", archivos2);
// ["archivo1", "archivo2", "archivo10", "archivo20"] (orden numérico correcto)

// ignorePunctuation - ignora puntuación
console.log("\n--- Ignorar puntuación ---\n");
console.log(
  '"co-op".localeCompare("coop", "en", { ignorePunctuation: true }):',
  "co-op".localeCompare("coop", "en", { ignorePunctuation: true })
); // 0

//******** Casos prácticos con localeCompare() ********//

// Ordenar nombres alfabéticamente en español
const nombres = ["Ángel", "Zona", "árbol", "Carlos", "ñandú"];
nombres.sort((a, b) => a.localeCompare(b, "es"));
console.log("\nNombres ordenados (español):", nombres);

// Ordenar ignorando mayúsculas y acentos
const palabras = ["café", "Cafe", "árbol", "Arbol"];
palabras.sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" }));
console.log("Palabras ordenadas (ignorando acentos/mayúsculas):", palabras);

// Buscar en array sin distinguir mayúsculas
function buscarIgnoreMayusculas(array, busqueda) {
  return array.find(
    (item) =>
      item.localeCompare(busqueda, undefined, { sensitivity: "base" }) === 0
  );
}
const frutas = ["Manzana", "Pera", "Plátano"];
console.log(
  'buscarIgnoreMayusculas(frutas, "manzana"):',
  buscarIgnoreMayusculas(frutas, "manzana")
); // "Manzana"

//******** toString() y valueOf() ********//

const cadena = new String("texto");

// toString() - Convierte el objeto en su representación textual:
console.log("\ntoString(): ", cadena.toString(), "\n"); // "texto"

// valueOf() - Devuelve el valor primitivo del objeto:
console.log("valueOf(): ", cadena.valueOf(), "\n"); // "texto"

// En el caso de String, ambos devuelven lo mismo. Pero en otros objetos (como Date), valueOf() puede devolver un número.

// Ejemplo con Date
const fecha = new Date("2024-01-01");
console.log("fecha.toString():", fecha.toString()); // "Mon Jan 01 2024 ..."
console.log("fecha.valueOf():", fecha.valueOf()); // 1704067200000 (timestamp)

// Ejemplo con Array
const arr = [1, 2, 3];
console.log("arr.toString():", arr.toString()); // "1,2,3"
console.log("arr.valueOf():", arr.valueOf()); // [1, 2, 3] (el array mismo)

//******** Conversión implícita ********//

console.log("\n--- Conversión implícita ---\n");

const obj = new String("Hola");
const prim = "Hola";

// Operador + invoca toString() implícitamente
console.log(obj + " Mundo"); // "Hola Mundo"

// Comparación == invoca valueOf() implícitamente
console.log("obj == prim:", obj == prim); // true (coerción de tipo)
console.log("obj === prim:", obj === prim); // false (tipo diferente)

//******** Otros métodos de comparación ********//

console.log("\n--- Otras formas de comparar strings ---\n");

// 1. Operadores de comparación (===, ==, >, <)
console.log('"abc" === "abc":', "abc" === "abc"); // true
console.log('"abc" > "abb":', "abc" > "abb"); // true (comparación lexicográfica)

// 2. startsWith() y endsWith()
console.log(
  '"JavaScript".startsWith("Java"):',
  "JavaScript".startsWith("Java")
); // true
console.log(
  '"JavaScript".endsWith("Script"):',
  "JavaScript".endsWith("Script")
); // true

// 3. includes()
console.log(
  '"JavaScript".includes("Script"):',
  "JavaScript".includes("Script")
); // true

// 4. match() con RegExp
console.log('"test@email.com".match(/@/):', "test@email.com".match(/@/)); // ["@", ...]

//******** Comparación case-insensitive ********//

function compararIgnoreMayusculas(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(
  '\ncompararIgnoreMayusculas("Hola", "HOLA"):',
  compararIgnoreMayusculas("Hola", "HOLA")
); // true

//******** Comparación con acentos normalizados ********//

function compararConAcentos(str1, str2) {
  return str1.normalize() === str2.normalize();
}

const cafe1 = "café"; // é como un solo carácter
const cafe2 = "cafe\u0301"; // e + acento combinado

console.log("\ncafe1 === cafe2:", cafe1 === cafe2); // false
console.log(
  "compararConAcentos(cafe1, cafe2):",
  compararConAcentos(cafe1, cafe2)
); // true

//******** Tabla comparativa de métodos ********//

console.log("\n=== RESUMEN COMPARATIVO ===\n");

console.log(`
Método              | Case-sens | Acentos | Locale | Numérico
-------------------|-----------|---------|--------|----------
===                | Sí        | Sí      | No     | No
localeCompare()    | Config.   | Config. | Sí     | Config.
toLowerCase()==    | No        | Sí      | No     | No
normalize()==      | Sí        | Config. | No     | No
`);

// 📌 Advertencia: Evita usar new String() salvo que necesites un objeto explícito.
// Las cadenas primitivas ("texto") son más ligeras y seguras.
console.log(
  "\n💡 RECOMENDACIÓN: Usa SIEMPRE strings primitivos ('texto') en lugar de new String()"
);
