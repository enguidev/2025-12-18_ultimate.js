// 04-spread_en_funciones

/*
🔹 Spread permite expandir los elementos de un array (o iterable) como argumentos individuales
en una llamada a función. Es útil cuando tenemos los valores agrupados y queremos pasarlos
como parámetros separados.
*/

function sumar(a, b, c) {
  return a + b + c;
}

const valores = [1, 2, 3];

// Usamos Spread para expandir los valores del array como argumentos individuales
console.log(sumar(...valores)); // 6

/*
✅ Equivalente a: sumar(1, 2, 3)
🔍 Muy útil cuando trabajamos con funciones que no aceptan arrays directamente.
*/

/*
🔹 Algunas funciones aceptan un número variable de parámetros.
Un ejemplo son las funciones de la clase Math.
En este ejemplo usaremos Math.max, que recibe múltiples argumentos y retorna el mayor.
*/

// Tenemos el array numérico 'numbers'
const numbers = [1, 4, 5];

/*
Si queremos sacar el máximo, tendríamos que pasarle cada valor por separado:
*/
const max = Math.max(numbers[0], numbers[1], numbers[2]);

console.log(`Máximo del array numbers: ${max}`); // Máximo del array numbers: 5

/*
Esto no escala bien si el array tiene muchos elementos.
Por eso usamos Spread:
*/
const numbers2 = [
  1, 3, 9, 5, 27, 5, 10, 15, 36, 69, 101, 325, 2600, 575, 475, 2400,
];

const max2 = Math.max(...numbers2);

console.log(`Máximo del array numbers2: ${max2}`); // Máximo del array numbers2: 2600

/*
🔹 Usarlo en definiciones

Podemos usar el Rest parameter (...args) para capturar argumentos,
y luego aplicar Spread para clonarlos o manipularlos.
*/

function clonar(...args) {
  const copia = [...args];
  console.log(copia);
}
clonar(1, 2, 3); // [1, 2, 3]

/*
✅ En resumen:
- Spread se usa para expandir elementos (en llamadas, arrays, objetos).
- En funciones, permite pasar arrays como argumentos individuales.
- En definiciones, usamos Rest (...args) para capturar argumentos, y podemos aplicar Spread sobre ellos si lo necesitamos.
*/
