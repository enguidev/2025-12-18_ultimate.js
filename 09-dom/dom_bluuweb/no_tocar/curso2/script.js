// ============================================
// ============================================
//  SCRIPTS ORGANIZADOS POR SECCIONES
//  ============================================
//  ============================================

//  ============================================
//  SCRIPT 1: PROPIEDADES BÁSICAS DEL DOCUMENTO
//  ============================================
console.log("\n\n" + "=".repeat(80));
console.log("01 - PROPIEDADES BÁSICAS DEL DOCUMENTO");
console.log("=".repeat(80) + "\n");

// Título de la página (contenido de la etiqueta <title>)
console.log("Título de la página:", document.title);

// Dominio del documento (ejemplo: localhost, google.com)
console.log("Dominio:", document.domain);

// URL completa del documento
console.log("URL:", document.URL);

// Otra forma de obtener la URL (más detallada y con más propiedades)
console.log("URL detallada:", document.location.href);

// URL de la página desde la que se llegó a esta (referrer)
console.log("URL de la página anterior:", document.referrer);

// Codificación de caracteres del documento (UTF-8, ISO-8859-1, etc.)
console.log("Codificación de caracteres:", document.characterSet);

// Tipo MIME del documento (normalmente text/html)
console.log("Tipo de contenido:", document.contentType);

// Fecha y hora de la última modificación del documento
console.log("Fecha última modificación:", document.lastModified);

// Modo de compatibilidad (CSS1Compat = estándares, BackCompat = quirks mode)
console.log("Modo de compatibilidad:", document.compatMode);

// Modo de diseño (on/off) - permite editar el contenido de la página
console.log("Modo de diseño:", document.designMode);

// Cookies del documento (string con todas las cookies)
console.log("Cookies:", document.cookie);

// ============================================
// SCRIPT 2: MÉTODOS DE SELECCIÓN - PARTE 1 (CLÁSICOS)
// ============================================
console.log("\n\n" + "=".repeat(80));
console.log("02 - MÉTODOS DE SELECCIÓN DE ELEMENTOS");
console.log("=".repeat(80) + "\n");

console.log("=".repeat(60));
console.log("MÉTODOS CLÁSICOS");
console.log("=".repeat(60));

// ==========================================
// 1. getElementById() - Selecciona UN elemento por su ID
// ==========================================
console.log("\n1. getElementById():");

// Selecciona el elemento con id="titulo"
// NO se usa # delante del ID
// Devuelve el elemento o null si no existe
const elementoPorId = document.getElementById("titulo");
console.log("  Elemento:", elementoPorId);

// Obtener solo el texto del elemento
console.log("  Su contenido de texto:", elementoPorId.textContent);

// ==========================================
// 2. getElementsByClassName() - Selecciona VARIOS elementos por clase
// ==========================================
console.log("\n2. getElementsByClassName():");

// Selecciona TODOS los elementos con class="descripcion"
// NO se usa punto delante de la clase
// Devuelve HTMLCollection (colección "live" que se actualiza automáticamente)
const elementosPorClase = document.getElementsByClassName("descripcion");
console.log("  Todos los elementos:", elementosPorClase);

// Para obtener el PRIMER elemento, usar índice [0]
console.log("  PRIMER elemento:", elementosPorClase[0]);

// Buscar solo dentro de un elemento específico
const miContainer = document.getElementById("miContainer");
const dentroDelContainer = miContainer.getElementsByClassName("text-danger");
console.log("  Solo dentro de #miContainer:", dentroDelContainer);

// ==========================================
// 3. getElementsByTagName() - Selecciona VARIOS elementos por etiqueta HTML
// ==========================================
console.log("\n3. getElementsByTagName():");

// Selecciona TODOS los elementos <p>
// Devuelve HTMLCollection (colección "live")
const elementosPorEtiqueta = document.getElementsByTagName("p");
console.log("  Todos los <p>:", elementosPorEtiqueta);

// Para obtener el PRIMER elemento, usar índice [0]
console.log("  PRIMER <p>:", elementosPorEtiqueta[0]);

// Seleccionar TODOS los elementos del documento
const todosLosElementos = document.getElementsByTagName("*");
console.log("  Todos los elementos:", todosLosElementos);

// ==========================================
// 4. getElementsByName() - Selecciona VARIOS elementos por atributo name
// ==========================================
console.log("\n4. getElementsByName():");

// Uso principal: inputs de formularios
// Selecciona todos los elementos con name="parrafoImportante"
// Devuelve NodeList
const elementosPorName = document.getElementsByName("parrafoImportante");
console.log("  Todos con name='parrafoImportante':", elementosPorName);

// Para obtener el PRIMER elemento, usar índice [0]
console.log("  PRIMER elemento:", elementosPorName[0]);

// Ejemplo con inputs de formulario
const inputsNombre = document.getElementsByName("nombre");
console.log("  Inputs con name='nombre':", inputsNombre);

// ============================================
// SCRIPT 3: MÉTODOS DE SELECCIÓN - PARTE 2 (MODERNOS)
// ============================================

console.log("\n" + "=".repeat(60));
console.log("MÉTODOS MODERNOS (más usados hoy)");
console.log("=".repeat(60));

// ==========================================
// 5. querySelector() - Selecciona el PRIMER elemento que coincida
// ==========================================
console.log("\n5. querySelector():");

