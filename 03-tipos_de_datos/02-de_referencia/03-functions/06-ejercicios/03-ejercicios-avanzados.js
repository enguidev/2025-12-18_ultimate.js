//--------------------------------------------------------------------------------------
// 🎯 EJERCICIOS AVANZADOS DE FUNCIONES
//--------------------------------------------------------------------------------------
// Practica closures, recursividad, higher-order functions, memoization y más

//======================================================================================
// 📚 SECCIÓN 1: CLOSURES
//======================================================================================

//--------------------------------------------------------------------------------------
// EJERCICIO 1: Contador Privado
//--------------------------------------------------------------------------------------
// Crea una función que devuelva un objeto con métodos para:
// - incrementar
// - decrementar
// - obtenerValor
// - resetear
// El contador debe ser privado (no accesible desde fuera)

function crearContador(inicial = 0) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function crearContador(inicial = 0) {
  let contador = inicial;

  return {
    incrementar() {
      return ++contador;
    },
    decrementar() {
      return --contador;
    },
    obtenerValor() {
      return contador;
    },
    resetear() {
      contador = inicial;
      return contador;
    },
  };
}

// Pruebas
const miContador = crearContador(10);
console.log(miContador.incrementar()); // 11
console.log(miContador.incrementar()); // 12
console.log(miContador.decrementar()); // 11
console.log(miContador.obtenerValor()); // 11
console.log(miContador.resetear()); // 10

//--------------------------------------------------------------------------------------
// EJERCICIO 2: Factory de Multiplicadores
//--------------------------------------------------------------------------------------
// Crea una función que genere funciones multiplicadoras
// crearMultiplicador(3) debería devolver una función que multiplique por 3

function crearMultiplicador(factor) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function crearMultiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

// Pruebas
const doble = crearMultiplicador(2);
const triple = crearMultiplicador(3);
const cuadruple = crearMultiplicador(4);

console.log(doble(5)); // 10
console.log(triple(5)); // 15
console.log(cuadruple(5)); // 20

//--------------------------------------------------------------------------------------
// EJERCICIO 3: Sistema de Carrito de Compras
//--------------------------------------------------------------------------------------
// Crea un carrito con métodos para:
// - agregar(producto, precio)
// - eliminar(producto)
// - calcularTotal()
// - obtenerProductos()
// Los productos deben ser privados

function crearCarrito() {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function crearCarrito() {
  const productos = [];

  return {
    agregar(nombre, precio) {
      productos.push({ nombre, precio });
      return `${nombre} agregado`;
    },

    eliminar(nombre) {
      const index = productos.findIndex((p) => p.nombre === nombre);
      if (index !== -1) {
        productos.splice(index, 1);
        return `${nombre} eliminado`;
      }
      return "Producto no encontrado";
    },

    calcularTotal() {
      return productos.reduce((total, p) => total + p.precio, 0);
    },

    obtenerProductos() {
      return productos.map((p) => ({ ...p })); // Copia para evitar mutación
    },
  };
}

// Pruebas
const carrito = crearCarrito();
carrito.agregar("Laptop", 1200);
carrito.agregar("Mouse", 25);
carrito.agregar("Teclado", 75);
console.log(carrito.calcularTotal()); // 1300
console.log(carrito.obtenerProductos());

//======================================================================================
// 📚 SECCIÓN 2: RECURSIVIDAD
//======================================================================================

//--------------------------------------------------------------------------------------
// EJERCICIO 4: Suma de Array Recursiva
//--------------------------------------------------------------------------------------
// Crea una función recursiva que sume todos los elementos de un array

function sumaRecursiva(arr) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function sumaRecursiva(arr) {
  // Caso base
  if (arr.length === 0) return 0;

  // Caso recursivo
  return arr[0] + sumaRecursiva(arr.slice(1));
}

// Pruebas
console.log(sumaRecursiva([1, 2, 3, 4, 5])); // 15
console.log(sumaRecursiva([10, 20, 30])); // 60

//--------------------------------------------------------------------------------------
// EJERCICIO 5: Fibonacci con Memoization
//--------------------------------------------------------------------------------------
// Implementa fibonacci de forma recursiva CON memoization para optimizar

function fibonacci(n, memo = {}) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function fibonacci(n, memo = {}) {
  // Casos base
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Si ya está en cache
  if (n in memo) return memo[n];

  // Calcular y guardar
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Pruebas
console.log(fibonacci(10)); // 55
console.log(fibonacci(40)); // 102334155 (rápido gracias a memoization)

//--------------------------------------------------------------------------------------
// EJERCICIO 6: Deep Clone (Clonar Objetos Profundos)
//--------------------------------------------------------------------------------------
// Crea una función recursiva que clone un objeto con anidaciones

function deepClone(obj) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function deepClone(obj) {
  // Casos base
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Objetos
  const clon = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clon[key] = deepClone(obj[key]);
    }
  }

  return clon;
}

