//==============================================================================
// 07 - PATRONES AVANZADOS DE ASINCRONÍA
//==============================================================================

console.log("=== PATRONES AVANZADOS ===\n");

//==============================================================================
// 1. PROMISE CHAINING AVANZADO
//==============================================================================

console.log("1️⃣ PROMISE CHAINING AVANZADO\n");

// Encadenar transformaciones de datos
async function transformarDatos() {
  const usuario = await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((r) => r.json())
    .then((user) => ({
      id: user.id,
      nombre: user.name.toUpperCase(),
      email: user.email.toLowerCase(),
    }))
    .then((user) => {
      console.log("  Usuario transformado:", user);
      return user;
    });

  return usuario;
}

transformarDatos();

//==============================================================================
// 2. PARALLEL vs SEQUENTIAL vs RACE
//==============================================================================

console.log("\n2️⃣ PARALLEL vs SEQUENTIAL vs RACE\n");

function tarea(nombre, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`  ✅ ${nombre} completada (${tiempo}ms)`);
      resolve(nombre);
    }, tiempo);
  });
}

// SEQUENTIAL: Uno después de otro (total: 6000ms)
async function sequential() {
  console.log("  SEQUENTIAL:");
  const inicio = Date.now();
  await tarea("A", 2000);
  await tarea("B", 2000);
  await tarea("C", 2000);
  console.log(`    Tiempo: ${Date.now() - inicio}ms\n`);
}

// PARALLEL: Todos a la vez (total: 2000ms)
async function parallel() {
  console.log("  PARALLEL:");
  const inicio = Date.now();
  await Promise.all([tarea("X", 2000), tarea("Y", 2000), tarea("Z", 2000)]);
  console.log(`    Tiempo: ${Date.now() - inicio}ms\n`);
}

// RACE: Primera en terminar
async function race() {
  console.log("  RACE:");
  const ganador = await Promise.race([
    tarea("1", 1000),
    tarea("2", 2000),
    tarea("3", 3000),
  ]);
  console.log(`    Ganador: ${ganador}\n`);
}

sequential()
  .then(() => parallel())
  .then(() => race());

//==============================================================================
// 3. RETRY CON BACKOFF EXPONENCIAL
//==============================================================================

console.log("\n3️⃣ RETRY CON BACKOFF EXPONENCIAL\n");

async function retryConBackoff(fn, maxReintentos = 3) {
  for (let intento = 0; intento < maxReintentos; intento++) {
    try {
      return await fn();
    } catch (error) {
      const esperaMs = Math.pow(2, intento) * 1000; // 1s, 2s, 4s...
      console.log(`  ❌ Intento ${intento + 1} falló, esperando ${esperaMs}ms`);

      if (intento < maxReintentos - 1) {
        await new Promise((resolve) => setTimeout(resolve, esperaMs));
      } else {
        throw error;
      }
    }
  }
}

async function ejemploRetry() {
  let intentos = 0;

  await retryConBackoff(async () => {
    intentos++;
    if (intentos < 3) {
      throw new Error("Fallo simulado");
    }
    console.log("  ✅ Éxito en intento", intentos);
    return "Datos";
  });
}

ejemploRetry();

//==============================================================================
// 4. CIRCUIT BREAKER
//==============================================================================

console.log("\n4️⃣ CIRCUIT BREAKER (Patrón de Resiliencia)\n");

class CircuitBreaker {
  constructor(fn, umbralFallos = 3, tiempoReset = 5000) {
    this.fn = fn;
    this.umbralFallos = umbralFallos;
    this.tiempoReset = tiempoReset;
    this.fallos = 0;
    this.estado = "CERRADO"; // CERRADO, ABIERTO, SEMI_ABIERTO
    this.proximoIntento = Date.now();
  }

  async ejecutar(...args) {
    if (this.estado === "ABIERTO") {
      if (Date.now() < this.proximoIntento) {
        throw new Error("Circuit Breaker ABIERTO");
      }
      this.estado = "SEMI_ABIERTO";
    }

    try {
      const resultado = await this.fn(...args);
      this.onExito();
      return resultado;
    } catch (error) {
      this.onFallo();
      throw error;
    }
  }

  onExito() {
    this.fallos = 0;
    this.estado = "CERRADO";
    console.log("  ✅ Circuit Breaker: CERRADO");
  }

  onFallo() {
    this.fallos++;
    console.log(
      `  ❌ Circuit Breaker: Fallo ${this.fallos}/${this.umbralFallos}`
    );

    if (this.fallos >= this.umbralFallos) {
      this.estado = "ABIERTO";
      this.proximoIntento = Date.now() + this.tiempoReset;
      console.log(`  🔴 Circuit Breaker: ABIERTO por ${this.tiempoReset}ms`);
    }
  }
}

