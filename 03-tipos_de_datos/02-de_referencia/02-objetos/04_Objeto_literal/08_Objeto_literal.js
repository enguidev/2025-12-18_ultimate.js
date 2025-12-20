// Crear un objeto vacío------------------------------------------------------------
let persona = {};

// Crear un objeto con propiedades--------------------------------------------------
let persona2 = {
  nombre: "Juan",
  edad: 25,
  saludar: function () {
    return "Hola, mi nombre es " + this.nombre;
  },
};

// Acceder a las propiedades y métodos del objeto------------------------------------
console.log(persona.nombre); // Salida: "Juan"
console.log(persona.edad); // Salida: 25
console.log(persona.saludar()); // Salida: "Hola, mi nombre es Juan"

// *** Añadir Propiedades y Métodos *** //--------------------------------------------

// Puedes agregar propiedades y métodos a un objeto después de haberlo creado:
// Crear un objeto vacío
let animal = {};

// Agregar propiedades
persona.nombre = "Pato";
persona.edad = 2;

// Agregar métodos
persona.saludar = function () {
  return "Hola, mi nombre es " + this.nombre;
};
console.log(persona.saludar()); // Salida: "Hola, mi nombre es Juan"

// *** Constructores de objetos *** //--------------------------------------------------

/*Una función constructora se utiliza para crear múltiples objetos similares. 
  Es una convención usar nombres de funciones constructores que comienzan con una 
  letra mayúscula
*/
// Función constructora
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    return "Hola, mi nombre es " + this.nombre;
  };
}

// Crear nuevos objetos utilizando la función constructora
let persona1 = new Persona("Ana", 30);
let persona4 = new Persona("Luis", 35);

console.log(persona1.saludar()); // Salida: "Hola, mi nombre es Ana"
console.log(persona4.saludar()); // Salida: "Hola, mi nombre es Luis"

// DEL PROFE //---------------------------------------------------------------------------

//Un objeto literal será un conjunto de pares tipo atributo:valor
let persona3 = {
  nombre: "Jose",
  apellido: "Perez",
  edad: 5,
};

console.log(persona3); //{nombre: "Jose", apellido: "Perez", edad: 5}
persona.edad++;
console.log(persona3); //{nombre: "Jose", apellido: "Perez", edad: 6}

//Los atributos pueden ser de cualquier naturaleza
let curso = {
  nombre: "2DAW",
  alumnos: ["Sergio", "Jose", "Ana", "Maria"],
};

console.log(curso); //{nombre: "2DAW", alumnos: Array(4)}
console.log(curso.alumnos); //{nombre: "2DAW", alumnos: Array(4)}

//En definitiva podemos ver los objetos literales como un conjunto
//de variables asociado un espacio de nombres.

/*
  Propiedades calculadas:
  En ocasiones puede ser interesante/necesario acceder a las
  propiedades de un objeto a través de una variable, es decir tenemos
  el nombre de la propiedad almacenada en una variable y queremos acceder
  a su valor. En este caso no podemos acceder al valor con la sintaxis
  habitual de poner un punto. Si no que tenemos que acceder a través de 
  corchetes.
*/
let variable = "nombre";
console.log(curso.variable); // ¡¡ ERROR !!
console.log(curso[variable]); // 2DAW

/*
  Otro recurso que puede ser util relacionado con los atributos de 
  un objeto es método keys del objeto Objet que recibe como parámetro
  un objeto y devuelve un array con los nombres de las claves de objeto.
*/
console.log(Object.keys(curso)); // ['nombre','curso']
