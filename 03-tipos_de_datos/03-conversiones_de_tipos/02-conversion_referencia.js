//--------------------------------------------------------------------------------------
// CONVERSIÓN DE TIPOS POR REFERENCIA
//--------------------------------------------------------------------------------------

/*
Los tipos por referencia (objetos, arrays, funciones) también pueden convertirse
a tipos primitivos. JavaScript usa métodos internos para estas conversiones.
*/

//--------------------------------------------------------------------------------------
// CONVERSIÓN DE OBJETOS A PRIMITIVOS
//--------------------------------------------------------------------------------------

/*
Cuando JavaScript necesita convertir un objeto a primitivo, sigue este orden:
  1. Llama a valueOf()
  2. Si no devuelve primitivo, llama a toString()
  3. Si ninguno devuelve primitivo, lanza TypeError
*/

// Objeto básico
const obj = { nombre: "Ana", edad: 25 };

console.log(String(obj)); // "[object Object]"
console.log(Number(obj)); // NaN
console.log(Boolean(obj)); // true (objetos siempre son truthy)

// Operaciones con objetos
console.log(obj + ""); // "[object Object]" (llama toString())
console.log(obj + 10); // "[object Object]10" (concatenación)

//--------------------------------------------------------------------------------------
// MÉTODOS valueOf() y toString()
//--------------------------------------------------------------------------------------

// Objeto con valueOf() personalizado
const punto = {
  x: 10,
  y: 20,
  valueOf() {
    return this.x + this.y;
  },
  toString() {
    return `(${this.x}, ${this.y})`;
  },
};

console.log(punto.valueOf()); // 30
console.log(punto.toString()); // "(10, 20)"
console.log(Number(punto)); // 30 (usa valueOf)
console.log(String(punto)); // "(10, 20)" (usa toString)
console.log(punto + 10); // 40 (30 + 10, usa valueOf)
console.log(`Coordenadas: ${punto}`); // "Coordenadas: (10, 20)" (usa toString)

//--------------------------------------------------------------------------------------
// CONVERSIÓN DE ARRAYS
//--------------------------------------------------------------------------------------

// Array a String
const numeros = [1, 2, 3];
console.log(String(numeros)); // "1,2,3"
console.log(numeros.toString()); // "1,2,3"
console.log(numeros + ""); // "1,2,3"

// Array a Number
console.log(Number(numeros)); // NaN (array con múltiples elementos)
console.log(Number([5])); // 5 (array con un elemento)
console.log(Number([])); // 0 (array vacío)

// Array a Boolean
console.log(Boolean([])); // true (array vacío es truthy)
console.log(Boolean([1, 2, 3])); // true

// Operaciones con arrays
console.log([1, 2] + [3, 4]); // "1,23,4" (concatena strings)
console.log([1] + [2]); // "12"
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
// console.log({} + []); // Ambiguo: puede ser "[object Object]" o 0 según contexto

//--------------------------------------------------------------------------------------
// CONVERSIÓN DE FUNCIONES
//--------------------------------------------------------------------------------------

function saludar() {
  return "Hola";
}

// Función a String
console.log(String(saludar)); // "function saludar() { return 'Hola'; }"
console.log(saludar.toString()); // "function saludar() { return 'Hola'; }"

// Función a Number
console.log(Number(saludar)); // NaN

// Función a Boolean
console.log(Boolean(saludar)); // true (funciones siempre son truthy)

//--------------------------------------------------------------------------------------
// CONVERSIÓN DE Date
//--------------------------------------------------------------------------------------

const fecha = new Date("2024-01-15");

// Date a String
console.log(String(fecha)); // "Mon Jan 15 2024..." (formato completo)
console.log(fecha.toString()); // "Mon Jan 15 2024..."
console.log(fecha.toISOString()); // "2024-01-15T00:00:00.000Z"
console.log(fecha.toLocaleDateString()); // "15/1/2024" (según locale)

// Date a Number (milisegundos desde 1970)
console.log(Number(fecha)); // 1705276800000
console.log(+fecha); // 1705276800000
console.log(fecha.valueOf()); // 1705276800000
console.log(fecha.getTime()); // 1705276800000

// Date a Boolean
console.log(Boolean(fecha)); // true

// Operaciones con fechas
const fecha2 = new Date("2024-01-20");
console.log(fecha2 - fecha); // 432000000 (milisegundos de diferencia)

