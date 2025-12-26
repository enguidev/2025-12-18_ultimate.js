// ============================================
// SECCIÓN 23: OBSERVADORES (OBSERVERS)
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log(
  "13 - OBSERVADORES (MutationObserver, IntersectionObserver, ResizeObserver)"
);
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// MUTATIONOBSERVER - DETECTAR CAMBIOS EN EL DOM
// ------------------------------------------

console.log("MUTATIONOBSERVER - DETECTAR CAMBIOS EN EL DOM:\n");

console.log("1. ¿Qué es MutationObserver?");
console.log("   Permite observar cambios en el DOM en tiempo real");
console.log(
  "   Detecta: agregados, eliminaciones, cambios de atributos, cambios de texto"
);
console.log("   Reemplaza a: DOMSubtreeModified (obsoleto)");

// Seleccionar un elemento para observar
const containerObservado = document.querySelector(".container");

// Crear el callback que se ejecutará cuando haya cambios
const mutationCallback = (mutations) => {
  mutations.forEach((mutation) => {
    console.log("\n🔄 Cambio detectado en el DOM:");
    console.log("  Tipo:", mutation.type);

    if (mutation.type === "childList") {
      console.log("  Nodos añadidos:", mutation.addedNodes);
      console.log("  Nodos eliminados:", mutation.removedNodes);
    } else if (mutation.type === "attributes") {
      console.log("  Atributo modificado:", mutation.attributeName);
      console.log("  Valor anterior:", mutation.oldValue);
    } else if (mutation.type === "characterData") {
      console.log("  Texto modificado");
      console.log("  Valor anterior:", mutation.oldValue);
    }

    console.log("  Elemento afectado:", mutation.target);
  });
};

// Configurar qué cambios observar
const mutationConfig = {
  childList: true, // Observar adición/eliminación de hijos
  attributes: true, // Observar cambios en atributos
  characterData: true, // Observar cambios en el texto
  subtree: true, // Observar también descendientes
  attributeOldValue: true, // Guardar valor anterior de atributos
  characterDataOldValue: true, // Guardar valor anterior de texto
};

// Crear el observer
const mutationObserver = new MutationObserver(mutationCallback);

// Iniciar la observación
mutationObserver.observe(containerObservado, mutationConfig);

console.log("\n2. MutationObserver creado y activo");
console.log("   Observando:", containerObservado);
console.log("   Configuración:", mutationConfig);

// Función para probar el observer
function probarMutationObserver() {
  console.log("\n3. Probando MutationObserver...");

  // Añadir un nuevo elemento
  const nuevoP = document.createElement("p");
  nuevoP.textContent = "Elemento añadido para probar MutationObserver";
  nuevoP.className = "texto";
  containerObservado.appendChild(nuevoP);

  // Modificar un atributo
  setTimeout(() => {
    containerObservado.setAttribute("data-test", "valor-modificado");
  }, 100);

  // Modificar texto
  setTimeout(() => {
    const primerTexto = containerObservado.querySelector(".texto");
    if (primerTexto) {
      primerTexto.textContent = "Texto modificado por MutationObserver";
    }
  }, 200);
}

// Ejecutar la prueba (comentada para no ejecutar automáticamente)
// probarMutationObserver();

console.log("   Función probarMutationObserver() creada");
console.log("   (Ejecuta desde la consola para ver los cambios detectados)");

console.log("\n4. Métodos del MutationObserver:");
console.log("   observe(elemento, config)  → Iniciar observación");
console.log("   disconnect()               → Detener observación");
console.log("   takeRecords()              → Obtener cambios pendientes");

// ------------------------------------------
// INTERSECTIONOBSERVER - DETECTAR VISIBILIDAD
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("INTERSECTIONOBSERVER - DETECTAR VISIBILIDAD DE ELEMENTOS");
console.log("=".repeat(80) + "\n");

console.log("1. ¿Qué es IntersectionObserver?");
console.log("   Detecta cuando un elemento entra/sale del viewport");
console.log("   Detecta cuánto del elemento es visible (porcentaje)");
console.log("   Más eficiente que: eventos scroll + getBoundingClientRect()");
console.log(
  "   Casos de uso: lazy loading, animaciones al scroll, infinite scroll"
);

// Callback que se ejecuta cuando cambia la intersección
const intersectionCallback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log("\n👁️ Cambio de visibilidad detectado:");
    console.log("  Elemento:", entry.target);
    console.log("  ¿Es visible?:", entry.isIntersecting);
    console.log("  Ratio de intersección:", entry.intersectionRatio);
    console.log("  Rectángulo del elemento:", entry.boundingClientRect);
    console.log("  Rectángulo de intersección:", entry.intersectionRect);

    // Ejemplo: aplicar clase cuando es visible
    if (entry.isIntersecting) {
      entry.target.style.backgroundColor = "#c8e6c9";
      console.log("  ✅ Elemento ahora visible - fondo verde aplicado");
    } else {
      entry.target.style.backgroundColor = "";
      console.log("  ❌ Elemento ya no visible - fondo restaurado");
    }
  });
};

