//==============================================================================
// OPERADORES ARITMÉTICOS EN JAVASCRIPT - GUÍA COMPLETA Y DEFINITIVA
//==============================================================================

console.log("╔════════════════════════════════════════════════════════════╗");
console.log("║   OPERADORES ARITMÉTICOS EN JAVASCRIPT - GUÍA COMPLETA     ║");
console.log("╚════════════════════════════════════════════════════════════╝\n");

//==============================================================================
// 1. OPERADORES ARITMÉTICOS BÁSICOS
//==============================================================================

console.log("═══ 1. OPERADORES ARITMÉTICOS BÁSICOS ═══\n");

let a = 15;
let b = 4;

// SUMA (+)
console.log("┌─ SUMA (+) ─────────────────────────────┐");
console.log("│ Suma dos valores                        │");
console.log("└─────────────────────────────────────────┘");
console.log(`${a} + ${b} =`, a + b); // 19
console.log(`10 + 5 =`, 10 + 5); // 15
console.log(`-3 + 7 =`, -3 + 7); // 4
console.log();

// RESTA (-)
console.log("┌─ RESTA (-) ────────────────────────────┐");
console.log("│ Resta el segundo valor del primero      │");
console.log("└─────────────────────────────────────────┘");
console.log(`${a} - ${b} =`, a - b); // 11
console.log(`20 - 8 =`, 20 - 8); // 12
console.log(`5 - 10 =`, 5 - 10); // -5
console.log();

// MULTIPLICACIÓN (*)
console.log("┌─ MULTIPLICACIÓN (*) ───────────────────┐");
console.log("│ Multiplica dos valores                  │");
console.log("└─────────────────────────────────────────┘");
console.log(`${a} * ${b} =`, a * b); // 60
console.log(`7 * 8 =`, 7 * 8); // 56
console.log(`-3 * 4 =`, -3 * 4); // -12
console.log();

// DIVISIÓN (/)
console.log("┌─ DIVISIÓN (/) ─────────────────────────┐");
console.log("│ Divide el primer valor por el segundo   │");
console.log("└─────────────────────────────────────────┘");
console.log(`${a} / ${b} =`, a / b); // 3.75
console.log(`20 / 4 =`, 20 / 4); // 5
console.log(`10 / 3 =`, 10 / 3); // 3.333...
console.log(`7 / 2 =`, 7 / 2); // 3.5 (JavaScript NO tiene división entera automática)
console.log();

// MÓDULO/RESTO (%)
console.log("┌─ MÓDULO/RESTO (%) ─────────────────────┐");
console.log("│ Devuelve el resto de la división        │");
console.log("└─────────────────────────────────────────┘");
console.log(`${a} % ${b} =`, a % b); // 3 (15 ÷ 4 = 3 con resto 3)
console.log(`10 % 3 =`, 10 % 3); // 1 (10 ÷ 3 = 3 con resto 1)
console.log(`20 % 5 =`, 20 % 5); // 0 (división exacta)
console.log(`17 % 4 =`, 17 % 4); // 1
console.log(`-10 % 3 =`, -10 % 3); // -1 (el signo viene del dividendo)
console.log();

// POTENCIA/EXPONENCIACIÓN (**)
console.log("┌─ POTENCIA (**) ────────────────────────┐");
console.log("│ Eleva el primer valor a la potencia     │");
console.log("│ del segundo (ES2016+)                   │");
console.log("└─────────────────────────────────────────┘");
console.log(`${b} ** 2 =`, b ** 2); // 16 (4²)
console.log(`2 ** 3 =`, 2 ** 3); // 8 (2³)
console.log(`5 ** 0 =`, 5 ** 0); // 1 (cualquier número elevado a 0 es 1)
console.log(`2 ** -1 =`, 2 ** -1); // 0.5 (potencias negativas)
console.log(`9 ** 0.5 =`, 9 ** 0.5); // 3 (raíz cuadrada)
console.log(`27 ** (1/3) =`, 27 ** (1 / 3)); // 3 (raíz cúbica)
console.log();

//==============================================================================
// 2. INCREMENTO Y DECREMENTO (++ y --)
//==============================================================================

console.log("\n═══ 2. INCREMENTO Y DECREMENTO ═══\n");

console.log("┌─ PRE-INCREMENTO (++variable) ──────────┐");
console.log("│ Incrementa PRIMERO, luego devuelve     │");
console.log("└─────────────────────────────────────────┘");
let x = 5;
console.log("Valor inicial de x:", x); // 5
console.log("Expresión ++x:", ++x); // 6 (incrementa a 6 y devuelve 6)
console.log("Valor actual de x:", x); // 6
console.log();

console.log("┌─ POST-INCREMENTO (variable++) ─────────┐");
console.log("│ Devuelve PRIMERO, luego incrementa     │");
console.log("└─────────────────────────────────────────┘");
let y = 5;
console.log("Valor inicial de y:", y); // 5
console.log("Expresión y++:", y++); // 5 (devuelve 5 y luego incrementa)
console.log("Valor actual de y:", y); // 6
console.log();

console.log("┌─ PRE-DECREMENTO (--variable) ──────────┐");
console.log("│ Decrementa PRIMERO, luego devuelve     │");
console.log("└─────────────────────────────────────────┘");
let m = 8;
console.log("Valor inicial de m:", m); // 8
console.log("Expresión --m:", --m); // 7 (decrementa a 7 y devuelve 7)
console.log("Valor actual de m:", m); // 7
console.log();

console.log("┌─ POST-DECREMENTO (variable--) ─────────┐");
console.log("│ Devuelve PRIMERO, luego decrementa     │");
console.log("└─────────────────────────────────────────┘");
let n = 8;
console.log("Valor inicial de n:", n); // 8
console.log("Expresión n--:", n--); // 8 (devuelve 8 y luego decrementa)
console.log("Valor actual de n:", n); // 7
console.log();

// COMPARACIÓN DIRECTA PRE vs POST
console.log("┌─ COMPARACIÓN PRE vs POST ──────────────┐");
console.log("│ Diferencia en asignaciones             │");
console.log("└─────────────────────────────────────────┘");

