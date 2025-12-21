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

//******** Creación de cadenas ********//

/* 
  Los datos de tipo cadena irán encerrados entre comillas simples,
  dobles o comillas invertidas (backticks).
*/

let cad = "CADENA1";
cad = "CADENA2";

/* 
  También se puede usar comillas hacia atrás (tecla a la derecha de la P),
  en cuyo caso podemos insertar variables delimitadas por ${}
  Esto se llama Template Literals o Template Strings
*/

let num = 3;
cad = `CADENA${num}`;
console.log(cad); // -> "CADENA3"

// Template Literals permite expresiones más complejas
let precio = 19.99;
let cantidad = 3;
console.log(`Total: ${precio * cantidad}€`); // "Total: 59.97€"

// Template Literals multilínea (sin necesidad de \n)
let poema = `
  Roses are red,
  Violets are blue,
  JavaScript is awesome,
  And so are you!
`;
console.log(poema);

//******** Caracteres especiales de escape ********//

console.log("primera línea \nsegunda línea"); // Salto de línea en consola
console.log("primera línea <br>segunda línea"); // Salto de línea en HTML

// Otros escapes útiles
console.log("Tabulación:\tTexto"); // Tabulador
console.log('Comillas dobles: "texto"'); // Escapar comillas
console.log("Backslash: \\"); // Mostrar barra invertida
console.log("Unicode: \u00A9"); // © (símbolo copyright)
console.log("Emoji: \u{1F600}"); // 😀

//******** Advertencias importantes ********//

// 1. Las cadenas son INMUTABLES
let saludo = "Hola";
saludo[0] = "M"; // No tiene efecto
console.log(saludo); // "Hola"
// Para modificar, debes crear una nueva cadena:
saludo = "M" + saludo.slice(1);
console.log(saludo); // "Mola"

// 2. Diferencia entre primitivo y objeto String
let str1 = "hola";
let str2 = new String("hola");
console.log(str1 === str2); // false (diferente tipo)
console.log(str1 == str2); // true (coerción de tipo)

// 3. Cuándo SÍ usar new String() (casos MUY raros)
// Cuando necesitas añadir propiedades custom a un string
let strObj = new String("test");
strObj.customProp = "valor";
console.log(strObj.customProp); // "valor"
// Pero esto NO funciona con primitivos:
let strPrim = "test";
strPrim.customProp = "valor";
console.log(strPrim.customProp); // undefined
// 💡 Recomendación: Usa SIEMPRE primitivos salvo casos muy específicos

// 4. Concatenación: varias formas
let nombre = "Carlos";
let edad = 25;
// Forma tradicional
console.log("Hola " + nombre + ", tienes " + edad + " años");
// Template literals (PREFERIDO)
console.log(`Hola ${nombre}, tienes ${edad} años`);
// Con concat() (casi nunca se usa)
console.log("Hola ".concat(nombre, ", tienes ", edad, " años"));
