//======================================================//
// EVENTOS EN JAVASCRIPT - FUNDAMENTOS
//======================================================//

/*
Los eventos son "acciones" que ocurren en el navegador durante la ejecución de una aplicación web.

EJEMPLOS DE EVENTOS:
  - Click del ratón
  - Movimiento del ratón
  - Pulsaciones de teclado
  - Carga de página
  - Envío de formulario
  - Cambio de tamaño de ventana
  - Scroll de página

Para reaccionar a eventos necesitamos:
  1. Seleccionar el elemento
  2. Añadir un "event listener" (escuchador)
  3. Definir qué hacer cuando ocurra el evento
*/

//------------------------------------------------------//
// 🎯 FORMAS DE CAPTURAR EVENTOS
//------------------------------------------------------//

/*
Existen 3 formas de capturar eventos (de más antigua a más moderna):

1. ❌ Atributos HTML (EVITAR - obsoleto, mezcla HTML con JS)
   <button onclick="alert('click')">Click aquí</button>

2. ⚠️ Propiedades del elemento (antigua, limitada)
   elemento.onclick = function() { ... }
   
3. ✅ addEventListener() (RECOMENDADA - moderna y flexible)
   elemento.addEventListener('click', function() { ... })
*/

//------------------------------------------------------//
// ❌ MÉTODO 1: Atributos HTML (NO USAR)
//------------------------------------------------------//

/*
<button onclick="alert('Hola')">Click</button>

PROBLEMAS:
  - Mezcla HTML con JavaScript
  - Difícil de mantener
  - No se puede remover fácilmente
  - Obsoleto y mal visto
*/

//------------------------------------------------------//
// ⚠️ MÉTODO 2: Propiedades del elemento (antigua)
//------------------------------------------------------//

// Crear un botón para demostración
let boton1 = document.createElement("button");
boton1.textContent = "Botón 1";
document.body.append(boton1);

// Asignar evento usando propiedad
boton1.onclick = function () {
  console.log("Click en botón 1");
};

// LIMITACIONES:
// Si asignas otro manejador, sobrescribe el anterior
boton1.onclick = function () {
  console.log("Nuevo manejador (el anterior se perdió)");
};

// Eliminar evento
boton1.onclick = null;

/*
PROBLEMAS DE ESTE MÉTODO:
  ❌ Solo puedes asignar UN manejador por evento
  ❌ Si asignas otro, sobrescribe el anterior
  ❌ Menos flexible que addEventListener
  ❌ No permite opciones avanzadas
*/

//------------------------------------------------------//
// ✅ MÉTODO 3: addEventListener() - RECOMENDADO
//------------------------------------------------------//

/*
Sintaxis:
  elemento.addEventListener(evento, función, opciones)

Parámetros:
  - evento: string con el nombre del evento ("click", "keydown", etc.)
  - función: función que se ejecuta cuando ocurre el evento
  - opciones: objeto opcional con configuración avanzada

VENTAJAS:
  ✅ Puedes añadir múltiples manejadores al mismo evento
  ✅ Más control sobre el comportamiento
  ✅ Puedes remover manejadores específicos
  ✅ Soporta opciones avanzadas (capture, once, passive)
  ✅ Es el estándar moderno
*/

let boton2 = document.createElement("button");
boton2.textContent = "Botón 2";
document.body.append(boton2);

// Añadir primer manejador
boton2.addEventListener("click", function () {
  console.log("Primer manejador");
});

// Añadir segundo manejador (NO sobrescribe el primero)
boton2.addEventListener("click", function () {
  console.log("Segundo manejador");
});

// Ambos se ejecutan cuando haces click ✅

//------------------------------------------------------//
// 🔍 EL OBJETO EVENT
//------------------------------------------------------//

/*
Cuando ocurre un evento, JavaScript crea automáticamente un objeto Event
con información sobre él. Este objeto se pasa como parámetro a la función manejadora.

PROPIEDADES IMPORTANTES:
  - event.target: elemento que disparó el evento
  - event.currentTarget: elemento que tiene el listener
  - event.type: tipo de evento ("click", "keydown", etc.)
  - event.timeStamp: momento en que ocurrió el evento
  - event.preventDefault(): previene acción por defecto
  - event.stopPropagation(): detiene propagación del evento
*/

