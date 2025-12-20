//--------------------------------------------------------------------------------------
// EJERCICIOS PRÁCTICOS - LOCALSTORAGE Y SESSIONSTORAGE
//--------------------------------------------------------------------------------------

/*
🎯 Este archivo contiene 12 ejercicios prácticos con soluciones

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
// EJERCICIO 1: SISTEMA DE PREFERENCIAS DE USUARIO ⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un sistema que:
- Guarde preferencias de usuario (tema, idioma, tamaño de fuente)
- Cargue preferencias al iniciar
- Permita actualizar preferencias individuales
- Tenga valores por defecto

💡 PISTAS:
- Usa un objeto para agrupar todas las preferencias
- JSON.stringify/parse para guardar objetos
- Implementa método para resetear a defaults
*/

// SOLUCIÓN:
class PreferenciasManager {
  constructor() {
    this.storageKey = "preferencias_usuario";
    this.defaults = {
      tema: "claro",
      idioma: "es",
      fontSize: 16,
      notificaciones: true,
      animaciones: true,
    };
  }

  cargar() {
    try {
      const guardadas = localStorage.getItem(this.storageKey);
      return guardadas
        ? { ...this.defaults, ...JSON.parse(guardadas) }
        : this.defaults;
    } catch (error) {
      console.error("Error al cargar preferencias:", error);
      return this.defaults;
    }
  }

  guardar(preferencias) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(preferencias));
      return true;
    } catch (error) {
      console.error("Error al guardar preferencias:", error);
      return false;
    }
  }

  actualizar(campo, valor) {
    const prefs = this.cargar();
    prefs[campo] = valor;
    return this.guardar(prefs);
  }

  obtener(campo) {
    const prefs = this.cargar();
    return prefs[campo];
  }

  resetear() {
    return this.guardar(this.defaults);
  }

  aplicarTema() {
    const tema = this.obtener("tema");
    document.body.classList.toggle("tema-oscuro", tema === "oscuro");
    console.log(`✅ Tema aplicado: ${tema}`);
  }

  aplicarFontSize() {
    const size = this.obtener("fontSize");
    document.documentElement.style.fontSize = `${size}px`;
    console.log(`✅ Tamaño de fuente: ${size}px`);
  }
}

// Uso:
const prefs = new PreferenciasManager();
console.log("Preferencias actuales:", prefs.cargar());
// prefs.actualizar('tema', 'oscuro');
// prefs.aplicarTema();

console.log("✅ Ejercicio 1: Sistema de Preferencias - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 2: TODO LIST CON PERSISTENCIA ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una lista de tareas que:
- Permita agregar, editar, eliminar tareas
- Marque tareas como completadas
- Filtre por estado (todas, completadas, pendientes)
- Persista en localStorage
- Exporte/importe datos en JSON

💡 PISTAS:
- Usa Date.now() para IDs únicos
- Implementa métodos CRUD completos
- Añade timestamp a cada tarea
*/

// SOLUCIÓN:
class TodoList {
  constructor() {
    this.storageKey = "todos";
  }

  obtenerTodos() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    } catch {
      return [];
    }
  }

  guardar(todos) {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

  agregar(texto, prioridad = "media") {
    const todos = this.obtenerTodos();
    const nuevo = {
      id: Date.now(),
      texto,
      prioridad,
      completada: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    todos.push(nuevo);
    this.guardar(todos);
    console.log("✅ Tarea agregada:", nuevo.texto);
    return nuevo;
  }

  editar(id, nuevoTexto) {
    const todos = this.obtenerTodos();
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.texto = nuevoTexto;
      todo.updatedAt = new Date().toISOString();
      this.guardar(todos);
      console.log("✅ Tarea editada");
      return true;
    }
    return false;
  }

  eliminar(id) {
    let todos = this.obtenerTodos();
    const antes = todos.length;
    todos = todos.filter((t) => t.id !== id);
    if (todos.length < antes) {
      this.guardar(todos);
      console.log("✅ Tarea eliminada");
      return true;
    }
    return false;
  }

  toggleCompletar(id) {
    const todos = this.obtenerTodos();
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.completada = !todo.completada;
      todo.updatedAt = new Date().toISOString();
      this.guardar(todos);
      console.log(`✅ Tarea ${todo.completada ? "completada" : "reactivada"}`);
      return true;
    }
    return false;
  }

  filtrar(estado) {
    const todos = this.obtenerTodos();
    switch (estado) {
      case "completadas":
        return todos.filter((t) => t.completada);
      case "pendientes":
        return todos.filter((t) => !t.completada);
      default:
        return todos;
    }
  }

  limpiarCompletadas() {
    let todos = this.obtenerTodos();
    const antes = todos.length;
    todos = todos.filter((t) => !t.completada);
    this.guardar(todos);
    console.log(`🧹 ${antes - todos.length} tareas completadas eliminadas`);
  }

  exportar() {
    return JSON.stringify(this.obtenerTodos(), null, 2);
  }

  importar(json) {
    try {
      const todos = JSON.parse(json);
      if (Array.isArray(todos)) {
        this.guardar(todos);
        console.log(`✅ ${todos.length} tareas importadas`);
        return true;
      }
    } catch (error) {
      console.error("❌ Error al importar:", error);
    }
    return false;
  }

  obtenerEstadisticas() {
    const todos = this.obtenerTodos();
    return {
      total: todos.length,
      completadas: todos.filter((t) => t.completada).length,
      pendientes: todos.filter((t) => !t.completada).length,
      porPrioridad: {
        alta: todos.filter((t) => t.prioridad === "alta").length,
        media: todos.filter((t) => t.prioridad === "media").length,
        baja: todos.filter((t) => t.prioridad === "baja").length,
      },
    };
  }
}

