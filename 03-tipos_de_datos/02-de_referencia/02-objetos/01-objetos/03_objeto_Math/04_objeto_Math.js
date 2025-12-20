/*
El objeto Math nos proporciona propiedades y métodos "estáticos", para 
trabajar con números
*/

// Devuelve el valor de la constante PI
console.log("Math.PI: " + Math.PI);

// Devuelve el valor absoluto
Math.abs(-5); // Devuelve 5
Math.abs(5); // Devuelve 5

// Redondea al entero más cercano.
Math.round(4.5); // Devuelve 5
Math.round(4.4); // Devuelve 4
console.log("Math.round(3.14) " + Math.round(3.14)); // Devuelve 3

// Redondea hacia abajo al entero más cercano
console.log("Math.floor(3.14) " + Math.floor(3.14)); // Devuelve 3

// Devuelve el entero mayor o igual más próximo a x
console.log("Math.ceil(3.14): " + Math.ceil(3.14)); // Devuelve 4
console.log("Math.ceil(3): " + Math.ceil(3)); // Devuelve 3

// Devuelve el mayor de los valores pasados como argumentos
Math.max(1, 2, 3); // Devuelve 3

// Devuelve el menor de los valores pasados como argumentos
console.log("Math.min(5,7,8,3) " + Math.min(5, 7, 8, 3)); // Devuelve 3

// Devuelve un número pseudoaleatorio entre 0 y 1.
console.log("Math.random() " + Math.random());

// Math.trunc(x): Devuelve la parte entera de un número x eliminando los dígitos fraccionarios
console.log(Math.trunc(4.9)); // 4

// Devuelve la raíz cuadrada de x
Math.sqrt(16); // Devuelve 4

console.log("Math.pow(2,3) " + Math.pow(2, 3));

// Si quieres la raíz cuadrada de 2, podemos usar la constante predefinida SQRT2 (sin tener que recalcularla)
console.log("Math.SQRT2: " + Math.SQRT2); // Devuelve 1.4142135623730951

// Math.cbrt(x): Devuelve la raíz cúbica de un número x
console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(-8)); // -2

// Devuelve la raíz cuadrada de la suma de los cuadrados de sus argumentos, es decir, la hipotenusa de un triángulo rectángulo
console.log(Math.hypot(3, 4)); // 5
console.log(Math.hypot(3, 4, 5)); // 7.0710678118654755

// Math.sign(x): Devuelve el signo de un número x, que indica si el número es positivo, negativo o cero
console.log(Math.sign(3)); // 1
console.log(Math.sign(-3)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0

// Math.log10(x): Devuelve el logaritmo en base 10 de un número x
console.log(Math.log10(100)); // 2

// Math.fround(x):Devuelve la representación en precisión sencilla (float) más cercana de un número x
console.log(Math.fround(1.337)); // 1.3370000123977661
console.log(Math.fround(0.9)); // 0.8999999761581421

// Math.clz32(x): Devuelve el número de ceros a la izquierda en la representación binaria de un entero de 32 bits
console.log(Math.clz32(1)); // 31
console.log(Math.clz32(1000)); // 22

// Math.log2(x): Devuelve el logaritmo en base 2 de un número x
console.log(Math.log2(8)); // 3

// Math.E: La constante de Euler, la base de los logaritmos naturales
console.log(Math.E); // 2.718281828459045

// Math.LN2: El logaritmo natural de 2
console.log(Math.LN2); // 0.6931471805599453

// Math.LN10: El logaritmo natural de 10
console.log(Math.LN10); // 2.302585092994046

// Math.LOG2E: El logaritmo de E en base 2
console.log(Math.LOG2E); // 1.4426950408889634

// Math.LOG10E: El logaritmo de E en base 10
console.log(Math.LOG10E); // 0.4342944819032518

// Math.PI: La constante PI
console.log(Math.PI); // 3.141592653589793

// Math.SQRT1_2: La raíz cuadrada de 1/2
console.log(Math.SQRT1_2); // 0.7071067811865476

// Math.SQRT2: La raíz cuadrada de 2
console.log(Math.SQRT2); // 1.4142135623730951

// *** Métodos Trigonométricos *** //

// Math.sin(x): Devuelve el seno de x (en radianes)
console.log(Math.sin(Math.PI / 2)); // 1

// Math.cos(x): Devuelve el coseno de x (en radianes)
console.log(Math.cos(Math.PI)); // -1

// Math.tan(x): Devuelve la tangente de x (en radianes)
console.log(Math.tan(Math.PI / 4)); // 1

// *** Métodos Exponenciales y Logarítmicos ***//

// Math.exp(x): Devuelve e elevado a la potencia x
console.log(Math.exp(1)); // 2.718281828459045

// Math.log(x): Devuelve el logaritmo natural (base e) de x
console.log(Math.log(Math.E)); // 1

// Math.pow(x, y): Devuelve x elevado a la potencia y
console.log(Math.pow(2, 3)); // 8

// Math.sqrt(x): Devuelve la raíz cuadrada de x
console.log(Math.sqrt(16)); // 4
