// ============================================
// SECCIÓN 26: HISTORY API - NAVEGACIÓN SIN RECARGAR
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("17 - HISTORY API - NAVEGACIÓN SIN RECARGAR LA PÁGINA");
console.log("=".repeat(80) + "\n");

// ============================================
// INTRODUCCIÓN A HISTORY API
// ============================================

console.log("¿QUÉ ES HISTORY API?\n");
console.log("  - API para manipular el historial del navegador");
console.log("  - Permite cambiar la URL sin recargar la página");
console.log("  - Base de las Single Page Applications (SPA)");
console.log("  - Usado por frameworks como React Router, Vue Router, etc.\n");

// ------------------------------------------
// PROPIEDADES BÁSICAS DE HISTORY
// ------------------------------------------

console.log("=".repeat(60));
console.log("PROPIEDADES DE HISTORY");
console.log("=".repeat(60) + "\n");

console.log("1. PROPIEDADES BÁSICAS:\n");

// length - Número de entradas en el historial
console.log("  history.length:", history.length);
console.log("    → Número de páginas en el historial de esta sesión");

// state - Estado actual asociado a la URL
console.log("\n  history.state:", history.state);
console.log("    → Datos guardados con pushState/replaceState");
console.log("    → null si no hay estado guardado");

// scrollRestoration - Comportamiento del scroll al navegar
console.log("\n  history.scrollRestoration:", history.scrollRestoration);
console.log("    → 'auto' (por defecto): restaura posición de scroll");
console.log("    → 'manual': no restaura, debes manejarlo tú");

// ============================================
// MÉTODOS DE NAVEGACIÓN BÁSICOS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("MÉTODOS DE NAVEGACIÓN BÁSICOS");
console.log("=".repeat(60) + "\n");

console.log("2. NAVEGACIÓN EN EL HISTORIAL:\n");

// Crear botones para demostración
const navContainer = document.createElement("div");
navContainer.style.cssText = `
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

navContainer.innerHTML = `
  <h3 style="margin-top: 0; color: #333;">Navegación del Historial</h3>
  <div style="display: flex; gap: 10px; margin-bottom: 15px;">
    <button id="btn-back" class="btn">⬅️ Atrás (back)</button>
    <button id="btn-forward" class="btn">➡️ Adelante (forward)</button>
    <button id="btn-go" class="btn">🔄 Ir a -2 (go)</button>
  </div>
  <p style="color: #666; font-size: 14px;">
    Estos botones funcionan igual que los botones del navegador
  </p>
