//--------------------------------------------------------------------------------------
// 🎯 CALL, APPLY Y BIND
//--------------------------------------------------------------------------------------
// Métodos para controlar el contexto (this) de las funciones

//--------------------------------------------------------------------------------------
// 1️⃣ CALL() - Invocar con contexto específico
//--------------------------------------------------------------------------------------

function saludar(saludo, puntuacion) {
  return `${saludo}, soy ${this.nombre}${puntuacion}`;
}

const persona1 = { nombre: "Carlos" };
const persona2 = { nombre: "Ana" };

// call(contexto, arg1, arg2, ...)
console.log(saludar.call(persona1, "Hola", "!")); // "Hola, soy Carlos!"
console.log(saludar.call(persona2, "Hey", ".")); // "Hey, soy Ana."

//--------------------------------------------------------------------------------------
// 2️⃣ APPLY() - Igual que call pero con array de argumentos
//--------------------------------------------------------------------------------------

// apply(contexto, [args])
console.log(saludar.apply(persona1, ["Buenos días", "!!!"]));
// "Buenos días, soy Carlos!!!"

// Útil cuando tienes argumentos en array
const args = ["Hola", "..."];
console.log(saludar.apply(persona2, args));

//--------------------------------------------------------------------------------------
// 3️⃣ BIND() - Crea nueva función con contexto fijo
//--------------------------------------------------------------------------------------

const saludarCarlos = saludar.bind(persona1);
console.log(saludarCarlos("Qué tal", "?")); // "Qué tal, soy Carlos?"

// Bind con argumentos parciales
const saludarCarlosHola = saludar.bind(persona1, "Hola");
console.log(saludarCarlosHola("!")); // "Hola, soy Carlos!"
console.log(saludarCarlosHola(".")); // "Hola, soy Carlos."

//--------------------------------------------------------------------------------------
// 4️⃣ DIFERENCIAS PRINCIPALES
//--------------------------------------------------------------------------------------

const obj = { valor: 42 };

function test(a, b) {
  console.log(this.valor, a, b);
}

// call: Ejecuta inmediatamente
test.call(obj, 1, 2); // 42 1 2

// apply: Ejecuta inmediatamente con array
test.apply(obj, [3, 4]); // 42 3 4

// bind: Retorna nueva función
const testBound = test.bind(obj, 5, 6);
testBound(); // 42 5 6

//--------------------------------------------------------------------------------------
// 5️⃣ CASO PRÁCTICO: PRESTAR MÉTODOS
//--------------------------------------------------------------------------------------

const persona = {
  nombre: "Carlos",
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

const otraPersona = { nombre: "Ana" };

// "Prestar" el método a otro objeto
persona.saludar.call(otraPersona); // "Hola, soy Ana"

//--------------------------------------------------------------------------------------
// 6️⃣ USAR MÉTODOS DE ARRAY EN ARRAY-LIKE OBJECTS
//--------------------------------------------------------------------------------------

function sumarTodos() {
  // arguments es array-like pero NO es array
  // console.log(arguments.reduce); // undefined

  // Usar métodos de array con call/apply
  const suma = Array.prototype.reduce.call(
    arguments,
    (acc, num) => acc + num,
    0
  );
  return suma;
}

console.log(sumarTodos(1, 2, 3, 4)); // 10

// Convertir arguments a array
function listarArgs() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
}

listarArgs("a", "b", "c"); // ["a", "b", "c"]

// Forma moderna (mejor)
function listarArgsModerno() {
  const args = Array.from(arguments);
  // o [...arguments]
  console.log(args);
}

//--------------------------------------------------------------------------------------
// 7️⃣ ENCONTRAR MAX/MIN CON APPLY
//--------------------------------------------------------------------------------------

const numeros = [5, 6, 2, 3, 7];

// Math.max() espera argumentos separados, no array
const max = Math.max.apply(null, numeros);
console.log(max); // 7

// Forma moderna (mejor)
const maxModerno = Math.max(...numeros);
console.log(maxModerno); // 7

//--------------------------------------------------------------------------------------
// 8️⃣ BIND EN EVENT HANDLERS
//--------------------------------------------------------------------------------------

