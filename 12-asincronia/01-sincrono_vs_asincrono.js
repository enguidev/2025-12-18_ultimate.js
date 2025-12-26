//==============================================================================
// 01 - SÍNCRONO VS ASÍNCRONO
//==============================================================================

console.log("=== CÓDIGO SÍNCRONO (BLOQUEANTE) ===\n");

/*
🔄 SÍNCRONO = Una tarea después de otra (bloquea)
Cada línea espera a que la anterior termine
*/

console.log("Inicio");

// Simulación de tarea lenta (BLOQUEANTE)
function tareaLentaSincrona() {
  console.log("Iniciando tarea lenta...");

  // Bloquea durante 3 segundos
  const inicio = Date.now();
  while (Date.now() - inicio < 3000) {
    // Esperando... (bloquea TODO)
  }

  console.log("Tarea lenta terminada");
  return "Resultado";
}

console.log("Antes de la tarea lenta");
const resultado = tareaLentaSincrona(); // BLOQUEA aquí por 3 segundos
console.log("Después de la tarea lenta");
console.log("Resultado:", resultado);
console.log("Fin");

// Resultado:
// Inicio
// Antes de la tarea lenta
// Iniciando tarea lenta...
// [ESPERA 3 SEGUNDOS - TODO BLOQUEADO]
// Tarea lenta terminada
// Después de la tarea lenta
// Resultado: Resultado
// Fin

console.log("\n=== CÓDIGO ASÍNCRONO (NO BLOQUEANTE) ===\n");

/*
⚡ ASÍNCRONO = Las tareas no bloquean
JavaScript continúa ejecutando mientras esperan
*/

console.log("Inicio");

// Simulación de tarea lenta (NO BLOQUEANTE)
function tareaLentaAsincrona() {
  console.log("Iniciando tarea asíncrona...");

  setTimeout(() => {
    console.log("Tarea asíncrona terminada");
  }, 3000);

  console.log("Tarea asíncrona programada");
}

console.log("Antes de la tarea asíncrona");
tareaLentaAsincrona(); // NO BLOQUEA, continúa inmediatamente
console.log("Después de la tarea asíncrona");
console.log("Fin");

// Resultado (inmediato):
// Inicio
// Antes de la tarea asíncrona
// Iniciando tarea asíncrona...
// Tarea asíncrona programada
// Después de la tarea asíncrona
// Fin
// [DESPUÉS DE 3 SEGUNDOS]
// Tarea asíncrona terminada

console.log("\n=== EJEMPLO REAL: PETICIÓN HTTP ===\n");

// ❌ Simulación SÍNCRONA (bloquearía el navegador)
console.log("--- Simulación Síncrona (MAL) ---");
console.log("1. Inicio de página");
console.log("2. Haciendo petición HTTP...");
console.log("   [BLOQUEADO - usuario no puede hacer nada]");
console.log("   [Esperando 2 segundos...]");
// ... navegador congelado ...
console.log("3. Datos recibidos");
console.log("4. Renderizar datos");

// ✅ ASÍNCRONO (correcto)
console.log("\n--- Asíncrono (BIEN) ---");
console.log("1. Inicio de página");
console.log("2. Hacer petición HTTP (en background)");
console.log("3. Mostrar spinner de carga");
console.log("4. Usuario puede seguir navegando");
console.log("   [No bloqueado - página funcional]");

setTimeout(() => {
  console.log("5. Datos recibidos (después de 2s)");
  console.log("6. Ocultar spinner");
  console.log("7. Renderizar datos");
}, 2000);

console.log("\n=== ANALOGÍA DEL RESTAURANTE ===\n");

/*
🍽️ RESTAURANTE SÍNCRONO (ineficiente):
1. Mesero toma orden del cliente 1
2. Espera en cocina hasta que esté lista (bloqueado)
3. Sirve al cliente 1
4. Toma orden del cliente 2
5. Espera en cocina otra vez (bloqueado)
6. Sirve al cliente 2
➡️ MUY LENTO, clientes molestos

🍽️ RESTAURANTE ASÍNCRONO (eficiente):
1. Mesero toma orden del cliente 1
2. Envía orden a cocina (continúa sin esperar)
3. Toma orden del cliente 2
4. Envía orden a cocina
5. Cuando cocina avisa, sirve a cliente 1
6. Cuando cocina avisa, sirve a cliente 2
➡️ RÁPIDO Y EFICIENTE
*/

console.log("Restaurante Asíncrono:");
console.log("Mesero: Toma orden cliente 1");
console.log("Mesero: Envía a cocina");
console.log("Mesero: Toma orden cliente 2");
console.log("Mesero: Envía a cocina");
console.log("Mesero: Atiende otras mesas");

setTimeout(() => {
  console.log("Cocina: Orden cliente 1 lista!");
  console.log("Mesero: Sirve cliente 1");
}, 1500);

setTimeout(() => {
  console.log("Cocina: Orden cliente 2 lista!");
  console.log("Mesero: Sirve cliente 2");
}, 2500);

console.log("\n=== OPERACIONES COMUNES ===\n");

// 🔄 SÍNCRONO (Bloqueante)
console.log("Operaciones SÍNCRONAS (bloquean):");
console.log("  • Cálculos matemáticos");
console.log("  • Bucles (for, while)");
console.log("  • Operaciones de strings");
console.log("  • Acceso a variables");

// Ejemplo síncrono
function sumar(a, b) {
  return a + b; // Inmediato, bloqueante
}
console.log("\nResultado síncrono:", sumar(5, 3));

