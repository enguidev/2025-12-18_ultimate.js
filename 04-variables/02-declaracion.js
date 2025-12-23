//======================================================================================
// 02 - DECLARACIÓN DE VARIABLES EN JAVASCRIPT
//======================================================================================

/*
En JavaScript hay 3 formas de declarar variables:
  ❌ var (ES5)   - OBSOLETO, evitar su uso
  ✅ let (ES6)   - Para variables que necesitan cambiar de valor
  ✅ const (ES6) - Para valores que NO cambian (RECOMENDADO POR DEFECTO)

REGLA DE ORO: Usa const por defecto, let solo cuando necesites reasignar
*/

//======================================================================================
// DECLARACIÓN SIMPLE
//======================================================================================

// ─────────────────────────────────────────────────────────────────────────────────
// Declaración básica con inicialización
// ─────────────────────────────────────────────────────────────────────────────────

let nombre = "Hola desde variables";
console.log(nombre); // "Hola desde variables"

const apellido = "García";
console.log(apellido); // "García"

// ─────────────────────────────────────────────────────────────────────────────────
// Diferencia entre let y const en la práctica
// ─────────────────────────────────────────────────────────────────────────────────

let contador = 0; // ✅ let: vamos a cambiar este valor
contador = 1; // ✅ OK
contador = 2; // ✅ OK
contador++; // ✅ OK

const PI = 3.14159; // ✅ const: este valor nunca cambia
// PI = 3.14;                     // ❌ Error: Assignment to constant variable

//======================================================================================
// DECLARACIÓN MÚLTIPLE
//======================================================================================

// ─────────────────────────────────────────────────────────────────────────────────
// Declarar varias variables en una línea (NO RECOMENDADO)
// ─────────────────────────────────────────────────────────────────────────────────

// ⚠️ Posible pero poco legible
let apellido1, calle, ciudad;

// ⚠️ También funciona pero es confuso
let edad = 25,
  peso = 70,
  altura = 1.75;

// ─────────────────────────────────────────────────────────────────────────────────
// Forma recomendada: una variable por línea (MÁS LEGIBLE)
// ─────────────────────────────────────────────────────────────────────────────────

// ✅ Mucho más claro y mantenible
let ciudad2 = "Madrid";
let codigoPostal = "28001";
let provincia = "Madrid";

// ✅ También puedes agruparlas visualmente
let edad2 = 25;
let peso2 = 70;
let altura2 = 1.75;

// ✅ Para constantes relacionadas
const ANCHO_PANTALLA = 1920;
const ALTO_PANTALLA = 1080;
const RATIO_ASPECTO = ANCHO_PANTALLA / ALTO_PANTALLA;

// ─────────────────────────────────────────────────────────────────────────────────
// Declaración múltiple con const
// ─────────────────────────────────────────────────────────────────────────────────

// ⚠️ Funciona pero no es claro
const nombre2 = "Ana",
  email = "ana@email.com",
  telefono = "123456789";

// ✅ Mejor así
const nombre3 = "Ana";
const email2 = "ana@email.com";
const telefono2 = "123456789";

//======================================================================================
// DECLARACIÓN SIN INICIALIZACIÓN
//======================================================================================

// ─────────────────────────────────────────────────────────────────────────────────
// let permite declarar sin inicializar
// ─────────────────────────────────────────────────────────────────────────────────

let sinValor;
console.log(sinValor); // undefined
console.log(typeof sinValor); // "undefined"

// La variable existe pero no tiene valor aún
sinValor = "Ahora sí tiene valor";
console.log(sinValor); // "Ahora sí tiene valor"

// ─────────────────────────────────────────────────────────────────────────────────
// Casos de uso válidos para declarar sin inicializar
// ─────────────────────────────────────────────────────────────────────────────────

// ✅ Cuando el valor depende de una condición
let mensaje;
if (new Date().getHours() < 12) {
  mensaje = "Buenos días";
} else {
  mensaje = "Buenas tardes";
}
console.log(mensaje);

// ✅ Cuando el valor se asigna en un bucle
let resultado;
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    resultado = i;
    break;
  }
}
console.log(resultado); // 5

