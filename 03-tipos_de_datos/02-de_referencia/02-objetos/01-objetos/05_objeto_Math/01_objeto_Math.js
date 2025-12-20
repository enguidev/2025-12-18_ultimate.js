/*
================================================================================
  OBJETO MATH EN JAVASCRIPT
================================================================================
  Math proporciona propiedades y métodos estáticos para operaciones matemáticas.
  NO necesitas crear una instancia: Math.PI (no new Math())
*/

console.log("=".repeat(80));
console.log("📐 OBJETO MATH - GUÍA COMPLETA");
console.log("=".repeat(80));

//------------------------------------------------------------------------------
// CONSTANTES MATEMÁTICAS
//------------------------------------------------------------------------------

console.log("\n📊 === CONSTANTES MATEMÁTICAS ===\n");

console.log("Math.PI:", Math.PI); // 3.141592653589793
console.log("Math.E:", Math.E); // 2.718281828459045 (Euler)
console.log("Math.SQRT2:", Math.SQRT2); // 1.414... (√2)
console.log("Math.SQRT1_2:", Math.SQRT1_2); // 0.707... (√0.5)
console.log("Math.LN2:", Math.LN2); // 0.693... (ln(2))
console.log("Math.LN10:", Math.LN10); // 2.302... (ln(10))
console.log("Math.LOG2E:", Math.LOG2E); // 1.442... (log₂(e))
console.log("Math.LOG10E:", Math.LOG10E); // 0.434... (log₁₀(e))

//------------------------------------------------------------------------------
// REDONDEO
//------------------------------------------------------------------------------

console.log("\n🔢 === MÉTODOS DE REDONDEO ===\n");

// Math.round() - Redondea al entero más cercano
console.log("Math.round(4.5):", Math.round(4.5)); // 5
console.log("Math.round(4.4):", Math.round(4.4)); // 4
console.log("Math.round(-4.5):", Math.round(-4.5)); // -4 (¡cuidado!)

// Math.floor() - Redondea hacia abajo
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.floor(-4.1):", Math.floor(-4.1)); // -5 (hacia abajo)

// Math.ceil() - Redondea hacia arriba
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5
console.log("Math.ceil(-4.9):", Math.ceil(-4.9)); // -4 (hacia arriba)

// Math.trunc() - Elimina decimales (hacia cero)
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4
console.log("Math.trunc(-4.9):", Math.trunc(-4.9)); // -4

// Comparación visual
console.log("\n📊 Comparación de redondeo con 4.7:");
console.log("  round:", Math.round(4.7)); // 5
console.log("  floor:", Math.floor(4.7)); // 4
console.log("  ceil:", Math.ceil(4.7)); // 5
console.log("  trunc:", Math.trunc(4.7)); // 4

console.log("\n📊 Comparación de redondeo con -4.7:");
console.log("  round:", Math.round(-4.7)); // -5
console.log("  floor:", Math.floor(-4.7)); // -5
console.log("  ceil:", Math.ceil(-4.7)); // -4
console.log("  trunc:", Math.trunc(-4.7)); // -4

//------------------------------------------------------------------------------
// VALOR ABSOLUTO Y SIGNO
//------------------------------------------------------------------------------

console.log("\n➕➖ === VALOR ABSOLUTO Y SIGNO ===\n");

// Math.abs() - Valor absoluto
console.log("Math.abs(-5):", Math.abs(-5)); // 5
console.log("Math.abs(5):", Math.abs(5)); // 5
console.log("Math.abs(-3.14):", Math.abs(-3.14)); // 3.14

// Math.sign() - Signo del número
console.log("Math.sign(10):", Math.sign(10)); // 1
console.log("Math.sign(-10):", Math.sign(-10)); // -1
console.log("Math.sign(0):", Math.sign(0)); // 0
console.log("Math.sign(-0):", Math.sign(-0)); // -0

//------------------------------------------------------------------------------
// MÁXIMO Y MÍNIMO
//------------------------------------------------------------------------------

console.log("\n📈📉 === MÁXIMO Y MÍNIMO ===\n");

// Math.max() - Valor máximo
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3)); // 5
console.log("Math.max(-1, -5, -3):", Math.max(-1, -5, -3)); // -1
console.log("Math.max(1, 5, 3, 7, 2):", Math.max(1, 5, 3, 7, 2)); // 7

// Math.min() - Valor mínimo
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3)); // 1
console.log("Math.min(-1, -5, -3):", Math.min(-1, -5, -3)); // -5

// Con arrays (usando spread operator)
const numeros = [10, 5, 30, 15, 25];
console.log("Array:", numeros);
console.log("Máximo:", Math.max(...numeros)); // 30
console.log("Mínimo:", Math.min(...numeros)); // 5

