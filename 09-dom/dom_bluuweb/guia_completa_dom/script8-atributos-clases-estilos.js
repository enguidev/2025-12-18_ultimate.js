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

// ============================================
// MANIPULACIÓN AVANZADA DE CSS - STYLESHEETS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("MANIPULACIÓN AVANZADA DE CSS");
console.log("=".repeat(60) + "\n");

console.log("ACCESO Y MODIFICACIÓN DE HOJAS DE ESTILO:\n");

// ------------------------------------------
// 1. ACCEDER A LAS HOJAS DE ESTILO
// ------------------------------------------

console.log("1. document.styleSheets - Todas las hojas CSS:\n");

// styleSheets devuelve una StyleSheetList con todas las hojas CSS cargadas
console.log("  Total de hojas de estilo:", document.styleSheets.length);

// Mostrar información de cada hoja
for (let i = 0; i < document.styleSheets.length; i++) {
  const hoja = document.styleSheets[i];
  console.log(`\n  Hoja ${i}:`);
  console.log("    href:", hoja.href || "(inline style)");
  console.log("    type:", hoja.type);
  console.log("    disabled:", hoja.disabled);
  console.log("    media:", hoja.media.mediaText || "all");

  // Intentar acceder a las reglas (puede fallar con hojas externas de otro dominio)
  try {
    console.log("    Número de reglas:", hoja.cssRules.length);
  } catch (error) {
    console.log("    ⚠️ No se puede acceder a las reglas (CORS)");
  }
}

// ------------------------------------------
// 2. ACCEDER A LAS REGLAS CSS
// ------------------------------------------

console.log("\n\n2. Acceder a reglas CSS específicas:\n");

// Buscar la primera hoja que podamos modificar (no externa con CORS)
let hojaModificable = null;
for (let i = 0; i < document.styleSheets.length; i++) {
  try {
    const hoja = document.styleSheets[i];
    // Intentar acceder a cssRules
    const reglas = hoja.cssRules;
    hojaModificable = hoja;
    break;
  } catch (error) {
    continue;
  }
}

if (hojaModificable) {
  console.log("  ✅ Hoja CSS modificable encontrada");

  // cssRules contiene todas las reglas CSS de la hoja
  const reglas = hojaModificable.cssRules;

  console.log(`\n  Total de reglas en la hoja: ${reglas.length}`);

  // Mostrar las primeras 3 reglas
  const maxReglas = Math.min(3, reglas.length);
  for (let i = 0; i < maxReglas; i++) {
    const regla = reglas[i];
    console.log(`\n  Regla ${i}:`);
    console.log("    Selector:", regla.selectorText);
    console.log("    CSS Text:", regla.cssText);
  }
} else {
  console.log("  ⚠️ No se encontró ninguna hoja CSS modificable");
  console.log(
    "  (Esto puede ocurrir si todos los CSS son externos y de otro dominio)"
  );
}

// ------------------------------------------
// 3. CREAR HOJA DE ESTILO DINÁMICA
// ------------------------------------------

console.log("\n\n3. Crear hoja de estilo dinámica:\n");

// Crear elemento <style>
const styleElement = document.createElement("style");
styleElement.id = "estilos-dinamicos";

// Añadir reglas CSS iniciales
styleElement.textContent = `
  .dinamico {
    background-color: #ffeb3b;
    padding: 10px;
    border-radius: 4px;
    margin: 5px 0;
  }
  
  .dinamico-azul {
    background-color: #2196F3;
    color: white;
    padding: 10px;
  }
`;

// Añadir al <head>
document.head.appendChild(styleElement);

console.log("  ✅ Hoja de estilos dinámica creada");
console.log("  ID:", styleElement.id);

// Crear elementos de prueba
const divDinamico = document.createElement("div");
divDinamico.className = "dinamico";
divDinamico.textContent = "Elemento con clase .dinamico";
document.body.appendChild(divDinamico);

console.log("  ✅ Elemento de prueba con clase .dinamico creado");

// ------------------------------------------
// 4. MODIFICAR REGLAS CSS EXISTENTES
// ------------------------------------------

console.log("\n\n4. Modificar reglas CSS existentes:\n");

// Acceder a la hoja recién creada
const hojaDinamica = styleElement.sheet;

console.log("  Hoja dinámica:");
console.log("    Número de reglas:", hojaDinamica.cssRules.length);

