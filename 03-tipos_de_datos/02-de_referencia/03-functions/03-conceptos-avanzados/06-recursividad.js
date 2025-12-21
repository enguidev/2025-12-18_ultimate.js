//--------------------------------------------------------------------------------------
// 🎯 RECURSIVIDAD
//--------------------------------------------------------------------------------------
// Una función recursiva es aquella que se llama a sí misma

//--------------------------------------------------------------------------------------
// 1️⃣ ESTRUCTURA BÁSICA
//--------------------------------------------------------------------------------------

function recursiva(n) {
  // 1. CASO BASE: Condición de parada (¡OBLIGATORIO!)
  if (n === 0) {
    return "Terminado";
  }

  // 2. CASO RECURSIVO: Llamada a sí misma
  console.log(n);
  return recursiva(n - 1); // Se acerca al caso base
}

recursiva(3);
// 3
// 2
// 1
// "Terminado"

//--------------------------------------------------------------------------------------
// 2️⃣ FACTORIAL (Ejemplo Clásico)
//--------------------------------------------------------------------------------------

// Factorial de n: n! = n * (n-1) * (n-2) * ... * 1
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
  // Caso base
  if (n <= 1) return 1;

  // Caso recursivo
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

// Visualización del proceso:
// factorial(5)
// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1
// 120

//--------------------------------------------------------------------------------------
// 3️⃣ FIBONACCI
//--------------------------------------------------------------------------------------

// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21...
// F(n) = F(n-1) + F(n-2)

function fibonacci(n) {
  // Casos base
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Caso recursivo
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13
// 0, 1, 1, 2, 3, 5, 8, 13

// ⚠️ Problema: Muy ineficiente (recalcula valores repetidamente)

//--------------------------------------------------------------------------------------
// 4️⃣ FIBONACCI CON MEMOIZATION (Optimizado)
//--------------------------------------------------------------------------------------

function fibonacciMemo(n, memo = {}) {
  // Caso base
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Si ya lo calculamos, usar cache
  if (n in memo) return memo[n];

  // Calcular y guardar en cache
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(40)); // Mucho más rápido

//--------------------------------------------------------------------------------------
// 5️⃣ SUMA DE ARRAY RECURSIVA
//--------------------------------------------------------------------------------------

function sumaArray(arr) {
  // Caso base: array vacío
  if (arr.length === 0) return 0;

  // Caso recursivo: primer elemento + suma del resto
  return arr[0] + sumaArray(arr.slice(1));
}

console.log(sumaArray([1, 2, 3, 4, 5])); // 15

//--------------------------------------------------------------------------------------
// 6️⃣ CUENTA REGRESIVA
//--------------------------------------------------------------------------------------

function cuentaRegresiva(n) {
  // Caso base
  if (n < 0) {
    console.log("¡Despegue! 🚀");
    return;
  }

  // Caso recursivo
  console.log(n);
  cuentaRegresiva(n - 1);
}

cuentaRegresiva(5);

//--------------------------------------------------------------------------------------
// 7️⃣ POTENCIA (x^n)
//--------------------------------------------------------------------------------------

function potencia(base, exponente) {
  // Caso base
  if (exponente === 0) return 1;

  // Caso recursivo
  return base * potencia(base, exponente - 1);
}

console.log(potencia(2, 5)); // 32 (2^5)
console.log(potencia(3, 3)); // 27 (3^3)

//--------------------------------------------------------------------------------------
// 8️⃣ INVERTIR STRING
//--------------------------------------------------------------------------------------

function invertirString(str) {
  // Caso base
  if (str === "") return "";

  // Caso recursivo: última letra + invertir el resto
  return str[str.length - 1] + invertirString(str.slice(0, -1));
}

console.log(invertirString("Hola")); // "aloH"

//--------------------------------------------------------------------------------------
// 9️⃣ BÚSQUEDA BINARIA RECURSIVA
//--------------------------------------------------------------------------------------

function busquedaBinaria(arr, objetivo, inicio = 0, fin = arr.length - 1) {
  // Caso base: no encontrado
  if (inicio > fin) return -1;

  const medio = Math.floor((inicio + fin) / 2);

  // Caso base: encontrado
  if (arr[medio] === objetivo) return medio;

  // Casos recursivos
  if (arr[medio] > objetivo) {
    return busquedaBinaria(arr, objetivo, inicio, medio - 1);
  } else {
    return busquedaBinaria(arr, objetivo, medio + 1, fin);
  }
}

const numeros = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(busquedaBinaria(numeros, 7)); // 3
console.log(busquedaBinaria(numeros, 10)); // -1

//--------------------------------------------------------------------------------------
// 🔟 APLANAR ARRAY ANIDADO
//--------------------------------------------------------------------------------------

function aplanar(arr) {
  let resultado = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      // Caso recursivo: si es array, aplanar recursivamente
      resultado = resultado.concat(aplanar(item));
    } else {
      // Caso base: si no es array, añadir
      resultado.push(item);
    }
  }

  return resultado;
}

