// *** Formas de crear una función *** //---------------------------------

/* Podemos crear funciones como normalmente 
   (se podrá llamar en todo el archivo)
*/
function prueba() {
  fecha = new Date();
  document.writeln(fecha.getSeconds() + "<br>");
}
// Ejecutará la función prueba cada segundo
//setInterval(prueba, 1000);

// setInterval ejecuta el código cada x milisegundos (los que le pasemos por el segundo parámetro)
// setTimeout ejecuta el código una sola vez a los x milisegundos (los que le pasemos por el segundo parámetro)

// Podemos hacer funciones con sintaxis flecha
/* Si lo hacemos así, como se le está asignando 
   a una variable, sólo podremos llamar a esta 
   función después de crearla
*/
let prueba = () => {
  fecha = new Date();
  document.writeln(fecha.getSeconds() + "<br>");
};
/* 
   la función que le pasamos una función (en este ejemplo prueba()) 
   a otra función (en este ejemplo setInterval())
   como parámetro no lleva paréntesis como 
   cuando la llamas fuera

   Ejecutará la función prueba cada segundo
*/
//setInterval(prueba, 1000);

/* 
También podremos meter el bloque de código dentro 
cuando no es muy grande por lo que no necesitaríamos 
el nombre de la función 
*/
setInterval(() => {
  fecha = new Date();
  document.writeln(fecha.getSeconds() + "<br>");
}, 1000);

// También se puede pasar una función anónima
setInterval(function () {
  fecha = new Date();
  document.writeln(fecha.getSeconds() + "<br>");
}, 1000);

// Creación de una función (usar el verbo como nombre de la función)---------
function saludar() {
  console.log("Hola desde funciones");
}

// Hay que invocar/llamar la función para que se ejecute---------------------
saludar();

// Podremos también realizar operaciones-------------------------------------
function suma() {
  return 4 + 6;
}

// Mostrar el resultado------------------------------------------------------
console.log(suma());

let resultado = suma();
console.log(resultado);

// Argumentos y parámetros en las funciones----------------------------------

function suma2(a, b) {
  // Parámetros
  return a + b;
}

let resultado2 = suma2(5, 6); // argumentos
console.log(resultado2);

// Tipo de la función suma2 (function)
console.log(typeof suma2);

function resta(a, b) {
  console.log(arguments); // Forma no recomendada de acceder a todos los valores de los argumentos

  return a - b;
}

console.log(resta(4, 2, 3, 5));
