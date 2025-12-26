/* 
  Podemos importar las funciones de otro archivo (en este ejemplo de 
  funciones.js situado en el mismo proyecto), las cuales tienen el 
  prefijo de export en el archivo donde las exportamos (ver pruebas.js) 
*/

// Podemos importar una por una las funciones
import { sumar } from "./funciones.js";
import { restar } from "./funciones.js";
import { prueba } from "./funciones.js";

// O podemos importar varias a la vez que estén en el mismo fichero
// import { sumar, restar } from "./funciones.js";

console.log(sumar(20, 10));
console.log(restar(20, 10));

let num = new prueba("Raul");
console.log(num);
