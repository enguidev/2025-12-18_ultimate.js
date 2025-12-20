/*
🔹 Aunque Spread es muy versátil, tiene algunas limitaciones importantes
según el tipo de dato que intentamos expandir.
*/

// ✅ Funciona con arrays, strings, objetos, Set (convertido)
const set = new Set([1, 2, 3]);
const arrayDesdeSet = [...set]; // [1, 2, 3]

// ❌ No útil con objetos especiales como Date, RegExp, Function
const fecha = new Date();
const copiaFecha = { ...fecha };

console.log(copiaFecha); // {} ← no copia el comportamiento de Date

/*
🔴 El Spread copia propiedades enumerables propias, pero no métodos ni prototipos.
🔍 Para copiar estructuras como Date o funciones, se recomienda usar otras técnicas.
*/

// ✅ Ejemplo con string
const texto = "Hola";
const letras = [...texto]; // ["H", "o", "l", "a"]

/*
✅ En resumen:
  - Spread funciona bien con iterables y objetos planos
  - No es adecuado para copiar instancias con comportamiento complejo (Date, RegExp, etc.)
*/
