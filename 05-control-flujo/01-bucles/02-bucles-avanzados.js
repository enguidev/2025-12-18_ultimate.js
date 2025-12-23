//======================================================================================
// 02 - MÉTODOS DE ARRAY (ALTERNATIVAS MODERNAS A BUCLES)
//======================================================================================

/*
JavaScript moderno ofrece métodos de array que reemplazan muchos casos de uso 
de bucles tradicionales. Son más expresivos, concisos y menos propensos a errores.

MÉTODOS PRINCIPALES:
  • forEach()  - Ejecutar función en cada elemento (no retorna nada)
  • map()      - Transformar cada elemento (retorna nuevo array)
  • filter()   - Filtrar elementos (retorna nuevo array)
  • reduce()   - Acumular/reducir a un único valor
  • find()     - Encontrar primer elemento que cumple condición
  • findIndex()- Encontrar índice del primer elemento
  • some()     - ¿Alguno cumple la condición? (boolean)
  • every()    - ¿Todos cumplen la condición? (boolean)
  • sort()     - Ordenar array (modifica el original)
  • flat()     - Aplanar arrays anidados
  • flatMap()  - map + flat en un solo paso

VENTAJAS:
  ✅ Más expresivos y declarativos
  ✅ Menos errores (no manejas índices manualmente)
  ✅ Código más corto y legible
  ✅ Estilo funcional (inmutabilidad)
  ✅ Encadenables (chaining)
*/

//======================================================================================
// 1. FOREACH - Ejecutar función en cada elemento
//======================================================================================

console.log("=== 1. FOREACH ===\n");

/*
CARACTERÍSTICAS:
  • NO retorna nada (undefined)
  • NO se puede romper con break
  • Modifica el array original si cambias elementos
  • Alternativa moderna a for...of cuando necesitas el índice
*/

const frutas = ["🍎 Manzana", "🍌 Plátano", "🍊 Naranja"];

// forEach básico
console.log("forEach básico:");
frutas.forEach((fruta) => {
  console.log(fruta);
});

// forEach con índice
console.log("\nforEach con índice:");
frutas.forEach((fruta, indice) => {
  console.log(`${indice}: ${fruta}`);
});

// forEach con array completo (tercer parámetro)
console.log("\nforEach con array completo:");
frutas.forEach((fruta, indice, array) => {
  console.log(`${indice + 1}/${array.length}: ${fruta}`);
});

// ⚠️ forEach NO retorna nada
const resultado = frutas.forEach((f) => f.toUpperCase());
console.log("\nforEach retorna:", resultado); // undefined

// Comparación con for...of
console.log("\nComparación:");
console.log("for...of: Ideal si solo necesitas el valor");
console.log("forEach:  Ideal si necesitas valor + índice");

//======================================================================================
// 2. MAP - Transformar array
//======================================================================================

console.log("\n=== 2. MAP ===\n");

/*
CARACTERÍSTICAS:
  • Retorna un NUEVO array del mismo tamaño
  • NO modifica el array original
  • Cada elemento se transforma con la función
  • Úsalo cuando quieras transformar todos los elementos
*/

const numeros = [1, 2, 3, 4, 5];

// map básico - duplicar valores
const duplicados = numeros.map((n) => n * 2);
console.log("Original:", numeros);
console.log("Duplicados:", duplicados);

// map - elevar al cuadrado
const cuadrados = numeros.map((n) => n ** 2);
console.log("Cuadrados:", cuadrados);

// map con objetos
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "María", edad: 28 },
];

const nombres = usuarios.map((usuario) => usuario.nombre);
console.log("\nSolo nombres:", nombres);

// map - añadir propiedades
const usuariosConId = usuarios.map((usuario, indice) => ({
  id: indice + 1,
  ...usuario,
}));
console.log("\nCon ID:", usuariosConId);

// map vs for tradicional
console.log("\n--- Comparación ---");

