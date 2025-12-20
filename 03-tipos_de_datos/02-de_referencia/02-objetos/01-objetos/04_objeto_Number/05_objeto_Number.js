/* 
  Number es un objeto predefinido que permite trabajar con valores numéricos. 
  Proporciona propiedades y métodos útiles para manejar números en diferentes formatos 
  y realizar varias operaciones matemáticas. 
*/

// Podemos crear un objeto Number de 2 maneras:
let num = 123;
let num2 = new Number(123);

//********Propiedades********//

// El valor numérico más grande representable:
console.log(Number.MAX_VALUE); // Devuelve 1.7976931348623157e+308

// El valor positivo más pequeño representable:
console.log(Number.MIN_VALUE); // Devuelve 5e-324

// Representa un valor "Not-A-Number" (NaN):
console.log(Number.NaN); // Devuelve NaN

// Representa el valor de negativo infinito:
console.log(Number.NEGATIVE_INFINITY); // Devuelve -Infinity

// Representa el valor de positivo infinito:
console.log(Number.POSITIVE_INFINITY); // Devuelve Infinity

// Propiedades adicionales:

// El valor entero más grande que se puede representar con precisión en JavaScript (2^53 - 1):
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// El valor entero más pequeño que se puede representar con precisión en JavaScript (-(2^53 - 1)):
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// La diferencia más pequeña posible entre dos números representables en JavaScript:
console.log(Number.EPSILON); // 2.220446049250313e-16
/* Una aplicación práctica de Number.EPSILON es comparar números de punto flotante para determinar 
   si son "casi iguales" debido a las limitaciones de precisión.
   Ejemplos:
*/
// Ejemplo 1
function casiIguales(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(casiIguales(0.1 + 0.2, 0.3)); // Devuelve true
// Ejemplo 2
function casiIguales(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

// Ejemplos de uso
let num3 = 0.1 + 0.2;
let num4 = 0.3;
let num5 = 0.1 + 0.2 + 0.3;
let num6 = 0.6;

console.log(`Comparar ${num3} y ${num4}: ${casiIguales(num3, num4)}`); // true
console.log(`Comparar ${num5} y ${num6}: ${casiIguales(5, num6)}`); // true

// Otro caso con números más grandes
let num7 = Math.sqrt(2) * Math.sqrt(2);
let num8 = 2;

console.log(`Comparar ${num7} y ${num8}: ${casiIguales(num7, num8)}`); // true

//********Métodos********//

// Determina si el valor es un número finito:
console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(Infinity)); // false

// Determina si el valor es un número entero:
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(123.456)); // false

// Determina si el valor es NaN:
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(123)); // false

// Convierte una cadena en un número de punto flotante:
console.log(Number.parseFloat("123.45")); // 123.45

// Convierte una cadena en un entero, respetando una base específica (radix):
console.log(Number.parseInt("123", 10)); // 123
console.log(Number.parseInt("7B", 16)); // 123 en base 16

// Métodos adicionales:

// Number.isSafeInteger(value): Determina si el valor es un entero seguro (un entero que puede ser representado con precisión):
console.log(Number.isSafeInteger(3)); // true
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false

// Number.toFixed(digits): Devuelve una cadena que representa el número en notación de punto fijo, con el número de decimales especificado:
let num9 = 123.456;
console.log(num9.toFixed(2)); // devuelve "123.46"

// Number.toPrecision(precision): Devuelve una cadena que representa el número con una precisión específica:
let num10 = 123.456;
console.log(num10.toPrecision(4)); // "123.5"

//********Métodos del Prototipo Number********//

// toFixed(digits): Devuelve una cadena representando el número con un número fijo de decimales:
let nu11 = 123.456;
console.log(num11.toFixed(2)); // "123.46"

// toExponential(fractionDigits): Devuelve una cadena representando el número en notación exponencial:
let num12 = 123.456;
console.log(num12.toExponential(2)); // "1.23e+2"

// toString(radix): Devuelve una cadena representando el número en una base específica (radix)
let num13 = 123;
console.log(num13.toString(2)); // "1111011" en binario
console.log(num13.toString(16)); // "7b" en hexadecimal

// PROFE //
/* 
 
   Podemos utilizar una variable que contenga un tipo de datos primitivo (principales:number, string, boolean),
   como un objetos, en el sentido de que podemos utilizar métodos y propiedades del tipo de objeto que representan,
   no en el sentido de poder añadir otros atributos y métodos.

*/

let num14 = 1000;

//No se recomienda en js la utilización de constructor en datos primitivos(optimización memoria)
let num15 = new Number(2);

//Admite notación exponencial
let numexponencial = 1e9;
console.log(numexponencial); //1000000000

/*
   Todos los números se guardan en 64 bits, aunque no se utiliza mucho
   en versiones actuales de js existe un nuevo tipo bigint que permite 
   almacenar números más grandes, añadiéndole una n al final del numero
*/

let bignum = 1111n;
console.log(typeof bignum); //bignint

//Admite notación Hexadecimal (0x), binaria(0b) y octal(0o)

let numexadecimal = 0xff;
console.log(numexadecimal); //255

//Métodos

let numdecimal = 3.1416;

console.log(numdecimal.toExponential(2)); //3.14e+0
console.log(numdecimal.toFixed(3)); //3.142
console.log(numdecimal.toString()); //3.1416 (string)

//También podemos utilizar el propio Number como clase estática y acceder a propiedades

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.POSITIVE_INFINITY); //Infinity
