//======================================================================================
// 03 - VAR, LET Y CONST - DIFERENCIAS COMPLETAS
//======================================================================================

/*
EVOLUCIÓN HISTÓRICA:
  • ES5 (2009): Solo existía var
  • ES6 (2015): Se introducen let y const
  
RECOMENDACIÓN ACTUAL:
  ❌ var   → NUNCA usar (obsoleto, causa bugs)
  ✅ const → Usar por defecto (90% de los casos)
  ✅ let   → Usar solo cuando necesites reasignar
*/

//======================================================================================
// 1. VAR (ES5) - ⚠️ OBSOLETO, EVITAR SU USO
//======================================================================================

/*
CARACTERÍSTICAS DE VAR:
  ❌ Ámbito de función o global (NO respeta bloques {})
  ❌ Permite re-declarar (puede sobrescribir sin querer)
  ✅ Permite re-asignar
  ❌ Hoisting (se "eleva" al inicio, causa bugs confusos)
  ❌ Crea propiedades en el objeto global (window)
*/

// ───────────────────────────────────────────────────────────────────────────────
// Problema 1: No respeta el ámbito de bloque
// ───────────────────────────────────────────────────────────────────────────────

console.log("=== PROBLEMA 1: var NO respeta bloques ===");

if (true) {
  var problemaBloqueVar = "¡Accesible fuera del if!";
  console.log("Dentro del if:", problemaBloqueVar);
}
console.log("Fuera del if:", problemaBloqueVar); // ⚠️ ¡Funciona! (no debería)

// Comparación con let
if (true) {
  let bloqueLetOk = "Solo dentro del if";
  console.log("Dentro del if:", bloqueLetOk);
}
// console.log(bloqueLetOk);       // ❌ Error: not defined (comportamiento correcto)

// ───────────────────────────────────────────────────────────────────────────────
// Problema 2: Permite re-declarar (sobrescritura accidental)
// ───────────────────────────────────────────────────────────────────────────────

console.log("\n=== PROBLEMA 2: var permite re-declarar ===");

var nombreVar = "Juan";
console.log("Primera declaración:", nombreVar); // "Juan"

// Días después, otro desarrollador (o tú mismo) escribe:
var nombreVar = "María"; // ⚠️ No da error, sobrescribe
console.log("Segunda declaración:", nombreVar); // "María" (perdiste "Juan")

// Con let/const esto NO es posible
let nombreLet = "Juan";
// let nombreLet = "María";        // ❌ Error: Identifier already declared (protección)

// ───────────────────────────────────────────────────────────────────────────────
// Problema 3: Hoisting (elevación) causa bugs confusos
// ───────────────────────────────────────────────────────────────────────────────

console.log("\n=== PROBLEMA 3: Hoisting con var ===");

console.log("Valor antes de declarar:", miVar); // undefined (⚠️ no da error)
var miVar = "Hola";
console.log("Valor después de declarar:", miVar); // "Hola"

/*
JavaScript internamente hace esto (hoisting):
  var miVar;                      // Declaración se "eleva" al inicio
  console.log(miVar);             // undefined
  miVar = "Hola";                 // Asignación se queda en su lugar
*/

// Con let/const NO funciona así (más seguro)
// console.log(miLet);             // ❌ Error: Cannot access before initialization
// let miLet = "Hola";

// ───────────────────────────────────────────────────────────────────────────────
// Problema 4: var en bucles (el bug clásico)
// ───────────────────────────────────────────────────────────────────────────────

console.log("\n=== PROBLEMA 4: var en bucles ===");

// ⚠️ Bug clásico con var
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var en bucle:", i); // Imprime "3" tres veces (⚠️ bug)
  }, 100);
}

// ✅ Con let funciona correctamente
for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("let en bucle:", j); // Imprime 0, 1, 2 (✅ correcto)
  }, 200);
}

// ───────────────────────────────────────────────────────────────────────────────
// Problema 5: Contamina el objeto global
// ───────────────────────────────────────────────────────────────────────────────

var variableGlobal = "contamina window";
console.log("\nvar crea propiedad en window:", window.variableGlobal); // "contamina window"

