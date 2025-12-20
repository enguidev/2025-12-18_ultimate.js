//==============================================================================
// 06 - VALIDACIONES COMUNES CON REGEX
//==============================================================================

console.log("=== VALIDACIONES ÚTILES PARA FORMULARIOS ===\n");

//==============================================================================
// 📧 EMAIL
//==============================================================================

console.log("1. EMAIL\n");

// Básico (para la mayoría de casos)
const emailBasico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Más completo
const emailCompleto = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Muy completo (RFC 5322 simplificado)
const emailRFC =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validarEmail(email) {
  return emailCompleto.test(email);
}

console.log("Validar emails:");
console.log("  user@example.com:", validarEmail("user@example.com")); // true
console.log(
  "  user.name@example.co.uk:",
  validarEmail("user.name@example.co.uk")
); // true
console.log("  invalido@:", validarEmail("invalido@")); // false
console.log("  @example.com:", validarEmail("@example.com")); // false

//==============================================================================
// 📱 TELÉFONO
//==============================================================================

console.log("\n2. TELÉFONO\n");

// Español móvil (9 dígitos, empieza por 6 o 7)
const telEspañol = /^[67]\d{8}$/;

// Español con prefijo opcional
const telEspañolPrefijo = /^(\+34|0034)?[67]\d{8}$/;

// Formato internacional flexible
const telInternacional = /^\+?[\d\s\-()]+$/;

function validarTelefonoES(tel) {
  // Limpiar espacios y guiones
  const limpio = tel.replace(/[\s\-()]/g, "");
  return telEspañolPrefijo.test(limpio);
}

console.log("Validar teléfonos españoles:");
console.log("  612345678:", validarTelefonoES("612345678")); // true
console.log("  +34612345678:", validarTelefonoES("+34612345678")); // true
console.log("  512345678:", validarTelefonoES("512345678")); // false

//==============================================================================
// 🔒 CONTRASEÑA SEGURA
//==============================================================================

console.log("\n3. CONTRASEÑA SEGURA\n");

// Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número
const passMedia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número, 1 especial
const passFuerte =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Muy fuerte: mínimo 12, todas las anteriores
const passMuyFuerte =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

function validarPassword(pass) {
  const result = {
    valida: passFuerte.test(pass),
    longitud: pass.length >= 8,
    mayuscula: /[A-Z]/.test(pass),
    minuscula: /[a-z]/.test(pass),
    numero: /\d/.test(pass),
    especial: /[@$!%*?&]/.test(pass),
  };
  return result;
}

console.log("Validar contraseñas:");
console.log("  'Abc123!@':", validarPassword("Abc123!@"));
console.log("  'debil':", validarPassword("debil"));

//==============================================================================
// 🆔 DNI / NIE ESPAÑOL
//==============================================================================

console.log("\n4. DNI / NIE ESPAÑOL\n");

// DNI: 8 números + letra
const dniRegex = /^\d{8}[A-Z]$/;

// NIE: X, Y, Z + 7 números + letra
const nieRegex = /^[XYZ]\d{7}[A-Z]$/;

// DNI o NIE
const dniNie = /^([XYZ]|\d)\d{7}[A-Z]$/;

function validarDNI(dni) {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  dni = dni.toUpperCase().replace(/[\s\-]/g, "");

  if (!dniNie.test(dni)) return false;

  // Calcular letra
  let numero = dni.substr(0, 8);
  if (/^[XYZ]/.test(dni)) {
    numero = numero.replace("X", "0").replace("Y", "1").replace("Z", "2");
  }

  const letra = letras[parseInt(numero) % 23];
  return letra === dni[8];
}

console.log("Validar DNI/NIE:");
console.log("  '12345678Z':", validarDNI("12345678Z")); // true
console.log("  'X1234567L':", validarDNI("X1234567L")); // true
console.log("  '12345678A':", validarDNI("12345678A")); // false (letra incorrecta)

//==============================================================================
// 🚗 MATRÍCULA ESPAÑOLA
//==============================================================================

console.log("\n5. MATRÍCULA ESPAÑOLA\n");

