//==============================================================================
// 04 - ASYNC / AWAIT
//==============================================================================

console.log("=== ¿QUÉ ES ASYNC/AWAIT? ===\n");

/*
🎯 ASYNC/AWAIT = Sintaxis moderna para trabajar con promesas
Hace que el código asíncrono PAREZCA síncrono
Más limpio y fácil de leer que .then()

async → Marca una función como asíncrona (devuelve promesa)
await → Espera a que una promesa se resuelva (solo dentro de async)

ES2017 (ES8) - La mejor forma de manejar asincronía
*/

console.log("Evolución:");
console.log("  Callbacks → Promesas → Async/Await ⭐");

console.log("\n=== SINTAXIS BÁSICA ===\n");

// Función asíncrona simple
async function miFuncion() {
  return "Hola"; // Automáticamente envuelto en Promise.resolve()
}

// Una función async SIEMPRE devuelve una promesa
console.log("Función async devuelve:", miFuncion());

miFuncion().then((resultado) => {
  console.log("Resultado:", resultado);
});

console.log("\n=== AWAIT - ESPERAR PROMESAS ===\n");

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ejemploAwait() {
  console.log("  1. Inicio");

  await esperar(1000); // Espera 1 segundo
  console.log("  2. Después de 1 segundo");

  await esperar(1000); // Espera otro segundo
  console.log("  3. Después de 2 segundos");

  return "Completado";
}

console.log("Ejecutando función con await...");
ejemploAwait().then((resultado) => {
  console.log("  Resultado:", resultado);
});

console.log("\n=== COMPARACIÓN: PROMESAS vs ASYNC/AWAIT ===\n");

// Simulación de API
function obtenerUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nombre: "Ana" });
    }, 500);
  });
}

function obtenerPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, titulo: "Post 1" },
        { id: 2, titulo: "Post 2" },
      ]);
    }, 500);
  });
}

function obtenerComentarios(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Comentario 1", "Comentario 2"]);
    }, 500);
  });
}

// ❌ CON PROMESAS (.then)
console.log("CON PROMESAS:");
function conPromesas() {
  obtenerUsuario(1)
    .then((usuario) => {
      console.log("  Usuario:", usuario.nombre);
      return obtenerPosts(usuario.id);
    })
    .then((posts) => {
      console.log("  Posts:", posts.length);
      return obtenerComentarios(posts[0].id);
    })
    .then((comentarios) => {
      console.log("  Comentarios:", comentarios.length);
    })
    .catch((error) => {
      console.error("  Error:", error);
    });
}

conPromesas();

// ✅ CON ASYNC/AWAIT (más limpio)
console.log("\nCON ASYNC/AWAIT:");
async function conAsyncAwait() {
  try {
    const usuario = await obtenerUsuario(1);
    console.log("  Usuario:", usuario.nombre);

    const posts = await obtenerPosts(usuario.id);
    console.log("  Posts:", posts.length);

    const comentarios = await obtenerComentarios(posts[0].id);
    console.log("  Comentarios:", comentarios.length);
  } catch (error) {
    console.error("  Error:", error);
  }
}

conAsyncAwait();

console.log("\n=== MANEJO DE ERRORES CON TRY/CATCH ===\n");

async function funcionConError() {
  try {
    console.log("  Iniciando operación...");

    // Simulación de error
    const resultado = await Promise.reject("Algo salió mal");
    console.log("  Resultado:", resultado); // No se ejecuta
  } catch (error) {
    console.error("  ❌ Error capturado:", error);
  } finally {
    console.log("  🏁 Finally: Siempre se ejecuta");
  }
}

funcionConError();

console.log("\n=== AWAIT SOLO FUNCIONA DENTRO DE ASYNC ===\n");

// ❌ ERROR: await sin async
console.log("❌ Esto da error:");
console.log(`
  function normal() {
    const resultado = await promesa; // ❌ Error!
  }
`);

// ✅ CORRECTO: await dentro de async
console.log("✅ Esto funciona:");
console.log(`
  async function correcta() {
    const resultado = await promesa; // ✅ Correcto
  }
`);

