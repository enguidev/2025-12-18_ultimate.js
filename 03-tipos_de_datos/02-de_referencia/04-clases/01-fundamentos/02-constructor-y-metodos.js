// ============================================
// 02-CONSTRUCTOR-Y-METODOS.JS
// Profundizando en Constructores y Métodos
// ============================================

console.log("=== 2. CONSTRUCTOR Y MÉTODOS ===\n");

// ============================================
// 1️⃣ EL CONSTRUCTOR EN DETALLE
// ============================================

console.log("--- El Constructor ---");

class Libro {
  // El constructor es el método especial que se ejecuta al crear una instancia
  constructor(titulo, autor, paginas) {
    console.log("🔧 Constructor ejecutándose...");

    // Validación en el constructor
    if (!titulo || !autor) {
      throw new Error("Título y autor son obligatorios");
    }

    if (paginas <= 0) {
      throw new Error("El número de páginas debe ser positivo");
    }

    // Asignación de propiedades
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.paginaActual = 0;
    this.leido = false;

    // Puedes ejecutar código al crear el objeto
    console.log(`📚 Libro "${titulo}" creado`);
  }

  leer(paginas) {
    this.paginaActual += paginas;
    if (this.paginaActual >= this.paginas) {
      this.paginaActual = this.paginas;
      this.leido = true;
      console.log(`✅ ¡Has terminado de leer "${this.titulo}"!`);
    } else {
      console.log(
        `📖 Leyendo... Página ${this.paginaActual} de ${this.paginas}`
      );
    }
  }

  progreso() {
    const porcentaje = ((this.paginaActual / this.paginas) * 100).toFixed(1);
    return `${porcentaje}% completado`;
  }
}

const libro1 = new Libro("El Quijote", "Cervantes", 400);
libro1.leer(100);
console.log(libro1.progreso());
libro1.leer(300);

// Intentar crear libro inválido
try {
  const libroInvalido = new Libro("", "Autor", 100);
} catch (e) {
  console.log("❌ Error capturado:", e.message);
}

// ============================================
// 2️⃣ CONSTRUCTOR CON OBJETOS DE CONFIGURACIÓN
// ============================================

console.log("\n--- Constructor con Objeto de Configuración ---");

class Tarea {
  constructor(config = {}) {
    // Desestructuración con valores por defecto
    const {
      titulo = "Sin título",
      descripcion = "",
      prioridad = "media",
      completada = false,
      etiquetas = [],
    } = config;

    this.titulo = titulo;
    this.descripcion = descripcion;
    this.prioridad = prioridad;
    this.completada = completada;
    this.etiquetas = etiquetas;
    this.fechaCreacion = new Date();
  }

  completar() {
    this.completada = true;
    console.log(`✅ Tarea "${this.titulo}" completada`);
  }

  agregarEtiqueta(etiqueta) {
    if (!this.etiquetas.includes(etiqueta)) {
      this.etiquetas.push(etiqueta);
    }
  }

  mostrar() {
    const estado = this.completada ? "✅" : "⏳";
    console.log(
      `${estado} ${this.titulo} [${this.prioridad}] - ${this.etiquetas.join(
        ", "
      )}`
    );
  }
}

// Diferentes formas de crear tareas
const tarea1 = new Tarea(); // Todo por defecto
const tarea2 = new Tarea({ titulo: "Estudiar JavaScript" });
const tarea3 = new Tarea({
  titulo: "Hacer ejercicio",
  prioridad: "alta",
  etiquetas: ["salud", "diario"],
});

tarea1.mostrar();
tarea2.mostrar();
tarea3.mostrar();
tarea3.completar();

// ============================================
// 3️⃣ MÉTODOS DE INSTANCIA vs MÉTODOS ESTÁTICOS
// ============================================

console.log("\n--- Métodos de Instancia vs Estáticos ---");

class Empleado {
  static totalEmpleados = 0; // Propiedad estática
  static salarioMinimo = 1000; // Constante compartida

