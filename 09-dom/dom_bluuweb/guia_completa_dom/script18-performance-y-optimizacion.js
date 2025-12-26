// ============================================
// SECCIÓN 27: PERFORMANCE Y OPTIMIZACIÓN
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("18 - PERFORMANCE Y OPTIMIZACIÓN DEL DOM");
console.log("=".repeat(80) + "\n");

// ============================================
// PARTE 1: REQUESTANIMATIONFRAME
// ============================================

console.log("=".repeat(60));
console.log("REQUESTANIMATIONFRAME - ANIMACIONES FLUIDAS");
console.log("=".repeat(60) + "\n");

console.log("1. ¿QUÉ ES requestAnimationFrame?\n");
console.log("  - API para animaciones suaves y eficientes");
console.log("  - Se ejecuta antes del siguiente repaint del navegador");
console.log("  - ~60 FPS (16.67ms por frame)");
console.log("  - Se pausa automáticamente cuando la pestaña no está visible");
console.log("  - Mejor que setTimeout/setInterval para animaciones\n");

// ------------------------------------------
// EJEMPLO 1: ANIMACIÓN BÁSICA
// ------------------------------------------

console.log("EJEMPLO 1 - Animación básica con rAF:\n");

// Crear elemento para animar
const box1 = document.createElement("div");
box1.style.cssText = `
  width: 100px;
  height: 100px;
  background: #2196F3;
  border-radius: 8px;
  position: relative;
  left: 0;
  margin: 20px 0;
`;
document.body.appendChild(box1);

const btn1 = document.createElement("button");
btn1.textContent = "▶️ Animar con requestAnimationFrame";
btn1.className = "btn";
document.body.appendChild(btn1);

let animacion1;
let posicion = 0;

function animar() {
  // Incrementar posición
  posicion += 2;

  // Actualizar elemento
  box1.style.left = posicion + "px";

  // Continuar animación si no llegó al límite
  if (posicion < 500) {
    animacion1 = requestAnimationFrame(animar);
  } else {
    console.log("  ✅ Animación completada");
  }
}

btn1.addEventListener("click", () => {
  // Resetear posición
  posicion = 0;
  box1.style.left = "0";

  // Cancelar animación previa si existe
  if (animacion1) {
    cancelAnimationFrame(animacion1);
  }

  console.log("  🎬 Animación iniciada");
  animacion1 = requestAnimationFrame(animar);
});

console.log("  ✅ Ejemplo 1 configurado");
console.log("  Haz clic en el botón para ver la animación\n");

// ------------------------------------------
// EJEMPLO 2: ANIMACIÓN CON TIMESTAMP
// ------------------------------------------

console.log("\nEJEMPLO 2 - Animación con control de tiempo:\n");

const box2 = document.createElement("div");
box2.style.cssText = box1.style.cssText;
box2.style.background = "#4CAF50";
document.body.appendChild(box2);

const btn2 = document.createElement("button");
btn2.textContent = "▶️ Animar con control de velocidad";
btn2.className = "btn";
document.body.appendChild(btn2);

let animacion2;
let startTime;

function animarConTiempo(timestamp) {
  // Establecer tiempo inicial
  if (!startTime) startTime = timestamp;

  // Calcular progreso
  const progreso = timestamp - startTime;
  const duracion = 2000; // 2 segundos

  // Calcular posición basada en el tiempo
  const porcentaje = Math.min(progreso / duracion, 1);
  const nuevaPosicion = porcentaje * 500; // 0 a 500px

  // Actualizar elemento
  box2.style.left = nuevaPosicion + "px";

  // Continuar si no terminó
  if (porcentaje < 1) {
    animacion2 = requestAnimationFrame(animarConTiempo);
  } else {
    console.log("  ✅ Animación con tiempo completada");
    startTime = null;
  }
}

btn2.addEventListener("click", () => {
  // Resetear
  box2.style.left = "0";
  startTime = null;

  if (animacion2) {
    cancelAnimationFrame(animacion2);
  }

  console.log("  🎬 Animación con control de tiempo iniciada");
  animacion2 = requestAnimationFrame(animarConTiempo);
});

console.log("  ✅ Ejemplo 2 configurado");
console.log("  Duración fija de 2 segundos\n");

// ------------------------------------------
// EJEMPLO 3: EASING (SUAVIZADO)
// ------------------------------------------

console.log("\nEJEMPLO 3 - Animación con easing:\n");

