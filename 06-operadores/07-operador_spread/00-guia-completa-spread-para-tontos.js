// ============================================================
// 🌟 OPERADOR SPREAD (...) EN JAVASCRIPT - GUÍA PARA TONTOS
// ============================================================

/*
============================================================
PARTE 1: ¿QUÉ DIABLOS ES EL SPREAD? 🤔
============================================================

IMAGINA QUE TIENES UNA CAJA DE LEGOS:
- Normalmente mueves la caja completa
- Con Spread, SACAS TODAS LAS PIEZAS y las pones en otra caja

EL SPREAD (...) ES COMO DECIR:
"Saca todo lo que hay dentro y ponlo aquí"

Símbolo: ... (tres puntos)
Se lee: "spread" (expandir)
*/

console.log("============ ¿QUÉ ES EL SPREAD? ============\n");

// Sin Spread: pasas la caja completa
const numeros = [1, 2, 3];
console.log("Sin spread:", numeros); // [1, 2, 3] ← La caja completa

// Con Spread: sacas todas las piezas
console.log("Con spread:", ...numeros); // 1 2 3 ← Las piezas sueltas

console.log("\n💡 Spread EXPANDE el contenido de arrays y objetos");

/*
============================================================
PARTE 2: EL PROBLEMA DE LA MUTACIÓN (POR QUÉ EXISTE SPREAD)
============================================================

PROBLEMA: En JavaScript, cuando "copias" un objeto o array,
realmente estás copiando la DIRECCIÓN de memoria, no el contenido.

METÁFORA: Es como darle a alguien la dirección de tu casa
en vez de construirle una casa nueva.
*/

console.log("\n\n============ EL PROBLEMA ============\n");

const miCoche = {
  marca: "Renault",
  modelo: "Clio",
  año: 2005,
};

// ❌ FORMA INCORRECTA: Esto NO copia el coche
const otroCoche = miCoche;

// Cambiamos el año del "otro" coche
otroCoche.año = 2025;

console.log("Mi coche original:", miCoche.año); // 2025 😱
console.log("El otro coche:", otroCoche.año); // 2025

console.log("\n🔴 ¡AMBOS CAMBIARON! Porque apuntan a la misma dirección");

// ✅ SOLUCIÓN CON SPREAD: Crea una NUEVA casa
const cocheIndependiente = { ...miCoche };
cocheIndependiente.año = 2030;

console.log("\n✅ CON SPREAD:");
console.log("Mi coche:", miCoche.año); // 2025
console.log("Coche independiente:", cocheIndependiente.año); // 2030
console.log("¡Ahora sí son diferentes! 🎉");

/*
============================================================
PARTE 3: SPREAD EN ARRAYS (LO MÁS BÁSICO)
============================================================
*/

console.log("\n\n============ SPREAD EN ARRAYS ============\n");

// --- Ejemplo 1: Copiar arrays ---
console.log("--- 1. COPIAR ARRAYS ---\n");

const original = [1, 2, 3];
const copia = [...original];

copia.push(4);

console.log("Original:", original); // [1, 2, 3]
console.log("Copia:", copia); // [1, 2, 3, 4]
console.log("✅ No se afectó el original!\n");

// --- Ejemplo 2: Fusionar arrays ---
console.log("--- 2. FUSIONAR ARRAYS ---\n");

const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];

const fullStack = [...frontend, ...backend];
console.log("FullStack:", fullStack); // ["HTML", "CSS", "Node.js", "Express"]

// También puedes intercalar elementos
const tecnologias = ["Git", ...frontend, "JavaScript", ...backend];
console.log("Con elementos extra:", tecnologias);

// --- Ejemplo 3: Agregar elementos ---
console.log("\n--- 3. AGREGAR ELEMENTOS ---\n");

const nombres = ["Carlos", "Eva"];

const alFinal = [...nombres, "Nerea", "Irene"];
console.log("Al final:", alFinal);

const alPrincipio = ["Nerea", "Irene", ...nombres];
console.log("Al principio:", alPrincipio);

const enMedio = ["Nerea", ...nombres, "Irene"];
console.log("En medio:", enMedio);

/*
============================================================
PARTE 4: SPREAD EN OBJETOS
============================================================
*/

console.log("\n\n============ SPREAD EN OBJETOS ============\n");

// --- Ejemplo 1: Copiar objetos ---
console.log("--- 1. COPIAR OBJETOS ---\n");

