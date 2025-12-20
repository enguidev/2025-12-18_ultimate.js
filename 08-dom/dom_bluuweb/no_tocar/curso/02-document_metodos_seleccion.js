// Anteriormente se usaba document.all (ver en 08-document_metodos_obsoletos.js)

// ===============================
// Métodos de selección de elementos
// ===============================

console.log("=".repeat(60));
console.log("MÉTODOS CLÁSICOS");
console.log("=".repeat(60));

// ==========================================
// 1. getElementById() - Por ID (devuelve UN elemento)
// ==========================================
console.log("\n1. getElementById():");
// Muestra el elemento por su id (titulo)
// NO lleva # delante
// Devuelve UN SOLO elemento o null
console.log("Elemento:", document.getElementById("titulo"));
// Muestra el contenido de texto del elemento por su id (titulo)
console.log(
  "Su contenido de texto:",
  document.getElementById("titulo").textContent
);

// ==========================================
// 2. getElementsByClassName() - Por CLASE (devuelve HTMLCollection)
// ==========================================
console.log("\n2. getElementsByClassName():");
// Muestra todos los elementos por su clase (descripcion)
// NO lleva punto delante
// Devuelve HTMLCollection (live - se actualiza automáticamente)
// Para múltiples clases: "text-danger text-warning"
console.log(
  "Todos los elementos:",
  document.getElementsByClassName("descripcion")
);

// ⭐ PRIMER ELEMENTO por clase
console.log(
  "PRIMER elemento:",
  document.getElementsByClassName("descripcion")[0]
);

// Buscar dentro de un elemento específico
const container = document.getElementById("miContainer");
const dentroDel = container.getElementsByClassName("text-danger");
console.log("Solo dentro del container:", dentroDel);

// ==========================================
// 3. getElementsByTagName() - Por ETIQUETA (devuelve HTMLCollection)
// ==========================================
console.log("\n3. getElementsByTagName():");
// Muestra los elementos por su etiqueta (p)
console.log("Todos los <p>:", document.getElementsByTagName("p"));

// ⭐ PRIMER ELEMENTO por etiqueta
console.log("PRIMER <p>:", document.getElementsByTagName("p")[0]);

// Si necesito todos los elementos
console.log("Todos los elementos:", document.getElementsByTagName("*"));

// ==========================================
// 4. getElementsByName() - Por atributo NAME (devuelve NodeList)
// ==========================================
console.log("\n4. getElementsByName():");
// Uso principal: Formularios (inputs, selects, textareas)
const porName = document.getElementsByName("parrafoImportante");
console.log("Todos con name='parrafoImportante':", porName);

// ⭐ PRIMER ELEMENTO por name
console.log(
  "PRIMER elemento:",
  document.getElementsByName("parrafoImportante")[0]
);

// Útil para inputs de formularios
const inputsNombre = document.getElementsByName("nombre");
console.log("Inputs con name='nombre':", inputsNombre);

console.log("\n" + "=".repeat(60));
console.log("MÉTODOS MODERNOS (más usados hoy)");
console.log("=".repeat(60));

// ==========================================
// 5. querySelector() - Primer elemento que coincida (devuelve UN elemento)
// ==========================================
console.log("\n5. querySelector():");

// Por clase
const q1 = document.querySelector(".text-danger");
console.log("Primer .text-danger:", q1);

// Por ID
const q2 = document.querySelector("#miContainer");
console.log("Por ID:", q2);

// Por etiqueta
const q3 = document.querySelector("p");
console.log("Primer <p>:", q3);

/* Selector complejo (primer elemento con clase .text-danger dentro de otro elemento
con clase .container)
*/
const q4 = document.querySelector(".container .text-danger");
console.log("Primer .text-danger en .container:", q4);

// Por atributo
const q5 = document.querySelector("[data-tipo='contenedor']");
console.log("Por atributo:", q5);

// Dentro de un elemento específico
const container2 = document.getElementById("miContainer");
const q6 = container2.querySelector(".text-danger");
console.log("Dentro de container:", q6);

// ==========================================
// 6. querySelectorAll() - TODOS los elementos (devuelve NodeList)
// ==========================================
console.log("\n6. querySelectorAll():");

// Por clase
const qAll1 = document.querySelectorAll(".text-danger");
console.log("Todos los .text-danger:", qAll1);

// Por etiqueta
const qAll2 = document.querySelectorAll("p");
console.log("Todos los <p>:", qAll2);

// Múltiples selectores (con coma)
const qAll3 = document.querySelectorAll(".text-danger, .text-warning");
console.log("Con .text-danger O .text-warning:", qAll3);

// Selector complejo
const qAll4 = document.querySelectorAll("div:not(.container) .text-danger");
console.log("En divs pero NO en .container:", qAll4);

// Por atributo
const qAll5 = document.querySelectorAll("[class*='text']");
console.log("Clases que contienen 'text':", qAll5);

console.log("\n" + "=".repeat(60));
console.log("NAVEGACIÓN POR EL DOM (relaciones)");
console.log("=".repeat(60));

// ==========================================
// 7. Elementos padre/hijo/hermanos
// ==========================================
console.log("\n7. Navegación DOM:");

const elemento = document.querySelector(".primero");

// Padre directo
console.log("Padre:", elemento.parentElement);
console.log("Padre (node):", elemento.parentNode);

// Hijos
console.log("Todos los hijos:", container.children); // HTMLCollection
console.log("Primer hijo:", container.firstElementChild);
console.log("Último hijo:", container.lastElementChild);
console.log("Hijos (nodes):", container.childNodes); // Incluye textos

// Hermanos
console.log("Hermano siguiente:", elemento.nextElementSibling);
console.log("Hermano anterior:", elemento.previousElementSibling);