// Modificar la primera regla (.dinamico)
if (hojaDinamica.cssRules.length > 0) {
  const regla = hojaDinamica.cssRules[0];

  console.log("\n  Regla original:");
  console.log("    Selector:", regla.selectorText);
  console.log("    Background:", regla.style.backgroundColor);

  // Modificar estilos de la regla
  regla.style.backgroundColor = "#4CAF50";
  regla.style.fontSize = "18px";
  regla.style.fontWeight = "bold";

  console.log("\n  Regla modificada:");
  console.log("    Background:", regla.style.backgroundColor);
  console.log("    Font size:", regla.style.fontSize);
  console.log("    Font weight:", regla.style.fontWeight);

  console.log("\n  ✅ Regla CSS modificada dinámicamente");
  console.log("  El elemento .dinamico reflejará los cambios automáticamente");
}

// ------------------------------------------
// 5. AÑADIR NUEVAS REGLAS CSS
// ------------------------------------------

console.log("\n\n5. Añadir nuevas reglas CSS:\n");

// insertRule(regla, índice) añade una nueva regla
const indice1 = hojaDinamica.insertRule(
  `
  .nueva-clase {
    border: 3px solid #FF5722;
    background: #FFCCBC;
    padding: 15px;
    margin: 10px 0;
  }
`,
  hojaDinamica.cssRules.length
);

console.log("  ✅ Nueva regla .nueva-clase añadida");
console.log("  Índice:", indice1);

// Crear elemento de prueba
const divNuevo = document.createElement("div");
divNuevo.className = "nueva-clase";
divNuevo.textContent = "Elemento con .nueva-clase añadida dinámicamente";
document.body.appendChild(divNuevo);

// Añadir regla con pseudo-clase
const indice2 = hojaDinamica.insertRule(
  `
  .nueva-clase:hover {
    background: #FF5722;
    color: white;
    transform: scale(1.02);
    transition: all 0.3s;
  }
`,
  hojaDinamica.cssRules.length
);

console.log("  ✅ Regla :hover añadida para .nueva-clase");
console.log("  (Pasa el mouse sobre el elemento naranja para verlo)");

// ------------------------------------------
// 6. ELIMINAR REGLAS CSS
// ------------------------------------------

console.log("\n\n6. Eliminar reglas CSS:\n");

// Añadir una regla temporal
const indiceTemp = hojaDinamica.insertRule(
  `
  .temporal {
    background: red;
  }
`,
  hojaDinamica.cssRules.length
);

console.log("  Reglas antes de eliminar:", hojaDinamica.cssRules.length);

// deleteRule(índice) elimina una regla por su índice
hojaDinamica.deleteRule(indiceTemp);

console.log("  Reglas después de eliminar:", hojaDinamica.cssRules.length);
console.log("  ✅ Regla temporal eliminada");

// ------------------------------------------
// 7. HABILITAR/DESHABILITAR HOJAS COMPLETAS
// ------------------------------------------

console.log("\n\n7. Habilitar/Deshabilitar hojas CSS:\n");

// Crear botones para demostrar
const btnContainer = document.createElement("div");
btnContainer.style.cssText = "margin: 20px 0;";

const btnDeshabilitar = document.createElement("button");
btnDeshabilitar.textContent = "❌ Deshabilitar estilos dinámicos";
btnDeshabilitar.className = "btn";
btnDeshabilitar.style.marginRight = "10px";

const btnHabilitar = document.createElement("button");
btnHabilitar.textContent = "✅ Habilitar estilos dinámicos";
btnHabilitar.className = "btn";

btnContainer.appendChild(btnDeshabilitar);
btnContainer.appendChild(btnHabilitar);
document.body.appendChild(btnContainer);

// Deshabilitar hoja
btnDeshabilitar.addEventListener("click", () => {
  hojaDinamica.disabled = true;
  console.log("\n  🚫 Hoja de estilos deshabilitada");
  console.log("  Los elementos pierden los estilos de esta hoja");
});

// Habilitar hoja
btnHabilitar.addEventListener("click", () => {
  hojaDinamica.disabled = false;
  console.log("\n  ✅ Hoja de estilos habilitada");
  console.log("  Los elementos recuperan sus estilos");
});

console.log("  ✅ Botones de control creados");
console.log("  Prueba a deshabilitar/habilitar la hoja dinámica");

// ------------------------------------------
// 8. OBTENER REGLAS POR SELECTOR
// ------------------------------------------

