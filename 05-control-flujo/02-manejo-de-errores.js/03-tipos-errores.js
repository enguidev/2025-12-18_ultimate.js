/*
===============================================
    TIPOS DE ERRORES EN JAVASCRIPT
===============================================

JavaScript tiene varios tipos de errores predefinidos.
Cada uno representa una situación específica.
*/

// ============================================
// 1. ERROR (BASE)
// ============================================

console.log("--- ERROR (BASE) ---");

/*
Error: El tipo base del que heredan todos los demás errores
*/

try {
  throw new Error("Este es un error genérico");
} catch (error) {
  console.log("Nombre:", error.name); // Error
  console.log("Mensaje:", error.message); // Este es un error genérico
  console.log("Es Error?", error instanceof Error); // true
}

// ============================================
// 2. SYNTAXERROR
// ============================================

console.log("\n--- SYNTAXERROR ---");

/*
SyntaxError: Error de sintaxis en el código
NO se puede capturar con try-catch porque ocurre en tiempo de análisis
*/

// Ejemplo 1: eval con sintaxis incorrecta
try {
  eval("const x = ;"); // Sintaxis inválida
} catch (error) {
  console.log("Tipo:", error.name); // SyntaxError
  console.log("Mensaje:", error.message);
}

// Ejemplo 2: JSON inválido
try {
  JSON.parse("{clave: valor}"); // JSON mal formado
} catch (error) {
  console.log("Tipo:", error.name); // SyntaxError
  console.log("Mensaje:", error.message);
}

// ============================================
// 3. REFERENCEERROR
// ============================================

console.log("\n--- REFERENCEERROR ---");

/*
ReferenceError: Intentar acceder a una variable que no existe
*/

try {
  console.log(variableQueNoExiste);
} catch (error) {
  console.log("Tipo:", error.name); // ReferenceError
  console.log("Mensaje:", error.message); // variableQueNoExiste is not defined
}

// Otro ejemplo común
try {
  let resultado = x + y; // x e y no están definidas
} catch (error) {
  console.log("❌", error.name);
}

// ============================================
// 4. TYPEERROR
// ============================================

console.log("\n--- TYPEERROR ---");

/*
TypeError: Operación sobre un tipo de dato incorrecto
*/

// Ejemplo 1: Método no existente
try {
  let numero = 42;
  numero.toUpperCase(); // Los números no tienen toUpperCase
} catch (error) {
  console.log("Tipo:", error.name); // TypeError
  console.log("Mensaje:", error.message);
}

// Ejemplo 2: null o undefined
try {
  let obj = null;
  console.log(obj.propiedad); // No se puede acceder a propiedades de null
} catch (error) {
  console.log("❌", error.name, "-", error.message);
}

// Ejemplo 3: Función no callable
try {
  let numero = 42;
  numero(); // 42 no es una función
} catch (error) {
  console.log("❌", error.name, "-", error.message);
}

// ============================================
// 5. RANGEERROR
// ============================================

console.log("\n--- RANGEERROR ---");

/*
RangeError: Valor fuera del rango permitido
*/

// Ejemplo 1: Array con longitud negativa
try {
  let arr = new Array(-1);
} catch (error) {
  console.log("Tipo:", error.name); // RangeError
  console.log("Mensaje:", error.message);
}

// Ejemplo 2: toFixed con decimales inválidos
try {
  let numero = 123.456;
  console.log(numero.toFixed(101)); // Máximo 100 decimales
} catch (error) {
  console.log("❌", error.name);
}

// Ejemplo 3: Recursión infinita (stack overflow)
function recursionInfinita() {
  return recursionInfinita(); // RangeError: Maximum call stack size exceeded
}

try {
  // recursionInfinita(); // ⚠️ Descomenta para ver el error (puede colgar el navegador)
} catch (error) {
  console.log("Stack overflow:", error.name);
}

// ============================================
// 6. URIERROR
// ============================================

console.log("\n--- URIERROR ---");

/*
URIError: Error en funciones de URI (encodeURI, decodeURI)
*/

try {
  decodeURIComponent("%"); // URI mal formada
} catch (error) {
  console.log("Tipo:", error.name); // URIError
  console.log("Mensaje:", error.message);
}

// ============================================
// 7. EVALERROR
// ============================================

console.log("\n--- EVALERROR ---");

/*
EvalError: Error relacionado con eval()
NOTA: Rara vez se usa en JavaScript moderno
*/

// Este tipo de error casi nunca se ve en la práctica
console.log("EvalError existe pero rara vez se usa");

// ============================================
// 8. AGREGATIONERROR (ES2021)
// ============================================

console.log("\n--- AGGREGATIONERROR ---");

/*
AggregateError: Agrupa múltiples errores (nuevo en ES2021)
Se usa principalmente con Promise.any()
*/

try {
  throw new AggregateError(
    [new Error("Error 1"), new Error("Error 2"), new Error("Error 3")],
    "Múltiples errores ocurrieron"
  );
} catch (error) {
  console.log("Tipo:", error.name); // AggregateError
  console.log("Mensaje:", error.message);
  console.log("Errores individuales:", error.errors.length);
  error.errors.forEach((err, i) => {
    console.log(`  ${i + 1}. ${err.message}`);
  });
}

