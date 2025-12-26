//==============================================================================
// 02 - CUANTIFICADORES
//==============================================================================

console.log("=== CUANTIFICADORES BÁSICOS ===\n");

/*
CUANTIFICADORES especifican CUÁNTAS VECES debe aparecer un elemento

* → 0 o más veces       {0,}
+ → 1 o más veces       {1,}
? → 0 o 1 vez           {0,1}
{n} → Exactamente n veces
{n,} → n o más veces
{n,m} → Entre n y m veces
*/

// ⭐ ASTERISCO * (0 o más)
console.log("* → 0 o más veces:\n");

console.log("/a*/.test(''):", /a*/.test("")); // true (0 veces)
console.log("/a*/.test('a'):", /a*/.test("a")); // true (1 vez)
console.log("/a*/.test('aaa'):", /a*/.test("aaa")); // true (3 veces)
console.log("/a*/.test('b'):", /a*/.test("b")); // true (0 veces, pero hay otra cosa)

console.log("\n'hoooola'.match(/o*/):", "hoooola".match(/o*/)); // [""] (0 en inicio)
console.log("'hoooola'.match(/o*/g):", "hoooola".match(/o*/g)); // Múltiples matches

// ➕ PLUS + (1 o más)
console.log("\n+ → 1 o más veces:\n");

console.log("/a+/.test(''):", /a+/.test("")); // false (mínimo 1)
console.log("/a+/.test('a'):", /a+/.test("a")); // true
console.log("/a+/.test('aaa'):", /a+/.test("aaa")); // true
console.log("/a+/.test('b'):", /a+/.test("b")); // false

console.log("\n'hoooola'.match(/o+/):", "hoooola".match(/o+/)); // ["oooo"]

// ❓ INTERROGACIÓN ? (0 o 1)
console.log("\n? → 0 o 1 vez (opcional):\n");

console.log("/colou?r/.test('color'):", /colou?r/.test("color")); // true
console.log("/colou?r/.test('colour'):", /colou?r/.test("colour")); // true
console.log("/colou?r/.test('colouur'):", /colou?r/.test("colouur")); // false (más de 1 u)

console.log("\n=== CUANTIFICADORES EXACTOS {n} ===\n");

// {n} = exactamente n veces
console.log("{n} → Exactamente n veces:\n");

console.log("/\\d{3}/.test('12'):", /\d{3}/.test("12")); // false (solo 2)
console.log("/\\d{3}/.test('123'):", /\d{3}/.test("123")); // true
console.log("/\\d{3}/.test('1234'):", /\d{3}/.test("1234")); // true (contiene 3)

// Con anclas para exactitud total
console.log("/^\\d{3}$/.test('123'):", /^\d{3}$/.test("123")); // true
console.log("/^\\d{3}$/.test('1234'):", /^\d{3}$/.test("1234")); // false

console.log("\n=== CUANTIFICADORES DE RANGO {n,m} ===\n");

// {n,} = n o más
console.log("{n,} → n o más veces:\n");

console.log("/a{2,}/.test('a'):", /a{2,}/.test("a")); // false
console.log("/a{2,}/.test('aa'):", /a{2,}/.test("aa")); // true
console.log("/a{2,}/.test('aaaaa'):", /a{2,}/.test("aaaaa")); // true

// {n,m} = entre n y m
console.log("\n{n,m} → Entre n y m veces:\n");

console.log("/a{2,4}/.test('a'):", /a{2,4}/.test("a")); // false (mínimo 2)
console.log("/a{2,4}/.test('aa'):", /a{2,4}/.test("aa")); // true
console.log("/a{2,4}/.test('aaa'):", /a{2,4}/.test("aaa")); // true
console.log("/a{2,4}/.test('aaaa'):", /a{2,4}/.test("aaaa")); // true
console.log("/a{2,4}/.test('aaaaa'):", /a{2,4}/.test("aaaaa")); // true (contiene 4)

