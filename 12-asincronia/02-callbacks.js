//==============================================================================
// 02 - CALLBACKS
//==============================================================================

console.log("=== ¿QUÉ ES UN CALLBACK? ===\n");

/*
📞 CALLBACK = Función que se pasa como argumento a otra función
              para ser ejecutada DESPUÉS

Es la forma ORIGINAL de manejar asincronía en JavaScript
*/

// Ejemplo simple de callback
function saludar(nombre, callback) {
  console.log(`Hola ${nombre}`);
  callback(); // Ejecuta el callback
}

function despedirse() {
  console.log("Adiós!");
}

saludar("Ana", despedirse);
// Resultado:
// Hola Ana
// Adiós!

console.log("\n=== CALLBACKS SÍNCRONOS ===\n");

// Array methods usan callbacks síncronos
const numeros = [1, 2, 3, 4, 5];

console.log("forEach (callback síncrono):");
numeros.forEach((num) => {
  console.log(`  Número: ${num}`);
});

console.log("\nmap (callback síncrono):");
const dobles = numeros.map((num) => num * 2);
console.log("  Dobles:", dobles);

console.log("\nfilter (callback síncrono):");
const pares = numeros.filter((num) => num % 2 === 0);
console.log("  Pares:", pares);

console.log("\n=== CALLBACKS ASÍNCRONOS ===\n");

// setTimeout usa callback asíncrono
console.log("setTimeout (callback asíncrono):");
console.log("  1. Antes del setTimeout");

setTimeout(() => {
  console.log("  3. Dentro del setTimeout");
}, 1000);

console.log("  2. Después del setTimeout (no espera)");

// Resultado:
// 1. Antes del setTimeout
// 2. Después del setTimeout
// [ESPERA 1 SEGUNDO]
// 3. Dentro del setTimeout

console.log("\n=== EJEMPLO PRÁCTICO: SIMULAR PETICIÓN ===\n");

// Simular obtener datos de un servidor
function obtenerUsuario(id, callback) {
  console.log(`Buscando usuario con id: ${id}...`);

  // Simular delay de red
  setTimeout(() => {
    const usuario = {
      id: id,
      nombre: "Juan",
      email: "juan@example.com",
    };
    callback(usuario);
  }, 1500);
}

console.log("Iniciando petición...");
obtenerUsuario(1, (usuario) => {
  console.log("Usuario recibido:", usuario);
});
console.log("Petición en progreso (no bloqueada)...");

console.log("\n=== ERROR-FIRST CALLBACKS ===\n");

/*
❗ Patrón Error-First Callback (Node.js)
El primer argumento es siempre el error (o null si no hay error)
El segundo argumento es el resultado
*/

function obtenerDatos(id, callback) {
  setTimeout(() => {
    // Simular error aleatorio
    const error = Math.random() > 0.7 ? "Error de red" : null;

    if (error) {
      callback(error, null); // Enviar error
    } else {
      const datos = { id, valor: "Datos importantes" };
      callback(null, datos); // Enviar datos
    }
  }, 1000);
}

// Uso del error-first callback
console.log("Llamando a función con error-first callback...");
obtenerDatos(1, (error, datos) => {
  if (error) {
    console.error("❌ Error:", error);
    return;
  }
  console.log("✅ Datos recibidos:", datos);
});

console.log("\n=== EL PROBLEMA: CALLBACK HELL 🔥 ===\n");

/*
🔥 CALLBACK HELL (Pyramid of Doom)
Cuando anidas muchos callbacks, el código se vuelve:
- Difícil de leer
- Difícil de mantener
- Propenso a errores
- Conocido como "Pirámide de la perdición"
*/

console.log("Ejemplo de Callback Hell:");

function paso1(callback) {
  setTimeout(() => {
    console.log("  1. Paso 1 completado");
    callback();
  }, 500);
}

function paso2(callback) {
  setTimeout(() => {
    console.log("  2. Paso 2 completado");
    callback();
  }, 500);
}

function paso3(callback) {
  setTimeout(() => {
    console.log("  3. Paso 3 completado");
    callback();
  }, 500);
}

// ❌ CALLBACK HELL (código horrible)
paso1(() => {
  paso2(() => {
    paso3(() => {
      console.log("  4. ¡Todo completado!");
      // Imagina 10 niveles más...
      // Se vuelve inmanejable
    });
  });
});

console.log("\n=== EJEMPLO REAL: CALLBACK HELL ===\n");

/*
Escenario: Obtener usuario, luego sus posts, luego comentarios
*/

function obtenerUsuario2(id, callback) {
  setTimeout(() => {
    callback(null, { id, nombre: "Ana" });
  }, 1000);
}

function obtenerPosts(userId, callback) {
  setTimeout(() => {
    callback(null, [
      { id: 1, titulo: "Post 1" },
      { id: 2, titulo: "Post 2" },
    ]);
  }, 1000);
}

function obtenerComentarios(postId, callback) {
  setTimeout(() => {
    callback(null, ["Comentario 1", "Comentario 2"]);
  }, 1000);
}

// ❌ CALLBACK HELL EN ACCIÓN
console.log("Iniciando cadena de callbacks...");

