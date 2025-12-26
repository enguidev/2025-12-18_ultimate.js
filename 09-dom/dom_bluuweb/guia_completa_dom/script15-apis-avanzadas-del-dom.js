//======================================
// APIS AVANZADAS DEL DOM
// Complemento a la guía principal
//======================================

console.log("\n\n" + "=".repeat(80));
console.log("16 - APIS AVANZADAS DEL DOM");
console.log("=".repeat(80) + "\n");

//======================================
// 1. SHADOW DOM - ENCAPSULACIÓN DE ESTILOS Y ESTRUCTURA
//======================================

console.log("=== 1. SHADOW DOM ===\n");

console.log("¿Qué es Shadow DOM?");
console.log("  - Permite crear un DOM 'oculto' dentro de un elemento");
console.log("  - Los estilos NO afectan al documento principal");
console.log(
  "  - Usado en Web Components y elementos nativos (<video>, <input>)"
);
console.log("  - Encapsulación total de HTML, CSS y JS\n");

// Crear un elemento con Shadow DOM
const miComponente = document.createElement("div");
miComponente.id = "mi-componente";

// attachShadow crea un shadow root (modo 'open' = accesible desde JS)
const shadowRoot = miComponente.attachShadow({ mode: "open" });
// mode: 'closed' = no accesible desde element.shadowRoot

// Añadir contenido al Shadow DOM
shadowRoot.innerHTML = `
  <style>
    /* Estos estilos SOLO afectan al Shadow DOM */
    :host {
      display: block;
      padding: 20px;
      background: #f0f0f0;
      border: 2px solid #333;
      border-radius: 8px;
    }
    
    h3 {
      color: #e91e63;
      margin: 0 0 10px 0;
    }
    
    p {
      color: #333;
      margin: 0;
    }
    
    .button {
      background: #2196f3;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }
  </style>
  
  <h3>Componente con Shadow DOM</h3>
  <p>Este contenido está encapsulado</p>
  <button class="button">Botón del Shadow DOM</button>
`;

// Añadir al documento
document.body.appendChild(miComponente);

console.log("✅ Shadow DOM creado");
console.log("  Element:", miComponente);
console.log("  Shadow Root:", miComponente.shadowRoot);
console.log("  Mode:", miComponente.shadowRoot.mode);

console.log("\n⚡ Propiedades importantes:");
console.log("  element.attachShadow({ mode: 'open'|'closed' })");
console.log("  element.shadowRoot - Acceder al shadow root (si mode='open')");
console.log("  :host - Selector CSS para el elemento host\n");

//======================================
// 2. CUSTOM ELEMENTS - WEB COMPONENTS
//======================================

console.log("\n=== 2. CUSTOM ELEMENTS ===\n");

console.log("¿Qué son Custom Elements?");
console.log("  - Define tus propias etiquetas HTML personalizadas");
console.log("  - Se comportan como elementos nativos");
console.log("  - Lifecycle callbacks (eventos del ciclo de vida)");
console.log("  - Base de los Web Components\n");

