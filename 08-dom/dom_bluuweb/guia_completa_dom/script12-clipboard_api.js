// ============================================
// SECCIÓN 18: CLIPBOARD API (NAVIGATOR)
// ============================================

console.log("\n\n" + "=".repeat(80));
console.log("08 - CLIPBOARD API (navigator.clipboard)");
console.log("=".repeat(80) + "\n");

// ------------------------------------------
// INTRODUCCIÓN A CLIPBOARD API
// ------------------------------------------

console.log("INTRODUCCIÓN:\n");

// navigator.clipboard es la API MODERNA para trabajar con el portapapeles
// Reemplaza al obsoleto document.execCommand("copy")

// Características:
// ✓ Basada en Promesas (async/await)
// ✓ Más segura (requiere permisos)
// ✓ Solo funciona en contextos seguros (HTTPS o localhost)
// ✓ Requiere interacción del usuario (clic, input, etc.)

console.log("✅ Clipboard API disponible:", !!navigator.clipboard);

// ------------------------------------------
// COPIAR TEXTO AL PORTAPAPELES
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("COPIAR TEXTO");
console.log("=".repeat(60) + "\n");

// writeText(texto) - Copia texto al portapapeles
// Devuelve una Promise que se resuelve cuando la copia es exitosa

// Forma 1: Con .then() y .catch()
navigator.clipboard
  .writeText("Texto copiado con Clipboard API")
  .then(() => {
    console.log("✅ Texto copiado correctamente");
  })
  .catch((err) => {
    console.error("❌ Error al copiar el texto:", err);
  });

// Forma 2: Con async/await (más moderna y legible)
async function copiarTexto(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    console.log("✅ Texto copiado:", texto);
  } catch (err) {
    console.error("❌ Error al copiar:", err);
  }
}

// Ejemplo de uso:
// copiarTexto("Hola mundo");

console.log("📋 Función copiarTexto() definida");

// ------------------------------------------
// LEER TEXTO DEL PORTAPAPELES
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("LEER TEXTO");
console.log("=".repeat(60) + "\n");

// readText() - Lee el texto del portapapeles
// Devuelve una Promise que se resuelve con el texto

// Forma 1: Con .then() y .catch()
navigator.clipboard
  .readText()
  .then((texto) => {
    console.log("📋 Texto leído del portapapeles:", texto);
  })
  .catch((err) => {
    console.error("❌ Error al leer el portapapeles:", err);
  });

// Forma 2: Con async/await
async function leerPortapapeles() {
  try {
    const texto = await navigator.clipboard.readText();
    console.log("📋 Texto en el portapapeles:", texto);
    return texto;
  } catch (err) {
    console.error("❌ Error al leer:", err);
    return null;
  }
}

// Ejemplo de uso:
// const contenido = await leerPortapapeles();

console.log("📋 Función leerPortapapeles() definida");

// ------------------------------------------
// COPIAR CONTENIDO RICO (HTML, IMÁGENES)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("COPIAR CONTENIDO RICO");
console.log("=".repeat(60) + "\n");

// write(data) - Copia contenido rico (HTML, imágenes, etc.)
// Requiere un array de ClipboardItem

// Ejemplo: Copiar HTML y texto plano al mismo tiempo
async function copiarHTML(html, textoPlano) {
  try {
    // Crear blobs para cada tipo de contenido
    const htmlBlob = new Blob([html], { type: "text/html" });
    const textBlob = new Blob([textoPlano], { type: "text/plain" });

    // Crear ClipboardItem con ambos formatos
    const item = new ClipboardItem({
      "text/html": htmlBlob,
      "text/plain": textBlob,
    });

    // Copiar al portapapeles
    await navigator.clipboard.write([item]);
    console.log("✅ HTML copiado correctamente");
  } catch (err) {
    console.error("❌ Error al copiar HTML:", err);
  }
}

// Ejemplo de uso:
// copiarHTML("<b>Texto en negrita</b>", "Texto en negrita");

console.log("📋 Función copiarHTML() definida");

// ------------------------------------------
// LEER CONTENIDO RICO
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("LEER CONTENIDO RICO");
console.log("=".repeat(60) + "\n");

// read() - Lee contenido rico del portapapeles
// Devuelve un array de ClipboardItem

async function leerContenidoRico() {
  try {
    const items = await navigator.clipboard.read();

    for (const item of items) {
      console.log("📦 Tipos disponibles:", item.types);

      // Leer texto plano si está disponible
      if (item.types.includes("text/plain")) {
        const blob = await item.getType("text/plain");
        const texto = await blob.text();
        console.log("  📋 Texto plano:", texto);
      }

      // Leer HTML si está disponible
      if (item.types.includes("text/html")) {
        const blob = await item.getType("text/html");
        const html = await blob.text();
        console.log("  📋 HTML:", html);
      }

      // Leer imagen si está disponible
      if (item.types.includes("image/png")) {
        const blob = await item.getType("image/png");
        console.log("  🖼️ Imagen PNG disponible");
        // Aquí podrías crear una URL del blob: URL.createObjectURL(blob)
      }
    }
  } catch (err) {
    console.error("❌ Error al leer contenido rico:", err);
  }
}

