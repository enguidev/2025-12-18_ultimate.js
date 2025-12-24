//==============================================================================
// OPERADORES DE COMPARACIÓN EN JAVASCRIPT - GUÍA COMPLETA Y DEFINITIVA
//==============================================================================

console.log("╔════════════════════════════════════════════════════════════╗");
console.log("║   OPERADORES DE COMPARACIÓN EN JAVASCRIPT - GUÍA COMPLETA  ║");
console.log("╚════════════════════════════════════════════════════════════╝\n");

//==============================================================================
// 1. INTRODUCCIÓN A LOS OPERADORES DE COMPARACIÓN
//==============================================================================

console.log("═══ 1. INTRODUCCIÓN ═══\n");

console.log("┌─ ¿QUÉ SON? ───────────────────────────┐");
console.log("│ Los operadores de comparación comparan │");
console.log("│ dos valores y devuelven un BOOLEANO    │");
console.log("│ (true o false)                         │");
console.log("└─────────────────────────────────────────┘");
console.log();

console.log("┌─ TIPOS DE OPERADORES ──────────────────┐");
console.log("│ • Relacionales: > < >= <=               │");
console.log("│ • Igualdad: == != === !==               │");
console.log("└─────────────────────────────────────────┘");
console.log();

//==============================================================================
// 2. OPERADORES RELACIONALES
//==============================================================================

console.log("\n═══ 2. OPERADORES RELACIONALES ═══\n");

let a = 10;
let b = 5;
let c = 10;

console.log("┌─ MAYOR QUE (>) ────────────────────────┐");
console.log("│ Comprueba si el izquierdo es mayor     │");
console.log("└─────────────────────────────────────────┘");
console.log(`${a} > ${b} =`, a > b); // true
console.log(`${b} > ${a} =`, b > a); // false
console.log(`${a} > ${c} =`, a > c); // false (son iguales)
console.log("15 > 10 =", 15 > 10); // true
console.log("5 > 5 =", 5 > 5); // false
console.log();

console.log("┌─ MENOR QUE (<) ────────────────────────┐");
console.log("│ Comprueba si el izquierdo es menor     │");
console.log("└─────────────────────────────────────────┘");
console.log(`${a} < ${b} =`, a < b); // false
console.log(`${b} < ${a} =`, b < a); // true
console.log(`${a} < ${c} =`, a < c); // false (son iguales)
console.log("3 < 7 =", 3 < 7); // true
console.log("10 < 10 =", 10 < 10); // false
console.log();

console.log("┌─ MAYOR O IGUAL (>=) ───────────────────┐");
console.log("│ Comprueba si es mayor O igual          │");
console.log("└─────────────────────────────────────────┘");
console.log(`${a} >= ${b} =`, a >= b); // true
console.log(`${b} >= ${a} =`, b >= a); // false
console.log(`${a} >= ${c} =`, a >= c); // true (son iguales)
console.log("10 >= 10 =", 10 >= 10); // true
console.log("8 >= 5 =", 8 >= 5); // true
console.log();

console.log("┌─ MENOR O IGUAL (<=) ───────────────────┐");
console.log("│ Comprueba si es menor O igual          │");
console.log("└─────────────────────────────────────────┘");
console.log(`${a} <= ${b} =`, a <= b); // false
console.log(`${b} <= ${a} =`, b <= a); // true
console.log(`${a} <= ${c} =`, a <= c); // true (son iguales)
console.log("10 <= 10 =", 10 <= 10); // true
console.log("3 <= 8 =", 3 <= 8); // true
console.log();

//==============================================================================
// 3. OPERADORES DE IGUALDAD
//==============================================================================

console.log("\n═══ 3. OPERADORES DE IGUALDAD ═══\n");

console.log("┌─ IGUALDAD DÉBIL (==) ──────────────────┐");
console.log("│ Compara VALORES (con conversión)       │");
console.log("│ NO compara tipos de datos              │");
console.log("│ ⚠️  Puede dar resultados inesperados    │");
console.log("└─────────────────────────────────────────┘");

console.log("10 == 10 =", 10 == 10); // true
console.log("10 == '10' =", 10 == "10"); // true (convierte string a número)
console.log("10 == '10.0' =", 10 == "10.0"); // true
console.log("true == 1 =", true == 1); // true (true se convierte a 1)
console.log("false == 0 =", false == 0); // true (false se convierte a 0)
console.log("null == undefined =", null == undefined); // true (caso especial)
console.log("'' == 0 =", "" == 0); // true (string vacío se convierte a 0)
console.log("'5' == 5 =", "5" == 5); // true
console.log();

console.log("┌─ DESIGUALDAD DÉBIL (!=) ───────────────┐");
console.log("│ Verifica si son DIFERENTES (con conv.) │");
console.log("└─────────────────────────────────────────┘");

console.log("10 != 5 =", 10 != 5); // true
console.log("10 != 10 =", 10 != 10); // false
console.log("10 != '10' =", 10 != "10"); // false (son iguales tras conversión)
console.log("10 != '5' =", 10 != "5"); // true
console.log("true != 1 =", true != 1); // false (son iguales tras conversión)
console.log();

