// ============================================
// 04-PATRONES-DISEÑO.JS
// Patrones de Diseño con Clases en JavaScript
// ============================================

console.log("=== 4. PATRONES DE DISEÑO ===\n");

// ============================================
// 1️⃣ PATRÓN SINGLETON
// ============================================

console.log("--- Patrón Singleton ---");

console.log(`
SINGLETON: Garantiza que una clase tenga UNA SOLA instancia
y proporciona un punto de acceso global a ella.

Uso: Configuración, Logging, Conexión a BD, Cache
`);

class BaseDatos {
  static _instancia = null;

  constructor() {
    if (BaseDatos._instancia) {
      console.log("⚠️  Ya existe una instancia, devolviendo la existente");
      return BaseDatos._instancia;
    }

    this._conexiones = [];
    this._conectada = true;
    BaseDatos._instancia = this;
    console.log("✅ Nueva instancia de BD creada");
  }

  static getInstancia() {
    if (!BaseDatos._instancia) {
      new BaseDatos();
    }
    return BaseDatos._instancia;
  }

  query(sql) {
    console.log(`🔍 Ejecutando: ${sql}`);
    return { resultado: "OK" };
  }
}

const db1 = BaseDatos.getInstancia();
const db2 = BaseDatos.getInstancia();
const db3 = new BaseDatos();

console.log("¿db1 === db2?", db1 === db2); // true
console.log("¿db1 === db3?", db1 === db3); // true

// ============================================
// 2️⃣ PATRÓN FACTORY (FÁBRICA)
// ============================================

console.log("\n--- Patrón Factory ---");

console.log(`
FACTORY: Define una interfaz para crear objetos, pero deja que
las subclases decidan qué clase instanciar.

Uso: Cuando la creación es compleja o depende de condiciones
`);

class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  getInfo() {
    return `${this.nombre} (${this.email})`;
  }
}

class Admin extends Usuario {
  constructor(nombre, email) {
    super(nombre, email);
    this.rol = "admin";
    this.permisos = ["read", "write", "delete", "admin"];
  }
}

class Moderador extends Usuario {
  constructor(nombre, email) {
    super(nombre, email);
    this.rol = "moderador";
    this.permisos = ["read", "write", "moderate"];
  }
}

class UsuarioNormal extends Usuario {
  constructor(nombre, email) {
    super(nombre, email);
    this.rol = "usuario";
    this.permisos = ["read"];
  }
}

// FACTORY
class UsuarioFactory {
  static crear(tipo, nombre, email) {
    switch (tipo) {
      case "admin":
        return new Admin(nombre, email);
      case "moderador":
        return new Moderador(nombre, email);
      case "usuario":
        return new UsuarioNormal(nombre, email);
      default:
        throw new Error(`Tipo de usuario desconocido: ${tipo}`);
    }
  }

  // Factory method alternativo
  static crearDesdeConfig(config) {
    return this.crear(config.tipo, config.nombre, config.email);
  }
}

const admin = UsuarioFactory.crear("admin", "Ana", "ana@admin.com");
const user = UsuarioFactory.crear("usuario", "Luis", "luis@user.com");

console.log("Admin:", admin.getInfo(), admin.permisos);
console.log("Usuario:", user.getInfo(), user.permisos);

// ============================================
// 3️⃣ PATRÓN BUILDER
// ============================================

console.log("\n--- Patrón Builder ---");

console.log(`
BUILDER: Separa la construcción de un objeto complejo
de su representación, permitiendo el mismo proceso de
construcción crear diferentes representaciones.

Uso: Objetos con muchos parámetros opcionales
`);

class Pizza {
  constructor() {
    this.tamaño = null;
    this.masa = null;
    this.queso = false;
    this.ingredientes = [];
  }

  mostrar() {
    console.log(`
🍕 Pizza ${this.tamaño}
   Masa: ${this.masa}
   Queso: ${this.queso ? "Sí" : "No"}
   Ingredientes: ${this.ingredientes.join(", ") || "Ninguno"}
    `);
  }
}

