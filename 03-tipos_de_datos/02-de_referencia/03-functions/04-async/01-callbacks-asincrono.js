//--------------------------------------------------------------------------------------
// 🎯 CALLBACKS ASÍNCRONOS
//--------------------------------------------------------------------------------------
// Callbacks que se ejecutan después de operaciones asíncronas (no bloquean el código)

//--------------------------------------------------------------------------------------
// 1️⃣ DIFERENCIA: SÍNCRONO VS ASÍNCRONO
//--------------------------------------------------------------------------------------

// SÍNCRONO: Se ejecuta línea por línea, bloqueante
console.log("1. Inicio síncrono");
console.log("2. Ejecutando...");
console.log("3. Fin síncrono");

// ASÍNCRONO: No bloquea, se ejecuta después
console.log("1. Inicio asíncrono");
setTimeout(() => {
  console.log("3. Ejecutado después (asíncrono)");
}, 1000);
console.log("2. Esto se ejecuta ANTES del timeout");

// Salida:
// 1. Inicio asíncrono
// 2. Esto se ejecuta ANTES del timeout
// 3. Ejecutado después (asíncrono)

//--------------------------------------------------------------------------------------
// 2️⃣ setTimeout() - Ejecutar después de un delay
//--------------------------------------------------------------------------------------

// Sintaxis: setTimeout(callback, milisegundos)
setTimeout(() => {
  console.log("Ejecutado después de 2 segundos");
}, 2000);

// Con parámetros
setTimeout(
  (nombre, edad) => {
    console.log(`Hola ${nombre}, tienes ${edad} años`);
  },
  1000,
  "Carlos",
  25
);

// Cancelar timeout
const timeoutId = setTimeout(() => {
  console.log("Esto no se ejecutará");
}, 5000);

clearTimeout(timeoutId); // Cancela el timeout

//--------------------------------------------------------------------------------------
// 3️⃣ setInterval() - Ejecutar repetidamente
//--------------------------------------------------------------------------------------

// Se ejecuta cada X milisegundos
let contador = 0;
const intervalId = setInterval(() => {
  contador++;
  console.log(`Contador: ${contador}`);

  if (contador === 5) {
    clearInterval(intervalId); // Detener después de 5 veces
    console.log("Intervalo detenido");
  }
}, 1000);

//--------------------------------------------------------------------------------------
// 4️⃣ CALLBACKS EN OPERACIONES ASÍNCRONAS
//--------------------------------------------------------------------------------------

// Simular lectura de archivo
function leerArchivo(ruta, callback) {
  console.log(`Leyendo archivo: ${ruta}...`);

  setTimeout(() => {
    const contenido = "Contenido del archivo simulado";
    callback(null, contenido); // (error, datos)
  }, 1500);
}

leerArchivo("datos.txt", (error, datos) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Datos:", datos);
  }
});

//--------------------------------------------------------------------------------------
// 5️⃣ ERROR-FIRST CALLBACK PATTERN
//--------------------------------------------------------------------------------------
// Patrón estándar en Node.js: callback(error, resultado)

function obtenerUsuario(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error("ID inválido"), null);
    } else {
      const usuario = { id, nombre: `Usuario${id}`, edad: 25 };
      callback(null, usuario);
    }
  }, 1000);
}

// Uso correcto
obtenerUsuario(1, (error, usuario) => {
  if (error) {
    console.error("❌ Error:", error.message);
    return; // ⚠️ Importante: salir si hay error
  }
  console.log("✅ Usuario:", usuario);
});

obtenerUsuario(-1, (error, usuario) => {
  if (error) {
    console.error("❌ Error:", error.message); // "ID inválido"
    return;
  }
  console.log("✅ Usuario:", usuario);
});

//--------------------------------------------------------------------------------------
// 6️⃣ CALLBACK HELL (Infierno de Callbacks)
//--------------------------------------------------------------------------------------

// ❌ PROBLEMA: Callbacks anidados difíciles de leer
function obtenerUsuario(id, callback) {
  setTimeout(() => {
    callback(null, { id, nombre: `Usuario${id}` });
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
    callback(null, [
      { id: 1, texto: "Comentario 1" },
      { id: 2, texto: "Comentario 2" },
    ]);
  }, 1000);
}

// Callback Hell ⚠️
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

      console.log("Datos completos:", {
        usuario,
        posts,
        comentarios,
      });
    });
  });
});

// ⚠️ Problemas del Callback Hell:
// 1. Difícil de leer (pirámide de la perdición)
// 2. Difícil de mantener
// 3. Manejo de errores repetitivo
// 4. Dificulta el debugging

//--------------------------------------------------------------------------------------
// 7️⃣ SOLUCIONES AL CALLBACK HELL
//--------------------------------------------------------------------------------------

// ✅ Solución 1: Funciones nombradas (modularizar)
function manejarUsuario(error, usuario) {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Usuario obtenido:", usuario);
  obtenerPosts(usuario.id, manejarPosts);
}

