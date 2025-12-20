//--------------------------------------------------------------------------------------
// STORAGE - LOCALSTORAGE Y SESSIONSTORAGE
//--------------------------------------------------------------------------------------

/*
🎯 Almacenamiento en el navegador

LocalStorage y SessionStorage permiten guardar datos en el navegador.

Diferencias principales:
┌─────────────────┬─────────────────┬─────────────────┐
│ Característica  │ localStorage    │ sessionStorage  │
├─────────────────┼─────────────────┼─────────────────┤
│ Persistencia    │ Permanente      │ Solo sesión     │
│ Ámbito          │ Todo el dominio │ Solo pestaña    │
│ Capacidad       │ ~5-10MB         │ ~5-10MB         │
│ Uso típico      │ Preferencias    │ Datos temporales│
└─────────────────┴─────────────────┴─────────────────┘
*/

//--------------------------------------------------------------------------------------
// LOCALSTORAGE - ALMACENAMIENTO PERSISTENTE
//--------------------------------------------------------------------------------------

// 📝 OPERACIONES BÁSICAS

// 1. Guardar datos (setItem)
localStorage.setItem("nombre", "Cristian");
localStorage.setItem("edad", "30");
localStorage.setItem("tema", "oscuro");

// 2. Leer datos (getItem)
const nombre = localStorage.getItem("nombre");
console.log("Nombre guardado:", nombre);

// 3. Eliminar un dato específico (removeItem)
localStorage.removeItem("edad");

// 4. Eliminar todos los datos (clear)
// localStorage.clear(); // ⚠️ Cuidado: borra TODO

// 5. Verificar si existe una clave
if (localStorage.getItem("nombre") !== null) {
  console.log("✅ El nombre existe en localStorage");
}

// 6. Obtener número total de elementos
console.log("📦 Total elementos:", localStorage.length);

// 7. Obtener clave por índice
const primeraClave = localStorage.key(0);
console.log("Primera clave:", primeraClave);

// 8. Obtener todas las claves
function obtenerTodasLasClaves() {
  const claves = [];
  for (let i = 0; i < localStorage.length; i++) {
    claves.push(localStorage.key(i));
  }
  return claves;
}

console.log("Todas las claves:", obtenerTodasLasClaves());

//--------------------------------------------------------------------------------------
// GUARDAR OBJETOS Y ARRAYS
//--------------------------------------------------------------------------------------

// ⚠️ IMPORTANTE: localStorage solo guarda strings
// Para guardar objetos/arrays, usar JSON.stringify() y JSON.parse()

// Guardar un objeto
const usuario = {
  nombre: "Ana",
  edad: 28,
  email: "ana@example.com",
  activo: true,
};

// Convertir a JSON y guardar
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar y parsear
const usuarioRecuperado = JSON.parse(localStorage.getItem("usuario"));
console.log("Usuario recuperado:", usuarioRecuperado);
console.log("Nombre:", usuarioRecuperado.nombre);

// Guardar un array
const tareas = [
  { id: 1, texto: "Aprender JavaScript", completada: false },
  { id: 2, texto: "Hacer ejercicios", completada: true },
  { id: 3, texto: "Repasar DOM", completada: false },
];

localStorage.setItem("tareas", JSON.stringify(tareas));

// Recuperar array
const tareasRecuperadas = JSON.parse(localStorage.getItem("tareas"));
console.log("Tareas:", tareasRecuperadas);

// Modificar y volver a guardar
tareasRecuperadas[0].completada = true;
localStorage.setItem("tareas", JSON.stringify(tareasRecuperadas));

//--------------------------------------------------------------------------------------
// CLASE HELPER PARA STORAGE
//--------------------------------------------------------------------------------------

class StorageManager {
  /**
   * Guarda un valor en localStorage
   */
  static set(key, value) {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      return true;
    } catch (error) {
      console.error("❌ Error al guardar:", error);
      return false;
    }
  }

  /**
   * Obtiene un valor de localStorage
   */
  static get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error("❌ Error al leer:", error);
      return defaultValue;
    }
  }

  /**
   * Elimina un valor
   */
  static remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error("❌ Error al eliminar:", error);
      return false;
    }
  }

  /**
   * Limpia todo el storage
   */
  static clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error("❌ Error al limpiar:", error);
      return false;
    }
  }

  /**
   * Verifica si existe una clave
   */
  static has(key) {
    return localStorage.getItem(key) !== null;
  }

  /**
   * Obtiene todas las claves
   */
  static keys() {
    return Object.keys(localStorage);
  }

  /**
   * Obtiene todos los valores
   */
  static getAll() {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      items[key] = this.get(key);
    }
    return items;
  }
}

