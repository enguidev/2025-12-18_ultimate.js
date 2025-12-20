// Propiedades condicionales

/*
🧠 ¿Qué son las propiedades condicionales?
Son propiedades que solo se incluyen en un objeto si se 
cumple una condición. En lugar de usar if o mutar el objeto 
después, se construyen directamente en la expresión del objeto 
usando técnicas como:

  -Operador ternario

  -Cortocircuito lógico (&&)

  -Spread condicional
*/

// Ejemplo 1 (con operador ternario):

// Tenemos un objeto personaje
const personaje = {
  name: "Superman",
  type: "Superhéroe",
};

// Creamos unas habilidades
const abilities = ["Super fuerza", "Volar", "Rayos por los ojos"];

// *** EJEMPLO CON LODASH *** //
// Si fuera con la Lodash, Podrías usar _.merge para fusionar objetos condicionales:
// ✅ Importamos Lodash (forma compatible con Node.js sin módulos ES)
const _ = require("lodash");

// ✅ Objeto base: contiene los datos mínimos del usuario
const base = { nombre: "Carlos" };

// ✅ Variable condicional: decide si se incluye el historial
const incluirHistorial2 = true;

// ✅ Objeto opcional: se construye solo si incluirHistorial2 es true
// Si es false, se crea un objeto vacío {}
const opcional = incluirHistorial2
  ? { historial: { sesiones: 120 } } // ✅ Se incluye esta propiedad si la condición es verdadera
  : {}; // ❌ No se añade nada si es falsa

// ✅ Fusionamos los objetos usando _.merge
// - El primer argumento es un objeto vacío {} para no mutar base ni opcional
// - _.merge combina profundamente base y opcional
const resultado = _.merge({}, base, opcional);

// ✅ Mostramos el resultado final
console.log("🟢 Resultado:", resultado);

// Ejemplo 2(con cortocircuito lógico):
const incluirHistorial = true;
const ciudadNueva = "Cartagena";
const edadNueva = null;

// ✅ Construimos el objeto con propiedades condicionales
const usuario = {
  nombre: "Carlos",
  perfil: {
    ...(ciudadNueva && { ciudad: ciudadNueva }), // Si ciudadNueva tiene valor, se añade la propiedad ciudad
    ...(edadNueva !== null && { edad: edadNueva }), //Evita añadir edad: null si no hay valor
  },
  // Añade el bloque historial solo si la condición es verdadera
  ...(incluirHistorial && {
    historial: {
      sesiones: 120,
      últimaConexión: "2025-09-18",
    },
  }),
};

console.log("🟢 Usuario:", usuario);

// Ejemplo 3 (Spread condicional puro):

const mostrarDatos = true;
const datosExtra = {
  nivel: "Avanzado",
  experiencia: "5 años",
};

// ✅ Construimos el objeto con Spread condicional
const perfil = {
  nombre: "Carlos",
  ...(mostrarDatos && datosExtra), // Solo se añade si mostrarDatos es true
};

console.log("🟢 Perfil:", perfil);

/*
🧠 Recuerda:
Estas técnicas permiten construir objetos limpios, inmutables y dinámicos.
Evita mutaciones posteriores y mantén la lógica declarativa en la construcción.
*/
