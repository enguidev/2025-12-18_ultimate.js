//======================================================================================
// EJERCICIO 04 - CONVERTIR ARRAY DE OBJETOS A ARRAY DE PARES
//======================================================================================

/*
OBJETIVO:
Transformar un array de objetos en un array de pares (tuplas) donde cada par 
contiene [id, objeto].

ENTRADA:  [{ id: 1, nombre: "Cristian" }, { id: 2, nombre: "Carlos" }]
SALIDA:   [[1, { id: 1, nombre: "Cristian" }], [2, { id: 2, nombre: "Carlos" }]]

CONCEPTOS:
  • Transformación de estructuras de datos
  • Arrays bidimensionales (matrices)
  • for...in para acceder a índices
  • Construcción de nuevos arrays
*/

console.log("=== EJERCICIO 04: OBJETOS A PARES ===\n");

const array = [
  { id: 1, nombre: "Cristian" },
  { id: 2, nombre: "Carlos" },
  { id: 3, nombre: "Pedro" },
];

const paresEsperados = [
  [1, { id: 1, nombre: "Cristian" }],
  [2, { id: 2, nombre: "Carlos" }],
  [3, { id: 3, nombre: "Pedro" }],
];

console.log("Array original:");
console.log(array);

console.log("\nResultado esperado:");
console.log(paresEsperados);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 1: FOR...IN (Original corregido)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 1: for...in ---");

function toPairs(arr) {
  const pairs = [];

  for (let idx in arr) {
    const elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }

  return pairs;
}

const result1 = toPairs(array);
console.log("Resultado:");
console.log(result1);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 2: FOR TRADICIONAL
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 2: for tradicional ---");

function toPairsFor(arr) {
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    pairs.push([arr[i].id, arr[i]]);
  }

  return pairs;
}

const result2 = toPairsFor(array);
console.log("Resultado:");
console.log(result2);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 3: FOR...OF
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 3: for...of ---");

function toPairsForOf(arr) {
  const pairs = [];

  for (let elemento of arr) {
    pairs.push([elemento.id, elemento]);
  }

  return pairs;
}

const result3 = toPairsForOf(array);
console.log("Resultado:");
console.log(result3);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 4: MAP (Funcional - Más elegante)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 4: map (funcional) ---");

function toPairsMap(arr) {
  return arr.map((elemento) => [elemento.id, elemento]);
}

const result4 = toPairsMap(array);
console.log("Resultado:");
console.log(result4);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 5: FOREACH
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 5: forEach ---");

function toPairsForEach(arr) {
  const pairs = [];

  arr.forEach((elemento) => {
    pairs.push([elemento.id, elemento]);
  });

  return pairs;
}

const result5 = toPairsForEach(array);
console.log("Resultado:");
console.log(result5);

//--------------------------------------------------------------------------------------
// BONUS: VERSIÓN GENÉRICA (Cualquier propiedad como clave)
//--------------------------------------------------------------------------------------

console.log("\n--- BONUS: Versión genérica ---");

function toPairsGenerico(arr, keyProperty = "id") {
  return arr.map((elemento) => [elemento[keyProperty], elemento]);
}

// Usar con "id"
const pairesConId = toPairsGenerico(array, "id");
console.log("Pares con id:");
console.log(pairesConId);

// Usar con "nombre"
const pairesConNombre = toPairsGenerico(array, "nombre");
console.log("\nPares con nombre:");
console.log(pairesConNombre);

//--------------------------------------------------------------------------------------
// BONUS: CON VALIDACIÓN
//--------------------------------------------------------------------------------------

console.log("\n--- BONUS: Con validación ---");

function toPairsSeguro(arr, keyProperty = "id") {
  // Validar que sea un array
  if (!Array.isArray(arr)) {
    throw new Error("El parámetro debe ser un array");
  }

  // Validar que todos los elementos tengan la propiedad
  const todosTienenPropiedad = arr.every(
    (elemento) =>
      elemento && typeof elemento === "object" && keyProperty in elemento
  );

  if (!todosTienenPropiedad) {
    throw new Error(
      `Todos los elementos deben tener la propiedad "${keyProperty}"`
    );
  }

  return arr.map((elemento) => [elemento[keyProperty], elemento]);
}

// Pruebas de validación
try {
  toPairsSeguro("no es array");
} catch (error) {
  console.log(`❌ Error: ${error.message}`);
}

try {
  toPairsSeguro([{ nombre: "Sin ID" }]);
} catch (error) {
  console.log(`❌ Error: ${error.message}`);
}

const resultadoSeguro = toPairsSeguro(array);
console.log("✅ Array válido transformado correctamente");

//--------------------------------------------------------------------------------------
// EJERCICIO EXTRA: CONVERTIR A OBJETO MAP
//--------------------------------------------------------------------------------------

console.log("\n--- EXTRA: Convertir a Map ---");

function toMap(arr, keyProperty = "id") {
  const mapa = new Map();

  for (let elemento of arr) {
    mapa.set(elemento[keyProperty], elemento);
  }

  return mapa;
}

const mapaResultado = toMap(array);
console.log("Map creado:");
console.log(mapaResultado);

console.log("\nAcceder a elementos del Map:");
console.log("Usuario con id=2:", mapaResultado.get(2));

// Versión con Map constructor (más concisa)
const mapaMap = new Map(toPairsMap(array));
console.log("\nMap con constructor:", mapaMap);