const box3 = document.createElement("div");
box3.style.cssText = box1.style.cssText;
box3.style.background = "#FF5722";
document.body.appendChild(box3);

const btn3 = document.createElement("button");
btn3.textContent = "▶️ Animar con easing (suavizado)";
btn3.className = "btn";
document.body.appendChild(btn3);

// Función de easing (ease-in-out)
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

let animacion3;
let startTime3;

function animarConEasing(timestamp) {
  if (!startTime3) startTime3 = timestamp;

  const progreso = timestamp - startTime3;
  const duracion = 2000;

  const porcentaje = Math.min(progreso / duracion, 1);

  // Aplicar easing
  const porcentajeEased = easeInOutQuad(porcentaje);
  const nuevaPosicion = porcentajeEased * 500;

  box3.style.left = nuevaPosicion + "px";

  if (porcentaje < 1) {
    animacion3 = requestAnimationFrame(animarConEasing);
  } else {
    console.log("  ✅ Animación con easing completada");
    startTime3 = null;
  }
}

btn3.addEventListener("click", () => {
  box3.style.left = "0";
  startTime3 = null;

  if (animacion3) {
    cancelAnimationFrame(animacion3);
  }

  console.log("  🎬 Animación con easing iniciada");
  animacion3 = requestAnimationFrame(animarConEasing);
});

console.log("  ✅ Ejemplo 3 configurado");
console.log("  Movimiento suave con ease-in-out\n");

// ============================================
// PARTE 2: DEBOUNCE Y THROTTLE
// ============================================

console.log("\n" + "=".repeat(60));
console.log("DEBOUNCE Y THROTTLE - LIMITAR EJECUCIÓN");
console.log("=".repeat(60) + "\n");

console.log("2. ¿QUÉ SON DEBOUNCE Y THROTTLE?\n");
console.log("  DEBOUNCE:");
console.log("    - Espera a que el usuario TERMINE una acción");
console.log("    - Ejecuta DESPUÉS de un período de inactividad");
console.log("    - Útil para: búsquedas, resize, validación de inputs");
console.log("\n  THROTTLE:");
console.log("    - Ejecuta a INTERVALOS REGULARES");
console.log("    - Limita frecuencia de ejecución");
console.log("    - Útil para: scroll, mousemove, drag\n");

// ------------------------------------------
// IMPLEMENTACIÓN DE DEBOUNCE
// ------------------------------------------

console.log("IMPLEMENTACIÓN DE DEBOUNCE:\n");

/**
 * Debounce - Ejecuta función después de un período de inactividad
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Milisegundos de espera
 * @returns {Function} - Función debounced
 */
function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Ejemplo de uso: Input con búsqueda
const inputDebounce = document.createElement("input");
inputDebounce.type = "text";
inputDebounce.placeholder = "Escribe para buscar (con debounce)...";
inputDebounce.style.cssText = `
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 2px solid #2196F3;
  border-radius: 8px;
  margin: 20px 0;
`;
document.body.appendChild(inputDebounce);

const resultadoDebounce = document.createElement("div");
resultadoDebounce.style.cssText = `
  padding: 15px;
  background: #e3f2fd;
  border-radius: 8px;
  margin-bottom: 20px;
`;
resultadoDebounce.textContent = "Escribe algo para ver el debounce en acción";
document.body.appendChild(resultadoDebounce);

// Contador de llamadas
let llamadasSinDebounce = 0;
let llamadasConDebounce = 0;

// Función de búsqueda (simulada)
function buscar(texto) {
  llamadasConDebounce++;
  console.log(`  🔍 Buscando: "${texto}" (llamada #${llamadasConDebounce})`);
  resultadoDebounce.textContent = `
Buscando: "${texto}"
Llamadas SIN debounce: ${llamadasSinDebounce}
Llamadas CON debounce: ${llamadasConDebounce}
  `;
}

// Aplicar debounce (500ms de espera)
const buscarDebounced = debounce(buscar, 500);

inputDebounce.addEventListener("input", (e) => {
  llamadasSinDebounce++;
  buscarDebounced(e.target.value);
});

console.log("  ✅ Debounce implementado");
console.log("  Espera de 500ms después de dejar de escribir");
console.log("  Escribe rápido y observa cómo reduce las llamadas\n");

// ------------------------------------------
// IMPLEMENTACIÓN DE THROTTLE
// ------------------------------------------