class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }

  setTamaño(tamaño) {
    this.pizza.tamaño = tamaño;
    return this; // Permite encadenar
  }

  setMasa(masa) {
    this.pizza.masa = masa;
    return this;
  }

  agregarQueso() {
    this.pizza.queso = true;
    return this;
  }

  agregarIngrediente(ingrediente) {
    this.pizza.ingredientes.push(ingrediente);
    return this;
  }

  build() {
    return this.pizza;
  }
}

const miPizza = new PizzaBuilder()
  .setTamaño("Grande")
  .setMasa("Fina")
  .agregarQueso()
  .agregarIngrediente("Pepperoni")
  .agregarIngrediente("Champiñones")
  .agregarIngrediente("Aceitunas")
  .build();

miPizza.mostrar();

// ============================================
// 4️⃣ PATRÓN OBSERVER (OBSERVADOR)
// ============================================

console.log("\n--- Patrón Observer ---");

console.log(`
OBSERVER: Define una dependencia uno-a-muchos entre objetos,
de manera que cuando un objeto cambia de estado, todos sus
dependientes son notificados automáticamente.

Uso: Sistemas de eventos, suscripciones, notificaciones
`);

class Observable {
  constructor() {
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

  notificar(evento) {
    console.log(`\n📢 Notificando evento: ${evento.tipo}`);
    this._observadores.forEach((observador) => {
      observador.actualizar(evento);
    });
  }
}

class Observador {
  constructor(nombre) {
    this.nombre = nombre;
  }

  actualizar(evento) {
    console.log(
      `   🔔 ${this.nombre} recibió: ${evento.tipo} - ${evento.mensaje}`
    );
  }
}

class NoticiasSistema extends Observable {
  publicarNoticia(titulo, contenido) {
    console.log(`\n📰 Publicando noticia: "${titulo}"`);
    this.notificar({
      tipo: "NOTICIA",
      mensaje: titulo,
      contenido: contenido,
    });
  }
}

const sistema = new NoticiasSistema();
const obs1 = new Observador("Ana");
const obs2 = new Observador("Luis");
const obs3 = new Observador("María");

sistema.suscribir(obs1);
sistema.suscribir(obs2);
sistema.suscribir(obs3);

sistema.publicarNoticia("JavaScript ES2024", "Nuevas características...");

sistema.desuscribir(obs2);
sistema.publicarNoticia("Node.js v20", "Nueva versión estable...");

// ============================================
// 5️⃣ PATRÓN STRATEGY (ESTRATEGIA)
// ============================================

console.log("\n--- Patrón Strategy ---");

console.log(`
STRATEGY: Define una familia de algoritmos, encapsula cada uno
y los hace intercambiables. Permite que el algoritmo varíe
independientemente de los clientes que lo usan.

Uso: Múltiples formas de hacer lo mismo
`);

// Estrategias de pago
class EstrategiaPagoEfectivo {
  pagar(cantidad) {
    console.log(`💵 Pagando ${cantidad}€ en efectivo`);
    return { metodo: "efectivo", cantidad };
  }
}

class EstrategiaPagoTarjeta {
  pagar(cantidad) {
    console.log(`💳 Procesando pago de ${cantidad}€ con tarjeta`);
    console.log("   Verificando tarjeta...");
    console.log("   ✅ Pago autorizado");
    return { metodo: "tarjeta", cantidad };
  }
}

class EstrategiaPagoPayPal {
  pagar(cantidad) {
    console.log(`🅿️ Redirigiendo a PayPal para pagar ${cantidad}€`);
    console.log("   Autenticando...");
    console.log("   ✅ Pago completado");
    return { metodo: "paypal", cantidad };
  }
}

class CarritoCompras {
  constructor() {
    this.items = [];
    this.estrategiaPago = null;
  }

  agregarItem(item, precio) {
    this.items.push({ item, precio });
    console.log(`🛒 Agregado: ${item} - ${precio}€`);
  }

