/*
===============================================
    LANZAR ERRORES: THROW
===============================================

La palabra clave 'throw' permite lanzar errores personalizados
para controlar situaciones excepcionales en tu código.
*/

// ============================================
// 1. THROW BÁSICO
// ============================================

console.log("--- THROW BÁSICO ---");

function verificarEdad(edad) {
  if (edad < 0) {
    throw "La edad no puede ser negativa"; // ⚠️ Se puede lanzar cualquier valor
  }
  if (edad < 18) {
    throw "Debes ser mayor de edad";
  }
  console.log("✅ Edad válida:", edad);
}

try {
  verificarEdad(25); // ✅ OK
  verificarEdad(-5); // ❌ Error
} catch (error) {
  console.log("Error capturado:", error);
}

// ============================================
// 2. THROW CON OBJETO ERROR
// ============================================

console.log("\n--- THROW CON ERROR OBJECT ---");

function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Los parámetros deben ser números");
  }
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

try {
  console.log(dividir(10, 2)); // 5
  console.log(dividir(10, 0)); // Error
} catch (error) {
  console.log("❌", error.message);
}

// ============================================
// 3. THROW CON DIFERENTES TIPOS
// ============================================

console.log("\n--- THROW CON DIFERENTES TIPOS ---");

function ejemploThrow(tipo) {
  switch (tipo) {
    case "string":
      throw "Error como string";
    case "number":
      throw 404;
    case "boolean":
      throw false;
    case "object":
      throw { codigo: 500, mensaje: "Error del servidor" };
    case "error":
      throw new Error("Error estándar");
  }
}

// Capturando diferentes tipos
try {
  ejemploThrow("object");
} catch (error) {
  console.log("Tipo de error:", typeof error);
  console.log("Contenido:", error);
}

// ============================================
// 4. VALIDACIONES CON THROW
// ============================================

console.log("\n--- VALIDACIONES CON THROW ---");

function crearUsuario(nombre, email, edad) {
  // Validación de nombre
  if (!nombre || nombre.trim() === "") {
    throw new Error("El nombre es obligatorio");
  }

  // Validación de email
  if (!email || !email.includes("@")) {
    throw new Error("Email inválido");
  }

  // Validación de edad
  if (typeof edad !== "number" || edad < 0 || edad > 120) {
    throw new Error("Edad inválida");
  }

  return {
    nombre: nombre.trim(),
    email: email.toLowerCase(),
    edad: edad,
  };
}

// Casos de prueba
try {
  let usuario1 = crearUsuario("Juan", "juan@email.com", 25);
  console.log("✅ Usuario creado:", usuario1);

  let usuario2 = crearUsuario("", "juan@email.com", 25);
  console.log("Esto no se ejecuta");
} catch (error) {
  console.log("❌ Error:", error.message);
}

// ============================================
// 5. RE-LANZAR ERRORES
// ============================================

console.log("\n--- RE-LANZAR ERRORES ---");

function operacionNivel1() {
  throw new Error("Error en nivel 1");
}

function operacionNivel2() {
  try {
    operacionNivel1();
  } catch (error) {
    console.log("Capturado en nivel 2");
    throw error; // Re-lanzar el error
  }
}

function operacionNivel3() {
  try {
    operacionNivel2();
  } catch (error) {
    console.log("Capturado en nivel 3:", error.message);
  }
}

operacionNivel3();

// ============================================
// 6. THROW EN DIFERENTES CONTEXTOS
// ============================================

console.log("\n--- THROW EN DIFERENTES CONTEXTOS ---");

// En funciones de validación
function validarPassword(password) {
  if (password.length < 8) {
    throw new Error("La contraseña debe tener al menos 8 caracteres");
  }
  if (!/[A-Z]/.test(password)) {
    throw new Error("La contraseña debe tener al menos una mayúscula");
  }
  if (!/[0-9]/.test(password)) {
    throw new Error("La contraseña debe tener al menos un número");
  }
  return true;
}

try {
  validarPassword("abc");
} catch (error) {
  console.log("❌", error.message);
}

// En cálculos matemáticos
function calcularDescuento(precio, descuento) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  if (descuento < 0 || descuento > 100) {
    throw new Error("El descuento debe estar entre 0 y 100");
  }
  return precio - (precio * descuento) / 100;
}

try {
  console.log("Precio final:", calcularDescuento(100, 20));
  console.log("Precio final:", calcularDescuento(100, 150)); // Error
} catch (error) {
  console.log("❌", error.message);
}

// ============================================
// 7. THROW CON MENSAJES DESCRIPTIVOS
// ============================================

