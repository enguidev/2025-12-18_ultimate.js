//======================================================================================
// 01 - BUCLES EN JAVASCRIPT (ESTRUCTURAS REPETITIVAS)
//======================================================================================

/*
BUCLES (LOOPS):
Son estructuras que ejecutan un bloque de código repetidamente mientras se cumpla 
una condición. Se detienen cuando la condición deja de cumplirse.

TIPOS DE BUCLES:
  ✅ while       - Comprueba condición ANTES de ejecutar (0 o más veces)
  ✅ do...while  - Comprueba condición DESPUÉS de ejecutar (1 o más veces)
  ✅ for         - Bucle clásico con contador
  ✅ for...in    - Itera sobre propiedades de objetos (claves)
  ✅ for...of    - Itera sobre valores de iterables (arrays, strings, etc)
  ✅ forEach     - Método de arrays (no es exactamente un bucle)

NOTA: Todos los bucles son equivalentes (lo que haces con uno, puedes hacerlo 
con otro), pero cada uno tiene su caso de uso óptimo.
*/

//======================================================================================
// 1. WHILE - Condición al inicio
//======================================================================================

/*
CARACTERÍSTICAS:
  • Comprueba la condición ANTES de ejecutar el bloque
  • Puede ejecutarse 0 veces si la condición es falsa desde el inicio
  • Útil cuando no sabes cuántas iteraciones necesitas
*/

console.log("=== WHILE ===\n");

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo básico: Contar del 1 al 10
// ───────────────────────────────────────────────────────────────────────────────

let i = 1;
console.log("Contar del 1 al 10:");
while (i <= 10) {
  console.log(i);
  i++; // ⚠️ IMPORTANTE: No olvides incrementar o tendrás un bucle infinito
}

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo: Números pares del 0 al 10
// ───────────────────────────────────────────────────────────────────────────────

let j = 0;
console.log("\nNúmeros pares:");
while (j <= 10) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

console.log("Fuera del while");

// ───────────────────────────────────────────────────────────────────────────────
// ⚠️ PELIGRO: Bucle infinito
// ───────────────────────────────────────────────────────────────────────────────

/*
// ❌ NUNCA hagas esto (bucle infinito, cuelga el navegador):
let z = 0;
while (z < 10) {
  console.log(z);
  // ⚠️ Falta z++ → bucle infinito
}
*/

// ✅ Correcto (siempre incrementa/modifica la variable de control):
let z = 0;
while (z < 10) {
  console.log(z);
  z++; // ✅ Incremento para salir del bucle
}

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo: Cuenta atrás
// ───────────────────────────────────────────────────────────────────────────────

let h = 5;
console.log("\nCuenta atrás:");
while (h > 0) {
  console.log(h);
  h--;
}
console.log("¡Despegue! 🚀");

// ───────────────────────────────────────────────────────────────────────────────
// Truco: usar la variable como condición (0 es falsy)
// ───────────────────────────────────────────────────────────────────────────────

let countdown = 5;
console.log("\nCuenta atrás (forma corta):");
while (countdown) {
  // Cuando countdown llegue a 0, será false y saldrá
  console.log(countdown);
  countdown--;
}
console.log("¡Fin!");

// ───────────────────────────────────────────────────────────────────────────────
// Casos de uso típicos de while
// ───────────────────────────────────────────────────────────────────────────────

// ✅ Buscar hasta encontrar algo
let numeros = [1, 3, 5, 7, 9, 10, 11];
let indice = 0;
let encontrado = false;

while (indice < numeros.length && !encontrado) {
  if (numeros[indice] % 2 === 0) {
    console.log(
      `\nPrimer número par encontrado: ${numeros[indice]} en índice ${indice}`
    );
    encontrado = true;
  }
  indice++;
}

// ✅ Validar entrada del usuario (simulado)
let intentos = 0;
let passwordCorrecta = "1234";
let passwordIngresada = "";