boton2.addEventListener("click", function (evento) {
  console.log("=== OBJETO EVENT ===");
  console.log("Tipo de evento:", evento.type); // "click"
  console.log("Elemento que disparó:", evento.target);
  console.log("Elemento con listener:", evento.currentTarget);
  console.log("Timestamp:", evento.timeStamp);
  console.log("Objeto completo:", evento);
});

//------------------------------------------------------//
// 🖱️ EVENTOS DE RATÓN
//------------------------------------------------------//

/*
EVENTOS PRINCIPALES:
  - click: clic izquierdo
  - dblclick: doble clic
  - contextmenu: clic derecho
  - mousedown: botón presionado
  - mouseup: botón soltado
  - mousemove: ratón se mueve
  - mouseenter: ratón entra (no hace bubbling)
  - mouseleave: ratón sale (no hace bubbling)
  - mouseover: ratón entra (hace bubbling)
  - mouseout: ratón sale (hace bubbling)
*/

let cuadrado = document.createElement("div");
cuadrado.textContent = "Cuadrado Interactivo";
cuadrado.style.cssText = `
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s;
  font-weight: bold;
`;
document.body.append(cuadrado);

// Click simple
cuadrado.addEventListener("click", function (e) {
  console.log("Click en cuadrado");
  console.log("Coordenadas:", e.clientX, e.clientY);
});

// Doble click
cuadrado.addEventListener("dblclick", function () {
  console.log("Doble click en cuadrado");
});

// Movimiento del ratón
cuadrado.addEventListener("mousemove", function (e) {
  console.log(`Ratón en: (${e.clientX}, ${e.clientY})`);
});

// Ratón entra
cuadrado.addEventListener("mouseenter", function () {
  this.style.transform = "scale(1.1)";
  console.log("Ratón entró al cuadrado");
});

// Ratón sale
cuadrado.addEventListener("mouseleave", function () {
  this.style.transform = "scale(1)";
  console.log("Ratón salió del cuadrado");
});

// Clic derecho
cuadrado.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // Prevenir menú contextual
  console.log("Clic derecho detectado");
  alert("Menú personalizado aquí");
});

//------------------------------------------------------//
// 🔧 INFORMACIÓN DEL EVENTO DE RATÓN
//------------------------------------------------------//

cuadrado.addEventListener("click", function (e) {
  console.log("=== INFO DEL CLICK ===");

  // Coordenadas relativas a la ventana
  console.log("clientX:", e.clientX);
  console.log("clientY:", e.clientY);

  // Coordenadas relativas a la página (incluye scroll)
  console.log("pageX:", e.pageX);
  console.log("pageY:", e.pageY);

  // Coordenadas relativas al elemento
  console.log("offsetX:", e.offsetX);
  console.log("offsetY:", e.offsetY);

  // Coordenadas absolutas en pantalla
  console.log("screenX:", e.screenX);
  console.log("screenY:", e.screenY);

  // Botón del ratón (0=izquierdo, 1=medio, 2=derecho)
  console.log("button:", e.button);

  // Teclas modificadoras presionadas
  console.log("ctrlKey:", e.ctrlKey);
  console.log("shiftKey:", e.shiftKey);
  console.log("altKey:", e.altKey);
  console.log("metaKey:", e.metaKey); // Cmd en Mac, Windows en PC
});

//------------------------------------------------------//
// ⌨️ EVENTOS DE TECLADO
//------------------------------------------------------//

/*
EVENTOS PRINCIPALES:
  - keydown: tecla presionada (se repite si se mantiene)
  - keyup: tecla soltada
  - keypress: tecla presionada (OBSOLETO, no usar)

PROPIEDADES IMPORTANTES:
  - e.key: valor de la tecla ("a", "Enter", "ArrowUp")
  - e.code: código físico de la tecla ("KeyA", "Enter", "ArrowUp")
  - e.keyCode: código numérico (OBSOLETO pero aún funciona)
  - e.ctrlKey, e.shiftKey, e.altKey, e.metaKey: teclas modificadoras
*/

console.log("\n=== EVENTOS DE TECLADO ===");
console.log("Presiona teclas para ver información...\n");

