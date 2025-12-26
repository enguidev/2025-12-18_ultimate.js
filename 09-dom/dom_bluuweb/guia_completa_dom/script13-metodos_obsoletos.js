// ============================================
// SECCIÓN 19: MÉTODOS OBSOLETOS
// ⚠️ Este archivo es solo DEMOSTRATIVO
// NUNCA usar estos métodos en producción
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("09 - MÉTODOS OBSOLETOS (⚠️ NO USAR EN PRODUCCIÓN)");
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// ESCRITURA DIRECTA (OBSOLETO Y PELIGROSO)
// ------------------------------------------

console.log("ESCRITURA DIRECTA (OBSOLETO):\n");

// document.write() - Escribe contenido HTML directamente en el documento
// document.writeln() - Igual pero añade salto de línea

// ⚠️ PROBLEMAS:
// 1. Si se usa DESPUÉS de que la página cargue, BORRA TODO el contenido
// 2. No funciona bien con el flujo moderno de JavaScript
// 3. Bloquea el renderizado de la página
// 4. No se puede deshacer fácilmente

// document.write("<h2>Este contenido fue insertado con document.write</h2>");
// document.writeln("<p>Este párrafo tiene salto de línea automático</p>");

console.log("⚠️ document.write() y writeln():");
console.log("   - Pueden BORRAR todo el DOM si se usan después de la carga");
console.log("   - Bloquean el renderizado");
console.log("   - NO usar en código moderno");
console.log("\n✅ ALTERNATIVA MODERNA:");
console.log("   - createElement() + appendChild()");
console.log("   - innerHTML (con precaución)");
console.log("   - insertAdjacentHTML()");

// ------------------------------------------
// COPIADO DE TEXTO (OBSOLETO)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("COPIADO DE TEXTO (OBSOLETO)");
console.log("=".repeat(60) + "\n");

// document.execCommand("copy") - Método antiguo para copiar texto
// document.execCommand("cut") - Método antiguo para cortar texto
// document.execCommand("paste") - Método antiguo para pegar texto

// ⚠️ PROBLEMAS:
// 1. Obsoleto desde 2021
// 2. No funciona en todos los navegadores modernos
// 3. Sintaxis poco intuitiva
// 4. No soporta contenido rico (solo texto)
// 5. Requiere selección de texto previa

// document.execCommand("copy"); // ⚠️ NO USAR

console.log("⚠️ document.execCommand():");
console.log("   - Obsoleto desde 2021");
console.log("   - No funciona en navegadores modernos");
console.log("   - Sintaxis poco intuitiva");
console.log("\n✅ ALTERNATIVA MODERNA:");
console.log("   - navigator.clipboard.writeText()");
console.log("   - navigator.clipboard.readText()");
console.log("   - navigator.clipboard.write()");

// ------------------------------------------
// SELECCIÓN DE ELEMENTOS (OBSOLETO)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("SELECCIÓN DE ELEMENTOS (OBSOLETO)");
console.log("=".repeat(60) + "\n");

// document.all - Colección NO estándar con TODOS los elementos
// Era específica de Internet Explorer

// ⚠️ PROBLEMAS:
// 1. No es estándar (era solo de IE)
// 2. Devuelve una colección extraña
// 3. No se comporta igual en todos los navegadores
// 4. Considerado obsoleto desde hace décadas

console.log("⚠️ document.all:");
console.log("   Todos los elementos:", document.all);
console.log("   Primer elemento:", document.all[0]);
console.log("   Elemento en posición 5:", document.all[5]);
console.log("   Elemento por id 'titulo':", document.all["titulo"]);

console.log("\n   Problemas:");
console.log("   - No es estándar (específico de IE)");
console.log("   - Colección con comportamiento extraño");
console.log("   - Obsoleto desde hace más de 20 años");
console.log("\n✅ ALTERNATIVA MODERNA:");
console.log("   - getElementsByTagName('*')");
console.log("   - querySelectorAll('*')");
console.log("   - document.body.children (para hijos del body)");

// ------------------------------------------
// CODIFICACIÓN DEL DOCUMENTO (OBSOLETO)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("CODIFICACIÓN DEL DOCUMENTO (OBSOLETO)");
console.log("=".repeat(60) + "\n");

// document.charset - Propiedad obsoleta para obtener/establecer la codificación
// Fue reemplazada por document.characterSet (solo lectura)

console.log("⚠️ document.charset:");
console.log("   Valor:", document.charset);

console.log("\n   Problemas:");
console.log("   - Obsoleto y no estándar");
console.log("   - Comportamiento inconsistente entre navegadores");
console.log("\n✅ ALTERNATIVA MODERNA:");
console.log("   - document.characterSet (solo lectura)");
console.log("   - Valor actual:", document.characterSet);