// Simulación (en la práctica usarías prompt())
const intentosUsuario = ["abc", "wrong", "1234"];
while (passwordIngresada !== passwordCorrecta && intentos < 3) {
  passwordIngresada = intentosUsuario[intentos]; // Simulando prompt()
  console.log(`\nIntento ${intentos + 1}: ${passwordIngresada}`);

  if (passwordIngresada !== passwordCorrecta) {
    console.log("Password incorrecta");
  }
  intentos++;
}

if (passwordIngresada === passwordCorrecta) {
  console.log("✅ Acceso concedido");
} else {
  console.log("❌ Cuenta bloqueada");
}

//======================================================================================
// 2. DO...WHILE - Condición al final
//======================================================================================

/*
CARACTERÍSTICAS:
  • Ejecuta el bloque PRIMERO, luego comprueba la condición
  • Siempre se ejecuta AL MENOS UNA VEZ
  • Útil cuando necesitas ejecutar algo antes de validar
*/

console.log("\n=== DO...WHILE ===\n");

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo básico: Contar del 1 al 10
// ───────────────────────────────────────────────────────────────────────────────

i = 1;
console.log("Contar del 1 al 10:");
do {
  console.log(i);
  i++;
} while (i <= 10);

// ───────────────────────────────────────────────────────────────────────────────
// Diferencia clave: se ejecuta al menos una vez
// ───────────────────────────────────────────────────────────────────────────────

console.log("\nComparación while vs do...while:");

// while: NO se ejecuta (condición falsa desde el inicio)
let x = 100;
while (x < 10) {
  console.log("Este mensaje no se imprime");
  x++;
}

// do...while: SÍ se ejecuta una vez
let y = 100;
do {
  console.log("Este mensaje SÍ se imprime (aunque y = 100)");
  y++;
} while (y < 10);

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo práctico: Mostrar menú hasta que usuario elija salir
// ───────────────────────────────────────────────────────────────────────────────

let opcion;
let menu = ["Ver productos", "Carrito", "Ayuda", "Salir"];
let selecciones = [1, 2, 3, 4]; // Simulando selecciones del usuario
let menuIndice = 0;

console.log("\nMenú interactivo:");
do {
  console.log("\n--- MENÚ ---");
  menu.forEach((item, idx) => console.log(`${idx + 1}. ${item}`));

  opcion = selecciones[menuIndice]; // Simulando prompt()
  console.log(`\nSelección: ${opcion}`);

  if (opcion !== 4) {
    console.log(`Has elegido: ${menu[opcion - 1]}`);
  }

  menuIndice++;
} while (opcion !== 4 && menuIndice < selecciones.length);

console.log("¡Hasta pronto!");

//======================================================================================
// 3. FOR - Bucle clásico con contador
//======================================================================================

/*
CARACTERÍSTICAS:
  • Bucle más común y versátil
  • Incluye inicialización, condición e incremento en una sola línea
  • Ideal cuando sabes cuántas iteraciones necesitas
  • Sintaxis: for (inicialización; condición; actualización) { }
*/

console.log("\n=== FOR ===\n");

// ───────────────────────────────────────────────────────────────────────────────
// Sintaxis básica
// ───────────────────────────────────────────────────────────────────────────────

console.log("Contar del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo: Números pares
// ───────────────────────────────────────────────────────────────────────────────

console.log("\nNúmeros pares del 0 al 10:");
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ✅ Forma más eficiente (incremento de 2 en 2):
console.log("\nNúmeros pares (optimizado):");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// ───────────────────────────────────────────────────────────────────────────────
// Recorrer arrays con índices
// ───────────────────────────────────────────────────────────────────────────────

const frutas = ["🍎 Manzana", "🍌 Plátano", "🍊 Naranja", "🍇 Uvas"];

console.log("\nRecorrer array:");
for (let i = 0; i < frutas.length; i++) {
  console.log(`${i}: ${frutas[i]}`);
}

// ───────────────────────────────────────────────────────────────────────────────
// Recorrer array hacia atrás
// ───────────────────────────────────────────────────────────────────────────────

console.log("\nRecorrer array al revés:");
for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(`${i}: ${frutas[i]}`);
}

