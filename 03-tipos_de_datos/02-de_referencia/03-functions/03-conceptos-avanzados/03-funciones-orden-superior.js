//--------------------------------------------------------------------------------------
// 🎯 FUNCIONES DE ORDEN SUPERIOR (Higher-Order Functions)
//--------------------------------------------------------------------------------------
// Son funciones que:
// 1. Reciben funciones como argumentos
// 2. Retornan funciones
// 3. O ambas

//--------------------------------------------------------------------------------------
// 1️⃣ FUNCIONES QUE RECIBEN FUNCIONES
//--------------------------------------------------------------------------------------

function operar(a, b, operacion) {
  return operacion(a, b);
}

const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const multiplica = (x, y) => x * y;

console.log(operar(5, 3, suma)); // 8
console.log(operar(5, 3, resta)); // 2
console.log(operar(5, 3, multiplica)); // 15

//--------------------------------------------------------------------------------------
// 2️⃣ FUNCIONES QUE RETORNAN FUNCIONES
//--------------------------------------------------------------------------------------

function crearMultiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

const doble = crearMultiplicador(2);
const triple = crearMultiplicador(3);

console.log(doble(5)); // 10
console.log(triple(5)); // 15

//--------------------------------------------------------------------------------------
// 3️⃣ MAP, FILTER, REDUCE (Clásicos)
//--------------------------------------------------------------------------------------

const numeros = [1, 2, 3, 4, 5];

// MAP: Transforma cada elemento
const cuadrados = numeros.map((n) => n ** 2);
console.log(cuadrados); // [1, 4, 9, 16, 25]

// FILTER: Filtra elementos
const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares); // [2, 4]

// REDUCE: Reduce a un valor
const suma2 = numeros.reduce((acc, n) => acc + n, 0);
console.log(suma2); // 15

// ENCADENAMIENTO
const resultado = numeros
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((acc, n) => acc + n, 0);

console.log(resultado); // 12 (2*2 + 4*2 = 4 + 8)

//--------------------------------------------------------------------------------------
// 4️⃣ CREANDO NUESTRAS PROPIAS FUNCIONES DE ORDEN SUPERIOR
//--------------------------------------------------------------------------------------

// Función que ejecuta callback n veces
function repetir(n, accion) {
  for (let i = 0; i < n; i++) {
    accion(i);
  }
}

repetir(3, (i) => console.log(`Iteración ${i}`));

// Función que ejecuta si condición se cumple
function cuando(condicion, accion) {
  if (condicion()) {
    accion();
  }
}

cuando(
  () => 5 > 3,
  () => console.log("5 es mayor que 3")
);

// Función que ejecuta hasta que condición se cumpla
function hasta(condicion, accion) {
  if (!condicion()) {
    accion();
    hasta(condicion, accion);
  }
}

let contador = 0;
hasta(
  () => contador === 3,
  () => {
    console.log(contador);
    contador++;
  }
);

//--------------------------------------------------------------------------------------
// 5️⃣ COMPOSICIÓN DE FUNCIONES
//--------------------------------------------------------------------------------------

// Ejecutar funciones en secuencia
function componer(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const sumar1 = (x) => x + 1;
const multiplicarPor2 = (x) => x * 2;

const operacion = componer(multiplicarPor2, sumar1);
console.log(operacion(5)); // 12 ((5 + 1) * 2)

// Composición múltiple
function componerMultiple(...funciones) {
  return function (valor) {
    return funciones.reduceRight((acc, fn) => fn(acc), valor);
  };
}

const operacionCompleja = componerMultiple(
  (x) => x * 2,
  (x) => x + 10,
  (x) => x / 2
);

console.log(operacionCompleja(20)); // 50 ((20/2 + 10) * 2)

//--------------------------------------------------------------------------------------
// 6️⃣ PIPE (Lo contrario de compose)
//--------------------------------------------------------------------------------------

function pipe(...funciones) {
  return function (valor) {
    return funciones.reduce((acc, fn) => fn(acc), valor);
  };
}

const transformar = pipe(
  (x) => x / 2, // 20 / 2 = 10
  (x) => x + 10, // 10 + 10 = 20
  (x) => x * 2 // 20 * 2 = 40
);

console.log(transformar(20)); // 40

//--------------------------------------------------------------------------------------
// 7️⃣ CURRYING
//--------------------------------------------------------------------------------------

// Transformar función de múltiples args en funciones de un arg
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}

function sumarTres(a, b, c) {
  return a + b + c;
}

const sumarCurried = curry(sumarTres);

console.log(sumarCurried(1)(2)(3)); // 6
console.log(sumarCurried(1, 2)(3)); // 6
console.log(sumarCurried(1)(2, 3)); // 6

//--------------------------------------------------------------------------------------
// 8️⃣ PARTIAL APPLICATION
//--------------------------------------------------------------------------------------

function partial(fn, ...argsIniciales) {
  return function (...argsRestantes) {
    return fn(...argsIniciales, ...argsRestantes);
  };
}

function saludar(saludo, nombre, puntuacion) {
  return `${saludo} ${nombre}${puntuacion}`;
}