const persona = {
  nombre: "Carlos",
  edad: 46,
};

const personaCopia = { ...persona };
personaCopia.edad = 30;

console.log("Original:", persona); // { nombre: "Carlos", edad: 46 }
console.log("Copia:", personaCopia); // { nombre: "Carlos", edad: 30 }

// --- Ejemplo 2: Fusionar objetos ---
console.log("\n--- 2. FUSIONAR OBJETOS ---\n");

const datosPersonales = { nombre: "Carlos", edad: 46 };
const datosLaborales = { profesion: "Desarrollador", empresa: "TechCorp" };

const perfilCompleto = { ...datosPersonales, ...datosLaborales };
console.log("Perfil completo:", perfilCompleto);

// --- Ejemplo 3: Sobrescribir propiedades ---
console.log("\n--- 3. SOBRESCRIBIR PROPIEDADES ---\n");

const base = { rol: "usuario", activo: true };
const admin = { ...base, rol: "admin" }; // El último valor GANA

console.log("Base:", base); // { rol: "usuario", activo: true }
console.log("Admin:", admin); // { rol: "admin", activo: true }

console.log(
  "\n💡 TIP: El orden importa! El último valor sobrescribe al primero"
);

// --- Ejemplo 4: Agregar propiedades ---
console.log("\n--- 4. AGREGAR PROPIEDADES ---\n");

const usuario = {
  nombre: "Carlos",
  edad: 46,
};

const usuarioExtendido = {
  ...usuario,
  ciudad: "Murcia",
  profesion: "Desarrollador",
};

console.log("Usuario extendido:", usuarioExtendido);

/*
============================================================
PARTE 5: SPREAD EN FUNCIONES
============================================================
*/

console.log("\n\n============ SPREAD EN FUNCIONES ============\n");

// --- Ejemplo 1: Expandir array como argumentos ---
console.log("--- 1. EXPANDIR ARRAYS COMO ARGUMENTOS ---\n");

function sumar(a, b, c) {
  return a + b + c;
}

const valores = [1, 2, 3];

console.log("Sin spread: sumar(valores) =", sumar(valores)); // NaN (no funciona)
console.log("Con spread: sumar(...valores) =", sumar(...valores)); // 6 ✅

// --- Ejemplo 2: Math.max() con arrays ---
console.log("\n--- 2. ENCONTRAR EL MÁXIMO ---\n");

const numeros2 = [5, 10, 3, 8, 15, 2];

// ❌ Esto no funciona
console.log("Math.max(numeros2) =", Math.max(numeros2)); // NaN

// ✅ Con spread funciona
console.log("Math.max(...numeros2) =", Math.max(...numeros2)); // 15

/*
============================================================
PARTE 6: REST VS SPREAD (¡NO SON LO MISMO!)
============================================================

AUNQUE USAN LOS MISMOS 3 PUNTOS (...), HACEN LO OPUESTO:

- SPREAD: EXPANDE (saca las piezas de la caja)
- REST: AGRUPA (mete las piezas en una caja)
*/

console.log("\n\n============ REST VS SPREAD ============\n");

// 🟢 SPREAD: Expande un array en argumentos
const nums = [1, 2, 3];
console.log("SPREAD - ...nums:", ...nums); // 1 2 3

// 🔵 REST: Agrupa argumentos en un array
function sumarTodo(...argumentos) {
  console.log("REST - argumentos:", argumentos); // [1, 2, 3, 4, 5]
  return argumentos.reduce((sum, num) => sum + num, 0);
}

console.log("Suma total:", sumarTodo(1, 2, 3, 4, 5)); // 15

console.log("\n💡 RECUERDA:");
console.log("  SPREAD = Expandir (llamadas, arrays, objetos)");
console.log("  REST = Agrupar (definiciones de funciones)");

/*
============================================================
PARTE 7: DESESTRUCTURACIÓN INVERSA (EXCLUIR PROPIEDADES)
============================================================
*/

console.log("\n\n============ DESESTRUCTURACIÓN INVERSA ============\n");

const usuarioCompleto = {
  nombre: "Carlos",
  email: "carlos@example.com",
  password: "secreto123",
  rol: "admin",
};

// Queremos enviar los datos PERO SIN la contraseña
const { password, ...usuarioSeguro } = usuarioCompleto;

console.log("Usuario completo:", usuarioCompleto);
console.log("\nUsuario sin password:", usuarioSeguro);
console.log("\n✅ Perfecto para APIs: excluye datos sensibles");