// ❌ Con for (más verboso)
const cuadradosFor = [];
for (let i = 0; i < numeros.length; i++) {
  cuadradosFor.push(numeros[i] ** 2);
}

// ✅ Con map (más conciso)
const cuadradosMap = numeros.map((n) => n ** 2);

console.log(
  "Ambos son iguales:",
  JSON.stringify(cuadradosFor) === JSON.stringify(cuadradosMap)
);

//======================================================================================
// 3. FILTER - Filtrar elementos
//======================================================================================

console.log("\n=== 3. FILTER ===\n");

/*
CARACTERÍSTICAS:
  • Retorna un NUEVO array (puede ser más corto)
  • NO modifica el array original
  • Incluye solo elementos que cumplen la condición
  • Si ninguno cumple, retorna array vacío []
*/

const numerosFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar pares
const pares = numerosFilter.filter((n) => n % 2 === 0);
console.log("Pares:", pares);

// Filtrar impares
const impares = numerosFilter.filter((n) => n % 2 !== 0);
console.log("Impares:", impares);

// Filtrar mayores que 5
const mayores = numerosFilter.filter((n) => n > 5);
console.log("Mayores que 5:", mayores);

// Filtrar objetos
const usuariosFilter = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 30 },
  { nombre: "María", edad: 16 },
  { nombre: "Carlos", edad: 25 },
];

const mayoresDeEdad = usuariosFilter.filter((usuario) => usuario.edad >= 18);
console.log("\nMayores de edad:", mayoresDeEdad);

// Filtrar con múltiples condiciones
const adultosMenores30 = usuariosFilter.filter(
  (u) => u.edad >= 18 && u.edad < 30
);
console.log("Adultos menores de 30:", adultosMenores30);

// filter vs for tradicional
console.log("\n--- Comparación ---");

// ❌ Con for (más verboso)
const paresFor = [];
for (let i = 0; i < numerosFilter.length; i++) {
  if (numerosFilter[i] % 2 === 0) {
    paresFor.push(numerosFilter[i]);
  }
}

// ✅ Con filter (más conciso)
const paresFilter = numerosFilter.filter((n) => n % 2 === 0);

console.log(
  "Ambos son iguales:",
  JSON.stringify(paresFor) === JSON.stringify(paresFilter)
);

//======================================================================================
// 4. REDUCE - Reducir a un único valor
//======================================================================================

console.log("\n=== 4. REDUCE ===\n");

/*
CARACTERÍSTICAS:
  • Retorna un ÚNICO valor (puede ser cualquier tipo)
  • Acumulador + valor actual → nuevo acumulador
  • Muy versátil (suma, producto, objetos, arrays, etc.)
  • Requiere valor inicial (segundo parámetro)
*/

const numerosReduce = [1, 2, 3, 4, 5];

// Suma total
const suma = numerosReduce.reduce(
  (acumulador, numero) => acumulador + numero,
  0
);
console.log("Suma:", suma);

// Producto
const producto = numerosReduce.reduce((acc, n) => acc * n, 1);
console.log("Producto:", producto);

// Encontrar el máximo
const maximo = numerosReduce.reduce(
  (max, n) => (n > max ? n : max),
  numerosReduce[0]
);
console.log("Máximo:", maximo);

// Contar ocurrencias
const letras = ["a", "b", "a", "c", "b", "a"];
const conteo = letras.reduce((acc, letra) => {
  acc[letra] = (acc[letra] || 0) + 1;
  return acc;
}, {});
console.log("\nConteo de letras:", conteo);

// Agrupar por propiedad
const productos = [
  { nombre: "Laptop", categoria: "Electrónica", precio: 1000 },
  { nombre: "Mouse", categoria: "Electrónica", precio: 25 },
  { nombre: "Mesa", categoria: "Muebles", precio: 300 },
  { nombre: "Silla", categoria: "Muebles", precio: 150 },
];

