//--------------------------------------------------------------------------------------
// EJERCICIO: Crear array de longitud N con números del 1 hasta N
//--------------------------------------------------------------------------------------

/*
🎯 OBJETIVO: Crear una función que genere un array de N elementos con números del 1 al N

Ejemplo:
  crearArray(5) → [1, 2, 3, 4, 5]
  crearArray(3) → [1, 2, 3]
*/

//--------------------------------------------------------------------------------------
// ✅ SOLUCIÓN 1: Tu versión original (con bucle for tradicional)
//--------------------------------------------------------------------------------------
function crearArray(n) {
  if (n <= 0) return [];
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

let resultado = crearArray(7);
console.log("Solución 1 (for tradicional):", resultado);
// [1, 2, 3, 4, 5, 6, 7]

//--------------------------------------------------------------------------------------
// ✅ SOLUCIÓN 2: Con Array.from() - RECOMENDADA (más moderna y legible)
//--------------------------------------------------------------------------------------
function crearArray2(n) {
  if (n <= 0) return [];
  return Array.from({ length: n }, (_, i) => i + 1);
}

console.log("Solución 2 (Array.from):", crearArray2(7));
// [1, 2, 3, 4, 5, 6, 7]

/*
📝 Explicación:
  - Array.from({ length: n }) crea un array de longitud n
  - El segundo parámetro es una función de mapeo
  - (_, i) => i + 1 transforma cada índice en el valor deseado
  - El _ indica que no usamos el primer parámetro (valor undefined)
*/

//--------------------------------------------------------------------------------------
// ✅ SOLUCIÓN 3: Con spread operator y keys()
//--------------------------------------------------------------------------------------
function crearArray3(n) {
  if (n <= 0) return [];
  return [...Array(n).keys()].map((i) => i + 1);
}

console.log("Solución 3 (spread + keys):", crearArray3(7));
// [1, 2, 3, 4, 5, 6, 7]

/*
📝 Explicación:
  - Array(n) crea un array vacío de longitud n
  - .keys() devuelve un iterador con los índices [0, 1, 2, ...]
  - [...] convierte el iterador en array
  - .map(i => i + 1) suma 1 a cada índice
*/

//--------------------------------------------------------------------------------------
// ✅ SOLUCIÓN 4: Con fill() y map()
//--------------------------------------------------------------------------------------
function crearArray4(n) {
  if (n <= 0) return [];
  return Array(n)
    .fill(0)
    .map((_, i) => i + 1);
}

console.log("Solución 4 (fill + map):", crearArray4(7));
// [1, 2, 3, 4, 5, 6, 7]

/*
📝 Explicación:
  - Array(n).fill(0) crea array [0, 0, 0, ...] de longitud n
  - .map((_, i) => i + 1) transforma cada posición en i + 1
  - Necesitamos fill() porque Array(n) crea huecos vacíos que map() ignora
*/

//--------------------------------------------------------------------------------------
// ✅ SOLUCIÓN 5: Recursiva (solo académica, no recomendada en producción)
//--------------------------------------------------------------------------------------
function crearArrayRecursivo(n, arr = []) {
  if (n <= 0) return arr;
  return crearArrayRecursivo(n - 1, [n, ...arr]);
}

console.log("Solución 5 (recursiva):", crearArrayRecursivo(7));
// [1, 2, 3, 4, 5, 6, 7]

//--------------------------------------------------------------------------------------
// 📊 COMPARATIVA DE RENDIMIENTO
//--------------------------------------------------------------------------------------
console.log("\n--- COMPARATIVA DE RENDIMIENTO ---");

function medirTiempo(fn, n, nombre) {
  const inicio = performance.now();
  fn(n);
  const fin = performance.now();
  console.log(`${nombre}: ${(fin - inicio).toFixed(4)}ms`);
}

const N = 100000; // 100,000 elementos

medirTiempo(crearArray, N, "for tradicional    ");
medirTiempo(crearArray2, N, "Array.from()       ");
medirTiempo(crearArray3, N, "spread + keys()    ");
medirTiempo(crearArray4, N, "fill() + map()     ");

/*
Resultados típicos (varían según el entorno):
  for tradicional    : ~2-3ms  ⚡ (más rápido)
  Array.from()       : ~3-4ms  ⚡ (rápido y legible)
  spread + keys()    : ~5-6ms  
  fill() + map()     : ~6-8ms
  
🏆 RECOMENDACIÓN: Array.from() - Buen equilibrio entre legibilidad y rendimiento
*/

//--------------------------------------------------------------------------------------
// 🎯 VARIANTES DEL EJERCICIO
//--------------------------------------------------------------------------------------

// Variante 1: Números del 0 al N-1
function crearArrayDesde0(n) {
  return Array.from({ length: n }, (_, i) => i);
}
console.log("\nDesde 0:", crearArrayDesde0(5)); // [0, 1, 2, 3, 4]

// Variante 2: Números pares del 2 al 2N
function crearArrayPares(n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * 2);
}
console.log("Pares:", crearArrayPares(5)); // [2, 4, 6, 8, 10]

