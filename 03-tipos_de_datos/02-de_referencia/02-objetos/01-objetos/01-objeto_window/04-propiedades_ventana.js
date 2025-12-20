//--------------------------------------------------------------------------------------
// PROPIEDADES DE VENTANA Y PANTALLA
//--------------------------------------------------------------------------------------

/*
🎯 En este archivo aprenderás:
- Dimensiones de la ventana (inner/outer width/height)
- Posición de la ventana
- Scroll (desplazamiento)
- Screen (información de la pantalla)
- Navigator (información del navegador)
- Detección de dispositivos
*/

//--------------------------------------------------------------------------------------
// 1. DIMENSIONES DE LA VENTANA
//--------------------------------------------------------------------------------------

/*
Hay 4 propiedades principales para dimensiones:
- innerWidth/innerHeight → Área visible (viewport) SIN barras de herramientas
- outerWidth/outerHeight → Ventana COMPLETA incluyendo bordes y barras
*/

function mostrarDimensionesVentana() {
  console.log("📐 DIMENSIONES DE LA VENTANA:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  // Viewport (área visible de contenido)
  console.log("🔹 VIEWPORT (área de contenido):");
  console.log("  innerWidth:", window.innerWidth, "px");
  console.log("  innerHeight:", window.innerHeight, "px");

  // Ventana completa
  console.log("\n🔹 VENTANA COMPLETA (con barras):");
  console.log("  outerWidth:", window.outerWidth, "px");
  console.log("  outerHeight:", window.outerHeight, "px");

  // Diferencia
  const diferenciaAncho = window.outerWidth - window.innerWidth;
  const diferenciaAlto = window.outerHeight - window.innerHeight;

  console.log("\n🔹 DIFERENCIA (barras y bordes):");
  console.log("  Ancho:", diferenciaAncho, "px");
  console.log("  Alto:", diferenciaAlto, "px");
}

mostrarDimensionesVentana();

// Visualización en tabla
const dimensiones = {
  "Viewport Ancho": window.innerWidth + "px",
  "Viewport Alto": window.innerHeight + "px",
  "Ventana Ancho": window.outerWidth + "px",
  "Ventana Alto": window.outerHeight + "px",
};

console.log("\n📊 Tabla de dimensiones:");
console.table(dimensiones);

/*
┌─────────────────────────────────────────────┐
│                                             │
│  ┌───────────────────────────────────────┐ │ ← outerHeight
│  │ Barra de título                       │ │
│  ├───────────────────────────────────────┤ │
│  │ Barra de navegación                   │ │
│  ├───────────────────────────────────────┤ │
│  │                                       │ │
│  │                                       │ │
│  │        innerWidth x innerHeight       │ │
│  │        (área de contenido)            │ │
│  │                                       │ │
│  │                                       │ │
│  └───────────────────────────────────────┘ │
│                                             │
└─────────────────────────────────────────────┘
         ↑
      outerWidth
*/

//--------------------------------------------------------------------------------------
// 2. POSICIÓN DE LA VENTANA EN LA PANTALLA
//--------------------------------------------------------------------------------------

function mostrarPosicionVentana() {
  console.log("\n📍 POSICIÓN DE LA VENTANA:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  // Posición X (horizontal) desde el borde izquierdo de la pantalla
  console.log("X (desde izquierda):", window.screenX, "px");
  console.log("  Alias screenLeft:", window.screenLeft, "px");

  // Posición Y (vertical) desde el borde superior de la pantalla
  console.log("Y (desde arriba):", window.screenY, "px");
  console.log("  Alias screenTop:", window.screenTop, "px");
}

mostrarPosicionVentana();

// Calcular si la ventana está centrada
function estaVentanaCentrada() {
  const centroVentanaX = window.screenX + window.outerWidth / 2;
  const centroVentanaY = window.screenY + window.outerHeight / 2;

  const centroPantallaX = screen.width / 2;
  const centroPantallaY = screen.height / 2;

  const margen = 50; // px de tolerancia

  const centradaX = Math.abs(centroVentanaX - centroPantallaX) < margen;
  const centradaY = Math.abs(centroVentanaY - centroPantallaY) < margen;

  return centradaX && centradaY;
}

console.log("\n¿Ventana centrada?", estaVentanaCentrada() ? "✅" : "❌");

//--------------------------------------------------------------------------------------
// 3. SCROLL (DESPLAZAMIENTO)
//--------------------------------------------------------------------------------------

function mostrarInfoScroll() {
  console.log("\n📜 INFORMACIÓN DE SCROLL:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  // Desplazamiento horizontal
  console.log("Horizontal (X):");
  console.log("  pageXOffset:", window.pageXOffset, "px");
  console.log("  scrollX:", window.scrollX, "px (alias)");

  // Desplazamiento vertical
  console.log("\nVertical (Y):");
  console.log("  pageYOffset:", window.pageYOffset, "px");
  console.log("  scrollY:", window.scrollY, "px (alias)");

  // Dimensiones totales del documento
  const alturaTotal = document.documentElement.scrollHeight;
  const alturaVisible = window.innerHeight;
  const scrollMax = alturaTotal - alturaVisible;

  console.log("\nDimensiones del documento:");
  console.log("  Altura total:", alturaTotal, "px");
  console.log("  Altura visible:", alturaVisible, "px");
  console.log("  Scroll máximo:", scrollMax, "px");

  // Porcentaje de scroll
  if (scrollMax > 0) {
    const porcentaje = (window.pageYOffset / scrollMax) * 100;
    console.log("  Scroll:", porcentaje.toFixed(1) + "%");
  }
}

// Actualizar info de scroll en tiempo real
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  const alturaTotal = document.documentElement.scrollHeight;
  const alturaVisible = window.innerHeight;
  const porcentaje = (scrollY / (alturaTotal - alturaVisible)) * 100;

  console.log(
    `📜 Scroll: ${Math.round(scrollY)}px (${porcentaje.toFixed(1)}%)`
  );
});

// Métodos para controlar el scroll
function scrollHaciaCoordenadas(x, y) {
  window.scrollTo(x, y);
  console.log(`Scroll a: (${x}, ${y})`);
}

function scrollHaciaArribaAnimado() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // Animación suave
  });
  console.log("↑ Scrolling suave hacia arriba");
}

