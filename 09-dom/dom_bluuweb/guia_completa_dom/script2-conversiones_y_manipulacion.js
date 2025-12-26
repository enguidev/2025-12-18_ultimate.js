// ============================================
// SECCIÓN 7: CONVERSIONES Y UTILIDADES
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CONVERSIONES Y UTILIDADES");
console.log("=".repeat(60));

// ------------------------------------------
// 10. Convertir colecciones a Arrays
// ------------------------------------------

console.log("\n10. Conversión a Array:");

// Obtener una HTMLCollection (por ejemplo, con getElementsByClassName)
const htmlCollection = document.getElementsByClassName("text-danger");

// OPCIÓN 1: Array.from() - Método moderno y recomendado
// Array.from() crea un nuevo array a partir de un objeto iterable
const array1 = Array.from(htmlCollection);
console.log("  Con Array.from():", array1);

// OPCIÓN 2: Spread operator (...) - Sintaxis más corta
// El operador spread expande la colección en elementos individuales
const array2 = [...htmlCollection];
console.log("  Con spread (...):", array2);

// OPCIÓN 3: Array.prototype.slice.call() - Método antiguo pero funcional
// Toma prestado el método slice de Array y lo aplica a la colección
const array3 = Array.prototype.slice.call(htmlCollection);
console.log("  Con slice.call():", array3);

// Una vez convertido a array, podemos usar métodos de array

// forEach: Iterar sobre cada elemento
console.log("\n  Iterando con forEach:");
// forEach ejecuta una función para cada elemento del array
array1.forEach((el) => console.log("    Texto:", el.textContent));

// filter: Filtrar elementos que cumplan una condición
// filter devuelve un nuevo array con solo los elementos que pasen el test
const filtrados = array1.filter((el) => el.classList.contains("text-warning"));
console.log("  Filtrados (con text-warning):", filtrados);

// ------------------------------------------
// 11. HTMLCollection vs NodeList
// ------------------------------------------

console.log("\n11. HTMLCollection vs NodeList:");

// HTMLCollection: Retornada por getElementsByClassName, getElementsByTagName
// Es una colección "live" (se actualiza automáticamente si cambia el DOM)
const htmlCol = document.getElementsByClassName("text-danger");
console.log("  HTMLCollection:", htmlCol);

// NodeList: Retornada por querySelectorAll
// Es "static" (no se actualiza si cambia el DOM después de crearla)
const nodeList = document.querySelectorAll(".text-danger");
console.log("  NodeList:", nodeList);

// DIFERENCIA CLAVE:
// HTMLCollection es "live" (dinámica)
// NodeList de querySelectorAll es "static" (estática)

// Verificar si tienen el método forEach
// HTMLCollection NO tiene forEach (devuelve undefined)
console.log("  HTMLCollection tiene forEach:", typeof htmlCol.forEach);

// NodeList SÍ tiene forEach (devuelve "function")
console.log("  NodeList tiene forEach:", typeof nodeList.forEach);

// Demostración: NodeList puede usar forEach directamente
console.log("\n  Iterando NodeList con forEach:");
nodeList.forEach((el) => console.log("    Elemento:", el.tagName));

// ============================================
// SECCIÓN 8: MÉTODOS DE MANIPULACIÓN DEL DOM
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("03 - MÉTODOS PARA CREAR Y MODIFICAR EL DOM");
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// 1. createElement() y createTextNode()
// ------------------------------------------

// createElement() crea un nuevo elemento HTML
const nuevoParrafo = document.createElement("p");

// createTextNode() crea un nodo de texto puro
const texto = document.createTextNode(
  "Este párrafo fue creado con createTextNode"
);

// appendChild() añade un hijo al elemento
// Aquí añadimos el texto al párrafo
nuevoParrafo.appendChild(texto);

// Añadir el párrafo completo al body del documento
document.body.appendChild(nuevoParrafo);
console.log("✅ Párrafo creado y añadido al body");

// ------------------------------------------
// 2. replaceChild() - Reemplazar un nodo por otro
// ------------------------------------------