async function ejemploCircuitBreaker() {
  let llamadas = 0;

  const funcionInestable = async () => {
    llamadas++;
    if (llamadas <= 3) {
      throw new Error("Servicio no disponible");
    }
    return "Éxito";
  };

  const breaker = new CircuitBreaker(funcionInestable, 2, 3000);

  for (let i = 0; i < 5; i++) {
    try {
      await breaker.ejecutar();
    } catch (error) {
      console.log(`  Llamada ${i + 1}:`, error.message);
    }
    await new Promise((r) => setTimeout(r, 500));
  }
}

ejemploCircuitBreaker();

//==============================================================================
// 5. THROTTLE ASÍNCRONO
//==============================================================================

console.log("\n5️⃣ THROTTLE ASÍNCRONO\n");

function throttleAsync(fn, limite) {
  let ultimaEjecucion = 0;
  let promesaPendiente = null;

  return async function (...args) {
    const ahora = Date.now();

    if (ahora - ultimaEjecucion >= limite) {
      ultimaEjecucion = ahora;
      return await fn(...args);
    }

    if (!promesaPendiente) {
      promesaPendiente = new Promise((resolve) => {
        setTimeout(async () => {
          ultimaEjecucion = Date.now();
          promesaPendiente = null;
          resolve(await fn(...args));
        }, limite - (ahora - ultimaEjecucion));
      });
    }

    return promesaPendiente;
  };
}

const buscarThrottled = throttleAsync(async (termino) => {
  console.log(`  🔍 Buscando: ${termino}`);
  return `Resultados para ${termino}`;
}, 2000);

async function ejemploThrottle() {
  await buscarThrottled("a"); // Se ejecuta
  await buscarThrottled("ab"); // Espera
  await buscarThrottled("abc"); // Espera
}

ejemploThrottle();

//==============================================================================
// 6. QUEUE CON PRIORIDADES
//==============================================================================

console.log("\n6️⃣ QUEUE CON PRIORIDADES\n");

class PriorityQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  add(task, prioridad = 0) {
    this.queue.push({ task, prioridad });
    this.queue.sort((a, b) => b.prioridad - a.prioridad);

    if (!this.running) {
      this.run();
    }
  }

  async run() {
    this.running = true;

    while (this.queue.length > 0) {
      const { task, prioridad } = this.queue.shift();
      console.log(`  Ejecutando tarea (prioridad: ${prioridad})`);
      await task();
    }

    this.running = false;
  }
}

async function ejemploPriorityQueue() {
  const queue = new PriorityQueue();

  queue.add(async () => {
    await new Promise((r) => setTimeout(r, 500));
    console.log("    ✅ Tarea baja prioridad");
  }, 1);

  queue.add(async () => {
    await new Promise((r) => setTimeout(r, 500));
    console.log("    ✅ Tarea ALTA prioridad");
  }, 10);

  queue.add(async () => {
    await new Promise((r) => setTimeout(r, 500));
    console.log("    ✅ Tarea media prioridad");
  }, 5);
}

ejemploPriorityQueue();

//==============================================================================
// 7. MEMOIZACIÓN ASÍNCRONA
//==============================================================================

console.log("\n7️⃣ MEMOIZACIÓN ASÍNCRONA\n");

function memoizeAsync(fn) {
  const cache = new Map();

  return async function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("  💾 Resultado en cache");
      return cache.get(key);
    }

    console.log("  🔄 Calculando...");
    const resultado = await fn(...args);
    cache.set(key, resultado);
    return resultado;
  };
}

const obtenerUsuarioMemo = memoizeAsync(async (id) => {
  await new Promise((r) => setTimeout(r, 1000));
  return { id, nombre: `Usuario ${id}` };
});

async function ejemploMemoize() {
  await obtenerUsuarioMemo(1); // Calcula
  await obtenerUsuarioMemo(1); // Cache
  await obtenerUsuarioMemo(2); // Calcula
}

ejemploMemoize();

//==============================================================================
// 8. TIMEOUT GENÉRICO
//==============================================================================

console.log("\n8️⃣ TIMEOUT GENÉRICO\n");

function conTimeout(promesa, ms, mensajeError = "Timeout") {
  return Promise.race([
    promesa,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(mensajeError)), ms)
    ),
  ]);
}

async function ejemploTimeout() {
  try {
    // Operación lenta
    const resultado = await conTimeout(
      new Promise((resolve) => setTimeout(() => resolve("Datos"), 5000)),
      2000,
      "La operación tardó demasiado"
    );
    console.log("  ✅", resultado);
  } catch (error) {
    console.error("  ❌", error.message);
  }
}

