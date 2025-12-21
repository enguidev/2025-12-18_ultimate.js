// ============================================
// 05-METODOS-ESTATICOS.JS
// Métodos y Propiedades Estáticas
// VERSIÓN COMPATIBLE (sin propiedades privadas #)
// ============================================

console.log("=== 5. MÉTODOS ESTÁTICOS ===\n");

// ============================================
// 1️⃣ ¿QUÉ SON LOS MÉTODOS ESTÁTICOS?
// ============================================

console.log("--- Introducción a Métodos Estáticos ---");

class Utilidades {
  // Método de INSTANCIA (necesita crear objeto)
  saludarInstancia(nombre) {
    return `Hola ${nombre} desde instancia`;
  }

  // Método ESTÁTICO (se llama desde la clase)
  static saludarEstatico(nombre) {
    return `Hola ${nombre} desde método estático`;
  }
}

// ❌ Método de instancia: necesita crear objeto
const util = new Utilidades();
console.log(util.saludarInstancia("Ana")); // ✅ Funciona

// ✅ Método estático: se llama directamente desde la clase
console.log(Utilidades.saludarEstatico("Luis")); // ✅ Funciona

// ❌ Esto NO funciona (los estáticos no están en las instancias)
try {
  console.log(util.saludarEstatico("Pedro"));
} catch (e) {
  console.log("❌ Error:", "saludarEstatico no está en las instancias");
}

// ============================================
// 2️⃣ MÉTODOS ESTÁTICOS BÁSICOS
// ============================================

console.log("\n--- Métodos Estáticos Básicos ---");

class Matematicas {
  // Métodos de utilidad matemática
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

  static esPar(numero) {
    return numero % 2 === 0;
  }

  static esPositivo(numero) {
    return numero > 0;
  }

  static aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Usar métodos estáticos directamente
console.log("10 + 5 =", Matematicas.sumar(10, 5));
console.log("10 × 5 =", Matematicas.multiplicar(10, 5));
console.log("¿8 es par?", Matematicas.esPar(8));
console.log("¿-5 es positivo?", Matematicas.esPositivo(-5));
console.log("Número aleatorio (1-100):", Matematicas.aleatorio(1, 100));

// ============================================
// 3️⃣ PROPIEDADES ESTÁTICAS
// ============================================

console.log("\n--- Propiedades Estáticas ---");

class Contador {
  static contador = 0; // Propiedad estática pública
  static _contadorPrivado = 0; // Convención: _ indica "privado"

  constructor() {
    Contador.contador++;
    Contador._contadorPrivado++;
    this.id = Contador.contador;
  }

  static get total() {
    return Contador.contador;
  }

  static get totalPrivado() {
    return Contador._contadorPrivado;
  }

  static reiniciar() {
    Contador.contador = 0;
    Contador._contadorPrivado = 0;
    console.log("✅ Contador reiniciado");
  }
}

console.log("Contador inicial:", Contador.total);

const c1 = new Contador();
const c2 = new Contador();
const c3 = new Contador();

console.log("Después de crear 3 instancias:", Contador.total);
console.log("IDs asignados:", c1.id, c2.id, c3.id);

Contador.reiniciar();
console.log("Después de reiniciar:", Contador.total);

// ============================================
// 4️⃣ MÉTODOS ESTÁTICOS COMO FACTORY (FÁBRICA)
// ============================================

console.log("\n--- Métodos Estáticos de Fábrica ---");

class Usuario {
  constructor(nombre, email, rol = "usuario") {
    this._nombre = nombre;
    this._email = email;
    this._rol = rol;
  }

  get nombre() {
    return this._nombre;
  }
  get email() {
    return this._email;
  }
  get rol() {
    return this._rol;
  }

  // Métodos estáticos de fábrica
  static crearAdmin(nombre, email) {
    return new Usuario(nombre, email, "admin");
  }

  static crearModerador(nombre, email) {
    return new Usuario(nombre, email, "moderador");
  }

  static crearInvitado(nombre) {
    const emailTemp = `${nombre.toLowerCase().replace(/\s/g, "")}@invitado.com`;
    return new Usuario(nombre, emailTemp, "invitado");
  }