console.log("\n=== EQUIVALENCIAS ===\n");

console.log("* = {0,}");
console.log("+ = {1,}");
console.log("? = {0,1}");

console.log("\nEjemplos:");
console.log("  /a*/ === /a{0,}/");
console.log("  /a+/ === /a{1,}/");
console.log("  /a?/ === /a{0,1}/");

console.log("\n=== GREEDY vs NON-GREEDY (LAZY) ===\n");

const html = "<div>Hola</div><div>Mundo</div>";

// GREEDY (por defecto): captura lo máximo posible
console.log("GREEDY (.*) - captura TODO lo posible:");
const greedy = /<div>.*<\/div>/;
console.log(html.match(greedy));
// Resultado: ["<div>Hola</div><div>Mundo</div>"]

// NON-GREEDY (lazy): añadir ? después del cuantificador
console.log("\nNON-GREEDY (.*?) - captura lo MÍNIMO posible:");
const lazy = /<div>.*?<\/div>/;
console.log(html.match(lazy));
// Resultado: ["<div>Hola</div>"]

// Para todas las coincidencias con lazy, usar flag g
console.log("\nCon flag g:");
const lazyG = /<div>.*?<\/div>/g;
console.log(html.match(lazyG));
// Resultado: ["<div>Hola</div>", "<div>Mundo</div>"]

console.log("\n=== CUANTIFICADORES NON-GREEDY ===\n");

console.log("*?  → 0 o más (lazy)");
console.log("+?  → 1 o más (lazy)");
console.log("??  → 0 o 1 (lazy)");
console.log("{n,m}? → Entre n y m (lazy)");

// Ejemplo con +?
const texto1 = "hoooola";
console.log("\n'hoooola'.match(/o+/):", texto1.match(/o+/)); // ["oooo"] greedy
console.log("'hoooola'.match(/o+?/):", texto1.match(/o+?/)); // ["o"] lazy

// Ejemplo con ??
const texto2 = "ho";
console.log("\n'ho'.match(/ho?/):", texto2.match(/ho?/)); // ["ho"] greedy
console.log("'ho'.match(/ho??/):", texto2.match(/ho??/)); // ["h"] lazy

console.log("\n=== EJEMPLOS PRÁCTICOS ===\n");

// DNI/NIE español: 8 dígitos + letra
const dni = /^\d{8}[A-Z]$/;
console.log("DNI /^\\d{8}[A-Z]$/:");
console.log("  '12345678A':", dni.test("12345678A")); // true
console.log("  '1234567A':", dni.test("1234567A")); // false (7 dígitos)

// Teléfono español: 9 dígitos, empieza por 6, 7, 8 o 9
const telefono = /^[6-9]\d{8}$/;
console.log("\nTeléfono /^[6-9]\\d{8}$/:");
console.log("  '612345678':", telefono.test("612345678")); // true
console.log("  '512345678':", telefono.test("512345678")); // false (empieza por 5)
console.log("  '6123456':", telefono.test("6123456")); // false (7 dígitos)

// Código postal: exactamente 5 dígitos
const cp = /^\d{5}$/;
console.log("\nCódigo Postal /^\\d{5}$/:");
console.log("  '08001':", cp.test("08001")); // true
console.log("  '0800':", cp.test("0800")); // false (4 dígitos)

// Matrícula española: 4 dígitos + 3 letras (con guion opcional)
const matricula = /^\d{4}-?[A-Z]{3}$/;
console.log("\nMatrícula /^\\d{4}-?[A-Z]{3}$/:");
console.log("  '1234ABC':", matricula.test("1234ABC")); // true
console.log("  '1234-ABC':", matricula.test("1234-ABC")); // true
console.log("  '123ABC':", matricula.test("123ABC")); // false

