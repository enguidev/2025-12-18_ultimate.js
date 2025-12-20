// ============================================
// SECCIÓN 17: PROPIEDADES DEL DOM
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("07 - PROPIEDADES DEL DOM");
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// NODOS PRINCIPALES DEL DOCUMENTO
// ------------------------------------------

console.log("NODOS PRINCIPALES:\n");

// documentElement - Devuelve el elemento raíz <html>
// Es el elemento más alto en la jerarquía del DOM
console.log("Nodo <html>:", document.documentElement);
// Útil para: Aplicar estilos/clases al elemento raíz, obtener dimensiones completas

// head - Devuelve el elemento <head>
// Contiene metadatos, título, enlaces a CSS, scripts, etc.
console.log("Nodo <head>:", document.head);
// Útil para: Añadir dinámicamente <meta>, <link>, <script>, etc.

// body - Devuelve el elemento <body>
// Contiene todo el contenido visible de la página
console.log("Nodo <body>:", document.body);
// Útil para: Añadir elementos al contenido visible, aplicar clases globales

// NOTA: document.documentElement es <html>
//       document.body es <body> (hijo de <html>)
//       document.head es <head> (hermano de <body>)

// ------------------------------------------
// COLECCIONES DE ELEMENTOS ESPECÍFICOS
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("COLECCIONES DE ELEMENTOS");
console.log("=".repeat(60) + "\n");

// forms - HTMLCollection con TODOS los formularios del documento
// Equivalente a: document.getElementsByTagName("form")
console.log("Todos los formularios:", document.forms);
// Acceso por índice: document.forms[0]
// Acceso por name/id: document.forms.miFormulario
// Útil para: Validación de formularios, obtener datos de múltiples forms

// images - HTMLCollection con TODAS las imágenes (<img>)
// Equivalente a: document.getElementsByTagName("img")
console.log("Todas las imágenes:", document.images);
// Acceso por índice: document.images[0]
// Útil para: Lazy loading, precargar imágenes, manipular todas las imágenes

// links - HTMLCollection con TODOS los enlaces con atributo href
// Incluye <a> y <area> con href
console.log("Todos los enlaces:", document.links);
// NO incluye <a> sin href (como anclas para navegación interna sin #)
// Útil para: Modificar enlaces, añadir eventos a todos los enlaces

// scripts - HTMLCollection con TODOS los elementos <script>
// Incluye tanto scripts inline como externos
console.log("Todos los scripts:", document.scripts);
// Acceso por índice: document.scripts[0]
// Útil para: Analizar qué scripts están cargados, debugging

// styleSheets - StyleSheetList con TODAS las hojas de estilo
// Incluye <link rel="stylesheet"> y <style>
console.log("Hojas de estilos:", document.styleSheets);
// Acceso por índice: document.styleSheets[0]
// Útil para: Manipular CSS dinámicamente, deshabilitar hojas de estilo

// embeds - HTMLCollection con TODOS los elementos <embed>
console.log("Todos los embeds:", document.embeds);
// Útil para: Manipular contenido incrustado (PDFs, multimedia)

// plugins - Alias de document.embeds (mismo contenido)
console.log("Todos los plugins:", document.plugins);
// Nota: document.plugins es lo mismo que document.embeds

// anchors - HTMLCollection con TODOS los <a> que tienen atributo name
// ⚠️ OBSOLETO: Usar id en lugar de name en elementos <a>
console.log("Todos los anchors (obsoleto):", document.anchors);

// applets - HTMLCollection con TODOS los <applet>
// ⚠️ OBSOLETO: Los applets de Java ya no se usan
console.log("Todos los applets (obsoleto):", document.applets);

// ------------------------------------------
// PROPIEDADES DE NAVEGACIÓN ENTRE NODOS
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("PROPIEDADES DE NAVEGACIÓN");
console.log("=".repeat(60) + "\n");

// children - HTMLCollection con los hijos DIRECTOS del documento
// En el caso de document, devuelve solo [<html>]
console.log("Hijos del documento:", document.children);
// document.children[0] es siempre <html>

// firstElementChild - Primer hijo elemento del documento
// Siempre será <html>
console.log("Primer hijo:", document.firstElementChild);

// lastElementChild - Último hijo elemento del documento
// Siempre será <html> (porque es el único hijo)
console.log("Último hijo:", document.lastElementChild);

// childElementCount - Número de hijos elementos
// Para document, siempre será 1 (<html>)
console.log("Número de hijos:", document.childElementCount);

// ------------------------------------------
// TRABAJAR CON COLECCIONES
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("TRABAJAR CON COLECCIONES");
console.log("=".repeat(60) + "\n");

// Las colecciones (HTMLCollection) se pueden recorrer de varias formas

// FORMA 1: Bucle for tradicional
console.log("Forma 1 - Bucle for:");
for (let i = 0; i < document.forms.length; i++) {
  console.log("  Formulario", i + ":", document.forms[i]);
}

