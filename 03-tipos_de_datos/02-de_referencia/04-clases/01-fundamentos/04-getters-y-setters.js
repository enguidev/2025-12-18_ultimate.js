// ============================================
// 04-GETTERS-Y-SETTERS.JS
// Accesores y Mutadores en JavaScript
// VERSIÓN COMPATIBLE (sin propiedades privadas #)
// ============================================

console.log("=== 4. GETTERS Y SETTERS ===\n");

// ============================================
// 1️⃣ ¿QUÉ SON LOS GETTERS Y SETTERS?
// ============================================

console.log("--- Introducción a Getters y Setters ---");

class PersonaSinGettersSetters {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Métodos tradicionales
  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }
}

class PersonaConGettersSetters {
  constructor(nombre, edad) {
    this._nombre = nombre; // Convención: _ indica "privado"
    this._edad = edad;
  }

  // GETTER: Se accede como propiedad, no como método
  get nombre() {
    return this._nombre;
  }

  // SETTER: Se asigna como propiedad, no como método
  set nombre(nuevoNombre) {
    if (nuevoNombre.length < 2) {
      throw new Error("El nombre debe tener al menos 2 caracteres");
    }
    this._nombre = nuevoNombre;
  }

  get edad() {
    return this._edad;
  }

  set edad(nuevaEdad) {
    if (nuevaEdad < 0 || nuevaEdad > 150) {
      throw new Error("Edad no válida");
    }
    this._edad = nuevaEdad;
  }
}

// Forma antigua (métodos)
const p1 = new PersonaSinGettersSetters("Ana", 25);
console.log("Método tradicional:", p1.getNombre()); // getNombre()
p1.setNombre("María"); // setNombre()

// Forma moderna (getters/setters)
const p2 = new PersonaConGettersSetters("Luis", 30);
console.log("Getter:", p2.nombre); // ✅ Como propiedad
p2.nombre = "Pedro"; // ✅ Como asignación
console.log("Nuevo nombre:", p2.nombre);

// ❌ Validación automática con setter
try {
  p2.nombre = "A"; // Muy corto
} catch (e) {
  console.log("Error:", e.message);
}

// ============================================
// 2️⃣ GETTERS: PROPIEDADES CALCULADAS
// ============================================

console.log("\n--- Getters: Propiedades Calculadas ---");

class Persona {
  constructor(nombre, apellido, fechaNacimiento) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._fechaNacimiento = fechaNacimiento;
  }

  // Getter simple
  get nombre() {
    return this._nombre;
  }

  // Getter que combina propiedades
  get nombreCompleto() {
    return `${this._nombre} ${this._apellido}`;
  }

  // Getter con cálculo
  get edad() {
    const hoy = new Date();
    const nacimiento = new Date(this._fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }

    return edad;
  }

  // Getter que formatea datos
  get info() {
    return `${this.nombreCompleto} tiene ${this.edad} años`;
  }

  // Getter con lógica condicional
  get esMayorDeEdad() {
    return this.edad >= 18;
  }
}

const persona = new Persona("Carlos", "García", "1995-05-15");

console.log("Nombre:", persona.nombre);
console.log("Nombre completo:", persona.nombreCompleto);
console.log("Edad:", persona.edad);
console.log("Info:", persona.info);
console.log("¿Es mayor de edad?", persona.esMayorDeEdad);

// ============================================
// 3️⃣ SETTERS: VALIDACIÓN Y TRANSFORMACIÓN
// ============================================

console.log("\n--- Setters: Validación y Transformación ---");

class Usuario {
  constructor(email, edad) {
    this.email = email; // Usa el setter
    this.edad = edad; // Usa el setter
  }

