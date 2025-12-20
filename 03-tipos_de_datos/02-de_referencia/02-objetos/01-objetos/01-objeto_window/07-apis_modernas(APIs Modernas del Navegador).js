//--------------------------------------------------------------------------------------
// APIS MODERNAS DEL NAVEGADOR
//--------------------------------------------------------------------------------------

/*
🎯 Este archivo cubre APIs modernas y útiles del objeto window y navigator:

📋 Contenido:
1. Clipboard API - Copiar/pegar
2. Notifications API - Notificaciones del sistema
3. Vibration API - Vibración en móviles
4. Battery Status API - Estado de batería
5. Network Information API - Info de conexión
6. Page Visibility API - Visibilidad de la página
7. Screen Orientation API - Orientación de pantalla
8. Web Share API - Compartir contenido
9. MediaDevices API - Cámara/micrófono
10. Console API avanzada
*/

//--------------------------------------------------------------------------------------
// 1. CLIPBOARD API - COPIAR Y PEGAR
//--------------------------------------------------------------------------------------

/*
⚠️ Requiere:
- HTTPS (o localhost)
- Permiso del usuario (para leer)
- Interacción del usuario (click, etc.)
*/

// ✅ COPIAR TEXTO AL PORTAPAPELES
async function copiarTexto(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    console.log("✅ Texto copiado:", texto);
    return true;
  } catch (error) {
    console.error("❌ Error al copiar:", error);

    // Fallback para navegadores antiguos
    return copiarTextoFallback(texto);
  }
}

// Fallback con método antiguo
function copiarTextoFallback(texto) {
  const textarea = document.createElement("textarea");
  textarea.value = texto;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    const exito = document.execCommand("copy");
    document.body.removeChild(textarea);
    console.log(exito ? "✅ Copiado (fallback)" : "❌ Falló copiar");
    return exito;
  } catch (error) {
    document.body.removeChild(textarea);
    console.error("❌ Error en fallback:", error);
    return false;
  }
}

// Ejemplo de uso
// copiarTexto('¡Hola desde el portapapeles!');

// ✅ LEER DEL PORTAPAPELES
async function leerPortapapeles() {
  try {
    const texto = await navigator.clipboard.readText();
    console.log("📋 Texto del portapapeles:", texto);
    return texto;
  } catch (error) {
    console.error("❌ Error al leer portapapeles:", error);
    console.log("💡 El usuario debe dar permiso explícito");
    return null;
  }
}

// ⚠️ Nota: leer requiere permiso explícito del usuario
// leerPortapapeles();

// Clase helper para clipboard
class ClipboardManager {
  static async copiar(texto) {
    return await copiarTexto(texto);
  }

  static async leer() {
    return await leerPortapapeles();
  }

  static async verificarPermiso() {
    try {
      const result = await navigator.permissions.query({
        name: "clipboard-read",
      });
      console.log("📋 Permiso clipboard:", result.state);
      return result.state === "granted";
    } catch (error) {
      console.log("⚠️ No se puede verificar permiso");
      return false;
    }
  }
}

//--------------------------------------------------------------------------------------
// 2. NOTIFICATIONS API - NOTIFICACIONES DEL SISTEMA
//--------------------------------------------------------------------------------------

/*
⚠️ Requiere:
- HTTPS (o localhost)
- Permiso del usuario
- No funciona en modo incógnito en algunos navegadores
*/

// Verificar soporte
function esNotificacionesDisponible() {
  return "Notification" in window;
}

// Solicitar permiso
async function solicitarPermisoNotificaciones() {
  if (!esNotificacionesDisponible()) {
    console.log("❌ Notificaciones no soportadas");
    return false;
  }

  try {
    const permiso = await Notification.requestPermission();
    console.log("🔔 Permiso de notificaciones:", permiso);
    // Valores: 'granted', 'denied', 'default'
    return permiso === "granted";
  } catch (error) {
    console.error("Error al solicitar permiso:", error);
    return false;
  }
}