// Por clase (CON punto delante)
const q1 = document.querySelector(".text-danger");
console.log("  Primer .text-danger:", q1);

// Por ID (CON # delante)
const q2 = document.querySelector("#miContainer");
console.log("  Por ID (#miContainer):", q2);

// Por etiqueta (sin nada delante)
const q3 = document.querySelector("p");
console.log("  Primer <p>:", q3);

// Selector complejo (descendiente)
// Busca el primer .text-danger que esté dentro de .container
const q4 = document.querySelector(".container .text-danger");
console.log("  Primer .text-danger en .container:", q4);

// Por atributo data-*
const q5 = document.querySelector("[data-tipo='contenedor']");
console.log("  Por atributo data-tipo:", q5);

// Buscar DENTRO de un elemento específico
const container2 = document.getElementById("miContainer");
const q6 = container2.querySelector(".text-danger");
console.log("  Dentro de container:", q6);

// ==========================================
// 6. querySelectorAll() - Selecciona TODOS los elementos que coincidan
// ==========================================
console.log("\n6. querySelectorAll():");

// Por clase
const qAll1 = document.querySelectorAll(".text-danger");
console.log("  Todos los .text-danger:", qAll1);

// Por etiqueta
const qAll2 = document.querySelectorAll("p");
console.log("  Todos los <p>:", qAll2);

// Múltiples selectores con coma (OR)
// Selecciona elementos que tengan .text-danger O .text-warning
const qAll3 = document.querySelectorAll(".text-danger, .text-warning");
console.log("  Con .text-danger O .text-warning:", qAll3);

// Selector complejo con :not()
// Selecciona .text-danger en divs pero NO en .container
const qAll4 = document.querySelectorAll("div:not(.container) .text-danger");
console.log("  En divs pero NO en .container:", qAll4);

// Por atributo con comodín
// Selecciona elementos cuya clase CONTENGA 'text'
const qAll5 = document.querySelectorAll("[class*='text']");
console.log("  Clases que contienen 'text':", qAll5);

// ============================================
// SCRIPT 4: NAVEGACIÓN POR EL DOM
// ============================================

console.log("\n" + "=".repeat(60));
console.log("NAVEGACIÓN POR EL DOM (relaciones)");
console.log("=".repeat(60));

// ==========================================
// 7. Elementos padre/hijo/hermanos
// ==========================================
console.log("\n7. Navegación DOM:");

// Seleccionar un elemento para navegar desde él
const elemento = document.querySelector(".primero");

// PADRE: Elemento padre directo
console.log("  Padre (parentElement):", elemento.parentElement);
console.log("  Padre (parentNode):", elemento.parentNode);

// HIJOS: Elementos hijos
const containerNav = document.getElementById("miContainer");
console.log("  Todos los hijos (children):", containerNav.children); // HTMLCollection (solo elementos)
console.log("  Primer hijo:", containerNav.firstElementChild);
console.log("  Último hijo:", containerNav.lastElementChild);
console.log("  Hijos (childNodes):", containerNav.childNodes); // NodeList (incluye textos y comentarios)

// HERMANOS: Elementos al mismo nivel
console.log("  Hermano siguiente:", elemento.nextElementSibling);
console.log("  Hermano anterior:", elemento.previousElementSibling);

// ANCESTROS: Buscar el ancestro más cercano que coincida con un selector
console.log("  Ancestro .container2:", elemento.closest(".container2"));
console.log("  Ancestro div:", elemento.closest("div"));

// ============================================
// SCRIPT 5: SELECTORES AVANZADOS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("SELECTORES AVANZADOS");
console.log("=".repeat(60));

// Seleccionar elementos .texto1 DENTRO de .container
console.log("\nElementos .texto1 dentro de .container:");
const dentroContainer = document.querySelectorAll(".container .texto1");
console.log(dentroContainer);

// Seleccionar elementos .text-danger que NO estén dentro de .container
// Forma 1: Usando :not() (la más elegante y eficiente)
console.log("\nForma 1 con :not():");
const elementosNot = document.querySelectorAll(
  ".text-danger:not(.container .text-danger)"
);
console.log(elementosNot);

// Forma 2: Seleccionar todos y filtrar con closest()
// closest() busca el ancestro más cercano que coincida
// Si devuelve null, el elemento NO está dentro de .container
console.log("\nForma 2 con filter + closest():");
const todosTextDanger = document.querySelectorAll(".text-danger");
const fueraDelContainer = Array.from(todosTextDanger).filter((el) => {
  return !el.closest(".container");
});
console.log(fueraDelContainer);

// ============================================
// SCRIPT 6: SELECTORES ESPECIALIZADOS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("SELECTORES ESPECIALIZADOS");
console.log("=".repeat(60));

// ==========================================
// 8. Formularios - Acceso especial
// ==========================================
console.log("\n8. Formularios:");

const form = document.getElementById("miFormulario");

// Acceder a elementos por índice (posición)
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

// Todos los elementos del formulario (inputs, selects, buttons, etc.)
console.log("  Todos los elementos:", form.elements);

// ==========================================
// 9. matches() - Verificar si un elemento coincide con un selector
// ==========================================
console.log("\n9. matches() - Verificar selector:");

const parrafoMatch = document.querySelector(".primero");