// Escuchar todas las teclas
window.addEventListener("keydown", function (e) {
  console.log("=== TECLA PRESIONADA ===");
  console.log("key:", e.key); // "a", "Enter", "ArrowUp"
  console.log("code:", e.code); // "KeyA", "Enter", "ArrowUp"
  console.log("keyCode:", e.keyCode); // 65, 13, 38 (obsoleto)

  // Teclas modificadoras
  if (e.ctrlKey) console.log("Ctrl está presionado");
  if (e.shiftKey) console.log("Shift está presionado");
  if (e.altKey) console.log("Alt está presionado");
  if (e.metaKey) console.log("Meta (Cmd/Win) está presionado");
});

window.addEventListener("keyup", function (e) {
  console.log("Tecla soltada:", e.key);
});

//------------------------------------------------------//
// 🎹 DETECTAR TECLAS ESPECÍFICAS
//------------------------------------------------------//

window.addEventListener("keydown", function (e) {
  // Método recomendado: usar e.key

  if (e.key === "Enter") {
    console.log("✅ Enter presionado");
  }

  if (e.key === "Escape") {
    console.log("❌ Escape presionado");
  }

  if (e.key === "ArrowUp") {
    console.log("⬆️ Flecha arriba");
  }

  if (e.key === "ArrowDown") {
    console.log("⬇️ Flecha abajo");
  }

  if (e.key === "ArrowLeft") {
    console.log("⬅️ Flecha izquierda");
  }

  if (e.key === "ArrowRight") {
    console.log("➡️ Flecha derecha");
  }

  if (e.key === " ") {
    console.log("Barra espaciadora");
  }

  if (e.key === "Tab") {
    console.log("Tab presionado");
  }
});

//------------------------------------------------------//
// 🎮 COMBINACIONES DE TECLAS
//------------------------------------------------------//

window.addEventListener("keydown", function (e) {
  // Ctrl + S (guardar)
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault(); // Evita guardar la página
    console.log("💾 Guardar (Ctrl+S)");
    alert("Documento guardado");
  }

  // Ctrl + C (copiar)
  if (e.ctrlKey && e.key === "c") {
    console.log("📋 Copiar (Ctrl+C)");
  }

  // Ctrl + V (pegar)
  if (e.ctrlKey && e.key === "v") {
    console.log("📋 Pegar (Ctrl+V)");
  }

  // Ctrl + Z (deshacer)
  if (e.ctrlKey && e.key === "z") {
    e.preventDefault();
    console.log("↩️ Deshacer (Ctrl+Z)");
  }

  // Shift + Enter (nueva línea)
  if (e.shiftKey && e.key === "Enter") {
    console.log("📝 Nueva línea (Shift+Enter)");
  }

  // Alt + F4 (cerrar ventana)
  if (e.altKey && e.key === "F4") {
    e.preventDefault();
    console.log("❌ Cerrar ventana (Alt+F4) - Prevenido");
  }
});

//------------------------------------------------------//
// 📝 VALIDACIÓN: SOLO NÚMEROS EN INPUT
//------------------------------------------------------//

let inputNumerico = document.createElement("input");
inputNumerico.type = "text";
inputNumerico.placeholder = "Solo números";
inputNumerico.style.cssText = `
  padding: 10px;
  font-size: 16px;
  border: 2px solid #667eea;
  border-radius: 5px;
  margin: 20px;
`;
document.body.append(inputNumerico);

inputNumerico.addEventListener("keydown", function (e) {
  // Teclas permitidas siempre
  const teclasPermitidas = [
    "Backspace", // Borrar
    "Delete", // Suprimir
    "Tab", // Tabulador
    "Escape", // Escape
    "Enter", // Enter
    "ArrowLeft", // Flechas
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Home", // Inicio
    "End", // Fin
  ];

  // Permitir teclas especiales
  if (teclasPermitidas.includes(e.key)) {
    return; // Dejar pasar
  }

  // Permitir Ctrl+A, Ctrl+C, Ctrl+V, etc.
  if (e.ctrlKey || e.metaKey) {
    return; // Dejar pasar
  }

  // Si NO es un número del 0 al 9, prevenir
  if (!/^[0-9]$/.test(e.key)) {
    e.preventDefault();
    console.log("❌ Solo números permitidos. Tecla bloqueada:", e.key);
  }
});