// ============================================
// 9. ERRORES PERSONALIZADOS
// ============================================

console.log("\n--- ERRORES PERSONALIZADOS ---");

/*
Puedes crear tus propios tipos de errores
extendiendo la clase Error
*/

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class DatabaseError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "DatabaseError";
    this.code = code;
  }
}

// Uso de errores personalizados
function validarEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Email inválido: falta @");
  }
  return true;
}

try {
  validarEmail("juan.com");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("❌ Error de validación:", error.message);
  } else {
    console.log("❌ Error desconocido:", error.message);
  }
}

// ============================================
// 10. IDENTIFICAR TIPOS DE ERRORES
// ============================================

console.log("\n--- IDENTIFICAR TIPOS DE ERRORES ---");

function manejarError(error) {
  console.log(`\n🔍 Analizando error:`);

  // Método 1: instanceof
  if (error instanceof TypeError) {
    console.log("  Es un TypeError");
  } else if (error instanceof ReferenceError) {
    console.log("  Es un ReferenceError");
  } else if (error instanceof SyntaxError) {
    console.log("  Es un SyntaxError");
  }

  // Método 2: name
  console.log("  Nombre:", error.name);

  // Método 3: constructor
  console.log("  Constructor:", error.constructor.name);
}

// Pruebas
try {
  let x = null;
  x.metodo();
} catch (error) {
  manejarError(error);
}

try {
  variableInexistente;
} catch (error) {
  manejarError(error);
}

// ============================================
// 11. PROPIEDADES DE LOS ERRORES
// ============================================

console.log("\n--- PROPIEDADES DE LOS ERRORES ---");

try {
  throw new Error("Error de ejemplo");
} catch (error) {
  console.log("Propiedades estándar:");
  console.log("  name:", error.name); // Nombre del error
  console.log("  message:", error.message); // Mensaje descriptivo
  console.log("  stack:", error.stack); // Stack trace

  // Propiedades personalizadas
  error.codigo = 500;
  error.timestamp = new Date();
  console.log("\nPropiedades personalizadas:");
  console.log("  codigo:", error.codigo);
  console.log("  timestamp:", error.timestamp);
}

// ============================================
// 12. MANEJO ESPECÍFICO POR TIPO
// ============================================

console.log("\n--- MANEJO ESPECÍFICO POR TIPO ---");

function ejecutarOperacion(operacion) {
  try {
    switch (operacion) {
      case "syntax":
        JSON.parse("{invalid}");
        break;
      case "reference":
        console.log(varNoExiste);
        break;
      case "type":
        null.metodo();
        break;
      case "range":
        new Array(-1);
        break;
    }
  } catch (error) {
    // Manejo específico según el tipo
    if (error instanceof SyntaxError) {
      console.log("❌ Error de sintaxis detectado");
      console.log("   Sugerencia: Verifica el formato JSON");
    } else if (error instanceof ReferenceError) {
      console.log("❌ Variable no definida");
      console.log("   Sugerencia: Declara la variable primero");
    } else if (error instanceof TypeError) {
      console.log("❌ Tipo incorrecto");
      console.log("   Sugerencia: Verifica que el valor no sea null/undefined");
    } else if (error instanceof RangeError) {
      console.log("❌ Valor fuera de rango");
      console.log("   Sugerencia: Usa valores dentro del rango permitido");
    } else {
      console.log("❌ Error desconocido:", error.message);
    }
  }
}

ejecutarOperacion("syntax");
ejecutarOperacion("type");

// ============================================
// 13. RESUMEN
// ============================================

console.log("\n--- RESUMEN DE TIPOS DE ERRORES ---");

/*
TIPOS DE ERRORES EN JAVASCRIPT:

1. Error - Error genérico base
2. SyntaxError - Error de sintaxis
3. ReferenceError - Variable no definida
4. TypeError - Tipo incorrecto
5. RangeError - Valor fuera de rango
6. URIError - Error en URI
7. EvalError - Error en eval() (obsoleto)
8. AggregateError - Múltiples errores (ES2021)

ERRORES MÁS COMUNES:

❌ TypeError
   - null.propiedad
   - undefined.metodo()
   - numero.toUpperCase()
   - noEsFuncion()

❌ ReferenceError
   - Usar variable no declarada
   - Typo en nombre de variable

❌ SyntaxError
   - JSON.parse con JSON inválido
   - eval con código mal escrito

❌ RangeError
   - new Array(-1)
   - numero.toFixed(101)
   - Stack overflow (recursión infinita)

IDENTIFICAR TIPO:
- error instanceof TypeError
- error.name === "TypeError"
- error.constructor.name === "TypeError"

CREAR ERRORES PERSONALIZADOS:
class MiError extends Error {
    constructor(message) {
        super(message);
        this.name = "MiError";
    }
}
*/
