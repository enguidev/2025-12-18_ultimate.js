//==============================================================================
// ASINCRONÍA EN JAVASCRIPT - RESUMEN Y GUÍA COMPLETA
//==============================================================================

/*
⚡ ¿QUÉ ES LA ASINCRONÍA?

JavaScript es de un SOLO HILO (single-threaded), pero puede ejecutar código
de forma NO BLOQUEANTE gracias a la asincronía.

🔄 SÍNCRONO: Las tareas se ejecutan una después de otra (bloquean)
⚡ ASÍNCRONO: Las tareas pueden ejecutarse "en paralelo" (no bloquean)

Ejemplo:
- Síncrono: Hacer café → esperar → tomar café (bloquea)
- Asíncrono: Poner café → mientras tanto hacer otras cosas → café listo
*/

//------------------------------------------------------------------------------
// 📚 CONTENIDO DE ESTA CARPETA
//------------------------------------------------------------------------------

/*
📄 00-resumen_asincronia.js (ESTE ARCHIVO)
   - Conceptos fundamentales
   - Event Loop explicado
   - Guía de decisión

📄 01-sincrono_vs_asincrono.js
   - Diferencias clave
   - Código bloqueante vs no bloqueante
   - Ejemplos prácticos

📄 02-callbacks.js
   - Funciones callback
   - Callback hell
   - Error-first callbacks

📄 03-promesas.js
   - new Promise()
   - .then() .catch() .finally()
   - Promise.all(), Promise.race()

📄 04-async_await.js
   - async function
   - await
   - Try/catch para errores

📄 05-fetch_api.js
   - Hacer peticiones HTTP
   - GET, POST, PUT, DELETE
   - Trabajar con JSON

📄 06-ejercicios_asincronia.js
   - 15 ejercicios prácticos
   - Casos de uso reales

📄 07-patrones_avanzados.js
   - Promise chaining
   - Parallel vs Sequential
   - Retry logic
   - Timeout y cancelación
*/

//------------------------------------------------------------------------------
// 🗺️ EVOLUCIÓN DE LA ASINCRONÍA EN JS
//------------------------------------------------------------------------------

console.log("=== EVOLUCIÓN DE LA ASINCRONÍA ===\n");

/*
1️⃣ CALLBACKS (ES5 - 2009)
   - La forma original
   - Problema: Callback Hell 🔥
   
2️⃣ PROMISES (ES6 - 2015)
   - Solución al Callback Hell
   - Mejor manejo de errores
   - Encadenamiento .then()
   
3️⃣ ASYNC/AWAIT (ES8 - 2017)
   - Sintaxis más limpia
   - Parece código síncrono
   - Manejo de errores con try/catch
*/

//------------------------------------------------------------------------------
// ⚙️ EVENT LOOP - EL CORAZÓN DE LA ASINCRONÍA
//------------------------------------------------------------------------------

console.log("=== EVENT LOOP ===\n");

/*
JavaScript ejecuta código en este orden:

1. CALL STACK (Pila de ejecución)
   - Funciones que se están ejecutando ahora
   - LIFO (Last In, First Out)

2. WEB APIs
   - setTimeout, fetch, eventos DOM
   - Se ejecutan "fuera" de JavaScript

3. TASK QUEUE (Cola de tareas)
   - Callbacks esperando a ejecutarse
   - setTimeout, eventos, etc.

4. MICROTASK QUEUE (Cola de microtareas)
   - Promesas .then(), .catch()
   - Tiene PRIORIDAD sobre Task Queue

5. EVENT LOOP
   - Vigila Call Stack
   - Si está vacío, toma tareas de las colas

ORDEN DE PRIORIDAD:
Call Stack → Microtasks (Promesas) → Tasks (setTimeout)
*/

// Ejemplo visual del Event Loop
console.log("1. Código síncrono");

setTimeout(() => {
  console.log("3. setTimeout (Task Queue)");
}, 0);

Promise.resolve().then(() => {
  console.log("2. Promise (Microtask Queue)");
});

console.log("1. Más código síncrono");

// Resultado:
// 1. Código síncrono
// 1. Más código síncrono
// 2. Promise (Microtask Queue)
// 3. setTimeout (Task Queue)

