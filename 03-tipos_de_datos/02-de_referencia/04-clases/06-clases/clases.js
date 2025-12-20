// PROFE //----------------------------------------------------------------

// 2 formas de crear clases

// 1ª forma
function Fpersona(nombre) {
  this.nombre = nombre;
  this.edad = 0;
  this.cumplir = function () {
    this.edad++;
  };
}

// 2ª forma
class Cpersona {
  constructor(nombre) {
    this.nombre = nombre;
    this.edad = 0;
  }
  cumplir() {
    this.edad++;
  }
}

/* Creamos un objeto/instancia de tipo Fpersona 
   y le pasamos por parámetro el nombre
*/
let p1 = new Fpersona("Raúl");

// Ejecutamos su método cumplir()
p1.cumplir();

// Vemos el objeto
console.log(p1);

// Vemos Raúl tiene 1
console.log(p1.nombre + " tiene: " + p1.edad);

let p2 = new Cpersona("Raúl2");
p2.cumplir();
p2.cumplir();
console.log(p2.nombre + " tiene: " + p2.edad);

console.log(typeof Fpersona); //function
console.log(typeof Cpersona); //function

console.log(p2);
let p3 = new Cpersona("pedro");
console.log(p3);
Cpersona.prototype.apellido = "xx";

p4 = new Cpersona(" persona 4");
p4.apellido = "otro";
console.log(p4.apellido);

// Como vemos tenemos acceso directo a los atributos
// de los objetos de la clase. Se pueden declarar atributos privados¿?
