// ============================================
// SECCIÓN 12: COPIAR Y PEGAR EN POSICIÓN ESPECÍFICA
// ============================================

console.log("\n" + "=".repeat(60));
console.log("COPIAR Y PEGAR EN POSICIÓN ESPECÍFICA");
console.log("=".repeat(60));

// ------------------------------------------
// 8. COPIAR y PEGAR en tercera posición
// ------------------------------------------

console.log("\n8. Ejemplo completo - COPIAR:");

// PASO 1: Seleccionar el elemento a copiar
// Buscamos el párrafo que está dentro de .origen
const elementoACopiar = document.querySelector(".origen .texto");

// PASO 2: Clonar el elemento
// cloneNode(true) crea una copia completa con todos sus hijos
const copiaCopy = elementoACopiar.cloneNode(true);

// PASO 3: Seleccionar el contenedor destino
// Aquí es donde queremos pegar la copia
const destinoCopy = document.querySelector(".destino");

// PASO 4: Obtener el tercer hijo (índice 2)
// Índices: 0 = primero, 1 = segundo, 2 = tercero
const tercerHijoDestino = destinoCopy.children[2];

// PASO 5: Insertar ANTES del tercer hijo
// Si hay un tercer hijo, insertar antes de él (quedará en posición 3)
if (tercerHijoDestino) {
  // insertBefore(nuevo, referencia) inserta el nuevo elemento antes de la referencia
  destinoCopy.insertBefore(copiaCopy, tercerHijoDestino);
  console.log("  ✅ Copiado en tercera posición");
} else {
  // Si no hay tercer hijo (el destino tiene menos de 3 elementos)
  // Insertar al final con appendChild
  destinoCopy.appendChild(copiaCopy);
  console.log("  ✅ Copiado al final (no había 3 elementos)");
}

// ------------------------------------------
// 9. CORTAR y PEGAR en tercera posición
// ------------------------------------------

console.log("\n9. Ejemplo completo - CORTAR:");

// PASO 1: Seleccionar el elemento a cortar
// Seleccionamos el div completo .origen (no solo el párrafo)
const elementoACortar = document.querySelector(".origen");

// PASO 2: NO SE CLONA
// La diferencia con copiar es que NO usamos cloneNode()
// Al insertar el elemento directamente, se MUEVE automáticamente de su ubicación original

// PASO 3: Seleccionar el contenedor destino
const destinoCortar = document.querySelector(".destino");

// PASO 4: Obtener el tercer hijo del destino
// Índice 2 = tercera posición
const tercerHijoCut = destinoCortar.children[2];

// PASO 5: Insertar el elemento (esto lo MUEVE, no lo copia)
if (tercerHijoCut) {
  // insertBefore mueve el elemento si ya existe en el DOM
  destinoCortar.insertBefore(elementoACortar, tercerHijoCut);
  console.log("  ✅ Cortado y pegado en tercera posición");
} else {
  // Si no hay tercer hijo, insertar al final
  destinoCortar.appendChild(elementoACortar);
  console.log("  ✅ Cortado y pegado al final");
}

// NOTA IMPORTANTE:
// La diferencia entre COPIAR y CORTAR:
// - COPIAR: cloneNode(true) + insertBefore() = El original se mantiene
// - CORTAR: insertBefore() directamente = El original desaparece (se mueve)

// ============================================
// SECCIÓN 13: FUNCIONES REUTILIZABLES
// ============================================

console.log("\n" + "=".repeat(60));
console.log("FUNCIONES ÚTILES REUTILIZABLES");
console.log("=".repeat(60));

// ------------------------------------------
// 10. Funciones reutilizables
// ------------------------------------------

/**
 * Copia un elemento en una posición específica de otro contenedor
 *
 * @param {string} selectorOrigen - Selector CSS del elemento a copiar
 * @param {string} selectorDestino - Selector CSS del contenedor destino
 * @param {number} posicion - Posición donde insertar (0 = primera posición)
 *
 * Ejemplo: copiarEnPosicion(".miElemento", ".contenedor", 2)
 * Esto copia .miElemento en la tercera posición (índice 2) de .contenedor
 */
function copiarEnPosicion(selectorOrigen, selectorDestino, posicion) {
  // Seleccionar el elemento origen
  const origen = document.querySelector(selectorOrigen);

  // Seleccionar el contenedor destino
  const destino = document.querySelector(selectorDestino);

  // Validar que ambos elementos existan
  if (!origen || !destino) {
    console.error("❌ Origen o destino no encontrado");
    return;
  }

  // Clonar el elemento (true = copia profunda con todos los hijos)
  const copia = origen.cloneNode(true);

  // Decidir dónde insertar según la posición solicitada
  if (posicion >= destino.children.length) {
    // Si la posición es mayor o igual que el número de hijos
    // Insertar al final
    destino.appendChild(copia);
    console.log(`  ✅ Copiado al final (posición ${destino.children.length})`);
  } else {
    // Si la posición existe, insertar antes de ese hijo
    destino.insertBefore(copia, destino.children[posicion]);
    console.log(`  ✅ Copiado en posición ${posicion + 1}`);
  }
}