//------------------------------------------------------------------------------
// 📊 COMPARACIÓN: CALLBACKS vs PROMISES vs ASYNC/AWAIT
//------------------------------------------------------------------------------

console.log("\n=== COMPARACIÓN ===\n");

// 1️⃣ CON CALLBACKS (antiguo, no recomendado)
function conCallbacks() {
  obtenerUsuario(1, (error, usuario) => {
    if (error) {
      console.error(error);
      return;
    }
    obtenerPosts(usuario.id, (error, posts) => {
      if (error) {
        console.error(error);
        return;
      }
      obtenerComentarios(posts[0].id, (error, comentarios) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log(comentarios);
      });
    });
  });
}

// 2️⃣ CON PROMISES (mejor)
function conPromises() {
  obtenerUsuario(1)
    .then((usuario) => obtenerPosts(usuario.id))
    .then((posts) => obtenerComentarios(posts[0].id))
    .then((comentarios) => console.log(comentarios))
    .catch((error) => console.error(error));
}

// 3️⃣ CON ASYNC/AWAIT (mejor y más limpio) ⭐
async function conAsyncAwait() {
  try {
    const usuario = await obtenerUsuario(1);
    const posts = await obtenerPosts(usuario.id);
    const comentarios = await obtenerComentarios(posts[0].id);
    console.log(comentarios);
  } catch (error) {
    console.error(error);
  }
}

//------------------------------------------------------------------------------
// 🎯 GUÍA DE DECISIÓN
//------------------------------------------------------------------------------

console.log("\n=== ¿QUÉ USAR? ===\n");

const guia = `
📋 CUÁNDO USAR CADA UNO:

✅ ASYNC/AWAIT (RECOMENDADO)
   - Código nuevo
   - Lógica secuencial
   - Manejo de errores con try/catch
   - Más legible y mantenible
   
✅ PROMISES
   - Múltiples operaciones paralelas (Promise.all)
   - Ya tienes código con promesas
   - Necesitas encadenar operaciones
   
❌ CALLBACKS
   - Solo para APIs antiguas que lo requieran
   - Evitar en código nuevo (causa Callback Hell)

🎯 REGLA DE ORO:
   Usa ASYNC/AWAIT siempre que puedas
   Usa Promise.all() para operaciones en paralelo
`;

console.log(guia);

//------------------------------------------------------------------------------
// 📋 CHEAT SHEET
//------------------------------------------------------------------------------

console.log("\n=== CHEAT SHEET ===\n");

console.log("🔹 CREAR PROMESA:");
console.log(`
  new Promise((resolve, reject) => {
    if (exito) resolve(valor);
    else reject(error);
  });
`);

console.log("🔹 CONSUMIR PROMESA:");
console.log(`
  promesa
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error))
    .finally(() => console.log('Siempre se ejecuta'));
`);

console.log("🔹 ASYNC/AWAIT:");
console.log(`
  async function miFuncion() {
    try {
      const resultado = await promesa;
      console.log(resultado);
    } catch (error) {
      console.error(error);
    }
  }
`);

console.log("🔹 OPERACIONES PARALELAS:");
console.log(`
  const [res1, res2, res3] = await Promise.all([
    promesa1,
    promesa2,
    promesa3
  ]);
`);

console.log("🔹 FETCH API:");
console.log(`
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
`);

//------------------------------------------------------------------------------
// ⚠️ ERRORES COMUNES
//------------------------------------------------------------------------------

console.log("\n=== ERRORES COMUNES ===\n");

console.log("❌ ERROR 1: Olvidar async");
console.log(`
  // ❌ MAL
  function obtenerDatos() {
    const datos = await fetch(url); // Error: await solo en async
  }
  
  // ✅ BIEN
  async function obtenerDatos() {
    const datos = await fetch(url);
  }
`);

console.log("❌ ERROR 2: No manejar errores");
console.log(`
  // ❌ MAL
  async function obtenerDatos() {
    const datos = await fetch(url); // Si falla, crash
  }
  
  // ✅ BIEN
  async function obtenerDatos() {
    try {
      const datos = await fetch(url);
    } catch (error) {
      console.error('Error:', error);
    }
  }
`);

