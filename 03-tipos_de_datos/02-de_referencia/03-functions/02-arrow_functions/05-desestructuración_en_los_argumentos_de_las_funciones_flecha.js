//--------------------------------------------------------------------------------------
// ✅ Desestructuración en los argumentos de funciones flecha
//--------------------------------------------------------------------------------------
/* Podemos aplicar desestructuración (agregando los paréntesis en la declaración de parámetros) 
   directamente en los parámetros de una función flecha.
   Esto permite extraer propiedades específicas de un objeto o elementos de un array
   sin necesidad de acceder a ellos dentro del cuerpo de la función.
*/

// ✅ Desestructuración de objetos
/*
Si el nombre de los parámetros coinciden con los nombres de las propiedades del objeto,
esto nos ahorra tener que escribir user.name y user.edad
*/
const mostrarUsuario = ({ nombre, edad }) =>
  `Usuario: ${nombre}, Edad: ${edad}`;

const usuario = { nombre: "Ana", edad: 30, ciudad: "Murcia" };
console.log(mostrarUsuario(usuario)); // Usuario: Ana, Edad: 30

// ✅ Desestructuración de arrays
const mostrarCoordenadas = ([x, y]) => `Coordenadas: X=${x}, Y=${y}`;

const punto = [120, 300];
console.log(mostrarCoordenadas(punto)); // Coordenadas: X=120, Y=300
/*
-Si le pasamos un array de más de 2 elementos, almacenará el primero 
 en la x y el segundo en la y, el resto los ignorará

-Si le pasamos un array con un solo elemento (cuando necesita 2), el 
 primero se asignará a la x y a la y se le asignará undefined

-Si le pasamos un array vacío, tanto a x como a y se le asignará el 
 valor undefined

-Para evitar los undefined, se pueden asignar valores por defecto
*/

// ✅ Desestructuración con valores por defecto
const mostrarVehiculo = ({ tipo = "Coche", color = "azul" }) =>
  `Vehículo: ${tipo} ${color}`;

console.log(mostrarVehiculo({ tipo: "Camión" })); // Vehículo: Camión azul
console.log(mostrarVehiculo({})); // Vehículo: Coche azul

// ✅ Combinación con parámetros rest
const procesarEvento = ({ tipo, ...detalles }) => {
  console.log(`Tipo: ${tipo}`);
  console.log("Detalles:", detalles);
};

procesarEvento({
  tipo: "click",
  x: 120,
  y: 300,
  origen: "botón izquierdo",
});
/*
Tipo: click
Detalles: { x: 120, y: 300, origen: 'botón izquierdo' }
*/

// ⚠️ Advertencia: si el argumento no tiene la estructura esperada, puede lanzar error
// const mostrar = ({ nombre }) => `Hola ${nombre}`;
// mostrar(null); // ❌ TypeError: Cannot destructure property 'nombre' of 'null'

// ✅ Solución: usar valores por defecto en el parámetro
const mostrarSeguro = ({ nombre } = {}) => `Hola ${nombre || "desconocido"}`;
console.log(mostrarSeguro()); // Hola desconocido