  static desdeJSON(json) {
    const data = JSON.parse(json);
    return new Usuario(data.nombre, data.email, data.rol);
  }

  mostrarInfo() {
    console.log(`👤 ${this._nombre} (${this._rol}) - ${this._email}`);
  }
}

// Crear usuarios con métodos de fábrica
const admin = Usuario.crearAdmin("Ana", "ana@admin.com");
const mod = Usuario.crearModerador("Luis", "luis@mod.com");
const invitado = Usuario.crearInvitado("Pedro Visitante");

admin.mostrarInfo();
mod.mostrarInfo();
invitado.mostrarInfo();

// Crear desde JSON
const jsonUser =
  '{"nombre":"María","email":"maria@example.com","rol":"usuario"}';
const userFromJSON = Usuario.desdeJSON(jsonUser);
userFromJSON.mostrarInfo();

// ============================================
// 5️⃣ MÉTODOS ESTÁTICOS DE VALIDACIÓN
// ============================================

console.log("\n--- Métodos Estáticos de Validación ---");

class Validador {
  static validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static validarPassword(password) {
    const requisitos = {
      longitud: password.length >= 8,
      mayuscula: /[A-Z]/.test(password),
      minuscula: /[a-z]/.test(password),
      numero: /[0-9]/.test(password),
      especial: /[!@#$%^&*]/.test(password),
    };

    const valida = Object.values(requisitos).every((r) => r);

    return {
      valida,
      requisitos,
    };
  }

  static validarTelefono(telefono) {
    // Formato español: +34 XXX XXX XXX o similar
    const regex = /^(\+34|0034)?[6-9]\d{8}$/;
    return regex.test(telefono.replace(/\s/g, ""));
  }

  static validarDNI(dni) {
    const regex = /^\d{8}[A-Z]$/;
    if (!regex.test(dni)) return false;

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const numero = parseInt(dni.substr(0, 8));
    const letra = dni.substr(8, 1);

    return letras.charAt(numero % 23) === letra;
  }

  static validarURL(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}

// Probar validaciones
console.log("Email válido:", Validador.validarEmail("test@example.com"));
console.log("Email inválido:", Validador.validarEmail("test@"));

const resultPass = Validador.validarPassword("MiPass123!");
console.log("\nValidación de password:", resultPass);

console.log("\nTeléfono válido:", Validador.validarTelefono("+34 666 777 888"));
console.log("DNI válido:", Validador.validarDNI("12345678Z"));
console.log("URL válida:", Validador.validarURL("https://www.google.com"));

// ============================================
// 6️⃣ MÉTODOS ESTÁTICOS PARA CONFIGURACIÓN
// ============================================

console.log("\n--- Métodos Estáticos de Configuración ---");

class Config {
  static _configuracion = {
    tema: "claro",
    idioma: "es",
    notificaciones: true,
    sonido: true,
  };

  static get(clave) {
    return this._configuracion[clave];
  }

  static set(clave, valor) {
    if (!(clave in this._configuracion)) {
      throw new Error(`Configuración '${clave}' no existe`);
    }
    this._configuracion[clave] = valor;
    console.log(`✅ ${clave} = ${valor}`);
  }

  static getAll() {
    return { ...this._configuracion };
  }

  static reset() {
    this._configuracion = {
      tema: "claro",
      idioma: "es",
      notificaciones: true,
      sonido: true,
    };
    console.log("✅ Configuración reiniciada");
  }

  static exportar() {
    return JSON.stringify(this._configuracion);
  }

  static importar(json) {
    try {
      const config = JSON.parse(json);
      this._configuracion = { ...this._configuracion, ...config };
      console.log("✅ Configuración importada");
    } catch (e) {
      console.log("❌ Error al importar configuración");
    }
  }
}

console.log("Tema actual:", Config.get("tema"));
Config.set("tema", "oscuro");
Config.set("idioma", "en");

console.log("Configuración completa:", Config.getAll());

const exportado = Config.exportar();
console.log("Exportado:", exportado);

// ============================================
// 7️⃣ PATRÓN SINGLETON CON ESTÁTICOS
// ============================================

console.log("\n--- Patrón Singleton ---");

class BaseDatos {
  static _instancia = null;
  static _conexiones = 0;

  constructor(nombre) {
    if (BaseDatos._instancia) {
      console.log("⚠️ Ya existe una instancia, devolviendo la existente");
      return BaseDatos._instancia;
    }

    this._nombre = nombre;
    this._conectada = true;
    BaseDatos._conexiones++;
    BaseDatos._instancia = this;

    console.log(`🔌 Base de datos "${nombre}" conectada`);
  }

  static getInstancia(nombre = "default") {
    if (!BaseDatos._instancia) {
      new BaseDatos(nombre);
    }
    return BaseDatos._instancia;
  }

  static getTotalConexiones() {
    return BaseDatos._conexiones;
  }

  query(sql) {
    console.log(`📝 Ejecutando: ${sql}`);
    return { resultado: "OK" };
  }

  desconectar() {
    if (this._conectada) {
      this._conectada = false;
      BaseDatos._instancia = null;
      console.log("🔌 Desconectado de la base de datos");
    }
  }
}

const db1 = BaseDatos.getInstancia("MiDB");
db1.query("SELECT * FROM usuarios");

const db2 = BaseDatos.getInstancia("OtraDB"); // Devuelve la misma instancia
console.log("¿Son la misma instancia?", db1 === db2); // true

console.log("Total de conexiones:", BaseDatos.getTotalConexiones());

// ============================================
// 8️⃣ MÉTODOS ESTÁTICOS VS INSTANCIA
// ============================================

console.log("\n--- Comparación: Estático vs Instancia ---");

class Empleado {
  static _salarioMinimo = 1000;
  static _totalEmpleados = 0;

  constructor(nombre, salario) {
    this._nombre = nombre;
    this._salario = Math.max(salario, Empleado._salarioMinimo);
    Empleado._totalEmpleados++;
  }

  // Método de INSTANCIA (trabaja con un empleado específico)
  aumentarSalario(porcentaje) {
    this._salario *= 1 + porcentaje / 100;
    console.log(
      `💰 ${this._nombre}: Nuevo salario ${this._salario.toFixed(2)}€`
    );
  }

  getSalario() {
    return this._salario;
  }

  getNombre() {
    return this._nombre;
  }

  // Métodos ESTÁTICOS (trabajan con la clase en general)
  static getSalarioMinimo() {
    return this._salarioMinimo;
  }

  static setSalarioMinimo(nuevoMinimo) {
    if (nuevoMinimo < 0) {
      throw new Error("El salario mínimo no puede ser negativo");
    }
    this._salarioMinimo = nuevoMinimo;
    console.log(`✅ Salario mínimo actualizado a ${nuevoMinimo}€`);
  }

  static getTotalEmpleados() {
    return this._totalEmpleados;
  }

  static compararSalarios(emp1, emp2) {
    const diferencia = emp1.getSalario() - emp2.getSalario();
    if (diferencia > 0) {
      return `${emp1.getNombre()} gana ${diferencia.toFixed(
        2
      )}€ más que ${emp2.getNombre()}`;
    } else if (diferencia < 0) {
      return `${emp2.getNombre()} gana ${Math.abs(diferencia).toFixed(
        2
      )}€ más que ${emp1.getNombre()}`;
    } else {
      return "Ambos ganan lo mismo";
    }
  }

  static calcularNominaTotal(...empleados) {
    const total = empleados.reduce((sum, emp) => sum + emp.getSalario(), 0);
    return total.toFixed(2);
  }
}

console.log("Salario mínimo:", Empleado.getSalarioMinimo());

const emp1 = new Empleado("Ana", 1500);
const emp2 = new Empleado("Luis", 2000);
const emp3 = new Empleado("María", 1800);

console.log("Total empleados:", Empleado.getTotalEmpleados());

// Método de instancia
emp1.aumentarSalario(10);

// Métodos estáticos
console.log(Empleado.compararSalarios(emp1, emp2));
console.log(
  "Nómina total:",
  Empleado.calcularNominaTotal(emp1, emp2, emp3),
  "€"
);

Empleado.setSalarioMinimo(1200);

// ============================================
// 9️⃣ EJEMPLO PRÁCTICO: SISTEMA DE LOGS
// ============================================

console.log("\n--- Ejemplo Práctico: Sistema de Logs ---");

class Logger {
  static _logs = [];
  static _nivelMinimo = "info"; // debug, info, warn, error

  static _niveles = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  };

  static _formatear(nivel, mensaje) {
    const timestamp = new Date().toISOString();
    const emoji = {
      debug: "🐛",
      info: "ℹ️",
      warn: "⚠️",
      error: "❌",
    };
    return `${emoji[nivel]} [${timestamp}] ${nivel.toUpperCase()}: ${mensaje}`;
  }

  static _log(nivel, mensaje) {
    if (this._niveles[nivel] >= this._niveles[this._nivelMinimo]) {
      const logFormateado = this._formatear(nivel, mensaje);
      this._logs.push({ nivel, mensaje, timestamp: new Date() });
      console.log(logFormateado);
    }
  }

  static debug(mensaje) {
    this._log("debug", mensaje);
  }

  static info(mensaje) {
    this._log("info", mensaje);
  }

  static warn(mensaje) {
    this._log("warn", mensaje);
  }

  static error(mensaje) {
    this._log("error", mensaje);
  }

  static setNivel(nivel) {
    if (!(nivel in this._niveles)) {
      throw new Error("Nivel no válido");
    }
    this._nivelMinimo = nivel;
    console.log(`✅ Nivel de log establecido en: ${nivel}`);
  }

  static getLogs(nivel = null) {
    if (nivel) {
      return this._logs.filter((log) => log.nivel === nivel);
    }
    return [...this._logs];
  }

  static limpiar() {
    this._logs = [];
    console.log("🧹 Logs limpiados");
  }

  static exportar() {
    return JSON.stringify(this._logs, null, 2);
  }
}

// Usar el sistema de logs
Logger.debug("Iniciando aplicación...");
Logger.info("Usuario conectado");
Logger.warn("Memoria al 80%");
Logger.error("Fallo en la conexión");

console.log("\nTotal de logs:", Logger.getLogs().length);
console.log("Logs de error:", Logger.getLogs("error").length);

// ============================================
// 🔟 RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
⚡ MÉTODOS Y PROPIEDADES ESTÁTICAS:

📌 CARACTERÍSTICAS:
• Se definen con la palabra clave 'static'
• Pertenecen a la CLASE, no a las instancias
• Se llaman con: Clase.metodo() o Clase.propiedad
• NO tienen acceso a 'this' de instancias
• NO se heredan en instancias (solo en subclases)

✅ CUÁNDO USAR:

1. MÉTODOS DE UTILIDAD:
   • Operaciones que no necesitan estado de instancia
   • Ej: Matematicas.sumar(), Validador.validarEmail()

2. MÉTODOS DE FÁBRICA (FACTORY):
   • Crear instancias de formas especiales
   • Ej: Usuario.crearAdmin(), Usuario.desdeJSON()

3. CONFIGURACIÓN GLOBAL:
   • Almacenar datos compartidos por todas las instancias
   • Ej: Config.set(), Config.get()

4. CONTADORES Y REGISTROS:
   • Llevar cuenta de instancias creadas
   • Ej: Empleado.getTotalEmpleados()

5. PATRONES DE DISEÑO:
   • Singleton, Factory, Builder
   • Ej: BaseDatos.getInstancia()

6. CONSTANTES DE CLASE:
   • Valores que no cambian y son compartidos
   • Ej: static PI = 3.14159

⚠️ NO USAR PARA:
• Métodos que necesitan acceder a 'this' de instancias
• Cuando cada objeto necesita su propio estado
• Operaciones específicas de un objeto particular

💡 VENTAJAS:
• Organización: agrupan funcionalidad relacionada
• Eficiencia: no se duplican en cada instancia
• Claridad: se ve inmediatamente que son de la clase
• Encapsulación: pueden usar convención _ para "privacidad"

⚠️ NOTA SOBRE PRIVACIDAD:
• En este código usamos la convención _ para propiedades "privadas"
• Es solo una CONVENCIÓN, técnicamente siguen siendo accesibles
• Para verdadera privacidad, usa # (requiere soporte ES2022+)
• Ejemplo: static #propiedad en lugar de static _propiedad
`);