console.log("❌ ERROR 3: Await innecesario en secuencia");
console.log(`
  // ❌ MAL (secuencial, 6 segundos)
  const usuario = await obtenerUsuario(); // 2s
  const posts = await obtenerPosts();     // 2s
  const fotos = await obtenerFotos();     // 2s
  
  // ✅ BIEN (paralelo, 2 segundos)
  const [usuario, posts, fotos] = await Promise.all([
    obtenerUsuario(),
    obtenerPosts(),
    obtenerFotos()
  ]);
`);

console.log("❌ ERROR 4: Olvidar return en async");
console.log(`
  // ❌ MAL
  async function obtenerDatos() {
    await fetch(url); // Falta return
  }
  
  // ✅ BIEN
  async function obtenerDatos() {
    return await fetch(url);
  }
`);

//------------------------------------------------------------------------------
// 💡 CONCEPTOS CLAVE
//------------------------------------------------------------------------------

console.log("\n=== CONCEPTOS CLAVE ===\n");

const conceptos = {
  Síncrono: "Bloquea ejecución hasta terminar",
  Asíncrono: "No bloquea, continúa ejecutando",
  Callback: "Función que se ejecuta después",
  Promise: "Objeto que representa operación futura",
  async: "Marca función como asíncrona",
  await: "Espera resultado de promesa",
  resolve: "Promesa exitosa",
  reject: "Promesa fallida",
  "then()": "Ejecuta cuando promesa resuelve",
  "catch()": "Captura errores",
  "finally()": "Siempre se ejecuta al final",
  "Promise.all()": "Ejecuta promesas en paralelo",
  "Promise.race()": "Primera promesa que termine",
  "Event Loop": "Mecanismo de asincronía de JS",
};

console.table(conceptos);

//------------------------------------------------------------------------------
// 🚀 CASOS DE USO COMUNES
//------------------------------------------------------------------------------

console.log("\n=== CASOS DE USO ===\n");

console.log(`
📡 PETICIONES HTTP
   - Fetch API
   - Cargar datos de servidor
   - POST, GET, PUT, DELETE

⏱️ TEMPORIZADORES
   - setTimeout (ejecutar después)
   - setInterval (ejecutar repetidamente)

📁 ARCHIVOS
   - Leer archivos
   - Subir archivos
   - Procesar imágenes

🗄️ BASES DE DATOS
   - Consultas
   - Inserciones
   - Actualizaciones

🎮 EVENTOS
   - Click, scroll, input
   - WebSockets
   - Event listeners
`);

//------------------------------------------------------------------------------
// 📖 ORDEN DE ESTUDIO
//------------------------------------------------------------------------------

console.log("\n=== ORDEN DE ESTUDIO ===\n");

console.log("1. Básico:");
console.log("   00-resumen_asincronia.js (este archivo)");
console.log("   01-sincrono_vs_asincrono.js");
console.log("   02-callbacks.js");

console.log("\n2. Intermedio:");
console.log("   03-promesas.js");
console.log("   04-async_await.js");

console.log("\n3. Práctico:");
console.log("   05-fetch_api.js");
console.log("   06-ejercicios_asincronia.js");
console.log("   07-patrones_avanzados.js");

//------------------------------------------------------------------------------
// ✅ RESUMEN EJECUTIVO
//------------------------------------------------------------------------------

console.log("\n=== RESUMEN EJECUTIVO ===\n");
console.log("La asincronía permite ejecutar código sin bloquear.\n");
console.log("Conceptos clave:");
console.log("  • JavaScript es single-threaded pero non-blocking");
console.log("  • Event Loop gestiona la asincronía");
console.log("  • Callbacks → Promises → Async/Await (evolución)");
console.log("  • Async/Await es la forma moderna y recomendada");
console.log("  • Promise.all() para operaciones paralelas");
console.log("  • Siempre manejar errores con try/catch");
console.log("\n🎯 Siguiente paso: Abre 01-sincrono_vs_asincrono.js");

console.log("\n✅ Archivo 00-resumen_asincronia.js cargado");