  setEstrategiaPago(estrategia) {
    this.estrategiaPago = estrategia;
  }

  calcularTotal() {
    return this.items.reduce((sum, item) => sum + item.precio, 0);
  }

  pagar() {
    if (!this.estrategiaPago) {
      throw new Error("No se ha seleccionado método de pago");
    }

    const total = this.calcularTotal();
    console.log(`\n💰 Total a pagar: ${total}€`);
    return this.estrategiaPago.pagar(total);
  }
}

const carrito = new CarritoCompras();
carrito.agregarItem("Laptop", 999);
carrito.agregarItem("Mouse", 29);

console.log("\n--- Pago con Tarjeta ---");
carrito.setEstrategiaPago(new EstrategiaPagoTarjeta());
carrito.pagar();

console.log("\n--- Pago con PayPal ---");
carrito.setEstrategiaPago(new EstrategiaPagoPayPal());
carrito.pagar();

// ============================================
// 6️⃣ PATRÓN DECORATOR (DECORADOR)
// ============================================

console.log("\n--- Patrón Decorator ---");

console.log(`
DECORATOR: Añade responsabilidades adicionales a un objeto
dinámicamente. Proporciona una alternativa flexible a la
herencia para extender funcionalidad.

Uso: Agregar funcionalidades sin modificar la clase original
`);

class Cafe {
  getCosto() {
    return 2;
  }

  getDescripcion() {
    return "Café simple";
  }
}

class DecoradorCafe {
  constructor(cafe) {
    this._cafe = cafe;
  }

  getCosto() {
    return this._cafe.getCosto();
  }

  getDescripcion() {
    return this._cafe.getDescripcion();
  }
}

class ConLeche extends DecoradorCafe {
  getCosto() {
    return this._cafe.getCosto() + 0.5;
  }

  getDescripcion() {
    return this._cafe.getDescripcion() + " + Leche";
  }
}

class ConCrema extends DecoradorCafe {
  getCosto() {
    return this._cafe.getCosto() + 0.7;
  }

  getDescripcion() {
    return this._cafe.getDescripcion() + " + Crema";
  }
}

class ConCaramelo extends DecoradorCafe {
  getCosto() {
    return this._cafe.getCosto() + 0.6;
  }

  getDescripcion() {
    return this._cafe.getDescripcion() + " + Caramelo";
  }
}

let miCafe = new Cafe();
console.log(`${miCafe.getDescripcion()}: ${miCafe.getCosto()}€`);

miCafe = new ConLeche(miCafe);
console.log(`${miCafe.getDescripcion()}: ${miCafe.getCosto()}€`);

miCafe = new ConCrema(miCafe);
console.log(`${miCafe.getDescripcion()}: ${miCafe.getCosto()}€`);

miCafe = new ConCaramelo(miCafe);
console.log(`${miCafe.getDescripcion()}: ${miCafe.getCosto()}€`);

// ============================================
// 7️⃣ PATRÓN COMMAND (COMANDO)
// ============================================

console.log("\n--- Patrón Command ---");

console.log(`
COMMAND: Encapsula una solicitud como un objeto, permitiendo
parametrizar clientes con diferentes solicitudes, encolar
solicitudes y soportar operaciones deshacer.

Uso: Sistemas de deshacer/rehacer, macros, transacciones
`);

class Comando {
  ejecutar() {
    throw new Error("Debe implementar ejecutar()");
  }

  deshacer() {
    throw new Error("Debe implementar deshacer()");
  }
}

class Editor {
  constructor() {
    this._texto = "";
  }

  get texto() {
    return this._texto;
  }

  escribir(texto) {
    this._texto += texto;
  }

  borrar(cantidad) {
    this._texto = this._texto.slice(0, -cantidad);
  }
}

class ComandoEscribir extends Comando {
  constructor(editor, texto) {
    super();
    this._editor = editor;
    this._texto = texto;
  }

  ejecutar() {
    this._editor.escribir(this._texto);
    console.log(`✍️  Escribir: "${this._texto}"`);
  }