let contador = 10;
let resultado1 = contador++; // POST: resultado1 = 10, contador = 11
console.log("POST-INCREMENTO:");
console.log("  let resultado1 = contador++ // contador era 10");
console.log("  resultado1:", resultado1); // 10
console.log("  contador:", contador); // 11
console.log();

contador = 10; // Reset
let resultado2 = ++contador; // PRE: contador = 11, resultado2 = 11
console.log("PRE-INCREMENTO:");
console.log("  let resultado2 = ++contador // contador era 10");
console.log("  resultado2:", resultado2); // 11
console.log("  contador:", contador); // 11
console.log();

// EJEMPLOS EN BUCLES
console.log("┌─ USO EN BUCLES ────────────────────────┐");
console.log("│ Comportamiento en iteraciones          │");
console.log("└─────────────────────────────────────────┘");

console.log("for (let i = 0; i < 3; i++):");
for (let i = 0; i < 3; i++) {
  console.log(`  Iteración ${i}`);
}

console.log("\nUsando ++i (equivalente en este caso):");
for (let i = 0; i < 3; ++i) {
  console.log(`  Iteración ${i}`);
}
console.log();

// CASOS COMPLEJOS
console.log("┌─ CASOS COMPLEJOS ──────────────────────┐");
let val = 5;
console.log("val inicial:", val); // 5
console.log("val++ + ++val:", val++ + ++val); // 5 + 7 = 12
// Explicación: val++ devuelve 5 (val pasa a 6), ++val incrementa a 7 y devuelve 7
console.log("val final:", val); // 7
console.log();

//==============================================================================
// 3. OPERADORES DE ASIGNACIÓN COMPUESTA
//==============================================================================

console.log("\n═══ 3. OPERADORES DE ASIGNACIÓN COMPUESTA ═══\n");

console.log("┌─ SUMA Y ASIGNA (+=) ───────────────────┐");
let num = 10;
console.log("num inicial:", num); // 10
num += 5; // Equivale a: num = num + 5
console.log("num += 5:", num); // 15
console.log("Equivale a: num = num + 5");
console.log();

console.log("┌─ RESTA Y ASIGNA (-=) ──────────────────┐");
num = 20;
console.log("num inicial:", num); // 20
num -= 7; // Equivale a: num = num - 7
console.log("num -= 7:", num); // 13
console.log();

console.log("┌─ MULTIPLICA Y ASIGNA (*=) ─────────────┐");
num = 4;
console.log("num inicial:", num); // 4
num *= 3; // Equivale a: num = num * 3
console.log("num *= 3:", num); // 12
console.log();

console.log("┌─ DIVIDE Y ASIGNA (/=) ─────────────────┐");
num = 50;
console.log("num inicial:", num); // 50
num /= 5; // Equivale a: num = num / 5
console.log("num /= 5:", num); // 10
console.log();

console.log("┌─ MÓDULO Y ASIGNA (%=) ─────────────────┐");
num = 17;
console.log("num inicial:", num); // 17
num %= 5; // Equivale a: num = num % 5
console.log("num %= 5:", num); // 2
console.log();

console.log("┌─ POTENCIA Y ASIGNA (**=) ──────────────┐");
num = 2;
console.log("num inicial:", num); // 2
num **= 4; // Equivale a: num = num ** 4
console.log("num **= 4:", num); // 16
console.log();

console.log("┌─ ENCADENAMIENTO ───────────────────────┐");
let p2 = 10,
  q2 = 20,
  r = 30;
console.log("Valores iniciales - p2:", p2, "q2:", q2, "r:", r);
p2 += q2 += r; // Se evalúa de derecha a izquierda
console.log("p2 += q2 += r:");
console.log("  r:", r); // 30 (sin cambios)
console.log("  q2:", q2); // 50 (q = q + r = 20 + 30)
console.log("  p2:", p2); // 60 (p2 = p + q2 = 10 + 50)
console.log();

//==============================================================================
// 4. OPERADORES UNARIOS
//==============================================================================

console.log("\n═══ 4. OPERADORES UNARIOS ═══\n");

console.log("┌─ UNARIO + (conversión a número) ──────┐");
console.log("+'42':", +"42"); // 42
console.log("+'3.14':", +"3.14"); // 3.14
console.log("+'abc':", +"abc"); // NaN
console.log("+true:", +true); // 1
console.log("+false:", +false); // 0
console.log("+null:", +null); // 0
console.log("+undefined:", +undefined); // NaN
console.log("+'  123  ':", +"  123  "); // 123 (elimina espacios)
console.log();

console.log("┌─ UNARIO - (negación) ──────────────────┐");
console.log("-10:", -10); // -10
console.log("-(-5):", -(-5)); // 5
console.log("-'42':", -"42"); // -42 (convierte y niega)
console.log("-true:", -true); // -1
console.log();

//==============================================================================
// 5. ORDEN DE PRECEDENCIA DE OPERADORES
//==============================================================================

console.log("\n═══ 5. ORDEN DE PRECEDENCIA ═══\n");

console.log("┌─ TABLA DE PRECEDENCIA ─────────────────┐");
console.log("│ 1. Paréntesis ()                        │");
console.log("│ 2. Incremento/Decremento ++ --          │");
console.log("│ 3. Unarios + - (signo)                  │");
console.log("│ 4. Potencia **                          │");
console.log("│ 5. Multiplicación * / %                 │");
console.log("│ 6. Suma/Resta + -                       │");
console.log("│ 7. Asignación = += -= *= /= %= **=     │");
console.log("└─────────────────────────────────────────┘");
console.log();

console.log("EJEMPLOS DE PRECEDENCIA:\n");

console.log("2 + 3 * 4 =", 2 + 3 * 4); // 14 (no 20)
console.log("  Explicación: 3 * 4 = 12, luego 2 + 12 = 14\n");

console.log("(2 + 3) * 4 =", (2 + 3) * 4); // 20
console.log("  Explicación: paréntesis primero, 2 + 3 = 5, luego 5 * 4 = 20\n");

console.log("2 ** 3 ** 2 =", 2 ** (3 ** 2)); // 512 (no 64)
console.log(
  "  Explicación: ** es asociativo a la derecha: 2 ** (3 ** 2) = 2 ** 9 = 512\n"
);