const porCategoria = productos.reduce((acc, producto) => {
  const cat = producto.categoria;
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(producto);
  return acc;
}, {});

console.log("\nProductos por categoría:", porCategoria);

// Aplanar array de arrays
const arrayAnidado = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const aplanado = arrayAnidado.reduce((acc, arr) => acc.concat(arr), []);
console.log("\nArray aplanado:", aplanado);

//======================================================================================
// 5. FIND - Encontrar primer elemento
//======================================================================================

console.log("\n=== 5. FIND ===\n");

/*
CARACTERÍSTICAS:
  • Retorna el PRIMER elemento que cumple la condición
  • Si no encuentra nada, retorna undefined
  • Se detiene en cuanto encuentra uno (eficiente)
*/

const numerosBuscar = [5, 12, 8, 130, 44];

const primerMayorQue10 = numerosBuscar.find((n) => n > 10);
console.log("Primer número > 10:", primerMayorQue10);

const primerMayorQue200 = numerosBuscar.find((n) => n > 200);
console.log("Primer número > 200:", primerMayorQue200); // undefined

// Buscar objeto
const usuariosBuscar = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "María" },
];

const usuario = usuariosBuscar.find((u) => u.id === 2);
console.log("\nUsuario con id=2:", usuario);

const noExiste = usuariosBuscar.find((u) => u.id === 99);
console.log("Usuario con id=99:", noExiste); // undefined

//======================================================================================
// 6. FINDINDEX - Encontrar índice
//======================================================================================

console.log("\n=== 6. FINDINDEX ===\n");

/*
CARACTERÍSTICAS:
  • Retorna el ÍNDICE del primer elemento que cumple la condición
  • Si no encuentra, retorna -1
  • Útil cuando necesitas la posición
*/

const indice = numerosBuscar.findIndex((n) => n > 10);
console.log("Índice del primer número > 10:", indice);

const indiceNoExiste = numerosBuscar.findIndex((n) => n > 200);
console.log("Índice de número > 200:", indiceNoExiste); // -1

// Comparación con indexOf
const array = [1, 2, 3, 4, 5];
console.log("\nindexOf(3):", array.indexOf(3)); // Busca valor exacto
console.log(
  "findIndex(n => n > 3):",
  array.findIndex((n) => n > 3)
); // Busca con condición

//======================================================================================
// 7. SOME - ¿Alguno cumple?
//======================================================================================

console.log("\n=== 7. SOME ===\n");

/*
CARACTERÍSTICAS:
  • Retorna true si AL MENOS UNO cumple la condición
  • Retorna false si NINGUNO cumple
  • Se detiene en cuanto encuentra uno (eficiente)
*/

const numerosSome = [1, 2, 3, 4, 5];

const hayPares = numerosSome.some((n) => n % 2 === 0);
console.log("¿Hay algún par?", hayPares); // true

const hayNegativos = numerosSome.some((n) => n < 0);
console.log("¿Hay algún negativo?", hayNegativos); // false

// Con objetos
const usuariosSome = [
  { nombre: "Ana", admin: false },
  { nombre: "Luis", admin: true },
  { nombre: "María", admin: false },
];

const hayAdmin = usuariosSome.some((u) => u.admin);
console.log("\n¿Hay algún admin?", hayAdmin); // true

//======================================================================================
// 8. EVERY - ¿Todos cumplen?
//======================================================================================

console.log("\n=== 8. EVERY ===\n");

/*
CARACTERÍSTICAS:
  • Retorna true si TODOS cumplen la condición
  • Retorna false si AL MENOS UNO no cumple
  • Se detiene en cuanto encuentra uno que no cumple
*/

const numerosEvery = [2, 4, 6, 8, 10];

const todosPares = numerosEvery.every((n) => n % 2 === 0);
console.log("¿Todos son pares?", todosPares); // true

