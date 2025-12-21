// ============================================
// 01-EJERCICIOS-BASICOS.JS
// Ejercicios prácticos de fundamentos de clases
// ============================================

console.log("=== EJERCICIOS BÁSICOS DE CLASES ===\n");

// ============================================
// EJERCICIO 1: CLASE LIBRO
// ============================================

console.log("--- Ejercicio 1: Clase Libro ---");
console.log(`
📚 Crea una clase Libro con:
   • Propiedades: titulo, autor, paginas, paginaActual
   • Métodos: leer(paginas), reiniciar(), progreso()
`);

class Libro {
  constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.paginaActual = 0;
  }

  leer(numPaginas) {
    this.paginaActual += numPaginas;
    if (this.paginaActual >= this.paginas) {
      this.paginaActual = this.paginas;
      console.log(`✅ ¡Terminaste de leer "${this.titulo}"!`);
    } else {
      console.log(
        `📖 Leyendo... Página ${this.paginaActual} de ${this.paginas}`
      );
    }
  }

  reiniciar() {
    this.paginaActual = 0;
    console.log(`🔄 Reiniciando lectura de "${this.titulo}"`);
  }

  progreso() {
    const porcentaje = ((this.paginaActual / this.paginas) * 100).toFixed(1);
    return `${porcentaje}% completado (${this.paginaActual}/${this.paginas} páginas)`;
  }
}

// Prueba
const libro1 = new Libro("El Quijote", "Cervantes", 400);
libro1.leer(100);
console.log(libro1.progreso());
libro1.leer(350);
libro1.reiniciar();
console.log(libro1.progreso());

// ============================================
// EJERCICIO 2: CLASE RECTANGULO
// ============================================

console.log("\n--- Ejercicio 2: Clase Rectángulo ---");
console.log(`
📐 Crea una clase Rectangulo con:
   • Propiedades: ancho, alto
   • Getters: area, perimetro
   • Métodos: escalar(factor), esUnCuadrado()
`);

class Rectangulo {
  constructor(ancho, alto) {
    this._ancho = ancho;
    this._alto = alto;
  }

  get area() {
    return this._ancho * this._alto;
  }

  get perimetro() {
    return 2 * (this._ancho + this._alto);
  }

  escalar(factor) {
    this._ancho *= factor;
    this._alto *= factor;
    console.log(`🔍 Escalado x${factor}: ${this._ancho}x${this._alto}`);
  }

  esUnCuadrado() {
    return this._ancho === this._alto;
  }
}

// Prueba
const rect = new Rectangulo(5, 10);
console.log(`Área: ${rect.area}`);
console.log(`Perímetro: ${rect.perimetro}`);
console.log(`¿Es cuadrado?: ${rect.esUnCuadrado()}`);
rect.escalar(2);
console.log(`Nueva área: ${rect.area}`);

// ============================================
// EJERCICIO 3: CLASE CONTADOR
// ============================================

console.log("\n--- Ejercicio 3: Clase Contador ---");
console.log(`
🔢 Crea una clase Contador con:
   • Propiedad: valor (empieza en 0)
   • Métodos: incrementar(), decrementar(), reset(), getValor()
   • El valor no puede ser negativo
`);

class Contador {
  constructor() {
    this._valor = 0;
  }

  incrementar() {
    this._valor++;
    console.log(`➕ Valor: ${this._valor}`);
  }

  decrementar() {
    if (this._valor > 0) {
      this._valor--;
      console.log(`➖ Valor: ${this._valor}`);
    } else {
      console.log(`⚠️  No se puede decrementar, ya está en 0`);
    }
  }

  reset() {
    this._valor = 0;
    console.log(`🔄 Contador reiniciado a 0`);
  }

  getValor() {
    return this._valor;
  }
}

// Prueba
const contador = new Contador();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.decrementar();
contador.decrementar();
contador.decrementar();
contador.decrementar(); // No puede ser negativo
console.log(`Valor final: ${contador.getValor()}`);

// ============================================
// EJERCICIO 4: CLASE PRODUCTO
// ============================================