// También funciona con arrays
const [primero, ...resto] = [1, 2, 3, 4, 5];
console.log("\nPrimero:", primero); // 1
console.log("Resto:", resto); // [2, 3, 4, 5]

/*
============================================================
PARTE 8: PROPIEDADES CONDICIONALES (¡MAGIA AVANZADA!)
============================================================
*/

console.log("\n\n============ PROPIEDADES CONDICIONALES ============\n");

const incluirHistorial = true;
const incluirPremiun = false;

const perfil = {
  nombre: "Carlos",
  email: "carlos@example.com",
  // Solo se añade si la condición es true
  ...(incluirHistorial && {
    historial: {
      sesiones: 120,
      ultimaConexion: "2025-12-25",
    },
  }),
  ...(incluirPremiun && {
    tipo: "premium",
    beneficios: ["Sin anuncios", "Soporte prioritario"],
  }),
};

console.log("Perfil:", perfil);
console.log("\n💡 historial se incluyó, pero tipo NO (condición false)");

/*
============================================================
PARTE 9: CONVERTIR "ARRAY-LIKE" EN ARRAYS REALES
============================================================
*/

console.log("\n\n============ CONVERTIR A ARRAY REAL ============\n");

// NodeList, arguments, etc. SE PARECEN a arrays pero NO LO SON
// No tienen métodos como .map(), .filter(), etc.

// ✅ Solución con Spread
const texto = "Hola";
const letras = [...texto];
console.log("String convertido a array:", letras); // ["H", "o", "l", "a"]

// Con Set
const set = new Set([1, 2, 3, 3, 3]);
const arrayDesdeSet = [...set];
console.log("Set convertido a array:", arrayDesdeSet); // [1, 2, 3]

/*
============================================================
PARTE 10: ⚠️ LIMITACIONES Y ADVERTENCIAS
============================================================
*/

console.log("\n\n============ LIMITACIONES DEL SPREAD ============\n");

console.log("--- 1. COPIA SUPERFICIAL (SHALLOW COPY) ---\n");

// ❌ PROBLEMA: Spread solo copia el PRIMER nivel
const usuarioOriginal = {
  nombre: "Ana",
  direccion: {
    ciudad: "Madrid",
  },
};

const usuarioCopia = { ...usuarioOriginal };
usuarioCopia.direccion.ciudad = "Barcelona";

console.log("Original:", usuarioOriginal.direccion.ciudad); // "Barcelona" 😱
console.log("Copia:", usuarioCopia.direccion.ciudad); // "Barcelona"

console.log("\n🔴 El objeto anidado 'direccion' se compartió!");

// ✅ SOLUCIÓN: Para copias profundas usa structuredClone
const copiaReal = structuredClone(usuarioOriginal);
copiaReal.direccion.ciudad = "Valencia";

console.log("\nCon structuredClone:");
console.log("Original:", usuarioOriginal.direccion.ciudad); // "Barcelona"
console.log("Copia real:", copiaReal.direccion.ciudad); // "Valencia"
console.log("✅ Ahora sí son independientes!");

console.log("\n\n--- 2. NO FUNCIONA CON OBJETOS ESPECIALES ---\n");

const fecha = new Date();
const fechaCopia = { ...fecha };

console.log("Fecha original:", fecha);
console.log("Fecha copiada:", fechaCopia); // {} ← Vacío!

console.log("\n🔴 Spread no copia métodos ni comportamientos especiales");

console.log("\n\n--- 3. NO FUNCIONA CON VALORES NO ITERABLES ---\n");

try {
  const numero = { ...123 }; // Esto da error
} catch (error) {
  console.log("❌ Error:", error.message);
}

console.log("✅ Spread solo funciona con iterables (arrays, objetos, strings)");

/*
============================================================
PARTE 11: EJEMPLOS PRÁCTICOS DEL MUNDO REAL
============================================================
*/

console.log("\n\n============ CASOS DE USO REALES ============\n");

// --- Caso 1: Actualizar estado en React ---
console.log("--- CASO 1: Actualizar estado (estilo React) ---\n");

let estado = {
  contador: 0,
  usuario: "Carlos",
};

// Actualizar solo el contador sin mutar el original
estado = { ...estado, contador: estado.contador + 1 };
console.log("Estado actualizado:", estado);

// --- Caso 2: Añadir item a un carrito ---
console.log("\n--- CASO 2: Carrito de compras ---\n");