// Uso del StorageManager
StorageManager.set("usuario", { nombre: "Carlos", edad: 35 });
const user = StorageManager.get("usuario");
console.log("Usuario:", user);

//--------------------------------------------------------------------------------------
// EJEMPLO PRÁCTICO 1: SISTEMA DE PREFERENCIAS
//--------------------------------------------------------------------------------------

class PreferenciasUsuario {
  constructor() {
    this.key = "preferencias_usuario";
    this.defaults = {
      tema: "claro",
      idioma: "es",
      notificaciones: true,
      fontSize: 16,
      ultimoLogin: null,
    };
  }

  /**
   * Carga las preferencias (o usa defaults)
   */
  cargar() {
    const guardadas = StorageManager.get(this.key);
    return guardadas ? { ...this.defaults, ...guardadas } : this.defaults;
  }

  /**
   * Guarda las preferencias
   */
  guardar(preferencias) {
    return StorageManager.set(this.key, preferencias);
  }

  /**
   * Actualiza una preferencia específica
   */
  actualizar(campo, valor) {
    const prefs = this.cargar();
    prefs[campo] = valor;
    return this.guardar(prefs);
  }

  /**
   * Obtiene una preferencia específica
   */
  obtener(campo) {
    const prefs = this.cargar();
    return prefs[campo];
  }

  /**
   * Resetea a valores por defecto
   */
  resetear() {
    return this.guardar(this.defaults);
  }

  /**
   * Aplica las preferencias al DOM
   */
  aplicar() {
    const prefs = this.cargar();

    // Aplicar tema
    document.body.classList.toggle("tema-oscuro", prefs.tema === "oscuro");

    // Aplicar tamaño de fuente
    document.documentElement.style.fontSize = `${prefs.fontSize}px`;

    console.log("✅ Preferencias aplicadas:", prefs);
  }
}

// Uso
const preferencias = new PreferenciasUsuario();
// preferencias.actualizar('tema', 'oscuro');
// preferencias.aplicar();

//--------------------------------------------------------------------------------------
// EJEMPLO PRÁCTICO 2: LISTA DE TAREAS PERSISTENTE
//--------------------------------------------------------------------------------------

class ListaTareas {
  constructor() {
    this.key = "lista_tareas";
  }

  /**
   * Obtiene todas las tareas
   */
  obtenerTodas() {
    return StorageManager.get(this.key, []);
  }

  /**
   * Agrega una nueva tarea
   */
  agregar(texto) {
    const tareas = this.obtenerTodas();
    const nueva = {
      id: Date.now(),
      texto: texto,
      completada: false,
      fechaCreacion: new Date().toISOString(),
    };
    tareas.push(nueva);
    StorageManager.set(this.key, tareas);
    return nueva;
  }

  /**
   * Marca una tarea como completada/no completada
   */
  toggleCompletar(id) {
    const tareas = this.obtenerTodas();
    const tarea = tareas.find((t) => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      StorageManager.set(this.key, tareas);
    }
  }

  /**
   * Elimina una tarea
   */
  eliminar(id) {
    let tareas = this.obtenerTodas();
    tareas = tareas.filter((t) => t.id !== id);
    StorageManager.set(this.key, tareas);
  }

  /**
   * Edita el texto de una tarea
   */
  editar(id, nuevoTexto) {
    const tareas = this.obtenerTodas();
    const tarea = tareas.find((t) => t.id === id);
    if (tarea) {
      tarea.texto = nuevoTexto;
      StorageManager.set(this.key, tareas);
    }
  }

  /**
   * Limpia todas las tareas completadas
   */
  limpiarCompletadas() {
    let tareas = this.obtenerTodas();
    tareas = tareas.filter((t) => !t.completada);
    StorageManager.set(this.key, tareas);
  }

  /**
   * Obtiene estadísticas
   */
  obtenerEstadisticas() {
    const tareas = this.obtenerTodas();
    return {
      total: tareas.length,
      completadas: tareas.filter((t) => t.completada).length,
      pendientes: tareas.filter((t) => !t.completada).length,
    };
  }
}

// Uso
const listaTareas = new ListaTareas();
// listaTareas.agregar('Aprender localStorage');
// listaTareas.agregar('Hacer ejercicios');
console.log("📋 Tareas:", listaTareas.obtenerTodas());
console.log("📊 Estadísticas:", listaTareas.obtenerEstadisticas());