let variableGlobalLet = "no contamina";
console.log("let NO crea propiedad en window:", window.variableGlobalLet); // undefined

//======================================================================================
// 2. LET (ES6) - ✅ USAR CUANDO NECESITES REASIGNAR
//======================================================================================

/*
CARACTERÍSTICAS DE LET:
  ✅ Ámbito de bloque {} (predecible y seguro)
  ❌ NO permite re-declarar en el mismo ámbito
  ✅ SÍ permite re-asignar el valor
  ✅ NO tiene hoisting problemático
  ✅ NO contamina el objeto global
*/

console.log("\n=== LET: Comportamiento correcto ===");

let nombreLet2 = "Carlos";
// let nombreLet2 = "Ana";          // ❌ Error: already declared (protección)

nombreLet2 = "Ana"; // ✅ OK: re-asignar está permitido
console.log("Nombre reasignado:", nombreLet2);

// ───────────────────────────────────────────────────────────────────────────────
// let respeta el ámbito de bloque
// ───────────────────────────────────────────────────────────────────────────────

{
  let dentroBloque = "solo aquí";
  console.log("Dentro del bloque:", dentroBloque);
}
// console.log(dentroBloque);       // ❌ Error: not defined (comportamiento correcto)

// ───────────────────────────────────────────────────────────────────────────────
// Casos de uso típicos de let
// ───────────────────────────────────────────────────────────────────────────────

// ✅ Contadores
let contador = 0;
for (let i = 0; i < 5; i++) {
  contador += i;
}
console.log("Contador final:", contador);

// ✅ Variables que cambian según condiciones
let mensaje;
const hora = new Date().getHours();
if (hora < 12) {
  mensaje = "Buenos días";
} else if (hora < 20) {
  mensaje = "Buenas tardes";
} else {
  mensaje = "Buenas noches";
}
console.log("Mensaje:", mensaje);

// ✅ Acumuladores
let suma = 0;
const numeros = [1, 2, 3, 4, 5];
for (const num of numeros) {
  suma += num;
}
console.log("Suma:", suma);

//======================================================================================
// 3. CONST (ES6) - ✅ USAR POR DEFECTO
//======================================================================================

/*
CARACTERÍSTICAS DE CONST:
  ✅ Ámbito de bloque {} (igual que let)
  ❌ NO permite re-declarar
  ❌ NO permite re-asignar la referencia
  ✅ DEBE inicializarse al declararse
  ⚠️ Permite modificar propiedades de objetos/arrays
*/

console.log("\n=== CONST: Valores inmutables (referencias) ===");

const PI = 3.14159;
const GRAVEDAD = 9.81;
// const SIN_INICIALIZAR;           // ❌ Error: Missing initializer

// PI = 3.14;                       // ❌ Error: Assignment to constant variable

// ───────────────────────────────────────────────────────────────────────────────
// const también respeta el ámbito de bloque
// ───────────────────────────────────────────────────────────────────────────────

if (true) {
  const dentroDelIf = "solo aquí";
  console.log("Dentro del if:", dentroDelIf);
}
// console.log(dentroDelIf);        // ❌ Error: not defined

//======================================================================================
// ⚠️ IMPORTANTE: CONST CON OBJETOS Y ARRAYS
//======================================================================================

console.log("\n=== CONST con objetos y arrays ===");

/*
⚠️ CONCEPTO CLAVE:
const impide REASIGNAR la variable, pero NO hace el contenido inmutable.
Puedes modificar propiedades de objetos y elementos de arrays.
*/

// ───────────────────────────────────────────────────────────────────────────────
// OBJETOS: const permite modificar propiedades
// ───────────────────────────────────────────────────────────────────────────────

const persona = {
  nombre: "Juan",
  edad: 25,
};

console.log("Objeto original:", persona);

// ✅ PERMITIDO: Modificar propiedades existentes
persona.nombre = "Carlos";
persona.edad = 30;
console.log("Propiedades modificadas:", persona);

// ✅ PERMITIDO: Añadir nuevas propiedades
persona.ciudad = "Madrid";
persona.profesion = "Desarrollador";
console.log("Propiedades añadidas:", persona);