// Pruebas
const original = {
  nombre: "Carlos",
  edad: 25,
  direccion: {
    calle: "Principal",
    numero: 123,
    ciudad: {
      nombre: "Madrid",
      pais: "España",
    },
  },
  hobbies: ["programar", "leer"],
};

const copia = deepClone(original);
copia.direccion.ciudad.nombre = "Barcelona";
console.log(original.direccion.ciudad.nombre); // "Madrid" (no mutó)
console.log(copia.direccion.ciudad.nombre); // "Barcelona"

//--------------------------------------------------------------------------------------
// EJERCICIO 7: Aplanar Array Anidado
//--------------------------------------------------------------------------------------
// Crea una función recursiva que aplane un array con cualquier nivel de anidación

function aplanar(arr) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function aplanar(arr) {
  const resultado = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      resultado.push(...aplanar(item)); // Recursivo
    } else {
      resultado.push(item);
    }
  }

  return resultado;
}

// Pruebas
const anidado = [1, [2, 3, [4, 5]], 6, [7, [8, [9, 10]]]];
console.log(aplanar(anidado)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//======================================================================================
// 📚 SECCIÓN 3: FUNCIONES DE ORDEN SUPERIOR
//======================================================================================

//--------------------------------------------------------------------------------------
// EJERCICIO 8: Implementa tu propio map()
//--------------------------------------------------------------------------------------
// Crea una función que funcione como Array.prototype.map()

function miMap(array, callback) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function miMap(array, callback) {
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(callback(array[i], i, array));
  }
  return resultado;
}

// Pruebas
const numeros = [1, 2, 3, 4, 5];
console.log(miMap(numeros, (n) => n * 2)); // [2, 4, 6, 8, 10]
console.log(miMap(numeros, (n) => n ** 2)); // [1, 4, 9, 16, 25]

//--------------------------------------------------------------------------------------
// EJERCICIO 9: Implementa tu propio filter()
//--------------------------------------------------------------------------------------
// Crea una función que funcione como Array.prototype.filter()

function miFilter(array, callback) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function miFilter(array, callback) {
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

// Pruebas
console.log(miFilter(numeros, (n) => n % 2 === 0)); // [2, 4]
console.log(miFilter(numeros, (n) => n > 3)); // [4, 5]

//--------------------------------------------------------------------------------------
// EJERCICIO 10: Implementa tu propio reduce()
//--------------------------------------------------------------------------------------
// Crea una función que funcione como Array.prototype.reduce()

function miReduce(array, callback, inicial) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function miReduce(array, callback, inicial) {
  let acumulador = inicial !== undefined ? inicial : array[0];
  let inicio = inicial !== undefined ? 0 : 1;

  for (let i = inicio; i < array.length; i++) {
    acumulador = callback(acumulador, array[i], i, array);
  }

  return acumulador;
}

// Pruebas
console.log(miReduce(numeros, (acc, n) => acc + n, 0)); // 15
console.log(miReduce(numeros, (acc, n) => acc * n, 1)); // 120

//======================================================================================
// 📚 SECCIÓN 4: COMPOSICIÓN Y PIPE
//======================================================================================

//--------------------------------------------------------------------------------------
// EJERCICIO 11: Función compose()
//--------------------------------------------------------------------------------------
// Crea una función que componga múltiples funciones (de derecha a izquierda)

function compose(...funciones) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function compose(...funciones) {
  return function (valor) {
    return funciones.reduceRight((acc, fn) => fn(acc), valor);
  };
}

// Pruebas
const sumar1 = (x) => x + 1;
const multiplicarPor2 = (x) => x * 2;
const restar3 = (x) => x - 3;

const operacion = compose(restar3, multiplicarPor2, sumar1);
console.log(operacion(5)); // ((5 + 1) * 2) - 3 = 9

//--------------------------------------------------------------------------------------
// EJERCICIO 12: Función pipe()
//--------------------------------------------------------------------------------------
// Crea una función que componga múltiples funciones (de izquierda a derecha)

function pipe(...funciones) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function pipe(...funciones) {
  return function (valor) {
    return funciones.reduce((acc, fn) => fn(acc), valor);
  };
}

// Pruebas
const procesarTexto = pipe(
  (str) => str.trim(),
  (str) => str.toLowerCase(),
  (str) => str.split(" "),
  (arr) => arr.filter((word) => word.length > 3)
);

console.log(procesarTexto("  Hola Mundo JavaScript  ")); // ['hola', 'mundo', 'javascript']

//======================================================================================
// 📚 SECCIÓN 5: CURRYING
//======================================================================================

//--------------------------------------------------------------------------------------
// EJERCICIO 13: Función curry()
//--------------------------------------------------------------------------------------
// Crea una función que transforme cualquier función en su versión currificada

function curry(fn) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...nuevosArgs) {
      return curried(...args, ...nuevosArgs);
    };
  };
}