// ------------------------------------------
// CREACIÓN DE ATRIBUTOS (OBSOLETO)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("CREACIÓN DE ATRIBUTOS (OBSOLETO)");
console.log("=".repeat(60) + "\n");

// document.createAttribute() - Método obsoleto para crear atributos
// Creaba un nodo de atributo que luego se añadía con setAttributeNode()

// ⚠️ PROBLEMAS:
// 1. Sintaxis innecesariamente compleja
// 2. No hay razón para crear nodos de atributo por separado
// 3. Método confuso y poco intuitivo

const atributoObsoleto = document.createAttribute("class");
atributoObsoleto.value = "mi-clase";

console.log("⚠️ document.createAttribute():");
console.log("   Atributo creado:", atributoObsoleto);
console.log("   Nombre:", atributoObsoleto.name);
console.log("   Valor:", atributoObsoleto.value);

console.log("\n   Problemas:");
console.log("   - Sintaxis innecesariamente compleja");
console.log("   - Requiere dos pasos (crear + añadir)");
console.log("   - No hay ventajas sobre setAttribute()");

// Forma obsoleta (NO USAR):
// const elemento = document.createElement("div");
// const attr = document.createAttribute("class");
// attr.value = "mi-clase";
// elemento.setAttributeNode(attr); // ⚠️ Complicado

console.log("\n✅ ALTERNATIVA MODERNA:");
console.log("   - element.setAttribute('class', 'mi-clase')");
console.log("   - element.className = 'mi-clase'");
console.log("   - element.classList.add('mi-clase')");

// ------------------------------------------
// SELECCIÓN DE TEXTO EN IE (OBSOLETO)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("SELECCIÓN DE TEXTO EN IE (OBSOLETO)");
console.log("=".repeat(60) + "\n");

// document.selection - Objeto específico de Internet Explorer
// para trabajar con texto seleccionado

// ⚠️ PROBLEMAS:
// 1. Solo funcionaba en Internet Explorer
// 2. Sintaxis completamente diferente a los estándares
// 3. No compatible con navegadores modernos

console.log("⚠️ document.selection:");
console.log("   Valor:", document.selection);

console.log("\n   Problemas:");
console.log("   - Específico de Internet Explorer (obsoleto)");
console.log("   - No funciona en navegadores modernos");
console.log("   - API completamente no estándar");
console.log("\n✅ ALTERNATIVA MODERNA:");
console.log("   - window.getSelection()");
console.log("   - document.getSelection()");

// Ejemplo moderno:
const seleccionActual = window.getSelection();
console.log("   Selección actual:", seleccionActual.toString());

// ------------------------------------------
// CAPTURA Y LIBERACIÓN DE EVENTOS (MUY OBSOLETO)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("CAPTURA Y LIBERACIÓN DE EVENTOS (MUY OBSOLETO)");
console.log("=".repeat(60) + "\n");

// document.captureEvents() - Método de Netscape Navigator 4
// document.releaseEvents() - Método de Netscape Navigator 4

// ⚠️ PROBLEMAS:
// 1. Solo funcionaba en Netscape Navigator 4 (años 90)
// 2. Nunca fue estándar
// 3. No hace nada en navegadores modernos

// document.captureEvents(Event.CLICK); // ⚠️ No funciona
// document.releaseEvents(Event.CLICK); // ⚠️ No funciona

console.log("⚠️ captureEvents() y releaseEvents():");
console.log("   - Métodos de Netscape Navigator 4 (años 90)");
console.log("   - Nunca fueron estándar");
console.log("   - No hacen nada en navegadores modernos");
console.log("\n✅ ALTERNATIVA MODERNA:");
console.log("   - addEventListener(evento, función, { capture: true })");
console.log("   - El tercer parámetro controla la fase de captura");

// Ejemplo moderno de captura:
document.addEventListener(
  "click",
  () => {
    console.log("   Evento en fase de captura");
  },
  { capture: true }
);

// ------------------------------------------
// CAPAS EN NETSCAPE (MUY OBSOLETO)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("CAPAS EN NETSCAPE (MUY OBSOLETO)");
console.log("=".repeat(60) + "\n");

// document.layers - Colección de capas (solo Netscape 4)
// Las "capas" eran elementos posicionados con <layer> o <ilayer>

// ⚠️ PROBLEMAS:
// 1. Solo Netscape Navigator 4
// 2. Las etiquetas <layer> nunca fueron estándar
// 3. No existe en ningún navegador moderno

console.log("⚠️ document.layers:");
console.log("   Valor:", typeof document.layers);
console.log("\n   Problemas:");
console.log("   - Solo Netscape Navigator 4 (1997)");
console.log("   - Basado en etiquetas no estándar <layer>");
console.log("   - No existe en ningún navegador moderno");
console.log("\n✅ ALTERNATIVA MODERNA:");
console.log("   - CSS position (absolute, fixed, relative)");
console.log("   - z-index para controlar capas");
console.log("   - Elementos <div> con estilos CSS");

