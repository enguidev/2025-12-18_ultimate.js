//======================================================//
// EVENTOS AVANZADOS - PROPAGACIÓN Y DELEGACIÓN
//======================================================//

/*
Este archivo cubre conceptos avanzados de eventos:
  1. Propagación de eventos (bubbling y capturing)
  2. Delegación de eventos
  3. event.target vs event.currentTarget
  4. stopPropagation() y stopImmediatePropagation()
  5. Eventos personalizados (CustomEvent)
*/

//------------------------------------------------------//
// 🎈 PROPAGACIÓN DE EVENTOS (Event Propagation)
//------------------------------------------------------//

/*
Cuando ocurre un evento, se propaga a través del DOM en 3 FASES:

1. CAPTURING (captura): de padre a hijo
   window → document → html → body → div → button

2. TARGET (objetivo): en el elemento objetivo

3. BUBBLING (burbujeo): de hijo a padre
   button → div → body → html → document → window

Por defecto, los event listeners se ejecutan en la fase de BUBBLING
*/

console.log("=== PROPAGACIÓN DE EVENTOS ===\n");

// Crear estructura padre → hijo
let contenedor = document.createElement("div");
contenedor.id = "contenedor";
contenedor.textContent = "CONTENEDOR";
contenedor.style.cssText = `
  width: 300px;
  height: 300px;
  background: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 10px;
  cursor: pointer;
`;
document.body.append(contenedor);

let cajaHija = document.createElement("div");
cajaHija.id = "cajaHija";
cajaHija.textContent = "CAJA HIJA";
cajaHija.style.cssText = `
  width: 150px;
  height: 150px;
  background: #764ba2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
contenedor.append(cajaHija);

// Listener en el PADRE
contenedor.addEventListener("click", function (e) {
  console.log("🟦 Click capturado en CONTENEDOR (padre)");
  console.log("   target:", e.target.id);
  console.log("   currentTarget:", e.currentTarget.id);
});

// Listener en el HIJO
cajaHija.addEventListener("click", function (e) {
  console.log("🟪 Click capturado en CAJA HIJA");
  console.log("   target:", e.target.id);
  console.log("   currentTarget:", e.currentTarget.id);
});

/*
Si haces click en la CAJA HIJA, se ejecutan AMBOS listeners:
  1º → Click en CAJA HIJA (target)
  2º → Click en CONTENEDOR (bubbling desde el hijo al padre)

Esto se llama EVENT BUBBLING (burbujeo de eventos)
*/

//------------------------------------------------------//
// 🎯 event.target vs event.currentTarget
//------------------------------------------------------//

/*
DIFERENCIA IMPORTANTE:

event.target:
  - Elemento que REALMENTE recibió el evento (donde se hizo click)
  - Puede ser cualquier descendiente del elemento con el listener

event.currentTarget:
  - Elemento que TIENE el event listener
  - Siempre es el mismo elemento (donde se registró el listener)
  - Es equivalente a 'this' (en funciones normales, no arrow)
*/

contenedor.addEventListener("click", function (e) {
  console.log("\n=== COMPARACIÓN ===");
  console.log("target (donde se hizo click):", e.target.id);
  console.log("currentTarget (quien tiene el listener):", e.currentTarget.id);
  console.log("this:", this.id);

  if (e.target === e.currentTarget) {
    console.log("✅ Click DIRECTO en el contenedor");
  } else {
    console.log("⚠️ Click en un HIJO, pero el padre lo capturó (bubbling)");
  }
});

//------------------------------------------------------//
// 🛑 DETENER LA PROPAGACIÓN
//------------------------------------------------------//

/*
stopPropagation(): detiene la propagación del evento
  - No llega a los elementos padre
  - Los demás listeners del mismo elemento SÍ se ejecutan

stopImmediatePropagation(): detiene TODO
  - No llega a los elementos padre
  - Los demás listeners del mismo elemento NO se ejecutan
*/

// Crear nueva estructura para demostrar
let padre = document.createElement("div");
padre.textContent = "PADRE";
padre.style.cssText = `
  width: 250px;
  height: 250px;
  background: #43e97b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 10px;