// Pruebas
function sumar(a, b, c) {
  return a + b + c;
}

const sumarCurry = curry(sumar);
console.log(sumarCurry(1)(2)(3)); // 6
console.log(sumarCurry(1, 2)(3)); // 6
console.log(sumarCurry(1)(2, 3)); // 6

//--------------------------------------------------------------------------------------
// EJERCICIO 14: Calculadora Currificada
//--------------------------------------------------------------------------------------
// Crea una calculadora que use currying: calcular(operacion)(a)(b)

function calcular(operacion) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function calcular(operacion) {
  const operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => (b !== 0 ? a / b : "Error: División por cero"),
  };

  return function (a) {
    return function (b) {
      return operaciones[operacion](a, b);
    };
  };
}

// Pruebas
console.log(calcular("suma")(5)(3)); // 8
console.log(calcular("multiplicar")(4)(7)); // 28

const sumar5 = calcular("suma")(5);
console.log(sumar5(10)); // 15
console.log(sumar5(20)); // 25

//======================================================================================
// 📚 SECCIÓN 6: MEMOIZATION
//======================================================================================

//--------------------------------------------------------------------------------------
// EJERCICIO 15: Función memoize()
//--------------------------------------------------------------------------------------
// Crea una función genérica de memoization que funcione con cualquier función

function memoize(fn) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("📦 Desde cache");
      return cache.get(key);
    }

    console.log("🔄 Calculando...");
    const resultado = fn(...args);
    cache.set(key, resultado);
    return resultado;
  };
}

// Pruebas
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const factorialMemo = memoize(factorial);
console.log(factorialMemo(5)); // 🔄 Calculando... 120
console.log(factorialMemo(5)); // 📦 Desde cache 120

//--------------------------------------------------------------------------------------
// EJERCICIO 16: API con Cache
//--------------------------------------------------------------------------------------
// Simula llamadas a API con cache que expire después de cierto tiempo

function crearAPIConCache(tiempoExpiracion) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function crearAPIConCache(tiempoExpiracion = 5000) {
  const cache = new Map();

  return function (url) {
    return new Promise((resolve) => {
      const ahora = Date.now();

      // Verificar cache
      if (cache.has(url)) {
        const { datos, timestamp } = cache.get(url);
        if (ahora - timestamp < tiempoExpiracion) {
          console.log("📦 Desde cache:", url);
          resolve(datos);
          return;
        } else {
          console.log("⏰ Cache expirado, recargando...");
          cache.delete(url);
        }
      }

      // Simular petición
      console.log("🌐 Llamando a API:", url);
      setTimeout(() => {
        const datos = { url, data: `Datos de ${url}`, timestamp: ahora };
        cache.set(url, { datos, timestamp: ahora });
        resolve(datos);
      }, 1000);
    });
  };
}

