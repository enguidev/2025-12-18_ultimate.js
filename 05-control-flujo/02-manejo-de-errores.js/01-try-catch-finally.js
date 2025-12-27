/*
===============================================
    MANEJO DE ERRORES: TRY-CATCH-FINALLY
===============================================

El manejo de errores permite controlar situaciones excepcionales
en el código sin que el programa se detenga abruptamente.
*/

// ============================================
// 1. ESTRUCTURA BÁSICA: TRY-CATCH
// ============================================

console.log("--- TRY-CATCH BÁSICO ---");

// Sin manejo de errores (el programa se detiene)
try {
  console.log("Inicio del programa");
  // let resultado = variableQueNoExiste * 2; // ❌ Esto causaría un error
  console.log("Esta línea NO se ejecutaría");
} catch (error) {
  console.log("⚠️ Se capturó un error");
  console.log("El programa continúa ejecutándose");
}

console.log("El programa sigue funcionando"); // ✅ Esto sí se ejecuta

// ============================================
// 2. CAPTURANDO INFORMACIÓN DEL ERROR
// ============================================

console.log("\n--- INFORMACIÓN DEL ERROR ---");

try {
  let numero = undefined;
  let resultado = numero.toFixed(2); // Error: undefined no tiene método toFixed
} catch (error) {
  console.log("Tipo de error:", error.name);
  console.log("Mensaje:", error.message);
  console.log("Stack trace:", error.stack);
}

// ============================================
// 3. TRY-CATCH-FINALLY
// ============================================

console.log("\n--- TRY-CATCH-FINALLY ---");

/*
FINALLY: Se ejecuta SIEMPRE, haya o no error
- Se usa para limpieza de recursos
- Cerrar conexiones
- Liberar memoria
*/

function dividir(a, b) {
  console.log(`\nIntentando dividir ${a} / ${b}`);

  try {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    let resultado = a / b;
    console.log(`Resultado: ${resultado}`);
    return resultado;
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
    return null;
  } finally {
    console.log("✅ Operación finalizada (finally siempre se ejecuta)");
  }
}

dividir(10, 2); // ✅ Éxito
dividir(10, 0); // ❌ Error

// ============================================
// 4. TRY-CATCH SIN FINALLY
// ============================================

console.log("\n--- TRY-CATCH (sin finally) ---");

function procesarDatos(datos) {
  try {
    console.log("Procesando:", datos.toUpperCase());
  } catch (error) {
    console.log("Error al procesar:", error.message);
  }
}

procesarDatos("hola"); // ✅ Funciona
procesarDatos(123); // ❌ Error: 123 no tiene toUpperCase

// ============================================
// 5. TRY-FINALLY (sin catch)
// ============================================

console.log("\n--- TRY-FINALLY (sin catch) ---");

/*
Puedes usar try-finally sin catch
El error se propaga, pero finally se ejecuta antes
*/

function abrirArchivo() {
  console.log("📂 Abriendo archivo...");

  try {
    console.log("📝 Leyendo contenido...");
    // Simulamos un error
    // throw new Error("Archivo corrupto");
    console.log("✅ Lectura exitosa");
  } finally {
    console.log("🔒 Cerrando archivo (finally)");
  }
}

abrirArchivo();

// ============================================
// 6. CASOS DE USO COMUNES
// ============================================

console.log("\n--- CASOS DE USO PRÁCTICOS ---");

// Caso 1: Parsear JSON
function parsearJSON(texto) {
  try {
    return JSON.parse(texto);
  } catch (error) {
    console.log("❌ JSON inválido:", error.message);
    return null;
  }
}

console.log(parsearJSON('{"nombre": "Juan"}')); // ✅ Funciona
console.log(parsearJSON("{nombre: Juan}")); // ❌ JSON inválido

// Caso 2: Acceder a propiedades de objetos
function obtenerEmail(usuario) {
  try {
    return usuario.contacto.email.toLowerCase();
  } catch (error) {
    console.log("⚠️ No se pudo obtener el email");
    return "email no disponible";
  }
}

let usuario1 = { contacto: { email: "JUAN@EMAIL.COM" } };
let usuario2 = { nombre: "María" }; // Sin contacto

console.log(obtenerEmail(usuario1)); // juan@email.com
console.log(obtenerEmail(usuario2)); // email no disponible

// Caso 3: Operaciones matemáticas
function calcularRaiz(numero) {
  try {
    if (numero < 0) {
      throw new Error("No se puede calcular raíz de número negativo");
    }
    return Math.sqrt(numero);
  } catch (error) {
    console.log("Error:", error.message);
    return NaN;
  } finally {
    console.log(`Cálculo finalizado para: ${numero}`);
  }
}

console.log(calcularRaiz(16)); // 4
console.log(calcularRaiz(-4)); // NaN

// ============================================
// 7. ERRORES ANIDADOS
// ============================================

console.log("\n--- TRY-CATCH ANIDADOS ---");

function procesarConAnidacion() {
  try {
    console.log("Nivel externo");

    try {
      console.log("Nivel interno");
      throw new Error("Error en nivel interno");
    } catch (errorInterno) {
      console.log("Capturado en nivel interno:", errorInterno.message);
      throw new Error("Re-lanzando desde interno");
    }
  } catch (errorExterno) {
    console.log("Capturado en nivel externo:", errorExterno.message);
  }
}

procesarConAnidacion();

// ============================================
// 8. BUENAS PRÁCTICAS
// ============================================

console.log("\n--- BUENAS PRÁCTICAS ---");

// ✅ BIEN: Capturar errores específicos
function operacionSegura(valor) {
  try {
    // Código que puede fallar
    return valor.metodoInexistente();
  } catch (error) {
    console.log("Error específico capturado:", error.message);
    // Hacer algo útil con el error
    return null;
  }
}

// ❌ MAL: Capturar y no hacer nada (silenciar errores)
function operacionMala(valor) {
  try {
    return valor.metodoInexistente();
  } catch (error) {
    // No hacer nada es mala práctica
  }
}

// ✅ BIEN: Logging detallado
function operacionConLog(valor) {
  try {
    return valor.metodoInexistente();
  } catch (error) {
    console.error("ERROR DETALLADO:");
    console.error("- Tipo:", error.name);
    console.error("- Mensaje:", error.message);
    console.error("- Entrada:", valor);
    return null;
  }
}

// ============================================
// 9. RESUMEN
// ============================================

console.log("\n--- RESUMEN ---");

/*
TRY-CATCH-FINALLY:

1. TRY: Bloque de código que puede generar errores
2. CATCH: Se ejecuta si hay error en try
3. FINALLY: Se ejecuta SIEMPRE (con o sin error)

SINTAXIS:

try {
    // Código que puede fallar
} catch (error) {
    // Manejo del error
} finally {
    // Limpieza (opcional)
}

VARIANTES:
- try-catch
- try-finally
- try-catch-finally

CUÁNDO USAR:
✅ Parsear JSON
✅ Acceder a propiedades que pueden no existir
✅ Operaciones con APIs externas
✅ Conversiones de tipos
✅ Operaciones matemáticas riesgosas

CUÁNDO NO USAR:
❌ Para controlar flujo normal del programa
❌ Para silenciar errores sin manejarlos
❌ Cuando puedes validar antes (if/else)
*/
