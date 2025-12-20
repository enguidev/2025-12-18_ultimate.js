/*
    Estructuras repetitivas, ejecutan un bloque de código mientras 
    se cumpla una condición dada. Para la ejecución en cuanto la 
    condición deje de cumplirse. Tenemos diferentes tipos, aunque son 
    equivalentes entre ellos (lo que puedo resolver con uno, también 
    lo puedo resolver con otro)
*/

//------WHILE------//

// while : Comprueba la condición y ejecuta el bloque,
// por los que puede ocurrir que no haya ninguna ejecución.

let i = 1;
let final = 10;
console.log("while_____");
while (i < 10) {
  console.log(i);
  i++;
}

// Ejemplo de ejercicio. Cuales son los número pares
let j = 0;

while (j < 10) {
  if (j % 2 == 0) {
    console.log(j);
  }

  j++;
}

console.log("Fuera del while");

// Si no incrementamos la variable, podemos tener un loop infinito
let z = 0;
while (i < 10) {
  console.log(z);
  z++; // para ver el infinito, comentar esta línea
}

// Ejemplo de cuenta atrás con while
let h = 20;
while (h) {
  console.log(h);
  h--; //cuando llegue a 0, será false y saldrá del while
}

//------DO WHILE------//

// do while : Ejecuta el bloque y Comprueba la condición ,
// por los que siempre hay al menos una ejecución del bloque.

i = 1;
console.log("do while_____");
do {
  console.log(i);
  i++;
} while (i < 10);

// Ejemplo número par
let y = 2;

do {
  if (y % 2 == 0) {
    console.log("Número par", y);
  }
  y++;
} while (y < 2);

//------FOR------//

// for : Dentro de su declaración, se establece una instrucción inicial,
// la condición a comprobar en cada ejecución, y la actualización después de cada ejecución.

console.log("for_____");
for (i = 1; i < 10; i++) {
  console.log(i);
}

// Ejemplo número par
for (let i = 2; i < 10; i++) {
  if (i % 2 == 0) {
    console.log("Número par", i);
  }
}

//------FOR...IN------//

/* Nos sirve para poder iterar las propiedades de un objeto y 
   aquellas que el objeto hereda de su cadena de prototipos.

   No se debe usar para arreglos

   Se puede usar break y continue
   
*/

let objeto = { a: "1", b: "2", c: "3" };
let colores = ["azul", "verde", "rojo", "amarillo"];

// Nos devuelve las propiedades de nuestro objeto a, b y c
for (let iterador in objeto) {
  console.log(iterador);
}

// Nos devuelve los valores de las propiedades de nuestro objeto 1 2 3
for (let iterador in objeto) {
  console.log(objeto[iterador]);
}

/* No es aconsejable usarlo en un arreglo porque si hacemos esto 
   en colores nos dará 0, 1, 2, 3 (que son los índices)
*/
for (let iterador in objeto) {
  console.log(iterador);
}

// Ejemplo 1:
const object = { a: 1, b: 2, c: 3 }; // Objeto

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// Mostrará:
// "a: 1"
// "b: 2"
// "c: 3"

// Ejemplo 2:
let user = {
  // Creamos un usuario
  id: 1,
  name: "Perro",
  age: 25,
};

// Mostrar el nombre de la propiedad pero no el valor
for (let prop in user) {
  console.log(prop);
}

// Mostrar el nombre de la propiedad y el valor
for (let prop in user) {
  console.log(prop, user[prop]);
}

/* Ejemplo  por si nos encontramos con este código
   pero mejor usar un for of para recorrer un array
*/
let animales = ["Perro", "Dragón", "Conejo"];

for (let indice in animales) {
  console.log(indice, animales[indice]);
}

//------FOR...OF------//

// Nos sirve para iterar sobre un array, string o cualquier otro objeto iterable (Set, map, etc)
// Se puede usar break
// A partir ECMA Script 6 (ES6)
// Por convención, la variable auxiliar se escribe en singular respecto al nombre del array
// Más simple para iterar en elementos de un arreglo (como el for each de java)

/* Sólo accede al valor de cada uno de los elementos por lo que si quieres cambiar el array 
   original no podrás ya que necesitas su índice
*/
let numbers = [5, 4, 3, 2, 1];
// No puedes hacer esto:
for (var number of numbers) {
  number = number * 2;
}
console.log(numbers); // Esto mostrará de nuevo los valores anteriores 5, 4, 3, 2, 1

// Esto si lo cambia
for (let i = 0; i < numbers.length; i++) {
  number = number * 2;
}
console.log(numbers); // Esto mostrará 10, 8, 6, 2

//Una forma de solucionarlo sería crear otro array vacío y rellenarlo con los valores:
let duplicates = [];
for (const number of numbers) {
  duplicates.push(number * 2);
}

console.log(duplicates); // Esto mostrará el array duplicates con los mismos valores que el original numbers

let animales2 = ["Perro", "Dragón", "Conejo"]; // Tenemos un array de animales

for (let animal of animales2) {
  // Mostrará los animales
  console.log(animal);
}

// Iterando un string
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"

// Iterando un Map
let iterable2 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (let entry of iterable2) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable2) {
  console.log(value);
}
// 1
// 2
// 3

// Iterando un Set
let iterable3 = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable3) {
  console.log(value);
}
// 1
// 2
// 3

// Iterando una colección del DOM
// Nota: Esto solo funcionará en plataformas que tengan
// implementado NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}

//----------------------------------------------------------------------------------------------------
// Diferencias entre for...of y for...in:
let arr = [3, 5, 7];
arr.foo = "hola";

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs "3", "5", "7"
}
//----------------------------------------------------------------------------------------------------
// Para salir de los bucles (o cualquier instrucción de bloque) podemos usar break
for (let i = 0; i < numbers.length; i++) {
  if (i == 10) {
    break;
  }
  number = number * 2;
}

/* Pero si estamos dentro de bucles anidados podemos ponerle un label a cada bucle para identificarlo 
   y después decirle de cual queremos salir
*/
// Ruptura en bloques etiquetados:
outerBlock: {
  innerBlock: {
    console.log("1");
    break outerBlock; // sale de innerBlock y outerBlock
    console.log(":-("); // omitido
  }

  console.log("2"); // omitido
}