// ✅ PERMITIDO: Eliminar propiedades
delete persona.ciudad;
console.log("Propiedad eliminada:", persona);

// ❌ NO PERMITIDO: Reasignar el objeto completo
// persona = { nombre: "Ana" };     // ❌ Error: Assignment to constant variable
// persona = {};                    // ❌ Error: Assignment to constant variable

// ───────────────────────────────────────────────────────────────────────────────
// ARRAYS: const permite modificar elementos
// ───────────────────────────────────────────────────────────────────────────────

const colores = ["rojo", "verde", "azul"];
console.log("\nArray original:", colores);

// ✅ PERMITIDO: Modificar elementos
colores[0] = "amarillo";
console.log("Elemento modificado:", colores);

// ✅ PERMITIDO: Añadir elementos
colores.push("naranja");
colores.push("morado");
console.log("Elementos añadidos:", colores);

// ✅ PERMITIDO: Eliminar elementos
colores.pop();
console.log("Elemento eliminado:", colores);

// ✅ PERMITIDO: Otros métodos de array
colores.sort();
colores.reverse();
console.log("Array modificado:", colores);

// ❌ NO PERMITIDO: Reasignar el array completo
// colores = [];                    // ❌ Error: Assignment to constant variable
// colores = ["rosa"];              // ❌ Error: Assignment to constant variable

// ───────────────────────────────────────────────────────────────────────────────
// ¿Cómo hacer objetos/arrays realmente inmutables?
// ───────────────────────────────────────────────────────────────────────────────

console.log("\n=== Hacer objetos inmutables ===");

// Object.freeze() hace el objeto inmutable (nivel superficial)
const configuracion = Object.freeze({
  puerto: 3000,
  host: "localhost",
});

// configuracion.puerto = 4000;     // ⚠️ No da error pero NO cambia el valor
console.log("Config después de intentar cambiar:", configuracion); // { puerto: 3000, ... }

// Para arrays inmutables
const numerosInmutables = Object.freeze([1, 2, 3]);
// numerosInmutables.push(4);       // ❌ Error: Cannot add property
// numerosInmutables[0] = 10;       // ⚠️ No da error pero NO cambia

//======================================================================================
// COMPARACIÓN VISUAL Y TABLA RESUMEN
//======================================================================================

console.log("\n=== TABLA COMPARATIVA ===");

/*
┌─────────────────┬────────────┬────────────┬──────────────┐
│ Característica  │    var     │    let     │    const     │
├─────────────────┼────────────┼────────────┼──────────────┤
│ Ámbito          │ Función    │  Bloque    │   Bloque     │
│ Re-declarar     │     ✅     │     ❌     │      ❌      │
│ Re-asignar      │     ✅     │     ✅     │      ❌      │
│ Hoisting        │ Sí (⚠️)    │     No     │      No      │
│ Debe inicializar│     No     │     No     │   Sí ✅      │
│ Temporal Dead   │     No     │   Sí ✅    │   Sí ✅      │
│ Global (window) │   Sí ⚠️    │     No     │      No      │
│ Uso recomendado │  ❌ Nunca  │  A veces   │  ✅ Siempre  │
└─────────────────┴────────────┴────────────┴──────────────┘

TEMPORAL DEAD ZONE (TDZ):
Zona entre el inicio del bloque y la declaración donde
no puedes acceder a la variable. let y const protegen con esto.
*/

//======================================================================================
// EJEMPLOS PRÁCTICOS COMPARATIVOS
//======================================================================================

console.log("\n=== EJEMPLOS PRÁCTICOS ===");

// ───────────────────────────────────────────────────────────────────────────────
// Escenario 1: Contador simple
// ───────────────────────────────────────────────────────────────────────────────

// ❌ Con var (problemático)
var contadorVar = 0;
for (var k = 0; k < 3; k++) {
  contadorVar++;
}
console.log("var - contador:", contadorVar, "k:", k); // k es accesible (⚠️ bug)

// ✅ Con let (correcto)
let contadorLet = 0;
for (let m = 0; m < 3; m++) {
  contadorLet++;
}
console.log("let - contador:", contadorLet);
// console.log(m);                  // ❌ Error: m is not defined (✅ correcto)

