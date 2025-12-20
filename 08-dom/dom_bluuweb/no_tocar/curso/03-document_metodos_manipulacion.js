// ===============================
// Métodos para crear y modificar el DOM
// ===============================

const nuevoParrafo = document.createElement("p");
const texto = document.createTextNode(
  "Este párrafo fue creado con createTextNode"
);
nuevoParrafo.appendChild(texto);
document.body.appendChild(nuevoParrafo);
console.log("✅ Párrafo creado y añadido al body\n\n");

// Reemplazo de nodo
const reemplazo = document.createElement("h2");
reemplazo.textContent = "Título reemplazado";
const original = document.getElementById("titulo");
document.body.replaceChild(reemplazo, original);
console.log("✅ Nodo 'titulo' reemplazado por un h2\n\n");

// Eliminación de nodo
const eliminar = document.querySelector(".descripcion");
document.body.removeChild(eliminar);
console.log("✅ Primer párrafo con clase 'descripcion' eliminado\n\n");

// Fragmento de documento
const fragmento = document.createDocumentFragment();
const span = document.createElement("span");
span.textContent = "Texto dentro de un fragmento";
fragmento.appendChild(span);
document.body.appendChild(fragmento);
console.log("✅ Fragmento con un span insertado\n\n");

// Importación de nodo
const nodoImportado = document.importNode(span, true);
document.body.appendChild(nodoImportado);
console.log("✅ Nodo span importado y añadido al body\n\n");

// ===============================
// Inserción múltiple con DocumentFragment
// ===============================

const fragmentoMultiple = document.createDocumentFragment();

for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Elemento ${i} insertado con fragmento`;
  fragmentoMultiple.appendChild(li);
}

document.body.appendChild(fragmentoMultiple);
console.log("✅ Fragmento con múltiples elementos insertado\n\n");

// ===============================
// Adopción de nodo externo con adoptNode
// ===============================

const nodoExterno = document.createElement("div");
nodoExterno.textContent = "Nodo externo adoptado";

const nodoAdoptado = document.adoptNode(nodoExterno);
document.body.appendChild(nodoAdoptado);
console.log("✅ Nodo adoptado correctamente\n\n");

// ===============================
// Métodos de escritura directa (⚠️ obsoletos)
// ===============================

// ⚠️ document.write puede borrar el DOM si se usa después de la carga
// document.write("<p>Contenido escrito con document.write</p>");
// document.writeln("<p>Contenido con salto de línea</p>");
console.log(
  "⚠️ Métodos document.write y writeln están obsoletos y no deben usarse en producción\n\n"
);
