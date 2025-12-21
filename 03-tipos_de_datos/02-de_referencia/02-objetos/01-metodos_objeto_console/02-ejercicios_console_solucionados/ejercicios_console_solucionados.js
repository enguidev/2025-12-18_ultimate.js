//--------------------------------------------------------------------------------------
// EJERCICIOS PRÁCTICOS - MÉTODOS DEL OBJETO CONSOLE
//--------------------------------------------------------------------------------------

/*
🎯 Estos ejercicios te ayudarán a dominar los métodos del objeto console
   y aplicarlos en situaciones reales de desarrollo.
*/

//--------------------------------------------------------------------------------------
// EJERCICIO 1: Mostrar información de productos en tabla agrupada por categoría
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función que reciba un array de productos y muestre:
  1. Un grupo por cada categoría
  2. Dentro de cada grupo, una tabla con los productos de esa categoría
  3. El total de productos por categoría
*/

const productos = [
  { nombre: "Laptop", precio: 1200, categoria: "Electrónica" },
  { nombre: "Mouse", precio: 25, categoria: "Electrónica" },
  { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
  { nombre: "Pantalón", precio: 40, categoria: "Ropa" },
  { nombre: "Teclado", precio: 80, categoria: "Electrónica" },
  { nombre: "Zapatos", precio: 60, categoria: "Ropa" },
  { nombre: "Monitor", precio: 300, categoria: "Electrónica" },
];

// ✅ SOLUCIÓN:
function mostrarProductosPorCategoria(productos) {
  // Agrupamos productos por categoría
  const porCategoria = productos.reduce((grupos, producto) => {
    const cat = producto.categoria;
    if (!grupos[cat]) {
      grupos[cat] = [];
    }
    grupos[cat].push(producto);
    return grupos;
  }, {});

  // Mostramos cada categoría en un grupo con su tabla
  console.group("📦 PRODUCTOS POR CATEGORÍA");

  for (const [categoria, items] of Object.entries(porCategoria)) {
    console.group(`📁 ${categoria} (${items.length} productos)`);
    console.table(items, ["nombre", "precio"]);

    const total = items.reduce((sum, p) => sum + p.precio, 0);
    console.log(`💰 Precio total: $${total}`);

    console.groupEnd();
  }

  console.groupEnd();
}

// Ejecutar:
mostrarProductosPorCategoria(productos);

//--------------------------------------------------------------------------------------
// EJERCICIO 2: Sistema de logging con niveles
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Implementa un objeto Logger que:
  1. Tenga diferentes niveles: DEBUG, INFO, WARN, ERROR
  2. Solo muestre mensajes según el nivel configurado
  3. Use los métodos apropiados de console para cada nivel
  4. Incluya timestamp en cada mensaje

Ejemplo:
  Logger.setLevel('WARN');
  Logger.debug('Esto no se muestra'); // No aparece
  Logger.warn('Esto sí se muestra'); // Aparece
*/

// ✅ SOLUCIÓN:
const Logger = {
  levels: {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
  },

  currentLevel: 0, // Por defecto muestra todo

  setLevel(level) {
    if (this.levels[level] !== undefined) {
      this.currentLevel = this.levels[level];
      console.log(`🔧 Nivel de logging establecido en: ${level}`);
    } else {
      console.error(`❌ Nivel inválido: ${level}`);
    }
  },

  _log(level, method, emoji, ...args) {
    if (this.levels[level] >= this.currentLevel) {
      const timestamp = new Date().toLocaleTimeString();
      console[method](`${emoji} [${timestamp}] [${level}]`, ...args);
    }
  },

  debug(...args) {
    this._log("DEBUG", "debug", "🐛", ...args);
  },

  info(...args) {
    this._log("INFO", "info", "ℹ️", ...args);
  },

  warn(...args) {
    this._log("WARN", "warn", "⚠️", ...args);
  },

  error(...args) {
    this._log("ERROR", "error", "❌", ...args);
  },
};

// Probar:
console.log("\n--- PRUEBA DE LOGGER ---");
Logger.setLevel("DEBUG"); // Muestra todo
Logger.debug("Iniciando aplicación");
Logger.info("Cargando configuración");
Logger.warn("Memoria al 80%");
Logger.error("No se pudo conectar a la BD");

console.log("\n--- SOLO WARN Y ERROR ---");
Logger.setLevel("WARN"); // Solo WARN y ERROR
Logger.debug("Esto no se ve"); // No aparece
Logger.info("Esto tampoco"); // No aparece
Logger.warn("Esto sí se ve");
Logger.error("Esto también");

//--------------------------------------------------------------------------------------
// EJERCICIO 3: Medidor de tiempo de ejecución de funciones
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función `medirTiempo()` que:
  1. Reciba una función y sus argumentos
  2. Ejecute la función
  3. Mida cuánto tarda
  4. Muestre el resultado formateado con colores
  5. Devuelva el resultado de la función original
*/

// ✅ SOLUCIÓN:
function medirTiempo(fn, nombreFuncion, ...args) {
  const etiqueta = `⏱️ ${nombreFuncion}`;

  console.group(`🔍 Ejecutando: ${nombreFuncion}`);
  console.log("Argumentos:", args);

  console.time(etiqueta);
  const resultado = fn(...args);
  console.timeEnd(etiqueta);

  console.log("Resultado:", resultado);
  console.groupEnd();

  return resultado;
}

// Funciones de ejemplo para probar:
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function ordenarArray(arr) {
  return [...arr].sort((a, b) => a - b);
}

// Probar:
console.log("\n--- MEDICIÓN DE TIEMPOS ---");
medirTiempo(factorial, "factorial", 10);
medirTiempo(fibonacci, "fibonacci", 20);
medirTiempo(ordenarArray, "ordenarArray", [5, 2, 8, 1, 9]);

//--------------------------------------------------------------------------------------
// EJERCICIO 4: Contador de renderizados (simulado)
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Simula un componente que se renderiza varias veces y:
  1. Cuenta cada renderizado con console.count()
  2. Muestra información del estado actual con console.table()
  3. Agrupa la información por ciclo de vida
  4. Alerta si hay demasiados renderizados
*/

// ✅ SOLUCIÓN:
class ComponenteSimulado {
  constructor(nombre) {
    this.nombre = nombre;
    this.estado = { contador: 0, activo: true };
    this.LIMITE_RENDERIZADOS = 5;
  }

  render() {
    console.count(`🔄 ${this.nombre} - Renderizado`);

    const contadorActual = this._getContador();

    console.group(`📊 Estado de ${this.nombre}`);
    console.table([this.estado]);
    console.groupEnd();

    // Verificar si hay demasiados renderizados
    console.assert(
      contadorActual <= this.LIMITE_RENDERIZADOS,
      `⚠️ ${this.nombre} se ha renderizado ${contadorActual} veces. ` +
        `Límite: ${this.LIMITE_RENDERIZADOS}. ¡Posible problema de rendimiento!`
    );
  }

  _getContador() {
    // Simulamos obtener el contador (en realidad console.count lo maneja internamente)
    return this.estado.contador++;
  }

  actualizarEstado(nuevoEstado) {
    console.group(`🔧 Actualizando ${this.nombre}`);
    console.log("Estado anterior:", { ...this.estado });
    this.estado = { ...this.estado, ...nuevoEstado };
    console.log("Estado nuevo:", { ...this.estado });
    console.groupEnd();

    this.render();
  }

  resetearContador() {
    console.countReset(`🔄 ${this.nombre} - Renderizado`);
    console.log(`♻️ Contador de ${this.nombre} reseteado`);
  }
}

// Probar:
console.log("\n--- SIMULACIÓN DE RENDERIZADOS ---");
const miComponente = new ComponenteSimulado("MiComponente");

miComponente.render(); // 1
miComponente.actualizarEstado({ contador: 1 }); // 2
miComponente.actualizarEstado({ contador: 2 }); // 3
miComponente.actualizarEstado({ activo: false }); // 4
miComponente.render(); // 5
miComponente.render(); // 6 - Debería mostrar warning

console.log("\n--- RESETEAR CONTADOR ---");
miComponente.resetearContador();
miComponente.render(); // Vuelve a 1

//--------------------------------------------------------------------------------------
// EJERCICIO 5: Debugger visual del estado de la aplicación
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función que muestre un snapshot completo del estado de una aplicación:
  1. Información general (usuario, configuración)
  2. Estado de las diferentes secciones
  3. Historial de acciones recientes
  4. Todo organizado con grupos y tablas
*/

// ✅ SOLUCIÓN:
function debugEstadoAplicacion(estado) {
  console.clear(); // Limpia la consola para mejor visualización

  console.log(
    "%c🔍 DEBUG - ESTADO DE LA APLICACIÓN",
    "color: white; background-color: #2196F3; font-size: 18px; padding: 10px; font-weight: bold;"
  );

  console.group("👤 USUARIO");
  console.table([estado.usuario]);
  console.groupEnd();

  console.group("⚙️ CONFIGURACIÓN");
  console.table([estado.configuracion]);
  console.groupEnd();

  console.group("📊 DATOS");
  if (estado.datos.productos && estado.datos.productos.length > 0) {
    console.log(`Total productos: ${estado.datos.productos.length}`);
    console.table(estado.datos.productos);
  } else {
    console.warn("No hay productos cargados");
  }

  if (estado.datos.carrito && estado.datos.carrito.length > 0) {
    console.log(`Productos en carrito: ${estado.datos.carrito.length}`);
    console.table(estado.datos.carrito);
  } else {
    console.info("Carrito vacío");
  }
  console.groupEnd();

  console.group("📜 HISTORIAL DE ACCIONES");
  estado.historial.forEach((accion, index) => {
    const emoji =
      accion.tipo === "error" ? "❌" : accion.tipo === "success" ? "✅" : "ℹ️";
    console.log(`${emoji} [${accion.timestamp}] ${accion.mensaje}`);
  });
  console.groupEnd();

  console.group("🔧 METADATOS");
  console.log("Versión:", estado.version);
  console.log("Última actualización:", estado.ultimaActualizacion);
  console.log("Tiempo de sesión:", estado.tiempoSesion);
  console.groupEnd();

  // Stack trace para ver desde dónde se llamó
  console.trace("📍 Llamado desde:");
}

// Estado de ejemplo
const estadoApp = {
  usuario: {
    id: 1,
    nombre: "Carlos García",
    email: "carlos@example.com",
    rol: "admin",
  },
  configuracion: {
    tema: "oscuro",
    idioma: "es",
    notificaciones: true,
  },
  datos: {
    productos: [
      { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
      { id: 2, nombre: "Mouse", precio: 25, stock: 50 },
    ],
    carrito: [{ id: 1, nombre: "Laptop", cantidad: 1, subtotal: 1200 }],
  },
  historial: [
    { timestamp: "10:23:15", tipo: "info", mensaje: "Usuario inició sesión" },
    {
      timestamp: "10:24:30",
      tipo: "success",
      mensaje: "Producto añadido al carrito",
    },
    { timestamp: "10:25:10", tipo: "error", mensaje: "Error al procesar pago" },
  ],
  version: "1.2.3",
  ultimaActualizacion: new Date().toLocaleString(),
  tiempoSesion: "15:32",
};

// Probar:
console.log("\n--- DEBUG DEL ESTADO ---");
debugEstadoAplicacion(estadoApp);

//--------------------------------------------------------------------------------------
// EJERCICIO BONUS: Comparador de rendimiento
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función que compare el rendimiento de diferentes implementaciones
de una misma funcionalidad y muestre los resultados en una tabla.
*/

// ✅ SOLUCIÓN:
function compararRendimiento(funciones, input, iteraciones = 1000) {
  console.group(`🏁 Comparación de Rendimiento (${iteraciones} iteraciones)`);

  const resultados = funciones.map(({ nombre, fn }) => {
    const inicio = performance.now();

    for (let i = 0; i < iteraciones; i++) {
      fn(input);
    }

    const fin = performance.now();
    const tiempo = fin - inicio;

    return {
      nombre,
      tiempo: tiempo.toFixed(3) + " ms",
      promedio: (tiempo / iteraciones).toFixed(6) + " ms",
    };
  });

  // Ordenar por tiempo (más rápido primero)
  resultados.sort((a, b) => parseFloat(a.tiempo) - parseFloat(b.tiempo));

  console.table(resultados);

  const ganador = resultados[0];
  console.log(
    `%c🏆 Ganador: ${ganador.nombre}`,
    "color: gold; font-size: 16px; font-weight: bold;"
  );

  console.groupEnd();
}

// Funciones para comparar:
const funcionesComparar = [
  {
    nombre: "for tradicional",
    fn: (arr) => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    },
  },
  {
    nombre: "forEach",
    fn: (arr) => {
      let sum = 0;
      arr.forEach((n) => (sum += n));
      return sum;
    },
  },
  {
    nombre: "reduce",
    fn: (arr) => arr.reduce((sum, n) => sum + n, 0),
  },
  {
    nombre: "for...of",
    fn: (arr) => {
      let sum = 0;
      for (const n of arr) {
        sum += n;
      }
      return sum;
    },
  },
];

// Probar:
console.log("\n--- COMPARACIÓN DE RENDIMIENTO ---");
const arrayGrande = Array.from({ length: 1000 }, (_, i) => i + 1);
compararRendimiento(funcionesComparar, arrayGrande, 1000);

//--------------------------------------------------------------------------------------
// 🎯 RESUMEN DE CONCEPTOS PRACTICADOS
//--------------------------------------------------------------------------------------
/*
✅ Ejercicio 1: console.table(), console.group(), reduce()
✅ Ejercicio 2: Niveles de logging, console.debug/info/warn/error
✅ Ejercicio 3: console.time/timeEnd, medición de rendimiento
✅ Ejercicio 4: console.count(), console.assert(), simulación de ciclo de vida
✅ Ejercicio 5: console.clear(), console.trace(), debugging completo
✅ Bonus: performance.now(), comparación de algoritmos

💡 Estos ejercicios cubren casos reales que encontrarás en desarrollo web:
  - Debugging de APIs
  - Monitoreo de rendimiento
  - Validación de estados
  - Optimización de código
*/