/**
 * Corta (mueve) un elemento a una posición específica de otro contenedor
 *
 * @param {string} selectorOrigen - Selector CSS del elemento a cortar
 * @param {string} selectorDestino - Selector CSS del contenedor destino
 * @param {number} posicion - Posición donde insertar (0 = primera posición)
 *
 * Ejemplo: cortarEnPosicion(".miElemento", ".contenedor", 1)
 * Esto mueve .miElemento a la segunda posición (índice 1) de .contenedor
 */
function cortarEnPosicion(selectorOrigen, selectorDestino, posicion) {
  // Seleccionar el elemento a cortar
  const origen = document.querySelector(selectorOrigen);

  // Seleccionar el contenedor destino
  const destino = document.querySelector(selectorDestino);

  // Validar que ambos elementos existan
  if (!origen || !destino) {
    console.error("❌ Origen o destino no encontrado");
    return;
  }

  // NO clonamos, trabajamos directamente con el elemento
  // Al insertarlo, se moverá automáticamente (se "cortará" de su ubicación original)

  if (posicion >= destino.children.length) {
    // Si la posición es mayor, insertar al final
    destino.appendChild(origen);
    console.log(
      `  ✅ Cortado y pegado al final (posición ${destino.children.length})`
    );
  } else {
    // Insertar en la posición específica
    destino.insertBefore(origen, destino.children[posicion]);
    console.log(`  ✅ Cortado y pegado en posición ${posicion + 1}`);
  }
}

// Ejemplos de uso (comentados para no ejecutar automáticamente):
// Puedes descomentar estas líneas para probar las funciones desde la consola

// Copiar el primer .texto en la posición 0 (principio) de .destino
// copiarEnPosicion(".texto", ".destino", 0);

// Cortar .container y pegarlo en posición 1 (segunda) de .destino
// cortarEnPosicion(".container", ".destino", 1);

console.log("\n  Funciones definidas:");
console.log("    - copiarEnPosicion(selector, destino, posicion)");
console.log("    - cortarEnPosicion(selector, destino, posicion)");
console.log("\n  Puedes usarlas desde la consola del navegador (F12)");

// ============================================
// SECCIÓN 14: RESUMEN DE POSICIONES
// ============================================

console.log("\n" + "=".repeat(60));
console.log("RESUMEN - ACCESO Y MANIPULACIÓN POR POSICIÓN");
console.log("=".repeat(60));

console.log(`
ACCEDER POR POSICIÓN:
  elementos[0]                    → Primer elemento (índice 0)
  elementos[1]                    → Segundo elemento (índice 1)
  elementos[2]                    → Tercer elemento (índice 2)
  elementos[n]                    → Elemento en posición n+1
  container.children[2]           → Tercer hijo directo
  querySelector(":nth-child(3)")  → Tercer hijo con selector CSS
  firstElementChild               → Primer hijo
  lastElementChild                → Último hijo

COPIAR ELEMENTOS:
  elemento.cloneNode(false)       → Copia SIN hijos (superficial)
  elemento.cloneNode(true)        → Copia CON hijos (profunda/completa)

CORTAR ELEMENTOS:
  No se clona, simplemente se inserta (se mueve automáticamente)

INSERTAR EN POSICIÓN:
  insertBefore(nuevo, referencia) → Inserta ANTES de referencia
  appendChild(elemento)           → Inserta al FINAL
  prepend(elemento)               → Inserta al PRINCIPIO (primer hijo)
  append(elemento)                → Inserta al FINAL (último hijo)
  before(elemento)                → Inserta ANTES del elemento (hermano)
  after(elemento)                 → Inserta DESPUÉS del elemento (hermano)

DIFERENCIA COPIAR vs CORTAR:
  COPIAR:  elemento.cloneNode(true) + insertBefore()
           → El elemento original permanece en su lugar
  
  CORTAR:  insertBefore() directamente (sin clonar)
           → El elemento original desaparece (se mueve)
  
IMPORTANTE:
  ✓ Los índices empiezan en 0 (primer elemento = [0])
  ✓ insertBefore inserta ANTES del elemento de referencia
  ✓ Si no hay elemento de referencia, usar appendChild
  ✓ Los métodos modernos (before, after, prepend, append) son más legibles
  ✓ Si insertas el mismo elemento varias veces, se MUEVE (no se duplica)
  ✓ Para duplicar, usa cloneNode(true) antes de insertar
`);