function scrollHaciaAbajoAnimado() {
  const alturaTotal = document.documentElement.scrollHeight;
  window.scrollTo({
    top: alturaTotal,
    left: 0,
    behavior: "smooth",
  });
  console.log("↓ Scrolling suave hacia abajo");
}

function scrollRelativo(x, y) {
  window.scrollBy(x, y); // Scroll relativo a la posición actual
  console.log(`Scroll relativo: +${x}px, +${y}px`);
}

// Detectar si el usuario llegó al final de la página
function detectarFinalPagina() {
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    const alturaVisible = window.innerHeight;
    const alturaTotal = document.documentElement.scrollHeight;

    // Margen de 10px para considerar "final"
    if (scrollY + alturaVisible >= alturaTotal - 10) {
      console.log("🏁 Usuario llegó al final de la página");
    }
  });
}

//--------------------------------------------------------------------------------------
// 4. SCREEN - INFORMACIÓN DE LA PANTALLA
//--------------------------------------------------------------------------------------

function mostrarInfoPantalla() {
  console.log("\n🖥️ INFORMACIÓN DE LA PANTALLA:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  // Dimensiones totales
  console.log("Resolución completa:");
  console.log("  width:", screen.width, "px");
  console.log("  height:", screen.height, "px");

  // Dimensiones disponibles (sin barra de tareas, dock, etc.)
  console.log("\nÁrea disponible (sin barra de tareas):");
  console.log("  availWidth:", screen.availWidth, "px");
  console.log("  availHeight:", screen.availHeight, "px");

  // Color
  console.log("\nColor:");
  console.log("  colorDepth:", screen.colorDepth, "bits");
  console.log("  pixelDepth:", screen.pixelDepth, "bits");

  // Orientación (si está disponible)
  if (screen.orientation) {
    console.log("\nOrientación:");
    console.log("  type:", screen.orientation.type);
    console.log("  angle:", screen.orientation.angle, "grados");
  }
}

mostrarInfoPantalla();

// Detectar cambios de orientación
if (screen.orientation) {
  screen.orientation.addEventListener("change", () => {
    console.log("🔄 Orientación cambió:");
    console.log("  Nueva orientación:", screen.orientation.type);
    console.log("  Ángulo:", screen.orientation.angle);
  });
}

// Calcular DPI/PPI aproximado
function calcularDPI() {
  const dppx = window.devicePixelRatio || 1;
  const dpi = dppx * 96; // 96 es el DPI base de CSS

  console.log("\n📊 DENSIDAD DE PÍXELES:");
  console.log("  devicePixelRatio:", dppx);
  console.log("  DPI aproximado:", Math.round(dpi));

  return dpi;
}

calcularDPI();

// Tabla resumen de pantalla
const infoPantalla = {
  Resolución: `${screen.width}x${screen.height}`,
  "Área disponible": `${screen.availWidth}x${screen.availHeight}`,
  "Profundidad de color": screen.colorDepth + " bits",
  Orientación: screen.orientation?.type || "N/A",
  "Device Pixel Ratio": window.devicePixelRatio,
};

console.log("\n📊 Resumen de pantalla:");
console.table(infoPantalla);

//--------------------------------------------------------------------------------------
// 5. NAVIGATOR - INFORMACIÓN DEL NAVEGADOR
//--------------------------------------------------------------------------------------

function mostrarInfoNavegador() {
  console.log("\n🧭 INFORMACIÓN DEL NAVEGADOR:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  // Información básica
  console.log("User Agent:", navigator.userAgent);
  console.log("Plataforma:", navigator.platform);
  console.log("Idioma:", navigator.language);
  console.log("Idiomas disponibles:", navigator.languages);

  // Estado
  console.log("\nEstado:");
  console.log("  Online:", navigator.onLine);
  console.log("  Cookies habilitadas:", navigator.cookieEnabled);
  console.log("  Do Not Track:", navigator.doNotTrack);

  // Hardware
  console.log("\nHardware:");
  console.log("  Núcleos CPU:", navigator.hardwareConcurrency);
  console.log("  Memoria (aprox):", navigator.deviceMemory, "GB");
  console.log("  Max touch points:", navigator.maxTouchPoints);

  // Capacidades
  console.log("\nCapacidades:");
  console.log("  Bluetooth:", "bluetooth" in navigator);
  console.log("  Geolocation:", "geolocation" in navigator);
  console.log("  Media Devices:", "mediaDevices" in navigator);
  console.log("  Service Worker:", "serviceWorker" in navigator);
}

mostrarInfoNavegador();

// Tabla de info del navegador
const infoNavegador = {
  "User Agent": navigator.userAgent.substring(0, 50) + "...",
  Plataforma: navigator.platform,
  Idioma: navigator.language,
  Online: navigator.onLine ? "✅" : "❌",
  Cookies: navigator.cookieEnabled ? "✅" : "❌",
  Touch: navigator.maxTouchPoints > 0 ? "✅" : "❌",
};

console.log("\n📊 Resumen del navegador:");
console.table(infoNavegador);

//--------------------------------------------------------------------------------------
// 6. DETECCIÓN DE DISPOSITIVOS
//--------------------------------------------------------------------------------------

// Detectar si es móvil
function esMóvil() {
  // Método 1: Por user agent (menos confiable)
  const userAgentMovil =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // Método 2: Por touch points (más moderno)
  const tieneToque = navigator.maxTouchPoints > 0;

  // Método 3: Por tamaño de pantalla
  const pantallaMovil = window.innerWidth <= 768;

  console.log("\n📱 DETECCIÓN DE MÓVIL:");
  console.log("  Por User Agent:", userAgentMovil ? "✅" : "❌");
  console.log("  Por Touch:", tieneToque ? "✅" : "❌");
  console.log("  Por Tamaño:", pantallaMovil ? "✅" : "❌");

  // Combinación: considerar móvil si cumple 2 de 3
  const esMóvil =
    [userAgentMovil, tieneToque, pantallaMovil].filter(Boolean).length >= 2;

  console.log("  CONCLUSIÓN:", esMóvil ? "📱 MÓVIL" : "💻 DESKTOP");

  return esMóvil;
}

esMóvil();

// Detectar tipo específico de dispositivo
function detectarDispositivo() {
  const ua = navigator.userAgent;

  const dispositivos = {
    iOS: /iPad|iPhone|iPod/.test(ua),
    Android: /Android/.test(ua),
    Windows: /Windows/.test(ua),
    Mac: /Mac/.test(ua),
    Linux: /Linux/.test(ua),
    iPhone: /iPhone/.test(ua),
    iPad: /iPad/.test(ua),
    Android_Phone: /Android.*Mobile/.test(ua),
    Android_Tablet: /Android/.test(ua) && !/Mobile/.test(ua),
  };

  console.log("\n🔍 DETECCIÓN ESPECÍFICA:");
  console.table(dispositivos);

  return dispositivos;
}

detectarDispositivo();

// Detectar navegador específico
function detectarNavegador() {
  const ua = navigator.userAgent;

  let navegador = "Desconocido";
  let version = "";

  if (ua.indexOf("Firefox") > -1) {
    navegador = "Firefox";
    version = ua.match(/Firefox\/(\d+)/)?.[1] || "";
  } else if (ua.indexOf("Chrome") > -1 && ua.indexOf("Edg") === -1) {
    navegador = "Chrome";
    version = ua.match(/Chrome\/(\d+)/)?.[1] || "";
  } else if (ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") === -1) {
    navegador = "Safari";
    version = ua.match(/Version\/(\d+)/)?.[1] || "";
  } else if (ua.indexOf("Edg") > -1) {
    navegador = "Edge";
    version = ua.match(/Edg\/(\d+)/)?.[1] || "";
  } else if (ua.indexOf("MSIE") > -1 || ua.indexOf("Trident") > -1) {
    navegador = "Internet Explorer";
  }

  console.log("\n🌐 NAVEGADOR:");
  console.log("  Nombre:", navegador);
  console.log("  Versión:", version);

  return { navegador, version };
}

detectarNavegador();

//--------------------------------------------------------------------------------------
// 7. EVENTOS DE VENTANA Y PANTALLA
//--------------------------------------------------------------------------------------

// Detectar redimensionamiento
window.addEventListener("resize", () => {
  console.log(
    "📐 Ventana redimensionada:",
    `${window.innerWidth}x${window.innerHeight}`
  );
});

// Detectar scroll
let ultimoScroll = 0;
window.addEventListener("scroll", () => {
  const scrollActual = window.pageYOffset;

  if (scrollActual > ultimoScroll) {
    console.log("⬇️ Scroll hacia abajo");
  } else {
    console.log("⬆️ Scroll hacia arriba");
  }

  ultimoScroll = scrollActual;
});

// Detectar cambio de conexión
window.addEventListener("online", () => {
  console.log("🟢 Conexión restaurada");
});

window.addEventListener("offline", () => {
  console.log("🔴 Sin conexión");
});

//--------------------------------------------------------------------------------------
// CLASE INTEGRADORA - DEVICE INFO
//--------------------------------------------------------------------------------------

class DeviceInfo {
  static obtenerTodo() {
    return {
      ventana: this.obtenerInfoVentana(),
      pantalla: this.obtenerInfoPantalla(),
      navegador: this.obtenerInfoNavegador(),
      dispositivo: this.obtenerInfoDispositivo(),
      capacidades: this.obtenerCapacidades(),
    };
  }

  static obtenerInfoVentana() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
      scrollX: window.pageXOffset,
      scrollY: window.pageYOffset,
      posicionX: window.screenX,
      posicionY: window.screenY,
    };
  }

  static obtenerInfoPantalla() {
    return {
      width: screen.width,
      height: screen.height,
      availWidth: screen.availWidth,
      availHeight: screen.availHeight,
      colorDepth: screen.colorDepth,
      pixelRatio: window.devicePixelRatio,
      orientacion: screen.orientation?.type || "N/A",
    };
  }

  static obtenerInfoNavegador() {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      online: navigator.onLine,
      cookieEnabled: navigator.cookieEnabled,
      hardwareConcurrency: navigator.hardwareConcurrency,
      maxTouchPoints: navigator.maxTouchPoints,
    };
  }

  static obtenerInfoDispositivo() {
    const ua = navigator.userAgent;

    return {
      esMóvil: esMóvil(),
      iOS: /iPad|iPhone|iPod/.test(ua),
      Android: /Android/.test(ua),
      Windows: /Windows/.test(ua),
      Mac: /Mac/.test(ua),
    };
  }

  static obtenerCapacidades() {
    return {
      geolocation: "geolocation" in navigator,
      notifications: "Notification" in window,
      serviceWorker: "serviceWorker" in navigator,
      localStorage: "localStorage" in window,
      sessionStorage: "sessionStorage" in window,
      webGL: this.soportaWebGL(),
      touch: navigator.maxTouchPoints > 0,
    };
  }

  static soportaWebGL() {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      );
    } catch (e) {
      return false;
    }
  }

  static mostrarTodo() {
    const info = this.obtenerTodo();

    console.log("\n" + "═".repeat(70));
    console.log("📱 INFORMACIÓN COMPLETA DEL DISPOSITIVO");
    console.log("═".repeat(70));

    console.log("\n📐 VENTANA:");
    console.table(info.ventana);

    console.log("\n🖥️ PANTALLA:");
    console.table(info.pantalla);

    console.log("\n🧭 NAVEGADOR:");
    console.table(info.navegador);

    console.log("\n📱 DISPOSITIVO:");
    console.table(info.dispositivo);

    console.log("\n✅ CAPACIDADES:");
    console.table(info.capacidades);

    console.log("\n" + "═".repeat(70));
  }
}

// Ejecutar
DeviceInfo.mostrarTodo();

//--------------------------------------------------------------------------------------
// 💡 BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:
1. Usar window.innerWidth/Height para diseño responsive
2. Usar matchMedia() para detectar tamaño de pantalla
3. Detectar orientación con screen.orientation API
4. Debounce eventos resize y scroll (se disparan mucho)
5. Comprobar devicePixelRatio para imágenes de alta resolución
6. Usar navigator.connection para adaptar contenido según conexión
7. Verificar navigator.onLine antes de operaciones de red

❌ NO HACER:
1. Confiar solo en user agent para detección de dispositivos
2. Hacer cálculos pesados en cada evento scroll/resize
3. Asumir que todos los móviles tienen pantallas pequeñas
4. Usar dimensiones fijas en lugar de responsive
5. Ignorar cambios de orientación
6. No debounce/throttle eventos frecuentes
7. Asumir que offline significa sin internet (puede ser lento)
*/

console.log("\n✅ Archivo 04-propiedades_ventana.js cargado");
console.log("📐 Usa DeviceInfo.mostrarTodo() para ver toda la info");
