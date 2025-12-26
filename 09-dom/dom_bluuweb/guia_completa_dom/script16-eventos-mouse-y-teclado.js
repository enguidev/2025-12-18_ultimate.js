// ============================================
// SECCIÓN 25: EVENTOS DEL MOUSE Y TECLADO
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("16 - EVENTOS DEL MOUSE Y TECLADO");
console.log("=".repeat(80) + "\n");

// ============================================
// PARTE 1: EVENTOS DEL MOUSE
// ============================================

console.log("=".repeat(60));
console.log("EVENTOS DEL MOUSE");
console.log("=".repeat(60) + "\n");

// ------------------------------------------
// CREAR ÁREA DE DEMOSTRACIÓN PARA MOUSE
// ------------------------------------------

const areaMouse = document.createElement("div");
areaMouse.id = "area-mouse";
areaMouse.style.cssText = `
  width: 500px;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 3px solid #333;
  border-radius: 10px;
  margin: 20px 0;
  position: relative;
  cursor: crosshair;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
areaMouse.innerHTML = "<span>Mueve el mouse aquí y haz clic</span>";
document.body.appendChild(areaMouse);

// Crear indicador de posición del mouse
const indicadorMouse = document.createElement("div");
indicadorMouse.id = "indicador-mouse";
indicadorMouse.style.cssText = `
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  border: 2px solid white;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 1000;
`;
areaMouse.appendChild(indicadorMouse);

console.log("✅ Área de demostración creada\n");

// ------------------------------------------
// 1. PROPIEDADES DE COORDENADAS DEL MOUSE
// ------------------------------------------

console.log("1. COORDENADAS DEL MOUSE:\n");

areaMouse.addEventListener("mousemove", (e) => {
  // Mostrar el indicador
  indicadorMouse.style.display = "block";
  indicadorMouse.style.left = e.offsetX + "px";
  indicadorMouse.style.top = e.offsetY + "px";
});

areaMouse.addEventListener("click", (e) => {
  console.log("\n🖱️ CLICK DETECTADO - Coordenadas:");

  // clientX/Y - Relativas al viewport (ventana visible)
  console.log("  clientX:", e.clientX, "px");
  console.log("  clientY:", e.clientY, "px");
  console.log("    → Posición relativa a la ventana del navegador");

  // pageX/Y - Relativas al documento completo (incluye scroll)
  console.log("\n  pageX:", e.pageX, "px");
  console.log("  pageY:", e.pageY, "px");
  console.log("    → Posición relativa al documento completo");

  // screenX/Y - Relativas a la pantalla física
  console.log("\n  screenX:", e.screenX, "px");
  console.log("  screenY:", e.screenY, "px");
  console.log("    → Posición relativa a la pantalla del monitor");

  // offsetX/Y - Relativas al elemento que disparó el evento
  console.log("\n  offsetX:", e.offsetX, "px");
  console.log("  offsetY:", e.offsetY, "px");
  console.log("    → Posición relativa al elemento clickeado");

  // movementX/Y - Movimiento relativo desde el último evento
  console.log("\n  movementX:", e.movementX, "px");
  console.log("  movementY:", e.movementY, "px");
  console.log("    → Cambio desde la última posición");
});

console.log("  Listeners de coordenadas configurados");
console.log("  Haz clic en el área morada para ver las coordenadas\n");

// ------------------------------------------
// 2. BOTONES DEL MOUSE
// ------------------------------------------

console.log("\n2. BOTONES DEL MOUSE:\n");

areaMouse.addEventListener("mousedown", (e) => {
  console.log("\n🖱️ BOTÓN PRESIONADO:");
  console.log("  button:", e.button);

  // button: Qué botón se presionó
  // 0 = Izquierdo, 1 = Rueda/medio, 2 = Derecho, 3 = Atrás, 4 = Adelante
  const botones = ["Izquierdo", "Medio", "Derecho", "Atrás", "Adelante"];
  console.log("  → Botón:", botones[e.button]);

  // buttons: Máscara de bits de botones presionados
  console.log("\n  buttons:", e.buttons);
  console.log("    → 1: Izquierdo presionado");
  console.log("    → 2: Derecho presionado");
  console.log("    → 4: Medio presionado");
  console.log("    → (se pueden combinar: 3 = izquierdo+derecho)");
});

areaMouse.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // Prevenir menú contextual
  console.log("\n🖱️ CLIC DERECHO (contextmenu)");
  console.log("  Menú contextual prevenido");
});

areaMouse.addEventListener("dblclick", (e) => {
  console.log("\n🖱️ DOBLE CLIC detectado");
  console.log("  Posición:", e.clientX, e.clientY);
});

console.log("  Listeners de botones configurados");
console.log("  Prueba: clic izquierdo, derecho, doble clic\n");

// ------------------------------------------
// 3. TECLAS MODIFICADORAS CON MOUSE
// ------------------------------------------

console.log("\n3. TECLAS MODIFICADORAS:\n");

areaMouse.addEventListener("click", (e) => {
  if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
    console.log("\n⌨️ TECLAS MODIFICADORAS PRESIONADAS:");
    console.log("  ctrlKey:", e.ctrlKey, "(Ctrl)");
    console.log("  shiftKey:", e.shiftKey, "(Shift)");
    console.log("  altKey:", e.altKey, "(Alt)");
    console.log("  metaKey:", e.metaKey, "(Cmd/Win)");

    // Combinaciones comunes
    if (e.ctrlKey && e.shiftKey) {
      console.log("  → Combinación: Ctrl + Shift + Click");
    }
    if (e.altKey) {
      console.log("  → Combinación: Alt + Click");
    }
  }
});

console.log("  Listeners de modificadores configurados");
console.log("  Prueba: Ctrl+Click, Shift+Click, Alt+Click\n");

// ------------------------------------------
// 4. EVENTOS DE ENTRADA/SALIDA DEL MOUSE
// ------------------------------------------

console.log("\n4. EVENTOS DE ENTRADA/SALIDA:\n");

const boxHover = document.createElement("div");
boxHover.style.cssText = `
  width: 300px;
  height: 150px;
  background: #4CAF50;
  border-radius: 8px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  transition: all 0.3s;
