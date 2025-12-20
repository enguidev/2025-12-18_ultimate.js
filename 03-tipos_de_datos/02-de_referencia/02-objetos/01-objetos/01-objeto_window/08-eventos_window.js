//--------------------------------------------------------------------------------------
// EVENTOS DEL OBJETO WINDOW
//--------------------------------------------------------------------------------------

/*
🎯 En este archivo aprenderás:
- Eventos de ciclo de vida (load, DOMContentLoaded, beforeunload)
- Eventos de interacción (resize, scroll, focus, blur)
- Eventos de conexión (online, offline)
- Eventos de visibilidad (visibilitychange)
- Técnicas de optimización (debounce, throttle)
*/

//--------------------------------------------------------------------------------------
// 1. EVENTOS DE CICLO DE VIDA DE LA PÁGINA
//--------------------------------------------------------------------------------------

/*
Orden de ejecución:
1. DOMContentLoaded → HTML parseado (sin esperar CSS/imágenes)
2. load → TODO cargado (HTML, CSS, imágenes, scripts)
3. beforeunload → Antes de salir de la página
4. unload → Página se está descargando
*/

// DOMContentLoaded - Se ejecuta cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  console.log("1️⃣ DOMContentLoaded - DOM está listo");
  console.log("   ✅ Puedes manipular el DOM");
  console.log("   ⏳ Imágenes/CSS pueden estar cargándose aún");
});

// load - Se ejecuta cuando TODO está cargado
window.addEventListener("load", () => {
  console.log("2️⃣ load - Página completamente cargada");
  console.log("   ✅ TODO listo: HTML, CSS, imágenes, scripts");
});

// beforeunload - Antes de cerrar/recargar la página
window.addEventListener("beforeunload", (event) => {
  console.log("3️⃣ beforeunload - Usuario intenta salir");

  // ⚠️ Solo mostrar si realmente hay cambios sin guardar
  const cambiosSinGuardar = false; // Cambiar según tu lógica

  if (cambiosSinGuardar) {
    // Mostrar confirmación (el mensaje personalizado no se muestra en navegadores modernos)
    event.preventDefault();
    event.returnValue = ""; // Requerido para Chrome

    console.log("   ⚠️ Mostrando confirmación de salida");
  }
});

// unload - Página se está descargando (casi no se usa)
window.addEventListener("unload", () => {
  console.log("4️⃣ unload - Página descargándose");
  // ⚠️ Muy limitado: no puedes hacer async, mostrar alerts, etc.
});

// Tabla comparativa de eventos de ciclo de vida
const EVENTOS_CICLO_VIDA = {
  DOMContentLoaded: {
    Cuándo: "DOM parseado",
    "CSS cargado": "❌",
    "Imágenes cargadas": "❌",
    "Uso típico": "Inicializar JS",
  },
  load: {
    Cuándo: "Todo cargado",
    "CSS cargado": "✅",
    "Imágenes cargadas": "✅",
    "Uso típico": "Trabajar con imágenes",
  },
  beforeunload: {
    Cuándo: "Antes de salir",
    "CSS cargado": "N/A",
    "Imágenes cargadas": "N/A",
    "Uso típico": "Confirmar salida",
  },
};

console.log("\n📊 Eventos de ciclo de vida:");
console.table(EVENTOS_CICLO_VIDA);

//--------------------------------------------------------------------------------------
// 2. EVENTOS DE REDIMENSIONAMIENTO (RESIZE)
//--------------------------------------------------------------------------------------

// resize - Se dispara cuando cambia el tamaño de la ventana
window.addEventListener("resize", () => {
  console.log("📐 Resize:", `${window.innerWidth}x${window.innerHeight}`);
});

// ⚠️ PROBLEMA: resize se dispara MUCHAS veces por segundo
// SOLUCIÓN: Usar debounce o throttle