// ✅ Cuando el valor viene de una función
let datosUsuario;
function cargarDatos() {
  datosUsuario = { nombre: "Juan", edad: 30 };
}
cargarDatos();
console.log(datosUsuario);

// ─────────────────────────────────────────────────────────────────────────────────
// const DEBE inicializarse al declararse
// ─────────────────────────────────────────────────────────────────────────────────

// const sinInicializar;           // ❌ Error: Missing initializer in const declaration
const conValor = 100; // ✅ OK

// ─────────────────────────────────────────────────────────────────────────────────
// Preferir inicialización cuando sea posible
// ─────────────────────────────────────────────────────────────────────────────────

// ❌ Evitar (undefined innecesario)
let contador2;
contador2 = 0;

// ✅ Mejor (más claro)
let contador3 = 0;

// ❌ Evitar (múltiples pasos)
let precio;
let cantidad;
precio = 10;
cantidad = 5;

// ✅ Mejor (directo)
let precio2 = 10;
let cantidad2 = 5;
let total = precio2 * cantidad2;

//======================================================================================
// DESTRUCTURING (ASIGNACIÓN DESESTRUCTURADA)
//======================================================================================

// ─────────────────────────────────────────────────────────────────────────────────
// Extraer valores de arrays
// ─────────────────────────────────────────────────────────────────────────────────

const colores = ["rojo", "verde", "azul"];

// ❌ Forma tradicional (verbosa)
const color1 = colores[0];
const color2 = colores[1];
const color3 = colores[2];

// ✅ Destructuring (moderna y concisa)
const [primero, segundo, tercero] = colores;
console.log(primero); // "rojo"
console.log(segundo); // "verde"
console.log(tercero); // "azul"

// Puedes saltar elementos
const [rojo, , azul] = colores;
console.log(rojo, azul); // "rojo" "azul"

// ─────────────────────────────────────────────────────────────────────────────────
// Extraer propiedades de objetos
// ─────────────────────────────────────────────────────────────────────────────────

const persona = {
  nombre: "Carlos",
  edad: 28,
  ciudad: "Barcelona",
  profesion: "Desarrollador",
};

// ❌ Forma tradicional
const nombre4 = persona.nombre;
const edad3 = persona.edad;
const ciudad3 = persona.ciudad;

// ✅ Destructuring
const { nombre: nombre5, edad: edad4, ciudad: ciudad4 } = persona;

// ✅ Si el nombre de la variable es igual a la propiedad
const { profesion } = persona;
console.log(profesion); // "Desarrollador"

// ✅ Múltiples propiedades
const { nombre: n, edad: e } = persona;
console.log(n, e); // "Carlos" 28

// ✅ Valores por defecto si la propiedad no existe
const { apellido2 = "Desconocido", pais = "España" } = persona;
console.log(apellido2); // "Desconocido"
console.log(pais); // "España"

//======================================================================================
// ÁMBITO Y ALCANCE (SCOPE)
//======================================================================================

// ─────────────────────────────────────────────────────────────────────────────────
// Variables globales vs locales
// ─────────────────────────────────────────────────────────────────────────────────

const global = "Visible en todas partes";

function miFuncion() {
  const local = "Solo visible dentro de la función";
  console.log(global); // ✅ Puede acceder a global
  console.log(local); // ✅ Puede acceder a local
}

miFuncion();
console.log(global); // ✅ Puede acceder a global
// console.log(local);            // ❌ Error: local is not defined

// ─────────────────────────────────────────────────────────────────────────────────
// Ámbito de bloque con let y const
// ─────────────────────────────────────────────────────────────────────────────────

if (true) {
  const dentroDelIf = "Solo aquí";
  console.log(dentroDelIf); // ✅ Funciona
}
// console.log(dentroDelIf);      // ❌ Error: not defined

// Lo mismo aplica a bucles
for (let i = 0; i < 3; i++) {
  const dentroDelFor = i;
  console.log(dentroDelFor); // ✅ Funciona
}
// console.log(i);                // ❌ Error: i is not defined
// console.log(dentroDelFor);     // ❌ Error: not defined

//======================================================================================
// BUENAS PRÁCTICAS
//======================================================================================

