//======================================
// app.js
// Archivo principal que IMPORTA desde matematicas.js
//======================================

// 1. Import de funciones individuales (named imports)
import { sumar, restar } from "./matematicas.js";

console.log("=== IMPORTS INDIVIDUALES ===");
console.log("5 + 3 =", sumar(5, 3));
console.log("10 - 4 =", restar(10, 4));
console.log();

// 2. Import múltiple en una línea
import { multiplicar, dividir, PI } from "./matematicas.js";

console.log("=== IMPORTS MÚLTIPLES ===");
console.log("4 * 7 =", multiplicar(4, 7));
console.log("20 / 5 =", dividir(20, 5));
console.log("Valor de PI:", PI);
console.log();

// 3. Import con alias (renombrar)
import { sumar as suma, restar as resta } from "./matematicas.js";

console.log("=== IMPORTS CON ALIAS ===");
console.log("Con alias suma:", suma(10, 5));
console.log("Con alias resta:", resta(10, 5));
console.log();

// 4. Import de clase
import { Calculadora } from "./matematicas.js";

console.log("=== IMPORT DE CLASE ===");
const calc = new Calculadora();
const resultado = calc.sumar(10).sumar(5).restar(3).obtenerResultado();
console.log("Resultado encadenado:", resultado);
console.log();

// 5. Import con namespace (todo como objeto)
import * as Math from "./matematicas.js";

console.log("=== IMPORT NAMESPACE (TODO) ===");
console.log("Math.sumar(7, 3):", Math.sumar(7, 3));
console.log("Math.PI:", Math.PI);
console.log("Math.potencia(2, 3):", Math.potencia(2, 3));
console.log();

// 6. Import DEFAULT (sin llaves)
import CalculadoraCientifica from "./matematicas.js";

console.log("=== IMPORT DEFAULT ===");
const calcCientifica = new CalculadoraCientifica();
calcCientifica.guardarMemoria(42);
console.log("Memoria:", calcCientifica.obtenerMemoria());
console.log("Factorial de 5:", calcCientifica.factorial(5));
console.log("Logaritmo de 100:", calcCientifica.logaritmo(100));
console.log();

// 7. Import DEFAULT + Named (combinados)
import MiCalculadora, { promedio, raizCuadrada } from "./matematicas.js";

console.log("=== IMPORT DEFAULT + NAMED ===");
const calc2 = new MiCalculadora();
calc2.guardarMemoria(100);

const numeros = [10, 20, 30, 40, 50];
console.log("Promedio de", numeros, "=", promedio(numeros));
console.log("Raíz cuadrada de 16:", raizCuadrada(16));
console.log();

// 8. Ejemplo práctico completo
console.log("=== EJEMPLO PRÁCTICO ===");

function calcularEstadisticas(datos) {
  const suma = datos.reduce((a, b) => a + b, 0);
  const prom = promedio(datos);
  const max = Math.max(...datos);
  const min = Math.min(...datos);

  return {
    suma,
    promedio: prom,
    maximo: max,
    minimo: min,
    cantidad: datos.length,
  };
}

const notas = [8, 7, 9, 10, 6];
const estadisticas = calcularEstadisticas(notas);
console.log("Notas:", notas);
console.log("Estadísticas:", estadisticas);