const todosPositivos = numerosEvery.every((n) => n > 0);
console.log("¿Todos son positivos?", todosPositivos); // true

const todosMayoresQue5 = numerosEvery.every((n) => n > 5);
console.log("¿Todos > 5?", todosMayoresQue5); // false

// Validación de formulario
const camposFormulario = [
  { nombre: "email", valido: true },
  { nombre: "password", valido: true },
  { nombre: "edad", valido: false },
];

const formularioValido = camposFormulario.every((campo) => campo.valido);
console.log("\n¿Formulario válido?", formularioValido); // false

//======================================================================================
// 9. SORT - Ordenar array
//======================================================================================

console.log("\n=== 9. SORT ===\n");

/*
CARACTERÍSTICAS:
  • ⚠️ MODIFICA el array original (no crea uno nuevo)
  • Por defecto ordena como strings (⚠️ cuidado con números)
  • Acepta función comparadora para ordenamientos personalizados
*/

// ⚠️ Problema: sort por defecto ordena como strings
const numerosSort = [1, 5, 10, 3, 100, 2];
console.log("Original:", [...numerosSort]);

const malOrdenado = [...numerosSort].sort();
console.log("sort() sin función:", malOrdenado); // [1, 10, 100, 2, 3, 5] ⚠️ Incorrecto

// ✅ Solución: función comparadora
const bienOrdenado = [...numerosSort].sort((a, b) => a - b);
console.log("sort((a,b) => a - b):", bienOrdenado); // [1, 2, 3, 5, 10, 100] ✅ Correcto

// Orden descendente
const descendente = [...numerosSort].sort((a, b) => b - a);
console.log("Descendente:", descendente);

// Ordenar strings
const palabras = ["Zebra", "Manzana", "Banana", "Ana"];
const ordenadas = [...palabras].sort();
console.log("\nPalabras ordenadas:", ordenadas);

// Ordenar objetos
const usuariosSort = [
  { nombre: "Carlos", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 35 },
];

const porEdad = [...usuariosSort].sort((a, b) => a.edad - b.edad);
console.log("\nOrdenados por edad:");
porEdad.forEach((u) => console.log(`  ${u.nombre}: ${u.edad}`));

const porNombre = [...usuariosSort].sort((a, b) =>
  a.nombre.localeCompare(b.nombre)
);
console.log("\nOrdenados por nombre:");
porNombre.forEach((u) => console.log(`  ${u.nombre}: ${u.edad}`));

//======================================================================================
// 10. FLAT Y FLATMAP - Aplanar arrays
//======================================================================================

console.log("\n=== 10. FLAT Y FLATMAP ===\n");

/*
FLAT:
  • Aplana arrays anidados
  • Acepta profundidad (por defecto 1)

FLATMAP:
  • map() + flat() en un solo paso
  • Útil cuando map retorna arrays
*/

// flat básico
const anidado = [1, [2, 3], [4, [5, 6]]];
console.log("Original:", anidado);
console.log("flat():", anidado.flat()); // [1, 2, 3, 4, [5, 6]]
console.log("flat(2):", anidado.flat(2)); // [1, 2, 3, 4, 5, 6]
console.log("flat(Infinity):", anidado.flat(Infinity)); // Aplana todo

// flatMap
const frasesArray = ["Hola mundo", "JavaScript es genial"];

const palabrasMap = frasesArray.map((frase) => frase.split(" "));
console.log("\nmap (arrays anidados):", palabrasMap); // [["Hola", "mundo"], ["JavaScript", "es", "genial"]]

const palabrasFlatMap = frasesArray.flatMap((frase) => frase.split(" "));
console.log("flatMap (aplanado):", palabrasFlatMap); // ["Hola", "mundo", "JavaScript", "es", "genial"]

//======================================================================================
// 11. ENCADENAMIENTO (CHAINING)
//======================================================================================

console.log("\n=== 11. ENCADENAMIENTO ===\n");