`;

document.body.appendChild(navContainer);

// history.back() - Ir a la página anterior
document.getElementById("btn-back").addEventListener("click", () => {
  console.log("\n⬅️ history.back() - Ir atrás");
  console.log("  Equivalente a: history.go(-1)");
  // history.back(); // Descomentado para demostración
  console.log("  (Descomentado para no cambiar de página en la demo)");
});

// history.forward() - Ir a la página siguiente
document.getElementById("btn-forward").addEventListener("click", () => {
  console.log("\n➡️ history.forward() - Ir adelante");
  console.log("  Equivalente a: history.go(1)");
  // history.forward(); // Descomentado para demostración
  console.log("  (Descomentado para no cambiar de página en la demo)");
});

// history.go(n) - Ir a una posición específica
document.getElementById("btn-go").addEventListener("click", () => {
  console.log("\n🔄 history.go(-2) - Ir 2 páginas atrás");
  console.log("  Valores:");
  console.log("    go(-1) = atrás");
  console.log("    go(1) = adelante");
  console.log("    go(-2) = 2 páginas atrás");
  console.log("    go(0) o go() = recargar página");
  // history.go(-2); // Descomentado para demostración
  console.log("  (Descomentado para no cambiar de página en la demo)");
});

console.log("  Métodos básicos:");
console.log("    history.back() → Página anterior");
console.log("    history.forward() → Página siguiente");
console.log("    history.go(n) → n páginas (+ adelante, - atrás)\n");

// ============================================
// PUSHSTATE - AÑADIR ENTRADA AL HISTORIAL
// ============================================

console.log("\n" + "=".repeat(60));
console.log("PUSHSTATE - AÑADIR AL HISTORIAL");
console.log("=".repeat(60) + "\n");

console.log("3. history.pushState():\n");

// Crear interfaz para pushState
const pushStateContainer = document.createElement("div");
pushStateContainer.style.cssText = navContainer.style.cssText;

pushStateContainer.innerHTML = `
  <h3 style="margin-top: 0; color: #333;">pushState - Añadir al historial</h3>
  <p style="color: #666; font-size: 14px;">
    Añade una nueva entrada al historial SIN recargar la página
  </p>
  
  <div style="margin: 15px 0;">
    <label style="display: block; margin-bottom: 5px; font-weight: bold;">URL:</label>
    <input type="text" id="push-url" value="/page-1" 
           style="width: 100%; padding: 8px; border: 2px solid #ddd; border-radius: 4px;">
  </div>
  
  <div style="margin: 15px 0;">
    <label style="display: block; margin-bottom: 5px; font-weight: bold;">Título:</label>
    <input type="text" id="push-title" value="Página 1" 
           style="width: 100%; padding: 8px; border: 2px solid #ddd; border-radius: 4px;">
  </div>
  
  <div style="margin: 15px 0;">
    <label style="display: block; margin-bottom: 5px; font-weight: bold;">Estado (JSON):</label>
    <input type="text" id="push-state" value='{"page": 1, "data": "ejemplo"}' 
           style="width: 100%; padding: 8px; border: 2px solid #ddd; border-radius: 4px;">
  </div>
  
  <button id="btn-push" class="btn" style="width: 100%;">➕ Añadir con pushState</button>
  
  <div id="current-state" style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Estado actual:</strong> <span id="state-display">null</span>
  </div>
`;

document.body.appendChild(pushStateContainer);

document.getElementById("btn-push").addEventListener("click", () => {
  const url = document.getElementById("push-url").value;
  const title = document.getElementById("push-title").value;
  const stateInput = document.getElementById("push-state").value;

  try {
    const state = JSON.parse(stateInput);

    console.log("\n➕ history.pushState() ejecutado:");
    console.log("  URL:", url);
    console.log("  Título:", title);
    console.log("  Estado:", state);

    // pushState(state, title, url)
    // - state: Objeto con datos (máx 640KB)
    // - title: Título (mayoría navegadores lo ignoran)
    // - url: Nueva URL (debe ser del mismo origen)
    history.pushState(state, title, url);

    // Actualizar display
    document.getElementById("state-display").textContent = JSON.stringify(
      history.state
    );

    console.log("  ✅ URL cambiada a:", window.location.pathname);
    console.log("  ✅ Estado guardado:", history.state);
    console.log("  ℹ️ Nota: La página NO se recargó");
  } catch (error) {
    console.error("  ❌ Error al parsear el JSON del estado:", error);
  }
});

console.log("  Sintaxis: history.pushState(state, title, url)");
console.log("  - state: Objeto con datos (serializable)");
console.log("  - title: Título de la página (ignorado por navegadores)");
console.log("  - url: Nueva URL (relativa o absoluta del mismo origen)");
console.log("\n  Prueba: Cambia los valores y haz clic en 'Añadir'\n");

// ============================================
// REPLACESTATE - MODIFICAR ENTRADA ACTUAL
// ============================================

console.log("\n" + "=".repeat(60));
console.log("REPLACESTATE - MODIFICAR HISTORIAL ACTUAL");
console.log("=".repeat(60) + "\n");

console.log("4. history.replaceState():\n");

// Crear interfaz para replaceState
const replaceStateContainer = document.createElement("div");
replaceStateContainer.style.cssText = navContainer.style.cssText;

replaceStateContainer.innerHTML = `
  <h3 style="margin-top: 0; color: #333;">replaceState - Modificar entrada actual</h3>
  <p style="color: #666; font-size: 14px;">
    Modifica la entrada actual del historial SIN añadir una nueva
  </p>
  
  <div style="margin: 15px 0;">
    <label style="display: block; margin-bottom: 5px; font-weight: bold;">Nueva URL:</label>
    <input type="text" id="replace-url" value="/updated-page" 
           style="width: 100%; padding: 8px; border: 2px solid #ddd; border-radius: 4px;">
  </div>
  
  <div style="margin: 15px 0;">
    <label style="display: block; margin-bottom: 5px; font-weight: bold;">Nuevo Estado:</label>
    <input type="text" id="replace-state" value='{"updated": true}' 
           style="width: 100%; padding: 8px; border: 2px solid #ddd; border-radius: 4px;">
  </div>
  
  <button id="btn-replace" class="btn" style="width: 100%;">🔄 Reemplazar con replaceState</button>
