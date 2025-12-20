// Tenemos el siguiente arreglo
const frutas = ["manzana", "plátano", "naranja", "kiwi"];

// 1.- Extrae la primera fruta en una variable llamada primera.
const [primera] = frutas;
/*
[primera] extrae el primer elemento del array frutas.
*/
console.log(primera); // "manzana"

// 2.- Extrae la tercera fruta en una variable llamada tercera.
const [, , tercera] = frutas;
/*
Los espacios vacíos con comas [,] nos permiten saltar posiciones.
Al poner dos comas antes de tercera, estás ignorando los dos primeros elementos 
("manzana" y "plátano") y accediendo directamente al tercero ("naranja").
*/
console.log(tercera); // "naranja"

// 3.- Extrae el resto de frutas (excepto la primera) en una variable llamada otras.
const [, ...otras] = frutas;
/*
Aquí usamos el operador rest (...).
La primera coma ignora el primer elemento.
...otras captura todos los elementos restantes en un nuevo array.
*/
console.log(otras); // ["plátano", "naranja", "kiwi"]
