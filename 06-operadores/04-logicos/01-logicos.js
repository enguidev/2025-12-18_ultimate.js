//======================================================//
// OPERADORES LÓGICOS EN JAVASCRIPT
//======================================================//

/*
Los operadores lógicos trabajan con valores booleanos (true/false)
y se usan para combinar o invertir condiciones.

Operadores principales:
  - && (AND)  → Conjunción lógica
  - || (OR)   → Disyunción lógica
  - !  (NOT)  → Negación lógica
  
Operadores modernos (ES2020+):
  - ??  (Nullish Coalescing)
  - ?.  (Optional Chaining)
  - ||= (Logical OR Assignment)
  - &&= (Logical AND Assignment)
  - ??= (Nullish Assignment)
*/

//------------------------------------------------------//
// 🔹 Operador AND (&&) - Conjunción Lógica
//------------------------------------------------------//

/*
El operador AND devuelve true solo si AMBOS operandos son verdaderos.
Si alguno es falso, devuelve false.

TABLA DE VERDAD:
┌────────┬────────┬─────────┐
│  op1   │  op2   │ op1&&op2│
├────────┼────────┼─────────┤
│ true   │ true   │  true   │
│ true   │ false  │  false  │
│ false  │ true   │  false  │
│ false  │ false  │  false  │
└────────┴────────┴─────────┘
*/

console.log("=== OPERADOR AND (&&) ===");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Ejemplos con expresiones:
console.log(6 > 5 && 2 > 1); // true → ambas son verdaderas
console.log(6 > 5 && 1 > 2); // false → la segunda es falsa
console.log(10 === 10 && "hola".length > 3); // true

// Uso común: validar múltiples condiciones
let edad = 25;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
  console.log("Puede conducir");
}

//------------------------------------------------------//
// 🔹 Operador OR (||) - Disyunción Lógica
//------------------------------------------------------//

/*
El operador OR devuelve true si AL MENOS UNO de los operandos es verdadero.
Solo devuelve false si ambos son falsos.

TABLA DE VERDAD:
┌────────┬────────┬─────────┐
│  op1   │  op2   │ op1||op2│
├────────┼────────┼─────────┤
│ true   │ true   │  true   │
│ true   │ false  │  true   │
│ false  │ true   │  true   │
│ false  │ false  │  false  │
└────────┴────────┴─────────┘
*/

console.log("\n=== OPERADOR OR (||) ===");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Ejemplos con expresiones:
console.log(6 > 5 || 1 > 2); // true → la primera es verdadera
console.log(6 < 5 || 1 > 2); // false → ambas son falsas

// Uso común: ofrecer alternativas
let descuento = false;
let esCliente = true;

if (descuento || esCliente) {
  console.log("Tiene beneficio");
}

//------------------------------------------------------//
// 🔹 Operador NOT (!) - Negación Lógica
//------------------------------------------------------//

/*
El operador NOT invierte el valor lógico:
  - true → false
  - false → true

TABLA DE VERDAD:
┌────────┬─────────┐
│  op    │   !op   │
├────────┼─────────┤
│ true   │  false  │
│ false  │  true   │
└────────┴─────────┘
*/

console.log("\n=== OPERADOR NOT (!) ===");
console.log(!true); // false
console.log(!false); // true

let v = !(2 > 1); // 2 > 1 es true → !true = false
console.log(v); // false

// Validar condiciones negativas:
let usuario = "";
if (!usuario) {
  console.log("Usuario no definido"); // Se ejecuta porque "" es falsy
}

// ⚠️ NOT convierte cualquier valor a booleano antes de negarlo
console.log(!0); // true → 0 es falsy
console.log(!"texto"); // false → "texto" es truthy
console.log(!null); // true → null es falsy
console.log(!undefined); // true → undefined es falsy
console.log(![]); // false → [] es truthy
console.log(!{}); // false → {} es truthy

//------------------------------------------------------//
// 🔸 DOBLE NEGACIÓN (!!) - Conversión a Boolean
//------------------------------------------------------//

/*
La doble negación convierte cualquier valor a su equivalente booleano.
Es equivalente a Boolean(valor) pero más conciso.
*/

