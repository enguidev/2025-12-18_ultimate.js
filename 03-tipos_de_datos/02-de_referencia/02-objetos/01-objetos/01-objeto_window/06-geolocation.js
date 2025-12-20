//--------------------------------------------------------------------------------------
// GEOLOCATION API - OBTENER UBICACIÓN DEL USUARIO
//--------------------------------------------------------------------------------------

/*
🎯 La API de Geolocalización permite obtener la ubicación geográfica del usuario.

⚠️ REQUISITOS IMPORTANTES:
- Requiere HTTPS (excepto en localhost)
- El usuario DEBE dar permiso explícito
- Puede tardar varios segundos en obtener la ubicación
- No todos los dispositivos tienen GPS
- La precisión varía según el método (GPS, WiFi, IP)

📍 Métodos de ubicación (por precisión):
1. GPS → Más preciso (~5-10m) pero consume batería
2. WiFi/Bluetooth → Medio (~50-100m)
3. IP del ISP → Menos preciso (~varios km)
*/

//--------------------------------------------------------------------------------------
// VERIFICAR DISPONIBILIDAD
//--------------------------------------------------------------------------------------

function esGeolocationDisponible() {
  if ("geolocation" in navigator) {
    console.log("✅ Geolocalización disponible");
    return true;
  } else {
    console.log("❌ Geolocalización NO disponible");
    return false;
  }
}

console.log("📍 Geolocalización:", esGeolocationDisponible());

//--------------------------------------------------------------------------------------
// OBTENER UBICACIÓN ACTUAL (UNA VEZ)
//--------------------------------------------------------------------------------------

/**
 * getCurrentPosition() - Obtiene la ubicación actual del usuario
 *
 * Sintaxis:
 * navigator.geolocation.getCurrentPosition(success, error, options)
 */

// Ejemplo básico
function obtenerUbicacion() {
  if (!esGeolocationDisponible()) {
    return;
  }

  console.log("📡 Solicitando ubicación...");

  navigator.geolocation.getCurrentPosition(
    // ✅ Callback de éxito
    (position) => {
      console.log("✅ Ubicación obtenida:");
      console.log("Latitud:", position.coords.latitude);
      console.log("Longitud:", position.coords.longitude);
      console.log("Precisión:", position.coords.accuracy, "metros");
      console.log("Timestamp:", new Date(position.timestamp));
    },
    // ❌ Callback de error
    (error) => {
      console.error("❌ Error al obtener ubicación:");
      console.error("Código:", error.code);
      console.error("Mensaje:", error.message);
    }
  );
}

// obtenerUbicacion();

//--------------------------------------------------------------------------------------
// OBJETO POSITION - PROPIEDADES DISPONIBLES
//--------------------------------------------------------------------------------------

function mostrarInformacionCompleta() {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("📍 INFORMACIÓN COMPLETA DE UBICACIÓN:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    // Coordenadas
    const coords = position.coords;
    console.log("🌍 Coordenadas:");
    console.log("  - Latitud:", coords.latitude);
    console.log("  - Longitud:", coords.longitude);
    console.log("  - Precisión:", coords.accuracy, "metros");

    // Altitud (puede ser null)
    if (coords.altitude !== null) {
      console.log("  - Altitud:", coords.altitude, "metros");
      console.log("  - Precisión altitud:", coords.altitudeAccuracy, "metros");
    } else {
      console.log("  - Altitud: No disponible");
    }

    // Dirección y velocidad (puede ser null)
    if (coords.heading !== null) {
      console.log("  - Dirección:", coords.heading, "grados");
    } else {
      console.log("  - Dirección: No disponible");
    }

    if (coords.speed !== null) {
      console.log("  - Velocidad:", coords.speed, "m/s");
    } else {
      console.log("  - Velocidad: No disponible");
    }

    // Timestamp
    console.log("⏰ Timestamp:", new Date(position.timestamp).toLocaleString());
  });
}

// mostrarInformacionCompleta();

//--------------------------------------------------------------------------------------
// OPCIONES DE GEOLOCALIZACIÓN
//--------------------------------------------------------------------------------------

