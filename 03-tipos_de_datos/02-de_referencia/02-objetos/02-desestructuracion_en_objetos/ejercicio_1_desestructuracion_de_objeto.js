// Tenemos el siguiente objeto
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  color: "gris",
};

// 1.- Extrae marca y modelo en variables individuales.
const { marca, modelo } = coche;
/* 
El motor de JavaScript busca esas propiedades en el objeto 
coche y las asigna a las variables marca y modelo.
*/
console.log("marca: ", marca); // "Toyota"
console.log("modelo", modelo); // "Corolla"

// 2.- Renombra color como colorExterior.
const { color: colorExterior } = coche;
/*
La clave original (color) sigue viniendo del objeto, pero ahora 
la almacenamos con otro nombre para usarla como nos convenga.
*/
console.log(colorExterior); // "gris"

// 3.- Asigna un valor por defecto a combustible como "gasolina".
/*
-El objeto coche no tiene una propiedad combustible.

-Usamos el operador = dentro de la desestructuración para decir: 
“si esta propiedad no existe, usa este valor por defecto”.

-Es una manera elegante de manejar valores opcionales sin tener que hacer condicionales aparte.
*/
const { combustible = "gasolina" } = coche;

const datosPares = Array.from({ length: 50 }, (_, i) =>
  (i + 1) % 2 === 0 ? { id: i + 1, valor: `dato${i + 1}` } : null
).filter(Boolean);
/*
[
  { id: 2, valor: "dato2" },
  { id: 4, valor: "dato4" },
  { id: 6, valor: "dato6" },
  ...
  { id: 50, valor: "dato50" }
]

*/
// Crear 50 espacios
// Sólo convierte en objeto aquellos donde i +1 es par
// Los impares se convierten en null y luego los eliminamos con .filter(Boolean)