// ───────────────────────────────────────────────────────────────────────────────
// Saltar elementos (incremento no estándar)
// ───────────────────────────────────────────────────────────────────────────────

console.log("\nCada 2 elementos:");
for (let i = 0; i < frutas.length; i += 2) {
  console.log(frutas[i]);
}

// ───────────────────────────────────────────────────────────────────────────────
// Bucles anidados (matrices, tablas de multiplicar)
// ───────────────────────────────────────────────────────────────────────────────

console.log("\nTabla del 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\nMatriz 3x3:");
for (let fila = 0; fila < 3; fila++) {
  let linea = "";
  for (let col = 0; col < 3; col++) {
    linea += `[${fila},${col}] `;
  }
  console.log(linea);
}

// ───────────────────────────────────────────────────────────────────────────────
// For con múltiples variables
// ───────────────────────────────────────────────────────────────────────────────

console.log("\nMúltiples variables:");
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(`i=${i}, j=${j}`);
}

//======================================================================================
// 4. FOR...IN - Iterar propiedades de objetos
//======================================================================================

/*
CARACTERÍSTICAS:
  • Diseñado para iterar sobre las CLAVES (propiedades) de objetos
  • También funciona con arrays (devuelve índices), pero NO es recomendado
  • Itera sobre propiedades enumerables, incluyendo heredadas
  • Compatible con break y continue
*/

console.log("\n=== FOR...IN ===\n");

// ───────────────────────────────────────────────────────────────────────────────
// Uso principal: Objetos
// ───────────────────────────────────────────────────────────────────────────────

const usuario = {
  nombre: "Ana",
  edad: 28,
  ciudad: "Madrid",
  profesion: "Desarrolladora",
};

// Obtener solo las claves (propiedades)
console.log("Claves del objeto:");
for (let clave in usuario) {
  console.log(clave); // nombre, edad, ciudad, profesion
}

// Obtener claves y valores
console.log("\nClaves y valores:");
for (let clave in usuario) {
  console.log(`${clave}: ${usuario[clave]}`);
}

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo más complejo
// ───────────────────────────────────────────────────────────────────────────────

const producto = {
  id: 101,
  nombre: "Laptop",
  precio: 999.99,
  stock: 15,
  disponible: true,
};

console.log("\nInformación del producto:");
for (let propiedad in producto) {
  const valor = producto[propiedad];
  const tipo = typeof valor;
  console.log(`${propiedad} (${tipo}): ${valor}`);
}

// ───────────────────────────────────────────────────────────────────────────────
// ⚠️ Con arrays NO es recomendado (devuelve índices)
// ───────────────────────────────────────────────────────────────────────────────

const colores = ["rojo", "verde", "azul"];

console.log("\n⚠️ for...in con array (NO recomendado):");
for (let indice in colores) {
  console.log(`${indice}: ${colores[indice]}`); // 0, 1, 2 (índices)
}

// ✅ Para arrays, usa for...of o for tradicional
console.log("\n✅ for...of con array (recomendado):");
for (let color of colores) {
  console.log(color); // rojo, verde, azul (valores)
}

// ───────────────────────────────────────────────────────────────────────────────
// Filtrar propiedades propias (no heredadas)
// ───────────────────────────────────────────────────────────────────────────────

const coche = {
  marca: "Toyota",
  modelo: "Corolla",
};

// Añadimos una propiedad al prototipo (heredada)
Object.prototype.año = 2024;

console.log("\nTodas las propiedades (incluidas heredadas):");
for (let prop in coche) {
  console.log(`${prop}: ${coche[prop]}`);
}

console.log("\nSolo propiedades propias:");
for (let prop in coche) {
  if (coche.hasOwnProperty(prop)) {
    console.log(`${prop}: ${coche[prop]}`);
  }
}

// Limpiar el prototipo
delete Object.prototype.año;

//======================================================================================
// 5. FOR...OF - Iterar valores de iterables
//======================================================================================

