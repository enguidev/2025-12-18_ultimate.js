// ============================================
// 03-DECORADORES.JS
// Decoradores en JavaScript (Stage 3 Proposal)
// ============================================

console.log("=== 3. DECORADORES ===\n");

// ============================================
// 1️⃣ ¿QUÉ SON LOS DECORADORES?
// ============================================

console.log("--- Introducción a Decoradores ---");

console.log(`
⚠️ IMPORTANTE:
Los decoradores son una propuesta (Stage 3) que aún NO está
en JavaScript estándar. Se necesita:
- Babel con plugin de decoradores
- TypeScript con experimentalDecorators
- O usar funciones decoradoras manualmente

💡 ¿QUÉ ES UN DECORADOR?
Un decorador es una función que modifica o extiende el
comportamiento de clases, métodos o propiedades.

Sintaxis propuesta:
@decorador
class MiClase { }

Por ahora, usaremos FUNCIONES DECORADORAS que funcionan HOY.
`);

// ============================================
// 2️⃣ DECORADORES MANUALES (FUNCIONA HOY)
// ============================================

console.log("\n--- Decoradores Manuales ---");

// Decorador de clase simple
function logger(clase) {
  return class extends clase {
    constructor(...args) {
      console.log(`📝 Creando instancia de ${clase.name}`);
      super(...args);
    }
  };
}

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Aplicar decorador manualmente
const UsuarioConLog = logger(Usuario);
const user1 = new UsuarioConLog("Ana");

// ============================================
// 3️⃣ DECORADOR DE MÉTODOS
// ============================================

console.log("\n--- Decorador de Métodos ---");

// Decorador que mide tiempo de ejecución
function medirTiempo(target, propertyName, descriptor) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args) {
    const inicio = performance.now();
    const resultado = metodoOriginal.apply(this, args);
    const fin = performance.now();

    console.log(`⏱️  ${propertyName} tardó ${(fin - inicio).toFixed(2)}ms`);
    return resultado;
  };

  return descriptor;
}

class Calculadora {
  constructor() {
    this.resultado = 0;
  }

  // Aplicar decorador manualmente
  calcularFactorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

// Decorar el método
const descriptor = Object.getOwnPropertyDescriptor(
  Calculadora.prototype,
  "calcularFactorial"
);
medirTiempo(Calculadora, "calcularFactorial", descriptor);
Object.defineProperty(Calculadora.prototype, "calcularFactorial", descriptor);

const calc = new Calculadora();
console.log("Factorial de 20:", calc.calcularFactorial(20));

// ============================================
// 4️⃣ DECORADOR DE LOGGING
// ============================================

console.log("\n--- Decorador de Logging ---");

function log(prefix = "LOG") {
  return function (target, propertyName, descriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args) {
      console.log(`[${prefix}] Llamando a ${propertyName} con:`, args);
      const resultado = metodoOriginal.apply(this, args);
      console.log(`[${prefix}] ${propertyName} retornó:`, resultado);
      return resultado;
    };

    return descriptor;
  };
}

class CuentaBancaria {
  constructor(saldo) {
    this._saldo = saldo;
  }

  depositar(cantidad) {
    this._saldo += cantidad;
    return this._saldo;
  }

  retirar(cantidad) {
    this._saldo -= cantidad;
    return this._saldo;
  }
}

// Aplicar decoradores
const depositarDescriptor = Object.getOwnPropertyDescriptor(
  CuentaBancaria.prototype,
  "depositar"
);
log("BANCO")(CuentaBancaria, "depositar", depositarDescriptor);
Object.defineProperty(
  CuentaBancaria.prototype,
  "depositar",
  depositarDescriptor
);

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);

// ============================================
// 5️⃣ DECORADOR DE VALIDACIÓN
// ============================================

console.log("\n--- Decorador de Validación ---");

function validar(validaciones) {
  return function (target, propertyName, descriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args) {
      // Validar argumentos
      args.forEach((arg, index) => {
        const validacion = validaciones[index];
        if (validacion && !validacion(arg)) {
          throw new Error(`❌ Argumento ${index} no válido en ${propertyName}`);
        }
      });

      return metodoOriginal.apply(this, args);
    };

    return descriptor;
  };
}