ejemploTimeout();

//==============================================================================
// 9. POOL DE PROMESAS
//==============================================================================

console.log("\n9️⃣ POOL DE PROMESAS (Límite de concurrencia)\n");

async function poolDePromesas(items, limite, procesarFn) {
  const resultados = [];
  const ejecutando = [];

  for (const item of items) {
    const promesa = procesarFn(item).then((resultado) => {
      ejecutando.splice(ejecutando.indexOf(promesa), 1);
      return resultado;
    });

    ejecutando.push(promesa);

    if (ejecutando.length >= limite) {
      await Promise.race(ejecutando);
    }

    resultados.push(promesa);
  }

  return Promise.all(resultados);
}

async function ejemploPool() {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log("  Procesando con límite de 3...");

  const resultados = await poolDePromesas(ids, 3, async (id) => {
    console.log(`    Procesando ${id}`);
    await new Promise((r) => setTimeout(r, 1000));
    console.log(`    ✅ Completado ${id}`);
    return id * 2;
  });

  console.log("  Resultados:", resultados);
}

ejemploPool();

//==============================================================================
// 10. CANCELABLE PROMISE
//==============================================================================

console.log("\n🔟 CANCELABLE PROMISE\n");

class CancelablePromise {
  constructor(executor) {
    let cancelar;

    this.promise = new Promise((resolve, reject) => {
      cancelar = () => reject(new Error("Promise cancelada"));
      executor(resolve, reject);
    });

    this.cancel = cancelar;
  }

  then(...args) {
    return this.promise.then(...args);
  }

  catch(...args) {
    return this.promise.catch(...args);
  }
}

async function ejemploCancelable() {
  const promesa = new CancelablePromise((resolve) => {
    setTimeout(() => resolve("Completado"), 3000);
  });

  // Cancelar después de 1 segundo
  setTimeout(() => {
    console.log("  ⛔ Cancelando promesa...");
    promesa.cancel();
  }, 1000);

  try {
    const resultado = await promesa;
    console.log("  ✅", resultado);
  } catch (error) {
    console.error("  ❌", error.message);
  }
}

ejemploCancelable();

//==============================================================================
// 11. WATERFALL (Secuencia con resultado acumulado)
//==============================================================================

console.log("\n1️⃣1️⃣ WATERFALL\n");

async function waterfall(funciones, valorInicial) {
  let resultado = valorInicial;

  for (const fn of funciones) {
    console.log(`  Ejecutando paso con valor: ${resultado}`);
    resultado = await fn(resultado);
  }

  return resultado;
}

async function ejemploWaterfall() {
  const resultado = await waterfall(
    [
      async (val) => {
        await new Promise((r) => setTimeout(r, 500));
        return val + 10;
      },
      async (val) => {
        await new Promise((r) => setTimeout(r, 500));
        return val * 2;
      },
      async (val) => {
        await new Promise((r) => setTimeout(r, 500));
        return val - 5;
      },
    ],
    5
  );

  console.log("  ✅ Resultado final:", resultado); // (5 + 10) * 2 - 5 = 25
}

ejemploWaterfall();

//==============================================================================
// 12. ASYNC GENERATOR PATTERN
//==============================================================================

console.log("\n1️⃣2️⃣ ASYNC GENERATOR\n");

async function* generadorAsync(items) {
  for (const item of items) {
    await new Promise((r) => setTimeout(r, 500));
    yield item;
  }
}

async function ejemploGenerator() {
  console.log("  Consumiendo generator...");

  for await (const valor of generadorAsync([1, 2, 3, 4, 5])) {
    console.log(`    ✅ Recibido: ${valor}`);
  }
}

ejemploGenerator();

console.log("\n=== RESUMEN DE PATRONES ===");
console.log("1️⃣  Promise chaining → Transformar datos");
console.log("2️⃣  Parallel/Sequential/Race → Control de flujo");
console.log("3️⃣  Retry con backoff → Resiliencia");
console.log("4️⃣  Circuit Breaker → Protección ante fallos");
console.log("5️⃣  Throttle → Limitar frecuencia");
console.log("6️⃣  Priority Queue → Orden por prioridad");
console.log("7️⃣  Memoización → Cache de resultados");
console.log("8️⃣  Timeout → Límite de tiempo");
console.log("9️⃣  Pool → Límite de concurrencia");
console.log("🔟 Cancelable → Cancelar operaciones");
console.log("1️⃣1️⃣ Waterfall → Secuencia acumulativa");
console.log("1️⃣2️⃣ Async Generator → Streams asíncronos");
console.log("\n🎉 ¡Colección de asincronía completada!");