console.log("\n=== DOBLE NEGACIÓN (!!) ===");
console.log(!!1); // true
console.log(!!0); // false
console.log(!!"texto"); // true
console.log(!!""); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!![]); // true
console.log(!!{}); // true

// Equivale a:
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

//------------------------------------------------------//
// 🔸 CORTOCIRCUITO (Short-Circuit Evaluation)
//------------------------------------------------------//

/*
Los operadores && y || no siempre evalúan ambos operandos.
Esto se conoce como evaluación de cortocircuito.

AND (&&):
  - Si el primer operando es falsy, NO evalúa el segundo
  - Devuelve el primer valor falsy encontrado
  - Si todos son truthy, devuelve el último valor

OR (||):
  - Si el primer operando es truthy, NO evalúa el segundo
  - Devuelve el primer valor truthy encontrado
  - Si todos son falsy, devuelve el último valor
*/

console.log("\n=== CORTOCIRCUITO CON && ===");

// AND devuelve el primer valor falsy o el último valor
console.log(5 && 10); // 10 (ambos truthy → devuelve el último)
console.log(0 && 10); // 0 (primer falsy)
console.log("hola" && "mundo"); // "mundo"
console.log(null && "texto"); // null (primer falsy)
console.log(1 && 2 && 3); // 3 (todos truthy → devuelve el último)
console.log(1 && 0 && 3); // 0 (primer falsy)

// Ejemplo práctico: ejecutar función solo si existe
let config = { debug: true };
config.debug && console.log("Modo debug activado");
// Es equivalente a:
// if (config.debug) console.log("Modo debug activado");

console.log("\n=== CORTOCIRCUITO CON || ===");

// OR devuelve el primer valor truthy o el último valor
console.log(5 || 10); // 5 (primer truthy)
console.log(0 || 10); // 10 (0 es falsy → devuelve el siguiente)
console.log("" || "defecto"); // "defecto"
console.log(null || "valor"); // "valor"
console.log(0 || false || 3); // 3 (primer truthy)
console.log(0 || false || ""); // "" (todos falsy → devuelve el último)

// Ejemplo práctico: valores por defecto
let nombreUsuario = "";
let nombre = nombreUsuario || "Invitado";
console.log(nombre); // "Invitado"

//------------------------------------------------------//
// ⚠️ PROBLEMA CON || Y VALORES FALSY
//------------------------------------------------------//

/*
El operador || considera falsy: false, 0, "", null, undefined, NaN
Esto puede causar problemas cuando 0 o "" son valores válidos.
*/

console.log("\n=== PROBLEMA CON || ===");

let cantidad = 0;
let resultado = cantidad || 10;
console.log(resultado); // 10 (pero 0 es un valor válido!)

let texto = "";
let mensaje = texto || "Sin texto";
console.log(mensaje); // "Sin texto" (pero "" puede ser válido)

// 💡 Solución: usar el operador ??

//------------------------------------------------------//
// 🔹 Operador de Coalescencia Nula (??) - ES2020
//------------------------------------------------------//

/*
El operador ?? devuelve el primer valor que NO sea null NI undefined.
A diferencia de ||, NO considera falsy otros valores como 0, "", false.

DIFERENCIAS:
  || → considera falsy: false, 0, -0, 0n, "", null, undefined, NaN
  ?? → solo considera nulos: null, undefined
*/

console.log("\n=== OPERADOR ?? ===");

let nombre2 = null;
let resultado2 = nombre2 ?? "Invitado";
console.log(resultado2); // "Invitado"

// Comparación con OR (||)
let valor = 0;
console.log(valor || 100); // 100 → porque 0 es falsy
console.log(valor ?? 100); // 0   → porque 0 no es null ni undefined

let texto2 = "";
console.log(texto2 || "defecto"); // "defecto" (porque "" es falsy)
console.log(texto2 ?? "defecto"); // "" (porque "" no es null ni undefined)

let esActivo = false;
console.log(esActivo || true); // true (porque false es falsy)
console.log(esActivo ?? true); // false (porque false no es null ni undefined)