// Uso:
const todoList = new TodoList();
// todoList.agregar('Estudiar JavaScript', 'alta');
// todoList.agregar('Hacer ejercicios', 'media');
console.log("📋 Tareas:", todoList.obtenerTodos());
console.log("📊 Estadísticas:", todoList.obtenerEstadisticas());

console.log("✅ Ejercicio 2: Todo List - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 3: SISTEMA DE CACHÉ CON EXPIRACIÓN ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Implementa un sistema de caché que:
- Guarde datos con tiempo de expiración (TTL)
- Elimine automáticamente datos expirados
- Permita renovar TTL de entradas existentes
- Limpie caché antigua periódicamente

💡 PISTAS:
- Guarda timestamp junto con los datos
- Calcula edad de los datos al recuperar
- Implementa método de limpieza
*/

// SOLUCIÓN:
class CacheManager {
  constructor(defaultTTL = 3600000) {
    // 1 hora por defecto
    this.defaultTTL = defaultTTL;
  }

  set(key, data, ttl = null) {
    try {
      const item = {
        data,
        timestamp: Date.now(),
        ttl: ttl || this.defaultTTL,
      };
      localStorage.setItem(`cache_${key}`, JSON.stringify(item));
      console.log(`💾 Caché guardado: ${key}`);
      return true;
    } catch (error) {
      if (error.name === "QuotaExceededError") {
        console.warn("⚠️ Cuota excedida, limpiando caché...");
        this.limpiarExpirados();
        try {
          localStorage.setItem(`cache_${key}`, JSON.stringify(item));
          return true;
        } catch {
          return false;
        }
      }
      return false;
    }
  }

  get(key, renovarTTL = false) {
    try {
      const item = JSON.parse(localStorage.getItem(`cache_${key}`));
      if (!item) return null;

      const edad = Date.now() - item.timestamp;

      if (edad > item.ttl) {
        this.remove(key);
        console.log(`⏰ Caché expirado: ${key}`);
        return null;
      }

      if (renovarTTL) {
        item.timestamp = Date.now();
        localStorage.setItem(`cache_${key}`, JSON.stringify(item));
      }

      console.log(`✅ Caché válido: ${key}`);
      return item.data;
    } catch {
      return null;
    }
  }

  remove(key) {
    localStorage.removeItem(`cache_${key}`);
  }

  limpiarExpirados() {
    const ahora = Date.now();
    let eliminados = 0;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("cache_")) {
        try {
          const item = JSON.parse(localStorage.getItem(key));
          if (ahora - item.timestamp > item.ttl) {
            localStorage.removeItem(key);
            eliminados++;
          }
        } catch {
          localStorage.removeItem(key);
        }
      }
    }

    console.log(`🧹 ${eliminados} entradas expiradas eliminadas`);
    return eliminados;
  }

  obtenerInfo(key) {
    try {
      const item = JSON.parse(localStorage.getItem(`cache_${key}`));
      if (!item) return null;

      const edad = Date.now() - item.timestamp;
      const restante = item.ttl - edad;

      return {
        edad: Math.floor(edad / 1000),
        restante: Math.floor(restante / 1000),
        expirado: edad > item.ttl,
      };
    } catch {
      return null;
    }
  }

  iniciarLimpiezaAutomatica(intervalo = 300000) {
    // 5 minutos
    return setInterval(() => this.limpiarExpirados(), intervalo);
  }
}

// Uso:
const cache = new CacheManager(10000); // 10 segundos
// cache.set('usuarios', [{ id: 1, nombre: 'Ana' }]);
// setTimeout(() => console.log(cache.get('usuarios')), 5000); // ✅ Válido
// setTimeout(() => console.log(cache.get('usuarios')), 11000); // null

console.log("✅ Ejercicio 3: Sistema de Caché - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 4: CARRITO DE COMPRAS ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un carrito de compras que:
- Agregue/elimine productos
- Actualice cantidades
- Calcule total con descuentos
- Persista entre sesiones
- Detecte productos duplicados

💡 PISTAS:
- Usa ID único para cada producto
- Implementa cálculo de subtotales
- Maneja stock máximo
*/

// SOLUCIÓN:
class CarritoCompras {
  constructor() {
    this.storageKey = "carrito";
  }

  obtenerCarrito() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    } catch {
      return [];
    }
  }

  guardar(carrito) {
    localStorage.setItem(this.storageKey, JSON.stringify(carrito));
  }

  agregar(producto, cantidad = 1) {
    const carrito = this.obtenerCarrito();
    const existente = carrito.find((item) => item.id === producto.id);

    if (existente) {
      existente.cantidad += cantidad;
      existente.subtotal = existente.cantidad * existente.precio;
    } else {
      carrito.push({
        ...producto,
        cantidad,
        subtotal: producto.precio * cantidad,
        agregadoEn: new Date().toISOString(),
      });
    }

    this.guardar(carrito);
    console.log(`✅ ${producto.nombre} agregado al carrito`);
    return true;
  }

  actualizar(id, cantidad) {
    const carrito = this.obtenerCarrito();
    const item = carrito.find((i) => i.id === id);

    if (item) {
      if (cantidad <= 0) {
        return this.eliminar(id);
      }
      item.cantidad = cantidad;
      item.subtotal = item.cantidad * item.precio;
      this.guardar(carrito);
      console.log("✅ Cantidad actualizada");
      return true;
    }
    return false;
  }

  eliminar(id) {
    let carrito = this.obtenerCarrito();
    const antes = carrito.length;
    carrito = carrito.filter((item) => item.id !== id);

    if (carrito.length < antes) {
      this.guardar(carrito);
      console.log("✅ Producto eliminado del carrito");
      return true;
    }
    return false;
  }

  vaciar() {
    localStorage.removeItem(this.storageKey);
    console.log("🗑️ Carrito vaciado");
  }

  calcularTotal() {
    const carrito = this.obtenerCarrito();
    return carrito.reduce((total, item) => total + item.subtotal, 0);
  }

  aplicarDescuento(porcentaje) {
    const total = this.calcularTotal();
    const descuento = total * (porcentaje / 100);
    const final = total - descuento;

    return {
      subtotal: total,
      descuento,
      total: final,
    };
  }

  obtenerCantidadItems() {
    const carrito = this.obtenerCarrito();
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  }

  obtenerResumen() {
    const carrito = this.obtenerCarrito();
    return {
      productos: carrito.length,
      itemsTotales: this.obtenerCantidadItems(),
      total: this.calcularTotal(),
    };
  }
}