// DEBOUNCE - Espera a que termine de redimensionar
function debounce(func, delay = 250) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Resize optimizado con debounce
const resizeOptimizado = debounce(() => {
  console.log(
    "📐 Resize (optimizado):",
    `${window.innerWidth}x${window.innerHeight}`
  );
}, 250);

window.addEventListener("resize", resizeOptimizado);

// THROTTLE - Limita frecuencia de ejecución
function throttle(func, delay = 250) {
  let ultimaEjecucion = 0;
  return function (...args) {
    const ahora = Date.now();
    if (ahora - ultimaEjecucion >= delay) {
      ultimaEjecucion = ahora;
      func.apply(this, args);
    }
  };
}

// Resize con throttle
const resizeThrottled = throttle(() => {
  console.log(
    "📐 Resize (throttled):",
    `${window.innerWidth}x${window.innerHeight}`
  );
}, 250);

// Detectar breakpoints (responsive)
const BREAKPOINTS = {
  mobile: 576,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
};

function detectarBreakpoint() {
  const ancho = window.innerWidth;

  if (ancho < BREAKPOINTS.mobile) return "mobile";
  if (ancho < BREAKPOINTS.tablet) return "tablet";
  if (ancho < BREAKPOINTS.desktop) return "desktop";
  return "wide";
}

let breakpointActual = detectarBreakpoint();

window.addEventListener(
  "resize",
  debounce(() => {
    const nuevoBreakpoint = detectarBreakpoint();

    if (nuevoBreakpoint !== breakpointActual) {
      console.log(
        `🔄 Breakpoint cambió: ${breakpointActual} → ${nuevoBreakpoint}`
      );
      breakpointActual = nuevoBreakpoint;

      // Aquí puedes hacer ajustes específicos
    }
  }, 250)
);

// Detectar orientación (móviles/tablets)
window.addEventListener(
  "resize",
  debounce(() => {
    const esHorizontal = window.innerWidth > window.innerHeight;
    console.log(`📱 Orientación: ${esHorizontal ? "Horizontal" : "Vertical"}`);
  }, 250)
);

//--------------------------------------------------------------------------------------
// 3. EVENTOS DE SCROLL
//--------------------------------------------------------------------------------------

// scroll - Se dispara al hacer scroll
window.addEventListener("scroll", () => {
  console.log("📜 Scroll Y:", window.pageYOffset, "px");
});

// ⚠️ PROBLEMA: scroll se dispara MUCHÍSIMO
// SOLUCIÓN: Usar throttle (no debounce, queremos actualizar mientras scrollea)

const scrollOptimizado = throttle(() => {
  const scrollY = window.pageYOffset;
  const alturaTotal = document.documentElement.scrollHeight;
  const alturaVisible = window.innerHeight;
  const porcentaje = (scrollY / (alturaTotal - alturaVisible)) * 100;

  console.log(
    `📜 Scroll: ${Math.round(scrollY)}px (${porcentaje.toFixed(1)}%)`
  );
}, 100); // Actualizar cada 100ms

window.addEventListener("scroll", scrollOptimizado);

// Detectar dirección del scroll
let ultimaPosicionScroll = window.pageYOffset;

window.addEventListener(
  "scroll",
  throttle(() => {
    const posicionActual = window.pageYOffset;

    if (posicionActual > ultimaPosicionScroll) {
      console.log("⬇️ Scrolling hacia abajo");
      // Ocultar header, mostrar botón "volver arriba", etc.
    } else {
      console.log("⬆️ Scrolling hacia arriba");
      // Mostrar header, etc.
    }

    ultimaPosicionScroll = posicionActual;
  }, 100)
);

// Detectar cuando llega al final de la página
window.addEventListener(
  "scroll",
  throttle(() => {
    const scrollY = window.pageYOffset;
    const alturaVisible = window.innerHeight;
    const alturaTotal = document.documentElement.scrollHeight;

    // Margen de 50px para considerar "final"
    if (scrollY + alturaVisible >= alturaTotal - 50) {
      console.log("🏁 Usuario llegó al final de la página");
      // Cargar más contenido (infinite scroll), mostrar mensaje, etc.
    }
  }, 200)
);

