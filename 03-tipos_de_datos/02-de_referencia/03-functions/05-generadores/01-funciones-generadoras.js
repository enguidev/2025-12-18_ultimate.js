//--------------------------------------------------------------------------------------
// 🎯 FUNCIONES GENERADORAS
//--------------------------------------------------------------------------------------
// Funciones que pueden pausar su ejecución y reanudarla después

//--------------------------------------------------------------------------------------
// 1️⃣ SINTAXIS BÁSICA
//--------------------------------------------------------------------------------------

// Se declaran con function*
function* generador() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generador();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

//--------------------------------------------------------------------------------------
// 2️⃣ ITERAR CON FOR...OF
//--------------------------------------------------------------------------------------

function* contador() {
  yield 1;
  yield 2;
  yield 3;
}

for (const num of contador()) {
  console.log(num); // 1, 2, 3
}

//--------------------------------------------------------------------------------------
// 3️⃣ GENERADOR INFINITO
//--------------------------------------------------------------------------------------

function* infinito() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const inf = infinito();
console.log(inf.next().value); // 0
console.log(inf.next().value); // 1
console.log(inf.next().value); // 2

//--------------------------------------------------------------------------------------
// 4️⃣ YIELD CON VALORES
//--------------------------------------------------------------------------------------

function* fibonacci() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}

//--------------------------------------------------------------------------------------
// 5️⃣ ENVIAR VALORES AL GENERADOR
//--------------------------------------------------------------------------------------

function* eco() {
  while (true) {
    const valor = yield;
    console.log("Eco:", valor);
  }
}

const e = eco();
e.next(); // Iniciar generador
e.next("Hola"); // Eco: Hola
e.next("Mundo"); // Eco: Mundo

//--------------------------------------------------------------------------------------
// 6️⃣ YIELD* (DELEGACIÓN)
//--------------------------------------------------------------------------------------

function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield* gen1(); // Delegar a otro generador
  yield 3;
  yield 4;
}

console.log([...gen2()]); // [1, 2, 3, 4]

//--------------------------------------------------------------------------------------
// 7️⃣ CASOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// Rango de números
function* rango(inicio, fin) {
  for (let i = inicio; i <= fin; i++) {
    yield i;
  }
}

console.log([...rango(1, 5)]); // [1, 2, 3, 4, 5]

// ID único
function* generadorID() {
  let id = 1;
  while (true) {
    yield `ID_${id++}`;
  }
}

const ids = generadorID();
console.log(ids.next().value); // "ID_1"
console.log(ids.next().value); // "ID_2"

//--------------------------------------------------------------------------------------
// 8️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ USA GENERADORES PARA:
- Secuencias infinitas
- Iteradores personalizados
- Procesamiento lazy
- Control de flujo complejo

❌ EVITA:
- Código síncrono simple (usa funciones normales)
- Como reemplazo de async/await
*/

console.log(`
╔═══════════════════════════════════════════════════════════╗
║              GENERADORES - RESUMEN                        ║
╠═══════════════════════════════════════════════════════════╣
║ • function* para declarar                                 ║
║ • yield para pausar                                       ║
║ • .next() para continuar                                  ║
║ • Útil para secuencias e iteradores                       ║
╚═══════════════════════════════════════════════════════════╝
`);
