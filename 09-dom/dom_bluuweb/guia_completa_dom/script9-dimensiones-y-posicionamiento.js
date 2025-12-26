// ============================================
// SECCIÓN 22: DIMENSIONES Y POSICIONAMIENTO
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("12 - DIMENSIONES Y POSICIONAMIENTO");
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// getBoundingClientRect() - INFORMACIÓN COMPLETA DE POSICIÓN
// ------------------------------------------

console.log("getBoundingClientRect() - POSICIÓN Y DIMENSIONES:\n");

const box = document.querySelector(".box");

// getBoundingClientRect() devuelve un objeto DOMRect con información
// sobre el tamaño y posición del elemento relativa al viewport
const rect = box.getBoundingClientRect();

console.log("1. Información completa del elemento .box:");
console.log("  Objeto DOMRect:", rect);
console.log("\n  Coordenadas:");
console.log(
  "    top:",
  rect.top,
  "px (distancia desde el borde superior del viewport)"
);
console.log(
  "    right:",
  rect.right,
  "px (distancia del borde derecho desde el izquierdo del viewport)"
);
console.log(
  "    bottom:",
  rect.bottom,
  "px (distancia del borde inferior desde el superior del viewport)"
);
console.log(
  "    left:",
  rect.left,
  "px (distancia desde el borde izquierdo del viewport)"
);
console.log("\n  Dimensiones:");
console.log("    width:", rect.width, "px (ancho total del elemento)");
console.log("    height:", rect.height, "px (alto total del elemento)");
console.log("\n  Centro del elemento:");
console.log("    x:", rect.x, "px (coordenada X del borde izquierdo)");
console.log("    y:", rect.y, "px (coordenada Y del borde superior)");

console.log("\n2. Calcular el centro del elemento:");
const centroX = rect.left + rect.width / 2;
const centroY = rect.top + rect.height / 2;
console.log("  Centro X:", centroX, "px");
console.log("  Centro Y:", centroY, "px");

console.log("\n3. Verificar si el elemento está visible en el viewport:");
const estáVisible =
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= window.innerHeight &&
  rect.right <= window.innerWidth;
console.log("  ¿Está completamente visible?:", estáVisible);

// ------------------------------------------
// PROPIEDADES offset* - DIMENSIONES Y POSICIÓN RELATIVA
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("PROPIEDADES offset* - DIMENSIONES Y POSICIÓN");
console.log("=".repeat(60) + "\n");

console.log("1. offsetWidth y offsetHeight:");
console.log("  offsetWidth:", box.offsetWidth, "px");
console.log("  offsetHeight:", box.offsetHeight, "px");
console.log("  Incluye: contenido + padding + border (NO margin)");

console.log("\n2. offsetTop y offsetLeft:");
console.log("  offsetTop:", box.offsetTop, "px");
console.log("  offsetLeft:", box.offsetLeft, "px");
console.log("  Posición relativa a offsetParent");

console.log("\n3. offsetParent:");
console.log("  offsetParent:", box.offsetParent);
console.log(
  "  Es el ancestro posicionado más cercano (position: relative/absolute/fixed)"
);
console.log("  Si no hay ancestro posicionado, es <body>");

// ------------------------------------------
// PROPIEDADES client* - ÁREA INTERNA (SIN BORDES)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("PROPIEDADES client* - ÁREA VISIBLE INTERNA");
console.log("=".repeat(60) + "\n");

console.log("1. clientWidth y clientHeight:");
console.log("  clientWidth:", box.clientWidth, "px");
console.log("  clientHeight:", box.clientHeight, "px");
console.log("  Incluye: contenido + padding (NO border ni scrollbar)");

console.log("\n2. clientTop y clientLeft:");
console.log("  clientTop:", box.clientTop, "px");
console.log("  clientLeft:", box.clientLeft, "px");
console.log("  Grosor del borde superior e izquierdo");

console.log("\n3. Dimensiones del viewport (ventana visible):");
console.log(
  "  document.documentElement.clientWidth:",
  document.documentElement.clientWidth,
  "px"
);
console.log(
  "  document.documentElement.clientHeight:",
  document.documentElement.clientHeight,
  "px"
);
console.log("  window.innerWidth:", window.innerWidth, "px");
console.log("  window.innerHeight:", window.innerHeight, "px");

