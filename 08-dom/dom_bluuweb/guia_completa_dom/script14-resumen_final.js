// ============================================
// SECCIÓN 25: RESUMEN FINAL E ÍNDICE COMPLETO
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("15 - RESUMEN FINAL - GUÍA COMPLETA DEL DOM (ACTUALIZADA)");
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// MENSAJE DE BIENVENIDA Y CONFIRMACIÓN
// ------------------------------------------

console.log("🎓 GUÍA COMPLETA DEL DOM - JAVASCRIPT");
console.log("=".repeat(80));
console.log("\n✅ Todos los scripts se han ejecutado correctamente");
console.log("✅ Abre la consola (F12) para revisar cada sección");
console.log(
  "✅ Cada línea de código está comentada para facilitar el aprendizaje"
);
console.log("✅ ¡NUEVAS SECCIONES AÑADIDAS! (Scripts 11-14)\n");

// ------------------------------------------
// ÍNDICE COMPLETO DE CONTENIDOS
// ------------------------------------------

console.log("\n" + "=".repeat(80));
console.log("ÍNDICE COMPLETO DE CONTENIDOS");
console.log("=".repeat(80) + "\n");

console.log(`
📚 SCRIPT 1 - PROPIEDADES Y SELECCIÓN
══════════════════════════════════════════════════════════════════════════════

  01. Propiedades Básicas del Documento
      • document.title, domain, URL, location.href
      • document.referrer, characterSet, contentType
      • document.lastModified, compatMode, designMode, cookie

  02. Métodos de Selección Clásicos
      • getElementById() - Selecciona UN elemento por ID
      • getElementsByClassName() - Selecciona VARIOS por clase
      • getElementsByTagName() - Selecciona VARIOS por etiqueta
      • getElementsByName() - Selecciona VARIOS por atributo name

  03. Métodos de Selección Modernos (RECOMENDADOS)
      • querySelector() - Primer elemento (selector CSS)
      • querySelectorAll() - Todos los elementos (selector CSS)

  04. Navegación por el DOM
      • parentElement, parentNode - Padre
      • children, firstElementChild, lastElementChild - Hijos
      • nextElementSibling, previousElementSibling - Hermanos
      • closest() - Ancestro más cercano

  05. Selectores Avanzados
      • Selectores complejos con querySelector
      • :not() para exclusiones
      • filter() + closest() para filtrado

  06. Selectores Especializados
      • Acceso especial a formularios
      • matches() - Verificar si coincide con selector


📚 SCRIPT 2 - CONVERSIONES Y MANIPULACIÓN
══════════════════════════════════════════════════════════════════════════════

  07. Conversiones y Utilidades
      • Array.from() - Convertir colecciones a arrays
      • Spread operator [...collection]
      • Array.prototype.slice.call()

  08. HTMLCollection vs NodeList
      • Diferencias entre colecciones "live" y "static"
      • forEach disponible solo en NodeList

  09. Métodos de Manipulación del DOM
      • createElement() - Crear elementos
      • createTextNode() - Crear nodos de texto
      • appendChild() - Añadir hijo al final
      • replaceChild() - Reemplazar nodo
      • removeChild() - Eliminar nodo
      • createDocumentFragment() - Inserción múltiple eficiente
      • importNode() - Importar nodo
      • adoptNode() - Adoptar nodo externo


📚 SCRIPT 3 - POSICIONES Y MANIPULACIÓN AVANZADA
══════════════════════════════════════════════════════════════════════════════

  10. Acceder a Elementos por Posición
      • Por índice: elementos[0], elementos[1], etc.
      • Con :nth-child() en querySelector
      • Con children: container.children[0]

  11. Crear y Copiar Elementos
      • createElement() - Crear nuevo elemento
      • cloneNode(false) - Copia sin hijos
      • cloneNode(true) - Copia con hijos

  12. Insertar en Posiciones Específicas
      • insertBefore(nuevo, referencia) - Antes de referencia
      • appendChild(elemento) - Al final
      • prepend(elemento) - Al principio
      • append(elemento) - Al final
      • before(elemento) - Antes (hermano)
      • after(elemento) - Después (hermano)


📚 SCRIPT 4 - COPIAR, CORTAR Y FUNCIONES
══════════════════════════════════════════════════════════════════════════════

  13. Copiar y Pegar en Posición Específica
      • COPIAR: cloneNode(true) + insertBefore()
      • Ejemplo paso a paso de copiado

  14. Cortar y Pegar
      • CORTAR: insertBefore() sin clonar (mueve elemento)
      • Diferencia clave: copiar vs cortar

  15. Funciones Reutilizables
      • copiarEnPosicion(origen, destino, posicion)
      • cortarEnPosicion(origen, destino, posicion)

  16. Resumen de Posiciones
      • Tabla completa de métodos de inserción
      • Diferencias entre métodos


📚 SCRIPT 5 - INSPECCIÓN Y ESTADO
══════════════════════════════════════════════════════════════════════════════

  17. Métodos de Posición
      • elementFromPoint(x, y) - Elemento en coordenadas
      • getSelection() - Texto seleccionado

  18. Métodos de Estado
      • hasFocus() - Si documento tiene foco
      • readyState - Estado de carga (loading/interactive/complete)
      • activeElement - Elemento con foco
      • visibilityState - Visibilidad (visible/hidden)
      • hidden - Booleano de visibilidad
      • pointerLockElement - Elemento con puntero bloqueado
      • fullscreenElement - Elemento en pantalla completa


📚 SCRIPT 6 - MÉTODOS DE EVENTOS
══════════════════════════════════════════════════════════════════════════════

  19. Añadir y Eliminar Event Listeners
      • addEventListener(evento, función, opciones)
      • removeEventListener(evento, función)
      • Opciones: { capture, once, passive }

  20. Eventos del Ciclo de Vida
      • DOMContentLoaded - DOM listo
      • load - Todo cargado (imágenes, CSS, etc.)
      • beforeunload - Antes de cerrar
      • unload - Página descargándose

  21. Eventos de Visibilidad
      • visibilitychange - Cambio de pestaña

  22. Eventos de Estado de Carga
      • readystatechange - Cambio en readyState

  23. Objeto Event
      • Propiedades: type, target, currentTarget
      • Coordenadas: clientX/Y, pageX/Y
      • Modificadores: shiftKey, ctrlKey, altKey
      • Métodos: preventDefault(), stopPropagation()


📚 SCRIPT 7 - PROPIEDADES DEL DOM
══════════════════════════════════════════════════════════════════════════════

  24. Nodos Principales
      • document.documentElement - Nodo <html>
      • document.head - Nodo <head>
      • document.body - Nodo <body>

  25. Colecciones de Elementos
      • document.forms - Todos los formularios
      • document.images - Todas las imágenes
      • document.links - Todos los enlaces
      • document.scripts - Todos los scripts
      • document.styleSheets - Hojas de estilo

  26. Navegación entre Nodos
      • document.children - Hijos del documento
      • document.firstElementChild - Primer hijo
      • document.lastElementChild - Último hijo

  27. Trabajar con Colecciones
      • Bucle for tradicional
      • Bucle for...of
      • Conversión a Array con forEach
      • Spread operator


📚 SCRIPT 8 - CLIPBOARD API
══════════════════════════════════════════════════════════════════════════════

  28. Copiar Texto al Portapapeles
      • navigator.clipboard.writeText(texto)
      • Promesas con .then()/.catch()
      • async/await

  29. Leer Texto del Portapapeles
      • navigator.clipboard.readText()

  30. Copiar Contenido Rico (HTML, Imágenes)
      • navigator.clipboard.write([ClipboardItem])
      • Blobs para diferentes tipos de contenido

  31. Leer Contenido Rico
      • navigator.clipboard.read()
      • ClipboardItem.types
      • getType() para obtener contenido

  32. Requisitos y Limitaciones
      • Contexto seguro (HTTPS o localhost)
      • Interacción del usuario requerida
      • Permisos del navegador


📚 SCRIPT 9 - MÉTODOS OBSOLETOS
══════════════════════════════════════════════════════════════════════════════

  33. Métodos Obsoletos (NO USAR)
      • document.write(), writeln() ⚠️
      • document.execCommand() ⚠️
      • document.all ⚠️
      • document.charset ⚠️
      • document.createAttribute() ⚠️
      • document.selection ⚠️
      • document.captureEvents(), releaseEvents() ⚠️
      • document.layers ⚠️

  34. Tabla de Alternativas Modernas
      • Cada método obsoleto con su alternativa actual
      • Razones por las que evitar métodos antiguos


📚 SCRIPT 11 - ATRIBUTOS, CLASES Y ESTILOS (NUEVO) 🆕
══════════════════════════════════════════════════════════════════════════════

  35. Manipulación de Atributos
      • getAttribute(), setAttribute(), hasAttribute()
      • removeAttribute(), getAttributeNames()
      • Propiedades vs Atributos

  36. Atributos DATA-*
      • dataset - Acceso a atributos data-*
      • Conversión de guiones a camelCase
      • Añadir, leer y eliminar data attributes

  37. Manipulación de Clases (classList)
      • classList.add(), remove(), toggle()
      • classList.contains(), replace()
      • className vs classList

  38. Manipulación de Estilos
      • element.style - Estilos inline
      • style.cssText, setProperty(), removeProperty()
      • getComputedStyle() - Estilos calculados
      • Diferencia entre style y getComputedStyle


📚 SCRIPT 12 - DIMENSIONES Y POSICIONAMIENTO (NUEVO) 🆕
══════════════════════════════════════════════════════════════════════════════

  39. getBoundingClientRect()
      • Posición y dimensiones completas
      • Coordenadas relativas al viewport
      • Calcular centro y visibilidad

  40. Propiedades offset*
      • offsetWidth, offsetHeight
      • offsetTop, offsetLeft
      • offsetParent

  41. Propiedades client*
      • clientWidth, clientHeight (sin border)
      • clientTop, clientLeft
      • Dimensiones del viewport

  42. Propiedades scroll*
      • scrollWidth, scrollHeight
      • scrollTop, scrollLeft
      • Detectar disponibilidad de scroll

  43. Métodos de Scroll
      • window.scrollTo(), scrollBy()
      • element.scrollIntoView()
      • Opciones: behavior: 'smooth'
      • Eventos de scroll


📚 SCRIPT 13 - OBSERVADORES (NUEVO) 🆕
══════════════════════════════════════════════════════════════════════════════

  44. MutationObserver
      • Detectar cambios en el DOM
      • Observar atributos, hijos, texto
      • Configuración y callbacks
      • observe(), disconnect()

  45. IntersectionObserver
      • Detectar visibilidad de elementos
      • Lazy loading de imágenes
      • Infinite scroll
      • threshold y rootMargin

  46. ResizeObserver
      • Detectar cambios de tamaño
      • Gráficos responsive
      • Layouts adaptativos
      • Alternativa a window.resize


📚 SCRIPT 14 - CONTENIDO Y MANIPULACIÓN (NUEVO) 🆕
══════════════════════════════════════════════════════════════════════════════

  47. innerHTML
      • Leer/establecer HTML completo
      • Riesgos de seguridad (XSS)
      • Cuándo usarlo y cuándo no

  48. textContent vs innerText
      • textContent - Todo el texto (incluye ocultos)
      • innerText - Solo texto visible
      • Diferencias de rendimiento

  49. outerHTML
      • Incluye el elemento completo
      • Reemplazar elemento entero
      • Diferencia con innerHTML

  50. insertAdjacentHTML/Element/Text
      • 4 posiciones: beforebegin, afterbegin, beforeend, afterend
      • Ventajas sobre innerHTML +=
      • Versiones seguras (insertAdjacentText)

  51. Seguridad y Sanitización
      • Prevención de ataques XSS
      • Métodos seguros vs peligrosos
      • Sanitización de HTML
      • Mejores prácticas de seguridad

`);