// Mostrar notificación simple
function mostrarNotificacion(titulo, opciones = {}) {
  if (!esNotificacionesDisponible()) {
    console.log("❌ Notificaciones no soportadas");
    return null;
  }

  if (Notification.permission !== "granted") {
    console.log("⚠️ No hay permiso para notificaciones");
    return null;
  }

  const opcionesPorDefecto = {
    body: "Contenido de la notificación",
    icon: "🔔",
    badge: "🔔",
    tag: "notificacion-unica", // Previene duplicados
    requireInteraction: false, // Se cierra automáticamente
    ...opciones,
  };

  const notificacion = new Notification(titulo, opcionesPorDefecto);

  // Eventos de la notificación
  notificacion.onclick = () => {
    console.log("🖱️ Notificación clickeada");
    window.focus();
    notificacion.close();
  };

  notificacion.onclose = () => {
    console.log("❌ Notificación cerrada");
  };

  notificacion.onerror = (error) => {
    console.error("❌ Error en notificación:", error);
  };

  return notificacion;
}

// Clase helper para notificaciones
class NotificacionManager {
  static async inicializar() {
    if (!esNotificacionesDisponible()) {
      throw new Error("Notificaciones no soportadas");
    }

    const tienePermiso = await solicitarPermisoNotificaciones();
    return tienePermiso;
  }

  static mostrar(titulo, opciones = {}) {
    return mostrarNotificacion(titulo, opciones);
  }

  static obtenerPermiso() {
    return Notification.permission;
  }

  static notificarDespuesDe(segundos, titulo, opciones = {}) {
    setTimeout(() => {
      this.mostrar(titulo, opciones);
    }, segundos * 1000);
  }
}

// Ejemplo de uso
// await NotificacionManager.inicializar();
// NotificacionManager.mostrar('¡Hola!', {
//   body: 'Esta es una notificación de prueba',
//   icon: '🎉'
// });

//--------------------------------------------------------------------------------------
// 3. VIBRATION API - VIBRACIÓN EN DISPOSITIVOS MÓVILES
//--------------------------------------------------------------------------------------

/*
⚠️ Solo funciona en móviles
⚠️ Requiere interacción del usuario
⚠️ Puede estar deshabilitado en configuración
*/

function esVibracionDisponible() {
  return "vibrate" in navigator;
}

// Vibrar una vez
function vibrar(duracion = 200) {
  if (!esVibracionDisponible()) {
    console.log("❌ Vibración no soportada");
    return false;
  }

  navigator.vibrate(duracion); // milisegundos
  console.log(`📳 Vibrando por ${duracion}ms`);
  return true;
}

// Patrón de vibración [vibrar, pausa, vibrar, pausa, ...]
function vibrarPatron(patron = [200, 100, 200]) {
  if (!esVibracionDisponible()) {
    return false;
  }

  navigator.vibrate(patron);
  console.log("📳 Patrón de vibración:", patron);
  return true;
}

// Detener vibración
function detenerVibracion() {
  if (!esVibracionDisponible()) {
    return false;
  }

  navigator.vibrate(0);
  console.log("🛑 Vibración detenida");
  return true;
}

// Ejemplos de patrones
const PATRONES = {
  corto: [100],
  doble: [100, 50, 100],
  triple: [100, 50, 100, 50, 100],
  sos: [
    100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30,
    100,
  ],
  notificacion: [200, 100, 200],
  error: [100, 50, 100, 50, 100, 50, 100],
  exito: [50, 100, 50],
};

// Clase helper
class VibracionManager {
  static vibrar(duracion = 200) {
    return vibrar(duracion);
  }

  static patron(nombre) {
    if (PATRONES[nombre]) {
      return vibrarPatron(PATRONES[nombre]);
    }
    console.warn(`⚠️ Patrón "${nombre}" no existe`);
    return false;
  }

  static detener() {
    return detenerVibracion();
  }

  static isDisponible() {
    return esVibracionDisponible();
  }
}

// Ejemplo de uso
// VibracionManager.patron('notificacion');

