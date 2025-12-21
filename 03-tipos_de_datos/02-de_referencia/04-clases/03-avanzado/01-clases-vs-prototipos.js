// ============================================
// 01-CLASES-VS-PROTOTIPOS.JS
// Diferencias entre Clases y Prototipos
// ============================================

console.log("=== 1. CLASES VS PROTOTIPOS ===\n");

// ============================================
// 1️⃣ FORMA ANTIGUA: PROTOTIPOS
// ============================================

console.log("--- Enfoque con Prototipos ---");

function AnimalPrototipo(nombre, especie) {
  this.nombre = nombre;
  this.especie = especie;
  this.energia = 100;
}

// Métodos en el prototype
AnimalPrototipo.prototype.comer = function () {
  this.energia += 10;
  console.log(`${this.nombre} comió. Energía: ${this.energia}`);
};

AnimalPrototipo.prototype.dormir = function () {
  this.energia = 100;
  console.log(`${this.nombre} durmió y recuperó energía`);
};

// Crear instancias
const perro1 = new AnimalPrototipo("Rex", "Perro");
const gato1 = new AnimalPrototipo("Misu", "Gato");

perro1.comer();
gato1.dormir();

console.log("Prototype de AnimalPrototipo:", AnimalPrototipo.prototype);
console.log("¿Comparten el método?", perro1.comer === gato1.comer); // true

// ============================================
// 2️⃣ FORMA MODERNA: CLASES
// ============================================

console.log("\n--- Enfoque con Clases ---");

class AnimalClase {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
    this.energia = 100;
  }

  comer() {
    this.energia += 10;
    console.log(`${this.nombre} comió. Energía: ${this.energia}`);
  }

  dormir() {
    this.energia = 100;
    console.log(`${this.nombre} durmió y recuperó energía`);
  }
}

const perro2 = new AnimalClase("Max", "Perro");
const gato2 = new AnimalClase("Luna", "Gato");

perro2.comer();
gato2.dormir();

console.log("Prototype de AnimalClase:", AnimalClase.prototype);
console.log("¿Comparten el método?", perro2.comer === gato2.comer); // true

// ============================================
// 3️⃣ EQUIVALENCIA: CLASE = FUNCIÓN + PROTOTYPE
// ============================================

console.log("\n--- Las Clases son Azúcar Sintáctico ---");

console.log("typeof AnimalPrototipo:", typeof AnimalPrototipo); // "function"
console.log("typeof AnimalClase:", typeof AnimalClase); // "function"

console.log("\n¿Son realmente diferentes?");
console.log(
  "AnimalPrototipo.prototype:",
  Object.keys(AnimalPrototipo.prototype)
);
console.log("AnimalClase.prototype:", Object.keys(AnimalClase.prototype));

// Internamente, ambas son funciones constructoras
console.log("\nAmbas tienen constructor:");
console.log(
  "perro1.constructor === AnimalPrototipo:",
  perro1.constructor === AnimalPrototipo
);
console.log(
  "perro2.constructor === AnimalClase:",
  perro2.constructor === AnimalClase
);

// ============================================
// 4️⃣ DIFERENCIAS IMPORTANTES
// ============================================

console.log("\n--- Diferencias Clave ---");

// 1. Las clases NO se pueden llamar sin 'new'
console.log("\n1. Llamar sin 'new':");
try {
  const test1 = AnimalPrototipo("Error", "Test"); // ⚠️ Funciona pero crea bug
  console.log("Prototipo sin new:", typeof test1); // undefined
} catch (e) {
  console.log("Error:", e.message);
}

try {
  const test2 = AnimalClase("Error", "Test"); // ❌ Lanza error
} catch (e) {
  console.log("Clase sin new:", e.message); // Cannot call a class as a function
}

// 2. Las clases no son "hoisted" de la misma manera
console.log("\n2. Hoisting:");
console.log("Las funciones constructoras SÍ se elevan");
console.log("Las clases NO se elevan (temporal dead zone)");

// 3. El cuerpo de las clases siempre es strict mode
console.log("\n3. Strict mode:");
console.log("Las clases siempre están en modo estricto");

// ============================================
// 5️⃣ HERENCIA CON PROTOTIPOS
// ============================================

console.log("\n--- Herencia con Prototipos ---");

function Mamifero(nombre) {
  this.nombre = nombre;
  this.temperatura = 37;
}

Mamifero.prototype.respirar = function () {
  console.log(`${this.nombre} está respirando`);
};

function Perro(nombre, raza) {
  Mamifero.call(this, nombre); // Llamar al constructor padre
  this.raza = raza;
}