  deshacer() {
    this._editor.borrar(this._texto.length);
    console.log(`↩️  Deshacer escritura de "${this._texto}"`);
  }
}

class InvocadorComandos {
  constructor() {
    this._historial = [];
    this._posicion = -1;
  }

  ejecutar(comando) {
    // Eliminar comandos adelante si estamos en el medio
    this._historial = this._historial.slice(0, this._posicion + 1);

    comando.ejecutar();
    this._historial.push(comando);
    this._posicion++;
  }

  deshacer() {
    if (this._posicion >= 0) {
      const comando = this._historial[this._posicion];
      comando.deshacer();
      this._posicion--;
    } else {
      console.log("⚠️  No hay nada que deshacer");
    }
  }

  rehacer() {
    if (this._posicion < this._historial.length - 1) {
      this._posicion++;
      const comando = this._historial[this._posicion];
      comando.ejecutar();
    } else {
      console.log("⚠️  No hay nada que rehacer");
    }
  }
}

const editor = new Editor();
const invocador = new InvocadorComandos();

console.log("");
invocador.ejecutar(new ComandoEscribir(editor, "Hola "));
console.log(`Texto: "${editor.texto}"`);

invocador.ejecutar(new ComandoEscribir(editor, "Mundo"));
console.log(`Texto: "${editor.texto}"`);

invocador.ejecutar(new ComandoEscribir(editor, "!"));
console.log(`Texto: "${editor.texto}"`);

console.log("\n--- Deshaciendo ---");
invocador.deshacer();
console.log(`Texto: "${editor.texto}"`);

invocador.deshacer();
console.log(`Texto: "${editor.texto}"`);

console.log("\n--- Rehaciendo ---");
invocador.rehacer();
console.log(`Texto: "${editor.texto}"`);

// ============================================
// 8️⃣ PATRÓN ADAPTER (ADAPTADOR)
// ============================================

console.log("\n--- Patrón Adapter ---");

console.log(`
ADAPTER: Convierte la interfaz de una clase en otra interfaz
que los clientes esperan. Permite que clases con interfaces
incompatibles trabajen juntas.

Uso: Integrar código legacy, APIs de terceros
`);

// Sistema antiguo
class SistemaAntiguo {
  operacionAntigua() {
    return "Resultado del sistema antiguo";
  }
}

// Interfaz esperada
class SistemaModerno {
  operacionModerna() {
    return "Resultado del sistema moderno";
  }
}

// ADAPTER: Hace compatible el sistema antiguo
class Adaptador extends SistemaModerno {
  constructor(sistemaAntiguo) {
    super();
    this._sistemaAntiguo = sistemaAntiguo;
  }

  operacionModerna() {
    console.log("🔄 Adaptando llamada antigua a moderna...");
    const resultadoAntiguo = this._sistemaAntiguo.operacionAntigua();
    return `Adaptado: ${resultadoAntiguo}`;
  }
}

function usarSistemaModerno(sistema) {
  console.log("📱 Usando sistema moderno:");
  console.log("   " + sistema.operacionModerna());
}

const sistemaAntiguo = new SistemaAntiguo();
const adaptador = new Adaptador(sistemaAntiguo);

usarSistemaModerno(new SistemaModerno());
usarSistemaModerno(adaptador); // El antiguo funciona!

// ============================================
// 9️⃣ PATRÓN FACADE (FACHADA)
// ============================================

console.log("\n--- Patrón Facade ---");

console.log(`
FACADE: Proporciona una interfaz unificada simple para un
conjunto de interfaces en un subsistema. Define una interfaz
de nivel más alto que hace el subsistema más fácil de usar.

Uso: Simplificar APIs complejas
`);

// Subsistemas complejos
class SistemaPago {
  procesarPago(cantidad) {
    console.log(`   💳 Procesando pago de ${cantidad}€`);
    return true;
  }
}

class SistemaInventario {
  verificarStock(producto) {
    console.log(`   📦 Verificando stock de ${producto}`);
    return true;
  }