`;
boxHover.innerHTML = "<span>Pasa el mouse por aquí</span>";
document.body.appendChild(boxHover);

// mouseenter - No se propaga (no hace bubbling)
boxHover.addEventListener("mouseenter", (e) => {
  console.log("\n🎯 mouseenter - Mouse ENTRÓ al elemento");
  boxHover.style.background = "#45a049";
  boxHover.style.transform = "scale(1.05)";
});

// mouseleave - No se propaga (no hace bubbling)
boxHover.addEventListener("mouseleave", (e) => {
  console.log("🎯 mouseleave - Mouse SALIÓ del elemento");
  boxHover.style.background = "#4CAF50";
  boxHover.style.transform = "scale(1)";
});

// mouseover - SÍ se propaga (hace bubbling)
boxHover.addEventListener("mouseover", (e) => {
  console.log("  📍 mouseover - Se dispara también en hijos");
});

// mouseout - SÍ se propaga (hace bubbling)
boxHover.addEventListener("mouseout", (e) => {
  console.log("  📍 mouseout - Se dispara también al salir de hijos");
});

console.log("✅ Eventos de hover configurados");
console.log("  mouseenter/leave → NO se propagan a hijos");
console.log("  mouseover/out → SÍ se propagan a hijos\n");

// ============================================
// PARTE 2: DRAG AND DROP API
// ============================================

console.log("\n" + "=".repeat(60));
console.log("DRAG AND DROP API");
console.log("=".repeat(60) + "\n");

// ------------------------------------------
// CREAR ELEMENTOS PARA DRAG AND DROP
// ------------------------------------------

const containerDragDrop = document.createElement("div");
containerDragDrop.style.cssText = `
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

// Elemento arrastrable
const elementoDraggable = document.createElement("div");
elementoDraggable.id = "elemento-draggable";
elementoDraggable.draggable = true;
elementoDraggable.style.cssText = `
  width: 150px;
  height: 150px;
  background: #FF5722;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: move;
  user-select: none;
`;
elementoDraggable.textContent = "Arrastrar";

// Zona de destino
const zonaDestino = document.createElement("div");
zonaDestino.id = "zona-destino";
zonaDestino.style.cssText = `
  width: 300px;
  height: 200px;
  border: 3px dashed #2196F3;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2196F3;
  font-size: 18px;
  background: rgba(33, 150, 243, 0.1);
`;
zonaDestino.textContent = "Suelta aquí";

containerDragDrop.appendChild(elementoDraggable);
containerDragDrop.appendChild(zonaDestino);
document.body.appendChild(containerDragDrop);

