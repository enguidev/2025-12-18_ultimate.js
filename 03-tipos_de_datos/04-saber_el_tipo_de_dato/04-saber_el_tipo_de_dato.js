// typeof
let numero2 = 42;
let nombre3 = "Hola mundo";
let verdadero2 = true;
let undef2;
let nula = null;

console.log(typeof numero2);
console.log(typeof nombre3);
console.log(typeof verdadero2);
console.log(typeof undef2);
console.log(typeof nula);

// Explicación del typeof null
/*
typeof null === "object" por razones históricas.
Más info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type
  En la primera implementación de JavaScript, los valores estaban representados por 
  una etiqueta y un valor. El tipo de la etiqueta para los objetos era el valor 0.
  null era representado por el NULL pointer (0x00 en la mayoría de las plataformas) y como
  null tenía 0 como su tipo de etiqueta, la función typeof retorna que es de tipo objeto

  Ser generó una propuesta a ECMAScript (typeof null === "null") pero esta fué rechazada.
  La forma de razonar/proceso mental de los desarrolladores es que null por lo general está
  siendo utilizado cuando existe un listado de objetos por lo que hace representar un objeto 
  vacío o la ausencia de un objeto y su creador (Brendan Eich) siguió la misma forma de pensar 
  así que lo implementó siguiendo este mismo paradigma
*/