`;

document.body.appendChild(replaceStateContainer);

document.getElementById("btn-replace").addEventListener("click", () => {
  const url = document.getElementById("replace-url").value;
  const stateInput = document.getElementById("replace-state").value;

  try {
    const state = JSON.parse(stateInput);

    console.log("\n🔄 history.replaceState() ejecutado:");
    console.log("  Nueva URL:", url);
    console.log("  Nuevo Estado:", state);

    // replaceState(state, title, url)
    // Mismos parámetros que pushState
    history.replaceState(state, "", url);

    // Actualizar display del estado
    document.getElementById("state-display").textContent = JSON.stringify(
      history.state
    );

    console.log("  ✅ URL modificada a:", window.location.pathname);
    console.log("  ✅ Estado actualizado:", history.state);
    console.log("  ℹ️ Nota: NO se añadió entrada al historial");
  } catch (error) {
    console.error("  ❌ Error al parsear el JSON del estado:", error);
  }
});

console.log("  Sintaxis: history.replaceState(state, title, url)");
console.log("  Diferencia con pushState:");
console.log("    pushState → AÑADE nueva entrada");
console.log("    replaceState → MODIFICA entrada actual");
console.log("\n  Prueba: Modifica los valores y haz clic en 'Reemplazar'\n");

// ============================================
// EVENTO POPSTATE
// ============================================

console.log("\n" + "=".repeat(60));
console.log("EVENTO POPSTATE - DETECTAR NAVEGACIÓN");
console.log("=".repeat(60) + "\n");

console.log("5. window.addEventListener('popstate'):\n");

// Crear display para eventos popstate
const popstateDisplay = document.createElement("div");
popstateDisplay.style.cssText = `
  background: #e8f5e9;
  border: 2px solid #4CAF50;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  font-family: monospace;
  white-space: pre-wrap;
`;
popstateDisplay.textContent = "Eventos popstate aparecerán aquí...";
document.body.appendChild(popstateDisplay);

// Escuchar evento popstate
window.addEventListener("popstate", (e) => {
  console.log("\n🔔 EVENTO POPSTATE - Navegación detectada:");
  console.log("  Estado:", e.state);
  console.log("  URL actual:", window.location.pathname);
  console.log("  Disparado por: botón atrás/adelante o history.go()");

  // Actualizar display
  const mensaje = `
🔔 POPSTATE DETECTADO
━━━━━━━━━━━━━━━━━━━━
Timestamp: ${new Date().toLocaleTimeString()}
Estado: ${JSON.stringify(e.state, null, 2)}
URL: ${window.location.pathname}
  `;

  popstateDisplay.textContent = mensaje;
  popstateDisplay.style.background = "#fff3cd";

  setTimeout(() => {
    popstateDisplay.style.background = "#e8f5e9";
  }, 1000);

  // Aquí normalmente cargarías el contenido de la nueva "página"
  // En una SPA, esto dispararía la lógica de enrutamiento
});

console.log("  Evento popstate configurado");
console.log("  Se dispara cuando:");
console.log("    - Usuario hace clic en atrás/adelante");
console.log("    - Se llama a history.back()/forward()/go()");
console.log("  NO se dispara cuando:");
console.log("    - Se llama a pushState() o replaceState()");
console.log(
  "\n  Prueba: Añade páginas con pushState, luego usa el botón atrás\n"
);

// ============================================
// EJEMPLO PRÁCTICO: MINI SPA
// ============================================

console.log("\n" + "=".repeat(60));
console.log("EJEMPLO PRÁCTICO - MINI SPA (SINGLE PAGE APP)");
console.log("=".repeat(60) + "\n");

console.log("6. SIMULACIÓN DE SPA:\n");

// Crear contenedor para la mini SPA
const spaContainer = document.createElement("div");
spaContainer.style.cssText = `
  background: white;
  border: 2px solid #2196F3;
  border-radius: 8px;
  margin: 20px 0;
  overflow: hidden;
