// Operador Spread (ES6 - 2015).

// Una de las características más populares del lenguaje.

// Inicialmente sólo existía sobre Arrays pero en objetos a partir del 2018.

// Porque y cómo usarlo y ejemplos de utilización de básicos a complejos:

/*
Inmutabilidad: Valores cuyo estado cno puede cambiar en el tiempo.
Si creamos un objeto y le asignamos el valor de otro objeto, ambos
apuntarán al mismo puntero de memoria por lo que si cambiamos el 
valor de alguna propiedad de uno, este se reflejará también en el 
otro.
*/
const myCar = {
  brand: "Renault",
  model: "Clio",
  yearManufacture: "2005",
};

// Asignamos los valores del objeto myCar al objeto anotherCar
const anotherCar = myCar;

// Asignamos 2025 como año de fabricación del anotherCar
anotherCar.yearManufacture = 2025;

/* 
Si vemos el valor del año de fabricación del coche inicial, 
vemos que es 2025 y no 2005:
*/
console.log(myCar.yearManufacture); // 2025

/*
Para evitar esto, debemos crear una nueva instancia del array u 
objeto. Para ello usaremos el operador Spread.
Spread expande los elementos que están contenidos en un iterable 
(string, array, conjunto u objeto).
Ejemplos:
*/

// Obtenemos cada uno de los números que están contenidos en el array numbers
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

// Obtenemos cada uno de los string que están contenidos en el array nombres
const names = ["Carlos", "Eva", "Nerea", "Irene"];
console.log(...names); // carlos Eva Nerea Irene

// Obtenemos cada uno de los objetos que están contenidos en el array family
const family = [
  {
    name: "Carlos",
    relationship: "father",
  },
  {
    name: "Eva",
    relationship: "mother",
  },
  {
    name: "Nerea",
    relationship: "first daughter",
  },
  {
    name: "Carlos",
    relationship: "second daughter",
  },
];

console.log(...family);
/*
{
    name: "Carlos",
    relationship: "father",
  },
  {
    name: "Eva",
    relationship: "mother",
  },
  {
    name: "Nerea",
    relationship: "first daughter",
  },
  {
    name: "Carlos",
    relationship: "second daughter",
  }
*/

