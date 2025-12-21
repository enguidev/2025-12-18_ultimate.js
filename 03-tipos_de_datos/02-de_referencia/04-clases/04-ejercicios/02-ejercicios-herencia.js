// ============================================
// 02-EJERCICIOS-HERENCIA.JS
// Ejercicios prácticos de herencia y polimorfismo
// ============================================

console.log("=== EJERCICIOS DE HERENCIA ===\n");

// ============================================
// EJERCICIO 1: ANIMALES
// ============================================

console.log("--- Ejercicio 1: Jerarquía de Animales ---");
console.log(`
🐾 Crea una jerarquía de clases:
   • Animal (clase base)
   • Mamifero, Ave, Pez (heredan de Animal)
   • Perro, Gato (heredan de Mamifero)
   • Aguila, Loro (heredan de Ave)
`);

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
}

class Mamifero extends Animal {
  constructor(nombre, edad, tipoPelaje) {
    super(nombre, edad);
    this.tipoPelaje = tipoPelaje;
    this.temperatura = 37;
  }

  amamantar() {
    console.log(`${this.nombre} está amamantando a sus crías`);
  }
}

class Ave extends Animal {
  constructor(nombre, edad, envergadura) {
    super(nombre, edad);
    this.envergadura = envergadura;
    this.puedeVolar = true;
  }

  volar() {
    if (this.puedeVolar) {
      console.log(`${this.nombre} está volando`);
    } else {
      console.log(`${this.nombre} no puede volar`);
    }
  }

  hacerSonido() {
    console.log(`${this.nombre} canta`);
  }
}

class Pez extends Animal {
  constructor(nombre, edad, tipoAgua) {
    super(nombre, edad);
    this.tipoAgua = tipoAgua; // dulce o salada
  }

  nadar() {
    console.log(`${this.nombre} está nadando en agua ${this.tipoAgua}`);
  }

  hacerSonido() {
    console.log(`${this.nombre} no hace sonidos`);
  }
}

class Perro extends Mamifero {
  constructor(nombre, edad, raza) {
    super(nombre, edad, "corto");
    this.raza = raza;
  }

  hacerSonido() {
    console.log(`${this.nombre} dice: ¡Guau guau!`);
  }

  jugar() {
    console.log(`${this.nombre} está jugando con una pelota`);
  }
}

class Gato extends Mamifero {
  constructor(nombre, edad, color) {
    super(nombre, edad, "suave");
    this.color = color;
  }

  hacerSonido() {
    console.log(`${this.nombre} dice: ¡Miau!`);
  }

  ronronear() {
    console.log(`${this.nombre} está ronroneando`);
  }
}

// Prueba
const perro = new Perro("Rex", 3, "Labrador");
const gato = new Gato("Luna", 2, "Naranja");
const aguila = new Ave("Águila Real", 5, 2.5);

console.log("\n--- Perro ---");
perro.comer();
perro.hacerSonido();
perro.jugar();

console.log("\n--- Gato ---");
gato.hacerSonido();
gato.ronronear();

console.log("\n--- Águila ---");
aguila.volar();
aguila.hacerSonido();

// ============================================
// EJERCICIO 2: VEHÍCULOS
// ============================================

console.log("\n--- Ejercicio 2: Sistema de Vehículos ---");
console.log(`
🚗 Crea una jerarquía de vehículos:
   • Vehiculo (clase base)
   • Coche, Moto, Camion (heredan de Vehiculo)
   • Cada uno con características específicas
`);

class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0;
    this.encendido = false;
  }

  encender() {
    this.encendido = true;
    console.log(`🔑 ${this.marca} ${this.modelo} encendido`);
  }

  apagar() {
    if (this.velocidad === 0) {
      this.encendido = false;
      console.log(`🔒 ${this.marca} ${this.modelo} apagado`);
    } else {
      console.log(`⚠️  Detén el vehículo primero`);
    }
  }

  acelerar(incremento) {
    if (this.encendido) {
      this.velocidad += incremento;
      console.log(`⚡ Acelerando... ${this.velocidad} km/h`);
    } else {
      console.log(`❌ Enciende el vehículo primero`);
    }
  }

  frenar() {
    this.velocidad = 0;
    console.log(`🛑 Vehículo detenido`);
  }
}

class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año);
    this.numeroPuertas = numeroPuertas;
    this.maletero = "vacío";
  }

  abrirMaletero() {
    console.log(`🚗 Maletero abierto`);
  }

  acelerar(incremento) {
    super.acelerar(incremento);
    if (this.velocidad > 120) {
      console.log(`⚠️  Velocidad alta, reduce la velocidad`);
    }
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  hacerCaballito() {
    if (this.velocidad > 0 && this.velocidad < 50) {
      console.log(`🏍️  ¡Haciendo caballito!`);
    } else {
      console.log(`⚠️  Velocidad inadecuada para caballito`);
    }
  }

  acelerar(incremento) {
    super.acelerar(incremento);
    if (this.velocidad > 180) {
      console.log(`⚠️  ¡Velocidad extrema!`);
    }
  }
}