const saludarHola = partial(saludar, "Hola");
console.log(saludarHola("Carlos", "!")); // "Hola Carlos!"

const saludarCarlos = partial(saludar, "Hola", "Carlos");
console.log(saludarCarlos("!!!")); // "Hola Carlos!!!"

//--------------------------------------------------------------------------------------
// 9️⃣ MEMOIZATION
//--------------------------------------------------------------------------------------

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Desde cache");
      return cache.get(key);
    }

    const resultado = fn(...args);
    cache.set(key, resultado);
    return resultado;
  };
}

const factorial = memoize(function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
});

console.log(factorial(5)); // Calcula
console.log(factorial(5)); // Desde cache

//--------------------------------------------------------------------------------------
// 🔟 DECORADORES (WRAPPER FUNCTIONS)
//--------------------------------------------------------------------------------------

// Añadir funcionalidad a funciones existentes

function medirTiempo(fn) {
  return function (...args) {
    const inicio = Date.now();
    const resultado = fn(...args);
    const fin = Date.now();
    console.log(`Tiempo: ${fin - inicio}ms`);
    return resultado;
  };
}

const funcionLenta = medirTiempo(function () {
  let suma = 0;
  for (let i = 0; i < 1000000; i++) {
    suma += i;
  }
  return suma;
});

funcionLenta(); // Imprime tiempo de ejecución

// Decorador de logging
function conLog(fn) {
  return function (...args) {
    console.log(`Llamando ${fn.name} con:`, args);
    const resultado = fn(...args);
    console.log(`Resultado:`, resultado);
    return resultado;
  };
}

const sumarConLog = conLog((a, b) => a + b);
sumarConLog(3, 5);

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ CASOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// Caso 1: Validador genérico
function validar(validaciones) {
  return function (valor) {
    for (const validacion of validaciones) {
      const resultado = validacion(valor);
      if (!resultado.valido) {
        return resultado;
      }
    }
    return { valido: true };
  };
}

const validarEmail = validar([
  (email) => ({
    valido: email.includes("@"),
    mensaje: "Debe contener @",
  }),
  (email) => ({
    valido: email.length >= 5,
    mensaje: "Mínimo 5 caracteres",
  }),
]);

console.log(validarEmail("test@mail.com")); // { valido: true }
console.log(validarEmail("test")); // { valido: false, mensaje: "Debe contener @" }

// Caso 2: Pipeline de transformaciones
const procesarTexto = pipe(
  (str) => str.trim(),
  (str) => str.toLowerCase(),
  (str) => str.split(" "),
  (arr) => arr.filter((word) => word.length > 3),
  (arr) => arr.join(" ")
);

console.log(procesarTexto("  Hola Mundo desde JavaScript  "));
// "hola mundo desde javascript"

// Caso 3: Cache con expiración
function cacheConExpiracion(fn, duracion) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    const ahora = Date.now();

    if (cache.has(key)) {
      const { valor, timestamp } = cache.get(key);
      if (ahora - timestamp < duracion) {
        return valor;
      }
    }

    const resultado = fn(...args);
    cache.set(key, { valor: resultado, timestamp: ahora });
    return resultado;
  };
}

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ PROGRAMACIÓN FUNCIONAL
//--------------------------------------------------------------------------------------

// Evitar mutación
const agregarElemento = (arr, elemento) => [...arr, elemento];
const removerElemento = (arr, index) => arr.filter((_, i) => i !== index);

const miArray = [1, 2, 3];
const nuevoArray = agregarElemento(miArray, 4);
console.log(miArray); // [1, 2, 3] (sin mutar)
console.log(nuevoArray); // [1, 2, 3, 4]

// Funciones puras
function sumarPura(a, b) {
  return a + b; // Sin efectos secundarios
}

// Inmutabilidad
const actualizarUsuario = (usuario, cambios) => ({
  ...usuario,
  ...cambios,
});

const usuario = { nombre: "Ana", edad: 25 };
const usuarioActualizado = actualizarUsuario(usuario, { edad: 26 });

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:

1. Usa funciones puras cuando sea posible
2. Componer funciones pequeñas para crear funciones complejas
3. Usa map, filter, reduce en lugar de bucles
4. Evita mutaciones (inmutabilidad)
5. Usa currying para crear funciones especializadas

❌ EVITAR:

1. Efectos secundarios ocultos
2. Mutar argumentos
3. Funciones demasiado genéricas o demasiado específicas
4. Composición excesiva que dificulte lectura
5. Ignorar rendimiento en favor de pureza
*/

console.log(`
╔═══════════════════════════════════════════════════════════╗
║            FUNCIONES DE ORDEN SUPERIOR                    ║
╠═══════════════════════════════════════════════════════════╣
║ • Reciben funciones como argumentos                       ║
║ • Retornan funciones                                      ║
║ • Permiten composición y reutilización                    ║
║ • Base de programación funcional                          ║
║ • Ejemplos: map, filter, reduce                           ║
╚═══════════════════════════════════════════════════════════╝
`);
