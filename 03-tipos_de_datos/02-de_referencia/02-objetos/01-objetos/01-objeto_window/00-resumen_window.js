//--------------------------------------------------------------------------------------
// OBJETO WINDOW - RESUMEN Y GUÍA COMPLETA
//--------------------------------------------------------------------------------------

/*
🌐 OBJETO WINDOW

El objeto window es el objeto global cuando ejecutamos JavaScript en un navegador.
Representa la ventana del navegador y contiene todas las APIs principales para
interactuar con el entorno del navegador.

Siempre está disponible, y no hace falta nombrarlo expresamente para acceder
a sus métodos o atributos (aunque es buena práctica hacerlo para mayor claridad).
*/

//--------------------------------------------------------------------------------------
// 📚 CONTENIDO DE ESTA CARPETA
//--------------------------------------------------------------------------------------

/*
Esta carpeta contiene archivos organizados por temas:

📄 00-resumen_window.js (ESTE ARCHIVO)
   - Índice y guía rápida de referencia
   - Tablas comparativas
   - Cheat sheet

📄 01-interaccion_usuario.js
   - alert(), prompt(), confirm()
   - Validación de datos
   - Modales personalizados (alternativa recomendada)

📄 02-temporizadores.js
   - setTimeout(), setInterval()
   - clearTimeout(), clearInterval()
   - Ejemplos: reloj, cuenta atrás, auto-save, polling

📄 03-storage.js
   - localStorage (persistente)
   - sessionStorage (temporal)
   - Manejo de objetos JSON
   - Sistema de caché, preferencias, tareas

📄 04-geolocation.js
   - navigator.geolocation
   - getCurrentPosition(), watchPosition()
   - Tracking de rutas
   - Geocercas (geofencing)

📄 05-apis_modernas.js
   - Clipboard API (copiar/pegar)
   - Notifications API
   - Vibration API
   - Battery Status API
   - Network Information API
   - Page Visibility API
   - Screen Orientation API
   - Web Share API
   - MediaDevices API

📄 ejercicios_window.js
   - 15+ ejercicios prácticos con soluciones
   - Casos de uso reales
   - Proyectos completos
*/

//--------------------------------------------------------------------------------------
// 🗺️ MAPA MENTAL DEL OBJETO WINDOW
//--------------------------------------------------------------------------------------

/*
window
├── Interacción Usuario
│   ├── alert()
│   ├── prompt()
│   └── confirm()
│
├── Tiempo
│   ├── setTimeout()
│   ├── setInterval()
│   ├── clearTimeout()
│   └── clearInterval()
│
├── Ventanas y Navegación
│   ├── open()
│   ├── location
│   │   ├── href
│   │   ├── reload()
│   │   ├── assign()
│   │   └── replace()
│   └── history
│       ├── back()
│       ├── forward()
│       └── go()
│
├── Propiedades
│   ├── innerWidth / innerHeight
│   ├── outerWidth / outerHeight
│   ├── screenX / screenY
│   ├── pageXOffset / pageYOffset
│   └── screen
│       ├── width / height
│       ├── availWidth / availHeight
│       └── orientation
│
├── Navigator
│   ├── userAgent
│   ├── language
│   ├── platform
│   ├── onLine
│   ├── cookieEnabled
│   ├── geolocation
│   └── clipboard
│
├── Storage
│   ├── localStorage
│   │   ├── setItem()
│   │   ├── getItem()
│   │   ├── removeItem()
│   │   └── clear()
│   └── sessionStorage
│       └── (mismos métodos)
│
├── Eventos
│   ├── load
│   ├── resize
│   ├── scroll
│   ├── beforeunload
│   ├── online / offline
│   └── visibilitychange
│
└── APIs Modernas
    ├── Clipboard
    ├── Notifications
    ├── Vibration
    ├── Battery
    ├── Page Visibility
    └── MediaDevices
*/

//--------------------------------------------------------------------------------------
// 📊 TABLA RESUMEN - MÉTODOS Y PROPIEDADES PRINCIPALES
//--------------------------------------------------------------------------------------

