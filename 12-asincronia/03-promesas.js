//==============================================================================
// 03 - PROMESAS (PROMISES)
//==============================================================================

console.log("=== ¿QUÉ ES UNA PROMESA? ===\n");

/*
🎁 PROMISE = Objeto que representa el resultado eventual de una operación asíncrona

Una promesa puede estar en 3 estados:
1. PENDING (pendiente) - Inicial, ni cumplida ni rechazada
2. FULFILLED (cumplida) - Operación completada con éxito
3. REJECTED (rechazada) - Operación falló

Analogía: Es como pedir comida a domicilio
- PENDING: La comida está en camino
- FULFILLED: La comida llegó (resolve)
- REJECTED: Cancelaron el pedido (reject)
*/

console.log("Estados de una promesa:");
console.log("  1. PENDING → Esperando resultado");
console.log("  2. FULFILLED → Éxito (resolve)");
console.log("  3. REJECTED → Error (reject)");

console.log("\n=== CREAR UNA PROMESA ===\n");

// Sintaxis básica
const miPromesa = new Promise((resolve, reject) => {
  // Código asíncrono aquí
  const exito = true;

  if (exito) {
    resolve("¡Operación exitosa!"); // Cumplida
  } else {
    reject("Hubo un error"); // Rechazada
  }
});

console.log("Promesa creada:", miPromesa);

console.log("\n=== CONSUMIR PROMESAS: .then() .catch() .finally() ===\n");

// .then() - Ejecuta cuando la promesa se resuelve (éxito)
// .catch() - Ejecuta cuando la promesa se rechaza (error)
// .finally() - Siempre se ejecuta al final

const promesa1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Datos obtenidos");
  }, 1000);
});

console.log("Consumiendo promesa...");

promesa1
  .then((resultado) => {
    console.log("  ✅ .then():", resultado);
  })
  .catch((error) => {
    console.error("  ❌ .catch():", error);
  })
  .finally(() => {
    console.log("  🏁 .finally(): Operación terminada");
  });

console.log("\n=== EJEMPLO: PROMESA CON ÉXITO ===\n");

function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    console.log(`  Buscando usuario ${id}...`);

    setTimeout(() => {
      const usuario = {
        id: id,
        nombre: "Ana",
        email: "ana@example.com",
      };
      resolve(usuario); // Éxito
    }, 1500);
  });
}

console.log("Obteniendo usuario...");
obtenerUsuario(1).then((usuario) => {
  console.log("  ✅ Usuario encontrado:", usuario);
});

console.log("\n=== EJEMPLO: PROMESA CON ERROR ===\n");

function obtenerPost(id) {
  return new Promise((resolve, reject) => {
    console.log(`  Buscando post ${id}...`);

    setTimeout(() => {
      if (id <= 0) {
        reject("ID inválido"); // Error
      } else {
        resolve({ id, titulo: "Mi Post" });
      }
    }, 1000);
  });
}

console.log("Obteniendo post con ID inválido...");
obtenerPost(-1)
  .then((post) => {
    console.log("  ✅ Post:", post);
  })
  .catch((error) => {
    console.error("  ❌ Error:", error);
  });

console.log("\n=== ENCADENAR PROMESAS (.then chaining) ===\n");

/*
Las promesas se pueden encadenar
Cada .then() devuelve una nueva promesa
Soluciona el Callback Hell
*/

function paso1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("  1️⃣ Paso 1 completado");
      resolve("Resultado 1");
    }, 500);
  });
}

function paso2(anterior) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("  2️⃣ Paso 2 completado (con:", anterior + ")");
      resolve("Resultado 2");
    }, 500);
  });
}

function paso3(anterior) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("  3️⃣ Paso 3 completado (con:", anterior + ")");
      resolve("Resultado Final");
    }, 500);
  });
}

console.log("Encadenando promesas...");

paso1()
  .then((res1) => paso2(res1))
  .then((res2) => paso3(res2))
  .then((resFinal) => {
    console.log("  🎉 Todo completado:", resFinal);
  })
  .catch((error) => {
    console.error("  ❌ Error en algún paso:", error);
  });

console.log("\n=== COMPARACIÓN: CALLBACKS VS PROMESAS ===\n");