// ------------------------------------------
// ESTADÍSTICAS DEL PROYECTO
// ------------------------------------------

console.log("\n" + "=".repeat(80));
console.log("ESTADÍSTICAS DEL PROYECTO");
console.log("=".repeat(80) + "\n");

// Contar elementos en el documento
const stats = {
  totalScripts: document.scripts.length,
  totalForms: document.forms.length,
  totalImages: document.images.length,
  totalLinks: document.links.length,
  totalParagraphs: document.getElementsByTagName("p").length,
  totalDivs: document.getElementsByTagName("div").length,
  totalButtons: document.getElementsByTagName("button").length,
  totalInputs: document.getElementsByTagName("input").length,
};

console.log(`
📊 ELEMENTOS EN EL DOCUMENTO:
══════════════════════════════════════════════════════════════════════════════

  Scripts cargados:      ${stats.totalScripts}
  Formularios:           ${stats.totalForms}
  Imágenes:              ${stats.totalImages}
  Enlaces:               ${stats.totalLinks}
  Párrafos:              ${stats.totalParagraphs}
  Contenedores (divs):   ${stats.totalDivs}
  Botones:               ${stats.totalButtons}
  Inputs:                ${stats.totalInputs}

📈 COBERTURA DE LA GUÍA:

  ✅ 15 Scripts organizados (14 + resumen)
  ✅ 51 Secciones temáticas
  ✅ 4 Nuevas secciones añadidas
  ✅ Comentarios línea por línea
  ✅ Ejemplos prácticos funcionales
  ✅ Mejores prácticas y seguridad
  ✅ Métodos modernos y obsoletos
  ✅ APIs avanzadas (Observers)
  ✅ Prevención de vulnerabilidades
`);

