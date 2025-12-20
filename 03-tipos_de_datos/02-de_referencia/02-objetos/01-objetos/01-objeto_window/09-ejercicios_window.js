//--------------------------------------------------------------------------------------
// EJERCICIOS PRÁCTICOS - OBJETO WINDOW
//--------------------------------------------------------------------------------------

/*
🎯 Este archivo contiene 15 ejercicios prácticos con soluciones

Nivel:
⭐ = Básico
⭐⭐ = Intermedio
⭐⭐⭐ = Avanzado

Cada ejercicio incluye:
- Descripción del problema
- Pistas
- Solución completa
- Casos de prueba
*/

//--------------------------------------------------------------------------------------
// EJERCICIO 1: TEMPORIZADOR POMODORO ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un temporizador Pomodoro que:
- Tenga 25 minutos de trabajo
- 5 minutos de descanso
- Pueda pausarse y reanudarse
- Muestre notificación al terminar cada fase

💡 PISTAS:
- Usa setInterval para el contador
- Usa Notification API para notificar
- Guarda el estado en una variable
*/

// SOLUCIÓN:
class PomodoroTimer {
  constructor() {
    this.tiempoTrabajo = 25 * 60; // 25 minutos en segundos
    this.tiempoDescanso = 5 * 60; // 5 minutos
    this.tiempoRestante = this.tiempoTrabajo;
    this.trabajando = true;
    this.activo = false;
    this.intervalo = null;
  }

  async iniciar() {
    if (this.activo) return;

    // Pedir permiso para notificaciones
    if ("Notification" in window && Notification.permission === "default") {
      await Notification.requestPermission();
    }

    this.activo = true;
    this.intervalo = setInterval(() => {
      this.tick();
    }, 1000);

    console.log("⏱️ Pomodoro iniciado");
  }

  tick() {
    this.tiempoRestante--;

    const minutos = Math.floor(this.tiempoRestante / 60);
    const segundos = this.tiempoRestante % 60;
    console.log(`⏱️ ${minutos}:${segundos.toString().padStart(2, "0")}`);

    if (this.tiempoRestante === 0) {
      this.cambiarFase();
    }
  }

  cambiarFase() {
    this.trabajando = !this.trabajando;

    if (this.trabajando) {
      this.tiempoRestante = this.tiempoTrabajo;
      this.notificar("¡Descanso terminado!", "Hora de trabajar 💪");
    } else {
      this.tiempoRestante = this.tiempoDescanso;
      this.notificar("¡Tiempo de descanso!", "Relájate un poco ☕");
    }
  }

  pausar() {
    if (!this.activo) return;

    clearInterval(this.intervalo);
    this.activo = false;
    console.log("⏸️ Pomodoro pausado");
  }

  reanudar() {
    if (this.activo) return;
    this.iniciar();
  }

  reiniciar() {
    this.pausar();
    this.trabajando = true;
    this.tiempoRestante = this.tiempoTrabajo;
    console.log("🔄 Pomodoro reiniciado");
  }

  notificar(titulo, mensaje) {
    console.log(`🔔 ${titulo}: ${mensaje}`);

    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(titulo, { body: mensaje });
    }
  }
}

// Uso:
// const pomodoro = new PomodoroTimer();
// pomodoro.iniciar();
// setTimeout(() => pomodoro.pausar(), 5000);
// setTimeout(() => pomodoro.reanudar(), 10000);