// Configurar el observer
const intersectionConfig = {
  root: null, // null = viewport del navegador
  rootMargin: "0px", // Margen alrededor del root (como CSS margin)
  threshold: 0.5, // 0.5 = ejecutar cuando 50% del elemento es visible
  // threshold puede ser un array: [0, 0.25, 0.5, 0.75, 1]
};

// Crear el observer
const intersectionObserver = new IntersectionObserver(
  intersectionCallback,
  intersectionConfig
);

// Observar elementos
const elementosAObservar = document.querySelectorAll(".box, .origen, .destino");
elementosAObservar.forEach((elemento) => {
  intersectionObserver.observe(elemento);
});

console.log("\n2. IntersectionObserver creado y activo");
console.log("   Observando", elementosAObservar.length, "elementos");
console.log("   Threshold:", intersectionConfig.threshold);
console.log("   (Haz scroll para ver los cambios)");

console.log("\n3. Ejemplo práctico: Lazy Loading de imágenes");

function lazyLoadImages() {
  const imagenesLazy = document.querySelectorAll("img[data-src]");

  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        lazyObserver.unobserve(img);
        console.log("  🖼️ Imagen cargada:", img.src);
      }
    });
  });

  imagenesLazy.forEach((img) => lazyObserver.observe(img));

  return lazyObserver;
}

console.log("   Función lazyLoadImages() creada");
console.log(
  "   Uso: <img data-src='url.jpg' /> se carga solo cuando es visible"
);

console.log("\n4. Ejemplo práctico: Infinite Scroll");

function configurarInfiniteScroll(callback) {
  const sentinel = document.createElement("div");
  sentinel.style.height = "1px";
  document.body.appendChild(sentinel);

  const infiniteObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("  📜 Final de página alcanzado - cargando más contenido...");
      callback(); // Función para cargar más contenido
    }
  });

  infiniteObserver.observe(sentinel);
  return infiniteObserver;
}

console.log("   Función configurarInfiniteScroll(callback) creada");
console.log("   Detecta cuando el usuario llega al final para cargar más");

console.log("\n5. Métodos del IntersectionObserver:");
console.log("   observe(elemento)      → Iniciar observación de un elemento");
console.log("   unobserve(elemento)    → Dejar de observar un elemento");
console.log("   disconnect()           → Detener todas las observaciones");
console.log("   takeRecords()          → Obtener cambios pendientes");

// ------------------------------------------
// RESIZEOBSERVER - DETECTAR CAMBIOS DE TAMAÑO
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("RESIZEOBSERVER - DETECTAR CAMBIOS DE TAMAÑO");
console.log("=".repeat(80) + "\n");

console.log("1. ¿Qué es ResizeObserver?");
console.log("   Detecta cuando un elemento cambia de tamaño");
console.log("   Más eficiente que: window.resize + polling");
console.log(
  "   Casos de uso: layouts responsive, gráficos adaptativos, componentes dinámicos"
);

// Callback que se ejecuta cuando el elemento cambia de tamaño
const resizeCallback = (entries) => {
  entries.forEach((entry) => {
    console.log("\n📏 Cambio de tamaño detectado:");
    console.log("  Elemento:", entry.target);
    console.log("  Dimensiones nuevas:", {
      width: entry.contentRect.width,
      height: entry.contentRect.height,
    });
    console.log("  Border box size:", entry.borderBoxSize);
    console.log("  Content box size:", entry.contentBoxSize);

    // Ejemplo: ajustar contenido según tamaño
    const ancho = entry.contentRect.width;
    if (ancho < 300) {
      entry.target.style.fontSize = "12px";
      console.log("  📱 Tamaño pequeño - fuente reducida");
    } else if (ancho < 600) {
      entry.target.style.fontSize = "14px";
      console.log("  💻 Tamaño mediano - fuente normal");
    } else {
      entry.target.style.fontSize = "16px";
      console.log("  🖥️ Tamaño grande - fuente aumentada");
    }
  });
};

// Crear el observer
const resizeObserver = new ResizeObserver(resizeCallback);

// Observar elementos
const elementoResizable = document.querySelector(".wrapper");
resizeObserver.observe(elementoResizable);

console.log("\n2. ResizeObserver creado y activo");
console.log("   Observando:", elementoResizable);
console.log("   (Cambia el tamaño de la ventana para ver los cambios)");

console.log("\n3. Ejemplo práctico: Gráfico responsive");

function graficoResponsive(contenedor) {
  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const ancho = entry.contentRect.width;
      const alto = entry.contentRect.height;

      console.log(`  📊 Redibujando gráfico: ${ancho}x${alto}px`);
      // Aquí redibujarías el gráfico con las nuevas dimensiones
    }
  });

  observer.observe(contenedor);
  return observer;
}

