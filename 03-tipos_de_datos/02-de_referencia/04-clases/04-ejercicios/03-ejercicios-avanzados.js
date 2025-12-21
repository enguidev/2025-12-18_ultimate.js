// ============================================
// 03-EJERCICIOS-AVANZADOS.JS
// Ejercicios avanzados: Mixins, Patrones y Conceptos Complejos
// ============================================

console.log("=== EJERCICIOS AVANZADOS ===\n");

// ============================================
// EJERCICIO 1: SISTEMA DE EVENTOS (OBSERVER)
// ============================================

console.log("--- Ejercicio 1: Sistema de Eventos ---");
console.log(`
📡 Crea un sistema de eventos completo con:
   • EventEmitter (clase base)
   • on(evento, callback) - Suscribirse
   • off(evento, callback) - Desuscribirse
   • emit(evento, datos) - Emitir evento
   • once(evento, callback) - Una sola vez
`);

class EventEmitter {
  constructor() {
    this._eventos = {};
  }

  on(evento, callback) {
    if (!this._eventos[evento]) {
      this._eventos[evento] = [];
    }
    this._eventos[evento].push({ callback, once: false });
    console.log(`📬 Suscrito al evento: ${evento}`);
  }

  once(evento, callback) {
    if (!this._eventos[evento]) {
      this._eventos[evento] = [];
    }
    this._eventos[evento].push({ callback, once: true });
    console.log(`📬 Suscrito al evento (una vez): ${evento}`);
  }

  off(evento, callback) {
    if (!this._eventos[evento]) return;

    this._eventos[evento] = this._eventos[evento].filter(
      (listener) => listener.callback !== callback
    );
    console.log(`📭 Desuscrito del evento: ${evento}`);
  }

  emit(evento, ...args) {
    if (!this._eventos[evento]) {
      console.log(`⚠️  No hay suscriptores para: ${evento}`);
      return;
    }

    console.log(`\n📢 Emitiendo evento: ${evento}`);

    const listeners = [...this._eventos[evento]];

    listeners.forEach((listener) => {
      listener.callback(...args);

      if (listener.once) {
        this.off(evento, listener.callback);
      }
    });
  }

  listenerCount(evento) {
    return this._eventos[evento] ? this._eventos[evento].length : 0;
  }
}

// Prueba
const emitter = new EventEmitter();

const onUserLogin = (usuario) => {
  console.log(`   👤 Usuario conectado: ${usuario}`);
};

const onUserLogout = (usuario) => {
  console.log(`   👋 Usuario desconectado: ${usuario}`);
};

const onPrimerEvento = () => {
  console.log(`   🎉 ¡Este evento solo se ejecuta una vez!`);
};

emitter.on("login", onUserLogin);
emitter.on("logout", onUserLogout);
emitter.once("primerUso", onPrimerEvento);

emitter.emit("login", "Ana");
emitter.emit("logout", "Ana");
emitter.emit("primerUso");
emitter.emit("primerUso"); // No se ejecuta

console.log(`\nSuscriptores de 'login': ${emitter.listenerCount("login")}`);

// ============================================
// EJERCICIO 2: BUILDER PATTERN AVANZADO
// ============================================

console.log("\n--- Ejercicio 2: Query Builder (SQL) ---");
console.log(`
🔧 Crea un Query Builder fluido para SQL:
   • select(campos)
   • from(tabla)
   • where(condicion)
   • orderBy(campo, direccion)
   • limit(cantidad)
   • build() - Genera el SQL
`);

class QueryBuilder {
  constructor() {
    this._select = "*";
    this._from = null;
    this._where = [];
    this._orderBy = null;
    this._limit = null;
  }

  select(...campos) {
    this._select = campos.length > 0 ? campos.join(", ") : "*";
    return this;
  }

  from(tabla) {
    this._from = tabla;
    return this;
  }

  where(condicion) {
    this._where.push(condicion);
    return this;
  }

  orderBy(campo, direccion = "ASC") {
    this._orderBy = `${campo} ${direccion}`;
    return this;
  }

  limit(cantidad) {
    this._limit = cantidad;
    return this;
  }

  build() {
    if (!this._from) {
      throw new Error("FROM es obligatorio");
    }

    let query = `SELECT ${this._select} FROM ${this._from}`;

    if (this._where.length > 0) {
      query += ` WHERE ${this._where.join(" AND ")}`;
    }

    if (this._orderBy) {
      query += ` ORDER BY ${this._orderBy}`;
    }

    if (this._limit) {
      query += ` LIMIT ${this._limit}`;
    }

    return query + ";";
  }
}

// Prueba
const query1 = new QueryBuilder()
  .select("id", "nombre", "email")
  .from("usuarios")
  .where("edad > 18")
  .where("activo = true")
  .orderBy("nombre", "ASC")
  .limit(10)
  .build();