class Usuario2 {
  constructor(nombre) {
    this.nombre = nombre;
  }

  setEdad(edad) {
    this._edad = edad;
    console.log(`✅ Edad de ${this.nombre} establecida: ${edad}`);
  }
}

// Aplicar validación: edad debe ser número entre 0 y 150
const setEdadDescriptor = Object.getOwnPropertyDescriptor(
  Usuario2.prototype,
  "setEdad"
);
validar([(edad) => typeof edad === "number" && edad >= 0 && edad <= 150])(
  Usuario2,
  "setEdad",
  setEdadDescriptor
);
Object.defineProperty(Usuario2.prototype, "setEdad", setEdadDescriptor);

const user2 = new Usuario2("Luis");
user2.setEdad(25);

try {
  user2.setEdad(200); // Error
} catch (e) {
  console.log(e.message);
}

// ============================================
// 6️⃣ DECORADOR DE CACHÉ/MEMOIZACIÓN
// ============================================

console.log("\n--- Decorador de Caché ---");

function memoize(target, propertyName, descriptor) {
  const metodoOriginal = descriptor.value;
  const cache = new Map();

  descriptor.value = function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log(`💾 Cache HIT para ${propertyName}(${args})`);
      return cache.get(key);
    }

    console.log(`🔄 Cache MISS para ${propertyName}(${args})`);
    const resultado = metodoOriginal.apply(this, args);
    cache.set(key, resultado);
    return resultado;
  };

  return descriptor;
}

