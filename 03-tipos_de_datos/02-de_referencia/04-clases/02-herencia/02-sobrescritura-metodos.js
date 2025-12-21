// ============================================
// 02-SOBRESCRITURA-METODOS.JS
// Override (Sobrescritura) de Métodos en Herencia
// ============================================

console.log("=== 2. SOBRESCRITURA DE MÉTODOS ===\n");

// ============================================
// 1️⃣ ¿QUÉ ES LA SOBRESCRITURA?
// ============================================

console.log("--- Concepto de Sobrescritura (Override) ---");

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    return `${this.nombre} hace un sonido`;
  }

  moverse() {
    return `${this.nombre} se mueve`;
  }
}

// Sobrescribir completamente el método
class Perro extends Animal {
  hacerSonido() {
    return `${this.nombre} dice: ¡Guau guau!`;
  }
}

class Gato extends Animal {
  hacerSonido() {
    return `${this.nombre} dice: ¡Miau!`;
  }
}

class Pajaro extends Animal {
  hacerSonido() {
    return `${this.nombre} dice: ¡Pío pío!`;
  }

  // También sobrescribir moverse
  moverse() {
    return `${this.nombre} vuela por el cielo`;
  }
}

const perro = new Perro("Rex");
const gato = new Gato("Misu");
const pajaro = new Pajaro("Piolín");

console.log(perro.hacerSonido()); // Guau guau
console.log(gato.hacerSonido()); // Miau
console.log(pajaro.hacerSonido()); // Pío pío
console.log(pajaro.moverse()); // Vuela por el cielo

// ============================================
// 2️⃣ SOBRESCRITURA CON SUPER
// ============================================

console.log("\n--- Sobrescritura Extendiendo Funcionalidad ---");

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  }

  trabajar() {
    return `${this.nombre} está trabajando`;
  }
}

class Programador extends Persona {
  constructor(nombre, edad, lenguajes) {
    super(nombre, edad);
    this.lenguajes = lenguajes;
  }

  // Extender el método presentarse
  presentarse() {
    const presentacionBase = super.presentarse();
    return `${presentacionBase}. Soy programador y conozco: ${this.lenguajes.join(
      ", "
    )}`;
  }

  // Sobrescribir trabajo específico
  trabajar() {
    return `${this.nombre} está programando en ${this.lenguajes[0]}`;
  }

  // Método adicional
  depurar() {
    return `${this.nombre} está depurando código`;
  }
}

class Profesor extends Persona {
  constructor(nombre, edad, materia) {
    super(nombre, edad);
    this.materia = materia;
  }

  presentarse() {
    const presentacionBase = super.presentarse();
    return `${presentacionBase}. Soy profesor de ${this.materia}`;
  }

  trabajar() {
    return `${this.nombre} está enseñando ${this.materia}`;
  }

  calificar() {
    return `${this.nombre} está calificando exámenes`;
  }
}

const programador = new Programador("Ana", 28, [
  "JavaScript",
  "Python",
  "Java",
]);
const profesor = new Profesor("Luis", 45, "Matemáticas");

console.log(programador.presentarse());
console.log(programador.trabajar());
console.log(programador.depurar());

console.log("\n" + profesor.presentarse());
console.log(profesor.trabajar());
console.log(profesor.calificar());

// ============================================
// 3️⃣ POLIMORFISMO
// ============================================

console.log("\n--- Polimorfismo: Mismo Método, Diferente Comportamiento ---");

class Figura {
  constructor(nombre) {
    this.nombre = nombre;
  }

  calcularArea() {
    return 0; // Método base, será sobrescrito
  }

  calcularPerimetro() {
    return 0;
  }

  describir() {
    return `${
      this.nombre
    } - Área: ${this.calcularArea()}, Perímetro: ${this.calcularPerimetro()}`;
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super("Círculo");
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio ** 2;
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.radio;
  }
}

class Rectangulo extends Figura {
  constructor(ancho, alto) {
    super("Rectángulo");
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea() {
    return this.ancho * this.alto;
  }

  calcularPerimetro() {
    return 2 * (this.ancho + this.alto);
  }
}

class Triangulo extends Figura {
  constructor(base, altura, lado1, lado2, lado3) {
    super("Triángulo");
    this.base = base;
    this.altura = altura;
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }

  calcularPerimetro() {
    return this.lado1 + this.lado2 + this.lado3;
  }
}

// Array polimórfico: diferentes tipos, misma interfaz
const figuras = [
  new Circulo(5),
  new Rectangulo(4, 6),
  new Triangulo(3, 4, 3, 4, 5),
];

console.log("--- Procesando figuras de forma polimórfica ---");
figuras.forEach((figura) => {
  console.log(figura.describir());
  console.log(`  Área: ${figura.calcularArea().toFixed(2)}`);
  console.log(`  Perímetro: ${figura.calcularPerimetro().toFixed(2)}\n`);
});

// ============================================
// 4️⃣ SOBRESCRITURA DE GETTERS Y SETTERS
// ============================================

console.log("--- Sobrescritura de Getters y Setters ---");

class Vehiculo {
  constructor(marca, modelo) {
    this._marca = marca;
    this._modelo = modelo;
    this._velocidad = 0;
  }