// ------------------------------------------
// PROPIEDADES scroll* - ÁREA TOTAL CON DESPLAZAMIENTO
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("PROPIEDADES scroll* - DESPLAZAMIENTO Y CONTENIDO");
console.log("=".repeat(60) + "\n");

console.log("1. scrollWidth y scrollHeight:");
console.log("  scrollWidth:", box.scrollWidth, "px");
console.log("  scrollHeight:", box.scrollHeight, "px");
console.log("  Tamaño total del contenido (incluyendo partes no visibles)");

console.log("\n2. scrollTop y scrollLeft:");
console.log("  scrollTop:", box.scrollTop, "px");
console.log("  scrollLeft:", box.scrollLeft, "px");
console.log("  Cantidad de píxeles desplazados verticalmente/horizontalmente");

console.log("\n3. Scroll del documento:");
console.log(
  "  document.documentElement.scrollTop:",
  document.documentElement.scrollTop,
  "px"
);
console.log(
  "  document.documentElement.scrollLeft:",
  document.documentElement.scrollLeft,
  "px"
);
console.log("  window.pageYOffset:", window.pageYOffset, "px");
console.log("  window.pageXOffset:", window.pageXOffset, "px");

console.log("\n4. Calcular si hay scroll disponible:");
const tieneScrollVertical = box.scrollHeight > box.clientHeight;
const tieneScrollHorizontal = box.scrollWidth > box.clientWidth;
console.log("  ¿Tiene scroll vertical?:", tieneScrollVertical);
console.log("  ¿Tiene scroll horizontal?:", tieneScrollHorizontal);

// ------------------------------------------
// TABLA COMPARATIVA DE PROPIEDADES
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("TABLA COMPARATIVA");
console.log("=".repeat(60) + "\n");

console.log(`
╔════════════════╦════════════════════════════════════════════════════════╗
║ PROPIEDAD      ║ QUÉ INCLUYE                                            ║
╠════════════════╬════════════════════════════════════════════════════════╣
║ offsetWidth    ║ contenido + padding + border + scrollbar               ║
║ offsetHeight   ║ contenido + padding + border + scrollbar               ║
╠════════════════╬════════════════════════════════════════════════════════╣
║ clientWidth    ║ contenido + padding (sin border ni scrollbar)          ║
║ clientHeight   ║ contenido + padding (sin border ni scrollbar)          ║
╠════════════════╬════════════════════════════════════════════════════════╣
║ scrollWidth    ║ contenido total + padding (incluyendo overflow)        ║
║ scrollHeight   ║ contenido total + padding (incluyendo overflow)        ║
╠════════════════╬════════════════════════════════════════════════════════╣
║ offsetTop      ║ Posición relativa a offsetParent (top)                 ║
║ offsetLeft     ║ Posición relativa a offsetParent (left)                ║
╠════════════════╬════════════════════════════════════════════════════════╣
║ scrollTop      ║ Píxeles desplazados verticalmente                      ║
║ scrollLeft     ║ Píxeles desplazados horizontalmente                    ║
╚════════════════╩════════════════════════════════════════════════════════╝

VISUALIZACIÓN:

┌─────────────────────────────────────┐ ← margin (NO incluido en ninguna)
│ ┌─────────────────────────────────┐ │ ← border
│ │ ┌─────────────────────────────┐ │ │ ← padding
│ │ │                             │ │ │
│ │ │        CONTENIDO            │ │ │
│ │ │                             │ │ │
│ │ └─────────────────────────────┘ │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘

offsetWidth/Height  = ├─────────────────────────────────┤
clientWidth/Height  =   ├─────────────────────────────┤
scrollWidth/Height  =   ├──────────── (+ overflow) ───┤
`);

// ------------------------------------------
// MÉTODOS DE SCROLL
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("MÉTODOS DE SCROLL");
console.log("=".repeat(80) + "\n");

console.log("1. window.scrollTo() - Desplazar a posición específica:");
console.log("  Sintaxis: window.scrollTo(x, y)");
console.log(
  "  Sintaxis con opciones: window.scrollTo({ top: y, left: x, behavior: 'smooth' })"
);
console.log("  Ejemplo: window.scrollTo(0, 0) → Ir al inicio");
console.log(
  "  Ejemplo: window.scrollTo({ top: 500, behavior: 'smooth' }) → Scroll suave a 500px"
);

