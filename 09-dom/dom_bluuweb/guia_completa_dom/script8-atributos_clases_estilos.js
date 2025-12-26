// ============================================
// SECCIÓN 21: MANIPULACIÓN DE ATRIBUTOS
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("11 - ATRIBUTOS, CLASES Y ESTILOS");
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// MÉTODOS DE ATRIBUTOS
// ------------------------------------------

console.log("MANIPULACIÓN DE ATRIBUTOS:\n");

// Seleccionar un elemento para trabajar con sus atributos
const enlace = document.querySelector(".enlace");

// getAttribute(nombre) - Obtiene el valor de un atributo
// Devuelve el valor como string o null si no existe
console.log("1. getAttribute():");
console.log("  Atributo href:", enlace.getAttribute("href"));
console.log("  Atributo class:", enlace.getAttribute("class"));

// setAttribute(nombre, valor) - Establece el valor de un atributo
// Si el atributo no existe, lo crea
console.log("\n2. setAttribute():");
enlace.setAttribute("target", "_blank");
enlace.setAttribute("data-info", "enlace externo");
console.log("  Atributo target añadido:", enlace.getAttribute("target"));
console.log("  Atributo data-info añadido:", enlace.getAttribute("data-info"));

// hasAttribute(nombre) - Verifica si un atributo existe
// Devuelve true si existe, false si no
console.log("\n3. hasAttribute():");
console.log("  ¿Tiene href?:", enlace.hasAttribute("href"));
console.log("  ¿Tiene id?:", enlace.hasAttribute("id"));
console.log("  ¿Tiene data-info?:", enlace.hasAttribute("data-info"));

// removeAttribute(nombre) - Elimina un atributo
console.log("\n4. removeAttribute():");
const testElement = document.querySelector(".primero");
console.log("  Antes de eliminar name:", testElement.hasAttribute("name"));
// testElement.removeAttribute("name");
console.log("  (No eliminamos para preservar el HTML)");

// getAttributeNames() - Devuelve un array con los nombres de todos los atributos
console.log("\n5. getAttributeNames():");
const todosLosAtributos = enlace.getAttributeNames();
console.log("  Todos los atributos del enlace:", todosLosAtributos);

// Iterar sobre todos los atributos
console.log("  Atributos y valores:");
todosLosAtributos.forEach((attr) => {
  console.log(`    ${attr}: ${enlace.getAttribute(attr)}`);
});

// ------------------------------------------
// PROPIEDADES vs ATRIBUTOS
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("PROPIEDADES vs ATRIBUTOS");
console.log("=".repeat(60) + "\n");

// Diferencia entre propiedades y atributos:
// - ATRIBUTOS: Valores en el HTML (estáticos)
// - PROPIEDADES: Valores en el objeto JavaScript (dinámicos)

const inputTest = document.querySelector("#inputNombre");

console.log("Ejemplo con input:");
console.log("  Propiedad value (DOM):", inputTest.value);
console.log("  Atributo value (HTML):", inputTest.getAttribute("value"));

// Si cambias el value con JavaScript:
// inputTest.value = "Nuevo valor";
// console.log("  Después de cambiar:");
// console.log("    Propiedad value:", inputTest.value); // "Nuevo valor"
// console.log("    Atributo value:", inputTest.getAttribute("value")); // null o valor original

console.log("\nAcceso directo vs getAttribute:");
const parrafoId = document.querySelector("#inputNombre");
console.log("  Con propiedad .id:", parrafoId.id);
console.log("  Con getAttribute('id'):", parrafoId.getAttribute("id"));
// Ambos devuelven lo mismo, pero la propiedad es más directa

// ------------------------------------------
// ATRIBUTOS DATA-*
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("ATRIBUTOS DATA-* Y DATASET");
console.log("=".repeat(60) + "\n");

// Los atributos data-* son atributos personalizados para almacenar datos
// Se acceden mediante la propiedad dataset

const container = document.querySelector("#miContainer");

console.log("1. Leer atributos data-* con dataset:");
console.log("  data-tipo:", container.dataset.tipo);

// Añadir nuevos atributos data-*
console.log("\n2. Añadir atributos data-* con dataset:");
container.dataset.version = "2.0";
container.dataset.createdBy = "usuario123";
console.log("  data-version añadido:", container.dataset.version);
console.log("  data-created-by añadido:", container.dataset.createdBy);

// NOTA: Los guiones se convierten a camelCase
// data-created-by → dataset.createdBy
// data-mi-dato → dataset.miDato

console.log("\n3. Todos los atributos data-*:");
console.log("  dataset completo:", container.dataset);

// Iterar sobre todos los data attributes
for (let key in container.dataset) {
  console.log(`  ${key}: ${container.dataset[key]}`);
}

// Eliminar un data attribute
console.log("\n4. Eliminar atributos data-*:");
delete container.dataset.version;
console.log("  data-version eliminado");