console.log("Query generado:\n", query1);

const query2 = new QueryBuilder()
  .from("productos")
  .where("precio < 100")
  .orderBy("precio", "DESC")
  .build();

console.log("\nQuery generado:\n", query2);

// ============================================
// EJERCICIO 3: MIDDLEWARE PATTERN
// ============================================

console.log("\n--- Ejercicio 3: Sistema de Middleware ---");
console.log(`
🔗 Crea un sistema de middleware (como Express.js):
   • use(middleware) - Agregar middleware
   • execute(contexto) - Ejecutar la cadena
   • Los middleware pueden modificar el contexto
`);

class MiddlewareManager {
  constructor() {
    this._middlewares = [];
  }

  use(middleware) {
    this._middlewares.push(middleware);
    console.log(`🔗 Middleware agregado: ${middleware.name}`);
    return this;
  }

  async execute(contexto) {
    console.log("\n⚙️  Ejecutando middlewares...\n");

    let index = 0;

    const next = async () => {
      if (index >= this._middlewares.length) {
        return;
      }

      const middleware = this._middlewares[index++];
      await middleware(contexto, next);
    };

    await next();

    console.log("\n✅ Cadena de middlewares completada");
    return contexto;
  }
}

// Middlewares de ejemplo
async function loggerMiddleware(ctx, next) {
  console.log(`📝 [Logger] Request: ${ctx.method} ${ctx.path}`);
  await next();
  console.log(`📝 [Logger] Status: ${ctx.status}`);
}

async function authMiddleware(ctx, next) {
  console.log(`🔐 [Auth] Verificando token...`);

  if (ctx.token) {
    ctx.user = { id: 1, nombre: "Ana" };
    console.log(`✅ [Auth] Usuario autenticado: ${ctx.user.nombre}`);
    await next();
  } else {
    ctx.status = 401;
    ctx.body = { error: "No autorizado" };
    console.log(`❌ [Auth] Token inválido`);
  }
}

async function controllerMiddleware(ctx, next) {
  console.log(`🎯 [Controller] Procesando solicitud...`);
  ctx.status = 200;
  ctx.body = { mensaje: "Éxito", usuario: ctx.user };
  await next();
}

// Prueba
const app = new MiddlewareManager();

app.use(loggerMiddleware).use(authMiddleware).use(controllerMiddleware);

const contexto = {
  method: "GET",
  path: "/api/users",
  token: "abc123",
  status: null,
  body: null,
};

app.execute(contexto).then((ctx) => {
  console.log("\n📤 Respuesta final:", ctx.body);
});

// ============================================
// EJERCICIO 4: MIXIN AVANZADO
// ============================================

console.log("\n--- Ejercicio 4: Mixins Funcionales ---");
console.log(`
🧩 Crea mixins reutilizables:
   • TimestampMixin - Agrega createdAt, updatedAt
   • ValidationMixin - Agrega validación
   • SerializableMixin - JSON serialization
`);

const TimestampMixin = (Base) =>
  class extends Base {
    constructor(...args) {
      super(...args);
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }

    touch() {
      this.updatedAt = new Date();
      console.log(`🕒 Actualizado: ${this.updatedAt.toLocaleString()}`);
    }

    getAge() {
      const diff = Date.now() - this.createdAt.getTime();
      const seconds = Math.floor(diff / 1000);
      return `${seconds} segundos`;
    }
  };

const ValidationMixin = (Base) =>
  class extends Base {
    validate() {
      const errors = [];

      Object.keys(this).forEach((key) => {
        if (
          !key.startsWith("_") &&
          (this[key] === null || this[key] === undefined)
        ) {
          errors.push(`${key} es requerido`);
        }
      });

      if (errors.length > 0) {
        console.log(`❌ Errores de validación:`, errors);
        return false;
      }

      console.log(`✅ Validación exitosa`);
      return true;
    }
  };

const SerializableMixin = (Base) =>
  class extends Base {
    toJSON() {
      const obj = {};

      Object.keys(this).forEach((key) => {
        if (!key.startsWith("_")) {
          obj[key] = this[key];
        }
      });

      return obj;
    }

    toString() {
      return JSON.stringify(this.toJSON(), null, 2);
    }

    static fromJSON(json) {
      const data = typeof json === "string" ? JSON.parse(json) : json;
      return new this(data);
    }
  };

// Aplicar múltiples mixins
class Usuario extends SerializableMixin(
  ValidationMixin(TimestampMixin(Object))
) {
  constructor(data) {
    super();
    this.nombre = data.nombre;
    this.email = data.email;
    this.edad = data.edad;
  }
}

// Prueba
const usuario = new Usuario({
  nombre: "Ana García",
  email: "ana@example.com",
  edad: 28,
});