/*
CARACTERÍSTICAS:
  • Diseñado para iterar sobre VALORES de objetos iterables
  • Funciona con: arrays, strings, Maps, Sets, NodeList, etc.
  • NO funciona con objetos literales (no son iterables)
  • Compatible con break y continue
  • Introducido en ES6 (2015)
  • ⚠️ Solo accede a valores, NO a índices (usa .entries() si los necesitas)
*/

console.log("\n=== FOR...OF ===\n");

// ───────────────────────────────────────────────────────────────────────────────
// Uso principal: Arrays
// ───────────────────────────────────────────────────────────────────────────────

const animales = ["🐶 Perro", "🐱 Gato", "🐭 Ratón", "🐹 Hámster"];

console.log("Iterar array:");
for (let animal of animales) {
  console.log(animal); // Valores directamente
}

// ───────────────────────────────────────────────────────────────────────────────
// ⚠️ IMPORTANTE: No puedes modificar el array original con for...of
// ───────────────────────────────────────────────────────────────────────────────

let numeros2 = [1, 2, 3, 4, 5];

console.log("\n⚠️ Intentar modificar el array original:");
for (let numero of numeros2) {
  numero = numero * 2; // ⚠️ Esto NO modifica el array original
}
console.log("Array original:", numeros2); // [1, 2, 3, 4, 5] (sin cambios)

// ✅ Solución 1: Usar for tradicional con índices
console.log("\n✅ Modificar con for tradicional:");
for (let i = 0; i < numeros2.length; i++) {
  numeros2[i] = numeros2[i] * 2;
}
console.log("Array modificado:", numeros2); // [2, 4, 6, 8, 10]

// ✅ Solución 2: Crear nuevo array
numeros2 = [1, 2, 3, 4, 5];
const duplicados = [];
for (let numero of numeros2) {
  duplicados.push(numero * 2);
}
console.log("\nNuevo array con duplicados:", duplicados);

// ───────────────────────────────────────────────────────────────────────────────
// Obtener índices y valores con .entries()
// ───────────────────────────────────────────────────────────────────────────────

console.log("\nÍndices y valores con .entries():");
for (let [indice, animal] of animales.entries()) {
  console.log(`${indice}: ${animal}`);
}

// ───────────────────────────────────────────────────────────────────────────────
// Iterar strings
// ───────────────────────────────────────────────────────────────────────────────

const texto = "Hola";
console.log("\nIterar string:");
for (let letra of texto) {
  console.log(letra); // H, o, l, a
}

// ───────────────────────────────────────────────────────────────────────────────
// Iterar Maps
// ───────────────────────────────────────────────────────────────────────────────

const mapa = new Map([
  ["nombre", "Carlos"],
  ["edad", 30],
  ["ciudad", "Barcelona"],
]);

console.log("\nIterar Map (pares clave-valor):");
for (let [clave, valor] of mapa) {
  console.log(`${clave}: ${valor}`);
}

console.log("\nIterar solo claves del Map:");
for (let clave of mapa.keys()) {
  console.log(clave);
}

console.log("\nIterar solo valores del Map:");
for (let valor of mapa.values()) {
  console.log(valor);
}

// ───────────────────────────────────────────────────────────────────────────────
// Iterar Sets
// ───────────────────────────────────────────────────────────────────────────────

const conjunto = new Set([1, 2, 3, 3, 4, 4, 5]); // Sets eliminan duplicados

console.log("\nIterar Set:");
for (let valor of conjunto) {
  console.log(valor); // 1, 2, 3, 4, 5 (sin duplicados)
}

// ───────────────────────────────────────────────────────────────────────────────
// Iterar NodeList (elementos del DOM)
// ───────────────────────────────────────────────────────────────────────────────

/*
// En el navegador:
const parrafos = document.querySelectorAll("p");
for (let parrafo of parrafos) {
  parrafo.style.color = "blue";
}
*/

//======================================================================================
// 6. COMPARACIÓN FOR...IN VS FOR...OF
//======================================================================================

console.log("\n=== FOR...IN VS FOR...OF ===\n");

const arrayEjemplo = [10, 20, 30];
arrayEjemplo.propiedad = "valor extra"; // Añadimos una propiedad al array

