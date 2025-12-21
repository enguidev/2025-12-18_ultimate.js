// ============================================
// 03-PROPIEDADES-PRIVADAS.JS
// Encapsulación y Propiedades Privadas (ES2022+)
// ============================================

console.log("=== 3. PROPIEDADES PRIVADAS ===\n");

// ============================================
// 1️⃣ PROBLEMA: TODO ES PÚBLICO POR DEFECTO
// ============================================

console.log("--- Problema con Propiedades Públicas ---");

class UsuarioInseguro {
  constructor(nombre, contraseña) {
    this.nombre = nombre;
    this.contraseña = contraseña; // ❌ PÚBLICO - Muy inseguro
    this.saldo = 1000;
  }
}

const user = new UsuarioInseguro("Ana", "mi_super_secreto_123");

// ❌ PROBLEMA: Podemos acceder y modificar TODO
console.log("Contraseña visible:", user.contraseña); // ¡Muy mal!
user.saldo = 999999; // ¡Hackeo fácil!
console.log("Saldo modificado:", user.saldo);

// ============================================
// 2️⃣ SOLUCIÓN: PROPIEDADES PRIVADAS CON #
// ============================================

console.log("\n--- Propiedades Privadas con # ---");

class UsuarioSeguro {
  // Declarar propiedades privadas con #
  #nombre;
  #contraseña;
  #saldo;

  constructor(nombre, contraseña, saldoInicial = 0) {
    this.#nombre = nombre;
    this.#contraseña = this.#hashPassword(contraseña);
    this.#saldo = saldoInicial;
  }

  // Método privado (solo accesible dentro de la clase)
  #hashPassword(password) {
    // Simulación simple de hash
    return `hash_${password.split("").reverse().join("")}`;
  }

  // Métodos públicos para acceder a datos privados
  getNombre() {
    return this.#nombre;
  }

  getSaldo() {
    return this.#saldo;
  }

  verificarContraseña(password) {
    return this.#hashPassword(password) === this.#contraseña;
  }

  depositar(cantidad) {
    if (cantidad <= 0) {
      throw new Error("La cantidad debe ser positiva");
    }
    this.#saldo += cantidad;
    console.log(`✅ Depósito exitoso. Nuevo saldo: ${this.#saldo}€`);
  }

  retirar(cantidad, password) {
    // Verificar contraseña primero
    if (!this.verificarContraseña(password)) {
      throw new Error("❌ Contraseña incorrecta");
    }

    if (cantidad > this.#saldo) {
      throw new Error("❌ Saldo insuficiente");
    }

    this.#saldo -= cantidad;
    console.log(`✅ Retiro exitoso. Nuevo saldo: ${this.#saldo}€`);
  }
}

const userSeguro = new UsuarioSeguro("Pedro", "password123", 1000);

console.log("Nombre:", userSeguro.getNombre());
console.log("Saldo:", userSeguro.getSaldo());

// ✅ Intentar acceder directamente FALLA
try {
  //console.log(userSeguro.#saldo);
} catch (e) {
  console.log("❌ Error al acceder a #saldo:", "Private field");
}

// ✅ Solo podemos operar con métodos públicos
userSeguro.depositar(500);
userSeguro.retirar(200, "password123");

// ❌ Contraseña incorrecta
try {
  userSeguro.retirar(100, "wrong_password");
} catch (e) {
  console.log(e.message);
}

// ============================================
// 3️⃣ MÉTODOS PRIVADOS
// ============================================

console.log("\n--- Métodos Privados ---");

class CuentaBancaria {
  #saldo;
  #historial;
  #pin;

  constructor(titular, pin, saldoInicial = 0) {
    this.titular = titular; // Público
    this.#pin = pin;
    this.#saldo = saldoInicial;
    this.#historial = [];
  }

