//==============================================================================
// 05 - FETCH API
//==============================================================================

console.log("=== ¿QUÉ ES FETCH API? ===\n");

/*
🌐 FETCH = API moderna para hacer peticiones HTTP
Reemplaza a XMLHttpRequest (la forma antigua)
Devuelve PROMESAS → perfecto para async/await
Incluido en navegadores modernos

Usos comunes:
- Obtener datos de APIs (GET)
- Enviar datos a servidor (POST)
- Actualizar datos (PUT/PATCH)
- Eliminar datos (DELETE)
*/

console.log("Métodos HTTP principales:");
console.log("  GET    → Obtener datos");
console.log("  POST   → Crear datos");
console.log("  PUT    → Actualizar (completo)");
console.log("  PATCH  → Actualizar (parcial)");
console.log("  DELETE → Eliminar datos");

console.log("\n=== SINTAXIS BÁSICA ===\n");

console.log("Estructura básica:");
console.log(`
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    
  // O con async/await (mejor):
  const response = await fetch(url);
  const data = await response.json();
`);

console.log("\n=== GET: OBTENER DATOS ===\n");

// GET es el método por defecto
async function obtenerDatos() {
  try {
    console.log("  Haciendo petición GET...");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("  ✅ Datos recibidos:");
    console.log("    Título:", data.title);
    console.log("    Cuerpo:", data.body.substring(0, 50) + "...");
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

obtenerDatos();

console.log("\n=== MÉTODOS DE RESPONSE ===\n");

console.log("Métodos para extraer datos:");
console.log("  • response.json()     → Parsear JSON");
console.log("  • response.text()     → Texto plano");
console.log("  • response.blob()     → Binario (imágenes)");
console.log("  • response.arrayBuffer() → Buffer de datos");
console.log("  • response.formData() → Datos de formulario");

console.log("\nPropiedades útiles:");
console.log("  • response.ok         → true si status 200-299");
console.log("  • response.status     → Código HTTP (200, 404, etc)");
console.log("  • response.statusText → Texto del estado");
console.log("  • response.headers    → Cabeceras de respuesta");

console.log("\n=== POST: ENVIAR DATOS ===\n");

async function crearPost() {
  try {
    console.log("  Creando nuevo post (POST)...");

    const nuevoPost = {
      title: "Mi Nuevo Post",
      body: "Contenido del post",
      userId: 1,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // Método HTTP
      headers: {
        "Content-Type": "application/json", // Tipo de contenido
      },
      body: JSON.stringify(nuevoPost), // Convertir a JSON
    });

    const data = await response.json();
    console.log("  ✅ Post creado:");
    console.log("    ID:", data.id);
    console.log("    Título:", data.title);
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

crearPost();

console.log("\n=== PUT: ACTUALIZAR DATOS (COMPLETO) ===\n");

async function actualizarPost() {
  try {
    console.log("  Actualizando post (PUT)...");

    const postActualizado = {
      id: 1,
      title: "Título Actualizado",
      body: "Contenido actualizado",
      userId: 1,
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postActualizado),
      }
    );

    const data = await response.json();
    console.log("  ✅ Post actualizado:", data.title);
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

actualizarPost();

console.log("\n=== PATCH: ACTUALIZAR DATOS (PARCIAL) ===\n");

async function actualizarParcial() {
  try {
    console.log("  Actualizando título (PATCH)...");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Solo actualizo el título",
        }),
      }
    );

    const data = await response.json();
    console.log("  ✅ Título actualizado:", data.title);
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

actualizarParcial();

console.log("\n=== DELETE: ELIMINAR DATOS ===\n");

async function eliminarPost() {
  try {
    console.log("  Eliminando post (DELETE)...");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log("  ✅ Post eliminado exitosamente");
    }
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

eliminarPost();

console.log("\n=== MANEJO DE ERRORES COMPLETO ===\n");

async function peticionConErrores() {
  try {
    console.log("  Haciendo petición con manejo de errores...");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/999999"
    );

    // Verificar status HTTP
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("  ✅ Datos:", data);
  } catch (error) {
    if (error.message.includes("Failed to fetch")) {
      console.error("  ❌ Error de red: Sin conexión");
    } else if (error.message.includes("404")) {
      console.error("  ❌ Recurso no encontrado");
    } else {
      console.error("  ❌ Error:", error.message);
    }
  }
}

peticionConErrores();

console.log("\n=== HEADERS (CABECERAS) ===\n");

async function conHeaders() {
  try {
    console.log("  Petición con headers personalizados...");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer TOKEN123",
          "Custom-Header": "Valor personalizado",
        },
      }
    );

    console.log("  Headers de la respuesta:");
    console.log("    Content-Type:", response.headers.get("Content-Type"));
    console.log("    Date:", response.headers.get("Date"));
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