// ------------------------------------------
// MÉTODOS MÁS IMPORTANTES (RESUMEN RÁPIDO)
// ------------------------------------------

console.log("\n" + "=".repeat(80));
console.log("MÉTODOS MÁS IMPORTANTES - RESUMEN RÁPIDO");
console.log("=".repeat(80) + "\n");

console.log(`
🎯 SELECCIÓN DE ELEMENTOS:
──────────────────────────────────────────────────────────────────────────────
  querySelector()        → Primer elemento (CSS selector)
  querySelectorAll()     → Todos los elementos (CSS selector)
  getElementById()       → Un elemento por ID

🔧 MANIPULACIÓN:
──────────────────────────────────────────────────────────────────────────────
  createElement()        → Crear elemento
  cloneNode(true)        → Copiar elemento
  appendChild()          → Añadir al final
  insertBefore()         → Insertar antes de
  remove()               → Eliminar elemento
  insertAdjacentHTML()   → Insertar HTML sin recrear

🎨 NAVEGACIÓN:
──────────────────────────────────────────────────────────────────────────────
  parentElement          → Padre
  children               → Hijos
  nextElementSibling     → Hermano siguiente
  closest()              → Ancestro más cercano

🎭 ATRIBUTOS Y CLASES:
──────────────────────────────────────────────────────────────────────────────
  getAttribute()         → Leer atributo
  setAttribute()         → Establecer atributo
  dataset.nombre         → Acceso a data-*
  classList.add()        → Añadir clase
  classList.toggle()     → Alternar clase

💅 ESTILOS:
──────────────────────────────────────────────────────────────────────────────
  element.style.prop     → Estilo inline
  getComputedStyle()     → Estilos reales calculados

📏 DIMENSIONES:
──────────────────────────────────────────────────────────────────────────────
  getBoundingClientRect() → Posición y tamaño completo
  offsetWidth/Height     → Con border
  clientWidth/Height     → Sin border
  scrollWidth/Height     → Contenido total

📜 SCROLL:
──────────────────────────────────────────────────────────────────────────────
  scrollTo()             → Posición absoluta
  scrollBy()             → Posición relativa
  scrollIntoView()       → Centrar elemento

👁️ OBSERVADORES:
──────────────────────────────────────────────────────────────────────────────
  MutationObserver       → Cambios en DOM
  IntersectionObserver   → Visibilidad
  ResizeObserver         → Cambios de tamaño

📝 CONTENIDO:
──────────────────────────────────────────────────────────────────────────────
  textContent            → Texto seguro
  innerHTML              → HTML (con precaución)
  insertAdjacentHTML()   → Insertar HTML eficiente

📋 EVENTOS:
──────────────────────────────────────────────────────────────────────────────
  addEventListener()     → Añadir evento
  removeEventListener()  → Eliminar evento
  DOMContentLoaded       → DOM listo

📄 PROPIEDADES:
──────────────────────────────────────────────────────────────────────────────
  document.forms         → Todos los formularios
  document.body          → Elemento body
  document.readyState    → Estado de carga

✂️ CLIPBOARD:
──────────────────────────────────────────────────────────────────────────────
  navigator.clipboard.writeText()  → Copiar texto
  navigator.clipboard.readText()   → Leer texto
`);

