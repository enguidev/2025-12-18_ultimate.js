// ****** De referencia ****** //
// Arrays, Object, Functions, Clases

//--------------------------------------------------------------------------------------
// OBJETOS
//--------------------------------------------------------------------------------------

let nombre4 = "Cristian";
let apellido2 = "Sanchez";
let edad = 35;

// Objeto literal
let persona = {
  nombre: "Cristian", // propiedad par llave-valor
  apellido: "Sanchez",
  /* La última coma es opcional pero en el sistema de gestión de versión, cuando 
   quieras agregar una propiedad te va a avisar que se ha modificado 2 líneas */
  edad: 35,
};

// JavaScript no asegura el orden de las propiedades
console.log(persona);
// Forma más usada de mostrar el valor de la clave
console.log(persona.nombre);
// Si no conoces el nombre de la propiedad o vas a iterar todas las propiedades de un objeto
console.log(persona["apellido"]);

// Podemos, ejemplo definir una variable, por ejemplo llamada llave
let llave = "edad";
// Cuando vayamos a mostrarlo, en vez de pasarle el string edad, podemos pasarle la variable llave
persona[llave] = 16;

// Modificar una propiedad
persona.edad = 25;
persona["edad"] = 13;

// Eliminar una propiedad
delete persona.apellido;
console.log(persona);