// ------------------------------------------
// OTROS MÉTODOS Y PROPIEDADES OBSOLETAS
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("OTROS MÉTODOS OBSOLETOS");
console.log("=".repeat(60) + "\n");

console.log("⚠️ Otros métodos y propiedades obsoletas:\n");

// document.alinkColor, document.linkColor, document.vlinkColor
// Colores de enlaces (obsoleto, usar CSS)
console.log("1. document.alinkColor, linkColor, vlinkColor");
console.log("   - Controlaban colores de enlaces");
console.log("   - Reemplazado por CSS (a:link, a:visited, a:active)");

// document.bgColor, document.fgColor
// Color de fondo y texto (obsoleto, usar CSS)
console.log("\n2. document.bgColor, fgColor");
console.log("   - Controlaban colores del documento");
console.log("   - Reemplazado por CSS (background-color, color)");

// document.getBoxObjectFor()
// Método específico de Firefox antiguo
console.log("\n3. document.getBoxObjectFor()");
console.log("   - Específico de Firefox antiguo");
console.log("   - Reemplazado por getBoundingClientRect()");

// document.width, document.height
// Dimensiones del documento (nunca estándar)
console.log("\n4. document.width, document.height");
console.log("   - Nunca fueron estándar");
console.log("   - Usar document.documentElement.clientWidth/Height");

// ------------------------------------------
// TABLA RESUMEN DE ALTERNATIVAS
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("TABLA RESUMEN - MÉTODO OBSOLETO → ALTERNATIVA MODERNA");
console.log("=".repeat(60) + "\n");

console.log(`
╔════════════════════════════════╦════════════════════════════════════════╗
║ MÉTODO OBSOLETO                ║ ALTERNATIVA MODERNA                    ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.write()               ║ createElement() + appendChild()        ║
║ document.writeln()             ║ innerHTML, insertAdjacentHTML()        ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.execCommand("copy")   ║ navigator.clipboard.writeText()        ║
║ document.execCommand("cut")    ║ navigator.clipboard (API moderna)      ║
║ document.execCommand("paste")  ║ navigator.clipboard.readText()         ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.all                   ║ getElementsByTagName('*')              ║
║ document.all[0]                ║ querySelectorAll('*')                  ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.charset               ║ document.characterSet                  ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.createAttribute()     ║ element.setAttribute()                 ║
║ element.setAttributeNode()     ║ element.classList.add()                ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.selection             ║ window.getSelection()                  ║
║                                ║ document.getSelection()                ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.captureEvents()       ║ addEventListener(evt, fn, {capture})   ║
║ document.releaseEvents()       ║ removeEventListener()                  ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.layers               ║ CSS position + z-index                 ║
║ <layer>, <ilayer>              ║ <div> con estilos CSS                  ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.alinkColor            ║ CSS: a:active { color: ... }           ║
║ document.linkColor             ║ CSS: a:link { color: ... }             ║
║ document.vlinkColor            ║ CSS: a:visited { color: ... }          ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.bgColor               ║ CSS: body { background-color: ... }    ║
║ document.fgColor               ║ CSS: body { color: ... }               ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.getBoxObjectFor()     ║ element.getBoundingClientRect()        ║
╠════════════════════════════════╬════════════════════════════════════════╣
║ document.width                 ║ document.documentElement.clientWidth   ║
║ document.height                ║ document.documentElement.clientHeight  ║
╚════════════════════════════════╩════════════════════════════════════════╝
`);

// ------------------------------------------
// ADVERTENCIA FINAL
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("⚠️ ADVERTENCIA FINAL");
console.log("=".repeat(60) + "\n");

console.log(`
IMPORTANTE:

❌ NUNCA usar los métodos obsoletos mostrados en este archivo
❌ NUNCA usar en entornos de producción
❌ NUNCA usar en proyectos nuevos

✅ Este archivo es SOLO con fines EDUCATIVOS
✅ Para entender qué métodos evitar
✅ Para reconocer código antiguo que debe ser refactorizado

Si encuentras código con estos métodos obsoletos:
  1. Identifica el método obsoleto
  2. Busca la alternativa moderna en la tabla de arriba
  3. Refactoriza el código
  4. Prueba que funcione correctamente
  5. Documenta el cambio

RECUERDA:
  - Los navegadores modernos pueden eliminar soporte de métodos obsoletos
  - El código obsoleto puede tener vulnerabilidades de seguridad
  - Las alternativas modernas son más eficientes y seguras
  - Mantén tu código actualizado con los estándares modernos
`);

console.log("\n" + "=".repeat(80));
console.log("FIN DEL ARCHIVO - MÉTODOS OBSOLETOS");
console.log("=".repeat(80) + "\n");