`;

spaContainer.innerHTML = `
  <div style="background: #2196F3; padding: 15px; color: white;">
    <h3 style="margin: 0;">🌐 Mini Single Page Application</h3>
  </div>
  
  <div style="background: #f5f5f5; padding: 10px; border-bottom: 2px solid #ddd;">
    <button class="spa-link" data-page="home" style="margin: 5px;">🏠 Home</button>
    <button class="spa-link" data-page="about" style="margin: 5px;">ℹ️ About</button>
    <button class="spa-link" data-page="contact" style="margin: 5px;">📧 Contact</button>
    <button class="spa-link" data-page="products" style="margin: 5px;">🛍️ Products</button>
  </div>
  
  <div id="spa-content" style="padding: 20px; min-height: 200px;">
    <h2>🏠 Home</h2>
    <p>Bienvenido a la mini SPA. Usa los botones para navegar.</p>
  </div>
  
  <div style="background: #f5f5f5; padding: 10px; border-top: 2px solid #ddd; font-size: 14px; color: #666;">
    <strong>URL actual:</strong> <span id="spa-url">/home</span>
  </div>
`;

document.body.appendChild(spaContainer);

// Contenido de las "páginas"
const pages = {
  home: {
    title: "🏠 Home",
    content:
      "<h2>🏠 Home</h2><p>Bienvenido a la mini SPA. Usa los botones para navegar sin recargar la página.</p>",
  },
  about: {
    title: "ℹ️ About",
    content:
      "<h2>ℹ️ About</h2><p>Esta es una demostración de History API. La página NO se recarga al navegar.</p>",
  },
  contact: {
    title: "📧 Contact",
    content:
      "<h2>📧 Contact</h2><p>Email: demo@example.com<br>Tel: 123-456-7890</p>",
  },
  products: {
    title: "🛍️ Products",
    content:
      "<h2>🛍️ Products</h2><p>Producto 1: $10<br>Producto 2: $20<br>Producto 3: $30</p>",
  },
};

// Función para cargar página
function loadPage(page) {
  const pageData = pages[page] || pages.home;
  const contentDiv = document.getElementById("spa-content");
  const urlSpan = document.getElementById("spa-url");

  // Actualizar contenido
  contentDiv.innerHTML = pageData.content;
  urlSpan.textContent = "/" + page;

  console.log("  📄 Página cargada:", page);
  console.log("  🔗 URL:", "/" + page);
}

// Manejar clics en los botones de navegación
document.querySelectorAll(".spa-link").forEach((button) => {
  button.addEventListener("click", (e) => {
    const page = e.target.dataset.page;

    console.log("\n🔗 Navegando a:", page);

    // Añadir al historial
    const state = { page: page, timestamp: Date.now() };
    history.pushState(state, "", "/" + page);

    // Cargar contenido
    loadPage(page);
  });
});

// Manejar navegación con botones del navegador
window.addEventListener("popstate", (e) => {
  if (e.state && e.state.page) {
    console.log("\n⬅️ Navegación del navegador detectada");
    loadPage(e.state.page);
  }
});

console.log("  ✅ Mini SPA configurada");
console.log("  Prueba:");
console.log("    1. Haz clic en los botones de navegación");
console.log("    2. Observa cómo cambia la URL sin recargar");
console.log("    3. Usa el botón atrás del navegador");
console.log("    4. Observa cómo se restaura el contenido\n");

// ============================================
// CASOS DE USO Y CONSIDERACIONES
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CASOS DE USO Y MEJORES PRÁCTICAS");
console.log("=".repeat(60) + "\n");

console.log(`
CASOS DE USO:

1. SINGLE PAGE APPLICATIONS (SPA)
   ✓ React Router, Vue Router, Angular Router
   ✓ Navegación sin recargar página
   ✓ Experiencia de usuario fluida

2. FILTROS Y BÚSQUEDAS
   ✓ Guardar estado de filtros en URL
   ✓ Compartir URLs con filtros aplicados
   ✓ Permitir botón atrás en búsquedas

3. MODALES Y OVERLAYS
   ✓ Abrir modal → pushState
   ✓ Cerrar con botón atrás funciona
   ✓ URLs compartibles para contenido

4. PASOS DE FORMULARIOS
   ✓ Wizard/stepper con URLs únicas
   ✓ Permitir navegación entre pasos
   ✓ Restaurar estado con botón atrás

5. INFINITE SCROLL
   ✓ Actualizar URL al hacer scroll
   ✓ Mantener posición al volver
   ✓ URLs compartibles para secciones

MEJORES PRÁCTICAS:

✓ SIEMPRE manejar el evento popstate
  - Sin esto, el botón atrás no funcionará correctamente

✓ Guardar suficiente estado
  - El state debe tener toda la info para restaurar la vista
  - Máximo ~640KB por entrada

✓ URLs amigables y descriptivas
  - /products/123 ✓
  - /p?id=123 ✗ (menos claro)

✓ Sincronizar estado con URL
  - URL debe reflejar el estado de la app
  - Estado debe coincidir con la URL

✓ Manejar URL directa
  - Usuario puede copiar/pegar URL
  - Debe cargar correctamente al entrar directo

✓ SEO considerations
  - Implementar Server Side Rendering (SSR)
  - O usar técnicas de pre-rendering
  - Asegurar que contenido sea indexable

✓ Scroll restoration
  - Controlar history.scrollRestoration
  - Guardar posición de scroll en state si necesario

ERRORES COMUNES:

❌ No manejar popstate
   → Botón atrás no funciona

❌ Olvidar actualizar título
   → document.title = 'Nueva página';

❌ URLs relativas incorrectas
   → Usar URLs absolutas o relativas correctamente

❌ Estado no serializable
   → No guardar funciones, DOM nodes, etc.

❌ No validar URLs
   → Validar que la URL sea del mismo origen

❌ Depender solo del state
   → URL directa debe funcionar sin estado previo

ALTERNATIVAS Y LIBRERÍAS:

- React Router: Enrutamiento para React
- Vue Router: Enrutamiento para Vue
- Angular Router: Enrutamiento para Angular
- Page.js: Microframework de routing
- Navigo: Router ligero y simple
- Director: Router para navegadores y Node

LIMITACIONES:

⚠️ Mismo origen: Solo URLs del mismo dominio
⚠️ Tamaño del state: ~640KB máximo
⚠️ Título ignorado: Mayoría navegadores ignoran el parámetro title
⚠️ No persistente: Se pierde al cerrar pestaña
⚠️ SEO: Requiere configuración adicional

COMPATIBILIDAD:

✅ Chrome, Firefox, Safari, Edge: Soporte completo
✅ IE 10+: Soporte con prefijos
❌ IE 9 y anteriores: No soportado

RECURSOS:

📚 MDN Web Docs:
   - History API: https://developer.mozilla.org/en-US/docs/Web/API/History_API
   - pushState: https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
   - popstate: https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event

🎯 Tutoriales y guías:
   - "Understanding the History API" - HTML5 Rocks
   - "Single Page Apps with the History API" - CSS-Tricks
`);

console.log("\n" + "=".repeat(80));
console.log("✅ GUÍA DE HISTORY API COMPLETADA");
console.log("=".repeat(80) + "\n");

console.log("NOTA IMPORTANTE:");
console.log("  Esta es una demostración educativa.");
console.log("  En producción, usa librerías como React Router o Vue Router");
console.log("  que manejan muchos casos edge y optimizaciones.");
