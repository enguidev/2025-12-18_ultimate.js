//--------------------------------------------------------------------------------------
// 🎯 PROMESAS (Promises)
//--------------------------------------------------------------------------------------
// Una Promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca

//--------------------------------------------------------------------------------------
// 1️⃣ CREAR UNA PROMESA
//--------------------------------------------------------------------------------------

const promesa = new Promise((resolve, reject) => {
  // Operación asíncrona
  const exito = true;

  if (exito) {
    resolve("¡Éxito!"); // Promesa cumplida
  } else {
    reject("Error"); // Promesa rechazada
  }
});

// Estados de una promesa:
// - pending: inicial, ni cumplida ni rechazada
// - fulfilled: operación completada exitosamente
// - rejected: operación falló

//--------------------------------------------------------------------------------------
// 2️⃣ CONSUMIR PROMESAS CON .then()
//--------------------------------------------------------------------------------------

promesa
  .then((resultado) => {
    console.log("✅", resultado); // "¡Éxito!"
  })
  .catch((error) => {
    console.error("❌", error);
  })
  .finally(() => {
    console.log("Operación finalizada");
  });

//--------------------------------------------------------------------------------------
// 3️⃣ EJEMPLO PRÁCTICO: Simular petición HTTP
//--------------------------------------------------------------------------------------

function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({
          id: id,
          nombre: `Usuario${id}`,
          email: `user${id}@mail.com`,
        });
      } else {
        reject(new Error("ID inválido"));
      }
    }, 1000);
  });
}

obtenerUsuario(1)
  .then((usuario) => {
    console.log("Usuario:", usuario);
    return usuario.id; // Pasa al siguiente then
  })
  .then((id) => {
    console.log("ID:", id);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

//--------------------------------------------------------------------------------------
// 4️⃣ ENCADENAMIENTO DE PROMESAS
//--------------------------------------------------------------------------------------

function obtenerUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, nombre: `Usuario${id}` }), 1000);
  });
}

function obtenerPosts(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, titulo: "Post 1" },
          { id: 2, titulo: "Post 2" },
        ]),
      1000
    );
  });
}

function obtenerComentarios(postId) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, texto: "Comentario 1" },
          { id: 2, texto: "Comentario 2" },
        ]),
      1000
    );
  });
}

// Encadenamiento limpio (no callback hell)
obtenerUsuario(1)
  .then((usuario) => {
    console.log("Usuario:", usuario);
    return obtenerPosts(usuario.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return obtenerComentarios(posts[0].id);
  })
  .then((comentarios) => {
    console.log("Comentarios:", comentarios);
  })
  .catch((error) => {
    console.error("Error en algún paso:", error);
  });

//--------------------------------------------------------------------------------------
// 5️⃣ Promise.all() - Ejecutar en paralelo
//--------------------------------------------------------------------------------------

const promesa1 = Promise.resolve(3);
const promesa2 = new Promise((resolve) => setTimeout(() => resolve(42), 1000));
const promesa3 = Promise.resolve("Hola");

Promise.all([promesa1, promesa2, promesa3]).then((resultados) => {
  console.log(resultados); // [3, 42, "Hola"]
});

// Si UNA falla, todas fallan
const conError = Promise.all([
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve(3),
]);

conError.catch((error) => {
  console.error("Falló:", error); // "Error"
});

//--------------------------------------------------------------------------------------
// 6️⃣ Promise.allSettled() - Esperar todas sin importar el resultado
//--------------------------------------------------------------------------------------

Promise.allSettled([
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve(3),
]).then((resultados) => {
  console.log(resultados);
  // [
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'rejected', reason: 'Error' },
  //   { status: 'fulfilled', value: 3 }
  // ]
});

//--------------------------------------------------------------------------------------
// 7️⃣ Promise.race() - La primera que termine
//--------------------------------------------------------------------------------------

const lenta = new Promise((resolve) =>
  setTimeout(() => resolve("Lenta"), 2000)
);
const rapida = new Promise((resolve) =>
  setTimeout(() => resolve("Rápida"), 500)
);

Promise.race([lenta, rapida]).then((resultado) => {
  console.log(resultado); // "Rápida"
});

//--------------------------------------------------------------------------------------
// 8️⃣ Promise.any() - La primera que se cumpla
//--------------------------------------------------------------------------------------

Promise.any([
  Promise.reject("Error 1"),
  Promise.resolve("Éxito"),
  Promise.reject("Error 2"),
]).then((resultado) => {
  console.log(resultado); // "Éxito"
});

