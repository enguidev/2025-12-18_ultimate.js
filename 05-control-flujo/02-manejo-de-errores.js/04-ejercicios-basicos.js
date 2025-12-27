/*
===============================================
    EJERCICIOS: MANEJO DE ERRORES
===============================================

Practica try-catch-finally, throw y tipos de errores
*/

// ============================================
// EJERCICIO 1: División segura
// ============================================

console.log("--- EJERCICIO 1: División segura ---");

/*
Crea una función dividirSeguro(a, b) que:
- Valide que ambos parámetros sean números
- No permita división por cero
- Retorne el resultado o null en caso de error
- Use try-catch para manejar errores
*/

// TU CÓDIGO AQUÍ
function dividirSeguro(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Ambos parámetros deben ser números");
    }
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  } catch (error) {
    console.log("❌ Error:", error.message);
    return null;
  }
}

// Pruebas
console.log(dividirSeguro(10, 2)); // 5
console.log(dividirSeguro(10, 0)); // null
console.log(dividirSeguro("10", 2)); // null

// ============================================
// EJERCICIO 2: Validador de edad
// ============================================

console.log("\n--- EJERCICIO 2: Validador de edad ---");

/*
Crea una función validarEdad(edad) que:
- Lance un error si edad no es un número
- Lance un error si edad es negativa
- Lance un error si edad es mayor a 150
- Retorne true si la edad es válida
*/

// TU CÓDIGO AQUÍ
function validarEdad(edad) {
  if (typeof edad !== "number") {
    throw new TypeError("La edad debe ser un número");
  }
  if (edad < 0) {
    throw new RangeError("La edad no puede ser negativa");
  }
  if (edad > 150) {
    throw new RangeError("La edad no puede ser mayor a 150");
  }
  return true;
}

// Pruebas
try {
  console.log(validarEdad(25)); // true
  console.log(validarEdad(-5)); // Error
} catch (error) {
  console.log("❌", error.name + ":", error.message);
}

// ============================================
// EJERCICIO 3: Parser JSON seguro
// ============================================

console.log("\n--- EJERCICIO 3: Parser JSON seguro ---");

/*
Crea una función parsearJSON(texto) que:
- Intente parsear el JSON
- Si falla, retorne un objeto con error: true y mensaje
- Si funciona, retorne un objeto con error: false y data
*/

// TU CÓDIGO AQUÍ
function parsearJSON(texto) {
  try {
    const data = JSON.parse(texto);
    return { error: false, data: data };
  } catch (error) {
    return {
      error: true,
      mensaje: "JSON inválido: " + error.message,
    };
  }
}

// Pruebas
console.log(parsearJSON('{"nombre": "Juan"}'));
console.log(parsearJSON("{nombre: Juan}"));

// ============================================
// EJERCICIO 4: Calculadora con manejo de errores
// ============================================

console.log("\n--- EJERCICIO 4: Calculadora ---");

/*
Crea una función calculadora(operacion, a, b) que:
- Soporte: 'suma', 'resta', 'multiplicacion', 'division'
- Valide que a y b sean números
- No permita división por cero
- Lance error para operaciones no soportadas
*/

// TU CÓDIGO AQUÍ
function calculadora(operacion, a, b) {
  // Validar que sean números
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Los operandos deben ser números");
  }

  switch (operacion) {
    case "suma":
      return a + b;
    case "resta":
      return a - b;
    case "multiplicacion":
      return a * b;
    case "division":
      if (b === 0) {
        throw new Error("No se puede dividir por cero");
      }
      return a / b;
    default:
      throw new Error("Operación no soportada: " + operacion);
  }
}

// Pruebas
try {
  console.log(calculadora("suma", 5, 3)); // 8
  console.log(calculadora("division", 10, 2)); // 5
  console.log(calculadora("potencia", 2, 3)); // Error
} catch (error) {
  console.log("❌", error.message);
}

// ============================================
// EJERCICIO 5: Acceso seguro a propiedades
// ============================================

console.log("\n--- EJERCICIO 5: Acceso seguro ---");

