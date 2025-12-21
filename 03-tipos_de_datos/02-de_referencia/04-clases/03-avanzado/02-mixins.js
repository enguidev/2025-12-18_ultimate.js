// ============================================
// 02-MIXINS.JS
// Composición vs Herencia - Mixins en JavaScript
// ============================================

console.log("=== 2. MIXINS ===\n");

// ============================================
// 1️⃣ PROBLEMA: HERENCIA MÚLTIPLE NO EXISTE EN JS
// ============================================

console.log("--- El Problema ---");

// JavaScript NO permite esto:
// class Pato extends Ave, Nadador, Volador { } // ❌ Error

// Solo puedes heredar de UNA clase:
class Animal {}
class Mamifero extends Animal {}
// class Delfin extends Mamifero, Nadador {} // ❌ No funciona

console.log("❌ JavaScript NO soporta herencia múltiple");
console.log("✅ SOLUCIÓN: Usar MIXINS (composición)");

// ============================================
// 2️⃣ ¿QUÉ ES UN MIXIN?
// ============================================

console.log("\n--- ¿Qué es un Mixin? ---");

console.log(`
Un MIXIN es un objeto o función que proporciona
métodos que pueden ser usados por otras clases,
sin ser su clase padre.

Es una forma de COMPONER funcionalidad en lugar
de heredarla.

📦 Mixin = "Paquete de funcionalidades reutilizables"
`);

// ============================================
// 3️⃣ MIXIN BÁSICO: OBJETO CON MÉTODOS
// ============================================

console.log("\n--- Mixin Básico ---");

// Mixin como objeto simple
const saludadorMixin = {
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  },

  despedirse() {
    console.log(`Adiós, ${this.nombre} se va`);
  },
};

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Aplicar el mixin con Object.assign
Object.assign(Persona.prototype, saludadorMixin);

const persona = new Persona("Ana");
persona.saludar();
persona.despedirse();

console.log("\n✅ Los métodos del mixin ahora están en Persona");

// ============================================
// 4️⃣ MÚLTIPLES MIXINS
// ============================================

console.log("\n--- Múltiples Mixins ---");

const caminadorMixin = {
  caminar() {
    console.log(`${this.nombre} está caminando`);
  },
};

const corredorMixin = {
  correr() {
    console.log(`${this.nombre} está corriendo rápido`);
  },
};

const saltadorMixin = {
  saltar() {
    console.log(`${this.nombre} saltó alto`);
  },
};

class Atleta {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Aplicar VARIOS mixins
Object.assign(Atleta.prototype, caminadorMixin, corredorMixin, saltadorMixin);

const atleta = new Atleta("Luis");
atleta.caminar();
atleta.correr();
atleta.saltar();

console.log("✅ Atleta tiene funcionalidades de 3 mixins diferentes");

// ============================================
// 5️⃣ MIXIN COMO FUNCIÓN (MÁS PODEROSO)
// ============================================

console.log("\n--- Mixin como Función ---");

// Función que retorna una clase que extiende la clase base
const VoladorMixin = (Base) =>
  class extends Base {
    volar() {
      console.log(`${this.nombre} está volando`);
    }

    aterrizar() {
      console.log(`${this.nombre} aterrizó`);
    }
  };

const NadadorMixin = (Base) =>
  class extends Base {
    nadar() {
      console.log(`${this.nombre} está nadando`);
    }

    bucear() {
      console.log(`${this.nombre} se sumergió`);
    }
  };

class Animal2 {
  constructor(nombre) {
    this.nombre = nombre;
  }

  comer() {
    console.log(`${this.nombre} está comiendo`);
  }
}

// Aplicar mixins en cadena
class Pato extends VoladorMixin(NadadorMixin(Animal2)) {
  constructor(nombre) {
    super(nombre);
  }

