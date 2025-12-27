//======================================================================================
// EJERCICIO 03 - CONTAR NÚMEROS POSITIVOS EN UN ARRAY
//======================================================================================

/*
OBJETIVO:
Contar cuántos números positivos hay en un array (mayores que 0).

CONCEPTOS:
  • Iteración de arrays
  • Contadores
  • Condicionales
  • Diferentes métodos de conteo
*/

console.log("=== EJERCICIO 03: CONTAR POSITIVOS ===\n");

const array = [2, 5, 7, 15, -5, -100, 55];

//--------------------------------------------------------------------------------------
// SOLUCIÓN 1: FOR...OF (Original corregido)
//--------------------------------------------------------------------------------------

console.log("--- Solución 1: for...of ---");

function countPositiveNumbers(arr) {
  let cantidad = 0;

  for (let element of arr) {
    if (element > 0) {
      cantidad++;
    }
  }

  return cantidad;
}

const resultado = countPositiveNumbers(array);
console.log(`Array: [${array}]`);
console.log(`Números positivos: ${resultado}`);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 2: FOR TRADICIONAL
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 2: for tradicional ---");

function countPositiveFor(arr) {
  let contador = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      contador++;
    }
  }

  return contador;
}

console.log(`Números positivos: ${countPositiveFor(array)}`);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 3: WHILE
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 3: while ---");

function countPositiveWhile(arr) {
  let cantidad = 0;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] > 0) cantidad++;
    i++;
  }

  return cantidad;
}

console.log(`Números positivos: ${countPositiveWhile(array)}`);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 4: FOREACH (Método de array)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 4: forEach ---");

function countPositiveForEach(arr) {
  let cantidad = 0;

  arr.forEach((num) => {
    if (num > 0) cantidad++;
  });

  return cantidad;
}

console.log(`Números positivos: ${countPositiveForEach(array)}`);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 5: FILTER (Funcional - Más elegante)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 5: filter (funcional) ---");

function countPositiveFilter(arr) {
  return arr.filter((num) => num > 0).length;
}

console.log(`Números positivos: ${countPositiveFilter(array)}`);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 6: REDUCE (Funcional - Avanzado)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 6: reduce ---");

function countPositiveReduce(arr) {
  return arr.reduce((contador, num) => {
    return num > 0 ? contador + 1 : contador;
  }, 0);
}

console.log(`Números positivos: ${countPositiveReduce(array)}`);

//--------------------------------------------------------------------------------------
// BONUS: CONTAR POSITIVOS, NEGATIVOS Y CEROS
//--------------------------------------------------------------------------------------

console.log("\n--- BONUS: Clasificación completa ---");

function clasificarNumeros(arr) {
  const clasificacion = {
    positivos: 0,
    negativos: 0,
    ceros: 0,
  };

  for (let num of arr) {
    if (num > 0) {
      clasificacion.positivos++;
    } else if (num < 0) {
      clasificacion.negativos++;
    } else {
      clasificacion.ceros++;
    }
  }

  return clasificacion;
}

const arrayConCeros = [2, 5, 0, 7, -5, 0, -100, 55];
const clasificacion = clasificarNumeros(arrayConCeros);
console.log(`Array: [${arrayConCeros}]`);
console.log(`Positivos: ${clasificacion.positivos}`);
console.log(`Negativos: ${clasificacion.negativos}`);
console.log(`Ceros: ${clasificacion.ceros}`);
console.log(
  `Total: ${
    clasificacion.positivos + clasificacion.negativos + clasificacion.ceros
  }`
);

//--------------------------------------------------------------------------------------
// BONUS: CON REDUCE (Versión elegante)
//--------------------------------------------------------------------------------------

console.log("\n--- BONUS: Clasificación con reduce ---");

function clasificarConReduce(arr) {
  return arr.reduce(
    (acc, num) => {
      if (num > 0) acc.positivos++;
      else if (num < 0) acc.negativos++;
      else acc.ceros++;
      return acc;
    },
    { positivos: 0, negativos: 0, ceros: 0 }
  );
}

const clasificacion2 = clasificarConReduce(arrayConCeros);
console.log(
  `Positivos: ${clasificacion2.positivos}, Negativos: ${clasificacion2.negativos}, Ceros: ${clasificacion2.ceros}`
);

//--------------------------------------------------------------------------------------
// EJERCICIO EXTRA: MOSTRAR LOS NÚMEROS POSITIVOS
//--------------------------------------------------------------------------------------

console.log("\n--- EXTRA: Mostrar los positivos ---");

function getPositiveNumbers(arr) {
  const positivos = [];

  for (let num of arr) {
    if (num > 0) {
      positivos.push(num);
    }
  }

  return positivos;
}

const positivos = getPositiveNumbers(array);
console.log(`Números positivos: [${positivos}]`);

// Versión con filter (más concisa)
const positivosFilter = array.filter((num) => num > 0);
console.log(`Con filter: [${positivosFilter}]`);

//--------------------------------------------------------------------------------------
// EJERCICIO EXTRA: PORCENTAJE DE POSITIVOS
//--------------------------------------------------------------------------------------

console.log("\n--- EXTRA: Porcentaje ---");

function calcularPorcentajePositivos(arr) {
  const positivos = arr.filter((num) => num > 0).length;
  const porcentaje = (positivos / arr.length) * 100;

  return {
    cantidad: positivos,
    total: arr.length,
    porcentaje: porcentaje.toFixed(2),
  };
}