//--------------------------------------------------------------------------------------
// EJEMPLO PRÁCTICO 3: SISTEMA DE CACHÉ SIMPLE
//--------------------------------------------------------------------------------------

class CacheStorage {
  constructor(ttl = 3600000) {
    // TTL por defecto: 1 hora
    this.ttl = ttl;
  }

  /**
   * Guarda datos con timestamp
   */
  set(key, data, customTtl = null) {
    const item = {
      data: data,
      timestamp: Date.now(),
      ttl: customTtl || this.ttl,
    };
    StorageManager.set(key, item);
  }

  /**
   * Obtiene datos si no han expirado
   */
  get(key) {
    const item = StorageManager.get(key);

    if (!item) {
      return null;
    }

    const ahora = Date.now();
    const edad = ahora - item.timestamp;

    // Si ha expirado, eliminar y retornar null
    if (edad > item.ttl) {
      this.remove(key);
      console.log("⏰ Caché expirado:", key);
      return null;
    }

    console.log("✅ Caché válido:", key);
    return item.data;
  }

  /**
   * Elimina una entrada
   */
  remove(key) {
    StorageManager.remove(key);
  }

  /**
   * Limpia todas las entradas expiradas
   */
  limpiarExpirados() {
    const claves = StorageManager.keys();
    let eliminados = 0;

    claves.forEach((key) => {
      const item = StorageManager.get(key);
      if (item && item.timestamp) {
        const edad = Date.now() - item.timestamp;
        if (edad > (item.ttl || this.ttl)) {
          this.remove(key);
          eliminados++;
        }
      }
    });

    console.log(`🧹 Limpiados ${eliminados} elementos expirados`);
  }
}

// Uso
const cache = new CacheStorage(5000); // 5 segundos de TTL
// cache.set('datos_api', { usuarios: [1, 2, 3] });
// setTimeout(() => {
//   console.log(cache.get('datos_api')); // null después de 5s
// }, 6000);

//--------------------------------------------------------------------------------------
// SESSIONSTORAGE - ALMACENAMIENTO TEMPORAL
//--------------------------------------------------------------------------------------

/*
sessionStorage funciona EXACTAMENTE igual que localStorage,
pero los datos se eliminan al cerrar la pestaña/ventana.

Cada pestaña tiene su propio sessionStorage independiente.
*/

// Mismo API que localStorage
sessionStorage.setItem("sesion_id", "12345");
sessionStorage.setItem("usuario_temp", JSON.stringify({ nombre: "Temporal" }));

const sesionId = sessionStorage.getItem("sesion_id");
console.log("Sesión ID:", sesionId);

// También podemos usar el StorageManager adaptado
class SessionManager extends StorageManager {
  static set(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error("❌ Error al guardar en sesión:", error);
      return false;
    }
  }

  static get(key, defaultValue = null) {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error("❌ Error al leer de sesión:", error);
      return defaultValue;
    }
  }

  static remove(key) {
    sessionStorage.removeItem(key);
  }

  static clear() {
    sessionStorage.clear();
  }
}

//--------------------------------------------------------------------------------------
// MANEJO DE ERRORES Y LÍMITES
//--------------------------------------------------------------------------------------

/**
 * Verifica si localStorage está disponible
 */
function esLocalStorageDisponible() {
  try {
    const test = "__test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Obtiene el espacio usado en localStorage
 */
function obtenerEspacioUsado() {
  let total = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      total += localStorage[key].length + key.length;
    }
  }
  return (total / 1024).toFixed(2); // KB
}

console.log("💾 Espacio usado:", obtenerEspacioUsado(), "KB");

/**
 * Guarda con manejo de cuota excedida
 */
function guardarSeguro(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return { success: true };
  } catch (e) {
    if (e.name === "QuotaExceededError") {
      return {
        success: false,
        error: "Espacio insuficiente en localStorage",
      };
    }
    return {
      success: false,
      error: "Error al guardar: " + e.message,
    };
  }
}

//--------------------------------------------------------------------------------------
// EVENTOS DE STORAGE
//--------------------------------------------------------------------------------------

/*
El evento 'storage' se dispara cuando otro tab/ventana modifica localStorage
(NO se dispara en el mismo tab que hizo el cambio)
*/

window.addEventListener("storage", (event) => {
  console.log("📡 Cambio en localStorage desde otro tab:");
  console.log("Clave:", event.key);
  console.log("Valor anterior:", event.oldValue);
  console.log("Valor nuevo:", event.newValue);
  console.log("URL:", event.url);
  console.log("Storage:", event.storageArea);
});