  graznar() {
    console.log(`${this.nombre} dice: ¡Cuac cuac!`);
  }
}

const pato = new Pato("Donald");
pato.comer(); // De Animal2
pato.volar(); // De VoladorMixin
pato.nadar(); // De NadadorMixin
pato.graznar(); // Propio de Pato

console.log("\n✅ Pato tiene funcionalidades de múltiples mixins");
console.log("instanceof Animal2:", pato instanceof Animal2); // true

// ============================================
// 6️⃣ MIXIN CON ESTADO (PROPIEDADES)
// ============================================

console.log("\n--- Mixins con Estado ---");

const registroMixin = (Base) =>
  class extends Base {
    constructor(...args) {
      super(...args);
      this._historial = [];
    }

    registrar(accion) {
      this._historial.push({
        accion,
        fecha: new Date(),
        timestamp: Date.now(),
      });
      console.log(`📝 Registrado: ${accion}`);
    }

    verHistorial() {
      console.log(`\n--- Historial de ${this.nombre} ---`);
      this._historial.forEach((entrada, i) => {
        console.log(
          `${i + 1}. ${entrada.accion} - ${entrada.fecha.toLocaleString()}`
        );
      });
    }
  };

class Usuario extends registroMixin(Object) {
  constructor(nombre) {
    super();
    this.nombre = nombre;
    this.registrar(`Usuario ${nombre} creado`);
  }

  login() {
    console.log(`${this.nombre} inició sesión`);
    this.registrar("Login");
  }

  logout() {
    console.log(`${this.nombre} cerró sesión`);
    this.registrar("Logout");
  }
}

const usuario = new Usuario("Pedro");
usuario.login();
usuario.logout();
usuario.verHistorial();

// ============================================
// 7️⃣ EJEMPLO REAL: SISTEMA DE NOTIFICACIONES
// ============================================

console.log("\n--- Ejemplo Real: Notificaciones ---");

const notificableMixin = (Base) =>
  class extends Base {
    constructor(...args) {
      super(...args);
      this._observadores = [];
    }

    suscribir(observador) {
      this._observadores.push(observador);
      console.log(`📬 ${observador.nombre} se suscribió`);
    }

    desuscribir(observador) {
      this._observadores = this._observadores.filter((o) => o !== observador);
      console.log(`📭 ${observador.nombre} se desuscribió`);
    }

    notificar(mensaje) {
      console.log(`\n📢 Notificación: ${mensaje}`);
      this._observadores.forEach((observador) => {
        observador.recibirNotificacion(mensaje);
      });
    }
  };

class Canal extends notificableMixin(Object) {
  constructor(nombre) {
    super();
    this.nombre = nombre;
  }

  publicar(contenido) {
    console.log(`\n🎬 Canal "${this.nombre}" publicó: ${contenido}`);
    this.notificar(`Nuevo contenido en ${this.nombre}: ${contenido}`);
  }
}

class Suscriptor {
  constructor(nombre) {
    this.nombre = nombre;
  }

  recibirNotificacion(mensaje) {
    console.log(`   🔔 ${this.nombre} recibió: "${mensaje}"`);
  }
}

const canal = new Canal("TechTube");
const sub1 = new Suscriptor("Ana");
const sub2 = new Suscriptor("Luis");
const sub3 = new Suscriptor("María");

canal.suscribir(sub1);
canal.suscribir(sub2);
canal.suscribir(sub3);

canal.publicar("Tutorial de JavaScript");

canal.desuscribir(sub2);
canal.publicar("Curso de Node.js");

// ============================================
// 8️⃣ MIXIN CONDICIONAL
// ============================================

console.log("\n--- Mixin Condicional ---");

const serializableMixin = (Base) =>
  class extends Base {
    toJSON() {
      const obj = {};
      Object.keys(this).forEach((key) => {
        if (!key.startsWith("_")) {
          // Ignorar privados
          obj[key] = this[key];
        }
      });
      return obj;
    }