// Uso:
const carrito = new CarritoCompras();
// carrito.agregar({ id: 1, nombre: 'Laptop', precio: 999 }, 1);
// carrito.agregar({ id: 2, nombre: 'Mouse', precio: 25 }, 2);
console.log("🛒 Carrito:", carrito.obtenerCarrito());
console.log("💰 Total:", carrito.calcularTotal());
console.log("📊 Resumen:", carrito.obtenerResumen());

console.log("✅ Ejercicio 4: Carrito de Compras - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 5: HISTORIAL DE BÚSQUEDAS ⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Implementa un historial que:
- Guarde últimas 10 búsquedas
- No repita búsquedas
- Ordene por más reciente
- Permita eliminar individualmente
- Muestre sugerencias

💡 PISTAS:
- Usa array con límite máximo
- Implementa búsqueda sin duplicados
- Filtra por coincidencias parciales
*/

// SOLUCIÓN:
class HistorialBusquedas {
  constructor(maxItems = 10) {
    this.storageKey = "historial_busquedas";
    this.maxItems = maxItems;
  }

  obtener() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    } catch {
      return [];
    }
  }

  agregar(busqueda) {
    let historial = this.obtener();

    // Eliminar si ya existe
    historial = historial.filter((item) => item.texto !== busqueda);

    // Agregar al inicio
    historial.unshift({
      texto: busqueda,
      fecha: new Date().toISOString(),
      veces: 1,
    });

    // Limitar a máximo de items
    if (historial.length > this.maxItems) {
      historial = historial.slice(0, this.maxItems);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(historial));
    console.log(`🔍 Búsqueda guardada: ${busqueda}`);
  }

  eliminar(busqueda) {
    let historial = this.obtener();
    historial = historial.filter((item) => item.texto !== busqueda);
    localStorage.setItem(this.storageKey, JSON.stringify(historial));
    console.log("✅ Búsqueda eliminada del historial");
  }

  limpiar() {
    localStorage.removeItem(this.storageKey);
    console.log("🗑️ Historial limpiado");
  }

  buscarSugerencias(termino) {
    if (!termino) return [];

    const historial = this.obtener();
    const terminoLower = termino.toLowerCase();

    return historial
      .filter((item) => item.texto.toLowerCase().includes(terminoLower))
      .map((item) => item.texto);
  }

  obtenerMasRecientes(cantidad = 5) {
    const historial = this.obtener();
    return historial.slice(0, cantidad);
  }
}

// Uso:
const historial = new HistorialBusquedas();
// historial.agregar('JavaScript tutorial');
// historial.agregar('React hooks');
// historial.agregar('CSS grid');
console.log("🔍 Historial:", historial.obtener());
console.log('💡 Sugerencias para "java":', historial.buscarSugerencias("java"));