//--------------------------------------------------------------------------------------
// JSON.stringify() y JSON.parse()
//--------------------------------------------------------------------------------------

// Objeto a String (JSON)
const usuario = {
  nombre: "Ana",
  edad: 25,
  activo: true,
};

const jsonString = JSON.stringify(usuario);
console.log(jsonString); // '{"nombre":"Ana","edad":25,"activo":true}'
console.log(typeof jsonString); // "string"

// String (JSON) a Objeto
const objetoRecuperado = JSON.parse(jsonString);
console.log(objetoRecuperado); // { nombre: "Ana", edad: 25, activo: true }
console.log(typeof objetoRecuperado); // "object"

// JSON con formato legible
console.log(JSON.stringify(usuario, null, 2));
/*
{
  "nombre": "Ana",
  "edad": 25,
  "activo": true
}
*/

// JSON.stringify con arrays
const lista = [1, 2, 3, { a: 4 }];
console.log(JSON.stringify(lista)); // '[1,2,3,{"a":4}]'

// Valores que JSON.stringify omite o convierte
const objetoComplejo = {
  numero: 123,
  texto: "hola",
  booleano: true,
  nulo: null,
  indefinido: undefined, // ⚠️ Se omite
  funcion: () => {}, // ⚠️ Se omite
  fecha: new Date(), // Se convierte a string
  simbolo: Symbol("id"), // ⚠️ Se omite
};

console.log(JSON.stringify(objetoComplejo));
// '{"numero":123,"texto":"hola","booleano":true,"nulo":null,"fecha":"2024-..."}'

//--------------------------------------------------------------------------------------
// Object.entries(), Object.keys(), Object.values()
//--------------------------------------------------------------------------------------

const producto = {
  nombre: "Laptop",
  precio: 999,
  stock: 5,
};

// Convertir objeto a array de entradas
console.log(Object.entries(producto));
// [ ["nombre", "Laptop"], ["precio", 999], ["stock", 5] ]

// Convertir objeto a array de claves
console.log(Object.keys(producto));
// [ "nombre", "precio", "stock" ]

// Convertir objeto a array de valores
console.log(Object.values(producto));
// [ "Laptop", 999, 5 ]

// Reconstruir objeto desde entries
const entries = [
  ["nombre", "Laptop"],
  ["precio", 999],
];
const nuevoObjeto = Object.fromEntries(entries);
console.log(nuevoObjeto); // { nombre: "Laptop", precio: 999 }

//--------------------------------------------------------------------------------------
// CONVERSIÓN DE MAP Y SET
//--------------------------------------------------------------------------------------

// Map a Array
const mapa = new Map([
  ["a", 1],
  ["b", 2],
]);

console.log(Array.from(mapa)); // [ ["a", 1], ["b", 2] ]
console.log([...mapa]); // [ ["a", 1], ["b", 2] ]
console.log(Array.from(mapa.keys())); // [ "a", "b" ]
console.log(Array.from(mapa.values())); // [ 1, 2 ]

// Set a Array
const conjunto = new Set([1, 2, 3, 2, 1]);

console.log(Array.from(conjunto)); // [ 1, 2, 3 ]
console.log([...conjunto]); // [ 1, 2, 3 ]

// Array a Set (eliminar duplicados)
const arrayConDuplicados = [1, 2, 2, 3, 3, 3];
const sinDuplicados = [...new Set(arrayConDuplicados)];
console.log(sinDuplicados); // [ 1, 2, 3 ]

//--------------------------------------------------------------------------------------
// Array.from() - CONVERSIÓN A ARRAY
//--------------------------------------------------------------------------------------

// String a Array
console.log(Array.from("hola")); // [ "h", "o", "l", "a" ]

// Set a Array
console.log(Array.from(new Set([1, 2, 3]))); // [ 1, 2, 3 ]

// NodeList a Array (en el navegador)
// const divs = document.querySelectorAll('div');
// const arrayDivs = Array.from(divs);

