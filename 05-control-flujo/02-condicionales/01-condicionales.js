//======================================
// GUÍA COMPLETA DE CONDICIONALES EN JAVASCRIPT
//======================================

//------IF BÁSICO------//

/*
    if permite la ejecución de código dependiendo de una condición
    puede ir acompañado de else o no.
    Podemos usar switch cuando evaluemos varios valores.
*/

if (10 > 5) console.log("La condición es cierta");

if (10 < 5) console.log("La condición es cierta");
else console.log("La condición es falsa");

//------IF ELSE------//

//Si ejecutamos más de una instrucción las ponemos en un bloque de contenido {}
let edad = 20;
if (edad >= 18) {
  console.log("Eres mayor de edad");
  console.log("Ya puedes conducir");
} else {
  console.log("Eres menor de edad");
  console.log("No puedes conducir");
}

//------IF, ELSE IF y ELSE------//

let edad2 = 15;

if (edad2 > 17) {
  console.log("Usuario mayor de edad");
} else if (edad2 > 13) {
  console.log("Usuario necesita entrar acompañado de sus padres");
} else {
  console.log("Usuario menor de edad");
}

//------SWITCH------//

let letra = "A";
switch (letra) {
  case "A":
    console.log("Switch dice: la letra es A");
    break;
  case "B":
    console.log("Switch dice: la letra es B");
    break;
  case "C":
    console.log("Switch dice: la letra es C");
    break;
  default:
    console.log("Switch dice: la letra no es ni A, ni B, ni C");
    break;
}

//------SWITCH SIN BREAK (FALL-THROUGH)------//

let dia = "Lunes";
switch (dia) {
  case "Lunes":
  case "Martes":
  case "Miércoles":
  case "Jueves":
  case "Viernes":
    console.log("Es día laboral");
    break;
  case "Sábado":
  case "Domingo":
    console.log("Es fin de semana");
    break;
  default:
    console.log("Día no válido");
}

//------OPERADOR TERNARIO------//

// Sintaxis: condición ? valorSiTrue : valorSiFalse
let edad3 = 25;
let mensaje = edad3 >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);

// Ternario anidado (usar con moderación)
let nota = 85;
let calificacion = nota >= 90 ? "A" : nota >= 80 ? "B" : nota >= 70 ? "C" : "F";
console.log("Calificación:", calificacion);

//------VALORES TRUTHY Y FALSY------//

/*
    Valores Falsy (se evalúan como false):
    - false
    - 0
    - "" (string vacío)
    - null
    - undefined
    - NaN
    
    Todos los demás valores son Truthy
*/

let nombre = "";
if (!nombre) {
  console.log("El nombre está vacío");
}

let usuarios = [];
if (usuarios.length) {
  console.log("Hay usuarios");
} else {
  console.log("No hay usuarios");
}

//------OPERADORES LÓGICOS------//

// AND (&&) - Ambas condiciones deben ser verdaderas
let edad4 = 25;
let tieneLicencia = true;

if (edad4 >= 18 && tieneLicencia) {
  console.log("Puede conducir");
}

// OR (||) - Al menos una condición debe ser verdadera
let esFinDeSemana = true;
let esFeriado = false;

if (esFinDeSemana || esFeriado) {
  console.log("No hay que trabajar");
}

// NOT (!) - Niega una condición
let estaLloviendo = false;
if (!estaLloviendo) {
  console.log("Puedes salir sin paraguas");
}

//------SHORT-CIRCUIT EVALUATION------//

// Con && - se ejecuta la segunda parte solo si la primera es true
let usuario = { nombre: "Ana" };
usuario && console.log("Usuario existe:", usuario.nombre);

// Con || - se ejecuta la segunda parte solo si la primera es false
let nombreUsuario = "" || "Invitado";
console.log("Nombre:", nombreUsuario);

//------NULLISH COALESCING (??)------//

// Solo considera null o undefined como falsy
let valor1 = 0 ?? 10; // resultado: 0
let valor2 = null ?? 10; // resultado: 10
let valor3 = undefined ?? 10; // resultado: 10

console.log("Valor con ??:", valor1, valor2, valor3);

//------OPTIONAL CHAINING (?.)------//

// Evita errores al acceder a propiedades que pueden no existir
let persona = {
  nombre: "Juan",
  direccion: {
    calle: "Principal",
  },
};

console.log(persona?.direccion?.calle); // "Principal"
console.log(persona?.telefono?.numero); // undefined (sin error)

//======================================
// EJERCICIOS PRÁCTICOS
//======================================

//------EJERCICIO 1: Validar índice de array------//

function getByIdx(arr, idx) {
  if (idx < 0 || arr.length <= idx) {
    return "Elemento no existe";
  }
  return arr[idx];
}

let result = getByIdx([1, 2, 3], 1);
console.log("Resultado:", result); // Output: 2

//------EJERCICIO 2: Calculadora de calificaciones------//

function calcularNota(puntos) {
  if (puntos >= 90) return "A - Excelente";
  if (puntos >= 80) return "B - Muy bien";
  if (puntos >= 70) return "C - Bien";
  if (puntos >= 60) return "D - Suficiente";
  return "F - Reprobado";
}

console.log("Nota con 85 puntos:", calcularNota(85));

//------EJERCICIO 3: Validar usuario------//

function validarUsuario(edad, email, aceptaTerminos) {
  if (!email) {
    return "Email requerido";
  }

  if (edad < 18) {
    return "Debes ser mayor de 18 años";
  }

  if (!aceptaTerminos) {
    return "Debes aceptar los términos y condiciones";
  }

  return "Usuario válido";
}

console.log(validarUsuario(20, "user@example.com", true));

//------EJERCICIO 4: Determinar día de la semana------//

function tipoDeDia(dia) {
  switch (dia.toLowerCase()) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
      return "Día laboral";
    case "sábado":
    case "domingo":
      return "Fin de semana";
    default:
      return "Día no válido";
  }
}

console.log(tipoDeDia("Sábado"));

//------EJERCICIO 5: Clasificar temperatura------//

function clasificarTemperatura(temp) {
  return temp > 30
    ? "Calor"
    : temp > 20
    ? "Templado"
    : temp > 10
    ? "Fresco"
    : "Frío";
}

console.log("Temperatura de 25°:", clasificarTemperatura(25));

//======================================
// BUENAS PRÁCTICAS
//======================================

// ✅ BIEN: Condiciones claras y legibles
function puedeVotar(edad) {
  return edad >= 18;
}

// ❌ EVITAR: Comparaciones innecesarias
function puedeVotarMal(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

// ✅ BIEN: Guard clauses (retornos tempranos)
function procesarPedido(pedido) {
  if (!pedido) return "Pedido no válido";
  if (!pedido.items) return "Sin items";
  if (pedido.total <= 0) return "Total inválido";

  return "Pedido procesado";
}

// ✅ BIEN: Evitar anidamiento excesivo
function validarFormulario(datos) {
  if (!datos.nombre) return "Nombre requerido";
  if (!datos.email) return "Email requerido";
  if (datos.edad < 18) return "Menor de edad";

  return "Formulario válido";
}