console.log("\n=== EJECUCIÓN SECUENCIAL ===\n");

function tarea(nombre, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`  ✅ ${nombre} completada`);
      resolve(nombre);
    }, tiempo);
  });
}

// Ejecutar tareas una después de otra (SECUENCIAL)
async function ejecutarSecuencial() {
  console.log("Ejecutando secuencialmente (una después de otra):");

  const inicio = Date.now();

  await tarea("Tarea 1", 1000); // 1s
  await tarea("Tarea 2", 1000); // 1s
  await tarea("Tarea 3", 1000); // 1s

  const tiempo = Date.now() - inicio;
  console.log(`  ⏱️ Tiempo total: ${tiempo}ms (~3000ms)`);
}

ejecutarSecuencial();

console.log("\n=== EJECUCIÓN PARALELA ===\n");

// Ejecutar tareas al mismo tiempo (PARALELO)
async function ejecutarParalelo() {
  console.log("Ejecutando en paralelo (todas a la vez):");

  const inicio = Date.now();

  // Iniciar todas a la vez
  const promesa1 = tarea("Tarea A", 1000);
  const promesa2 = tarea("Tarea B", 1000);
  const promesa3 = tarea("Tarea C", 1000);

  // Esperar a que TODAS terminen
  await Promise.all([promesa1, promesa2, promesa3]);

  const tiempo = Date.now() - inicio;
  console.log(`  ⏱️ Tiempo total: ${tiempo}ms (~1000ms)`);
}

ejecutarParalelo();

console.log("\n=== AWAIT CON Promise.all() ===\n");

// La mejor forma de ejecutar múltiples promesas en paralelo
async function cargarDatos() {
  console.log("Cargando múltiples recursos en paralelo...");

  try {
    // Todas se ejecutan al mismo tiempo
    const [usuarios, posts, comentarios] = await Promise.all([
      obtenerUsuario(1),
      obtenerPosts(1),
      obtenerComentarios(1),
    ]);

    console.log("  ✅ Usuarios:", usuarios);
    console.log("  ✅ Posts:", posts);
    console.log("  ✅ Comentarios:", comentarios);
  } catch (error) {
    console.error("  ❌ Error:", error);
  }
}

cargarDatos();

console.log("\n=== AWAIT EN BUCLES ===\n");

// ❌ MAL: await en forEach (no funciona como esperas)
console.log("❌ MAL: forEach con await (no espera)");
async function malForEach() {
  const ids = [1, 2, 3];

  ids.forEach(async (id) => {
    const usuario = await obtenerUsuario(id);
    console.log("    Usuario:", usuario.id);
  });

  console.log("  Terminó (pero los usuarios aún no)");
}

malForEach();

// ✅ BIEN: for...of con await (espera correctamente)
console.log("\n✅ BIEN: for...of con await (espera):");
async function bienForOf() {
  const ids = [1, 2, 3];

  for (const id of ids) {
    const usuario = await obtenerUsuario(id);
    console.log(`    Usuario ${id} cargado`);
  }

  console.log("  ✅ Todos los usuarios cargados");
}

bienForOf();

// ✅ BIEN: map + Promise.all (paralelo)
console.log("\n✅ MEJOR: map + Promise.all (paralelo):");
async function mejorMap() {
  const ids = [1, 2, 3];

  const usuarios = await Promise.all(ids.map((id) => obtenerUsuario(id)));

  console.log("  ✅ Usuarios:", usuarios.length);
}

mejorMap();

console.log("\n=== ASYNC EN DIFERENTES CONTEXTOS ===\n");

// 1. Función async normal
async function funcionNormal() {
  return "resultado";
}

// 2. Arrow function async
const arrowAsync = async () => {
  return "resultado";
};

// 3. Método async en objeto
const objeto = {
  async metodo() {
    return "resultado";
  },
};

// 4. Método async en clase
class MiClase {
  async metodo() {
    return "resultado";
  }
}

