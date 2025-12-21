//--------------------------------------------------------------------------------------
// 🎯 CLOSURES (CLAUSURAS)
//--------------------------------------------------------------------------------------
// Un closure es una función que "recuerda" y puede acceder a las variables
// de su scope léxico, incluso después de que la función externa haya terminado

//--------------------------------------------------------------------------------------
// 1️⃣ QUÉ ES UN CLOSURE
//--------------------------------------------------------------------------------------

function externa() {
  const mensaje = "Hola desde closure";

  function interna() {
    console.log(mensaje); // Accede a 'mensaje' aunque externa() ya terminó
  }

  return interna;
}

const miClosure = externa(); // externa() terminó de ejecutarse
miClosure(); // "Hola desde closure" - ¡pero aún recuerda 'mensaje'!

//--------------------------------------------------------------------------------------
// 2️⃣ CONTADOR PRIVADO (Caso Clásico)
//--------------------------------------------------------------------------------------

function crearContador() {
  let contador = 0; // Variable "privada"

  return {
    incrementar() {
      return ++contador;
    },
    decrementar() {
      return --contador;
    },
    obtener() {
      return contador;
    },
  };
}

const contador1 = crearContador();
console.log(contador1.incrementar()); // 1
console.log(contador1.incrementar()); // 2
console.log(contador1.obtener()); // 2

const contador2 = crearContador(); // Contador independiente
console.log(contador2.incrementar()); // 1
console.log(contador1.obtener()); // 2 (no afecta al primero)

// console.log(contador); // ❌ No podemos acceder directamente

//--------------------------------------------------------------------------------------
// 3️⃣ FACTORY FUNCTIONS (Funciones Fábrica)
//--------------------------------------------------------------------------------------

function crearPersona(nombre, edad) {
  // Variables privadas
  let _nombre = nombre;
  let _edad = edad;

  // Métodos públicos (con acceso a las privadas)
  return {
    saludar() {
      return `Hola, soy ${_nombre}`;
    },
    cumplirAnios() {
      _edad++;
      return `Ahora tengo ${_edad} años`;
    },
    getNombre() {
      return _nombre;
    },
    getEdad() {
      return _edad;
    },
  };
}

const persona1 = crearPersona("Ana", 25);
console.log(persona1.saludar()); // "Hola, soy Ana"
console.log(persona1.cumplirAnios()); // "Ahora tengo 26 años"
// console.log(persona1._edad); // undefined - ¡no podemos acceder!

//--------------------------------------------------------------------------------------
// 4️⃣ MÓDULO PATTERN (Patrón Módulo)
//--------------------------------------------------------------------------------------

const calculadora = (function () {
  // Variables privadas
  let resultado = 0;

  // Funciones privadas
  function registrar(operacion, valor) {
    console.log(`${operacion}: ${valor}`);
  }

  // API pública
  return {
    sumar(n) {
      resultado += n;
      registrar("Suma", n);
      return this;
    },
    restar(n) {
      resultado -= n;
      registrar("Resta", n);
      return this;
    },
    multiplicar(n) {
      resultado *= n;
      registrar("Multiplicación", n);
      return this;
    },
    obtener() {
      return resultado;
    },
    reset() {
      resultado = 0;
      return this;
    },
  };
})();

calculadora.sumar(10).multiplicar(2).restar(5);
console.log(calculadora.obtener()); // 15

//--------------------------------------------------------------------------------------
// 5️⃣ FUNCIONES QUE RETORNAN FUNCIONES
//--------------------------------------------------------------------------------------

// Crear funciones especializadas
function crearMultiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

const doble = crearMultiplicador(2);
const triple = crearMultiplicador(3);

console.log(doble(5)); // 10
console.log(triple(5)); // 15

// Crear saludadores personalizados
function crearSaludador(saludo) {
  return function (nombre) {
    return `${saludo}, ${nombre}!`;
  };
}

const saludoFormal = crearSaludador("Buenos días");
const saludoInformal = crearSaludador("Qué tal");

console.log(saludoFormal("Sr. García")); // "Buenos días, Sr. García!"
console.log(saludoInformal("Carlos")); // "Qué tal, Carlos!"

//--------------------------------------------------------------------------------------
// 6️⃣ CLOSURES EN BUCLES (Problema Clásico)
//--------------------------------------------------------------------------------------

// ❌ PROBLEMA: Todas las funciones comparten la misma variable
console.log("=== Con var (problema) ===");
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // Imprime: 4, 4, 4
  }, i * 100);
}

