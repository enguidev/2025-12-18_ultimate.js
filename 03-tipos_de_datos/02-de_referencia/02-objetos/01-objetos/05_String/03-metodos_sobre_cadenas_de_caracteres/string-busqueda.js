// 🔍 Métodos para buscar contenido dentro de cadenas
const frase = "Aprender JavaScript es divertido";
console.log("\ncadena original: ", frase, "\n");

// indexOf() - En que índice comienza Java
console.log("indexOf() : ", frase.indexOf("Java"), "\n"); // 9

// lastIndexOf() - Donde est´ala última ocurrencia de la letra 'e'
console.log("lastIndexOf() : ", frase.lastIndexOf("e"), "\n"); // 26

// includes() - Si incluye la palabra 'divertido'
console.log("includes() : ", frase.includes("divertido"), "\n"); // true

// startsWith() - Si empieza por la palabra 'Aprender'
console.log("startsWith() : ", frase.startsWith("Aprender"), "\n"); // true

// endsWith() - Si termina por la palabra 'divertido'
console.log("endsWith() : ", frase.endsWith("divertido"), "\n"); // true

// search() con RegExp
console.log("search() : ", frase.search(/Java/), "\n"); // 9

// match() - Si coincide con la expresión regular
const texto = "uno, dos, tres, cuatro";
// /.../	Delimita la expresión regular.
// \w	Coincide con cualquier carácter alfanumérico: letras (A–Z, a–z), dígitos (0–9) y guion bajo _.
// +	Indica “uno o más” caracteres consecutivos.
// g	Bandera global: busca todas las coincidencias, no solo la primera.
/*
🔎 ¿Por qué esos resultados?
  
  -"uno" → letras → ✅

  -"dos" → letras → ✅

  -"tres_3" → letras + guion bajo + número → ✅

  -"cuatro" → letras → ✅

  -Las comas y espacios no se incluyen porque \w no los reconoce.
*/
console.log("match(/w+/g) : ", texto.match(/\w+/g), "\n"); // ["uno", "dos", "tres", "cuatro"]

// matchAll()
// Más potente y flexible que match() cuando necesitas recorrer coincidencias con detalle.
// Devuelve un iterador con todas las coincidencias de una expresión regular.
/*
Cada coincidencia es un array que incluye:

  -El texto coincidente (match[0])

  -Los grupos capturados (si hay paréntesis en la RegExp)

  -La posición (match.index)

  -La cadena original (match.input)
*/
const coincidencias = texto.matchAll(/\w+/g);
// Recorremos el iterador con for...of
console.log("matchAll(/w+/g): ", "\n");
for (const match of coincidencias) {
  console.log(match[0]); // uno, dos, tres, cuatro
}
