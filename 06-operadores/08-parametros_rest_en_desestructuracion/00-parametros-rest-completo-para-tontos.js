// ============================================================
// 🎯 PARÁMETROS REST (...) EN JAVASCRIPT - GUÍA COMPLETA PARA TONTOS
// ============================================================

/*
============================================================
PARTE 1: ¿QUÉ DIABLOS ES REST? 🤔
============================================================

IMAGINA QUE TIENES UNA PIZZA:
- Tomas 2 pedazos para ti
- El REST (resto) es para tus amigos

REST = "Lo que SOBRA después de tomar lo que necesitas"

IMPORTANTE: REST usa los mismos 3 puntos que SPREAD (...)
¡PERO HACEN LO CONTRARIO!

SPREAD = EXPANDIR (sacar las piezas)
REST = AGRUPAR (meter las piezas en una bolsa)
*/

console.log("============ ¿QUÉ ES REST? ============\n");

// Ejemplo visual simple:
const numeros = [1, 2, 3, 4, 5];

// Tomo los primeros 2, el RESTO lo guardo en una variable
const [primero, segundo, ...resto] = numeros;

console.log("Primero:", primero); // 1
console.log("Segundo:", segundo); // 2
console.log("El RESTO:", resto); // [3, 4, 5]

console.log("\n💡 REST agrupa 'lo que sobra' en un array");

/*
============================================================
PARTE 2: REST vs SPREAD - LA GRAN CONFUSIÓN
============================================================

TABLA COMPARATIVA COMPLETA:

┌─────────────────────────────────────────────────────────────────────┐
│ CONCEPTO        │ REST (...nombre)        │ SPREAD (...nombre)      │
├─────────────────┼─────────────────────────┼─────────────────────────┤
│ 💎 Propósito    │ Captura el resto        │ Expande elementos       │
│ 🎯 Contexto     │ Definiciones            │ Llamadas/Construcción   │
│ 🎨 Tipo         │ Agrupa en array/objeto  │ Descompone              │
│ 🔧 En funciones │ function f(...args) {}  │ f(...valores)           │
│ 📦 En arrays    │ const [a, ...resto]=arr │ const nuevo=[...arr]    │
│ 🗂️ En objetos   │ const {x, ...resto}=obj │ const nuevo={...obj}    │
└─────────────────┴─────────────────────────┴─────────────────────────┘

METÁFORA:
- SPREAD = Vaciar una mochila (sacar todo)
- REST = Llenar una mochila (meter lo que sobra)

REGLA DE ORO:
Rest = "recolectar lo que sobra" (en definiciones)
Spread = "repartir lo que tienes" (en construcciones)
*/

console.log("\n\n============ REST VS SPREAD ============\n");

const valores = [10, 20, 30];

// SPREAD: Expandir
console.log("SPREAD - Expandir:", ...valores); // 10 20 30

// REST: Agrupar
const [primeroRest, ...restoRest] = valores;
console.log("REST - Agrupar resto:", restoRest); // [20, 30]

/*
============================================================
PARTE 3: REST EN FUNCIONES (ARGUMENTOS VARIABLES)
============================================================
*/

console.log("\n\n============ REST EN FUNCIONES ============\n");

// --- Ejemplo 1: Sumar cualquier cantidad de números ---
console.log("--- 1. SUMAR N NÚMEROS ---\n");

function sumar(...numeros) {
  console.log("Argumentos recibidos:", numeros);
  return numeros.reduce((total, num) => total + num, 0);
}

console.log("sumar(1, 2, 3):", sumar(1, 2, 3)); // 6
console.log("sumar(5, 10, 15, 20):", sumar(5, 10, 15, 20)); // 50
console.log("sumar(100):", sumar(100)); // 100

// También funciona con SPREAD al llamar
const misNumeros = [1, 2, 3];
console.log("sumar(...misNumeros):", sumar(...misNumeros)); // 6

console.log("\n💡 REST captura TODOS los argumentos en un array");

// --- Ejemplo 2: Jugador con habilidades (CASO REAL) ---
console.log("\n--- 2. JUGADOR CON HABILIDADES ---\n");

function imprimirJugador(nombreJugador, tipoJugador, ...habilidadesJugador) {
  console.log(`${nombreJugador} es un ${tipoJugador}.`);
  console.log(`Sus habilidades son: ${habilidadesJugador.join(", ")}`);
}