console.log("\n--- Ejercicio 4: Clase Producto ---");
console.log(`
🛍️  Crea una clase Producto con:
   • Propiedades: nombre, precio, stock
   • Métodos: vender(cantidad), reabastecer(cantidad), disponible()
   • El stock no puede ser negativo
`);

class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this._stock = stock;
  }

  vender(cantidad) {
    if (cantidad > this._stock) {
      console.log(`❌ Stock insuficiente. Disponible: ${this._stock}`);
      return false;
    }

    this._stock -= cantidad;
    const total = cantidad * this.precio;
    console.log(`✅ Vendido ${cantidad} x ${this.nombre} = ${total}€`);
    console.log(`   Stock restante: ${this._stock}`);
    return true;
  }

  reabastecer(cantidad) {
    this._stock += cantidad;
    console.log(`📦 Reabastecido ${cantidad} unidades. Stock: ${this._stock}`);
  }

  disponible() {
    return this._stock > 0;
  }

  getStock() {
    return this._stock;
  }
}

// Prueba
const laptop = new Producto("Laptop", 999, 10);
laptop.vender(3);
laptop.vender(8); // No hay suficiente
laptop.reabastecer(5);
laptop.vender(8); // Ahora sí
console.log(`¿Disponible?: ${laptop.disponible()}`);

// ============================================
// EJERCICIO 5: CLASE TEMPERATURA
// ============================================

console.log("\n--- Ejercicio 5: Clase Temperatura ---");
console.log(`
🌡️  Crea una clase Temperatura con:
   • Propiedad privada: celsius
   • Getters/Setters: celsius, fahrenheit, kelvin
   • Convierte automáticamente entre escalas
`);

class Temperatura {
  constructor(celsius = 0) {
    this._celsius = celsius;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(valor) {
    this._celsius = valor;
  }

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(valor) {
    this._celsius = ((valor - 32) * 5) / 9;
  }

  get kelvin() {
    return this._celsius + 273.15;
  }

  set kelvin(valor) {
    this._celsius = valor - 273.15;
  }
}

// Prueba
const temp = new Temperatura(25);
console.log(
  `${temp.celsius}°C = ${temp.fahrenheit.toFixed(1)}°F = ${temp.kelvin.toFixed(
    2
  )}K`
);

temp.fahrenheit = 100;
console.log(`${temp.celsius.toFixed(1)}°C = ${temp.fahrenheit}°F`);

// ============================================
// EJERCICIO 6: CLASE CUENTA BANCARIA
// ============================================

console.log("\n--- Ejercicio 6: Clase Cuenta Bancaria ---");
console.log(`
🏦 Crea una clase CuentaBancaria con:
   • Propiedades privadas: titular, saldo
   • Métodos: depositar(cantidad), retirar(cantidad), getSaldo()
   • No permitir saldo negativo
   • Registrar movimientos
`);

class CuentaBancaria {
  constructor(titular, saldoInicial = 0) {
    this._titular = titular;
    this._saldo = saldoInicial;
    this._movimientos = [];
  }

  depositar(cantidad) {
    if (cantidad <= 0) {
      console.log(`❌ La cantidad debe ser positiva`);
      return false;
    }

    this._saldo += cantidad;
    this._movimientos.push({ tipo: "DEPOSITO", cantidad, fecha: new Date() });
    console.log(`💰 Depositado: ${cantidad}€. Saldo: ${this._saldo}€`);
    return true;
  }

