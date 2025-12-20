// ============================================
// SECCIÓN 16: MÉTODOS DE EVENTOS
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("06 - MÉTODOS DE EVENTOS");
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// AÑADIR EVENT LISTENERS
// ------------------------------------------

console.log("AÑADIR EVENT LISTENERS:\n");

// addEventListener(evento, función, opciones)
// Parámetros:
//   evento: String con el nombre del evento (sin "on")
//   función: Función que se ejecutará cuando ocurra el evento
//   opciones: Objeto opcional con configuración

// Ejemplo básico: Detectar clics en el documento
document.addEventListener("click", () => {
  console.log("🖱️ Se hizo clic en el documento");
});

// Los eventos más comunes:
// "click"       = Clic del ratón
// "dblclick"    = Doble clic
// "mousedown"   = Botón del ratón presionado
// "mouseup"     = Botón del ratón liberado
// "mousemove"   = Movimiento del ratón
// "mouseenter"  = Ratón entra en el elemento
// "mouseleave"  = Ratón sale del elemento
// "keydown"     = Tecla presionada
// "keyup"       = Tecla liberada
// "submit"      = Envío de formulario
// "change"      = Cambio en input/select
// "input"       = Entrada de texto en input
// "focus"       = Elemento recibe foco
// "blur"        = Elemento pierde foco
// "scroll"      = Scroll en elemento
// "resize"      = Cambio de tamaño de ventana
// "load"        = Elemento cargado completamente

console.log("✅ Event listener de 'click' añadido");

// ------------------------------------------
// ELIMINAR EVENT LISTENERS
// ------------------------------------------

console.log("\nELIMINAR EVENT LISTENERS:\n");

// removeEventListener(evento, función, opciones)
// IMPORTANTE: Debe ser la MISMA función (misma referencia)
// No funciona con funciones anónimas

// Definir la función handler por separado
const handlerClick = () => {
  console.log("🖱️ Este listener será eliminado");
};

// Añadir el listener
document.addEventListener("click", handlerClick);

// Eliminar el listener (debe ser la misma función)
document.removeEventListener("click", handlerClick);

console.log("✅ Listener de click eliminado correctamente");

// EJEMPLO DE LO QUE NO FUNCIONA:
// document.addEventListener("click", () => { console.log("Test"); });
// document.removeEventListener("click", () => { console.log("Test"); });
// ❌ No funciona porque son DOS funciones diferentes (aunque tengan el mismo código)

// ------------------------------------------
// OPCIONES AVANZADAS DE addEventListener
// ------------------------------------------

console.log("\nOPCIONES AVANZADAS:\n");

// Tercer parámetro: Opciones
// {
//   capture: boolean,  // true = fase de captura, false = fase de burbujeo (default)
//   once: boolean,     // true = se ejecuta solo una vez y se elimina automáticamente
//   passive: boolean   // true = indica que nunca llamará preventDefault()
// }

// Ejemplo: Listener que se ejecuta solo UNA vez
const handlerOnce = () => {
  console.log("👆 Este evento se ejecuta solo UNA vez");
};

document.addEventListener("click", handlerOnce, { once: true });
console.log("✅ Listener 'once' añadido (se ejecutará solo 1 vez)");

// Ejemplo: Listener en fase de captura
// Fase de captura: de padre a hijo (top-down)
// Fase de burbujeo: de hijo a padre (bottom-up, por defecto)
const handlerCapture = () => {
  console.log("📥 Evento capturado en fase de captura");
};

document.addEventListener("click", handlerCapture, { capture: true });
console.log("✅ Listener en fase de captura añadido");

// ------------------------------------------
// EVENTOS DEL CICLO DE VIDA DEL DOCUMENTO
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("EVENTOS DEL CICLO DE VIDA");
console.log("=".repeat(60) + "\n");

// DOMContentLoaded - Se dispara cuando el DOM está completamente cargado
// NO espera a imágenes, estilos externos, etc.
// Es el evento MÁS USADO para ejecutar código cuando la página está lista
document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 DOM completamente cargado (DOMContentLoaded)");
});

console.log("✅ Listener 'DOMContentLoaded' añadido");

// load - Se dispara cuando TODO está cargado (incluyendo imágenes, CSS, etc.)
window.addEventListener("load", () => {
  console.log("🖼️ Página completamente cargada (load)");
});

console.log("✅ Listener 'load' añadido");

// beforeunload - Se dispara antes de cerrar/recargar la página
// Útil para advertir al usuario si tiene cambios sin guardar
window.addEventListener("beforeunload", (e) => {
  // Para mostrar un mensaje de confirmación, asignar returnValue
  // (Los navegadores modernos muestran un mensaje genérico)
  // e.returnValue = "¿Seguro que quieres salir?";
  console.log("⚠️ El usuario está a punto de salir de la página");
});

console.log("✅ Listener 'beforeunload' añadido");

// unload - Se dispara cuando la página se está descargando
// Útil para limpiar recursos, guardar estado, etc.
window.addEventListener("unload", () => {
  console.log("👋 Página descargándose (unload)");
});

console.log("✅ Listener 'unload' añadido");

// ------------------------------------------
// EVENTOS DE VISIBILIDAD
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("EVENTOS DE VISIBILIDAD");
console.log("=".repeat(60) + "\n");

