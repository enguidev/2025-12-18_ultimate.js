// Mostrar los números impares del 0 al 10

let i = 0;

while (i <= 10) {
  if (i % 2 !== 0) console.log("impar", i);
  i++;
}
//======================================================================================
// EJERCICIO 01 - NÚMEROS IMPARES DEL 0 AL 10
//======================================================================================

/*
OBJETIVO:
Mostrar todos los números impares del 0 al 10 usando diferentes métodos.

CONCEPTOS:
  • Bucles (while, for, for...of)
  • Operador módulo (%) para detectar impares
  • Condicionales
*/

console.log("=== EJERCICIO 01: NÚMEROS IMPARES ===\n");

//--------------------------------------------------------------------------------------
// SOLUCIÓN 1: WHILE (Original del ejercicio)
//--------------------------------------------------------------------------------------

console.log("--- Solución 1: while ---");

let i2 = 0;

while (i2 <= 10) {
  if (i2 % 2 !== 0) {
    console.log("Impar:", i2);
  }
  i++;
}

//--------------------------------------------------------------------------------------
// SOLUCIÓN 2: FOR (Más común)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 2: for ---");

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log("Impar:", i);
  }
}

//--------------------------------------------------------------------------------------
// SOLUCIÓN 3: FOR OPTIMIZADO (Incremento de 2 en 2)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 3: for optimizado ---");

// Empezamos en 1 (primer impar) y saltamos de 2 en 2
for (let i = 1; i <= 10; i += 2) {
  console.log("Impar:", i); // No necesita if
}

//--------------------------------------------------------------------------------------
// SOLUCIÓN 4: WHILE CON CONTINUE (Alternativa)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 4: while con continue ---");

let j = 0;

while (j <= 10) {
  if (j % 2 === 0) {
    // Si es par, saltamos a la siguiente iteración
    j++;
    continue;
  }
  console.log("Impar:", j);
  j++;
}

//--------------------------------------------------------------------------------------
// SOLUCIÓN 5: ARRAY Y FOR...OF (Más moderno)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 5: Array con for...of ---");

// Crear array del 0 al 10
const numeros = Array.from({ length: 11 }, (_, i) => i);

for (let numero of numeros) {
  if (numero % 2 !== 0) {
    console.log("Impar:", numero);
  }
}

//--------------------------------------------------------------------------------------
// SOLUCIÓN 6: MÉTODO FILTER (Funcional)
//--------------------------------------------------------------------------------------

console.log("\n--- Solución 6: filter (funcional) ---");

const numeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = numeros2.filter((n) => n % 2 !== 0);

console.log("Impares:", impares);

//--------------------------------------------------------------------------------------
// BONUS: GUARDAR EN ARRAY
//--------------------------------------------------------------------------------------

console.log("\n--- BONUS: Guardar resultados en array ---");

function obtenerImpares(inicio, fin) {
  const resultado = [];

  for (let i = inicio; i <= fin; i++) {
    if (i % 2 !== 0) {
      resultado.push(i);
    }
  }

  return resultado;
}

const imparesDelRango = obtenerImpares(0, 10);
console.log("Array de impares:", imparesDelRango);

//--------------------------------------------------------------------------------------
// COMPARACIÓN DE RENDIMIENTO
//--------------------------------------------------------------------------------------

console.log("\n--- COMPARACIÓN ---");

console.log(`
VENTAJAS DE CADA MÉTODO:

1. while básico:
   ✅ Claro y fácil de entender
   ⚠️ Requiere más líneas de código

2. for tradicional:
   ✅ Más compacto
   ✅ Todo en una línea (inicialización, condición, incremento)

3. for optimizado (i += 2):
   ✅ Más eficiente (menos iteraciones)
   ✅ No necesita condición if
   ⚠️ Menos obvio para principiantes

4. filter:
   ✅ Código más limpio y funcional
   ✅ Retorna un array directamente
   ⚠️ Puede ser menos eficiente en arrays grandes

RECOMENDACIÓN: 
Para este ejercicio, el for optimizado (i += 2) es la mejor opción.
`);

//--------------------------------------------------------------------------------------
// EJERCICIO EXTRA: PERSONALIZABLE
//--------------------------------------------------------------------------------------

console.log("\n--- EJERCICIO EXTRA ---");

function mostrarImpares(min, max) {
  console.log(`\nImpares entre ${min} y ${max}:`);

  // Encontrar el primer impar
  let inicio = min % 2 === 0 ? min + 1 : min;

  for (let i = inicio; i <= max; i += 2) {
    console.log(i);
  }
}

mostrarImpares(15, 25);
mostrarImpares(1, 20);

console.log("\n✅ Ejercicio 01 completado");