//------------------------------------------------------------------------------
// POTENCIAS Y RAÍCES
//------------------------------------------------------------------------------

console.log("\n⚡ === POTENCIAS Y RAÍCES ===\n");

// Math.pow() - Potencia
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8 (2³)
console.log("Math.pow(5, 2):", Math.pow(5, 2)); // 25 (5²)
console.log("2 ** 3:", 2 ** 3); // 8 (alternativa moderna)

// Math.sqrt() - Raíz cuadrada
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4
console.log("Math.sqrt(2):", Math.sqrt(2)); // 1.414...
console.log("Math.sqrt(25):", Math.sqrt(25)); // 5

// Math.cbrt() - Raíz cúbica
console.log("Math.cbrt(27):", Math.cbrt(27)); // 3 (³√27)
console.log("Math.cbrt(8):", Math.cbrt(8)); // 2 (³√8)
console.log("Math.cbrt(-8):", Math.cbrt(-8)); // -2

// Math.hypot() - Hipotenusa (Teorema de Pitágoras)
console.log("Math.hypot(3, 4):", Math.hypot(3, 4)); // 5 (√(3²+4²))
console.log("Math.hypot(5, 12):", Math.hypot(5, 12)); // 13

//------------------------------------------------------------------------------
// NÚMEROS ALEATORIOS
//------------------------------------------------------------------------------

console.log("\n🎲 === NÚMEROS ALEATORIOS ===\n");

// Math.random() - Número entre 0 y 1
console.log("Math.random():", Math.random());

// Ejemplos prácticos de uso
function randomEntero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Número aleatorio entre 1-10:", randomEntero(1, 10));
console.log("Número aleatorio entre 1-100:", randomEntero(1, 100));
console.log("Dado (1-6):", randomEntero(1, 6));

// Moneda
function lanzarMoneda() {
  return Math.random() < 0.5 ? "Cara" : "Cruz";
}
console.log("Lanzar moneda:", lanzarMoneda());

//------------------------------------------------------------------------------
// FUNCIONES EXPONENCIALES Y LOGARÍTMICAS
//------------------------------------------------------------------------------

console.log("\n📈 === EXPONENCIALES Y LOGARITMOS ===\n");

// Math.exp() - e^x
console.log("Math.exp(1):", Math.exp(1)); // 2.718... (e¹)
console.log("Math.exp(2):", Math.exp(2)); // 7.389... (e²)

// Math.log() - Logaritmo natural (base e)
console.log("Math.log(Math.E):", Math.log(Math.E)); // 1
console.log("Math.log(1):", Math.log(1)); // 0
console.log("Math.log(10):", Math.log(10)); // 2.302...

// Math.log10() - Logaritmo base 10
console.log("Math.log10(100):", Math.log10(100)); // 2 (10²=100)
console.log("Math.log10(1000):", Math.log10(1000)); // 3 (10³=1000)

// Math.log2() - Logaritmo base 2
console.log("Math.log2(8):", Math.log2(8)); // 3 (2³=8)
console.log("Math.log2(16):", Math.log2(16)); // 4 (2⁴=16)

//------------------------------------------------------------------------------
// FUNCIONES TRIGONOMÉTRICAS
//------------------------------------------------------------------------------

console.log("\n📐 === TRIGONOMETRÍA ===\n");

// ⚠️ IMPORTANTE: Los ángulos deben estar en RADIANES, no grados

// Math.sin() - Seno
console.log("Math.sin(0):", Math.sin(0)); // 0
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1 (90°)
console.log("Math.sin(Math.PI):", Math.sin(Math.PI)); // ~0 (180°)

// Math.cos() - Coseno
console.log("Math.cos(0):", Math.cos(0)); // 1
console.log("Math.cos(Math.PI / 2):", Math.cos(Math.PI / 2)); // ~0 (90°)
console.log("Math.cos(Math.PI):", Math.cos(Math.PI)); // -1 (180°)

// Math.tan() - Tangente
console.log("Math.tan(0):", Math.tan(0)); // 0
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // 1 (45°)

// Funciones de conversión útiles
function gradosARadianes(grados) {
  return grados * (Math.PI / 180);
}

function radianesAGrados(radianes) {
  return radianes * (180 / Math.PI);
}

console.log("\n🔄 Conversión de ángulos:");
console.log("45° a radianes:", gradosARadianes(45));
console.log("π/4 radianes a grados:", radianesAGrados(Math.PI / 4));

//------------------------------------------------------------------------------
// MÉTODOS AVANZADOS
//------------------------------------------------------------------------------

console.log("\n🔬 === MÉTODOS AVANZADOS ===\n");

// Math.fround() - Precisión float de 32 bits
console.log("Math.fround(1.337):", Math.fround(1.337));
console.log("Math.fround(1.5):", Math.fround(1.5));