/*
✅ RECOMENDACIONES:

1. USA CONST POR DEFECTO
   - Hace tu código más predecible
   - Previene reasignaciones accidentales
   - Indica intención clara: "este valor no cambia"

2. USA LET SOLO CUANDO NECESITES REASIGNAR
   - Contadores en bucles
   - Variables que acumulan valores
   - Variables que cambian según condiciones

3. DECLARA UNA VARIABLE POR LÍNEA
   - Más fácil de leer
   - Más fácil de modificar
   - Más fácil de comentar
   - Mejor para sistemas de control de versiones (Git)

4. INICIALIZA AL DECLARAR CUANDO SEA POSIBLE
   - Evita valores undefined innecesarios
   - Hace el código más claro
   - Reduce errores

5. DECLARA LAS VARIABLES AL PRINCIPIO DEL BLOQUE
   - Más fácil de encontrar
   - Evita problemas de scope
   - Mejora la legibilidad

6. AGRUPA LAS DECLARACIONES RELACIONADAS
   - Variables de configuración juntas
   - Variables de estado juntas
   - Constantes juntas
*/

// ─────────────────────────────────────────────────────────────────────────────────
// ❌ EJEMPLO DE MALAS PRÁCTICAS
// ─────────────────────────────────────────────────────────────────────────────────

function ejemploMalo() {
  var x, y, z; // ⚠️ Usar var
  x = 10; // ⚠️ Declarar sin inicializar
  let a = 1,
    b = 2,
    c = 3; // ⚠️ Múltiples en una línea

  // código...

  let otraVariable = 5; // ⚠️ Declarar en medio del código
}

// ─────────────────────────────────────────────────────────────────────────────────
// ✅ EJEMPLO DE BUENAS PRÁCTICAS
// ─────────────────────────────────────────────────────────────────────────────────

function ejemploBueno() {
  // Constantes de configuración
  const LIMITE = 100;
  const INCREMENTO = 5;

  // Variables de estado (agrupadas)
  let contador = 0;
  let estaActivo = true;
  let resultado = null;

  // Variables calculadas
  const total = LIMITE * INCREMENTO;

  // ... resto del código ...

  return { contador, total, estaActivo };
}

//======================================================================================
// COMPARACIÓN PRÁCTICA
//======================================================================================

// ─────────────────────────────────────────────────────────────────────────────────
// Escenario: Calcular descuento en compra
// ─────────────────────────────────────────────────────────────────────────────────

// ❌ Versión con problemas
function calcularDescuentoMalo(precio) {
  var descuento; // ⚠️ var + sin inicializar
  var precioFinal;

  if (precio > 100) {
    descuento = 0.2;
  } else {
    descuento = 0.1;
  }

  precioFinal = precio - precio * descuento;
  return precioFinal;
}

// ✅ Versión mejorada
function calcularDescuentoBueno(precio) {
  const descuento = precio > 100 ? 0.2 : 0.1;
  const precioFinal = precio - precio * descuento;
  return precioFinal;
}

// ✅ Versión óptima (más concisa)
function calcularDescuentoOptimo(precio) {
  const descuento = precio > 100 ? 0.2 : 0.1;
  return precio * (1 - descuento);
}

// Pruebas
console.log("Descuento para 150€:", calcularDescuentoBueno(150)); // 120
console.log("Descuento para 50€:", calcularDescuentoBueno(50)); // 45

//======================================================================================
// RESUMEN Y CHECKLIST
//======================================================================================

/*
✓ Usa const por defecto (valor no cambia)
✓ Usa let solo cuando necesites reasignar
✓ Una variable por línea
✓ Inicializa al declarar cuando sea posible
✓ Declara al principio del bloque
✓ Agrupa declaraciones relacionadas
✓ Usa destructuring para extraer valores
✓ Nombres descriptivos (ver archivo 01-nombrado.js)

❌ No uses var (obsoleto y problemático)
❌ No declares múltiples variables en una línea
❌ No declares variables en medio del código
❌ No dejes variables sin inicializar sin motivo
*/

console.log("✅ Archivo de declaración de variables cargado correctamente");