console.log("❌ CON CALLBACKS (Callback Hell):");
console.log(`
  obtenerUsuario(1, (err, usuario) => {
    if (err) return console.error(err);
    obtenerPosts(usuario.id, (err, posts) => {
      if (err) return console.error(err);
      obtenerComentarios(posts[0].id, (err, comentarios) => {
        if (err) return console.error(err);
        console.log(comentarios);
      });
    });
  });
`);

console.log("✅ CON PROMESAS (limpio y legible):");
console.log(`
  obtenerUsuario(1)
    .then(usuario => obtenerPosts(usuario.id))
    .then(posts => obtenerComentarios(posts[0].id))
    .then(comentarios => console.log(comentarios))
    .catch(error => console.error(error));
`);

console.log("\n=== MÉTODOS ESTÁTICOS DE PROMISE ===\n");

// Promise.resolve() - Crea promesa ya resuelta
const promesaResuelta = Promise.resolve("Valor inmediato");
console.log("Promise.resolve():");
promesaResuelta.then((valor) => console.log("  Valor:", valor));

// Promise.reject() - Crea promesa ya rechazada
const promesaRechazada = Promise.reject("Error inmediato");
console.log("\nPromise.reject():");
promesaRechazada.catch((error) => console.error("  Error:", error));

console.log("\n=== Promise.all() - PARALELO ===\n");

/*
Promise.all() ejecuta múltiples promesas EN PARALELO
Espera a que TODAS se completen
Si UNA falla, toda la operación falla
*/

function tarea(nombre, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`  ✅ ${nombre} completada`);
      resolve(nombre);
    }, tiempo);
  });
}

console.log("Ejecutando 3 tareas en paralelo...");

Promise.all([
  tarea("Tarea 1", 1000),
  tarea("Tarea 2", 1500),
  tarea("Tarea 3", 800),
])
  .then((resultados) => {
    console.log("  🎉 Todas completadas:", resultados);
  })
  .catch((error) => {
    console.error("  ❌ Alguna falló:", error);
  });

// Se ejecutan en paralelo, termina cuando la más lenta acaba

console.log("\n=== Promise.race() - PRIMERA EN TERMINAR ===\n");

/*
Promise.race() devuelve la primera promesa que se complete
(ya sea resuelta o rechazada)
*/

console.log("Ejecutando race (primera en terminar gana)...");

Promise.race([
  tarea("Tarea A", 1000),
  tarea("Tarea B", 500), // Esta ganará
  tarea("Tarea C", 1500),
]).then((resultado) => {
  console.log("  🏆 Primera en terminar:", resultado);
});

console.log("\n=== Promise.allSettled() - ESPERA A TODAS ===\n");

/*
Promise.allSettled() espera a que TODAS terminen
No importa si fallan o tienen éxito
Devuelve array con estado de cada una
*/

function tareaConError(nombre, tiempo, falla = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (falla) {
        reject(`${nombre} falló`);
      } else {
        resolve(`${nombre} exitosa`);
      }
    }, tiempo);
  });
}

console.log("Ejecutando allSettled (espera a todas, aunque fallen)...");

Promise.allSettled([
  tareaConError("Tarea 1", 500, false),
  tareaConError("Tarea 2", 800, true), // Falla
  tareaConError("Tarea 3", 600, false),
]).then((resultados) => {
  console.log("  Resultados:");
  resultados.forEach((resultado, i) => {
    if (resultado.status === "fulfilled") {
      console.log(`    ✅ Tarea ${i + 1}: ${resultado.value}`);
    } else {
      console.log(`    ❌ Tarea ${i + 1}: ${resultado.reason}`);
    }
  });
});

console.log("\n=== Promise.any() - PRIMERA EXITOSA ===\n");

/*
Promise.any() devuelve la primera promesa que se RESUELVA exitosamente
Ignora las que fallen
*/

console.log("Ejecutando any (primera exitosa)...");

Promise.any([
  tareaConError("Tarea X", 1000, true), // Falla
  tareaConError("Tarea Y", 500, false), // Esta ganará
  tareaConError("Tarea Z", 800, false),
])
  .then((resultado) => {
    console.log("  🏆 Primera exitosa:", resultado);
  })
  .catch((error) => {
    console.error("  ❌ Todas fallaron:", error);
  });

console.log("\n=== MANEJO DE ERRORES ===\n");