console.log(
  "\n2. window.scrollBy() - Desplazar relativo a la posición actual:"
);
console.log("  Sintaxis: window.scrollBy(x, y)");
console.log(
  "  Sintaxis con opciones: window.scrollBy({ top: y, left: x, behavior: 'smooth' })"
);
console.log("  Ejemplo: window.scrollBy(0, 100) → Bajar 100px");
console.log(
  "  Ejemplo: window.scrollBy({ top: -50, behavior: 'smooth' }) → Subir 50px"
);

console.log(
  "\n3. element.scrollIntoView() - Desplazar hasta que el elemento sea visible:"
);
console.log("  Sintaxis: element.scrollIntoView()");
console.log(
  "  Sintaxis con opciones: element.scrollIntoView({ behavior: 'smooth', block: 'start' })"
);
console.log("  Opciones de 'block': 'start', 'center', 'end', 'nearest'");
console.log("  Opciones de 'inline': 'start', 'center', 'end', 'nearest'");

// Crear una función de demostración (comentada para no ejecutar automáticamente)
function ejemploScrollTo() {
  // Desplazarse al inicio con scroll suave
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function ejemploScrollBy() {
  // Desplazarse 200px hacia abajo con scroll suave
  window.scrollBy({ top: 200, behavior: "smooth" });
}

function ejemploScrollIntoView() {
  // Hacer scroll hasta el elemento .box
  const elemento = document.querySelector(".box");
  elemento.scrollIntoView({ behavior: "smooth", block: "center" });
}

console.log("\n4. Funciones de ejemplo creadas:");
console.log("  - ejemploScrollTo() → Ir al inicio");
console.log("  - ejemploScrollBy() → Desplazarse 200px");
console.log("  - ejemploScrollIntoView() → Centrar elemento .box");
console.log("  (Puedes ejecutarlas desde la consola)");

// ------------------------------------------
// EVENTOS DE SCROLL
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("EVENTOS DE SCROLL");
console.log("=".repeat(60) + "\n");

console.log("1. Detectar scroll del documento:");

// Variable para controlar el throttle del log
let ultimoLog = 0;

window.addEventListener("scroll", () => {
  const ahora = Date.now();

  // Limitar logs a uno cada 500ms para no saturar la consola
  if (ahora - ultimoLog > 500) {
    console.log("📜 Scroll detectado:");
    console.log("  Posición Y:", window.pageYOffset, "px");
    console.log("  Posición X:", window.pageXOffset, "px");
    ultimoLog = ahora;
  }
});

console.log("✅ Event listener de scroll añadido");
console.log("   (Haz scroll para ver los eventos)");

console.log("\n2. Detectar si el usuario está al final de la página:");

window.addEventListener("scroll", () => {
  // Altura total del documento
  const alturaTotal = document.documentElement.scrollHeight;

  // Posición actual + altura visible
  const posicionActual = window.pageYOffset + window.innerHeight;

  // Si está a menos de 100px del final
  if (alturaTotal - posicionActual < 100) {
    // El usuario está cerca del final
    // Aquí podrías cargar más contenido (infinite scroll)
  }
});

console.log("✅ Detector de final de página añadido");

// ------------------------------------------
// CASOS PRÁCTICOS
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("CASOS PRÁCTICOS");
console.log("=".repeat(60) + "\n");

console.log("1. Verificar si un elemento es visible en el viewport:");

function esVisible(elemento) {
  const rect = elemento.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}

console.log("  Función esVisible(elemento) creada");
console.log("  .box visible:", esVisible(box));

console.log("\n2. Calcular distancia entre dos elementos:");

function distanciaEntre(elemento1, elemento2) {
  const rect1 = elemento1.getBoundingClientRect();
  const rect2 = elemento2.getBoundingClientRect();

  const centro1X = rect1.left + rect1.width / 2;
  const centro1Y = rect1.top + rect1.height / 2;
  const centro2X = rect2.left + rect2.width / 2;
  const centro2Y = rect2.top + rect2.height / 2;

  const distanciaX = centro2X - centro1X;
  const distanciaY = centro2Y - centro1Y;

  return Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
}

console.log("  Función distanciaEntre(el1, el2) creada");

const container = document.querySelector(".container");
const distancia = distanciaEntre(box, container);
console.log("  Distancia entre .box y .container:", distancia.toFixed(2), "px");

console.log("\n3. Detectar si el usuario ha hecho scroll hacia abajo:");

let ultimaPosicionScroll = window.pageYOffset;

window.addEventListener("scroll", () => {
  const posicionActual = window.pageYOffset;

  if (posicionActual > ultimaPosicionScroll) {
    // Scroll hacia ABAJO
    // Aquí podrías ocultar un navbar
  } else {
    // Scroll hacia ARRIBA
    // Aquí podrías mostrar un navbar
  }

  ultimaPosicionScroll = posicionActual;
});

console.log("  Detector de dirección de scroll añadido");

console.log("\n4. Crear botón 'Volver arriba':");

function crearBotonVolverArriba() {
  const boton = document.createElement("button");
  boton.textContent = "↑ Arriba";
  boton.className = "btn";
  boton.style.position = "fixed";
  boton.style.bottom = "20px";
  boton.style.right = "20px";
  boton.style.display = "none"; // Oculto por defecto

  // Mostrar/ocultar según scroll
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      boton.style.display = "block";
    } else {
      boton.style.display = "none";
    }
  });

  // Acción: scroll al inicio
  boton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.body.appendChild(boton);
  return boton;
}