// Clase helper para manejar scroll
class ScrollManager {
  constructor() {
    this.ultimaPosicion = 0;
    this.listeners = {
      up: [],
      down: [],
      end: [],
    };

    this.inicializar();
  }

  inicializar() {
    window.addEventListener(
      "scroll",
      throttle(() => {
        this.detectarDireccion();
        this.detectarFinal();
      }, 100)
    );
  }

  detectarDireccion() {
    const posicionActual = window.pageYOffset;

    if (posicionActual > this.ultimaPosicion) {
      this.emitir("down", posicionActual);
    } else if (posicionActual < this.ultimaPosicion) {
      this.emitir("up", posicionActual);
    }

    this.ultimaPosicion = posicionActual;
  }

  detectarFinal() {
    const scrollY = window.pageYOffset;
    const alturaVisible = window.innerHeight;
    const alturaTotal = document.documentElement.scrollHeight;

    if (scrollY + alturaVisible >= alturaTotal - 50) {
      this.emitir("end", scrollY);
    }
  }

  on(evento, callback) {
    if (this.listeners[evento]) {
      this.listeners[evento].push(callback);
    }
  }

  emitir(evento, data) {
    this.listeners[evento].forEach((callback) => callback(data));
  }
}

// Uso del ScrollManager
const scrollManager = new ScrollManager();
scrollManager.on("down", () => console.log("Usuario scrollea hacia abajo"));
scrollManager.on("up", () => console.log("Usuario scrollea hacia arriba"));
scrollManager.on("end", () => console.log("Usuario llegó al final"));

//--------------------------------------------------------------------------------------
// 4. EVENTOS DE FOCUS Y BLUR
//--------------------------------------------------------------------------------------

// focus - Ventana recibe el foco (usuario hace click en ella)
window.addEventListener("focus", () => {
  console.log("👁️ Ventana recibió el foco");
  // Reanudar animaciones, música, actualizaciones, etc.
});

// blur - Ventana pierde el foco (usuario cambia de pestaña/ventana)
window.addEventListener("blur", () => {
  console.log("😴 Ventana perdió el foco");
  // Pausar animaciones, música, actualizaciones, etc.
});

// Ejemplo: Pausar/reanudar video automáticamente
class VideoAutoControl {
  constructor(videoElement) {
    this.video = videoElement;
    this.iniciado = false;

    window.addEventListener("blur", () => this.pausar());
    window.addEventListener("focus", () => this.reanudar());
  }

  pausar() {
    if (this.video && !this.video.paused) {
      this.video.pause();
      this.iniciado = true;
      console.log("⏸️ Video pausado (ventana sin foco)");
    }
  }

  reanudar() {
    if (this.video && this.iniciado) {
      this.video.play();
      this.iniciado = false;
      console.log("▶️ Video reanudado (ventana con foco)");
    }
  }
}

// Uso: new VideoAutoControl(document.querySelector('video'));

//--------------------------------------------------------------------------------------
// 5. EVENTOS DE CONEXIÓN
//--------------------------------------------------------------------------------------

// online - Conexión a internet restaurada
window.addEventListener("online", () => {
  console.log("🟢 Conexión restaurada");
  // Sincronizar datos, reanudar descargas, mostrar mensaje, etc.
});

// offline - Sin conexión a internet
window.addEventListener("offline", () => {
  console.log("🔴 Sin conexión");
  // Pausar descargas, guardar en cola, mostrar mensaje, etc.
});

// Estado actual de conexión
console.log("📡 Estado actual:", navigator.onLine ? "🟢 Online" : "🔴 Offline");

// Clase para manejar estado de conexión
class ConnectionManager {
  constructor() {
    this.online = navigator.onLine;
    this.listeners = [];

    this.inicializar();
  }

  inicializar() {
    window.addEventListener("online", () => {
      this.online = true;
      this.notificar("online");
    });

    window.addEventListener("offline", () => {
      this.online = false;
      this.notificar("offline");
    });
  }

