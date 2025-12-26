// ============================================
// SECCIÓN 15: MÉTODOS DE INSPECCIÓN DE POSICIÓN Y ESTADO
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("05 - MÉTODOS DE INSPECCIÓN DE POSICIÓN Y ESTADO");
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// MÉTODOS DE POSICIÓN
// ------------------------------------------

console.log("MÉTODOS DE POSICIÓN:\n");

// elementFromPoint(x, y) - Obtiene el elemento en unas coordenadas específicas
// Las coordenadas son relativas a la ventana del navegador (viewport)
// x = distancia desde el borde izquierdo
// y = distancia desde el borde superior
console.log(
  "🎯 Elemento en punto (100,100):",
  document.elementFromPoint(100, 100)
);
// Útil para: Detectar qué elemento está bajo el cursor, drag & drop, etc.

// getSelection() - Obtiene el texto seleccionado por el usuario
// Devuelve un objeto Selection con información sobre el texto seleccionado
// toString() convierte la selección a texto plano
console.log("🧠 Texto seleccionado:", document.getSelection().toString());
// Nota: Si no hay texto seleccionado, devuelve una cadena vacía ""

// ------------------------------------------
// MÉTODOS DE INSPECCIÓN DE ESTADO
// ------------------------------------------

console.log("\nMÉTODOS DE ESTADO:\n");

// hasFocus() - Verifica si el documento tiene el foco
// Devuelve true si la ventana/pestaña está activa
// Devuelve false si el usuario está en otra pestaña o aplicación
console.log("📶 Documento tiene foco:", document.hasFocus());

// readyState - Estado de carga del documento
// Valores posibles:
//   "loading"     = El documento aún se está cargando
//   "interactive" = El documento se ha cargado pero los recursos (imágenes, etc.) no
//   "complete"    = Todo está completamente cargado
console.log("Estado de carga (readyState):", document.readyState);
// Útil para: Saber cuándo el documento está listo para manipulación

// activeElement - Elemento que actualmente tiene el foco
// Por defecto es <body> si ningún elemento tiene foco
// Cambia cuando el usuario hace clic en un input, botón, etc.
console.log("Elemento actualmente enfocado:", document.activeElement);
// Útil para: Gestionar el foco del teclado, accesibilidad

// visibilityState - Estado de visibilidad del documento
// Valores posibles:
//   "visible" = La página es visible (pestaña activa)
//   "hidden"  = La página está oculta (otra pestaña activa, ventana minimizada)
console.log(
  "Estado de visibilidad (visibilityState):",
  document.visibilityState
);
// Útil para: Pausar animaciones/videos cuando el usuario cambia de pestaña

// ------------------------------------------
// PROPIEDADES COMPLEMENTARIAS DE ESTADO
// ------------------------------------------

console.log("\nPROPIEDADES COMPLEMENTARIAS:\n");

// hidden - Booleano que indica si el documento está oculto
// true = documento oculto (otra pestaña, ventana minimizada)
// false = documento visible
console.log("🔒 Documento oculto (hidden):", document.hidden);
// Es básicamente una versión boolean de visibilityState

// pointerLockElement - Elemento con el puntero bloqueado
// Devuelve el elemento que tiene bloqueado el cursor del ratón
// null si ningún elemento tiene el puntero bloqueado
// Se usa principalmente en juegos para ocultar y controlar el cursor
console.log("🖱️ Elemento con bloqueo de puntero:", document.pointerLockElement);

// fullscreenElement - Elemento actualmente en pantalla completa
// Devuelve el elemento que está en modo fullscreen
// null si ningún elemento está en pantalla completa
console.log("🖥️ Elemento en pantalla completa:", document.fullscreenElement);

// ------------------------------------------
// EJEMPLOS PRÁCTICOS DE USO
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("EJEMPLOS PRÁCTICOS");
console.log("=".repeat(60) + "\n");

// Ejemplo 1: Detectar cuando el documento está completamente cargado
console.log("Ejemplo 1 - Estado de carga:");
if (document.readyState === "complete") {
  console.log("  ✅ El documento está completamente cargado");
} else if (document.readyState === "interactive") {
  console.log("  ⏳ El documento está cargando recursos");
} else {
  console.log("  ⏳ El documento aún se está cargando");
}

// Ejemplo 2: Detectar si el usuario está viendo la página
console.log("\nEjemplo 2 - Visibilidad:");
if (document.hidden) {
  console.log("  👁️ Usuario NO está viendo la página (cambió de pestaña)");
} else {
  console.log("  👁️ Usuario ESTÁ viendo la página");
}

// Ejemplo 3: Verificar qué elemento tiene el foco
console.log("\nEjemplo 3 - Foco actual:");
const elementoConFoco = document.activeElement;
console.log("  Tipo de elemento:", elementoConFoco.tagName);
console.log("  ID:", elementoConFoco.id || "(sin ID)");
console.log("  Clase:", elementoConFoco.className || "(sin clase)");

// ------------------------------------------
// NOTAS IMPORTANTES
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("NOTAS IMPORTANTES");
console.log("=".repeat(60) + "\n");

console.log(`
CUÁNDO USAR CADA MÉTODO:

elementFromPoint(x, y)
  ✓ Drag & drop personalizado
  ✓ Detectar elementos bajo el cursor
  ✓ Juegos y aplicaciones interactivas

getSelection()
  ✓ Copiar texto seleccionado
  ✓ Resaltar o modificar selecciones
  ✓ Botones de compartir texto seleccionado

hasFocus()
  ✓ Detectar si la ventana está activa
  ✓ Pausar/reanudar funcionalidades

readyState
  ✓ Ejecutar código cuando el DOM esté listo
  ✓ Verificar si se puede manipular el documento

activeElement
  ✓ Gestión de foco para accesibilidad
  ✓ Navegación por teclado
  ✓ Formularios dinámicos

visibilityState / hidden
  ✓ Pausar videos/animaciones cuando el usuario cambia de pestaña
  ✓ Optimizar rendimiento
  ✓ Detener peticiones innecesarias

pointerLockElement
  ✓ Juegos en primera persona
  ✓ Aplicaciones 3D interactivas
  ✓ Control total del cursor

COMPATIBILIDAD:
  ✓ Todos estos métodos son compatibles con navegadores modernos
  ✓ Para navegadores antiguos, verificar con caniuse.com
`);