conHeaders();

console.log("\n=== TIMEOUT PARA FETCH ===\n");

async function fetchConTimeout(url, timeout = 5000) {
  try {
    console.log("  Fetch con timeout de 5 segundos...");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("  ❌ Timeout: La petición tardó demasiado");
    } else {
      console.error("  ❌ Error:", error.message);
    }
  }
}

fetchConTimeout("https://jsonplaceholder.typicode.com/posts/1");

console.log("\n=== CANCELAR PETICIONES ===\n");

async function peticionCancelable() {
  const controller = new AbortController();

  console.log("  Iniciando petición cancelable...");

  // Cancelar después de 100ms
  setTimeout(() => {
    console.log("  ⛔ Cancelando petición...");
    controller.abort();
  }, 100);

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        signal: controller.signal,
      }
    );
    const data = await response.json();
    console.log("  ✅ Datos:", data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("  ❌ Petición cancelada por el usuario");
    }
  }
}

peticionCancelable();

console.log("\n=== MÚLTIPLES PETICIONES EN PARALELO ===\n");

async function multiplesPeticiones() {
  try {
    console.log("  Haciendo 3 peticiones en paralelo...");

    const [posts, usuarios, comentarios] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/comments").then((r) =>
        r.json()
      ),
    ]);

    console.log("  ✅ Posts:", posts.length);
    console.log("  ✅ Usuarios:", usuarios.length);
    console.log("  ✅ Comentarios:", comentarios.length);
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

multiplesPeticiones();

console.log("\n=== ENVIAR FORMDATA ===\n");

async function enviarFormulario() {
  try {
    console.log("  Enviando FormData...");

    const formData = new FormData();
    formData.append("nombre", "Juan");
    formData.append("email", "juan@example.com");
    // formData.append('archivo', fileInput.files[0]);

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData, // No incluir Content-Type, fetch lo añade automáticamente
    });

    console.log("  ✅ Formulario enviado");
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

enviarFormulario();

console.log("\n=== DESCARGAR ARCHIVO ===\n");

async function descargarImagen() {
  try {
    console.log("  Descargando imagen...");

    const response = await fetch("https://via.placeholder.com/150");
    const blob = await response.blob();

    console.log("  ✅ Imagen descargada:");
    console.log("    Tamaño:", blob.size, "bytes");
    console.log("    Tipo:", blob.type);

    // Crear URL para mostrar/descargar
    const url = URL.createObjectURL(blob);
    console.log("    URL:", url);
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

descargarImagen();

console.log("\n=== UTILIDAD: FUNCIÓN FETCH REUTILIZABLE ===\n");

class API {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    if (options.body) {
      config.body = JSON.stringify(options.body);
    }

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Error en ${endpoint}:`, error.message);
      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint);
  }

  post(endpoint, body) {
    return this.request(endpoint, { method: "POST", body });
  }

  put(endpoint, body) {
    return this.request(endpoint, { method: "PUT", body });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: "DELETE" });
  }
}

// Uso de la clase API
const api = new API("https://jsonplaceholder.typicode.com");

async function usarAPI() {
  try {
    console.log("  Usando clase API...");

    const post = await api.get("/posts/1");
    console.log("  ✅ GET:", post.title);

    const nuevoPost = await api.post("/posts", {
      title: "Nuevo Post",
      body: "Contenido",
      userId: 1,
    });
    console.log("  ✅ POST creado:", nuevoPost.id);
  } catch (error) {
    console.error("  ❌ Error:", error.message);
  }
}

usarAPI();

console.log("\n=== RESUMEN ===");
console.log("✅ fetch(url) hace peticiones HTTP");
console.log("✅ Devuelve promesa → usar async/await");
console.log("✅ response.json() convierte a objeto JS");
console.log("✅ Verificar response.ok antes de parsear");
console.log("✅ GET por defecto, especificar method para POST/PUT/DELETE");
console.log("✅ Headers en objeto headers: {}");
console.log("✅ Body en JSON: JSON.stringify(datos)");
console.log("✅ AbortController para cancelar/timeout");
console.log("✅ Promise.all() para múltiples peticiones paralelas");
console.log("\n🎯 Siguiente: 06-ejercicios_asincronia.js");
