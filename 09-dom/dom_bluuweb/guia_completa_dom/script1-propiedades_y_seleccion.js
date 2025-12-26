// ============================================
// ============================================
//  GUÍA COMPLETA DEL DOM - JAVASCRIPT
//  Todos los métodos y propiedades comentados
// ============================================
// ============================================

// ============================================
// SECCIÓN 1: PROPIEDADES BÁSICAS DEL DOCUMENTO
// ============================================

// Imprime una línea separadora de 80 caracteres de longitud usando el carácter "="
console.log("\n\n" + "=".repeat(80));

// Imprime el título de esta sección
console.log("01 - PROPIEDADES BÁSICAS DEL DOCUMENTO");

// Imprime otra línea separadora
console.log("=".repeat(80) + "\n");

// document.title devuelve el contenido de la etiqueta <title> del documento
console.log("Título de la página:", document.title);

// document.domain devuelve el dominio del servidor (ejemplo: localhost, google.com)
console.log("Dominio:", document.domain);

// document.URL devuelve la URL completa del documento actual
console.log("URL:", document.URL);

// document.location.href es similar a URL pero forma parte del objeto location
// Este objeto tiene más propiedades (protocol, hostname, pathname, etc.)
console.log("URL detallada:", document.location.href);

// document.referrer devuelve la URL de la página desde la que se llegó a esta
// Será una cadena vacía si se accedió directamente (sin referencia)
console.log("URL de la página anterior:", document.referrer);

// document.characterSet devuelve la codificación de caracteres del documento
// Normalmente UTF-8, ISO-8859-1, etc.
console.log("Codificación de caracteres:", document.characterSet);

// document.contentType devuelve el tipo MIME del documento
// Normalmente "text/html" para páginas web
console.log("Tipo de contenido:", document.contentType);

// document.lastModified devuelve la fecha y hora de la última modificación
// Formato: MM/DD/YYYY HH:MM:SS
console.log("Fecha última modificación:", document.lastModified);

// document.compatMode indica el modo de renderizado del navegador
// "CSS1Compat" = modo estándares, "BackCompat" = modo quirks (compatible con navegadores antiguos)
console.log("Modo de compatibilidad:", document.compatMode);

// document.designMode permite editar el contenido de la página
// Valores: "on" (editable) o "off" (no editable, valor por defecto)
console.log("Modo de diseño:", document.designMode);

// document.cookie devuelve todas las cookies del documento como una cadena
// Formato: "nombre1=valor1; nombre2=valor2"
console.log("Cookies:", document.cookie);

// ============================================
// SECCIÓN 2: MÉTODOS DE SELECCIÓN - CLÁSICOS
// ============================================

// Imprime separadores y título de sección
console.log("\n\n" + "=".repeat(80));
console.log("02 - MÉTODOS DE SELECCIÓN DE ELEMENTOS");
console.log("=".repeat(80) + "\n");

// Imprime subtítulo
console.log("=".repeat(60));
console.log("MÉTODOS CLÁSICOS");
console.log("=".repeat(60));

// ------------------------------------------
// 1. getElementById() - Selecciona UN elemento por su ID
// ------------------------------------------

// Imprime título del método
console.log("\n1. getElementById():");

// document.getElementById("titulo") busca un elemento con id="titulo"
// - NO se usa # delante del ID (eso es para CSS)
// - Devuelve el elemento HTML o null si no existe
// - Solo puede haber un elemento con cada ID (los IDs deben ser únicos)
const elementoPorId = document.getElementById("titulo");

// Imprime el elemento completo
console.log("  Elemento:", elementoPorId);

// .textContent devuelve solo el texto del elemento (sin etiquetas HTML)
console.log("  Su contenido de texto:", elementoPorId.textContent);

// ------------------------------------------
// 2. getElementsByClassName() - Selecciona VARIOS elementos por clase
// ------------------------------------------

console.log("\n2. getElementsByClassName():");

// document.getElementsByClassName("descripcion") busca TODOS los elementos con esa clase
// - NO se usa punto delante de la clase
// - Devuelve HTMLCollection (colección "live" que se actualiza automáticamente si cambia el DOM)
// - Para buscar elementos con múltiples clases: "clase1 clase2"
const elementosPorClase = document.getElementsByClassName("descripcion");

// Imprime la colección completa
console.log("  Todos los elementos:", elementosPorClase);

// Para obtener el PRIMER elemento de la colección, usar índice [0]
console.log("  PRIMER elemento:", elementosPorClase[0]);

// Puedes buscar dentro de un elemento específico en lugar de todo el documento
// Primero obtenemos el contenedor
const miContainer = document.getElementById("miContainer");

// Luego buscamos solo dentro de ese contenedor
const dentroDelContainer = miContainer.getElementsByClassName("text-danger");

// Imprime solo los elementos encontrados dentro de #miContainer
console.log("  Solo dentro de #miContainer:", dentroDelContainer);