//--------------------------------------------------------------------------------------
// 4. BATTERY STATUS API - ESTADO DE LA BATERÍA
//--------------------------------------------------------------------------------------

/*
⚠️ API experimental
⚠️ Solo en algunos navegadores
⚠️ Puede ser bloqueada por privacidad
*/

async function obtenerEstadoBateria() {
  if (!("getBattery" in navigator)) {
    console.log("❌ Battery API no soportada");
    return null;
  }

  try {
    const bateria = await navigator.getBattery();

    const info = {
      nivel: Math.round(bateria.level * 100) + "%",
      cargando: bateria.charging,
      tiempoHastaCarga: bateria.chargingTime,
      tiempoHastaDescarga: bateria.dischargingTime,
    };

    console.log("🔋 Estado de batería:", info);

    // Eventos de batería
    bateria.addEventListener("levelchange", () => {
      console.log("🔋 Nivel cambió:", Math.round(bateria.level * 100) + "%");
    });

    bateria.addEventListener("chargingchange", () => {
      console.log("⚡ Cargando:", bateria.charging);
    });

    return info;
  } catch (error) {
    console.error("Error al obtener batería:", error);
    return null;
  }
}

// obtenerEstadoBateria();

//--------------------------------------------------------------------------------------
// 5. NETWORK INFORMATION API - INFORMACIÓN DE CONEXIÓN
//--------------------------------------------------------------------------------------

/*
⚠️ API experimental
⚠️ Soporte limitado
*/

function obtenerInfoConexion() {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  if (!connection) {
    console.log("❌ Network Information API no soportada");
    return null;
  }

  const info = {
    tipo: connection.effectiveType, // '4g', '3g', '2g', 'slow-2g'
    velocidadBajada: connection.downlink, // Mbps
    rtt: connection.rtt, // Round Trip Time en ms
    guardaDatos: connection.saveData, // Modo ahorro de datos
  };

  console.log("📡 Información de conexión:", info);

  // Evento cuando cambia la conexión
  connection.addEventListener("change", () => {
    console.log("🔄 Conexión cambió a:", connection.effectiveType);
  });

  return info;
}

// obtenerInfoConexion();

//--------------------------------------------------------------------------------------
// 6. PAGE VISIBILITY API - DETECTAR SI LA PÁGINA ES VISIBLE
//--------------------------------------------------------------------------------------

/*
✅ Excelente soporte
✅ Muy útil para pausar animaciones, videos, etc.
*/

function estalaPaginaVisible() {
  return !document.hidden;
}

// Escuchar cambios de visibilidad
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("👁️ Página oculta (cambió de pestaña o minimizó)");
    // Pausar videos, animaciones, etc.
  } else {
    console.log("👁️ Página visible (regresó a la pestaña)");
    // Reanudar contenido
  }
});

// Clase helper
class VisibilidadManager {
  static esVisible() {
    return !document.hidden;
  }

  static onChange(callback) {
    document.addEventListener("visibilitychange", () => {
      callback(this.esVisible());
    });
  }

  static onOcultar(callback) {
    this.onChange((visible) => {
      if (!visible) callback();
    });
  }

  static onMostrar(callback) {
    this.onChange((visible) => {
      if (visible) callback();
    });
  }
}

// Ejemplo: pausar video cuando se cambia de pestaña
// VisibilidadManager.onOcultar(() => {
//   console.log('Pausando video...');
// });

//--------------------------------------------------------------------------------------
// 7. SCREEN ORIENTATION API - ORIENTACIÓN DE PANTALLA
//--------------------------------------------------------------------------------------

/*
⚠️ Principalmente para móviles
✅ Buen soporte moderno
*/

function obtenerOrientacion() {
  if (!screen.orientation) {
    console.log("❌ Screen Orientation API no soportada");
    return null;
  }

  const info = {
    tipo: screen.orientation.type,
    angulo: screen.orientation.angle,
  };

  console.log("📱 Orientación:", info);
  return info;
}

