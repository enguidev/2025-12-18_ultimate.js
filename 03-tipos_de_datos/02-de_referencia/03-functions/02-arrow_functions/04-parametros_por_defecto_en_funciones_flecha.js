//--------------------------------------------------------------------------------------
// ✅ Parámetros por defecto en funciones flecha
//--------------------------------------------------------------------------------------
/* Podemos asignar valores por defecto a los parámetros de una función flecha.
   Esto permite que la función se comporte correctamente incluso si no se le pasan argumentos.
*/

const cambiarDeVehiculo = (vehiculo = "Coche", color = "azul") =>
  `Has cambiado a un ${vehiculo} ${color}`;

// Impresión normal con los dos parámetros
console.log(cambiarDeVehiculo("Camión", "blanco")); // Has cambiado a un Camión blanco

// Impresión con un solo parámetro (el segundo tomará el valor por defecto "azul")
console.log(cambiarDeVehiculo("Patinete")); // Has cambiado a un Patinete azul

// Impresión sin ningún parámetro (ambos tomarán los valores por defecto)
console.log(cambiarDeVehiculo()); // Has cambiado a un Coche azul
