// ✂️ Métodos para extraer partes de una cadena

// slice(start, end)
// Extrae desde 'start' hasta 'end' (sin incluirlo). Permite índices negativos.
const texto = "JavaScript";
console.log(texto.slice(4, 10)); // "Script"
console.log(texto.slice(-6)); // "Script"

// substring(start, end)
// Similar a slice, pero NO acepta negativos. Intercambia los valores si start > end.
console.log(texto.substring(4, 10)); // "Script"
console.log(texto.substring(10, 4)); // "Script" (invierte los índices)

// substr(start, length)
// ⚠️ Obsoleto. Extrae desde 'start' con longitud 'length'.
console.log(texto.substr(4, 6)); // "Script"

// 🔎 Advertencia: Evita substr() en nuevos proyectos. Usa slice() para mayor compatibilidad.