// Escuchar cambios de orientación
if (screen.orientation) {
  screen.orientation.addEventListener("change", () => {
    console.log("🔄 Orientación cambió:", screen.orientation.type);
  });
}

// Bloquear orientación (requiere fullscreen)
async function bloquearOrientacion(tipo = "portrait") {
  try {
    await screen.orientation.lock(tipo);
    console.log("🔒 Orientación bloqueada:", tipo);
  } catch (error) {
    console.error("❌ No se pudo bloquear orientación:", error);
  }
}

// Desbloquear
function desbloquearOrientacion() {
  screen.orientation.unlock();
  console.log("🔓 Orientación desbloqueada");
}

//--------------------------------------------------------------------------------------
// 8. WEB SHARE API - COMPARTIR CONTENIDO
//--------------------------------------------------------------------------------------

/*
⚠️ Solo en móviles mayormente
⚠️ Requiere HTTPS
⚠️ Requiere interacción del usuario
*/

function puedeCompartir() {
  return "share" in navigator;
}

async function compartir(datos) {
  if (!puedeCompartir()) {
    console.log("❌ Web Share API no soportada");
    return false;
  }

  try {
    await navigator.share({
      title: datos.titulo || "Compartir",
      text: datos.texto || "",
      url: datos.url || window.location.href,
    });
    console.log("✅ Contenido compartido");
    return true;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("ℹ️ Usuario canceló compartir");
    } else {
      console.error("❌ Error al compartir:", error);
    }
    return false;
  }
}

// Ejemplo
// compartir({
//   titulo: '¡Mira esto!',
//   texto: 'Contenido interesante',
//   url: 'https://ejemplo.com'
// });

//--------------------------------------------------------------------------------------
// 9. MEDIADEVICES API - CÁMARA Y MICRÓFONO
//--------------------------------------------------------------------------------------

/*
⚠️ Requiere HTTPS
⚠️ Requiere permiso del usuario
⚠️ Solo funciona con interacción del usuario
*/

// Obtener dispositivos disponibles
async function obtenerDispositivos() {
  try {
    const dispositivos = await navigator.mediaDevices.enumerateDevices();

    const camaras = dispositivos.filter((d) => d.kind === "videoinput");
    const microfonos = dispositivos.filter((d) => d.kind === "audioinput");
    const salidas = dispositivos.filter((d) => d.kind === "audiooutput");

    console.log("🎥 Cámaras:", camaras.length);
    console.log("🎤 Micrófonos:", microfonos.length);
    console.log("🔊 Salidas de audio:", salidas.length);

    return { camaras, microfonos, salidas };
  } catch (error) {
    console.error("Error al obtener dispositivos:", error);
    return null;
  }
}

// Acceder a cámara
async function accederCamara(opciones = {}) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: opciones.video || true,
      audio: opciones.audio || false,
    });

    console.log("✅ Acceso a cámara obtenido");
    return stream;
  } catch (error) {
    console.error("❌ Error al acceder cámara:", error);
    return null;
  }
}

// Acceder a micrófono
async function accederMicrofono() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });

    console.log("✅ Acceso a micrófono obtenido");
    return stream;
  } catch (error) {
    console.error("❌ Error al acceder micrófono:", error);
    return null;
  }
}

// Detener stream
function detenerStream(stream) {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    console.log("🛑 Stream detenido");
  }
}

//--------------------------------------------------------------------------------------
// 10. CONSOLE API AVANZADA
//--------------------------------------------------------------------------------------

// Mensajes con estilo
console.log(
  "%c ¡Mensaje con estilo! ",
  "background: #222; color: #bada55; font-size: 20px; padding: 10px;"
);

// Tabla
const usuarios = [
  { nombre: "Ana", edad: 25, ciudad: "Madrid" },
  { nombre: "Carlos", edad: 30, ciudad: "Barcelona" },
  { nombre: "Luis", edad: 28, ciudad: "Valencia" },
];
console.table(usuarios);

// Agrupar logs
console.group("📦 Grupo de logs");
console.log("Log 1");
console.log("Log 2");
console.groupEnd();