`;
document.body.append(padre);

let hijo = document.createElement("div");
hijo.textContent = "HIJO (sin propagación)";
hijo.style.cssText = `
  width: 120px;
  height: 120px;
  background: #38f9d7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
`;
padre.append(hijo);

padre.addEventListener("click", function () {
  console.log("🟢 Click en PADRE");
});

// Primer listener del hijo: detiene propagación
hijo.addEventListener("click", function (e) {
  e.stopPropagation(); // ← Detiene el bubbling
  console.log("🔵 Click en HIJO (primer listener)");
  console.log("   Propagación detenida con stopPropagation()");
  alert("Propagación detenida. El padre NO recibirá el evento.");
});

// Segundo listener del hijo: SÍ se ejecuta
hijo.addEventListener("click", function () {
  console.log("🔵 Click en HIJO (segundo listener)");
  console.log("   Este listener SÍ se ejecuta");
});

/*
Resultado al hacer click en el HIJO:
  1. Primer listener del hijo (con stopPropagation)
  2. Segundo listener del hijo ✅
  3. Listener del padre NO se ejecuta ❌ (propagación detenida)
*/

//------------------------------------------------------//
// 🚫 stopImmediatePropagation()
//------------------------------------------------------//

let botonStop = document.createElement("button");
botonStop.textContent = "Botón con stopImmediatePropagation";
botonStop.style.cssText = "margin: 20px; padding: 10px 20px;";
document.body.append(botonStop);

// Primer listener: detiene TODO
botonStop.addEventListener("click", function (e) {
  e.stopImmediatePropagation(); // ← Detiene TODO
  console.log("Primer listener ejecutado");
  console.log("stopImmediatePropagation() llamado");
});

// Segundo listener: NO se ejecuta
botonStop.addEventListener("click", function () {
  console.log("Este listener NO se ejecuta ❌");
});

// Tercer listener: NO se ejecuta
botonStop.addEventListener("click", function () {
  console.log("Este listener tampoco se ejecuta ❌");
});

/*
DIFERENCIA:
  stopPropagation():
    - Detiene propagación a padres
    - Otros listeners del mismo elemento SÍ se ejecutan

  stopImmediatePropagation():
    - Detiene propagación a padres
    - Otros listeners del mismo elemento NO se ejecutan
*/

//------------------------------------------------------//
// 🎪 FASE DE CAPTURA (Capturing)
//------------------------------------------------------//

/*
Por defecto, los listeners se ejecutan en fase de BUBBLING.
Para ejecutarlos en fase de CAPTURING, usa { capture: true }

Orden de ejecución:
  1. CAPTURING: padres → hijo
  2. TARGET: elemento objetivo
  3. BUBBLING: hijo → padres
*/

let contenedor2 = document.createElement("div");
contenedor2.textContent = "CONTENEDOR (con capturing)";
contenedor2.style.cssText = `
  width: 300px;
  height: 200px;
  background: #f093fb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 10px;
  cursor: pointer;
