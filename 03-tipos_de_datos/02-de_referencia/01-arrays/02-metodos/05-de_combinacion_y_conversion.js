// Estos métodos no modifican el array original, sino que devuelven una nueva estructura o representación

// Arrays para los ejemplos
let letras = ["a", "b", "c"];
let vocales = ["e", "i", "o", "u"];
console.log("Array original: ", letras); // Array original: [ 'a', 'b', 'c' ]

// concat() – Une arrays
// Devuelve un nuevo array con los elementos combinados
let todas = letras.concat(vocales);
console.log("concat(letras + vocales): ", todas); // concat(letras + vocales): [ 'a', 'b', 'c', 'e', 'i', 'o', 'u' ]

// También se puede concatenar valores sueltos
let extendido = letras.concat("x", "y");
console.log("concat con valores sueltos: ", extendido); // concat con valores sueltos: [ 'a', 'b', 'c', 'x', 'y' ]

// join() – Convierte en string con separador
// Une todos los elementos en un string, separados por el valor indicado
let frase = letras.join("-"); // "a-b-c"
console.log("join('-'): ", frase); // join('-'): a-b-c

// Si no se indica separador, usa coma por defecto
console.log("join(): ", letras.join()); // join(): a,b,c

// toString() – Convierte en string
// Similar a join(), pero siempre usa coma como separador
let comoTexto = letras.toString();
console.log("toString():", comoTexto); // "a,b,c"

// split() – Convierte un string en array
// Divide el string por el separador indicado y devuelve un array
let texto = "a,b,c,d";
let resultado = texto.split(","); // separa por comas
console.log("split(','):", resultado); // split(','): [ 'a', 'b', 'c', 'd' ]

// Si el separador no se encuentra, devuelve un array con el string completo
console.log("split('|'):", texto.split("|")); // split('|'): [ 'a,b,c,d' ]

// Si se usa "" como separador, divide cada carácter
console.log("split(''):", "hola".split("")); // split(''): [ 'h', 'o', 'l', 'a' ]

// COMPARATIVA //
// Comparativa entre métodos de conversión entre array y string
/*
✅ join()
  - Convierte array en string
  - Permite elegir separador

✅ toString()
  - Convierte array en string
  - Siempre usa coma como separador

✅ split()
  - Convierte string en array
  - Requiere separador
*/

// Array.from() – Crea un array desde un iterable o array-like
// Convierte un string en array de caracteres
let desdeTexto = Array.from("hola");
console.log("Array.from('hola'):", desdeTexto); // [ 'h', 'o', 'l', 'a' ]

// También se puede aplicar una función de mapeo
let cuadrados = Array.from([1, 2, 3], (x) => x * x);
console.log("Array.from con mapeo:", cuadrados); // [1, 4, 9]

// Array.of() – Crea un array con los argumentos dados
let creado = Array.of(1, 2, 3);
console.log("Array.of(1, 2, 3):", creado); // [1, 2, 3]

// toLocaleString() – Convierte en string con formato regional
let precios = [1000, 2000, 3000];
console.log("toLocaleString():", precios.toLocaleString("es-ES")); // "1.000,2.000,3.000"