class Camion extends Vehiculo {
  constructor(marca, modelo, año, capacidadCarga) {
    super(marca, modelo, año);
    this.capacidadCarga = capacidadCarga;
    this.cargaActual = 0;
  }

  cargar(peso) {
    if (this.cargaActual + peso <= this.capacidadCarga) {
      this.cargaActual += peso;
      console.log(`📦 Cargado ${peso}kg. Total: ${this.cargaActual}kg`);
    } else {
      console.log(`❌ Excede capacidad máxima de ${this.capacidadCarga}kg`);
    }
  }

  acelerar(incremento) {
    // Los camiones aceleran más lento
    const factorCarga = 1 - (this.cargaActual / this.capacidadCarga) * 0.5;
    const aceleracionReal = incremento * factorCarga;
    super.acelerar(Math.floor(aceleracionReal));
  }
}

// Prueba
const coche = new Coche("Toyota", "Corolla", 2020, 4);
const moto = new Moto("Yamaha", "R1", 2021, 1000);
const camion = new Camion("Volvo", "FH16", 2022, 25000);

console.log("\n--- Coche ---");
coche.encender();
coche.acelerar(60);
coche.acelerar(70);

console.log("\n--- Moto ---");
moto.encender();
moto.acelerar(30);
moto.hacerCaballito();

console.log("\n--- Camión ---");
camion.encender();
camion.cargar(15000);
camion.acelerar(50);

// ============================================
// EJERCICIO 3: EMPLEADOS
// ============================================

console.log("\n--- Ejercicio 3: Sistema de Empleados ---");
console.log(`
💼 Crea un sistema de empleados:
   • Empleado (clase base)
   • EmpleadoTiempoCompleto, EmpleadoMedioTiempo, Contratista
   • Cada uno calcula salario de forma diferente
`);

class Empleado {
  static totalEmpleados = 0;

  constructor(nombre, email) {
    this.id = ++Empleado.totalEmpleados;
    this.nombre = nombre;
    this.email = email;
    this.fechaContratacion = new Date();
  }

  calcularSalario() {
    throw new Error("Debe implementarse en las subclases");
  }

  mostrarInfo() {
    console.log(`\n👤 ${this.nombre} (ID: ${this.id})`);
    console.log(`   Email: ${this.email}`);
    console.log(`   Tipo: ${this.constructor.name}`);
  }
}

class EmpleadoTiempoCompleto extends Empleado {
  constructor(nombre, email, salarioMensual) {
    super(nombre, email);
    this.salarioMensual = salarioMensual;
    this.bonificacion = 0;
  }

  setBonificacion(porcentaje) {
    this.bonificacion = porcentaje;
    console.log(`🎁 Bonificación establecida: ${porcentaje}%`);
  }

  calcularSalario() {
    const bonus = this.salarioMensual * (this.bonificacion / 100);
    return this.salarioMensual + bonus;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`   Salario Mensual: ${this.salarioMensual}€`);
    console.log(`   Bonificación: ${this.bonificacion}%`);
    console.log(`   Total: ${this.calcularSalario()}€`);
  }
}

class EmpleadoMedioTiempo extends Empleado {
  constructor(nombre, email, tarifaHora) {
    super(nombre, email);
    this.tarifaHora = tarifaHora;
    this.horasTrabajadas = 0;
  }

  registrarHoras(horas) {
    this.horasTrabajadas += horas;
    console.log(
      `⏰ Registradas ${horas} horas. Total: ${this.horasTrabajadas}h`
    );
  }

  calcularSalario() {
    return this.tarifaHora * this.horasTrabajadas;
  }

  resetearHoras() {
    this.horasTrabajadas = 0;
    console.log(`🔄 Horas reseteadas`);
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`   Tarifa: ${this.tarifaHora}€/hora`);
    console.log(`   Horas trabajadas: ${this.horasTrabajadas}h`);
    console.log(`   Total: ${this.calcularSalario()}€`);
  }
}

class Contratista extends Empleado {
  constructor(nombre, email, tarifaProyecto) {
    super(nombre, email);
    this.tarifaProyecto = tarifaProyecto;
    this.proyectosCompletados = 0;
  }

  completarProyecto() {
    this.proyectosCompletados++;
    console.log(`✅ Proyecto completado. Total: ${this.proyectosCompletados}`);
  }

