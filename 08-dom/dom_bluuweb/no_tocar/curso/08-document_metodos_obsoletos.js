// ===============================
// Métodos obsoletos del objeto document
// ⚠️ Este archivo es solo demostrativo. No usar estos métodos en producción.
// ===============================

// ===============================
// Escritura directa (obsoleto)
// ===============================

//document.write("<h2>Este contenido fue insertado con document.write</h2>\n\n");
// document.writeln("<p>Este párrafo tiene salto de línea automático</p>\n\n");
console.log(
  "⚠️ document.write y writeln pueden borrar el DOM si se usan después de la carga\n\n"
);

// ===============================
// Copiado de texto (obsoleto)
// ===============================

document.execCommand("copy"); // ⚠️ Obsoleto en muchos navegadores
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

document.captureEvents(); // ⚠️ Obsoleto
document.releaseEvents(); // ⚠️ Obsoleto
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