console.log("\n--- MENSAJES DESCRIPTIVOS ---");

function procesarPedido(pedido) {
  // Validar objeto
  if (!pedido || typeof pedido !== "object") {
    throw new Error("Pedido inválido: se esperaba un objeto");
  }

  // Validar propiedades
  if (!pedido.productos || !Array.isArray(pedido.productos)) {
    throw new Error("Pedido inválido: 'productos' debe ser un array");
  }

  if (pedido.productos.length === 0) {
    throw new Error("Pedido inválido: debe contener al menos un producto");
  }

  if (!pedido.cliente) {
    throw new Error("Pedido inválido: falta información del cliente");
  }

  return "✅ Pedido procesado correctamente";
}

// Pruebas
try {
  console.log(procesarPedido({ productos: [], cliente: "Juan" }));
} catch (error) {
  console.log("❌", error.message);
}

// ============================================
// 8. THROW CON INFORMACIÓN ADICIONAL
// ============================================

console.log("\n--- THROW CON INFO ADICIONAL ---");

function procesarPago(monto, metodoPago) {
  if (monto <= 0) {
    const error = new Error("Monto inválido");
    error.codigo = "MONTO_INVALIDO";
    error.valor = monto;
    error.fecha = new Date();
    throw error;
  }

  const metodosValidos = ["efectivo", "tarjeta", "transferencia"];
  if (!metodosValidos.includes(metodoPago)) {
    const error = new Error("Método de pago no válido");
    error.codigo = "METODO_INVALIDO";
    error.metodosDisponibles = metodosValidos;
    throw error;
  }

  return "Pago procesado";
}

try {
  procesarPago(100, "paypal");
} catch (error) {
  console.log("Error:", error.message);
  console.log("Código:", error.codigo);
  console.log("Métodos disponibles:", error.metodosDisponibles);
}

// ============================================
// 9. PATRÓN: VALIDACIÓN TEMPRANA
// ============================================

console.log("\n--- VALIDACIÓN TEMPRANA ---");

function calcularPromedio(numeros) {
  // Validaciones al inicio (Early return)
  if (!Array.isArray(numeros)) {
    throw new Error("Se esperaba un array");
  }

  if (numeros.length === 0) {
    throw new Error("El array no puede estar vacío");
  }

  if (!numeros.every((n) => typeof n === "number")) {
    throw new Error("Todos los elementos deben ser números");
  }

  // Lógica principal
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  return suma / numeros.length;
}

try {
  console.log("Promedio:", calcularPromedio([10, 20, 30]));
  console.log("Promedio:", calcularPromedio([10, "20", 30]));
} catch (error) {
  console.log("❌", error.message);
}

// ============================================
// 10. CUÁNDO USAR THROW
// ============================================

console.log("\n--- CUÁNDO USAR THROW ---");

/*
✅ USA THROW CUANDO:
1. Los parámetros son inválidos
2. Una operación no puede completarse
3. Se detecta un estado inconsistente
4. Se viola una regla de negocio
5. Falla una pre-condición

❌ NO USES THROW PARA:
1. Controlar flujo normal del programa (usa if/else)
2. Condiciones esperadas (usa return)
3. Validaciones simples que pueden manejarse con booleanos
*/

// ✅ BIEN: Error real
function dividirBien(a, b) {
  if (b === 0) {
    throw new Error("División por cero");
  }
  return a / b;
}

// ❌ MAL: Usar throw para flujo normal
function esMayorDeEdadMal(edad) {
  if (edad < 18) {
    throw new Error("No es mayor de edad"); // ❌ Esto NO es un error
  }
  return true;
}

// ✅ BIEN: Usar return para flujo normal
function esMayorDeEdadBien(edad) {
  return edad >= 18;
}

// ============================================
// 11. RESUMEN
// ============================================

console.log("\n--- RESUMEN ---");

/*
THROW:

SINTAXIS:
throw expresion;

EJEMPLOS:
throw "Error";
throw 42;
throw true;
throw { mensaje: "Error" };
throw new Error("Mensaje");

BUENAS PRÁCTICAS:
1. Usar new Error() para errores estándar
2. Mensajes descriptivos
3. Lanzar errores temprano (fail fast)
4. Documentar qué errores puede lanzar una función
5. No usar throw para control de flujo normal

CASOS DE USO:
✅ Validación de parámetros
✅ Validación de reglas de negocio
✅ Detección de estados inválidos
✅ Operaciones que no pueden completarse
✅ Pre-condiciones no cumplidas
*/
