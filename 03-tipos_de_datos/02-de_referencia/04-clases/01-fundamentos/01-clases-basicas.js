// ============================================
// 01-CLASES-BASICAS.JS
// Fundamentos de Clases en JavaScript
// ============================================

console.log("=== 1. CLASES BÁSICAS ===\n");

// ============================================
// 1️⃣ FORMA ANTIGUA: Función Constructora (Pre-ES6)
// ============================================

console.log("--- Función Constructora (Antigua) ---");

function Animal(nombre, tipo) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.energia = 100;

  // ❌ PROBLEMA: Cada instancia crea una copia del método
  this.comer = function () {
    this.energia += 10;
    console.log(`${this.nombre} está comiendo. Energía: ${this.energia}`);
  };
}

const perro1 = new Animal("Rex", "Perro");
const gato1 = new Animal("Misu", "Gato");

console.log(perro1);
perro1.comer();

// Verificar que son instancias diferentes
console.log("¿Son el mismo método?", perro1.comer === gato1.comer); // false ❌

// ============================================
// 2️⃣ FORMA MODERNA: Class (ES6 / 2015)
// ============================================

console.log("\n--- Class Syntax (Moderna) ---");

class AnimalModerno {
  // El constructor se ejecuta al crear una instancia
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.energia = 100;
  }

  // ✅ Los métodos se definen UNA SOLA VEZ en el prototype
  comer() {
    this.energia += 10;
    console.log(`${this.nombre} está comiendo. Energía: ${this.energia}`);
  }

  dormir() {
    this.energia = 100;
    console.log(`${this.nombre} durmió y recuperó toda su energía`);
  }

  jugar() {
    this.energia -= 20;
    if (this.energia < 0) this.energia = 0;
    console.log(`${this.nombre} jugó. Energía: ${this.energia}`);
  }
}

const perro2 = new AnimalModerno("Max", "Perro");
const gato2 = new AnimalModerno("Luna", "Gato");

console.log(perro2);
perro2.comer();
perro2.jugar();
perro2.dormir();

// ✅ Ahora comparten el mismo método (más eficiente)
console.log("¿Comparten el mismo método?", perro2.comer === gato2.comer); // true ✅

// ============================================
// 3️⃣ DIFERENCIAS CLAVE
// ============================================

console.log("\n--- Diferencias Clave ---");

// Ambas son funciones internamente
console.log("typeof Animal:", typeof Animal); // "function"
console.log("typeof AnimalModerno:", typeof AnimalModerno); // "function"

// Pero las clases tienen restricciones
try {
  Animal("Error", "test"); // ✅ Funciona (aunque no debería)
} catch (e) {
  console.log("Función constructora sin new:", e.message);
}

try {
  AnimalModerno("Error", "test"); // ❌ Lanza error
} catch (e) {
  console.log("Clase sin new:", e.message); // "Class constructor cannot be invoked without 'new'"
}

// ============================================
// 4️⃣ MÚLTIPLES INSTANCIAS
// ============================================

console.log("\n--- Múltiples Instancias ---");

class Coche {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.kilometraje = 0;
  }

  conducir(km) {
    this.kilometraje += km;
    console.log(
      `${this.marca} ${this.modelo} ha recorrido ${km}km. Total: ${this.kilometraje}km`
    );
  }

  mostrarInfo() {
    return `${this.marca} ${this.modelo} (${this.año}) - ${this.kilometraje}km`;
  }
}

const coche1 = new Coche("Toyota", "Corolla", 2020);
const coche2 = new Coche("Honda", "Civic", 2021);
const coche3 = new Coche("Ford", "Mustang", 2022);

coche1.conducir(100);
coche2.conducir(50);
coche3.conducir(200);

console.log(coche1.mostrarInfo());
console.log(coche2.mostrarInfo());
console.log(coche3.mostrarInfo());

// ============================================
// 5️⃣ VALORES POR DEFECTO
// ============================================

console.log("\n--- Valores por Defecto ---");

class Usuario {
  constructor(nombre, edad = 18, pais = "España") {
    this.nombre = nombre;
    this.edad = edad;
    this.pais = pais;
    this.activo = true; // Valor por defecto directo
  }

