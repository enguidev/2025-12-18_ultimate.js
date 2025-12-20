// Array para los ejemplos
let numeros = [1, 2, 3];
console.log("Array para los ejemplos: ", numeros); // [ 1, 2, 3 ]

// includes() – Verifica si contiene un valor
// includes: devuelve true o false si se encuentra
console.log("includes(4): ", numeros.includes(4)); // includes(4): false

// indexOf(): devuelve el índice del primer coincidente o -1 (o falso)
console.log("indexOf(2): ", numeros.indexOf(2)); // indexOf(2): 1

// lastIndexOf() – Devuelve el índice del último valor coincidente
console.log("lastIndexOf(1):", numeros.lastIndexOf(1)); // lastIndexOf(1): 0

// find() – Devuelve el primer elemento que cumple una condición
let encontrado = numeros.find((x) => x > 1); // Devuelve el 'valor' del primer elemento que cumple la función de prueba
console.log("find(x > 1):", encontrado); // find(x > 1): 2

// El primer elemento (valor) del array
// Creamos un array de objetos
let arr2 = [
  { nombre: "manzanas", precio: "5" },
  { nombre: "peras", precio: "8" },
  { nombre: "sandia", precio: "4" },
  { nombre: "aguacate", precio: "12" },
  { nombre: "melon", precio: "9" },
  { nombre: "platanos", precio: "7" },
];

let arr1 = ["ana", "carmen", "luis", "ana"];
let resultado;

resultado = arr1.find(function (elemento) {
  return elemento == "carmen";
});
console.log("arr2: ", resultado); // arr2: carmen

// El primer elemento (valor) que comience por a
resultado = arr1.find((elemento) => elemento.charAt(0) == "a"); //es6 notación flecha
console.log("arr1: ", resultado); // arr1: ana

// Otro ejemplo
// Tenemos un array de objetos de usuarios
const usuarios = [
  { id: 1, nombre: "Carlos", anioNacimiento: 1979 },
  { id: 2, nombre: "Eva", anioNacimiento: 1977 },
  { id: 3, nombre: "Nerea", anioNacimiento: 2007 },
  { id: 3, nombre: "Irene", anioNacimiento: 2012 },
];

// Queremos que nos retorne el 'objeto' con el nombre buscado
const resultado2 = usuarios.find(
  (usuario) => usuario.nombre.toLocaleLowerCase() === "carlos"
);
console.log("Usuario con nombre Carlos:", resultado2); // Usuario con nombre Carlos: { id: 1, nombre: 'Carlos', anioNacimiento: 1979 }

// Vamos a buscar un usuario por año de nacimiento
// Para simplificar la verbosidad de la callback podemos hacer uso de la desestructuración del objeto usuarios2
const resultado3 = usuarios.find(
  ({ anioNacimiento }) => anioNacimiento === 1977
);
console.log("Usuario nacido en 1977:", resultado3); // Usuario nacido en 1977: { id: 2, nombre: 'Eva', anioNacimiento: 1977 }

// findIndex() – Devuelve el índice del primer elemento que cumple una condición
let indice = numeros.findIndex((x) => x > 1); // Devuelve el 'índice' del primer elemento que cumple la función de prueba
console.log("findIndex(x > 1):", indice); // findIndex(x > 1): 1

// at() – Accede por índice, incluyendo negativos (desde ES2022)
// Devuelve el valor en la posición indicada, admite índices para contar desde el final /asi lo calcula internamente: array.at(-n) === array[array.length - n]

// El índice 0 es el primero índice
console.log("at(0):", numeros.at(0)); // at(0): 1

// El índice -1 sería el último indice ya que lo interpreta del final al inicio
console.log("at(-1):", numeros.at(-1)); // at(-1): 3

// El índice -2 sería entonces el penúltimo índice
console.log("at(-2):", numeros.at(-2)); // at(-2): 2

/*
✅ Ventajas de .at()

  -Más legible que array[array.length - 1]

  -Evita errores con índices negativos

  -Funciona también en String (¡no solo en arrays!)
*/
const indice2 = "Hola".at(-1); // "a"
console.log("Última letra de 'Hola':", indice2); // Última letra de 'Hola': a

/*
⚠️ Si usas índices negativos con corchetes tradicionales (array[-1]), obtendrás undefined.
Solo .at() interpreta los negativos como posiciones desde el final.
*/
console.log(numeros[-1]); // undefined

/*
.slice(), extrae una parte del array y devuelve un nuevo array, sin modificar el original.
📦 Sintaxis --> array.slice(inicio, fin);
    
      -inicio: índice desde donde empieza a copiar (incluido)

      -fin: índice hasta donde copia (no incluido)

      -Si omites fin, copia hasta el final
*/
let letras = ["a", "b", "c", "d", "e"];
let parte = letras.slice(1, 4); // copia desde índice 1 hasta 3
console.log(parte); // [ 'b', 'c', 'd' ]

// 🧪 Ejemplo con un solo parámetro
let desdeC = letras.slice(2); // copia desde índice 2 hasta el final
console.log(desdeC); // [ 'c', 'd', 'e' ]

// 🧪 Ejemplo con índices negativos
let ultimos = letras.slice(-2); // copia los dos últimos
console.log(ultimos); // [ 'd', 'e' ]

// Si inicio > fin, devuelve un array vacío
console.log(letras.slice(4, 2)); // []

//--------------------------------------------------------------------------------------
// hasDuplicate() – Verifica si hay elementos repetidos en un array
//--------------------------------------------------------------------------------------
// EJEMPLO //
// Ejemplo de saber si hay elementos repetidos entre 2 arrays sin utilizar un motón de bucles
// Creamos una función que recibe como parámetro el array
// Creamos una estructura de datos Set que no permiten duplicados y le pasamos el array
// Recuperamos su tamaño
// si el tamaño que tenemos ahora es menor que el del array original es que habían repetidos
// devolverá true si habían duplicados

const hasDuplicate = (array) => new Set(array).size < array.length;

console.log("hasDuplicate([1, 2, 3]):", hasDuplicate([1, 2, 3])); // false
console.log("hasDuplicate([1, 2, 2]):", hasDuplicate([1, 2, 2])); // true
console.log("hasDuplicate(['a', 'b', 'a']):", hasDuplicate(["a", "b", "a"])); // true

//--------------------------------------------------------------------------------------
// MÉTODOS MODERNOS (ES2023) – findLast() y findLastIndex()
//--------------------------------------------------------------------------------------
// findLast() – Devuelve el último elemento que cumple una condición
let ultimoMayorQue1 = numeros.findLast((x) => x > 1);
console.log("findLast(x > 1):", ultimoMayorQue1); // 3

// findLastIndex() – Devuelve el índice del último elemento que cumple una condición
let indiceUltimoMayorQue1 = numeros.findLastIndex((x) => x > 1);
console.log("findLastIndex(x > 1):", indiceUltimoMayorQue1); // 2

/*
⚠️ Estos métodos están disponibles desde ES2023.
No funcionan en versiones antiguas de navegadores o entornos sin soporte moderno.
*/
