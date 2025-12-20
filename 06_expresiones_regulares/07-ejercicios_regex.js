//==============================================================================
// 07 - EJERCICIOS PRÁCTICOS DE REGEX
//==============================================================================

console.log("=== 20 EJERCICIOS CON SOLUCIONES ===\n");

//==============================================================================
// EJERCICIO 1: Validar que un string solo contiene letras
//==============================================================================

console.log("📝 EJERCICIO 1: Solo letras\n");

function soloLetras(str) {
  return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(str);
}

console.log("Solución:");
console.log("  'Juan Pérez':", soloLetras("Juan Pérez")); // true
console.log("  'Juan123':", soloLetras("Juan123")); // false

//==============================================================================
// EJERCICIO 2: Extraer todos los números de un texto
//==============================================================================

console.log("\n📝 EJERCICIO 2: Extraer todos los números\n");

function extraerNumeros(texto) {
  return texto.match(/\d+/g) || [];
}

console.log("Solución:");
const texto1 = "Tengo 25 años y 3 gatos, nací en 1999";
console.log("  Texto:", texto1);
console.log("  Números:", extraerNumeros(texto1)); // ["25", "3", "1999"]

//==============================================================================
// EJERCICIO 3: Validar formato de fecha DD/MM/YYYY
//==============================================================================

console.log("\n📝 EJERCICIO 3: Validar fecha DD/MM/YYYY\n");

function validarFechaDDMMYYYY(fecha) {
  const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  return regex.test(fecha);
}

console.log("Solución:");
console.log("  '15/01/2024':", validarFechaDDMMYYYY("15/01/2024")); // true
console.log("  '32/01/2024':", validarFechaDDMMYYYY("32/01/2024")); // false
console.log("  '15-01-2024':", validarFechaDDMMYYYY("15-01-2024")); // false

//==============================================================================
// EJERCICIO 4: Contar vocales en un texto
//==============================================================================

console.log("\n📝 EJERCICIO 4: Contar vocales\n");

function contarVocales(texto) {
  const vocales = texto.match(/[aeiouáéíóú]/gi);
  return vocales ? vocales.length : 0;
}

console.log("Solución:");
const texto2 = "Hola mundo";
console.log("  Texto:", texto2);
console.log("  Vocales:", contarVocales(texto2)); // 4

//==============================================================================
// EJERCICIO 5: Reemplazar palabras censuradas
//==============================================================================

console.log("\n📝 EJERCICIO 5: Censurar palabras\n");

function censurarPalabras(texto, palabras) {
  const regex = new RegExp(`\\b(${palabras.join("|")})\\b`, "gi");
  return texto.replace(regex, (match) => "*".repeat(match.length));
}

console.log("Solución:");
const texto3 = "Esta palabra es mala y esta otra también";
console.log("  Original:", texto3);
console.log("  Censurado:", censurarPalabras(texto3, ["mala", "otra"]));

//==============================================================================
// EJERCICIO 6: Extraer hashtags de un texto
//==============================================================================

console.log("\n📝 EJERCICIO 6: Extraer hashtags\n");

function extraerHashtags(texto) {
  return texto.match(/#\w+/g) || [];
}

console.log("Solución:");
const tweet = "Me encanta #JavaScript y #RegEx #Coding123";
console.log("  Tweet:", tweet);
console.log("  Hashtags:", extraerHashtags(tweet));

//==============================================================================
// EJERCICIO 7: Validar contraseña segura
//==============================================================================

console.log("\n📝 EJERCICIO 7: Validar contraseña segura\n");

function esPasswordSegura(pass) {
  // Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número, 1 especial
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    pass
  );
}

console.log("Solución:");
console.log("  'Abc123!@':", esPasswordSegura("Abc123!@")); // true
console.log("  'abc123!@':", esPasswordSegura("abc123!@")); // false (sin mayúscula)
console.log("  'Abcdefgh':", esPasswordSegura("Abcdefgh")); // false (sin número ni especial)

//==============================================================================
// EJERCICIO 8: Convertir camelCase a snake_case
//==============================================================================

console.log("\n📝 EJERCICIO 8: camelCase → snake_case\n");

function camelToSnake(str) {
  return str.replace(/[A-Z]/g, (letra) => "_" + letra.toLowerCase());
}

console.log("Solución:");
console.log("  'miVariableEjemplo':", camelToSnake("miVariableEjemplo")); // mi_variable_ejemplo
console.log("  'getUserName':", camelToSnake("getUserName")); // get_user_name

