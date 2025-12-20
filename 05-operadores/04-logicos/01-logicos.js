//======================================================//
// 01-logicos.js — Operadores lógicos en JavaScript
//======================================================//

//------------------------------------------------------//
// 🔹 Operador AND (&&)
//------------------------------------------------------//
// Devuelve true solo si ambas condiciones son verdaderas.

console.log(true && true, "true && true"); // true
console.log(true && false, "true && false"); // false
console.log(false && true, "false && true"); // false

// Ejemplos con expresiones:
console.log(6 > 5 && 2 > 1); // true → ambas son verdaderas
console.log(6 > 5 && 1 > 2); // false → la segunda es falsa

/*
  ✅ Sintaxis:
  op1 && op2 → devuelve true solo si op1 y op2 son true.
*/

//------------------------------------------------------//
// 🔹 Operador OR (||)
//------------------------------------------------------//
// Devuelve true si al menos una de las condiciones es verdadera.

console.log(true || true, "true || true"); // true
console.log(true || false, "true || false"); // true
console.log(false || false, "false || false"); // false

// Ejemplos con expresiones:
console.log(6 > 5 || 1 > 2); // true → la primera es verdadera
console.log(6 < 5 || 1 > 2); // false → ambas son falsas

/*
  ✅ Sintaxis:
  op1 || op2 → devuelve true si al menos uno es true.
*/

//------------------------------------------------------//
// 🔹 Operador NOT (!)
//------------------------------------------------------//
// Invierte el valor lógico: true → false, false → true.

console.log(!true); // false
console.log(!false); // true

let v = !(2 > 1); // 2 > 1 es true → !true = false
console.log(v); // false

/*
  ✅ Sintaxis:
  !op1 → devuelve lo contrario del valor lógico de op1.
  Es decir:
  - Si op1 es true → devuelve false
  - Si op1 es false → devuelve true
*/

// También se usa para validar condiciones negativas:
let usuario = "";
if (!usuario) {
  console.log("Usuario no definido"); // Se ejecuta porque "" es falsy
}

// ⚠️ Advertencia: ! convierte cualquier valor a booleano antes de negarlo
console.log(!0); // true → 0 es falsy
console.log(!"texto"); // false → "texto" es truthy
console.log(!null); // true → null es falsy
console.log(!undefined); // true → undefined es falsy

//======================================================//
// 🔸 Operadores modernos relacionados
//======================================================//

//------------------------------------------------------//
// 🔹 Operador de coalescencia nula (??)
//------------------------------------------------------//
// Devuelve el primer valor que NO sea null NI undefined.

let nombre = null;
let resultado = nombre ?? "Invitado";
console.log(resultado); // "Invitado"

/*
  ✅ Sintaxis:
  a ?? b → devuelve a si no es null ni undefined.
           Si a es null o undefined, devuelve b.
*/

// Comparación con OR (||)
let valor = 0;
console.log(valor || 100); // 100 → porque 0 es falsy
console.log(valor ?? 100); // 0   → porque no es null ni undefined

/*
  ⚠️ A diferencia de ||, el operador ?? conserva valores como 0, "", false.
*/

//------------------------------------------------------//
// 🔹 Operador de acceso opcional (?.)
//------------------------------------------------------//
// Permite acceder a propiedades sin lanzar error si el objeto es null o undefined.

let usuario2 = null;
console.log(usuario2?.nombre); // undefined → no lanza error

/*
  ✅ Sintaxis:
  objeto?.propiedad → devuelve undefined si el objeto es null o undefined.
*/

//------------------------------------------------------//
// 🔹 Operadores de asignación lógica
//======================================================//

//------------------------------------------------------//
// 🔸 ||= → Asignación lógica OR
//------------------------------------------------------//
// Asigna un valor si la variable es falsy (false, 0, "", null, undefined, NaN)

let apellido = "";
apellido ||= "Lopez";
console.log(apellido); // "Lopez"

/*
  ✅ Sintaxis:
  variable ||= valor → asigna valor si variable es falsy.
*/

//------------------------------------------------------//
// 🔸 ??= → Asignación por coalescencia nula
//------------------------------------------------------//
// Asigna un valor solo si la variable es null o undefined.

const user = {};
user.nombre ??= "Carlos";
console.log(user.nombre); // "Carlos"

/*
  ✅ Sintaxis:
  variable ??= valor → asigna valor solo si variable es null o undefined.
*/

//------------------------------------------------------//
// 🔸 &&= → Asignación lógica AND
//------------------------------------------------------//
// Asigna un valor solo si la variable es truthy.

let estado = true;
estado &&= "activo";
console.log(estado); // "activo"

let estado2 = false;
estado2 &&= "activo";
console.log(estado2); // false → no se asigna

/*
  ✅ Sintaxis:
  variable &&= valor → asigna valor solo si variable es truthy.
*/

//------------------------------------------------------//
// 📘 Ejemplo comparativo entre ||=, ??= y &&=
//------------------------------------------------------//

let a = 0;
a ||= 10; // a es falsy → se asigna 10
console.log(a); // 10

let b = 0;
b ??= 10; // b no es null ni undefined → no se asigna
console.log(b); // 0

let c = 0;
c &&= 10; // c es falsy → no se asigna
console.log(c); // 0

let d = 1;
d &&= 10; // d es truthy → se asigna 10
console.log(d); // 10

//======================================================//
// 🧵 RESUMEN FINAL
//======================================================//

/*
  OPERADORES LÓGICOS CLÁSICOS:
  - && → ambas condiciones deben ser verdaderas
  - || → al menos una debe ser verdadera
  - !  → invierte el valor lógico

  OPERADORES MODERNOS:
  - ?? → devuelve el primer valor que no sea null ni undefined
  - ?. → acceso seguro a propiedades sin errores

  OPERADORES DE ASIGNACIÓN LÓGICA:
  - ||= → asigna si el valor es falsy
  - ??= → asigna si el valor es null o undefined
  - &&= → asigna si el valor es truthy

  ✅ Usa ?? en vez de || cuando quieras conservar valores como 0 o ""
  ✅ Usa ?. para evitar errores al acceder a propiedades de objetos nulos
  ✅ Usa ||= para asignar valores por defecto si el actual es falsy
  ✅ Usa ??= para asignar solo si el valor es null o undefined
  ✅ Usa &&= para asignar solo si el valor actual es truthy
  ✅ Usa ! para validar ausencia o invertir condiciones
*/