/*
Puedes encadenar múltiples métodos para crear pipelines de transformación.
*/

const datosOriginales = [
  { nombre: "Laptop", precio: 1000, categoria: "Electrónica", stock: 5 },
  { nombre: "Mouse", precio: 25, categoria: "Electrónica", stock: 0 },
  { nombre: "Teclado", precio: 75, categoria: "Electrónica", stock: 10 },
  { nombre: "Mesa", precio: 300, categoria: "Muebles", stock: 3 },
  { nombre: "Silla", precio: 150, categoria: "Muebles", stock: 0 },
];

// Pipeline: filtrar → mapear → reducir
const totalElectronicaDisponible = datosOriginales
  .filter((p) => p.categoria === "Electrónica") // Solo electrónica
  .filter((p) => p.stock > 0) // Solo con stock
  .map((p) => p.precio) // Solo precios
  .reduce((sum, precio) => sum + precio, 0); // Sumar

console.log("Total valor electrónica disponible:", totalElectronicaDisponible);

// Ejemplo complejo
const resultado2 = datosOriginales
  .filter((p) => p.stock > 0) // Con stock
  .map((p) => ({ ...p, precioConIVA: p.precio * 1.21 })) // Añadir IVA
  .sort((a, b) => b.precioConIVA - a.precioConIVA) // Ordenar por precio desc
  .slice(0, 3); // Top 3

console.log("\nTop 3 productos más caros con stock:");
resultado2.forEach((p) =>
  console.log(`  ${p.nombre}: €${p.precioConIVA.toFixed(2)}`)
);

//======================================================================================
// 12. COMPARACIÓN Y CUÁNDO USAR CADA UNO
//======================================================================================

console.log("\n=== 12. GUÍA DE USO ===\n");

console.log(`
┌─────────────┬────────────────────────────────────┬──────────────────────┐
│   Método    │          Cuándo usar               │      Retorna         │
├─────────────┼────────────────────────────────────┼──────────────────────┤
│ forEach     │ Ejecutar acción en cada elemento   │ undefined            │
│             │ (console.log, actualizar DOM)      │                      │
│             │                                    │                      │
│ map         │ Transformar cada elemento          │ Array (mismo tamaño) │
│             │ Crear nuevo array                  │                      │
│             │                                    │                      │
│ filter      │ Seleccionar elementos específicos  │ Array (≤ tamaño)     │
│             │ Buscar múltiples elementos         │                      │
│             │                                    │                      │
│ reduce      │ Calcular un único valor            │ Cualquier tipo       │
│             │ (suma, máximo, objeto, etc.)       │                      │
│             │                                    │                      │
│ find        │ Encontrar 1 elemento específico    │ Elemento o undefined │
│             │                                    │                      │
│ findIndex   │ Encontrar posición de elemento     │ Índice o -1          │
│             │                                    │                      │
│ some        │ ¿Existe al menos uno?              │ Boolean              │
│             │ Validación existencial             │                      │
│             │                                    │                      │
│ every       │ ¿Todos cumplen condición?          │ Boolean              │
│             │ Validación universal               │                      │
│             │                                    │                      │
│ sort        │ Ordenar elementos                  │ Array (modificado)   │
│             │ ⚠️ Modifica original               │                      │
└─────────────┴────────────────────────────────────┴──────────────────────┘

VENTAJAS GENERALES:
  ✅ Código más declarativo ("qué hacer" vs "cómo hacerlo")
  ✅ Menos errores de índices
  ✅ Más fácil de leer y mantener
  ✅ Encadenable (chaining)
  ✅ Inmutabilidad (excepto sort)

CUÁNDO USAR BUCLES TRADICIONALES:
  • Necesitas break/continue
  • Bucles anidados complejos
  • Mejor rendimiento crítico
  • Modificar array en el lugar
`);

console.log("\n✅ Métodos de array completados");
