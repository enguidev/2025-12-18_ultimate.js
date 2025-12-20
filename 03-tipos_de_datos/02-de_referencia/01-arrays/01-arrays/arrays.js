// Arrays o arreglos

/*
Los arrays en JavaScript son estructuras de datos que permiten almacenar múltiples valores 
en una sola variable. Son como listas ordenadas, donde cada elemento tiene una posición 
(índice) numérica que empieza en 0.
*/
/*
🧠 Características clave
Son objetos especiales con propiedades numéricas (índices) y métodos integrados.

Pueden contener cualquier tipo de dato: números, cadenas, booleanos, objetos, funciones, incluso otros arrays.

Su longitud es dinámica: puedes añadir o quitar elementos fácilmente.
*/

// Array literal vacío (un listado de animales)----------------------------------------
let animales = [];

// Array literal con datos-------------------------------------------------------------
let tipos_de_animales = ["gato", "perro"]; // Se puede usar comillas simples o dobles

// Diferentes declaraciones de Arrays--------------------------------------------------
let arr = new Array();
let arr2 = [];

// Array mixto
let mixto = [42, "texto", true, { nombre: "Carlos" }, [1, 2]];

// Mostrar el primer valor de un Array (los índices comienza desde el 0)
console.log(mixto[0]); // 42

// Insertar un elemento, en un lugar determinado al array
mixto[5] = "Coche";
console.log(mixto); // [ 42, 'texto', true, { nombre: 'Carlos' }, [ 1, 2 ], 'Coche' ]

// Si asignamos un valor a un índice no consecutivo al último--------------------------
mixto[10] = "conejo";
console.log(mixto); // Al mostrarlo veremos 4 huecos libres dentro
/*Si pulsamos en el desplegable en la consola de Chrome, veremos que no 
nos aparece los índices sin valores (aunque si la longitud del array)*/
console.log(mixto[7]); // Si mostramos el valor de un índice vacío nos dirá undefined

// Vamos a ver que tipo de dato es el array--------------------------------------------
console.log(typeof mixto); // object
// El array es de tipo object por lo que tiene métodos

// Mostrar longitud del array
console.log(mixto.length); // Si mostramos la longitud (propiedad 'length' con 'g') nos dirá que es de 111

// EJEMPLO //
// Ejemplo de saber si hay elementos repetidos entre 2 arrays sin utilizar un motón de bucles
const a = [1, 2, 3, 2, 2];
const b = ["midu", "dev", "midu"];
const c = [5, 10, 7, 8, 3];

// Creamos una función que recibe como parámetro el array
// Creamos una estructura de datos Set que no permiten duplicados y le pasamos el array
// Recuperamos su tamaño
// si el tamaño que tenemos ahora es menor que el del array original es que habían repetidos
// devolverá true si habían duplicados
//const hasDuplicate = (array) => new Set(array).size < array.length;
const hasDuplicate = (array) => new Set(array).size < array.length;

// 🧪 Ejemplos
console.log(hasDuplicate(a)); // true → hay repetidos
console.log(hasDuplicate(b)); // true → hay repetidos
console.log(hasDuplicate(c)); // false → todos únicos

// Modificar valor de una posición concreta
a[0] = 2;
a[1] = 4;
a[2] = 6;
console.log(a); // [ 2, 4, 6, 2, 2 ]