console.log("\n--- Usuario con Mixins ---");
usuario.validate();
console.log("Edad del objeto:", usuario.getAge());
console.log("\nJSON:");
console.log(usuario.toString());

setTimeout(() => {
  usuario.touch();
}, 1000);

// ============================================
// EJERCICIO 5: STATE MACHINE (MÁQUINA DE ESTADOS)
// ============================================

console.log("\n--- Ejercicio 5: Máquina de Estados ---");
console.log(`
🤖 Crea una máquina de estados para un pedido:
   • Estados: pending, processing, shipped, delivered, cancelled
   • Transiciones válidas definidas
   • No permitir transiciones inválidas
`);

class StateMachine {
  constructor(initialState, transitions) {
    this._currentState = initialState;
    this._transitions = transitions;
    this._history = [initialState];
  }

  getCurrentState() {
    return this._currentState;
  }

  can(action) {
    const validTransitions = this._transitions[this._currentState];
    return validTransitions && validTransitions.includes(action);
  }

  transition(action) {
    if (!this.can(action)) {
      console.log(`❌ Transición inválida: ${this._currentState} -> ${action}`);
      return false;
    }

    const previousState = this._currentState;
    this._currentState = action;
    this._history.push(action);

    console.log(`✅ Estado cambiado: ${previousState} -> ${action}`);
    return true;
  }

  getHistory() {
    return [...this._history];
  }
}

class Pedido {
  static estados = {
    PENDING: "pending",
    PROCESSING: "processing",
    SHIPPED: "shipped",
    DELIVERED: "delivered",
    CANCELLED: "cancelled",
  };

  static transiciones = {
    pending: ["processing", "cancelled"],
    processing: ["shipped", "cancelled"],
    shipped: ["delivered"],
    delivered: [],
    cancelled: [],
  };

  constructor(id, productos) {
    this.id = id;
    this.productos = productos;
    this._stateMachine = new StateMachine(
      Pedido.estados.PENDING,
      Pedido.transiciones
    );
    this.createdAt = new Date();
  }

  getEstado() {
    return this._stateMachine.getCurrentState();
  }

  procesar() {
    if (this._stateMachine.transition(Pedido.estados.PROCESSING)) {
      console.log(`📦 Pedido ${this.id} en procesamiento`);
      return true;
    }
    return false;
  }

  enviar() {
    if (this._stateMachine.transition(Pedido.estados.SHIPPED)) {
      console.log(`🚚 Pedido ${this.id} enviado`);
      return true;
    }
    return false;
  }

  entregar() {
    if (this._stateMachine.transition(Pedido.estados.DELIVERED)) {
      console.log(`✅ Pedido ${this.id} entregado`);
      return true;
    }
    return false;
  }

  cancelar() {
    if (this._stateMachine.transition(Pedido.estados.CANCELLED)) {
      console.log(`❌ Pedido ${this.id} cancelado`);
      return true;
    }
    return false;
  }

  verHistorial() {
    console.log(`\n📋 Historial del pedido ${this.id}:`);
    this._stateMachine.getHistory().forEach((estado, i) => {
      console.log(`   ${i + 1}. ${estado}`);
    });
  }
}

// Prueba
const pedido1 = new Pedido("PED-001", ["Laptop", "Mouse"]);

console.log("\n--- Flujo Normal ---");
console.log("Estado inicial:", pedido1.getEstado());
pedido1.procesar();
pedido1.enviar();
pedido1.entregar();

console.log("\n--- Intentar operación inválida ---");
pedido1.cancelar(); // No se puede cancelar si ya fue entregado

pedido1.verHistorial();

// Pedido que se cancela
const pedido2 = new Pedido("PED-002", ["Teclado"]);
console.log("\n--- Flujo de Cancelación ---");
pedido2.procesar();
pedido2.cancelar();
pedido2.enviar(); // No se puede enviar si está cancelado

// ============================================
// EJERCICIO 6: COMMAND PATTERN AVANZADO
// ============================================

console.log("\n--- Ejercicio 6: Editor de Texto con Undo/Redo ---");
console.log(`
📝 Crea un editor de texto con historial:
   • Comandos: Escribir, Borrar, Reemplazar
   • Undo/Redo ilimitado
   • Macro (grabar secuencia de comandos)
`);

class Comando {
  execute() {
    throw new Error("Debe implementarse");
  }

  undo() {
    throw new Error("Debe implementarse");
  }
}

class Editor {
  constructor() {
    this._texto = "";
  }

  get texto() {
    return this._texto;
  }

  set texto(valor) {
    this._texto = valor;
  }

  insertarEn(posicion, texto) {
    this._texto =
      this._texto.slice(0, posicion) + texto + this._texto.slice(posicion);
  }

