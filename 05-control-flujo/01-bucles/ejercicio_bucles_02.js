//======================================================================================
// EJERCICIO 02 - ENCONTRAR NÚMERO MAYOR Y MENOR DE UN ARRAY
//======================================================================================

/*
OBJETIVO:
Encontrar el valor máximo y mínimo de un array sin usar Math.max() o Math.min()
y sin ordenar el array (requisito común en entrevistas técnicas).

CONCEPTOS:
  • Iteración de arrays
  • Comparaciones
  • Algoritmo de búsqueda lineal
  • Operador ternario
  • Eficiencia O(n)
*/

console.log("=== EJERCICIO 02: MAYOR Y MENOR ===\n");

const array = [2, 5, 7, 15, -5, -100, 55];

//--------------------------------------------------------------------------------------
// SOLUCIÓN 1: FOR...OF (Original mejorado)
//--------------------------------------------------------------------------------------

console.log("--- Solución 1: for...of (una sola iteración) ---");

function getMenorMayor(arr) {
  // ✅ Inicializar con el primer elemento del array
  let menor = arr[0];
  let mayor = arr[0];

  // Iterar sobre todos los elementos
  for (let numero of arr) {
    // Operador ternario para actualizar menor
    menor = menor < numero ? menor : numero;
    // Operador ternario para actualizar mayor
    mayor = mayor > numero ? numero : mayor;
  }

  return [menor, mayor];
}

const [min, max] = getMenorMayor(array);
console.log(`Array: [${array}]`);
console.log(`Menor: ${min}, Mayor: ${max}`);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 2: FOR TRADICIONAL
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 2: for tradicional ---");

function getMenorMayorFor(arr) {
  let menor = arr[0];
  let mayor = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Empezamos en 1 (ya tenemos arr[0])
    if (arr[i] < menor) {
      menor = arr[i];
    }
    if (arr[i] > mayor) {
      mayor = arr[i];
    }
  }

  return { menor, mayor }; // Retornar como objeto
}

const resultado = getMenorMayorFor(array);
console.log(`Menor: ${resultado.menor}, Mayor: ${resultado.mayor}`);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 3: WHILE
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 3: while ---");

function getMenorMayorWhile(arr) {
  let menor = arr[0];
  let mayor = arr[0];
  let i = 1;

  while (i < arr.length) {
    menor = Math.min(menor, arr[i]); // Usando Math.min
    mayor = Math.max(mayor, arr[i]); // Usando Math.max
    i++;
  }

  return [menor, mayor];
}

const [minWhile, maxWhile] = getMenorMayorWhile(array);
console.log(`Menor: ${minWhile}, Mayor: ${maxWhile}`);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 4: REDUCE (Funcional, avanzado)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 4: reduce (funcional) ---");

function getMenorMayorReduce(arr) {
  return arr.reduce(
    (acc, num) => ({
      menor: num < acc.menor ? num : acc.menor,
      mayor: num > acc.mayor ? num : acc.mayor,
    }),
    { menor: arr[0], mayor: arr[0] }
  );
}

const resultadoReduce = getMenorMayorReduce(array);
console.log(`Menor: ${resultadoReduce.menor}, Mayor: ${resultadoReduce.mayor}`);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 5: MÉTODOS NATIVOS (No recomendado para el ejercicio, pero útil)
//--------------------------------------------------------------------------------------

console.log("\n--- SOLUCIÓN RÁPIDA: Métodos nativos ---");

const menor = Math.min(...array); // Spread operator
const mayor = Math.max(...array);
console.log(`Menor: ${menor}, Mayor: ${mayor}`);

//--------------------------------------------------------------------------------------
// ANÁLISIS DE CASOS ESPECIALES
//--------------------------------------------------------------------------------------

console.log("\n--- CASOS ESPECIALES ---");

// Array con un solo elemento
const arraySolo = [42];
const [minSolo, maxSolo] = getMenorMayor(arraySolo);
console.log(
  `Array de 1 elemento [${arraySolo}]: min=${minSolo}, max=${maxSolo}`
);

// Array con todos iguales
const arrayIguales = [5, 5, 5, 5];
const [minIguales, maxIguales] = getMenorMayor(arrayIguales);
console.log(
  `Array iguales [${arrayIguales}]: min=${minIguales}, max=${maxIguales}`
);

// Array con negativos
const arrayNegativos = [-10, -5, -20, -1];
const [minNeg, maxNeg] = getMenorMayor(arrayNegativos);
console.log(
  `Array negativos [${arrayNegativos}]: min=${minNeg}, max=${maxNeg}`
);

