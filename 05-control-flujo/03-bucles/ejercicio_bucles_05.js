//======================================================================================
// EJERCICIO 05 - CONVERTIR ARRAY DE PARES A ARRAY DE OBJETOS
//======================================================================================

/*
OBJETIVO:
Transformar un array de pares (tuplas) en un array de objetos.
Este es el proceso inverso del ejercicio 04.

ENTRADA:  [[1, { id: 1, nombre: "Cristian" }], [2, { id: 2, nombre: "Carlos" }]]
SALIDA:   [{ id: 1, nombre: "Cristian" }, { id: 2, nombre: "Carlos" }]

CONCEPTOS:
  • Transformación inversa de estructuras
  • Destructuring de arrays
  • Acceso a elementos de arrays anidados
  • Construcción de objetos
*/

console.log("=== EJERCICIO 05: PARES A OBJETOS ===\n");

const pares = [
  [1, { id: 1, nombre: "Cristian" }],
  [2, { id: 2, nombre: "Carlos" }],
  [3, { id: 3, nombre: "Pedro" }],
];

const arrayEsperado = [
  { id: 1, nombre: "Cristian" },
  { id: 2, nombre: "Carlos" },
  { id: 3, nombre: "Pedro" },
];

console.log("Array de pares original:");
console.log(pares);

console.log("\nResultado esperado:");
console.log(arrayEsperado);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 1: FOR...IN (Original corregido)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 1: for...in ---");

function toCollection(arr) {
  const collection = [];

  for (let idx in arr) {
    const elemento = arr[idx];
    // elemento[0] es el id, elemento[1] es el objeto
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0]; // Actualizamos el id por si acaso
  }

  return collection;
}

const result1 = toCollection(pares);
console.log("Resultado:");
console.log(result1);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 2: FOR TRADICIONAL
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 2: for tradicional ---");

function toCollectionFor(arr) {
  const collection = [];

  for (let i = 0; i < arr.length; i++) {
    const [id, objeto] = arr[i]; // Destructuring
    collection.push(objeto);
  }

  return collection;
}

const result2 = toCollectionFor(pares);
console.log("Resultado:");
console.log(result2);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 3: FOR...OF
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 3: for...of ---");

function toCollectionForOf(arr) {
  const collection = [];

  for (let par of arr) {
    collection.push(par[1]); // par[1] es el objeto
  }

  return collection;
}

const result3 = toCollectionForOf(pares);
console.log("Resultado:");
console.log(result3);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 4: FOR...OF CON DESTRUCTURING (Más elegante)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 4: for...of con destructuring ---");

function toCollectionDestructuring(arr) {
  const collection = [];

  for (let [id, objeto] of arr) {
    collection.push(objeto);
  }

  return collection;
}

const result4 = toCollectionDestructuring(pares);
console.log("Resultado:");
console.log(result4);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 5: MAP (Funcional - Más elegante)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 5: map (funcional) ---");

function toCollectionMap(arr) {
  return arr.map((par) => par[1]);
}

const result5 = toCollectionMap(pares);
console.log("Resultado:");
console.log(result5);

//--------------------------------------------------------------------------------------
// SOLUCIÓN 6: MAP CON DESTRUCTURING (Súper conciso)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 6: map con destructuring ---");

function toCollectionMapDestructuring(arr) {
  return arr.map(([id, objeto]) => objeto);
}

const result6 = toCollectionMapDestructuring(pares);
console.log("Resultado:");
console.log(result6);

//--------------------------------------------------------------------------------------
// BONUS: VALIDAR QUE EL ID COINCIDA
//--------------------------------------------------------------------------------------

console.log("\n--- BONUS: Validar consistencia de IDs ---");

function toCollectionValidado(arr) {
  return arr.map(([id, objeto]) => {
    if (objeto.id !== id) {
      console.warn(
        `⚠️ Advertencia: ID inconsistente. Par: ${id}, Objeto: ${objeto.id}`
      );
      objeto.id = id; // Sincronizar el ID
    }
    return objeto;
  });
}

// Caso con ID inconsistente
const paresInconsistentes = [
  [1, { id: 1, nombre: "Correcto" }],
  [2, { id: 99, nombre: "Inconsistente" }], // ID no coincide
  [3, { id: 3, nombre: "Correcto" }],
];