// Formato actual: 1234 ABC (con guion opcional)
const matricula = /^\d{4}\s?-?\s?[A-Z]{3}$/;

// Formato antiguo también: M-1234-AB
const matriculaAntigua = /^[A-Z]{1,2}\s?-?\s?\d{4}\s?-?\s?[A-Z]{1,2}$/;

function validarMatricula(mat) {
  mat = mat.toUpperCase();
  return matricula.test(mat) || matriculaAntigua.test(mat);
}

console.log("Validar matrículas:");
console.log("  '1234ABC':", validarMatricula("1234ABC")); // true
console.log("  '1234-ABC':", validarMatricula("1234-ABC")); // true
console.log("  'M-1234-AB':", validarMatricula("M-1234-AB")); // true

//==============================================================================
// 📮 CÓDIGO POSTAL
//==============================================================================

console.log("\n6. CÓDIGO POSTAL\n");

// España: 5 dígitos
const cpEspañol = /^\d{5}$/;

// USA: 5 dígitos o 5+4
const cpUSA = /^\d{5}(-\d{4})?$/;

// UK: formato complejo
const cpUK = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i;

function validarCPEspañol(cp) {
  if (!cpEspañol.test(cp)) return false;

  // Validar provincia (primeros 2 dígitos: 01-52)
  const provincia = parseInt(cp.substr(0, 2));
  return provincia >= 1 && provincia <= 52;
}

console.log("Validar códigos postales:");
console.log("  '08001':", validarCPEspañol("08001")); // true (Barcelona)
console.log("  '28001':", validarCPEspañol("28001")); // true (Madrid)
console.log("  '99001':", validarCPEspañol("99001")); // false (provincia no existe)

//==============================================================================
// 🌐 URL
//==============================================================================

console.log("\n7. URL\n");

// Básica
const urlBasica = /^https?:\/\/.+/;

// Más completa
const urlCompleta =
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

function validarURL(url) {
  return urlCompleta.test(url);
}

console.log("Validar URLs:");
console.log("  'https://ejemplo.com':", validarURL("https://ejemplo.com")); // true
console.log(
  "  'http://sub.ejemplo.com/ruta':",
  validarURL("http://sub.ejemplo.com/ruta")
); // true
console.log("  'ejemplo.com':", validarURL("ejemplo.com")); // false (sin protocolo)

//==============================================================================
// 💳 TARJETA DE CRÉDITO
//==============================================================================

console.log("\n8. TARJETA DE CRÉDITO\n");

// Formatos comunes (sin validar Luhn)
const visa = /^4[0-9]{12}(?:[0-9]{3})?$/; // 4xxx xxxx xxxx xxxx (13 o 16 dígitos)
const mastercard = /^5[1-5][0-9]{14}$/; // 5xxx xxxx xxxx xxxx
const amex = /^3[47][0-9]{13}$/; // 3xxx xxxx xxxx xxxx (15 dígitos)

function validarTarjeta(numero) {
  numero = numero.replace(/[\s\-]/g, "");

  if (visa.test(numero)) return "Visa";
  if (mastercard.test(numero)) return "Mastercard";
  if (amex.test(numero)) return "American Express";
  return false;
}

console.log("Validar tarjetas:");
console.log("  '4111111111111111':", validarTarjeta("4111111111111111")); // Visa
console.log("  '5500000000000004':", validarTarjeta("5500000000000004")); // Mastercard

//==============================================================================
// 📅 FECHA
//==============================================================================

console.log("\n9. FECHA\n");

// DD/MM/YYYY
const fechaDDMMYYYY = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

// YYYY-MM-DD (ISO)
const fechaISO = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// DD-MM-YYYY o DD/MM/YYYY
const fechaFlexible =
  /^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;

function validarFecha(fecha) {
  if (!fechaFlexible.test(fecha)) return false;

  const partes = fecha.split(/[-\/]/);
  const dia = parseInt(partes[0]);
  const mes = parseInt(partes[1]);
  const año = parseInt(partes[2]);

  // Validar que la fecha es real
  const fechaObj = new Date(año, mes - 1, dia);
  return (
    fechaObj.getDate() === dia &&
    fechaObj.getMonth() === mes - 1 &&
    fechaObj.getFullYear() === año
  );
}