  onChange(callback) {
    this.listeners.push(callback);
  }

  notificar(estado) {
    this.listeners.forEach((callback) => callback(estado, this.online));
  }

  estaOnline() {
    return this.online;
  }
}

// Uso
const connectionManager = new ConnectionManager();
connectionManager.onChange((estado, online) => {
  console.log(`Conexión: ${estado} (${online ? "Online" : "Offline"})`);
});

//--------------------------------------------------------------------------------------
// 6. PAGE VISIBILITY API - DETECTAR SI LA PESTAÑA ES VISIBLE
//--------------------------------------------------------------------------------------

/*
Más preciso que focus/blur para detectar si el usuario está viendo la página
*/

// visibilitychange - Cambia visibilidad de la pestaña
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("👁️‍🗨️ Pestaña oculta (cambió de pestaña o minimizó ventana)");
    // Pausar animaciones, videos, reducir peticiones al servidor
  } else {
    console.log("👁️ Pestaña visible (usuario regresó)");
    // Reanudar contenido
  }
});

// Estado actual
console.log("👁️ Pestaña visible:", document.hidden ? "❌" : "✅");

// Clase helper para visibilidad
class VisibilityManager {
  constructor() {
    this.visible = !document.hidden;
    this.listeners = {
      visible: [],
      hidden: [],
    };

    this.inicializar();
  }

  inicializar() {
    document.addEventListener("visibilitychange", () => {
      this.visible = !document.hidden;

      if (this.visible) {
        this.emitir("visible");
      } else {
        this.emitir("hidden");
      }
    });
  }

  onVisible(callback) {
    this.listeners.visible.push(callback);
  }

  onHidden(callback) {
    this.listeners.hidden.push(callback);
  }

  emitir(evento) {
    this.listeners[evento].forEach((callback) => callback());
  }

  esVisible() {
    return this.visible;
  }
}

// Uso
const visibilityManager = new VisibilityManager();
visibilityManager.onVisible(() => console.log("Usuario regresó a la pestaña"));
visibilityManager.onHidden(() => console.log("Usuario salió de la pestaña"));

//--------------------------------------------------------------------------------------
// 7. OTROS EVENTOS ÚTILES
//--------------------------------------------------------------------------------------

// error - Error global de JavaScript
window.addEventListener("error", (event) => {
  console.error("❌ Error global:", event.message);
  console.error("   Archivo:", event.filename);
  console.error("   Línea:", event.lineno);
  console.error("   Columna:", event.colno);
});

// unhandledrejection - Promise rechazada sin catch
window.addEventListener("unhandledrejection", (event) => {
  console.error("❌ Promise rechazada sin manejar:", event.reason);
  event.preventDefault(); // Prevenir error en consola
});

// hashchange - Cambio en el hash de la URL (#seccion)
window.addEventListener("hashchange", (event) => {
  console.log("🔗 Hash cambió:");
  console.log("   Anterior:", event.oldURL);
  console.log("   Nueva:", event.newURL);
  console.log("   Hash actual:", location.hash);
});

// popstate - Navegación con botones atrás/adelante
window.addEventListener("popstate", (event) => {
  console.log("🔙 Usuario navegó (atrás/adelante)");
  console.log("   Estado:", event.state);
});

// storage - Cambio en localStorage desde otra pestaña
window.addEventListener("storage", (event) => {
  console.log("💾 Storage cambió en otra pestaña:");
  console.log("   Clave:", event.key);
  console.log("   Valor anterior:", event.oldValue);
  console.log("   Valor nuevo:", event.newValue);
  console.log("   URL:", event.url);
});

//--------------------------------------------------------------------------------------
// TABLA RESUMEN DE TODOS LOS EVENTOS
//--------------------------------------------------------------------------------------