//==============================================================================
// EJERCICIO 9: Validar email con subdominios
//==============================================================================

console.log("\n📝 EJERCICIO 9: Validar email con subdominios\n");

function validarEmailCompleto(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    email
  );
}

console.log("Solución:");
console.log("  'user@mail.com':", validarEmailCompleto("user@mail.com")); // true
console.log(
  "  'user@sub.mail.com':",
  validarEmailCompleto("user@sub.mail.com")
); // true
console.log("  'user@mail':", validarEmailCompleto("user@mail")); // false

//==============================================================================
// EJERCICIO 10: Extraer URLs de un texto
//==============================================================================

console.log("\n📝 EJERCICIO 10: Extraer URLs\n");

function extraerURLs(texto) {
  return texto.match(/https?:\/\/[^\s]+/g) || [];
}

console.log("Solución:");
const texto4 = "Visita https://ejemplo.com y http://otro.com para más info";
console.log("  Texto:", texto4);
console.log("  URLs:", extraerURLs(texto4));

//==============================================================================
// EJERCICIO 11: Formatear número de teléfono
//==============================================================================

console.log("\n📝 EJERCICIO 11: Formatear teléfono\n");

function formatearTelefono(tel) {
  const limpio = tel.replace(/\D/g, "");
  if (limpio.length === 9) {
    return limpio.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");
  }
  return tel;
}

console.log("Solución:");
console.log("  '612345678':", formatearTelefono("612345678")); // 612 345 678
console.log("  '6-1-2-3-4-5-6-7-8':", formatearTelefono("6-1-2-3-4-5-6-7-8")); // 612 345 678

//==============================================================================
// EJERCICIO 12: Remover etiquetas HTML
//==============================================================================

console.log("\n📝 EJERCICIO 12: Remover HTML\n");

function removerHTML(texto) {
  return texto.replace(/<[^>]*>/g, "");
}

console.log("Solución:");
const html = "<p>Hola <strong>mundo</strong></p>";
console.log("  HTML:", html);
console.log("  Limpio:", removerHTML(html)); // Hola mundo

//==============================================================================
// EJERCICIO 13: Validar código postal español
//==============================================================================

console.log("\n📝 EJERCICIO 13: Validar código postal español\n");

function validarCPEspañol(cp) {
  if (!/^\d{5}$/.test(cp)) return false;
  const provincia = parseInt(cp.substr(0, 2));
  return provincia >= 1 && provincia <= 52;
}

console.log("Solución:");
console.log("  '08001':", validarCPEspañol("08001")); // true (Barcelona)
console.log("  '28001':", validarCPEspañol("28001")); // true (Madrid)
console.log("  '99001':", validarCPEspañol("99001")); // false

//==============================================================================
// EJERCICIO 14: Encontrar palabras duplicadas consecutivas
//==============================================================================

console.log("\n📝 EJERCICIO 14: Palabras duplicadas\n");

function encontrarDuplicadas(texto) {
  return texto.match(/\b(\w+)\s+\1\b/gi) || [];
}

console.log("Solución:");
const texto5 = "el el gato está está aquí";
console.log("  Texto:", texto5);
console.log("  Duplicadas:", encontrarDuplicadas(texto5)); // ["el el", "está está"]

//==============================================================================
// EJERCICIO 15: Extraer menciones de Twitter (@usuario)
//==============================================================================

console.log("\n📝 EJERCICIO 15: Extraer menciones\n");

function extraerMenciones(texto) {
  return texto.match(/@\w+/g) || [];
}

console.log("Solución:");
const tweet2 = "Hola @usuario1 y @usuario_2, visiten @ejemplo";
console.log("  Tweet:", tweet2);
console.log("  Menciones:", extraerMenciones(tweet2));

//==============================================================================
// EJERCICIO 16: Validar hora en formato HH:MM
//==============================================================================

console.log("\n📝 EJERCICIO 16: Validar hora HH:MM\n");

function validarHora(hora) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(hora);
}

console.log("Solución:");
console.log("  '14:30':", validarHora("14:30")); // true
console.log("  '23:59':", validarHora("23:59")); // true
console.log("  '24:00':", validarHora("24:00")); // false
console.log("  '14:60':", validarHora("14:60")); // false

