//--------------------------------------------------------------------------------------
// 🎯 ABORTCONTROLLER - CANCELAR OPERACIONES ASÍNCRONAS
//--------------------------------------------------------------------------------------
// Cancelar fetch, timeouts, y operaciones asíncronas en general

//--------------------------------------------------------------------------------------
// 1️⃣ CONCEPTO BÁSICO
//--------------------------------------------------------------------------------------

// Crear un controlador
const controller = new AbortController();

// Obtener la señal
const signal = controller.signal;

// Usar la señal en fetch
fetch("https://api.example.com/data", { signal })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("❌ Petición cancelada");
    } else {
      console.error("Error:", error);
    }
  });

// Cancelar la petición
controller.abort();

//--------------------------------------------------------------------------------------
// 2️⃣ TIMEOUT AUTOMÁTICO CON ABORTCONTROLLER
//--------------------------------------------------------------------------------------

async function fetchConTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const signal = controller.signal;

  // Crear timeout que cancela la petición
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, { signal });
    clearTimeout(timeoutId); // Limpiar si termina antes
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === "AbortError") {
      throw new Error(`⏱️ Timeout: La petición tardó más de ${timeout}ms`);
    }
    throw error;
  }
}

// Uso
fetchConTimeout("https://api.example.com/slow-endpoint", 3000)
  .then((data) => console.log("✅ Datos:", data))
  .catch((error) => console.error(error.message));

//--------------------------------------------------------------------------------------
// 3️⃣ CANCELAR MÚLTIPLES PETICIONES CON UN SOLO CONTROLLER
//--------------------------------------------------------------------------------------

async function buscarEnMultiplesAPIs(termino) {
  const controller = new AbortController();
  const signal = controller.signal;

  // Lanzar múltiples peticiones en paralelo
  const peticiones = [
    fetch(`https://api1.com/search?q=${termino}`, { signal }),
    fetch(`https://api2.com/search?q=${termino}`, { signal }),
    fetch(`https://api3.com/search?q=${termino}`, { signal }),
  ];

  try {
    const resultados = await Promise.all(peticiones);
    return await Promise.all(resultados.map((r) => r.json()));
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("🛑 Búsqueda cancelada");
    }
    throw error;
  }
}

// Cancelar todas las peticiones
const controller2 = new AbortController();
buscarEnMultiplesAPIs("javascript");

// Si el usuario cancela:
setTimeout(() => controller2.abort(), 1000);

//--------------------------------------------------------------------------------------
// 4️⃣ PATRÓN: CANCELAR PETICIÓN ANTERIOR AL HACER UNA NUEVA
//--------------------------------------------------------------------------------------

class BuscadorAPI {
  constructor() {
    this.controller = null;
  }

  async buscar(termino) {
    // Cancelar búsqueda anterior si existe
    if (this.controller) {
      this.controller.abort();
    }

    // Crear nuevo controller para esta búsqueda
    this.controller = new AbortController();
    const signal = this.controller.signal;

    try {
      const response = await fetch(
        `https://api.example.com/search?q=${termino}`,
        { signal }
      );

      return await response.json();
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("🔄 Búsqueda reemplazada por una nueva");
        return null;
      }
      throw error;
    }
  }
}

// Uso: Solo la última búsqueda se completa
const buscador = new BuscadorAPI();
buscador.buscar("java"); // Se cancela
buscador.buscar("javascript"); // Se cancela
buscador.buscar("js"); // Esta se completa

//--------------------------------------------------------------------------------------
// 5️⃣ USAR CON EVENTOS PERSONALIZADOS
//--------------------------------------------------------------------------------------

function operacionConCancelacion(signal) {
  return new Promise((resolve, reject) => {
    // Verificar si ya está cancelado antes de empezar
    if (signal.aborted) {
      reject(new DOMException("Operación cancelada", "AbortError"));
      return;
    }

    // Escuchar evento de cancelación
    signal.addEventListener("abort", () => {
      reject(new DOMException("Operación cancelada", "AbortError"));
    });

    // Simular operación asíncrona
    setTimeout(() => {
      resolve("✅ Operación completada");
    }, 3000);
  });
}

// Uso
const controller3 = new AbortController();
operacionConCancelacion(controller3.signal)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log("❌", error.message));

// Cancelar después de 1 segundo
setTimeout(() => controller3.abort(), 1000);

//--------------------------------------------------------------------------------------
// 6️⃣ PROGRESS + CANCELACIÓN
//--------------------------------------------------------------------------------------

async function descargarConProgreso(url, onProgress) {
  const controller = new AbortController();
  const signal = controller.signal;

  const response = await fetch(url, { signal });
  const reader = response.body.getReader();
  const contentLength = +response.headers.get("Content-Length");

  let receivedLength = 0;
  const chunks = [];

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    chunks.push(value);
    receivedLength += value.length;

    // Reportar progreso
    const porcentaje = (receivedLength / contentLength) * 100;
    onProgress?.(porcentaje);

    // Verificar cancelación
    if (signal.aborted) {
      reader.cancel();
      throw new DOMException("Descarga cancelada", "AbortError");
    }
  }

  // Combinar chunks
  const blob = new Blob(chunks);
  return blob;
}

// Uso
const controllerDescarga = new AbortController();
descargarConProgreso("https://example.com/archivo-grande.zip", (progreso) =>
  console.log(`📥 ${progreso.toFixed(1)}%`)
)
  .then((blob) => console.log("✅ Descarga completa:", blob.size))
  .catch((error) => console.log("❌", error.message));

// Cancelar si es necesario
// controllerDescarga.abort();