// Array con decimales
const arrayDecimales = [3.5, 1.2, 9.8, 0.1];
const [minDec, maxDec] = getMenorMayor(arrayDecimales);
console.log(
  `Array decimales [${arrayDecimales}]: min=${minDec}, max=${maxDec}`
);

//--------------------------------------------------------------------------------------
// BONUS: ENCONTRAR ÍNDICES TAMBIÉN
//--------------------------------------------------------------------------------------

console.log("\n--- BONUS: Con índices ---");

function getMenorMayorConIndices(arr) {
  let menor = arr[0];
  let mayor = arr[0];
  let indiceMenor = 0;
  let indiceMayor = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i];
      indiceMenor = i;
    }
    if (arr[i] > mayor) {
      mayor = arr[i];
      indiceMayor = i;
    }
  }

  return {
    menor: { valor: menor, indice: indiceMenor },
    mayor: { valor: mayor, indice: indiceMayor },
  };
}

const completo = getMenorMayorConIndices(array);
console.log(
  `Menor: ${completo.menor.valor} en índice ${completo.menor.indice}`
);
console.log(
  `Mayor: ${completo.mayor.valor} en índice ${completo.mayor.indice}`
);

//--------------------------------------------------------------------------------------
// VALIDACIÓN DE ENTRADA
//--------------------------------------------------------------------------------------

console.log("\n--- VALIDACIÓN ---");

function getMenorMayorSeguro(arr) {
  // Validar que el array no esté vacío
  if (!arr || arr.length === 0) {
    throw new Error("El array no puede estar vacío");
  }

  // Validar que todos sean números
  if (!arr.every((item) => typeof item === "number")) {
    throw new Error("Todos los elementos deben ser números");
  }

  let menor = arr[0];
  let mayor = arr[0];

  for (let numero of arr) {
    menor = numero < menor ? numero : menor;
    mayor = numero > mayor ? mayor : mayor;
  }

  return { menor, mayor };
}

// Pruebas de validación
try {
  getMenorMayorSeguro([]); // Error: vacío
} catch (error) {
  console.log(`❌ Error capturado: ${error.message}`);
}

try {
  getMenorMayorSeguro([1, 2, "tres", 4]); // Error: contiene string
} catch (error) {
  console.log(`❌ Error capturado: ${error.message}`);
}

const resultadoSeguro = getMenorMayorSeguro([10, 20, 5, 30]);
console.log(
  `✅ Array válido: min=${resultadoSeguro.menor}, max=${resultadoSeguro.mayor}`
);

//--------------------------------------------------------------------------------------
// ANÁLISIS DE COMPLEJIDAD
//--------------------------------------------------------------------------------------

console.log("\n--- ANÁLISIS DE COMPLEJIDAD ---");

console.log(`
COMPLEJIDAD TEMPORAL Y ESPACIAL:

Todas las soluciones tienen:
  • Complejidad temporal: O(n) - Una pasada por el array
  • Complejidad espacial: O(1) - Solo variables auxiliares

VENTAJAS DE CADA MÉTODO:

1. for...of con operador ternario:
   ✅ Código conciso y legible
   ✅ Evita acceso por índice
   ⚠️ Crea nueva variable en cada iteración

2. for tradicional:
   ✅ Más eficiente (acceso directo por índice)
   ✅ Puede empezar en índice 1 (optimización)

3. while:
   ✅ Flexible para condiciones complejas
   ⚠️ Más verboso

4. reduce:
   ✅ Estilo funcional elegante
   ⚠️ Menos intuitivo para principiantes
   ⚠️ Ligeramente menos eficiente (crea objeto en cada iteración)

5. Math.min/max con spread:
   ✅ Muy conciso (1 línea)
   ⚠️ No es válido para entrevistas técnicas
   ⚠️ Puede causar stack overflow con arrays muy grandes

RECOMENDACIÓN: 
Para entrevistas técnicas, usa la Solución 1 (for...of) o Solución 2 (for tradicional).
Son las más claras y eficientes.
`);

//--------------------------------------------------------------------------------------
// EJERCICIO EXTRA: TOP N VALORES
//--------------------------------------------------------------------------------------

console.log("\n--- EJERCICIO EXTRA: Top 3 mayores y menores ---");

function getTopN(arr, n = 3) {
  // Ordenar sin modificar el original
  const ordenado = [...arr].sort((a, b) => a - b);

  return {
    menores: ordenado.slice(0, n),
    mayores: ordenado.slice(-n).reverse(),
  };
}

const top3 = getTopN(array, 3);
console.log(`Top 3 menores: [${top3.menores}]`);
console.log(`Top 3 mayores: [${top3.mayores}]`);

console.log("\n✅ Ejercicio 02 completado");
