// ============================================
// SECCIÓN 24: CONTENIDO Y MANIPULACIÓN DE TEXTO/HTML
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("14 - CONTENIDO: innerHTML, textContent, innerText, outerHTML");
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// innerHTML - CONTENIDO HTML COMPLETO
// ------------------------------------------

console.log("innerHTML - CONTENIDO HTML:\n");

const contenedor = document.querySelector(".wrapper");

console.log("1. Leer innerHTML:");
console.log("  HTML completo del .wrapper:");
console.log(contenedor.innerHTML);

console.log("\n2. Establecer innerHTML:");
const htmlAnterior = contenedor.innerHTML;
// innerHTML puede establecer contenido HTML
contenedor.innerHTML =
  "<p><strong>Nuevo contenido</strong> insertado con innerHTML</p>";
console.log("  ✅ Contenido reemplazado");

// Restaurar contenido original
setTimeout(() => {
  contenedor.innerHTML = htmlAnterior;
  console.log("  ↩️  Contenido restaurado");
}, 100);

console.log("\n3. Añadir contenido con innerHTML (+=):");
// ADVERTENCIA: Esto RECREA todo el contenido
// contenedor.innerHTML += "<p>Nuevo párrafo añadido</p>";
console.log("  ⚠️ CUIDADO: innerHTML += recrea TODOS los elementos");
console.log("  Se pierden event listeners y referencias");

console.log("\n4. Riesgos de seguridad con innerHTML:");
console.log(
  "  ⚠️ NUNCA uses innerHTML con contenido de usuarios sin sanitizar"
);
console.log("  Ejemplo PELIGROSO:");
console.log("    const input = '<img src=x onerror=\"alert(\\'XSS\\')\">';");
console.log("    div.innerHTML = input; // ❌ Ejecutaría código malicioso");

// ------------------------------------------
// textContent - SOLO TEXTO (SIN HTML)
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("textContent - SOLO TEXTO");
console.log("=".repeat(80) + "\n");

const parrafo = document.querySelector(".text-danger");

console.log("1. Leer textContent:");
console.log("  Texto del párrafo:", parrafo.textContent);

console.log("\n2. Establecer textContent:");
const textoAnterior = parrafo.textContent;
parrafo.textContent = "Texto establecido con textContent";
console.log("  ✅ Texto reemplazado");

setTimeout(() => {
  parrafo.textContent = textoAnterior;
  console.log("  ↩️  Texto restaurado");
}, 100);

console.log("\n3. textContent escapa HTML automáticamente:");
parrafo.textContent = "<strong>Esto NO se renderiza como HTML</strong>";
console.log("  El HTML se muestra como texto plano (seguro)");

setTimeout(() => {
  parrafo.textContent = textoAnterior;
}, 200);

console.log("\n4. textContent incluye elementos ocultos:");
const divConOculto = document.createElement("div");
divConOculto.innerHTML =
  '<span>Visible</span><span style="display:none">Oculto</span>';
console.log("  textContent:", divConOculto.textContent); // "VisibleOculto"

// ------------------------------------------
// innerText - TEXTO RENDERIZADO
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("innerText - TEXTO RENDERIZADO");
console.log("=".repeat(80) + "\n");

console.log("1. Leer innerText:");
console.log("  innerText del párrafo:", parrafo.innerText);

console.log("\n2. Diferencia entre textContent e innerText:");

const testDiv = document.createElement("div");
testDiv.innerHTML = `
  <span>Línea 1</span><br>
  <span style="display:none">Oculto</span>
  <span>Línea 2</span>
`;

console.log("  textContent:", testDiv.textContent);
console.log("  innerText:", testDiv.innerText);
console.log("\n  Diferencias:");
console.log("    • textContent incluye elementos ocultos");
console.log("    • innerText NO incluye elementos ocultos");
console.log("    • innerText respeta saltos de línea (<br>)");
console.log("    • innerText dispara reflow (menos eficiente)");

