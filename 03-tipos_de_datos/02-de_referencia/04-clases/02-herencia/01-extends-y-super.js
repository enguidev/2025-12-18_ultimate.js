// ============================================
// 01-EXTENDS-Y-SUPER.JS
// Herencia en JavaScript con extends y super
// ============================================

console.log("=== 1. EXTENDS Y SUPER ===\n");

// ============================================
// 1️⃣ CONCEPTO DE HERENCIA
// ============================================

console.log("--- ¿Qué es la Herencia? ---");

// Clase BASE o PADRE
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.vivo = true;
  }

  comer() {
    console.log(`${this.nombre} está comiendo`);
  }

  dormir() {
    console.log(`${this.nombre} está durmiendo`);
  }

  hacerSonido() {
    console.log(`${this.nombre} hace un sonido`);
  }

  mostrarInfo() {
    console.log(`${this.nombre} tiene ${this.edad} años`);
  }
}

// Clase DERIVADA o HIJA (hereda de Animal)
class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad); // ✅ Llamar al constructor del padre
    this.raza = raza;
  }

  ladrar() {
    console.log(`${this.nombre} dice: ¡Guau guau!`);
  }
}

const perro = new Perro("Rex", 3, "Labrador");

// Métodos heredados de Animal
perro.comer(); // ✅ Funciona
perro.dormir(); // ✅ Funciona
perro.mostrarInfo(); // ✅ Funciona

// Método propio de Perro
perro.ladrar(); // ✅ Funciona

console.log("Propiedades:", perro.nombre, perro.edad, perro.raza);

// ============================================
// 2️⃣ LA PALABRA CLAVE 'super'
// ============================================

console.log("\n--- Uso de super ---");

class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0;
    console.log(`Vehículo creado: ${marca} ${modelo}`);
  }

  acelerar(incremento) {
    this.velocidad += incremento;
    console.log(`Acelerando... Velocidad: ${this.velocidad} km/h`);
  }

  frenar() {
    this.velocidad = 0;
    console.log("Vehículo detenido");
  }

  mostrarInfo() {
    return `${this.marca} ${this.modelo} (${this.año})`;
  }
}

class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    // ✅ super() DEBE ser lo primero en el constructor
    super(marca, modelo, año);
    this.numeroPuertas = numeroPuertas;
    console.log(`Coche con ${numeroPuertas} puertas`);
  }

  // Método adicional específico de Coche
  abrirPuertas() {
    console.log(`Abriendo las ${this.numeroPuertas} puertas`);
  }

  // Sobrescribir método del padre
  acelerar(incremento) {
    // Llamar al método del padre primero
    super.acelerar(incremento);

    // Agregar funcionalidad adicional
    if (this.velocidad > 120) {
      console.log("⚠️ Velocidad alta, ten cuidado");
    }
  }
}

const miCoche = new Coche("Toyota", "Corolla", 2020, 4);
console.log("");
miCoche.acelerar(50);
miCoche.acelerar(80);
miCoche.abrirPuertas();

// ============================================
// 3️⃣ CADENA DE HERENCIA (MULTINIVEL)
// ============================================

console.log("\n--- Cadena de Herencia ---");

class SerVivo {
  constructor(nombre) {
    this.nombre = nombre;
    this.vivo = true;
  }

  respirar() {
    console.log(`${this.nombre} está respirando`);
  }
}

class Mamifero extends SerVivo {
  constructor(nombre, tipoPelo) {
    super(nombre);
    this.tipoPelo = tipoPelo;
    this.temperatura = 37; // Temperatura corporal
  }

  amamantar() {
    console.log(`${this.nombre} está amamantando a sus crías`);
  }
}

class Gato extends Mamifero {
  constructor(nombre, color) {
    super(nombre, "suave");
    this.color = color;
  }

  maullar() {
    console.log(`${this.nombre} dice: ¡Miau!`);
  }

  ronronear() {
    console.log(`${this.nombre} está ronroneando`);
  }
}

const gato = new Gato("Misu", "naranja");

// ✅ Tiene acceso a TODOS los métodos de la cadena
gato.respirar(); // De SerVivo
gato.amamantar(); // De Mamifero
gato.maullar(); // De Gato
gato.ronronear(); // De Gato

console.log("Propiedades heredadas:", {
  nombre: gato.nombre, // De SerVivo
  vivo: gato.vivo, // De SerVivo
  tipoPelo: gato.tipoPelo, // De Mamifero
  temperatura: gato.temperatura, // De Mamifero
  color: gato.color, // De Gato
});

// ============================================
// 4️⃣ SUPER EN MÉTODOS (NO SOLO CONSTRUCTOR)
// ============================================

console.log("\n--- super en Métodos ---");

class Empleado {
  constructor(nombre, salario) {
    this.nombre = nombre;
    this.salario = salario;
  }

  calcularBonificacion() {
    return this.salario * 0.1; // 10% de bonificación base
  }

  calcularSalarioTotal() {
    return this.salario + this.calcularBonificacion();
  }