// Configurar la herencia manualmente
Perro.prototype = Object.create(Mamifero.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.ladrar = function () {
  console.log(`${this.nombre} dice: ¡Guau!`);
};

const firulais = new Perro("Firulais", "Mestizo");
firulais.respirar(); // Heredado de Mamifero
firulais.ladrar();

// ============================================
// 6️⃣ HERENCIA CON CLASES
// ============================================

console.log("\n--- Herencia con Clases ---");

class MamiferoClase {
  constructor(nombre) {
    this.nombre = nombre;
    this.temperatura = 37;
  }

  respirar() {
    console.log(`${this.nombre} está respirando`);
  }
}

class PerroClase extends MamiferoClase {
  constructor(nombre, raza) {
    super(nombre); // Mucho más simple
    this.raza = raza;
  }

  ladrar() {
    console.log(`${this.nombre} dice: ¡Guau!`);
  }
}

const bobby = new PerroClase("Bobby", "Labrador");
bobby.respirar();
bobby.ladrar();

console.log("\n✅ Con clases, la herencia es MUCHO más clara y simple");

// ============================================
// 7️⃣ MÉTODOS ESTÁTICOS
// ============================================

console.log("\n--- Métodos Estáticos: Prototipos vs Clases ---");

// Con prototipos
function UtilPrototipo() {}
UtilPrototipo.metodoEstatico = function () {
  return "Método estático en prototipo";
};

// Con clases
class UtilClase {
  static metodoEstatico() {
    return "Método estático en clase";
  }
}

console.log(UtilPrototipo.metodoEstatico());
console.log(UtilClase.metodoEstatico());

// ============================================
// 8️⃣ PROPIEDADES PRIVADAS
// ============================================

console.log("\n--- Propiedades Privadas ---");

// Con prototipos: usar closures
function CuentaPrototipo(saldo) {
  let _saldo = saldo; // Variable privada en closure

  this.getSaldo = function () {
    return _saldo;
  };

  this.depositar = function (cantidad) {
    _saldo += cantidad;
  };
}

const cuenta1 = new CuentaPrototipo(1000);
console.log("Saldo (closure):", cuenta1.getSaldo());
// No hay forma de acceder a _saldo directamente

// Con clases: usar #
class CuentaClase {
  #saldo; // ✅ Verdaderamente privado

  constructor(saldo) {
    this.#saldo = saldo;
  }

  getSaldo() {
    return this.#saldo;
  }

  depositar(cantidad) {
    this.#saldo += cantidad;
  }
}

const cuenta2 = new CuentaClase(1000);
console.log("Saldo (privado):", cuenta2.getSaldo());

// ============================================
// 9️⃣ MIXINS: AGREGAR FUNCIONALIDAD
// ============================================

console.log("\n--- Mixins: Prototipos vs Clases ---");

// Mixin con prototipos
const voladorMixin = {
  volar() {
    console.log(`${this.nombre} está volando`);
  },
  aterrizar() {
    console.log(`${this.nombre} aterrizó`);
  },
};

function Ave(nombre) {
  this.nombre = nombre;
}

// Copiar métodos del mixin
Object.assign(Ave.prototype, voladorMixin);

const aguila = new Ave("Águila");
aguila.volar();

// Mixin con clases (función helper)
const VoladorMixin = (Base) =>
  class extends Base {
    volar() {
      console.log(`${this.nombre} está volando`);
    }

    aterrizar() {
      console.log(`${this.nombre} aterrizó`);
    }
  };

class AveClase {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Halcon extends VoladorMixin(AveClase) {
  constructor(nombre) {
    super(nombre);
  }
}

const halcon = new Halcon("Halcón");
halcon.volar();

// ============================================
// 🔟 PERFORMANCE Y MEMORIA
// ============================================

console.log("\n--- Performance y Uso de Memoria ---");

console.log("\n✅ AMBOS comparten métodos en el prototype:");
console.log("perro1.comer === gato1.comer:", perro1.comer === gato1.comer);
console.log("perro2.comer === gato2.comer:", perro2.comer === gato2.comer);

console.log("\n❌ MAL: Definir métodos en el constructor");

function MalEjemplo(nombre) {
  this.nombre = nombre;

  // ❌ Cada instancia crea una NUEVA función
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`);
  };
}

const obj1 = new MalEjemplo("A");
const obj2 = new MalEjemplo("B");
console.log("¿Comparten método? (NO):", obj1.saludar === obj2.saludar); // false

// ============================================
// 1️⃣1️⃣ CUÁNDO USAR CADA UNO
// ============================================

console.log("\n=== CUÁNDO USAR CADA ENFOQUE ===");
console.log(`
📊 COMPARACIÓN:

╔══════════════════╦═══════════════╦═══════════════╗
║ Característica   ║ Prototipos    ║ Clases        ║
╠══════════════════╬═══════════════╬═══════════════╣
║ Sintaxis         ║ 😕 Compleja   ║ 😊 Clara      ║
║ Herencia         ║ 😫 Manual     ║ 😎 Simple     ║
║ Privacidad       ║ ⚠️  Closures  ║ ✅ # nativo   ║
║ Estáticos        ║ 😐 Manual     ║ 😊 static     ║
║ Super            ║ ❌ No existe  ║ ✅ super()    ║
║ Performance      ║ ✅ Igual      ║ ✅ Igual      ║
║ Compatibilidad   ║ ✅ IE5+       ║ ⚠️  ES6+      ║
╚══════════════════╩═══════════════╩═══════════════╝

✅ USA CLASES cuando:
  • Trabajas en proyectos modernos (ES6+)
  • Necesitas herencia
  • Quieres código más limpio y mantenible
  • Necesitas propiedades privadas (#)

✅ USA PROTOTIPOS cuando:
  • Necesitas compatibilidad con navegadores antiguos
  • Trabajas con código legacy
  • Necesitas manipulación avanzada de prototypes

💡 RECOMENDACIÓN:
   En 2024+, prefiere CLASES. Son el estándar moderno.
   Los prototipos son importantes para ENTENDER cómo
   funciona JavaScript internamente.
`);

// ============================================
// 1️⃣2️⃣ EJEMPLO PRÁCTICO: MISMO CÓDIGO EN AMBOS
// ============================================

console.log("\n--- Ejemplo Práctico: Sistema de Usuarios ---");

// CON PROTOTIPOS
function UsuarioProto(nombre, email) {
  this.nombre = nombre;
  this.email = email;
  this.activo = true;
}

UsuarioProto.prototype.activar = function () {
  this.activo = true;
};

UsuarioProto.prototype.desactivar = function () {
  this.activo = false;
};

function AdminProto(nombre, email) {
  UsuarioProto.call(this, nombre, email);
  this.rol = "admin";
}

AdminProto.prototype = Object.create(UsuarioProto.prototype);
AdminProto.prototype.constructor = AdminProto;

AdminProto.prototype.eliminarUsuario = function (usuario) {
  console.log(`Admin ${this.nombre} eliminó a ${usuario.nombre}`);
};

// CON CLASES (MUCHO MÁS LIMPIO)
class UsuarioClase {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
    this.activo = true;
  }

  activar() {
    this.activo = true;
  }

  desactivar() {
    this.activo = false;
  }
}

class AdminClase extends UsuarioClase {
  constructor(nombre, email) {
    super(nombre, email);
    this.rol = "admin";
  }

  eliminarUsuario(usuario) {
    console.log(`Admin ${this.nombre} eliminó a ${usuario.nombre}`);
  }
}

// Usar ambos
const adminProto = new AdminProto("Juan (Proto)", "juan@proto.com");
const adminClase = new AdminClase("Ana (Clase)", "ana@clase.com");

console.log("\nPrototipo:", adminProto);
console.log("Clase:", adminClase);

console.log("\n✅ AMBOS funcionan igual, pero las clases son más legibles");

// ============================================
// RESUMEN FINAL
// ============================================

console.log("\n=== RESUMEN FINAL ===");
console.log(`
🎯 PUNTOS CLAVE:

1. LAS CLASES SON "AZÚCAR SINTÁCTICO"
   • Internamente usan el mismo sistema de prototipos
   • Solo hacen el código más fácil de escribir y leer

2. VENTAJAS DE LAS CLASES:
   ✅ Sintaxis más limpia
   ✅ Herencia simple con extends/super
   ✅ Métodos estáticos claros
   ✅ Propiedades privadas con #
   ✅ Menos propenso a errores

3. CUÁNDO NECESITAS SABER PROTOTIPOS:
   • Para entender cómo funciona JavaScript
   • Para debuggear código legacy
   • Para manipulaciones avanzadas
   • Para entrevistas técnicas

4. RECOMENDACIÓN:
   🎓 APRENDE prototipos para entender JS
   💻 USA clases para escribir código nuevo

5. AMBOS CONVIVEN:
   • Puedes mezclar ambos enfoques
   • Las librerías antiguas usan prototipos
   • El código nuevo usa clases
`);