const EVENTOS_WINDOW = {
  // Ciclo de vida
  DOMContentLoaded: "DOM parseado y listo",
  load: "Página completamente cargada",
  beforeunload: "Antes de cerrar/recargar",
  unload: "Página descargándose",

  // Interacción
  resize: "Ventana redimensionada",
  scroll: "Scroll en la página",
  focus: "Ventana recibe foco",
  blur: "Ventana pierde foco",

  // Conexión
  online: "Conexión restaurada",
  offline: "Sin conexión",

  // Visibilidad
  visibilitychange: "Cambió visibilidad de pestaña",

  // Navegación
  hashchange: "Cambió el hash (#)",
  popstate: "Navegación atrás/adelante",

  // Errores
  error: "Error global de JavaScript",
  unhandledrejection: "Promise rechazada sin catch",

  // Storage
  storage: "localStorage cambió en otra pestaña",
};

console.log("\n📊 Resumen de eventos de window:");
console.table(EVENTOS_WINDOW);

//--------------------------------------------------------------------------------------
// CLASE INTEGRADORA - EVENT MANAGER
//--------------------------------------------------------------------------------------

class WindowEventManager {
  constructor() {
    this.eventos = new Map();
    this.inicializarEventosBasicos();
  }

  inicializarEventosBasicos() {
    // Resize optimizado
    this.on(
      "resize",
      debounce(() => {
        console.log("📐 Resize:", `${window.innerWidth}x${window.innerHeight}`);
      }, 250)
    );

    // Scroll optimizado
    this.on(
      "scroll",
      throttle(() => {
        const porcentaje =
          (window.pageYOffset /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;
        console.log(`📜 Scroll: ${porcentaje.toFixed(1)}%`);
      }, 100)
    );

    // Conexión
    this.on("online", () => console.log("🟢 Online"));
    this.on("offline", () => console.log("🔴 Offline"));

    // Visibilidad
    this.onVisibilityChange(() => {
      console.log("👁️ Visible:", !document.hidden);
    });
  }

  on(evento, callback) {
    if (!this.eventos.has(evento)) {
      this.eventos.set(evento, []);
      window.addEventListener(evento, (e) => {
        this.eventos.get(evento).forEach((cb) => cb(e));
      });
    }
    this.eventos.get(evento).push(callback);
  }

  off(evento, callback) {
    if (this.eventos.has(evento)) {
      const callbacks = this.eventos.get(evento);
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  onVisibilityChange(callback) {
    document.addEventListener("visibilitychange", () => {
      callback(!document.hidden);
    });
  }

  obtenerEstado() {
    return {
      dimensiones: `${window.innerWidth}x${window.innerHeight}`,
      scroll: window.pageYOffset,
      online: navigator.onLine,
      visible: !document.hidden,
      hasFocus: document.hasFocus(),
    };
  }
}

// Uso
const eventManager = new WindowEventManager();
console.log("\n📊 Estado actual:", eventManager.obtenerEstado());

//--------------------------------------------------------------------------------------
// 💡 BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:
1. Usar debounce para resize (esperar a que termine)
2. Usar throttle para scroll (actualizar mientras scrollea)
3. Siempre limpiar event listeners cuando no se necesiten
4. Usar Page Visibility API en lugar de focus/blur cuando sea posible
5. Optimizar código dentro de handlers de eventos frecuentes
6. Manejar errores globales con window.error
7. Usar passive: true para scroll/touch en navegadores modernos
8. Verificar document.hidden antes de hacer peticiones innecesarias

❌ NO HACER:
1. Poner código pesado directamente en resize/scroll sin optimizar
2. Crear múltiples listeners para el mismo evento sin razón
3. Olvidar remover listeners (memory leaks)
4. Confiar solo en beforeunload (puede no ejecutarse)
5. Hacer operaciones asíncronas en unload
6. Bloquear el hilo principal en eventos frecuentes
7. Mostrar alerts en eventos automatizados
8. Asumir que focus/blur detecta cambios de pestaña (usar visibilitychange)
*/

console.log("\n✅ Archivo eventos_window.js cargado");
console.log("🎯 Usa debounce/throttle para optimizar eventos frecuentes");
