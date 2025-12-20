//==============================================================================
// 04 - GRUPOS Y CAPTURAS
//==============================================================================

console.log("=== GRUPOS DE CAPTURA () ===\n");

/*
Los PARÉNTESIS () crean grupos que:
1. Agrupan partes del patrón
2. Capturan el texto coincidente
3. Permiten aplicar cuantificadores al grupo
4. Se pueden referenciar con \1, \2, etc.
*/

// Ejemplo básico: agrupar para cuantificar
console.log("Agrupar para cuantificar:\n");

console.log("/ab+/.test('abbb'):", /ab+/.test("abbb")); // true (b se repite)
console.log("/(ab)+/.test('abab'):", /(ab)+/.test("abab")); // true (ab se repite)
console.log("/(ab)+/.test('abbb'):", /(ab)+/.test("abbb")); // false

// Capturar información
console.log("\nCapturar información:\n");

const fecha = "15/01/2024";
const regexFecha = /(\d{2})\/(\d{2})\/(\d{4})/;
const match = fecha.match(regexFecha);

console.log("Fecha:", fecha);
console.log("Match completo:", match[0]); // "15/01/2024"
console.log("Grupo 1 (día):", match[1]); // "15"
console.log("Grupo 2 (mes):", match[2]); // "01"
console.log("Grupo 3 (año):", match[3]); // "2024"

console.log("\n=== REFERENCIAS A GRUPOS \\1, \\2, \\3 ===\n");

// \1 hace referencia al primer grupo capturado
// \2 al segundo, etc.

// Ejemplo: encontrar palabras duplicadas
const textoDuplicado = "el el gato está está aquí";
const duplicadas = /\b(\w+)\s+\1\b/g;
console.log("Palabras duplicadas:");
console.log(textoDuplicado.match(duplicadas)); // ["el el", "está está"]

// Ejemplo: número capicúa de 4 dígitos
const capicua = /^(\d)(\d)\2\1$/;
console.log("\nNúmero capicúa /^(\\d)(\\d)\\2\\1$/:");
console.log("  '1221':", capicua.test("1221")); // true (1-2-2-1)
console.log("  '1331':", capicua.test("1331")); // true (1-3-3-1)
console.log("  '1234':", capicua.test("1234")); // false

// Ejemplo: etiquetas HTML pareadas
const etiquetas = /<(\w+)>.*?<\/\1>/;
console.log("\nEtiquetas HTML pareadas /<(\\w+)>.*?<\\/\\1>/:");
console.log("  '<div>texto</div>':", etiquetas.test("<div>texto</div>")); // true
console.log("  '<div>texto</span>':", etiquetas.test("<div>texto</span>")); // false

console.log("\n=== GRUPOS SIN CAPTURA (?:...) ===\n");

/*
(?:...) agrupa pero NO captura
Útil cuando solo quieres agrupar pero no necesitas la referencia
Mejora el rendimiento
*/

// CON captura
const conCaptura = /(\d{3})-(\d{3})-(\d{4})/;
const tel1 = "123-456-7890".match(conCaptura);
console.log("Con captura:");
console.log("  Grupos capturados:", tel1.length - 1); // 3

// SIN captura
const sinCaptura = /(?:\d{3})-(?:\d{3})-(\d{4})/;
const tel2 = "123-456-7890".match(sinCaptura);
console.log("\nSin captura (?:...):");
console.log("  Grupos capturados:", tel2.length - 1); // 1 (solo el último)
console.log("  Último grupo:", tel2[1]); // "7890"

// Uso práctico: agrupar alternativas sin capturar
const protocolo = /^(?:http|https|ftp):\/\//;
console.log("\nProtocolo (?:http|https|ftp):");
console.log("  'http://ejemplo.com':", protocolo.test("http://ejemplo.com")); // true
console.log("  'ftp://ejemplo.com':", protocolo.test("ftp://ejemplo.com")); // true

console.log("\n=== LOOKAHEAD POSITIVO (?=...) ===\n");