/*
Crea una función obtenerNombre(usuario) que:
- Intente acceder a usuario.datos.nombre
- Si falla, retorne "Nombre no disponible"
- Use try-catch para manejar el error
*/

// TU CÓDIGO AQUÍ
function obtenerNombre(usuario) {
  try {
    return usuario.datos.nombre;
  } catch (error) {
    return "Nombre no disponible";
  }
}

// Pruebas
console.log(obtenerNombre({ datos: { nombre: "Juan" } }));
console.log(obtenerNombre({ datos: null }));
console.log(obtenerNombre(null));

// ============================================
// EJERCICIO 6: Validador de email
// ============================================

console.log("\n--- EJERCICIO 6: Validador de email ---");

/*
Crea una función validarEmail(email) que:
- Lance error si email no es un string
- Lance error si no contiene @
- Lance error si no contiene un punto después del @
- Retorne el email en minúsculas si es válido
*/

// TU CÓDIGO AQUÍ
function validarEmail(email) {
  if (typeof email !== "string") {
    throw new TypeError("El email debe ser un string");
  }

  if (!email.includes("@")) {
    throw new Error("El email debe contener @");
  }

  const partes = email.split("@");
  if (!partes[1] || !partes[1].includes(".")) {
    throw new Error("El email debe tener un dominio válido (ej: .com)");
  }

  return email.toLowerCase();
}

// Pruebas
try {
  console.log(validarEmail("JUAN@EMAIL.COM")); // juan@email.com
  console.log(validarEmail("juan@email")); // Error
} catch (error) {
  console.log("❌", error.message);
}

// ============================================
// EJERCICIO 7: Array solo números
// ============================================

console.log("\n--- EJERCICIO 7: Array solo números ---");

/*
Crea una función sumarArray(arr) que:
- Valide que arr sea un array
- Valide que todos los elementos sean números
- Retorne la suma de todos los elementos
- Lance errores descriptivos para cada validación
*/

// TU CÓDIGO AQUÍ
function sumarArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Se esperaba un array");
  }

  if (arr.length === 0) {
    throw new Error("El array no puede estar vacío");
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new TypeError(`El elemento en posición ${i} no es un número`);
    }
  }

  return arr.reduce((sum, num) => sum + num, 0);
}

// Pruebas
try {
  console.log(sumarArray([1, 2, 3, 4])); // 10
  console.log(sumarArray([1, "2", 3])); // Error
} catch (error) {
  console.log("❌", error.message);
}

// ============================================
// EJERCICIO 8: Conexión con reintentos
// ============================================

console.log("\n--- EJERCICIO 8: Reintentos ---");

/*
Crea una función conectar(intentos) que:
- Simule una conexión que falla aleatoriamente
- Reintente la conexión 'intentos' veces
- Use try-catch y finally
- Retorne true si conecta, false si agota intentos
*/

// TU CÓDIGO AQUÍ
function conectar(intentos) {
  let intento = 0;

  while (intento < intentos) {
    intento++;

    try {
      console.log(`  Intento ${intento}...`);

      // Simulación: 50% de probabilidad de éxito
      if (Math.random() > 0.5) {
        console.log("  ✅ Conexión exitosa!");
        return true;
      } else {
        throw new Error("Conexión fallida");
      }
    } catch (error) {
      console.log(`  ❌ ${error.message}`);

      if (intento >= intentos) {
        console.log("  ⚠️ Intentos agotados");
        return false;
      }
    } finally {
      console.log(`  Finally ejecutado (intento ${intento})`);
    }
  }
}

// Prueba
conectar(3);

// ============================================
// EJERCICIO 9: Error personalizado
// ============================================

console.log("\n--- EJERCICIO 9: Error personalizado ---");

/*
Crea una clase ProductoError que extienda Error
Crea una función validarProducto(producto) que:
- Lance ProductoError si falta nombre
- Lance ProductoError si precio es negativo
- Lance ProductoError si stock es negativo
*/

// TU CÓDIGO AQUÍ
class ProductoError extends Error {
  constructor(message) {
    super(message);
    this.name = "ProductoError";
  }
}