const opcionesGeolocation = {
  // Usar GPS de alta precisión (consume más batería)
  enableHighAccuracy: true,

  // Tiempo máximo de espera en milisegundos (10 segundos)
  timeout: 10000,

  // Edad máxima de posición en caché en milisegundos
  // 0 = no usar caché, siempre obtener posición nueva
  maximumAge: 0,
};

function obtenerConOpciones() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(
        "📍 Ubicación (alta precisión):",
        position.coords.latitude,
        position.coords.longitude
      );
    },
    (error) => {
      console.error("Error:", error.message);
    },
    opcionesGeolocation
  );
}

//--------------------------------------------------------------------------------------
// MANEJO DE ERRORES
//--------------------------------------------------------------------------------------

function manejarErroresGeolocation(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.error("❌ El usuario denegó el permiso de geolocalización");
      alert("Necesitamos tu permiso para acceder a tu ubicación");
      break;

    case error.POSITION_UNAVAILABLE:
      console.error("❌ Información de ubicación no disponible");
      alert("No se pudo determinar tu ubicación. Verifica tu conexión.");
      break;

    case error.TIMEOUT:
      console.error("❌ Tiempo de espera agotado");
      alert("La solicitud de ubicación tardó demasiado. Intenta de nuevo.");
      break;

    default:
      console.error("❌ Error desconocido:", error.message);
      break;
  }
}

// Uso
function obtenerUbicacionSegura() {
  if (!esGeolocationDisponible()) {
    alert("Tu navegador no soporta geolocalización");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("✅ Ubicación obtenida correctamente");
      // Procesar ubicación...
    },
    manejarErroresGeolocation,
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}

//--------------------------------------------------------------------------------------
// SEGUIMIENTO EN TIEMPO REAL - watchPosition()
//--------------------------------------------------------------------------------------

/**
 * watchPosition() - Monitorea cambios en la ubicación
 * Útil para aplicaciones de navegación, tracking, etc.
 */

let watchId = null;

function iniciarSeguimiento() {
  if (!esGeolocationDisponible()) {
    return;
  }

  console.log("🔄 Iniciando seguimiento de ubicación...");

  watchId = navigator.geolocation.watchPosition(
    // Éxito - se ejecuta cada vez que cambia la posición
    (position) => {
      console.log(
        "📍 Nueva ubicación:",
        position.coords.latitude.toFixed(6),
        position.coords.longitude.toFixed(6),
        "- Precisión:",
        Math.round(position.coords.accuracy),
        "m"
      );

      // Aquí actualizarías un mapa, guardarías la ruta, etc.
    },
    // Error
    (error) => {
      console.error("Error en seguimiento:", error.message);
    },
    // Opciones
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );

  console.log("✅ Seguimiento iniciado. ID:", watchId);
}

function detenerSeguimiento() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    console.log("🛑 Seguimiento detenido");
    watchId = null;
  } else {
    console.log("⚠️ No hay seguimiento activo");
  }
}

// Uso
// iniciarSeguimiento();
// setTimeout(detenerSeguimiento, 30000); // Detener después de 30s

//--------------------------------------------------------------------------------------
// CLASE HELPER PARA GEOLOCALIZACIÓN
//--------------------------------------------------------------------------------------

