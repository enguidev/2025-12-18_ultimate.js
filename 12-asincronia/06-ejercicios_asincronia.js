//==============================================================================
// 06 - EJERCICIOS DE ASINCRONÍA
//==============================================================================

console.log("=== 15 EJERCICIOS PRÁCTICOS ===\n");

//==============================================================================
// EJERCICIO 1: Esperar X segundos
//==============================================================================

console.log("📝 EJERCICIO 1: Crear función sleep()\n");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ejercicio1() {
  console.log("  Inicio");
  await sleep(2000);
  console.log("  Después de 2 segundos");
}

ejercicio1();

//==============================================================================
// EJERCICIO 2: Cargar datos de usuario con timeout
//==============================================================================

console.log("\n📝 EJERCICIO 2: Cargar usuario con timeout\n");

async function cargarUsuarioConTimeout(id, timeout = 3000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Timeout: Petición tardó demasiado");
    }
    throw error;
  }
}

cargarUsuarioConTimeout(1)
  .then((user) => {
    console.log("  Usuario:", user.name);
  })
  .catch((error) => {
    console.error("  Error:", error.message);
  });

//==============================================================================
// EJERCICIO 3: Retry logic (reintentar si falla)
//==============================================================================

console.log("\n📝 EJERCICIO 3: Reintentar petición fallida\n");

async function fetchConReintentos(url, maxReintentos = 3) {
  for (let intento = 1; intento <= maxReintentos; intento++) {
    try {
      console.log(`  Intento ${intento}...`);
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error(`  ❌ Intento ${intento} falló:`, error.message);
      if (intento === maxReintentos) throw error;
      await sleep(1000 * intento); // Esperar más tiempo en cada reintento
    }
  }
}