// visibilitychange - Se dispara cuando cambia la visibilidad de la página
// Ocurre cuando el usuario cambia de pestaña, minimiza la ventana, etc.
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("👁️ Usuario salió de la página (cambió de pestaña)");
    // Aquí podrías: pausar videos, detener animaciones, etc.
  } else {
    console.log("👁️ Usuario volvió a la página");
    // Aquí podrías: reanudar videos, reanudar animaciones, etc.
  }
});

console.log("✅ Listener 'visibilitychange' añadido");

// ------------------------------------------
// EVENTOS DE ESTADO DE CARGA
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("EVENTOS DE ESTADO DE CARGA");
console.log("=".repeat(60) + "\n");

// readystatechange - Se dispara cuando cambia document.readyState
// Estados: "loading" → "interactive" → "complete"
document.addEventListener("readystatechange", () => {
  console.log("🔄 Estado del documento cambió a:", document.readyState);
});

// También se puede usar con onreadystatechange (forma antigua)
document.onreadystatechange = () => {
  console.log("🔄 Estado (onreadystatechange):", document.readyState);
};

console.log("✅ Listeners 'readystatechange' añadidos");

// ------------------------------------------
// OBJETO EVENT (información del evento)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("OBJETO EVENT");
console.log("=".repeat(60) + "\n");

// Cuando ocurre un evento, se pasa un objeto Event como parámetro
// Este objeto contiene información sobre el evento

document.addEventListener("click", (event) => {
  console.log("📦 Información del evento:");
  console.log("  Tipo:", event.type); // "click"
  console.log("  Target:", event.target); // Elemento donde ocurrió
  console.log("  CurrentTarget:", event.currentTarget); // Elemento con el listener
  console.log("  Coordenadas X:", event.clientX); // Posición X del ratón
  console.log("  Coordenadas Y:", event.clientY); // Posición Y del ratón
  console.log("  Timestamp:", event.timeStamp); // Momento del evento
});

console.log("✅ Listener con objeto Event añadido");

// Propiedades útiles del objeto Event:
// event.type            - Tipo de evento ("click", "keydown", etc.)
// event.target          - Elemento que disparó el evento
// event.currentTarget   - Elemento que tiene el listener
// event.preventDefault() - Previene la acción por defecto
// event.stopPropagation() - Detiene la propagación del evento
// event.clientX/Y       - Coordenadas del ratón (relativas al viewport)
// event.pageX/Y         - Coordenadas del ratón (relativas al documento)
// event.key             - Tecla presionada (en eventos de teclado)
// event.code            - Código de la tecla
// event.shiftKey        - true si Shift está presionado
// event.ctrlKey         - true si Ctrl está presionado
// event.altKey          - true si Alt está presionado
// event.metaKey         - true si Cmd (Mac) o Win está presionado

// ------------------------------------------
// MÉTODOS OBSOLETOS (NO USAR)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("MÉTODOS OBSOLETOS");
console.log("=".repeat(60) + "\n");

// captureEvents() y releaseEvents()
// Eran usados en Netscape Navigator 4 (navegador de los 90s)
// NUNCA usar en código moderno
console.log(
  "⚠️ captureEvents y releaseEvents están obsoletos desde Netscape 4"
);
console.log("   Usar addEventListener con { capture: true } en su lugar");

// ------------------------------------------
// RESUMEN Y MEJORES PRÁCTICAS
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("MEJORES PRÁCTICAS");
console.log("=".repeat(60) + "\n");

console.log(`
MEJORES PRÁCTICAS CON EVENTOS:

1. SIEMPRE usar addEventListener (NO onclick, onload, etc.)
   ✅ element.addEventListener("click", handler);
   ❌ element.onclick = handler;

2. Para eliminar, guardar referencia a la función
   ✅ const handler = () => {...};
      element.addEventListener("click", handler);
      element.removeEventListener("click", handler);
   
   ❌ element.addEventListener("click", () => {...});
      element.removeEventListener("click", () => {...}); // No funciona

3. Usar DOMContentLoaded para código inicial
   ✅ document.addEventListener("DOMContentLoaded", init);

4. Usar { once: true } para eventos de una sola vez
   ✅ element.addEventListener("click", handler, { once: true });

5. Prevenir acciones por defecto cuando sea necesario
   event.preventDefault(); // Evita envío de formulario, navegación, etc.

6. Detener propagación si es necesario
   event.stopPropagation(); // Evita que el evento siga burbujeando

EVENTOS MÁS COMUNES:

DOM Ready:
  DOMContentLoaded → DOM listo para manipular
  load             → Todo cargado (imágenes, CSS, etc.)

Ratón:
  click, dblclick  → Clics
  mouseenter/leave → Entrar/salir con ratón
  mousemove        → Movimiento del ratón

Teclado:
  keydown, keyup   → Teclas presionadas/liberadas
  keypress         → Tecla presionada (obsoleto, usar keydown)

Formularios:
  submit           → Envío de formulario
  change           → Cambio en input/select
  input            → Entrada de texto
  focus, blur      → Foco ganado/perdido

Ventana:
  resize           → Cambio de tamaño
  scroll           → Scroll
  visibilitychange → Cambio de pestaña
  beforeunload     → Antes de cerrar

ORDEN DE EJECUCIÓN AL CARGAR:
  1. readyState = "loading"
  2. readyState = "interactive"
  3. DOMContentLoaded se dispara
  4. readyState = "complete"
  5. load se dispara
`);