// Pruebas
const api = crearAPIConCache(3000);
api("/users/1").then(console.log);

//======================================================================================
// 📚 SECCIÓN 7: EJERCICIOS COMBINADOS
//======================================================================================

//--------------------------------------------------------------------------------------
// EJERCICIO 17: Pipeline de Validaciones
//--------------------------------------------------------------------------------------
// Crea un sistema de validación que use composición de funciones

function crearValidador(...validaciones) {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function crearValidador(...validaciones) {
  return function (valor) {
    for (const validacion of validaciones) {
      const resultado = validacion(valor);
      if (!resultado.valido) {
        return resultado;
      }
    }
    return { valido: true, mensaje: "Válido" };
  };
}

// Validaciones individuales
const requerido = (valor) => ({
  valido: valor !== "" && valor !== null && valor !== undefined,
  mensaje: "Este campo es requerido",
});

const minLength = (min) => (valor) => ({
  valido: valor.length >= min,
  mensaje: `Mínimo ${min} caracteres`,
});

const email = (valor) => ({
  valido: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
  mensaje: "Email inválido",
});

// Crear validador
const validarEmail = crearValidador(requerido, minLength(5), email);

// Pruebas
console.log(validarEmail("test@example.com")); // { valido: true }
console.log(validarEmail("test")); // { valido: false, mensaje: 'Email inválido' }
console.log(validarEmail("")); // { valido: false, mensaje: 'Este campo es requerido' }

//--------------------------------------------------------------------------------------
// EJERCICIO 18: Sistema de Permisos con Closures
//--------------------------------------------------------------------------------------
// Crea un sistema de roles y permisos usando closures

function crearSistemaPermisos() {
  // Tu código aquí
}

// ✅ SOLUCIÓN
function crearSistemaPermisos() {
  const permisos = new Map();

  return {
    agregarRol(rol, listaPermisos) {
      permisos.set(rol, new Set(listaPermisos));
      return `Rol ${rol} creado`;
    },

    verificarPermiso(rol, permiso) {
      if (!permisos.has(rol)) return false;
      return permisos.get(rol).has(permiso);
    },

    obtenerPermisos(rol) {
      if (!permisos.has(rol)) return [];
      return Array.from(permisos.get(rol));
    },

    crearUsuario(nombre, rol) {
      return {
        nombre,
        rol,
        puede: (permiso) => this.verificarPermiso(rol, permiso),
      };
    },
  };
}

// Pruebas
const sistema = crearSistemaPermisos();
sistema.agregarRol("admin", ["crear", "editar", "eliminar", "ver"]);
sistema.agregarRol("usuario", ["ver", "editar"]);

const admin = sistema.crearUsuario("Carlos", "admin");
const usuario = sistema.crearUsuario("Ana", "usuario");

console.log(admin.puede("eliminar")); // true
console.log(usuario.puede("eliminar")); // false

//======================================================================================
// 📚 RESUMEN Y MEJORES PRÁCTICAS
//======================================================================================

console.log(`
╔═══════════════════════════════════════════════════════════╗
║          EJERCICIOS AVANZADOS - RESUMEN                   ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║ ✅ CLOSURES:                                              ║
║   • Encapsulación de datos privados                       ║
║   • Factory functions                                     ║
║   • Módulos privados                                      ║
║                                                           ║
║ ✅ RECURSIVIDAD:                                          ║
║   • Problemas que se dividen en subproblemas              ║
║   • Siempre define caso base                              ║
║   • Usa memoization para optimizar                        ║
║                                                           ║
║ ✅ FUNCIONES DE ORDEN SUPERIOR:                           ║
║   • Funciones que reciben/retornan funciones              ║
║   • Composición y pipe                                    ║
║   • Programación funcional                                ║
║                                                           ║
║ ✅ CURRYING:                                              ║
║   • Transformar f(a,b,c) en f(a)(b)(c)                    ║
║   • Crear funciones especializadas                        ║
║   • Partial application                                   ║
║                                                           ║
║ ✅ MEMOIZATION:                                           ║
║   • Caché de resultados                                   ║
║   • Optimización de rendimiento                           ║
║   • Control de expiración                                 ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);