  eliminarEn(posicion, longitud) {
    const eliminado = this._texto.slice(posicion, posicion + longitud);
    this._texto =
      this._texto.slice(0, posicion) + this._texto.slice(posicion + longitud);
    return eliminado;
  }
}

class ComandoEscribir extends Comando {
  constructor(editor, texto) {
    super();
    this._editor = editor;
    this._texto = texto;
    this._posicion = editor.texto.length;
  }

  execute() {
    this._editor.insertarEn(this._posicion, this._texto);
    console.log(`✍️  Escrito: "${this._texto}"`);
  }

  undo() {
    this._editor.eliminarEn(this._posicion, this._texto.length);
    console.log(`↩️  Deshacer: "${this._texto}"`);
  }
}

class ComandoBorrar extends Comando {
  constructor(editor, cantidad) {
    super();
    this._editor = editor;
    this._cantidad = cantidad;
    this._textoEliminado = "";
    this._posicion = 0;
  }

  execute() {
    this._posicion = Math.max(0, this._editor.texto.length - this._cantidad);
    this._textoEliminado = this._editor.eliminarEn(
      this._posicion,
      this._cantidad
    );
    console.log(`🗑️  Borrado: "${this._textoEliminado}"`);
  }

  undo() {
    this._editor.insertarEn(this._posicion, this._textoEliminado);
    console.log(`↩️  Restaurar: "${this._textoEliminado}"`);
  }
}

class HistorialComandos {
  constructor() {
    this._comandos = [];
    this._posicion = -1;
  }

  ejecutar(comando) {
    // Eliminar comandos adelante si estamos en el medio
    this._comandos = this._comandos.slice(0, this._posicion + 1);

    comando.execute();
    this._comandos.push(comando);
    this._posicion++;
  }

  undo() {
    if (this._posicion >= 0) {
      const comando = this._comandos[this._posicion];
      comando.undo();
      this._posicion--;
      return true;
    }
    console.log("⚠️  No hay nada que deshacer");
    return false;
  }

  redo() {
    if (this._posicion < this._comandos.length - 1) {
      this._posicion++;
      const comando = this._comandos[this._posicion];
      comando.execute();
      return true;
    }
    console.log("⚠️  No hay nada que rehacer");
    return false;
  }

  clear() {
    this._comandos = [];
    this._posicion = -1;
    console.log("🧹 Historial limpiado");
  }
}

// Prueba
const editor = new Editor();
const historial = new HistorialComandos();

console.log("");
historial.ejecutar(new ComandoEscribir(editor, "Hola "));
console.log(`Texto: "${editor.texto}"`);

historial.ejecutar(new ComandoEscribir(editor, "mundo"));
console.log(`Texto: "${editor.texto}"`);

historial.ejecutar(new ComandoEscribir(editor, "!"));
console.log(`Texto: "${editor.texto}"`);

console.log("\n--- Deshaciendo ---");
historial.undo();
console.log(`Texto: "${editor.texto}"`);

historial.undo();
console.log(`Texto: "${editor.texto}"`);

console.log("\n--- Rehaciendo ---");
historial.redo();
console.log(`Texto: "${editor.texto}"`);

console.log("\n--- Borrando ---");
historial.ejecutar(new ComandoBorrar(editor, 5));
console.log(`Texto: "${editor.texto}"`);

historial.undo();
console.log(`Texto: "${editor.texto}"`);

// ============================================
// RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
✅ EJERCICIOS AVANZADOS COMPLETADOS:

1. ✅ Event Emitter - Patrón Observer
2. ✅ Query Builder - Patrón Builder fluido
3. ✅ Middleware - Cadena de responsabilidad
4. ✅ Mixins Funcionales - Composición
5. ✅ State Machine - Máquina de estados
6. ✅ Command Pattern - Undo/Redo

💡 CONCEPTOS AVANZADOS PRACTICADOS:
   • Patrón Observer (Eventos)
   • Patrón Builder (Query Builder)
   • Patrón Chain of Responsibility (Middleware)
   • Mixins y composición
   • State Machine (Máquina de estados)
   • Command Pattern (Comandos)
   • Patrón Memento (Historial)

🎯 HABILIDADES DESARROLLADAS:
   • Diseño de APIs fluidas
   • Gestión de estado complejo
   • Patrones de diseño avanzados
   • Arquitectura de software
   • Composición vs Herencia

🏆 ¡FELICIDADES!
   Has completado todos los ejercicios de clases en JavaScript.
   Ahora tienes una base sólida para crear aplicaciones
   complejas y bien estructuradas.

📚 PRÓXIMOS PASOS:
   • Implementa estos patrones en proyectos reales
   • Combina múltiples patrones
   • Crea tus propios patrones
   • Comparte tu conocimiento
`);