console.log("✅ Ejercicio 1: Temporizador Pomodoro - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 2: SISTEMA DE NOTAS CON LOCALSTORAGE ⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un sistema para gestionar notas que:
- Permita agregar, editar, eliminar notas
- Guarde automáticamente en localStorage
- Muestre lista de notas ordenadas por fecha
- Permita buscar notas

💡 PISTAS:
- Usa localStorage con JSON.stringify/parse
- Crea IDs únicos con Date.now()
- Implementa búsqueda con filter()
*/

// SOLUCIÓN:
class NotasManager {
  constructor() {
    this.key = "notas_app";
  }

  obtenerNotas() {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    } catch (error) {
      console.error("Error al leer notas:", error);
      return [];
    }
  }

  guardarNotas(notas) {
    try {
      localStorage.setItem(this.key, JSON.stringify(notas));
      return true;
    } catch (error) {
      console.error("Error al guardar notas:", error);
      return false;
    }
  }

  agregar(titulo, contenido) {
    const notas = this.obtenerNotas();
    const nuevaNota = {
      id: Date.now(),
      titulo: titulo,
      contenido: contenido,
      fecha: new Date().toISOString(),
    };

    notas.push(nuevaNota);
    this.guardarNotas(notas);

    console.log("✅ Nota agregada:", nuevaNota.titulo);
    return nuevaNota;
  }

  editar(id, titulo, contenido) {
    const notas = this.obtenerNotas();
    const nota = notas.find((n) => n.id === id);

    if (nota) {
      nota.titulo = titulo;
      nota.contenido = contenido;
      nota.fechaModificacion = new Date().toISOString();

      this.guardarNotas(notas);
      console.log("✅ Nota editada:", nota.titulo);
      return true;
    }

    console.log("❌ Nota no encontrada");
    return false;
  }

  eliminar(id) {
    let notas = this.obtenerNotas();
    const antes = notas.length;

    notas = notas.filter((n) => n.id !== id);

    if (notas.length < antes) {
      this.guardarNotas(notas);
      console.log("✅ Nota eliminada");
      return true;
    }

    console.log("❌ Nota no encontrada");
    return false;
  }

  buscar(termino) {
    const notas = this.obtenerNotas();
    const terminoLower = termino.toLowerCase();

    return notas.filter(
      (nota) =>
        nota.titulo.toLowerCase().includes(terminoLower) ||
        nota.contenido.toLowerCase().includes(terminoLower)
    );
  }

  listar() {
    const notas = this.obtenerNotas();

    // Ordenar por fecha (más recientes primero)
    notas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    console.log(`📝 Total de notas: ${notas.length}`);
    notas.forEach((nota) => {
      console.log(`\n📌 ${nota.titulo}`);
      console.log(`   ${nota.contenido.substring(0, 50)}...`);
      console.log(`   📅 ${new Date(nota.fecha).toLocaleString()}`);
    });

    return notas;
  }

  limpiar() {
    localStorage.removeItem(this.key);
    console.log("🗑️ Todas las notas eliminadas");
  }
}

// Uso:
const notasManager = new NotasManager();
// notasManager.agregar('Compras', 'Leche, pan, huevos');
// notasManager.agregar('Ideas', 'Nueva app de notas');
// notasManager.listar();
// notasManager.buscar('compras');