// Verifica si el elemento tiene la clase .primero
console.log("  ¿Tiene clase .primero?", parrafoMatch.matches(".primero"));

// Verifica si el elemento tiene la clase .text-danger
console.log(
  "  ¿Tiene clase .text-danger?",
  parrafoMatch.matches(".text-danger")
);

// Verifica si el elemento es un <p>
console.log("  ¿Es un <p>?", parrafoMatch.matches("p"));

// Verifica si el elemento está dentro de .container2
console.log("  ¿Está en .container2?", parrafoMatch.matches(".container2 *"));

// ============================================
// SCRIPT 7: CONVERSIONES Y UTILIDADES
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CONVERSIONES Y UTILIDADES");
console.log("=".repeat(60));

// ==========================================
// 10. Convertir colecciones a Arrays
// ==========================================
console.log("\n10. Conversión a Array:");

// Obtener una HTMLCollection
const htmlCollection = document.getElementsByClassName("text-danger");

// Opción 1: Array.from() - Método moderno y recomendado
const array1 = Array.from(htmlCollection);
console.log("  Con Array.from():", array1);

// Opción 2: Spread operator (...) - Sintaxis más corta
const array2 = [...htmlCollection];
console.log("  Con spread (...):", array2);

// Opción 3: Array.prototype.slice.call() - Método antiguo
const array3 = Array.prototype.slice.call(htmlCollection);
console.log("  Con slice.call():", array3);

// Una vez convertido a array, podemos usar métodos de array

// forEach: Iterar sobre cada elemento
console.log("\n  Iterando con forEach:");
array1.forEach((el) => console.log("    Texto:", el.textContent));

// filter: Filtrar elementos que cumplan una condición
const filtrados = array1.filter((el) => el.classList.contains("text-warning"));
console.log("  Filtrados (con text-warning):", filtrados);

// ==========================================
// 11. HTMLCollection vs NodeList
// ==========================================
console.log("\n11. HTMLCollection vs NodeList:");

// HTMLCollection: Retornada por getElementsByClassName, getElementsByTagName
const htmlCol = document.getElementsByClassName("text-danger");
console.log("  HTMLCollection:", htmlCol);

// NodeList: Retornada por querySelectorAll
const nodeList = document.querySelectorAll(".text-danger");
console.log("  NodeList:", nodeList);

// DIFERENCIA CLAVE:
// HTMLCollection es "live" (se actualiza automáticamente si cambia el DOM)
// NodeList de querySelectorAll es "static" (no se actualiza)

// Verificar si tienen forEach
console.log("  HTMLCollection tiene forEach:", typeof htmlCol.forEach); // undefined
console.log("  NodeList tiene forEach:", typeof nodeList.forEach); // function

// NodeList SÍ tiene forEach
console.log("\n  Iterando NodeList con forEach:");
nodeList.forEach((el) => console.log("    Elemento:", el.tagName));

// ============================================
// SCRIPT 8: RESUMEN DE SELECCIÓN
// ============================================

console.log("\n" + "=".repeat(60));
console.log("RESUMEN DE CUÁNDO USAR CADA MÉTODO");
console.log("=".repeat(60));

console.log(`
MÉTODOS CLÁSICOS:
  getElementById()           → Un elemento por ID (el más rápido)
  getElementsByClassName()   → Varios por clase (HTMLCollection live)
                              → Primer elemento: [0]
  getElementsByTagName()     → Varios por etiqueta (HTMLCollection live)
                              → Primer elemento: [0]
  getElementsByName()        → Por atributo name (NodeList, para formularios)
                              → Primer elemento: [0]

MÉTODOS MODERNOS (RECOMENDADOS):
  querySelector()            → Primer elemento (cualquier selector CSS)
  querySelectorAll()         → Todos los elementos (cualquier selector CSS)

NAVEGACIÓN:
  parentElement              → Padre
  children                   → Hijos (HTMLCollection)
  firstElementChild          → Primer hijo
  lastElementChild           → Último hijo
  nextElementSibling         → Hermano siguiente
  previousElementSibling     → Hermano anterior
  closest()                  → Ancestro más
  cercano que coincida

VERIFICACIÓN:
  matches()                  → Comprobar si coincide con selector (devuelve boolean)

NOTAS IMPORTANTES:
  → querySelector/querySelectorAll son los MÁS VERSÁTILES (usan selectores CSS)
  → getElementById es el MÁS RÁPIDO para seleccionar un solo elemento
  → getElementsBy* devuelven colecciones "live" (se actualizan automáticamente)
  → querySelectorAll devuelve NodeList "static" (no se actualiza automáticamente)
  → Para obtener el primer elemento con métodos clásicos: usar índice [0]
  → HTMLCollection NO tiene forEach, NodeList SÍ tiene forEach
`);

// ============================================
// SCRIPT 9: MÉTODOS DE MANIPULACIÓN DEL DOM
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("03 - MÉTODOS PARA CREAR Y MODIFICAR EL DOM");
console.log("=".repeat(80) + "\n");

// ==========================================
// 1. createElement() y createTextNode()
// ==========================================

// Crear un nuevo elemento <p>
const nuevoParrafo = document.createElement("p");

// Crear un nodo de texto
const texto = document.createTextNode(
  "Este párrafo fue creado con createTextNode"
);