const RESUMEN_WINDOW = {
  // 💬 INTERACCIÓN
  interaccion: {
    alert: "Mostrar mensaje simple",
    confirm: "Pedir confirmación (true/false)",
    prompt: "Solicitar entrada (string/null)",
  },

  // ⏱️ TEMPORIZADORES
  temporizadores: {
    setTimeout: "Ejecutar UNA VEZ después de X ms",
    setInterval: "Ejecutar REPETIDAMENTE cada X ms",
    clearTimeout: "Cancelar setTimeout",
    clearInterval: "Cancelar setInterval",
  },

  // 🌐 NAVEGACIÓN
  navegacion: {
    "location.href": "Obtener/cambiar URL",
    "location.reload()": "Recargar página",
    "history.back()": "Ir atrás",
    "history.forward()": "Ir adelante",
  },

  // 💾 STORAGE
  storage: {
    localStorage: "Almacenamiento persistente (~5MB)",
    sessionStorage: "Almacenamiento de sesión (~5MB)",
    "setItem/getItem": "Guardar/recuperar datos",
    "removeItem/clear": "Eliminar datos",
  },

  // 📐 PROPIEDADES
  propiedades: {
    "innerWidth/Height": "Dimensiones del viewport",
    "outerWidth/Height": "Dimensiones de la ventana",
    "pageXOffset/YOffset": "Posición del scroll",
    "screen.width/height": "Dimensiones de la pantalla",
  },

  // 🧭 NAVIGATOR
  navigator: {
    userAgent: "Info del navegador",
    platform: "Sistema operativo",
    language: "Idioma del navegador",
    onLine: "Estado de conexión",
    geolocation: "API de ubicación",
  },
};

console.log("📊 RESUMEN DE WINDOW:");
console.table(RESUMEN_WINDOW);

//--------------------------------------------------------------------------------------
// 🎯 GUÍA RÁPIDA DE DECISIÓN
//--------------------------------------------------------------------------------------

/*
¿QUÉ NECESITAS HACER?

🤔 Mostrar un mensaje al usuario
   → alert(), confirm(), prompt() (01-interaccion_usuario.js)
   → ⚠️ Mejor: usar modales HTML personalizados

⏰ Ejecutar código después de un tiempo
   → setTimeout() (02-temporizadores.js)

🔄 Ejecutar código repetidamente
   → setInterval() (02-temporizadores.js)

🌐 Cambiar de página o recargar
   → location.href, location.reload()

💾 Guardar datos en el navegador
   → localStorage (permanente) o sessionStorage (temporal) (03-storage.js)

📍 Obtener ubicación del usuario
   → navigator.geolocation (04-geolocation.js)

📋 Copiar texto al portapapeles
   → navigator.clipboard (05-apis_modernas.js)

🔔 Mostrar notificaciones del sistema
   → Notification API (05-apis_modernas.js)

📱 Vibrar dispositivo móvil
   → navigator.vibrate() (05-apis_modernas.js)

🔋 Obtener info de batería
   → navigator.getBattery() (05-apis_modernas.js)

👁️ Detectar si pestaña está visible
   → Page Visibility API (05-apis_modernas.js)

📡 Detectar conexión internet
   → navigator.onLine + eventos (05-apis_modernas.js)

📏 Obtener dimensiones de ventana
   → window.innerWidth/Height

📱 Detectar dispositivo móvil
   → navigator.userAgent o navigator.maxTouchPoints
*/

//--------------------------------------------------------------------------------------
// 🚀 CHEAT SHEET RÁPIDA
//--------------------------------------------------------------------------------------