  // Métodos privados de validación
  #validarPin(pin) {
    return this.#pin === pin;
  }

  #registrarTransaccion(tipo, cantidad) {
    this.#historial.push({
      tipo,
      cantidad,
      fecha: new Date(),
      saldo: this.#saldo,
    });
  }

  #formatearSaldo() {
    return `${this.#saldo.toFixed(2)}€`;
  }

  // Métodos públicos
  consultarSaldo(pin) {
    if (!this.#validarPin(pin)) {
      throw new Error("PIN incorrecto");
    }
    return this.#formatearSaldo();
  }

  depositar(cantidad, pin) {
    if (!this.#validarPin(pin)) {
      throw new Error("PIN incorrecto");
    }

    if (cantidad <= 0) {
      throw new Error("Cantidad inválida");
    }

    this.#saldo += cantidad;
    this.#registrarTransaccion("DEPOSITO", cantidad);
    console.log(
      `✅ Depósito de ${cantidad}€. Saldo: ${this.#formatearSaldo()}`
    );
  }

  retirar(cantidad, pin) {
    if (!this.#validarPin(pin)) {
      throw new Error("PIN incorrecto");
    }

    if (cantidad > this.#saldo) {
      throw new Error("Saldo insuficiente");
    }

    this.#saldo -= cantidad;
    this.#registrarTransaccion("RETIRO", cantidad);
    console.log(`✅ Retiro de ${cantidad}€. Saldo: ${this.#formatearSaldo()}`);
  }

  verHistorial(pin) {
    if (!this.#validarPin(pin)) {
      throw new Error("PIN incorrecto");
    }

    console.log(`\n--- Historial de ${this.titular} ---`);
    this.#historial.forEach((trans, i) => {
      console.log(
        `${i + 1}. ${trans.tipo}: ${
          trans.cantidad
        }€ (Saldo: ${trans.saldo.toFixed(2)}€)`
      );
    });
  }
}

const cuenta = new CuentaBancaria("María", "1234", 2000);

console.log("Titular:", cuenta.titular); // Público, accesible
cuenta.depositar(500, "1234");
cuenta.retirar(300, "1234");
console.log("Saldo actual:", cuenta.consultarSaldo("1234"));
cuenta.verHistorial("1234");

// ❌ Los métodos privados no son accesibles
try {
  cuenta.#validarPin("1234");
} catch (e) {
  console.log("\n❌ No se puede acceder a métodos privados desde fuera");
}

// ============================================
// 4️⃣ PROPIEDADES ESTÁTICAS PRIVADAS
// ============================================

console.log("\n--- Propiedades Estáticas Privadas ---");

class BaseDatos {
  static #instancia = null; // Patrón Singleton
  static #conexiones = 0;
  static #maxConexiones = 5;

  #conectado;

  constructor() {
    if (BaseDatos.#instancia) {
      throw new Error("Ya existe una instancia de BaseDatos");
    }

    if (BaseDatos.#conexiones >= BaseDatos.#maxConexiones) {
      throw new Error("Máximo de conexiones alcanzado");
    }

    this.#conectado = true;
    BaseDatos.#conexiones++;
    BaseDatos.#instancia = this;

    console.log(`🔌 Conexión establecida. Total: ${BaseDatos.#conexiones}`);
  }

  static getInstancia() {
    if (!BaseDatos.#instancia) {
      return new BaseDatos();
    }
    return BaseDatos.#instancia;
  }

  static getEstadoConexiones() {
    return `${BaseDatos.#conexiones}/${
      BaseDatos.#maxConexiones
    } conexiones activas`;
  }

  desconectar() {
    if (this.#conectado) {
      this.#conectado = false;
      BaseDatos.#conexiones--;
      console.log(`🔌 Desconectado. Total: ${BaseDatos.#conexiones}`);
    }
  }
}

const db1 = BaseDatos.getInstancia();
console.log(BaseDatos.getEstadoConexiones());

// ❌ No podemos crear otra instancia directamente
try {
  const db2 = new BaseDatos();
} catch (e) {
  console.log("❌", e.message);
}

db1.desconectar();

// ============================================
// 5️⃣ COMPARACIÓN: PÚBLICO vs PRIVADO
// ============================================

console.log("\n--- Comparación Público vs Privado ---");

class ComparacionEncapsulacion {
  // Propiedades públicas
  nombrePublico = "Visible desde fuera";

  // Propiedades privadas
  #nombrePrivado = "Solo visible dentro de la clase";