//------------------------------------------------------//
// 🔄 LA PALABRA CLAVE 'this'
//------------------------------------------------------//

/*
Dentro de la función manejadora, 'this' hace referencia al elemento
que tiene el event listener (elemento.currentTarget).

⚠️ IMPORTANTE: Con arrow functions, 'this' NO funciona igual
*/

let boton3 = document.createElement("button");
boton3.textContent = "Botón 3 (this)";
boton3.style.cssText = "margin: 20px; padding: 10px 20px;";
document.body.append(boton3);

// ✅ Con función normal: 'this' apunta al elemento
boton3.addEventListener("click", function () {
  console.log("this:", this); // El botón
  console.log("Texto del botón:", this.textContent);
  this.style.background = "#667eea";
  this.style.color = "white";
});

// ❌ Con arrow function: 'this' apunta a window
boton3.addEventListener("click", () => {
  console.log("this en arrow:", this); // window, NO el botón
});

/*
RECOMENDACIÓN:
  - Usa función normal si necesitas 'this'
  - Usa arrow function si no necesitas 'this' o prefieres usar 'e.target'
*/

//------------------------------------------------------//
// 🗑️ REMOVER EVENT LISTENERS
//------------------------------------------------------//

/*
Para remover un event listener, necesitas:
  1. Usar una función con NOMBRE (no anónima)
  2. Usar removeEventListener con la MISMA función
*/

let boton4 = document.createElement("button");
boton4.textContent = "Botón 4 (removible)";
boton4.style.cssText = "margin: 20px; padding: 10px 20px;";
document.body.append(boton4);

// ✅ Función con nombre (se puede remover)
function manejarClick() {
  console.log("Click manejado");
  alert("Click en botón 4");
}

// Añadir listener
boton4.addEventListener("click", manejarClick);

// Crear botón para remover
let botonRemover = document.createElement("button");
botonRemover.textContent = "Remover listener del Botón 4";
botonRemover.style.cssText =
  "margin: 20px; padding: 10px 20px; background: #dc3545; color: white; border: none; border-radius: 5px;";
document.body.append(botonRemover);

botonRemover.addEventListener("click", function () {
  boton4.removeEventListener("click", manejarClick);
  console.log("✅ Listener removido del Botón 4");
  alert("El Botón 4 ya no responde a clicks");
});

// ❌ Función anónima (NO se puede remover)
boton4.addEventListener("click", function () {
  console.log("Esta función no se puede remover");
});

/*
NO HAY FORMA de remover la función anónima anterior ❌
Por eso es importante usar funciones con nombre cuando
planeas remover el listener más adelante.
*/

//------------------------------------------------------//
// ⚙️ OPCIONES AVANZADAS DE addEventListener
//------------------------------------------------------//

/*
addEventListener tiene un tercer parámetro opcional con opciones:

elemento.addEventListener(evento, función, {
  capture: boolean,  // usar fase de captura
  once: boolean,     // ejecutar solo una vez y remover automáticamente
  passive: boolean   // no llamará preventDefault() - mejor rendimiento
});
*/

let boton5 = document.createElement("button");
boton5.textContent = "Botón 5 (opciones avanzadas)";
boton5.style.cssText = "margin: 20px; padding: 10px 20px;";
document.body.append(boton5);

// Opción 'once': ejecutar solo una vez
boton5.addEventListener(
  "click",
  function () {
    console.log("Este mensaje aparece solo UNA vez");
    alert("Click registrado. Este listener se auto-remueve.");
  },
  { once: true }
);

// Después del primer click, el listener se remueve automáticamente ✅

//------------------------------------------------------//
// 📊 TABLA DE TECLAS IMPORTANTES
//------------------------------------------------------//