// ───────────────────────────────────────────────────────────────────────────────
// Escenario 2: Configuración de aplicación
// ───────────────────────────────────────────────────────────────────────────────

// ✅ Usar const para configuración que no cambia
const CONFIG = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  reintentos: 3,
};

// Puedes modificar propiedades si es necesario
CONFIG.timeout = 10000; // ✅ OK si necesitas cambiarlo

// Pero no puedes reasignar
// CONFIG = { nuevo: "objeto" };   // ❌ Error

// ───────────────────────────────────────────────────────────────────────────────
// Escenario 3: Funciones con ámbitos
// ───────────────────────────────────────────────────────────────────────────────

function ejemploAmbitos() {
  const CONSTANTE = "no cambia";
  let variable = "puede cambiar";

  if (true) {
    const CONSTANTE = "diferente constante"; // ✅ Nuevo ámbito, OK
    let variable = "diferente variable"; // ✅ Nuevo ámbito, OK
    console.log("Dentro del if:", CONSTANTE, variable);
  }

  console.log("Fuera del if:", CONSTANTE, variable); // Valores originales
}

ejemploAmbitos();

//======================================================================================
// REGLA DE ORO Y DECISIONES
//======================================================================================

console.log("\n=== REGLA DE ORO ===");

/*
🎯 GUÍA DE DECISIÓN:

1. Por defecto, SIEMPRE usa const
   ✅ Hace tu código más predecible
   ✅ Previene bugs de reasignación accidental
   ✅ Comunica intención: "este valor no debe cambiar"

2. Cambia a let solo si necesitas reasignar
   ✅ Contadores (i, j, k en bucles)
   ✅ Acumuladores (suma, total)
   ✅ Variables que cambian según lógica

3. NUNCA uses var
   ❌ Obsoleto desde ES6 (2015)
   ❌ Causa bugs de scope
   ❌ Hoisting confuso
   ❌ Contamina el scope global

💡 VENTAJAS DE const > let:
  • Código más fácil de entender
  • Menos errores en tiempo de ejecución
  • Mejor rendimiento del motor JavaScript
  • Facilita el debugging
  • Código más mantenible
*/

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo de código bien estructurado
// ───────────────────────────────────────────────────────────────────────────────

function calcularPrecioFinal(precioBase, descuento, iva) {
  // ✅ Constantes que no cambian
  const IVA_PORCENTAJE = iva || 0.21;
  const DESCUENTO_APLICADO = descuento || 0;

  // ✅ Cálculos intermedios (no cambian después de asignarse)
  const precioConDescuento = precioBase * (1 - DESCUENTO_APLICADO);
  const precioConIva = precioConDescuento * (1 + IVA_PORCENTAJE);

  // ✅ Resultado final
  const precioFinal = Math.round(precioConIva * 100) / 100;

  return {
    precioBase,
    descuento: DESCUENTO_APLICADO,
    iva: IVA_PORCENTAJE,
    precioFinal,
  };
}

console.log("\nEjemplo de función:", calcularPrecioFinal(100, 0.1, 0.21));

//======================================================================================
// RESUMEN Y CHECKLIST
//======================================================================================

/*
✅ USAR:
  • const por defecto (90% de los casos)
  • let solo cuando necesites reasignar (10%)

❌ EVITAR:
  • var (siempre, sin excepciones)

📋 CHECKLIST:
  ✓ ¿El valor nunca cambia? → const
  ✓ ¿Es un objeto/array que modificas? → const (la referencia no cambia)
  ✓ ¿Es un contador/acumulador? → let
  ✓ ¿Necesitas reasignar? → let
  ✓ ¿Estás usando var? → Cámbialo a const o let

🎓 RECORDAR:
  • const NO hace inmutables los objetos/arrays, solo la referencia
  • let y const tienen ámbito de bloque {}
  • Temporal Dead Zone protege contra uso antes de declarar
  • Usar const comunica que el valor no debe cambiar
*/

console.log("\n✅ Archivo de tipos de variables cargado correctamente");