console.log("✅ Elementos drag & drop creados\n");

// ------------------------------------------
// 5. EVENTOS DE DRAG (ELEMENTO ARRASTRABLE)
// ------------------------------------------

console.log("5. EVENTOS DEL ELEMENTO ARRASTRABLE:\n");

// dragstart - Cuando empieza a arrastrarse
elementoDraggable.addEventListener("dragstart", (e) => {
  console.log("\n🚀 dragstart - Empezó a arrastrar");
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", e.target.id);
  e.target.style.opacity = "0.5";
});

// drag - Mientras se arrastra (se dispara continuamente)
elementoDraggable.addEventListener("drag", (e) => {
  // Se ejecuta muchas veces, no logueamos para no saturar
});

// dragend - Cuando termina de arrastrarse
elementoDraggable.addEventListener("dragend", (e) => {
  console.log("🏁 dragend - Terminó de arrastrar");
  e.target.style.opacity = "1";
});

console.log("  Eventos del elemento arrastrable configurados\n");

// ------------------------------------------
// 6. EVENTOS DE DROP (ZONA DE DESTINO)
// ------------------------------------------

console.log("6. EVENTOS DE LA ZONA DE DESTINO:\n");

// dragenter - Mouse entra en la zona de destino
zonaDestino.addEventListener("dragenter", (e) => {
  e.preventDefault();
  console.log("📥 dragenter - Entró a la zona de destino");
  zonaDestino.style.background = "rgba(33, 150, 243, 0.3)";
  zonaDestino.style.borderColor = "#1976D2";
});

// dragover - Mouse se mueve sobre la zona de destino
zonaDestino.addEventListener("dragover", (e) => {
  e.preventDefault(); // NECESARIO para permitir drop
  e.dataTransfer.dropEffect = "move";
});

// dragleave - Mouse sale de la zona de destino
zonaDestino.addEventListener("dragleave", (e) => {
  console.log("📤 dragleave - Salió de la zona de destino");
  zonaDestino.style.background = "rgba(33, 150, 243, 0.1)";
  zonaDestino.style.borderColor = "#2196F3";
});

// drop - Se suelta el elemento en la zona
zonaDestino.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log("\n✅ drop - Elemento soltado");

  const data = e.dataTransfer.getData("text/plain");
  const elementoArrastrado = document.getElementById(data);

  if (elementoArrastrado) {
    zonaDestino.appendChild(elementoArrastrado);
    console.log("  Elemento movido a la zona de destino");
    elementoArrastrado.textContent = "¡Soltado!";
  }

  zonaDestino.style.background = "rgba(33, 150, 243, 0.1)";
  zonaDestino.style.borderColor = "#2196F3";
});

console.log("  Eventos de la zona de destino configurados");
console.log("  ¡Prueba a arrastrar el elemento naranja!\n");

// ============================================
// PARTE 3: EVENTOS DEL TECLADO
// ============================================

console.log("\n" + "=".repeat(60));
console.log("EVENTOS DEL TECLADO");
console.log("=".repeat(60) + "\n");

// ------------------------------------------
// CREAR INPUT PARA DEMOSTRACIÓN DE TECLADO
// ------------------------------------------

const inputTeclado = document.createElement("input");
inputTeclado.type = "text";
inputTeclado.placeholder = "Escribe aquí para probar eventos del teclado";
inputTeclado.style.cssText = `
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 2px solid #2196F3;
  border-radius: 8px;
  margin: 20px 0;
`;
document.body.appendChild(inputTeclado);

console.log("✅ Input de prueba creado\n");

// ------------------------------------------
// 7. PROPIEDADES DEL KEYBOARDEVENT
// ------------------------------------------

console.log("7. PROPIEDADES DEL EVENTO DE TECLADO:\n");

inputTeclado.addEventListener("keydown", (e) => {
  console.log("\n⌨️ TECLA PRESIONADA:");
  console.log("  key:", e.key);
  console.log("    → Valor del carácter ('a', 'Enter', 'ArrowUp', etc.)");

  console.log("\n  code:", e.code);
  console.log("    → Código físico de la tecla ('KeyA', 'Enter', 'ArrowUp')");

  console.log("\n  keyCode:", e.keyCode, "(⚠️ OBSOLETO)");
  console.log("    → Código numérico (no usar, solo referencia)");

  console.log("\n  which:", e.which, "(⚠️ OBSOLETO)");
  console.log("    → Igual que keyCode (no usar)");

  // Información adicional
  console.log("\n  Propiedades adicionales:");
  console.log(
    "    repeat:",
    e.repeat,
    "(true si la tecla se mantiene presionada)"
  );
  console.log(
    "    location:",
    e.location,
    "(0=standard, 1=izq, 2=der, 3=numpad)"
  );
});