console.log("✅ Ejercicio 5: Historial de Búsquedas - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 6: SISTEMA DE SESIÓN ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un sistema de sesión que:
- Guarde usuario activo en sessionStorage
- Detecte timeout de inactividad
- Registre hora de inicio/fin
- Sincronice entre pestañas

💡 PISTAS:
- Usa sessionStorage para datos de sesión
- Implementa evento storage para sincronización
- Guarda timestamp de última actividad
*/

// SOLUCIÓN:
class SesionManager {
  constructor(timeoutMinutos = 30) {
    this.sessionKey = "sesion_activa";
    this.activityKey = "ultima_actividad";
    this.timeout = timeoutMinutos * 60 * 1000;
    this.inicializar();
  }

  inicializar() {
    // Detectar actividad
    ["click", "keydown", "mousemove", "scroll"].forEach((evento) => {
      document.addEventListener(evento, () => this.registrarActividad(), {
        passive: true,
      });
    });

    // Verificar timeout cada minuto
    setInterval(() => this.verificarTimeout(), 60000);

    // Sincronizar entre pestañas
    window.addEventListener("storage", (e) => {
      if (e.key === this.sessionKey && !e.newValue) {
        console.log("🚪 Sesión cerrada en otra pestaña");
        this.cerrar();
      }
    });
  }

  iniciarSesion(usuario) {
    const sesion = {
      usuario,
      inicioSesion: new Date().toISOString(),
      expira: Date.now() + this.timeout,
    };

    sessionStorage.setItem(this.sessionKey, JSON.stringify(sesion));
    this.registrarActividad();
    console.log(`✅ Sesión iniciada: ${usuario.nombre}`);
    return true;
  }

  obtenerSesion() {
    try {
      const sesion = sessionStorage.getItem(this.sessionKey);
      return sesion ? JSON.parse(sesion) : null;
    } catch {
      return null;
    }
  }

  estaActiva() {
    const sesion = this.obtenerSesion();
    if (!sesion) return false;

    const ahora = Date.now();
    return ahora < sesion.expira;
  }

  registrarActividad() {
    const sesion = this.obtenerSesion();
    if (sesion) {
      sesion.expira = Date.now() + this.timeout;
      sessionStorage.setItem(this.sessionKey, JSON.stringify(sesion));
      localStorage.setItem(this.activityKey, Date.now().toString());
    }
  }

  verificarTimeout() {
    if (!this.estaActiva()) {
      console.log("⏰ Sesión expirada por inactividad");
      this.cerrar();
    }
  }

  cerrarSesion() {
    const sesion = this.obtenerSesion();
    if (sesion) {
      console.log(`🚪 Sesión cerrada: ${sesion.usuario.nombre}`);
      sessionStorage.removeItem(this.sessionKey);
      localStorage.removeItem(this.activityKey);
    }
  }

  obtenerTiempoRestante() {
    const sesion = this.obtenerSesion();
    if (!sesion) return 0;

    const restante = sesion.expira - Date.now();
    return Math.max(0, Math.floor(restante / 1000 / 60)); // minutos
  }
}

// Uso:
const sesion = new SesionManager(30);
// sesion.iniciarSesion({ id: 1, nombre: 'Usuario' });
// console.log('Sesión activa:', sesion.estaActiva());
// console.log('Tiempo restante:', sesion.obtenerTiempoRestante(), 'min');

console.log("✅ Ejercicio 6: Sistema de Sesión - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 7: FORMULARIO CON AUTO-GUARDADO ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un sistema de auto-guardado que:
- Guarde datos del formulario automáticamente
- Recupere datos al recargar página
- Limpie datos al enviar exitosamente
- Detecte cambios en tiempo real

💡 PISTAS:
- Escucha eventos input/change
- Usa debounce para optimizar
- Guarda timestamp de último guardado
*/

// SOLUCIÓN:
class AutoGuardadoFormulario {
  constructor(formId, intervalo = 2000) {
    this.formId = formId;
    this.storageKey = `form_${formId}`;
    this.intervalo = intervalo;
    this.timeoutId = null;
  }

  inicializar() {
    const form = document.getElementById(this.formId);
    if (!form) {
      console.error("Formulario no encontrado");
      return;
    }

    // Recuperar datos guardados
    this.cargarDatos(form);

    // Escuchar cambios
    form.addEventListener("input", (e) => {
      this.programarGuardado(form);
    });

    // Limpiar al enviar
    form.addEventListener("submit", (e) => {
      this.limpiar();
    });

    console.log("✅ Auto-guardado inicializado");
  }

  programarGuardado(form) {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.guardarDatos(form);
    }, this.intervalo);
  }

  guardarDatos(form) {
    const datos = {};
    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
      datos[key] = value;
    }

    const guardado = {
      datos,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem(this.storageKey, JSON.stringify(guardado));
    console.log("💾 Formulario guardado automáticamente");
  }

  cargarDatos(form) {
    try {
      const guardado = JSON.parse(localStorage.getItem(this.storageKey));
      if (!guardado) return;

      Object.entries(guardado.datos).forEach(([name, value]) => {
        const campo = form.elements[name];
        if (campo) {
          if (campo.type === "checkbox") {
            campo.checked = value === "on";
          } else {
            campo.value = value;
          }
        }
      });

      const fecha = new Date(guardado.timestamp);
      console.log(`✅ Datos recuperados (guardado: ${fecha.toLocaleString()})`);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  }

  limpiar() {
    localStorage.removeItem(this.storageKey);
    console.log("🗑️ Datos del formulario eliminados");
  }

  obtenerUltimoGuardado() {
    try {
      const guardado = JSON.parse(localStorage.getItem(this.storageKey));
      return guardado ? guardado.timestamp : null;
    } catch {
      return null;
    }
  }
}

// Uso:
// const autoGuardado = new AutoGuardadoFormulario('miFormulario');
// autoGuardado.inicializar();

console.log("✅ Ejercicio 7: Auto-Guardado Formulario - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 8: SINCRONIZACIÓN ENTRE PESTAÑAS ⭐⭐⭐ - VERSIÓN MEJORADA
//--------------------------------------------------------------------------------------

class SyncManager {
  constructor(canal = "default") {
    this.canal = `sync_${canal}`;
    this.listeners = new Map();
    this.tabId = this.generarId(); // ID único para esta pestaña
    this.inicializar();
  }

  inicializar() {
    window.addEventListener("storage", (e) => {
      // Solo procesar eventos de nuestro canal
      if (e.key?.startsWith(this.canal)) {
        const data = this.parsearMensaje(e.newValue);

        // Ignorar mensajes de esta misma pestaña
        if (data && data.from !== this.tabId) {
          this.emitir(data.evento, data.payload);
        }
      }
    });
    console.log(`✅ Sincronización inicializada (Tab: ${this.tabId})`);
  }

  broadcast(evento, payload) {
    const mensaje = {
      evento,
      payload,
      timestamp: Date.now(),
      from: this.tabId, // Identificar origen
    };

    const key = `${this.canal}_${Date.now()}_${Math.random()}`;
    localStorage.setItem(key, JSON.stringify(mensaje));

    // Limpiar mensaje antiguo (y otros mensajes viejos)
    setTimeout(() => {
      localStorage.removeItem(key);
      this.limpiarMensajesAntiguos();
    }, 1000);

    console.log(`📡 Broadcast: ${evento}`);
  }

  on(evento, callback) {
    if (!this.listeners.has(evento)) {
      this.listeners.set(evento, []);
    }
    this.listeners.get(evento).push(callback);
  }

  off(evento, callback) {
    if (!this.listeners.has(evento)) return;

    if (callback) {
      // Remover callback específico
      const callbacks = this.listeners.get(evento);
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    } else {
      // Remover todos los listeners de este evento
      this.listeners.delete(evento);
    }
  }

  emitir(evento, payload) {
    const callbacks = this.listeners.get(evento);
    if (callbacks) {
      callbacks.forEach((cb) => {
        try {
          cb(payload);
        } catch (error) {
          console.error(`Error en listener de '${evento}':`, error);
        }
      });
    }
  }

  parsearMensaje(mensaje) {
    try {
      return JSON.parse(mensaje);
    } catch {
      return null;
    }
  }

  generarId() {
    return `tab_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  sincronizarDato(key, value) {
    const data = {
      key,
      value,
      timestamp: Date.now(),
    };

    localStorage.setItem(key, JSON.stringify(data));
    this.broadcast("update", data);
  }

  obtenerDato(key) {
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return null;
      const data = JSON.parse(stored);
      return data.value;
    } catch {
      return null;
    }
  }

  limpiarMensajesAntiguos() {
    const ahora = Date.now();
    const maxEdad = 5000; // 5 segundos

    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);

      if (key?.startsWith(this.canal)) {
        try {
          const mensaje = JSON.parse(localStorage.getItem(key));
          const edad = ahora - mensaje.timestamp;

          if (edad > maxEdad) {
            localStorage.removeItem(key);
          }
        } catch {
          // Si hay error al parsear, eliminar
          localStorage.removeItem(key);
        }
      }
    }
  }

  obtenerPestañasActivas() {
    // Obtener todas las pestañas que han enviado mensajes recientemente
    const ahora = Date.now();
    const umbral = 10000; // 10 segundos
    const pestañas = new Set();

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key?.startsWith(this.canal)) {
        try {
          const mensaje = JSON.parse(localStorage.getItem(key));
          const edad = ahora - mensaje.timestamp;

          if (edad < umbral && mensaje.from) {
            pestañas.add(mensaje.from);
          }
        } catch {
          // Ignorar errores
        }
      }
    }

    return Array.from(pestañas);
  }

  destruir() {
    // Limpiar listeners
    this.listeners.clear();
    console.log("🔌 SyncManager destruido");
  }
}

// ====================
// EJEMPLOS DE USO
// ====================

// Ejemplo 1: Sincronización básica
const sync = new SyncManager("miApp");

sync.on("update", (data) => {
  console.log("📥 Actualización recibida:", data);
});

// sync.sincronizarDato('contador', 42);

// -------------------

// Ejemplo 2: Chat entre pestañas
const chatSync = new SyncManager("chat");

chatSync.on("mensaje", (data) => {
  console.log(`💬 ${data.usuario}: ${data.texto}`);
});

// chatSync.broadcast('mensaje', {
//   usuario: 'Ana',
//   texto: 'Hola desde otra pestaña!'
// });

// -------------------

// Ejemplo 3: Sincronización de estado de aplicación
const appSync = new SyncManager("appState");

appSync.on("estadoCambiado", (nuevoEstado) => {
  console.log("🔄 Estado de la app actualizado:", nuevoEstado);
  // Actualizar UI, Redux, etc.
});

// appSync.broadcast('estadoCambiado', {
//   usuario: { id: 1, nombre: 'Usuario' },
//   tema: 'oscuro'
// });

// -------------------

// Ejemplo 4: Notificación de cierre de sesión
const authSync = new SyncManager("auth");

authSync.on("logout", () => {
  console.log("🚪 Sesión cerrada en otra pestaña");
  // Redirigir a login
  // window.location.href = '/login';
});

// authSync.broadcast('logout', null);

// -------------------

// Ejemplo 5: Remover listeners
const testSync = new SyncManager("test");

const handler = (data) => {
  console.log("Evento recibido:", data);
};

testSync.on("test", handler);
// Más tarde...
// testSync.off("test", handler); // Remover listener específico
// testSync.off("test"); // Remover todos los listeners de 'test'

console.log("✅ Ejercicio 8: Sincronización entre Pestañas - MEJORADO");

// ====================
// CASOS DE USO REALES
// ====================

/*
1. SINCRONIZAR CARRITO DE COMPRAS:
   - Si usuario agrega producto en pestaña A
   - Se actualiza automáticamente en pestaña B

2. NOTIFICAR CIERRE DE SESIÓN:
   - Usuario cierra sesión en una pestaña
   - Todas las demás cierran sesión automáticamente

3. CHAT EN TIEMPO REAL:
   - Mensajes aparecen en todas las pestañas abiertas

4. ACTUALIZAR PREFERENCIAS:
   - Cambio de tema se aplica en todas las pestañas

5. SINCRONIZAR PROGRESO:
   - En aplicaciones de cursos/juegos
   - El progreso se actualiza en todas las pestañas
*/

//--------------------------------------------------------------------------------------
// EJERCICIO 9: GESTIÓN DE CUOTA DE ALMACENAMIENTO ⭐⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un sistema que:
- Calcule espacio disponible
- Detecte cuando se llena el storage
- Implemente estrategia LRU (Least Recently Used)
- Comprima datos grandes

💡 PISTAS:
- Calcula tamaño en bytes de strings
- Implementa política de eliminación
- Usa timestamp para LRU
*/

// SOLUCIÓN:
class StorageQuotaManager {
  constructor() {
    this.metadataKey = "_storage_metadata";
  }

  calcularTamano(str) {
    // Cada carácter UTF-16 ocupa 2 bytes
    return new Blob([str]).size;
  }

  obtenerTamanoTotal() {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += this.calcularTamano(localStorage.getItem(key));
        total += this.calcularTamano(key);
      }
    }
    return total;
  }

  obtenerEspacioDisponible() {
    // Límite típico de localStorage: 5-10MB
    const limite = 5 * 1024 * 1024; // 5MB
    const usado = this.obtenerTamanoTotal();
    return limite - usado;
  }

  obtenerMetadata() {
    try {
      return JSON.parse(localStorage.getItem(this.metadataKey)) || {};
    } catch {
      return {};
    }
  }

  guardarMetadata(metadata) {
    localStorage.setItem(this.metadataKey, JSON.stringify(metadata));
  }

  set(key, value) {
    const metadata = this.obtenerMetadata();

    try {
      localStorage.setItem(key, JSON.stringify(value));

      // Actualizar metadata
      metadata[key] = {
        size: this.calcularTamano(JSON.stringify(value)),
        lastAccess: Date.now(),
        accessCount: (metadata[key]?.accessCount || 0) + 1,
      };

      this.guardarMetadata(metadata);
      console.log(`✅ Guardado: ${key}`);
      return true;
    } catch (error) {
      if (error.name === "QuotaExceededError") {
        console.warn("⚠️ Cuota excedida, ejecutando LRU...");
        this.liberarEspacio(this.calcularTamano(JSON.stringify(value)));

        try {
          localStorage.setItem(key, JSON.stringify(value));
          return true;
        } catch {
          console.error("❌ No se pudo liberar suficiente espacio");
          return false;
        }
      }
      return false;
    }
  }

  get(key) {
    const value = localStorage.getItem(key);
    if (!value) return null;

    // Actualizar último acceso
    const metadata = this.obtenerMetadata();
    if (metadata[key]) {
      metadata[key].lastAccess = Date.now();
      metadata[key].accessCount++;
      this.guardarMetadata(metadata);
    }

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  liberarEspacio(necesario) {
    const metadata = this.obtenerMetadata();

    // Ordenar por último acceso (LRU)
    const items = Object.entries(metadata)
      .filter(([key]) => key !== this.metadataKey)
      .sort((a, b) => a[1].lastAccess - b[1].lastAccess);

    let liberado = 0;

    for (let [key, data] of items) {
      if (liberado >= necesario) break;

      localStorage.removeItem(key);
      liberado += data.size;
      delete metadata[key];
      console.log(`🗑️ Eliminado (LRU): ${key}`);
    }

    this.guardarMetadata(metadata);
    console.log(`✅ Espacio liberado: ${liberado} bytes`);
  }

  obtenerEstadisticas() {
    const total = this.obtenerTamanoTotal();
    const disponible = this.obtenerEspacioDisponible();
    const metadata = this.obtenerMetadata();

    return {
      totalUsado: total,
      disponible: disponible,
      porcentajeUso: ((total / (total + disponible)) * 100).toFixed(2),
      itemsAlmacenados: Object.keys(metadata).length - 1,
      itemMasGrande: this.obtenerItemMasGrande(metadata),
      itemMenosUsado: this.obtenerItemMenosUsado(metadata),
    };
  }

  obtenerItemMasGrande(metadata) {
    let max = { key: null, size: 0 };
    for (let [key, data] of Object.entries(metadata)) {
      if (data.size > max.size) {
        max = { key, size: data.size };
      }
    }
    return max;
  }

  obtenerItemMenosUsado(metadata) {
    let min = { key: null, lastAccess: Date.now() };
    for (let [key, data] of Object.entries(metadata)) {
      if (key !== this.metadataKey && data.lastAccess < min.lastAccess) {
        min = { key, lastAccess: data.lastAccess };
      }
    }
    return min;
  }

  limpiarTodo() {
    localStorage.clear();
    console.log("🗑️ Storage completamente limpiado");
  }
}

// Uso:
const quotaManager = new StorageQuotaManager();
console.log(
  "📊 Estadísticas de almacenamiento:",
  quotaManager.obtenerEstadisticas()
);

console.log("✅ Ejercicio 9: Gestión de Cuota - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 10: SISTEMA DE NOTIFICACIONES PERSISTENTES ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un sistema de notificaciones que:
- Almacene notificaciones no leídas
- Marque como leídas
- Elimine después de X días
- Agrupe por tipo/prioridad

💡 PISTAS:
- Usa array de objetos
- Implementa filtros múltiples
- Calcula edad de notificaciones
*/

// SOLUCIÓN:
class NotificacionesManager {
  constructor() {
    this.storageKey = "notificaciones";
    this.diasExpiracion = 7;
  }

  obtenerTodas() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    } catch {
      return [];
    }
  }

  guardar(notificaciones) {
    localStorage.setItem(this.storageKey, JSON.stringify(notificaciones));
  }

  agregar(titulo, mensaje, tipo = "info", prioridad = "normal") {
    const notificaciones = this.obtenerTodas();

    const nueva = {
      id: Date.now(),
      titulo,
      mensaje,
      tipo, // info, success, warning, error
      prioridad, // baja, normal, alta
      leida: false,
      createdAt: new Date().toISOString(),
    };

    notificaciones.unshift(nueva);
    this.guardar(notificaciones);
    console.log(`🔔 Nueva notificación: ${titulo}`);
    return nueva;
  }

  marcarComoLeida(id) {
    const notificaciones = this.obtenerTodas();
    const notif = notificaciones.find((n) => n.id === id);

    if (notif) {
      notif.leida = true;
      notif.leidaEn = new Date().toISOString();
      this.guardar(notificaciones);
      console.log("✅ Notificación marcada como leída");
      return true;
    }
    return false;
  }

  marcarTodasLeidas() {
    const notificaciones = this.obtenerTodas();
    const ahora = new Date().toISOString();

    notificaciones.forEach((n) => {
      if (!n.leida) {
        n.leida = true;
        n.leidaEn = ahora;
      }
    });

    this.guardar(notificaciones);
    console.log("✅ Todas las notificaciones marcadas como leídas");
  }

  eliminar(id) {
    let notificaciones = this.obtenerTodas();
    notificaciones = notificaciones.filter((n) => n.id !== id);
    this.guardar(notificaciones);
    console.log("🗑️ Notificación eliminada");
  }

  limpiarLeidas() {
    let notificaciones = this.obtenerTodas();
    const antes = notificaciones.length;
    notificaciones = notificaciones.filter((n) => !n.leida);
    this.guardar(notificaciones);
    console.log(
      `🧹 ${antes - notificaciones.length} notificaciones leídas eliminadas`
    );
  }

  limpiarExpiradas() {
    const ahora = Date.now();
    const limite = this.diasExpiracion * 24 * 60 * 60 * 1000;

    let notificaciones = this.obtenerTodas();
    const antes = notificaciones.length;

    notificaciones = notificaciones.filter((n) => {
      const edad = ahora - new Date(n.createdAt).getTime();
      return edad < limite;
    });

    this.guardar(notificaciones);
    console.log(
      `🧹 ${antes - notificaciones.length} notificaciones expiradas eliminadas`
    );
  }

  obtenerNoLeidas() {
    return this.obtenerTodas().filter((n) => !n.leida);
  }

  contarNoLeidas() {
    return this.obtenerNoLeidas().length;
  }

  filtrar({ tipo, prioridad, leida } = {}) {
    let notificaciones = this.obtenerTodas();

    if (tipo) {
      notificaciones = notificaciones.filter((n) => n.tipo === tipo);
    }
    if (prioridad) {
      notificaciones = notificaciones.filter((n) => n.prioridad === prioridad);
    }
    if (leida !== undefined) {
      notificaciones = notificaciones.filter((n) => n.leida === leida);
    }

    return notificaciones;
  }

  agruparPorTipo() {
    const notificaciones = this.obtenerTodas();
    return notificaciones.reduce((grupos, notif) => {
      if (!grupos[notif.tipo]) {
        grupos[notif.tipo] = [];
      }
      grupos[notif.tipo].push(notif);
      return grupos;
    }, {});
  }

  obtenerEstadisticas() {
    const notificaciones = this.obtenerTodas();
    return {
      total: notificaciones.length,
      noLeidas: this.contarNoLeidas(),
      porTipo: this.agruparPorTipo(),
      porPrioridad: {
        alta: notificaciones.filter((n) => n.prioridad === "alta").length,
        normal: notificaciones.filter((n) => n.prioridad === "normal").length,
        baja: notificaciones.filter((n) => n.prioridad === "baja").length,
      },
    };
  }
}

// Uso:
const notificaciones = new NotificacionesManager();
// notificaciones.agregar('Bienvenido', 'Gracias por usar la app', 'success', 'normal');
// notificaciones.agregar('Actualización', 'Nueva versión disponible', 'info', 'alta');
console.log("🔔 No leídas:", notificaciones.contarNoLeidas());
console.log("📊 Estadísticas:", notificaciones.obtenerEstadisticas());

console.log("✅ Ejercicio 10: Sistema de Notificaciones - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 11: VERSIONADO DE DATOS ⭐⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Implementa un sistema que:
- Maneje diferentes versiones de estructura de datos
- Migre datos antiguos automáticamente
- Mantenga compatibilidad hacia atrás
- Registre historial de migraciones

💡 PISTAS:
- Usa número de versión en datos
- Implementa migradores por versión
- Valida estructura de datos
*/

// SOLUCIÓN:
class VersionManager {
  constructor(storageKey, versionActual = 1) {
    this.storageKey = storageKey;
    this.versionActual = versionActual;
    this.migradores = new Map();
  }

  registrarMigrador(version, migrador) {
    this.migradores.set(version, migrador);
    console.log(`📝 Migrador registrado para v${version}`);
  }

  cargar() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (!stored) return this.crearNuevo();

      let data = JSON.parse(stored);

      // Verificar versión
      if (!data._version) {
        data._version = 1;
      }

      // Migrar si es necesario
      if (data._version < this.versionActual) {
        data = this.migrar(data);
      }

      return data;
    } catch (error) {
      console.error("Error al cargar datos:", error);
      return this.crearNuevo();
    }
  }

  crearNuevo() {
    return {
      _version: this.versionActual,
      _createdAt: new Date().toISOString(),
      datos: {},
    };
  }

  migrar(data) {
    console.log(`🔄 Migrando de v${data._version} a v${this.versionActual}`);

    const historial = [];

    for (let v = data._version + 1; v <= this.versionActual; v++) {
      const migrador = this.migradores.get(v);

      if (migrador) {
        console.log(`  → Aplicando migrador v${v}`);
        data = migrador(data);
        data._version = v;

        historial.push({
          version: v,
          timestamp: new Date().toISOString(),
        });
      }
    }

    data._migraciones = [...(data._migraciones || []), ...historial];
    this.guardar(data);

    console.log("✅ Migración completada");
    return data;
  }

  guardar(data) {
    data._version = this.versionActual;
    data._updatedAt = new Date().toISOString();
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  obtenerVersion() {
    const data = this.cargar();
    return data._version;
  }

  obtenerHistorialMigraciones() {
    const data = this.cargar();
    return data._migraciones || [];
  }
}

// Ejemplo de uso con migradores:
const versionManager = new VersionManager("mi_app_data", 3);

// Migrador v1 -> v2: Agregar campo email
versionManager.registrarMigrador(2, (data) => {
  if (data.datos.usuario) {
    data.datos.usuario.email = data.datos.usuario.email || "";
  }
  return data;
});

// Migrador v2 -> v3: Separar nombre completo
versionManager.registrarMigrador(3, (data) => {
  if (data.datos.usuario?.nombre) {
    const partes = data.datos.usuario.nombre.split(" ");
    data.datos.usuario.firstName = partes[0];
    data.datos.usuario.lastName = partes.slice(1).join(" ");
    delete data.datos.usuario.nombre;
  }
  return data;
});

// const misDatos = versionManager.cargar();
console.log("📦 Versión actual:", versionManager.obtenerVersion());

console.log("✅ Ejercicio 11: Versionado de Datos - COMPLETADO");

//--------------------------------------------------------------------------------------
// EJERCICIO 12: BACKUP Y RESTAURACIÓN ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un sistema que:
- Exporte todo el localStorage a JSON
- Importe y restaure backups
- Valide integridad de backups
- Permita backups parciales

💡 PISTAS:
- Serializa todo el storage
- Añade checksum para validación
- Maneja errores de importación
*/

// SOLUCIÓN:
class BackupManager {
  constructor() {
    this.version = "1.0.0";
  }

  crearBackupCompleto() {
    const backup = {
      version: this.version,
      timestamp: new Date().toISOString(),
      itemCount: localStorage.length,
      data: {},
    };

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      backup.data[key] = localStorage.getItem(key);
    }

    backup.checksum = this.calcularChecksum(backup.data);
    console.log(`💾 Backup creado: ${backup.itemCount} items`);
    return backup;
  }

  crearBackupParcial(keys) {
    const backup = {
      version: this.version,
      timestamp: new Date().toISOString(),
      partial: true,
      keys,
      data: {},
    };

    keys.forEach((key) => {
      const value = localStorage.getItem(key);
      if (value !== null) {
        backup.data[key] = value;
      }
    });

    backup.checksum = this.calcularChecksum(backup.data);
    console.log(`💾 Backup parcial: ${Object.keys(backup.data).length} items`);
    return backup;
  }

  exportarJSON(backup) {
    return JSON.stringify(backup, null, 2);
  }

  descargarBackup(nombre = "backup") {
    const backup = this.crearBackupCompleto();
    const json = this.exportarJSON(backup);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${nombre}_${Date.now()}.json`;
    a.click();

    URL.revokeObjectURL(url);
    console.log("✅ Backup descargado");
  }

  validarBackup(backup) {
    const errores = [];

    if (!backup.version) {
      errores.push("Falta versión");
    }
    if (!backup.timestamp) {
      errores.push("Falta timestamp");
    }
    if (!backup.data) {
      errores.push("Falta data");
    }
    if (!backup.checksum) {
      errores.push("Falta checksum");
    }

    // Validar checksum
    if (backup.checksum) {
      const checksumCalculado = this.calcularChecksum(backup.data);
      if (checksumCalculado !== backup.checksum) {
        errores.push("Checksum inválido - datos corruptos");
      }
    }

    return {
      valido: errores.length === 0,
      errores,
    };
  }

  restaurar(backup, limpiarAntes = false) {
    const validacion = this.validarBackup(backup);

    if (!validacion.valido) {
      console.error("❌ Backup inválido:", validacion.errores);
      return false;
    }

    try {
      if (limpiarAntes) {
        localStorage.clear();
        console.log("🗑️ Storage limpiado");
      }

      Object.entries(backup.data).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });

      console.log(
        `✅ Backup restaurado: ${Object.keys(backup.data).length} items`
      );
      return true;
    } catch (error) {
      console.error("❌ Error al restaurar:", error);
      return false;
    }
  }

  restaurarDesdeJSON(json, limpiarAntes = false) {
    try {
      const backup = JSON.parse(json);
      return this.restaurar(backup, limpiarAntes);
    } catch (error) {
      console.error("❌ JSON inválido:", error);
      return false;
    }
  }

  calcularChecksum(data) {
    // Simple checksum usando hash del JSON
    const str = JSON.stringify(data);
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convertir a entero 32bit
    }

    return hash.toString(36);
  }

  compararBackups(backup1, backup2) {
    const keys1 = Object.keys(backup1.data);
    const keys2 = Object.keys(backup2.data);

    const agregadas = keys2.filter((k) => !keys1.includes(k));
    const eliminadas = keys1.filter((k) => !keys2.includes(k));
    const modificadas = keys1.filter(
      (k) => keys2.includes(k) && backup1.data[k] !== backup2.data[k]
    );

    return {
      agregadas,
      eliminadas,
      modificadas,
      diferencias: agregadas.length + eliminadas.length + modificadas.length,
    };
  }

  programarBackupAutomatico(intervalo = 86400000) {
    // 24 horas
    return setInterval(() => {
      const backup = this.crearBackupCompleto();
      const json = this.exportarJSON(backup);

      // Guardar en localStorage con rotación
      const backups = this.obtenerBackupsAutomaticos();
      backups.push({ timestamp: backup.timestamp, data: json });

      // Mantener solo últimos 5 backups
      if (backups.length > 5) {
        backups.shift();
      }

      localStorage.setItem("_auto_backups", JSON.stringify(backups));
      console.log("🔄 Backup automático creado");
    }, intervalo);
  }

  obtenerBackupsAutomaticos() {
    try {
      return JSON.parse(localStorage.getItem("_auto_backups")) || [];
    } catch {
      return [];
    }
  }
}