console.log("\nIMPLEMENTACIÓN DE THROTTLE:\n");

/**
 * Throttle - Ejecuta función a intervalos regulares
 * @param {Function} func - Función a ejecutar
 * @param {number} limit - Milisegundos entre ejecuciones
 * @returns {Function} - Función throttled
 */
function throttle(func, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Ejemplo de uso: Área con scroll
const areaScroll = document.createElement("div");
areaScroll.style.cssText = `
  width: 100%;
  height: 300px;
  background: #f5f5f5;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  overflow-y: scroll;
  padding: 20px;
  margin: 20px 0;
`;
areaScroll.innerHTML = `
  <h3>Área con scroll (throttle)</h3>
  ${Array(50)
    .fill(0)
    .map((_, i) => `<p>Línea ${i + 1}</p>`)
    .join("")}
`;
document.body.appendChild(areaScroll);

const resultadoThrottle = document.createElement("div");
resultadoThrottle.style.cssText = `
  padding: 15px;
  background: #e8f5e9;
  border-radius: 8px;
  margin-bottom: 20px;
`;
resultadoThrottle.textContent =
  "Haz scroll en el área verde para ver el throttle";
document.body.appendChild(resultadoThrottle);

let scrollsSinThrottle = 0;
let scrollsConThrottle = 0;

function manejarScroll(e) {
  scrollsConThrottle++;
  const scrollTop = e.target.scrollTop;
  const scrollHeight = e.target.scrollHeight;
  const clientHeight = e.target.clientHeight;
  const porcentaje = (
    (scrollTop / (scrollHeight - clientHeight)) *
    100
  ).toFixed(1);

  console.log(`  📜 Scroll: ${porcentaje}% (llamada #${scrollsConThrottle})`);

  resultadoThrottle.textContent = `
Scroll: ${porcentaje}%
Eventos SIN throttle: ${scrollsSinThrottle}
Eventos CON throttle: ${scrollsConThrottle}
  `;
}

// Aplicar throttle (100ms entre ejecuciones)
const manejarScrollThrottled = throttle(manejarScroll, 100);

areaScroll.addEventListener("scroll", (e) => {
  scrollsSinThrottle++;
  manejarScrollThrottled(e);
});

console.log("  ✅ Throttle implementado");
console.log("  Máximo 1 ejecución cada 100ms");
console.log("  Haz scroll y observa cómo limita las llamadas\n");

// ============================================
// PARTE 3: INTERSECTION OBSERVER - LAZY LOADING
// ============================================

console.log("\n" + "=".repeat(60));
console.log("INTERSECTION OBSERVER - LAZY LOADING");
console.log("=".repeat(60) + "\n");

console.log("3. LAZY LOADING DE IMÁGENES:\n");

// Crear contenedor con imágenes
const containerLazy = document.createElement("div");
containerLazy.style.cssText = `
  margin: 20px 0;
`;

// Crear imágenes con lazy loading
const imagenes = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4",
  "https://picsum.photos/600/400?random=5",
];

imagenes.forEach((url, index) => {
  const imgContainer = document.createElement("div");
  imgContainer.style.cssText = `
    width: 600px;
    height: 400px;
    background: #f0f0f0;
    margin: 20px 0;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
  `;

  const img = document.createElement("img");
  img.dataset.src = url; // Guardar URL real en data-src
  img.alt = `Imagen ${index + 1}`;
  img.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s;
  `;

  const placeholder = document.createElement("div");
  placeholder.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #666;
    font-size: 18px;
  `;
  placeholder.textContent = `⏳ Cargando imagen ${index + 1}...`;

  imgContainer.appendChild(img);
  imgContainer.appendChild(placeholder);
  containerLazy.appendChild(imgContainer);
});

document.body.appendChild(containerLazy);

// Configurar Intersection Observer
const observerOptions = {
  root: null, // viewport
  rootMargin: "50px", // Cargar 50px antes de entrar al viewport
  threshold: 0.01, // 1% visible
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const placeholder = img.nextElementSibling;

      console.log(`  🖼️ Cargando imagen: ${img.dataset.src}`);

      // Cargar imagen
      img.src = img.dataset.src;

      img.onload = () => {
        img.style.opacity = "1";
        if (placeholder) placeholder.remove();
        console.log(`  ✅ Imagen cargada: ${img.dataset.src}`);
      };

      // Dejar de observar esta imagen
      observer.unobserve(img);
    }
  });
}, observerOptions);