// Añadir el texto al párrafo
nuevoParrafo.appendChild(texto);

// Añadir el párrafo al body
document.body.appendChild(nuevoParrafo);
console.log("✅ Párrafo creado y añadido al body");

// ==========================================
// 2. replaceChild() - Reemplazar un nodo por otro
// ==========================================

// Crear un nuevo elemento h2
const reemplazo = document.createElement("h2");
reemplazo.textContent = "Título reemplazado con replaceChild()";

// Seleccionar el elemento original a reemplazar
const original = document.getElementById("titulo");

// Reemplazar: replaceChild(nuevo, viejo)
document.body.replaceChild(reemplazo, original);
console.log("✅ Nodo 'titulo' reemplazado por un h2");

// ==========================================
// 3. removeChild() - Eliminar un nodo hijo
// ==========================================

// Seleccionar el primer elemento con clase .descripcion
const eliminar = document.querySelector(".descripcion");

// Eliminar el nodo del DOM
document.body.removeChild(eliminar);
console.log("✅ Primer párrafo con clase 'descripcion' eliminado");

// ==========================================
// 4. DocumentFragment - Inserción múltiple eficiente
// ==========================================

// Crear un fragmento (no añade nodos al DOM hasta que se inserta)
const fragmento = document.createDocumentFragment();

// Crear un span y añadirlo al fragmento
const span = document.createElement("span");
span.textContent = "Texto dentro de un fragmento";
fragmento.appendChild(span);

// Insertar el fragmento completo (más eficiente que insertar uno por uno)
document.body.appendChild(fragmento);
console.log("✅ Fragmento con un span insertado");

// ==========================================
// 5. importNode() - Importar nodo de otro documento
// ==========================================

// Importar una copia del nodo span
// Parámetro true = clonar con sus hijos
const nodoImportado = document.importNode(span, true);

// Añadir el nodo importado al body
document.body.appendChild(nodoImportado);
console.log("✅ Nodo span importado y añadido al body");

// ==========================================
// 6. DocumentFragment - Inserción múltiple
// ==========================================

// Crear un fragmento para insertar múltiples elementos
const fragmentoMultiple = document.createDocumentFragment();