// ------------------------------------------
// MEJORES PRÁCTICAS CONSOLIDADAS
// ------------------------------------------

console.log("\n" + "=".repeat(80));
console.log("MEJORES PRÁCTICAS - GUÍA DEFINITIVA");
console.log("=".repeat(80) + "\n");

console.log(`
✅ LAS 20 REGLAS DE ORO DEL DOM:

1. SELECCIÓN
   ✓ Preferir querySelector/querySelectorAll
   ✓ Cachear selecciones (no seleccionar repetidamente)
   ✓ Usar selectores específicos y eficientes

2. MANIPULACIÓN
   ✓ Usar insertAdjacentHTML en lugar de innerHTML +=
   ✓ Agrupar cambios en DocumentFragment
   ✓ Minimizar manipulaciones del DOM (son costosas)

3. EVENTOS
   ✓ SIEMPRE usar addEventListener (NO onclick)
   ✓ Guardar referencias para poder removeEventListener
   ✓ Usar delegación de eventos para listas grandes
   ✓ Usar { once: true } para eventos únicos

4. CLASES Y ESTILOS
   ✓ SIEMPRE usar classList (NO className directamente)
   ✓ Preferir clases CSS sobre estilos inline
   ✓ Usar getComputedStyle() para leer estilos reales

5. CONTENIDO
   ✓ Usar textContent para texto de usuarios (seguro)
   ✓ NUNCA innerHTML con datos no sanitizados (XSS)
   ✓ Preferir createElement() + appendChild() cuando sea posible

6. DIMENSIONES Y SCROLL
   ✓ Usar getBoundingClientRect() para posición
   ✓ Usar IntersectionObserver en lugar de scroll events
   ✓ Usar { behavior: 'smooth' } para mejor UX

7. OBSERVADORES
   ✓ SIEMPRE llamar disconnect() cuando no se necesite
   ✓ Ser específico con la configuración
   ✓ Evitar trabajo pesado en callbacks

8. RENDIMIENTO
   ✗ NO acceder a dimensiones en bucles
   ✗ NO combinar lecturas y escrituras del DOM
   ✓ Usar requestAnimationFrame para animaciones
   ✓ Throttle/debounce eventos frecuentes

9. SEGURIDAD
   ✗ NUNCA innerHTML con input de usuarios
   ✗ NUNCA eval() o new Function()
   ✓ Sanitizar HTML si es absolutamente necesario
   ✓ Usar textContent para contenido no confiable

10. COMPATIBILIDAD
    ✓ Verificar soporte de APIs modernas
    ✓ Evitar métodos obsoletos
    ✓ Usar polyfills solo cuando sea necesario

═══════════════════════════════════════════════════════════════════════════════

ORDEN DE PRIORIDAD AL ELEGIR UN MÉTODO:

Para insertar contenido:
  1º createElement() + textContent + appendChild()  [MÁS SEGURO]
  2º insertAdjacentText()                           [SEGURO Y RÁPIDO]
  3º insertAdjacentHTML() con sanitización          [RÁPIDO PERO CUIDADO]
  4º innerHTML con sanitización                     [ÚLTIMO RECURSO]

Para estilos:
  1º Clases CSS                                     [MEJOR SEPARACIÓN]
  2º classList.toggle()                             [DINÁMICO Y LIMPIO]
  3º element.style solo para valores dinámicos      [INLINE CUANDO SEA NECESARIO]

Para eventos:
  1º addEventListener con delegación                [EFICIENTE]
  2º addEventListener individual                    [ESTÁNDAR]
  3º NUNCA onclick, onload, etc.                   [OBSOLETO]

Para detectar visibilidad:
  1º IntersectionObserver                          [MODERNO Y EFICIENTE]
  2º getBoundingClientRect()                       [CUANDO SEA NECESARIO]
  3º NUNCA scroll events + cálculos                [INEFICIENTE]
`);