// Objeto iterable a Array
const rango = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          return { done: false, value: current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log(Array.from(rango)); // [ 1, 2, 3, 4, 5 ]

// Array.from con función de mapeo
console.log(Array.from([1, 2, 3], (x) => x * 2)); // [ 2, 4, 6 ]

//--------------------------------------------------------------------------------------
// SPREAD OPERATOR (...) - CONVERSIÓN Y COPIA
//--------------------------------------------------------------------------------------

// Array a elementos individuales
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinado = [...arr1, ...arr2];
console.log(combinado); // [ 1, 2, 3, 4, 5, 6 ]

// String a Array
console.log([..."hola"]); // [ "h", "o", "l", "a" ]

// Objeto a nuevo objeto (copia superficial)
const original = { a: 1, b: 2 };
const copia = { ...original };
console.log(copia); // { a: 1, b: 2 }

// Combinar objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinadoObj = { ...obj1, ...obj2 };
console.log(combinadoObj); // { a: 1, b: 2, c: 3, d: 4 }

//--------------------------------------------------------------------------------------
// EJEMPLOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// 1. Convertir objeto a query string
function objetoAQueryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
}

const params = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
console.log(objetoAQueryString(params));
// "nombre=Ana&edad=25&ciudad=Madrid"

// 2. Convertir query string a objeto
function queryStringAObjeto(queryString) {
  return Object.fromEntries(new URLSearchParams(queryString));
}

const query = "nombre=Ana&edad=25&ciudad=Madrid";
console.log(queryStringAObjeto(query));
// { nombre: "Ana", edad: "25", ciudad: "Madrid" }