console.log("┌─ IGUALDAD ESTRICTA (===) ──────────────┐");
console.log("│ Compara VALORES Y TIPOS                 │");
console.log("│ NO realiza conversión de tipos          │");
console.log("│ ✅ RECOMENDADO usar siempre              │");
console.log("└─────────────────────────────────────────┘");

console.log("10 === 10 =", 10 === 10); // true
console.log("10 === '10' =", 10 === "10"); // false (tipos diferentes)
console.log("true === 1 =", true === 1); // false (tipos diferentes)
console.log("false === 0 =", false === 0); // false (tipos diferentes)
console.log("null === undefined =", null === undefined); // false
console.log("'' === 0 =", "" === 0); // false
console.log("'5' === 5 =", "5" === 5); // false
console.log("10 === 10.0 =", 10 === 10.0); // true (mismo valor y tipo)
console.log();

console.log("┌─ DESIGUALDAD ESTRICTA (!==) ───────────┐");
console.log("│ Verifica diferencia de VALOR O TIPO     │");
console.log("│ ✅ RECOMENDADO usar siempre              │");
console.log("└─────────────────────────────────────────┘");

console.log("10 !== 5 =", 10 !== 5); // true
console.log("10 !== 10 =", 10 !== 10); // false
console.log("10 !== '10' =", 10 !== "10"); // true (tipos diferentes)
console.log("10 !== '5' =", 10 !== "5"); // true
console.log("true !== 1 =", true !== 1); // true (tipos diferentes)
console.log("null !== undefined =", null !== undefined); // true
console.log();

//==============================================================================
// 4. DIFERENCIAS ENTRE == Y ===
//==============================================================================

console.log("\n═══ 4. DIFERENCIAS CLAVE: == vs === ═══\n");

console.log("┌─ TABLA COMPARATIVA ────────────────────┐");
console.log("│ Expresión      │  ==    │  ===         │");
console.log("├────────────────┼────────┼──────────────┤");
console.log("│ 5 == 5         │  true  │  true        │");
console.log("│ 5 == '5'       │  true  │  false       │");
console.log("│ 0 == false     │  true  │  false       │");
console.log("│ '' == 0        │  true  │  false       │");
console.log("│ null == undef  │  true  │  false       │");
console.log("│ [] == ''       │  true  │  false       │");
console.log("│ [5] == 5       │  true  │  false       │");
console.log("└────────────────┴────────┴──────────────┘");
console.log();

console.log("CASOS PARTICULARES:\n");

console.log("5 == '5':", 5 == "5"); // true
console.log("5 === '5':", 5 === "5"); // false
console.log();

console.log("0 == false:", 0 == false); // true
console.log("0 === false:", 0 === false); // false
console.log();

console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false
console.log();

// Arrays y strings - con == hace conversión
const arr1Vacio = [];
const arr2ConElemento = [5];
console.log("[] == '':", arr1Vacio == ""); // true (array vacío se convierte a string vacío)
console.log("[] === '' es siempre false (tipos diferentes)");
console.log();

console.log("[5] == 5:", arr2ConElemento == 5); // true (array se convierte a string "5")
console.log("[5] === 5 es siempre false (tipos diferentes)");
console.log();

//==============================================================================
// 5. COMPARACIÓN DE STRINGS
//==============================================================================

console.log("\n═══ 5. COMPARACIÓN DE STRINGS ═══\n");

console.log("┌─ COMPARACIÓN LEXICOGRÁFICA ────────────┐");
console.log("│ Se compara letra por letra según        │");
console.log("│ el valor Unicode (orden alfabético)      │");
console.log("└─────────────────────────────────────────┘");
console.log();

console.log("'a' < 'b' =", "a" < "b"); // true
console.log("'z' > 'a' =", "z" > "a"); // true
console.log("'abc' < 'abd' =", "abc" < "abd"); // true (compara 'c' vs 'd')
console.log("'manzana' < 'pera' =", "manzana" < "pera"); // true
console.log();

console.log("┌─ MAYÚSCULAS VS MINÚSCULAS ─────────────┐");
console.log("│ Mayúsculas tienen menor valor Unicode   │");
console.log("└─────────────────────────────────────────┘");

console.log("'A' < 'a' =", "A" < "a"); // true (A=65, a=97 en Unicode)
console.log("'Z' < 'a' =", "Z" < "a"); // true
console.log("'Apple' < 'apple' =", "Apple" < "apple"); // true
console.log();

console.log("┌─ NÚMEROS COMO STRINGS ─────────────────┐");
console.log("│ Se comparan como texto, no como números │");
console.log("└─────────────────────────────────────────┘");

console.log("'2' < '10' =", "2" < "10"); // false (compara '2' vs '1')
console.log("'20' < '3' =", "20" < "3"); // true (compara '2' vs '3')
console.log("'100' < '20' =", "100" < "20"); // true (compara '1' vs '2')
console.log();

console.log("⚠️  Para números, conviértelos primero:");
console.log("Number('2') < Number('10') =", Number("2") < Number("10")); // true
console.log("+'2' < +'10' =", +"2" < +"10"); // true (conversión con +)
console.log();

console.log("┌─ LONGITUD NO IMPORTA EN < > ───────────┐");
console.log("'aa' < 'b' =", "aa" < "b"); // true (compara 'a' vs 'b')
console.log("'zzzzz' < 'za' =", "zzzzz" < "za"); // false (compara segunda letra)
console.log();