class Matematicas {
  fibonacci(n) {
    if (n <= 1) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  factorial(n) {
    if (n <= 1) return 1;
    return n * this.factorial(n - 1);
  }
}

// Aplicar memoización
const fibDescriptor = Object.getOwnPropertyDescriptor(
  Matematicas.prototype,
  "fibonacci"
);
memoize(Matematicas, "fibonacci", fibDescriptor);
Object.defineProperty(Matematicas.prototype, "fibonacci", fibDescriptor);

const mat = new Matematicas();
console.log("Fibonacci(10):", mat.fibonacci(10));
console.log("Fibonacci(10) again:", mat.fibonacci(10)); // Usa caché

// ============================================
// 7️⃣ DECORADOR DE RETRY (REINTENTAR)
// ============================================

console.log("\n--- Decorador de Retry ---");

function retry(intentos = 3, delay = 1000) {
  return function (target, propertyName, descriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = async function (...args) {
      for (let i = 0; i < intentos; i++) {
        try {
          return await metodoOriginal.apply(this, args);
        } catch (error) {
          console.log(
            `⚠️  Intento ${i + 1}/${intentos} falló: ${error.message}`
          );

          if (i === intentos - 1) {
            console.log("❌ Todos los intentos fallaron");
            throw error;
          }

          // Esperar antes de reintentar
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    };

    return descriptor;
  };
}

class ApiService {
  constructor() {
    this.intentos = 0;
  }

  async fetchData() {
    this.intentos++;
    console.log(`🔄 Intento de fetch #${this.intentos}`);

    // Simular fallo aleatorio
    if (Math.random() > 0.6) {
      throw new Error("Network error");
    }

    return { data: "Success!" };
  }
}

// Aplicar retry
const fetchDescriptor = Object.getOwnPropertyDescriptor(
  ApiService.prototype,
  "fetchData"
);
retry(3, 500)(ApiService, "fetchData", fetchDescriptor);
Object.defineProperty(ApiService.prototype, "fetchData", fetchDescriptor);

// Probar (descomenta para ejecutar)
// (async () => {
//   const api = new ApiService();
//   try {
//     const result = await api.fetchData();
//     console.log('✅ Resultado:', result);
//   } catch(e) {
//     console.log('Error final:', e.message);
//   }
// })();

// ============================================
// 8️⃣ DECORADOR DE DEPRECACIÓN
// ============================================

console.log("\n--- Decorador de Deprecación ---");

function deprecated(mensaje = "Este método está deprecado") {
  return function (target, propertyName, descriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args) {
      console.warn(`⚠️  DEPRECATED: ${propertyName} - ${mensaje}`);
      return metodoOriginal.apply(this, args);
    };

    return descriptor;
  };
}

class LegacyAPI {
  metodoAntiguo() {
    console.log("Ejecutando método antiguo...");
    return "resultado";
  }

  metodoNuevo() {
    console.log("Ejecutando método nuevo...");
    return "resultado mejorado";
  }
}

// Marcar como deprecado
const antiguoDescriptor = Object.getOwnPropertyDescriptor(
  LegacyAPI.prototype,
  "metodoAntiguo"
);
deprecated("Usa metodoNuevo() en su lugar")(
  LegacyAPI,
  "metodoAntiguo",
  antiguoDescriptor
);
Object.defineProperty(LegacyAPI.prototype, "metodoAntiguo", antiguoDescriptor);

const api = new LegacyAPI();
api.metodoAntiguo(); // Muestra warning
api.metodoNuevo();

// ============================================
// 9️⃣ DECORADOR DE READONLY
// ============================================

console.log("\n--- Decorador ReadOnly ---");

function readonly(target, propertyName, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Configuracion {
  constructor() {
    this._apiKey = "secret-key-123";
  }

  getApiKey() {
    return this._apiKey;
  }
}

// Hacer el método readonly
const getApiDescriptor = Object.getOwnPropertyDescriptor(
  Configuracion.prototype,
  "getApiKey"
);
readonly(Configuracion, "getApiKey", getApiDescriptor);
Object.defineProperty(Configuracion.prototype, "getApiKey", getApiDescriptor);

const config = new Configuracion();
console.log("API Key:", config.getApiKey());

try {
  config.getApiKey = function () {
    return "hacked";
  }; // No funciona
  console.log("Después de intento de modificación:", config.getApiKey());
} catch (e) {
  console.log("Error:", e.message);
}

// ============================================
// 🔟 COMPOSICIÓN DE DECORADORES
// ============================================

console.log("\n--- Composición de Decoradores ---");

function compose(...decorators) {
  return function (target, propertyName, descriptor) {
    return decorators.reduceRight((desc, decorator) => {
      return decorator(target, propertyName, desc) || desc;
    }, descriptor);
  };
}

class Servicio {
  procesarDatos(datos) {
    console.log("Procesando:", datos);
    return datos.toUpperCase();
  }
}

// Aplicar múltiples decoradores
const procesarDescriptor = Object.getOwnPropertyDescriptor(
  Servicio.prototype,
  "procesarDatos"
);

compose(log("SERVICE"), medirTiempo)(
  Servicio,
  "procesarDatos",
  procesarDescriptor
);

Object.defineProperty(Servicio.prototype, "procesarDatos", procesarDescriptor);

const servicio = new Servicio();
servicio.procesarDatos("hola mundo");

// ============================================
// 1️⃣1️⃣ HELPER: APLICAR DECORADORES FÁCILMENTE
// ============================================

console.log("\n--- Helper para Decoradores ---");

function aplicarDecorador(clase, metodo, ...decoradores) {
  const descriptor = Object.getOwnPropertyDescriptor(clase.prototype, metodo);

  decoradores.reverse().forEach((decorador) => {
    decorador(clase, metodo, descriptor);
  });

  Object.defineProperty(clase.prototype, metodo, descriptor);
}

class Ejemplo {
  metodoEjemplo(x, y) {
    return x + y;
  }
}

// Usar el helper
aplicarDecorador(Ejemplo, "metodoEjemplo", log("EJEMPLO"), medirTiempo);

const ejemplo = new Ejemplo();
console.log("Resultado:", ejemplo.metodoEjemplo(5, 3));

// ============================================
// 1️⃣2️⃣ EJEMPLO COMPLETO: SISTEMA DE PERMISOS
// ============================================

console.log("\n--- Ejemplo Completo: Sistema de Permisos ---");

// Decorador de autorización
function requierePermiso(permiso) {
  return function (target, propertyName, descriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args) {
      if (!this.permisos || !this.permisos.includes(permiso)) {
        throw new Error(
          `❌ Permiso denegado: ${permiso} requerido para ${propertyName}`
        );
      }

      console.log(`✅ Permiso ${permiso} verificado para ${propertyName}`);
      return metodoOriginal.apply(this, args);
    };

    return descriptor;
  };
}

// Decorador de auditoría
function auditar(target, propertyName, descriptor) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args) {
    const registro = {
      usuario: this.nombre,
      accion: propertyName,
      args: args,
      timestamp: new Date(),
    };

    console.log(`📋 Auditoría:`, JSON.stringify(registro, null, 2));

    return metodoOriginal.apply(this, args);
  };