  // Setter con validación de email
  set email(valor) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(valor)) {
      throw new Error("Email no válido");
    }
    this._email = valor.toLowerCase(); // Normalizar a minúsculas
  }

  get email() {
    return this._email;
  }

  // Setter con validación de rango
  set edad(valor) {
    if (typeof valor !== "number") {
      throw new Error("La edad debe ser un número");
    }
    if (valor < 0 || valor > 120) {
      throw new Error("Edad fuera de rango válido (0-120)");
    }
    this._edad = valor;
  }

  get edad() {
    return this._edad;
  }

  // Setter con transformación de datos
  set username(valor) {
    // Limpiar espacios y convertir a minúsculas
    this._username = valor.trim().toLowerCase().replace(/\s+/g, "_");
  }

  get username() {
    return this._username;
  }

  // Setter con validación de contraseña
  set password(valor) {
    if (valor.length < 8) {
      throw new Error("La contraseña debe tener al menos 8 caracteres");
    }
    if (!/[A-Z]/.test(valor)) {
      throw new Error("La contraseña debe tener al menos una mayúscula");
    }
    if (!/[0-9]/.test(valor)) {
      throw new Error("La contraseña debe tener al menos un número");
    }
    this._password = valor; // En producción, hashear aquí
  }
}

const usuario = new Usuario("JUAN@EXAMPLE.COM", 25);
console.log("Email normalizado:", usuario.email); // juan@example.com

usuario.username = "  Juan  Pérez  ";
console.log("Username limpio:", usuario.username); // juan_pérez

try {
  usuario.password = "abc"; // Muy corta
} catch (e) {
  console.log("❌ Error password:", e.message);
}

usuario.password = "MiPass123";
console.log("✅ Password asignada correctamente");

// ============================================
// 4️⃣ GETTERS Y SETTERS CON PROPIEDADES "PRIVADAS"
// ============================================

console.log("\n--- Getters/Setters + Convención Privada (_) ---");

class CuentaBancaria {
  static _contadorCuentas = 1000;

  constructor(titular, saldoInicial = 0) {
    this._titular = titular;
    this._saldo = saldoInicial;
    this._numeroCuenta = ++CuentaBancaria._contadorCuentas;
  }

  // Getter solo-lectura (no hay setter)
  get numeroCuenta() {
    return `ES${this._numeroCuenta.toString().padStart(10, "0")}`;
  }

  // Getter con formato
  get saldo() {
    return `${this._saldo.toFixed(2)}€`;
  }

  // Obtener saldo numérico (para operaciones internas)
  getSaldoNumerico() {
    return this._saldo;
  }

  // Getter simple
  get titular() {
    return this._titular;
  }

  // Setter con validación
  set titular(nuevoTitular) {
    if (nuevoTitular.length < 3) {
      throw new Error("El nombre del titular es demasiado corto");
    }
    this._titular = nuevoTitular;
    console.log("✅ Titular actualizado a:", this._titular);
  }

  // NO hay setter para saldo (se modifica solo con métodos)
  depositar(cantidad) {
    if (cantidad <= 0) throw new Error("Cantidad inválida");
    this._saldo += cantidad;
    console.log(`Depósito de ${cantidad}€. ${this.saldo}`);
  }

  retirar(cantidad) {
    if (cantidad > this._saldo) throw new Error("Saldo insuficiente");
    this._saldo -= cantidad;
    console.log(`Retiro de ${cantidad}€. ${this.saldo}`);
  }
}

const cuenta = new CuentaBancaria("Ana García", 1000);

console.log("Número de cuenta:", cuenta.numeroCuenta); // Solo lectura
console.log("Saldo formateado:", cuenta.saldo); // Solo lectura
console.log("Titular:", cuenta.titular);

cuenta.titular = "Ana María García"; // Modificable con validación
cuenta.depositar(500);

// ⚠️ Aunque técnicamente podemos acceder a _saldo, es una mala práctica
console.log("⚠️ Acceso directo (mala práctica):", cuenta._saldo);

// ============================================
// 5️⃣ GETTERS Y SETTERS ESTÁTICOS
// ============================================

console.log("\n--- Getters y Setters Estáticos ---");

class Configuracion {
  static _tema = "claro";
  static _idioma = "es";
  static _notificaciones = true;

  // Getter estático
  static get tema() {
    return this._tema;
  }