/*
(?=...) verifica que algo viene DESPUÉS, pero NO lo captura
"Mira hacia adelante" sin consumir caracteres
*/

// Contraseña que contenga al menos un dígito
const tieneDigito = /^(?=.*\d).{8,}$/;
console.log("Contraseña con dígito /^(?=.*\\d).{8,}$/:");
console.log("  'password123':", tieneDigito.test("password123")); // true
console.log("  'password':", tieneDigito.test("password")); // false (no dígito)
console.log("  'pass123':", tieneDigito.test("pass123")); // false (< 8 caracteres)

// Palabra seguida de un número (sin capturar el número)
const palabraNumero = /\w+(?=\d)/;
console.log("\nPalabra antes de número /\\w+(?=\\d)/:");
console.log("  'abc123'.match():", "abc123".match(palabraNumero)); // ["abc"]
console.log("  'xyz456'.match():", "xyz456".match(palabraNumero)); // ["xyz"]

console.log("\n=== LOOKAHEAD NEGATIVO (?!...) ===\n");

/*
(?!...) verifica que algo NO viene después
"Mira hacia adelante negativamente"
*/

// Palabra NO seguida de un número
const palabraSinNumero = /\w+(?!\d)/;
console.log("Palabra NO seguida de número /\\w+(?!\\d)/:");
console.log("  'abc123'.match():", "abc123".match(palabraSinNumero)); // ["abc12"] (la última letra)
console.log("  'xyz'.match():", "xyz".match(palabraSinNumero)); // ["xyz"]

// Usuario que NO contenga números
const usuarioSinNum = /^(?!\d)(?!.*\d)[a-zA-Z_-]{3,16}$/;
console.log("\nUsuario sin números:");
console.log("  'usuario':", usuarioSinNum.test("usuario")); // true
console.log("  'usuario123':", usuarioSinNum.test("usuario123")); // false

console.log("\n=== LOOKBEHIND POSITIVO (?<=...) ===\n");

/*
(?<=...) verifica que algo viene ANTES
Soportado desde ES2018
*/

// Precio después del símbolo $
const precio = /(?<=\$)\d+/;
console.log("Precio después de $ /(?<=\\$)\\d+/:");
console.log("  '$100'.match():", "$100".match(precio)); // ["100"]
console.log("  '100'.match():", "100".match(precio)); // null

// Palabra después de @
const mencion = /(?<=@)\w+/g;
const tweet = "Hola @usuario1 y @usuario2";
console.log("\nMenciones /(?<=@)\\w+/g:");
console.log("  Texto:", tweet);
console.log("  Menciones:", tweet.match(mencion)); // ["usuario1", "usuario2"]

console.log("\n=== LOOKBEHIND NEGATIVO (?<!...) ===\n");

/*
(?<!...) verifica que algo NO viene antes
*/

// Número NO precedido por $
const numSinDolar = /(?<!\$)\d+/;
console.log("Número sin $ antes /(?<!\\$)\\d+/:");
console.log("  '$100 y 200'.match():", "$100 y 200".match(numSinDolar)); // ["00", "200"]

console.log("\n=== CONTRASEÑA SEGURA (EJEMPLO COMPLETO) ===\n");

/*
Requisitos:
- Mínimo 8 caracteres
- Al menos 1 mayúscula
- Al menos 1 minúscula
- Al menos 1 número
- Al menos 1 carácter especial
*/

const passwordSegura =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

console.log("Contraseña segura:");
console.log("  'Abc123!@':", passwordSegura.test("Abc123!@")); // true
console.log("  'abc123!@':", passwordSegura.test("abc123!@")); // false (sin mayúscula)
console.log("  'Abc123':", passwordSegura.test("Abc123")); // false (sin especial)
console.log("  'Abc!@':", passwordSegura.test("Abc!@")); // false (sin número)

console.log("\n=== EXTRAER DATOS CON GRUPOS ===\n");

// Teléfono con formato
const telFormato = /^(\d{3})-(\d{3})-(\d{4})$/;
const telefono = "123-456-7890";
const telMatch = telefono.match(telFormato);