  get velocidad() {
    return this._velocidad;
  }

  set velocidad(valor) {
    if (valor < 0) valor = 0;
    if (valor > 200) valor = 200; // Límite genérico
    this._velocidad = valor;
  }

  get descripcion() {
    return `${this._marca} ${this._modelo}`;
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, cilindrada) {
    super(marca, modelo);
    this._cilindrada = cilindrada;
  }

  // Sobrescribir setter con límite diferente
  set velocidad(valor) {
    if (valor < 0) valor = 0;
    if (valor > 300) valor = 300; // Las motos pueden ir más rápido
    this._velocidad = valor;
  }

  // Extender getter
  get descripcion() {
    return `${super.descripcion} (${this._cilindrada}cc)`;
  }
}

class Camion extends Vehiculo {
  constructor(marca, modelo, carga) {
    super(marca, modelo);
    this._carga = carga;
  }

  // Sobrescribir con límite más bajo
  set velocidad(valor) {
    if (valor < 0) valor = 0;
    if (valor > 120) valor = 120; // Los camiones son más lentos
    this._velocidad = valor;
  }

  get descripcion() {
    return `${super.descripcion} (Carga: ${this._carga}kg)`;
  }
}

const moto = new Moto("Yamaha", "R1", 1000);
const camion = new Camion("Volvo", "FH16", 25000);

moto.velocidad = 250;
camion.velocidad = 150; // Se limitará a 120

console.log(moto.descripcion, "- Velocidad:", moto.velocidad);
console.log(camion.descripcion, "- Velocidad:", camion.velocidad);

// ============================================
// 5️⃣ SOBRESCRITURA DE MÉTODOS ESTÁTICOS
// ============================================

console.log("\n--- Sobrescritura de Métodos Estáticos ---");

class BaseDatos {
  static tipo = "Genérica";

  static conectar() {
    return `Conectando a base de datos ${this.tipo}...`;
  }

  static desconectar() {
    return `Desconectando de ${this.tipo}`;
  }

  static consultar(query) {
    return `Ejecutando: ${query}`;
  }
}

class MySQL extends BaseDatos {
  static tipo = "MySQL";

  // Sobrescribir método estático
  static conectar() {
    return `${super.conectar()}\nUsando puerto 3306`;
  }

  static consultar(query) {
    // Añadir funcionalidad específica de MySQL
    return `[MySQL] ${query} LIMIT 1000`;
  }
}

class MongoDB extends BaseDatos {
  static tipo = "MongoDB";

  static conectar() {
    return `${super.conectar()}\nUsando puerto 27017`;
  }

  static consultar(query) {
    // MongoDB usa sintaxis diferente
    return `[MongoDB] db.collection.find(${query})`;
  }
}

console.log(MySQL.conectar());
console.log(MySQL.consultar("SELECT * FROM usuarios"));

console.log("\n" + MongoDB.conectar());
console.log(MongoDB.consultar("{ edad: { $gt: 18 } }"));

// ============================================
// 6️⃣ PATRÓN TEMPLATE METHOD
// ============================================

console.log("\n--- Patrón Template Method ---");

class ProcesoReporte {
  // Método plantilla (no se sobrescribe)
  generarReporte() {
    console.log("--- Generando Reporte ---");
    this.obtenerDatos();
    this.procesarDatos();
    this.formatear();
    this.exportar();
    console.log("--- Reporte Completo ---\n");
  }

  // Métodos que serán sobrescritos (template)
  obtenerDatos() {
    console.log("Obteniendo datos...");
  }

  procesarDatos() {
    console.log("Procesando datos...");
  }

  formatear() {
    console.log("Formateando...");
  }

  exportar() {
    console.log("Exportando...");
  }
}

class ReportePDF extends ProcesoReporte {
  obtenerDatos() {
    console.log("📊 Cargando datos desde base de datos");
  }

  procesarDatos() {
    console.log("🔧 Aplicando cálculos y agregaciones");
  }

  formatear() {
    console.log("📄 Formateando para PDF");
  }

  exportar() {
    console.log("💾 Guardando archivo.pdf");
  }
}

class ReporteExcel extends ProcesoReporte {
  obtenerDatos() {
    console.log("📊 Cargando datos desde API");
  }

  procesarDatos() {
    console.log("🔧 Generando tablas dinámicas");
  }

  formatear() {
    console.log("📊 Formateando para Excel con gráficos");
  }

  exportar() {
    console.log("💾 Guardando archivo.xlsx");
  }
}

const reportePDF = new ReportePDF();
reportePDF.generarReporte();

const reporteExcel = new ReporteExcel();
reporteExcel.generarReporte();

// ============================================
// 7️⃣ EJEMPLO PRÁCTICO: SISTEMA DE PAGOS
// ============================================

console.log("--- Ejemplo Práctico: Sistema de Pagos ---");

class MetodoPago {
  constructor(titular) {
    this.titular = titular;
    this.transacciones = [];
  }