// Crear un nuevo elemento h2
const reemplazo = document.createElement("h2");

// textContent establece el texto del elemento directamente
reemplazo.textContent = "Título reemplazado con replaceChild()";

// Seleccionar el elemento original que queremos reemplazar
const original = document.getElementById("titulo");

// replaceChild(nuevo, viejo) reemplaza un nodo hijo por otro
// Sintaxis: padre.replaceChild(nuevo, viejo)
document.body.replaceChild(reemplazo, original);
console.log("✅ Nodo 'titulo' reemplazado por un h2");

// ------------------------------------------
// 3. removeChild() - Eliminar un nodo hijo
// ------------------------------------------

// Seleccionar el primer elemento con clase .descripcion
const eliminar = document.querySelector(".descripcion");

// removeChild() elimina un nodo hijo del DOM
// Sintaxis: padre.removeChild(hijo)
document.body.removeChild(eliminar);
console.log("✅ Primer párrafo con clase 'descripcion' eliminado");

// ------------------------------------------
// 4. DocumentFragment - Inserción múltiple eficiente
// ------------------------------------------

// createDocumentFragment() crea un fragmento de documento
// Los fragmentos NO son parte del DOM hasta que se insertan
// Esto mejora el rendimiento al insertar múltiples elementos
const fragmento = document.createDocumentFragment();

// Crear un span y añadirlo al fragmento
const span = document.createElement("span");
span.textContent = "Texto dentro de un fragmento";

// Añadir el span al fragmento (aún no está en el DOM)
fragmento.appendChild(span);

// Insertar el fragmento completo (más eficiente que insertar uno por uno)
document.body.appendChild(fragmento);
console.log("✅ Fragmento con un span insertado");

// ------------------------------------------
// 5. importNode() - Importar nodo de otro documento
// ------------------------------------------

// importNode(nodo, deep) importa una copia de un nodo
// Parámetro deep: true = copiar con hijos, false = solo el nodo
const nodoImportado = document.importNode(span, true);

// Añadir el nodo importado al body
document.body.appendChild(nodoImportado);
console.log("✅ Nodo span importado y añadido al body");

// ------------------------------------------
// 6. DocumentFragment - Inserción múltiple (ejemplo completo)
// ------------------------------------------

// Crear un fragmento para insertar múltiples elementos
const fragmentoMultiple = document.createDocumentFragment();

// Crear 3 elementos <li> y añadirlos al fragmento
// Este bucle se ejecuta 3 veces (i = 1, 2, 3)
for (let i = 1; i <= 3; i++) {
  // Crear un elemento li
  const li = document.createElement("li");

  // Template literals (backticks) permiten insertar variables con ${}
  li.textContent = `Elemento ${i} insertado con fragmento`;

  // Añadir el li al fragmento
  fragmentoMultiple.appendChild(li);
}

// Insertar el fragmento con todos los <li> de una vez
// Esto es más eficiente que hacer 3 appendChild individuales
document.body.appendChild(fragmentoMultiple);
console.log("✅ Fragmento con múltiples elementos insertado");

// ------------------------------------------
// 7. adoptNode() - Adoptar nodo externo
// ------------------------------------------

// Crear un nodo externo (simulando que viene de otro documento)
const nodoExterno = document.createElement("div");
nodoExterno.textContent = "Nodo externo adoptado";

// adoptNode() "adopta" un nodo para este documento
// Útil cuando se trabaja con iframes o múltiples documentos
const nodoAdoptado = document.adoptNode(nodoExterno);

// Añadirlo al DOM
document.body.appendChild(nodoAdoptado);
console.log("✅ Nodo adoptado correctamente");

// ------------------------------------------
// MÉTODOS OBSOLETOS (NO USAR)
// ------------------------------------------

// document.write() y document.writeln() están obsoletos
// Pueden borrar todo el DOM si se usan después de la carga de la página
// NUNCA USAR en producción
console.log("⚠️ Métodos document.write y writeln están obsoletos");
