//======================================
// matematicas.js
// Archivo con funciones matemáticas
//======================================

// Named exports (exportaciones con nombre)
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  if (b === 0) throw new Error("División por cero");
  return a / b;
}

// Exportar constantes
export const PI = 3.14159;
export const E = 2.71828;

// Exportar una clase
export class Calculadora {
  constructor() {
    this.resultado = 0;
  }

  sumar(n) {
    this.resultado += n;
    return this;
  }

  restar(n) {
    this.resultado -= n;
    return this;
  }

  obtenerResultado() {
    return this.resultado;
  }

  reiniciar() {
    this.resultado = 0;
    return this;
  }
}

// Funciones que se exportan agrupadas al final
function potencia(base, exponente) {
  return base ** exponente;
}

function raizCuadrada(n) {
  return Math.sqrt(n);
}

// Exportar múltiples juntas
export { potencia, raizCuadrada };

// Export con alias
function calcularPromedio(numeros) {
  return numeros.reduce((a, b) => a + b, 0) / numeros.length;
}

export { calcularPromedio as promedio };

// ⭐ EXPORT DEFAULT - Solo UNO por archivo
// Esta es la exportación principal del módulo
export default class CalculadoraCientifica {
  constructor() {
    this.memoria = 0;
  }

  guardarMemoria(valor) {
    this.memoria = valor;
    console.log(`Guardado en memoria: ${valor}`);
  }

  obtenerMemoria() {
    return this.memoria;
  }

  factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * this.factorial(n - 1);
  }

  logaritmo(n, base = 10) {
    return Math.log(n) / Math.log(base);
  }
}