// Opción 1: .catch() al final de la cadena
console.log("Opción 1: .catch() global:");

Promise.reject("Error en paso 1")
  .then(() => console.log("Paso 2"))
  .then(() => console.log("Paso 3"))
  .catch((error) => {
    console.error("  ❌ Capturado:", error);
  });

// Opción 2: .catch() en cada paso
console.log("\nOpción 2: .catch() por paso:");

Promise.reject("Error específico")
  .catch((error) => {
    console.error("  ❌ Error manejado:", error);
    return "Valor recuperado"; // Recuperarse del error
  })
  .then((valor) => {
    console.log("  ✅ Continuamos con:", valor);
  });

console.log("\n=== EJEMPLO PRÁCTICO: CARGAR MÚLTIPLES RECURSOS ===\n");

function cargarImagen(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes("invalid")) {
        reject(`Error al cargar: ${url}`);
      } else {
        resolve(`Imagen cargada: ${url}`);
      }
    }, Math.random() * 1000);
  });
}

const imagenes = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];

console.log("Cargando múltiples imágenes en paralelo...");

Promise.all(imagenes.map((img) => cargarImagen(img)))
  .then((resultados) => {
    console.log("  ✅ Todas las imágenes cargadas:");
    resultados.forEach((res) => console.log(`    • ${res}`));
  })
  .catch((error) => {
    console.error("  ❌ Error cargando imágenes:", error);
  });

console.log("\n=== CONVERTIR CALLBACKS A PROMESAS ===\n");

// Función antigua con callback
function leerArchivoCallback(nombre, callback) {
  setTimeout(() => {
    callback(null, `Contenido de ${nombre}`);
  }, 500);
}

// Convertir a promesa (promisificar)
function leerArchivoPromise(nombre) {
  return new Promise((resolve, reject) => {
    leerArchivoCallback(nombre, (error, contenido) => {
      if (error) {
        reject(error);
      } else {
        resolve(contenido);
      }
    });
  });
}

console.log("Usando función promisificada...");
leerArchivoPromise("documento.txt").then((contenido) =>
  console.log("  Contenido:", contenido)
);

console.log("\n=== PROMESAS EN SERIE vs PARALELO ===\n");

function tarea2(nombre, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`  ${nombre} completada`);
      resolve(nombre);
    }, tiempo);
  });
}

// SECUENCIAL (una después de otra)
console.log("SECUENCIAL (3 segundos total):");
async function ejecutarSecuencial() {
  await tarea2("A", 1000); // 1s
  await tarea2("B", 1000); // 1s
  await tarea2("C", 1000); // 1s
  console.log("  Total: ~3 segundos");
}
ejecutarSecuencial();

// PARALELO (todas a la vez)
console.log("\nPARALELO (1 segundo total):");
Promise.all([tarea2("X", 1000), tarea2("Y", 1000), tarea2("Z", 1000)]).then(
  () => {
    console.log("  Total: ~1 segundo");
  }
);

console.log("\n=== TABLA COMPARATIVA ===\n");

const metodos = {
  "Promise.all()": {
    Espera: "Todas",
    Fallo: "Si una falla, todas fallan",
    Uso: "Cargar múltiples recursos",
  },
  "Promise.race()": {
    Espera: "Primera en terminar",
    Fallo: "Devuelve primera (éxito o fallo)",
    Uso: "Timeout, competencia",
  },
  "Promise.allSettled()": {
    Espera: "Todas",
    Fallo: "Nunca falla, devuelve estado",
    Uso: "Ejecutar todas sin importar fallos",
  },
  "Promise.any()": {
    Espera: "Primera exitosa",
    Fallo: "Solo si todas fallan",
    Uso: "Primera respuesta válida",
  },
};

console.table(metodos);

console.log("\n=== RESUMEN ===");
console.log("✅ Promise = objeto que representa operación futura");
console.log("✅ Estados: pending → fulfilled/rejected");
console.log("✅ .then() para éxito, .catch() para error");
console.log("✅ .finally() siempre se ejecuta");
console.log("✅ Encadenar con .then() evita callback hell");
console.log("✅ Promise.all() para operaciones en paralelo");
console.log("✅ Promise.race() para primera en terminar");
console.log("✅ Mejor que callbacks, pero async/await es más limpio");
console.log("\n🎯 Siguiente: 04-async_await.js");