console.log("Pares con inconsistencia:");
const resultadoValidado = toCollectionValidado(paresInconsistentes);
console.log("Resultado corregido:");
console.log(resultadoValidado);

//--------------------------------------------------------------------------------------
// BONUS: RECONSTRUIR OBJETOS (Crear nuevos objetos)
//--------------------------------------------------------------------------------------

console.log("\n--- BONUS: Reconstruir objetos completos ---");

function reconstruirObjetos(arr) {
  return arr.map(([id, objeto]) => ({
    id: id,
    ...objeto, // Spread operator para copiar todas las propiedades
  }));
}

const resultadoReconstruido = reconstruirObjetos(pares);
console.log("Objetos reconstruidos:");
console.log(resultadoReconstruido);

//--------------------------------------------------------------------------------------
// BONUS: CON VALIDACIÓN COMPLETA
//--------------------------------------------------------------------------------------

console.log("\n--- BONUS: Con validación completa ---");

function toCollectionSeguro(arr) {
  // Validar que sea un array
  if (!Array.isArray(arr)) {
    throw new Error("El parámetro debe ser un array");
  }

  // Validar que cada elemento sea un par [clave, valor]
  const todosSonPares = arr.every(
    (item) => Array.isArray(item) && item.length === 2
  );

  if (!todosSonPares) {
    throw new Error("Todos los elementos deben ser pares [clave, valor]");
  }

  // Validar que el segundo elemento sea un objeto
  const todosConObjetos = arr.every(
    ([_, objeto]) =>
      objeto && typeof objeto === "object" && !Array.isArray(objeto)
  );

  if (!todosConObjetos) {
    throw new Error("El segundo elemento de cada par debe ser un objeto");
  }

  return arr.map(([id, objeto]) => objeto);
}

// Pruebas de validación
try {
  toCollectionSeguro("no es array");
} catch (error) {
  console.log(`❌ Error: ${error.message}`);
}

try {
  toCollectionSeguro([[1], [2, { id: 2 }]]); // Primer elemento no es par válido
} catch (error) {
  console.log(`❌ Error: ${error.message}`);
}

try {
  toCollectionSeguro([
    [1, "no es objeto"],
    [2, { id: 2 }],
  ]);
} catch (error) {
  console.log(`❌ Error: ${error.message}`);
}

const resultadoSeguro = toCollectionSeguro(pares);
console.log("✅ Array válido transformado correctamente");

//--------------------------------------------------------------------------------------
// EJERCICIO EXTRA: CONVERTIR DESDE MAP
//--------------------------------------------------------------------------------------

console.log("\n--- EXTRA: Convertir desde Map ---");

// Crear un Map a partir de los pares
const mapa = new Map(pares);
console.log("Map original:");
console.log(mapa);

// Convertir Map a array de objetos
function mapToCollection(mapa) {
  const collection = [];

  for (let [id, objeto] of mapa) {
    collection.push(objeto);
  }

  return collection;
}

const desdeMap = mapToCollection(mapa);
console.log("\nArray desde Map:");
console.log(desdeMap);

// Versión con Array.from (más concisa)
const desdeMapCorto = Array.from(mapa.values());
console.log("\nCon Array.from:");
console.log(desdeMapCorto);

//--------------------------------------------------------------------------------------
// EJERCICIO EXTRA: CONVERTIR DESDE OBJECT.ENTRIES
//--------------------------------------------------------------------------------------

console.log("\n--- EXTRA: Convertir desde Object.entries ---");

const objetoLiteral = {
  1: { id: 1, nombre: "Ana" },
  2: { id: 2, nombre: "Luis" },
  3: { id: 3, nombre: "María" },
};

console.log("Objeto literal:");
console.log(objetoLiteral);

// Object.entries convierte objeto a array de pares
const entries = Object.entries(objetoLiteral);
console.log("\nObject.entries:");
console.log(entries);

// Convertir a array de objetos
const desdeEntries = entries.map(([id, objeto]) => objeto);
console.log("\nArray de objetos:");
console.log(desdeEntries);

// Directamente con Object.values (más simple)
const conValues = Object.values(objetoLiteral);
console.log("\nCon Object.values (directo):");
console.log(conValues);