    fromJSON(json) {
      Object.assign(this, JSON.parse(json));
      return this;
    }

    guardar() {
      const json = JSON.stringify(this.toJSON());
      console.log(`💾 Guardado: ${json}`);
      return json;
    }
  };

const validableMixin = (Base) =>
  class extends Base {
    validar() {
      const errores = [];

      if (!this.nombre || this.nombre.length < 2) {
        errores.push("Nombre inválido");
      }

      if (!this.email || !this.email.includes("@")) {
        errores.push("Email inválido");
      }

      if (errores.length > 0) {
        console.log("❌ Errores de validación:", errores);
        return false;
      }

      console.log("✅ Validación exitosa");
      return true;
    }
  };

// Aplicar mixins condicionales
class Producto extends serializableMixin(validableMixin(Object)) {
  constructor(nombre, precio, email) {
    super();
    this.nombre = nombre;
    this.precio = precio;
    this.email = email;
    this._internal = "esto no se serializa";
  }
}

const producto = new Producto("Laptop", 999, "info@shop.com");

if (producto.validar()) {
  producto.guardar();
}

console.log("\nJSON generado:", producto.toJSON());

// ============================================
// 9️⃣ COMPOSICIÓN vs HERENCIA
// ============================================

console.log("\n--- Composición vs Herencia ---");

console.log(`
🆚 COMPARACIÓN:

HERENCIA:
  ❌ Solo una clase padre
  ❌ Jerarquía rígida
  ❌ Difícil de modificar
  ✅ Simple para casos básicos
  
  class Perro extends Animal {}

MIXINS (Composición):
  ✅ Múltiples fuentes de funcionalidad
  ✅ Flexible y reutilizable
  ✅ Fácil de combinar
  ❌ Más código inicial
  
  class Perro extends Mixin1(Mixin2(Animal)) {}

💡 REGLA DE ORO:
   "Prefiere COMPOSICIÓN sobre HERENCIA"
   
   Usa herencia cuando hay una relación clara "ES UN"
   Usa mixins cuando necesitas "TIENE CAPACIDAD DE"
`);

// ============================================
// 🔟 EJEMPLO COMPLETO: JUEGO DE ROL
// ============================================

console.log("\n--- Ejemplo Completo: Juego de ROL ---");

// Mixins de habilidades
const AtacanteMixin = (Base) =>
  class extends Base {
    atacar(objetivo) {
      const daño = this.ataque * (Math.random() * 0.5 + 0.75);
      objetivo.recibirDaño(daño);
      console.log(
        `⚔️  ${this.nombre} atacó a ${objetivo.nombre} (${daño.toFixed(
          1
        )} daño)`
      );
    }
  };

const DefensorMixin = (Base) =>
  class extends Base {
    defender() {
      this.defendiendo = true;
      console.log(`🛡️  ${this.nombre} se está defendiendo`);
    }

    recibirDaño(cantidad) {
      const dañoReal = this.defendiendo ? cantidad * 0.5 : cantidad;
      this.vida -= dañoReal;
      this.defendiendo = false;

      if (this.vida <= 0) {
        this.vida = 0;
        console.log(`💀 ${this.nombre} ha sido derrotado`);
      } else {
        console.log(
          `   ${this.nombre} recibió ${dañoReal.toFixed(
            1
          )} daño (Vida: ${this.vida.toFixed(1)})`
        );
      }
    }
  };

const CuradorMixin = (Base) =>
  class extends Base {
    curar(objetivo) {
      const cura = this.poder * 10;
      objetivo.vida = Math.min(objetivo.vidaMax, objetivo.vida + cura);
      console.log(
        `💚 ${this.nombre} curó a ${objetivo.nombre} (+${cura} vida)`
      );
    }
  };

const MagicoMixin = (Base) =>
  class extends Base {
    constructor(...args) {
      super(...args);
      this.mana = 100;
    }