let carrito = [
  { id: 1, nombre: "Laptop", precio: 1000 },
  { id: 2, nombre: "Mouse", precio: 25 },
];

const nuevoProducto = { id: 3, nombre: "Teclado", precio: 75 };

// Añadir sin mutar el original
carrito = [...carrito, nuevoProducto];
console.log("Carrito actualizado:", carrito);

// --- Caso 3: Configuración con valores por defecto ---
console.log("\n--- CASO 3: Configuración con defaults ---\n");

const configDefault = {
  tema: "claro",
  idioma: "es",
  notificaciones: true,
};

const configUsuario = {
  tema: "oscuro",
};

// Fusionar: las del usuario sobrescriben las default
const configFinal = { ...configDefault, ...configUsuario };
console.log("Configuración final:", configFinal);

// --- Caso 4: Eliminar duplicados ---
console.log("\n--- CASO 4: Eliminar duplicados ---\n");

const numerosConDuplicados = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const numerosSinDuplicados = [...new Set(numerosConDuplicados)];
console.log("Sin duplicados:", numerosSinDuplicados);

/*
============================================================
PARTE 12: RESUMEN Y CHEAT SHEET
============================================================
*/

console.log("\n\n============ RESUMEN FINAL ============\n");

console.log(`
📚 OPERADOR SPREAD (...) - RESUMEN:

✅ QUÉ ES:
  Expande (desempaqueta) el contenido de arrays y objetos

✅ USOS PRINCIPALES:
  1. Copiar arrays y objetos (shallow copy)
  2. Fusionar múltiples arrays u objetos
  3. Agregar elementos/propiedades sin mutar
  4. Pasar arrays como argumentos a funciones
  5. Excluir propiedades (con desestructuración)
  6. Construir objetos condicionales

✅ SINTAXIS:
  [...array]              → Copia/expande array
  {...objeto}             → Copia/expande objeto
  funcion(...array)       → Pasa array como argumentos
  [...array1, ...array2]  → Fusiona arrays
  {...obj1, ...obj2}      → Fusiona objetos
  {x, ...rest}            → Excluye x, agrupa el resto

⚠️ LIMITACIONES:
  - Solo copia SUPERFICIAL (shallow copy)
  - No copia métodos ni prototipos
  - No funciona con Date, RegExp, etc.
  - Para copias profundas: structuredClone() o Lodash

🎯 CUÁNDO USAR:
  - Necesitas inmutabilidad
  - Trabajas con React/Redux
  - Quieres código limpio y legible
  - Evitas mutar datos originales

❌ CUÁNDO NO USAR:
  - Estructuras muy anidadas (usa structuredClone)
  - Objetos con métodos complejos
  - Performance crítica con arrays gigantes

💡 TRUCOS:
  Math.max(...array)           → Máximo de un array
  [...new Set(array)]          → Eliminar duplicados
  {...obj, prop: valor}        → Actualizar propiedad
  const {x, ...rest} = obj     → Excluir propiedad
  ...(condicion && {prop})     → Propiedad condicional
`);

console.log("\n\n============ EJERCICIOS PRÁCTICOS ============\n");

console.log("--- Ejercicio 1: Combina estos arrays ---");
const frutas = ["🍎", "🍌"];
const verduras = ["🥕", "🥦"];
const comida = [...frutas, ...verduras];
console.log("Resultado:", comida);

console.log("\n--- Ejercicio 2: Copia y modifica ---");
const producto = { nombre: "Laptop", precio: 1000 };
const productoConDescuento = { ...producto, precio: 800 };
console.log("Original:", producto);
console.log("Con descuento:", productoConDescuento);

console.log("\n--- Ejercicio 3: Excluye la contraseña ---");
const cuenta = { user: "carlos", email: "c@c.com", pass: "123" };
const { pass, ...cuentaSegura } = cuenta;
console.log("Cuenta segura:", cuentaSegura);

console.log("\n--- Ejercicio 4: Encuentra el máximo ---");
const puntuaciones = [85, 92, 78, 95, 88];
const maxPuntuacion = Math.max(...puntuaciones);
console.log("Máxima puntuación:", maxPuntuacion);

console.log("\n\n🎉 FIN DE LA GUÍA DEL OPERADOR SPREAD");
console.log("¡Ahora ya sabes expandir como un profesional! 🚀");
console.log("\n💪 PRACTICA Y ÚSALO EN TUS PROYECTOS");