// Uso:
const backupManager = new BackupManager();
const backup = backupManager.crearBackupCompleto();
console.log("💾 Backup info:", {
  timestamp: backup.timestamp,
  items: backup.itemCount,
  checksum: backup.checksum,
});

// backupManager.descargarBackup('mi-app-backup');
// const validacion = backupManager.validarBackup(backup);
// console.log('✅ Validación:', validacion);

console.log("✅ Ejercicio 12: Backup y Restauración - COMPLETADO");

//--------------------------------------------------------------------------------------
// ðŸŽ‰ TODOS LOS EJERCICIOS COMPLETADOS
//--------------------------------------------------------------------------------------

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ðŸŽ‰ ¡FELICIDADES! TODOS LOS EJERCICIOS COMPLETADOS ðŸŽ‰   ║
║                                                           ║
║   📚 Has aprendido:                                       ║
║   ✅ Sistema de preferencias                              ║
║   ✅ Todo list con persistencia                           ║
║   ✅ Caché con expiración                                 ║
║   ✅ Carrito de compras                                   ║
║   ✅ Historial de búsquedas                               ║
║   ✅ Sistema de sesión                                    ║
║   ✅ Auto-guardado de formularios                         ║
║   ✅ Sincronización entre pestañas                        ║
║   ✅ Gestión de cuota                                     ║
║   ✅ Sistema de notificaciones                            ║
║   ✅ Versionado de datos                                  ║
║   ✅ Backup y restauración                                ║
║                                                           ║
║   🚀 ¡Estás listo para usar localStorage y               ║
║      sessionStorage en proyectos reales!                  ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);