console.log("10 + 5 * 2 - 8 / 4 =", 10 + 5 * 2 - 8 / 4); // 18
console.log("  Explicación: 5*2=10, 8/4=2, entonces 10+10-2=18\n");

console.log("3 + 4 * 2 / ( 1 - 5 ) ** 2 =", 3 + (4 * 2) / (1 - 5) ** 2); // 3.5
console.log("  Explicación paso a paso:");
console.log("    1. (1 - 5) = -4");
console.log("    2. -4 ** 2 = 16");
console.log("    3. 4 * 2 = 8");
console.log("    4. 8 / 16 = 0.5");
console.log("    5. 3 + 0.5 = 3.5\n");

console.log("10 - 2 - 3 =", 10 - 2 - 3); // 5 (no 11)
console.log(
  "  Explicación: asociatividad izquierda: (10 - 2) - 3 = 8 - 3 = 5\n"
);

// console.log("-3 ** 2 =", -3 ** 2); // ❌ ERROR de sintaxis
console.log("  Explicación: -3 ** 2 da ERROR de sintaxis en JavaScript");
console.log("  El operador ** requiere paréntesis con números negativos");
console.log("✅ -(3 ** 2) =", -(3 ** 2)); // -9
console.log("✅ (-3) ** 2 =", (-3) ** 2); // 9 (con paréntesis)\n");

//==============================================================================
// 6. CASOS ESPECIALES Y VALORES ESPECIALES
//==============================================================================

console.log("\n═══ 6. CASOS ESPECIALES ═══\n");

console.log("┌─ DIVISIÓN POR CERO ────────────────────┐");
console.log("10 / 0 =", 10 / 0); // Infinity
console.log("-10 / 0 =", -10 / 0); // -Infinity
console.log("0 / 0 =", 0 / 0); // NaN
console.log("Infinity / Infinity =", Infinity / Infinity); // NaN
console.log();

console.log("┌─ OPERACIONES CON INFINITY ─────────────┐");
console.log("Infinity + 1 =", Infinity + 1); // Infinity
console.log("Infinity + Infinity =", Infinity + Infinity); // Infinity
console.log("Infinity - Infinity =", Infinity - Infinity); // NaN
console.log("Infinity * 2 =", Infinity * 2); // Infinity
console.log("Infinity * -1 =", Infinity * -1); // -Infinity
console.log("Infinity * 0 =", Infinity * 0); // NaN
console.log("1 / Infinity =", 1 / Infinity); // 0
console.log("-Infinity + Infinity =", -Infinity + Infinity); // NaN
console.log();

console.log("┌─ OPERACIONES CON NaN ──────────────────┐");
console.log("NaN + 5 =", NaN + 5); // NaN
console.log("NaN * 10 =", NaN * 10); // NaN
console.log("NaN / 2 =", NaN / 2); // NaN
console.log("NaN ** 0 =", NaN ** 0); // 1 (excepción)
console.log("0 ** 0 =", 0 ** 0); // 1 (por convención en JS)
console.log("NaN === NaN:", NaN === NaN); // false (NaN no es igual a sí mismo)
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true (más confiable)
console.log();

console.log("┌─ NÚMEROS NEGATIVOS ────────────────────┐");
console.log("-5 + 3 =", -5 + 3); // -2
console.log("-5 * -3 =", -5 * -3); // 15
console.log("-5 * 3 =", -5 * 3); // -15
console.log("-10 / -2 =", -10 / -2); // 5
console.log("-10 % 3 =", -10 % 3); // -1 (signo del dividendo)
console.log("10 % -3 =", 10 % -3); // 1
console.log("-10 % -3 =", -10 % -3); // -1
console.log();

console.log("┌─ NÚMEROS MUY GRANDES/PEQUEÑOS ─────────┐");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 2^53 - 1
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("1e308 * 2 =", 1e308 * 2); // Infinity (overflow)
console.log("1e-400 =", 1e-400); // 0 (underflow)
console.log();

//==============================================================================
// 7. COERCIÓN DE TIPOS (TYPE COERCION)
//==============================================================================

console.log("\n═══ 7. COERCIÓN DE TIPOS ═══\n");

console.log("┌─ OPERADOR + CON STRINGS ───────────────┐");
console.log("│ + concatena si hay un string            │");
console.log("└─────────────────────────────────────────┘");
console.log("5 + '5' =", 5 + "5"); // "55" (concatenación)
console.log("'5' + 5 =", "5" + 5); // "55"
console.log("'Hola' + 5 =", "Hola" + 5); // "Hola5"
console.log("5 + 3 + '2' =", 5 + 3 + "2"); // "82" (5+3=8, luego "8"+"2"="82")
console.log("'2' + 5 + 3 =", "2" + 5 + 3); // "253" ("2"+"5"="25", "25"+"3"="253")
console.log("'5' + null =", "5" + null); // "5null"
console.log("'5' + undefined =", "5" + undefined); // "5undefined"
console.log();

console.log("┌─ OTROS OPERADORES CON STRINGS ─────────┐");
console.log("│ - * / % ** convierten a número          │");
console.log("└─────────────────────────────────────────┘");
console.log("'10' - '3' =", "10" - "3"); // 7
console.log("'5' * '2' =", "5" * "2"); // 10
console.log("'20' / '4' =", "20" / "4"); // 5
console.log("'17' % '5' =", "17" % "5"); // 2
console.log("'2' ** '3' =", "2" ** "3"); // 8
console.log("'10' - 3 =", "10" - 3); // 7
console.log("'abc' - 5 =", "abc" - 5); // NaN (no se puede convertir)
console.log();

console.log("┌─ OPERACIONES CON BOOLEAN ──────────────┐");
console.log("true + true =", true + true); // 2 (true = 1)
console.log("true + false =", true + false); // 1
console.log("true * 10 =", true * 10); // 10
console.log("false * 10 =", false * 10); // 0
console.log("5 + true =", 5 + true); // 6
console.log("5 - true =", 5 - true); // 4
console.log();

