// El objeto String en JavaScript es fundamental para el manejo y manipulación de cadenas de texto
// Puedes crear una cadena de texto en JavaScript de dos maneras:
let cadena = "Hola, mundo!"; // cadena primitiva
let cadena2 = new String("Hola, mundo!"); // objeto String (tipo de referencia)

//******** Propiedades ********//

// length: Devuelve el número de caracteres en la cadena
let cadena3 = "Hola, mundo!";
console.log(cadena3.length); // 12

// Acceso por índice: permite obtener un carácter específico
console.log(cadena3[0]); // "H"
console.log(cadena3[5]); // ","
console.log(cadena3[cadena3.length - 1]); // "!"

// .at(): alternativa moderna para acceder por índice, admite negativos
console.log(cadena3.at(0)); // "H"
console.log(cadena3.at(-1)); // "!" (último carácter)

// typeof: identifica si es una cadena primitiva o un objeto
console.log(typeof cadena); // "string"
console.log(typeof cadena2); // "object"

// valueOf() y toString(): convierten objetos String a su valor primitivo
console.log(cadena2.valueOf()); // "Hola, mundo!"
console.log(cadena2.toString()); // "Hola, mundo!"

// PROFE //
/* 
  Los datos de tipo cadena irán encerrados entre comillas simples,
  dobles o comillas invertidas (backticks).
*/

let cad = "CADENA1";
cad = "CADENA2";

/* 
  También se puede usar comillas hacia atrás (tecla a la derecha de la P),
  en cuyo caso podemos insertar variables delimitadas por ${}
*/

let num = 3;
cad = `CADENA${num}`;
console.log(cad); // -> "CADENA3"

// Caracteres especiales de escape
console.log("primera línea \nsegunda línea"); // Salto de línea en consola
console.log("primera línea <br>segunda línea"); // Salto de línea en HTML

// Otros escapes útiles
console.log("Tabulación:\tTexto"); // Tabulador
console.log('Comillas dobles: "texto"'); // Escapar comillas
console.log("Backslash: \\"); // Mostrar barra invertida

// Advertencia: las cadenas son inmutables
let saludo = "Hola";
saludo[0] = "M"; // No tiene efecto
console.log(saludo); // "Hola"