  constructor(nombre, salario) {
    this.id = ++Empleado.totalEmpleados;
    this.nombre = nombre;
    this.salario = salario;
  }

  // Método de INSTANCIA (usa 'this')
  aumentarSalario(porcentaje) {
    this.salario *= 1 + porcentaje / 100;
    console.log(`💰 ${this.nombre}: Nuevo salario ${this.salario.toFixed(2)}€`);
  }

  // Método ESTÁTICO (no usa 'this', trabaja con la clase)
  static compararSalarios(emp1, emp2) {
    if (emp1.salario > emp2.salario) {
      return `${emp1.nombre} gana más que ${emp2.nombre}`;
    } else if (emp1.salario < emp2.salario) {
      return `${emp2.nombre} gana más que ${emp1.nombre}`;
    } else {
      return `${emp1.nombre} y ${emp2.nombre} ganan lo mismo`;
    }
  }

  static getTotalEmpleados() {
    return `Total de empleados: ${Empleado.totalEmpleados}`;
  }

  // Método estático de utilidad
  static validarSalario(salario) {
    return salario >= Empleado.salarioMinimo;
  }
}

const emp1 = new Empleado("Ana", 1500);
const emp2 = new Empleado("Luis", 2000);
const emp3 = new Empleado("María", 1800);

// Métodos de instancia (se llaman desde el objeto)
emp1.aumentarSalario(10);

// Métodos estáticos (se llaman desde la clase)
console.log(Empleado.compararSalarios(emp1, emp2));
console.log(Empleado.getTotalEmpleados());
console.log("¿800€ es válido?", Empleado.validarSalario(800));

// ============================================
// 4️⃣ MÉTODOS QUE LLAMAN A OTROS MÉTODOS
// ============================================

console.log("\n--- Métodos que Llaman a Otros Métodos ---");

class CuentaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.movimientos = [];
  }

  // Método auxiliar privado (por convención usa _)
  _registrarMovimiento(tipo, cantidad) {
    const movimiento = {
      tipo,
      cantidad,
      fecha: new Date(),
      saldoResultante: this.saldo,
    };
    this.movimientos.push(movimiento);
  }

  depositar(cantidad) {
    if (cantidad <= 0) {
      console.log("❌ La cantidad debe ser positiva");
      return false;
    }

    this.saldo += cantidad;
    this._registrarMovimiento("DEPOSITO", cantidad);
    console.log(`✅ Depósito de ${cantidad}€. Saldo: ${this.saldo}€`);
    return true;
  }

  retirar(cantidad) {
    if (cantidad <= 0) {
      console.log("❌ La cantidad debe ser positiva");
      return false;
    }

    if (cantidad > this.saldo) {
      console.log("❌ Saldo insuficiente");
      return false;
    }

    this.saldo -= cantidad;
    this._registrarMovimiento("RETIRO", cantidad);
    console.log(`✅ Retiro de ${cantidad}€. Saldo: ${this.saldo}€`);
    return true;
  }

  transferir(cuenta, cantidad) {
    console.log(`\n💸 Transfiriendo ${cantidad}€ a ${cuenta.titular}...`);

    // Usa los métodos existentes
    if (this.retirar(cantidad)) {
      cuenta.depositar(cantidad);
      console.log("✅ Transferencia completada");
      return true;
    }

    console.log("❌ Transferencia fallida");
    return false;
  }

  verMovimientos() {
    console.log(`\n--- Movimientos de ${this.titular} ---`);
    this.movimientos.forEach((mov, i) => {
      console.log(
        `${i + 1}. ${mov.tipo}: ${mov.cantidad}€ - Saldo: ${
          mov.saldoResultante
        }€`
      );
    });
  }
}

const cuenta1 = new CuentaBancaria("Pedro", 1000);
const cuenta2 = new CuentaBancaria("Laura", 500);

cuenta1.depositar(200);
cuenta1.retirar(100);
cuenta1.transferir(cuenta2, 300);

cuenta1.verMovimientos();
cuenta2.verMovimientos();