// Observar todas las imágenes
containerLazy.querySelectorAll("img").forEach((img) => {
  imageObserver.observe(img);
});

console.log("  ✅ Lazy loading configurado");
console.log("  Las imágenes se cargan al hacer scroll\n");

// ============================================
// PARTE 4: PERFORMANCE TIPS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("TIPS DE PERFORMANCE");
console.log("=".repeat(60) + "\n");

console.log("4. MEDICIÓN DE PERFORMANCE:\n");

// Performance.now() - Tiempo de alta precisión
console.log("  Performance.now():");
const inicio = performance.now();

// Operación a medir
let suma = 0;
for (let i = 0; i < 1000000; i++) {
  suma += i;
}

const fin = performance.now();
const tiempo = fin - inicio;

console.log(`  ⏱️ Operación tomó: ${tiempo.toFixed(2)}ms`);

// Performance.mark() y measure()
console.log("\n  Performance.mark() y measure():");

performance.mark("inicio-operacion");

// Operación
let resultado = 0;
for (let i = 0; i < 500000; i++) {
  resultado += Math.sqrt(i);
}

performance.mark("fin-operacion");
performance.measure("duracion-operacion", "inicio-operacion", "fin-operacion");

const medicion = performance.getEntriesByName("duracion-operacion")[0];
console.log(`  ⏱️ Duración medida: ${medicion.duration.toFixed(2)}ms`);

console.log("\n  ✅ Herramientas de medición configuradas\n");

// ============================================
// MEJORES PRÁCTICAS
// ============================================

console.log("\n" + "=".repeat(80));
console.log("MEJORES PRÁCTICAS DE PERFORMANCE");
console.log("=".repeat(80) + "\n");