// ✅ Usar ?? cuando 0, "", false son valores válidos
let puntuacion = 0;
let puntosFinales = puntuacion ?? 100; // 0 (correcto!)
console.log(puntosFinales);

//------------------------------------------------------//
// 🔹 Operador de Acceso Opcional (?.) - ES2020
//------------------------------------------------------//

/*
El operador ?. permite acceder a propiedades de objetos sin lanzar error
si el objeto es null o undefined.

Sintaxis:
  objeto?.propiedad
  objeto?.[expresion]
  funcion?.()
*/

console.log("\n=== OPERADOR ?. ===");

let usuario1 = null;
console.log(usuario1?.nombre); // undefined (sin error)
// Sin ?: → usuario1.nombre lanzaría error

let usuario2 = { nombre: "Ana", direccion: { ciudad: "Madrid" } };
console.log(usuario2?.nombre); // "Ana"
console.log(usuario2?.direccion?.ciudad); // "Madrid"
console.log(usuario2?.direccion?.codigoPostal); // undefined

let usuario3 = undefined;
console.log(usuario3?.edad); // undefined (sin error)

// Con arrays
let lista = null;
console.log(lista?.[0]); // undefined (sin error)

let numeros = [1, 2, 3];
console.log(numeros?.[1]); // 2

// Con funciones
let saludar = null;
console.log(saludar?.()); // undefined (sin error)

let funcionValida = () => "Hola";
console.log(funcionValida?.()); // "Hola"

// Ejemplo práctico: API response
const respuesta = {
  data: {
    usuario: {
      perfil: {
        avatar: "foto.jpg",
      },
    },
  },
};

console.log(respuesta?.data?.usuario?.perfil?.avatar); // "foto.jpg"
console.log(respuesta?.data?.posts?.[0]?.titulo); // undefined (sin error)

//------------------------------------------------------//
// 🔹 Operadores de Asignación Lógica - ES2021
//------------------------------------------------------//

/*
Operadores que combinan lógica con asignación:
  ||= → Asigna si el valor es falsy
  &&= → Asigna si el valor es truthy
  ??= → Asigna si el valor es null o undefined
*/

//------------------------------------------------------//
// 🔸 ||= → Asignación Lógica OR
//------------------------------------------------------//

console.log("\n=== OPERADOR ||= ===");

let apellido = "";
apellido ||= "Lopez";
console.log(apellido); // "Lopez" (porque "" es falsy)

// Equivalente a:
// if (!apellido) apellido = "Lopez";
// o: apellido = apellido || "Lopez";

let contador = 0;
contador ||= 10;
console.log(contador); // 10 (porque 0 es falsy)

//------------------------------------------------------//
// 🔸 ??= → Asignación por Coalescencia Nula
//------------------------------------------------------//

console.log("\n=== OPERADOR ??= ===");

const user = {};
user.nombre ??= "Carlos";
console.log(user.nombre); // "Carlos"

// Solo asigna si es null o undefined
let precio = 0;
precio ??= 100;
console.log(precio); // 0 (NO se asigna porque 0 no es null ni undefined)

let descripcion = "";
descripcion ??= "Sin descripción";
console.log(descripcion); // "" (NO se asigna)

// Equivalente a:
// if (precio == null) precio = 100;
// o: precio = precio ?? 100;

//------------------------------------------------------//
// 🔸 &&= → Asignación Lógica AND
//------------------------------------------------------//

console.log("\n=== OPERADOR &&= ===");

let estado = true;
estado &&= "activo";
console.log(estado); // "activo" (porque true es truthy)

let estado2 = false;
estado2 &&= "activo";
console.log(estado2); // false (NO se asigna porque false es falsy)

let objeto = { id: 1 };
objeto.id &&= 999;
console.log(objeto.id); // 999 (porque id existe y es truthy)

// Equivalente a:
// if (estado) estado = "activo";
// o: estado = estado && "activo";

//------------------------------------------------------//
// 📘 Ejemplo Comparativo: ||=, ??= y &&=
//------------------------------------------------------//