// ✅ SOLUCIÓN 1: Usar let (block scope)
console.log("=== Con let (solución) ===");
for (let j = 1; j <= 3; j++) {
  setTimeout(function () {
    console.log(j); // Imprime: 1, 2, 3
  }, j * 100 + 500);
}

// ✅ SOLUCIÓN 2: IIFE para crear closure
console.log("=== Con IIFE (solución) ===");
for (var k = 1; k <= 3; k++) {
  (function (valor) {
    setTimeout(function () {
      console.log(valor); // Imprime: 1, 2, 3
    }, valor * 100 + 1000);
  })(k);
}

//--------------------------------------------------------------------------------------
// 7️⃣ MEMOIZATION (Optimización con Closures)
//--------------------------------------------------------------------------------------

function memoize(fn) {
  const cache = {}; // Cache privado gracias al closure

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log("Desde cache:", key);
      return cache[key];
    }

    console.log("Calculando:", key);
    const resultado = fn(...args);
    cache[key] = resultado;
    return resultado;
  };
}

// Función costosa de calcular
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibMemo = memoize(fibonacci);

console.log(fibMemo(10)); // Calculando: [10]
console.log(fibMemo(10)); // Desde cache: [10]
console.log(fibMemo(15)); // Calculando: [15]

//--------------------------------------------------------------------------------------
// 8️⃣ DEBOUNCE Y THROTTLE
//--------------------------------------------------------------------------------------