//--------------------------------------------------------------------------------------
// CASOS DE PRUEBA
//--------------------------------------------------------------------------------------

console.log("\n--- CASOS DE PRUEBA ---");

const casos = [
  {
    nombre: "Array vacío",
    input: [],
    esperado: [],
  },
  {
    nombre: "Un par",
    input: [[1, { id: 1, nombre: "Solo" }]],
    esperado: [{ id: 1, nombre: "Solo" }],
  },
  {
    nombre: "Objetos complejos",
    input: [
      [1, { id: 1, nombre: "Ana", edad: 25, hobbies: ["leer", "nadar"] }],
      [2, { id: 2, nombre: "Luis", edad: 30, hobbies: ["correr"] }],
    ],
    esperado: [
      { id: 1, nombre: "Ana", edad: 25, hobbies: ["leer", "nadar"] },
      { id: 2, nombre: "Luis", edad: 30, hobbies: ["correr"] },
    ],
  },
];

casos.forEach((caso) => {
  console.log(`\nCaso: ${caso.nombre}`);
  const resultado = toCollectionMap(caso.input);
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
   ⚠️ NO recomendado para arrays
   ⚠️ Puede tener comportamiento inesperado

2. for tradicional:
   ✅ Control total
   ✅ Permite destructuring

3. for...of simple:
   ✅ Sintaxis limpia
   ✅ Fácil acceso a elementos

4. for...of con destructuring:
   ✅✅ Muy legible
   ✅ Extrae id y objeto directamente
   ✅ RECOMENDADO para bucles

5. map simple:
   ✅✅ Conciso
   ✅ Estilo funcional
   ✅ RECOMENDADO

6. map con destructuring:
   ✅✅✅ EL MEJOR - Más conciso y elegante
   ✅ Una línea de código
   ✅ Muy idiomático en JavaScript moderno

RECOMENDACIÓN:
  Usa .map() con destructuring (Solución 6):
  
  const objetos = pares.map(([id, objeto]) => objeto);
  
  Es la forma más corta, clara y moderna.
`);

//--------------------------------------------------------------------------------------
// CICLO COMPLETO: OBJETOS → PARES → OBJETOS
//--------------------------------------------------------------------------------------

console.log("\n--- CICLO COMPLETO ---");

// Función del ejercicio 04
function toPairs(arr) {
  return arr.map((elemento) => [elemento.id, elemento]);
}

const objetosOriginales = [
  { id: 1, nombre: "Ana", edad: 25 },
  { id: 2, nombre: "Luis", edad: 30 },
];

console.log("1. Objetos originales:");
console.log(objetosOriginales);

const convertidoAPares = toPairs(objetosOriginales);
console.log("\n2. Convertido a pares:");
console.log(convertidoAPares);

const devueltaAObjetos = toCollectionMap(convertidoAPares);
console.log("\n3. Devuelto a objetos:");
console.log(devueltaAObjetos);

// Verificar que son iguales
const sonIguales =
  JSON.stringify(objetosOriginales) === JSON.stringify(devueltaAObjetos);
console.log(`\n¿Son iguales? ${sonIguales ? "✅ SÍ" : "❌ NO"}`);

//--------------------------------------------------------------------------------------
// USOS PRÁCTICOS
//--------------------------------------------------------------------------------------

console.log("\n--- USOS PRÁCTICOS ---");

console.log(`
CUÁNDO USAR ESTA TRANSFORMACIÓN:

1. Deserialización:
   - Convertir datos de API/Base de datos
   - Restaurar objetos desde formato de transporte

2. Trabajar con Map:
   - Extraer valores de un Map
   - Convertir Map a array para operaciones

3. Object.entries:
   - Procesar objetos como arrays
   - Filtrar/transformar propiedades de objetos

4. Limpieza de datos:
   - Extraer solo los objetos sin las claves
   - Normalizar estructuras de datos

EJEMPLO REAL:
  // API devuelve pares [id, usuario]
  const usuariosAPI = [[1, {nombre: "Ana"}], [2, {nombre: "Luis"}]];
  
  // Convertir a array simple para mostrar en UI
  const usuarios = usuariosAPI.map(([id, usuario]) => usuario);
  
  // Ahora puedes usar usuarios.forEach(), .filter(), etc.
`);

console.log("\n✅ Ejercicio 05 completado");