console.log("  Listeners de teclado configurados");
console.log("  Escribe en el input para ver las propiedades\n");

// ------------------------------------------
// 8. TECLAS MODIFICADORAS
// ------------------------------------------

console.log("\n8. TECLAS MODIFICADORAS:\n");

inputTeclado.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
    console.log("\n🎹 MODIFICADORES ACTIVOS:");
    console.log("  ctrlKey:", e.ctrlKey, "(Ctrl)");
    console.log("  shiftKey:", e.shiftKey, "(Shift)");
    console.log("  altKey:", e.altKey, "(Alt)");
    console.log("  metaKey:", e.metaKey, "(Cmd/Win)");
  }
});

console.log("  Listeners de modificadores configurados");
console.log("  Prueba: Ctrl+A, Shift+F, Alt+S, etc.\n");

// ------------------------------------------
// 9. COMBINACIONES DE TECLAS COMUNES
// ------------------------------------------

console.log("\n9. COMBINACIONES DE TECLAS:\n");

// Crear display para mostrar combinaciones detectadas
const displayCombo = document.createElement("div");
displayCombo.style.cssText = `
  background: #333;
  color: #0f0;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  margin: 20px 0;
  min-height: 50px;
`;
displayCombo.textContent = "Combinaciones detectadas aparecerán aquí";
document.body.appendChild(displayCombo);

document.addEventListener("keydown", (e) => {
  // Ctrl + S (Guardar)
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    console.log("\n💾 CTRL + S - Guardar");
    displayCombo.textContent = "💾 Ctrl + S detectado";
  }

  // Ctrl + C (Copiar)
  if (e.ctrlKey && e.key === "c") {
    console.log("\n📋 CTRL + C - Copiar");
    displayCombo.textContent = "📋 Ctrl + C detectado";
  }

  // Ctrl + V (Pegar)
  if (e.ctrlKey && e.key === "v") {
    console.log("\n📋 CTRL + V - Pegar");
    displayCombo.textContent = "📋 Ctrl + V detectado";
  }

  // Ctrl + Z (Deshacer)
  if (e.ctrlKey && e.key === "z") {
    e.preventDefault();
    console.log("\n↩️ CTRL + Z - Deshacer");
    displayCombo.textContent = "↩️ Ctrl + Z detectado";
  }

  // Ctrl + Shift + Z (Rehacer)
  if (e.ctrlKey && e.shiftKey && e.key === "z") {
    e.preventDefault();
    console.log("\n↪️ CTRL + SHIFT + Z - Rehacer");
    displayCombo.textContent = "↪️ Ctrl + Shift + Z detectado";
  }

  // Escape
  if (e.key === "Escape") {
    console.log("\n❌ ESC - Cancelar");
    displayCombo.textContent = "❌ Escape detectado";
  }

  // Enter
  if (e.key === "Enter") {
    console.log("\n✅ ENTER - Confirmar");
    displayCombo.textContent = "✅ Enter detectado";
  }

  // Flechas
  if (e.key.startsWith("Arrow")) {
    console.log(`\n➡️ FLECHA: ${e.key}`);
    displayCombo.textContent = `➡️ ${e.key} detectado`;
  }

  // Teclas de función (F1-F12)
  if (e.key.startsWith("F") && e.key.length <= 3) {
    e.preventDefault();
    console.log(`\n🔧 ${e.key}`);
    displayCombo.textContent = `🔧 ${e.key} detectado`;
  }
});

console.log("  Combinaciones comunes configuradas:");
console.log("    Ctrl + S → Guardar");
console.log("    Ctrl + C → Copiar");
console.log("    Ctrl + V → Pegar");
console.log("    Ctrl + Z → Deshacer");
console.log("    Ctrl + Shift + Z → Rehacer");
console.log("    Escape → Cancelar");
console.log("    Enter → Confirmar");
console.log("    Flechas → Navegación");
console.log("    F1-F12 → Teclas de función\n");