// Variante 3: Números impares del 1 al 2N-1
function crearArrayImpares(n) {
  return Array.from({ length: n }, (_, i) => i * 2 + 1);
}
console.log("Impares:", crearArrayImpares(5)); // [1, 3, 5, 7, 9]

// Variante 4: Rango personalizado (desde start hasta end)
function crearRango(start, end) {
  if (start > end) return [];
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}
console.log("Rango 5-10:", crearRango(5, 10)); // [5, 6, 7, 8, 9, 10]
console.log("Rango -3 a 3:", crearRango(-3, 3)); // [-3, -2, -1, 0, 1, 2, 3]

// Variante 5: Con paso (step)
function crearRangoConPaso(start, end, step = 1) {
  if (start > end || step <= 0) return [];
  const arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}
console.log("0 a 20 (paso 5):", crearRangoConPaso(0, 20, 5)); // [0, 5, 10, 15, 20]

// Variante 6: Array de potencias de 2
function crearArrayPotencias(n) {
  return Array.from({ length: n }, (_, i) => Math.pow(2, i));
}
console.log("Potencias de 2:", crearArrayPotencias(8));
// [1, 2, 4, 8, 16, 32, 64, 128]

// Variante 7: Array de factoriales
function crearArrayFactoriales(n) {
  let factorial = 1;
  return Array.from({ length: n }, (_, i) => {
    if (i === 0) return 1;
    factorial *= i;
    return factorial;
  });
}
console.log("Factoriales:", crearArrayFactoriales(6));
// [1, 1, 2, 6, 24, 120]

// Variante 8: Fibonacci
function crearArrayFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log("Fibonacci:", crearArrayFibonacci(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//--------------------------------------------------------------------------------------
// 🧪 EJERCICIOS PROPUESTOS (para practicar)
//--------------------------------------------------------------------------------------
/*
1. Crear array con múltiplos de un número
   crearMultiplos(5, 3) → [5, 10, 15]

2. Crear array de números aleatorios
   crearAleatorios(5, 1, 100) → [23, 67, 12, 89, 45]

3. Crear array con caracteres del alfabeto
   crearAlfabeto(5) → ['a', 'b', 'c', 'd', 'e']

4. Crear array de fechas (N días desde hoy)
   crearFechas(7) → [fecha_hoy, fecha_hoy+1, ...]

5. Crear array con objetos numerados
   crearObjetos(3) → [{id: 1}, {id: 2}, {id: 3}]
*/

//--------------------------------------------------------------------------------------
// 💡 SOLUCIONES A LOS EJERCICIOS PROPUESTOS
//--------------------------------------------------------------------------------------

// 1. Múltiplos de un número
function crearMultiplos(multiplo, cantidad) {
  return Array.from({ length: cantidad }, (_, i) => multiplo * (i + 1));
}
console.log("\nMúltiplos de 5:", crearMultiplos(5, 6)); // [5, 10, 15, 20, 25, 30]

// 2. Números aleatorios
function crearAleatorios(cantidad, min, max) {
  return Array.from(
    { length: cantidad },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}
console.log("Aleatorios:", crearAleatorios(5, 1, 100));

// 3. Caracteres del alfabeto
function crearAlfabeto(n) {
  return Array.from(
    { length: n },
    (_, i) => String.fromCharCode(97 + i) // 97 es el código ASCII de 'a'
  );
}
console.log("Alfabeto:", crearAlfabeto(10));
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// 4. Fechas consecutivas
function crearFechas(dias) {
  const hoy = new Date();
  return Array.from({ length: dias }, (_, i) => {
    const fecha = new Date(hoy);
    fecha.setDate(hoy.getDate() + i);
    return fecha.toISOString().split("T")[0];
  });
}
console.log("Próximos 7 días:", crearFechas(7));

// 5. Objetos numerados
function crearObjetos(n) {
  return Array.from({ length: n }, (_, i) => ({ id: i + 1 }));
}
console.log("Objetos:", crearObjetos(3));
// [{ id: 1 }, { id: 2 }, { id: 3 }]

//--------------------------------------------------------------------------------------
// 🎓 RESUMEN Y RECOMENDACIONES
//--------------------------------------------------------------------------------------
/*
✅ MEJOR OPCIÓN para el ejercicio básico:
   Array.from({ length: n }, (_, i) => i + 1)
   
   Razones:
   - Legible y declarativa
   - Buen rendimiento
   - Código moderno (ES6+)
   - Flexible para variantes

⚠️ CUÁNDO USAR CADA SOLUCIÓN:
   - for tradicional: Cuando necesitas máximo rendimiento
   - Array.from(): Uso general (RECOMENDADO)
   - spread + keys(): Cuando ya trabajas con iteradores
   - fill() + map(): Raramente (menos eficiente)
   - Recursiva: Solo para aprendizaje/entrevistas

🚀 SIGUIENTE PASO:
   Practica las variantes y ejercicios propuestos para dominar la creación
   dinámica de arrays con diferentes patrones.
*/