  return descriptor;
}

class SistemaArchivos {
  constructor(nombre, permisos) {
    this.nombre = nombre;
    this.permisos = permisos;
    this.archivos = [];
  }

  leerArchivo(nombre) {
    console.log(`📄 Leyendo archivo: ${nombre}`);
    return `Contenido de ${nombre}`;
  }

  escribirArchivo(nombre, contenido) {
    this.archivos.push({ nombre, contenido });
    console.log(`💾 Archivo ${nombre} guardado`);
  }

  eliminarArchivo(nombre) {
    this.archivos = this.archivos.filter((f) => f.nombre !== nombre);
    console.log(`🗑️  Archivo ${nombre} eliminado`);
  }
}

// Aplicar decoradores
aplicarDecorador(SistemaArchivos, "leerArchivo", requierePermiso("read"));

aplicarDecorador(
  SistemaArchivos,
  "escribirArchivo",
  auditar,
  requierePermiso("write")
);

aplicarDecorador(
  SistemaArchivos,
  "eliminarArchivo",
  auditar,
  requierePermiso("delete")
);

// Probar con diferentes permisos
console.log("\n--- Usuario con permisos READ ---");
const usuarioBasico = new SistemaArchivos("Juan", ["read"]);
usuarioBasico.leerArchivo("documento.txt");

try {
  usuarioBasico.escribirArchivo("nuevo.txt", "contenido");
} catch (e) {
  console.log(e.message);
}

console.log("\n--- Usuario ADMIN ---");
const admin = new SistemaArchivos("Admin", ["read", "write", "delete"]);
admin.leerArchivo("documento.txt");
admin.escribirArchivo("config.json", '{ "setting": true }');
admin.eliminarArchivo("temp.txt");

// ============================================
// RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
🎨 DECORADORES - PUNTOS CLAVE:

1. QUÉ SON:
   • Funciones que modifican clases, métodos o propiedades
   • Patrón de diseño común en otros lenguajes
   • En JS: Propuesta Stage 3 (aún no estándar)

2. IMPLEMENTACIÓN ACTUAL:
   • Usar funciones decoradoras manualmente
   • Modificar descriptores de propiedades
   • Object.getOwnPropertyDescriptor + defineProperty

3. TIPOS COMUNES:
   ⏱️  Medición de tiempo
   📝 Logging
   ✅ Validación
   💾 Caché/Memoización
   🔄 Retry
   ⚠️  Deprecación
   🔒 Control de acceso

4. VENTAJAS:
   ✅ Separación de responsabilidades
   ✅ Código DRY (Don't Repeat Yourself)
   ✅ Fácil de mantener y probar
   ✅ Composable

5. CUÁNDO USAR:
   • Logging y monitoreo
   • Validación de entrada
   • Control de acceso/permisos
   • Caché de resultados
   • Manejo de errores
   • Performance tracking

6. SINTAXIS FUTURA (@decorador):
   
   @log
   @memoize
   class MiClase {
     @readonly
     @validar
     metodo() { }
   }
   
   ⚠️  Requiere Babel/TypeScript configurado

💡 PATRÓN COMÚN:
   
   function miDecorador(target, prop, descriptor) {
     const original = descriptor.value;
     
     descriptor.value = function(...args) {
       // Código antes
       const result = original.apply(this, args);
       // Código después
       return result;
     };
     
     return descriptor;
   }

🎓 RECUERDA:
   Los decoradores son una forma elegante de aplicar
   aspectos transversales (cross-cutting concerns)
   sin modificar el código original.
   
   Son como "envolturas" que añaden funcionalidad
   de forma declarativa y reutilizable.
`);