//==============================================================================
// EJERCICIO 17: Capitalizar primera letra de cada palabra
//==============================================================================

console.log("\n📝 EJERCICIO 17: Capitalizar palabras\n");

function capitalizarPalabras(texto) {
  return texto.replace(/\b\w/g, (letra) => letra.toUpperCase());
}

console.log("Solución:");
const texto6 = "hola mundo desde javascript";
console.log("  Original:", texto6);
console.log("  Capitalizado:", capitalizarPalabras(texto6));

//==============================================================================
// EJERCICIO 18: Validar DNI español
//==============================================================================

console.log("\n📝 EJERCICIO 18: Validar DNI\n");

function validarDNI(dni) {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  dni = dni.toUpperCase().replace(/[\s\-]/g, "");

  if (!/^\d{8}[A-Z]$/.test(dni)) return false;

  const numero = parseInt(dni.substr(0, 8));
  const letra = letras[numero % 23];

  return letra === dni[8];
}

console.log("Solución:");
console.log("  '12345678Z':", validarDNI("12345678Z")); // true
console.log("  '12345678A':", validarDNI("12345678A")); // false (letra incorrecta)

//==============================================================================
// EJERCICIO 19: Extraer números de teléfono de un texto
//==============================================================================

console.log("\n📝 EJERCICIO 19: Extraer teléfonos\n");

function extraerTelefonos(texto) {
  // Formato: 9 dígitos seguidos o con espacios/guiones
  return texto.match(/\b\d{3}[\s\-]?\d{3}[\s\-]?\d{3}\b/g) || [];
}

console.log("Solución:");
const texto7 = "Llama al 612 345 678 o al 687-654-321 para más info";
console.log("  Texto:", texto7);
console.log("  Teléfonos:", extraerTelefonos(texto7));

//==============================================================================
// EJERCICIO 20: Validar matrícula española
//==============================================================================

console.log("\n📝 EJERCICIO 20: Validar matrícula\n");

function validarMatricula(mat) {
  mat = mat.toUpperCase().replace(/\s/g, "");
  // Formato actual: 1234ABC o 1234-ABC
  return /^\d{4}-?[A-Z]{3}$/.test(mat);
}

console.log("Solución:");
console.log("  '1234ABC':", validarMatricula("1234ABC")); // true
console.log("  '1234-ABC':", validarMatricula("1234-ABC")); // true
console.log("  '123ABC':", validarMatricula("123ABC")); // false

//==============================================================================
// BONUS: Validador completo de formulario
//==============================================================================

console.log("\n📝 BONUS: Validador de formulario completo\n");

class ValidadorFormulario {
  static validar(datos) {
    const errores = {};

    // Nombre
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/.test(datos.nombre)) {
      errores.nombre = "Nombre inválido (2-50 letras)";
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
      errores.email = "Email inválido";
    }

    // Teléfono
    if (!/^[67]\d{8}$/.test(datos.telefono)) {
      errores.telefono = "Teléfono inválido (9 dígitos, empieza por 6 o 7)";
    }

    // DNI
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dni = datos.dni.toUpperCase();
    if (!/^\d{8}[A-Z]$/.test(dni)) {
      errores.dni = "Formato DNI inválido";
    } else {
      const letra = letras[parseInt(dni.substr(0, 8)) % 23];
      if (letra !== dni[8]) {
        errores.dni = "Letra del DNI incorrecta";
      }
    }

    // Código postal
    if (!/^\d{5}$/.test(datos.cp)) {
      errores.cp = "Código postal inválido";
    }

    return {
      valido: Object.keys(errores).length === 0,
      errores,
    };
  }
}

const datosFormulario = {
  nombre: "Juan Pérez",
  email: "juan@mail.com",
  telefono: "612345678",
  dni: "12345678Z",
  cp: "08001",
};

console.log("Validación de formulario:");
console.log(ValidadorFormulario.validar(datosFormulario));

const datosInvalidos = {
  nombre: "J",
  email: "invalido",
  telefono: "123",
  dni: "12345678A",
  cp: "999",
};

console.log("\nCon datos inválidos:");
console.log(ValidadorFormulario.validar(datosInvalidos));

console.log("\n=== ¡20 EJERCICIOS COMPLETADOS! ===");
console.log("💡 Practica creando tus propias validaciones");
console.log("💡 Combina regex con lógica adicional para validaciones robustas");
console.log("💡 Usa test() para validar, match() para extraer");