class GeoLocation {
  constructor(options = {}) {
    this.defaultOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
      ...options,
    };
    this.watchId = null;
    this.ultimaUbicacion = null;
  }

  /**
   * Verifica disponibilidad
   */
  static isAvailable() {
    return "geolocation" in navigator;
  }

  /**
   * Obtiene ubicación actual (Promise)
   */
  obtenerUbicacion() {
    return new Promise((resolve, reject) => {
      if (!GeoLocation.isAvailable()) {
        reject(new Error("Geolocalización no disponible"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.ultimaUbicacion = position;
          resolve(position);
        },
        reject,
        this.defaultOptions
      );
    });
  }

  /**
   * Obtiene solo coordenadas
   */
  async obtenerCoordenadas() {
    const position = await this.obtenerUbicacion();
    return {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy,
    };
  }

  /**
   * Inicia seguimiento
   */
  iniciarSeguimiento(callback, errorCallback) {
    if (!GeoLocation.isAvailable()) {
      throw new Error("Geolocalización no disponible");
    }

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.ultimaUbicacion = position;
        callback(position);
      },
      errorCallback || console.error,
      this.defaultOptions
    );

    return this.watchId;
  }

  /**
   * Detiene seguimiento
   */
  detenerSeguimiento() {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }

  /**
   * Obtiene última ubicación conocida
   */
  obtenerUltimaUbicacion() {
    return this.ultimaUbicacion;
  }

  /**
   * Calcula distancia entre dos puntos (en metros)
   * Usa la fórmula de Haversine
   */
  static calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Radio de la Tierra en metros
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distancia en metros
  }

  /**
   * Formatea distancia legible
   */
  static formatearDistancia(metros) {
    if (metros < 1000) {
      return `${Math.round(metros)} m`;
    } else {
      return `${(metros / 1000).toFixed(2)} km`;
    }
  }
}