`;
document.body.append(contenedor2);

let botonInterno = document.createElement("button");
botonInterno.textContent = "Botón Interno";
botonInterno.style.cssText = "padding: 10px 20px; font-size: 16px;";
contenedor2.append(botonInterno);

// Listener en BUBBLING (por defecto)
contenedor2.addEventListener("click", function () {
  console.log("3️⃣ Contenedor en BUBBLING (último)");
});

// Listener en CAPTURING
contenedor2.addEventListener(
  "click",
  function () {
    console.log("1️⃣ Contenedor en CAPTURING (primero)");
  },
  { capture: true }
); // ← capture: true

// Listener en el botón
botonInterno.addEventListener("click", function () {
  console.log("2️⃣ Botón (target)");
});

/*
Al hacer click en el botón, orden de ejecución:
  1. Contenedor en CAPTURING (padre primero)
  2. Botón (target)
  3. Contenedor en BUBBLING (padre después)
*/

//------------------------------------------------------//
// 🎯 DELEGACIÓN DE EVENTOS (Event Delegation)
//------------------------------------------------------//

/*
La delegación de eventos es una técnica donde:
  - En lugar de añadir un listener a cada elemento hijo
  - Añades UN SOLO listener al elemento padre
  - Usas e.target para saber qué hijo fue clickeado

VENTAJAS:
  ✅ Mejor rendimiento (menos listeners en memoria)
  ✅ Funciona con elementos dinámicos (creados después)
  ✅ Menos uso de memoria
  ✅ Código más limpio y mantenible
*/

console.log("\n=== DELEGACIÓN DE EVENTOS ===\n");

// Crear contenedor de botones
let contenedorBotones = document.createElement("div");
contenedorBotones.id = "contenedorBotones";
contenedorBotones.style.cssText = `
  display: flex;
  gap: 10px;
  margin: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
`;
document.body.append(contenedorBotones);

// Crear 5 botones
for (let i = 1; i <= 5; i++) {
  let btn = document.createElement("button");
  btn.textContent = `Botón ${i}`;
  btn.dataset.numero = i; // data-numero="1"
  btn.style.cssText = "padding: 10px 20px;";
  contenedorBotones.append(btn);
}

// ❌ FORMA INCORRECTA: listener en cada botón
/*
document.querySelectorAll('#contenedorBotones button').forEach(btn => {
  btn.addEventListener('click', function() {
    console.log('Click en', this.textContent);
  });
});
// Problemas: 5 listeners, no funciona con botones dinámicos
*/

// ✅ FORMA CORRECTA: UN SOLO listener en el padre (delegación)
contenedorBotones.addEventListener("click", function (e) {
  // Verificar si el click fue en un botón
  if (e.target.tagName === "BUTTON") {
    console.log("✅ Click en botón:", e.target.textContent);
    console.log("   Número del botón:", e.target.dataset.numero);
    alert(`Clickeaste el ${e.target.textContent}`);
  }
});

// Crear botón para añadir más botones dinámicamente
let btnAgregar = document.createElement("button");
btnAgregar.textContent = "➕ Añadir botón dinámico";
btnAgregar.style.cssText =
  "margin: 20px; padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 5px;";
document.body.append(btnAgregar);

let contador = 6;
btnAgregar.addEventListener("click", function () {
  let nuevoBtn = document.createElement("button");
  nuevoBtn.textContent = `Botón ${contador}`;
  nuevoBtn.dataset.numero = contador;
  nuevoBtn.style.cssText = "padding: 10px 20px;";
  contenedorBotones.append(nuevoBtn);
  contador++;

  console.log(
    "✅ Nuevo botón añadido. Funciona automáticamente con delegación."
  );
});

/*
Con delegación, los botones nuevos funcionan automáticamente ✅
Sin delegación, tendrías que añadir listeners a cada botón nuevo ❌
*/

//------------------------------------------------------//
// 🎨 EJEMPLO PRÁCTICO: LISTA DE TAREAS CON DELEGACIÓN
//------------------------------------------------------//

let listaTareas = document.createElement("ul");
listaTareas.id = "listaTareas";
listaTareas.style.cssText = `
  list-style: none;
  padding: 20px;
  background: white;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;
document.body.append(listaTareas);