  // Setter estático con validación
  static set tema(nuevoTema) {
    const temasValidos = ["claro", "oscuro", "auto"];
    if (!temasValidos.includes(nuevoTema)) {
      throw new Error(`Tema debe ser: ${temasValidos.join(", ")}`);
    }
    this._tema = nuevoTema;
    console.log(`✅ Tema cambiado a: ${nuevoTema}`);
  }

  static get idioma() {
    return this._idioma;
  }

  static set idioma(nuevoIdioma) {
    const idiomasValidos = ["es", "en", "fr", "de"];
    if (!idiomasValidos.includes(nuevoIdioma)) {
      throw new Error("Idioma no soportado");
    }
    this._idioma = nuevoIdioma;
    console.log(`✅ Idioma cambiado a: ${nuevoIdioma}`);
  }

  static get notificaciones() {
    return this._notificaciones;
  }

  static set notificaciones(valor) {
    this._notificaciones = Boolean(valor);
    console.log(
      `✅ Notificaciones: ${
        this._notificaciones ? "activadas" : "desactivadas"
      }`
    );
  }

  static get config() {
    return {
      tema: this._tema,
      idioma: this._idioma,
      notificaciones: this._notificaciones,
    };
  }
}

console.log("Config inicial:", Configuracion.config);

Configuracion.tema = "oscuro";
Configuracion.idioma = "en";
Configuracion.notificaciones = false;

console.log("Config actualizada:", Configuracion.config);

try {
  Configuracion.tema = "azul"; // No válido
} catch (e) {
  console.log("❌", e.message);
}

// ============================================
// 6️⃣ EJEMPLO PRÁCTICO: TEMPERATURA
// ============================================

console.log("\n--- Ejemplo Práctico: Conversión de Temperatura ---");

class Temperatura {
  constructor(celsius = 0) {
    this._celsius = celsius;
  }

  // Getter y Setter para Celsius
  get celsius() {
    return this._celsius;
  }

  set celsius(valor) {
    if (valor < -273.15) {
      throw new Error("Temperatura por debajo del cero absoluto");
    }
    this._celsius = valor;
  }

  // Getter y Setter para Fahrenheit (calculados)
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(valor) {
    this.celsius = ((valor - 32) * 5) / 9; // Usa el setter de celsius
  }

  // Getter y Setter para Kelvin (calculados)
  get kelvin() {
    return this._celsius + 273.15;
  }

  set kelvin(valor) {
    this.celsius = valor - 273.15; // Usa el setter de celsius
  }

  // Getter informativo
  get descripcion() {
    if (this._celsius < 0) return "Bajo cero ❄️";
    if (this._celsius < 10) return "Frío 🧊";
    if (this._celsius < 20) return "Templado 🌤️";
    if (this._celsius < 30) return "Caliente ☀️";
    return "Muy caliente 🔥";
  }
}

const temp = new Temperatura(20);

console.log(
  `${temp.celsius}°C = ${temp.fahrenheit.toFixed(1)}°F = ${temp.kelvin.toFixed(
    2
  )}K`
);
console.log("Descripción:", temp.descripcion);

// Cambiar usando Fahrenheit
temp.fahrenheit = 86;
console.log(`\nDespués de asignar 86°F:`);
console.log(`${temp.celsius}°C = ${temp.fahrenheit.toFixed(1)}°F`);
console.log("Descripción:", temp.descripcion);

// Cambiar usando Kelvin
temp.kelvin = 273.15;
console.log(`\nDespués de asignar 273.15K:`);
console.log(`${temp.celsius}°C = ${temp.fahrenheit.toFixed(1)}°F`);
console.log("Descripción:", temp.descripcion);

// ============================================
// 7️⃣ EJEMPLO PRÁCTICO: CARRITO DE COMPRAS
// ============================================

console.log("\n--- Ejemplo Práctico: Carrito de Compras ---");

class Producto {
  constructor(nombre, precio, cantidad = 1) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(valor) {
    if (!valor || valor.trim().length === 0) {
      throw new Error("El nombre no puede estar vacío");
    }
    this._nombre = valor.trim();
  }

  get precio() {
    return this._precio;
  }

  set precio(valor) {
    if (valor < 0) {
      throw new Error("El precio no puede ser negativo");
    }
    this._precio = Number(valor);
  }