//==============================================================================
// 6. COMPARACIÓN CON VALORES ESPECIALES
//==============================================================================

console.log("\n═══ 6. VALORES ESPECIALES ═══\n");

console.log("┌─ NULL Y UNDEFINED ─────────────────────┐");

console.log("null == undefined:", null == undefined); // true (caso especial)
console.log("null === undefined:", null === undefined); // false
console.log("null == 0:", null == 0); // false
console.log("null > 0:", null > 0); // false
console.log("null >= 0:", null >= 0); // true (⚠️ comportamiento extraño)
console.log("null < 0:", null < 0); // false
console.log();

console.log("undefined == 0:", undefined == 0); // false
console.log("undefined > 0:", undefined > 0); // false
console.log("undefined < 0:", undefined < 0); // false
console.log();

console.log("⚠️  REGLA: Evita comparar null/undefined con < > >= <=");
console.log("   Solo usa == o === con estos valores");
console.log();

console.log("┌─ NaN (NOT A NUMBER) ───────────────────┐");

// Demostramos NaN con variables para evitar warnings del linter
const nanValue = 0 / 0; // Esto produce NaN
console.log("const nanValue = 0 / 0; // Produce NaN");
console.log("nanValue == nanValue:", nanValue == nanValue); // false (⚠️ único valor que no es igual a sí mismo)
console.log("nanValue === nanValue:", nanValue === nanValue); // false
console.log("nanValue != nanValue:", nanValue != nanValue); // true
console.log("nanValue > 0:", nanValue > 0); // false
console.log("nanValue < 0:", nanValue < 0); // false
console.log("nanValue >= 0:", nanValue >= 0); // false
console.log();

console.log("✅ Para verificar NaN:");
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true (más confiable)
console.log("isNaN('texto'):", isNaN("texto")); // true (⚠️ convierte primero)
console.log("Number.isNaN('texto'):", Number.isNaN("texto")); // false (más estricto)
console.log();

console.log("┌─ INFINITY ─────────────────────────────┐");

console.log("Infinity > 1000:", Infinity > 1000); // true
console.log("Infinity > Infinity:", Infinity > Infinity); // false
console.log("Infinity == Infinity:", Infinity == Infinity); // true
console.log("-Infinity < Infinity:", -Infinity < Infinity); // true
console.log("-Infinity < 0:", -Infinity < 0); // true
console.log();

console.log("┌─ VALORES BOOLEANOS ────────────────────┐");

console.log("true == 1:", true == 1); // true (true se convierte a 1)
console.log("true === 1:", true === 1); // false
console.log("false == 0:", false == 0); // true (false se convierte a 0)
console.log("false === 0:", false === 0); // false
console.log("true > false:", true > false); // true (1 > 0)
console.log("true > 0:", true > 0); // true
console.log();

//==============================================================================
// 7. CONVERSIÓN DE TIPOS EN COMPARACIONES
//==============================================================================

console.log("\n═══ 7. CONVERSIÓN DE TIPOS (COERCIÓN) ═══\n");

console.log("┌─ REGLAS DE CONVERSIÓN CON == ──────────┐");
console.log("│ 1. null == undefined (caso especial)   │");
console.log("│ 2. Números vs Strings → convierte a #   │");
console.log("│ 3. Boolean → convierte a número         │");
console.log("│ 4. Object → convierte a primitivo       │");
console.log("└─────────────────────────────────────────┘");
console.log();

console.log("EJEMPLOS DE CONVERSIÓN:\n");

console.log("┌─ String a Número ──────────────────────┐");
console.log("'5' == 5:", "5" == 5); // true ('5' → 5)
console.log("'10' > 5:", "10" > 5); // true ('10' → 10)
console.log("'3' < '10':", "3" < "10"); // false (comparación de strings)
console.log("'3' < 10:", "3" < 10); // true ('3' → 3)
console.log();

console.log("┌─ Boolean a Número ─────────────────────┐");
console.log("true == 1:", true == 1); // true (true → 1)
console.log("false == 0:", false == 0); // true (false → 0)
console.log("true > 0:", true > 0); // true (1 > 0)
console.log("false < 1:", false < 1); // true (0 < 1)
console.log();

console.log("┌─ String vacío y null/undefined ────────┐");
console.log("'' == 0:", "" == 0); // true ('' → 0)
console.log("'' == false:", "" == false); // true
console.log("'' === 0:", "" === 0); // false
console.log("'0' == 0:", "0" == 0); // true ('0' → 0)
console.log("'0' == false:", "0" == false); // true
console.log();

console.log("┌─ Arrays y Objects ─────────────────────┐");
console.log("[] == '':", [] == ""); // true ([] → '')
console.log("[] == 0:", [] == 0); // true ([] → '' → 0)
console.log("[5] == 5:", [5] == 5); // true ([5] → '5' → 5)
console.log("[5,6] == '5,6':", [5, 6] == "5,6"); // true
console.log("{} == '[object Object]':", {} == "[object Object]"); // true
console.log();

//==============================================================================
// 8. CASOS DE USO PRÁCTICOS
//==============================================================================

console.log("\n═══ 8. CASOS DE USO PRÁCTICOS ═══\n");

