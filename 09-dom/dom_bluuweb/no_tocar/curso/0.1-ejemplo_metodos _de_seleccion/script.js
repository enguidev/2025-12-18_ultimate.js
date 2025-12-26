// ===============================
// ACCEDER A ELEMENTOS POR POSICIÓN
// ===============================

console.log("=".repeat(60));
console.log("ACCEDER A ELEMENTOS POR POSICIÓN");
console.log("=".repeat(60));

// ==========================================
// 1. Acceder por índice [n]
// ==========================================
console.log("\n1. Por índice:");

const parrafos = document.querySelectorAll(".texto");

console.log("Primer elemento [0]:", parrafos[0]);
console.log("Segundo elemento [1]:", parrafos[1]);
console.log("Tercer elemento [2]:", parrafos[2]);
console.log("Último elemento:", parrafos[parrafos.length - 1]);

// Con métodos clásicos
const porClase = document.getElementsByClassName("texto");
console.log("Segundo por clase [1]:", porClase[1]);

// ==========================================
// 2. Con :nth-child() en querySelector
// ==========================================
console.log("\n2. Con :nth-child():");

// Segundo hijo de .container
const segundo = document.querySelector(".container > :nth-child(2)");
console.log("Segundo hijo:", segundo);

// Tercer hijo de .container
const tercero = document.querySelector(".container > :nth-child(3)");
console.log("Tercer hijo:", tercero);

// Primer hijo
const primero = document.querySelector(".container > :first-child");
console.log("Primer hijo:", primero);

// Último hijo
const ultimo = document.querySelector(".container > :last-child");
console.log("Último hijo:", ultimo);

// ==========================================
// 3. Con children (hijos directos)
// ==========================================
console.log("\n3. Con children:");

const container = document.querySelector(".container");

console.log("Primer hijo:", container.children[0]);
console.log("Segundo hijo:", container.children[1]);
console.log("Tercer hijo:", container.children[2]);
console.log("Último hijo:", container.children[container.children.length - 1]);

// También puedes usar:
console.log("Primer hijo (método):", container.firstElementChild);
console.log("Último hijo (método):", container.lastElementChild);

console.log("\n" + "=".repeat(60));
console.log("CREAR Y COPIAR ELEMENTOS");
console.log("=".repeat(60));

// ==========================================
// 4. CREAR un elemento nuevo
// ==========================================
console.log("\n4. Crear elemento:");

// Crear un nuevo párrafo
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Soy un nuevo párrafo";
nuevoParrafo.classList.add("texto");

console.log("Elemento creado:", nuevoParrafo);

// ==========================================
// 5. COPIAR un elemento (cloneNode)
// ==========================================
console.log("\n5. Copiar elemento:");

// Seleccionar el elemento a copiar
const elementoOriginal = document.querySelector(".texto");

// COPIAR sin hijos (solo el elemento)
const copiaSinHijos = elementoOriginal.cloneNode(false);
console.log("Copia sin hijos:", copiaSinHijos);

// COPIAR con hijos (elemento completo)
const copiaCompleta = elementoOriginal.cloneNode(true);
console.log("Copia completa:", copiaCompleta);

console.log("\n" + "=".repeat(60));
console.log("INSERTAR ELEMENTOS EN POSICIONES ESPECÍFICAS");
console.log("=".repeat(60));

// ==========================================
// 6. INSERTAR en posición específica
// ==========================================
console.log("\n6. Insertar en posición:");

const contenedor = document.querySelector(".container");

// OPCIÓN 1: insertBefore (insertar ANTES de un elemento)
// Insertar en la SEGUNDA posición (antes del segundo hijo actual)
const elementoReferencia = contenedor.children[1]; // Segundo hijo
const nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.textContent = "Insertado en 2ª posición";
nuevoParrafo2.classList.add("texto");
contenedor.insertBefore(nuevoParrafo2, elementoReferencia);
console.log("✅ Insertado antes del segundo elemento");