  get cantidad() {
    return this._cantidad;
  }

  set cantidad(valor) {
    if (valor < 0) {
      throw new Error("La cantidad no puede ser negativa");
    }
    this._cantidad = Math.floor(valor); // Redondear a entero
  }

  // Getter calculado
  get subtotal() {
    return this._precio * this._cantidad;
  }

  get descripcion() {
    return `${this._nombre} - ${this._precio}€ x ${this._cantidad} = ${this.subtotal}€`;
  }
}

class CarritoCompras {
  constructor() {
    this._productos = [];
    this._descuento = 0;
  }

  agregarProducto(producto) {
    this._productos.push(producto);
    console.log(`✅ Agregado: ${producto.descripcion}`);
  }

  get productos() {
    return [...this._productos]; // Devolver copia
  }

  get subtotal() {
    return this._productos.reduce((sum, p) => sum + p.subtotal, 0);
  }

  get descuento() {
    return this._descuento;
  }

  set descuento(valor) {
    if (valor < 0 || valor > 100) {
      throw new Error("El descuento debe estar entre 0 y 100");
    }
    this._descuento = valor;
  }

  get totalDescuento() {
    return this.subtotal * (this._descuento / 100);
  }

  get total() {
    return this.subtotal - this.totalDescuento;
  }

  mostrarResumen() {
    console.log("\n🛒 RESUMEN DEL CARRITO:");
    console.log("─".repeat(50));
    this._productos.forEach((p, i) => {
      console.log(`${i + 1}. ${p.descripcion}`);
    });
    console.log("─".repeat(50));
    console.log(`Subtotal: ${this.subtotal.toFixed(2)}€`);
    if (this._descuento > 0) {
      console.log(
        `Descuento (${this._descuento}%): -${this.totalDescuento.toFixed(2)}€`
      );
    }
    console.log(`TOTAL: ${this.total.toFixed(2)}€`);
    console.log("─".repeat(50));
  }
}

const carrito = new CarritoCompras();

carrito.agregarProducto(new Producto("Laptop", 999.99, 1));
carrito.agregarProducto(new Producto("Mouse", 29.99, 2));
carrito.agregarProducto(new Producto("Teclado", 79.99, 1));

carrito.descuento = 10; // 10% de descuento
carrito.mostrarResumen();

// ============================================
// 8️⃣ RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
🎯 GETTERS Y SETTERS:

📖 GETTERS (get):
• Se acceden como propiedades, no como métodos: obj.propiedad
• Útiles para propiedades calculadas o formateadas
• Pueden tener lógica compleja
• Pueden ser de solo-lectura (sin setter correspondiente)
• No aceptan parámetros

✏️ SETTERS (set):
• Se asignan como propiedades: obj.propiedad = valor
• Permiten validación antes de asignar
• Pueden transformar datos automáticamente
• Mejoran la seguridad del código
• Aceptan exactamente UN parámetro

✅ VENTAJAS:
• Sintaxis más limpia y natural
• Validación automática de datos
• Encapsulación de lógica de acceso
• Propiedades calculadas sin almacenar datos duplicados
• Control total sobre cómo se accede/modifica el estado

💡 CUÁNDO USAR:
• Cuando necesites validar datos al asignar
• Para propiedades calculadas (ej: nombreCompleto, edad)
• Para formatear datos al obtenerlos
• Para crear propiedades de solo-lectura
• Para normalizar datos al asignarlos

⚠️ NOTA SOBRE PRIVACIDAD:
• En este código usamos la convención _ (guión bajo) para indicar propiedades "privadas"
• Es solo una CONVENCIÓN, técnicamente siguen siendo accesibles
• Para verdadera privacidad, usa # (requiere soporte ES2022+)
• Ejemplo: this.#propiedad en lugar de this._propiedad

⚠️ BUENAS PRÁCTICAS:
• No hagas operaciones costosas en getters (se llaman mucho)
• Los setters deben validar y lanzar errores descriptivos
• Usa getters para propiedades derivadas, no para todo
• Respeta la convención _ (no accedas directamente desde fuera)
`);
