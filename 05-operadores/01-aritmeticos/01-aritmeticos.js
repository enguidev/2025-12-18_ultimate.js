//======================================
// OPERADORES ARITMÉTICOS EN JAVASCRIPT
// Guía completa con ejemplos
//======================================

//======================================
// 1. OPERADORES BÁSICOS
//======================================

console.log("=== 1. OPERADORES BÁSICOS ===\n");

let a = 10;
let b = 3;

// Suma (+)
console.log("Suma:", a + b); // 13

// Resta (-)
console.log("Resta:", a - b); // 7

// Multiplicación (*)
console.log("Multiplicación:", a * b); // 30

// División (/)
console.log("División:", a / b); // 3.3333...

// Módulo (%) - Resto de la división
console.log("Módulo:", a % b); // 1 (10 / 3 = 3 con resto 1)

// Potencia (**)
console.log("Potencia:", a ** b); // 1000 (10³)

console.log();

//======================================
// 2. INCREMENTO Y DECREMENTO
//======================================

console.log("=== 2. INCREMENTO Y DECREMENTO ===\n");

// PRE-INCREMENTO (++variable)
// Incrementa PRIMERO, luego usa el valor
let x = 5;
console.log("Valor inicial de x:", x); // 5
console.log("Pre-incremento ++x:", ++x); // 6 (incrementa y luego muestra)
console.log("Valor de x después:", x); // 6

console.log();

// POST-INCREMENTO (variable++)
// Usa el valor PRIMERO, luego incrementa
let y = 5;
console.log("Valor inicial de y:", y); // 5
console.log("Post-incremento y++:", y++); // 5 (muestra y luego incrementa)
console.log("Valor de y después:", y); // 6

console.log();

// PRE-DECREMENTO (--variable)
// Decrementa PRIMERO, luego usa el valor
let m = 5;
console.log("Valor inicial de m:", m); // 5
console.log("Pre-decremento --m:", --m); // 4 (decrementa y luego muestra)
console.log("Valor de m después:", m); // 4

console.log();

// POST-DECREMENTO (variable--)
// Usa el valor PRIMERO, luego decrementa
let n = 5;
console.log("Valor inicial de n:", n); // 5
console.log("Post-decremento n--:", n--); // 5 (muestra y luego decrementa)
console.log("Valor de n después:", n); // 4

console.log();

//======================================
// 3. DIFERENCIA PRE vs POST (Ejemplo detallado)
//======================================

console.log("=== 3. PRE vs POST - Ejemplo Detallado ===\n");

// Ejemplo con asignación
let contador = 10;

// Post-incremento en asignación
let resultado1 = contador++; // resultado1 = 10, contador = 11
console.log("Post-incremento:");
console.log("resultado1:", resultado1); // 10
console.log("contador:", contador); // 11

console.log();

contador = 10; // Reset

// Pre-incremento en asignación
let resultado2 = ++contador; // contador = 11, resultado2 = 11
console.log("Pre-incremento:");
console.log("resultado2:", resultado2); // 11
console.log("contador:", contador); // 11

console.log();

//======================================
// 4. OPERADORES DE ASIGNACIÓN COMPUESTA
//======================================

console.log("=== 4. OPERADORES DE ASIGNACIÓN COMPUESTA ===\n");

let num = 10;

// Suma y asigna (+=)
num += 5; // Equivale a: num = num + 5
console.log("num += 5:", num); // 15

// Resta y asigna (-=)
num -= 3; // Equivale a: num = num - 3
console.log("num -= 3:", num); // 12

// Multiplica y asigna (*=)
num *= 2; // Equivale a: num = num * 2
console.log("num *= 2:", num); // 24

// Divide y asigna (/=)
num /= 4; // Equivale a: num = num / 4
console.log("num /= 4:", num); // 6

// Módulo y asigna (%=)
num %= 4; // Equivale a: num = num % 4
console.log("num %= 4:", num); // 2

// Potencia y asigna (**=)
num **= 3; // Equivale a: num = num ** 3
console.log("num **= 3:", num); // 8

console.log();

//======================================
// 5. ORDEN DE PRECEDENCIA
//======================================

console.log("=== 5. ORDEN DE PRECEDENCIA ===\n");

// Las operaciones se ejecutan en este orden:
// 1. Paréntesis ()
// 2. Potencia **
// 3. Multiplicación *, División /, Módulo %
// 4. Suma +, Resta -

let resultado = 2 + 3 * 4;
console.log("2 + 3 * 4 =", resultado); // 14 (no 20)