console.log("┌─ OPERACIONES CON NULL Y UNDEFINED ─────┐");
console.log("null + 5 =", null + 5); // 5 (null = 0)
console.log("null * 10 =", null * 10); // 0
console.log("undefined + 5 =", undefined + 5); // NaN
console.log("undefined * 10 =", undefined * 10); // NaN
console.log("null + undefined =", null + undefined); // NaN
console.log();

console.log("┌─ CONVERSIÓN EXPLÍCITA ─────────────────┐");
console.log("Number('42') =", Number("42")); // 42
console.log("Number('3.14') =", Number("3.14")); // 3.14
console.log("Number('abc') =", Number("abc")); // NaN
console.log("Number('') =", Number("")); // 0
console.log("Number('  ') =", Number("  ")); // 0
console.log("parseInt('42') =", parseInt("42")); // 42
console.log("parseInt('42.7') =", parseInt("42.7")); // 42 (trunca)
console.log("parseInt('42abc') =", parseInt("42abc")); // 42 (para en el primer no-dígito)
console.log("parseFloat('42.7') =", parseFloat("42.7")); // 42.7
console.log("parseFloat('3.14abc') =", parseFloat("3.14abc")); // 3.14
console.log();

//==============================================================================
// 8. OBJETO MATH - FUNCIONES MATEMÁTICAS
//==============================================================================

console.log("\n═══ 8. OBJETO MATH ═══\n");

console.log("┌─ CONSTANTES ───────────────────────────┐");
console.log("Math.PI =", Math.PI); // 3.141592653589793
console.log("Math.E =", Math.E); // 2.718281828459045 (número de Euler)
console.log("Math.LN2 =", Math.LN2); // ln(2)
console.log("Math.LN10 =", Math.LN10); // ln(10)
console.log("Math.LOG2E =", Math.LOG2E); // log₂(e)
console.log("Math.LOG10E =", Math.LOG10E); // log₁₀(e)
console.log("Math.SQRT2 =", Math.SQRT2); // √2
console.log("Math.SQRT1_2 =", Math.SQRT1_2); // √(1/2)
console.log();

console.log("┌─ REDONDEO ─────────────────────────────┐");
console.log("Math.round(4.7) =", Math.round(4.7)); // 5 (redondeo estándar)
console.log("Math.round(4.4) =", Math.round(4.4)); // 4
console.log("Math.round(4.5) =", Math.round(4.5)); // 5
console.log("Math.round(-4.5) =", Math.round(-4.5)); // -4
console.log("Math.floor(4.7) =", Math.floor(4.7)); // 4 (hacia abajo)
console.log("Math.floor(-4.3) =", Math.floor(-4.3)); // -5
console.log("Math.ceil(4.1) =", Math.ceil(4.1)); // 5 (hacia arriba)
console.log("Math.ceil(-4.7) =", Math.ceil(-4.7)); // -4
console.log("Math.trunc(4.7) =", Math.trunc(4.7)); // 4 (elimina decimales)
console.log("Math.trunc(-4.7) =", Math.trunc(-4.7)); // -4
console.log();

console.log("┌─ VALOR ABSOLUTO ───────────────────────┐");
console.log("Math.abs(-5) =", Math.abs(-5)); // 5
console.log("Math.abs(5) =", Math.abs(5)); // 5
console.log("Math.abs('-10') =", Math.abs("-10")); // 10 (convierte a número)
console.log();

console.log("┌─ POTENCIA Y RAÍCES ────────────────────┐");
console.log("Math.pow(2, 3) =", Math.pow(2, 3)); // 8 (2³)
console.log("Math.pow(5, 2) =", Math.pow(5, 2)); // 25
console.log("Math.sqrt(16) =", Math.sqrt(16)); // 4 (√16)
console.log("Math.sqrt(2) =", Math.sqrt(2)); // 1.414...
console.log("Math.cbrt(27) =", Math.cbrt(27)); // 3 (∛27)
console.log("Math.cbrt(8) =", Math.cbrt(8)); // 2
console.log();

console.log("┌─ MÍNIMO Y MÁXIMO ──────────────────────┐");
console.log("Math.min(5, 2, 9, 1) =", Math.min(5, 2, 9, 1)); // 1
console.log("Math.max(5, 2, 9, 1) =", Math.max(5, 2, 9, 1)); // 9
console.log("Math.min() =", Math.min()); // Infinity
console.log("Math.max() =", Math.max()); // -Infinity
console.log();

console.log("┌─ SIGNO ────────────────────────────────┐");
console.log("Math.sign(5) =", Math.sign(5)); // 1 (positivo)
console.log("Math.sign(-5) =", Math.sign(-5)); // -1 (negativo)
console.log("Math.sign(0) =", Math.sign(0)); // 0
console.log("Math.sign(-0) =", Math.sign(-0)); // -0
console.log("Math.sign(NaN) =", Math.sign(NaN)); // NaN
console.log();

console.log("┌─ FUNCIONES TRIGONOMÉTRICAS ────────────┐");
console.log("Math.sin(Math.PI / 2) =", Math.sin(Math.PI / 2)); // 1
console.log("Math.cos(0) =", Math.cos(0)); // 1
console.log("Math.tan(Math.PI / 4) =", Math.tan(Math.PI / 4)); // 1
console.log("Math.asin(1) =", Math.asin(1)); // π/2
console.log("Math.acos(1) =", Math.acos(1)); // 0
console.log("Math.atan(1) =", Math.atan(1)); // π/4
console.log();

console.log("┌─ LOGARITMOS ───────────────────────────┐");
console.log("Math.log(Math.E) =", Math.log(Math.E)); // 1 (logaritmo natural)
console.log("Math.log10(100) =", Math.log10(100)); // 2
console.log("Math.log2(8) =", Math.log2(8)); // 3
console.log("Math.exp(1) =", Math.exp(1)); // e¹ = e
console.log();

console.log("┌─ NÚMEROS ALEATORIOS ───────────────────┐");
console.log("Math.random() =", Math.random()); // Entre 0 (inclusivo) y 1 (exclusivo)
console.log("Math.random() =", Math.random()); // Diferente cada vez
console.log();

//==============================================================================
// 9. CASOS DE USO PRÁCTICOS
//==============================================================================

console.log("\n═══ 9. CASOS DE USO PRÁCTICOS ═══\n");