// ------------------------------------------
// 10. DIFERENCIA ENTRE EVENTOS DE TECLADO
// ------------------------------------------

console.log("\n10. DIFERENCIAS ENTRE EVENTOS:\n");

const inputEventos = document.createElement("input");
inputEventos.type = "text";
inputEventos.placeholder = "Escribe para ver la diferencia entre eventos";
inputEventos.style.cssText = inputTeclado.style.cssText;
document.body.appendChild(inputEventos);

// keydown - Se dispara al presionar una tecla
inputEventos.addEventListener("keydown", (e) => {
  console.log("  ⬇️ keydown - Tecla presionada:", e.key);
});

// keypress - OBSOLETO (solo para referencia)
inputEventos.addEventListener("keypress", (e) => {
  console.log("  ⚠️ keypress - OBSOLETO, no usar");
});

// keyup - Se dispara al soltar una tecla
inputEventos.addEventListener("keyup", (e) => {
  console.log("  ⬆️ keyup - Tecla soltada:", e.key);
});

// input - Se dispara cuando cambia el valor del input
inputEventos.addEventListener("input", (e) => {
  console.log("  📝 input - Valor cambió:", e.target.value);
});

console.log("  Eventos configurados:");
console.log("    keydown → Al presionar");
console.log("    keyup → Al soltar");
console.log("    input → Cuando cambia el valor\n");

// ============================================
// PARTE 4: EVENTOS DE RUEDA DEL MOUSE
// ============================================

console.log("\n" + "=".repeat(60));
console.log("EVENTOS DE RUEDA DEL MOUSE (WHEEL)");
console.log("=".repeat(60) + "\n");

// ------------------------------------------
// CREAR ÁREA PARA EVENTOS DE RUEDA
// ------------------------------------------

const areaWheel = document.createElement("div");
areaWheel.style.cssText = `
  width: 400px;
  height: 300px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border: 3px solid #333;
  border-radius: 10px;
  margin: 20px 0;
  overflow: auto;
  padding: 20px;
  color: white;
`;
areaWheel.innerHTML = `
  <h3>Usa la rueda del mouse aquí</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>Scroll para ver los eventos de rueda.</p>
  <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
  <p>Cras mattis consectetur purus sit amet fermentum.</p>
  <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
  <p>Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
`;
document.body.appendChild(areaWheel);

// ------------------------------------------
// 11. EVENTO WHEEL
// ------------------------------------------

console.log("11. EVENTO WHEEL:\n");

areaWheel.addEventListener("wheel", (e) => {
  console.log("\n🎡 RUEDA DEL MOUSE:");
  console.log("  deltaX:", e.deltaX);
  console.log("  deltaY:", e.deltaY);
  console.log("  deltaZ:", e.deltaZ);
  console.log("  deltaMode:", e.deltaMode);
  console.log("    → 0: Píxeles, 1: Líneas, 2: Páginas");

  if (e.deltaY < 0) {
    console.log("  📈 Scroll hacia ARRIBA");
  } else if (e.deltaY > 0) {
    console.log("  📉 Scroll hacia ABAJO");
  }

  if (e.ctrlKey) {
    // Ctrl + Wheel = Zoom (común en navegadores)
    e.preventDefault();
    console.log("  🔍 Ctrl + Wheel = Zoom");
  }
});

console.log("  Listener de rueda configurado");
console.log("  Prueba: scroll en el área rosa\n");

// ============================================
// RESUMEN Y MEJORES PRÁCTICAS
// ============================================

console.log("\n" + "=".repeat(80));
console.log("RESUMEN - EVENTOS DEL MOUSE Y TECLADO");
console.log("=".repeat(80) + "\n");

