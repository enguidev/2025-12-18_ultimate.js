//--------------------------------------------------------------------------------------
// REGLAS GENERALES PARA NOMBRAR VARIABLES
//--------------------------------------------------------------------------------------

/*
REGLAS OBLIGATORIAS:
  - JavaScript es case sensitive (distingue mayúsculas de minúsculas)
  - Solo puedes usar caracteres alfanuméricos (0-9, a-z, A-Z), guión bajo _ y símbolo $
  - Deben comenzar con letra, guión bajo _ o símbolo $ (nunca con número)
  - No usar palabras reservadas (let, const, if, function, class, etc.)
  - No hace falta declarar el tipo (tipado dinámico)

RECOMENDACIONES:
  - El _ y $ al principio tienen significados especiales, evítalos a menos que sea intencional
  - Usa nombres descriptivos e intuitivos que indiquen claramente su propósito
  - Por convención se usa camelCase para variables y funciones
*/

//--------------------------------------------------------------------------------------
// CONVENCIONES DE NOMBRADO
//--------------------------------------------------------------------------------------

// camelCase (la más usada): primera palabra minúscula, resto con mayúscula inicial
let nombrePersonal;
let totalDeVentas;
let edadDelUsuario;

// PascalCase o UpperCamelCase: cada palabra empieza con mayúscula
// Se usa para clases y constructores (lo veremos más adelante)
let NombrePersonal;

// snake_case: palabras separadas por guión bajo
// Menos común en JavaScript, más usado en Python
let nombre_personal;

// UPPER_SNAKE_CASE: para constantes con valores inmutables
const DEFAULT_TIMEOUT = 3000;
const MAX_USERS = 100;
const API_URL = "https://api.example.com";

// Para constantes que son objetos o referencias, se usa camelCase
const config = { port: 3000 };
const userData = { name: "Ana" };

// Variables "privadas": prefijo _ (convención, no es realmente privado)
let _privateVar = "secreto";
let _internalCounter = 0;

// Símbolo $ (válido pero poco recomendado, reservado para bibliotecas como jQuery)
let $elemento = document.querySelector(".clase");
let $ = "jQuery"; // jQuery usa $ como identificador

//--------------------------------------------------------------------------------------
// EJEMPLOS DE NOMBRES VÁLIDOS E INVÁLIDOS
//--------------------------------------------------------------------------------------

// ✅ VÁLIDOS
let miVariable;
let _temporal;
let $precio;
let nombre123;
let CONSTANTE_GLOBAL;

// ❌ INVÁLIDOS
// let 123nombre;        // No puede empezar con número
// let mi-variable;      // No puede contener guiones
// let mi variable;      // No puede contener espacios
// let let;              // Palabra reservada
// let function;         // Palabra reservada
