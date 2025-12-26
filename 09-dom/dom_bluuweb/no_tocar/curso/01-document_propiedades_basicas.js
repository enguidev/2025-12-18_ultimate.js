// ===============================
// Propiedades básicas del documento
// ===============================

console.log("Título de la página:\n", document.title, "\n\n");
console.log("Dominio:\n", document.domain, "\n\n");
console.log("URL:\n", document.URL, "\n\n");
console.log("Mas detallado que URL:\n", document.location.href, "\n\n");
console.log("URL de la página anterior:\n", document.referrer, "\n\n");
console.log("Codificación de caracteres:\n", document.characterSet, "\n\n");
console.log("Tipo de contenido:\n", document.contentType, "\n\n");
console.log(
  "Fecha última modificación del html:\n",
  document.lastModified,
  "\n\n"
);

// Información adicional útil
console.log(
  "Compatibilidad del modo de renderizado:\n",
  document.compatMode,
  "\n\n"
);
console.log("Modo de diseño del documento:\n", document.designMode, "\n\n");
console.log("Cookies del documento:\n", document.cookie, "\n\n");