// Crear el botón (comentado para no agregarlo automáticamente)
// const botonArriba = crearBotonVolverArriba();

console.log("  Función crearBotonVolverArriba() creada");
console.log("  (Descomenta para usarla)");

// ------------------------------------------
// RESUMEN Y MEJORES PRÁCTICAS
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("RESUMEN Y MEJORES PRÁCTICAS");
console.log("=".repeat(60) + "\n");

console.log(`
OBTENER DIMENSIONES:

Para el tamaño del elemento:
  offsetWidth/Height    → Incluye border y scrollbar
  clientWidth/Height    → Sin border ni scrollbar
  scrollWidth/Height    → Contenido total (con overflow)

Para posición del elemento:
  getBoundingClientRect() → Posición relativa al viewport (RECOMENDADO)
  offsetTop/Left          → Posición relativa a offsetParent
  
Para scroll:
  scrollTop/Left          → Cantidad desplazada
  scrollHeight/Width      → Tamaño total del contenido

MÉTODOS DE SCROLL:

  window.scrollTo(x, y)              → Posición absoluta
  window.scrollBy(x, y)              → Posición relativa
  element.scrollIntoView()           → Centrar elemento
  
  Todos aceptan { behavior: 'smooth' } para scroll suave

MEJORES PRÁCTICAS:

1. DIMENSIONES
   ✓ Usar getBoundingClientRect() para posición y tamaño
   ✓ Es el método más completo y preciso
   ✓ Funciona bien con transforms CSS

2. SCROLL
   ✓ Usar { behavior: 'smooth' } para mejor UX
   ✓ Throttle/debounce los eventos de scroll
   ✓ Usar IntersectionObserver para detectar visibilidad (más eficiente)

3. RENDIMIENTO
   ✗ NO acceder a estas propiedades en bucles
   ✗ NO combinar lecturas y escrituras del DOM
   ✓ Cachear valores si los necesitas múltiples veces
   ✓ Usar requestAnimationFrame para animaciones

4. COMPATIBILIDAD
   ✓ getBoundingClientRect() → Todos los navegadores modernos
   ✓ scrollTo/scrollBy con opciones → IE no soporta 'behavior'
   ✓ Usar polyfills solo si necesitas IE

CASOS DE USO COMUNES:

  Lazy loading de imágenes      → IntersectionObserver + getBoundingClientRect
  Infinite scroll               → Detectar final de página con scroll events
  Navbar que se oculta          → Detectar dirección de scroll
  Smooth scroll interno         → scrollIntoView({ behavior: 'smooth' })
  Tooltips posicionados         → getBoundingClientRect() del elemento
  Parallax scrolling            → Combinar pageYOffset con transforms
  Detectar elementos visibles   → getBoundingClientRect() + viewport size
  Botón "volver arriba"         → pageYOffset > threshold
`);

console.log("\n" + "=".repeat(80));
console.log("FIN - DIMENSIONES Y POSICIONAMIENTO");
console.log("=".repeat(80) + "\n");