console.log(`
╔═══════════════════════════════════╦════════════════════════════════════════╗
║ TÉCNICA                           ║ CUÁNDO USAR                            ║
╠═══════════════════════════════════╬════════════════════════════════════════╣
║ requestAnimationFrame             ║ Animaciones visuales                   ║
║                                   ║ Cambios continuos en el DOM            ║
╠═══════════════════════════════════╬════════════════════════════════════════╣
║ Debounce                          ║ Búsquedas en tiempo real               ║
║                                   ║ Validación de inputs                   ║
║                                   ║ Eventos de resize                      ║
╠═══════════════════════════════════╬════════════════════════════════════════╣
║ Throttle                          ║ Eventos de scroll                      ║
║                                   ║ Eventos de mousemove                   ║
║                                   ║ Drag and drop                          ║
╠═══════════════════════════════════╬════════════════════════════════════════╣
║ Intersection Observer             ║ Lazy loading de imágenes               ║
║                                   ║ Infinite scroll                        ║
║                                   ║ Animaciones al hacer scroll            ║
╠═══════════════════════════════════╬════════════════════════════════════════╣
║ Performance API                   ║ Medir tiempos de operaciones           ║
║                                   ║ Debugging de performance               ║
║                                   ║ Monitoreo de aplicaciones              ║
╚═══════════════════════════════════╩════════════════════════════════════════╝

OPTIMIZACIONES DEL DOM:

1. MINIMIZAR MANIPULACIÓN DEL DOM
   ❌ MAL:
      for (let i = 0; i < 100; i++) {
        container.innerHTML += '<div>Item</div>';
      }
   
   ✅ BIEN:
      const html = Array(100).fill(0)
        .map(() => '<div>Item</div>')
        .join('');
      container.innerHTML = html;
   
   ✅ MEJOR:
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.textContent = 'Item';
        fragment.appendChild(div);
      }
      container.appendChild(fragment);

2. EVITAR REFLOWS INNECESARIOS
   ❌ MAL (causa múltiples reflows):
      element.style.width = '100px';
      element.style.height = '100px';
      element.style.margin = '10px';
   
   ✅ BIEN (un solo reflow):
      element.style.cssText = 'width: 100px; height: 100px; margin: 10px;';
   
   ✅ MEJOR (usando clases):
      element.classList.add('mi-estilo');

3. LEER Y ESCRIBIR EN LOTES
   ❌ MAL (alterna lectura/escritura):
      el1.style.height = el2.offsetHeight + 'px';
      el2.style.height = el3.offsetHeight + 'px';
      el3.style.height = el1.offsetHeight + 'px';
   
   ✅ BIEN (leer todo, luego escribir):
      const h1 = el2.offsetHeight;
      const h2 = el3.offsetHeight;
      const h3 = el1.offsetHeight;
      el1.style.height = h1 + 'px';
      el2.style.height = h2 + 'px';
      el3.style.height = h3 + 'px';

4. USAR DELEGACIÓN DE EVENTOS
   ❌ MAL:
      items.forEach(item => {
        item.addEventListener('click', handleClick);
      });
   
   ✅ BIEN:
      container.addEventListener('click', (e) => {
        if (e.target.matches('.item')) {
          handleClick(e);
        }
      });

5. VIRTUALIZAR LISTAS LARGAS
   - No renderizar 10,000 elementos a la vez
   - Usar virtualización (react-window, react-virtualized)
   - Renderizar solo elementos visibles

6. LAZY LOADING
   ✅ Usar Intersection Observer
   ✅ Cargar imágenes cuando entran al viewport
   ✅ Cargar componentes bajo demanda

7. DEBOUNCE/THROTTLE EVENTOS FRECUENTES
   ✅ scroll → throttle (100-200ms)
   ✅ resize → debounce (200-300ms)
   ✅ input (búsqueda) → debounce (300-500ms)
   ✅ mousemove → throttle (16ms = 60fps)

8. USAR requestAnimationFrame PARA ANIMACIONES
   ❌ MAL:
      setInterval(() => {
        element.style.left = pos + 'px';
        pos += 1;
      }, 16);
   
   ✅ BIEN:
      function animate() {
        element.style.left = pos + 'px';
        pos += 1;
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);

9. EVITAR CSS TRIGGERS COSTOSOS
   Triggers de layout (MUY costosos):
     - width, height, margin, padding, border
     - top, left, right, bottom
     - font-size, line-height
   
   Triggers de paint (costosos):
     - color, background
     - box-shadow, border-radius
     - visibility
   
   Solo composite (baratos):
     - transform, opacity
   
   ✅ Preferir transform y opacity para animaciones

10. MEDIR Y MONITOREAR
    ✅ Chrome DevTools → Performance tab
    ✅ Lighthouse para auditorías
    ✅ Performance API para métricas custom
    ✅ Web Vitals (LCP, FID, CLS)

HERRAMIENTAS ÚTILES:

📊 Chrome DevTools:
   - Performance tab: Grabar y analizar performance
   - Layers tab: Ver layers de composición
   - Rendering tab: Highlight repaints/reflows

🔍 Lighthouse:
   - Auditorías automáticas
   - Sugerencias de mejora
   - Métricas de performance

📈 Web Vitals:
   - LCP: Largest Contentful Paint
   - FID: First Input Delay
   - CLS: Cumulative Layout Shift

🛠️ Librerías útiles:
   - Lodash: debounce, throttle
   - IntersectionObserver polyfill
   - Web Vitals library

NÚMEROS DE REFERENCIA:

⏱️ Presupuesto de tiempo por frame (60 FPS):
   - Total disponible: 16.67ms
   - Browser overhead: ~6ms
   - Tu código: ~10ms disponibles

⏱️ Tiempos objetivo:
   - Respuesta a interacción: <100ms
   - Animación suave: 60 FPS (16.67ms)
   - Tiempo de carga inicial: <3s

💾 Tamaños objetivo:
   - JavaScript inicial: <100KB gzipped
   - Imágenes above-the-fold: <50KB cada una
   - Total de recursos: <1MB

RECURSOS ADICIONALES:

📚 Documentación:
   - MDN: Performance API
   - MDN: Intersection Observer
   - Web.dev: Performance guides

📖 Artículos recomendados:
   - "Rendering Performance" - Google Developers
   - "Optimizing JavaScript" - Web.dev
   - "CSS Triggers" - csstriggers.com

🎓 Cursos y tutoriales:
   - Web Performance Fundamentals
   - JavaScript Performance
   - React Performance Optimization
`);

console.log("\n" + "=".repeat(80));
console.log("✅ GUÍA DE PERFORMANCE Y OPTIMIZACIÓN COMPLETADA");
console.log("=".repeat(80) + "\n");

console.log("RECUERDA:");
console.log("  1. Mide antes de optimizar (no optimización prematura)");
console.log("  2. Optimiza los cuellos de botella reales");
console.log("  3. Mantén el código legible y mantenible");
console.log("  4. Usa las herramientas de DevTools regularmente");
console.log("  5. Performance es un proceso continuo, no una tarea única");