//--------------------------------------------------------------------------------------
// 7️⃣ REACT: CANCELAR FETCH EN USEEFFECT
//--------------------------------------------------------------------------------------

/*
// Patrón común en React para evitar memory leaks
function MiComponente() {
  const [datos, setDatos] = useState(null);
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    
    async function cargarDatos() {
      try {
        const response = await fetch('/api/datos', { signal });
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error:', error);
        }
      }
    }
    
    cargarDatos();
    
    // Cleanup: cancelar al desmontar
    return () => controller.abort();
  }, []);
  
  return <div>{datos ? JSON.stringify(datos) : 'Cargando...'}</div>;
}
*/

//--------------------------------------------------------------------------------------
// 8️⃣ TIMEOUT CON SIGNAL HELPER (Node.js 15.4+)
//--------------------------------------------------------------------------------------

// En Node.js puedes usar AbortSignal.timeout()
/*
async function fetchConTimeoutModerno(url, timeout = 5000) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(timeout)
    });
    return await response.json();
  } catch (error) {
    if (error.name === 'TimeoutError' || error.name === 'AbortError') {
      throw new Error(`Timeout después de ${timeout}ms`);
    }
    throw error;
  }
}
*/

//--------------------------------------------------------------------------------------
// 9️⃣ CLASE REUTILIZABLE PARA PETICIONES CANCELABLES
//--------------------------------------------------------------------------------------

class FetchCancelable {
  constructor() {
    this.controller = null;
  }

  async fetch(url, options = {}) {
    // Cancelar petición anterior
    this.cancelar();

    // Nueva petición
    this.controller = new AbortController();

    try {
      const response = await fetch(url, {
        ...options,
        signal: this.controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("🔄 Petición cancelada");
        return null;
      }
      throw error;
    }
  }

  cancelar() {
    if (this.controller) {
      this.controller.abort();
      this.controller = null;
    }
  }

  estaActiva() {
    return this.controller !== null;
  }
}

// Uso
const api = new FetchCancelable();

// Primera petición (se cancela automáticamente)
api.fetch("https://api.example.com/datos1");

// Segunda petición
setTimeout(() => {
  api.fetch("https://api.example.com/datos2");
}, 500);

// Cancelar manualmente
setTimeout(() => {
  api.cancelar();
}, 1000);

//--------------------------------------------------------------------------------------
// 🔟 CASOS PRÁCTICOS COMPLETOS
//--------------------------------------------------------------------------------------

// Caso 1: Búsqueda con debounce y cancelación
class BuscadorConDebounce {
  constructor(delay = 300) {
    this.delay = delay;
    this.timeoutId = null;
    this.controller = null;
  }

  async buscar(termino, callback) {
    // Limpiar timeout anterior
    clearTimeout(this.timeoutId);

    // Cancelar petición anterior
    if (this.controller) {
      this.controller.abort();
    }

    // Esperar delay antes de buscar
    this.timeoutId = setTimeout(async () => {
      this.controller = new AbortController();

      try {
        const response = await fetch(
          `https://api.example.com/search?q=${termino}`,
          { signal: this.controller.signal }
        );
        const resultados = await response.json();
        callback(null, resultados);
      } catch (error) {
        if (error.name !== "AbortError") {
          callback(error, null);
        }
      }
    }, this.delay);
  }
}

// Caso 2: Sistema de reintentos con cancelación
async function fetchConReintentos(url, opciones = {}) {
  const { reintentos = 3, timeout = 5000 } = opciones;
  const controller = new AbortController();

  for (let intento = 1; intento <= reintentos; intento++) {
    try {
      const response = await fetchConTimeout(url, timeout);
      return response;
    } catch (error) {
      if (error.name === "AbortError") {
        throw error; // No reintentar si fue cancelado manualmente
      }

      if (intento === reintentos) {
        throw new Error(`Fallo después de ${reintentos} intentos`);
      }

      console.log(`⚠️ Intento ${intento} falló, reintentando...`);
      await new Promise((resolve) => setTimeout(resolve, 1000 * intento));
    }
  }
}

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:

1. Siempre limpiar AbortController cuando ya no se necesita
2. Verificar error.name === 'AbortError' en catch
3. Usar un controller por grupo de operaciones relacionadas
4. Cancelar peticiones anteriores en búsquedas en tiempo real
5. Combinar con useEffect cleanup en React

❌ EVITAR:

1. Reutilizar el mismo controller después de abort()
2. No manejar AbortError en catch
3. Olvidar clearTimeout cuando usas setTimeout
4. Crear controllers sin usarlos
5. No cancelar en cleanup de efectos (React)
*/

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ COMPATIBILIDAD
//--------------------------------------------------------------------------------------

/*
✅ SOPORTE:

- Chrome 66+ (Abril 2018)
- Firefox 57+ (Noviembre 2017)
- Safari 12.1+ (Marzo 2019)
- Edge 16+ (Septiembre 2017)
- Node.js 15+

⚠️ Para navegadores antiguos:
- Polyfill: abortcontroller-polyfill
- npm install abortcontroller-polyfill
*/

console.log(`
╔═══════════════════════════════════════════════════════════╗
║           ABORTCONTROLLER - RESUMEN                       ║
╠═══════════════════════════════════════════════════════════╣
║ • Cancelar fetch y operaciones asíncronas                ║
║ • Un controller puede cancelar múltiples operaciones     ║
║ • Útil para búsquedas, descargas, timeouts               ║
║ • Evita memory leaks en componentes                      ║
║ • Detectar cancelación: error.name === 'AbortError'      ║
║                                                           ║
║ Patrón: controller.abort() → AbortError en catch         ║
╚═══════════════════════════════════════════════════════════╝
`);