/*
El primer parámetro "Carlos" → nombreJugador
El segundo "monstruo" → tipoJugador
El resto → ...habilidadesJugador (array)
*/

imprimirJugador("Carlos", "monstruo", "golpear fuerte");
// Carlos es un monstruo.
// Sus habilidades son: golpear fuerte

imprimirJugador("Carlos", "monstruo", "golpear fuerte", "lanzar rayo");
// Carlos es un monstruo.
// Sus habilidades son: golpear fuerte, lanzar rayo

imprimirJugador(
  "Ana",
  "maga",
  "curar",
  "teletransporte",
  "bola de fuego",
  "escudo mágico"
);
// Ana es una maga.
// Sus habilidades son: curar, teletransporte, bola de fuego, escudo mágico

// --- Ejemplo 3: Primer argumento fijo, resto variable ---
console.log("\n--- 3. SALUDO FLEXIBLE ---\n");

function saludar(saludo, ...nombres) {
  console.log(`${saludo}: ${nombres.join(", ")}`);
}

saludar("Hola", "Carlos", "Eva", "Nerea");
// "Hola: Carlos, Eva, Nerea"

saludar("Buenos días", "Ana", "Luis");
// "Buenos días: Ana, Luis"

// --- Ejemplo 4: Logger con categoría ---
console.log("\n--- 4. LOGGER FLEXIBLE ---\n");

