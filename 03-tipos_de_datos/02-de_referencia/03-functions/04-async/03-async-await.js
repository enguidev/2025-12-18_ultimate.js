//--------------------------------------------------------------------------------------
// 🎯 ASYNC/AWAIT
//--------------------------------------------------------------------------------------
// Sintaxis que hace que el código asíncrono parezca síncrono

//--------------------------------------------------------------------------------------
// 1️⃣ SINTAXIS BÁSICA
//--------------------------------------------------------------------------------------

// Función async siempre retorna una promesa
async function saludar() {
  return "Hola"; // Automáticamente envuelto en Promise.resolve()
}

saludar().then((mensaje) => console.log(mensaje)); // "Hola"

// await solo puede usarse dentro de funciones async
async function esperar() {
  const resultado = await Promise.resolve("Esperado");
  console.log(resultado); // "Esperado"
}

esperar();

//--------------------------------------------------------------------------------------
// 2️⃣ COMPARACIÓN: Promesas vs Async/Await
//--------------------------------------------------------------------------------------

// Con promesas
function obtenerUsuarioPromesa(id) {
  return fetch(`/api/users/${id}`)
    .then((response) => response.json())
    .then((usuario) => {
      return fetch(`/api/posts/${usuario.id}`);
    })
    .then((response) => response.json())
    .then((posts) => {
      console.log(posts);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Con async/await (más legible)
async function obtenerUsuarioAsync(id) {
  try {
    const response1 = await fetch(`/api/users/${id}`);
    const usuario = await response1.json();

    const response2 = await fetch(`/api/posts/${usuario.id}`);
    const posts = await response2.json();

    console.log(posts);
  } catch (error) {
    console.error(error);
  }
}

//--------------------------------------------------------------------------------------
// 3️⃣ MANEJO DE ERRORES CON TRY/CATCH
//--------------------------------------------------------------------------------------

async function operacionConError() {
  try {
    const datos = await Promise.reject("Error");
    console.log(datos);
  } catch (error) {
    console.error("❌ Capturado:", error);
  } finally {
    console.log("Limpieza final");
  }
}

operacionConError();

//--------------------------------------------------------------------------------------
// 4️⃣ ASYNC/AWAIT CON OPERACIONES SÍNCRONAS
//--------------------------------------------------------------------------------------

function obtenerDatos(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nombre: `Usuario${id}` });
    }, 1000);
  });
}

async function procesarDatos() {
  console.log("Inicio");

  const usuario = await obtenerDatos(1);
  console.log("Usuario:", usuario);

  const posts = await obtenerDatos(usuario.id);
  console.log("Posts:", posts);

  console.log("Fin");
}

procesarDatos();

//--------------------------------------------------------------------------------------
// 5️⃣ EJECUTAR PROMESAS EN PARALELO
//--------------------------------------------------------------------------------------

// ❌ SECUENCIAL (lento - 3 segundos total)
async function secuencial() {
  const usuario1 = await obtenerDatos(1); // 1 seg
  const usuario2 = await obtenerDatos(2); // 1 seg
  const usuario3 = await obtenerDatos(3); // 1 seg
  return [usuario1, usuario2, usuario3];
}

// ✅ PARALELO (rápido - 1 segundo total)
async function paralelo() {
  const [usuario1, usuario2, usuario3] = await Promise.all([
    obtenerDatos(1),
    obtenerDatos(2),
    obtenerDatos(3),
  ]);
  return [usuario1, usuario2, usuario3];
}

paralelo().then((usuarios) => console.log(usuarios));

//--------------------------------------------------------------------------------------
// 6️⃣ AWAIT CON Promise.all(), race(), etc.
//--------------------------------------------------------------------------------------

async function ejemplosPromesas() {
  // Promise.all
  const resultados = await Promise.all([
    obtenerDatos(1),
    obtenerDatos(2),
    obtenerDatos(3),
  ]);
  console.log("Todos:", resultados);

  // Promise.race
  const primero = await Promise.race([obtenerDatos(1), obtenerDatos(2)]);
  console.log("Primero:", primero);

  // Promise.allSettled
  const todos = await Promise.allSettled([
    Promise.resolve(1),
    Promise.reject("Error"),
    Promise.resolve(3),
  ]);
  console.log("AllSettled:", todos);
}

//--------------------------------------------------------------------------------------
// 7️⃣ ASYNC/AWAIT EN DIFERENTES CONTEXTOS
//--------------------------------------------------------------------------------------

// Arrow function async
const obtenerAsync = async (id) => {
  return await obtenerDatos(id);
};

// Método async en objeto
const api = {
  async obtener(id) {
    return await obtenerDatos(id);
  },
};

// Método async en clase
class Usuario {
  async obtenerPerfil(id) {
    const datos = await obtenerDatos(id);
    this.datos = datos;
    return datos;
  }
}

//--------------------------------------------------------------------------------------
// 8️⃣ IIFE ASYNC (Immediately Invoked Function Expression)
//--------------------------------------------------------------------------------------

// Para usar await en el nivel superior (top-level)
(async () => {
  const resultado = await obtenerDatos(1);
  console.log("IIFE Async:", resultado);
})();