// Definir un Custom Element
class MiTarjeta extends HTMLElement {
  // Constructor: se ejecuta al crear el elemento
  constructor() {
    super(); // Siempre llamar a super() primero

    // Crear Shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Crear estructura
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          margin: 10px 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .titulo {
          font-size: 20px;
          font-weight: bold;
          color: #333;
          margin: 0 0 10px 0;
        }
        
        .contenido {
          color: #666;
          line-height: 1.6;
        }
      </style>
      
      <div class="titulo">
        <slot name="titulo">Título por defecto</slot>
      </div>
      <div class="contenido">
        <slot>Contenido por defecto</slot>
      </div>
    `;
  }

  // connectedCallback: cuando el elemento se añade al DOM
  connectedCallback() {
    console.log("  📌 MiTarjeta conectada al DOM");
  }

  // disconnectedCallback: cuando se elimina del DOM
  disconnectedCallback() {
    console.log("  📌 MiTarjeta desconectada del DOM");
  }

  // attributeChangedCallback: cuando cambia un atributo observado
  static get observedAttributes() {
    return ["color"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`  📌 Atributo ${name} cambió: ${oldValue} → ${newValue}`);
    if (name === "color") {
      this.shadowRoot.querySelector(".titulo").style.color = newValue;
    }
  }

  // adoptedCallback: cuando se mueve a otro documento
  adoptedCallback() {
    console.log("  📌 MiTarjeta adoptada por otro documento");
  }
}

// Registrar el Custom Element
customElements.define("mi-tarjeta", MiTarjeta);

console.log("✅ Custom Element 'mi-tarjeta' registrado");

// Crear el elemento con código
const tarjeta = document.createElement("mi-tarjeta");
tarjeta.setAttribute("color", "#4CAF50");
tarjeta.innerHTML = `
  <span slot="titulo">Tarjeta Personalizada</span>
  <p>Este es un Web Component creado con Custom Elements y Shadow DOM.</p>
`;
document.body.appendChild(tarjeta);

console.log("\n⚡ Lifecycle Callbacks:");
console.log("  constructor() - Al crear el elemento");
console.log("  connectedCallback() - Al añadir al DOM");
console.log("  disconnectedCallback() - Al eliminar del DOM");
console.log("  attributeChangedCallback() - Al cambiar atributo observado");
console.log("  adoptedCallback() - Al mover a otro documento\n");

//======================================
// 3. TEMPLATE Y SLOTS
//======================================

console.log("\n=== 3. TEMPLATE Y SLOTS ===\n");

console.log("¿Qué es <template>?");
console.log("  - Define HTML que NO se renderiza inmediatamente");
console.log("  - Se puede clonar y usar múltiples veces");
console.log("  - Perfecto para plantillas reutilizables\n");

// Crear un template
const template = document.createElement("template");
template.id = "plantilla-producto";
template.innerHTML = `
  <style>
    .producto {
      border: 2px solid #4CAF50;
      border-radius: 8px;
      padding: 15px;
      margin: 10px 0;
      background: #f1f8e9;
    }
    
    .nombre {
      font-size: 18px;
      font-weight: bold;
      color: #2e7d32;
    }
    
    .precio {
      font-size: 24px;
      color: #1b5e20;
      margin: 10px 0;
    }
    
    .descripcion {
      color: #558b2f;
    }
  </style>
  
  <div class="producto">
    <div class="nombre">
      <slot name="nombre">Nombre del producto</slot>
    </div>
    <div class="precio">
      <slot name="precio">$0.00</slot>
    </div>
    <div class="descripcion">
      <slot name="descripcion">Sin descripción</slot>
    </div>
  </div>
`;

document.body.appendChild(template);

console.log("✅ Template creado");
console.log("  ID:", template.id);
console.log("  Content:", template.content);

// Usar el template
function crearProducto(nombre, precio, descripcion) {
  const clone = template.content.cloneNode(true);

  // Modificar el contenido clonado
  clone.querySelector('[slot="nombre"]').textContent = nombre;
  clone.querySelector('[slot="precio"]').textContent = `$${precio}`;
  clone.querySelector('[slot="descripcion"]').textContent = descripcion;

  return clone;
}

// Crear varios productos desde el template
const producto1 = crearProducto("Laptop", "999.99", "Portátil de alta gama");
document.body.appendChild(producto1);

console.log("\n⚡ Ventajas de <template>:");
console.log("  ✓ No se renderiza hasta que se clona");
console.log("  ✓ Reutilizable");
console.log("  ✓ Mejor rendimiento que innerHTML");
console.log("  ✓ Mantiene eventos y referencias\n");

//======================================
// 4. RANGE API - SELECCIÓN Y MANIPULACIÓN DE TEXTO
//======================================

console.log("\n=== 4. RANGE API ===\n");

console.log("¿Qué es Range?");
console.log("  - Representa un fragmento del documento");
console.log("  - Permite seleccionar y manipular texto/nodos");
console.log("  - Más preciso que trabajar con innerHTML\n");

// Crear un párrafo de ejemplo
const parrafoRange = document.createElement("p");
parrafoRange.id = "parrafo-range";
parrafoRange.textContent =
  "Este es un texto de ejemplo para demostrar Range API.";
document.body.appendChild(parrafoRange);

// Crear un Range
const range = document.createRange();

// Seleccionar desde el carácter 8 hasta el 20
const textNode = parrafoRange.firstChild;
range.setStart(textNode, 8);
range.setEnd(textNode, 20);

console.log("✅ Range creado");
console.log("  Texto seleccionado:", range.toString());
console.log("  Start container:", range.startContainer);
console.log("  Start offset:", range.startOffset);
console.log("  End offset:", range.endOffset);

// Extraer el contenido del range
const fragment = range.extractContents();
console.log("  Contenido extraído:", fragment);

// Insertar nuevo contenido en el range
const nuevoTexto = document.createTextNode("*** REEMPLAZADO ***");
range.insertNode(nuevoTexto);

console.log("\n⚡ Métodos principales de Range:");
console.log("  createRange() - Crear un nuevo range");
console.log("  setStart(node, offset) - Establecer inicio");
console.log("  setEnd(node, offset) - Establecer fin");
console.log("  selectNode(node) - Seleccionar nodo completo");
console.log("  selectNodeContents(node) - Seleccionar contenido del nodo");
console.log("  extractContents() - Extraer y eliminar contenido");
console.log("  cloneContents() - Clonar contenido sin eliminar");
console.log("  insertNode(node) - Insertar nodo en el range");
console.log("  deleteContents() - Eliminar contenido del range\n");

//======================================
// 5. SELECTION API - SELECCIÓN DEL USUARIO
//======================================

console.log("\n=== 5. SELECTION API ===\n");

console.log("¿Qué es Selection?");
console.log("  - Representa el texto seleccionado por el usuario");
console.log("  - Permite modificar la selección programáticamente");
console.log("  - Trabaja con objetos Range\n");

// Obtener la selección actual
const selection = window.getSelection();

console.log("✅ Selection actual:");
console.log("  Texto seleccionado:", selection.toString());
console.log("  Número de ranges:", selection.rangeCount);
console.log("  Anchor node:", selection.anchorNode);
console.log("  Focus node:", selection.focusNode);
console.log("  ¿Está colapsada?:", selection.isCollapsed);

// Función para seleccionar un elemento completo
function seleccionarElemento(elemento) {
  const range = document.createRange();
  range.selectNodeContents(elemento);

  const selection = window.getSelection();
  selection.removeAllRanges(); // Limpiar selecciones previas
  selection.addRange(range); // Añadir nuevo range

  console.log("  ✅ Elemento seleccionado:", elemento.id);
}

// Ejemplo de uso (comentado para no interferir)
// seleccionarElemento(parrafoRange);

console.log("\n⚡ Métodos principales de Selection:");
console.log("  getSelection() - Obtener selección actual");
console.log("  addRange(range) - Añadir un range a la selección");
console.log("  removeRange(range) - Eliminar un range");
console.log("  removeAllRanges() - Limpiar toda la selección");
console.log("  collapse(node, offset) - Colapsar a un punto");
console.log("  selectAllChildren(node) - Seleccionar todos los hijos");
console.log("  toString() - Obtener texto seleccionado\n");

//======================================
// 6. FULLSCREEN API - PANTALLA COMPLETA
//======================================

console.log("\n=== 6. FULLSCREEN API ===\n");

console.log("¿Qué es Fullscreen API?");
console.log("  - Permite mostrar elementos en pantalla completa");
console.log("  - Útil para videos, juegos, presentaciones");
console.log("  - Requiere interacción del usuario (clic)\n");

// Crear un botón para demostrar fullscreen
const btnFullscreen = document.createElement("button");
btnFullscreen.textContent = "🖥️ Probar Fullscreen";
btnFullscreen.className = "btn";
btnFullscreen.style.margin = "20px 0";

btnFullscreen.addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) {
      // Entrar en fullscreen
      await document.documentElement.requestFullscreen();
      btnFullscreen.textContent = "❌ Salir de Fullscreen";
      console.log("  ✅ Modo fullscreen activado");
    } else {
      // Salir de fullscreen
      await document.exitFullscreen();
      btnFullscreen.textContent = "🖥️ Probar Fullscreen";
      console.log("  ✅ Modo fullscreen desactivado");
    }
  } catch (error) {
    console.error("  ❌ Error con fullscreen:", error);
  }
});

document.body.appendChild(btnFullscreen);

// Detectar cambios en fullscreen
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    console.log("  📺 Elemento en fullscreen:", document.fullscreenElement);
  } else {
    console.log("  📺 Salió del modo fullscreen");
  }
});

console.log("✅ Botón de fullscreen creado");

console.log("\n⚡ Métodos y propiedades:");
console.log("  element.requestFullscreen() - Entrar en fullscreen");
console.log("  document.exitFullscreen() - Salir de fullscreen");
console.log("  document.fullscreenElement - Elemento actual en fullscreen");
console.log("  document.fullscreenEnabled - Si fullscreen está disponible");
console.log("\n  Eventos:");
console.log("  fullscreenchange - Cuando cambia el estado");
console.log("  fullscreenerror - Si hay un error\n");

//======================================
// 7. POINTER LOCK API - BLOQUEO DEL CURSOR
//======================================

console.log("\n=== 7. POINTER LOCK API ===\n");

console.log("¿Qué es Pointer Lock?");
console.log("  - Oculta el cursor y captura sus movimientos");
console.log("  - Usado principalmente en juegos (FPS)");
console.log("  - Permite control total del cursor");
console.log("  - Requiere interacción del usuario\n");

// Crear un área de demostración
const areaPointerLock = document.createElement("div");
areaPointerLock.id = "pointer-lock-demo";
areaPointerLock.innerHTML = `
  <style>
    #pointer-lock-demo {
      width: 400px;
      height: 200px;
      background: #333;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      cursor: pointer;
      margin: 20px 0;
      font-size: 18px;
    }
  </style>
  <span>Haz clic para activar Pointer Lock</span>
`;

areaPointerLock.addEventListener("click", async () => {
  try {
    await areaPointerLock.requestPointerLock();
    console.log("  ✅ Pointer Lock activado");
    console.log("  Presiona ESC para salir");
  } catch (error) {
    console.error("  ❌ Error con Pointer Lock:", error);
  }
});

// Detectar movimientos del cursor
document.addEventListener("mousemove", (e) => {
  if (document.pointerLockElement === areaPointerLock) {
    // movementX/Y son los cambios relativos del cursor
    console.log(`  🖱️ Movimiento: X=${e.movementX}, Y=${e.movementY}`);
  }
});

// Detectar cambios en pointer lock
document.addEventListener("pointerlockchange", () => {
  if (document.pointerLockElement) {
    console.log("  🔒 Pointer Lock activo en:", document.pointerLockElement.id);
    areaPointerLock.querySelector("span").textContent =
      "Pointer Lock activo - Presiona ESC";
  } else {
    console.log("  🔓 Pointer Lock desactivado");
    areaPointerLock.querySelector("span").textContent =
      "Haz clic para activar Pointer Lock";
  }
});

document.body.appendChild(areaPointerLock);

console.log("✅ Área de Pointer Lock creada");

console.log("\n⚡ Métodos y propiedades:");
console.log("  element.requestPointerLock() - Activar pointer lock");
console.log("  document.exitPointerLock() - Desactivar pointer lock");
console.log("  document.pointerLockElement - Elemento con lock activo");
console.log("  event.movementX/Y - Movimiento relativo del cursor");
console.log("\n  Eventos:");
console.log("  pointerlockchange - Cuando cambia el estado");
console.log("  pointerlockerror - Si hay un error\n");

//======================================
// 8. CONSTRAINT VALIDATION API - VALIDACIÓN DE FORMULARIOS
//======================================

console.log("\n=== 8. CONSTRAINT VALIDATION API ===\n");

console.log("¿Qué es Constraint Validation?");
console.log("  - Validación nativa de formularios HTML5");
console.log("  - Mensajes de error personalizados");
console.log("  - Alternativa a validación manual con JavaScript\n");

// Crear un formulario de ejemplo
const formValidation = document.createElement("form");
formValidation.id = "form-validation";
formValidation.style.background = "white";
formValidation.style.padding = "20px";
formValidation.style.borderRadius = "8px";
formValidation.style.margin = "20px 0";

formValidation.innerHTML = `
  <h3 style="margin-top: 0;">Formulario con Validación</h3>
  