obtenerUsuario2(1, (error, usuario) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("  Usuario:", usuario.nombre);

  obtenerPosts(usuario.id, (error, posts) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("  Posts:", posts.length);

    obtenerComentarios(posts[0].id, (error, comentarios) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("  Comentarios:", comentarios.length);

      // Y podría continuar anidando...
      // Cada nivel más profundo es peor
    });
  });
});

console.log("\n=== SOLUCIONES AL CALLBACK HELL ===\n");

/*
✅ SOLUCIÓN 1: Funciones nombradas (menos anidación)
*/

console.log("Solución 1: Funciones nombradas");

function manejarComentarios(error, comentarios) {
  if (error) return console.error(error);
  console.log("  ✅ Comentarios:", comentarios.length);
}

function manejarPosts(usuario) {
  return (error, posts) => {
    if (error) return console.error(error);
    console.log("  ✅ Posts:", posts.length);
    obtenerComentarios(posts[0].id, manejarComentarios);
  };
}

function manejarUsuario(error, usuario) {
  if (error) return console.error(error);
  console.log("  ✅ Usuario:", usuario.nombre);
  obtenerPosts(usuario.id, manejarPosts(usuario));
}

obtenerUsuario2(1, manejarUsuario);

/*
✅ SOLUCIÓN 2: Promesas (mejor)
✅ SOLUCIÓN 3: Async/Await (la mejor)
(Ver archivos 03-promesas.js y 04-async_await.js)
*/

console.log("\n=== VENTAJAS Y DESVENTAJAS DE CALLBACKS ===\n");

const comparacion = {
  Ventajas: [
    "• Simple de entender",
    "• Soportado en todos lados",
    "• No requiere nuevas APIs",
  ],
  Desventajas: [
    "• Callback Hell (anidación profunda)",
    "• Difícil manejo de errores",
    "• Difícil de leer y mantener",
    "• No hay forma estándar de manejar errores",
  ],
};

console.log("VENTAJAS:");
comparacion.Ventajas.forEach((v) => console.log(v));

console.log("\nDESVENTAJAS:");
comparacion.Desventajas.forEach((d) => console.log(d));

console.log("\n=== CALLBACKS EN EVENTOS DOM ===\n");

/*
Los eventos del DOM también usan callbacks
*/

console.log("Ejemplo conceptual de eventos:");
console.log(`
  // Event listener usa callback
  button.addEventListener('click', () => {
    console.log('Botón clickeado');
  });
  
  // Otro ejemplo
  window.addEventListener('load', () => {
    console.log('Página cargada');
  });
`);

console.log("\n=== PATRÓN: CALLBACK CON MÚLTIPLES ARGUMENTOS ===\n");

function procesarDatos(datos, onSuccess, onError) {
  setTimeout(() => {
    if (datos) {
      onSuccess(`Procesado: ${datos}`);
    } else {
      onError("No hay datos para procesar");
    }
  }, 1000);
}

// Uso
console.log("Procesando datos...");

procesarDatos(
  "Mi información",
  (resultado) => {
    console.log("  ✅ Éxito:", resultado);
  },
  (error) => {
    console.error("  ❌ Error:", error);
  }
);

console.log("\n=== EJERCICIO PRÁCTICO ===\n");

/*
Crear una función que simule descargar un archivo
con callback de progreso
*/

function descargarArchivo(nombre, onProgress, onComplete) {
  let progreso = 0;

  const intervalo = setInterval(() => {
    progreso += 10;
    onProgress(progreso);

    if (progreso >= 100) {
      clearInterval(intervalo);
      onComplete(nombre);
    }
  }, 200);
}

console.log("Descargando archivo...");

descargarArchivo(
  "documento.pdf",
  (progreso) => {
    console.log(`  📥 Progreso: ${progreso}%`);
  },
  (nombre) => {
    console.log(`  ✅ Descarga completada: ${nombre}`);
  }
);

console.log("\n=== CALLBACKS VS PROMESAS (PREVIEW) ===\n");

console.log("CON CALLBACKS (código anidado):");
console.log(`
  obtenerUsuario(1, (err, usuario) => {
    obtenerPosts(usuario.id, (err, posts) => {
      obtenerComentarios(posts[0].id, (err, comentarios) => {
        console.log(comentarios);
      });
    });
  });
`);

console.log("\nCON PROMESAS (más limpio):");
console.log(`
  obtenerUsuario(1)
    .then(usuario => obtenerPosts(usuario.id))
    .then(posts => obtenerComentarios(posts[0].id))
    .then(comentarios => console.log(comentarios))
    .catch(error => console.error(error));
`);

console.log("\nCON ASYNC/AWAIT (lo mejor):");
console.log(`
  try {
    const usuario = await obtenerUsuario(1);
    const posts = await obtenerPosts(usuario.id);
    const comentarios = await obtenerComentarios(posts[0].id);
    console.log(comentarios);
  } catch (error) {
    console.error(error);
  }
`);

console.log("\n=== RESUMEN ===");
console.log("✅ Callback = función pasada como argumento");
console.log("✅ Pueden ser síncronos o asíncronos");
console.log("✅ Error-first callback: (error, resultado)");
console.log("✅ Problema: Callback Hell (anidación profunda)");
console.log("❌ Difíciles de leer y mantener");
console.log("❌ Manejo de errores complicado");
console.log("➡️ Solución moderna: Promesas y Async/Await");
console.log("\n🎯 Siguiente: 03-promesas.js");