// ============================================
// 5️⃣ MÉTODOS CON DIFERENTES PARÁMETROS
// ============================================

console.log("\n--- Métodos con Diferentes Parámetros ---");

class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  // Método sin parámetros
  calcularArea() {
    return this.ancho * this.alto;
  }

  // Método con un parámetro
  escalar(factor) {
    this.ancho *= factor;
    this.alto *= factor;
    console.log(`📏 Escalado x${factor}: ${this.ancho}x${this.alto}`);
  }

  // Método con parámetros opcionales
  redimensionar(nuevoAncho, nuevoAlto = this.alto) {
    this.ancho = nuevoAncho;
    this.alto = nuevoAlto;
    console.log(`📐 Redimensionado: ${this.ancho}x${this.alto}`);
  }

  // Método con rest parameters
  compararCon(...otrosRectangulos) {
    const miArea = this.calcularArea();
    console.log(`\n🔍 Mi área: ${miArea}`);

    otrosRectangulos.forEach((rect, i) => {
      const otraArea = rect.calcularArea();
      const diferencia = miArea - otraArea;
      console.log(
        `  Rectángulo ${i + 1}: ${otraArea} (${
          diferencia > 0 ? "+" : ""
        }${diferencia})`
      );
    });
  }
}

const rect1 = new Rectangulo(10, 5);
const rect2 = new Rectangulo(8, 6);
const rect3 = new Rectangulo(12, 4);

console.log("Área inicial:", rect1.calcularArea());
rect1.escalar(2);
console.log("Nueva área:", rect1.calcularArea());

rect1.redimensionar(15); // Solo cambia el ancho
rect1.compararCon(rect2, rect3);

// ============================================
// 6️⃣ MÉTODOS CON CALLBACKS
// ============================================

console.log("\n--- Métodos con Callbacks ---");

class ListaTareas {
  constructor() {
    this.tareas = [];
  }

  agregar(tarea) {
    this.tareas.push({ texto: tarea, completada: false });
  }

  // Método que acepta un callback
  filtrar(callback) {
    return this.tareas.filter(callback);
  }

  // Método que ejecuta un callback para cada elemento
  procesarCada(callback) {
    this.tareas.forEach(callback);
  }

  completar(indice) {
    if (this.tareas[indice]) {
      this.tareas[indice].completada = true;
    }
  }
}

const lista = new ListaTareas();
lista.agregar("Estudiar JavaScript");
lista.agregar("Hacer ejercicio");
lista.agregar("Leer un libro");
lista.completar(0);

// Usar método con callback
const pendientes = lista.filtrar((tarea) => !tarea.completada);
console.log("Tareas pendientes:", pendientes);

// Procesar cada tarea
console.log("\nTodas las tareas:");
lista.procesarCada((tarea, i) => {
  const estado = tarea.completada ? "✅" : "⏳";
  console.log(`${i + 1}. ${estado} ${tarea.texto}`);
});

// ============================================
// 7️⃣ RESUMEN
// ============================================

console.log("\n=== RESUMEN ===");
console.log(`
📌 CONSTRUCTOR:
• Se ejecuta automáticamente al crear una instancia
• Usa 'new NombreClase()'
• Ideal para inicializar propiedades y validar datos
• Puede lanzar errores si los datos son inválidos

📌 MÉTODOS DE INSTANCIA:
• Usan 'this' para acceder a las propiedades del objeto
• Se llaman desde las instancias: objeto.metodo()
• Pueden llamar a otros métodos de la misma clase
• Pueden devolver 'this' para encadenar

📌 MÉTODOS ESTÁTICOS:
• Se definen con 'static'
• Se llaman desde la clase: Clase.metodo()
• NO usan 'this' (no tienen acceso a instancias)
• Útiles para operaciones de utilidad o fábrica

📌 BUENAS PRÁCTICAS:
• Valida datos en el constructor
• Métodos pequeños y con una sola responsabilidad
• Usa nombres descriptivos para los métodos
• Documenta los parámetros esperados
`);