/*
┌──────────────┬──────────────┬────────────┬──────────────────────┐
│ Tecla        │ e.key        │ e.keyCode  │ Uso común            │
├──────────────┼──────────────┼────────────┼──────────────────────┤
│ Enter        │ "Enter"      │ 13         │ Enviar formulario    │
│ Escape       │ "Escape"     │ 27         │ Cancelar acción      │
│ Backspace    │ "Backspace"  │ 8          │ Borrar               │
│ Tab          │ "Tab"        │ 9          │ Navegar campos       │
│ Delete       │ "Delete"     │ 46         │ Eliminar             │
│ Flechas      │ "ArrowUp"    │ 38         │ Navegación           │
│ Espacio      │ " "          │ 32         │ Separador            │
│ A-Z          │ "a"-"z"      │ 65-90      │ Letras               │
│ 0-9          │ "0"-"9"      │ 48-57      │ Números (normal)     │
│ 0-9 (numpad) │ "0"-"9"      │ 96-105     │ Números (numérico)   │
└──────────────┴──────────────┴────────────┴──────────────────────┘

⚠️ IMPORTANTE: e.keyCode está OBSOLETO. Usa e.key o e.code
*/

//------------------------------------------------------//
// 📚 TIPOS DE EVENTOS COMUNES
//------------------------------------------------------//

/*
EVENTOS DE RATÓN:
  click, dblclick, mousedown, mouseup, mousemove
  mouseenter, mouseleave, mouseover, mouseout, contextmenu

EVENTOS DE TECLADO:
  keydown, keyup, keypress (obsoleto)

EVENTOS DE FORMULARIO:
  submit, input, change, focus, blur, reset, invalid

EVENTOS DE VENTANA:
  load, DOMContentLoaded, resize, scroll
  beforeunload, unload

EVENTOS DE ARRASTRE:
  drag, dragstart, dragend, dragover, drop, dragleave

EVENTOS TÁCTILES (móviles):
  touchstart, touchend, touchmove, touchcancel

EVENTOS DE PORTAPAPELES:
  copy, paste, cut
*/

//------------------------------------------------------//
// ✅ BUENAS PRÁCTICAS
//------------------------------------------------------//

/*
1. ✅ USA addEventListener (no onclick)
   Razón: Más flexible, permite múltiples manejadores

2. ✅ USA funciones con nombre si planeas removerlas
   Razón: removeEventListener necesita la misma referencia

3. ✅ USA e.key en lugar de e.keyCode
   Razón: e.keyCode está obsoleto

4. ✅ USA e.target para saber qué elemento disparó el evento
   Razón: Útil especialmente en delegación de eventos

5. ✅ USA e.currentTarget para el elemento con el listener
   Razón: Puede ser diferente de e.target en eventos delegados

6. ✅ USA preventDefault() para prevenir acciones por defecto
   Razón: Necesario para validaciones personalizadas

7. ⚠️ CUIDADO con 'this' en arrow functions
   Razón: 'this' no apunta al elemento en arrow functions

8. ✅ LIMPIA event listeners cuando ya no los necesites
   Razón: Evita memory leaks

9. ⚠️ NO uses demasiados event listeners
   Razón: Mejor rendimiento con delegación de eventos

10. ✅ USA la opción 'once' cuando el evento solo debe ejecutarse una vez
    Razón: Se remueve automáticamente, más limpio
*/

//------------------------------------------------------//
// 🎯 RESUMEN
//------------------------------------------------------//

/*
╔═══════════════════════════════════════════════════════════════════╗
║                  EVENTOS EN JAVASCRIPT                            ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║ MÉTODO RECOMENDADO:                                               ║
║   elemento.addEventListener('evento', función, opciones)          ║
║                                                                   ║
║ OBJETO EVENT:                                                     ║
║   e.target       → elemento que disparó el evento                ║
║   e.currentTarget → elemento con el listener                     ║
║   e.type         → tipo de evento                                ║
║   e.preventDefault() → previene acción por defecto               ║
║                                                                   ║
║ EVENTOS PRINCIPALES:                                              ║
║   RATÓN: click, dblclick, mouseenter, mouseleave                ║
║   TECLADO: keydown, keyup                                        ║
║   FORMULARIO: submit, input, change, focus, blur                ║
║                                                                   ║
║ TECLAS:                                                           ║
║   Usa e.key (recomendado) no e.keyCode (obsoleto)               ║
║   Ejemplos: "Enter", "Escape", "ArrowUp", "a", " "              ║
║                                                                   ║
║ REMOVER LISTENERS:                                                ║
║   Usa funciones con nombre + removeEventListener()               ║
║   O usa opción 'once: true' para auto-remover                   ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
*/
