// ****** Rest y Spread en valores inexistentes ****** //

const [a, b, c] = [10, 20];
console.log(c); // undefined ✅

const usuario = { nombre: "Carlos", edad: 46 };
const { ciudad } = usuario;
console.log(ciudad); // undefined ✅

const { ciudad: ubicacion = "Desconocida" } = usuario;
console.log(ubicacion); // "Desconocida" ✅

/*
🧠 Recomendación:
Siempre que desestructures propiedades opcionales, considera usar valores por defecto.
*/

// ****** Comparativa directa Rest vs Spread en objetos ****** //
const original = { d: 1, e: 2, f: 3 };

const { d, ...restoDelObjeto } = original;
console.log(restoDelObjeto); // { e: 2, f: 3 }

const extendido = { ...original, g: 4 };
console.log(extendido); // { d: 1, e: 2, f: 3, g: 4 }

/*
✅ Rest extrae lo que no se menciona.
✅ Spread reconstruye y expande lo que ya existe.
*/

// 🔍 ¿Qué pasa si desestructuramos algo que no existe?

// En arrays
const numeros = [10, 20];

// Intentamos extraer tres elementos
const [e, f, g] = numeros;

console.log(e); // 10
console.log(f); // 20
console.log(g); // undefined ✅

/*
🔸 Si el índice no existe, el valor desestructurado será undefined. 
🔸 No lanza error, pero puede causar confusión si no se valida.
*/

// En objetos (ejemplo 1)
const usuario2 = { nombre: "Carlos", edad: 46 };

// Intentamos extraer una propiedad inexistente.
const { ciudad2 } = usuario2;

console.log(ciudad2); // undefined ✅

// En objetos (ejemplo 2)
const usuario3 = {
  id: 1,
  nombre2: "Carlos",
};
const { type, nombre2 } = usuario3;
console.log(nombre2); // Carlos
console.log(type); // undefined ✅

/*
🔸 Si la propiedad no existe, el valor será undefined. 
🔸 No lanza error, pero puede afectar lógica condicional o renderizado.
*/

// ✅ Soluciones recomendadas.

// 1. Asignar valores por defecto.

// En array
const [h, i, j = 0] = [10, 20];
console.log(j); // 0 ✅

// En objeto
const { ciudad3 = "Desconocida" } = usuario;
console.log(ciudad3); // "Desconocida" ✅

// 2. Validar antes de usar
if (ciudad !== undefined) {
  console.log("Ciudad:", ciudad);
}

/*
🧠 Reglas didácticas:

  -La desestructuración no lanza errores si el valor no existe.

  -El resultado será undefined, lo cual puede ser útil o peligroso según el contexto.

  -Siempre puedes usar valores por defecto para evitar comportamientos inesperados.
*/

/*
📦 Este archivo complementa los ejemplos de Rest y Spread vistos en:
→ parametros_rest_en_desestructuracion.js
→ ejemplos_contrastados_rest_spread.js
*/