  <div style="margin: 10px 0;">
    <label>Email (requerido):</label><br>
    <input type="email" id="email-val" required 
           style="width: 100%; padding: 8px; margin-top: 5px;">
    <span id="email-error" style="color: red; font-size: 12px;"></span>
  </div>
  
  <div style="margin: 10px 0;">
    <label>Edad (18-99):</label><br>
    <input type="number" id="edad-val" min="18" max="99" required
           style="width: 100%; padding: 8px; margin-top: 5px;">
    <span id="edad-error" style="color: red; font-size: 12px;"></span>
  </div>
  
  <div style="margin: 10px 0;">
    <label>Contraseña (mínimo 8 caracteres):</label><br>
    <input type="password" id="password-val" minlength="8" required
           style="width: 100%; padding: 8px; margin-top: 5px;">
    <span id="password-error" style="color: red; font-size: 12px;"></span>
  </div>
  
  <button type="submit" class="btn">Validar Formulario</button>
`;

document.body.appendChild(formValidation);

// Validar inputs en tiempo real
const emailInput = formValidation.querySelector("#email-val");
const edadInput = formValidation.querySelector("#edad-val");
const passwordInput = formValidation.querySelector("#password-val");

function validarInput(input, errorSpan) {
  const validity = input.validity;

  console.log(`\n  🔍 Validando ${input.id}:`);
  console.log("    validity.valid:", validity.valid);
  console.log("    validity.valueMissing:", validity.valueMissing);
  console.log("    validity.typeMismatch:", validity.typeMismatch);
  console.log("    validity.tooShort:", validity.tooShort);
  console.log("    validity.tooLong:", validity.tooLong);
  console.log("    validity.rangeUnderflow:", validity.rangeUnderflow);
  console.log("    validity.rangeOverflow:", validity.rangeOverflow);
  console.log("    validationMessage:", input.validationMessage);

  if (!validity.valid) {
    errorSpan.textContent = input.validationMessage;
    return false;
  } else {
    errorSpan.textContent = "";
    return true;
  }
}

emailInput.addEventListener("blur", () => {
  validarInput(emailInput, formValidation.querySelector("#email-error"));
});

edadInput.addEventListener("blur", () => {
  validarInput(edadInput, formValidation.querySelector("#edad-error"));
});

passwordInput.addEventListener("blur", () => {
  validarInput(passwordInput, formValidation.querySelector("#password-error"));
});

// Validar al enviar
formValidation.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("\n  📋 Validando formulario completo...");

  const emailValid = validarInput(
    emailInput,
    formValidation.querySelector("#email-error")
  );
  const edadValid = validarInput(
    edadInput,
    formValidation.querySelector("#edad-error")
  );
  const passwordValid = validarInput(
    passwordInput,
    formValidation.querySelector("#password-error")
  );

  if (emailValid && edadValid && passwordValid) {
    console.log("  ✅ Formulario válido - Se puede enviar");
    alert("✅ Formulario válido");
  } else {
    console.log("  ❌ Formulario inválido - Hay errores");
  }
});

// Ejemplo de validación personalizada
emailInput.addEventListener("input", () => {
  if (emailInput.value.includes("test@")) {
    emailInput.setCustomValidity("No se permiten emails de prueba");
  } else {
    emailInput.setCustomValidity(""); // Limpiar error personalizado
  }
});

console.log("✅ Formulario de validación creado");

console.log("\n⚡ Propiedades de ValidityState:");
console.log("  valid - Si el input es válido");
console.log("  valueMissing - Campo requerido vacío");
console.log("  typeMismatch - Tipo incorrecto (email, url, etc.)");
console.log("  tooShort - Menor que minlength");
console.log("  tooLong - Mayor que maxlength");
console.log("  rangeUnderflow - Menor que min");
console.log("  rangeOverflow - Mayor que max");
console.log("  patternMismatch - No coincide con pattern");
console.log("  stepMismatch - No coincide con step");

console.log("\n⚡ Métodos de validación:");
console.log("  checkValidity() - Verifica si es válido (no muestra errores)");
console.log("  reportValidity() - Verifica y muestra mensajes nativos");
console.log("  setCustomValidity(mensaje) - Establecer error personalizado\n");

//======================================
// 9. FOCUS MANAGEMENT - GESTIÓN DEL FOCO
//======================================

console.log("\n=== 9. FOCUS MANAGEMENT ===\n");

console.log("¿Qué es Focus Management?");
console.log("  - Control del foco del teclado");
console.log("  - Importante para accesibilidad");
console.log("  - Navegación con teclado (Tab)\n");

// Crear elementos para demostrar foco
const focusDemo = document.createElement("div");
focusDemo.style.background = "white";
focusDemo.style.padding = "20px";
focusDemo.style.borderRadius = "8px";
focusDemo.style.margin = "20px 0";

focusDemo.innerHTML = `
  <h3 style="margin-top: 0;">Gestión del Foco</h3>
  <button id="btn1" class="btn">Botón 1</button>
  <button id="btn2" class="btn">Botón 2</button>
  <button id="btn3" class="btn">Botón 3</button>
  <input type="text" id="input-focus" placeholder="Input de texto" style="margin-left: 10px; padding: 8px;">
  <br><br>
  <button id="btn-focus-1" class="btn">Enfocar Botón 1</button>
  <button id="btn-focus-input" class="btn">Enfocar Input</button>
  <button id="btn-blur-all" class="btn">Desenfocar Todo</button>
`;

document.body.appendChild(focusDemo);

// Detectar cambios de foco
const btn1 = focusDemo.querySelector("#btn1");
const btn2 = focusDemo.querySelector("#btn2");
const btn3 = focusDemo.querySelector("#btn3");
const inputFocus = focusDemo.querySelector("#input-focus");

[btn1, btn2, btn3, inputFocus].forEach((el) => {
  el.addEventListener("focus", (e) => {
    console.log(`  👁️ Foco en: ${e.target.id || e.target.textContent}`);
    e.target.style.outline = "3px solid #2196F3";
  });

  el.addEventListener("blur", (e) => {
    console.log(`  🔍 Perdió foco: ${e.target.id || e.target.textContent}`);
    e.target.style.outline = "";
  });
});

// Botones de control
focusDemo.querySelector("#btn-focus-1").addEventListener("click", () => {
  btn1.focus();
  console.log("  ✅ Foco establecido en Botón 1");
});

focusDemo.querySelector("#btn-focus-input").addEventListener("click", () => {
  inputFocus.focus();
  console.log("  ✅ Foco establecido en Input");
});

focusDemo.querySelector("#btn-blur-all").addEventListener("click", () => {
  document.activeElement.blur();
  console.log("  ✅ Todos los elementos desenfocados");
  console.log("  activeElement ahora es:", document.activeElement);
});

console.log("✅ Demo de Focus Management creada");

console.log("\n⚡ Métodos y propiedades:");
console.log("  element.focus() - Establecer foco");
console.log("  element.blur() - Quitar foco");
console.log("  document.activeElement - Elemento con foco actual");
console.log("  document.hasFocus() - Si documento tiene foco");
console.log("  element.tabIndex - Orden de tabulación");

console.log("\n  Eventos:");
console.log("  focus - Cuando recibe foco");
console.log("  blur - Cuando pierde foco");
console.log("  focusin - Se propaga (bubbling)");
console.log("  focusout - Se propaga (bubbling)\n");

//======================================
// RESUMEN Y COMPARACIÓN
//======================================

console.log("\n" + "=".repeat(80));
console.log("RESUMEN - APIS AVANZADAS");
console.log("=".repeat(80) + "\n");

console.log(`
╔════════════════════════════╦═══════════════════════════════════════════════╗
║ API                        ║ CUÁNDO USAR                                   ║
╠════════════════════════════╬═══════════════════════════════════════════════╣
║ Shadow DOM                 ║ Web Components, encapsular estilos            ║
║                            ║ Componentes reutilizables aislados           ║
╠════════════════════════════╬═══════════════════════════════════════════════╣
║ Custom Elements            ║ Crear etiquetas HTML personalizadas          ║
║                            ║ Bibliotecas de componentes                   ║
╠════════════════════════════╬═══════════════════════════════════════════════╣
║ Template & Slots           ║ Plantillas reutilizables                     ║
║                            ║ Contenido dinámico estructurado              ║
╠════════════════════════════╬════════════════════════════════════╣
║ Range API                  ║ Manipulación precisa de texto                ║
║                            ║ Editores de texto, resaltado de sintaxis    ║
╠════════════════════════════╬═══════════════════════════════════════════════╣
║ Selection API              ║ Trabajar con selecciones del usuario         ║
║                            ║ Copiar/pegar personalizado, editores        ║
╠════════════════════════════╬═══════════════════════════════════════════════╣
║ Fullscreen API             ║ Videos, juegos, presentaciones               ║
║                            ║ Experiencias inmersivas                      ║
╠════════════════════════════╬═══════════════════════════════════════════════╣
║ Pointer Lock API           ║ Juegos FPS, aplicaciones 3D                  ║
║                            ║ Control total del cursor                     ║
╠════════════════════════════╬═══════════════════════════════════════════════╣
║ Constraint Validation      ║ Validación nativa de formularios             ║
║                            ║ Mensajes de error personalizados            ║
╠════════════════════════════╬═══════════════════════════════════════════════╣
║ Focus Management           ║ Accesibilidad, navegación por teclado        ║
║                            ║ Mejorar UX con control del foco              ║
╚════════════════════════════╩═══════════════════════════════════════════════╝

COMPATIBILIDAD:
  ✅ Shadow DOM, Custom Elements, Template: Todos los navegadores modernos
  ✅ Range, Selection: Soporte universal (incluye IE)
  ✅ Fullscreen: Safari requiere prefijo -webkit-
  ✅ Pointer Lock: No disponible en dispositivos móviles
  ✅ Constraint Validation: HTML5+ (IE 10+)
  ✅ Focus Management: Soporte universal

CASOS DE USO COMUNES:

1. BIBLIOTECAS DE COMPONENTES
   → Shadow DOM + Custom Elements + Template
   Ejemplo: Crear un sistema de componentes UI reutilizables

2. EDITORES DE TEXTO
   → Range + Selection API
   Ejemplo: Resaltado de sintaxis, autocompletado

3. APLICACIONES MULTIMEDIA
   → Fullscreen API
   Ejemplo: Reproductores de video, galerías de imágenes

4. JUEGOS WEB
   → Pointer Lock + Fullscreen
   Ejemplo: Juegos FPS, simuladores 3D

5. FORMULARIOS AVANZADOS
   → Constraint Validation + Focus Management
   Ejemplo: Formularios multi-paso con validación completa

6. ACCESIBILIDAD
   → Focus Management + ARIA
   Ejemplo: Navegación por teclado completa

MEJORES PRÁCTICAS:

✓ Shadow DOM:
  - Usar mode: 'open' por defecto
  - Documentar slots disponibles
  - Evitar ::part() excesivo

✓ Custom Elements:
  - Siempre extender HTMLElement
  - Implementar lifecycle callbacks
  - Validar atributos en attributeChangedCallback

✓ Template:
  - Reutilizar plantillas complejas
  - Combinar con cloneNode(true)
  - Usar junto a Web Components

✓ Range/Selection:
  - Validar existencia de selección
  - Limpiar ranges después de usar
  - Considerar compatibilidad con IE

✓ Fullscreen:
  - Siempre dentro de evento de usuario
  - Proporcionar manera de salir (ESC)
  - Manejar errores con try/catch

✓ Pointer Lock:
  - Solo para juegos/3D
  - Informar al usuario cómo salir
  - No bloquear permanentemente

✓ Constraint Validation:
  - Usar HTML5 validators primero
  - Personalizar con setCustomValidity()
  - Dar feedback visual inmediato

✓ Focus Management:
  - Orden lógico con tabindex
  - Indicadores visuales de foco
  - Evitar focus traps accidentales

RECURSOS ADICIONALES:

📚 MDN Web Docs:
  - Shadow DOM: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM
  - Custom Elements: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
  - Range: https://developer.mozilla.org/en-US/docs/Web/API/Range
  - Selection: https://developer.mozilla.org/en-US/docs/Web/API/Selection
  - Fullscreen: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
  - Pointer Lock: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
  - Constraint Validation: https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation

🎯 Web Components:
  - https://www.webcomponents.org/
  - https://developers.google.com/web/fundamentals/web-components

🔍 Can I Use (compatibilidad):
  - https://caniuse.com/

NOTAS FINALES:

⚠️ IMPORTANTE:
  - Estas APIs son AVANZADAS y no necesarias para todos los proyectos
  - Usar solo cuando aporten valor real
  - Considerar alternativas más simples primero
  - Documentar bien su uso en el código

✅ CUÁNDO USAR:
  - Necesitas encapsulación real → Shadow DOM
  - Quieres componentes reutilizables → Custom Elements
  - Manipulación compleja de texto → Range/Selection
  - Experiencia inmersiva → Fullscreen/Pointer Lock
  - Formularios complejos → Constraint Validation
  - Accesibilidad → Focus Management

❌ CUÁNDO NO USAR:
  - Proyecto simple que no lo requiere
  - No hay soporte en navegadores objetivo
  - Existe alternativa más simple y mantenible
  - Equipo no familiarizado con la tecnología
`);

console.log("\n" + "=".repeat(80));
console.log("✅ GUÍA DE APIS AVANZADAS DEL DOM COMPLETADA");
console.log("=".repeat(80) + "\n");
