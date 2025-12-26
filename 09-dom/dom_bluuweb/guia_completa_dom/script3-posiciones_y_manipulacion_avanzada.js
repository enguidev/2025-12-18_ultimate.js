// ============================================
// SECCIÓN 9: ACCEDER A ELEMENTOS POR POSICIÓN
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("04 - ACCEDER A ELEMENTOS POR POSICIÓN");
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// 1. Acceder por índice [n]
// ------------------------------------------

console.log("1. Por índice:");

// Seleccionar todos los elementos con clase .texto
const parrafos = document.querySelectorAll(".texto");

// Acceder por índice: los índices empiezan en 0
// [0] = primer elemento, [1] = segundo elemento, etc.
console.log("  Primer elemento [0]:", parrafos[0]);
console.log("  Segundo elemento [1]:", parrafos[1]);
console.log("  Tercer elemento [2]:", parrafos[2]);

// Para obtener el último elemento: length - 1
// length es la cantidad total de elementos
console.log("  Último elemento:", parrafos[parrafos.length - 1]);

// Con métodos clásicos también funciona
const porClasePos = document.getElementsByClassName("texto");
console.log("  Segundo por clase [1]:", porClasePos[1]);

// ------------------------------------------
// 2. Con :nth-child() en querySelector
// ------------------------------------------

console.log("\n2. Con :nth-child():");

// :nth-child(n) selecciona el n-ésimo hijo de un padre
// > indica hijo directo (no nietos ni descendientes más lejanos)

// Seleccionar el segundo hijo directo de .container
const segundo = document.querySelector(".container > :nth-child(2)");
console.log("  Segundo hijo:", segundo);

// Tercer hijo directo
const tercero = document.querySelector(".container > :nth-child(3)");
console.log("  Tercer hijo:", tercero);

// :first-child selecciona el primer hijo
const primero = document.querySelector(".container > :first-child");
console.log("  Primer hijo:", primero);

// :last-child selecciona el último hijo
const ultimo = document.querySelector(".container > :last-child");
console.log("  Último hijo:", ultimo);

// ------------------------------------------
// 3. Con children (hijos directos)
// ------------------------------------------

console.log("\n3. Con children:");

// Seleccionar el contenedor
const containerPos = document.querySelector(".container");

// children devuelve una colección con solo los hijos directos (elementos)
// Acceder a hijos por índice
console.log("  Primer hijo:", containerPos.children[0]);
console.log("  Segundo hijo:", containerPos.children[1]);
console.log("  Tercer hijo:", containerPos.children[2]);

// Último hijo usando length - 1
console.log(
  "  Último hijo:",
  containerPos.children[containerPos.children.length - 1]
);

// También podemos usar propiedades directas
// firstElementChild = primer hijo elemento
console.log("  Primer hijo (propiedad):", containerPos.firstElementChild);

// lastElementChild = último hijo elemento
console.log("  Último hijo (propiedad):", containerPos.lastElementChild);

// ============================================
// SECCIÓN 10: CREAR Y COPIAR ELEMENTOS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CREAR Y COPIAR ELEMENTOS");
console.log("=".repeat(60));

// ------------------------------------------
// 4. CREAR un elemento nuevo
// ------------------------------------------

console.log("\n4. Crear elemento:");

// createElement() crea un nuevo elemento HTML (no está en el DOM todavía)
const nuevoParrafoPos = document.createElement("p");

// textContent establece el contenido de texto
nuevoParrafoPos.textContent = "Soy un nuevo párrafo creado dinámicamente";

// classList.add() añade una clase al elemento
nuevoParrafoPos.classList.add("texto");

// El elemento existe en memoria pero NO está en el DOM hasta que lo insertemos
console.log("  Elemento creado:", nuevoParrafoPos);

// ------------------------------------------
// 5. COPIAR un elemento (cloneNode)
// ------------------------------------------

console.log("\n5. Copiar elemento:");

// Seleccionar el elemento a copiar
const elementoOriginal = document.querySelector(".texto");

// cloneNode(false) = copia superficial (solo el elemento, sin hijos)
const copiaSinHijos = elementoOriginal.cloneNode(false);
console.log("  Copia sin hijos:", copiaSinHijos);