// Si TODAS fallan, rechaza con AggregateError
Promise.any([Promise.reject("Error 1"), Promise.reject("Error 2")]).catch(
  (error) => {
    console.log(error.errors); // ["Error 1", "Error 2"]
  }
);

//--------------------------------------------------------------------------------------
// 9️⃣ MANEJO DE ERRORES
//--------------------------------------------------------------------------------------

// .catch() captura errores de cualquier .then() anterior
obtenerUsuario(-1)
  .then((usuario) => {
    console.log(usuario.nombre);
    return obtenerPosts(usuario.id);
  })
  .then((posts) => {
    // No se ejecuta si hay error antes
  })
  .catch((error) => {
    console.error("Error capturado:", error.message);
  })
  .finally(() => {
    console.log("Limpieza final");
  });

// Capturar error en .then()
obtenerUsuario(1).then(
  (usuario) => console.log(usuario), // onFulfilled
  (error) => console.error(error) // onRejected
);

//--------------------------------------------------------------------------------------
// 🔟 CREAR PROMESAS RESUELTAS/RECHAZADAS
//--------------------------------------------------------------------------------------

// Promesa ya resuelta
const resuelta = Promise.resolve(42);
resuelta.then((valor) => console.log(valor)); // 42

// Promesa ya rechazada
const rechazada = Promise.reject("Error");
rechazada.catch((error) => console.error(error));

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ PROMISIFICAR CALLBACKS
//--------------------------------------------------------------------------------------

// Función con callback tradicional
function leerArchivoCallback(ruta, callback) {
  setTimeout(() => {
    const error = null;
    const datos = "Contenido del archivo";
    callback(error, datos);
  }, 1000);
}

// Convertir a promesa
function leerArchivo(ruta) {
  return new Promise((resolve, reject) => {
    leerArchivoCallback(ruta, (error, datos) => {
      if (error) {
        reject(error);
      } else {
        resolve(datos);
      }
    });
  });
}

leerArchivo("archivo.txt").then((datos) => console.log(datos));

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ CASOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// Caso 1: Timeout para promesa
function conTimeout(promesa, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), ms)
  );

  return Promise.race([promesa, timeout]);
}

const lenta2 = new Promise((resolve) =>
  setTimeout(() => resolve("Datos"), 3000)
);

conTimeout(lenta2, 2000)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error.message)); // "Timeout"

// Caso 2: Retry con promesas
function retry(fn, intentos) {
  return fn().catch((error) => {
    if (intentos <= 1) {
      throw error;
    }
    console.log(`Reintentando... (${intentos - 1} restantes)`);
    return retry(fn, intentos - 1);
  });
}

function operacionInestable() {
  return new Promise((resolve, reject) => {
    Math.random() > 0.7 ? resolve("¡Éxito!") : reject("Error");
  });
}

retry(operacionInestable, 3)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error("Fallo definitivo"));

// Caso 3: Secuencia de promesas
function ejecutarEnSecuencia(tareas) {
  return tareas.reduce((promesaAnterior, tarea) => {
    return promesaAnterior.then((resultado) => {
      return tarea().then((nuevoResultado) => {
        return [...resultado, nuevoResultado];
      });
    });
  }, Promise.resolve([]));
}

const tareas = [
  () => Promise.resolve("Tarea 1"),
  () => Promise.resolve("Tarea 2"),
  () => Promise.resolve("Tarea 3"),
];

ejecutarEnSecuencia(tareas).then((resultados) => console.log(resultados));

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:

1. Siempre retornar promesas en .then()
2. Usar .catch() al final de la cadena
3. Usar .finally() para limpieza
4. Preferir async/await para código más limpio
5. Usar Promise.all() para operaciones paralelas

❌ EVITAR:

1. Anidar promesas (callback hell con promesas)
2. No manejar errores
3. Crear promesas innecesarias
4. Olvidar return en .then()
5. Mezclar callbacks y promesas sin control
*/

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                   PROMESAS - RESUMEN                      ║
╠═══════════════════════════════════════════════════════════╣
║ • Estados: pending, fulfilled, rejected                   ║
║ • .then() para éxito, .catch() para error                ║
║ • Encadenamiento limpio (no callback hell)                ║
║ • Promise.all() para paralelo                             ║
║ • Promise.race() para la primera                          ║
║ • Base para async/await                                   ║
╚═══════════════════════════════════════════════════════════╝
`);