  calcularSalario() {
    return this.tarifaProyecto * this.proyectosCompletados;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`   Tarifa por proyecto: ${this.tarifaProyecto}€`);
    console.log(`   Proyectos completados: ${this.proyectosCompletados}`);
    console.log(`   Total: ${this.calcularSalario()}€`);
  }
}

// Prueba
const emp1 = new EmpleadoTiempoCompleto("Ana García", "ana@company.com", 2500);
emp1.setBonificacion(10);

const emp2 = new EmpleadoMedioTiempo("Luis Pérez", "luis@company.com", 20);
emp2.registrarHoras(80);

const emp3 = new Contratista("María López", "maria@freelance.com", 3000);
emp3.completarProyecto();
emp3.completarProyecto();

console.log("\n--- Información de Empleados ---");
emp1.mostrarInfo();
emp2.mostrarInfo();
emp3.mostrarInfo();

console.log(`\n📊 Total de empleados: ${Empleado.totalEmpleados}`);

// ============================================
// EJERCICIO 4: FIGURAS GEOMÉTRICAS
// ============================================

console.log("\n--- Ejercicio 4: Figuras Geométricas ---");
console.log(`
📐 Crea una jerarquía de figuras:
   • Figura (clase base)
   • Circulo, Rectangulo, Triangulo
   • Cada una calcula área y perímetro diferente
`);

class Figura {
  constructor(nombre) {
    this.nombre = nombre;
  }

  calcularArea() {
    throw new Error("Debe implementarse en las subclases");
  }

  calcularPerimetro() {
    throw new Error("Debe implementarse en las subclases");
  }

  mostrarInfo() {
    console.log(`\n${this.nombre}:`);
    console.log(`   Área: ${this.calcularArea().toFixed(2)}`);
    console.log(`   Perímetro: ${this.calcularPerimetro().toFixed(2)}`);
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super("Círculo");
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * Math.pow(this.radio, 2);
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.radio;
  }

  getDiametro() {
    return this.radio * 2;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`   Radio: ${this.radio}`);
    console.log(`   Diámetro: ${this.getDiametro()}`);
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

  esUnCuadrado() {
    return this.ancho === this.alto;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`   Dimensiones: ${this.ancho} x ${this.alto}`);
    console.log(`   ¿Es cuadrado?: ${this.esUnCuadrado() ? "Sí" : "No"}`);
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

  esEquilatero() {
    return this.lado1 === this.lado2 && this.lado2 === this.lado3;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`   Base: ${this.base}, Altura: ${this.altura}`);
    console.log(`   Lados: ${this.lado1}, ${this.lado2}, ${this.lado3}`);
    console.log(`   ¿Es equilátero?: ${this.esEquilatero() ? "Sí" : "No"}`);
  }
}

// Prueba con polimorfismo
const figuras = [
  new Circulo(5),
  new Rectangulo(4, 6),
  new Triangulo(6, 4, 5, 5, 6),
];

console.log("\n--- Calculando todas las figuras ---");
figuras.forEach((figura) => figura.mostrarInfo());

// ============================================
// EJERCICIO 5: CUENTAS BANCARIAS
// ============================================

console.log("\n--- Ejercicio 5: Tipos de Cuentas Bancarias ---");
console.log(`
🏦 Crea diferentes tipos de cuentas:
   • CuentaBancaria (clase base)
   • CuentaAhorro (con intereses)
   • CuentaCorriente (con sobregiro)
   • CuentaPremium (con beneficios extra)
`);

class CuentaBancaria2 {
  static numeroCuentas = 0;

  constructor(titular, saldoInicial = 0) {
    this.numeroCuenta = ++CuentaBancaria2.numeroCuentas;
    this.titular = titular;
    this._saldo = saldoInicial;
    this._movimientos = [];
  }

  depositar(cantidad) {
    if (cantidad <= 0) {
      console.log(`❌ Cantidad inválida`);
      return false;
    }

    this._saldo += cantidad;
    this._movimientos.push({ tipo: "DEPOSITO", cantidad, fecha: new Date() });
    console.log(`💰 Depositado: ${cantidad}€. Saldo: ${this._saldo}€`);
    return true;
  }

  retirar(cantidad) {
    if (cantidad <= 0) {
      console.log(`❌ Cantidad inválida`);
      return false;
    }

    if (cantidad > this._saldo) {
      console.log(`❌ Saldo insuficiente`);
      return false;
    }

    this._saldo -= cantidad;
    this._movimientos.push({ tipo: "RETIRO", cantidad, fecha: new Date() });
    console.log(`💸 Retirado: ${cantidad}€. Saldo: ${this._saldo}€`);
    return true;
  }

  getSaldo() {
    return this._saldo;
  }