console.log("\n3. Establecer innerText:");
testDiv.innerText = "Nuevo texto con\nsaltos\nde línea";
console.log("  Los saltos de línea (\\n) se convierten en <br>");

// ------------------------------------------
// outerHTML - INCLUYE EL ELEMENTO MISMO
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("outerHTML - INCLUYE EL ELEMENTO");
console.log("=".repeat(80) + "\n");

const elemento = document.querySelector(".primero");

console.log("1. Leer outerHTML:");
console.log("  outerHTML (incluye la etiqueta):");
console.log(elemento.outerHTML);

console.log("\n2. Comparar innerHTML vs outerHTML:");
console.log("  innerHTML:", elemento.innerHTML);
console.log("  outerHTML:", elemento.outerHTML);
console.log("\n  • innerHTML: solo el CONTENIDO dentro del elemento");
console.log("  • outerHTML: el ELEMENTO COMPLETO (con su etiqueta)");

console.log("\n3. Establecer outerHTML (REEMPLAZA el elemento):");
console.log(
  "  ⚠️ CUIDADO: Establecer outerHTML REEMPLAZA completamente el elemento"
);
// const nuevoHTML = '<div class="reemplazo">Elemento reemplazado</div>';
// elemento.outerHTML = nuevoHTML;
console.log("  (No lo ejecutamos para preservar el HTML original)");

// ------------------------------------------
// insertAdjacentHTML - INSERCIÓN SEGURA DE HTML
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("insertAdjacentHTML - INSERCIÓN DE HTML EN POSICIONES ESPECÍFICAS");
console.log("=".repeat(80) + "\n");

console.log("1. insertAdjacentHTML - 4 posiciones posibles:");
console.log(`
  <!-- beforebegin -->
  <elemento>
    <!-- afterbegin -->
    contenido existente
    <!-- beforeend -->
  </elemento>
  <!-- afterend -->
`);

const target = document.querySelector(".box");

console.log("\n2. Insertar en cada posición:");

// beforebegin - ANTES del elemento (como hermano anterior)
target.insertAdjacentHTML(
  "beforebegin",
  '<p style="color: blue;">⬆️ beforebegin (hermano anterior)</p>'
);

// afterbegin - DENTRO del elemento, al PRINCIPIO (primer hijo)
target.insertAdjacentHTML(
  "afterbegin",
  '<p style="color: green;">⬇️ afterbegin (primer hijo)</p>'
);

// beforeend - DENTRO del elemento, al FINAL (último hijo)
target.insertAdjacentHTML(
  "beforeend",
  '<p style="color: orange;">⬆️ beforeend (último hijo)</p>'
);

// afterend - DESPUÉS del elemento (como hermano siguiente)
target.insertAdjacentHTML(
  "afterend",
  '<p style="color: red;">⬇️ afterend (hermano siguiente)</p>'
);

console.log("  ✅ HTML insertado en las 4 posiciones");

console.log("\n3. Ventajas de insertAdjacentHTML:");
console.log(
  "  ✓ NO recrea elementos existentes (más eficiente que innerHTML +=)"
);
console.log("  ✓ Los event listeners se mantienen");
console.log("  ✓ Las referencias a elementos siguen siendo válidas");
console.log("  ✓ Posicionamiento preciso");

console.log("\n4. Alternativa segura a innerHTML +=:");
console.log("  ❌ elemento.innerHTML += '<p>Nuevo</p>'; // Recrea todo");
console.log(
  "  ✅ elemento.insertAdjacentHTML('beforeend', '<p>Nuevo</p>'); // Solo añade"
);

// ------------------------------------------
// insertAdjacentElement y insertAdjacentText
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("insertAdjacentElement e insertAdjacentText");
console.log("=".repeat(80) + "\n");

console.log("1. insertAdjacentElement - Insertar elementos DOM:");

const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Elemento DOM insertado con insertAdjacentElement";
nuevoElemento.style.background = "#ffebee";