// Añadir algunas tareas
["Estudiar JavaScript", "Hacer ejercicio", "Leer un libro"].forEach((tarea) => {
  let li = document.createElement("li");
  li.style.cssText = `
    padding: 10px;
    margin: 5px 0;
    background: #f8f9fa;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  li.innerHTML = `
    <span class="tarea-texto">${tarea}</span>
    <button class="btn-eliminar" style="background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">❌</button>
  `;

  listaTareas.append(li);
});

// UN SOLO listener en la lista (delegación)
listaTareas.addEventListener("click", function (e) {
  // Si click en el botón eliminar
  if (e.target.classList.contains("btn-eliminar")) {
    e.target.closest("li").remove();
    console.log("✅ Tarea eliminada");
  }

  // Si click en el texto de la tarea
  if (e.target.classList.contains("tarea-texto")) {
    e.target.style.textDecoration =
      e.target.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
    console.log("✅ Tarea marcada/desmarcada");
  }
});

/*
Ventajas en este ejemplo:
  ✅ Un solo listener para toda la lista
  ✅ Funciona con tareas añadidas dinámicamente
  ✅ Fácil de mantener
  ✅ Mejor rendimiento
*/

//------------------------------------------------------//
// 🎁 EVENTOS PERSONALIZADOS (CustomEvent)
//------------------------------------------------------//

/*
Puedes crear y despachar tus propios eventos personalizados
usando la clase CustomEvent.

Útil para:
  - Comunicación entre componentes
  - Arquitecturas event-driven
  - Desacoplar código
*/

console.log("\n=== EVENTOS PERSONALIZADOS ===\n");

// Crear evento personalizado
const eventoPersonalizado = new CustomEvent("usuarioLogueado", {
  detail: {
    usuario: "Ana García",
    id: 123,
    timestamp: Date.now(),
  },
  bubbles: true, // Permite bubbling
  cancelable: true, // Permite preventDefault()
});

// Escuchar el evento personalizado
document.addEventListener("usuarioLogueado", function (e) {
  console.log("🔔 Evento personalizado capturado");
  console.log("   Detalles:", e.detail);
  console.log("   Usuario:", e.detail.usuario);
  console.log("   ID:", e.detail.id);
});

// Despachar el evento
document.dispatchEvent(eventoPersonalizado);

// Ejemplo práctico: Sistema de notificaciones
function mostrarNotificacion(mensaje, tipo) {
  const evento = new CustomEvent("notificacion", {
    detail: { mensaje, tipo }, // tipo: "info", "success", "error"
  });

  document.dispatchEvent(evento);
}

// Listener para notificaciones
document.addEventListener("notificacion", function (e) {
  console.log(`📢 ${e.detail.tipo.toUpperCase()}: ${e.detail.mensaje}`);
});

// Usar el sistema
mostrarNotificacion("Usuario guardado correctamente", "success");
mostrarNotificacion("Error al conectar con el servidor", "error");
mostrarNotificacion("Nuevo mensaje recibido", "info");

//------------------------------------------------------//
// 🔄 PREVENIR COMPORTAMIENTO POR DEFECTO
//------------------------------------------------------//

/*
event.preventDefault() previene la acción por defecto del navegador

CASOS COMUNES:
  - Formularios: prevenir envío automático
  - Enlaces: prevenir navegación
  - Clic derecho: prevenir menú contextual
  - Arrastre: prevenir comportamiento por defecto
  - Teclas: prevenir atajos del navegador
*/

// Ejemplo: enlace sin navegación
let enlace = document.createElement("a");
enlace.href = "https://example.com";
enlace.textContent = "Enlace (sin navegación)";
enlace.style.cssText =
  "display: block; margin: 20px; color: #667eea; text-decoration: underline; cursor: pointer;";
document.body.append(enlace);

enlace.addEventListener("click", function (e) {
  e.preventDefault(); // Previene la navegación
  console.log("Click en enlace, pero sin navegar");
  alert("Prevención activada. No navegaremos.");
});

// Ejemplo: prevenir clic derecho en imágenes
document.addEventListener("contextmenu", function (e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
    console.log("Clic derecho en imagen prevenido");
    alert("Clic derecho deshabilitado en imágenes");
  }
});

//------------------------------------------------------//
// 📋 PATRONES COMUNES DE DELEGACIÓN
//------------------------------------------------------//

/*
PATRÓN 1: Verificar por tagName
*/
contenedor.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    // Hacer algo
  }
});

/*
PATRÓN 2: Verificar por clase
*/
contenedor.addEventListener("click", function (e) {
  if (e.target.classList.contains("mi-clase")) {
    // Hacer algo
  }
});

/*
PATRÓN 3: Verificar por data-attribute
*/
contenedor.addEventListener("click", function (e) {
  if (e.target.dataset.accion) {
    console.log("Acción:", e.target.dataset.accion);
  }
});

/*
PATRÓN 4: Usar closest() para buscar ancestro
*/
contenedor.addEventListener("click", function (e) {
  const boton = e.target.closest("button");
  if (boton) {
    console.log("Click en botón o su contenido");
  }
});

/*
PATRÓN 5: Múltiples selectores
*/
contenedor.addEventListener("click", function (e) {
  if (e.target.matches("button, .clickeable, [data-click]")) {
    // Hacer algo
  }
});

//------------------------------------------------------//
// ✅ BUENAS PRÁCTICAS
//------------------------------------------------------//

/*
1. ✅ USA delegación para listas dinámicas
   Razón: Mejor rendimiento, funciona con elementos nuevos

2. ✅ USA e.target para saber QUÉ elemento fue clickeado
   Razón: Esencial en delegación de eventos

3. ✅ USA e.currentTarget cuando necesites el elemento con el listener
   Razón: Siempre apunta al elemento correcto

4. ✅ USA stopPropagation() solo cuando sea necesario
   Razón: Puede causar comportamientos inesperados

5. ⚠️ EVITA stopPropagation() en delegación
   Razón: Puede romper otros listeners delegados

6. ✅ USA closest() para encontrar ancestros
   Razón: Más flexible que verificar solo e.target

7. ✅ USA preventDefault() para formularios personalizados
   Razón: Necesario para validación antes de enviar

8. ✅ USA CustomEvent para comunicación entre componentes
   Razón: Desacopla el código, más mantenible

9. ✅ USA { capture: true } cuando necesites fase de captura
   Razón: Útil para interceptar eventos antes que los hijos

10. ✅ USA { once: true } para eventos que solo se ejecutan una vez
    Razón: Se auto-remueve, más eficiente
*/

//------------------------------------------------------//
// 🎯 RESUMEN
//------------------------------------------------------//

/*
╔═══════════════════════════════════════════════════════════════════╗
║              EVENTOS AVANZADOS EN JAVASCRIPT                      ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║ PROPAGACIÓN:                                                      ║
║   1. CAPTURING: padre → hijo                                      ║
║   2. TARGET: elemento objetivo                                    ║
║   3. BUBBLING: hijo → padre (por defecto)                        ║
║                                                                   ║
║ DIFERENCIAS CLAVE:                                                ║
║   e.target: elemento que recibió el evento                       ║
║   e.currentTarget: elemento con el listener (= this)             ║
║                                                                   ║
║ DETENER PROPAGACIÓN:                                              ║
║   e.stopPropagation(): detiene bubbling                          ║
║   e.stopImmediatePropagation(): detiene TODO                     ║
║                                                                   ║
║ DELEGACIÓN DE EVENTOS:                                            ║
║   • Un listener en el padre para todos los hijos                 ║
║   • Mejor rendimiento                                             ║
║   • Funciona con elementos dinámicos                             ║
║   • Usa e.target para identificar el hijo clickeado             ║
║                                                                   ║
║ EVENTOS PERSONALIZADOS:                                           ║
║   new CustomEvent(nombre, { detail: {...} })                     ║
║   document.dispatchEvent(evento)                                 ║
║                                                                   ║
║ PREVENIR COMPORTAMIENTO:                                          ║
║   e.preventDefault(): previene acción por defecto                ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
*/
