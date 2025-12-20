/*
🔹 Aunque ambos usan la sintaxis `...`, Spread y Rest tienen propósitos distintos:

  - Spread: se usa para **expandir** elementos (en llamadas, arrays, objetos)
  - Rest: se usa para **agrupar** elementos (en definiciones de funciones o desestructuración)
*/

// 🟢 Spread en llamada a función
const nombres = ["Carlos", "Eva"];
function saludar(a, b) {
  console.log(`Hola ${a} y ${b}`);
}
saludar(...nombres); // Hola Carlos y Eva

// 🔵 Rest en definición de función
function saludarGrupo(...personas) {
  console.log(`Hola a todos: ${personas.join(", ")}`);
}
saludarGrupo("Carlos", "Eva", "Nerea"); // Hola a todos: Carlos, Eva, Nerea

/*
✅ En resumen:
  - Spread: convierte un array en argumentos individuales
  - Rest: agrupa argumentos individuales en un array
*/
