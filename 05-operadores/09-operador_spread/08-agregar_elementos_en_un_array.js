// 🔹 Agregar elementos a un array con el operador Spread

// Tenemos el array 'nombres' con dos elementos: "Carlos" y "Eva"
const nombres = ["Carlos", "Eva"];

// Tenemos otros dos nombres
const nombre3 = "Nerea";
const nombre4 = "Irene";

// ✅ Añadir los otros dos nombres al final del array 'nombres'
const nombresAlFinal = [...nombres, nombre3, nombre4];
console.log(nombresAlFinal); // ["Carlos", "Eva", "Nerea", "Irene"]

// ✅ Añadir los otros dos nombres al principio del array 'nombres'
const nombresAlPrincipio = [nombre3, nombre4, ...nombres];
console.log(nombresAlPrincipio); // ["Nerea", "Irene", "Carlos", "Eva"]

// ✅ Añadir un nombre antes y otro después del array 'nombres'
const nombresMezclados = [nombre3, ...nombres, nombre4];
console.log(nombresMezclados); // ["Nerea", "Carlos", "Eva", "Irene"]