// cloneNode(true) = copia profunda (elemento completo con todos sus hijos)
const copiaCompleta = elementoOriginal.cloneNode(true);
console.log("  Copia completa:", copiaCompleta);

// ============================================
// SECCIÓN 11: INSERTAR EN POSICIONES ESPECÍFICAS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("INSERTAR ELEMENTOS EN POSICIONES ESPECÍFICAS");
console.log("=".repeat(60));

// ------------------------------------------
// 6. INSERTAR en posición específica con insertBefore
// ------------------------------------------

console.log("\n6. Insertar en posición:");

// Seleccionar el contenedor donde insertaremos
const contenedorInsert = document.querySelector(".container");

// OPCIÓN 1: insertBefore(nuevo, referencia)
// Inserta el nuevo elemento ANTES del elemento de referencia

// Para insertar en la SEGUNDA posición, necesitamos el segundo hijo actual
const elementoRef = contenedorInsert.children[1]; // Segundo hijo (índice 1)

// Crear el nuevo elemento
const parrafoNuevo = document.createElement("p");
parrafoNuevo.textContent = "Insertado en segunda posición";
parrafoNuevo.classList.add("texto");

// insertBefore lo inserta ANTES del segundo hijo actual
// Esto empuja al segundo hijo a la tercera posición
contenedorInsert.insertBefore(parrafoNuevo, elementoRef);
console.log("  ✅ Insertado antes del segundo elemento");

// OPCIÓN 2: Insertar en la TERCERA posición
// Obtener el actual tercer hijo (ahora es el índice 2 por la inserción anterior)
const tercerHijo2 = contenedorInsert.children[2];

// Clonar el elemento completo para insertar una copia
const otraCopiaCopy = copiaCompleta.cloneNode(true);

// Insertar antes del tercer hijo
contenedorInsert.insertBefore(otraCopiaCopy, tercerHijo2);
console.log("  ✅ Insertado antes del tercer elemento");

// OPCIÓN 3: appendChild() - Insertar al FINAL
// appendChild añade el elemento como último hijo
const parrafoFinal = document.createElement("p");
parrafoFinal.textContent = "Insertado al final";
parrafoFinal.classList.add("texto");

// Añadir al final
contenedorInsert.appendChild(parrafoFinal);
console.log("  ✅ Insertado al final");

// OPCIÓN 4: Insertar al PRINCIPIO (antes del primer hijo)
const parrafoPrincipio = document.createElement("p");
parrafoPrincipio.textContent = "Insertado al principio";
parrafoPrincipio.classList.add("texto");

// insertBefore con firstElementChild como referencia
// Esto lo coloca antes del primer hijo actual
contenedorInsert.insertBefore(
  parrafoPrincipio,
  contenedorInsert.firstElementChild
);
console.log("  ✅ Insertado al principio");

// ------------------------------------------
// 7. MÉTODOS MODERNOS: before, after, prepend, append
// ------------------------------------------

console.log("\n7. Métodos modernos:");

// Seleccionar un elemento para demostrar
const boxModerno = document.querySelector(".box");

// Crear elementos para demostrar cada método
const elementoBefore = document.createElement("p");
elementoBefore.textContent = "Insertado ANTES de .box (before)";

const elementoAfter = document.createElement("p");
elementoAfter.textContent = "Insertado DESPUÉS de .box (after)";

const elementoPrepend = document.createElement("p");
elementoPrepend.textContent = "Insertado al PRINCIPIO de .box (prepend)";

const elementoAppend = document.createElement("p");
elementoAppend.textContent = "Insertado al FINAL de .box (append)";

// before() - Insertar ANTES del elemento (como hermano anterior)
boxModerno.before(elementoBefore);

// after() - Insertar DESPUÉS del elemento (como hermano siguiente)
boxModerno.after(elementoAfter);

// prepend() - Insertar al PRINCIPIO (como primer hijo)
boxModerno.prepend(elementoPrepend);

// append() - Insertar al FINAL (como último hijo)
boxModerno.append(elementoAppend);

console.log("  ✅ Métodos modernos aplicados");