//--------------------------------------------------------------------------------------
// EJERCICIO EXTRA: CONVERTIR A OBJETO LITERAL
//--------------------------------------------------------------------------------------

console.log("\n--- EXTRA: Convertir a objeto literal ---");

function toObject(arr, keyProperty = "id") {
  const objeto = {};

  for (let elemento of arr) {
    objeto[elemento[keyProperty]] = elemento;
  }

  return objeto;
}

const objetoResultado = toObject(array);
console.log("Objeto literal:");
console.log(objetoResultado);

console.log("\nAcceder a elementos del objeto:");
console.log("Usuario con id=1:", objetoResultado[1]);

// Versión con reduce (funcional)
function toObjectReduce(arr, keyProperty = "id") {
  return arr.reduce((obj, elemento) => {
    obj[elemento[keyProperty]] = elemento;
    return obj;
  }, {});
}

const objetoReduce = toObjectReduce(array);
console.log("\nObjeto con reduce:");
console.log(objetoReduce);

//--------------------------------------------------------------------------------------
// CASOS DE PRUEBA
//--------------------------------------------------------------------------------------

console.log("\n--- CASOS DE PRUEBA ---");

const casos = [
  {
    nombre: "Array vacío",
    array: [],
    esperado: [],
  },
  {
    nombre: "Un elemento",
    array: [{ id: 1, nombre: "Solo" }],
    esperado: [[1, { id: 1, nombre: "Solo" }]],
  },
  {
    nombre: "Múltiples propiedades",
    array: [
      { id: 1, nombre: "Ana", edad: 25, ciudad: "Madrid" },
      { id: 2, nombre: "Luis", edad: 30, ciudad: "Barcelona" },
    ],
    esperado: [
      [1, { id: 1, nombre: "Ana", edad: 25, ciudad: "Madrid" }],
      [2, { id: 2, nombre: "Luis", edad: 30, ciudad: "Barcelona" }],
    ],
  },
];

casos.forEach((caso) => {
  console.log(`\nCaso: ${caso.nombre}`);
  const resultado = toPairsMap(caso.array);
  const exito = JSON.stringify(resultado) === JSON.stringify(caso.esperado);
  console.log(exito ? "✅ CORRECTO" : "❌ INCORRECTO");
  console.log("Resultado:", resultado);
});

//--------------------------------------------------------------------------------------
// ANÁLISIS DE COMPLEJIDAD
//--------------------------------------------------------------------------------------

console.log("\n--- ANÁLISIS DE COMPLEJIDAD ---");

console.log(`
COMPLEJIDAD:

Todas las soluciones:
  • Temporal: O(n) - Recorren el array una vez
  • Espacial: O(n) - Crean un nuevo array del mismo tamaño

VENTAJAS DE CADA MÉTODO:

1. for...in:
   ✅ Acceso directo a índices
   ⚠️ Puede iterar propiedades heredadas
   ⚠️ NO recomendado para arrays

2. for tradicional:
   ✅ Control total sobre índices
   ✅ Muy legible

3. for...of:
   ✅ Sintaxis limpia
   ✅ Itera solo valores
   ⚠️ No tienes el índice directamente

4. map:
   ✅✅ RECOMENDADO - El más elegante y conciso
   ✅ Estilo funcional
   ✅ Retorna array automáticamente
   ✅ Inmutable (no modifica el original)

5. forEach:
   ✅ Método nativo
   ⚠️ No retorna nada, necesitas crear array manualmente

RECOMENDACIÓN:
  Usa .map() (Solución 4) - Es la forma más idiomática en JavaScript
  moderno para transformar arrays.
`);

//--------------------------------------------------------------------------------------
// COMPARACIÓN: PARES VS MAP VS OBJETO
//--------------------------------------------------------------------------------------

console.log("\n--- COMPARACIÓN DE ESTRUCTURAS ---");

const pares = toPairsMap(array);
const mapa = toMap(array);
const objeto = toObject(array);

console.log("1. Array de pares:");
console.log("   Estructura:", pares);
console.log("   Búsqueda:", "O(n) - Hay que recorrer");
console.log("   Iterable:", "Sí (con for...of)");
console.log("   Orden:", "Garantizado");

console.log("\n2. Map:");
console.log("   Estructura:", mapa);
console.log("   Búsqueda:", "O(1) - Instantánea");
console.log("   Iterable:", "Sí (con for...of)");
console.log("   Orden:", "Garantizado (orden de inserción)");

console.log("\n3. Objeto literal:");
console.log("   Estructura:", objeto);
console.log("   Búsqueda:", "O(1) - Instantánea");
console.log("   Iterable:", "Con for...in");
console.log("   Orden:", "No garantizado (aunque generalmente sí)");

console.log(`
CUÁNDO USAR CADA UNA:

• Array de pares:
  - Cuando necesites compatibilidad con Map
  - Para serialización JSON
  - Para mantener orden garantizado

• Map:
  - Búsquedas frecuentes por clave
  - Cuando las claves no son strings
  - Necesitas preservar orden de inserción
  - Necesitas métodos como .has(), .delete()

• Objeto literal:
  - Búsquedas frecuentes por clave (string/number)
  - Simplicidad y legibilidad
  - Serialización JSON directa
`);

console.log("\n✅ Ejercicio 04 completado");