const CHEAT_SHEET = `
╔════════════════════════════════════════════════════════════════╗
║                    WINDOW - CHEAT SHEET                        ║
╠════════════════════════════════════════════════════════════════╣
║ 💬 INTERACCIÓN                                                 ║
║   alert(mensaje)              → Mostrar mensaje                ║
║   confirm(mensaje)            → Pedir confirmación             ║
║   prompt(mensaje, default)    → Pedir input                    ║
║                                                                 ║
║ ⏱️ TEMPORIZADORES                                              ║
║   setTimeout(fn, ms)          → Ejecutar una vez               ║
║   setInterval(fn, ms)         → Ejecutar repetidamente         ║
║   clearTimeout(id)            → Cancelar timeout               ║
║   clearInterval(id)           → Cancelar interval              ║
║                                                                 ║
║ 🌐 NAVEGACIÓN                                                  ║
║   location.href = url         → Ir a URL                       ║
║   location.reload()           → Recargar                       ║
║   history.back()              → Atrás                          ║
║   history.forward()           → Adelante                       ║
║                                                                 ║
║ 💾 STORAGE                                                     ║
║   localStorage.setItem(k, v)  → Guardar (persistente)          ║
║   localStorage.getItem(k)     → Obtener                        ║
║   JSON.stringify/parse        → Para objetos                   ║
║   sessionStorage.setItem(k,v) → Guardar (sesión)               ║
║                                                                 ║
║ 📐 DIMENSIONES                                                 ║
║   innerWidth / innerHeight    → Viewport                       ║
║   outerWidth / outerHeight    → Ventana completa               ║
║   pageXOffset / pageYOffset   → Scroll                         ║
║   screen.width / height       → Pantalla                       ║
║                                                                 ║
║ 🧭 NAVEGADOR                                                   ║
║   navigator.userAgent         → Info del navegador             ║
║   navigator.onLine            → Estado conexión                ║
║   navigator.language          → Idioma                         ║
║                                                                 ║
║ 📍 GEOLOCALIZACIÓN                                             ║
║   navigator.geolocation.getCurrentPosition() → Ubicación       ║
║   navigator.geolocation.watchPosition()      → Seguimiento     ║
║                                                                 ║
║ 🔔 APIS MODERNAS                                               ║
║   Notification.requestPermission() → Permisos                  ║
║   navigator.clipboard.writeText()  → Copiar                    ║
║   navigator.vibrate(ms)            → Vibrar                    ║
║   navigator.share({...})           → Compartir                 ║
║                                                                 ║
║ 🎯 EVENTOS                                                     ║
║   window.addEventListener('load', fn)    → Página cargada      ║
║   window.addEventListener('resize', fn)  → Redimensión         ║
║   window.addEventListener('scroll', fn)  → Scroll              ║
║   document.addEventListener('visibilitychange') → Visibilidad  ║
╚════════════════════════════════════════════════════════════════╝
`;

console.log(CHEAT_SHEET);

//--------------------------------------------------------------------------------------
// 📋 TABLA COMPARATIVA: localStorage vs sessionStorage
//--------------------------------------------------------------------------------------

/*
┌─────────────────┬─────────────────┬─────────────────┐
│ Característica  │ localStorage    │ sessionStorage  │
├─────────────────┼─────────────────┼─────────────────┤
│ Persistencia    │ Permanente      │ Solo sesión     │
│ Ámbito          │ Todo el dominio │ Solo pestaña    │
│ Capacidad       │ ~5-10MB         │ ~5-10MB         │
│ Cuándo se borra │ Manualmente     │ Cerrar pestaña  │
│ Uso típico      │ Preferencias    │ Datos temporales│
└─────────────────┴─────────────────┴─────────────────┘
*/

//--------------------------------------------------------------------------------------
// 💡 BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

const BUENAS_PRACTICAS = {
  "✅ HACER": [
    "Verificar disponibilidad de APIs antes de usar",
    "Usar try-catch con localStorage (puede estar lleno)",
    "Limpiar temporizadores cuando no se necesiten",
    "Usar async/await para APIs asíncronas",
    "Proporcionar fallbacks para APIs no soportadas",
    "Respetar permisos y privacidad del usuario",
    "Usar modales HTML en lugar de alert/prompt",
    "Comprobar navigator.onLine para conexión",
    "Usar Page Visibility API para optimizar recursos",
    "Parsear JSON con try-catch",
  ],

  "❌ NO HACER": [
    "Abusar de alert/confirm/prompt (mala UX)",
    "Crear intervalos sin forma de detenerlos",
    "Guardar datos sensibles en localStorage",
    "Ignorar errores de APIs",
    "Bloquear funcionalidad por falta de permisos",
    "Usar watchPosition sin limpiarlo",
    "Asumir que todas las APIs están disponibles",
    "Pedir permisos sin explicar por qué",
    "Llenar localStorage sin límite",
    "Confiar en datos de localStorage sin validar",
  ],
};