// Contraseña: mínimo 8 caracteres
const password = /^.{8,}$/;
console.log("\nContraseña mínimo 8 /^.{8,}$/:");
console.log("  'abc12345':", password.test("abc12345")); // true
console.log("  'abc123':", password.test("abc123")); // false

// Username: 3-16 caracteres (letras, números, guion, guion bajo)
const username = /^[a-zA-Z0-9_-]{3,16}$/;
console.log("\nUsername /^[a-zA-Z0-9_-]{3,16}$/:");
console.log("  'usuario_123':", username.test("usuario_123")); // true
console.log("  'ab':", username.test("ab")); // false (2 caracteres)
console.log("  'usuario@123':", username.test("usuario@123")); // false (@)

// Hora formato HH:MM (00:00 - 23:59)
const hora = /^([01]\d|2[0-3]):[0-5]\d$/;
console.log("\nHora /^([01]\\d|2[0-3]):[0-5]\\d$/:");
console.log("  '14:30':", hora.test("14:30")); // true
console.log("  '23:59':", hora.test("23:59")); // true
console.log("  '24:00':", hora.test("24:00")); // false
console.log("  '14:60':", hora.test("14:60")); // false

// Tarjeta de crédito: 16 dígitos (puede tener espacios o guiones)
const tarjeta = /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/;
console.log("\nTarjeta:");
console.log("  '1234567890123456':", tarjeta.test("1234567890123456")); // true
console.log("  '1234 5678 9012 3456':", tarjeta.test("1234 5678 9012 3456")); // true
console.log("  '1234-5678-9012-3456':", tarjeta.test("1234-5678-9012-3456")); // true

console.log("\n=== COMBINANDO CUANTIFICADORES ===\n");

// Número decimal: dígitos, punto opcional, más dígitos opcionales
const decimal = /^\d+\.?\d*$/;
console.log("Decimal /^\\d+\\.?\\d*$/:");
console.log("  '123':", decimal.test("123")); // true
console.log("  '123.45':", decimal.test("123.45")); // true
console.log("  '123.':", decimal.test("123.")); // true
console.log("  '.45':", decimal.test(".45")); // false (debe empezar con dígito)

// Email simplificado: letras/números + @ + dominio + .ext
const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log("\nEmail simplificado:");
console.log("  'user@example.com':", email.test("user@example.com")); // true
console.log(
  "  'user.name@example.co.uk':",
  email.test("user.name@example.co.uk")
); // true
console.log("  'invalido':", email.test("invalido")); // false

console.log("\n=== TABLA RESUMEN ===\n");

const resumen = {
  "*": { Significado: "0 o más", Equivale: "{0,}", Ejemplo: "/a*/" },
  "+": { Significado: "1 o más", Equivale: "{1,}", Ejemplo: "/a+/" },
  "?": { Significado: "0 o 1", Equivale: "{0,1}", Ejemplo: "/a?/" },
  "{3}": { Significado: "Exactamente 3", Equivale: "-", Ejemplo: "/\\d{3}/" },
  "{2,}": { Significado: "2 o más", Equivale: "-", Ejemplo: "/a{2,}/" },
  "{2,5}": { Significado: "Entre 2 y 5", Equivale: "-", Ejemplo: "/a{2,5}/" },
  "*?": { Significado: "0 o más (lazy)", Equivale: "-", Ejemplo: "/a*?/" },
  "+?": { Significado: "1 o más (lazy)", Equivale: "-", Ejemplo: "/a+?/" },
};

console.table(resumen);

console.log("\n=== RESUMEN ===");
console.log("✅ * → 0 o más, + → 1 o más, ? → 0 o 1");
console.log("✅ {n} → exactamente n veces");
console.log("✅ {n,m} → entre n y m veces");
console.log("✅ Por defecto son GREEDY (capturan máximo)");
console.log("✅ Añadir ? para hacerlos LAZY (capturan mínimo)");
console.log("✅ Usar ^ y $ para validación exacta");