// ------------------------------------------
// MANIPULACIÓN DE CLASES (classList)
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("MANIPULACIÓN DE CLASES (classList)");
console.log("=".repeat(80) + "\n");

const parrafo = document.querySelector(".text-danger");

console.log("1. classList.add() - Añadir clases:");
console.log("  Clases antes:", parrafo.className);
parrafo.classList.add("nueva-clase");
parrafo.classList.add("otra-clase");
console.log("  Clases después:", parrafo.className);

console.log("\n2. classList.remove() - Eliminar clases:");
parrafo.classList.remove("nueva-clase");
console.log("  Después de eliminar 'nueva-clase':", parrafo.className);

console.log("\n3. classList.toggle() - Alternar clase:");
console.log("  ¿Tiene 'activo'?:", parrafo.classList.contains("activo"));
parrafo.classList.toggle("activo"); // La añade si no existe
console.log("  Después de toggle:", parrafo.classList.contains("activo"));
parrafo.classList.toggle("activo"); // La elimina si existe
console.log("  Después de otro toggle:", parrafo.classList.contains("activo"));

// toggle con segundo parámetro (forzar añadir/quitar)
parrafo.classList.toggle("activo", true); // Fuerza añadir
console.log("  Con toggle(true):", parrafo.classList.contains("activo"));

console.log("\n4. classList.contains() - Verificar si tiene clase:");
console.log(
  "  ¿Tiene 'text-danger'?:",
  parrafo.classList.contains("text-danger")
);
console.log(
  "  ¿Tiene 'inexistente'?:",
  parrafo.classList.contains("inexistente")
);

console.log("\n5. classList.replace() - Reemplazar clase:");
parrafo.classList.replace("text-danger", "text-success");
console.log("  Después de replace:", parrafo.className);
// Volvemos al estado original
parrafo.classList.replace("text-success", "text-danger");

console.log("\n6. classList.length - Número de clases:");
console.log("  Total de clases:", parrafo.classList.length);

console.log("\n7. Iterar sobre las clases:");
parrafo.classList.forEach((clase, index) => {
  console.log(`  Clase ${index}: ${clase}`);
});

// ------------------------------------------
// className vs classList
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("className vs classList");
console.log("=".repeat(60) + "\n");

const ejemplo = document.querySelector(".primero");

console.log("className:");
console.log("  Valor (string):", ejemplo.className);
// className devuelve/establece TODAS las clases como un string
// ejemplo.className = "clase1 clase2 clase3";

console.log("\nclassList:");
console.log("  Valor (DOMTokenList):", ejemplo.classList);
// classList es un objeto con métodos para manipular clases individualmente

console.log("\nCuándo usar cada uno:");
console.log("  className → Reemplazar TODAS las clases a la vez");
console.log("  classList → Manipular clases INDIVIDUALES");

// ------------------------------------------
// MANIPULACIÓN DE ESTILOS INLINE
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("MANIPULACIÓN DE ESTILOS (style)");
console.log("=".repeat(80) + "\n");

const box = document.querySelector(".box");

console.log("1. Establecer estilos inline:");
box.style.backgroundColor = "#ffeb3b"; // Fondo amarillo
box.style.color = "#000"; // Texto negro
box.style.padding = "20px";
box.style.border = "3px solid #fbc02d";
console.log("  Estilos aplicados a .box");

// NOTA: Los nombres de propiedades CSS con guiones se convierten a camelCase
// background-color → backgroundColor
// font-size → fontSize
// border-radius → borderRadius

console.log("\n2. Leer estilos inline:");
console.log("  background-color:", box.style.backgroundColor);
console.log("  padding:", box.style.padding);

console.log("\n3. Eliminar estilos inline:");
box.style.backgroundColor = ""; // Elimina el estilo inline
console.log("  background-color eliminado");

console.log("\n4. style.cssText - Establecer múltiples estilos:");
const testBox = document.querySelector(".origen");
testBox.style.cssText =
  "background: #e3f2fd; padding: 25px; border: 3px solid #2196f3;";
console.log("  Múltiples estilos aplicados con cssText");

console.log("\n5. style.setProperty() - Forma alternativa:");
testBox.style.setProperty("border-radius", "10px");
testBox.style.setProperty("box-shadow", "0 4px 6px rgba(0,0,0,0.1)");
console.log("  Estilos aplicados con setProperty()");

console.log("\n6. style.removeProperty() - Eliminar propiedad:");
testBox.style.removeProperty("box-shadow");
console.log("  box-shadow eliminado con removeProperty()");

console.log("\n7. style.getPropertyValue() - Obtener valor:");
console.log(
  "  border-radius:",
  testBox.style.getPropertyValue("border-radius")
);