// ⚡ ASÍNCRONO (No bloqueante)
console.log("\nOperaciones ASÍNCRONAS (no bloquean):");
console.log("  • setTimeout / setInterval");
console.log("  • Peticiones HTTP (fetch)");
console.log("  • Lectura de archivos");
console.log("  • Consultas a base de datos");
console.log("  • Event listeners");
console.log("  • Promesas");

// Ejemplo asíncrono con setTimeout
function sumarAsincrono(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

console.log("\nAntes de sumar asíncrono");
sumarAsincrono(5, 3, (resultado) => {
  console.log("Resultado asíncrono:", resultado);
});
console.log("Después de llamar sumarAsincrono (no espera)");

console.log("\n=== EL PROBLEMA DEL BLOQUEO ===\n");

// Simulación de código bloqueante
function calculoPesado() {
  console.log("Inicio cálculo pesado");
  let suma = 0;
  for (let i = 0; i < 1000000000; i++) {
    suma += i;
  }
  console.log("Fin cálculo pesado");
  return suma;
}

console.log("PROBLEMA: Este código bloquearía la UI");
console.log("Si ejecutas calculoPesado(), el navegador se congela");
console.log("El usuario no puede hacer clic, scroll, nada");
console.log("¡MALA EXPERIENCIA!");

// Solución: Web Workers (para cálculos pesados) o dividir trabajo
console.log("\nSOLUCIÓN: Usar asincronía o Web Workers");

console.log("\n=== VENTAJAS Y DESVENTAJAS ===\n");

const comparacion = {
  Síncrono: {
    Ventajas: "Simple, predecible, fácil de debuggear",
    Desventajas: "Bloquea, lento para I/O, mala UX",
    "Cuándo usar": "Operaciones rápidas, cálculos",
  },
  Asíncrono: {
    Ventajas: "No bloquea, mejor rendimiento, mejor UX",
    Desventajas: "Más complejo, callback hell",
    "Cuándo usar": "I/O, HTTP, timers, eventos",
  },
};

console.table(comparacion);

console.log("\n=== DEMOSTRACIÓN VISUAL ===\n");

console.log("Ejecutando código mixto (síncrono + asíncrono):\n");

console.log("1 - Síncrono");

setTimeout(() => {
  console.log("4 - Asíncrono (setTimeout 0ms)");
}, 0);

Promise.resolve().then(() => {
  console.log("3 - Asíncrono (Promise)");
});

console.log("2 - Síncrono");

// Resultado:
// 1 - Síncrono
// 2 - Síncrono
// 3 - Asíncrono (Promise)    <- Microtask queue (prioridad)
// 4 - Asíncrono (setTimeout) <- Task queue

console.log("\n=== EJEMPLO PRÁCTICO: CARGAR DATOS ===\n");

// Simulación de carga de datos

// ❌ MAL: Síncrono (bloquearía)
function cargarDatosSincrono() {
  console.log("Cargando datos...");

  // Simular espera (BLOQUEA)
  const inicio = Date.now();
  while (Date.now() - inicio < 2000) {}

  console.log("Datos cargados");
  return { usuarios: 100 };
}

// ✅ BIEN: Asíncrono (no bloquea)
function cargarDatosAsincrono() {
  console.log("Iniciando carga de datos...");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Datos cargados");
      resolve({ usuarios: 100 });
    }, 2000);
  });
}

// Uso asíncrono
console.log("Antes de cargar");
cargarDatosAsincrono().then((datos) => {
  console.log("Datos recibidos:", datos);
});
console.log("Después de iniciar carga (no bloqueado)");

console.log("\n=== TIMERS EN JAVASCRIPT ===\n");

// setTimeout: ejecutar UNA VEZ después de X tiempo
console.log("setTimeout: Ejecuta una vez después de delay");
const timeout = setTimeout(() => {
  console.log("  ⏱️ Ejecutado después de 2s");
}, 2000);

// Se puede cancelar
// clearTimeout(timeout);

// setInterval: ejecutar REPETIDAMENTE cada X tiempo
console.log("\nsetInterval: Ejecuta repetidamente cada X tiempo");
let contador = 0;
const interval = setInterval(() => {
  contador++;
  console.log(`  🔄 Ejecutado ${contador} vez(ces)`);

  if (contador === 3) {
    clearInterval(interval);
    console.log("  ⛔ Interval detenido");
  }
}, 1000);

console.log("\n=== CALL STACK VISUALIZADO ===\n");

function primera() {
  console.log("  1. Dentro de primera()");
  segunda();
  console.log("  5. De vuelta en primera()");
}

function segunda() {
  console.log("  2. Dentro de segunda()");
  tercera();
  console.log("  4. De vuelta en segunda()");
}

function tercera() {
  console.log("  3. Dentro de tercera()");
}

console.log("Call Stack:");
primera();
console.log("  6. Fin");

/*
Call Stack funciona así (LIFO):
┌─────────────┐
│  tercera()  │  ← 3. Se ejecuta y sale
├─────────────┤
│  segunda()  │  ← 2. Llama a tercera
├─────────────┤
│  primera()  │  ← 1. Llama a segunda
├─────────────┤
│   global    │  ← 0. Código global
└─────────────┘
*/

console.log("\n=== RESUMEN ===");
console.log("✅ Síncrono = secuencial, bloquea");
console.log("✅ Asíncrono = no bloquea, mejor UX");
console.log("✅ JavaScript es single-threaded pero non-blocking");
console.log("✅ Event Loop gestiona tareas asíncronas");
console.log("✅ setTimeout/setInterval = asíncronos");
console.log("✅ Promesas tienen prioridad sobre setTimeout");
console.log("✅ Usa asincronía para I/O, HTTP, timers");