// Útil para sincronizar datos entre pestañas
function sincronizarDatosEntreTabs() {
  window.addEventListener("storage", (e) => {
    if (e.key === "usuario") {
      const nuevoUsuario = JSON.parse(e.newValue);
      console.log("👤 Usuario actualizado en otro tab:", nuevoUsuario);
      // Actualizar UI con los nuevos datos
    }
  });
}

//--------------------------------------------------------------------------------------
// MIGRACIÓN Y VERSIONADO DE DATOS
//--------------------------------------------------------------------------------------

class DataMigration {
  static CURRENT_VERSION = 2;

  static migrate() {
    const version = StorageManager.get("data_version", 1);

    if (version < this.CURRENT_VERSION) {
      console.log(
        `🔄 Migrando datos de v${version} a v${this.CURRENT_VERSION}`
      );

      // Migración de v1 a v2
      if (version === 1) {
        this.migrateV1toV2();
      }

      StorageManager.set("data_version", this.CURRENT_VERSION);
      console.log("✅ Migración completada");
    }
  }

  static migrateV1toV2() {
    // Ejemplo: cambiar estructura de datos
    const usuariosV1 = StorageManager.get("usuarios", []);

    const usuariosV2 = usuariosV1.map((user) => ({
      ...user,
      metadata: {
        createdAt: user.createdAt || Date.now(),
        updatedAt: Date.now(),
      },
    }));

    StorageManager.set("usuarios", usuariosV2);
  }
}

// Ejecutar migración al cargar la app
// DataMigration.migrate();

//--------------------------------------------------------------------------------------
// 💡 BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:
1. Siempre usar try-catch al trabajar con storage
2. Verificar disponibilidad antes de usar
3. Usar JSON.stringify/parse para objetos
4. Implementar TTL para datos que expiran
5. Limpiar datos obsoletos periódicamente
6. Usar prefijos para organizar claves (ej: 'app_usuario', 'app_config')
7. Validar datos al recuperar
8. Implementar versionado de datos
9. Usar helpers/wrappers para operaciones comunes
10. Documentar estructura de datos guardados

❌ NO HACER:
1. Guardar información sensible (contraseñas, tokens)
2. Guardar archivos grandes (usar IndexedDB)
3. Asumir que siempre estará disponible
4. Ignorar el límite de ~5-10MB
5. Guardar datos sin estructura clara
6. No manejar errores de cuota excedida
7. Usar para datos críticos sin backup
8. Confiar en localStorage para sincronización entre tabs
9. Almacenar funciones (solo datos serializables)
10. Ignorar la privacidad del usuario
*/

//--------------------------------------------------------------------------------------
// 🔒 CONSIDERACIONES DE SEGURIDAD
//--------------------------------------------------------------------------------------

/*
⚠️ ADVERTENCIAS DE SEGURIDAD:

1. localStorage NO es seguro:
   - Los datos son accesibles por cualquier script
   - XSS puede robar toda la información
   - Los datos NO están encriptados

2. NUNCA guardes:
   - Contraseñas
   - Tokens de autenticación (usar httpOnly cookies)
   - Información personal sensible
   - Datos de tarjetas de crédito
   - Cualquier dato que no quieras exponer

3. Si necesitas seguridad:
   - Usa cookies httpOnly para tokens
   - Considera encriptar datos antes de guardar
   - Usa sessionStorage para datos más temporales
   - Valida y sanitiza datos al recuperar
*/

//--------------------------------------------------------------------------------------
// 🎯 ALTERNATIVAS A LOCALSTORAGE
//--------------------------------------------------------------------------------------

/*
Según el caso de uso:

📦 localStorage/sessionStorage:
   - Datos pequeños (<5MB)
   - Strings, objetos JSON simples
   - Preferencias de usuario

🗄️ IndexedDB:
   - Datos grandes (>5MB)
   - Objetos complejos
   - Búsquedas complejas
   - Base de datos local

🍪 Cookies:
   - Autenticación
   - Datos que deben enviarse al servidor
   - Datos que expiran

☁️ Cache API:
   - Recursos estáticos
   - Respuestas de red
   - PWA offline storage
*/

console.log("✅ Archivo 03-storage.js cargado");
console.log("💾 Storage disponible:", esLocalStorageDisponible());
console.log("📦 Espacio usado:", obtenerEspacioUsado(), "KB");