  reducirStock(producto) {
    console.log(`   📉 Reduciendo stock de ${producto}`);
  }
}

class SistemaEnvio {
  calcularCosto(destino) {
    console.log(`   🚚 Calculando envío a ${destino}`);
    return 5;
  }

  programarEnvio(destino) {
    console.log(`   📅 Programando envío a ${destino}`);
  }
}

class SistemaNotificaciones {
  enviarEmail(email, mensaje) {
    console.log(`   📧 Enviando email a ${email}`);
  }
}

// FACADE: Interfaz simplificada
class TiendaOnline {
  constructor() {
    this._pago = new SistemaPago();
    this._inventario = new SistemaInventario();
    this._envio = new SistemaEnvio();
    this._notificaciones = new SistemaNotificaciones();
  }

  realizarCompra(producto, cantidad, destino, email) {
    console.log(`\n🛍️  Procesando compra de ${producto}...\n`);

    // 1. Verificar stock
    if (!this._inventario.verificarStock(producto)) {
      console.log("❌ Producto sin stock");
      return false;
    }

    // 2. Calcular total
    const costoEnvio = this._envio.calcularCosto(destino);
    const total = cantidad + costoEnvio;

    // 3. Procesar pago
    if (!this._pago.procesarPago(total)) {
      console.log("❌ Pago rechazado");
      return false;
    }

    // 4. Actualizar inventario
    this._inventario.reducirStock(producto);

    // 5. Programar envío
    this._envio.programarEnvio(destino);

    // 6. Notificar
    this._notificaciones.enviarEmail(email, "Compra confirmada");

    console.log("\n✅ Compra completada exitosamente");
    return true;
  }
}

const tienda = new TiendaOnline();
tienda.realizarCompra("Laptop", 999, "Barcelona", "cliente@email.com");

// ============================================
// RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
🎨 PATRONES DE DISEÑO - RESUMEN:

📊 PATRONES CREACIONALES (Creación de objetos):
   1. SINGLETON
      • Una sola instancia global
      • Uso: BD, Config, Logger
   
   2. FACTORY
      • Crea objetos sin especificar clase exacta
      • Uso: Creación condicional
   
   3. BUILDER
      • Construcción paso a paso
      • Uso: Objetos complejos

📊 PATRONES ESTRUCTURALES (Composición):
   4. DECORATOR
      • Añade funcionalidad dinámicamente
      • Uso: Extender sin heredar
   
   5. ADAPTER
      • Hace compatibles interfaces incompatibles
      • Uso: Integrar código legacy
   
   6. FACADE
      • Interfaz simple para sistema complejo
      • Uso: Simplificar APIs

📊 PATRONES DE COMPORTAMIENTO (Interacción):
   7. OBSERVER
      • Notificación automática de cambios
      • Uso: Eventos, Suscripciones
   
   8. STRATEGY
      • Algoritmos intercambiables
      • Uso: Múltiples formas de hacer algo
   
   9. COMMAND
      • Encapsula acciones como objetos
      • Uso: Deshacer/Rehacer

💡 CUÁNDO USAR CADA UNO:
   • SINGLETON: Config global, una sola instancia
   • FACTORY: Creación condicional de objetos
   • BUILDER: Muchos parámetros opcionales
   • OBSERVER: Sistema de eventos/notificaciones
   • STRATEGY: Múltiples algoritmos intercambiables
   • DECORATOR: Añadir funcionalidad sin herencia
   • COMMAND: Historial de acciones, deshacer
   • ADAPTER: Integrar APIs incompatibles
   • FACADE: Simplificar subsistemas complejos

⚠️ IMPORTANTE:
   No uses patrones por usar patrones.
   Úsalos cuando realmente simplifiquen tu código
   y resuelvan un problema específico.
   
   "Un patrón mal aplicado es peor que no usar patrón"

🎓 APRENDE MÁS:
   • "Design Patterns" - Gang of Four
   • refactoring.guru/design-patterns
   • patterns.dev
`);