console.log("\n💡 BUENAS PRÁCTICAS:");
console.log("\n✅ HACER:");
BUENAS_PRACTICAS["✅ HACER"].forEach((practica, i) => {
  console.log(`  ${i + 1}. ${practica}`);
});

console.log("\n❌ NO HACER:");
BUENAS_PRACTICAS["❌ NO HACER"].forEach((practica, i) => {
  console.log(`  ${i + 1}. ${practica}`);
});

//--------------------------------------------------------------------------------------
// 📊 TABLA DE COMPATIBILIDAD (PRINCIPALES APIS)
//--------------------------------------------------------------------------------------

const COMPATIBILIDAD = {
  localStorage: {
    chrome: "4+",
    firefox: "3.5+",
    safari: "4+",
    edge: "12+",
    soporte: "✅ Excelente",
  },
  sessionStorage: {
    chrome: "5+",
    firefox: "2+",
    safari: "4+",
    edge: "12+",
    soporte: "✅ Excelente",
  },
  Geolocation: {
    chrome: "5+",
    firefox: "3.5+",
    safari: "5+",
    edge: "12+",
    soporte: "✅ Excelente",
  },
  "Clipboard API": {
    chrome: "66+",
    firefox: "63+",
    safari: "13.1+",
    edge: "79+",
    soporte: "✅ Bueno",
  },
  Notifications: {
    chrome: "22+",
    firefox: "22+",
    safari: "16+",
    edge: "14+",
    soporte: "✅ Bueno",
  },
  Vibration: {
    chrome: "32+",
    firefox: "16+",
    safari: "❌",
    edge: "79+",
    soporte: "⚠️ Limitado",
  },
  "Battery API": {
    chrome: "38+",
    firefox: "❌",
    safari: "❌",
    edge: "79+",
    soporte: "⚠️ Limitado",
  },
  "Page Visibility": {
    chrome: "33+",
    firefox: "18+",
    safari: "7+",
    edge: "12+",
    soporte: "✅ Excelente",
  },
};

console.log("\n📊 COMPATIBILIDAD DE APIS:");
console.table(COMPATIBILIDAD);

//--------------------------------------------------------------------------------------
// 📖 ORDEN DE ESTUDIO RECOMENDADO
//--------------------------------------------------------------------------------------

const ORDEN_ESTUDIO = {
  "1. Básico (Empezar aquí)": [
    "01-interaccion_usuario.js → alert, prompt, confirm",
    "02-temporizadores.js → setTimeout, setInterval",
  ],
  "2. Muy útil": ["03-storage.js → localStorage, sessionStorage"],
  "3. Intermedio": ["04-geolocation.js → navigator.geolocation"],
  "4. Avanzado": ["05-apis_modernas.js → Clipboard, Notifications, etc."],
  "5. Práctica": ["ejercicios_window.js → 15+ ejercicios con soluciones"],
};

console.log("\n📖 ORDEN DE ESTUDIO RECOMENDADO:");
Object.entries(ORDEN_ESTUDIO).forEach(([nivel, archivos]) => {
  console.log(`\n${nivel}:`);
  archivos.forEach((archivo) => console.log(`  • ${archivo}`));
});

//--------------------------------------------------------------------------------------
// 📱 EJEMPLO INTEGRADOR - MOSTRAR INFO DEL SISTEMA
//--------------------------------------------------------------------------------------