// FORMA 2: Bucle for...of (más moderno)
console.log("\nForma 2 - Bucle for...of:");
for (const form of document.forms) {
  console.log("  Formulario:", form);
}

// FORMA 3: Convertir a Array y usar forEach
console.log("\nForma 3 - Array.from + forEach:");
Array.from(document.images).forEach((img, index) => {
  console.log(`  Imagen ${index}:`, img.src);
});

// FORMA 4: Spread operator + métodos de array
console.log("\nForma 4 - Spread operator:");
const todosLosLinks = [...document.links];
console.log("  Total de enlaces:", todosLosLinks.length);

// ------------------------------------------
// ACCESO POR NAME O ID
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("ACCESO POR NAME O ID");
console.log("=".repeat(60) + "\n");

// Algunas colecciones permiten acceso por name o id

// Acceso a formulario por id
console.log("Formulario por id 'miFormulario':", document.forms.miFormulario);
console.log(
  "Formulario por name 'miFormulario':",
  document.forms["miFormulario"]
);

// También funciona con notación de corchetes
console.log("Formulario con []:", document.forms[0]);

// Acceso a imágenes por name o id (si existen)
// document.images.miImagen (si hay un <img id="miImagen"> o name="miImagen">)

// ------------------------------------------
// PROPIEDADES ÚTILES DE COLECCIONES
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("PROPIEDADES ÚTILES");
console.log("=".repeat(60) + "\n");

// length - Número de elementos en la colección
console.log("Total de formularios:", document.forms.length);
console.log("Total de imágenes:", document.images.length);
console.log("Total de enlaces:", document.links.length);
console.log("Total de scripts:", document.scripts.length);

// item(index) - Obtener elemento por índice (alternativa a [])
console.log("\nPrimer formulario con item():", document.forms.item(0));
console.log("Primer formulario con []:", document.forms[0]);
// Ambas formas son equivalentes, [] es más común

// namedItem(name) - Obtener elemento por name o id
console.log(
  "\nFormulario con namedItem():",
  document.forms.namedItem("miFormulario")
);
// Equivalente a: document.forms.miFormulario o document.forms['miFormulario']

// ------------------------------------------
// DIFERENCIAS CLAVE
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("DIFERENCIAS IMPORTANTES");
console.log("=".repeat(60) + "\n");

console.log(`
HTMLCollection vs NodeList:
  
  HTMLCollection:
    ✓ Devuelta por: getElementsBy*, document.forms, document.images, etc.
    ✓ Solo contiene elementos (no nodos de texto/comentarios)
    ✓ Es "live" (se actualiza automáticamente)
    ✓ NO tiene forEach nativo (necesita convertir a array)
    ✓ Permite acceso por name/id
  
  NodeList:
    ✓ Devuelta por: querySelectorAll, childNodes
    ✓ Puede contener cualquier tipo de nodo
    ✓ Es "static" (no se actualiza, excepto childNodes que es "live")
    ✓ SÍ tiene forEach nativo
    ✓ NO permite acceso por name/id

Colecciones "Live" vs "Static":
  
  Live (se actualizan automáticamente):
    - document.forms, .images, .links, etc.
    - getElementsByClassName, getElementsByTagName
    - .children, .childNodes
  
  Static (no se actualizan):
    - querySelectorAll
    - Array.from(colección)
`);

// ------------------------------------------
// CASOS DE USO PRÁCTICOS
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("CASOS DE USO PRÁCTICOS");
console.log("=".repeat(60) + "\n");

console.log(`
CUÁNDO USAR CADA PROPIEDAD:

document.forms
  ✓ Validar todos los formularios de la página
  ✓ Deshabilitar envío de formularios
  ✓ Serializar datos de múltiples forms

document.images
  ✓ Lazy loading de imágenes
  ✓ Precargar imágenes
  ✓ Añadir watermarks a todas las imágenes

document.links
  ✓ Añadir analytics a todos los enlaces
  ✓ Abrir enlaces externos en nueva pestaña
  ✓ Modificar URLs dinámicamente

document.scripts
  ✓ Verificar qué scripts están cargados
  ✓ Debugging de dependencias
  ✓ Análisis de rendimiento

document.styleSheets
  ✓ Cambiar temas dinámicamente
  ✓ Deshabilitar hojas de estilo
  ✓ Manipular CSS programáticamente

document.documentElement
  ✓ Aplicar clase al <html> (ej: tema oscuro)
  ✓ Obtener dimensiones completas de la página
  ✓ Scroll programático al inicio

document.head
  ✓ Añadir <meta> tags dinámicamente
  ✓ Cargar CSS/JS dinámicamente
  ✓ Modificar <title> de la página

document.body
  ✓ Añadir elementos al contenido
  ✓ Aplicar clases globales
  ✓ Manipular todo el contenido visible
`);