//--------------------------------------------------------------------------------------
// 9️⃣ TOP-LEVEL AWAIT (ES2022 - Solo en módulos)
//--------------------------------------------------------------------------------------

// En módulos ES6, puedes usar await sin async
// const datos = await obtenerDatos(1);
// console.log(datos);

// ⚠️ Solo funciona en módulos (type="module" en HTML o .mjs en Node)

//--------------------------------------------------------------------------------------
// 🔟 PATRONES COMUNES
//--------------------------------------------------------------------------------------

// Patrón 1: Retry con async/await
async function retry(fn, intentos) {
  for (let i = 0; i < intentos; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === intentos - 1) throw error;
      console.log(`Intento ${i + 1} falló, reintentando...`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

async function operacionInestable() {
  if (Math.random() > 0.7) {
    return "¡Éxito!";
  }
  throw new Error("Falló");
}

retry(operacionInestable, 3)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error("Fallo definitivo"));

// Patrón 2: Timeout
async function conTimeout(promesa, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), ms)
  );
  return Promise.race([promesa, timeout]);
}

// Patrón 3: Procesar array secuencialmente
async function procesarSecuencial(items) {
  const resultados = [];
  for (const item of items) {
    const resultado = await obtenerDatos(item);
    resultados.push(resultado);
  }
  return resultados;
}

// Patrón 4: Procesar array en paralelo
async function procesarParalelo(items) {
  return await Promise.all(items.map((item) => obtenerDatos(item)));
}

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ CASOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// Caso 1: Fetch API con async/await
async function obtenerUsuarioAPI(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const usuario = await response.json();
    return usuario;
  } catch (error) {
    console.error("Error obteniendo usuario:", error);
    throw error;
  }
}

// Caso 2: Múltiples llamadas dependientes
async function obtenerDatosCompletos(userId) {
  try {
    const usuario = await obtenerUsuarioAPI(userId);
    const posts = await fetch(`/api/posts?userId=${usuario.id}`).then((r) =>
      r.json()
    );
    const comentarios = await fetch(`/api/comments?postId=${posts[0].id}`).then(
      (r) => r.json()
    );

    return {
      usuario,
      posts,
      comentarios,
    };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

// Caso 3: Procesar batch con límite de concurrencia
async function procesarConLimite(items, limite, procesador) {
  const resultados = [];

  for (let i = 0; i < items.length; i += limite) {
    const batch = items.slice(i, i + limite);
    const batchResultados = await Promise.all(
      batch.map((item) => procesador(item))
    );
    resultados.push(...batchResultados);
  }

  return resultados;
}

// Caso 4: Cargar recursos progresivamente
async function cargarRecursos(recursos) {
  const resultados = {};

  for (const [nombre, url] of Object.entries(recursos)) {
    console.log(`Cargando ${nombre}...`);
    resultados[nombre] = await fetch(url).then((r) => r.json());
    console.log(`${nombre} cargado ✓`);
  }

  return resultados;
}

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ ERRORES COMUNES
//--------------------------------------------------------------------------------------

// ❌ Error 1: Olvidar await
async function mal1() {
  const datos = obtenerDatos(1); // ¡Devuelve Promise!
  console.log(datos); // [object Promise]
}

// ✅ Correcto
async function bien1() {
  const datos = await obtenerDatos(1);
  console.log(datos); // { id: 1, nombre: 'Usuario1' }
}

// ❌ Error 2: Usar await en función no-async
function mal2() {
  // const datos = await obtenerDatos(1); // SyntaxError
}

// ✅ Correcto
async function bien2() {
  const datos = await obtenerDatos(1);
}

// ❌ Error 3: await en bucle (secuencial no deseado)
async function mal3(ids) {
  const usuarios = [];
  for (const id of ids) {
    usuarios.push(await obtenerDatos(id)); // Uno por uno (lento)
  }
  return usuarios;
}

// ✅ Correcto (paralelo)
async function bien3(ids) {
  return await Promise.all(ids.map((id) => obtenerDatos(id)));
}

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:

1. Usa async/await para código asíncrono legible
2. Siempre usa try/catch para manejo de errores
3. Ejecuta operaciones independientes en paralelo (Promise.all)
4. Usa await con Promise.all, race, etc.
5. Retorna promesas explícitamente cuando sea apropiado

❌ EVITAR:

1. Olvidar await (promesa no resuelta)
2. await innecesario en returns (return await)
3. No manejar errores (try/catch)
4. await en bucles cuando se puede paralelizar
5. Mezclar promesas y async/await sin necesidad
*/

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                  ASYNC/AWAIT - RESUMEN                    ║
╠═══════════════════════════════════════════════════════════╣
║ • Sintaxis moderna para código asíncrono                  ║
║ • async función siempre retorna promesa                   ║
║ • await pausa ejecución hasta resolver promesa            ║
║ • try/catch para manejo de errores                        ║
║ • Promise.all() para operaciones paralelas                ║
║ • Más legible que promesas encadenadas                    ║
╚═══════════════════════════════════════════════════════════╝
`);