// Math.clz32() - Ceros a la izquierda en binario de 32 bits
console.log("Math.clz32(1):", Math.clz32(1)); // 31
console.log("Math.clz32(4):", Math.clz32(4)); // 29

//------------------------------------------------------------------------------
// CASOS DE USO PRÁCTICOS
//------------------------------------------------------------------------------

console.log("\n💡 === CASOS DE USO PRÁCTICOS ===\n");

// 1. Redondear a N decimales
function redondear(numero, decimales) {
  const factor = Math.pow(10, decimales);
  return Math.round(numero * factor) / factor;
}

console.log("Redondear 3.14159 a 2 decimales:", redondear(3.14159, 2)); // 3.14
console.log("Redondear 3.14159 a 3 decimales:", redondear(3.14159, 3)); // 3.142

// 2. Calcular distancia entre dos puntos
function distancia(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

console.log("Distancia entre (0,0) y (3,4):", distancia(0, 0, 3, 4)); // 5

// 3. Calcular porcentaje
function calcularPorcentaje(valor, total) {
  return Math.round((valor / total) * 100);
}

console.log("75 de 200 es:", calcularPorcentaje(75, 200) + "%"); // 38%

// 4. Limitar número a un rango (clamp)
function clamp(numero, min, max) {
  return Math.min(Math.max(numero, min), max);
}

console.log("Limitar 15 entre 0-10:", clamp(15, 0, 10)); // 10
console.log("Limitar -5 entre 0-10:", clamp(-5, 0, 10)); // 0
console.log("Limitar 5 entre 0-10:", clamp(5, 0, 10)); // 5

// 5. Generar color aleatorio
function colorAleatorio() {
  const r = randomEntero(0, 255);
  const g = randomEntero(0, 255);
  const b = randomEntero(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log("Color aleatorio:", colorAleatorio());

// 6. Calcular área de círculo
function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

console.log("Área de círculo con radio 5:", redondear(areaCirculo(5), 2)); // 78.54

// 7. Calcular perímetro de círculo
function perimetroCirculo(radio) {
  return 2 * Math.PI * radio;
}

console.log(
  "Perímetro de círculo con radio 5:",
  redondear(perimetroCirculo(5), 2)
); // 31.42

//------------------------------------------------------------------------------
// COMPARACIÓN DE MÉTODOS DE REDONDEO
//------------------------------------------------------------------------------

console.log("\n📊 === TABLA COMPARATIVA DE REDONDEO ===\n");

const valores = [4.1, 4.5, 4.9, -4.1, -4.5, -4.9];

console.log("Número | round | floor | ceil  | trunc");
console.log("-------|-------|-------|-------|------");

valores.forEach((val) => {
  console.log(
    `${val.toString().padEnd(6)} | ` +
      `${Math.round(val).toString().padEnd(5)} | ` +
      `${Math.floor(val).toString().padEnd(5)} | ` +
      `${Math.ceil(val).toString().padEnd(5)} | ` +
      `${Math.trunc(val)}`
  );
});

//------------------------------------------------------------------------------
// BUENAS PRÁCTICAS
//------------------------------------------------------------------------------

console.log("\n✅ === BUENAS PRÁCTICAS ===\n");

console.log(`
1. Math es un objeto estático
   ✅ Math.PI
   ❌ new Math() // Error

2. Usa constantes predefinidas
   ✅ Math.PI
   ❌ 3.14159... // Menos preciso

3. Para ángulos, usa radianes
   ✅ Math.sin(Math.PI / 2)
   ❌ Math.sin(90) // Incorrecto

4. Redondeo de decimales
   ✅ Math.round(num * 100) / 100
   ✅ num.toFixed(2) // Devuelve string

5. Números aleatorios en rango
   ✅ Math.floor(Math.random() * (max - min + 1)) + min
   ❌ Math.random() * max // No incluye max, no empieza en min
`);

//------------------------------------------------------------------------------
// RESUMEN
//------------------------------------------------------------------------------

console.log("\n" + "=".repeat(80));
console.log("📚 RESUMEN - OBJETO MATH");
console.log("=".repeat(80));

console.log(`
✅ Constantes: PI, E, SQRT2, LN2, etc.
✅ Redondeo: round, floor, ceil, trunc
✅ Min/Max: min, max
✅ Potencias: pow, sqrt, cbrt, hypot
✅ Aleatorios: random
✅ Exponenciales: exp, log, log10, log2
✅ Trigonometría: sin, cos, tan (en radianes!)
✅ Otros: abs, sign, fround, clz32

💡 Math NO requiere "new" - todos son métodos estáticos
💡 Los ángulos deben estar en RADIANES, no grados
💡 Math.random() devuelve [0, 1) - incluye 0, excluye 1
`);

console.log("✅ Archivo completado correctamente\n");