// ------------------------------------------
// 3. getElementsByTagName() - Selecciona VARIOS elementos por etiqueta HTML
// ------------------------------------------

console.log("\n3. getElementsByTagName():");

// document.getElementsByTagName("p") busca TODOS los elementos <p>
// - Devuelve HTMLCollection (colección "live")
// - Busca por el nombre de la etiqueta HTML (p, div, span, etc.)
const elementosPorEtiqueta = document.getElementsByTagName("p");

// Imprime todos los párrafos
console.log("  Todos los <p>:", elementosPorEtiqueta);

// Para obtener el PRIMER elemento, usar índice [0]
console.log("  PRIMER <p>:", elementosPorEtiqueta[0]);

// Usar "*" como argumento selecciona TODOS los elementos del documento
const todosLosElementos = document.getElementsByTagName("*");

// Imprime absolutamente todos los elementos
console.log("  Todos los elementos:", todosLosElementos);

// ------------------------------------------
// 4. getElementsByName() - Selecciona VARIOS elementos por atributo name
// ------------------------------------------

console.log("\n4. getElementsByName():");

// document.getElementsByName("nombre") busca elementos con atributo name="nombre"
// - Uso principal: inputs de formularios (input, select, textarea)
// - Devuelve NodeList (no es "live" como HTMLCollection)
const elementosPorName = document.getElementsByName("parrafoImportante");

// Imprime todos los elementos con ese name
console.log("  Todos con name='parrafoImportante':", elementosPorName);

// Para obtener el PRIMER elemento, usar índice [0]
console.log("  PRIMER elemento:", elementosPorName[0]);

// Ejemplo útil con inputs de formularios
const inputsNombre = document.getElementsByName("nombre");

// Imprime todos los inputs que tengan name="nombre"
console.log("  Inputs con name='nombre':", inputsNombre);

// ============================================
// SECCIÓN 3: MÉTODOS DE SELECCIÓN - MODERNOS
// ============================================

// Imprime subtítulo de métodos modernos
console.log("\n" + "=".repeat(60));
console.log("MÉTODOS MODERNOS (más usados hoy)");
console.log("=".repeat(60));

// ------------------------------------------
// 5. querySelector() - Selecciona el PRIMER elemento que coincida
// ------------------------------------------

console.log("\n5. querySelector():");

// querySelector usa selectores CSS (como en las hojas de estilo)
// Por clase: CON punto delante
const q1 = document.querySelector(".text-danger");
console.log("  Primer .text-danger:", q1);

// Por ID: CON # delante
const q2 = document.querySelector("#miContainer");
console.log("  Por ID (#miContainer):", q2);

// Por etiqueta: sin nada delante
const q3 = document.querySelector("p");
console.log("  Primer <p>:", q3);

// Selector complejo (descendiente)
// Busca el primer elemento con clase .text-danger que esté dentro de .container
const q4 = document.querySelector(".container .text-danger");
console.log("  Primer .text-danger en .container:", q4);

// Por atributo data-*
// Los atributos personalizados data-* se seleccionan con [atributo='valor']
const q5 = document.querySelector("[data-tipo='contenedor']");
console.log("  Por atributo data-tipo:", q5);

// Buscar DENTRO de un elemento específico
// Primero obtenemos el contenedor
const container2 = document.getElementById("miContainer");

// Luego buscamos solo dentro de él
const q6 = container2.querySelector(".text-danger");
console.log("  Dentro de container:", q6);

// ------------------------------------------
// 6. querySelectorAll() - Selecciona TODOS los elementos que coincidan
// ------------------------------------------

console.log("\n6. querySelectorAll():");

// querySelectorAll devuelve NodeList con TODOS los elementos que coincidan
// Por clase
const qAll1 = document.querySelectorAll(".text-danger");
console.log("  Todos los .text-danger:", qAll1);

// Por etiqueta
const qAll2 = document.querySelectorAll("p");
console.log("  Todos los <p>:", qAll2);

// Múltiples selectores con coma (OR lógico)
// Selecciona elementos que tengan .text-danger O .text-warning
const qAll3 = document.querySelectorAll(".text-danger, .text-warning");
console.log("  Con .text-danger O .text-warning:", qAll3);

// Selector complejo con :not() (negación)
// Selecciona .text-danger en divs pero NO en .container
const qAll4 = document.querySelectorAll("div:not(.container) .text-danger");
console.log("  En divs pero NO en .container:", qAll4);

// Por atributo con comodín
// [class*='text'] selecciona elementos cuya clase CONTENGA 'text'
const qAll5 = document.querySelectorAll("[class*='text']");
console.log("  Clases que contienen 'text':", qAll5);

// ============================================
// SECCIÓN 4: NAVEGACIÓN POR EL DOM
// ============================================

console.log("\n" + "=".repeat(60));
console.log("NAVEGACIÓN POR EL DOM (relaciones)");
console.log("=".repeat(60));

