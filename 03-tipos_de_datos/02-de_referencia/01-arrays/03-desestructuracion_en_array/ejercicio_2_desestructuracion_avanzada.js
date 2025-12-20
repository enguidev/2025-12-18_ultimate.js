//--------------------------------------------------------------------------------------
// CASOS ADICIONALES DE DESESTRUCTURACIÓN
//--------------------------------------------------------------------------------------

// 4.- Valores por defecto (si el array es más corto de lo esperado)
const colores = ["rojo", "verde"];
const [color1, color2, color3 = "azul"] = colores;
console.log(color1); // "rojo"
console.log(color2); // "verde"
console.log(color3); // "azul" (valor por defecto)

// 5.- Intercambiar valores sin variable temporal
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

// 6.- Extraer elementos no consecutivos
const numeros = [10, 20, 30, 40, 50];
const [primero, , tercero, , quinto] = numeros;
console.log(primero, tercero, quinto); // 10, 30, 50

// 7.- Desestructuración en parámetros de función
function mostrarInfo([nombre, edad, ciudad = "Desconocida"]) {
  console.log(`${nombre} tiene ${edad} años y vive en ${ciudad}`);
}

mostrarInfo(["Ana", 25, "Madrid"]); // Ana tiene 25 años y vive en Madrid
mostrarInfo(["Luis", 30]); // Luis tiene 30 años y vive en Desconocida

// 8.- Combinar desestructuración con rest en funciones
function sumarPrimeroConResto([primero, ...resto]) {
  return primero + resto.reduce((suma, num) => suma + num, 0);
}

console.log(sumarPrimeroConResto([1, 2, 3, 4])); // 10 (1 + 2 + 3 + 4)

// 9.- Ignorar valores que no necesitas
const datos = ["Juan", 25, "Madrid", "Ingeniero", "Soltero"];
const [nombre, , , profesion] = datos;
console.log(nombre, profesion); // "Juan" "Ingeniero"

// 10.- Desestructuración anidada
const matriz = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const [[a1, a2], , [c1, c2]] = matriz;
console.log(a1, a2, c1, c2); // 1, 2, 5, 6