// Crear 3 elementos <li> y añadirlos al fragmento
for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Elemento ${i} insertado con fragmento`;
  fragmentoMultiple.appendChild(li);
}

// Insertar el fragmento con todos los <li> de una vez
document.body.appendChild(fragmentoMultiple);
console.log("✅ Fragmento con múltiples elementos insertado");

// ==========================================
// 7. adoptNode() - Adoptar nodo externo
// ==========================================

// Crear un nodo externo (simulando que viene de otro documento)
const nodoExterno = document.createElement("div");
nodoExterno.textContent = "Nodo externo adoptado";

// Adoptar el nodo para este documento
const nodoAdoptado = document.adoptNode(nodoExterno);

// Añadirlo al DOM
document.body.appendChild(nodoAdoptado);
console.log("✅ Nodo adoptado correctamente");

// ==========================================
// MÉTODOS OBSOLETOS (⚠️ NO USAR)
// ==========================================

// document.write() y document.writeln() están obsoletos
// Pueden borrar todo el DOM si se usan después de la carga de la página
console.log("⚠️ Métodos document.write y writeln están obsoletos");

// ============================================
// SCRIPT 10: ACCEDER A ELEMENTOS POR POSICIÓN
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("04 - ACCEDER A ELEMENTOS POR POSICIÓN");
console.log("=".repeat(80) + "\n");

// ==========================================
// 1. Acceder por índice [n]
// ==========================================
console.log("1. Por índice:");

// Seleccionar todos los elementos con clase .texto
const parrafos = document.querySelectorAll(".texto");

// Acceder por índice
console.log("  Primer elemento [0]:", parrafos[0]);
console.log("  Segundo elemento [1]:", parrafos[1]);
console.log("  Tercer elemento [2]:", parrafos[2]);
console.log("  Último elemento:", parrafos[parrafos.length - 1]);

// Con métodos clásicos también funciona
const porClasePos = document.getElementsByClassName("texto");
console.log("  Segundo por clase [1]:", porClasePos[1]);

// ==========================================
// 2. Con :nth-child() en querySelector
// ==========================================
console.log("\n2. Con :nth-child():");

// Seleccionar el segundo hijo directo de .container
const segundo = document.querySelector(".container > :nth-child(2)");
console.log("  Segundo hijo:", segundo);

// Tercer hijo directo
const tercero = document.querySelector(".container > :nth-child(3)");
console.log("  Tercer hijo:", tercero);

// Primer hijo
const primero = document.querySelector(".container > :first-child");
console.log("  Primer hijo:", primero);

// Último hijo
const ultimo = document.querySelector(".container > :last-child");
console.log("  Último hijo:", ultimo);

// ==========================================
// 3. Con children (hijos directos)
// ==========================================
console.log("\n3. Con children:");

const containerPos = document.querySelector(".container");

// Acceder a hijos por índice
console.log("  Primer hijo:", containerPos.children[0]);
console.log("  Segundo hijo:", containerPos.children[1]);
console.log("  Tercer hijo:", containerPos.children[2]);
console.log(
  "  Último hijo:",
  containerPos.children[containerPos.children.length - 1]
);

// También con propiedades
console.log("  Primer hijo (propiedad):", containerPos.firstElementChild);
console.log("  Último hijo (propiedad):", containerPos.lastElementChild);

// ============================================
// SCRIPT 11: CREAR Y COPIAR ELEMENTOS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CREAR Y COPIAR ELEMENTOS");
console.log("=".repeat(60));

// ==========================================
// 4. CREAR un elemento nuevo
// ==========================================
console.log("\n4. Crear elemento:");

// Crear un nuevo párrafo
const nuevoParrafoPos = document.createElement("p");
nuevoParrafoPos.textContent = "Soy un nuevo párrafo creado dinámicamente";
nuevoParrafoPos.classList.add("texto");

console.log("  Elemento creado:", nuevoParrafoPos);

// ==========================================
// 5. COPIAR un elemento (cloneNode)
// ==========================================
console.log("\n5. Copiar elemento:");

// Seleccionar el elemento a copiar
const elementoOriginal = document.querySelector(".texto");

// COPIAR sin hijos (solo el elemento, sin su contenido)
// cloneNode(false) = superficial
const copiaSinHijos = elementoOriginal.cloneNode(false);
console.log("  Copia sin hijos:", copiaSinHijos);

// COPIAR con hijos (elemento completo con todo su contenido)
// cloneNode(true) = profundo
const copiaCompleta = elementoOriginal.cloneNode(true);
console.log("  Copia completa:", copiaCompleta);

// ============================================
// SCRIPT 12: INSERTAR EN POSICIONES ESPECÍFICAS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("INSERTAR ELEMENTOS EN POSICIONES ESPECÍFICAS");
console.log("=".repeat(60));

// ==========================================
// 6. INSERTAR en posición específica con insertBefore
// ==========================================
console.log("\n6. Insertar en posición:");

const contenedorInsert = document.querySelector(".container");

// OPCIÓN 1: insertBefore(nuevo, referencia)
// Insertar en la SEGUNDA posición (antes del segundo hijo actual)
const elementoRef = contenedorInsert.children[1]; // Segundo hijo
const parrafoNuevo = document.createElement("p");
parrafoNuevo.textContent = "Insertado en segunda posición";
parrafoNuevo.classList.add("texto");
contenedorInsert.insertBefore(parrafoNuevo, elementoRef);
console.log("  ✅ Insertado antes del segundo elemento");

// OPCIÓN 2: Insertar en la TERCERA posición
const tercerHijo2 = contenedorInsert.children[2];
const otraCopiaCopy = copiaCompleta.cloneNode(true);
contenedorInsert.insertBefore(otraCopiaCopy, tercerHijo2);
console.log("  ✅ Insertado antes del tercer elemento");

// OPCIÓN 3: appendChild() - Insertar al FINAL
const parrafoFinal = document.createElement("p");
parrafoFinal.textContent = "Insertado al final";
parrafoFinal.classList.add("texto");
contenedorInsert.appendChild(parrafoFinal);
console.log("  ✅ Insertado al final");

// OPCIÓN 4: Insertar al PRINCIPIO (antes del primer hijo)
const parrafoPrincipio = document.createElement("p");
parrafoPrincipio.textContent = "Insertado al principio";
parrafoPrincipio.classList.add("texto");
contenedorInsert.insertBefore(
  parrafoPrincipio,
  contenedorInsert.firstElementChild
);
console.log("  ✅ Insertado al principio");

// ==========================================
// 7. MÉTODOS MODERNOS: before, after, prepend, append
// ==========================================
console.log("\n7. Métodos modernos:");

const boxModerno = document.querySelector(".box");

// Crear elementos para demostrar
const elementoBefore = document.createElement("p");
elementoBefore.textContent = "Insertado ANTES de .box (before)";

const elementoAfter = document.createElement("p");
elementoAfter.textContent = "Insertado DESPUÉS de .box (after)";

const elementoPrepend = document.createElement("p");
elementoPrepend.textContent = "Insertado al PRINCIPIO de .box (prepend)";

const elementoAppend = document.createElement("p");
elementoAppend.textContent = "Insertado al FINAL de .box (append)";

// before() - Insertar ANTES del elemento
boxModerno.before(elementoBefore);

// after() - Insertar DESPUÉS del elemento
boxModerno.after(elementoAfter);

// prepend() - Insertar al PRINCIPIO (primer hijo)
boxModerno.prepend(elementoPrepend);

// append() - Insertar al FINAL (último hijo)
boxModerno.append(elementoAppend);

console.log("  ✅ Métodos modernos aplicados");

// ============================================
// SCRIPT 13: COPIAR Y CORTAR ELEMENTOS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("COPIAR Y PEGAR EN POSICIÓN ESPECÍFICA");
console.log("=".repeat(60));

// ==========================================
// 8. COPIAR y PEGAR en tercera posición
// ==========================================
console.log("\n8. Ejemplo completo - COPIAR:");

// Paso 1: Seleccionar el elemento a copiar
const elementoACopiar = document.querySelector(".origen .texto");

// Paso 2: Clonar el elemento (true = con hijos)
const copiaCopy = elementoACopiar.cloneNode(true);

// Paso 3: Seleccionar el contenedor destino
const destinoCopy = document.querySelector(".destino");

// Paso 4: Obtener el tercer hijo (índice 2)
const tercerHijoDestino = destinoCopy.children[2];

// Paso 5: Insertar ANTES del tercer hijo (quedará en posición 3)
if (tercerHijoDestino) {
  destinoCopy.insertBefore(copiaCopy, tercerHijoDestino);
  console.log("  ✅ Copiado en tercera posición");
} else {
  // Si no hay tercer hijo, insertar al final
  destinoCopy.appendChild(copiaCopy);
  console.log("  ✅ Copiado al final (no había 3 elementos)");
}

// ==========================================
// 9. CORTAR y PEGAR en tercera posición
// ==========================================
console.log("\n9. Ejemplo completo - CORTAR:");

// Paso 1: Seleccionar el elemento a cortar
const elementoACortar = document.querySelector(".origen");

// Paso 2: NO SE CLONA, se usa directamente
// Al insertarlo en otro lugar, se MUEVE automáticamente

// Paso 3: Seleccionar el contenedor destino
const destinoCortar = document.querySelector(".destino");

// Paso 4: Obtener el tercer hijo
const tercerHijoCut = destinoCortar.children[2];

// Paso 5: Insertar (esto lo MUEVE, no lo copia)
if (tercerHijoCut) {
  destinoCortar.insertBefore(elementoACortar, tercerHijoCut);
  console.log("  ✅ Cortado y pegado en tercera posición");
} else {
  destinoCortar.appendChild(elementoACortar);
  console.log("  ✅ Cortado y pegado al final");
}

// ============================================
// SCRIPT 14: FUNCIONES REUTILIZABLES
// ============================================

console.log("\n" + "=".repeat(60));
console.log("FUNCIONES ÚTILES REUTILIZABLES");
console.log("=".repeat(60));

// ==========================================
// 10. Funciones reutilizables
// ==========================================

/**
 * Copia un elemento en una posición específica de otro contenedor
 * @param {string} selectorOrigen - Selector del elemento a copiar
 * @param {string} selectorDestino - Selector del contenedor destino
 * @param {number} posicion - Posición donde insertar (0 = primera posición)
 */
function copiarEnPosicion(selectorOrigen, selectorDestino, posicion) {
  // Seleccionar elementos
  const origen = document.querySelector(selectorOrigen);
  const destino = document.querySelector(selectorDestino);

  // Validar que existan
  if (!origen || !destino) {
    console.error("❌ Origen o destino no encontrado");
    return;
  }

  // Clonar el elemento (true = con hijos)
  const copia = origen.cloneNode(true);

  // Insertar según la posición
  if (posicion >= destino.children.length) {
    // Si la posición es mayor que los hijos, insertar al final
    destino.appendChild(copia);
    console.log(`  ✅ Copiado al final (posición ${destino.children.length})`);
  } else {
    // Insertar en la posición específica
    destino.insertBefore(copia, destino.children[posicion]);
    console.log(`  ✅ Copiado en posición ${posicion + 1}`);
  }
}

/**
 * Corta (mueve) un elemento a una posición específica de otro contenedor
 * @param {string} selectorOrigen - Selector del elemento a cortar
 * @param {string} selectorDestino - Selector del contenedor destino
 * @param {number} posicion - Posición donde insertar (0 = primera posición)
 */
function cortarEnPosicion(selectorOrigen, selectorDestino, posicion) {
  // Seleccionar elementos
  const origen = document.querySelector(selectorOrigen);
  const destino = document.querySelector(selectorDestino);

  // Validar que existan
  if (!origen || !destino) {
    console.error("❌ Origen o destino no encontrado");
    return;
  }

  // NO se clona, se mueve directamente
  if (posicion >= destino.children.length) {
    // Si la posición es mayor, insertar al final
    destino.appendChild(origen);
    console.log(
      `  ✅ Cortado y pegado al final (posición ${destino.children.length})`
    );
  } else {
    // Insertar en la posición específica
    destino.insertBefore(origen, destino.children[posicion]);
    console.log(`  ✅ Cortado y pegado en posición ${posicion + 1}`);
  }
}

// Ejemplo de uso (comentado para no ejecutar)
// copiarEnPosicion(".miElemento", ".contenedor", 2); // Copia en 3ª posición
// cortarEnPosicion(".miElemento", ".contenedor", 2); // Corta y pega en 3ª posición

console.log("\n  Funciones definidas: copiarEnPosicion() y cortarEnPosicion()");

// ============================================
// SCRIPT 15: RESUMEN DE POSICIONES
// ============================================

console.log("\n" + "=".repeat(60));
console.log("RESUMEN - ACCESO Y MANIPULACIÓN POR POSICIÓN");
console.log("=".repeat(60));

console.log(`
ACCEDER POR POSICIÓN:
  elementos[0]                    → Primer elemento (índice 0)
  elementos[1]                    → Segundo elemento (índice 1)
  elementos[2]                    → Tercer elemento (índice 2)
  elementos[n]                    → Elemento en posición n+1
  container.children[2]           → Tercer hijo directo
  querySelector(":nth-child(3)")  → Tercer hijo con selector CSS
  firstElementChild               → Primer hijo
  lastElementChild                → Último hijo

