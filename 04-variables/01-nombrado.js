//======================================================================================
// 01 - NOMBRADO DE VARIABLES EN JAVASCRIPT
//======================================================================================

/*
REGLAS OBLIGATORIAS (si no las sigues, tendrás errores):
  ✓ JavaScript es case sensitive (nombreUsuario ≠ nombreusuario ≠ NOMBREUSUARIO)
  ✓ Solo caracteres alfanuméricos (a-z, A-Z, 0-9), guión bajo _ y símbolo $
  ✓ Deben comenzar con letra, _ o $ (NUNCA con número)
  ✓ No usar palabras reservadas (let, const, if, function, class, return, etc.)
  ✓ No hace falta declarar el tipo (JavaScript tiene tipado dinámico)

RECOMENDACIONES (buenas prácticas):
  ✓ Usa nombres descriptivos que expliquen qué contiene la variable
  ✓ Evita abreviaturas confusas (usa nombreCompleto en vez de nomCom)
  ✓ El _ y $ al principio tienen significados especiales, evítalos sin razón
  ✓ Usa inglés o español consistentemente, no mezcles idiomas
  ✓ Nombres cortos (i, j, k) solo para índices de bucles
*/

//======================================================================================
// CONVENCIONES DE NOMBRADO
//======================================================================================

// ───────────────────────────────────────────────────────────────────────────────────
// 1. camelCase - LA MÁS USADA EN JAVASCRIPT
// ───────────────────────────────────────────────────────────────────────────────────
// Primera palabra en minúscula, resto con mayúscula inicial
// Usar para: variables normales y funciones

let nombreCompleto = "Juan Pérez";
let edadDelUsuario = 25;
let totalDeVentas = 1500.5;
let estaActivo = true;
let fechaDeNacimiento = "1998-05-15";

// Funciones también usan camelCase
function calcularPromedio(numeros) {
  return numeros.reduce((a, b) => a + b) / numeros.length;
}

function obtenerNombreUsuario() {
  return "usuario123";
}

// ───────────────────────────────────────────────────────────────────────────────────
// 2. PascalCase (UpperCamelCase) - PARA CLASES Y CONSTRUCTORES
// ───────────────────────────────────────────────────────────────────────────────────
// Cada palabra empieza con mayúscula (incluyendo la primera)
// Usar para: clases, componentes, constructores

class UsuarioRegistrado {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class CarritoDeCompras {
  constructor() {
    this.productos = [];
  }
}

// En React, los componentes usan PascalCase
// function BotonPrincipal() { return <button>Click</button> }

// ───────────────────────────────────────────────────────────────────────────────────
// 3. UPPER_SNAKE_CASE - PARA CONSTANTES VERDADERAS
// ───────────────────────────────────────────────────────────────────────────────────
// Todas las letras en mayúsculas, palabras separadas por guión bajo
// Usar para: valores que NUNCA cambiarán (constantes matemáticas, configuración)

const PI = 3.14159265359;
const MAX_INTENTOS_LOGIN = 3;
const TIMEOUT_PETICION = 5000;
const API_URL = "https://api.example.com";
const DIAS_SEMANA = 7;
const COLOR_PRIMARIO = "#3498db";
const LIMITE_CARACTERES = 280;

// ⚠️ NO usar UPPER_SNAKE_CASE para objetos o arrays (aunque uses const)
// Estos son referencias constantes pero su contenido puede cambiar
const configuracion = { puerto: 3000, host: "localhost" }; // ✅ Correcto
const datosUsuario = { nombre: "Ana", edad: 30 }; // ✅ Correcto

// ───────────────────────────────────────────────────────────────────────────────────
// 4. snake_case - POCO COMÚN EN JAVASCRIPT
// ───────────────────────────────────────────────────────────────────────────────────
// Palabras separadas por guión bajo, todo en minúsculas
// Más usado en Python, Ruby. En JS solo en casos específicos o bases de datos

let nombre_completo2 = "María López"; // ⚠️ No recomendado en JS
let fecha_de_registro = "2024-01-15"; // ⚠️ No recomendado en JS

// Úsalo solo si trabajas con APIs que devuelven este formato
const respuestaAPI = {
  user_id: 123,
  first_name: "Carlos",
  created_at: "2024-01-15",
};

//======================================================================================
// CASOS ESPECIALES
//======================================================================================

// ───────────────────────────────────────────────────────────────────────────────────
// Variables "privadas" (prefijo _)
// ───────────────────────────────────────────────────────────────────────────────────
// El guión bajo indica que la variable es de uso interno
// ⚠️ Es solo una CONVENCIÓN, no hace nada privado realmente

let _variableInterna = "uso interno";
let _contadorTemporal = 0;
let _cache = {};

class MiClase {
  constructor() {
    this._propiedadPrivada = "secreto"; // Convención: no tocar desde fuera
    this.propiedadPublica = "visible"; // OK para usar desde fuera
  }