function mostrarInfoCompleta() {
  console.log("\n" + "═".repeat(70));
  console.log("📱 INFORMACIÓN COMPLETA DEL SISTEMA");
  console.log("═".repeat(70));

  // Navegador
  console.log("\n🧭 NAVEGADOR:");
  console.log("  User Agent:", navigator.userAgent);
  console.log("  Plataforma:", navigator.platform);
  console.log("  Idioma:", navigator.language);
  console.log("  Online:", navigator.onLine);

  // Ventana
  console.log("\n📐 VENTANA:");
  console.log("  Inner:", `${window.innerWidth}x${window.innerHeight}`);
  console.log("  Outer:", `${window.outerWidth}x${window.outerHeight}`);
  console.log("  Posición:", `(${window.screenX}, ${window.screenY})`);

  // Pantalla
  console.log("\n🖥️ PANTALLA:");
  console.log("  Resolución:", `${screen.width}x${screen.height}`);
  console.log("  Disponible:", `${screen.availWidth}x${screen.availHeight}`);
  console.log("  Orientación:", screen.orientation?.type || "N/A");

  // Storage
  console.log("\n💾 STORAGE:");
  console.log("  localStorage items:", localStorage.length);
  console.log("  sessionStorage items:", sessionStorage.length);

  // APIs disponibles
  console.log("\n🔧 APIS DISPONIBLES:");
  console.log("  Geolocation:", "geolocation" in navigator);
  console.log("  Notifications:", "Notification" in window);
  console.log("  Clipboard:", "clipboard" in navigator);
  console.log("  Vibration:", "vibrate" in navigator);

  console.log("\n" + "═".repeat(70));
}

// Ejecutar (descomenta para probar)
// mostrarInfoCompleta();

//--------------------------------------------------------------------------------------
// 🔗 RECURSOS ADICIONALES
//--------------------------------------------------------------------------------------

const RECURSOS = {
  "📚 Documentación": {
    "MDN Window": "https://developer.mozilla.org/docs/Web/API/Window",
    "MDN Navigator": "https://developer.mozilla.org/docs/Web/API/Navigator",
    "Can I Use": "https://caniuse.com/",
    "Web.dev": "https://web.dev/",
  },
  "🛠️ Herramientas": {
    "Chrome DevTools": "Application tab para Storage",
    "Firefox DevTools": "Storage Inspector",
    "Safari Web Inspector": "Storage tab",
  },
};

console.log("\n🔗 RECURSOS ADICIONALES:");
console.table(RECURSOS);

//--------------------------------------------------------------------------------------
// ✅ RESUMEN EJECUTIVO
//--------------------------------------------------------------------------------------

console.log(`
╔════════════════════════════════════════════════════════════════╗
║                    ✅ RESUMEN EJECUTIVO                        ║
╠════════════════════════════════════════════════════════════════╣
║                                                                 ║
║ El objeto window es el núcleo del JavaScript en el navegador.  ║
║                                                                 ║
║ Contiene:                                                       ║
║   • Métodos de interacción (alert, confirm, prompt)            ║
║   • Temporizadores (setTimeout, setInterval)                   ║
║   • Navegación (location, history)                             ║
║   • Almacenamiento (localStorage, sessionStorage)              ║
║   • Info del navegador (navigator)                             ║
║   • APIs modernas (geolocation, notifications, clipboard, etc.)║
║                                                                 ║
║ Recuerda:                                                       ║
║   ✅ Siempre verificar disponibilidad de APIs                  ║
║   ✅ Manejar errores apropiadamente                            ║
║   ✅ Respetar privacidad del usuario                           ║
║   ✅ Limpiar recursos (intervalos, listeners)                  ║
║   ✅ Proporcionar fallbacks cuando sea necesario               ║
║                                                                 ║
║ 🎯 Siguiente paso: Abre 01-interaccion_usuario.js             ║
║                                                                 ║
╚════════════════════════════════════════════════════════════════╝
`);

console.log("✅ Archivo 00-resumen_window.js cargado");
console.log("💡 Recomendación: Empieza por 01-interaccion_usuario.js");
console.log("📁 Luego continúa con los demás archivos en orden");