console.log("   Función graficoResponsive(contenedor) creada");
console.log("   Redibuja gráficos automáticamente al cambiar tamaño");

console.log("\n4. Métodos del ResizeObserver:");
console.log("   observe(elemento)      → Iniciar observación");
console.log("   unobserve(elemento)    → Detener observación de un elemento");
console.log("   disconnect()           → Detener todas las observaciones");

// ------------------------------------------
// COMPARACIÓN DE OBSERVADORES
// ------------------------------------------

console.log("\n\n" + "=".repeat(80));
console.log("COMPARACIÓN DE OBSERVADORES");
console.log("=".repeat(80) + "\n");

console.log(`
╔══════════════════════╦═══════════════════════════════════════════════════╗
║ OBSERVER             ║ QUÉ OBSERVA                                       ║
╠══════════════════════╬═══════════════════════════════════════════════════╣
║ MutationObserver     ║ Cambios en el DOM (atributos, hijos, texto)      ║
║                      ║ Útil para: detectar modificaciones dinámicas      ║
╠══════════════════════╬═══════════════════════════════════════════════════╣
║ IntersectionObserver ║ Visibilidad de elementos (entran/salen viewport) ║
║                      ║ Útil para: lazy loading, animaciones, analytics   ║
╠══════════════════════╬═══════════════════════════════════════════════════╣
║ ResizeObserver       ║ Cambios de tamaño de elementos                   ║
║                      ║ Útil para: layouts responsive, gráficos           ║
╚══════════════════════╩═══════════════════════════════════════════════════╝

CUÁNDO USAR CADA UNO:

MutationObserver:
  ✓ Detectar cuando se añaden/eliminan elementos
  ✓ Sincronizar con cambios en el DOM hechos por otras librerías
  ✓ Validar cambios en formularios dinámicos
  ✓ Implementar "undo/redo" para cambios en el DOM

IntersectionObserver:
  ✓ Lazy loading de imágenes/videos
  ✓ Infinite scroll (cargar más contenido)
  ✓ Animaciones al hacer scroll
  ✓ Analytics (rastrear qué ven los usuarios)
  ✓ Pausar videos cuando no son visibles

ResizeObserver:
  ✓ Gráficos y visualizaciones que se adaptan al contenedor
  ✓ Layouts que dependen del tamaño de elementos
  ✓ Componentes responsive sin media queries
  ✓ Ajustar contenido cuando cambia el tamaño del contenedor
`);

// ------------------------------------------
// MEJORES PRÁCTICAS
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("MEJORES PRÁCTICAS");
console.log("=".repeat(60) + "\n");

console.log(`
1. RENDIMIENTO
   ✓ SIEMPRE llamar a disconnect() cuando ya no necesites el observer
   ✓ No hagas trabajo pesado dentro de los callbacks
   ✓ Usa requestAnimationFrame() para cambios visuales
   ✓ Considera debounce/throttle si el callback se ejecuta mucho

2. MUTATIONOBSERVER
   ✓ Sé específico con la configuración (no observes todo si no lo necesitas)
   ✓ Usa subtree: true solo si realmente necesitas observar descendientes
   ✓ Desconecta el observer antes de hacer muchos cambios en el DOM

3. INTERSECTIONOBSERVER
   ✓ Usa threshold apropiado (0 = cualquier píxel, 1 = completamente visible)
   ✓ Considera rootMargin para detectar "antes" de que sea visible
   ✓ Siempre unobserve() después de cargar (lazy loading)
   ✓ Más eficiente que eventos scroll + getBoundingClientRect()

4. RESIZEOBSERVER
   ✓ Evita bucles infinitos (cambiar tamaño en el callback que detecta cambio de tamaño)
   ✓ Usa para elementos específicos, no para todo el documento
   ✓ Más eficiente que window.addEventListener('resize')

5. COMPATIBILIDAD
   ✓ MutationObserver → Soportado en todos los navegadores modernos
   ✓ IntersectionObserver → IE no soporta (usa polyfill si lo necesitas)
   ✓ ResizeObserver → El más nuevo, verifica compatibilidad

6. DEBUGGING
   ✓ Usa console.log dentro de callbacks para entender qué se detecta
   ✓ Verifica que disconnect() se llame apropiadamente
   ✓ Cuidado con loops infinitos de observación

EJEMPLO DE LIMPIEZA:

// Crear observer
const observer = new IntersectionObserver(callback);
observer.observe(elemento);

// Limpiar cuando el componente se desmonta
function cleanup() {
  observer.disconnect();
}

// En frameworks como React/Vue:
useEffect(() => {
  const observer = new IntersectionObserver(callback);
  observer.observe(elemento);
  
  return () => observer.disconnect(); // Cleanup
}, []);
`);

console.log("\n" + "=".repeat(80));
console.log("FIN - OBSERVADORES");
console.log("=".repeat(80) + "\n");