COPIAR ELEMENTOS:
  elemento.cloneNode(false)       → Copia SIN hijos (superficial)
  elemento.cloneNode(true)        → Copia CON hijos (profunda/completa)

CORTAR ELEMENTOS:
  No se clona, simplemente se inserta (se mueve automáticamente)

INSERTAR EN POSICIÓN:
  insertBefore(nuevo, referencia) → Inserta ANTES de referencia
  appendChild(elemento)           → Inserta al FINAL
  prepend(elemento)               → Inserta al PRINCIPIO (primer hijo)
  append(elemento)                → Inserta al FINAL (último hijo)
  before(elemento)                → Inserta ANTES del elemento (hermano)
  after(elemento)                 → Inserta DESPUÉS del elemento (hermano)

DIFERENCIA COPIAR vs CORTAR:
  COPIAR:  elemento.cloneNode(true) + insertBefore()
  CORTAR:  insertBefore() directamente (sin clonar, mueve el elemento)
  
IMPORTANTE:
  - Los índices empiezan en 0
  - insertBefore inserta ANTES del elemento de referencia
  - Si no hay elemento de referencia, usar appendChild
  - Los métodos modernos (before, after, prepend, append) son más legibles
`);

// ============================================
// SCRIPT 16: MÉTODOS DE INSPECCIÓN Y ESTADO
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("05 - MÉTODOS DE INSPECCIÓN DE POSICIÓN Y ESTADO");
console.log("=".repeat(80) + "\n");

// ==========================================
// Métodos de posición
// ==========================================

// elementFromPoint() - Obtiene el elemento en unas coordenadas específicas
// Coordenadas relativas a la ventana del navegador
console.log(
  "🎯 Elemento en punto (100,100):",
  document.elementFromPoint(100, 100)
);

// getSelection() - Obtiene el texto seleccionado por el usuario
console.log("🧠 Texto seleccionado:", document.getSelection().toString());

// ==========================================
// Métodos de inspección de estado
// ==========================================

// hasFocus() - Verifica si el documento tiene el foco
console.log("📶 Documento tiene foco:", document.hasFocus());

// readyState - Estado de carga del documento
// Valores: "loading", "interactive", "complete"
console.log("Estado de carga (readyState):", document.readyState);

// activeElement - Elemento que actualmente tiene el foco
console.log("Elemento actualmente enfocado:", document.activeElement);

// visibilityState - Estado de visibilidad del documento
// Valores: "visible", "hidden"
console.log("Estado de visibilidad:", document.visibilityState);

// hidden - Booleano que indica si el documento está oculto
console.log("🔒 Documento oculto:", document.hidden);

// pointerLockElement - Elemento con el puntero bloqueado (para juegos)
console.log("🖱️ Elemento con bloqueo de puntero:", document.pointerLockElement);

// ============================================
// SCRIPT 17: MÉTODOS DE EVENTOS
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("06 - MÉTODOS DE EVENTOS");
console.log("=".repeat(80) + "\n");

// ==========================================
// addEventListener() - Añadir un event listener
// ==========================================

// Añadir un listener para el evento click
document.addEventListener("click", () => {
  console.log("🖱️ Se hizo clic en el documento");
});

// ==========================================
// removeEventListener() - Eliminar un event listener
// ==========================================

// Definir la función handler
const handlerClick = () => {
  console.log("🖱️ Este listener será eliminado");
};

// Añadir el listener
document.addEventListener("click", handlerClick);

// Eliminar el listener (debe ser la misma función)
document.removeEventListener("click", handlerClick);
console.log("✅ Listener de click eliminado");

// ==========================================
// Eventos clave del ciclo de vida
// ==========================================

// DOMContentLoaded - Se dispara cuando el DOM está completamente cargado
// (sin esperar a imágenes, estilos, etc.)
document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 El DOM está completamente cargado (DOMContentLoaded)");
});

// visibilitychange - Se dispara cuando cambia la visibilidad
// (usuario cambia de pestaña)
document.addEventListener("visibilitychange", () => {
  console.log("👀 Cambio de visibilidad:", document.visibilityState);
});

// readystatechange - Se dispara cuando cambia readyState
document.onreadystatechange = () => {
  console.log("🔄 Estado del documento cambió a:", document.readyState);
};

// ==========================================
// Métodos obsoletos (NO USAR)
// ==========================================

// captureEvents() y releaseEvents() - Obsoletos desde Netscape 4
console.log("⚠️ captureEvents y releaseEvents están obsoletos");

// ============================================
// SCRIPT 18: PROPIEDADES DEL DOM
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("07 - PROPIEDADES DEL DOM");
console.log("=".repeat(80) + "\n");

// ==========================================
// Nodos principales del documento
// ==========================================

// documentElement - Nodo raíz <html>
console.log("Nodo <html>:", document.documentElement);

// head - Nodo <head>
console.log("Nodo <head>:", document.head);

// body - Nodo <body>
console.log("Nodo <body>:", document.body);

// ==========================================
// Colecciones de elementos
// ==========================================

// forms - Todos los formularios
console.log("Todos los formularios:", document.forms);

// images - Todas las imágenes
console.log("Todas las imágenes:", document.images);

// links - Todos los enlaces con href
console.log("Todos los enlaces:", document.links);

// scripts - Todos los scripts
console.log("Todos los scripts:", document.scripts);

// styleSheets - Todas las hojas de estilo
console.log("Hojas de estilos:", document.styleSheets);

// ==========================================
// Propiedades de navegación entre nodos
// ==========================================

// children - Hijos directos del documento
console.log("Hijos del documento:", document.children);

// firstElementChild - Primer hijo del documento (<html>)
console.log("Primer hijo:", document.firstElementChild);

// lastElementChild - Último hijo del documento (<html>)
console.log("Último hijo:", document.lastElementChild);

// ============================================
// SCRIPT 19: CLIPBOARD API
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("08 - CLIPBOARD API (navigator)");
console.log("=".repeat(80) + "\n");

// ==========================================
// Clipboard API moderna
// ==========================================

// writeText() - Copiar texto al portapapeles
navigator.clipboard
  .writeText("Texto copiado con Clipboard API")
  .then(() => {
    console.log("✅ Texto copiado al portapapeles correctamente");
  })
  .catch((err) => {
    console.error("❌ Error al copiar el texto:", err);
  });

// readText() - Leer texto del portapapeles
navigator.clipboard
  .readText()
  .then((texto) => {
    console.log("📋 Texto leído del portapapeles:", texto);
  })
  .catch((err) => {
    console.error("❌ Error al leer el portapapeles:", err);
  });

// ==========================================
// Advertencias y requisitos
// ==========================================

console.log("\n⚠️ IMPORTANTE:");
console.log("  - navigator.clipboard solo funciona en HTTPS o localhost");
console.log("  - Requiere interacción del usuario (clic, input, etc.)");
console.log("  - Puede estar restringido por permisos del navegador");
console.log("  - document.execCommand('copy') está obsoleto");

// ============================================
// SCRIPT 20: MÉTODOS OBSOLETOS (SOLO DEMOSTRATIVOS)
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("09 - MÉTODOS OBSOLETOS (⚠️ NO USAR EN PRODUCCIÓN)");
console.log("=".repeat(80) + "\n");

// ==========================================
// Escritura directa (obsoleto y peligroso)
// ==========================================

// ===============================
// Métodos obsoletos del objeto document
// ⚠️ Este archivo es solo demostrativo. No usar estos métodos en producción.
// ===============================

// ===============================
// Escritura directa (obsoleto)
// ===============================

// document.write("<h2>Este contenido fue insertado con document.write</h2>\n\n");
// document.writeln("<p>Este párrafo tiene salto de línea automático</p>\n\n");
console.log(
  "⚠️ document.write y writeln pueden borrar el DOM si se usan después de la carga\n\n"
);

// ===============================
// Copiado de texto (obsoleto)
// ===============================

// document.execCommand("copy"); // ⚠️ Obsoleto en muchos navegadores
console.log(
  "⚠️ execCommand('copy') está obsoleto. Usar Clipboard API moderna\n\n"
);

// ===============================
// Selección de elementos (obsoleto)
// ===============================

console.log("Todos los elementos del documento:\n", document.all, "\n\n");
console.log("Primer elemento:\n", document.all[0], "\n\n");
console.log("Elemento en posición 5:\n", document.all[5], "\n\n");
console.log("Elemento con id 'titulo':\n", document.all["titulo"], "\n\n");
console.log("⚠️ document.all es una colección no estándar y obsoleta\n\n");

// ===============================
// Codificación del documento (obsoleto)
// ===============================

console.log("document.charset:\n", document.charset, "\n\n");
console.log("⚠️ Usar document.characterSet en su lugar\n\n");

// ===============================
// Creación de atributos (obsoleto)
// ===============================

const atributoObsoleto = document.createAttribute("class");
console.log(
  "⚠️ Atributo creado con método obsoleto createAttribute:\n",
  atributoObsoleto,
  "\n\n"
);

// ===============================
// Selección de texto en IE (obsoleto)
// ===============================

console.log("⚠️ Selección obsoleta en IE:\n", document.selection, "\n\n");

// ===============================
// Captura y liberación de eventos (muy obsoleto)
// ===============================

// document.captureEvents(); // ⚠️ Obsoleto
// document.releaseEvents(); // ⚠️ Obsoleto
console.log(
  "⚠️ Métodos captureEvents y releaseEvents eran usados en Netscape y están obsoletos\n\n"
);

// ===============================
// Capas en Netscape (muy obsoleto)
// ===============================

// console.log("document.layers:\n", document.layers, "\n\n"); // ⚠️ Muy obsoleto

// ===============================
// Alternativas modernas recomendadas
// ===============================

console.log("✅ En lugar de document.write → usar createElement + appendChild");
console.log(
  "✅ En lugar de execCommand('copy') → usar navigator.clipboard.writeText()"
);
console.log("✅ En lugar de document.all → usar getElementsByTagName('*')");
console.log("✅ En lugar de document.createAttribute → usar setAttribute()");
console.log("✅ En lugar de document.selection → usar window.getSelection()");
console.log("✅ En lugar de document.charset → usar document.characterSet");

// ===============================
// Advertencia final
// ===============================

console.log(
  "⚠️ Todos los métodos anteriores están obsoletos. No deben usarse en entornos modernos ni en producción.\n\n"
);

// Añadir al final del script.js
console.log("\n\n🎓 GUÍA COMPLETA DEL DOM");
console.log("═══════════════════════════════════");
console.log("✅ Abre la consola (F12) para ver todos los ejemplos");
console.log("✅ Todos los scripts se han ejecutado correctamente");
console.log("✅ Revisa las secciones numeradas arriba");