// ------------------------------------------
// RECURSOS ADICIONALES
// ------------------------------------------

console.log("\n" + "=".repeat(80));
console.log("RECURSOS ADICIONALES");
console.log("=".repeat(80) + "\n");

console.log(`
📚 DOCUMENTACIÓN OFICIAL:
──────────────────────────────────────────────────────────────────────────────
  MDN Web Docs:           https://developer.mozilla.org/es/docs/Web/API/Document
  W3C DOM Standard:       https://www.w3.org/TR/dom/
  WHATWG DOM Standard:    https://dom.spec.whatwg.org/

🎓 TUTORIALES Y GUÍAS:
──────────────────────────────────────────────────────────────────────────────
  MDN JavaScript:         https://developer.mozilla.org/es/docs/Web/JavaScript
  JavaScript.info:        https://javascript.info/
  Can I Use:              https://caniuse.com/ (compatibilidad)

🛠️ HERRAMIENTAS:
──────────────────────────────────────────────────────────────────────────────
  Consola del navegador:  F12 o Ctrl+Shift+I
  Elements tab:           Inspeccionar DOM en vivo
  Console tab:            Ver logs y ejecutar código
  
🔒 SEGURIDAD:
──────────────────────────────────────────────────────────────────────────────
  DOMPurify:              Sanitización de HTML
  OWASP XSS Prevention:   Guía de prevención XSS
  Content Security Policy: Protección adicional
`);