// 3. Clonar objeto profundo (deep clone)
function clonarProfundo(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const objetoOriginal = {
  nombre: "Ana",
  direccion: { ciudad: "Madrid", cp: "28001" },
};

const clonProfundo = clonarProfundo(objetoOriginal);
clonProfundo.direccion.ciudad = "Barcelona";

console.log(objetoOriginal.direccion.ciudad); // "Madrid" (no se modificó)
console.log(clonProfundo.direccion.ciudad); // "Barcelona"

// ⚠️ LIMITACIÓN: JSON.stringify no copia funciones, undefined, símbolos
const conFuncion = {
  nombre: "Ana",
  saludar: function () {
    return "Hola";
  },
};

const clonConFuncion = clonarProfundo(conFuncion);
console.log(clonConFuncion); // { nombre: "Ana" } (función se perdió)

// 4. Convertir FormData a objeto (navegador)
function formDataAObjeto(formData) {
  return Object.fromEntries(formData.entries());
}

// Ejemplo de uso en el navegador:
// const formData = new FormData(document.querySelector('form'));
// const datos = formDataAObjeto(formData);
// console.log(datos);

// 5. Aplanar array de objetos
const usuarios = [
  { id: 1, nombre: "Ana", edad: 25 },
  { id: 2, nombre: "Carlos", edad: 30 },
  { id: 3, nombre: "Lucía", edad: 28 },
];

// Extraer solo los nombres
const nombres = usuarios.map((u) => u.nombre);
console.log(nombres); // [ "Ana", "Carlos", "Lucía" ]

// Convertir a objeto indexado por id
const usuariosPorId = Object.fromEntries(usuarios.map((u) => [u.id, u]));
console.log(usuariosPorId);
/*
{
  1: { id: 1, nombre: "Ana", edad: 25 },
  2: { id: 2, nombre: "Carlos", edad: 30 },
  3: { id: 3, nombre: "Lucía", edad: 28 }
}
*/

// 6. Convertir objeto anidado a array plano
const menuAnidado = {
  inicio: { url: "/", icono: "home" },
  perfil: { url: "/perfil", icono: "user" },
  config: { url: "/config", icono: "settings" },
};

const menuArray = Object.entries(menuAnidado).map(([nombre, datos]) => ({
  nombre,
  ...datos,
}));

console.log(menuArray);
/*
[
  { nombre: "inicio", url: "/", icono: "home" },
  { nombre: "perfil", url: "/perfil", icono: "user" },
  { nombre: "config", url: "/config", icono: "settings" }
]
*/

//--------------------------------------------------------------------------------------
// CONVERSIÓN ENTRE ESTRUCTURAS DE DATOS
//--------------------------------------------------------------------------------------

// Array a Map
const arrayPares = [
  ["nombre", "Ana"],
  ["edad", 25],
];
const mapaDesdeArray = new Map(arrayPares);
console.log(mapaDesdeArray.get("nombre")); // "Ana"

// Objeto a Map
const objParaMap = { a: 1, b: 2, c: 3 };
const mapaDesdeObjeto = new Map(Object.entries(objParaMap));
console.log(mapaDesdeObjeto); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

// Map a Objeto
const mapaOriginal = new Map([
  ["x", 10],
  ["y", 20],
]);
const objetoDesdeMap = Object.fromEntries(mapaOriginal);
console.log(objetoDesdeMap); // { x: 10, y: 20 }

// Array con duplicados a Set y de vuelta a Array (eliminar duplicados)
const conDuplicados = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const unicos = [...new Set(conDuplicados)];
console.log(unicos); // [ 1, 2, 3, 4 ]

//--------------------------------------------------------------------------------------
// CONVERSIÓN DE ARGUMENTOS DE FUNCIÓN
//--------------------------------------------------------------------------------------

// arguments a Array (forma antigua)
function sumarTodos() {
  // arguments es un objeto array-like, no un array real
  const numeros = Array.from(arguments);
  return numeros.reduce((sum, n) => sum + n, 0);
}

console.log(sumarTodos(1, 2, 3, 4)); // 10

// Forma moderna con rest parameters (recomendado)
function sumarTodosModerno(...numeros) {
  return numeros.reduce((sum, n) => sum + n, 0);
}

console.log(sumarTodosModerno(1, 2, 3, 4)); // 10

//--------------------------------------------------------------------------------------
// BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
1. ✅ Usa JSON.stringify/parse para serialización
   const json = JSON.stringify(objeto);
   const obj = JSON.parse(json);

2. ✅ Usa spread para copias superficiales
   const copia = { ...original };
   const copiaArray = [...originalArray];

3. ✅ Usa Object.entries() para iterar objetos
   Object.entries(obj).forEach(([key, value]) => {
     console.log(key, value);
   });

4. ⚠️ JSON.stringify omite funciones, undefined y símbolos
   const obj = { fn: () => {}, undef: undefined };
   JSON.stringify(obj); // '{}'

5. ⚠️ Cuidado con referencias en objetos anidados
   const copia = { ...original }; // Solo copia el primer nivel
   // Usa structuredClone() o JSON para objetos anidados

6. ⚠️ Array.from() vs spread con iterables
   Array.from(iterable); // Más explícito
   [...iterable];        // Más conciso, mismo resultado

7. ✅ Usa Object.fromEntries() para crear objetos desde arrays
   const obj = Object.fromEntries([["a", 1], ["b", 2]]);

8. ✅ Usa structuredClone() para clonar objetos (moderno)
   const clon = structuredClone(original);
   // Funciona con objetos anidados, Date, RegExp, etc.

9. ⚠️ Cuidado con conversiones implícitas de arrays
   [1, 2] + [3, 4]; // "1,23,4" (no es lo que esperas)
   // Usa concat: [1, 2].concat([3, 4])

10. ✅ Usa Array.isArray() para verificar si es array
    Array.isArray([1, 2, 3]); // true
    Array.isArray("texto");   // false
*/

//--------------------------------------------------------------------------------------
// CASOS ESPECIALES Y CURIOSIDADES
//--------------------------------------------------------------------------------------

// Conversiones curiosas de arrays
console.log([] == ![]); // true (ambos se convierten a 0)
console.log([] == 0); // true
console.log([1] == 1); // true
console.log([1, 2] == "1,2"); // true

// Comparación de objetos (compara referencias, no valores)
// ⚠️ IMPORTANTE: Los objetos se comparan por referencia, no por valor
const obj3 = { a: 1 };
const obj4 = { a: 1 }; // Mismo contenido, pero diferente objeto
console.log(obj3 == obj4); // false (diferentes referencias)
console.log(obj3 === obj4); // false (diferentes referencias)

// Solo son iguales si apuntan a la misma referencia
const obj5 = {};
const obj6 = obj5; // obj6 apunta al mismo objeto que obj5
console.log(obj5 === obj6); // true (misma referencia)

// Dos objetos literales siempre son diferentes
const vacio1 = {};
const vacio2 = {};
console.log(vacio1 === vacio2); // false (diferentes instancias)

// Para comparar objetos por VALOR (contenido), usa JSON.stringify
const objA = { nombre: "Ana", edad: 25 };
const objB = { nombre: "Ana", edad: 25 };
console.log(objA === objB); // false (diferentes referencias)
console.log(JSON.stringify(objA) === JSON.stringify(objB)); // true (mismo contenido)

// Symbol.toPrimitive personalizado (ES6)
const objetoEspecial = {
  [Symbol.toPrimitive](hint) {
    console.log("Hint:", hint);
    if (hint === "number") return 42;
    if (hint === "string") return "Objeto Especial";
    return true;
  },
};

console.log(Number(objetoEspecial)); // 42
console.log(String(objetoEspecial)); // "Objeto Especial"
console.log(objetoEspecial + ""); // "Objeto Especial"
console.log(+objetoEspecial); // 42

// WeakMap y WeakSet no son iterables
const weakMap = new WeakMap();
const clave = {};
weakMap.set(clave, "valor");
// Array.from(weakMap); // ❌ Error: no es iterable

// Conversión de RegExp
const regex = /hola/gi;
console.log(String(regex)); // "/hola/gi"
console.log(regex.toString()); // "/hola/gi"
console.log(Boolean(regex)); // true

// Conversión de Error
const error = new Error("Algo salió mal");
console.log(String(error)); // "Error: Algo salió mal"
console.log(error.toString()); // "Error: Algo salió mal"
console.log(error.message); // "Algo salió mal"

//--------------------------------------------------------------------------------------
// structuredClone() - CLONACIÓN PROFUNDA MODERNA
//--------------------------------------------------------------------------------------

/*
structuredClone() es la forma moderna de clonar objetos profundamente.
Ventajas sobre JSON.parse(JSON.stringify()):
  - Clona Date, RegExp, Map, Set
  - Clona referencias circulares
  - Clona ArrayBuffer y TypedArray
  - NO clona funciones (igual que JSON)
*/

// Ejemplo con objetos anidados
const complejo = {
  nombre: "Ana",
  fecha: new Date("2024-01-15"),
  regex: /test/gi,
  mapa: new Map([["a", 1]]),
  conjunto: new Set([1, 2, 3]),
  direccion: {
    calle: "Gran Vía",
    ciudad: "Madrid",
  },
};

// Con structuredClone (recomendado)
const clonEstructurado = structuredClone(complejo);
clonEstructurado.direccion.ciudad = "Barcelona";

console.log(complejo.direccion.ciudad); // "Madrid" (no cambió)
console.log(clonEstructurado.direccion.ciudad); // "Barcelona"
console.log(clonEstructurado.fecha instanceof Date); // true (mantiene el tipo)

// Referencias circulares (structuredClone las maneja)
const circular = { nombre: "Objeto" };
circular.self = circular; // referencia a sí mismo

const clonCircular = structuredClone(circular);
console.log(clonCircular.self === clonCircular); // true

// JSON.stringify fallaría con referencias circulares
// JSON.stringify(circular); // ❌ Error: Converting circular structure

//--------------------------------------------------------------------------------------
// TABLA RESUMEN: MÉTODOS DE CONVERSIÓN
//--------------------------------------------------------------------------------------

/*
┌──────────────────────┬─────────────────┬──────────────────────────────┐
│ Conversión           │ Método          │ Notas                        │
├──────────────────────┼─────────────────┼──────────────────────────────┤
│ Objeto → String      │ JSON.stringify  │ Omite funciones, undefined   │
│ String → Objeto      │ JSON.parse      │ Debe ser JSON válido         │
│ Objeto → Array       │ Object.entries  │ Devuelve pares [key, value]  │
│ Array → Objeto       │ Object.fromEntries │ Desde pares [key, value]  │
│ Array → Set          │ new Set(array)  │ Elimina duplicados           │
│ Set → Array          │ [...set]        │ O Array.from(set)            │
│ Map → Array          │ [...map]        │ Devuelve pares [key, value]  │
│ Array → Map          │ new Map(array)  │ Desde pares [key, value]     │
│ String → Array       │ [...string]     │ O Array.from(string)         │
│ Iterable → Array     │ Array.from()    │ Convierte cualquier iterable │
│ Objeto → Copia       │ {...obj}        │ Solo superficial             │
│ Objeto → Clon Profundo│ structuredClone │ Recomendado (moderno)       │
│ NodeList → Array     │ Array.from()    │ En navegador                 │
│ arguments → Array    │ Array.from()    │ O usar rest parameters       │
└──────────────────────┴─────────────────┴──────────────────────────────┘
*/
