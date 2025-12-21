//--------------------------------------------------------------------------------------
// 🎯 IIFE (Immediately Invoked Function Expression)
//--------------------------------------------------------------------------------------
// Función que se ejecuta inmediatamente después de ser definida

//--------------------------------------------------------------------------------------
// 1️⃣ SINTAXIS BÁSICA
//--------------------------------------------------------------------------------------

// Forma 1: Paréntesis fuera
(function () {
  console.log("IIFE ejecutada!");
})();

// Forma 2: Paréntesis dentro (preferida)
(function () {
  console.log("IIFE también ejecutada!");
})();

// Con arrow function
(() => {
  console.log("IIFE con arrow function!");
})();

//--------------------------------------------------------------------------------------
// 2️⃣ IIFE CON PARÁMETROS
//--------------------------------------------------------------------------------------

(function (nombre, edad) {
  console.log(`Hola ${nombre}, tienes ${edad} años`);
})("Carlos", 25);

// Con arrow function
((x, y) => {
  console.log(`Suma: ${x + y}`);
})(5, 3);

//--------------------------------------------------------------------------------------
// 3️⃣ IIFE QUE RETORNA VALOR
//--------------------------------------------------------------------------------------

const resultado = (function () {
  const a = 10;
  const b = 20;
  return a + b;
})();

console.log(resultado); // 30

// Ejemplo práctico
const usuario = (function () {
  const nombre = "Ana";
  const edad = 25;

  return {
    getNombre: () => nombre,
    getEdad: () => edad,
  };
})();

console.log(usuario.getNombre()); // "Ana"
// console.log(nombre); // Error: nombre no está definido

//--------------------------------------------------------------------------------------
// 4️⃣ PATRÓN MÓDULO CON IIFE
//--------------------------------------------------------------------------------------

const modulo = (function () {
  // Variables privadas
  let contador = 0;
  const secreto = "No me puedes ver";

  // Funciones privadas
  function log(mensaje) {
    console.log(`[LOG] ${mensaje}`);
  }

  // API pública
  return {
    incrementar() {
      contador++;
      log(`Contador incrementado a ${contador}`);
      return contador;
    },
    decrementar() {
      contador--;
      log(`Contador decrementado a ${contador}`);
      return contador;
    },
    obtener() {
      return contador;
    },
  };
})();

modulo.incrementar(); // 1
modulo.incrementar(); // 2
console.log(modulo.obtener()); // 2
// console.log(modulo.contador); // undefined - privado!

//--------------------------------------------------------------------------------------
// 5️⃣ EVITAR CONTAMINACIÓN DEL SCOPE GLOBAL
//--------------------------------------------------------------------------------------

// ❌ Sin IIFE: Variables globales
var temp = "global";
var resultado1 = temp.toUpperCase();
console.log(resultado1);

// ✅ Con IIFE: Variables encapsuladas
(function () {
  var temp = "local";
  var resultado2 = temp.toUpperCase();
  console.log(resultado2);
})();

// console.log(temp); // "global" - no se contaminó

//--------------------------------------------------------------------------------------
// 6️⃣ IIFE CON PARÁMETROS GLOBALES
//--------------------------------------------------------------------------------------

// Patrón común: Pasar objetos globales
(function (window, document, $, undefined) {
  // Acceso rápido a globales
  console.log("Window:", typeof window);
  console.log("Document:", typeof document);

  // $ y undefined están protegidos
})(window, document, jQuery);

//--------------------------------------------------------------------------------------
// 7️⃣ IIFE PARA INICIALIZACIÓN
//--------------------------------------------------------------------------------------

const app = (function () {
  // Inicialización
  console.log("App inicializando...");

  const config = {
    nombre: "Mi App",
    version: "1.0.0",
  };

  function init() {
    console.log(`${config.nombre} v${config.version} iniciada`);
  }

  // Auto-ejecutar init
  init();

  return {
    getConfig: () => config,
  };
})();

//--------------------------------------------------------------------------------------
// 8️⃣ IIFE EN BUCLES (Solución Clásica)
//--------------------------------------------------------------------------------------