// OPCIÓN 2: Insertar en la TERCERA posición
const tercerHijo2 = contenedor.children[2];
const copiaParaInsertar = copiaCompleta.cloneNode(true);
contenedor.insertBefore(copiaParaInsertar, tercerHijo2);
console.log("✅ Insertado antes del tercer elemento");

// OPCIÓN 3: Insertar al FINAL (appendChild)
const parrafoFinal = document.createElement("p");
parrafoFinal.textContent = "Insertado al final";
parrafoFinal.classList.add("texto");
contenedor.appendChild(parrafoFinal);
console.log("✅ Insertado al final");

// OPCIÓN 4: Insertar al PRINCIPIO (antes del primer hijo)
const parrafoPrincipio = document.createElement("p");
parrafoPrincipio.textContent = "Insertado al principio";
parrafoPrincipio.classList.add("texto");
contenedor.insertBefore(parrafoPrincipio, contenedor.firstElementChild);
console.log("✅ Insertado al principio");

// ==========================================
// 7. MÉTODOS MODERNOS: before, after, prepend, append
// ==========================================
console.log("\n7. Métodos modernos:");

const miDiv = document.querySelector(".container");
const elementoModerno = document.createElement("p");
elementoModerno.textContent = "Elemento con métodos modernos";
elementoModerno.classList.add("texto");

// prepend() - Insertar al PRINCIPIO (primer hijo)
miDiv.prepend(elementoModerno);
console.log("✅ Elemento añadido al principio con prepend()");

// Otros métodos disponibles (comentados para no mover el mismo elemento):
// miDiv.before(elemento);   // Inserta ANTES del div (como hermano)
// miDiv.after(elemento);    // Inserta DESPUÉS del div (como hermano)
// miDiv.append(elemento);   // Inserta al FINAL (último hijo)

console.log("\n" + "=".repeat(60));
console.log("COPIAR Y PEGAR EN POSICIÓN ESPECÍFICA");
console.log("=".repeat(60));

// ==========================================
// 8. COPIAR y PEGAR en tercera posición
// ==========================================
console.log("\n8. Ejemplo completo - COPIAR:");

// Paso 1: Seleccionar el elemento a copiar
const elementoACopiar = document.querySelector(".origen .texto");

// Paso 2: Clonar el elemento
const copia = elementoACopiar.cloneNode(true); // true = con hijos

// Paso 3: Seleccionar el contenedor destino
const destino = document.querySelector(".destino");

// Paso 4: Obtener el tercer hijo (índice 2)
const tercerHijoDestino = destino.children[2];

// Paso 5: Insertar ANTES del tercer hijo (quedará en posición 3)
if (tercerHijoDestino) {
  destino.insertBefore(copia, tercerHijoDestino);
  console.log("✅ Copiado en tercera posición");
} else {
  // Si no hay tercer hijo, insertar al final
  destino.appendChild(copia);
  console.log("✅ Copiado al final (no había 3 elementos)");
}

// ==========================================
// 9. CORTAR y PEGAR en tercera posición
// ==========================================
console.log("\n9. Ejemplo completo - CORTAR:");

// Paso 1: Seleccionar el elemento a cortar
const elementoACortar = document.querySelector(".origen");

// Paso 2: NO SE CLONA, se usa directamente
// (al insertarlo en otro lugar, se MUEVE automáticamente)

// Paso 3: Seleccionar el contenedor destino
const destinoCortar = document.querySelector(".destino");

// Paso 4: Obtener el tercer hijo
const tercerHijo = destinoCortar.children[2];

// Paso 5: Insertar (esto lo MUEVE, no lo copia)
if (tercerHijo) {
  destinoCortar.insertBefore(elementoACortar, tercerHijo);
  console.log("✅ Cortado y pegado en tercera posición");
} else {
  destinoCortar.appendChild(elementoACortar);
  console.log("✅ Cortado y pegado al final");
}