console.log("Validar fechas:");
console.log("  '15/01/2024':", validarFecha("15/01/2024")); // true
console.log("  '31/02/2024':", validarFecha("31/02/2024")); // false (febrero no tiene 31)
console.log("  '29/02/2024':", validarFecha("29/02/2024")); // true (2024 es bisiesto)

//==============================================================================
// 🕐 HORA
//==============================================================================

console.log("\n10. HORA\n");

// HH:MM (24 horas)
const hora24 = /^([01]\d|2[0-3]):[0-5]\d$/;

// HH:MM:SS
const horaConSegundos = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

// HH:MM AM/PM (12 horas)
const hora12 = /^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)$/i;

function validarHora(hora) {
  return hora24.test(hora) || hora12.test(hora);
}

console.log("Validar horas:");
console.log("  '14:30':", validarHora("14:30")); // true
console.log("  '23:59':", validarHora("23:59")); // true
console.log("  '24:00':", validarHora("24:00")); // false
console.log("  '2:30 PM':", validarHora("2:30 PM")); // true

//==============================================================================
// 🔢 NÚMEROS
//==============================================================================

console.log("\n11. NÚMEROS\n");

// Entero
const entero = /^-?\d+$/;

// Decimal
const decimal = /^-?\d+(\.\d+)?$/;

// Positivo
const positivo = /^\d+(\.\d+)?$/;

// Con separadores de miles
const numeroFormateado = /^\d{1,3}(.\d{3})*(,\d+)?$/; // 1.234.567,89

console.log("Validar números:");
console.log("  '123':", entero.test("123")); // true
console.log("  '-45':", entero.test("-45")); // true
console.log("  '123.45':", decimal.test("123.45")); // true
console.log("  '1.234.567,89':", numeroFormateado.test("1.234.567,89")); // true

//==============================================================================
// 🎨 COLOR HEXADECIMAL
//==============================================================================

console.log("\n12. COLOR HEXADECIMAL\n");

// #RGB o #RRGGBB
const colorHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

function validarColorHex(color) {
  return colorHex.test(color);
}

console.log("Validar colores hex:");
console.log("  '#FF0000':", validarColorHex("#FF0000")); // true
console.log("  '#F00':", validarColorHex("#F00")); // true
console.log("  'FF0000':", validarColorHex("FF0000")); // false (sin #)

//==============================================================================
// 📝 NOMBRE DE USUARIO
//==============================================================================

console.log("\n13. NOMBRE DE USUARIO\n");

// 3-16 caracteres, letras, números, guion y guion bajo
const username = /^[a-zA-Z0-9_-]{3,16}$/;

// No puede empezar con número
const usernameNoNum = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;

function validarUsername(user) {
  return usernameNoNum.test(user);
}

console.log("Validar usernames:");
console.log("  'usuario_123':", validarUsername("usuario_123")); // true
console.log("  'ab':", validarUsername("ab")); // false (muy corto)
console.log("  '123user':", validarUsername("123user")); // false (empieza con número)

//==============================================================================
// 🌍 IPv4
//==============================================================================

console.log("\n14. IPv4\n");

// Básico (permite 999.999.999.999)
const ipv4Basico = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

// Preciso (0-255 en cada octeto)
const ipv4Preciso =
  /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;

function validarIPv4(ip) {
  return ipv4Preciso.test(ip);
}

console.log("Validar IPv4:");
console.log("  '192.168.1.1':", validarIPv4("192.168.1.1")); // true
console.log("  '255.255.255.255':", validarIPv4("255.255.255.255")); // true
console.log("  '256.1.1.1':", validarIPv4("256.1.1.1")); // false

console.log("\n=== RESUMEN ===");
console.log("✅ Usa ^ y $ para validación exacta");
console.log("✅ Lookahead (?=...) para contraseñas complejas");
console.log("✅ Limpia el input antes de validar (espacios, guiones)");
console.log("✅ Valida formato + lógica (fechas reales, provincias válidas)");
console.log("✅ Combina regex con validaciones adicionales");
