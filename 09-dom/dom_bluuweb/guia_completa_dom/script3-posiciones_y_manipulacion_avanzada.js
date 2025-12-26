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

// ============================================
// SECCIÓN 14: EJEMPLOS PRÁCTICOS DE INTERCAMBIO
// ============================================

console.log("\n" + "=".repeat(60));
console.log("EJEMPLOS PRÁCTICOS - INTERCAMBIO DE ELEMENTOS");
console.log("=".repeat(60));

console.log("\n11. Ejemplo práctico - Insertar entre elementos:\n");

// Crear lista de ejemplo para demostraciones
const listaEjemplo = document.createElement("ul");
listaEjemplo.id = "lista-ejemplo";
listaEjemplo.style.cssText = `
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
`;

// Añadir 5 elementos a la lista
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Elemento ${i}`;
  li.style.margin = "5px 0";
  listaEjemplo.appendChild(li);
}

document.body.appendChild(listaEjemplo);

console.log("  ✅ Lista de ejemplo creada con 5 elementos");

// EJEMPLO 1: Insertar un nuevo elemento entre el 3º y 4º
console.log("\n  EJEMPLO 1: Insertar entre 3º y 4º elemento");

const elementoNuevo = document.createElement("li");
elementoNuevo.textContent = "Elemento NUEVO (entre 3 y 4)";
elementoNuevo.style.cssText = "color: red; font-weight: bold; margin: 5px 0;";

// Obtener referencia al 4º elemento (índice 3)
const cuartoElemento = listaEjemplo.children[3];

// Insertar ANTES del 4º elemento (quedará en posición 4, entre 3 y 4)
listaEjemplo.insertBefore(elementoNuevo, cuartoElemento);

console.log("  ✅ Elemento insertado entre 3º y 4º");
console.log("  Método: insertBefore(nuevo, lista.children[3])");

// ------------------------------------------
// EJEMPLO 2: Intercambiar 2º y 4º elemento
// ------------------------------------------

console.log("\n12. Ejemplo práctico - Intercambiar elementos:\n");

console.log("  EJEMPLO 2: Intercambiar 2º y 4º elemento");
console.log("  Estado inicial:");
Array.from(listaEjemplo.children).forEach((li, i) => {
  console.log(`    [${i}]: ${li.textContent}`);
});

// Crear otra lista para demostrar el intercambio
const listaIntercambio = listaEjemplo.cloneNode(true);
listaIntercambio.id = "lista-intercambio";
listaIntercambio.style.marginTop = "10px";
document.body.appendChild(listaIntercambio);

// MÉTODO 1: Con cloneNode
console.log("\n  MÉTODO 1 - Con cloneNode:");

// Seleccionar elementos a intercambiar
const elem2 = listaIntercambio.children[1]; // 2º elemento (índice 1)
const elem4 = listaIntercambio.children[3]; // 4º elemento (índice 3)

// Clonar ambos elementos
const clon2 = elem2.cloneNode(true);
const clon4 = elem4.cloneNode(true);

// Reemplazar: poner clon4 donde estaba el 2º
listaIntercambio.replaceChild(clon4, elem2);

// Reemplazar: poner clon2 donde estaba el 4º
listaIntercambio.replaceChild(clon2, elem4);

console.log("  ✅ Elementos intercambiados con replaceChild");
console.log("  Estado final:");
Array.from(listaIntercambio.children).forEach((li, i) => {
  console.log(`    [${i}]: ${li.textContent}`);
});

// MÉTODO 2: Con insertBefore (más eficiente)
console.log("\n  MÉTODO 2 - Con insertBefore (sin clonar):");

// Crear tercera lista
const listaIntercambio2 = listaEjemplo.cloneNode(true);
listaIntercambio2.id = "lista-intercambio-2";
listaIntercambio2.style.marginTop = "10px";
document.body.appendChild(listaIntercambio2);

// Seleccionar elementos
const el2 = listaIntercambio2.children[1];
const el4 = listaIntercambio2.children[3];

// Guardar referencia al siguiente del 2º
const despuesDel2 = el2.nextElementSibling;

// Paso 1: Mover el 4º ANTES del 2º
listaIntercambio2.insertBefore(el4, el2);

// Paso 2: Mover el 2º a donde estaba el 4º (antes del que era siguiente del 4º)
listaIntercambio2.insertBefore(el2, despuesDel2);

console.log("  ✅ Elementos intercambiados con insertBefore");
console.log("  Ventaja: No clona, mueve los elementos reales");

// ------------------------------------------
// EJEMPLO 3: Mover 2º entre 3º y 4º
// ------------------------------------------

console.log("\n13. Ejemplo práctico - Mover elemento específico:\n");

console.log("  EJEMPLO 3: Mover 2º elemento entre 3º y 4º");

// Crear cuarta lista
const listaMover = listaEjemplo.cloneNode(true);
listaMover.id = "lista-mover";
listaMover.style.marginTop = "10px";
document.body.appendChild(listaMover);

console.log("  Estado inicial:");
Array.from(listaMover.children).forEach((li, i) => {
  console.log(`    [${i}]: ${li.textContent}`);
});

// Seleccionar el 2º elemento (índice 1)
const elementoAMover = listaMover.children[1];

// Seleccionar el 4º elemento (índice 3) - donde queremos insertar ANTES
const referencia = listaMover.children[3];

// Mover el 2º antes del 4º (quedará entre 3º y 4º)
listaMover.insertBefore(elementoAMover, referencia);

console.log("\n  Estado final:");
Array.from(listaMover.children).forEach((li, i) => {
  console.log(`    [${i}]: ${li.textContent}`);
});

console.log("\n  ✅ Elemento movido exitosamente");
console.log("  Método: insertBefore(children[1], children[3])");

// ALTERNATIVA: Usando nextElementSibling
console.log("\n  ALTERNATIVA - Con nextElementSibling:");

const listaMover2 = listaEjemplo.cloneNode(true);
listaMover2.id = "lista-mover-2";
listaMover2.style.marginTop = "10px";
document.body.appendChild(listaMover2);

const elemento2Lista = listaMover2.children[1]; // 2º elemento
const elemento3Lista = listaMover2.children[2]; // 3º elemento

// Insertar el 2º después del 3º (antes del siguiente del 3º)
listaMover2.insertBefore(elemento2Lista, elemento3Lista.nextElementSibling);

console.log("  ✅ Mismo resultado con nextElementSibling");
console.log(
  "  Método: insertBefore(children[1], children[2].nextElementSibling)"
);

// ------------------------------------------
// FUNCIÓN AUXILIAR: Intercambiar dos elementos
// ------------------------------------------

console.log("\n14. Función reutilizable - Intercambiar:\n");

/**
 * Intercambia la posición de dos elementos hermanos
 * @param {HTMLElement} elemento1 - Primer elemento
 * @param {HTMLElement} elemento2 - Segundo elemento
 */
function intercambiarElementos(elemento1, elemento2) {
  // Validar que tengan el mismo padre
  if (elemento1.parentElement !== elemento2.parentElement) {
    console.error("Los elementos deben tener el mismo padre");
    return;
  }

  // Guardar referencia al siguiente del primer elemento
  const siguiente1 = elemento1.nextElementSibling;

  // Si elemento2 está justo después de elemento1
  if (siguiente1 === elemento2) {
    // Insertar elemento1 después de elemento2
    elemento2.parentElement.insertBefore(
      elemento1,
      elemento2.nextElementSibling
    );
  } else {
    // Mover elemento2 a donde estaba elemento1
    elemento1.parentElement.insertBefore(elemento2, elemento1);

    // Mover elemento1 a donde estaba elemento2
    elemento2.parentElement.insertBefore(elemento1, siguiente1);
  }
}

// Ejemplo de uso
const listaFuncion = listaEjemplo.cloneNode(true);
listaFuncion.id = "lista-funcion";
listaFuncion.style.marginTop = "10px";
document.body.appendChild(listaFuncion);

const el1 = listaFuncion.children[0]; // Primer elemento
const el3 = listaFuncion.children[2]; // Tercer elemento

console.log("  Antes del intercambio:");
console.log(`    [0]: ${listaFuncion.children[0].textContent}`);
console.log(`    [2]: ${listaFuncion.children[2].textContent}`);

intercambiarElementos(el1, el3);

console.log("\n  Después del intercambio:");
console.log(`    [0]: ${listaFuncion.children[0].textContent}`);
console.log(`    [2]: ${listaFuncion.children[2].textContent}`);

console.log("\n  ✅ Función intercambiarElementos() definida");
console.log("  Uso: intercambiarElementos(elem1, elem2)");