console.log("Diferentes formas de usar async:");
console.log("  • async function nombre() {}");
console.log("  • const nombre = async () => {}");
console.log("  • objeto: { async metodo() {} }");
console.log("  • class: async metodo() {}");

console.log("\n=== ERRORES COMUNES ===\n");

console.log("❌ ERROR 1: Olvidar await");
console.log(`
  async function mal() {
    const datos = obtenerDatos(); // ❌ Devuelve promesa, no datos
    console.log(datos); // Promise { <pending> }
  }
  
  async function bien() {
    const datos = await obtenerDatos(); // ✅ Espera y obtiene datos
    console.log(datos); // Datos reales
  }
`);

console.log("\n❌ ERROR 2: await fuera de async");
console.log(`
  function mal() {
    const datos = await obtenerDatos(); // ❌ Error!
  }
  
  async function bien() {
    const datos = await obtenerDatos(); // ✅ Correcto
  }
`);

console.log("\n❌ ERROR 3: No manejar errores");
console.log(`
  async function mal() {
    const datos = await obtenerDatos(); // ❌ Si falla, crash
  }
  
  async function bien() {
    try {
      const datos = await obtenerDatos(); // ✅ Con try/catch
    } catch (error) {
      console.error(error);
    }
  }
`);

console.log("\n=== EJEMPLO PRÁCTICO: VALIDACIÓN DE FORMULARIO ===\n");

async function validarFormulario(datos) {
  try {
    console.log("  Validando formulario...");

    // Validar email (simulado)
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("  ✅ Email válido");

    // Verificar si usuario existe (simulado)
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("  ✅ Usuario disponible");

    // Guardar en BD (simulado)
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("  ✅ Datos guardados");

    return { exito: true, mensaje: "Registro completado" };
  } catch (error) {
    return { exito: false, mensaje: error.message };
  }
}

validarFormulario({ email: "test@test.com" }).then((resultado) => {
  console.log("  Resultado:", resultado);
});

console.log("\n=== TIMEOUT CON ASYNC/AWAIT ===\n");

function conTimeout(promesa, ms) {
  return Promise.race([
    promesa,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), ms)
    ),
  ]);
}

async function ejemploTimeout() {
  try {
    const resultado = await conTimeout(
      obtenerUsuario(1),
      100 // Timeout de 100ms
    );
    console.log("  ✅ Datos:", resultado);
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

ejemploTimeout();

console.log("\n=== TOP-LEVEL AWAIT (ES2022) ===\n");

/*
En módulos ES6, puedes usar await sin async en el nivel superior
*/

console.log("Top-level await (solo en módulos):");
console.log(`
  // archivo.mjs
  const datos = await fetch('/api/datos');
  console.log(datos);
`);

console.log("\n=== CUÁNDO USAR SECUENCIAL VS PARALELO ===\n");

console.log("🔄 SECUENCIAL (uno después de otro):");
console.log("  • Cuando el siguiente paso DEPENDE del anterior");
console.log("  • Obtener usuario → luego sus posts → luego comentarios");
console.log(`
  const usuario = await obtenerUsuario(1);
  const posts = await obtenerPosts(usuario.id); // Necesita usuario.id
`);

console.log("\n⚡ PARALELO (todos a la vez):");
console.log("  • Cuando las operaciones son INDEPENDIENTES");
console.log("  • Cargar usuario, configuración y estadísticas");
console.log(`
  const [usuario, config, stats] = await Promise.all([
    obtenerUsuario(1),
    obtenerConfig(),
    obtenerEstadisticas()
  ]);
`);

console.log("\n=== RESUMEN ===");
console.log("✅ async marca función como asíncrona");
console.log("✅ await espera promesa (solo en async)");
console.log("✅ Código más limpio que .then()");
console.log("✅ Use try/catch para manejar errores");
console.log("✅ Secuencial: await uno por uno");
console.log("✅ Paralelo: Promise.all() con await");
console.log("✅ for...of funciona con await, forEach NO");
console.log("✅ Siempre devuelve una promesa");
console.log("\n🎯 Siguiente: 05-fetch_api.js");