console.log("\n=== COMPARACIÓN ||=, ??=, &&= ===");

// Con valor 0 (falsy pero no null ni undefined)
let a = 0;
a ||= 10; // a es falsy → se asigna 10
console.log("a ||= 10:", a); // 10

let b = 0;
b ??= 10; // b no es null ni undefined → NO se asigna
console.log("b ??= 10:", b); // 0

let c = 0;
c &&= 10; // c es falsy → NO se asigna
console.log("c &&= 10:", c); // 0

// Con valor truthy (número positivo)
let d = 5;
d ||= 10; // d es truthy → NO se asigna
console.log("d ||= 10:", d); // 5

let e = 5;
e ??= 10; // e no es null ni undefined → NO se asigna
console.log("e ??= 10:", e); // 5

let f = 5;
f &&= 10; // f es truthy → se asigna 10
console.log("f &&= 10:", f); // 10

// Con null
let g = null;
g ||= 10; // g es falsy → se asigna 10
console.log("g ||= 10:", g); // 10

let h = null;
h ??= 10; // h es null → se asigna 10
console.log("h ??= 10:", h); // 10

let i = null;
i &&= 10; // i es falsy → NO se asigna
console.log("i &&= 10:", i); // null

//------------------------------------------------------//
// 🔸 COMBINANDO OPERADORES LÓGICOS
//------------------------------------------------------//

console.log("\n=== COMBINANDO OPERADORES ===");

// Prioridad: ! > && > ||
console.log(true || (false && false)); // true
// Se evalúa como: true || (false && false)

console.log((true || false) && false); // false
// Los paréntesis cambian el orden

console.log(!true || (false && true)); // false
// Se evalúa como: (!true) || (false && true)

// Ejemplo práctico con validaciones
let edad2 = 20;
let tienePermiso = true;
let esEmergencia = false;

if ((edad2 >= 18 && tienePermiso) || esEmergencia) {
  console.log("Acceso permitido");
}

//------------------------------------------------------//
// 📊 VALORES TRUTHY Y FALSY - RECORDATORIO
//------------------------------------------------------//

console.log("\n=== VALORES FALSY (8 en total) ===");

const falsy = [false, 0, -0, 0n, "", null, undefined, NaN];
falsy.forEach((valor) => {
  console.log(`${String(valor).padEnd(10)} → `, Boolean(valor)); // false
});

console.log("\n=== VALORES TRUTHY (todo lo demás) ===");

const truthy = [
  true,
  1,
  -1,
  "texto",
  "0",
  "false",
  [],
  {},
  function () {},
  Infinity,
  -Infinity,
  new Date(),
];

truthy.forEach((valor, i) => {
  console.log(`${String(valor).slice(0, 15).padEnd(15)} → `, Boolean(valor)); // true
});

//------------------------------------------------------//
// 🎯 CASOS DE USO PRÁCTICOS
//------------------------------------------------------//

console.log("\n=== CASOS DE USO PRÁCTICOS ===");

// 1. Valores por defecto con ||
function saludarConOr(nombre) {
  nombre = nombre || "Invitado";
  return `Hola, ${nombre}`;
}
console.log(saludarConOr("Ana")); // "Hola, Ana"
console.log(saludarConOr("")); // "Hola, Invitado" (⚠️ "" es falsy)
console.log(saludarConOr(0)); // "Hola, Invitado" (⚠️ 0 es falsy)

// 2. Valores por defecto con ?? (mejor)
function saludarConNullish(nombre) {
  nombre = nombre ?? "Invitado";
  return `Hola, ${nombre}`;
}
console.log(saludarConNullish("Ana")); // "Hola, Ana"
console.log(saludarConNullish("")); // "Hola, " (✅ "" es válido)
console.log(saludarConNullish(0)); // "Hola, 0" (✅ 0 es válido)
console.log(saludarConNullish(null)); // "Hola, Invitado"

// 3. Validación de múltiples condiciones
function puedeVotar(edad, esResidente, tieneDNI) {
  return edad >= 18 && esResidente && tieneDNI;
}
console.log(puedeVotar(20, true, true)); // true
console.log(puedeVotar(16, true, true)); // false