    lanzarHechizo(objetivo) {
      if (this.mana < 20) {
        console.log(`❌ ${this.nombre} no tiene suficiente mana`);
        return;
      }

      this.mana -= 20;
      const daño = this.poder * 15;
      objetivo.recibirDaño(daño);
      console.log(`✨ ${this.nombre} lanzó hechizo a ${objetivo.nombre}`);
    }
  };

// Clase base
class Personaje {
  constructor(nombre, vida, ataque) {
    this.nombre = nombre;
    this.vida = vida;
    this.vidaMax = vida;
    this.ataque = ataque;
    this.defendiendo = false;
  }

  mostrarEstado() {
    console.log(
      `\n📊 ${this.nombre}: Vida ${this.vida.toFixed(1)}/${this.vidaMax}`
    );
  }
}

// Crear clases combinando mixins
class Guerrero extends DefensorMixin(AtacanteMixin(Personaje)) {
  constructor(nombre) {
    super(nombre, 150, 20);
  }
}

class Mago extends MagicoMixin(DefensorMixin(Personaje)) {
  constructor(nombre) {
    super(nombre, 80, 10);
    this.poder = 3;
  }
}

class Clerigo extends CuradorMixin(DefensorMixin(Personaje)) {
  constructor(nombre) {
    super(nombre, 100, 12);
    this.poder = 2;
  }
}

class Paladin extends CuradorMixin(DefensorMixin(AtacanteMixin(Personaje))) {
  constructor(nombre) {
    super(nombre, 120, 15);
    this.poder = 1.5;
  }
}

// Batalla de demostración
console.log("\n⚔️  === BATALLA ÉPICA ===");

const guerrero = new Guerrero("Aragorn");
const mago = new Mago("Gandalf");
const clerigo = new Clerigo("Elrond");
const paladin = new Paladin("Arthas");

console.log("\n--- Ronda 1 ---");
guerrero.atacar(mago);
mago.lanzarHechizo(guerrero);
clerigo.curar(mago);

console.log("\n--- Ronda 2 ---");
guerrero.defender();
mago.lanzarHechizo(guerrero);
paladin.atacar(mago);
paladin.curar(mago);

console.log("\n--- Estados Finales ---");
guerrero.mostrarEstado();
mago.mostrarEstado();
clerigo.mostrarEstado();
paladin.mostrarEstado();

console.log("\n✅ Cada clase tiene habilidades de MÚLTIPLES mixins");

// ============================================
// RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
🎯 MIXINS - PUNTOS CLAVE:

1. QUÉ SON:
   • Objetos o funciones que proveen funcionalidad
   • Se "mezclan" con clases existentes
   • Alternativa a herencia múltiple

2. TIPOS DE MIXINS:
   • Objeto simple: Object.assign(Target.prototype, mixin)
   • Función: const Mixin = (Base) => class extends Base {}
   • Con estado: Pueden tener propiedades propias

3. VENTAJAS:
   ✅ Reutilización de código
   ✅ Flexibilidad (múltiples mixins)
   ✅ Composición sobre herencia
   ✅ Fácil de probar

4. DESVENTAJAS:
   ❌ Puede ser complejo de debuggear
   ❌ Conflictos de nombres posibles
   ❌ No tan obvio como herencia

5. CUÁNDO USAR:
   • Funcionalidad compartida entre clases no relacionadas
   • Necesitas "has-a" en lugar de "is-a"
   • Quieres evitar jerarquías profundas
   • Múltiples comportamientos opcionales

💡 PATRÓN COMÚN:
   class MiClase extends Mixin3(Mixin2(Mixin1(Base))) {}
   
   Se lee de derecha a izquierda:
   Base → agrega Mixin1 → agrega Mixin2 → agrega Mixin3

🎓 RECUERDA:
   "Prefiere COMPOSICIÓN sobre HERENCIA"
   
   Los mixins son una forma de composición
   que hace tu código más flexible y mantenible.
`);
