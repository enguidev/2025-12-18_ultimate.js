// 🔹 Desestructuración avanzada: Parámetros Rest

/*
Rest permite capturar el "resto" de elementos o propiedades en una estructura.
Se usa en desestructuración para agrupar lo que no se extrae explícitamente.
*/

// *** ✅ En arrays *** //
const [primero, segundo, ...resto] = [10, 20, 30, 40, 50];

console.log(primero); // 10
console.log(segundo); // 20
console.log(resto); // [30, 40, 50]

// 🔍 Útil para ignorar los primeros elementos y capturar el resto.

// *** ✅ En objetos *** //
const usuario = {
  nombre: "Carlos",
  edad: 46,
  ciudad: "Murcia",
  profesion: "Desarrollador",
};

const { nombre, ...datosExtra } = usuario;

console.log(nombre); // "Carlos"
console.log(datosExtra); // { edad: 46, ciudad: "Murcia", profesion: "Desarrollador" }

// 🔍 Útil para extraer propiedades clave y agrupar el resto.

// *** ✅ En funciones *** //
function sumar(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}

console.log(sumar(1, 2, 3, 4)); // 10

/*
🔍 En funciones, Rest captura argumentos variables como array.
*/

// *** ⚠️ Advertencia común *** //
const datos = { a: 1, b: 2, c: 3 };
const { a, ...restoDatos } = datos;

console.log(restoDatos); // { b: 2, c: 3 }

/*
✅ Solo funciona en desestructuración directa.
❌ No puedes usar Rest para copiar objetos: usa Spread en su lugar.
*/

// *** 🧠 Comparativa rápida *** //

/*
Rest:
- Se usa en definiciones (desestructuración, parámetros de función)
- Agrupa elementos restantes
- Sintaxis: ...nombre

Spread:
- Se usa en llamadas o construcción
- Expande elementos
- Sintaxis: ...nombre
*/