  mostrarInfo() {
    console.log(`Empleado: ${this.nombre}`);
    console.log(`Salario base: ${this.salario}€`);
    console.log(`Bonificación: ${this.calcularBonificacion()}€`);
    console.log(`Total: ${this.calcularSalarioTotal()}€`);
  }
}

class Gerente extends Empleado {
  constructor(nombre, salario, departamento) {
    super(nombre, salario);
    this.departamento = departamento;
  }

  // Sobrescribir el cálculo de bonificación
  calcularBonificacion() {
    // Los gerentes tienen 20% de bonificación
    return this.salario * 0.2;
  }

  // Extender el método mostrarInfo
  mostrarInfo() {
    super.mostrarInfo(); // Llamar al método del padre
    console.log(`Departamento: ${this.departamento}`);
    console.log("Nivel: Gerente");
  }
}

class Director extends Gerente {
  constructor(nombre, salario, departamento, acciones) {
    super(nombre, salario, departamento);
    this.acciones = acciones;
  }

  // Sobrescribir nuevamente
  calcularBonificacion() {
    // Bonificación base del gerente + acciones
    const bonifGerente = super.calcularBonificacion();
    const bonifAcciones = this.acciones * 100;
    return bonifGerente + bonifAcciones;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Acciones: ${this.acciones}`);
    console.log("Nivel: Director");
  }
}

console.log("--- Empleado Normal ---");
const empleado = new Empleado("Ana", 2000);
empleado.mostrarInfo();

console.log("\n--- Gerente ---");
const gerente = new Gerente("Luis", 3000, "Ventas");
gerente.mostrarInfo();

console.log("\n--- Director ---");
const director = new Director("María", 5000, "Operaciones", 50);
director.mostrarInfo();

// ============================================
// 5️⃣ INSTANCEOF - VERIFICAR HERENCIA
// ============================================

console.log("\n--- Verificación con instanceof ---");

class Dispositivo {
  constructor(marca) {
    this.marca = marca;
  }
}

class Telefono extends Dispositivo {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }
}

class Smartphone extends Telefono {
  constructor(marca, modelo, sistemaOperativo) {
    super(marca, modelo);
    this.sistemaOperativo = sistemaOperativo;
  }
}

const miSmartphone = new Smartphone("Apple", "iPhone 13", "iOS");

console.log(
  "miSmartphone instanceof Smartphone:",
  miSmartphone instanceof Smartphone
); // true
console.log(
  "miSmartphone instanceof Telefono:",
  miSmartphone instanceof Telefono
); // true
console.log(
  "miSmartphone instanceof Dispositivo:",
  miSmartphone instanceof Dispositivo
); // true
console.log("miSmartphone instanceof Object:", miSmartphone instanceof Object); // true

// ❌ No es instancia de clases no relacionadas
class Computadora extends Dispositivo {}
console.log(
  "miSmartphone instanceof Computadora:",
  miSmartphone instanceof Computadora
); // false

// ============================================
// 6️⃣ HERENCIA CON PROPIEDADES PRIVADAS
// ============================================

console.log('\n--- Herencia con Propiedades "Privadas" ---');

class CuentaBancaria {
  constructor(titular, saldoInicial) {
    this._titular = titular;
    this._saldo = saldoInicial;
    this._movimientos = [];
  }

  depositar(cantidad) {
    this._saldo += cantidad;
    this._movimientos.push({ tipo: "depósito", cantidad });
    console.log(`Depósito de ${cantidad}€. Saldo: ${this._saldo}€`);
  }

  getSaldo() {
    return this._saldo;
  }

  getMovimientos() {
    return [...this._movimientos];
  }
}

class CuentaAhorro extends CuentaBancaria {
  constructor(titular, saldoInicial, tasaInteres) {
    super(titular, saldoInicial);
    this._tasaInteres = tasaInteres;
  }

  aplicarInteres() {
    const interes = this._saldo * (this._tasaInteres / 100);
    this._saldo += interes;
    this._movimientos.push({ tipo: "interés", cantidad: interes });
    console.log(
      `Interés aplicado: ${interes.toFixed(
        2
      )}€. Nuevo saldo: ${this._saldo.toFixed(2)}€`
    );
  }

  // Sobrescribir depositar para agregar funcionalidad
  depositar(cantidad) {
    super.depositar(cantidad); // Llamar al método padre

    // Si el depósito es mayor a 1000€, aplicar interés bonus
    if (cantidad >= 1000) {
      const bonus = cantidad * 0.01;
      this._saldo += bonus;
      console.log(`🎁 Bonus por depósito grande: ${bonus}€`);
    }
  }
}

const cuentaAhorro = new CuentaAhorro("Pedro", 5000, 2.5);
cuentaAhorro.depositar(1500);
cuentaAhorro.aplicarInteres();
console.log("Saldo final:", cuentaAhorro.getSaldo().toFixed(2) + "€");

// ============================================
// 7️⃣ HERENCIA CON MÉTODOS ESTÁTICOS
// ============================================

console.log("\n--- Herencia de Métodos Estáticos ---");

class Figura {
  constructor(nombre) {
    this.nombre = nombre;
  }

  static descripcion() {
    return "Clase base para figuras geométricas";
  }

  static contarLados() {
    return 0; // Será sobrescrito
  }
}

class Rectangulo extends Figura {
  constructor(ancho, alto) {
    super("Rectángulo");
    this.ancho = ancho;
    this.alto = alto;
  }

  static contarLados() {
    return 4;
  }

  static crearCuadrado(lado) {
    return new Rectangulo(lado, lado);
  }

  calcularArea() {
    return this.ancho * this.alto;
  }
}

class Triangulo extends Figura {
  constructor(base, altura) {
    super("Triángulo");
    this.base = base;
    this.altura = altura;
  }

  static contarLados() {
    return 3;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

// Métodos estáticos se heredan
console.log("Descripción Figura:", Figura.descripcion());
console.log("Descripción Rectangulo:", Rectangulo.descripcion()); // Heredado

// Métodos estáticos sobrescritos
console.log("Lados Figura:", Figura.contarLados());
console.log("Lados Rectangulo:", Rectangulo.contarLados());
console.log("Lados Triangulo:", Triangulo.contarLados());

// Factory method estático
const cuadrado = Rectangulo.crearCuadrado(5);
console.log("Área del cuadrado:", cuadrado.calcularArea());

// ============================================
// 8️⃣ EJEMPLO PRÁCTICO: SISTEMA DE USUARIOS
// ============================================

console.log("\n--- Ejemplo Práctico: Sistema de Usuarios ---");

class Usuario {
  static _contadorUsuarios = 0;

  constructor(nombre, email) {
    this.id = ++Usuario._contadorUsuarios;
    this.nombre = nombre;
    this.email = email;
    this.fechaRegistro = new Date();
    this.activo = true;
  }

  login() {
    console.log(`✅ ${this.nombre} ha iniciado sesión`);
  }

  logout() {
    console.log(`👋 ${this.nombre} ha cerrado sesión`);
  }

  mostrarInfo() {
    console.log(`ID: ${this.id} | ${this.nombre} (${this.email})`);
  }
}

class UsuarioAdmin extends Usuario {
  constructor(nombre, email, nivel) {
    super(nombre, email);
    this.nivel = nivel;
    this.permisos = ["leer", "escribir", "eliminar", "admin"];
  }

  login() {
    super.login();
    console.log(`🔑 Acceso de administrador nivel ${this.nivel}`);
  }

  eliminarUsuario(usuario) {
    console.log(`🗑️ Admin ${this.nombre} eliminó a ${usuario.nombre}`);
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(
      `Rol: Admin | Nivel: ${this.nivel} | Permisos: ${this.permisos.length}`
    );
  }
}

class UsuarioPremium extends Usuario {
  constructor(nombre, email, plan) {
    super(nombre, email);
    this.plan = plan;
    this.fechaExpiracion = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
  }

  login() {
    super.login();
    console.log(`⭐ Usuario Premium - Plan ${this.plan}`);
  }

  accederContenidoPremium() {
    console.log(`🎬 ${this.nombre} accede a contenido exclusivo`);
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Rol: Premium | Plan: ${this.plan}`);
  }
}

