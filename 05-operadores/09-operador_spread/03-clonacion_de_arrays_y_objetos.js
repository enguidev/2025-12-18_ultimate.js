// Copiamos array y objetos de forma inmutable

// *** EJEMPLO CON UN OBJETO *** //
// Tenemos le array numbers
const myCar = {
  brand: "Renault",
  model: "Clio",
  yearManufacture: "2005",
};

/*
Desestructuramos el contenido del objeto myCar con el operador 
Spread y se lo asignamos a un objeto literal nuevo:
*/
const anotherCar = { ...myCar };

// Asignamos 2025 como año de fabricación del anotherCar
anotherCar.yearManufacture = 2025;

/* 
Si vemos el valor del año de fabricación del coche inicial (myCar), 
vemos que es 2005 y no 2025 como cambiamos a anotherCar:
*/
console.log(`Año de fabricación de anotherCar: ${myCar.yearManufacture}`); // Año de fabricación de anotherCar: 2005

// *** EJEMPLO CON UN ARRAY *** //
const numbers = [1, 2, 3]; // Tenemos le array numbers
/*
Desestructuramos el contenido del array numbers con el operador 
Spread y se lo asignamos a un nuevo literal de array:
*/
const numbers2 = [...numbers];

numbers2.push(4); // Insertamos el valor 4 al array numbers2

/* 
Mostramos los valores de los 2 arrays y vemos que sólo se 
ha agregado el valor 4 al array numbers2:
*/
console.log(`Valores del array numbers: ${numbers}`);
console.log(`Valores del array numbers2: ${numbers2}`);

/*
Punto importante cuando trabajamos con objetos o arrays anidados:
Para no tener efectos secundarios inesperados, Spread sólo realiza 
copias poco profundas (shallow copy), es decir,sólo copia el primer nivel.
Si hay objetos o arrays anidados, no se copian, sino que se referencian.
🔍 Ejemplo con array anidado:
*/
const original = [1, 2, [3, 4]];

const copia = [...original];

// Modificamos el array anidado
copia[2][0] = 10;

console.log(original); // [1, 2, [10, 4]]
/*
🔴 Aunque copia parece independiente, el array anidado [3, 4] sigue siendo 
el mismo objeto en memoria. Cambiarlo en copia también lo cambia en original.
*/
console.log(copia); // [1, 2, [10, 4]]

// 🔍 Ejemplo con objeto anidado:
const userOriginal = {
  nombre: "Ana",
  direccion: {
    ciudad: "Madrid",
  },
};

const userCopia = { ...userOriginal };

// Modificamos el objeto anidado
userCopia.direccion.ciudad = "Barcelona";

console.log(`Ciudad del usuario copia: ${userOriginal.direccion.ciudad}`); // "Ciudad del usuario copia: Barcelona"
console.log(`Ciudad del usuario original: ${userCopia.direccion.ciudad}`); // "Ciudad del usuario original: Barcelona"

// 🔴 Lo mismo ocurre: direccion es un objeto anidado, y ambos objetos apuntan al mismo lugar en memoria.

// Si necesitamos una copia profunda (deep copy), podemos usar:

// 1.- structuredClone (moderno y nativo)
const copiaProfunda = structuredClone(userOriginal);

// 2.-JSON.parse(JSON.stringify(...)) (limitado pero útil)
const copiaProfunda2 = JSON.parse(JSON.stringify(userOriginal));
// ⚠️ Este método no copia funciones, fechas, ni valores especiales como undefined o Infinity.