// Grupo colapsado
console.groupCollapsed("📦 Grupo colapsado");
console.log("Este grupo está colapsado por defecto");
console.groupEnd();

// Contar llamadas
console.count("contador"); // contador: 1
console.count("contador"); // contador: 2
console.countReset("contador");

// Tiempo de ejecución
console.time("operacion");
// ... código a medir ...
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("operacion");

// Assert (solo muestra si es false)
console.assert(2 + 2 === 5, "❌ Error en matemáticas");

// Trace (muestra stack trace)
function funcion1() {
  funcion2();
}
function funcion2() {
  funcion3();
}
function funcion3() {
  console.trace("📍 Stack trace");
}
// funcion1();

// Clear console
// console.clear();

//--------------------------------------------------------------------------------------
// CLASE INTEGRADORA - DEVICE INFO
//--------------------------------------------------------------------------------------

class DeviceInfo {
  static async obtenerTodo() {
    const info = {
      navegador: this.obtenerInfoNavegador(),
      pantalla: this.obtenerInfoPantalla(),
      ubicacion: await this.obtenerUbicacion(),
      bateria: await this.obtenerBateria(),
      conexion: this.obtenerConexion(),
      soportes: this.obtenerSoportes(),
    };

    console.log("📱 INFORMACIÓN COMPLETA DEL DISPOSITIVO:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.table(info.navegador);
    console.table(info.pantalla);
    console.table(info.soportes);

    return info;
  }

  static obtenerInfoNavegador() {
    return {
      userAgent: navigator.userAgent,
      plataforma: navigator.platform,
      idioma: navigator.language,
      online: navigator.onLine,
      cookiesHabilitadas: navigator.cookieEnabled,
    };
  }

  static obtenerInfoPantalla() {
    return {
      ancho: screen.width,
      alto: screen.height,
      anchoDisponible: screen.availWidth,
      altoDisponible: screen.availHeight,
      profundidadColor: screen.colorDepth,
      orientacion: screen.orientation?.type || "N/A",
    };
  }

  static async obtenerUbicacion() {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 5000,
        });
      });
      return {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    } catch {
      return null;
    }
  }

  static async obtenerBateria() {
    if (!("getBattery" in navigator)) return null;
    try {
      const battery = await navigator.getBattery();
      return {
        nivel: Math.round(battery.level * 100) + "%",
        cargando: battery.charging,
      };
    } catch {
      return null;
    }
  }

  static obtenerConexion() {
    const conn = navigator.connection;
    if (!conn) return null;
    return {
      tipo: conn.effectiveType,
      velocidad: conn.downlink + " Mbps",
    };
  }

  static obtenerSoportes() {
    return {
      geolocation: "geolocation" in navigator,
      notifications: "Notification" in window,
      vibration: "vibrate" in navigator,
      clipboard: "clipboard" in navigator,
      webShare: "share" in navigator,
      battery: "getBattery" in navigator,
      serviceWorker: "serviceWorker" in navigator,
    };
  }
}

// Uso
// DeviceInfo.obtenerTodo();

//--------------------------------------------------------------------------------------
// 💡 RESUMEN DE COMPATIBILIDAD
//--------------------------------------------------------------------------------------

/*
✅ EXCELENTE SOPORTE (>95%):
- Page Visibility API
- Console API
- Online/Offline events
- Clipboard API (write)

⚠️ BUEN SOPORTE (>80%):
- Geolocation API
- Notifications API
- MediaDevices API
- Screen Orientation API

❌ SOPORTE LIMITADO (<70%):
- Battery Status API (siendo removida)
- Vibration API (solo móviles)
- Network Information API
- Web Share API (principalmente móviles)
- Clipboard API (read - requiere permisos)

💡 RECOMENDACIÓN:
Siempre verificar soporte antes de usar y proporcionar fallbacks
*/

console.log("✅ Archivo 05-apis_modernas.js cargado");
console.log("🌐 Navegador:", navigator.userAgent);
console.log("📱 Online:", navigator.onLine);
