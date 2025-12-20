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
