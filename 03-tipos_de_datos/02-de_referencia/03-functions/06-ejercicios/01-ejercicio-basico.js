//--------------------------------------------------------------------------------------
// 🎯 EJERCICIOS BÁSICOS DE FUNCIONES
//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
// EJERCICIO 1: ¿Cuál es mayor?
//--------------------------------------------------------------------------------------
// Crea una función que reciba dos números y retorne el mayor

function cualEsMayor(a, b) {
  // Primera forma - con if/else
  /*
  if (a > b) {
    return a;
  } else {
    return b;
  }
  */

  // Segunda forma - operador ternario
  // return (a > b) ? a : b;

  // Tercera forma - usando Math.max() (más simple)
  return Math.max(a, b);
}

let mayor = cualEsMayor(10, 5);
console.log(mayor); // 10

//--------------------------------------------------------------------------------------
// EJERCICIO 2: Saludar persona
//--------------------------------------------------------------------------------------
// Crea una función que reciba un nombre y retorne un saludo

function saludar(nombre) {
  return `¡Hola, ${nombre}!`;
}

console.log(saludar("Carlos")); // ¡Hola, Carlos!

//--------------------------------------------------------------------------------------
// EJERCICIO 3: Calcular área de rectángulo
//--------------------------------------------------------------------------------------
// Crea una función que calcule el área de un rectángulo

function calcularArea(base, altura) {
  return base * altura;
}

console.log(calcularArea(5, 3)); // 15

//--------------------------------------------------------------------------------------
// EJERCICIO 4: Es par o impar
//--------------------------------------------------------------------------------------
// Crea una función que determine si un número es par o impar

function esPar(numero) {
  return numero % 2 === 0;
}

console.log(esPar(4)); // true
console.log(esPar(7)); // false

//--------------------------------------------------------------------------------------
// EJERCICIO 5: Calcular precio con descuento
//--------------------------------------------------------------------------------------
// Crea una función que aplique un descuento a un precio

function aplicarDescuento(precio, descuento = 10) {
  return precio - precio * (descuento / 100);
}

console.log(aplicarDescuento(100, 20)); // 80
console.log(aplicarDescuento(100)); // 90 (descuento por defecto 10%)

//--------------------------------------------------------------------------------------
// EJERCICIO 6: Convertir temperatura
//--------------------------------------------------------------------------------------
// Crea una función que convierta Celsius a Fahrenheit

function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusAFahrenheit(0)); // 32
console.log(celsiusAFahrenheit(100)); // 212

//--------------------------------------------------------------------------------------
// EJERCICIO 7: Calcular promedio
//--------------------------------------------------------------------------------------
// Crea una función que calcule el promedio de un array de números

function calcularPromedio(numeros) {
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  return suma / numeros.length;
}

console.log(calcularPromedio([10, 20, 30, 40])); // 25

//--------------------------------------------------------------------------------------
// EJERCICIO 8: Encontrar el máximo en un array
//--------------------------------------------------------------------------------------
// Crea una función que encuentre el número más grande en un array

function encontrarMaximo(numeros) {
  return Math.max(...numeros);
}

console.log(encontrarMaximo([5, 2, 9, 1, 7])); // 9

//--------------------------------------------------------------------------------------
// EJERCICIO 9: Contar vocales
//--------------------------------------------------------------------------------------
// Crea una función que cuente las vocales en una cadena

function contarVocales(texto) {
  const vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  let contador = 0;

  for (const letra of texto) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

console.log(contarVocales("Hola Mundo")); // 4

//--------------------------------------------------------------------------------------
// EJERCICIO 10: Invertir string
//--------------------------------------------------------------------------------------
// Crea una función que invierta una cadena de texto

function invertirTexto(texto) {
  return texto.split("").reverse().join("");
}

console.log(invertirTexto("JavaScript")); // "tpircSavaJ"

//--------------------------------------------------------------------------------------
// EJERCICIO 11: Capitalizar primera letra
//--------------------------------------------------------------------------------------
// Crea una función que capitalice la primera letra de cada palabra

function capitalizarPalabras(texto) {
  return texto
    .split(" ")
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}

console.log(capitalizarPalabras("hola mundo javascript")); // "Hola Mundo Javascript"

//--------------------------------------------------------------------------------------
// EJERCICIO 12: Verificar palíndromo
//--------------------------------------------------------------------------------------
// Crea una función que verifique si una palabra es un palíndromo

function esPalindromo(palabra) {
  const limpia = palabra.toLowerCase().replace(/\s/g, "");
  return limpia === limpia.split("").reverse().join("");
}

console.log(esPalindromo("anilina")); // true
console.log(esPalindromo("hola")); // false

//--------------------------------------------------------------------------------------
// EJERCICIO 13: Calcular edad
//--------------------------------------------------------------------------------------
// Crea una función que calcule la edad dada una fecha de nacimiento

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
}

console.log(calcularEdad("2000-06-15")); // Edad actual

//--------------------------------------------------------------------------------------
// EJERCICIO 14: Generar números aleatorios
//--------------------------------------------------------------------------------------
// Crea una función que genere un número aleatorio entre min y max

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroAleatorio(1, 10)); // Número entre 1 y 10

//--------------------------------------------------------------------------------------
// EJERCICIO 15: Validar email básico
//--------------------------------------------------------------------------------------
// Crea una función que valide si un string tiene formato de email

function esEmailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

console.log(esEmailValido("test@example.com")); // true
console.log(esEmailValido("test@.com")); // false

console.log(`
╔═══════════════════════════════════════════════════════════╗
║        EJERCICIOS BÁSICOS - COMPLETADOS ✅                ║
╠═══════════════════════════════════════════════════════════╣
║ Ahora practica con:                                       ║
║ • 02-ejercicio-desestructuracion.js                       ║
║ • 03-ejercicios-avanzados.js                              ║
╚═══════════════════════════════════════════════════════════╝
`);