// Uso con async/await
async function ejemploUsoGeoLocation() {
  const geo = new GeoLocation({
    enableHighAccuracy: true,
    timeout: 5000,
  });

  try {
    console.log("📡 Obteniendo ubicación...");
    const coords = await geo.obtenerCoordenadas();
    console.log("✅ Coordenadas:", coords);

    // Calcular distancia a Madrid (ejemplo)
    const distancia = GeoLocation.calcularDistancia(
      coords.lat,
      coords.lng,
      40.4168,
      -3.7038 // Madrid
    );
    console.log(
      "📏 Distancia a Madrid:",
      GeoLocation.formatearDistancia(distancia)
    );
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

// ejemploUsoGeoLocation();

//--------------------------------------------------------------------------------------
// EJEMPLO PRÁCTICO 1: MOSTRAR UBICACIÓN EN MAPA
//--------------------------------------------------------------------------------------

async function mostrarEnMapa() {
  const geo = new GeoLocation();

  try {
    const coords = await geo.obtenerCoordenadas();

    // Crear URL de Google Maps
    const urlMapa = `https://www.google.com/maps?q=${coords.lat},${coords.lng}`;

    console.log("🗺️ Ver en mapa:", urlMapa);

    // Abrir en nueva pestaña
    // window.open(urlMapa, '_blank');

    return coords;
  } catch (error) {
    console.error("Error al obtener ubicación:", error);
  }
}

//--------------------------------------------------------------------------------------
// EJEMPLO PRÁCTICO 2: TRACKING DE RUTA
//--------------------------------------------------------------------------------------

class RutaTracker {
  constructor() {
    this.geo = new GeoLocation();
    this.puntos = [];
    this.distanciaTotal = 0;
    this.activo = false;
  }

  iniciar() {
    this.activo = true;
    this.puntos = [];
    this.distanciaTotal = 0;

    console.log("🏃 Iniciando tracking de ruta...");

    this.geo.iniciarSeguimiento(
      (position) => {
        const punto = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          timestamp: position.timestamp,
          accuracy: position.coords.accuracy,
        };

        // Calcular distancia desde último punto
        if (this.puntos.length > 0) {
          const ultimo = this.puntos[this.puntos.length - 1];
          const distancia = GeoLocation.calcularDistancia(
            ultimo.lat,
            ultimo.lng,
            punto.lat,
            punto.lng
          );

          // Solo agregar si se movió más de 10 metros (filtrar ruido GPS)
          if (distancia > 10) {
            this.distanciaTotal += distancia;
            this.puntos.push(punto);

            console.log(
              `📍 Nuevo punto registrado. Distancia total: ${GeoLocation.formatearDistancia(
                this.distanciaTotal
              )}`
            );
          }
        } else {
          // Primer punto
          this.puntos.push(punto);
          console.log("📍 Punto inicial registrado");
        }
      },
      (error) => {
        console.error("Error en tracking:", error);
      }
    );
  }

  detener() {
    this.activo = false;
    this.geo.detenerSeguimiento();
    console.log("🛑 Tracking detenido");
    console.log(`📊 Puntos registrados: ${this.puntos.length}`);
    console.log(
      `📏 Distancia total: ${GeoLocation.formatearDistancia(
        this.distanciaTotal
      )}`
    );
  }

  obtenerEstadisticas() {
    if (this.puntos.length < 2) {
      return null;
    }

    const duracion =
      this.puntos[this.puntos.length - 1].timestamp - this.puntos[0].timestamp;
    const velocidadPromedio = (this.distanciaTotal / duracion) * 1000; // m/s

    return {
      puntos: this.puntos.length,
      distancia: this.distanciaTotal,
      duracion: duracion,
      velocidadPromedio: velocidadPromedio,
      velocidadPromedioKmH: velocidadPromedio * 3.6,
    };
  }

  exportarRuta() {
    return JSON.stringify(this.puntos, null, 2);
  }
}

// Uso
// const tracker = new RutaTracker();
// tracker.iniciar();
// setTimeout(() => tracker.detener(), 60000); // Detener después de 1 minuto

//--------------------------------------------------------------------------------------
// EJEMPLO PRÁCTICO 3: BUSCAR LUGARES CERCANOS
//--------------------------------------------------------------------------------------

class BuscadorCercano {
  constructor() {
    this.geo = new GeoLocation();
  }

  async buscarCercanos(lugares) {
    try {
      const miUbicacion = await this.geo.obtenerCoordenadas();

      // Calcular distancia a cada lugar
      const lugaresConDistancia = lugares.map((lugar) => {
        const distancia = GeoLocation.calcularDistancia(
          miUbicacion.lat,
          miUbicacion.lng,
          lugar.lat,
          lugar.lng
        );

        return {
          ...lugar,
          distancia: distancia,
          distanciaFormateada: GeoLocation.formatearDistancia(distancia),
        };
      });

      // Ordenar por distancia
      lugaresConDistancia.sort((a, b) => a.distancia - b.distancia);

      return lugaresConDistancia;
    } catch (error) {
      console.error("Error al buscar lugares cercanos:", error);
      return [];
    }
  }

  async obtenerMasCercano(lugares) {
    const lugaresOrdenados = await this.buscarCercanos(lugares);
    return lugaresOrdenados[0] || null;
  }
}

// Ejemplo de uso
async function ejemploBuscarCercanos() {
  const lugares = [
    { nombre: "Restaurante A", lat: 40.4168, lng: -3.7038 },
    { nombre: "Café B", lat: 40.42, lng: -3.71 },
    { nombre: "Tienda C", lat: 40.41, lng: -3.7 },
  ];

  const buscador = new BuscadorCercano();
  const lugaresOrdenados = await buscador.buscarCercanos(lugares);

  console.log("📍 Lugares cercanos (ordenados):");
  lugaresOrdenados.forEach((lugar, i) => {
    console.log(`${i + 1}. ${lugar.nombre} - ${lugar.distanciaFormateada}`);
  });
}

// ejemploBuscarCercanos();

//--------------------------------------------------------------------------------------
// EJEMPLO PRÁCTICO 4: GEOCERCA (GEOFENCING)
//--------------------------------------------------------------------------------------

class Geocerca {
  constructor(lat, lng, radio) {
    this.centro = { lat, lng };
    this.radio = radio; // en metros
    this.geo = new GeoLocation();
    this.dentro = false;
  }

  estaAdentro(lat, lng) {
    const distancia = GeoLocation.calcularDistancia(
      this.centro.lat,
      this.centro.lng,
      lat,
      lng
    );
    return distancia <= this.radio;
  }

  monitorear(onEntrar, onSalir) {
    return this.geo.iniciarSeguimiento((position) => {
      const dentroAhora = this.estaAdentro(
        position.coords.latitude,
        position.coords.longitude
      );

      // Detectar entrada
      if (dentroAhora && !this.dentro) {
        this.dentro = true;
        console.log("🟢 ENTRÓ en la geocerca");
        if (onEntrar) onEntrar(position);
      }

      // Detectar salida
      else if (!dentroAhora && this.dentro) {
        this.dentro = false;
        console.log("🔴 SALIÓ de la geocerca");
        if (onSalir) onSalir(position);
      }
    });
  }
}

// Ejemplo de uso
function ejemploGeocerca() {
  // Crear geocerca de 100m alrededor de un punto
  const geocerca = new Geocerca(40.4168, -3.7038, 100);

  geocerca.monitorear(
    (position) => {
      console.log("¡Bienvenido al área vigilada!");
      // Enviar notificación, activar algo, etc.
    },
    (position) => {
      console.log("Has salido del área vigilada");
    }
  );
}

//--------------------------------------------------------------------------------------
// PERMISOS Y ESTADOS
//--------------------------------------------------------------------------------------

/**
 * Verifica el estado del permiso de geolocalización
 */
async function verificarPermisoGeolocation() {
  if (!("permissions" in navigator)) {
    console.log("⚠️ API de permisos no soportada");
    return "unsupported";
  }

  try {
    const result = await navigator.permissions.query({ name: "geolocation" });

    console.log("🔐 Estado del permiso:", result.state);
    // Valores posibles: 'granted', 'denied', 'prompt'

    // Escuchar cambios en el permiso
    result.addEventListener("change", () => {
      console.log("🔄 Permiso cambió a:", result.state);
    });

    return result.state;
  } catch (error) {
    console.error("Error al verificar permiso:", error);
    return "error";
  }
}

// verificarPermisoGeolocation();

//--------------------------------------------------------------------------------------
// 💡 BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:
1. Siempre verificar disponibilidad antes de usar
2. Manejar TODOS los posibles errores
3. Usar timeout razonable (5-10 segundos)
4. Informar al usuario por qué necesitas su ubicación
5. Dar opción de denegar sin romper la app
6. Usar enableHighAccuracy solo cuando sea necesario (consume batería)
7. Limpiar watchPosition cuando no se necesite
8. Cachear ubicación cuando sea apropiado (maximumAge)
9. Implementar fallback si la ubicación falla
10. Respetar la privacidad del usuario

❌ NO HACER:
1. Pedir ubicación sin explicar por qué
2. Bloquear funcionalidad crítica por falta de ubicación
3. Usar watchPosition innecesariamente
4. Ignorar errores o timeouts
5. Asumir que siempre funcionará
6. Solicitar alta precisión si no es necesaria
7. Guardar ubicaciones sin consentimiento
8. Compartir ubicaciones con terceros sin avisar
9. Rastrear sin conocimiento del usuario
10. No dar opción de desactivar tracking
*/

//--------------------------------------------------------------------------------------
// 🔒 CONSIDERACIONES DE PRIVACIDAD Y SEGURIDAD
//--------------------------------------------------------------------------------------

/*
⚠️ IMPORTANTE PARA PRIVACIDAD:

1. HTTPS obligatorio (excepto localhost)
2. Permiso explícito del usuario requerido
3. El permiso puede ser revocado en cualquier momento
4. Los navegadores muestran indicador visual cuando se usa
5. Algunas empresas tienen políticas estrictas sobre geolocalización

🔐 BUENAS PRÁCTICAS DE PRIVACIDAD:
- Explicar claramente por qué necesitas la ubicación
- Pedir solo cuando sea necesario
- No guardar historial de ubicaciones sin consentimiento
- Permitir borrar datos de ubicación
- Cumplir con GDPR/leyes locales
- No compartir con terceros sin autorización
- Implementar anonimización cuando sea posible
- Dar control total al usuario sobre su ubicación
*/

//--------------------------------------------------------------------------------------
// 🌐 COMPATIBILIDAD
//--------------------------------------------------------------------------------------

/*
Soporte de navegadores (2024):
✅ Chrome: Sí (desde v5)
✅ Firefox: Sí (desde v3.5)
✅ Safari: Sí (desde v5)
✅ Edge: Sí
✅ Opera: Sí
📱 Móviles: Excelente soporte

Precisión por dispositivo:
- 📱 Móviles con GPS: 5-10 metros
- 💻 Laptops con WiFi: 50-100 metros  
- 🖥️ Desktop con IP: 1-10 kilómetros
*/

console.log("✅ Archivo 04-geolocation.js cargado");
console.log("📍 Geolocalización disponible:", esGeolocationDisponible());