console.log(`
╔═══════════════════════════╦════════════════════════════════════════════════╗
║ EVENTO                    ║ CUÁNDO USAR                                    ║
╠═══════════════════════════╬════════════════════════════════════════════════╣
║ MOUSE:                    ║                                                ║
║   click                   ║ Clic simple del mouse                          ║
║   dblclick                ║ Doble clic                                     ║
║   mousedown/up            ║ Presionar/soltar botón                         ║
║   mousemove               ║ Seguimiento del cursor                         ║
║   mouseenter/leave        ║ Entrar/salir (NO se propaga)                   ║
║   mouseover/out           ║ Entrar/salir (SÍ se propaga)                   ║
║   contextmenu             ║ Clic derecho                                   ║
║   wheel                   ║ Rueda del mouse                                ║
╠═══════════════════════════╬════════════════════════════════════════════════╣
║ DRAG & DROP:              ║                                                ║
║   dragstart               ║ Empieza a arrastrar                            ║
║   drag                    ║ Mientras arrastra                              ║
║   dragend                 ║ Termina de arrastrar                           ║
║   dragenter               ║ Entra a zona de destino                        ║
║   dragover                ║ Sobre zona de destino                          ║
║   dragleave               ║ Sale de zona de destino                        ║
║   drop                    ║ Suelta el elemento                             ║
╠═══════════════════════════╬════════════════════════════════════════════════╣
║ TECLADO:                  ║                                                ║
║   keydown                 ║ Al presionar tecla (recomendado)              ║
║   keyup                   ║ Al soltar tecla                                ║
║   keypress                ║ ⚠️ OBSOLETO - No usar                          ║
║   input                   ║ Cuando cambia valor de input                   ║
╚═══════════════════════════╩════════════════════════════════════════════════╝

PROPIEDADES DE MouseEvent:
  Coordenadas:
    clientX/Y  → Relativo al viewport
    pageX/Y    → Relativo al documento (con scroll)
    screenX/Y  → Relativo a la pantalla
    offsetX/Y  → Relativo al elemento
    movementX/Y → Cambio desde último evento
  
  Botones:
    button     → Qué botón (0=izq, 1=medio, 2=der)
    buttons    → Máscara de bits de botones activos
  
  Modificadores:
    ctrlKey    → Ctrl presionado
    shiftKey   → Shift presionado
    altKey     → Alt presionado
    metaKey    → Cmd/Win presionado

PROPIEDADES DE KeyboardEvent:
  Tecla:
    key        → Valor del carácter ('a', 'Enter')
    code       → Código físico ('KeyA', 'Enter')
    keyCode    → ⚠️ OBSOLETO - No usar
    which      → ⚠️ OBSOLETO - No usar
  
  Modificadores:
    ctrlKey, shiftKey, altKey, metaKey (igual que mouse)
  
  Adicionales:
    repeat     → true si tecla mantenida
    location   → Ubicación física de la tecla

MEJORES PRÁCTICAS:

1. COORDENADAS DEL MOUSE:
   ✓ Usar clientX/Y para posición en viewport
   ✓ Usar pageX/Y si necesitas considerar scroll
   ✓ Usar offsetX/Y para posición relativa al elemento

2. EVENTOS DE HOVER:
   ✓ mouseenter/leave → Para efectos simples (no burbujean)
   ✓ mouseover/out → Si necesitas propagación

3. DRAG & DROP:
   ✓ SIEMPRE usar e.preventDefault() en dragover
   ✓ Usar dataTransfer para pasar datos
   ✓ Establecer draggable="true" en elementos

4. TECLADO:
   ✓ Usar event.key en lugar de keyCode
   ✓ keydown para detectar presión de tecla
   ✓ input para detectar cambios en el valor
   ✓ NUNCA usar keypress (obsoleto)

5. COMBINACIONES:
   ✓ Verificar modificadores (ctrlKey, shiftKey, etc.)
   ✓ Usar preventDefault() para combinaciones personalizadas
   ✓ Considerar compatibilidad Mac (metaKey vs ctrlKey)

6. PERFORMANCE:
   ✓ Usar throttle/debounce para mousemove y wheel
   ✓ No hacer operaciones pesadas en estos eventos
   ✓ Considerar requestAnimationFrame para animaciones

COMBINACIONES COMUNES:
  Ctrl + S     → Guardar
  Ctrl + C/V   → Copiar/Pegar
  Ctrl + Z     → Deshacer
  Ctrl + Y     → Rehacer
  Ctrl + A     → Seleccionar todo
  Escape       → Cancelar/Cerrar
  Enter        → Confirmar
  Flechas      → Navegación
  F1-F12       → Acciones especiales

ACCESIBILIDAD:
  ✓ Proporcionar alternativas de teclado a acciones del mouse
  ✓ Usar teclas estándar (Enter, Escape, Flechas)
  ✓ Indicar visualmente elementos arrastrables
  ✓ Dar feedback de acciones (hover, focus, active)
`);

console.log("\n" + "=".repeat(80));
console.log("✅ GUÍA DE EVENTOS DEL MOUSE Y TECLADO COMPLETADA");
console.log("=".repeat(80) + "\n");