console.log("┌─ VERIFICAR PAR/IMPAR ──────────────────┐");
function esPar(numero) {
  return numero % 2 === 0;
}
console.log("¿8 es par?", esPar(8)); // true
console.log("¿7 es par?", esPar(7)); // false
console.log("¿0 es par?", esPar(0)); // true
console.log("¿-4 es par?", esPar(-4)); // true
console.log();

console.log("┌─ VERIFICAR MÚLTIPLO ───────────────────┐");
function esMultiploDe(numero, divisor) {
  return numero % divisor === 0;
}
console.log("¿15 es múltiplo de 3?", esMultiploDe(15, 3)); // true
console.log("¿15 es múltiplo de 4?", esMultiploDe(15, 4)); // false
console.log("¿100 es múltiplo de 10?", esMultiploDe(100, 10)); // true
console.log();

console.log("┌─ OBTENER ÚLTIMO DÍGITO ────────────────┐");
function ultimoDigito(numero) {
  return Math.abs(numero) % 10;
}
console.log("Último dígito de 12345:", ultimoDigito(12345)); // 5
console.log("Último dígito de 9876:", ultimoDigito(9876)); // 6
console.log("Último dígito de -789:", ultimoDigito(-789)); // 9
console.log();

console.log("┌─ OBTENER TODOS LOS DÍGITOS ────────────┐");
function obtenerDigitos(numero) {
  return Math.abs(numero).toString().split("").map(Number);
}
console.log("Dígitos de 12345:", obtenerDigitos(12345)); // [1, 2, 3, 4, 5]
console.log("Dígitos de -987:", obtenerDigitos(-987)); // [9, 8, 7]
console.log();

console.log("┌─ CALCULAR PROMEDIO ────────────────────┐");
function calcularPromedio(numeros) {
  if (numeros.length === 0) return 0;
  let suma = 0;
  for (const num of numeros) {
    suma += num;
  }
  return suma / numeros.length;
}
console.log("Promedio de [8, 7, 9, 10]:", calcularPromedio([8, 7, 9, 10])); // 8.5
console.log("Promedio de [5, 5, 5, 5]:", calcularPromedio([5, 5, 5, 5])); // 5
console.log();

console.log("┌─ REDONDEAR A N DECIMALES ──────────────┐");
function redondear(numero, decimales) {
  const multiplicador = 10 ** decimales;
  return Math.round(numero * multiplicador) / multiplicador;
}
console.log("Redondear 3.14159 a 2 decimales:", redondear(3.14159, 2)); // 3.14
console.log("Redondear 2.71828 a 3 decimales:", redondear(2.71828, 3)); // 2.718
console.log("Redondear 9.99999 a 1 decimal:", redondear(9.99999, 1)); // 10
console.log();

console.log("┌─ APLICAR DESCUENTO ────────────────────┐");
function aplicarDescuento(precio, porcentaje) {
  const descuento = precio * (porcentaje / 100);
  return precio - descuento;
}
console.log("$100 con 20% descuento:", aplicarDescuento(100, 20)); // 80
console.log("$50 con 15% descuento:", aplicarDescuento(50, 15)); // 42.5
console.log("$200 con 50% descuento:", aplicarDescuento(200, 50)); // 100
console.log();

console.log("┌─ CALCULAR IVA ─────────────────────────┐");
function calcularConIVA(precio, porcentajeIVA = 21) {
  return precio + (precio * porcentajeIVA) / 100;
}
console.log("$100 con 21% IVA:", calcularConIVA(100)); // 121
console.log("$50 con 10% IVA:", calcularConIVA(50, 10)); // 55
console.log();

console.log("┌─ ALTERNAR VALORES (TOGGLE) ────────────┐");
let estado = 0;
console.log("Estado inicial:", estado); // 0
estado = 1 - estado;
console.log("Después de alternar:", estado); // 1
estado = 1 - estado;
console.log("Después de alternar otra vez:", estado); // 0
console.log();

console.log("┌─ NÚMERO ALEATORIO EN RANGO ────────────┐");
function randomEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Aleatorio entre 1 y 10:", randomEntre(1, 10));
console.log("Aleatorio entre 50 y 100:", randomEntre(50, 100));
console.log("Aleatorio entre -5 y 5:", randomEntre(-5, 5));
console.log();

console.log("┌─ CALCULAR FACTORIAL ───────────────────┐");
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
console.log("5! =", factorial(5)); // 120
console.log("0! =", factorial(0)); // 1
console.log("10! =", factorial(10)); // 3628800
console.log();

console.log("┌─ CONVERTIR GRADOS ─────────────────────┐");
function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function fahrenheitACelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log("25°C =", celsiusAFahrenheit(25), "°F"); // 77
console.log("77°F =", fahrenheitACelsius(77), "°C"); // 25
console.log();

console.log("┌─ CALCULAR DISTANCIA ───────────────────┐");
function distancia(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
console.log("Distancia entre (0,0) y (3,4):", distancia(0, 0, 3, 4)); // 5
console.log("Distancia entre (1,1) y (4,5):", distancia(1, 1, 4, 5)); // 5
console.log();

console.log("┌─ CALCULAR ÁREA DE CÍRCULO ─────────────┐");
function areaCirculo(radio) {
  return Math.PI * radio ** 2;
}
console.log("Área de círculo con radio 5:", areaCirculo(5).toFixed(2)); // 78.54
console.log("Área de círculo con radio 10:", areaCirculo(10).toFixed(2)); // 314.16
console.log();

console.log("┌─ CALCULAR INTERÉS COMPUESTO ───────────┐");
function interesCompuesto(capital, tasa, tiempo) {
  return capital * (1 + tasa / 100) ** tiempo;
}
console.log(
  "$1000 al 5% anual durante 3 años:",
  interesCompuesto(1000, 5, 3).toFixed(2)
); // 1157.63
console.log();

console.log("┌─ DIVIDIR ENTERO (COMO OTROS LENGUAJES) ┐");
function divisionEntera(dividendo, divisor) {
  return Math.floor(dividendo / divisor);
}
console.log("7 ÷ 2 (entero) =", divisionEntera(7, 2)); // 3
console.log("15 ÷ 4 (entero) =", divisionEntera(15, 4)); // 3
console.log();

console.log("┌─ SWAP DE VARIABLES SIN TEMPORAL ───────┐");
let p = 5,
  q = 10;
console.log("Antes: p =", p, ", q =", q);
p = p + q; // p = 15
q = p - q; // q = 5
p = p - q; // p = 10
console.log("Después: p =", p, ", q =", q);
console.log();

console.log("┌─ CALCULAR EDAD ────────────────────────┐");
function calcularEdad(anioNacimiento) {
  return new Date().getFullYear() - anioNacimiento;
}
console.log("Edad si naciste en 1990:", calcularEdad(1990));
console.log("Edad si naciste en 2000:", calcularEdad(2000));
console.log();

console.log("┌─ SABER SI ES AÑO BISIESTO ─────────────┐");
function esAnioBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}
console.log("¿2024 es bisiesto?", esAnioBisiesto(2024)); // true
console.log("¿2023 es bisiesto?", esAnioBisiesto(2023)); // false
console.log("¿2000 es bisiesto?", esAnioBisiesto(2000)); // true
console.log("¿1900 es bisiesto?", esAnioBisiesto(1900)); // false
console.log();