console.log("┌─ VALIDAR RANGO ────────────────────────┐");
function estaEnRango(num, min, max) {
  return num >= min && num <= max;
}
console.log("¿18 está entre 13 y 65?", estaEnRango(18, 13, 65)); // true
console.log("¿100 está entre 0 y 50?", estaEnRango(100, 0, 50)); // false
console.log();

console.log("┌─ VALIDAR EDAD ─────────────────────────┐");
function esMayorDeEdad(edad) {
  return edad >= 18;
}
console.log("¿20 es mayor de edad?", esMayorDeEdad(20)); // true
console.log("¿16 es mayor de edad?", esMayorDeEdad(16)); // false
console.log();

console.log("┌─ COMPARAR CONTRASEÑAS ─────────────────┐");
function validarPassword(input, guardada) {
  return input === guardada; // Usar === por seguridad
}
console.log("Validar 'abc123':", validarPassword("abc123", "abc123")); // true
console.log("Validar 'ABC123':", validarPassword("ABC123", "abc123")); // false
console.log();

console.log("┌─ VERIFICAR VALOR VACÍO ────────────────┐");
function estaVacio(valor) {
  return valor === "" || valor === null || valor === undefined;
}
console.log("¿'' está vacío?", estaVacio("")); // true
console.log("¿null está vacío?", estaVacio(null)); // true
console.log("¿'texto' está vacío?", estaVacio("texto")); // false
console.log("¿0 está vacío?", estaVacio(0)); // false (0 no es vacío)
console.log();

console.log("┌─ ORDENAR NÚMEROS ──────────────────────┐");
function ordenarAscendente(arr) {
  return arr.sort((a, b) => a - b); // Usa comparación numérica
}
console.log("Ordenar [3, 1, 4, 1, 5]:", ordenarAscendente([3, 1, 4, 1, 5]));
console.log();