  retirar(cantidad) {
    if (cantidad <= 0) {
      console.log(`❌ La cantidad debe ser positiva`);
      return false;
    }

    if (cantidad > this._saldo) {
      console.log(`❌ Saldo insuficiente. Disponible: ${this._saldo}€`);
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

  verMovimientos() {
    console.log(`\n--- Movimientos de ${this._titular} ---`);
    this._movimientos.forEach((mov, i) => {
      console.log(`${i + 1}. ${mov.tipo}: ${mov.cantidad}€`);
    });
    console.log(`Saldo actual: ${this._saldo}€\n`);
  }
}

// Prueba
const cuenta = new CuentaBancaria("Ana García", 1000);
cuenta.depositar(500);
cuenta.retirar(200);
cuenta.retirar(2000); // Error
cuenta.depositar(300);
cuenta.verMovimientos();

// ============================================
// EJERCICIO 7: CLASE ESTUDIANTE
// ============================================

console.log("\n--- Ejercicio 7: Clase Estudiante ---");
console.log(`
🎓 Crea una clase Estudiante con:
   • Propiedades: nombre, notas (array)
   • Métodos: agregarNota(nota), calcularPromedio(), aprobo()
   • aprobo() retorna true si promedio >= 5
`);

class Estudiante {
  constructor(nombre) {
    this.nombre = nombre;
    this._notas = [];
  }

  agregarNota(nota) {
    if (nota < 0 || nota > 10) {
      console.log(`❌ Nota inválida. Debe estar entre 0 y 10`);
      return;
    }

    this._notas.push(nota);
    console.log(`📝 Nota agregada: ${nota}`);
  }

  calcularPromedio() {
    if (this._notas.length === 0) return 0;

    const suma = this._notas.reduce((acc, nota) => acc + nota, 0);
    return (suma / this._notas.length).toFixed(2);
  }

  aprobo() {
    return this.calcularPromedio() >= 5;
  }

  mostrarNotas() {
    console.log(`\n📊 Notas de ${this.nombre}:`);
    this._notas.forEach((nota, i) => {
      console.log(`   ${i + 1}. ${nota}`);
    });
    console.log(`   Promedio: ${this.calcularPromedio()}`);
    console.log(
      `   Estado: ${this.aprobo() ? "✅ Aprobado" : "❌ Reprobado"}\n`
    );
  }
}

// Prueba
const estudiante = new Estudiante("Luis Pérez");
estudiante.agregarNota(7);
estudiante.agregarNota(8);
estudiante.agregarNota(6);
estudiante.agregarNota(9);
estudiante.mostrarNotas();

// ============================================
// EJERCICIO 8: CLASE TEMPORIZADOR
// ============================================

console.log("\n--- Ejercicio 8: Clase Temporizador ---");
console.log(`
⏱️  Crea una clase Temporizador con:
   • Propiedad: segundos
   • Métodos: iniciar(), pausar(), reiniciar(), formatear()
   • formatear() retorna "HH:MM:SS"
`);

class Temporizador {
  constructor() {
    this._segundos = 0;
    this._activo = false;
    this._intervalo = null;
  }

  iniciar() {
    if (this._activo) {
      console.log(`⚠️  El temporizador ya está activo`);
      return;
    }

    this._activo = true;
    console.log(`▶️  Temporizador iniciado`);

    this._intervalo = setInterval(() => {
      this._segundos++;
      console.log(`   ${this.formatear()}`);
    }, 1000);
  }

  pausar() {
    if (!this._activo) {
      console.log(`⚠️  El temporizador no está activo`);
      return;
    }

    this._activo = false;
    clearInterval(this._intervalo);
    console.log(`⏸️  Temporizador pausado en ${this.formatear()}`);
  }

  reiniciar() {
    this.pausar();
    this._segundos = 0;
    console.log(`🔄 Temporizador reiniciado`);
  }

  formatear() {
    const horas = Math.floor(this._segundos / 3600);
    const minutos = Math.floor((this._segundos % 3600) / 60);
    const segundos = this._segundos % 60;

    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(
      2,
      "0"
    )}:${String(segundos).padStart(2, "0")}`;
  }
}

// Prueba (descomenta para ejecutar)
// const timer = new Temporizador();
// timer.iniciar();
// setTimeout(() => timer.pausar(), 5000);

// ============================================
// EJERCICIO 9: CLASE CARRITO DE COMPRAS
// ============================================

console.log("\n--- Ejercicio 9: Clase Carrito de Compras ---");
console.log(`
🛒 Crea una clase CarritoCompras con:
   • Propiedad: items (array)
   • Métodos: agregar(producto, precio), eliminar(producto), calcularTotal()
`);

class CarritoCompras {
  constructor() {
    this._items = [];
  }

  agregar(producto, precio) {
    this._items.push({ producto, precio });
    console.log(`✅ Agregado: ${producto} - ${precio}€`);
  }

  eliminar(producto) {
    const index = this._items.findIndex((item) => item.producto === producto);

    if (index === -1) {
      console.log(`❌ Producto no encontrado: ${producto}`);
      return false;
    }

    this._items.splice(index, 1);
    console.log(`🗑️  Eliminado: ${producto}`);
    return true;
  }

  calcularTotal() {
    return this._items.reduce((total, item) => total + item.precio, 0);
  }

  mostrar() {
    console.log(`\n🛒 Carrito de Compras:`);
    console.log(`${"─".repeat(40)}`);

    if (this._items.length === 0) {
      console.log("   (vacío)");
    } else {
      this._items.forEach((item, i) => {
        console.log(`   ${i + 1}. ${item.producto} - ${item.precio}€`);
      });
    }

    console.log(`${"─".repeat(40)}`);
    console.log(`   TOTAL: ${this.calcularTotal()}€\n`);
  }
}

// Prueba
const carrito = new CarritoCompras();
carrito.agregar("Laptop", 999);
carrito.agregar("Mouse", 29);
carrito.agregar("Teclado", 79);
carrito.mostrar();
carrito.eliminar("Mouse");
carrito.mostrar();

// ============================================
// EJERCICIO 10: CLASE CALCULADORA
// ============================================

console.log("\n--- Ejercicio 10: Clase Calculadora ---");
console.log(`
🔢 Crea una clase Calculadora con:
   • Métodos estáticos: sumar, restar, multiplicar, dividir
   • También: potencia, raiz, porcentaje
   • Maneja división por cero
`);

class Calculadora {
  static sumar(a, b) {
    return a + b;
  }

  static restar(a, b) {
    return a - b;
  }

  static multiplicar(a, b) {
    return a * b;
  }

  static dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  }

  static potencia(base, exponente) {
    return Math.pow(base, exponente);
  }

  static raiz(numero, indice = 2) {
    return Math.pow(numero, 1 / indice);
  }

  static porcentaje(numero, porcentaje) {
    return (numero * porcentaje) / 100;
  }
}

// Prueba
console.log("5 + 3 =", Calculadora.sumar(5, 3));
console.log("10 - 4 =", Calculadora.restar(10, 4));
console.log("6 × 7 =", Calculadora.multiplicar(6, 7));
console.log("20 ÷ 5 =", Calculadora.dividir(20, 5));
console.log("2³ =", Calculadora.potencia(2, 3));
console.log("√16 =", Calculadora.raiz(16));
console.log("20% de 500 =", Calculadora.porcentaje(500, 20));

try {
  Calculadora.dividir(10, 0);
} catch (e) {
  console.log("Error:", e.message);
}

// ============================================
// RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
✅ EJERCICIOS COMPLETADOS:

1. ✅ Libro - Constructor, métodos básicos
2. ✅ Rectángulo - Getters calculados
3. ✅ Contador - Validación de valores
4. ✅ Producto - Gestión de stock
5. ✅ Temperatura - Conversión entre escalas
6. ✅ Cuenta Bancaria - Propiedades privadas
7. ✅ Estudiante - Arrays y promedios
8. ✅ Temporizador - Formato de tiempo
9. ✅ Carrito - Arrays de objetos
10. ✅ Calculadora - Métodos estáticos

💡 CONCEPTOS PRACTICADOS:
   • Constructores
   • Propiedades públicas y privadas
   • Métodos de instancia
   • Métodos estáticos
   • Getters y setters
   • Validación de datos
   • Manejo de arrays
   • Formateo de datos

🎯 PRÓXIMO NIVEL:
   Continúa con los ejercicios de herencia para
   practicar extends, super y sobrescritura de métodos.
`);