console.log("for...in (itera sobre claves/índices + propiedades):");
for (let key in arrayEjemplo) {
  console.log(key); // "0", "1", "2", "propiedad"
}

console.log("\nfor...of (itera solo sobre valores):");
for (let valor of arrayEjemplo) {
  console.log(valor); // 10, 20, 30 (ignora "propiedad")
}

/*
RESUMEN:
  for...in  → Objetos (claves)
  for...of  → Arrays, strings, iterables (valores)
*/

//======================================================================================
// 7. BREAK Y CONTINUE
//======================================================================================

console.log("\n=== BREAK Y CONTINUE ===\n");

// ───────────────────────────────────────────────────────────────────────────────
// BREAK: Sale completamente del bucle
// ───────────────────────────────────────────────────────────────────────────────

console.log("Ejemplo de break:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("¡Encontré el 5! Saliendo...");
    break; // Sale del bucle completamente
  }
  console.log(i);
}
console.log("Fuera del bucle");

// ───────────────────────────────────────────────────────────────────────────────
// CONTINUE: Salta a la siguiente iteración
// ───────────────────────────────────────────────────────────────────────────────

console.log("\nEjemplo de continue:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta los números pares
  }
  console.log(i); // Solo imprime impares
}

// ───────────────────────────────────────────────────────────────────────────────
// Búsqueda con break
// ───────────────────────────────────────────────────────────────────────────────

const usuarios = ["Ana", "Carlos", "María", "Juan"];
const buscar = "María";
let encontrado2 = false;

console.log(`\nBuscar "${buscar}":`);
for (let usuario of usuarios) {
  if (usuario === buscar) {
    console.log(`✅ Usuario encontrado: ${usuario}`);
    encontrado2 = true;
    break; // No necesitamos seguir buscando
  }
}

if (!encontrado2) {
  console.log("❌ Usuario no encontrado");
}

//======================================================================================
// 8. LABELS (ETIQUETAS) - Bucles anidados
//======================================================================================

console.log("\n=== LABELS EN BUCLES ===\n");

// ───────────────────────────────────────────────────────────────────────────────
// Sin labels: break solo sale del bucle interno
// ───────────────────────────────────────────────────────────────────────────────

console.log("Sin labels:");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break; // Solo sale del bucle interno
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// ───────────────────────────────────────────────────────────────────────────────
// Con labels: break sale del bucle especificado
// ───────────────────────────────────────────────────────────────────────────────

console.log("\nCon labels:");
bucleExterno: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break bucleExterno; // Sale de ambos bucles
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// ───────────────────────────────────────────────────────────────────────────────
// Labels en bloques (no solo bucles)
// ───────────────────────────────────────────────────────────────────────────────

console.log("\nLabels en bloques:");
bloquePrincipal: {
  bloqueSecundario: {
    console.log("1");
    break bloquePrincipal; // Sale de ambos bloques
    console.log("2 (no se ejecuta)");
  }
  console.log("3 (no se ejecuta)");
}
console.log("4 (sí se ejecuta)");

//======================================================================================
// 9. COMPARACIÓN Y CUÁNDO USAR CADA BUCLE
//======================================================================================

console.log("\n=== GUÍA DE USO ===\n");

/*
┌─────────────┬──────────────────────────────────────┬─────────────────────────┐
│   Bucle     │           Cuándo usar                │      Ejemplo típico     │
├─────────────┼──────────────────────────────────────┼─────────────────────────┤
│ while       │ No sabes cuántas iteraciones         │ Validar input usuario   │
│             │ Condición compleja                   │ Buscar hasta encontrar  │
│             │                                      │                         │
│ do...while  │ Necesitas ejecutar AL MENOS UNA VEZ  │ Mostrar menú            │
│             │ Validar después de ejecutar          │ Pedir contraseña        │
│             │                                      │                         │
│ for         │ Sabes el número de iteraciones       │ Recorrer con índice     │
│             │ Necesitas el índice                  │ Matrices, tablas        │
│             │ Máximo control                       │                         │
│             │                                      │                         │
│ for...in    │ Iterar PROPIEDADES de objetos        │ Listar datos de objeto  │
│             │ Necesitas las claves                 │ Configuraciones         │
│             │                                      │                         │
│ for...of    │ Iterar VALORES de arrays             │ Procesar elementos      │
│             │ Strings, Maps, Sets                  │ Filtrar, transformar    │
│             │ Código más limpio                    │                         │
└─────────────┴──────────────────────────────────────┴─────────────────────────┘
*/