  procesarPago(cantidad) {
    console.log(`Procesando pago de ${cantidad}€...`);

    if (this.validar(cantidad)) {
      this.ejecutarTransaccion(cantidad);
      this.registrarTransaccion(cantidad);
      this.notificar(cantidad);
      return true;
    }

    console.log("❌ Pago rechazado\n");
    return false;
  }

  validar(cantidad) {
    return cantidad > 0;
  }

  ejecutarTransaccion(cantidad) {
    console.log("Ejecutando transacción...");
  }

  registrarTransaccion(cantidad) {
    this.transacciones.push({
      cantidad,
      fecha: new Date(),
      tipo: this.constructor.name,
    });
  }

  notificar(cantidad) {
    console.log(`Notificación enviada a ${this.titular}`);
  }
}

class TarjetaCredito extends MetodoPago {
  constructor(titular, numero, cvv) {
    super(titular);
    this._numero = numero;
    this._cvv = cvv;
    this.limiteCredito = 5000;
  }

  validar(cantidad) {
    if (!super.validar(cantidad)) return false;

    if (cantidad > this.limiteCredito) {
      console.log("❌ Supera el límite de crédito");
      return false;
    }

    console.log("✅ Validación de tarjeta exitosa");
    return true;
  }

  ejecutarTransaccion(cantidad) {
    console.log(`💳 Procesando con tarjeta ****${this._numero.slice(-4)}`);
    this.limiteCredito -= cantidad;
    console.log(`💰 Límite restante: ${this.limiteCredito}€`);
  }

  notificar(cantidad) {
    super.notificar(cantidad);
    console.log(`📧 Email enviado: Cargo de ${cantidad}€ en tu tarjeta`);
  }
}

class PayPal extends MetodoPago {
  constructor(titular, email, saldo) {
    super(titular);
    this.email = email;
    this._saldo = saldo;
  }

  validar(cantidad) {
    if (!super.validar(cantidad)) return false;

    if (cantidad > this._saldo) {
      console.log("❌ Saldo insuficiente en PayPal");
      return false;
    }

    console.log("✅ Validación de PayPal exitosa");
    return true;
  }

  ejecutarTransaccion(cantidad) {
    console.log(`🅿️ Procesando con PayPal (${this.email})`);
    this._saldo -= cantidad;
    console.log(`💰 Saldo restante: ${this._saldo}€`);
  }

  notificar(cantidad) {
    super.notificar(cantidad);
    console.log(`📧 Notificación PayPal: Pago de ${cantidad}€ completado`);
  }
}

class Transferencia extends MetodoPago {
  constructor(titular, iban) {
    super(titular);
    this.iban = iban;
  }

  validar(cantidad) {
    if (!super.validar(cantidad)) return false;

    console.log("✅ IBAN validado");
    return true;
  }

  ejecutarTransaccion(cantidad) {
    console.log(`🏦 Procesando transferencia desde ${this.iban}`);
    console.log("⏰ La transferencia puede tardar 1-2 días hábiles");
  }

  notificar(cantidad) {
    super.notificar(cantidad);
    console.log(`📧 Confirmación de transferencia de ${cantidad}€`);
    console.log(`📱 SMS enviado al titular`);
  }
}

// Procesar diferentes tipos de pago
console.log("--- Pago con Tarjeta ---");
const tarjeta = new TarjetaCredito("Ana García", "1234567812345678", "123");
tarjeta.procesarPago(150);

console.log("--- Pago con PayPal ---");
const paypal = new PayPal("Luis Pérez", "luis@example.com", 500);
paypal.procesarPago(200);

console.log("--- Pago con Transferencia ---");
const transfer = new Transferencia(
  "María López",
  "ES12 1234 5678 9012 3456 7890"
);
transfer.procesarPago(1000);

// ============================================
// 8️⃣ RESUMEN
// ============================================

console.log("=== RESUMEN ===");
console.log(`
🔄 SOBRESCRITURA DE MÉTODOS (OVERRIDE):

📌 CONCEPTO:
• Redefinir un método heredado en la clase hija
• Permite cambiar o extender el comportamiento
• Es la base del polimorfismo

✅ FORMAS DE SOBRESCRIBIR:

1. COMPLETAMENTE (sin super):
   hacerSonido() {
       return "Guau!";
   }

2. EXTENDIENDO (con super):
   presentarse() {
       const base = super.presentarse();
       return base + " y soy programador";
   }

3. AGREGANDO VALIDACIÓN:
   set velocidad(valor) {
       if (valor > 300) valor = 300;
       super.velocidad = valor;
   }

💡 POLIMORFISMO:
• Mismo método, diferente comportamiento
• Permite tratar objetos diferentes de forma uniforme
• Facilita extensibilidad del código

⚠️ BUENAS PRÁCTICAS:
• Mantén la misma firma del método (nombre y parámetros)
• Usa super cuando necesites la funcionalidad del padre
• No cambies radicalmente el propósito del método
• Documenta los cambios de comportamiento

🎯 PATRONES COMUNES:
• Template Method: método principal que llama a métodos sobrescritos
• Strategy: diferentes implementaciones del mismo método
• Factory Method: métodos estáticos sobrescritos
`);