console.log("┌─ INVERTIR UN NÚMERO ───────────────────┐");
function invertirNumero(num) {
  return (
    parseInt(Math.abs(num).toString().split("").reverse().join("")) *
    Math.sign(num)
  );
}
console.log("Invertir 12345:", invertirNumero(12345)); // 54321
console.log("Invertir -987:", invertirNumero(-987)); // -789
console.log();

console.log("┌─ SUMAR DÍGITOS ────────────────────────┐");
function sumarDigitos(num) {
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log("Suma de dígitos de 123:", sumarDigitos(123)); // 6
console.log("Suma de dígitos de 9876:", sumarDigitos(9876)); // 30
console.log();

console.log("┌─ GENERAR NÚMERO DE N DÍGITOS ──────────┐");
function randomNDigitos(n) {
  const min = 10 ** (n - 1);
  const max = 10 ** n - 1;
  return randomEntre(min, max);
}
console.log("Número aleatorio de 3 dígitos:", randomNDigitos(3)); // 100-999
console.log("Número aleatorio de 5 dígitos:", randomNDigitos(5)); // 10000-99999
console.log();

//==============================================================================
// 10. ERRORES COMUNES Y MEJORES PRÁCTICAS
//==============================================================================

console.log("\n═══ 10. ERRORES COMUNES Y MEJORES PRÁCTICAS ═══\n");

console.log("┌─ ERROR: Confundir pre y post incremento ┐");
let cont1 = 5;
let val1 = cont1++; // Valor antes del incremento
console.log("❌ let val1 = cont1++ // cont1 era 5");
console.log("   val1:", val1, "cont1:", cont1); // val1: 5, cont1: 6

cont1 = 5;
let val2 = ++cont1; // Valor después del incremento
console.log("✅ let val2 = ++cont1 // cont1 era 5");
console.log("   val2:", val2, "cont1:", cont1); // val2: 6, cont1: 6
console.log();

console.log("┌─ ERROR: División entera ───────────────┐");
console.log("❌ 7 / 2 =", 7 / 2); // 3.5 (no es entero)
console.log("✅ Math.floor(7 / 2) =", Math.floor(7 / 2)); // 3
console.log("✅ Math.trunc(7 / 2) =", Math.trunc(7 / 2)); // 3
console.log("✅ ~~(7 / 2) =", ~~(7 / 2)); // 3 (operador bitwise)
console.log("✅ (7 / 2) | 0 =", (7 / 2) | 0); // 3 (operador bitwise)
console.log();

console.log("┌─ ERROR: Concatenación no deseada ──────┐");
let precio = 100;
let desc = "20";
console.log("❌ precio + desc =", precio + desc); // "10020"
console.log("✅ precio + Number(desc) =", precio + Number(desc)); // 120
console.log("✅ precio + +desc =", precio + +desc); // 120 (unario +)
console.log("✅ precio + parseInt(desc) =", precio + parseInt(desc)); // 120
console.log();

console.log("┌─ ERROR: Comparar con NaN ──────────────┐");
let valor = 0 / 0; // NaN
console.log("❌ valor === NaN:", valor === NaN); // false (siempre)
console.log("❌ valor == NaN:", valor == NaN); // false (siempre)
console.log("✅ isNaN(valor):", isNaN(valor)); // true
console.log("✅ Number.isNaN(valor):", Number.isNaN(valor)); // true (preferido)
console.log();

console.log("┌─ ERROR: Módulo con negativos ──────────┐");
console.log("❌ -10 % 3 =", -10 % 3); // -1 (no 2)
console.log("Explicación: el signo es del dividendo");
console.log("✅ Para módulo siempre positivo:");
console.log("   ((n % m) + m) % m");
console.log("   ((-10 % 3) + 3) % 3 =", ((-10 % 3) + 3) % 3); // 2
console.log();

console.log("┌─ ERROR: Precisión de decimales ────────┐");
console.log("❌ 0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004
console.log("✅ (0.1 + 0.2).toFixed(1) =", (0.1 + 0.2).toFixed(1)); // "0.3"
console.log(
  "✅ Math.round((0.1 + 0.2) * 10) / 10 =",
  Math.round((0.1 + 0.2) * 10) / 10
); // 0.3
console.log();

console.log("┌─ ERROR: Potencia vs multiplicación ────┐");
console.log("❌ 2 * 3 =", 2 * 3); // 6 (multiplicación)
console.log("✅ 2 ** 3 =", 2 ** 3); // 8 (potencia)
console.log("✅ Math.pow(2, 3) =", Math.pow(2, 3)); // 8
console.log();

console.log("┌─ ERROR: Orden de operaciones ──────────┐");
console.log("❌ 2 + 3 * 4 =", 2 + 3 * 4); // 14 (no 20)
console.log("✅ (2 + 3) * 4 =", (2 + 3) * 4); // 20
console.log("Siempre usa paréntesis para claridad");
console.log();

console.log("┌─ ERROR: Modificar durante comparación ─┐");
let i = 5;
console.log("❌ Usar i++ en condiciones puede confundir:");
console.log("if (i++ < 6) // i ahora es 6, pero comparó con 5");
console.log("✅ Separar incremento de comparación");
console.log();

console.log("┌─ ERROR: División por cero sin validar ─┐");
function dividir(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }
  return a / b;
}
console.log("❌ 10 / 0 =", 10 / 0); // Infinity
console.log("✅ dividir(10, 0) =", dividir(10, 0)); // Error controlado
console.log("✅ dividir(10, 2) =", dividir(10, 2)); // 5
console.log();

console.log("┌─ MEJORES PRÁCTICAS ────────────────────┐");
console.log("│ 1. Usa const para valores que no cambian");
console.log("│ 2. Prefiere += sobre variable = variable +");
console.log("│ 3. Usa Math para operaciones complejas");
console.log("│ 4. Valida divisiones por cero");
console.log("│ 5. Ten cuidado con precisión de decimales");
console.log("│ 6. Usa paréntesis para claridad");
console.log("│ 7. Convierte tipos explícitamente");
console.log("│ 8. Evita operaciones con NaN");
console.log("│ 9. Usa Number.isNaN() en vez de isNaN()");
console.log("│ 10. Documenta cálculos complejos");
console.log("└─────────────────────────────────────────┘");
console.log();

//==============================================================================
// 11. TRUCOS Y TÉCNICAS AVANZADAS
//==============================================================================

console.log("\n═══ 11. TRUCOS Y TÉCNICAS AVANZADAS ═══\n");

console.log("┌─ CONVERSIÓN RÁPIDA A ENTERO ───────────┐");
let decimal = 4.9;
console.log("~~4.9 =", ~~decimal); // 4 (doble NOT bitwise)
console.log("4.9 | 0 =", decimal | 0); // 4 (OR bitwise con 0)
console.log("4.9 >> 0 =", decimal >> 0); // 4 (shift derecha por 0)
console.log();

console.log("┌─ COMPROBAR SI ES ENTERO ───────────────┐");
console.log("Number.isInteger(4) =", Number.isInteger(4)); // true
console.log("Number.isInteger(4.5) =", Number.isInteger(4.5)); // false
console.log("4 % 1 === 0:", 4 % 1 === 0); // true (es entero)
console.log("4.5 % 1 === 0:", 4.5 % 1 === 0); // false (no es entero)
console.log();

console.log("┌─ LÍMITAR NÚMERO EN RANGO ──────────────┐");
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
console.log("clamp(5, 0, 10) =", clamp(5, 0, 10)); // 5
console.log("clamp(-5, 0, 10) =", clamp(-5, 0, 10)); // 0
console.log("clamp(15, 0, 10) =", clamp(15, 0, 10)); // 10
console.log();

console.log("┌─ INTERPOLAR ENTRE DOS VALORES ─────────┐");
function lerp(a, b, t) {
  return a + (b - a) * t;
}
console.log("lerp(0, 100, 0.5) =", lerp(0, 100, 0.5)); // 50 (punto medio)
console.log("lerp(0, 100, 0.25) =", lerp(0, 100, 0.25)); // 25
console.log("lerp(0, 100, 0.75) =", lerp(0, 100, 0.75)); // 75
console.log();

console.log("┌─ NORMALIZAR VALOR A RANGO 0-1 ─────────┐");
function normalize(val, min, max) {
  return (val - min) / (max - min);
}
console.log("normalize(50, 0, 100) =", normalize(50, 0, 100)); // 0.5
console.log("normalize(25, 0, 100) =", normalize(25, 0, 100)); // 0.25
console.log();

console.log("┌─ MAPEAR DE UN RANGO A OTRO ────────────┐");
function map(val, inMin, inMax, outMin, outMax) {
  return ((val - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
console.log("map(5, 0, 10, 0, 100) =", map(5, 0, 10, 0, 100)); // 50
console.log("map(2, 0, 10, 100, 200) =", map(2, 0, 10, 100, 200)); // 120
console.log();

console.log("┌─ CALCULAR MEDIA GEOMÉTRICA ────────────┐");
function mediaGeometrica(numeros) {
  const producto = numeros.reduce((acc, val) => acc * val, 1);
  return producto ** (1 / numeros.length);
}
console.log("Media geométrica de [2, 8]:", mediaGeometrica([2, 8])); // 4
console.log("Media geométrica de [1, 2, 4, 8]:", mediaGeometrica([1, 2, 4, 8])); // 2.828...
console.log();

console.log("┌─ CALCULAR DESVIACIÓN ESTÁNDAR ─────────┐");
function desviacionEstandar(numeros) {
  const media = numeros.reduce((a, b) => a + b) / numeros.length;
  const varianza =
    numeros.reduce((sum, num) => sum + (num - media) ** 2, 0) / numeros.length;
  return Math.sqrt(varianza);
}
console.log(
  "Desv. estándar de [2, 4, 4, 4, 5, 5, 7, 9]:",
  desviacionEstandar([2, 4, 4, 4, 5, 5, 7, 9]).toFixed(2)
);
console.log();

console.log("┌─ REDONDEAR A MÚLTIPLO MÁS CERCANO ─────┐");
function redondearAMultiplo(num, multiplo) {
  return Math.round(num / multiplo) * multiplo;
}
console.log(
  "Redondear 23 al múltiplo de 5 más cercano:",
  redondearAMultiplo(23, 5)
); // 25
console.log(
  "Redondear 47 al múltiplo de 10 más cercano:",
  redondearAMultiplo(47, 10)
); // 50
console.log();

console.log("┌─ SUMAR SOLO NÚMEROS PARES ─────────────┐");
function sumaPares(numeros) {
  return numeros.filter((n) => n % 2 === 0).reduce((a, b) => a + b, 0);
}
console.log("Suma de pares en [1,2,3,4,5,6]:", sumaPares([1, 2, 3, 4, 5, 6])); // 12
console.log();

console.log("┌─ CALCULAR FIBONACCI ───────────────────┐");
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log("Fibonacci(10) =", fibonacci(10)); // 55
console.log("Fibonacci(15) =", fibonacci(15)); // 610
console.log();

//==============================================================================
// 12. RESUMEN FINAL
//==============================================================================

console.log("\n╔════════════════════════════════════════════════════════════╗");
console.log("║                    RESUMEN FINAL                           ║");
console.log("╚════════════════════════════════════════════════════════════╝\n");

const resumen = `
┌─────────────────────────────────────────────────────────────────┐
│ OPERADORES BÁSICOS                                              │
├─────────────────────────────────────────────────────────────────┤
│ +    Suma                       10 + 5 = 15                     │
│ -    Resta                      10 - 5 = 5                      │
│ *    Multiplicación             10 * 5 = 50                     │
│ /    División                   10 / 5 = 2                      │
│ %    Módulo (resto)             10 % 3 = 1                      │
│ **   Potencia                   2 ** 3 = 8                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ INCREMENTO/DECREMENTO                                           │
├─────────────────────────────────────────────────────────────────┤
│ ++var   Pre-incremento          Incrementa primero              │
│ var++   Post-incremento         Usa valor, luego incrementa     │
│ --var   Pre-decremento          Decrementa primero              │
│ var--   Post-decremento         Usa valor, luego decrementa     │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ ASIGNACIÓN COMPUESTA                                            │
├─────────────────────────────────────────────────────────────────┤
│ +=    x += 5   →   x = x + 5                                    │
│ -=    x -= 5   →   x = x - 5                                    │
│ *=    x *= 5   →   x = x * 5                                    │
│ /=    x /= 5   →   x = x / 5                                    │
│ %=    x %= 5   →   x = x % 5                                    │
│ **=   x **= 5  →   x = x ** 5                                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ PRECEDENCIA (de mayor a menor)                                  │
├─────────────────────────────────────────────────────────────────┤
│ 1. ( )          Paréntesis                                      │
│ 2. ++ --        Incremento/Decremento                           │
│ 3. + - (unario) Signo unario                                    │
│ 4. **           Potencia (asociativo a la derecha)              │
│ 5. * / %        Multiplicación, División, Módulo                │
│ 6. + -          Suma, Resta                                     │
│ 7. = += -= ...  Asignación                                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ VALORES ESPECIALES                                              │
├─────────────────────────────────────────────────────────────────┤
│ Infinity        Resultado de 1/0, overflow                      │
│ -Infinity       Resultado de -1/0                               │
│ NaN             Not a Number (0/0, "abc" * 5)                   │
│                 NaN === NaN es false                            │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ COERCIÓN DE TIPOS                                               │
├─────────────────────────────────────────────────────────────────┤
│ + con string    Concatena: 5 + "5" = "55"                       │
│ Otros ops       Convierte a número: "5" * 2 = 10                │
│ +unario         Convierte: +"42" = 42                           │
│ true/false      true = 1, false = 0                             │
│ null            null = 0 en operaciones                         │
│ undefined       undefined = NaN en operaciones                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ MATH - FUNCIONES MÁS USADAS                                     │
├─────────────────────────────────────────────────────────────────┤
│ Math.round()    Redondeo estándar                               │
│ Math.floor()    Redondeo hacia abajo                            │
│ Math.ceil()     Redondeo hacia arriba                           │
│ Math.trunc()    Elimina decimales                               │
│ Math.abs()      Valor absoluto                                  │
│ Math.pow()      Potencia (alternativa a **)                     │
│ Math.sqrt()     Raíz cuadrada                                   │
│ Math.cbrt()     Raíz cúbica                                     │
│ Math.min()      Valor mínimo                                    │
│ Math.max()      Valor máximo                                    │
│ Math.random()   Número aleatorio entre 0 y 1                    │
│ Math.PI         Constante π (3.14159...)                        │
│ Math.E          Constante e (2.71828...)                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ CASOS DE USO COMUNES                                            │
├─────────────────────────────────────────────────────────────────┤
│ Par/Impar         n % 2 === 0                                   │
│ Múltiplo          n % m === 0                                   │
│ Último dígito     n % 10                                        │
│ División entera   Math.floor(a / b)                             │
│ Redondear         Math.round(n * 100) / 100                     │
│ Rango aleatorio   Math.floor(Math.random() * (max-min+1)) + min│
│ Alternar 0/1      valor = 1 - valor                             │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ ERRORES COMUNES A EVITAR                                        │
├─────────────────────────────────────────────────────────────────┤
│ ❌ 0.1 + 0.2 === 0.3        (problemas de precisión)            │
│ ❌ NaN === NaN               (siempre false)                     │
│ ❌ "5" + 5 = 55              (concatenación, no suma)            │
│ ❌ 7 / 2 = 3                 (JavaScript no trunca automático)   │
│ ❌ -10 % 3 = -1              (no 2, signo del dividendo)         │
│                                                                 │
│ ✅ (0.1 + 0.2).toFixed(1)                                        │
│ ✅ Number.isNaN(value)                                           │
│ ✅ Number("5") + 5 o +"5" + 5                                    │
│ ✅ Math.floor(7 / 2)                                             │
│ ✅ ((n % m) + m) % m para módulo positivo                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ MEJORES PRÁCTICAS                                               │
├─────────────────────────────────────────────────────────────────┤
│ ✓ Usa const para valores constantes                            │
│ ✓ Prefiere += sobre x = x +                                    │
│ ✓ Usa paréntesis para claridad                                 │
│ ✓ Valida divisiones por cero                                   │
│ ✓ Convierte tipos explícitamente                               │
│ ✓ Usa Number.isNaN() en vez de isNaN()                         │
│ ✓ Ten cuidado con precisión de decimales                       │
│ ✓ Documenta cálculos complejos                                 │
│ ✓ Usa Math para operaciones matemáticas                        │
│ ✓ Separa lógica de incremento/decremento                       │
└─────────────────────────────────────────────────────────────────┘
`;

console.log(resumen);

console.log("\n╔════════════════════════════════════════════════════════════╗");
console.log("║              ¡FIN DE LA GUÍA COMPLETA!                     ║");
console.log("║                                                            ║");
console.log("║  Ahora conoces todos los operadores aritméticos de JS     ║");
console.log("║  Practica con ejercicios para dominarlos completamente    ║");
console.log("╚════════════════════════════════════════════════════════════╝\n");