const stats = calcularPorcentajePositivos(array);
console.log(
  `${stats.cantidad} de ${stats.total} son positivos (${stats.porcentaje}%)`
);

//--------------------------------------------------------------------------------------
// CASOS DE PRUEBA
//--------------------------------------------------------------------------------------

console.log("\n--- CASOS DE PRUEBA ---");

const casos = [
  { nombre: "Solo positivos", array: [1, 2, 3, 4, 5] },
  { nombre: "Solo negativos", array: [-1, -2, -3, -4, -5] },
  { nombre: "Mixto", array: [1, -2, 3, -4, 5] },
  { nombre: "Con ceros", array: [0, 0, 1, -1, 0] },
  { nombre: "Array vacío", array: [] },
  { nombre: "Un elemento positivo", array: [5] },
  { nombre: "Un elemento negativo", array: [-5] },
];

casos.forEach((caso) => {
  const cantidad = countPositiveNumbers(caso.array);
  console.log(
    `${caso.nombre.padEnd(25)} [${caso.array
      .join(", ")
      .padEnd(20)}] → ${cantidad} positivos`
  );
});

//--------------------------------------------------------------------------------------
// VALIDACIÓN DE ENTRADA
//--------------------------------------------------------------------------------------

console.log("\n--- VALIDACIÓN ---");

function countPositiveSeguro(arr) {
  // Validar que sea un array
  if (!Array.isArray(arr)) {
    throw new Error("El parámetro debe ser un array");
  }

  // Validar que todos sean números
  if (!arr.every((item) => typeof item === "number" && !isNaN(item))) {
    throw new Error("Todos los elementos deben ser números válidos");
  }

  return arr.filter((num) => num > 0).length;
}

// Pruebas de validación
try {
  countPositiveSeguro("no es array");
} catch (error) {
  console.log(`❌ Error: ${error.message}`);
}

try {
  countPositiveSeguro([1, 2, "tres", 4]);
} catch (error) {
  console.log(`❌ Error: ${error.message}`);
}

try {
  countPositiveSeguro([1, 2, NaN, 4]);
} catch (error) {
  console.log(`❌ Error: ${error.message}`);
}

console.log(`✅ Array válido: ${countPositiveSeguro([1, -2, 3])} positivos`);

//--------------------------------------------------------------------------------------
// ANÁLISIS DE RENDIMIENTO
//--------------------------------------------------------------------------------------

console.log("\n--- ANÁLISIS DE COMPLEJIDAD ---");

console.log(`
COMPLEJIDAD:

Todas las soluciones:
  • Temporal: O(n) - Recorren todo el array una vez
  • Espacial: O(1) - Solo usan un contador

VENTAJAS DE CADA MÉTODO:

1. for...of simple:
   ✅ Fácil de leer y entender
   ✅ Buena para principiantes
   
2. for tradicional:
   ✅ Ligeramente más rápido
   ✅ Mayor control (índices)

3. forEach:
   ✅ Método nativo de arrays
   ✅ Código limpio
   ⚠️ No se puede romper con break

4. filter + length:
   ✅ Muy conciso (1 línea)
   ✅ Estilo funcional
   ⚠️ Crea array temporal (más memoria)

5. reduce:
   ✅ Versátil (puede hacer más que solo contar)
   ✅ Estilo funcional puro
   ⚠️ Menos intuitivo para principiantes

RECOMENDACIÓN:
  • Para aprender: for...of (Solución 1)
  • Para código de producción: filter (Solución 5) por su claridad
  • Para entrevistas: for...of o for tradicional
`);

//--------------------------------------------------------------------------------------
// EJERCICIO EXTRA: SUMA DE POSITIVOS
//--------------------------------------------------------------------------------------

console.log("\n--- EXTRA: Suma de positivos ---");

function sumaPositivos(arr) {
  return arr.filter((num) => num > 0).reduce((suma, num) => suma + num, 0);
}

const sumaTotal = sumaPositivos(array);
console.log(`Array: [${array}]`);
console.log(`Suma de positivos: ${sumaTotal}`);

// Versión con un solo reduce
function sumaPositivosReduce(arr) {
  return arr.reduce((suma, num) => {
    return num > 0 ? suma + num : suma;
  }, 0);
}

console.log(`Con reduce único: ${sumaPositivosReduce(array)}`);

//--------------------------------------------------------------------------------------
// EJERCICIO EXTRA: ESTADÍSTICAS COMPLETAS
//--------------------------------------------------------------------------------------

console.log("\n--- EXTRA: Estadísticas completas ---");

function estadisticasCompletas(arr) {
  const positivos = arr.filter((n) => n > 0);
  const negativos = arr.filter((n) => n < 0);

  return {
    cantidadPositivos: positivos.length,
    cantidadNegativos: negativos.length,
    sumaPositivos: positivos.reduce((a, b) => a + b, 0),
    sumaNegativos: negativos.reduce((a, b) => a + b, 0),
    promedioPositivos:
      positivos.length > 0
        ? (positivos.reduce((a, b) => a + b, 0) / positivos.length).toFixed(2)
        : 0,
  };
}

const stats2 = estadisticasCompletas(array);
console.log("Estadísticas:");
console.log(
  `  Positivos: ${stats2.cantidadPositivos} (suma: ${stats2.sumaPositivos}, promedio: ${stats2.promedioPositivos})`
);
console.log(
  `  Negativos: ${stats2.cantidadNegativos} (suma: ${stats2.sumaNegativos})`
);

console.log("\n✅ Ejercicio 03 completado");