console.log("\n" + "=".repeat(60));
console.log("FUNCIONES ÚTILES REUTILIZABLES");
console.log("=".repeat(60));

// ==========================================
// 10. Funciones reutilizables
// ==========================================

// Función para COPIAR un elemento en posición específica
function copiarEnPosicion(selectorOrigen, selectorDestino, posicion) {
  const origen = document.querySelector(selectorOrigen);
  const destino = document.querySelector(selectorDestino);

  if (!origen || !destino) {
    console.error("❌ Origen o destino no encontrado");
    return;
  }

  // Clonar el elemento
  const copia = origen.cloneNode(true);

  // Si la posición es mayor que los hijos existentes, insertar al final
  if (posicion >= destino.children.length) {
    destino.appendChild(copia);
    console.log(`✅ Copiado al final (posición ${destino.children.length})`);
  } else {
    // Insertar en la posición específica
    destino.insertBefore(copia, destino.children[posicion]);
    console.log(`✅ Copiado en posición ${posicion + 1}`);
  }
}

// Función para CORTAR un elemento en posición específica
function cortarEnPosicion(selectorOrigen, selectorDestino, posicion) {
  const origen = document.querySelector(selectorOrigen);
  const destino = document.querySelector(selectorDestino);

  if (!origen || !destino) {
    console.error("❌ Origen o destino no encontrado");
    return;
  }

  // NO se clona, se mueve directamente
  if (posicion >= destino.children.length) {
    destino.appendChild(origen);
    console.log(
      `✅ Cortado y pegado al final (posición ${destino.children.length})`
    );
  } else {
    destino.insertBefore(origen, destino.children[posicion]);
    console.log(`✅ Cortado y pegado en posición ${posicion + 1}`);
  }
}

// Ejemplo de uso (comentado para no ejecutar automáticamente):
console.log("\n10. Funciones disponibles:");
console.log("  - copiarEnPosicion(selector, destino, posicion)");
console.log("  - cortarEnPosicion(selector, destino, posicion)");
console.log("\nPuedes usarlas desde la consola del navegador.");

// Descomentar para probar:
// copiarEnPosicion(".origen", ".destino", 0); // Copia al principio
// cortarEnPosicion(".container", ".destino", 1); // Corta y pega en 2ª posición

console.log("\n" + "=".repeat(60));
console.log("RESUMEN");
console.log("=".repeat(60));

console.log(`
ACCEDER POR POSICIÓN:
  elementos[0]                    → Primer elemento
  elementos[1]                    → Segundo elemento
  elementos[2]                    → Tercer elemento
  elementos[n]                    → Elemento en posición n+1
  container.children[2]           → Tercer hijo directo
  querySelector(":nth-child(3)")  → Tercer hijo con selector

COPIAR ELEMENTOS:
  elemento.cloneNode(false)       → Copia SIN hijos
  elemento.cloneNode(true)        → Copia CON hijos (completa)

CORTAR ELEMENTOS:
  No se clona, simplemente se inserta (se mueve automáticamente)

INSERTAR EN POSICIÓN:
  insertBefore(nuevo, referencia) → Inserta ANTES de referencia
  appendChild(elemento)           → Inserta al FINAL
  prepend(elemento)               → Inserta al PRINCIPIO
  append(elemento)                → Inserta al FINAL
  before(elemento)                → Inserta ANTES del elemento (hermano)
  after(elemento)                 → Inserta DESPUÉS del elemento (hermano)

DIFERENCIA COPIAR vs CORTAR:
  COPIAR:  cloneNode(true) + insertBefore()
  CORTAR:  insertBefore() directamente (sin clonar)
  
IMPORTANTE:
  - Los índices empiezan en 0
  - insertBefore inserta ANTES del elemento de referencia
  - Si insertas el mismo elemento varias veces, se MUEVE (no se duplica)
  - Para duplicar, usa cloneNode(true) antes de insertar
`);