function manejarPosts(error, posts) {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Posts obtenidos:", posts);
  obtenerComentarios(posts[0].id, manejarComentarios);
}

function manejarComentarios(error, comentarios) {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Comentarios obtenidos:", comentarios);
}

obtenerUsuario(1, manejarUsuario);

// ✅ Solución 2: Promesas (mejor - ver archivo de promesas)
// ✅ Solución 3: Async/Await (mejor - ver archivo async/await)

//--------------------------------------------------------------------------------------
// 8️⃣ CALLBACKS EN EVENTOS DEL NAVEGADOR (Simulado)
//--------------------------------------------------------------------------------------

// En el navegador:
// document.getElementById('btn').addEventListener('click', (evento) => {
//   console.log('Botón clickeado', evento);
// });

// Simulación de evento
class EventEmitter {
  constructor() {
    this.eventos = {};
  }

  on(evento, callback) {
    if (!this.eventos[evento]) {
      this.eventos[evento] = [];
    }
    this.eventos[evento].push(callback);
  }

  emit(evento, datos) {
    if (this.eventos[evento]) {
      this.eventos[evento].forEach((callback) => callback(datos));
    }
  }
}

const emitter = new EventEmitter();

// Registrar callbacks
emitter.on("datos", (datos) => {
  console.log("Callback 1:", datos);
});

emitter.on("datos", (datos) => {
  console.log("Callback 2:", datos.toUpperCase());
});

// Emitir evento (asíncrono)
setTimeout(() => {
  emitter.emit("datos", "Hola desde evento");
}, 500);

//--------------------------------------------------------------------------------------
// 9️⃣ ANIMACIONES CON CALLBACKS
//--------------------------------------------------------------------------------------

function animar(elemento, duracion, callback) {
  console.log(`Animando ${elemento}...`);

  setTimeout(() => {
    console.log(`${elemento} animado`);
    if (callback) callback();
  }, duracion);
}

// Secuencia de animaciones
animar("div1", 1000, () => {
  animar("div2", 1000, () => {
    animar("div3", 1000, () => {
      console.log("Todas las animaciones completadas");
    });
  });
});

//--------------------------------------------------------------------------------------
// 🔟 CARGAR RECURSOS EN SECUENCIA
//--------------------------------------------------------------------------------------

function cargarRecurso(nombre, tiempo, callback) {
  console.log(`Cargando ${nombre}...`);

  setTimeout(() => {
    console.log(`✅ ${nombre} cargado`);
    callback(null, `Datos de ${nombre}`);
  }, tiempo);
}

// Cargar en secuencia
cargarRecurso("CSS", 1000, (error, datos) => {
  if (error) {
    console.error(error);
    return;
  }

  cargarRecurso("JavaScript", 1500, (error, datos) => {
    if (error) {
      console.error(error);
      return;
    }

    cargarRecurso("Imágenes", 2000, (error, datos) => {
      if (error) {
        console.error(error);
        return;
      }

      console.log("🎉 Todos los recursos cargados");
    });
  });
});

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ RETRY CON CALLBACKS
//--------------------------------------------------------------------------------------

function intentarOperacion(operacion, reintentos, callback) {
  operacion((error, resultado) => {
    if (error) {
      if (reintentos > 0) {
        console.log(
          `⚠️ Error. Reintentando... (${reintentos} intentos restantes)`
        );
        setTimeout(() => {
          intentarOperacion(operacion, reintentos - 1, callback);
        }, 1000);
      } else {
        callback(error, null);
      }
    } else {
      callback(null, resultado);
    }
  });
}

// Operación inestable
function operacionInestable(callback) {
  setTimeout(() => {
    if (Math.random() > 0.7) {
      callback(null, "¡Éxito!");
    } else {
      callback(new Error("Falló"), null);
    }
  }, 500);
}

// Usar retry
intentarOperacion(operacionInestable, 3, (error, resultado) => {
  if (error) {
    console.error("❌ Fallo definitivo:", error.message);
  } else {
    console.log("✅ Éxito:", resultado);
  }
});

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ TIMEOUT PARA CALLBACKS
//--------------------------------------------------------------------------------------

function conTimeout(operacion, tiempo, callback) {
  let completado = false;

  // Timeout
  const timer = setTimeout(() => {
    if (!completado) {
      completado = true;
      callback(new Error("Timeout"), null);
    }
  }, tiempo);

  // Operación
  operacion((error, resultado) => {
    if (!completado) {
      completado = true;
      clearTimeout(timer);
      callback(error, resultado);
    }
  });
}

// Operación lenta
function operacionLenta(callback) {
  setTimeout(() => {
    callback(null, "Datos obtenidos");
  }, 3000);
}

// Con timeout de 2 segundos
conTimeout(operacionLenta, 2000, (error, datos) => {
  if (error) {
    console.error("❌", error.message); // "Timeout"
  } else {
    console.log("✅", datos);
  }
});

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ DEBOUNCE Y THROTTLE (Control de callbacks)
//--------------------------------------------------------------------------------------