resultado = (2 + 3) * 4;
console.log("(2 + 3) * 4 =", resultado); // 20

resultado = 2 ** 3 + 4;
console.log("2 ** 3 + 4 =", resultado); // 12 (2³ = 8, luego 8 + 4)

resultado = 10 + 5 * 2 - 8 / 4;
console.log("10 + 5 * 2 - 8 / 4 =", resultado); // 18
// Explicación: 5*2=10, 8/4=2, entonces 10+10-2=18

console.log();

//======================================
// 6. CASOS ESPECIALES
//======================================

console.log("=== 6. CASOS ESPECIALES ===\n");

// División por cero
console.log("10 / 0 =", 10 / 0); // Infinity
console.log("-10 / 0 =", -10 / 0); // -Infinity
console.log("0 / 0 =", 0 / 0); // NaN (Not a Number)

console.log();

// Operaciones con strings (concatenación)
console.log("5 + '5' =", 5 + "5"); // "55" (concatenación)
console.log("5 - '3' =", 5 - "3"); // 2 (conversión a número)
console.log("5 * '2' =", 5 * "2"); // 10 (conversión a número)
console.log("10 / '2' =", 10 / "2"); // 5 (conversión a número)

console.log();

// Operaciones con NaN
console.log("5 + NaN =", 5 + NaN); // NaN
console.log("NaN * 10 =", NaN * 10); // NaN

console.log();

// Operaciones con Infinity
console.log("Infinity + 10 =", Infinity + 10); // Infinity
console.log("Infinity * 2 =", Infinity * 2); // Infinity
console.log("Infinity / Infinity =", Infinity / Infinity); // NaN

console.log();

//======================================
// 7. CONVERSIÓN DE TIPOS (Type Coercion)
//======================================

console.log("=== 7. CONVERSIÓN DE TIPOS ===\n");

// Conversión implícita
console.log("'5' * '2' =", "5" * "2"); // 10 (strings → números)
console.log("'10' - '3' =", "10" - "3"); // 7
console.log("'5' + 3 =", "5" + 3); // "53" (número → string)

console.log();

// Conversión explícita
console.log("Number('42') =", Number("42")); // 42
console.log("Number('abc') =", Number("abc")); // NaN
console.log("parseInt('42.7') =", parseInt("42.7")); // 42
console.log("parseFloat('42.7') =", parseFloat("42.7")); // 42.7

console.log();

// Operador unario +
console.log("+'42' =", +"42"); // 42 (convierte a número)
console.log("+true =", +true); // 1
console.log("+false =", +false); // 0
console.log("+null =", +null); // 0
console.log("+undefined =", +undefined); // NaN

console.log();

//======================================
// 8. CASOS DE USO PRÁCTICOS
//======================================

console.log("=== 8. CASOS DE USO PRÁCTICOS ===\n");

// Calcular promedio
function calcularPromedio(notas) {
  let suma = 0;
  for (const nota of notas) {
    suma += nota;
  }
  return suma / notas.length;
}

console.log("Promedio de [8, 7, 9, 10]:", calcularPromedio([8, 7, 9, 10]));

console.log();

// Verificar si es par o impar (módulo)
function esPar(numero) {
  return numero % 2 === 0;
}

console.log("¿8 es par?", esPar(8)); // true
console.log("¿7 es par?", esPar(7)); // false

console.log();

// Redondear a decimales específicos
function redondear(numero, decimales) {
  const multiplicador = 10 ** decimales;
  return Math.round(numero * multiplicador) / multiplicador;
}

console.log("Redondear 3.14159 a 2 decimales:", redondear(3.14159, 2));

console.log();

// Calcular descuento
function aplicarDescuento(precio, porcentaje) {
  const descuento = precio * (porcentaje / 100);
  return precio - descuento;
}

console.log("$100 con 20% descuento:", aplicarDescuento(100, 20));

console.log();

// Alternar entre 0 y 1 (útil para toggles)
let estado = 0;
console.log("Estado inicial:", estado);
estado = 1 - estado; // Cambia de 0 a 1
console.log("Después de alternar:", estado);
estado = 1 - estado; // Cambia de 1 a 0
console.log("Después de alternar otra vez:", estado);

console.log();

// Obtener último dígito
function ultimoDigito(numero) {
  return numero % 10;
}

console.log("Último dígito de 12345:", ultimoDigito(12345));

console.log();

// Verificar si es múltiplo de otro número
function esMultiploDe(numero, divisor) {
  return numero % divisor === 0;
}