// ------------------------------------------
// getComputedStyle() - Estilos calculados
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("getComputedStyle() - ESTILOS CALCULADOS");
console.log("=".repeat(60) + "\n");

// getComputedStyle() devuelve TODOS los estilos aplicados al elemento
// Incluye estilos de CSS, inline, y valores por defecto del navegador

const computed = window.getComputedStyle(box);

console.log("1. Obtener estilos calculados:");
console.log("  background-color:", computed.backgroundColor);
console.log("  color:", computed.color);
console.log("  padding:", computed.padding);
console.log("  font-size:", computed.fontSize);
console.log("  display:", computed.display);

console.log("\n2. Diferencia entre style y getComputedStyle:");
console.log("  box.style.fontSize:", box.style.fontSize); // Solo inline, probablemente ""
console.log("  computed.fontSize:", computed.fontSize); // Valor real calculado

console.log("\n3. Todos los estilos calculados:");
console.log("  Total de propiedades:", computed.length);
// computed tiene CIENTOS de propiedades

// Ejemplo: obtener solo algunas propiedades importantes
const propiedadesImportantes = [
  "display",
  "position",
  "width",
  "height",
  "margin",
  "padding",
  "border",
  "background-color",
];

console.log("\n4. Propiedades importantes:");
propiedadesImportantes.forEach((prop) => {
  console.log(`  ${prop}: ${computed.getPropertyValue(prop)}`);
});

// ------------------------------------------
// IMPORTANTE: style vs getComputedStyle
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("IMPORTANTE: style vs getComputedStyle");
console.log("=".repeat(60) + "\n");

console.log(`
style (element.style):
  - Solo devuelve estilos INLINE (atributo style="...")
  - Se usa para LEER y ESCRIBIR estilos
  - Devuelve "" si no hay estilo inline
  - Ejemplo: element.style.color = "red";

getComputedStyle(element):
  - Devuelve TODOS los estilos aplicados (CSS + inline + defaults)
  - Solo para LEER (no se puede modificar)
  - Devuelve el valor calculado final
  - Ejemplo: const color = getComputedStyle(element).color;

CUÁNDO USAR CADA UNO:

Usar element.style:
  ✓ Para ESTABLECER estilos dinámicamente
  ✓ Para modificar estilos temporalmente
  ✓ Para animaciones con JavaScript

Usar getComputedStyle():
  ✓ Para LEER el estilo real de un elemento
  ✓ Para obtener valores que vienen del CSS
  ✓ Para calcular dimensiones reales
`);

// ------------------------------------------
// RESUMEN Y MEJORES PRÁCTICAS
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("RESUMEN Y MEJORES PRÁCTICAS");
console.log("=".repeat(60) + "\n");

console.log(`
ATRIBUTOS:
  getAttribute(nombre)           → Leer atributo
  setAttribute(nombre, valor)    → Establecer atributo
  hasAttribute(nombre)           → Verificar si existe
  removeAttribute(nombre)        → Eliminar atributo
  getAttributeNames()            → Lista de todos los atributos

ATRIBUTOS DATA-*:
  element.dataset.miDato         → Leer data-mi-dato
  element.dataset.miDato = "x"   → Establecer data-mi-dato
  delete element.dataset.miDato  → Eliminar data-mi-dato

CLASES:
  classList.add("clase")         → Añadir clase
  classList.remove("clase")      → Eliminar clase
  classList.toggle("clase")      → Alternar clase
  classList.contains("clase")    → Verificar si tiene clase
  classList.replace("a", "b")    → Reemplazar clase

ESTILOS:
  element.style.propiedad        → Establecer/leer estilo inline
  element.style.cssText          → Múltiples estilos a la vez
  element.style.setProperty()    → Establecer propiedad
  element.style.removeProperty() → Eliminar propiedad
  getComputedStyle(element)      → Leer estilos reales

MEJORES PRÁCTICAS:

1. ATRIBUTOS
   ✓ Usar propiedades directas cuando existan (element.id)
   ✓ Usar getAttribute() para atributos personalizados
   ✓ Usar data-* para datos personalizados

2. CLASES
   ✓ SIEMPRE usar classList (NO className)
   ✓ classList es más seguro y legible
   ✓ Usar toggle() para estados on/off

3. ESTILOS
   ✓ Preferir CLASES CSS sobre estilos inline
   ✓ Usar style solo para valores dinámicos
   ✓ Usar getComputedStyle() para leer estilos
   ✓ No usar cssText (difícil de mantener)

4. RENDIMIENTO
   ✓ Agrupar cambios de estilo cuando sea posible
   ✓ Usar clases CSS para cambios múltiples
   ✓ Evitar acceder a getComputedStyle() en bucles
`);

console.log("\n" + "=".repeat(80));
console.log("FIN - ATRIBUTOS, CLASES Y ESTILOS");
console.log("=".repeat(80) + "\n");