target.insertAdjacentElement("beforeend", nuevoElemento);
console.log("  ✅ Elemento DOM insertado");

console.log("\n2. insertAdjacentText - Insertar texto plano:");
target.insertAdjacentText("beforeend", " | Texto plano añadido al final");
console.log("  ✅ Texto insertado (se escapa HTML automáticamente)");

console.log("\n3. Comparación:");
console.log(`
  insertAdjacentHTML(posición, htmlString)
    → Inserta HTML parseado (puede contener etiquetas)
    → Riesgo de XSS si no se sanitiza
  
  insertAdjacentElement(posición, elemento)
    → Inserta un elemento DOM ya creado
    → Seguro, no hay parsing de HTML
  
  insertAdjacentText(posición, texto)
    → Inserta texto plano (escapa HTML automáticamente)
    → Seguro, el HTML se muestra como texto
`);

// ------------------------------------------
// TABLA COMPARATIVA COMPLETA
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("TABLA COMPARATIVA - MÉTODOS DE CONTENIDO");
console.log("=".repeat(80) + "\n");

console.log(`
╔═══════════════════╦══════════════════╦═══════════════╦════════════════════════╗
║ MÉTODO            ║ QUÉ DEVUELVE     ║ ESCAPA HTML   ║ RENDIMIENTO            ║
╠═══════════════════╬══════════════════╬═══════════════╬════════════════════════╣
║ innerHTML         ║ HTML completo    ║ NO ⚠️         ║ Medio (recrea todo)    ║
║ textContent       ║ Solo texto       ║ SÍ ✅         ║ Rápido                 ║
║ innerText         ║ Texto visible    ║ SÍ ✅         ║ Lento (reflow)         ║
║ outerHTML         ║ Elemento + HTML  ║ NO ⚠️         ║ Medio                  ║
║ insertAdjacentHTML║ N/A (inserta)    ║ NO ⚠️         ║ Rápido (no recrea)     ║
║ insertAdjacentText║ N/A (inserta)    ║ SÍ ✅         ║ Rápido                 ║
╚═══════════════════╩══════════════════╩═══════════════╩════════════════════════╝

CUÁNDO USAR CADA UNO:

innerHTML:
  ✓ Construir contenido HTML complejo de una vez
  ✓ Reemplazar todo el contenido de un elemento
  ✗ NO usar con datos de usuarios (riesgo XSS)
  ✗ NO usar con += (recrea todo)

textContent:
  ✓ Establecer/leer texto simple
  ✓ Contenido de usuarios (seguro, escapa HTML)
  ✓ Rendimiento (más rápido que innerText)
  ✓ Incluye texto oculto (útil para procesamiento)

innerText:
  ✓ Obtener texto "como lo ve el usuario"
  ✓ Copiar texto visible al portapapeles
  ✗ Evitar en loops (dispara reflow)
  ✗ No usar si necesitas texto oculto

outerHTML:
  ✓ Clonar elemento completo como string
  ✓ Reemplazar un elemento por otro completamente
  ⚠️ Reemplazar el elemento rompe referencias

insertAdjacentHTML:
  ✓ Añadir HTML sin recrear elementos existentes
  ✓ Inserción precisa en 4 posiciones
  ✓ Mantiene event listeners
  ✗ NO usar con datos de usuarios sin sanitizar

insertAdjacentText:
  ✓ Añadir texto de forma segura
  ✓ Contenido de usuarios (escapa HTML)
  ✓ Alternativa segura a insertAdjacentHTML
`);

// ------------------------------------------
// SEGURIDAD Y SANITIZACIÓN
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("SEGURIDAD - XSS Y SANITIZACIÓN");
console.log("=".repeat(80) + "\n");