  presentarse() {
    console.log(
      `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy de ${this.pais}`
    );
  }
}

const user1 = new Usuario("Ana");
const user2 = new Usuario("Luis", 25);
const user3 = new Usuario("María", 30, "México");

user1.presentarse();
user2.presentarse();
user3.presentarse();

// ============================================
// 6️⃣ MÉTODOS QUE DEVUELVEN VALORES
// ============================================

console.log("\n--- Métodos que Devuelven Valores ---");

class Calculadora {
  constructor() {
    this.historial = [];
  }

  sumar(a, b) {
    const resultado = a + b;
    this.historial.push(`${a} + ${b} = ${resultado}`);
    return resultado;
  }

  restar(a, b) {
    const resultado = a - b;
    this.historial.push(`${a} - ${b} = ${resultado}`);
    return resultado;
  }

  multiplicar(a, b) {
    const resultado = a * b;
    this.historial.push(`${a} × ${b} = ${resultado}`);
    return resultado;
  }

  verHistorial() {
    console.log("--- Historial de Operaciones ---");
    this.historial.forEach((op, i) => console.log(`${i + 1}. ${op}`));
  }
}

const calc = new Calculadora();

const suma = calc.sumar(5, 3);
const resta = calc.restar(10, 4);
const mult = calc.multiplicar(6, 7);

console.log("Resultado de la suma:", suma);
console.log("Resultado de la resta:", resta);
console.log("Resultado de la multiplicación:", mult);

calc.verHistorial();

// ============================================
// 7️⃣ ENCADENAMIENTO DE MÉTODOS (Method Chaining)
// ============================================

console.log("\n--- Encadenamiento de Métodos ---");

class Personaje {
  constructor(nombre) {
    this.nombre = nombre;
    this.vida = 100;
    this.ataque = 10;
    this.defensa = 5;
  }

  entrenar() {
    this.ataque += 5;
    console.log(`${this.nombre} entrenó. Ataque: ${this.ataque}`);
    return this; // ✅ Devolver 'this' permite encadenar
  }

  defender() {
    this.defensa += 3;
    console.log(`${this.nombre} mejoró su defensa. Defensa: ${this.defensa}`);
    return this;
  }

  descansar() {
    this.vida = 100;
    console.log(`${this.nombre} descansó y recuperó toda su vida`);
    return this;
  }

  mostrarEstado() {
    console.log(
      `\n📊 ${this.nombre}: Vida=${this.vida}, Ataque=${this.ataque}, Defensa=${this.defensa}\n`
    );
    return this;
  }
}

const heroe = new Personaje("Aragorn");

// ✅ Podemos encadenar métodos porque cada uno devuelve 'this'
heroe
  .entrenar()
  .entrenar()
  .defender()
  .mostrarEstado()
  .entrenar()
  .defender()
  .mostrarEstado();

// ============================================
// 8️⃣ VERIFICAR INSTANCIAS
// ============================================

console.log("\n--- Verificar Instancias ---");

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const laptop = new Producto("Laptop", 999);
const telefono = new Producto("iPhone", 799);
const noEsProducto = { nombre: "Fake", precio: 100 };

console.log("laptop es instancia de Producto:", laptop instanceof Producto); // true
console.log("telefono es instancia de Producto:", telefono instanceof Producto); // true
console.log(
  "noEsProducto es instancia de Producto:",
  noEsProducto instanceof Producto
); // false
console.log("laptop es instancia de Object:", laptop instanceof Object); // true (todo es objeto)

// ============================================
// 9️⃣ RESUMEN Y MEJORES PRÁCTICAS
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
✅ MEJORES PRÁCTICAS:

1. Usa 'class' en lugar de funciones constructoras
2. Los nombres de clases empiezan con MAYÚSCULA
3. Define métodos dentro de la clase (no en el constructor)
4. Usa 'this' para acceder a propiedades de la instancia
5. Los métodos pueden devolver 'this' para encadenar
6. Valida con 'instanceof' cuando sea necesario

❌ EVITA:

1. Llamar clases sin 'new'
2. Definir métodos en el constructor (desperdicia memoria)
3. Modificar propiedades de manera descontrolada (solución: propiedades privadas)
4. Crear clases muy grandes (divide en clases más pequeñas)
`);