// Crear diferentes tipos de usuarios
console.log("--- Usuarios Creados ---");
const userNormal = new Usuario("Ana", "ana@example.com");
const userAdmin = new UsuarioAdmin("Luis", "luis@admin.com", 3);
const userPremium = new UsuarioPremium("María", "maria@premium.com", "Gold");

console.log("\n--- Usuario Normal ---");
userNormal.mostrarInfo();
userNormal.login();

console.log("\n--- Usuario Admin ---");
userAdmin.mostrarInfo();
userAdmin.login();
userAdmin.eliminarUsuario(userNormal);

console.log("\n--- Usuario Premium ---");
userPremium.mostrarInfo();
userPremium.login();
userPremium.accederContenidoPremium();

// ============================================
// 9️⃣ RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
🧬 HERENCIA CON EXTENDS Y SUPER:

📌 EXTENDS:
• Crea una clase que hereda de otra
• Sintaxis: class Hijo extends Padre { }
• La clase hija tiene acceso a propiedades y métodos del padre
• Permite crear jerarquías de clases

📌 SUPER:
• super() en constructor: llama al constructor del padre
• DEBE ser lo primero en el constructor de la clase hija
• super.metodo(): llama a un método del padre
• Permite extender funcionalidad sin duplicar código

✅ VENTAJAS:
• Reutilización de código
• Organización jerárquica
• Polimorfismo (mismo método, diferente comportamiento)
• Facilita mantenimiento

⚠️ CUÁNDO USAR:
• Cuando hay relación "es un/a" (Perro ES UN Animal)
• Cuando hay funcionalidad compartida
• Cuando necesitas especializar comportamiento

❌ EVITAR:
• Herencia profunda (más de 3-4 niveles)
• Herencia solo para reutilizar código (usa composición)
• Cuando no hay relación lógica clara

💡 REGLA DE ORO:
Favorece la COMPOSICIÓN sobre la HERENCIA cuando sea posible.
Usa herencia solo cuando haya una relación clara "es un/a".
`);