function log(tipo, ...mensajes) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}] [${tipo}]:`, ...mensajes);
}

log("INFO", "Aplicación iniciada");
log("ERROR", "No se pudo conectar", "Código:", 500);
log("DEBUG", "Variable x =", 42, "y =", 84);

/*
============================================================
PARTE 4: REST EN ARRAYS (DESESTRUCTURACIÓN)
============================================================
*/

console.log("\n\n============ REST EN ARRAYS ============\n");

// --- Ejemplo 1: Tomar primeros elementos, resto aparte ---
console.log("--- 1. PRIMEROS Y RESTO ---\n");

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

const [primerDia, segundoDia, ...restoSemana] = dias;

console.log("Primer día:", primerDia); // "Lunes"
console.log("Segundo día:", segundoDia); // "Martes"
console.log("Resto de semana:", restoSemana); // ["Miércoles", "Jueves", "Viernes"]

// --- Ejemplo 2: Solo el primero importa ---
console.log("\n--- 2. SOLO EL PRIMERO ---\n");

const puntuaciones = [95, 87, 92, 78, 85];
const [mejor, ...otras] = puntuaciones;

console.log("Mejor puntuación:", mejor); // 95
console.log("Otras puntuaciones:", otras); // [87, 92, 78, 85]

// --- Ejemplo 3: Ignorar algunos del medio ---
console.log("\n--- 3. IGNORAR DEL MEDIO ---\n");

const colores = ["rojo", "verde", "azul", "amarillo", "morado"];
const [color1, , color3, ...restoColores] = colores;
//           ↑ Este espacio vacío ignora "verde"

console.log("Primer color:", color1); // "rojo"
console.log("Tercer color:", color3); // "azul"
console.log("Resto:", restoColores); // ["amarillo", "morado"]

// ⚠️ IMPORTANTE: REST siempre debe ir AL FINAL
console.log("\n⚠️ REGLA: REST siempre va AL FINAL");

// ❌ Esto NO funciona:
// const [...resto, ultimo] = [1, 2, 3]; // ERROR!

// ✅ Correcto:
const [primeroOk, ...restoOk] = [1, 2, 3];

/*
============================================================
PARTE 5: REST EN OBJETOS (DESESTRUCTURACIÓN)
============================================================
*/

console.log("\n\n============ REST EN OBJETOS ============\n");

// --- Ejemplo 1: Extraer propiedades específicas ---
console.log("--- 1. EXTRAER Y AGRUPAR RESTO ---\n");

const usuario = {
  nombre: "Carlos",
  edad: 46,
  ciudad: "Murcia",
  profesion: "Desarrollador",
  email: "carlos@example.com",
};

// Extraigo nombre y edad, el resto lo guardo en 'datosExtra'
const { nombre, edad, ...datosExtra } = usuario;

console.log("Nombre:", nombre); // "Carlos"
console.log("Edad:", edad); // 46
console.log("Datos extra:", datosExtra);
// { ciudad: "Murcia", profesion: "Desarrollador", email: "carlos@example.com" }

// --- Ejemplo 2: Excluir información sensible ---
console.log("\n--- 2. EXCLUIR CONTRASEÑA ---\n");

const cuenta = {
  username: "carlos123",
  email: "carlos@mail.com",
  password: "secreto123",
  rol: "admin",
};

// Excluimos password, guardamos el resto
const { password, ...cuentaSegura } = cuenta;

console.log("Cuenta sin password:", cuentaSegura);
// { username: "carlos123", email: "carlos@mail.com", rol: "admin" }

console.log("\n✅ Perfecto para APIs: envía datos sin info sensible");

// --- Ejemplo 3: Extraer ID, mantener resto ---
console.log("\n--- 3. SEPARAR ID DEL RESTO ---\n");

const alumno = {
  id: 1,
  nombre: "Jose",
  apellido: "Sanchez",
};

const { id, ...restoDatosAlumno } = alumno;
console.log("ID:", id); // 1
console.log("Resto:", restoDatosAlumno); // { nombre: "Jose", apellido: "Sanchez" }

// --- Ejemplo 4: Añadir propiedades con valores por defecto ---
console.log("\n--- 4. VALORES POR DEFECTO CON REST ---\n");

const coche = {
  marca: "Toyota",
  modelo: "Corolla",
};

/*
1. Desestructuramos: si 'extras' no existe, se inicializa como []
2. El resto de propiedades van a rest2
3. Reconstruimos con SPREAD añadiendo extras
*/
const { extras = [], ...rest2 } = coche;
const cocheCompleto = { ...rest2, extras };

console.log("Coche original:", coche);
console.log("Coche completo:", cocheCompleto);
// { marca: "Toyota", modelo: "Corolla", extras: [] }

/*
============================================================
PARTE 6: CASO AVANZADO - NORMALIZAR DATOS
============================================================
*/

console.log("\n\n============ NORMALIZAR DATOS CON REST ============\n");

// Tenemos un array de motos, pero no todas tienen especificaciones
const motos = [
  { marca: "Aprilia", tipo: "Cross" },
  {
    marca: "Honda",
    tipo: "Carretera",
    especificaciones: ["CBR", "1.100CC", "350Km/h"],
  },
  { marca: "Ducati", tipo: "Carretera" },
];

console.log("Motos originales:", motos);

// Función que normaliza: añade especificaciones vacías si no existen
function especificacionesPorDefecto(objeto) {
  const { especificaciones = [], ...restoDePropiedades } = objeto;
  return { ...restoDePropiedades, especificaciones };
}

// Aplicamos la función a todas las motos
const motosNormalizadas = motos.map(especificacionesPorDefecto);

console.log("\nMotos normalizadas:", motosNormalizadas);
/*
[
  { marca: "Aprilia", tipo: "Cross", especificaciones: [] },
  { marca: "Honda", tipo: "Carretera", especificaciones: ["CBR", "1.100CC", "350Km/h"] },
  { marca: "Ducati", tipo: "Carretera", especificaciones: [] }
]
*/

console.log(
  "\n✅ Todas las motos tienen ahora la propiedad 'especificaciones'"
);

/*
============================================================
PARTE 7: VALORES INEXISTENTES Y UNDEFINED
============================================================
*/

console.log("\n\n============ VALORES INEXISTENTES ============\n");

// --- Problema: ¿Qué pasa si no existe? ---
console.log("--- PROBLEMA: VALORES UNDEFINED ---\n");

const [a, b, c] = [10, 20];
console.log("a:", a); // 10
console.log("b:", b); // 20
console.log("c:", c); // undefined ⚠️

const persona = { nombre: "Ana", edad: 25 };
const { ciudad } = persona;
console.log("ciudad:", ciudad); // undefined ⚠️

console.log("\n🔴 No da error, pero puede causar bugs");

// --- Solución 1: Valores por defecto ---
console.log("\n--- SOLUCIÓN 1: VALORES POR DEFECTO ---\n");

// En arrays
const [x, y, z = 0] = [10, 20];
console.log("z con default:", z); // 0 ✅

// En objetos
const { ciudad: ubicacion = "Desconocida" } = persona;
console.log("ubicacion con default:", ubicacion); // "Desconocida" ✅

// Ejemplo más completo
const usuario2 = { nombre: "Carlos", edad: 46 };
const { ciudad: ciudadUsuario = "Desconocida" } = usuario2;
console.log("Ciudad:", ciudadUsuario); // "Desconocida"

// --- Solución 2: Validar antes de usar ---
console.log("\n--- SOLUCIÓN 2: VALIDAR ---\n");

const producto = { nombre: "Laptop", precio: 1000 };
const { descuento } = producto;

if (descuento !== undefined) {
  console.log("Descuento aplicado:", descuento);
} else {
  console.log("Sin descuento disponible");
}

// --- Con operador de coalescencia nula (??) ---
const descuentoFinal = descuento ?? 0;
console.log("Descuento final:", descuentoFinal); // 0

// --- Ejemplo práctico: tipo de usuario ---
console.log("\n--- EJEMPLO: TIPO DE USUARIO ---\n");

const usuario3 = {
  id: 1,
  nombre: "Carlos",
};

const { type, nombre: nombreUsuario } = usuario3;
console.log("Nombre:", nombreUsuario); // "Carlos"
console.log("Tipo:", type); // undefined
console.log("Tipo con default:", type ?? "regular"); // "regular"

/*
============================================================
PARTE 8: REST CON ARRAYS VACÍOS O POCOS ELEMENTOS
============================================================
*/

console.log("\n\n============ REST CON POCOS ELEMENTOS ============\n");

// ¿Qué pasa si hay menos elementos?
const [primero1, segundo1, ...resto1] = [100];
console.log("primero:", primero1); // 100
console.log("segundo:", segundo1); // undefined
console.log("resto:", resto1); // [] ← Array vacío

// ¿Y si no hay resto?
const [primero2, segundo2, ...resto2] = [1, 2];
console.log("resto sin elementos:", resto2); // [] ← Array vacío, no undefined

console.log("\n💡 REST siempre devuelve un array, aunque esté vacío");

/*
============================================================
PARTE 9: CASOS DE USO REALES
============================================================
*/

console.log("\n\n============ CASOS DE USO REALES ============\n");

// --- Caso 1: Separar cabecera de items ---
console.log("--- CASO 1: DATOS CSV ---\n");

const csvData = [
  ["Nombre", "Edad", "Ciudad"],
  ["Carlos", "46", "Murcia"],
  ["Ana", "30", "Madrid"],
  ["Luis", "25", "Barcelona"],
];

const [headers, ...rows] = csvData;

console.log("Cabeceras:", headers);
console.log("Filas de datos:", rows);

// --- Caso 2: Primer elemento especial ---
console.log("\n--- CASO 2: COLA DE TAREAS ---\n");

const tareas = ["Urgente: Llamar cliente", "Revisar emails", "Actualizar docs"];
const [urgente, ...normales] = tareas;

console.log("🚨 Tarea urgente:", urgente);
console.log("📋 Tareas normales:", normales);

// --- Caso 3: Configuración base + opcionales ---
console.log("\n--- CASO 3: CONFIGURACIÓN SERVIDOR ---\n");

function crearServidor(puerto, ...opciones) {
  const config = {
    puerto,
    opciones: opciones.length > 0 ? opciones : ["default"],
  };
  console.log("Servidor configurado:", config);
}

crearServidor(3000, "cors", "compression", "helmet");
crearServidor(8080);

// --- Caso 4: Props de React (excluir algunas) ---
console.log("\n--- CASO 4: PROPS DE COMPONENTE ---\n");

function Boton({ onClick, disabled, ...otrosProps }) {
  console.log("Props del botón:", {
    onClick: typeof onClick,
    disabled,
    resto: otrosProps,
  });
}

Boton({
  onClick: () => {},
  disabled: false,
  className: "btn-primary",
  id: "submit-btn",
  "data-test": "button",
});

// --- Caso 5: Merge selectivo ---
console.log("\n--- CASO 5: MERGE SELECTIVO ---\n");

const productoBase = {
  id: 1,
  nombre: "Laptop",
  precio: 1000,
  stock: 5,
};

const { stock, ...productoParaMostrar } = productoBase;

console.log("Para mostrar al cliente:", productoParaMostrar);
console.log("Stock guardado internamente:", stock);

/*
============================================================
PARTE 10: REST + SPREAD COMBINADOS (PODER MÁXIMO)
============================================================
*/

console.log("\n\n============ REST + SPREAD COMBINADOS ============\n");

// --- Ejemplo 1: Actualizar objeto inmutablemente ---
console.log("--- 1. ACTUALIZAR OBJETO ---\n");

const estadoOriginal = {
  usuario: "Carlos",
  logueado: false,
  rol: "usuario",
};

// Cambio logueado, mantengo el resto
const { logueado, ...restoEstado } = estadoOriginal;
const nuevoEstado = { ...restoEstado, logueado: true };

console.log("Estado original:", estadoOriginal);
console.log("Nuevo estado:", nuevoEstado);

// --- Ejemplo 2: Función que transforma ---
console.log("\n--- 2. FUNCIÓN TRANSFORMADORA ---\n");

function transformarUsuario({ password, ...datosPublicos }) {
  return {
    ...datosPublicos,
    verificado: true,
    fechaCreacion: new Date().toLocaleDateString(),
  };
}

const usuarioRaw = {
  username: "carlos",
  email: "c@c.com",
  password: "123",
  edad: 46,
};

const usuarioTransformado = transformarUsuario(usuarioRaw);
console.log("Transformado:", usuarioTransformado);

// --- Ejemplo 3: Construir objeto desde base ---
console.log("\n--- 3. CONSTRUIR DESDE BASE ---\n");

const base = { edad: 46 };
const perfil = { nombre: "Carlos", ...base };
console.log("Perfil:", perfil); // { nombre: "Carlos", edad: 46 }

// --- Ejemplo 4: Comparativa directa ---
console.log("\n--- 4. REST vs SPREAD EN ACCIÓN ---\n");

const original = { d: 1, e: 2, f: 3 };

// REST: extrae lo que NO mencionas
const { d, ...restoDelObjeto } = original;
console.log("REST - resto:", restoDelObjeto); // { e: 2, f: 3 }

// SPREAD: expande lo que YA tienes
const extendido = { ...original, g: 4 };
console.log("SPREAD - extendido:", extendido); // { d: 1, e: 2, f: 3, g: 4 }

console.log("\n💡 REST extrae, SPREAD expande");

/*
============================================================
PARTE 11: ERRORES COMUNES
============================================================
*/

console.log("\n\n============ ERRORES COMUNES ============\n");

console.log("--- ERROR 1: REST no al final ---\n");
console.log("❌ const [...resto, ultimo] = [1,2,3]");
console.log("✅ const [primero, ...resto] = [1,2,3]");

console.log("\n--- ERROR 2: Confundir REST con SPREAD ---\n");
console.log("REST (agrupar):   const [a, ...rest] = array");
console.log("SPREAD (expandir): const nuevo = [...array]");

console.log("\n--- ERROR 3: Múltiples REST ---\n");
console.log("❌ const [a, ...rest1, ...rest2] = array");
console.log("✅ Solo puede haber UN rest por desestructuración");

console.log("\n--- ERROR 4: Olvidar que REST devuelve array/objeto ---\n");

const [head, ...tail] = [1, 2, 3];
console.log("tail es un array:", Array.isArray(tail)); // true
console.log("tail NO es un número:", typeof tail); // "object"

console.log("\n--- ERROR 5: Usar REST fuera de desestructuración ---\n");
console.log("❌ const resto = ...objeto");
console.log("✅ const { prop, ...resto } = objeto");

/*
============================================================
PARTE 12: EJERCICIOS PRÁCTICOS
============================================================
*/

console.log("\n\n============ EJERCICIOS PRÁCTICOS ============\n");

console.log("--- Ejercicio 1: Primera y última ---");
function obtenerPrimeraYUltima(array) {
  const [primera, ...resto] = array;
  const ultima = resto[resto.length - 1] || primera;
  return { primera, ultima };
}
console.log(obtenerPrimeraYUltima([10, 20, 30, 40]));
// { primera: 10, ultima: 40 }

console.log("\n--- Ejercicio 2: Multiplicar todos ---");
function multiplicar(...numeros) {
  return numeros.reduce((total, n) => total * n, 1);
}
console.log("2 × 3 × 4 =", multiplicar(2, 3, 4)); // 24

console.log("\n--- Ejercicio 3: Crear usuario público ---");
function crearPerfilPublico(usuario) {
  const { password, ssn, ...publico } = usuario;
  return publico;
}
const usuarioPrivado = {
  nombre: "Ana",
  email: "ana@mail.com",
  password: "secret",
  ssn: "123-45-6789",
  ciudad: "Madrid",
};
console.log("Perfil público:", crearPerfilPublico(usuarioPrivado));

console.log("\n--- Ejercicio 4: Promedio de N números ---");
function promedio(...valores) {
  if (valores.length === 0) return 0;
  const suma = valores.reduce((a, b) => a + b, 0);
  return suma / valores.length;
}
console.log("Promedio de 10, 20, 30:", promedio(10, 20, 30)); // 20

console.log("\n--- Ejercicio 5: Formatear lista ---");
function formatearLista(titulo, ...items) {
  console.log(`\n${titulo}:`);
  items.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item}`);
  });
}
formatearLista("Mi lista de compras", "Pan", "Leche", "Huevos", "Café");