  _metodoInterno() {
    // Método que solo debe usarse dentro de la clase
  }
}

// ───────────────────────────────────────────────────────────────────────────────────
// Símbolo $ (jQuery y librerías)
// ───────────────────────────────────────────────────────────────────────────────────
// Técnicamente válido, pero reservado por convención para librerías

let $elemento = document.querySelector(".clase"); // ⚠️ Evitar
let $ = "jQuery"; // jQuery lo usa como alias

// Solo úsalo si estás usando jQuery o quieres indicar que es un elemento DOM
const $boton = document.getElementById("btn"); // OK en contexto jQuery
const $lista = document.querySelectorAll("li"); // OK en contexto jQuery

// ───────────────────────────────────────────────────────────────────────────────────
// Booleanos: prefijos is, has, can, should
// ───────────────────────────────────────────────────────────────────────────────────
let isActive = true; // ✅ Claro: "¿está activo?"
let hasPermission = false; // ✅ Claro: "¿tiene permiso?"
let canEdit = true; // ✅ Claro: "¿puede editar?"
let shouldUpdate = false; // ✅ Claro: "¿debería actualizar?"

// ❌ Evitar nombres ambiguos para booleanos
let activo = true; // ⚠️ Menos claro
let permiso = false; // ⚠️ Menos claro

//======================================================================================
// EJEMPLOS DE NOMBRES VÁLIDOS E INVÁLIDOS
//======================================================================================

// ✅ VÁLIDOS (sintácticamente correctos)
let miVariable;
let _temporal;
let $precio;
let nombre123;
let CONSTANTE_GLOBAL;
let __privado;
let $$elemento;
let a, b, c;
let número; // Acentos son válidos (pero no recomendados)
let αlpha; // Unicode válido (pero no recomendado)

// ❌ INVÁLIDOS (causan errores de sintaxis)
// let 123nombre;                 // ❌ No puede empezar con número
// let mi-variable;               // ❌ El guión (-) no está permitido
// let mi variable;               // ❌ No puede contener espacios
// let let;                       // ❌ Palabra reservada
// let function;                  // ❌ Palabra reservada
// let class;                     // ❌ Palabra reservada
// let return;                    // ❌ Palabra reservada
// let var;                       // ❌ Palabra reservada

//======================================================================================
// PALABRAS RESERVADAS (NO PUEDES USARLAS)
//======================================================================================

/*
Lista completa de palabras reservadas en JavaScript:

break       case        catch       class       const       continue
debugger    default     delete      do          else        export
extends     finally     for         function    if          import
in          instanceof  let         new         return      super
switch      this        throw       try         typeof      var
void        while       with        yield

Futuras reservadas (ES6+):
enum        implements  interface   package     private     protected
public      static      await       

También evita palabras del navegador:
window      document    console     alert       prompt      confirm
*/

//======================================================================================
// COMPARACIÓN DE ESTILOS
//======================================================================================

// Mismo concepto, diferentes estilos:
let nombreCompleto3; // ✅ camelCase (RECOMENDADO para JS)
let NombreCompleto; // ⚠️ PascalCase (solo para clases)
let nombre_completo; // ⚠️ snake_case (no típico en JS)
let NOMBRE_COMPLETO; // ⚠️ UPPER_SNAKE_CASE (solo constantes)

//======================================================================================
// BUENAS PRÁCTICAS Y RECOMENDACIONES
//======================================================================================

// ✅ BUENOS NOMBRES (descriptivos y claros)
let precioConImpuestos;
let listadoDeProductos;
let usuarioAutenticado;
let intentosRestantes;
let emailDelUsuario;

// ❌ MALOS NOMBRES (poco claros o confusos)
let x; // ⚠️ ¿Qué es x?
let temp; // ⚠️ ¿Temporal de qué?
let data; // ⚠️ ¿Qué datos?
let info; // ⚠️ Muy genérico
let cosa; // ⚠️ Sin significado
let a1, a2, a3; // ⚠️ No descriptivo

// ✅ EXCEPCIONES: variables de bucle pueden ser cortas
for (let i = 0; i < 10; i++) {
  // ✅ OK: i es estándar para índices
  console.log(i);
}

// ✅ NOMBRES CON CONTEXTO
function calcularTotal(productos) {
  let subtotal = 0; // ✅ Claro en este contexto
  let impuestos = 0; // ✅ Claro en este contexto
  let total = 0; // ✅ Claro en este contexto

  // ... código ...

  return total;
}

//======================================================================================
// RESUMEN Y CHECKLIST
//======================================================================================

/*
✓ Usa camelCase para variables y funciones normales
✓ Usa PascalCase para clases y constructores
✓ Usa UPPER_SNAKE_CASE solo para constantes verdaderas
✓ Nombres descriptivos que expliquen su propósito
✓ Prefijos is/has/can/should para booleanos
✓ Evita abreviaturas confusas
✓ Consistencia en el estilo de tu código
✓ No uses palabras reservadas
✓ No empieces con números
✓ Evita _ y $ sin motivo específico

❌ No uses var (obsoleto)
❌ No mezcles estilos de nombrado
❌ No uses nombres de una letra (excepto índices)
❌ No uses nombres genéricos (data, info, temp)
❌ No uses acentos ni caracteres especiales
*/

console.log("✅ Archivo de convenciones de nombrado cargado correctamente");