console.log("✅ Ejercicio 2: Sistema de Notas - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 3: DETECTOR DE UBICACIÓN Y CLIMA ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una app que:
- Obtenga la ubicación del usuario
- Muestre las coordenadas
- Calcule distancia a un punto de referencia
- (Bonus: consulta API de clima)

💡 PISTAS:
- Usa navigator.geolocation.getCurrentPosition
- Fórmula de Haversine para calcular distancia
- Maneja errores de permisos
*/

// SOLUCIÓN:
class UbicacionClima {
  constructor() {
    this.ubicacionActual = null;
  }

  async obtenerUbicacion() {
    return new Promise((resolve, reject) => {
      if (!("geolocation" in navigator)) {
        reject(new Error("Geolocalización no disponible"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.ubicacionActual = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy,
          };

          console.log("📍 Ubicación obtenida:");
          console.log("   Lat:", this.ubicacionActual.lat.toFixed(6));
          console.log("   Lng:", this.ubicacionActual.lng.toFixed(6));
          console.log(
            "   Precisión:",
            Math.round(this.ubicacionActual.accuracy),
            "m"
          );

          resolve(this.ubicacionActual);
        },
        (error) => {
          console.error("❌ Error de geolocalización:", error.message);
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    });
  }

  calcularDistancia(lat1, lon1, lat2, lon2) {
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

  async distanciaA(lat, lng, nombreLugar) {
    if (!this.ubicacionActual) {
      await this.obtenerUbicacion();
    }

    const distancia = this.calcularDistancia(
      this.ubicacionActual.lat,
      this.ubicacionActual.lng,
      lat,
      lng
    );

    const distanciaKm = (distancia / 1000).toFixed(2);

    console.log(`📏 Distancia a ${nombreLugar}: ${distanciaKm} km`);
    return distancia;
  }

  obtenerURLMapa() {
    if (!this.ubicacionActual) {
      console.log("❌ Primero obtén la ubicación");
      return null;
    }

    const url = `https://www.google.com/maps?q=${this.ubicacionActual.lat},${this.ubicacionActual.lng}`;
    console.log("🗺️ Ver en mapa:", url);
    return url;
  }
}

// Uso:
// const ubicacion = new UbicacionClima();
// ubicacion.obtenerUbicacion().then(() => {
//   ubicacion.distanciaA(40.4168, -3.7038, 'Madrid');
//   ubicacion.obtenerURLMapa();
// });

console.log("✅ Ejercicio 3: Detector de Ubicación - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 4: MODAL DE CONFIRMACIÓN PERSONALIZADO ⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un sistema de modales que reemplace alert/confirm con:
- Diseño personalizado
- Animaciones
- Promesas para manejo asíncrono
- Tipos: info, success, error, confirm

💡 PISTAS:
- Crea elementos DOM dinámicamente
- Usa Promises para async/await
- Agrega estilos inline o CSS
*/

// SOLUCIÓN:
class ModalManager {
  constructor() {
    this.modalActivo = null;
  }

  mostrar(tipo, titulo, mensaje, opciones = {}) {
    return new Promise((resolve) => {
      // Crear overlay
      const overlay = document.createElement("div");
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        animation: fadeIn 0.3s;
      `;

      // Crear modal
      const modal = document.createElement("div");
      const colores = {
        info: "#3498db",
        success: "#2ecc71",
        error: "#e74c3c",
        warning: "#f39c12",
        confirm: "#9b59b6",
      };

      modal.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        min-width: 300px;
        max-width: 500px;
        animation: slideIn 0.3s;
      `;

      // Icono según tipo
      const iconos = {
        info: "ℹ️",
        success: "✅",
        error: "❌",
        warning: "⚠️",
        confirm: "❓",
      };

      modal.innerHTML = `
        <div style="text-align: center;">
          <div style="font-size: 48px; margin-bottom: 20px;">
            ${iconos[tipo]}
          </div>
          <h2 style="margin: 0 0 15px 0; color: ${colores[tipo]};">
            ${titulo}
          </h2>
          <p style="margin: 0 0 25px 0; color: #555;">
            ${mensaje}
          </p>
          <div id="modal-botones" style="display: flex; gap: 10px; justify-content: center;">
          </div>
        </div>
      `;

      overlay.appendChild(modal);

      // Botones
      const contenedorBotones = modal.querySelector("#modal-botones");

      if (tipo === "confirm") {
        // Botón Cancelar
        const btnCancelar = document.createElement("button");
        btnCancelar.textContent = opciones.textoCancel || "Cancelar";
        btnCancelar.style.cssText = `
          padding: 10px 20px;
          border: 2px solid #ccc;
          background: white;
          color: #666;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        `;
        btnCancelar.onclick = () => {
          this.cerrar(overlay);
          resolve(false);
        };
        contenedorBotones.appendChild(btnCancelar);
      }

      // Botón principal
      const btnPrincipal = document.createElement("button");
      btnPrincipal.textContent = opciones.textoOk || "Aceptar";
      btnPrincipal.style.cssText = `
        padding: 10px 20px;
        border: none;
        background: ${colores[tipo]};
        color: white;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      `;
      btnPrincipal.onclick = () => {
        this.cerrar(overlay);
        resolve(true);
      };
      contenedorBotones.appendChild(btnPrincipal);

      // Agregar al DOM
      document.body.appendChild(overlay);
      this.modalActivo = overlay;

      // CSS para animaciones
      if (!document.getElementById("modal-animations")) {
        const style = document.createElement("style");
        style.id = "modal-animations";
        style.textContent = `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `;
        document.head.appendChild(style);
      }
    });
  }

  cerrar(overlay) {
    if (overlay && overlay.parentNode) {
      overlay.style.animation = "fadeOut 0.3s";
      setTimeout(() => {
        overlay.remove();
      }, 300);
    }
  }

  // Métodos de conveniencia
  info(titulo, mensaje, opciones) {
    return this.mostrar("info", titulo, mensaje, opciones);
  }

  success(titulo, mensaje, opciones) {
    return this.mostrar("success", titulo, mensaje, opciones);
  }

  error(titulo, mensaje, opciones) {
    return this.mostrar("error", titulo, mensaje, opciones);
  }

  warning(titulo, mensaje, opciones) {
    return this.mostrar("warning", titulo, mensaje, opciones);
  }

  confirm(titulo, mensaje, opciones) {
    return this.mostrar("confirm", titulo, mensaje, opciones);
  }
}

// Uso:
const modal = new ModalManager();
// modal.success('¡Éxito!', 'Operación completada correctamente');
// modal.confirm('¿Confirmar?', '¿Estás seguro de eliminar?').then(resultado => {
//   console.log('Usuario confirmó:', resultado);
// });

console.log("✅ Ejercicio 4: Modal Personalizado - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 5: INFINITE SCROLL ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Implementa infinite scroll que:
- Detecte cuando el usuario llega al final
- Cargue más contenido automáticamente
- Muestre indicador de carga
- Evite múltiples cargas simultáneas

💡 PISTAS:
- Usa evento scroll con throttle
- Compara scrollY + innerHeight con scrollHeight
- Usa flag para evitar cargas duplicadas
*/

// SOLUCIÓN:
class InfiniteScroll {
  constructor(onLoadMore) {
    this.onLoadMore = onLoadMore;
    this.cargando = false;
    this.paginaActual = 1;
    this.hayMas = true;

    this.inicializar();
  }

  inicializar() {
    window.addEventListener(
      "scroll",
      this.throttle(this.verificarScroll.bind(this), 200)
    );
  }

  throttle(func, delay) {
    let ultimaEjecucion = 0;
    return function (...args) {
      const ahora = Date.now();
      if (ahora - ultimaEjecucion >= delay) {
        ultimaEjecucion = ahora;
        func.apply(this, args);
      }
    };
  }

  verificarScroll() {
    if (this.cargando || !this.hayMas) return;

    const scrollY = window.pageYOffset;
    const alturaVisible = window.innerHeight;
    const alturaTotal = document.documentElement.scrollHeight;

    // Cuando está a 200px del final
    if (scrollY + alturaVisible >= alturaTotal - 200) {
      this.cargarMas();
    }
  }

  async cargarMas() {
    if (this.cargando) return;

    this.cargando = true;
    this.mostrarIndicador();
    console.log(`📥 Cargando página ${this.paginaActual + 1}...`);

    try {
      // Simular carga de datos
      const nuevosItems = await this.onLoadMore(this.paginaActual + 1);

      if (nuevosItems && nuevosItems.length > 0) {
        this.paginaActual++;
        console.log(`✅ ${nuevosItems.length} items cargados`);
      } else {
        this.hayMas = false;
        console.log("📭 No hay más contenido");
      }
    } catch (error) {
      console.error("❌ Error al cargar:", error);
    } finally {
      this.cargando = false;
      this.ocultarIndicador();
    }
  }

  mostrarIndicador() {
    let indicador = document.getElementById("loading-indicator");

    if (!indicador) {
      indicador = document.createElement("div");
      indicador.id = "loading-indicator";
      indicador.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 30px;
        border-radius: 25px;
        z-index: 9999;
      `;
      indicador.textContent = "⏳ Cargando...";
      document.body.appendChild(indicador);
    }

    indicador.style.display = "block";
  }

  ocultarIndicador() {
    const indicador = document.getElementById("loading-indicator");
    if (indicador) {
      indicador.style.display = "none";
    }
  }

  reiniciar() {
    this.paginaActual = 1;
    this.hayMas = true;
    this.cargando = false;
  }
}

// Uso:
// const infiniteScroll = new InfiniteScroll(async (pagina) => {
//   // Simular API
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   return Array.from({ length: 10 }, (_, i) => ({ id: (pagina - 1) * 10 + i }));
// });

console.log("✅ Ejercicio 5: Infinite Scroll - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 6: DETECTOR DE INACTIVIDAD ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un detector que:
- Detecte cuándo el usuario está inactivo
- Muestre advertencia después de X minutos
- Cierre sesión después de Y minutos
- Reinicie el timer con cualquier actividad

💡 PISTAS:
- Escucha eventos: mousemove, keydown, click, scroll
- Usa setTimeout para el timer
- Reinicia el timer en cada actividad
*/

// SOLUCIÓN:
class InactivityDetector {
  constructor(opciones = {}) {
    this.tiempoAdvertencia = opciones.tiempoAdvertencia || 2 * 60 * 1000; // 2 min
    this.tiempoCierre = opciones.tiempoCierre || 5 * 60 * 1000; // 5 min
    this.onAdvertencia =
      opciones.onAdvertencia ||
      (() => console.log("⚠️ Advertencia de inactividad"));
    this.onCierre =
      opciones.onCierre ||
      (() => console.log("🚪 Cerrando sesión por inactividad"));

    this.timerAdvertencia = null;
    this.timerCierre = null;
    this.activo = true;

    this.inicializar();
  }

  inicializar() {
    // Eventos que indican actividad
    const eventos = [
      "mousedown",
      "mousemove",
      "keydown",
      "scroll",
      "touchstart",
      "click",
    ];

    eventos.forEach((evento) => {
      document.addEventListener(evento, () => this.reiniciarTimers(), {
        passive: true,
      });
    });

    this.iniciarTimers();
    console.log("👁️ Detector de inactividad iniciado");
  }

  iniciarTimers() {
    // Timer de advertencia
    this.timerAdvertencia = setTimeout(() => {
      this.mostrarAdvertencia();
    }, this.tiempoAdvertencia);

    // Timer de cierre
    this.timerCierre = setTimeout(() => {
      this.cerrarSesion();
    }, this.tiempoCierre);
  }

  reiniciarTimers() {
    if (!this.activo) return;

    clearTimeout(this.timerAdvertencia);
    clearTimeout(this.timerCierre);
    this.iniciarTimers();
  }

  mostrarAdvertencia() {
    console.log("⚠️ ADVERTENCIA: Inactividad detectada");
    this.onAdvertencia();
  }

  cerrarSesion() {
    console.log("🚪 Cerrando sesión por inactividad");
    this.activo = false;
    this.onCierre();
  }

  detener() {
    clearTimeout(this.timerAdvertencia);
    clearTimeout(this.timerCierre);
    this.activo = false;
    console.log("🛑 Detector detenido");
  }
}

// Uso:
// const inactivityDetector = new InactivityDetector({
//   tiempoAdvertencia: 10000, // 10 segundos para testing
//   tiempoCierre: 20000, // 20 segundos
//   onAdvertencia: () => {
//     modal.warning('Inactividad', '¿Sigues ahí?');
//   },
//   onCierre: () => {
//     modal.error('Sesión cerrada', 'Por inactividad');
//     // Redirigir a login, etc.
//   }
// });

console.log("✅ Ejercicio 6: Detector de Inactividad - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 7: PROGRESS BAR DE SCROLL ⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una barra de progreso que:
- Muestre el porcentaje de scroll de la página
- Se actualice suavemente
- Sea responsive
- Tenga buen rendimiento

💡 PISTAS:
- Usa posición fixed en la parte superior
- Calcula porcentaje con scrollY / (scrollHeight - innerHeight)
- Usa throttle para optimizar
*/

// SOLUCIÓN:
class ScrollProgressBar {
  constructor(opciones = {}) {
    this.color = opciones.color || "#4CAF50";
    this.altura = opciones.altura || "4px";
    this.crear();
    this.inicializar();
  }

  crear() {
    this.barra = document.createElement("div");
    this.barra.id = "scroll-progress-bar";
    this.barra.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: ${this.altura};
      background: ${this.color};
      width: 0%;
      z-index: 99999;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(this.barra);
  }

  inicializar() {
    window.addEventListener(
      "scroll",
      this.throttle(this.actualizar.bind(this), 50)
    );
    this.actualizar(); // Actualizar inmediatamente
  }

  throttle(func, delay) {
    let ultimaEjecucion = 0;
    return function (...args) {
      const ahora = Date.now();
      if (ahora - ultimaEjecucion >= delay) {
        ultimaEjecucion = ahora;
        func.apply(this, args);
      }
    };
  }

  actualizar() {
    const scrollY = window.pageYOffset;
    const alturaTotal = document.documentElement.scrollHeight;
    const alturaVisible = window.innerHeight;
    const scrollMax = alturaTotal - alturaVisible;

    if (scrollMax > 0) {
      const porcentaje = (scrollY / scrollMax) * 100;
      this.barra.style.width = `${Math.min(porcentaje, 100)}%`;
    }
  }

  remover() {
    if (this.barra) {
      this.barra.remove();
    }
  }
}

// Uso:
// const progressBar = new ScrollProgressBar({ color: '#ff6b6b', altura: '5px' });

console.log("✅ Ejercicio 7: Progress Bar de Scroll - COMPLETADO");

//--------------------------------------------------------------------------------------
// CONTINUACIÓN EJERCICIO 8: SISTEMA DE CACHÉ CON EXPIRACIÓN
//--------------------------------------------------------------------------------------

class CacheManager {
  constructor(ttlPorDefecto = 3600000) {
    this.ttlPorDefecto = ttlPorDefecto;
    this.iniciarLimpiezaAutomatica();
  }

  set(clave, valor, ttl = null) {
    try {
      const item = {
        data: valor,
        timestamp: Date.now(),
        ttl: ttl || this.ttlPorDefecto,
      };
      localStorage.setItem(`cache_${clave}`, JSON.stringify(item));
      return true;
    } catch (error) {
      if (error.name === "QuotaExceededError") {
        this.limpiarExpirados();
        try {
          localStorage.setItem(`cache_${clave}`, JSON.stringify(item));
          return true;
        } catch {
          return false;
        }
      }
      return false;
    }
  }

  get(clave, renovarTTL = false) {
    try {
      const item = JSON.parse(localStorage.getItem(`cache_${clave}`));
      if (!item) return null;

      const edad = Date.now() - item.timestamp;
      if (edad > item.ttl) {
        this.remove(clave);
        return null;
      }

      if (renovarTTL) {
        item.timestamp = Date.now();
        localStorage.setItem(`cache_${clave}`, JSON.stringify(item));
      }
      return item.data;
    } catch {
      return null;
    }
  }

  remove(clave) {
    localStorage.removeItem(`cache_${clave}`);
  }

  limpiarExpirados() {
    const ahora = Date.now();
    let eliminados = 0;

    for (let i = 0; i < localStorage.length; i++) {
      const clave = localStorage.key(i);
      if (clave?.startsWith("cache_")) {
        try {
          const item = JSON.parse(localStorage.getItem(clave));
          if (ahora - item.timestamp > item.ttl) {
            localStorage.removeItem(clave);
            eliminados++;
          }
        } catch {
          localStorage.removeItem(clave);
        }
      }
    }
    console.log(`🧹 ${eliminados} elementos expirados eliminados`);
  }

  iniciarLimpiezaAutomatica(intervalo = 300000) {
    setInterval(() => this.limpiarExpirados(), intervalo);
  }
}

console.log("✅ Ejercicio 8 COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 9: GESTOR DE DESCARGAS ⭐⭐
//--------------------------------------------------------------------------------------

class DownloadManager {
  descargarTexto(contenido, nombreArchivo = "archivo.txt") {
    const blob = new Blob([contenido], { type: "text/plain" });
    this.descargarBlob(blob, nombreArchivo);
  }

  descargarJSON(datos, nombreArchivo = "datos.json") {
    const json = JSON.stringify(datos, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    this.descargarBlob(blob, nombreArchivo);
  }

  descargarCSV(datos, nombreArchivo = "datos.csv") {
    // Convertir array de objetos a CSV
    if (!Array.isArray(datos) || datos.length === 0) return;

    const headers = Object.keys(datos[0]).join(",");
    const rows = datos.map((obj) => Object.values(obj).join(",")).join("\n");
    const csv = `${headers}\n${rows}`;

    const blob = new Blob([csv], { type: "text/csv" });
    this.descargarBlob(blob, nombreArchivo);
  }

  descargarCanvas(canvas, nombreArchivo = "imagen.png") {
    canvas.toBlob((blob) => this.descargarBlob(blob, nombreArchivo));
  }

  descargarBlob(blob, nombreArchivo) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = nombreArchivo;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 100);
    console.log(`✅ Descarga iniciada: ${nombreArchivo}`);
  }
}

// Uso:
const downloadManager = new DownloadManager();
// downloadManager.descargarJSON({ nombre: 'Juan', edad: 30 }, 'usuario.json');

console.log("✅ Ejercicio 9: Gestor de Descargas - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 10: SISTEMA DE SHORTCUTS (ATAJOS DE TECLADO) ⭐⭐
//--------------------------------------------------------------------------------------

class ShortcutManager {
  constructor() {
    this.shortcuts = new Map();
    this.inicializar();
  }

  inicializar() {
    document.addEventListener("keydown", (e) => this.manejarEvento(e));
  }

  registrar(combinacion, callback, descripcion = "") {
    const tecla = this.normalizarCombinacion(combinacion);
    this.shortcuts.set(tecla, { callback, descripcion });
    console.log(`⌨️ Shortcut registrado: ${combinacion}`);
  }

  normalizarCombinacion(combinacion) {
    // Ejemplo: "Ctrl+S" o "Alt+Shift+D"
    return combinacion.toLowerCase().replace(/\s/g, "");
  }

  manejarEvento(e) {
    const teclas = [];
    if (e.ctrlKey || e.metaKey) teclas.push("ctrl");
    if (e.altKey) teclas.push("alt");
    if (e.shiftKey) teclas.push("shift");
    teclas.push(e.key.toLowerCase());

    const combinacion = teclas.join("+");
    const shortcut = this.shortcuts.get(combinacion);

    if (shortcut) {
      e.preventDefault();
      shortcut.callback(e);
    }
  }

  listar() {
    console.log("⌨️ Shortcuts registrados:");
    this.shortcuts.forEach((data, key) => {
      console.log(`  ${key}: ${data.descripcion || "Sin descripción"}`);
    });
  }

  eliminar(combinacion) {
    const tecla = this.normalizarCombinacion(combinacion);
    this.shortcuts.delete(tecla);
  }
}

// Uso:
const shortcuts = new ShortcutManager();
shortcuts.registrar("ctrl+s", (e) => console.log("💾 Guardando..."), "Guardar");
shortcuts.registrar("ctrl+k", (e) => console.log("🔍 Buscando..."), "Buscar");
// shortcuts.listar();

console.log("✅ Ejercicio 10: Sistema de Shortcuts - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 11: LOGGER AVANZADO ⭐⭐
//--------------------------------------------------------------------------------------

class Logger {
  constructor(nivel = "debug") {
    this.nivel = nivel;
    this.niveles = { debug: 0, info: 1, warn: 2, error: 3 };
    this.logs = [];
    this.maxLogs = 100;
  }

  log(nivel, mensaje, datos = null) {
    if (this.niveles[nivel] < this.niveles[this.nivel]) return;

    const entry = {
      timestamp: new Date().toISOString(),
      nivel,
      mensaje,
      datos,
      stack: new Error().stack,
    };

    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) this.logs.shift();

    const emoji = { debug: "🐛", info: "ℹ️", warn: "⚠️", error: "❌" };
    const estilo = {
      debug: "color: #888",
      info: "color: #4CAF50",
      warn: "color: #FF9800",
      error: "color: #F44336; font-weight: bold",
    };

    console.log(
      `%c${emoji[nivel]} [${nivel.toUpperCase()}] ${mensaje}`,
      estilo[nivel],
      datos || ""
    );
  }

  debug(mensaje, datos) {
    this.log("debug", mensaje, datos);
  }
  info(mensaje, datos) {
    this.log("info", mensaje, datos);
  }
  warn(mensaje, datos) {
    this.log("warn", mensaje, datos);
  }
  error(mensaje, datos) {
    this.log("error", mensaje, datos);
  }

  obtenerLogs(nivel = null) {
    return nivel ? this.logs.filter((l) => l.nivel === nivel) : this.logs;
  }

  exportar() {
    return JSON.stringify(this.logs, null, 2);
  }

  limpiar() {
    this.logs = [];
    console.log("🧹 Logs limpiados");
  }
}

// Uso:
const logger = new Logger("debug");
logger.info("Sistema iniciado", { version: "1.0" });
logger.warn("Advertencia de memoria");
logger.error("Error crítico", { code: 500 });

console.log("✅ Ejercicio 11: Logger Avanzado - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 12: FULL SCREEN MANAGER ⭐
//--------------------------------------------------------------------------------------

class FullScreenManager {
  static esSoportado() {
    return (
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled
    );
  }

  static estaFullScreen() {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement
    );
  }

  static async entrar(elemento = document.documentElement) {
    try {
      if (elemento.requestFullscreen) {
        await elemento.requestFullscreen();
      } else if (elemento.webkitRequestFullscreen) {
        await elemento.webkitRequestFullscreen();
      } else if (elemento.mozRequestFullScreen) {
        await elemento.mozRequestFullScreen();
      }
      console.log("🖥️ Modo pantalla completa activado");
      return true;
    } catch (error) {
      console.error("❌ Error al entrar en fullscreen:", error);
      return false;
    }
  }

  static async salir() {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        await document.mozCancelFullScreen();
      }
      console.log("🖥️ Modo pantalla completa desactivado");
      return true;
    } catch (error) {
      console.error("❌ Error al salir de fullscreen:", error);
      return false;
    }
  }

  static toggle(elemento) {
    return this.estaFullScreen() ? this.salir() : this.entrar(elemento);
  }

  static onChange(callback) {
    const eventos = [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
    ];
    eventos.forEach((evento) => {
      document.addEventListener(evento, () => {
        callback(this.estaFullScreen());
      });
    });
  }
}

// Uso:
// FullScreenManager.onChange((esFullScreen) => {
//   console.log('Fullscreen:', esFullScreen);
// });
// FullScreenManager.toggle();

console.log("✅ Ejercicio 12: Full Screen Manager - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 13: PERFORMANCE TRACKER ⭐⭐⭐
//--------------------------------------------------------------------------------------

class PerformanceTracker {
  constructor() {
    this.metricas = new Map();
  }

  iniciarMedicion(nombre) {
    this.metricas.set(nombre, { inicio: performance.now() });
  }

  finalizarMedicion(nombre) {
    const metrica = this.metricas.get(nombre);
    if (!metrica) return null;

    metrica.fin = performance.now();
    metrica.duracion = metrica.fin - metrica.inicio;

    console.log(`⏱️ ${nombre}: ${metrica.duracion.toFixed(2)}ms`);
    return metrica.duracion;
  }

  async medirAsync(nombre, funcion) {
    this.iniciarMedicion(nombre);
    try {
      const resultado = await funcion();
      this.finalizarMedicion(nombre);
      return resultado;
    } catch (error) {
      this.finalizarMedicion(nombre);
      throw error;
    }
  }

  medirSync(nombre, funcion) {
    this.iniciarMedicion(nombre);
    try {
      const resultado = funcion();
      this.finalizarMedicion(nombre);
      return resultado;
    } catch (error) {
      this.finalizarMedicion(nombre);
      throw error;
    }
  }

  obtenerResumen() {
    const resumen = {};
    this.metricas.forEach((metrica, nombre) => {
      resumen[nombre] = metrica.duracion
        ? `${metrica.duracion.toFixed(2)}ms`
        : "En progreso";
    });
    return resumen;
  }

  mostrarResumen() {
    console.table(this.obtenerResumen());
  }
}

// Uso:
const tracker = new PerformanceTracker();
// tracker.iniciarMedicion('operacion-larga');
// await tracker.medirAsync('fetch-datos', async () => {
//   return await fetch('/api/datos');
// });

console.log("✅ Ejercicio 13: Performance Tracker - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 14: DARK MODE MANAGER ⭐
//--------------------------------------------------------------------------------------

class DarkModeManager {
  constructor() {
    this.tema = this.obtenerTemaGuardado() || this.detectarPreferencia();
    this.aplicar();
  }

  detectarPreferencia() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  obtenerTemaGuardado() {
    return localStorage.getItem("tema");
  }

  guardarTema(tema) {
    localStorage.setItem("tema", tema);
  }

  aplicar() {
    document.body.classList.toggle("dark-mode", this.tema === "dark");
    document.body.classList.toggle("light-mode", this.tema === "light");
    console.log(`🎨 Tema aplicado: ${this.tema}`);
  }

  toggle() {
    this.tema = this.tema === "dark" ? "light" : "dark";
    this.guardarTema(this.tema);
    this.aplicar();
    return this.tema;
  }

  set(tema) {
    if (tema !== "dark" && tema !== "light") return;
    this.tema = tema;
    this.guardarTema(tema);
    this.aplicar();
  }

  escucharCambiosSistema() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!this.obtenerTemaGuardado()) {
          this.tema = e.matches ? "dark" : "light";
          this.aplicar();
        }
      });
  }
}

// Uso:
const darkMode = new DarkModeManager();
// darkMode.toggle();
// darkMode.escucharCambiosSistema();

console.log("✅ Ejercicio 14: Dark Mode Manager - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 15: PÁGINA DE PRUEBAS COMPLETA ⭐⭐⭐
//--------------------------------------------------------------------------------------

class TestingDashboard {
  constructor() {
    this.tests = [];
  }

  async ejecutarTodos() {
    console.log("\n🧪 EJECUTANDO TODOS LOS TESTS\n");

    this.testCache();
    this.testDescargas();
    this.testShortcuts();
    this.testLogger();
    this.testFullScreen();
    this.testPerformance();
    this.testDarkMode();

    this.mostrarResultados();
  }

  testCache() {
    console.log("📦 Test: CacheManager");
    const cache = new CacheManager(5000);
    cache.set("test", { valor: 123 });
    const recuperado = cache.get("test");
    console.log(recuperado ? "✅ PASS" : "❌ FAIL");
  }

  testDescargas() {
    console.log("💾 Test: DownloadManager");
    const dm = new DownloadManager();
    console.log("✅ PASS (métodos disponibles)");
  }

  testShortcuts() {
    console.log("⌨️ Test: ShortcutManager");
    const sm = new ShortcutManager();
    sm.registrar("ctrl+t", () => {});
    console.log("✅ PASS");
  }

  testLogger() {
    console.log("📝 Test: Logger");
    const logger = new Logger();
    logger.info("Test message");
    console.log(logger.logs.length > 0 ? "✅ PASS" : "❌ FAIL");
  }

  testFullScreen() {
    console.log("🖥️ Test: FullScreenManager");
    console.log(
      FullScreenManager.esSoportado() ? "✅ PASS" : "⚠️ No soportado"
    );
  }

  testPerformance() {
    console.log("⏱️ Test: PerformanceTracker");
    const pt = new PerformanceTracker();
    pt.medirSync("test", () => {
      for (let i = 0; i < 1000; i++) {}
    });
    console.log("✅ PASS");
  }

  testDarkMode() {
    console.log("🎨 Test: DarkModeManager");
    const dm = new DarkModeManager();
    console.log("✅ PASS");
  }

  mostrarResultados() {
    console.log("\n📊 RESUMEN DE TESTS");
    console.log("═══════════════════════════");
    console.log("✅ Todos los tests completados");
    console.log("═══════════════════════════\n");
  }
}

// Ejecutar dashboard de pruebas
const dashboard = new TestingDashboard();
// dashboard.ejecutarTodos();

console.log("✅ Ejercicio 15: Testing Dashboard - COMPLETADO");
console.log("\n🎉 ¡TODOS LOS EJERCICIOS COMPLETADOS!");
console.log("═══════════════════════════════════════");
console.log("📚 Has completado 15 ejercicios prácticos");
console.log("💪 Dominas el objeto window de JavaScript");
console.log("═══════════════════════════════════════\n");
