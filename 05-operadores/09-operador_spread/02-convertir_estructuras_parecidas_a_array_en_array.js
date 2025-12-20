/*
🔹 Las estructuras array-like (como NodeList o HTMLCollection) se parecen a los arrays,
pero no heredan del prototipo `Array`, sino de `Object`. Por ello, no disponen de métodos
como `.map()`, `.filter()`, `.reduce()`, etc.
*/

const nodeList = document.getElementsByClassName("pokemon");

/*
🔹 Con el operador Spread (solo válido para estructuras iterables), convertimos la colección
en un array real. Es útil cuando solo queremos acceder a los métodos de `Array` sin modificar
los elementos.
*/
const array1 = [...nodeList];

/*
🔹 Con `Array.from()` podemos convertir y transformar al mismo tiempo.
Ideal cuando queremos extraer información o aplicar una función de mapeo durante la conversión.
*/
const array2 = Array.from(nodeList, (el) => el.textContent.trim());

console.log(nodeList); // HTMLCollection [div.pokemon, div.pokemon, div.pokemon]
console.log(array1); // Array [div.pokemon, div.pokemon, div.pokemon]
console.log(array2); // Array ["Pikachu", "Charmander", "Bulbasaur"]

// Verificación
/*
Aunque `nodeList` (en este caso un `HTMLCollection`) se parece a un array —tiene una propiedad 
`length`, puedes acceder por índice (`nodeList[0]`) y recorrerlo con `for` o `for...of`— no es realmente 
un array, porque:

  - No hereda del prototipo `Array`
  - No tiene métodos como `.map()`, `.filter()`, `.reduce()`, etc.
  - Su prototipo es `HTMLCollection`, que hereda de `Object`
  - Por eso `Array.isArray(nodeList)` devuelve `false`
*/
console.log(Array.isArray(nodeList)); // false
console.log(Array.isArray(array1)); // true
console.log(Array.isArray(array2)); // true

/*
✅ En resumen: si necesitas convertir una colección DOM en un array real,
usa Spread si no vas a transformar, o `Array.from()` si quieres mapear al vuelo.
*/