const boton = {
  texto: "Clic aquí",
  clicks: 0,

  manejarClick() {
    this.clicks++;
    console.log(`"${this.texto}" clickeado ${this.clicks} veces`);
  },
};

// Simulando event listener
const handler = boton.manejarClick; // Pierde contexto
// handler(); // Error: this.texto is undefined

// Solución 1: bind
const handlerBound = boton.manejarClick.bind(boton);
handlerBound(); // Funciona correctamente

// Solución 2: Arrow function wrapper
const handlerArrow = () => boton.manejarClick();
handlerArrow(); // Funciona correctamente

//--------------------------------------------------------------------------------------
// 9️⃣ PARTIAL APPLICATION CON BIND
//--------------------------------------------------------------------------------------

function multiplicar(a, b, c) {
  return a * b * c;
}

// Fijar primer argumento
const doblesDe = multiplicar.bind(null, 2);
console.log(doblesDe(3, 4)); // 24 (2 * 3 * 4)

// Fijar primeros dos argumentos
const seisPor = multiplicar.bind(null, 2, 3);
console.log(seisPor(4)); // 24 (2 * 3 * 4)

//--------------------------------------------------------------------------------------
// 🔟 CASOS PRÁCTICOS AVANZADOS
//--------------------------------------------------------------------------------------

// Caso 1: Logging con contexto
function crearLogger(prefijo) {
  return function (...args) {
    console.log(`[${prefijo}]`, ...args, `(${this.nombre || "sin nombre"})`);
  };
}

const logger = crearLogger("APP");
logger.call({ nombre: "Usuario1" }, "Inicio de sesión");
// [APP] Inicio de sesión (Usuario1)

// Caso 2: Validación con contexto
const validador = {
  reglas: {
    required: (val) => val !== "",
    minLength: (val, min) => val.length >= min,
  },

  validar(campo, valor) {
    const regla = this.reglas[campo];
    return regla ? regla(valor) : true;
  },
};

const validarRequired = validador.validar.bind(validador, "required");
console.log(validarRequired("Hola")); // true
console.log(validarRequired("")); // false

// Caso 3: Cachear con contexto
function cachear(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const resultado = fn.apply(this, args);
    cache.set(key, resultado);
    return resultado;
  };
}

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ IMPLEMENTAR TU PROPIO BIND
//--------------------------------------------------------------------------------------

Function.prototype.miBind = function (contexto, ...argsIniciales) {
  const fn = this;
  return function (...argsNuevos) {
    return fn.apply(contexto, [...argsIniciales, ...argsNuevos]);
  };
};

function test2(a, b) {
  return `${this.nombre}: ${a + b}`;
}

const testBound2 = test2.miBind({ nombre: "Test" }, 5);
console.log(testBound2(3)); // "Test: 8"

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ TABLA COMPARATIVA
//--------------------------------------------------------------------------------------

console.log(`
╔═══════════╦═══════════════╦═══════════════╦═══════════════════╗
║ Método    ║ Ejecución     ║ Argumentos    ║ Retorna           ║
╠═══════════╬═══════════════╬═══════════════╬═══════════════════╣
║ call()    ║ Inmediata     ║ Separados     ║ Resultado         ║
║ apply()   ║ Inmediata     ║ Array         ║ Resultado         ║
║ bind()    ║ No ejecuta    ║ Separados     ║ Nueva función     ║
╚═══════════╩═══════════════╩═══════════════╩═══════════════════╝
`);

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ USA CALL CUANDO:
- Necesites invocar inmediatamente
- Tengas pocos argumentos
- Quieras prestar métodos

✅ USA APPLY CUANDO:
- Necesites invocar inmediatamente
- Tengas argumentos en array
- Uses Math.max/min con arrays (o usa spread)

✅ USA BIND CUANDO:
- Necesites crear función reutilizable
- Event handlers
- Partial application
- Callbacks que necesitan contexto

⚠️ ALTERNATIVAS MODERNAS:
- Arrow functions (mantienen contexto)
- Spread operator en lugar de apply
- Destructuring en lugar de bind parcial
*/
