// 🔹 Advertencias comunes al usar el operador Spread

/*
Aunque Spread es muy útil, hay casos donde puede fallar o no comportarse como esperamos.
Aquí van algunos errores típicos:
*/

// ❌ Intentar usar Spread en un valor no iterable
const resultado = { ...123 }; // 🔴 Error: 123 no es iterable

// ❌ Usar Spread en objetos con métodos especiales
const fecha = new Date();
const copia = { ...fecha };
console.log(copia); // {} ← no copia el comportamiento de Date

/*
🔍 Explicación:
- Spread copia solo propiedades enumerables propias.
- No copia métodos, prototipos ni comportamientos internos.
*/

// ❌ Confusión entre Rest y Spread
function ejemplo(...args) {
  const copia = { ...args }; // 🔴 Error: args es un array, no un objeto
}

/*
✅ Solución: si quieres copiar un array, usa Spread en un array literal:
const copia = [...args];
*/

/*
✅ En resumen:
- Asegúrate de que el valor sea iterable o un objeto plano.
- No esperes que Spread clone comportamientos complejos (usa structuredClone o Lodash).
- No confundas Rest (en definiciones) con Spread (en llamadas o construcción).
*/

/*
📌 Recomendación final:
Si trabajas con estructuras complejas o necesitas clonación profunda,
considera usar herramientas como Lodash (_.cloneDeep) o el método structuredClone().
*/