function validarProducto(producto) {
  if (!producto.nombre || producto.nombre.trim() === "") {
    throw new ProductoError("El nombre del producto es obligatorio");
  }

  if (typeof producto.precio !== "number" || producto.precio < 0) {
    throw new ProductoError("El precio debe ser un número positivo");
  }

  if (typeof producto.stock !== "number" || producto.stock < 0) {
    throw new ProductoError("El stock debe ser un número positivo");
  }

  return true;
}

// Pruebas
try {
  validarProducto({ nombre: "Laptop", precio: 1000, stock: 5 });
  console.log("✅ Producto válido");

  validarProducto({ nombre: "", precio: 1000, stock: 5 });
} catch (error) {
  if (error instanceof ProductoError) {
    console.log("❌ Error de producto:", error.message);
  }
}

// ============================================
// EJERCICIO 10: Finally en acción
// ============================================

console.log("\n--- EJERCICIO 10: Finally ---");

/*
Crea una función procesarArchivo(archivo) que:
- Simule "abrir" un archivo (console.log)
- Procese el archivo (puede lanzar error si archivo es null)
- Siempre "cierre" el archivo en finally
*/

// TU CÓDIGO AQUÍ
function procesarArchivo(archivo) {
  console.log("📂 Abriendo archivo...");

  try {
    if (!archivo) {
      throw new Error("Archivo no válido");
    }

    console.log("📝 Procesando:", archivo);
    console.log("✅ Procesado correctamente");
    return true;
  } catch (error) {
    console.log("❌ Error:", error.message);
    return false;
  } finally {
    console.log("🔒 Cerrando archivo (finally)");
  }
}

// Pruebas
procesarArchivo("datos.txt");
console.log("");
procesarArchivo(null);

// ============================================
// DESAFÍO: Sistema de validación completo
// ============================================

console.log("\n--- DESAFÍO: Sistema de validación ---");

/*
Crea un sistema completo de registro de usuario que valide:
1. Nombre (obligatorio, mínimo 3 caracteres)
2. Email (formato válido)
3. Edad (número entre 18 y 100)
4. Password (mínimo 8 caracteres, debe tener mayúscula y número)

Usa errores personalizados y manejo apropiado
*/

class ValidationError extends Error {
  constructor(campo, mensaje) {
    super(mensaje);
    this.name = "ValidationError";
    this.campo = campo;
  }
}

function registrarUsuario(datos) {
  const errores = [];

  try {
    // Validar nombre
    if (!datos.nombre || datos.nombre.length < 3) {
      throw new ValidationError(
        "nombre",
        "El nombre debe tener al menos 3 caracteres"
      );
    }

    // Validar email
    if (
      !datos.email ||
      !datos.email.includes("@") ||
      !datos.email.includes(".")
    ) {
      throw new ValidationError("email", "Email inválido");
    }

    // Validar edad
    if (typeof datos.edad !== "number" || datos.edad < 18 || datos.edad > 100) {
      throw new ValidationError("edad", "La edad debe estar entre 18 y 100");
    }

    // Validar password
    if (!datos.password || datos.password.length < 8) {
      throw new ValidationError(
        "password",
        "La contraseña debe tener al menos 8 caracteres"
      );
    }
    if (!/[A-Z]/.test(datos.password) || !/[0-9]/.test(datos.password)) {
      throw new ValidationError(
        "password",
        "La contraseña debe tener mayúscula y número"
      );
    }

    return {
      exito: true,
      mensaje: "Usuario registrado correctamente",
      usuario: {
        nombre: datos.nombre,
        email: datos.email.toLowerCase(),
        edad: datos.edad,
      },
    };
  } catch (error) {
    if (error instanceof ValidationError) {
      return {
        exito: false,
        campo: error.campo,
        mensaje: error.message,
      };
    }
    throw error; // Re-lanzar si es otro tipo de error
  }
}

// Pruebas
console.log(
  registrarUsuario({
    nombre: "Juan",
    email: "juan@email.com",
    edad: 25,
    password: "Password123",
  })
);

console.log(
  registrarUsuario({
    nombre: "Jo",
    email: "juan@email.com",
    edad: 25,
    password: "Password123",
  })
);

console.log("\n✅ Ejercicios completados!");
