// A partir de ES6 (2015) tenemos las funciones flecha (arrow functions) () => {}
// Nos proporcionan una forma concisa de escribir funciones en JavaScript.
// Tienen ventajas y desventajas. Su uso no siempre es el más adecuado.

//--------------------------------------------------------------------------------------
// SINTAXIS BÁSICA
//--------------------------------------------------------------------------------------

// ✅ Función normal con un solo parámetro y una línea
function cambiarDeVehiculo(vehiculo) {
  return `Ha cambiado a un ${vehiculo}`;
}
console.log(cambiarDeVehiculo("Coche")); // Ha cambiado a un Coche

// ✅ Función flecha equivalente
const cambiarDeVehiculo2 = (vehiculo) => `Ha cambiado a un ${vehiculo}`;
console.log(cambiarDeVehiculo2("Ciclomotor")); // Ha cambiado a un Ciclomotor

// ✅ Función normal con varias líneas
function cambiarDeVehiculo3(vehiculo) {
  console.log("Hola");
  return `Ha cambiado a un ${vehiculo}`;
}
console.log(cambiarDeVehiculo3("Tren")); // Ha cambiado a un Tren

// ✅ Función flecha con varias líneas
const cambiarDeVehiculo4 = (vehiculo) => {
  console.log("Hola");
  return `Ha cambiado a un ${vehiculo}`;
};
console.log(cambiarDeVehiculo4("Avión")); // Ha cambiado a un Avión

// ✅ Varios parámetros
function cambiarDeVehiculo5(vehiculo, color) {
  return `Ha cambiado a un ${vehiculo} ${color}`;
}
console.log(cambiarDeVehiculo5("Patinete", "Azul")); // Ha cambiado a un Patinete Azul

const cambiarDeVehiculo6 = (vehiculo, color) =>
  `Ha cambiado a un ${vehiculo} ${color}`;
console.log(cambiarDeVehiculo6("Camión", "Blanco")); // Ha cambiado a un Camión Blanco

// ✅ Sin parámetros
function vehiculo() {
  return "Se le ha asignado un vehículo";
}
console.log(vehiculo()); // Se le ha asignado un vehículo

const vehiculo2 = () => "Se le ha asignado un vehículo";
console.log(vehiculo2()); // Se le ha asignado un vehículo

//--------------------------------------------------------------------------------------
// 🧪 Casos de uso ideales
//--------------------------------------------------------------------------------------
/*
✅ Las funciones flecha son ideales para:

  - Callbacks en métodos como map(), filter(), reduce()
  - Funciones breves y expresivas
  - Funciones anónimas dentro de otras funciones
  - Métodos que no necesitan this
*/

//--------------------------------------------------------------------------------------
// 🧭 Ejemplo didáctico completo
//--------------------------------------------------------------------------------------
const frutas = ["manzana", "pera", "kiwi"];

// Función tradicional
const mayusculasTradicional = frutas.map(function (f) {
  return f.toUpperCase();
});

// Función flecha
const mayusculasFlecha = frutas.map((f) => f.toUpperCase());

console.log(mayusculasFlecha); // [ 'MANZANA', 'PERA', 'KIWI' ]

//--------------------------------------------------------------------------------------
// ⚠️ LIMITACIONES DE LAS FUNCIONES FLECHA
//--------------------------------------------------------------------------------------

// ❌ No tienen su propio this (el contexto es el del padre global, por ejemplo window en el navegador)
const persona = {
  nombre: "Carlos",
  saludar: () => `Hola, soy ${this.nombre}`, // this no apunta al objeto
};
console.log(persona.saludar()); // Hola, soy undefined

// ✅ Solución: usar función tradicional
const persona2 = {
  nombre: "Carlos",
  saludar() {
    return `Hola, soy ${this.nombre}`;
  },
};
console.log(persona2.saludar()); // Hola, soy Carlos

// ❌ No se pueden usar como constructor (no funcionan con new)
const Animal = () => {};
// const gato = new Animal(); // TypeError: Animal is not a constructor

// ❌ No tienen propiedad prototype
// Las funciones flecha no tienen la propiedad prototype, por lo tanto:
// - No pueden usarse como constructoras
// - No pueden participar en herencia basada en prototipos
// - No se les pueden añadir métodos vía prototype

function Vehiculo() {}
console.log(typeof Vehiculo.prototype); // object ✅

const VehiculoFlecha = () => {};
console.log(typeof VehiculoFlecha.prototype); // undefined ❌

// ❌ No tienen arguments
const mostrar = () => {
  // console.log(arguments); // ReferenceError
};

// ✅ Solución: usar parámetros rest
const mostrar2 = (...args) => {
  console.log(args);
};
mostrar2("uno", "dos"); // [ 'uno', 'dos' ]

// ❌ No tienen super, new.target ni yield
// No son adecuadas para clases, herencia o generadores

// ❌ No se pueden usar como métodos get/set
const objeto = {
  valor: 1,
  get obtener() {
    return this.valor; // ✅
  },
  set actualizar(v) {
    this.valor = v; // ✅
  },
  // ❌ No usar arrow function aquí
};