  mostrarInfo() {
    console.log(`\n💳 Cuenta ${this.numeroCuenta} - ${this.titular}`);
    console.log(`   Tipo: ${this.constructor.name}`);
    console.log(`   Saldo: ${this._saldo}€`);
  }
}

class CuentaAhorro extends CuentaBancaria2 {
  constructor(titular, saldoInicial, tasaInteres) {
    super(titular, saldoInicial);
    this.tasaInteres = tasaInteres; // Porcentaje anual
  }

  aplicarInteres() {
    const interes = this._saldo * (this.tasaInteres / 100);
    this._saldo += interes;
    this._movimientos.push({
      tipo: "INTERES",
      cantidad: interes,
      fecha: new Date(),
    });
    console.log(
      `💰 Interés aplicado: ${interes.toFixed(
        2
      )}€. Nuevo saldo: ${this._saldo.toFixed(2)}€`
    );
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`   Tasa de interés: ${this.tasaInteres}%`);
  }
}

class CuentaCorriente extends CuentaBancaria2 {
  constructor(titular, saldoInicial, limiteSobregiro) {
    super(titular, saldoInicial);
    this.limiteSobregiro = limiteSobregiro;
  }

  retirar(cantidad) {
    if (cantidad <= 0) {
      console.log(`❌ Cantidad inválida`);
      return false;
    }

    if (cantidad > this._saldo + this.limiteSobregiro) {
      console.log(`❌ Excede límite de sobregiro (${this.limiteSobregiro}€)`);
      return false;
    }

    this._saldo -= cantidad;
    this._movimientos.push({ tipo: "RETIRO", cantidad, fecha: new Date() });

    if (this._saldo < 0) {
      console.log(
        `💸 Retirado: ${cantidad}€. ⚠️  EN SOBREGIRO: ${this._saldo}€`
      );
    } else {
      console.log(`💸 Retirado: ${cantidad}€. Saldo: ${this._saldo}€`);
    }

    return true;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`   Límite sobregiro: ${this.limiteSobregiro}€`);
    if (this._saldo < 0) {
      console.log(`   ⚠️  Estado: EN SOBREGIRO`);
    }
  }
}

class CuentaPremium extends CuentaBancaria2 {
  constructor(titular, saldoInicial) {
    super(titular, saldoInicial);
    this.cashback = 0;
    this.porcentajeCashback = 1; // 1% de cashback
  }

  retirar(cantidad) {
    const resultado = super.retirar(cantidad);

    if (resultado) {
      // Cashback en retiros
      const cashback = cantidad * (this.porcentajeCashback / 100);
      this.cashback += cashback;
      console.log(`   🎁 Cashback acumulado: +${cashback.toFixed(2)}€`);
    }

    return resultado;
  }

  reclamarCashback() {
    if (this.cashback > 0) {
      this._saldo += this.cashback;
      console.log(`🎉 Cashback reclamado: ${this.cashback.toFixed(2)}€`);
      this.cashback = 0;
    } else {
      console.log(`⚠️  No hay cashback disponible`);
    }
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`   Cashback disponible: ${this.cashback.toFixed(2)}€`);
  }
}

// Prueba
const cuentaAhorro = new CuentaAhorro("Ana", 5000, 2.5);
const cuentaCorriente = new CuentaCorriente("Luis", 1000, 500);
const cuentaPremium = new CuentaPremium("María", 3000);

console.log("\n--- Cuenta de Ahorro ---");
cuentaAhorro.depositar(1000);
cuentaAhorro.aplicarInteres();
cuentaAhorro.mostrarInfo();

console.log("\n--- Cuenta Corriente ---");
cuentaCorriente.retirar(1200); // Sobregiro
cuentaCorriente.mostrarInfo();

console.log("\n--- Cuenta Premium ---");
cuentaPremium.retirar(500);
cuentaPremium.retirar(300);
cuentaPremium.reclamarCashback();
cuentaPremium.mostrarInfo();

// ============================================
// RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
✅ EJERCICIOS DE HERENCIA COMPLETADOS:

1. ✅ Animales - Jerarquía con 3 niveles
2. ✅ Vehículos - Sobrescritura de métodos
3. ✅ Empleados - Cálculos polimórficos
4. ✅ Figuras - Métodos abstractos
5. ✅ Cuentas Bancarias - Extensión de funcionalidad

💡 CONCEPTOS PRACTICADOS:
   • extends - Herencia de clases
   • super() - Llamar al constructor padre
   • super.metodo() - Llamar métodos del padre
   • Sobrescritura de métodos
   • Polimorfismo
   • Métodos abstractos (lanzar Error)
   • Extensión de funcionalidad

🎯 PRÓXIMO NIVEL:
   Continúa con los ejercicios avanzados para
   practicar mixins, decoradores y patrones de diseño.
`);