// ------------------------------------------
// MENSAJE FINAL
// ------------------------------------------

console.log("\n" + "=".repeat(80));
console.log("MENSAJE FINAL");
console.log("=".repeat(80) + "\n");

console.log(`
🎉 ¡FELICIDADES!

Has completado la Guía COMPLETA y ACTUALIZADA del DOM en JavaScript.

Esta versión ampliada incluye:
  ✅ 51 secciones temáticas (antes 34)
  ✅ 15 scripts organizados (antes 10)
  ✅ 4 nuevas secciones avanzadas
  ✅ APIs modernas de observación
  ✅ Manipulación segura de contenido
  ✅ Prevención de vulnerabilidades XSS
  ✅ Dimensiones y posicionamiento completo
  ✅ Control total de atributos, clases y estilos

NUEVAS SECCIONES AÑADIDAS:
  🆕 Script 11: Atributos, clases y estilos
  🆕 Script 12: Dimensiones y posicionamiento
  🆕 Script 13: Observadores (Mutation, Intersection, Resize)
  🆕 Script 14: Contenido y manipulación segura

PRÓXIMOS PASOS:

1. Practica con los ejemplos en la consola
2. Modifica el HTML y observa los cambios
3. Experimenta con los Observadores
4. Implementa lazy loading con IntersectionObserver
5. Crea componentes responsive con ResizeObserver
6. Practica manipulación segura de contenido
7. Consulta la documentación oficial para profundizar

RECUERDA:
  • La práctica hace al maestro
  • La seguridad es PRIMERO (evita XSS)
  • Usa métodos modernos (Observers, classList, etc.)
  • Prefiere APIs nativas sobre librerías cuando sea posible
  • El DOM es fundamental en desarrollo web moderno

¡Mucho éxito en tu aprendizaje! 🚀

`);

console.log("=".repeat(80));
console.log("FIN DE LA GUÍA COMPLETA Y ACTUALIZADA DEL DOM");
console.log("=".repeat(80) + "\n\n");