// Ejemplo de uso:
// await leerContenidoRico();

console.log("📋 Función leerContenidoRico() definida");

// ------------------------------------------
// EJEMPLO PRÁCTICO: BOTÓN COPIAR
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("EJEMPLO PRÁCTICO");
console.log("=".repeat(60) + "\n");

// Función para crear un botón que copia texto
function crearBotonCopiar(texto, textoBoton = "Copiar") {
  const boton = document.createElement("button");
  boton.textContent = textoBoton;
  boton.classList.add("btn");

  boton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(texto);
      boton.textContent = "✅ Copiado!";

      // Restaurar texto del botón después de 2 segundos
      setTimeout(() => {
        boton.textContent = textoBoton;
      }, 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
      boton.textContent = "❌ Error";
    }
  });

  return boton;
}

// Ejemplo de uso:
// const boton = crearBotonCopiar("Texto a copiar", "Copiar código");
// document.body.appendChild(boton);

console.log("📋 Función crearBotonCopiar() definida");

// ------------------------------------------
// REQUISITOS Y LIMITACIONES
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("REQUISITOS Y LIMITACIONES");
console.log("=".repeat(60) + "\n");

console.log(`
⚠️ REQUISITOS IMPORTANTES:

1. CONTEXTO SEGURO (HTTPS o localhost)
   ❌ No funciona en HTTP (excepto localhost)
   ✅ Funciona en HTTPS, localhost, file://

2. INTERACCIÓN DEL USUARIO
   ❌ No funciona si se ejecuta automáticamente al cargar la página
   ✅ Funciona dentro de eventos (click, input, keydown, etc.)

3. PERMISOS DEL NAVEGADOR
   - writeText() generalmente NO requiere permisos
   - readText() SÍ requiere permisos (el navegador preguntará)
   - write() y read() pueden requerir permisos

4. COMPATIBILIDAD
   - Navegadores modernos: ✅ Soportado
   - IE 11 y anteriores: ❌ NO soportado
   - Safari < 13.1: ❌ NO soportado

VERIFICAR SOPORTE:
  if (navigator.clipboard) {
    // Clipboard API disponible
  } else {
    // Usar fallback (execCommand o input temporal)
  }
`);

// ------------------------------------------
// MÉTODO OBSOLETO (NO USAR)
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("MÉTODO OBSOLETO");
console.log("=".repeat(60) + "\n");

console.log(`
⚠️ MÉTODO OBSOLETO: document.execCommand("copy")

Este método está OBSOLETO y NO debe usarse:
  ❌ document.execCommand("copy");
  ❌ document.execCommand("cut");
  ❌ document.execCommand("paste");

Problemas:
  - Sintaxis obsoleta y no intuitiva
  - No funciona bien en todos los navegadores
  - No tiene soporte para contenido rico
  - Puede ser bloqueado por navegadores modernos

Usar en su lugar:
  ✅ navigator.clipboard.writeText()
  ✅ navigator.clipboard.readText()
  ✅ navigator.clipboard.write()
  ✅ navigator.clipboard.read()
`);

// ------------------------------------------
// RESUMEN
// ------------------------------------------

console.log("\n" + "=".repeat(60));
console.log("RESUMEN");
console.log("=".repeat(60) + "\n");

console.log(`
MÉTODOS PRINCIPALES:

writeText(texto)
  → Copia texto al portapapeles
  → Uso: await navigator.clipboard.writeText("Hola");

readText()
  → Lee texto del portapapeles
  → Uso: const texto = await navigator.clipboard.readText();

write(items)
  → Copia contenido rico (HTML, imágenes)
  → Uso: await navigator.clipboard.write([clipboardItem]);

read()
  → Lee contenido rico del portapapeles
  → Uso: const items = await navigator.clipboard.read();

CASOS DE USO COMUNES:

✓ Botón "Copiar código" en tutoriales
✓ Compartir enlaces/URLs
✓ Copiar contenido de tablas
✓ Copiar resultados de cálculos
✓ Copiar texto seleccionado
✓ Copiar imágenes/capturas

MEJORES PRÁCTICAS:

1. Siempre usar try/catch o .catch()
2. Dar feedback al usuario (mensaje de éxito/error)
3. Verificar soporte antes de usar
4. Usar dentro de eventos de usuario
5. Considerar fallback para navegadores antiguos
`);
