// 🔹 Fusionar Arrays con Spread

/*
El operador Spread permite combinar múltiples arrays en uno nuevo, 
sin modificar los originales.
*/

// *** ✅ Ejemplo básico *** //
const frontend = ["HTML", "CSS"]; // Tenemos el array frontend
const backend = ["Node.js", "Express"]; // Tenemos también el array backend

// Unimos los dos arrays (en la posición/orden que deseemos)
const fullStack = [...frontend, ...backend];
// 🔍 Cada array se expande y sus elementos se colocan en orden dentro del nuevo array.

// Mostramos el array resultante de unir los 2:
console.log(fullStack); // ["HTML", "CSS", "Node.js", "Express"]

// *** ✅ Fusionar con elementos adicionales *** //
// 🔹 Puedes intercalar elementos literales entre arrays expandidos.
const tecnologias = ["Git", ...frontend, "JavaScript", ...backend];

console.log(tecnologias);
// ["Git", "HTML", "CSS", "JavaScript", "Node.js", "Express"]

// *** ✅ Fusionar arrays anidados (¡ojo con la profundidad!) *** //
const a = [1, 2];
const b = [3, [4, 5]];

const fusion = [...a, ...b];
console.log(fusion); // [1, 2, 3, [4, 5]]

// 🔴 El Spread no aplana arrays anidados. Para eso necesitarías .flat().