if (telMatch) {
  console.log("Teléfono:", telefono);
  console.log("Área:", telMatch[1]);
  console.log("Prefijo:", telMatch[2]);
  console.log("Número:", telMatch[3]);
}

// Email con grupos
const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
const email = "usuario@ejemplo.com";
const emailMatch = email.match(emailRegex);

if (emailMatch) {
  console.log("\nEmail:", email);
  console.log("Usuario:", emailMatch[1]);
  console.log("Dominio:", emailMatch[2]);
  console.log("Extensión:", emailMatch[3]);
}

// URL con grupos
const urlRegex = /^(https?):\/\/([a-zA-Z0-9.-]+)(:\d+)?(\/.*)?(\\?.*)?(#.*)?$/;
const url = "https://ejemplo.com:8080/ruta?param=valor#seccion";
const urlMatch = url.match(urlRegex);

if (urlMatch) {
  console.log("\nURL:", url);
  console.log("Protocolo:", urlMatch[1]);
  console.log("Dominio:", urlMatch[2]);
  console.log("Puerto:", urlMatch[3] || "default");
  console.log("Ruta:", urlMatch[4] || "/");
}

console.log("\n=== GRUPOS NOMBRADOS (?<nombre>...) ===\n");

/*
ES2018+ permite nombrar grupos con (?<nombre>...)
Más legible que usar índices numéricos
*/

const fechaNombrada = /(?<dia>\d{2})\/(?<mes>\d{2})\/(?<año>\d{4})/;
const fechaTexto = "15/01/2024";
const fechaMatch = fechaTexto.match(fechaNombrada);

console.log("Grupos nombrados:");
if (fechaMatch && fechaMatch.groups) {
  console.log("  Fecha:", fechaTexto);
  console.log("  Día:", fechaMatch.groups.dia);
  console.log("  Mes:", fechaMatch.groups.mes);
  console.log("  Año:", fechaMatch.groups.año);
}

// Referencia a grupo nombrado
const duplicadoNombrado = /\b(?<palabra>\w+)\s+\k<palabra>\b/;
console.log("\nReferencia a grupo nombrado \\k<nombre>:");
console.log("  'hola hola':", duplicadoNombrado.test("hola hola")); // true
console.log("  'hola adios':", duplicadoNombrado.test("hola adios")); // false

console.log("\n=== REPLACE CON GRUPOS ===\n");

// Formatear fecha de DD/MM/YYYY a YYYY-MM-DD
const fechaOriginal = "15/01/2024";
const fechaFormateada = fechaOriginal.replace(
  /(\d{2})\/(\d{2})\/(\d{4})/,
  "$3-$2-$1"
);
console.log("Formatear fecha:");
console.log("  Original:", fechaOriginal);
console.log("  Formateada:", fechaFormateada);

// Formatear teléfono
const telOriginal = "1234567890";
const telFormateado = telOriginal.replace(
  /(\d{3})(\d{3})(\d{4})/,
  "($1) $2-$3"
);
console.log("\nFormatear teléfono:");
console.log("  Original:", telOriginal);
console.log("  Formateado:", telFormateado);

// Con función de reemplazo
const textoNombres = "Hola juan y maría";
const textoCapitalizado = textoNombres.replace(/\b(\w)/g, (match) =>
  match.toUpperCase()
);
console.log("\nCapitalizar palabras:");
console.log("  Original:", textoNombres);
console.log("  Capitalizado:", textoCapitalizado);

console.log("\n=== RESUMEN ===");
console.log("✅ () → grupo de captura");
console.log("✅ (?:...) → grupo sin captura");
console.log("✅ \\1, \\2 → referencias a grupos");
console.log("✅ (?=...) → lookahead positivo");
console.log("✅ (?!...) → lookahead negativo");
console.log("✅ (?<=...) → lookbehind positivo");
console.log("✅ (?<!...) → lookbehind negativo");
console.log("✅ (?<nombre>...) → grupos nombrados");
console.log("✅ $1, $2 → referencias en replace()");
