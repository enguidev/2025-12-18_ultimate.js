// ============================================
// 03-CADENA-PROTOTIPOS.JS
// Prototype Chain en JavaScript
// ============================================

console.log("=== 3. CADENA DE PROTOTIPOS ===\n");

// ============================================
// 1️⃣ ¿QUÉ ES EL PROTOTYPE?
// ============================================

console.log("--- Concepto de Prototype ---");

// En JavaScript, TODO es un objeto (excepto null y undefined)
// Cada objeto tiene una propiedad interna [[Prototype]]

function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`);
};

const ana = new Persona("Ana");
const luis = new Persona("Luis");

// Ambas instancias comparten el mismo método
console.log("¿Comparten el método?", ana.saludar === luis.saludar); // true

ana.saludar();
luis.saludar();

// Ver el prototype
console.log("\nPrototype de Persona:", Persona.prototype);
console.log("Prototype de ana:", Object.getPrototypeOf(ana));
console.log("¿Son el mismo?", Object.getPrototypeOf(ana) === Persona.prototype); // true

// ============================================
// 2️⃣ CADENA DE PROTOTIPOS (PROTOTYPE CHAIN)
// ============================================

console.log("\n--- La Cadena de Prototipos ---");

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  respirar() {
    console.log(`${this.nombre} está respirando`);
  }
}

class Mamifero extends Animal {
  constructor(nombre, pelaje) {
    super(nombre);
    this.pelaje = pelaje;
  }

  amamantar() {
    console.log(`${this.nombre} está amamantando`);
  }
}

class Perro extends Mamifero {
  constructor(nombre, raza) {
    super(nombre, "suave");
    this.raza = raza;
  }

  ladrar() {
    console.log(`${this.nombre} dice: ¡Guau!`);
  }
}

const firulais = new Perro("Firulais", "Labrador");

// Visualizar la cadena de prototipos
console.log("\n--- Cadena de Prototipos de firulais ---");
console.log("1. firulais (instancia):", firulais);
console.log("2. Perro.prototype:", Object.getPrototypeOf(firulais));
console.log(
  "3. Mamifero.prototype:",
  Object.getPrototypeOf(Object.getPrototypeOf(firulais))
);
console.log(
  "4. Animal.prototype:",
  Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(firulais)))
);
console.log(
  "5. Object.prototype:",
  Object.getPrototypeOf(
    Object.getPrototypeOf(
      Object.getPrototypeOf(Object.getPrototypeOf(firulais))
    )
  )
);

// Cuando llamamos a un método, JavaScript busca en la cadena:
// firulais.ladrar() → ¿Está en firulais? No → ¿Está en Perro.prototype? Sí ✅
// firulais.amamantar() → busca hasta Mamifero.prototype ✅
// firulais.respirar() → busca hasta Animal.prototype ✅
// firulais.toString() → busca hasta Object.prototype ✅

// ============================================
// 3️⃣ CÓMO FUNCIONA LA BÚSQUEDA EN LA CADENA
// ============================================

console.log("\n--- Búsqueda en la Cadena de Prototipos ---");

class Vehiculo {
  constructor(marca) {
    this.marca = marca;
    this.velocidad = 0;
  }

  acelerar() {
    this.velocidad += 10;
    console.log(`Acelerando... ${this.velocidad} km/h`);
  }
}

class Coche extends Vehiculo {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }

  // Sobrescribir método
  acelerar() {
    this.velocidad += 20; // Los coches aceleran más
    console.log(
      `${this.marca} ${this.modelo} acelerando... ${this.velocidad} km/h`
    );
  }
}

const miCoche = new Coche("Toyota", "Corolla");

// JavaScript busca el método en este orden:
console.log("\nBúsqueda de métodos:");

// 1. ¿miCoche tiene la propiedad "marca"?
console.log("1. marca en la instancia:", miCoche.hasOwnProperty("marca")); // true
console.log("   Valor:", miCoche.marca);

// 2. ¿miCoche tiene el método "acelerar"?
console.log("2. acelerar en la instancia:", miCoche.hasOwnProperty("acelerar")); // false
console.log("   Busca en Coche.prototype:", "acelerar" in Coche.prototype); // true
miCoche.acelerar();

// 3. ¿miCoche tiene el método "toString"?
console.log("3. toString en la instancia:", miCoche.hasOwnProperty("toString")); // false
console.log("   Busca hasta Object.prototype:", miCoche.toString()); // [object Object]

// ============================================
// 4️⃣ AGREGAR MÉTODOS AL PROTOTYPE
// ============================================

console.log("\n--- Agregar Métodos al Prototype ---");

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

// Crear instancias
const user1 = new Usuario("Ana");
const user2 = new Usuario("Luis");

user1.saludar();

// Agregar método al prototype DESPUÉS de crear instancias
Usuario.prototype.despedirse = function () {
  console.log(`Adiós, soy ${this.nombre}`);
};

// ✅ Las instancias existentes también tienen acceso
user1.despedirse();
user2.despedirse();

// ⚠️ Agregar a la instancia NO afecta otras instancias
user1.metodoPropioDeUser1 = function () {
  console.log("Solo user1 tiene este método");
};

user1.metodoPropioDeUser1(); // ✅ Funciona
try {
  user2.metodoPropioDeUser1(); // ❌ Error
} catch (e) {
  console.log("Error:", "user2 no tiene ese método");
}

// ============================================
// 5️⃣ MODIFICAR PROTOTIPOS NATIVOS (⚠️ NO RECOMENDADO)
// ============================================

console.log("\n--- Modificar Prototipos Nativos (Ejemplo educativo) ---");

// ⚠️ ADVERTENCIA: Esto NO se debe hacer en producción
// Solo con fines educativos

// Agregar método a Array.prototype
if (!Array.prototype.sumar) {
  Array.prototype.sumar = function () {
    return this.reduce((a, b) => a + b, 0);
  };
}

const numeros = [1, 2, 3, 4, 5];
console.log("Suma del array:", numeros.sumar()); // 15

// Agregar método a String.prototype
if (!String.prototype.invertir) {
  String.prototype.invertir = function () {
    return this.split("").reverse().join("");
  };
}

const texto = "JavaScript";
console.log("Texto invertido:", texto.invertir()); // tpircSavaJ

console.log("\n⚠️ Modificar prototipos nativos puede causar:");
console.log("   - Conflictos con librerías");
console.log("   - Problemas de compatibilidad");
console.log("   - Comportamiento inesperado");

// ============================================
// 6️⃣ PROTOTYPE VS __proto__ VS Object.getPrototypeOf()
// ============================================

console.log("\n--- Prototype vs __proto__ vs getPrototypeOf ---");

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarInfo() {
    return `${this.nombre}: ${this.precio}€`;
  }
}

const laptop = new Producto("Laptop", 999);

// 1. prototype: Solo existe en funciones/clases
console.log("1. Producto.prototype:", Producto.prototype);
console.log("   ¿laptop tiene prototype?:", laptop.prototype); // undefined

// 2. __proto__: Propiedad de INSTANCIAS (no estandarizado, usar con cuidado)
console.log("2. laptop.__proto__:", laptop.__proto__);
console.log(
  "   ¿Es igual a Producto.prototype?:",
  laptop.__proto__ === Producto.prototype
); // true

// 3. Object.getPrototypeOf(): Forma CORRECTA y estándar
console.log("3. Object.getPrototypeOf(laptop):", Object.getPrototypeOf(laptop));
console.log(
  "   ¿Es igual a Producto.prototype?:",
  Object.getPrototypeOf(laptop) === Producto.prototype
); // true

// ✅ Usa Object.getPrototypeOf() en lugar de __proto__

// ============================================
// 7️⃣ VERIFICAR RELACIONES EN LA CADENA
// ============================================

console.log("\n--- Verificar Relaciones de Herencia ---");

class A {}
class B extends A {}
class C extends B {}

const obj = new C();

// instanceof: verifica si un objeto está en la cadena de prototipos
console.log("obj instanceof C:", obj instanceof C); // true
console.log("obj instanceof B:", obj instanceof B); // true
console.log("obj instanceof A:", obj instanceof A); // true
console.log("obj instanceof Object:", obj instanceof Object); // true

// isPrototypeOf: verifica si un prototype está en la cadena
console.log(
  "\nC.prototype.isPrototypeOf(obj):",
  C.prototype.isPrototypeOf(obj)
); // true
console.log("B.prototype.isPrototypeOf(obj):", B.prototype.isPrototypeOf(obj)); // true
console.log("A.prototype.isPrototypeOf(obj):", A.prototype.isPrototypeOf(obj)); // true

// hasOwnProperty: verifica si la propiedad está en el objeto (no en el prototype)
obj.miPropiedad = "valor";
console.log(
  '\nobj.hasOwnProperty("miPropiedad"):',
  obj.hasOwnProperty("miPropiedad")
); // true
console.log('obj.hasOwnProperty("toString"):', obj.hasOwnProperty("toString")); // false (está en Object.prototype)

// ============================================
// 8️⃣ CREAR OBJETOS SIN PROTOTYPE
// ============================================

console.log("\n--- Objetos sin Prototype ---");

// Objeto normal (tiene prototype)
const objNormal = {};
console.log("Prototype de objNormal:", Object.getPrototypeOf(objNormal));
console.log("¿Tiene toString?:", "toString" in objNormal); // true

// Objeto SIN prototype (útil para diccionarios puros)
const objSinPrototype = Object.create(null);
console.log(
  "Prototype de objSinPrototype:",
  Object.getPrototypeOf(objSinPrototype)
); // null
console.log("¿Tiene toString?:", "toString" in objSinPrototype); // false

objSinPrototype.clave = "valor";
console.log("Claves:", Object.keys(objSinPrototype)); // ['clave']

// Útil cuando quieres un objeto puro sin métodos heredados
objSinPrototype.hasOwnProperty = "puedo usar este nombre sin problemas";
console.log(objSinPrototype.hasOwnProperty); // "puedo usar este nombre sin problemas"

// ============================================
// 9️⃣ EJEMPLO PRÁCTICO: SISTEMA DE PLUGINS
// ============================================

console.log("\n--- Ejemplo Práctico: Sistema de Plugins ---");

class Editor {
  constructor() {
    this.contenido = "";
    this.plugins = [];
  }

  escribir(texto) {
    this.contenido += texto;
  }

  obtenerContenido() {
    return this.contenido;
  }

  // Registrar plugin agregándolo al prototype
  static registrarPlugin(nombre, funcion) {
    this.prototype[nombre] = funcion;
  }
}

// Crear editor
const editor = new Editor();
editor.escribir("Hola mundo");

// Registrar plugins dinámicamente
Editor.registrarPlugin("mayusculas", function () {
  this.contenido = this.contenido.toUpperCase();
});

Editor.registrarPlugin("invertir", function () {
  this.contenido = this.contenido.split("").reverse().join("");
});

Editor.registrarPlugin("contar", function () {
  return this.contenido.length;
});

// Usar plugins
console.log("Contenido original:", editor.obtenerContenido());
editor.mayusculas();
console.log("En mayúsculas:", editor.obtenerContenido());
console.log("Longitud:", editor.contar());

// Los nuevos editores también tienen acceso
const editor2 = new Editor();
editor2.escribir("Nuevo texto");
editor2.mayusculas();
console.log("Editor 2:", editor2.obtenerContenido());

// ============================================
// 🔟 VISUALIZAR LA CADENA COMPLETA
// ============================================

console.log("\n--- Visualizar Cadena Completa ---");

function mostrarCadenaPrototipos(obj, nombre = "objeto") {
  console.log(`\n📊 Cadena de prototipos de ${nombre}:`);
  console.log("━".repeat(50));

  let nivel = 0;
  let actual = obj;

  while (actual !== null) {
    const indent = "  ".repeat(nivel);
    const tipo = actual.constructor ? actual.constructor.name : "null";

    if (nivel === 0) {
      console.log(`${indent}🔸 ${nombre} (instancia)`);
      console.log(
        `${indent}   Propiedades propias:`,
        Object.getOwnPropertyNames(actual)
      );
    } else {
      console.log(`${indent}🔗 ${tipo}.prototype`);
      const metodos = Object.getOwnPropertyNames(actual).filter(
        (prop) => typeof actual[prop] === "function" && prop !== "constructor"
      );
      if (metodos.length > 0) {
        console.log(`${indent}   Métodos:`, metodos);
      }
    }

    actual = Object.getPrototypeOf(actual);
    nivel++;
  }

  console.log("━".repeat(50));
}

class Animal2 {}
class Perro2 extends Animal2 {}
const miPerro = new Perro2();

mostrarCadenaPrototipos(miPerro, "miPerro");

// ============================================
// 1️⃣1️⃣ RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
🔗 CADENA DE PROTOTIPOS (PROTOTYPE CHAIN):

📌 CONCEPTOS CLAVE:

1. PROTOTYPE:
   • Objeto compartido por todas las instancias
   • Solo existe en funciones/clases constructoras
   • Los métodos se definen aquí (más eficiente)

2. [[PROTOTYPE]] (o __proto__):
   • Enlace interno de cada objeto a su prototype
   • Forma la cadena de herencia
   • Acceder con Object.getPrototypeOf() (no __proto__)

3. CADENA DE BÚSQUEDA:
   • JavaScript busca propiedades/métodos hacia arriba
   • Orden: objeto → prototype → prototype del prototype → ... → null
   • Se detiene al encontrar la propiedad o llegar a null

✅ VENTAJAS:
• Ahorro de memoria (métodos compartidos)
• Herencia dinámica
• Extensibilidad en tiempo de ejecución

⚠️ CUIDADO CON:
• Modificar prototipos nativos (Array, String, Object)
• Búsqueda lenta en cadenas muy largas
• Confusión entre prototype y __proto__

💡 MEJORES PRÁCTICAS:
• Usa Object.getPrototypeOf() en lugar de __proto__
• No modifiques Object.prototype
• Prefiere composición sobre herencia profunda
• Usa hasOwnProperty() para verificar propiedades propias

🔍 HERRAMIENTAS:
• instanceof: verifica tipo en la cadena
• isPrototypeOf: verifica si un prototype está en la cadena
• hasOwnProperty: verifica propiedad propia (no heredada)
• Object.getPrototypeOf: obtiene el prototype de forma segura
`);
