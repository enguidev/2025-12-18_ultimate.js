let a = 10;
console.log(a, "valor inicial de a");

// Relacionales
console.log(a > 5, "¿a es mayor a 5?");
console.log(a >= 5, "¿a es mayor o igual a 5?");
console.log(a < 5, "¿a es menor a 5?");
console.log(a <= 5, "¿a es menor o igual a 5?");

// De igualdad

// si son iguales
console.log(a == 10, "¿a es igual a 10?");
console.log(a != 10, "¿a es diferente de 10?");
console.log(
  a == "10",
  "¿el valor de a es igual a 10?(no evalúa si es del mismo tipo)"
);

// Si son iguales y del mismo tipo
console.log(a === "10", "¿a es igual y del mismo tipo que 10?");
console.log(a !== "10", "¿a tiene un valor y tipo distinto que 10?");

//--------------------------PROFE--------------------------//
/*
    A nivel de operadores, javascript comparte sintaxis con 
    lenguajes como c, java, php..

    Operadores de comparación, devuelven un valor booleano
    ==  !=  === !==  >  >=  <  <=
*/

let v1 = 5;
let v2 = 7;

console.log(v1 > v2); //false
console.log(v1 < v2); //true
console.log(v1 != v2); //true

v2 = "5";
console.log(v1 == v2); // true: No comprueba tipos de datos.
console.log(v1 === v2); //false