// Ancestro más cercano que coincida
console.log("Ancestro .container:", elemento.closest(".container"));
console.log("Ancestro div:", elemento.closest("div"));

console.log("\n" + "=".repeat(60));
console.log("SELECTORES AVANZADOS");
console.log("=".repeat(60));

// Muestra todos los elementos con la clase .texto1 que esté dentro de otro elemento con clase .container
console.log("\nElementos .texto1 dentro de .container:");
console.log(document.querySelectorAll(".container .texto1"));

// Muestra todos los elementos con la clase .texto1 que no estén dentro de otro elemento con clase .container
// Hay varias formas:

/*1. Usando el selector :not() (la más elegante)
  El selector :not() excluye elementos que coincidan con el selector que le pases dentro
*/
console.log("\nForma 1 con :not():");
const elementos = document.querySelectorAll(
  ".text-danger:not(.container .text-danger)"
);
console.log(elementos); // Solo los de fuera

/*2. Seleccionar todos y filtrar:
  closest() busca el ancestro más cercano que coincida con el selector, así que si devuelve null significa que 
  el elemento NO está dentro de .container
*/
console.log("\nForma 2 con filter + closest():");
const todosLosElementos = document.querySelectorAll(".text-danger");
const elementosFuera = Array.from(todosLosElementos).filter((elemento) => {
  return !elemento.closest(".container");
});
console.log(elementosFuera);

console.log("\n" + "=".repeat(60));
console.log("SELECTORES ESPECIALIZADOS");
console.log("=".repeat(60));

// ==========================================
// 8. Formularios
// ==========================================
console.log("\n8. Formularios:");

const form = document.getElementById("miFormulario");

// Acceder por índice
console.log("Primer input:", form[0]);

// Acceder por name
console.log("Input nombre:", form.nombre);
console.log("Input email:", form.email);

// Todos los inputs
const inputs = form.querySelectorAll("input");
console.log("Todos los inputs:", inputs);

// Por tipo
const textInputs = form.querySelectorAll("input[type='text']");
console.log("Inputs tipo text:", textInputs);

// Elementos del formulario
console.log("Todos los elementos:", form.elements);

// ==========================================
// 9. matches() - Comprobar si un elemento coincide
// ==========================================
console.log("\n9. matches() - Verificar selector:");

const parrafo = document.querySelector(".primero");
console.log("¿Tiene clase .primero?", parrafo.matches(".primero"));
console.log("¿Tiene clase .text-danger?", parrafo.matches(".text-danger"));
console.log("¿Es un <p>?", parrafo.matches("p"));
console.log("¿Está en .container?", parrafo.matches(".container *"));

console.log("\n" + "=".repeat(60));
console.log("CONVERSIONES Y UTILIDADES");
console.log("=".repeat(60));

// ==========================================
// 10. Convertir colecciones a Arrays
// ==========================================
console.log("\n10. Conversión a Array:");

const htmlCollection = document.getElementsByClassName("text-danger");

// Opción 1: Array.from()
const array1 = Array.from(htmlCollection);
console.log("Con Array.from():", array1);

// Opción 2: Spread operator
const array2 = [...htmlCollection];
console.log("Con spread (...):", array2);

// Opción 3: Array.prototype.slice
const array3 = Array.prototype.slice.call(htmlCollection);
console.log("Con slice.call():", array3);

// Ahora puedes usar métodos de array
array1.forEach((el) => console.log("Texto:", el.textContent));
const filtrados = array1.filter((el) => el.classList.contains("text-warning"));
console.log("Filtrados:", filtrados);

console.log("\n" + "=".repeat(60));
console.log("DIFERENCIAS IMPORTANTES");
console.log("=".repeat(60));

// ==========================================
// 11. HTMLCollection vs NodeList
// ==========================================
console.log("\n11. HTMLCollection vs NodeList:");

const htmlCol = document.getElementsByClassName("text-danger");
const nodeList = document.querySelectorAll(".text-danger");

console.log("HTMLCollection:", htmlCol);
console.log("NodeList:", nodeList);

// HTMLCollection es "live" (se actualiza automáticamente)
// NodeList de querySelectorAll es "static" (no se actualiza)

console.log("HTMLCollection tiene forEach:", typeof htmlCol.forEach);
console.log("NodeList tiene forEach:", typeof nodeList.forEach);

// NodeList tiene forEach, HTMLCollection NO
nodeList.forEach((el) => console.log(el));

console.log("\n" + "=".repeat(60));
console.log("RESUMEN DE CUÁNDO USAR CADA UNO");
console.log("=".repeat(60));

console.log(`
MÉTODOS CLÁSICOS:
  getElementById()           → Un elemento por ID (rápido)
  getElementsByClassName()   → Varios por clase (live collection)
                              → Primer elemento: [0]
  getElementsByTagName()     → Varios por etiqueta (live collection)
                              → Primer elemento: [0]
  getElementsByName()        → Por atributo name (formularios)
                              → Primer elemento: [0]

MÉTODOS MODERNOS:
  querySelector()            → Primer elemento (selector CSS) ⭐ RECOMENDADO
  querySelectorAll()         → Todos los elementos (selector CSS)

NOTAS:
  → querySelector/All son los MÁS VERSÁTILES y RECOMENDADOS
  → getElementById es el MÁS RÁPIDO para un elemento
  → getElementsBy* devuelven colecciones "live" (se actualizan)
  → querySelectorAll devuelve NodeList "static" (no se actualiza)
  → Para obtener el primer elemento con métodos clásicos: usar [0]
  → Para obtener el primer elemento con métodos modernos: usar querySelector()
`);