// Debounce: Ejecuta después de que pare la actividad
function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// Throttle: Limita frecuencia de ejecución
function throttle(callback, limit) {
  let enEspera = false;

  return function (...args) {
    if (!enEspera) {
      callback(...args);
      enEspera = true;
      setTimeout(() => {
        enEspera = false;
      }, limit);
    }
  };
}

// Ejemplo de uso
const buscar = debounce((termino) => {
  console.log("Buscando:", termino);
}, 500);

buscar("H");
buscar("Ho");
buscar("Hol");
buscar("Hola"); // Solo esta se ejecuta (después de 500ms)

//--------------------------------------------------------------------------------------
// 1️⃣4️⃣ CALLBACKS CON CONTEXTO (this)
//--------------------------------------------------------------------------------------

const objeto = {
  nombre: "Mi Objeto",
  valor: 42,

  metodoConCallback(callback) {
    // Callback pierde contexto
    callback();
  },

  metodoConBind(callback) {
    // Mantener contexto con bind
    callback.call(this);
  },
};

function mostrarNombre() {
  console.log("Nombre:", this.nombre);
}

objeto.metodoConCallback(mostrarNombre); // undefined
objeto.metodoConBind(mostrarNombre); // "Mi Objeto"

// ✅ Solución moderna: Arrow function
objeto.metodoConCallback(() => {
  console.log("Con arrow:", objeto.nombre);
});

//--------------------------------------------------------------------------------------
// 1️⃣5️⃣ CASOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// Caso 1: Sistema de tareas asíncronas
function ejecutarTareas(tareas, callback) {
  let indice = 0;
  const resultados = [];

  function siguiente() {
    if (indice >= tareas.length) {
      callback(null, resultados);
      return;
    }

    const tarea = tareas[indice++];
    tarea((error, resultado) => {
      if (error) {
        callback(error, null);
        return;
      }

      resultados.push(resultado);
      siguiente();
    });
  }

  siguiente();
}

// Tareas
const tareas = [
  (cb) => setTimeout(() => cb(null, "Tarea 1"), 1000),
  (cb) => setTimeout(() => cb(null, "Tarea 2"), 500),
  (cb) => setTimeout(() => cb(null, "Tarea 3"), 300),
];

ejecutarTareas(tareas, (error, resultados) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Todas completadas:", resultados);
  }
});

// Caso 2: Validación asíncrona
function validarEmail(email, callback) {
  setTimeout(() => {
    const valido = email.includes("@") && email.includes(".");
    if (valido) {
      callback(null, "Email válido");
    } else {
      callback(new Error("Email inválido"), null);
    }
  }, 500);
}

validarEmail("test@example.com", (error, mensaje) => {
  if (error) {
    console.error("❌", error.message);
  } else {
    console.log("✅", mensaje);
  }
});

//--------------------------------------------------------------------------------------
// 1️⃣6️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:

1. Siempre manejar errores en callbacks
2. Usar error-first callback pattern (error, datos)
3. Llamar callback UNA SOLA VEZ
4. Usar return después del callback en caso de error
5. Modularizar callbacks para evitar callback hell
6. Considerar Promesas/Async-Await para código complejo

❌ EVITAR:

1. Callback hell (más de 2-3 niveles)
2. No manejar errores
3. Llamar callback múltiples veces
4. Mezclar código síncrono y asíncrono sin claridad
5. Modificar variables externas (efectos secundarios)
6. Olvidar clearTimeout/clearInterval
*/

console.log(`
╔═══════════════════════════════════════════════════════════╗
║            CALLBACKS ASÍNCRONOS - RESUMEN                 ║
╠═══════════════════════════════════════════════════════════╣
║ • No bloquean la ejecución del programa                   ║
║ • setTimeout: ejecuta después de un delay                 ║
║ • setInterval: ejecuta repetidamente                      ║
║ • Pattern: callback(error, resultado)                     ║
║ • Problema: Callback hell                                 ║
║ • Solución moderna: Promesas y Async/Await                ║
╚═══════════════════════════════════════════════════════════╝
`);

//--------------------------------------------------------------------------------------
// 1️⃣7️⃣ COMPARACIÓN: Callbacks vs Promesas vs Async/Await
//--------------------------------------------------------------------------------------

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                    COMPARACIÓN                            ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║ CALLBACKS:                                                ║
║ • Forma original de manejar asincronía                    ║
║ • Puede crear callback hell                               ║
║ • Difícil de leer y mantener                              ║
║                                                           ║
║ PROMESAS:                                                 ║
║ • Mejor que callbacks para encadenar                      ║
║ • .then() y .catch() claros                               ║
║ • Evita callback hell                                     ║
║                                                           ║
║ ASYNC/AWAIT:                                              ║
║ • Sintaxis más limpia y legible                           ║
║ • Parece código síncrono                                  ║
║ • Basado en promesas                                      ║
║ • ✅ OPCIÓN RECOMENDADA HOY                               ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);