/*
============================================================
PARTE 13: RESUMEN Y CHEAT SHEET
============================================================
*/

console.log("\n\n============ RESUMEN FINAL ============\n");

console.log(`
📚 PARÁMETROS REST (...) - RESUMEN COMPLETO:

✅ QUÉ ES:
  Agrupa "lo que sobra" en un array o objeto

✅ CONTEXTOS DE USO:
  
  1️⃣ FUNCIONES:
     function f(...args) {}        → Captura todos los argumentos
     function f(a, b, ...rest) {}  → Captura argumentos restantes
  
  2️⃣ ARRAYS:
     const [a, ...rest] = array    → Captura elementos restantes
     const [a, b, ...rest] = arr   → Captura desde el tercero
  
  3️⃣ OBJETOS:
     const {x, ...rest} = obj      → Captura propiedades restantes
     const {a, b, ...rest} = obj   → Captura todas menos a y b

✅ REGLAS IMPORTANTES:
  - REST siempre va AL FINAL ⚠️
  - Solo puede haber UN rest por desestructuración
  - Devuelve array (en arrays/funciones) u objeto (en objetos)
  - Si no hay elementos, devuelve array/objeto vacío (no undefined)

✅ REST vs SPREAD:
  
  REST (agrupar):
    const [a, ...rest] = [1,2,3]      → rest = [2,3]
    const {x, ...rest} = {x:1, y:2}   → rest = {y:2}
    function f(...args) {}            → args = [todos]
  
  SPREAD (expandir):
    const nuevo = [...array]          → expande array
    const nuevo = {...objeto}         → expande objeto
    funcion(...array)                 → pasa como argumentos

✅ CASOS DE USO:
  ✓ Funciones con argumentos variables
  ✓ Excluir propiedades sensibles (password, ssn)
  ✓ Separar datos (header vs rows)
  ✓ Normalizar estructuras
  ✓ Capturar "el resto" en desestructuración
  ✓ Props de componentes (React, Vue)

⚠️ VALORES INEXISTENTES:
  Si no existe → undefined
  Solución 1: const {x = valorDefault} = obj
  Solución 2: Validar con if (x !== undefined)
  Solución 3: Usar operador ?? (nullish coalescing)

💡 POWER COMBO:
  Combinar REST + SPREAD para transformaciones inmutables:
  
  const {password, ...safe} = usuario;
  const nuevoUsuario = {...safe, verificado: true};

🎯 CUÁNDO USAR:
  ✓ Argumentos flexibles en funciones
  ✓ Excluir propiedades de objetos
  ✓ Separar "algunos" de "el resto"
  ✓ Crear APIs limpias y flexibles
  ✓ Normalizar datos inconsistentes

❌ CUÁNDO NO USAR:
  ✗ Si sabes exactamente cuántos argumentos hay
  ✗ Si necesitas tipos específicos (mejor TypeScript)
  ✗ Para copiar objetos (usa SPREAD en su lugar)

📊 TABLA COMPARATIVA FINAL:

| Contexto   | REST                      | SPREAD                    |
|------------|---------------------------|---------------------------|
| Funciones  | Captura argumentos        | Expande argumentos        |
| Arrays     | Agrupa elementos          | Expande elementos         |
| Objetos    | Agrupa propiedades        | Copia/construye objetos   |
| Propósito  | Recolectar lo que sobra   | Repartir lo que tienes    |
| Definición | function(...args)         | funcion(...valores)       |
| Resultado  | Array u objeto            | Elementos individuales    |
`);

console.log("\n\n🎉 FIN DE LA GUÍA COMPLETA DE PARÁMETROS REST");
console.log("¡Ahora ya dominas REST y SPREAD al 100%! 🚀");
console.log("\n💪 PRACTICA CON LOS EJERCICIOS");
console.log("🧠 RECUERDA: REST agrupa, SPREAD expande");