// Debounce: Ejecuta después de que pare la actividad
function debounce(func, delay) {
  let timeoutId; // Recordado por el closure

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Ejemplo de uso
const buscar = debounce((termino) => {
  console.log("Buscando:", termino);
}, 500);

// Solo ejecuta después de 500ms sin llamadas
buscar("H");
buscar("Ho");
buscar("Hol"); // Solo esta se ejecutará

// Throttle: Limita frecuencia de ejecución
function throttle(func, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const logScroll = throttle(() => {
  console.log("Scroll event!");
}, 1000);

// Solo ejecuta máximo una vez por segundo

//--------------------------------------------------------------------------------------
// 9️⃣ FUNCIONES CURRYING
//--------------------------------------------------------------------------------------

// Transformar función de múltiples argumentos en funciones de un argumento

function suma(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(suma(1)(2)(3)); // 6

// Versión con arrow functions (más concisa)
const sumaFlecha = (a) => (b) => (c) => a + b + c;
console.log(sumaFlecha(1)(2)(3)); // 6

// Uso práctico: Crear funciones especializadas
const sumar5 = suma(5);
const sumar5y10 = sumar5(10);
console.log(sumar5y10(3)); // 18

//--------------------------------------------------------------------------------------
// 🔟 PARTIAL APPLICATION
//--------------------------------------------------------------------------------------

function multiplicar(a, b, c) {
  return a * b * c;
}

function partial(fn, ...argsIniciales) {
  return function (...argsFaltantes) {
    return fn(...argsIniciales, ...argsFaltantes);
  };
}

const multiplicarPor2 = partial(multiplicar, 2);
console.log(multiplicarPor2(3, 4)); // 24 (2 * 3 * 4)

const multiplicarPor2y3 = partial(multiplicar, 2, 3);
console.log(multiplicarPor2y3(4)); // 24 (2 * 3 * 4)

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ CASOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// Caso 1: Sistema de configuración
function crearApp(config) {
  const configuracion = { ...config };

  return {
    getConfig(key) {
      return configuracion[key];
    },
    setConfig(key, value) {
      configuracion[key] = value;
    },
    resetConfig() {
      Object.keys(configuracion).forEach((key) => {
        delete configuracion[key];
      });
    },
  };
}

const app = crearApp({ tema: "oscuro", idioma: "es" });
console.log(app.getConfig("tema")); // "oscuro"
app.setConfig("tema", "claro");
console.log(app.getConfig("tema")); // "claro"

// Caso 2: Event emitter privado
function crearEventEmitter() {
  const eventos = {}; // Map privado

  return {
    on(evento, callback) {
      if (!eventos[evento]) {
        eventos[evento] = [];
      }
      eventos[evento].push(callback);
    },

    emit(evento, datos) {
      if (eventos[evento]) {
        eventos[evento].forEach((cb) => cb(datos));
      }
    },

    off(evento, callback) {
      if (eventos[evento]) {
        eventos[evento] = eventos[evento].filter((cb) => cb !== callback);
      }
    },
  };
}

const emitter = crearEventEmitter();
emitter.on("mensaje", (msg) => console.log("Recibido:", msg));
emitter.emit("mensaje", "Hola!"); // "Recibido: Hola!"

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ VENTAJAS Y DESVENTAJAS
//--------------------------------------------------------------------------------------

/*
✅ VENTAJAS:

1. Encapsulación - Variables privadas
2. Persistencia de datos - Mantiene estado
3. Factory functions - Crear objetos sin 'new'
4. Módulos privados - API pública/privada
5. Callbacks con estado - Funciones que recuerdan contexto

⚠️ DESVENTAJAS:

1. Consumo de memoria - Cada closure mantiene su scope
2. Pueden causar memory leaks si no se limpian
3. Depuración más compleja
4. Performance en casos extremos
*/

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:

1. Usa closures para encapsulación
2. Crea factory functions para objetos similares
3. Usa module pattern para organizar código
4. Aprovecha para callbacks con estado
5. Implementa memoization en funciones costosas

❌ EVITAR:

1. Closures innecesarios (overhead de memoria)
2. Modificar variables externas desde closures
3. Closures en bucles sin necesidad (usa let)
4. Crear closures dentro de loops de alto rendimiento
5. Memory leaks (limpiar referencias cuando no se usen)
*/

//--------------------------------------------------------------------------------------
// 1️⃣4️⃣ ⚠️ MEMORY LEAKS CON CLOSURES
//--------------------------------------------------------------------------------------
// Los closures pueden causar memory leaks si no se manejan correctamente

// ❌ PROBLEMA 1: Event listeners que no se limpian
function crearBotonConLeak() {
  const datosGrandes = new Array(1000000).fill("💾"); // 1MB de datos

  document.getElementById("btn").addEventListener("click", function () {
    console.log(datosGrandes[0]); // Mantiene referencia a datosGrandes
  });

  // ¡Los datos NUNCA se liberan aunque el botón se elimine del DOM!
}

// ✅ SOLUCIÓN 1: Guardar referencia y limpiar listener
function crearBotonSinLeak() {
  const datosGrandes = new Array(1000000).fill("💾");

  const handler = function () {
    console.log(datosGrandes[0]);
  };

  const btn = document.getElementById("btn");
  btn.addEventListener("click", handler);

  // Retornar función de limpieza
  return function limpiar() {
    btn.removeEventListener("click", handler);
    console.log("✅ Listener limpiado, memoria liberada");
  };
}

const limpiar = crearBotonSinLeak();
// Cuando ya no necesites el botón:
// limpiar();

// ✅ SOLUCIÓN 2: No capturar datos innecesarios
function crearBotonOptimo() {
  const datosGrandes = new Array(1000000).fill("💾");
  const primerDato = datosGrandes[0]; // Copiar solo lo necesario

  // Ahora el closure solo mantiene 'primerDato', no todo el array
  document.getElementById("btn").addEventListener("click", function () {
    console.log(primerDato);
  });
}

// ❌ PROBLEMA 2: Timers sin limpiar
function iniciarReloj() {
  const datos = { inicio: new Date() };

  setInterval(() => {
    console.log("Tiempo:", Date.now() - datos.inicio);
  }, 1000);

  // El interval nunca se detiene, datos nunca se libera
}

// ✅ SOLUCIÓN: Retornar función para detener
function iniciarRelojSeguro() {
  const datos = { inicio: new Date() };

  const intervalId = setInterval(() => {
    console.log("Tiempo:", Date.now() - datos.inicio);
  }, 1000);

  return function detener() {
    clearInterval(intervalId);
    console.log("✅ Reloj detenido");
  };
}

const detener = iniciarRelojSeguro();
// Cuando termines: detener();

// ❌ PROBLEMA 3: Closures en bucles (clásico)
function crearBotonesConLeak() {
  const botones = [];

  for (var i = 0; i < 5; i++) {
    const btn = document.createElement("button");
    btn.textContent = `Botón ${i}`;

    // ¡Todos los botones comparten la misma variable 'i'!
    btn.onclick = function () {
      console.log("Clickeaste el botón", i); // Siempre muestra 5
    };

    botones.push(btn);
  }

  return botones;
}

// ✅ SOLUCIÓN 1: Usar let (block scope)
function crearBotonesBien() {
  const botones = [];

  for (let i = 0; i < 5; i++) {
    // let en vez de var
    const btn = document.createElement("button");
    btn.textContent = `Botón ${i}`;

    btn.onclick = function () {
      console.log("Clickeaste el botón", i); // Funciona correctamente
    };

    botones.push(btn);
  }

  return botones;
}

// ✅ SOLUCIÓN 2: IIFE para crear scope
function crearBotonesIIFE() {
  const botones = [];

  for (var i = 0; i < 5; i++) {
    (function (valor) {
      const btn = document.createElement("button");
      btn.textContent = `Botón ${valor}`;

      btn.onclick = function () {
        console.log("Clickeaste el botón", valor);
      };

      botones.push(btn);
    })(i);
  }

  return botones;
}

// ❌ PROBLEMA 4: Closures circulares
function crearObjetosCirculares() {
  const objeto1 = {};
  const objeto2 = {};

  objeto1.referencia = objeto2;
  objeto2.referencia = objeto1; // Referencia circular

  // Si estos objetos capturan closures grandes, nunca se liberarán
  objeto1.metodo = function () {
    const datosGrandes = new Array(1000000);
    return objeto2.referencia; // Mantiene vivo todo
  };
}

// ✅ SOLUCIÓN: Romper referencias cuando termines
function crearObjetosSeguros() {
  const objeto1 = {};
  const objeto2 = {};

  objeto1.referencia = objeto2;
  objeto2.referencia = objeto1;

  return function limpiar() {
    objeto1.referencia = null;
    objeto2.referencia = null;
    console.log("✅ Referencias circulares rotas");
  };
}

//--------------------------------------------------------------------------------------
// 🔍 DETECTAR MEMORY LEAKS
//--------------------------------------------------------------------------------------

// Herramientas:
// 1. Chrome DevTools > Memory > Heap Snapshot
// 2. Chrome DevTools > Performance > Memory
// 3. Node.js: --inspect + Chrome DevTools

// Patrón para debugging:
function debugMemoria() {
  if (typeof performance !== "undefined" && performance.memory) {
    console.log("Memoria usada:", {
      usedJSHeapSize:
        (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + " MB",
      totalJSHeapSize:
        (performance.memory.totalJSHeapSize / 1048576).toFixed(2) + " MB",
    });
  }
}

//--------------------------------------------------------------------------------------
// ✅ PATRONES SEGUROS
//--------------------------------------------------------------------------------------

// Patrón 1: Módulo con limpieza
function crearModuloSeguro() {
  const datosPrivados = [];
  const timers = [];
  const listeners = [];

  return {
    agregar(dato) {
      datosPrivados.push(dato);
    },

    iniciarTimer(callback, intervalo) {
      const id = setInterval(callback, intervalo);
      timers.push(id);
    },

    destruir() {
      // Limpiar todo
      datosPrivados.length = 0;
      timers.forEach((id) => clearInterval(id));
      listeners.forEach(({ elemento, evento, handler }) => {
        elemento.removeEventListener(evento, handler);
      });

      console.log("✅ Módulo destruido, memoria liberada");
    },
  };
}

// Patrón 2: WeakMap para datos asociados (no previene GC)
const datosPrivados = new WeakMap();

function crearObjetoConWeakMap(id) {
  const obj = { id };

  // Los datos se liberan automáticamente si obj se destruye
  datosPrivados.set(obj, {
    datos: new Array(1000000),
    timestamp: Date.now(),
  });

  return obj;
}

console.log(`
╔═══════════════════════════════════════════════════════════╗
║            MEMORY LEAKS - PUNTOS CLAVE                    ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║ ⚠️ CAUSAS COMUNES:                                        ║
║   • Event listeners sin limpiar                           ║
║   • setInterval sin clearInterval                         ║
║   • Closures que capturan datos grandes                   ║
║   • Referencias circulares                                ║
║                                                           ║
║ ✅ SOLUCIONES:                                            ║
║   • Retornar funciones de limpieza                        ║
║   • Usar WeakMap cuando sea apropiado                     ║
║   • Copiar solo datos necesarios                          ║
║   • Romper referencias circulares                         ║
║                                                           ║
║ 🔍 HERRAMIENTAS:                                          ║
║   • Chrome DevTools > Memory                              ║
║   • Heap Snapshots para comparar                          ║
║   • Performance.memory API                                ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                    CLOSURES - RESUMEN                     ║
╠═══════════════════════════════════════════════════════════╣
║ • Función que recuerda su scope léxico                    ║
║ • Permite crear variables privadas                        ║
║ • Base de patrones como Factory y Module                  ║
║ • Útil para callbacks con estado                          ║
║ • Permite currying y partial application                  ║
╚═══════════════════════════════════════════════════════════╝
`);