console.log("\n\n8. Buscar reglas por selector:\n");

/**
 * Busca una regla CSS por su selector
 * @param {string} selector - Selector CSS a buscar
 * @returns {CSSStyleRule|null} - Regla encontrada o null
 */
function buscarReglaPorSelector(selector) {
  for (let i = 0; i < document.styleSheets.length; i++) {
    try {
      const hoja = document.styleSheets[i];
      const reglas = hoja.cssRules;

      for (let j = 0; j < reglas.length; j++) {
        const regla = reglas[j];
        if (regla.selectorText === selector) {
          return regla;
        }
      }
    } catch (error) {
      continue;
    }
  }
  return null;
}

// Ejemplo de uso
const reglaDinamica = buscarReglaPorSelector(".dinamico");
if (reglaDinamica) {
  console.log("  ✅ Regla encontrada para .dinamico");
  console.log("  Selector:", reglaDinamica.selectorText);
  console.log("  Background:", reglaDinamica.style.backgroundColor);
  console.log("  Font size:", reglaDinamica.style.fontSize);
} else {
  console.log("  ❌ Regla no encontrada");
}

console.log("\n  Función buscarReglaPorSelector() definida");

// ------------------------------------------
// 9. MEDIA QUERIES DINÁMICAS
// ------------------------------------------

console.log("\n\n9. Media Queries dinámicas:\n");

// Añadir regla con media query
const mediaRuleIndex = hojaDinamica.insertRule(
  `
  @media (max-width: 768px) {
    .dinamico {
      font-size: 14px;
      padding: 5px;
    }
  }
`,
  hojaDinamica.cssRules.length
);

console.log("  ✅ Media query añadida");
console.log("  Se activa cuando el ancho es menor a 768px");

// Obtener la regla de media query
const mediaRule = hojaDinamica.cssRules[mediaRuleIndex];
console.log("  Tipo de regla:", mediaRule.constructor.name);
console.log(
  "  Condición:",
  mediaRule.conditionText || mediaRule.media.mediaText
);

// ------------------------------------------
// RESUMEN
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("RESUMEN - MANIPULACIÓN DE STYLESHEETS");
console.log("=".repeat(60) + "\n");

console.log(`
MÉTODOS PRINCIPALES:

document.styleSheets
  → StyleSheetList con todas las hojas CSS
  → document.styleSheets[0] = primera hoja
  → document.styleSheets.length = número de hojas

stylesheet.cssRules
  → CSSRuleList con todas las reglas de la hoja
  → stylesheet.cssRules[0] = primera regla
  → stylesheet.cssRules.length = número de reglas

rule.selectorText
  → Selector de la regla (".clase", "#id", etc.)

rule.style
  → CSSStyleDeclaration con los estilos
  → rule.style.backgroundColor = "red"
  → rule.style.fontSize = "16px"

stylesheet.insertRule(cssText, index)
  → Añade una nueva regla CSS
  → Retorna el índice de la regla insertada

stylesheet.deleteRule(index)
  → Elimina una regla por su índice

stylesheet.disabled
  → true = hoja deshabilitada
  → false = hoja habilitada

CASOS DE USO:

✓ Temas dinámicos (modo claro/oscuro)
✓ Responsive design programático
✓ A/B testing de estilos
✓ Generar CSS desde datos
✓ Optimización de estilos
✓ CSS-in-JS avanzado

LIMITACIONES:

⚠️ CORS: No se pueden modificar hojas externas de otro dominio
⚠️ Las modificaciones afectan a TODOS los elementos con ese selector
⚠️ No persisten al recargar (salvo que se guarden)

ALTERNATIVAS:

- element.style → Para elementos individuales
- element.classList → Para alternar clases existentes
- CSS Variables → Para valores dinámicos
- Frameworks CSS-in-JS → Styled Components, Emotion, etc.

MEJORES PRÁCTICAS:

✓ Preferir classList.add/remove sobre modificar reglas
✓ Usar CSS Variables para valores que cambien frecuentemente
✓ Crear hojas dinámicas para reglas generadas programáticamente
✓ Documentar bien las modificaciones dinámicas
✓ Considerar performance con muchas reglas
`);

console.log("\n" + "=".repeat(80));
console.log("✅ MANIPULACIÓN AVANZADA DE CSS COMPLETADA");
console.log("=".repeat(80) + "\n");