console.log("1. Riesgos de XSS (Cross-Site Scripting):");
console.log(`
  Cualquier método que NO escapa HTML es potencialmente peligroso:
    • innerHTML
    • outerHTML  
    • insertAdjacentHTML
  
  Ejemplo de ataque XSS:
    const userInput = '<img src=x onerror="alert(document.cookie)">';
    div.innerHTML = userInput; // ❌ PELIGROSO - ejecuta JavaScript
`);

console.log("\n2. Métodos SEGUROS (escapan HTML automáticamente):");
console.log(`
  • textContent
  • innerText
  • insertAdjacentText
  • createTextNode()
  
  Ejemplo seguro:
    const userInput = '<img src=x onerror="alert(1)">';
    div.textContent = userInput; // ✅ SEGURO - se muestra como texto
`);

console.log("\n3. Cómo sanitizar HTML:");

function sanitizarHTML(htmlString) {
  const temp = document.createElement("div");
  temp.textContent = htmlString; // Escapa el HTML
  return temp.innerHTML; // Devuelve el HTML escapado
}

console.log("  Función sanitizarHTML() creada:");
console.log("  Entrada:", '<script>alert("XSS")</script>');
console.log("  Salida:", sanitizarHTML('<script>alert("XSS")</script>'));

console.log("\n4. Librerías de sanitización:");
console.log("  Para casos más complejos, usar librerías especializadas:");
console.log("    • DOMPurify (recomendada)");
console.log("    • sanitize-html");
console.log("    • js-xss");

// ------------------------------------------
// MEJORES PRÁCTICAS
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("MEJORES PRÁCTICAS Y RESUMEN");
console.log("=".repeat(80) + "\n");

console.log(`
REGLAS DE ORO:

1. SEGURIDAD PRIMERO
   ✅ Usar textContent para contenido de usuarios
   ✅ Sanitizar HTML si DEBES usar innerHTML
   ❌ NUNCA innerHTML con datos no confiables
   ❌ NUNCA eval() o new Function() con contenido de usuarios

2. RENDIMIENTO
   ✅ Usar insertAdjacentHTML en lugar de innerHTML +=
   ✅ Usar textContent en lugar de innerText (cuando sea posible)
   ✅ Cachear innerHTML si lo necesitas múltiples veces
   ❌ Evitar innerHTML += en bucles

3. PREFERIR CREACIÓN MANUAL DE ELEMENTOS
   ✅ createElement() + appendChild() es más seguro
   ✅ Mantiene referencias y event listeners
   ✅ Más verboso pero más controlado
   
   Ejemplo:
     const p = document.createElement('p');
     p.textContent = userInput; // Seguro
     p.className = 'clase';
     contenedor.appendChild(p);

4. CUÁNDO USAR innerHTML
   ✓ Contenido HTML estático conocido
   ✓ Templates del lado del servidor
   ✓ Contenido de tu propia aplicación
   ✗ NUNCA con input de usuarios directo

5. ALTERNATIVAS MODERNAS
   ✓ Template literals con createElement
   ✓ Web Components y Shadow DOM
   ✓ Frameworks (React, Vue) que escapan automáticamente
   ✓ <template> tag para plantillas HTML

RESUMEN RÁPIDO:

┌─────────────────────────────────────────────────────────┐
│ NECESITO...                    │ USAR...                │
├────────────────────────────────┼────────────────────────┤
│ Leer texto                     │ textContent            │
│ Establecer texto               │ textContent            │
│ Leer HTML                      │ innerHTML              │
│ Establecer HTML (seguro)       │ createElement() + ...  │
│ Establecer HTML (rápido)       │ innerHTML (sanitizado) │
│ Añadir HTML                    │ insertAdjacentHTML     │
│ Añadir texto                   │ insertAdjacentText     │
│ Clonar elemento                │ outerHTML o cloneNode()│
│ Contenido de usuarios          │ textContent ¡SIEMPRE!  │
└────────────────────────────────┴────────────────────────┘
`);

console.log("\n" + "=".repeat(80));
console.log("FIN - CONTENIDO Y MANIPULACIÓN");
console.log("=".repeat(80) + "\n");