// ------------------------------------------
// 7. Elementos padre/hijo/hermanos
// ------------------------------------------

console.log("\n7. Navegación DOM:");

// Seleccionar un elemento para navegar desde él
const elemento = document.querySelector(".primero");

// PADRE: Elemento padre directo
// parentElement devuelve el elemento padre (solo elementos HTML)
console.log("  Padre (parentElement):", elemento.parentElement);

// parentNode devuelve el nodo padre (puede ser elemento, texto, comentario, etc.)
console.log("  Padre (parentNode):", elemento.parentNode);

// HIJOS: Elementos hijos
const containerNav = document.getElementById("miContainer");

// children devuelve HTMLCollection con solo elementos HTML (sin nodos de texto)
console.log("  Todos los hijos (children):", containerNav.children);

// firstElementChild devuelve el primer hijo que sea un elemento HTML
console.log("  Primer hijo:", containerNav.firstElementChild);

// lastElementChild devuelve el último hijo que sea un elemento HTML
console.log("  Último hijo:", containerNav.lastElementChild);

// childNodes devuelve NodeList con TODOS los nodos (incluye textos, comentarios, etc.)
console.log("  Hijos (childNodes):", containerNav.childNodes);

// HERMANOS: Elementos al mismo nivel
// nextElementSibling devuelve el siguiente hermano elemento
console.log("  Hermano siguiente:", elemento.nextElementSibling);

// previousElementSibling devuelve el hermano anterior elemento
console.log("  Hermano anterior:", elemento.previousElementSibling);

// ANCESTROS: Buscar el ancestro más cercano que coincida con un selector
// closest() busca hacia arriba en el árbol del DOM
console.log("  Ancestro .container2:", elemento.closest(".container2"));
console.log("  Ancestro div:", elemento.closest("div"));

// ============================================
// SECCIÓN 5: SELECTORES AVANZADOS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("SELECTORES AVANZADOS");
console.log("=".repeat(60));

// Seleccionar elementos .texto1 que estén DENTRO de .container
console.log("\nElementos .texto1 dentro de .container:");
const dentroContainer = document.querySelectorAll(".container .texto1");
console.log(dentroContainer);

// Seleccionar elementos .text-danger que NO estén dentro de .container

// Forma 1: Usando :not() (la más elegante y eficiente)
// :not() excluye elementos que coincidan con el selector interno
console.log("\nForma 1 con :not():");
const elementosNot = document.querySelectorAll(
  ".text-danger:not(.container .text-danger)"
);
console.log(elementosNot);

// Forma 2: Seleccionar todos y filtrar con closest()
// closest() busca el ancestro más cercano que coincida
// Si devuelve null, el elemento NO está dentro de .container
console.log("\nForma 2 con filter + closest():");

// Primero obtenemos todos los .text-danger
const todosTextDanger = document.querySelectorAll(".text-danger");

// Convertimos NodeList a Array y filtramos
const fueraDelContainer = Array.from(todosTextDanger).filter((el) => {
  // Si closest devuelve null, el elemento NO está en .container
  return !el.closest(".container");
});
console.log(fueraDelContainer);

// ============================================
// SECCIÓN 6: SELECTORES ESPECIALIZADOS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("SELECTORES ESPECIALIZADOS");
console.log("=".repeat(60));

// ------------------------------------------
// 8. Formularios - Acceso especial
// ------------------------------------------

console.log("\n8. Formularios:");

// Obtenemos el formulario
const form = document.getElementById("miFormulario");

// Acceder a elementos por índice (posición en el formulario)
console.log("  Primer input (índice 0):", form[0]);

// Acceder a elementos por su atributo name
console.log("  Input nombre:", form.nombre);
console.log("  Input email:", form.email);

// Seleccionar todos los inputs del formulario
const inputs = form.querySelectorAll("input");
console.log("  Todos los inputs:", inputs);

// Seleccionar inputs por tipo
const textInputs = form.querySelectorAll("input[type='text']");
console.log("  Inputs tipo text:", textInputs);

// Todos los elementos del formulario (inputs, selects, buttons, textareas, etc.)
console.log("  Todos los elementos:", form.elements);

// ------------------------------------------
// 9. matches() - Verificar si un elemento coincide con un selector
// ------------------------------------------

console.log("\n9. matches() - Verificar selector:");

// Seleccionamos un elemento
const parrafoMatch = document.querySelector(".primero");

// matches() devuelve true si el elemento coincide con el selector, false si no
console.log("  ¿Tiene clase .primero?", parrafoMatch.matches(".primero"));
console.log(
  "  ¿Tiene clase .text-danger?",
  parrafoMatch.matches(".text-danger")
);
console.log("  ¿Es un <p>?", parrafoMatch.matches("p"));

// Verificar si está dentro de .container2
console.log("  ¿Está en .container2?", parrafoMatch.matches(".container2 *"));