const anidado = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]];
console.log(aplanar(anidado)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ RECORRER OBJETO ANIDADO
//--------------------------------------------------------------------------------------

function recorrerObjeto(obj, nivel = 0) {
  for (const key in obj) {
    const espacios = "  ".repeat(nivel);

    if (typeof obj[key] === "object" && obj[key] !== null) {
      console.log(`${espacios}${key}:`);
      recorrerObjeto(obj[key], nivel + 1);
    } else {
      console.log(`${espacios}${key}: ${obj[key]}`);
    }
  }
}

const datos = {
  nombre: "Carlos",
  edad: 25,
  direccion: {
    calle: "Principal",
    numero: 123,
    ciudad: {
      nombre: "Madrid",
      pais: "España",
    },
  },
};

recorrerObjeto(datos);

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ RECURSIVIDAD VS ITERACIÓN
//--------------------------------------------------------------------------------------

// Factorial iterativo
function factorialIterativo(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorialIterativo(5)); // 120

// Comparación:
// Recursivo: Más elegante, pero consume más memoria (stack)
// Iterativo: Más eficiente, pero menos elegante

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ TAIL RECURSION (Recursión de Cola)
//--------------------------------------------------------------------------------------

// Recursión normal (NO tail)
function sumaNormal(n) {
  if (n <= 0) return 0;
  return n + sumaNormal(n - 1); // Operación DESPUÉS de la llamada
}

// Tail recursion (optimizable)
function sumaTail(n, acumulador = 0) {
  if (n <= 0) return acumulador;
  return sumaTail(n - 1, acumulador + n); // Llamada es lo ÚLTIMO
}

console.log(sumaNormal(5)); // 15
console.log(sumaTail(5)); // 15

// ⚠️ JavaScript NO optimiza tail recursion en todos los engines

//--------------------------------------------------------------------------------------
// 1️⃣4️⃣ ERRORES COMUNES
//--------------------------------------------------------------------------------------

// ❌ Error 1: Sin caso base (Stack overflow)
/*
function infinita(n) {
  return infinita(n - 1); // ¡Nunca termina!
}
*/

// ❌ Error 2: Caso base inalcanzable
/*
function mal(n) {
  if (n === 0) return 0;
  return mal(n + 1); // n nunca será 0 si empieza > 0
}
*/

// ❌ Error 3: Múltiples casos base sin cubrir todos
/*
function incompleta(n) {
  if (n === 0) return 0;
  return n + incompleta(n - 1); // ¿Qué pasa si n < 0?
}
*/

//--------------------------------------------------------------------------------------
// 1️⃣5️⃣ CASOS PRÁCTICOS AVANZADOS
//--------------------------------------------------------------------------------------

// Caso 1: Generar permutaciones
function permutaciones(arr) {
  if (arr.length === 0) return [[]];

  const resultado = [];

  for (let i = 0; i < arr.length; i++) {
    const resto = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permsResto = permutaciones(resto);

    for (const perm of permsResto) {
      resultado.push([arr[i], ...perm]);
    }
  }

  return resultado;
}

console.log(permutaciones([1, 2, 3]));
// [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

// Caso 2: Clonar objeto profundo
function cloneProfundo(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => cloneProfundo(item));
  }

  const clon = {};
  for (const key in obj) {
    clon[key] = cloneProfundo(obj[key]);
  }

  return clon;
}

const original = { a: 1, b: { c: 2, d: [3, 4] } };
const copia = cloneProfundo(original);
copia.b.c = 999;
console.log(original.b.c); // 2 (no se modificó)

//--------------------------------------------------------------------------------------
// 1️⃣6️⃣ CUÁNDO USAR RECURSIVIDAD
//--------------------------------------------------------------------------------------

/*
✅ USA RECURSIVIDAD CUANDO:
- El problema se divide naturalmente en subproblemas similares
- Trabajas con estructuras recursivas (árboles, listas enlazadas)
- El código recursivo es más claro que el iterativo
- Performance no es crítica

❌ EVITA RECURSIVIDAD CUANDO:
- Hay muchas llamadas recursivas (stack overflow)
- Performance es crítica
- La versión iterativa es más simple
- No hay optimización de tail recursion
*/

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                  RECURSIVIDAD - RESUMEN                   ║
╠═══════════════════════════════════════════════════════════╣
║ • Función que se llama a sí misma                         ║
║ • Requiere caso base (condición de parada)                ║
║ • Útil para problemas divisibles                          ║
║ • Consume más memoria que iteración                       ║
║ • Ejemplos: factorial, fibonacci, árboles                 ║
╚═══════════════════════════════════════════════════════════╝
`);