  // Constructor
  constructor() {
    console.log("Dentro del constructor:");
    console.log("  Público:", this.nombrePublico);
    console.log("  Privado:", this.#nombrePrivado);
  }

  metodoPublico() {
    console.log("\nDentro de método público:");
    console.log("  Puedo acceder a público:", this.nombrePublico);
    console.log("  Puedo acceder a privado:", this.#nombrePrivado);
  }

  #metodoPrivado() {
    console.log("\nDentro de método privado:");
    console.log("  Puedo acceder a todo:", this.#nombrePrivado);
  }
}

const obj = new ComparacionEncapsulacion();

console.log("\nDesde fuera de la clase:");
console.log("  Público:", obj.nombrePublico); // ✅ Funciona
obj.metodoPublico(); // ✅ Funciona

try {
  // console.log("  Privado:", obj.#nombrePrivado);
} catch (e) {
  console.log("  ❌ No puedo acceder a propiedades privadas");
}

try {
  // obj.#metodoPrivado();
} catch (e) {
  console.log("  ❌ No puedo acceder a métodos privados");
}

// ============================================
// 6️⃣ EJEMPLO PRÁCTICO: SISTEMA DE AUTENTICACIÓN
// ============================================

console.log("\n--- Ejemplo Práctico: Sistema de Autenticación ---");

class SistemaAuth {
  static #usuarios = new Map();
  static #intentosFallidos = new Map();
  static #maxIntentos = 3;

  #username;
  #password;
  #email;
  #sesionActiva;
  #ultimoAcceso;

  constructor(username, password, email) {
    if (SistemaAuth.#usuarios.has(username)) {
      throw new Error("El usuario ya existe");
    }

    this.#username = username;
    this.#password = this.#encriptarPassword(password);
    this.#email = email;
    this.#sesionActiva = false;
    this.#ultimoAcceso = null;

    SistemaAuth.#usuarios.set(username, this);
    console.log(`✅ Usuario ${username} creado`);
  }

  #encriptarPassword(password) {
    // Simulación simple
    return `encrypted_${password}`;
  }

  #verificarPassword(password) {
    return this.#encriptarPassword(password) === this.#password;
  }

  login(password) {
    const intentos = SistemaAuth.#intentosFallidos.get(this.#username) || 0;

    if (intentos >= SistemaAuth.#maxIntentos) {
      throw new Error("Cuenta bloqueada por múltiples intentos fallidos");
    }

    if (!this.#verificarPassword(password)) {
      SistemaAuth.#intentosFallidos.set(this.#username, intentos + 1);
      throw new Error(
        `Contraseña incorrecta. Intentos: ${intentos + 1}/${
          SistemaAuth.#maxIntentos
        }`
      );
    }

    // Login exitoso
    this.#sesionActiva = true;
    this.#ultimoAcceso = new Date();
    SistemaAuth.#intentosFallidos.delete(this.#username);
    console.log(`✅ Bienvenido ${this.#username}!`);
  }

  logout() {
    this.#sesionActiva = false;
    console.log(`👋 Sesión cerrada para ${this.#username}`);
  }

  getInfo() {
    return {
      username: this.#username,
      email: this.#email,
      sesionActiva: this.#sesionActiva,
      ultimoAcceso: this.#ultimoAcceso,
    };
  }

  static getUsuario(username) {
    return SistemaAuth.#usuarios.get(username);
  }
}

// Crear usuarios
const usuario1 = new SistemaAuth("john_doe", "pass123", "john@example.com");
const usuario2 = new SistemaAuth("jane_doe", "pass456", "jane@example.com");

// Intentos de login
try {
  usuario1.login("wrong_password");
} catch (e) {
  console.log("❌", e.message);
}

usuario1.login("pass123");
console.log("Info usuario:", usuario1.getInfo());
usuario1.logout();

// ============================================
// 7️⃣ RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
🔒 PROPIEDADES PRIVADAS (ES2022+):

✅ VENTAJAS:
• Encapsulación real (no solo por convención)
• Protección contra modificaciones accidentales
• Control total sobre cómo se accede a los datos
• Código más seguro y mantenible
• Los métodos privados ocultan implementación

📌 SINTAXIS:
• Propiedades privadas: #nombrePropiedad
• Métodos privados: #nombreMetodo()
• Estáticos privados: static #nombreVariable

⚠️ REGLAS:
• Se declaran al inicio de la clase
• NO se puede acceder desde fuera de la clase
• NO se heredan (solo existen en esa clase)
• Lanza error si intentas acceder desde fuera

💡 CUÁNDO USAR:
• Datos sensibles (contraseñas, PINs, tokens)
• Estado interno que no debe modificarse directamente
• Métodos auxiliares que son implementación interna
• Contadores o datos compartidos privados (static)
`);