fetchConReintentos("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("  ✅ Datos obtenidos:", data.title))
  .catch((error) => console.error("  ❌ Todos los intentos fallaron"));

//==============================================================================
// EJERCICIO 4: Procesar array de URLs en paralelo
//==============================================================================

console.log("\n📝 EJERCICIO 4: Cargar múltiples posts en paralelo\n");

async function cargarMultiplesPosts(ids) {
  const promesas = ids.map((id) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((r) =>
      r.json()
    )
  );

  return await Promise.all(promesas);
}

cargarMultiplesPosts([1, 2, 3]).then((posts) => {
  console.log("  ✅ Posts cargados:");
  posts.forEach((post) => console.log(`    • ${post.title}`));
});

//==============================================================================
// EJERCICIO 5: Cargar datos secuencialmente
//==============================================================================

console.log("\n📝 EJERCICIO 5: Cargar usuario → posts → comentarios\n");

async function cargarDatosCompletos(userId) {
  try {
    // 1. Cargar usuario
    const usuario = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then((r) => r.json());
    console.log("  1. Usuario:", usuario.name);

    // 2. Cargar posts del usuario
    const posts = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    ).then((r) => r.json());
    console.log("  2. Posts:", posts.length);

    // 3. Cargar comentarios del primer post
    if (posts.length > 0) {
      const comentarios = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`
      ).then((r) => r.json());
      console.log("  3. Comentarios:", comentarios.length);
    }
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

cargarDatosCompletos(1);

//==============================================================================
// EJERCICIO 6: Rate limiting (limitar peticiones por segundo)
//==============================================================================

console.log("\n📝 EJERCICIO 6: Rate limiting (máximo 2 peticiones/segundo)\n");

class RateLimiter {
  constructor(maxPorSegundo) {
    this.maxPorSegundo = maxPorSegundo;
    this.cola = [];
    this.ejecutandose = 0;
  }

  async ejecutar(fn) {
    while (this.ejecutandose >= this.maxPorSegundo) {
      await sleep(100);
    }

    this.ejecutandose++;
    try {
      return await fn();
    } finally {
      this.ejecutandose--;
    }
  }
}

async function ejemploRateLimiting() {
  const limiter = new RateLimiter(2);
  const ids = [1, 2, 3, 4, 5];

  console.log("  Cargando con rate limiting...");

  const promesas = ids.map((id) =>
    limiter.ejecutar(async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      console.log(`  ✅ Post ${id} cargado`);
      return data;
    })
  );

  await Promise.all(promesas);
  console.log("  Todos cargados respetando rate limit");
}

ejemploRateLimiting();

//==============================================================================
// EJERCICIO 7: Cache simple
//==============================================================================

console.log("\n📝 EJERCICIO 7: Cache de peticiones\n");

class CacheAPI {
  constructor() {
    this.cache = new Map();
  }

  async get(url) {
    if (this.cache.has(url)) {
      console.log(`  💾 Cache hit: ${url}`);
      return this.cache.get(url);
    }

    console.log(`  🌐 Fetching: ${url}`);
    const response = await fetch(url);
    const data = await response.json();
    this.cache.set(url, data);
    return data;
  }
}

async function ejemploCache() {
  const cache = new CacheAPI();
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  await cache.get(url); // Primera vez: fetch
  await cache.get(url); // Segunda vez: cache
}

ejemploCache();

//==============================================================================
// EJERCICIO 8: Procesar array con límite de concurrencia
//==============================================================================

console.log("\n📝 EJERCICIO 8: Procesar con límite de concurrencia\n");

async function procesarConLimite(items, limite, procesarFn) {
  const resultados = [];

  for (let i = 0; i < items.length; i += limite) {
    const chunk = items.slice(i, i + limite);
    const resultadosChunk = await Promise.all(
      chunk.map((item) => procesarFn(item))
    );
    resultados.push(...resultadosChunk);
    console.log(
      `  ✅ Procesados ${Math.min(i + limite, items.length)}/${items.length}`
    );
  }

  return resultados;
}

async function ejemploConcurrencia() {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8];

  const posts = await procesarConLimite(ids, 3, async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return await response.json();
  });

  console.log(`  Total cargados: ${posts.length}`);
}

ejemploConcurrencia();

//==============================================================================
// EJERCICIO 9: Simular progreso de descarga
//==============================================================================

console.log("\n📝 EJERCICIO 9: Simular progreso de descarga\n");

async function descargarConProgreso(url, onProgress) {
  let progreso = 0;
  const intervalo = setInterval(() => {
    progreso += 10;
    onProgress(progreso);
    if (progreso >= 100) {
      clearInterval(intervalo);
    }
  }, 200);

  await sleep(2000);
  return "Archivo descargado";
}

descargarConProgreso("archivo.pdf", (progreso) => {
  console.log(`  📥 Descargando: ${progreso}%`);
}).then((resultado) => {
  console.log(`  ✅ ${resultado}`);
});

//==============================================================================
// EJERCICIO 10: Queue de tareas
//==============================================================================

console.log("\n📝 EJERCICIO 10: Cola de tareas asíncronas\n");

class TaskQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  add(task) {
    this.queue.push(task);
    if (!this.running) {
      this.run();
    }
  }

  async run() {
    this.running = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();
      try {
        await task();
      } catch (error) {
        console.error("  ❌ Error en tarea:", error.message);
      }
    }

    this.running = false;
  }
}

async function ejemploQueue() {
  const queue = new TaskQueue();

  queue.add(async () => {
    console.log("  Tarea 1 iniciada");
    await sleep(500);
    console.log("  ✅ Tarea 1 completada");
  });

  queue.add(async () => {
    console.log("  Tarea 2 iniciada");
    await sleep(500);
    console.log("  ✅ Tarea 2 completada");
  });

  queue.add(async () => {
    console.log("  Tarea 3 iniciada");
    await sleep(500);
    console.log("  ✅ Tarea 3 completada");
  });
}

ejemploQueue();

//==============================================================================
// EJERCICIO 11: Debounce asíncrono
//==============================================================================

console.log("\n📝 EJERCICIO 11: Debounce para búsqueda\n");

function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    return new Promise((resolve) => {
      timeoutId = setTimeout(async () => {
        resolve(await fn(...args));
      }, delay);
    });
  };
}

const buscarAPI = debounce(async (termino) => {
  console.log(`  🔍 Buscando: ${termino}`);
  await sleep(500);
  return [`Resultado 1 para ${termino}`, `Resultado 2 para ${termino}`];
}, 300);

// Simular escritura rápida
async function ejemploDebounce() {
  buscarAPI("jav"); // Se cancela
  buscarAPI("javas"); // Se cancela
  const resultados = await buscarAPI("javascript"); // Este se ejecuta
  console.log("  Resultados:", resultados);
}

ejemploDebounce();

//==============================================================================
// EJERCICIO 12: Polling (consultar repetidamente)
//==============================================================================

console.log("\n📝 EJERCICIO 12: Polling cada X segundos\n");

async function poll(fn, intervalo, maxIntentos = 10) {
  for (let i = 0; i < maxIntentos; i++) {
    try {
      const resultado = await fn();
      if (resultado) {
        return resultado;
      }
    } catch (error) {
      console.error(`  ❌ Intento ${i + 1} falló`);
    }

    if (i < maxIntentos - 1) {
      await sleep(intervalo);
    }
  }

  throw new Error("Max intentos alcanzados");
}

async function ejemploPolling() {
  let intentos = 0;

  const resultado = await poll(
    async () => {
      intentos++;
      console.log(`  🔄 Polling intento ${intentos}`);

      // Simular que se completa en el intento 3
      if (intentos >= 3) {
        return "Proceso completado";
      }
      return null;
    },
    1000,
    5
  );

  console.log(`  ✅ ${resultado}`);
}

ejemploPolling();

//==============================================================================
// EJERCICIO 13: Wrapper para localStorage async
//==============================================================================

console.log("\n📝 EJERCICIO 13: LocalStorage asíncrono\n");

const AsyncStorage = {
  async getItem(key) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const value = localStorage.getItem(key);
        resolve(value ? JSON.parse(value) : null);
      }, 0);
    });
  },

  async setItem(key, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(key, JSON.stringify(value));
        resolve();
      }, 0);
    });
  },
};

async function ejemploAsyncStorage() {
  console.log("  Guardando en localStorage...");
  await AsyncStorage.setItem("usuario", { nombre: "Ana", edad: 25 });

  const usuario = await AsyncStorage.getItem("usuario");
  console.log("  ✅ Usuario:", usuario);
}

ejemploAsyncStorage();

//==============================================================================
// EJERCICIO 14: Cargar imágenes con Promise.allSettled
//==============================================================================

console.log("\n📝 EJERCICIO 14: Cargar imágenes (algunas fallan)\n");

async function cargarImagenes(urls) {
  const promesas = urls.map((url) =>
    fetch(url)
      .then((r) => r.blob())
      .then((blob) => ({ url, blob, exito: true }))
      .catch((error) => ({ url, error: error.message, exito: false }))
  );

  const resultados = await Promise.allSettled(promesas);

  return resultados.map((r, i) =>
    r.status === "fulfilled" ? r.value : { url: urls[i], exito: false }
  );
}

async function ejemploImagenes() {
  const urls = [
    "https://via.placeholder.com/150",
    "https://url-invalida-123.com/imagen.jpg",
    "https://via.placeholder.com/200",
  ];

  const resultados = await cargarImagenes(urls);

  resultados.forEach((r) => {
    if (r.exito) {
      console.log(`  ✅ Imagen cargada: ${r.url}`);
    } else {
      console.log(`  ❌ Falló: ${r.url}`);
    }
  });
}

ejemploImagenes();

//==============================================================================
// EJERCICIO 15: API completa con todos los métodos
//==============================================================================

console.log("\n📝 EJERCICIO 15: Clase API completa\n");

class APIService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.cache = new Map();
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const cacheKey = `${options.method || "GET"}-${url}`;

    // Usar cache solo para GET
    if (!options.method || options.method === "GET") {
      if (this.cache.has(cacheKey)) {
        console.log(`  💾 Cache: ${endpoint}`);
        return this.cache.get(cacheKey);
      }
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      if (!options.method || options.method === "GET") {
        this.cache.set(cacheKey, data);
      }

      return data;
    } catch (error) {
      console.error(`  ❌ Error en ${endpoint}:`, error.message);
      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint);
  }

  post(endpoint, body) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  put(endpoint, body) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: "DELETE" });
  }
}

async function ejemploAPICompleta() {
  const api = new APIService("https://jsonplaceholder.typicode.com");

  const post = await api.get("/posts/1");
  console.log("  ✅ GET:", post.title);

  await api.get("/posts/1"); // Usa cache

  const nuevo = await api.post("/posts", {
    title: "Nuevo Post",
    body: "Contenido",
    userId: 1,
  });
  console.log("  ✅ POST creado:", nuevo.id);
}

ejemploAPICompleta();

console.log("\n=== ¡15 EJERCICIOS COMPLETADOS! ===");
console.log("💡 Practica combinando estos patrones");
console.log("💡 Adapta las soluciones a tus proyectos reales");
