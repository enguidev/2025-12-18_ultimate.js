// ****** Rest y Spread en valores inexistentes ****** //

/*
🔍 ¿Qué ocurre si desestructuramos un elemento de un array o una propiedad de un objeto que no existe?
*/

// En arrays
const [a, b, c] = [10, 20];
console.log(c); // undefined ✅

/*
✅ Si el índice no existe, el valor será undefined.
❌ No lanza error, pero puede causar lógica inesperada si no se valida.
*/

// En objetos
const usuario = { nombre: "Carlos", edad: 46 };
const { ciudad } = usuario;
console.log(ciudad); // undefined ✅

/*
✅ Si la propiedad no existe, el valor será undefined.
✅ Puedes asignar valores por defecto para evitar problemas.
*/

const { ciudad: ubicacion = "Desconocida" } = usuario;
console.log(ubicacion); // "Desconocida" ✅

/*
🧠 Recomendación:
Siempre que desestructures propiedades opcionales, considera usar valores por defecto.
*/

// ****** Comparativa directa Rest vs Spread en objetos ****** //

const original = { d: 1, e: 2, f: 3 };

// Rest en desestructuración
const { d, ...restoDeA } = original;
console.log(restoDeA); // { e: 2, f: 3 }

// Spread en construcción
const extendido = { ...original, g: 4 };
console.log(extendido); // { d: 1, e: 2, f: 3, g: 4 }

/*
✅ Rest extrae lo que no se menciona.
✅ Spread reconstruye y expande lo que ya existe.
*/

// ****** Cierre técnico ****** //

/*
Esta sección complementa la guía del operador Spread y Rest con casos reales, advertencias comunes y buenas prácticas.
Ideal para normalizar datos, evitar errores por undefined y escribir funciones flexibles y expresivas.

📦 Puedes integrar este archivo como:
17-rest_vs_spread_funcion_desestructuracion.js

🧭 Y añadirlo al índice Markdown como:
| 17 | Rest vs Spread en funciones y desestructuración | `17-rest_vs_spread_funcion_desestructuracion.js` |
*/