console.log("¿15 es múltiplo de 3?", esMultiploDe(15, 3)); // true
console.log("¿15 es múltiplo de 4?", esMultiploDe(15, 4)); // false

console.log();

//======================================
// 9. MATH - FUNCIONES MATEMÁTICAS ÚTILES
//======================================

console.log("=== 9. OBJETO MATH ===\n");

// Constantes
console.log("Math.PI =", Math.PI); // 3.141592653589793
console.log("Math.E =", Math.E); // 2.718281828459045

console.log();

// Redondeo
console.log("Math.round(4.7) =", Math.round(4.7)); // 5
console.log("Math.round(4.4) =", Math.round(4.4)); // 4
console.log("Math.floor(4.7) =", Math.floor(4.7)); // 4 (hacia abajo)
console.log("Math.ceil(4.1) =", Math.ceil(4.1)); // 5 (hacia arriba)
console.log("Math.trunc(4.7) =", Math.trunc(4.7)); // 4 (elimina decimales)

console.log();

// Valor absoluto
console.log("Math.abs(-5) =", Math.abs(-5)); // 5

console.log();

// Potencia y raíz
console.log("Math.pow(2, 3) =", Math.pow(2, 3)); // 8 (2³)
console.log("Math.sqrt(16) =", Math.sqrt(16)); // 4 (√16)
console.log("Math.cbrt(27) =", Math.cbrt(27)); // 3 (∛27)

console.log();

// Mínimo y máximo
console.log("Math.min(5, 2, 9, 1) =", Math.min(5, 2, 9, 1)); // 1
console.log("Math.max(5, 2, 9, 1) =", Math.max(5, 2, 9, 1)); // 9

console.log();

// Aleatorio
console.log("Math.random() =", Math.random()); // Número entre 0 y 1

// Número aleatorio entre min y max
function randomEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Aleatorio entre 1 y 10:", randomEntre(1, 10));

console.log();

//======================================
// 10. ERRORES COMUNES
//======================================

console.log("=== 10. ERRORES COMUNES ===\n");

// ❌ Error: Confundir pre y post incremento
let contador1 = 5;
let valor1 = contador1++;
console.log("❌ Post-incremento - valor1:", valor1, "contador1:", contador1);

contador1 = 5;
let valor2 = ++contador1;
console.log("✅ Pre-incremento - valor2:", valor2, "contador1:", contador1);

console.log();

// ❌ Error: División de enteros
console.log("❌ 5 / 2 =", 5 / 2); // 2.5 (JavaScript no tiene división entera)
console.log("✅ Math.floor(5 / 2) =", Math.floor(5 / 2)); // 2 (división entera)

console.log();

// ❌ Error: Concatenación no deseada
let precio = 100;
let descuento = "20";
console.log("❌ precio + descuento =", precio + descuento); // "10020"
console.log("✅ precio + Number(descuento) =", precio + Number(descuento)); // 120

console.log();

// ❌ Error: Comparar con NaN
console.log("❌ NaN === NaN:", NaN === NaN); // false
console.log("✅ isNaN(NaN):", isNaN(NaN)); // true
console.log("✅ Number.isNaN(NaN):", Number.isNaN(NaN)); // true (más confiable)

console.log();

//======================================
// RESUMEN
//======================================

console.log("\n=== RESUMEN ===\n");

const resumen = `
OPERADORES BÁSICOS:
+ (suma), - (resta), * (multiplicación), / (división)
% (módulo/resto), ** (potencia)

INCREMENTO/DECREMENTO:
++variable (pre-incremento): incrementa y luego usa
variable++ (post-incremento): usa y luego incrementa
--variable (pre-decremento): decrementa y luego usa
variable-- (post-decremento): usa y luego decrementa

ASIGNACIÓN COMPUESTA:
+= -= *= /= %= **=

PRECEDENCIA (de mayor a menor):
1. ()  Paréntesis
2. **  Potencia
3. * / %  Multiplicación, División, Módulo
4. + -  Suma, Resta

CASOS ESPECIALES:
- División por cero: Infinity
- Operaciones con NaN: resultado es NaN
- String + número: concatenación
- String con otros operadores: conversión a número

OBJETO MATH:
Math.round(), Math.floor(), Math.ceil(), Math.trunc()
Math.abs(), Math.pow(), Math.sqrt()
Math.min(), Math.max(), Math.random()
Math.PI, Math.E
`;

console.log(resumen);