// ❌ Problema con var
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // 4, 4, 4
  }, i * 1000);
}

// ✅ Solución con IIFE
for (var j = 1; j <= 3; j++) {
  (function (valor) {
    setTimeout(function () {
      console.log(valor); // 1, 2, 3
    }, valor * 1000);
  })(j);
}

// ✅ Solución moderna: let (block scope)
for (let k = 1; k <= 3; k++) {
  setTimeout(function () {
    console.log(k); // 1, 2, 3
  }, k * 1000);
}

//--------------------------------------------------------------------------------------
// 9️⃣ IIFE NOMBRADA (Para Recursión)
//--------------------------------------------------------------------------------------

(function factorial(n) {
  if (n <= 1) {
    console.log("Resultado:", 1);
    return 1;
  }
  const resultado = n * factorial(n - 1);
  if (n === 5) console.log("Resultado:", resultado);
  return resultado;
})(5); // 120

//--------------------------------------------------------------------------------------
// 🔟 VARIACIONES DE SINTAXIS
//--------------------------------------------------------------------------------------

// Operador NOT
!(function () {
  console.log("Con operador NOT");
})();

// Operador VOID
void (function () {
  console.log("Con operador VOID");
})();

// Operador +
+(function () {
  console.log("Con operador +");
})();

// Operador -
-(function () {
  console.log("Con operador -");
})();

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ CASOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// Caso 1: Configuración única
const database = (function () {
  const conexion = {
    host: "localhost",
    puerto: 3306,
    usuario: "admin",
  };

  let conectado = false;

  return {
    conectar() {
      if (!conectado) {
        console.log(`Conectando a ${conexion.host}:${conexion.puerto}`);
        conectado = true;
      }
      return conectado;
    },
    desconectar() {
      if (conectado) {
        console.log("Desconectando...");
        conectado = false;
      }
    },
    estaConectado() {
      return conectado;
    },
  };
})();

database.conectar();
console.log(database.estaConectado()); // true

// Caso 2: Namespace para evitar colisiones
const MiApp = (function () {
  const version = "1.0.0";

  return {
    Utils: {
      formatearFecha(fecha) {
        return fecha.toLocaleDateString();
      },
    },
    Api: {
      obtener(url) {
        console.log(`GET ${url}`);
      },
    },
    version: version,
  };
})();

console.log(MiApp.version);
MiApp.Utils.formatearFecha(new Date());

// Caso 3: Inicialización condicional
(function () {
  if (typeof localStorage !== "undefined") {
    console.log("LocalStorage disponible");
  } else {
    console.log("LocalStorage NO disponible");
  }
})();

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ IIFE VS BLOQUES CON LET/CONST
//--------------------------------------------------------------------------------------

// Antes (IIFE)
(function () {
  var temp = "valor temporal";
  console.log(temp);
})();

// Ahora (Bloque con let/const)
{
  let temp = "valor temporal";
  console.log(temp);
}

// console.log(temp); // Error en ambos casos

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ CUÁNDO USAR IIFE HOY EN DÍA
//--------------------------------------------------------------------------------------

/*
✅ USA IIFE CUANDO:

1. Necesites encapsular código inmediatamente
2. Evitar variables globales en código legacy
3. Crear módulos antes de ES6 modules
4. Inicializar código una sola vez
5. Proteger código de ser modificado

⚠️ CONSIDERA ALTERNATIVAS MODERNAS:

1. ES6 Modules (import/export)
2. Bloques con let/const
3. Clases para encapsulación
4. Funciones asíncronas

❌ NO USES IIFE PARA:

1. Todo (son menos comunes ahora)
2. Cuando modules sean mejor opción
3. Solo por usar una técnica "avanzada"
*/

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                    IIFE - RESUMEN                         ║
╠═══════════════════════════════════════════════════════════╣
║ • Función que se ejecuta inmediatamente                   ║
║ • Crea scope privado                                      ║
║ • Evita contaminación global                              ║
║ • Patrón módulo clásico                                   ║
║ • Menos común con ES6+ (modules, let/const)               ║
╚═══════════════════════════════════════════════════════════╝
`);