// 4. Acceso seguro a propiedades anidadas
const usuarios = [
  { nombre: "Ana", direccion: { ciudad: "Madrid" } },
  { nombre: "Luis" },
  null,
];

usuarios.forEach((u, i) => {
  console.log(`Usuario ${i}:`, u?.direccion?.ciudad ?? "Sin ciudad");
});

// 5. Ejecución condicional con &&
let logActivo = true;
logActivo && console.log("Log: operación realizada");

// 6. Cache o inicialización con ||=
let cache = {};
function obtenerDatos(id) {
  cache[id] ||= `Datos del usuario ${id}`;
  return cache[id];
}
console.log(obtenerDatos(1)); // "Datos del usuario 1"
console.log(obtenerDatos(1)); // Devuelve desde cache

//------------------------------------------------------//
// ⚠️ ERRORES COMUNES
//------------------------------------------------------//

console.log("\n=== ERRORES COMUNES ===");

// ❌ Error 1: Confundir && con ||
// Incorrecto: quiero que una condición O la otra sea true
// if (edad > 18 && tieneLicencia) // ❌ Requiere AMBAS
// Correcto:
// if (edad > 18 || tieneLicencia) // ✅ Al menos una

// ❌ Error 2: No usar paréntesis en expresiones complejas
console.log(true || (false && false)); // true (puede confundir)
console.log((true || false) && false); // false (más claro)

// ❌ Error 3: Usar || cuando queremos ??
let minutos = 0;
let tiempo = minutos || 60; // ❌ 60 (pero 0 es válido!)
let tiempoCorrecto = minutos ?? 60; // ✅ 0

// ❌ Error 4: Olvidar que objetos/arrays vacíos son truthy
if ([]) {
  console.log("Array vacío es truthy"); // ✅ Se ejecuta
}

if ({}) {
  console.log("Objeto vacío es truthy"); // ✅ Se ejecuta
}

// Para verificar si un array está vacío:
let lista2 = [];
if (lista2.length > 0) {
  // ✅ Correcto
  console.log("Tiene elementos");
}

//======================================================//
// 📋 RESUMEN FINAL
//======================================================//

/*
╔═══════════════════════════════════════════════════════════════════╗
║                    OPERADORES LÓGICOS                             ║
╠═══════════════════════════════════════════════════════════════════╣
║ OPERADORES CLÁSICOS:                                              ║
║  && → AND: true solo si ambos son true                            ║
║  || → OR: true si al menos uno es true                            ║
║  !  → NOT: invierte el valor lógico                               ║
║                                                                    ║
║ CORTOCIRCUITO:                                                     ║
║  && → devuelve primer falsy o último valor                        ║
║  || → devuelve primer truthy o último valor                       ║
║                                                                    ║
║ OPERADORES MODERNOS (ES2020+):                                    ║
║  ?? → Nullish Coalescing: primer valor no null/undefined          ║
║  ?. → Optional Chaining: acceso seguro a propiedades              ║
║                                                                    ║
║ ASIGNACIÓN LÓGICA (ES2021):                                       ║
║  ||= → asigna si el valor es falsy                                ║
║  ??= → asigna si el valor es null o undefined                     ║
║  &&= → asigna si el valor es truthy                               ║
║                                                                    ║
║ BUENAS PRÁCTICAS:                                                  ║
║  ✅ Usa ?? en vez de || cuando 0, "", false son válidos           ║
║  ✅ Usa ?. para evitar errores con objetos nulos                  ║
║  ✅ Usa ??= para valores por defecto sin afectar 0 o ""           ║
║  ✅ Usa paréntesis para claridad en expresiones complejas         ║
║  ✅ Recuerda: [], {} son truthy (usa .length para verificar)      ║
║                                                                    ║
║ VALORES FALSY (solo 8):                                           ║
║  false, 0, -0, 0n, "", null, undefined, NaN                       ║
║                                                                    ║
║ TODO LO DEMÁS ES TRUTHY                                           ║
╚═══════════════════════════════════════════════════════════════════╝
*/