console.log("┌─ ENCONTRAR MÁXIMO ─────────────────────┐");
function encontrarMaximo(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("Máximo de [3, 7, 2, 9, 1]:", encontrarMaximo([3, 7, 2, 9, 1]));
console.log();

console.log("┌─ ENCONTRAR MÍNIMO ─────────────────────┐");
function encontrarMinimo(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log("Mínimo de [3, 7, 2, 9, 1]:", encontrarMinimo([3, 7, 2, 9, 1]));
console.log();

console.log("┌─ CALIFICACIÓN ─────────────────────────┐");
function obtenerCalificacion(nota) {
  if (nota >= 90) return "A";
  if (nota >= 80) return "B";
  if (nota >= 70) return "C";
  if (nota >= 60) return "D";
  return "F";
}
console.log("Nota 95:", obtenerCalificacion(95)); // A
console.log("Nota 75:", obtenerCalificacion(75)); // C
console.log("Nota 50:", obtenerCalificacion(50)); // F
console.log();

console.log("┌─ COMPARAR FECHAS ──────────────────────┐");
function esFechaPosterior(fecha1, fecha2) {
  return new Date(fecha1) > new Date(fecha2);
}
console.log(
  "¿2025-12-31 > 2025-01-01?",
  esFechaPosterior("2025-12-31", "2025-01-01")
); // true
console.log();

console.log("┌─ VERIFICAR TIPO ESTRICTO ──────────────┐");
function esNumero(valor) {
  return typeof valor === "number" && !isNaN(valor);
}
console.log("¿5 es número?", esNumero(5)); // true
console.log("¿'5' es número?", esNumero("5")); // false
console.log("¿NaN es número?", esNumero(NaN)); // false
console.log();

//==============================================================================
// 9. ERRORES COMUNES Y MEJORES PRÁCTICAS
//==============================================================================

console.log("\n═══ 9. ERRORES COMUNES Y MEJORES PRÁCTICAS ═══\n");

console.log("┌─ ERROR: Usar == en vez de === ─────────┐");
console.log("❌ if (edad == '18') // Podría ser true");
console.log("✅ if (edad === 18) // Solo true si es número");
console.log();

console.log("Ejemplo:");
let edad = "18";
console.log("edad = '18' (string)");
console.log("edad == 18:", edad == 18); // true (conversión)
console.log("edad === 18:", edad === 18); // false (tipos diferentes)
console.log();

console.log("┌─ ERROR: Comparar objetos/arrays ──────┐");
console.log("❌ [1,2] == [1,2] // false");
console.log("❌ {a:1} == {a:1} // false");
console.log("   Comparan referencias, no contenido");
console.log();

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log("arr1 == arr2:", arr1 == arr2); // false (diferentes referencias)
console.log("arr1 === arr2:", arr1 === arr2); // false
console.log("arr1 == arr3:", arr1 == arr3); // true (misma referencia)
console.log("arr1 === arr3:", arr1 === arr3); // true
console.log();

console.log("✅ Para comparar contenido:");
console.log(
  "JSON.stringify(arr1) === JSON.stringify(arr2):",
  JSON.stringify(arr1) === JSON.stringify(arr2)
); // true
console.log();

console.log("┌─ ERROR: Comparar null/undefined con < >┐");
console.log("❌ null >= 0 // true (extraño)");
console.log("❌ null == 0 // false (inconsistente)");
console.log("✅ Usa solo === con null/undefined");
console.log();

console.log("┌─ ERROR: Asumir orden alfabético ──────┐");
console.log("❌ '10' < '2' // false (compara strings)");
console.log("✅ 10 < 2 // false (compara números)");
console.log("✅ Number('10') < Number('2') // false");
console.log();

console.log("'10' < '2':", "10" < "2"); // false (compara '1' vs '2')
console.log("10 < 2:", 10 < 2); // false
console.log();

console.log("┌─ ERROR: No validar NaN ────────────────┐");
let resultado = 10 / "abc";
console.log("let resultado = 10 / 'abc'");
console.log("resultado:", resultado); // NaN
console.log("❌ if (resultado == NaN) // Siempre false");
console.log("✅ if (Number.isNaN(resultado)) // true");
console.log("Number.isNaN(resultado):", Number.isNaN(resultado));
console.log();

console.log("┌─ MEJORES PRÁCTICAS ────────────────────┐");
console.log("│ ✓ Usa === y !== por defecto            │");
console.log("│ ✓ Solo usa == cuando sea necesario     │");
console.log("│ ✓ Convierte tipos explícitamente       │");
console.log("│ ✓ Usa Number.isNaN() para verificar NaN│");
console.log("│ ✓ Evita < > con null/undefined         │");
console.log("│ ✓ Compara objetos por contenido        │");
console.log("│ ✓ Ten cuidado con strings numéricas    │");
console.log("│ ✓ Valida tipos antes de comparar       │");
console.log("└─────────────────────────────────────────┘");
console.log();

//==============================================================================
// 10. TABLA DE VERDAD COMPLETA
//==============================================================================

console.log("\n═══ 10. TABLA DE VERDAD: == vs === ═══\n");

const tablaDatos = [
  ["5 == 5", true, true],
  ['5 == "5"', true, false],
  ["0 == false", true, false],
  ['0 == ""', true, false],
  ["null == undefined", true, false],
  ["null == null", true, true],
  ["undefined == undefined", true, true],
  ["NaN == NaN", false, false],
  ['[] == ""', true, false],
  ["[] == 0", true, false],
  ["[5] == 5", true, false],
  ["true == 1", true, false],
  ["false == 0", true, false],
  ['"0" == 0', true, false],
  ['"" == 0', true, false],
];

console.log("┌────────────────────┬──────┬──────┐");
console.log("│ Expresión          │  ==  │ ===  │");
console.log("├────────────────────┼──────┼──────┤");

for (const [expr, resultadoDebil, resultadoEstricto] of tablaDatos) {
  const col1 = expr.padEnd(18);
  const col2 = String(resultadoDebil).padEnd(4);
  const col3 = String(resultadoEstricto).padEnd(4);
  console.log(`│ ${col1} │ ${col2} │ ${col3} │`);
}

console.log("└────────────────────┴──────┴──────┘");
console.log();

//==============================================================================
// 11. CASOS AVANZADOS Y EDGE CASES
//==============================================================================

console.log("\n═══ 11. CASOS AVANZADOS ═══\n");

console.log("┌─ COMPARACIONES ENCADENADAS ────────────┐");
console.log("│ JavaScript evalúa de izquierda a der.  │");
console.log("└─────────────────────────────────────────┘");

console.log("1 < 2 < 3:", 1 < 2 < 3); // true (pero no como esperamos)
console.log("Evaluación: (1 < 2) < 3 → true < 3 → 1 < 3 → true");
console.log();

console.log("3 > 2 > 1:", 3 > 2 > 1); // false
console.log("Evaluación: (3 > 2) > 1 → true > 1 → 1 > 1 → false");
console.log();

console.log("✅ Forma correcta de comparaciones en rango:");
console.log("1 < 2 && 2 < 3:", 1 < 2 && 2 < 3); // true
console.log();

console.log("┌─ COMPARACIONES CON OBJETOS ────────────┐");
const obj1 = { valor: 10 };
const obj2 = { valor: 10 };
const obj3 = obj1;

console.log("obj1 == obj2:", obj1 == obj2); // false
console.log("obj1 === obj2:", obj1 === obj2); // false
console.log("obj1 === obj3:", obj1 === obj3); // true
console.log();

console.log("✅ Comparar propiedades específicas:");
console.log("obj1.valor === obj2.valor:", obj1.valor === obj2.valor); // true
console.log();

console.log("┌─ OPERADOR NULLISH COALESCING (??) ────┐");
console.log("│ Devuelve el derecho si izq es null/und │");
console.log("└─────────────────────────────────────────┘");

const valor1 = null ?? "default";
const valor2 = undefined ?? "default";
const valor3 = 0 ?? "default";
const valor4 = "" ?? "default";

console.log("null ?? 'default':", valor1); // 'default'
console.log("undefined ?? 'default':", valor2); // 'default'
console.log("0 ?? 'default':", valor3); // 0 (no es null/undefined)
console.log("'' ?? 'default':", valor4); // '' (no es null/undefined)
console.log();

console.log("┌─ OPTIONAL CHAINING (?.) ───────────────┐");
const usuario = {
  nombre: "Ana",
  direccion: {
    ciudad: "Madrid",
  },
};

console.log("usuario?.nombre:", usuario?.nombre); // 'Ana'
console.log("usuario?.telefono:", usuario?.telefono); // undefined
console.log("usuario?.direccion?.ciudad:", usuario?.direccion?.ciudad); // 'Madrid'
console.log("usuario?.contacto?.email:", usuario?.contacto?.email); // undefined
console.log();

//==============================================================================
// 12. EJERCICIOS PRÁCTICOS
//==============================================================================

console.log("\n═══ 12. EJERCICIOS PRÁCTICOS ═══\n");

console.log("┌─ EJERCICIO 1: Validar edad para conducir ┐");
function puedeConducir(edad) {
  return edad >= 18;
}
console.log("✅ Solución:");
console.log("puedeConducir(20):", puedeConducir(20)); // true
console.log("puedeConducir(16):", puedeConducir(16)); // false
console.log();

console.log("┌─ EJERCICIO 2: Encontrar el menor de 3 ──┐");
function menorDeTres(a, b, c) {
  if (a < b && a < c) return a;
  if (b < c) return b;
  return c;
}
console.log("✅ Solución:");
console.log("menorDeTres(5, 3, 8):", menorDeTres(5, 3, 8)); // 3
console.log("menorDeTres(10, 15, 7):", menorDeTres(10, 15, 7)); // 7
console.log();

console.log("┌─ EJERCICIO 3: Año bisiesto ─────────────┐");
function esAnioBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}
console.log("✅ Solución:");
console.log("esAnioBisiesto(2024):", esAnioBisiesto(2024)); // true
console.log("esAnioBisiesto(2023):", esAnioBisiesto(2023)); // false
console.log("esAnioBisiesto(2000):", esAnioBisiesto(2000)); // true
console.log("esAnioBisiesto(1900):", esAnioBisiesto(1900)); // false
console.log();

console.log("┌─ EJERCICIO 4: Verificar triángulo ──────┐");
function esTrianguloValido(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
console.log("✅ Solución:");
console.log("esTrianguloValido(3, 4, 5):", esTrianguloValido(3, 4, 5)); // true
console.log("esTrianguloValido(1, 2, 5):", esTrianguloValido(1, 2, 5)); // false
console.log();

console.log("┌─ EJERCICIO 5: Número par o impar ───────┐");
function esParOImpar(num) {
  return num % 2 === 0 ? "par" : "impar";
}
console.log("✅ Solución:");
console.log("esParOImpar(10):", esParOImpar(10)); // par
console.log("esParOImpar(7):", esParOImpar(7)); // impar
console.log();

console.log("┌─ EJERCICIO 6: Validar email ────────────┐");
function tieneArrobaYPunto(email) {
  return email.includes("@") && email.includes(".");
}
console.log("✅ Solución:");
console.log(
  "tieneArrobaYPunto('test@mail.com'):",
  tieneArrobaYPunto("test@mail.com")
); // true
console.log(
  "tieneArrobaYPunto('testmail.com'):",
  tieneArrobaYPunto("testmail.com")
); // false
console.log();

console.log("┌─ EJERCICIO 7: Ordenar 3 números ────────┐");
function ordenarTresNumeros(a, b, c) {
  const arr = [a, b, c];
  return arr.sort((x, y) => x - y);
}
console.log("✅ Solución:");
console.log("ordenarTresNumeros(5, 2, 8):", ordenarTresNumeros(5, 2, 8)); // [2, 5, 8]
console.log();

console.log("┌─ EJERCICIO 8: Calcular descuento ───────┐");
function calcularPrecioFinal(precio, descuento) {
  if (descuento < 0 || descuento > 100) {
    return precio;
  }
  return precio - (precio * descuento) / 100;
}
console.log("✅ Solución:");
console.log("calcularPrecioFinal(100, 20):", calcularPrecioFinal(100, 20)); // 80
console.log("calcularPrecioFinal(100, 50):", calcularPrecioFinal(100, 50)); // 50
console.log();

console.log("┌─ EJERCICIO 9: Verificar palíndromo ─────┐");
function esPalindromo(str) {
  const limpio = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return limpio === limpio.split("").reverse().join("");
}
console.log("✅ Solución:");
console.log("esPalindromo('radar'):", esPalindromo("radar")); // true
console.log("esPalindromo('hola'):", esPalindromo("hola")); // false
console.log(
  "esPalindromo('A man a plan a canal Panama'):",
  esPalindromo("A man a plan a canal Panama")
); // true
console.log();

console.log("┌─ EJERCICIO 10: Filtrar aprobados ───────┐");
function filtrarAprobados(notas) {
  return notas.filter((nota) => nota >= 60);
}
console.log("✅ Solución:");
console.log(
  "filtrarAprobados([45, 70, 55, 80, 65]):",
  filtrarAprobados([45, 70, 55, 80, 65])
); // [70, 80, 65]
console.log();

//==============================================================================
// 13. EJERCICIOS AVANZADOS (DESAFÍO)
//==============================================================================

console.log("\n═══ 13. EJERCICIOS AVANZADOS (DESAFÍO) ═══\n");

console.log("┌─ DESAFÍO 1: Comparar versiones ─────────┐");
function compararVersiones(v1, v2) {
  const arr1 = v1.split(".").map(Number);
  const arr2 = v2.split(".").map(Number);

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    const num1 = arr1[i] || 0;
    const num2 = arr2[i] || 0;

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
}
console.log("✅ Solución:");
console.log(
  "compararVersiones('1.2.3', '1.2.4'):",
  compararVersiones("1.2.3", "1.2.4")
); // -1
console.log(
  "compararVersiones('2.0.0', '1.9.9'):",
  compararVersiones("2.0.0", "1.9.9")
); // 1
console.log(
  "compararVersiones('1.0', '1.0.0'):",
  compararVersiones("1.0", "1.0.0")
); // 0
console.log();

console.log("┌─ DESAFÍO 2: Rango de fechas ────────────┐");
function estaEnRangoFechas(fecha, inicio, fin) {
  const f = new Date(fecha);
  const i = new Date(inicio);
  const fn = new Date(fin);
  return f >= i && f <= fn;
}
console.log("✅ Solución:");
console.log(
  "estaEnRangoFechas('2024-06-15', '2024-01-01', '2024-12-31'):",
  estaEnRangoFechas("2024-06-15", "2024-01-01", "2024-12-31")
); // true
console.log();

console.log("┌─ DESAFÍO 3: Validar contraseña fuerte ──┐");
function esPasswordFuerte(pass) {
  const tieneMayuscula = /[A-Z]/.test(pass);
  const tieneMinuscula = /[a-z]/.test(pass);
  const tieneNumero = /[0-9]/.test(pass);
  const tieneEspecial = /[!@#$%^&*]/.test(pass);
  const longitudMinima = pass.length >= 8;

  return (
    tieneMayuscula &&
    tieneMinuscula &&
    tieneNumero &&
    tieneEspecial &&
    longitudMinima
  );
}
console.log("✅ Solución:");
console.log("esPasswordFuerte('Pass123!'):", esPasswordFuerte("Pass123!")); // true
console.log("esPasswordFuerte('password'):", esPasswordFuerte("password")); // false
console.log();

console.log("┌─ DESAFÍO 4: Encontrar mediana ──────────┐");
function encontrarMediana(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}
console.log("✅ Solución:");
console.log(
  "encontrarMediana([3, 1, 4, 1, 5]):",
  encontrarMediana([3, 1, 4, 1, 5])
); // 3
console.log("encontrarMediana([1, 2, 3, 4]):", encontrarMediana([1, 2, 3, 4])); // 2.5
console.log();

console.log("┌─ DESAFÍO 5: Comparación profunda ───────┐");
function compararObjetos(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}
console.log("✅ Solución:");
console.log(
  "compararObjetos({a: 1, b: 2}, {a: 1, b: 2}):",
  compararObjetos({ a: 1, b: 2 }, { a: 1, b: 2 })
); // true
console.log(
  "compararObjetos({a: 1, b: 2}, {a: 1, b: 3}):",
  compararObjetos({ a: 1, b: 2 }, { a: 1, b: 3 })
); // false
console.log();

//==============================================================================
// 14. PATRONES COMUNES Y IDIOMS
//==============================================================================

console.log("\n═══ 14. PATRONES COMUNES ═══\n");

console.log("┌─ PATRÓN: Guard Clauses ─────────────────┐");
function procesarUsuario(usuario) {
  if (!usuario) return "Usuario no encontrado";
  if (!usuario.activo) return "Usuario inactivo";
  if (usuario.edad < 18) return "Usuario menor de edad";

  return `Procesando: ${usuario.nombre}`;
}
console.log("✅ Ejemplo:");
console.log(procesarUsuario(null)); // Usuario no encontrado
console.log(procesarUsuario({ activo: false })); // Usuario inactivo
console.log(procesarUsuario({ activo: true, edad: 16 })); // Usuario menor de edad
console.log(procesarUsuario({ activo: true, edad: 25, nombre: "Ana" })); // Procesando: Ana
console.log();

console.log("┌─ PATRÓN: Default Values ────────────────┐");
function saludar(nombre, saludo) {
  nombre = nombre || "Invitado";
  saludo = saludo ?? "Hola";
  return `${saludo}, ${nombre}!`;
}
console.log("✅ Ejemplo:");
console.log(saludar()); // Hola, Invitado!
console.log(saludar("Ana")); // Hola, Ana!
console.log(saludar("Carlos", "Buenos días")); // Buenos días, Carlos!
console.log();

console.log("┌─ PATRÓN: Range Checking ────────────────┐");
function clasificarTemperatura(temp) {
  if (temp < 0) return "Bajo cero";
  if (temp >= 0 && temp < 15) return "Frío";
  if (temp >= 15 && temp < 25) return "Templado";
  if (temp >= 25 && temp < 35) return "Calor";
  return "Muy caluroso";
}
console.log("✅ Ejemplo:");
console.log("Temperatura -5:", clasificarTemperatura(-5)); // Bajo cero
console.log("Temperatura 10:", clasificarTemperatura(10)); // Frío
console.log("Temperatura 20:", clasificarTemperatura(20)); // Templado
console.log("Temperatura 30:", clasificarTemperatura(30)); // Calor
console.log();

console.log("┌─ PATRÓN: Type Checking ─────────────────┐");
function procesarValor(valor) {
  if (typeof valor === "string") return `Texto: ${valor}`;
  if (typeof valor === "number") return `Número: ${valor}`;
  if (typeof valor === "boolean") return `Booleano: ${valor}`;
  if (Array.isArray(valor)) return `Array con ${valor.length} elementos`;
  if (valor === null) return "Valor nulo";
  if (valor === undefined) return "Valor indefinido";
  return "Tipo desconocido";
}
console.log("✅ Ejemplo:");
console.log(procesarValor("texto")); // Texto: texto
console.log(procesarValor(42)); // Número: 42
console.log(procesarValor(true)); // Booleano: true
console.log(procesarValor([1, 2, 3])); // Array con 3 elementos
console.log();

console.log("┌─ PATRÓN: Truthy/Falsy Check ────────────┐");
function validarFormulario(datos) {
  if (!datos.nombre) return "Falta el nombre";
  if (!datos.email) return "Falta el email";
  if (!datos.edad) return "Falta la edad";
  return "Formulario válido";
}
console.log("✅ Ejemplo:");
console.log(validarFormulario({ email: "test@test.com", edad: 25 })); // Falta el nombre
console.log(
  validarFormulario({ nombre: "Ana", email: "test@test.com", edad: 25 })
); // Formulario válido
console.log();

//==============================================================================
// 15. RESUMEN Y CHEATSHEET
//==============================================================================

console.log("\n═══ 15. RESUMEN FINAL ═══\n");

console.log("╔════════════════════════════════════════════════════╗");
console.log("║             CHEATSHEET RÁPIDO                      ║");
console.log("╠════════════════════════════════════════════════════╣");
console.log("║ OPERADOR │ SIGNIFICADO           │ EJEMPLO         ║");
console.log("╟──────────┼───────────────────────┼─────────────────╢");
console.log("║    ==    │ Igualdad débil        │ 5 == '5' → true ║");
console.log("║    ===   │ Igualdad estricta ✅  │ 5 === '5' → false║");
console.log("║    !=    │ Desigualdad débil     │ 5 != '5' → false║");
console.log("║    !==   │ Desigualdad estricta✅│ 5 !== '5' → true║");
console.log("║    >     │ Mayor que             │ 10 > 5 → true   ║");
console.log("║    <     │ Menor que             │ 5 < 10 → true   ║");
console.log("║    >=    │ Mayor o igual         │ 10 >= 10 → true ║");
console.log("║    <=    │ Menor o igual         │ 5 <= 10 → true  ║");
console.log("╚══════════╧═══════════════════════╧═════════════════╝");
console.log();

console.log("╔════════════════════════════════════════════════════╗");
console.log("║         REGLAS DE ORO - MEMORIZA ESTO             ║");
console.log("╠════════════════════════════════════════════════════╣");
console.log("║ 1️⃣  USA === y !== por defecto (99% de los casos)  ║");
console.log("║ 2️⃣  Solo usa == cuando REALMENTE lo necesites     ║");
console.log("║ 3️⃣  NaN !== NaN (único valor no igual a sí mismo) ║");
console.log("║ 4️⃣  null == undefined pero null !== undefined     ║");
console.log("║ 5️⃣  Objetos y arrays comparan REFERENCIAS         ║");
console.log("║ 6️⃣  Strings se comparan LEXICOGRÁFICAMENTE        ║");
console.log("║ 7️⃣  Evita < > con null/undefined                  ║");
console.log("║ 8️⃣  Usa Number.isNaN() para verificar NaN         ║");
console.log("║ 9️⃣  Convierte tipos EXPLÍCITAMENTE antes          ║");
console.log("║ 🔟 Valida tipos con typeof antes de comparar      ║");
console.log("╚════════════════════════════════════════════════════╝");
console.log();

console.log("╔════════════════════════════════════════════════════╗");
console.log("║              VALORES ESPECIALES                    ║");
console.log("╠════════════════════════════════════════════════════╣");
console.log("║ null:      ausencia intencional de valor          ║");
console.log("║ undefined: variable declarada pero sin valor      ║");
console.log("║ NaN:       resultado de operación inválida        ║");
console.log("║ Infinity:  número mayor que cualquier otro        ║");
console.log("║ -Infinity: número menor que cualquier otro        ║");
console.log("╚════════════════════════════════════════════════════╝");
console.log();

console.log("╔════════════════════════════════════════════════════╗");
console.log("║           CONVERSIONES AUTOMÁTICAS (==)            ║");
console.log("╠════════════════════════════════════════════════════╣");
console.log("║ String → Number:     '5' == 5 → true              ║");
console.log("║ Boolean → Number:    true == 1 → true             ║");
console.log("║ Empty string → 0:    '' == 0 → true               ║");
console.log("║ Array → String:      [5] == 5 → true              ║");
console.log("║ null/undefined:      null == undefined → true     ║");
console.log("╚════════════════════════════════════════════════════╝");
console.log();

console.log("✅ ¡GUÍA COMPLETADA!\n");
console.log("💡 CONSEJOS FINALES:");
console.log("• Practica estos operadores con ejercicios reales");
console.log("• Revisa esta guía cuando tengas dudas");
console.log("• Usa === por defecto, siempre");
console.log("• Entiende CUÁNDO y POR QUÉ usar ==");
console.log("• Mantén tu código predecible y seguro");
console.log();

console.log("═══════════════════════════════════════════════════════");
console.log("       ¡Gracias por completar esta guía!");
console.log("═══════════════════════════════════════════════════════\n");
