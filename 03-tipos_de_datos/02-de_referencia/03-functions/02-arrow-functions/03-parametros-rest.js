//--------------------------------------------------------------------------------------
// ✅ Parámetros rest en funciones flecha
//--------------------------------------------------------------------------------------
/* Las funciones flecha no tienen acceso al objeto arguments.
 Para capturar múltiples argumentos, en las funciones flecha, 
 usamos el operador rest (...args) que permiten a las funciones 
 aceptar un número indefinido de argumentos como en un array
*/
// ❌ Esto no funciona:
const mostrarMal = () => {
  // console.log(arguments); // ReferenceError: arguments is not defined
};

// ✅ Solución moderna con parámetros rest:
const mostrar = (...args) => {
  console.log(args);
};
mostrar("uno", "dos", "tres"); // [ 'uno', 'dos', 'tres' ]
mostrar("uno", "dos", "tres", "cuatro"); // [ 'uno', 'dos', 'tres', 'cuatro' ]

// También podemos combinarlos con otros parámetros:
const registrarEvento = (tipo, ...detalles) => {
  console.log(`Tipo: ${tipo}`); // Tipo: click
  console.log("Detalles:", detalles); // Detalles: [ 'botón izquierdo', 'coordenadas', 120, 300 ]
};
registrarEvento("click", "botón izquierdo", "coordenadas", 120, 300);
/*
Tipo: click
Detalles: [ 'botón izquierdo', 'coordenadas', 120, 300 ]
*/

// Ejemplo de cantidad de número indefinidos a sumar
// El parámetro arg se transformará en un array y podremos hacer uso de cualquier método de arrays
const add = (...arg) => arg.reduce((prev, curr) => prev + curr);
console.log(add(1, 2, 3, 4, 5, 6)); // 21