//======================================================================================
// 10. EJEMPLOS PRÁCTICOS FINALES
//======================================================================================

console.log("\n=== EJEMPLOS PRÁCTICOS ===\n");

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo 1: Suma de números en array
// ───────────────────────────────────────────────────────────────────────────────

const nums = [10, 20, 30, 40, 50];
let suma = 0;

for (let numero of nums) {
  suma += numero;
}
console.log(`Suma total: ${suma}`); // 150

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo 2: Encontrar el máximo
// ───────────────────────────────────────────────────────────────────────────────

const valores = [45, 12, 89, 23, 67, 34];
let maximo = valores[0];

for (let valor of valores) {
  if (valor > maximo) {
    maximo = valor;
  }
}
console.log(`Valor máximo: ${maximo}`); // 89

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo 3: Contar vocales en un string
// ───────────────────────────────────────────────────────────────────────────────

const frase = "Hola mundo JavaScript";
const vocales = "aeiouAEIOU";
let contadorVocales = 0;

for (let letra of frase) {
  if (vocales.includes(letra)) {
    contadorVocales++;
  }
}
console.log(`Vocales en "${frase}": ${contadorVocales}`);

// ───────────────────────────────────────────────────────────────────────────────
// Ejemplo 4: Crear array de cuadrados
// ───────────────────────────────────────────────────────────────────────────────

const originales = [1, 2, 3, 4, 5];
const cuadrados = [];

for (let num of originales) {
  cuadrados.push(num ** 2);
}
console.log(`Cuadrados: ${cuadrados}`); // [1, 4, 9, 16, 25]

//======================================================================================
// RESUMEN Y CHECKLIST
//======================================================================================

/*
✅ REGLAS DE ORO:

1. EVITA BUCLES INFINITOS
   - Siempre modifica la variable de control
   - Verifica que la condición eventualmente sea falsa

2. USA EL BUCLE ADECUADO
   - for       → Cuando sabes el número de iteraciones
   - for...of  → Para arrays y valores
   - for...in  → Para propiedades de objetos
   - while     → Cuando no sabes cuántas veces iterar
   - do...while → Cuando necesitas ejecutar al menos una vez

3. NOMBRES CLAROS
   - i, j, k para índices en bucles simples
   - Nombres descriptivos para datos: for (let producto of productos)

4. BREAK Y CONTINUE
   - break    → Sale completamente del bucle
   - continue → Salta a la siguiente iteración
   - Usa labels solo cuando sea necesario (bucles anidados)

5. RENDIMIENTO
   - Cachea la longitud si es costosa: let len = arr.length
   - Evita operaciones pesadas dentro del bucle
   - Considera métodos de array (map, filter) como alternativa

❌ ERRORES COMUNES:

  • Olvidar incrementar/decrementar → bucle infinito
  • Usar for...in con arrays → devuelve índices, no valores
  • Intentar modificar array en for...of → no funciona
  • Condiciones mal escritas → off-by-one errors
  • No usar let en for → problemas de scope

💡 ALTERNATIVAS MODERNAS (Métodos de Array):

  En lugar de bucles tradicionales, considera:
  
  • .forEach()  → Ejecutar función en cada elemento
  • .map()      → Transformar array
  • .filter()   → Filtrar elementos
  • .reduce()   → Acumular valores
  • .find()     → Encontrar elemento
  • .some()     → Verificar si alguno cumple
  • .every()    → Verificar si todos cumplen
  
  Ejemplo:
    // ❌ Con bucle tradicional
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
      }
    }
    
    // ✅ Con método moderno
    let pares = numeros.filter(n => n % 2 === 0);
*/

console.log("\n✅ Archivo de bucles cargado correctamente");
