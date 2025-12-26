//==============================================================================
// OPERADORES DE ASIGNACIÓN EN JAVASCRIPT - GUÍA COMPLETA Y DEFINITIVA
//==============================================================================

console.log("╔════════════════════════════════════════════════════════════╗");
console.log("║   OPERADORES DE ASIGNACIÓN EN JAVASCRIPT - GUÍA COMPLETA   ║");
console.log("╚════════════════════════════════════════════════════════════╝\n");

//==============================================================================
// 1. OPERADOR DE ASIGNACIÓN BÁSICO
//==============================================================================

console.log("═══ 1. OPERADOR DE ASIGNACIÓN BÁSICO (=) ═══\n");

console.log("┌─ ASIGNACIÓN SIMPLE ────────────────────┐");
console.log("│ Asigna un valor a una variable         │");
console.log("└─────────────────────────────────────────┘");

let x = 10;
console.log("let x = 10");
console.log("x:", x); // 10

let nombre = "JavaScript";
console.log("let nombre = 'JavaScript'");
console.log("nombre:", nombre);

let activo = true;
console.log("let activo = true");
console.log("activo:", activo);
console.log();

console.log("┌─ ASIGNACIÓN MÚLTIPLE ──────────────────┐");
console.log("│ Asignar el mismo valor a varias vars   │");
console.log("└─────────────────────────────────────────┘");

let a, b, c;
a = b = c = 5; // Se evalúa de derecha a izquierda
console.log("a = b = c = 5");
console.log("a:", a, "b:", b, "c:", c); // 5 5 5
console.log("⚠️  Se evalúa de derecha a izquierda: c = 5, b = c, a = b");
console.log();

console.log("┌─ DECLARACIÓN MÚLTIPLE ─────────────────┐");
console.log("│ Declarar y asignar varias variables    │");
console.log("└─────────────────────────────────────────┘");

let p = 1,
  q = 2,
  r = 3;
console.log("let p = 1, q = 2, r = 3");
console.log("p:", p, "q:", q, "r:", r);
console.log();

//==============================================================================
// 2. OPERADORES DE ASIGNACIÓN ARITMÉTICA
//==============================================================================

console.log("\n═══ 2. OPERADORES DE ASIGNACIÓN ARITMÉTICA ═══\n");

console.log("┌─ SUMA Y ASIGNA (+=) ───────────────────┐");
console.log("│ x += y  equivale a  x = x + y           │");
console.log("└─────────────────────────────────────────┘");

let num1 = 10;
console.log("num1 inicial:", num1); // 10
num1 += 5; // num1 = num1 + 5
console.log("num1 += 5:", num1); // 15
num1 += 3;
console.log("num1 += 3:", num1); // 18

// Con strings (concatenación)
let texto = "Hola";
texto += " Mundo";
console.log("texto += ' Mundo':", texto); // "Hola Mundo"
console.log();

console.log("┌─ RESTA Y ASIGNA (-=) ──────────────────┐");
console.log("│ x -= y  equivale a  x = x - y           │");
console.log("└─────────────────────────────────────────┘");

let num2 = 20;
console.log("num2 inicial:", num2); // 20
num2 -= 7; // num2 = num2 - 7
console.log("num2 -= 7:", num2); // 13
num2 -= 3;
console.log("num2 -= 3:", num2); // 10
console.log();

console.log("┌─ MULTIPLICA Y ASIGNA (*=) ─────────────┐");
console.log("│ x *= y  equivale a  x = x * y           │");
console.log("└─────────────────────────────────────────┘");

let num3 = 4;
console.log("num3 inicial:", num3); // 4
num3 *= 3; // num3 = num3 * 3
console.log("num3 *= 3:", num3); // 12
num3 *= 2;
console.log("num3 *= 2:", num3); // 24
console.log();

console.log("┌─ DIVIDE Y ASIGNA (/=) ─────────────────┐");
console.log("│ x /= y  equivale a  x = x / y           │");
console.log("└─────────────────────────────────────────┘");

let num4 = 100;
console.log("num4 inicial:", num4); // 100
num4 /= 5; // num4 = num4 / 5
console.log("num4 /= 5:", num4); // 20
num4 /= 2;
console.log("num4 /= 2:", num4); // 10
console.log();

console.log("┌─ MÓDULO Y ASIGNA (%=) ─────────────────┐");
console.log("│ x %= y  equivale a  x = x % y           │");
console.log("└─────────────────────────────────────────┘");

let num5 = 17;
console.log("num5 inicial:", num5); // 17
num5 %= 5; // num5 = num5 % 5
console.log("num5 %= 5:", num5); // 2
num5 %= 2;
console.log("num5 %= 2:", num5); // 0
console.log();

console.log("┌─ POTENCIA Y ASIGNA (**=) ──────────────┐");
console.log("│ x **= y  equivale a  x = x ** y         │");
console.log("└─────────────────────────────────────────┘");

let num6 = 2;
console.log("num6 inicial:", num6); // 2
num6 **= 3; // num6 = num6 ** 3
console.log("num6 **= 3:", num6); // 8
num6 **= 2;
console.log("num6 **= 2:", num6); // 64
console.log();

//==============================================================================
// 3. OPERADORES DE ASIGNACIÓN BITWISE (A NIVEL DE BITS)
//==============================================================================

console.log("\n═══ 3. OPERADORES DE ASIGNACIÓN BITWISE ═══\n");

console.log("┌─ QUÉ SON LOS OPERADORES BITWISE ───────┐");
console.log("│ Trabajan con la representación binaria │");
console.log("│ de los números (0s y 1s)                │");
console.log("│ Menos comunes pero muy eficientes       │");
console.log("└─────────────────────────────────────────┘");
console.log();

console.log("┌─ AND BITWISE Y ASIGNA (&=) ────────────┐");
console.log("│ x &= y  equivale a  x = x & y           │");
console.log("│ Realiza AND bit a bit                   │");
console.log("└─────────────────────────────────────────┘");

let bit1 = 12; // 1100 en binario
console.log(
  "bit1 inicial:",
  bit1,
  "→ binario:",
  bit1.toString(2).padStart(8, "0")
);
bit1 &= 10; // 12 & 10 → 1100 & 1010 = 1000 → 8
console.log(
  "bit1 &= 10:",
  bit1,
  "→ binario:",
  bit1.toString(2).padStart(8, "0")
);
console.log("Explicación: 1100 & 1010 = 1000 (8)");
console.log();

console.log("┌─ OR BITWISE Y ASIGNA (|=) ─────────────┐");
console.log("│ x |= y  equivale a  x = x | y           │");
console.log("│ Realiza OR bit a bit                    │");
console.log("└─────────────────────────────────────────┘");

let bit2 = 12; // 1100 en binario
console.log(
  "bit2 inicial:",
  bit2,
  "→ binario:",
  bit2.toString(2).padStart(8, "0")
);
bit2 |= 10; // 12 | 10 → 1100 | 1010 = 1110 → 14
console.log(
  "bit2 |= 10:",
  bit2,
  "→ binario:",
  bit2.toString(2).padStart(8, "0")
);
console.log("Explicación: 1100 | 1010 = 1110 (14)");
console.log();

console.log("┌─ XOR BITWISE Y ASIGNA (^=) ────────────┐");
console.log("│ x ^= y  equivale a  x = x ^ y           │");
console.log("│ Realiza XOR bit a bit                   │");
console.log("│ (1 si son diferentes, 0 si son iguales) │");
console.log("└─────────────────────────────────────────┘");

let bit3 = 12; // 1100 en binario
console.log(
  "bit3 inicial:",
  bit3,
  "→ binario:",
  bit3.toString(2).padStart(8, "0")
);
bit3 ^= 10; // 12 ^ 10 → 1100 ^ 1010 = 0110 → 6
console.log(
  "bit3 ^= 10:",
  bit3,
  "→ binario:",
  bit3.toString(2).padStart(8, "0")
);
console.log("Explicación: 1100 ^ 1010 = 0110 (6)");
console.log();

console.log("┌─ DESPLAZAMIENTO IZQUIERDA (<<=) ───────┐");
console.log("│ x <<= y  equivale a  x = x << y         │");
console.log("│ Desplaza bits a la izquierda            │");
console.log("│ Equivale a multiplicar por 2^y          │");
console.log("└─────────────────────────────────────────┘");

let bit4 = 5; // 00000101 en binario
console.log(
  "bit4 inicial:",
  bit4,
  "→ binario:",
  bit4.toString(2).padStart(8, "0")
);
bit4 <<= 1; // 5 << 1 → 00000101 << 1 = 00001010 → 10
console.log(
  "bit4 <<= 1:",
  bit4,
  "→ binario:",
  bit4.toString(2).padStart(8, "0")
);
console.log("Explicación: desplazar 1 posición = multiplicar por 2");

bit4 = 5;
bit4 <<= 2; // 5 << 2 → 00000101 << 2 = 00010100 → 20
console.log("5 <<= 2:", bit4, "→ binario:", bit4.toString(2).padStart(8, "0"));
console.log("Explicación: desplazar 2 posiciones = multiplicar por 4");
console.log();

console.log("┌─ DESPLAZAMIENTO DERECHA (>>=) ─────────┐");
console.log("│ x >>= y  equivale a  x = x >> y         │");
console.log("│ Desplaza bits a la derecha              │");
console.log("│ Equivale a dividir por 2^y (truncado)   │");
console.log("└─────────────────────────────────────────┘");

let bit5 = 20; // 00010100 en binario
console.log(
  "bit5 inicial:",
  bit5,
  "→ binario:",
  bit5.toString(2).padStart(8, "0")
);
bit5 >>= 1; // 20 >> 1 → 00010100 >> 1 = 00001010 → 10
console.log(
  "bit5 >>= 1:",
  bit5,
  "→ binario:",
  bit5.toString(2).padStart(8, "0")
);
console.log("Explicación: desplazar 1 posición = dividir por 2");

bit5 = 20;
bit5 >>= 2; // 20 >> 2 → 00010100 >> 2 = 00000101 → 5
console.log("20 >>= 2:", bit5, "→ binario:", bit5.toString(2).padStart(8, "0"));
console.log("Explicación: desplazar 2 posiciones = dividir por 4");
console.log();

console.log("┌─ DESPLAZAMIENTO DERECHA SIN SIGNO (>>>=) ┐");
console.log("│ x >>>= y  equivale a  x = x >>> y         │");
console.log("│ Desplaza rellenando con 0s                │");
console.log("│ Útil para números sin signo                │");
console.log("└───────────────────────────────────────────┘");

let bit6 = -5; // Número negativo
console.log("bit6 inicial:", bit6, "→ binario:", (bit6 >>> 0).toString(2));
bit6 >>>= 1;
console.log("bit6 >>>= 1:", bit6, "→ binario:", bit6.toString(2));
console.log("⚠️  Con negativos, >>> trata el número como sin signo");
console.log();

//==============================================================================
// 4. OPERADORES DE ASIGNACIÓN LÓGICA (ES2021+)
//==============================================================================

console.log("\n═══ 4. OPERADORES DE ASIGNACIÓN LÓGICA (ES2021+) ═══\n");

console.log("┌─ AND LÓGICO Y ASIGNA (&&=) ────────────┐");
console.log("│ x &&= y  →  if (x) x = y                │");
console.log("│ Solo asigna si x es truthy              │");
console.log("└─────────────────────────────────────────┘");

let log1 = true;
console.log("log1 inicial:", log1);
log1 &&= "nuevo valor"; // Como log1 es true, asigna
console.log("log1 &&= 'nuevo valor':", log1); // "nuevo valor"

let log2 = false;
console.log("log2 inicial:", log2);
log2 &&= "nuevo valor"; // Como log2 es false, NO asigna
console.log("log2 &&= 'nuevo valor':", log2); // false

let log3 = "existe";
console.log("log3 inicial:", log3);
log3 &&= "reemplazado";
console.log("log3 &&= 'reemplazado':", log3); // "reemplazado"
console.log();

console.log("┌─ OR LÓGICO Y ASIGNA (||=) ─────────────┐");
console.log("│ x ||= y  →  if (!x) x = y               │");
console.log("│ Solo asigna si x es falsy               │");
console.log("│ Útil para valores por defecto           │");
console.log("└─────────────────────────────────────────┘");

let log4 = null;
console.log("log4 inicial:", log4);
log4 ||= "valor por defecto"; // Como log4 es null (falsy), asigna
console.log("log4 ||= 'valor por defecto':", log4); // "valor por defecto"

let log5 = "ya existe";
console.log("log5 inicial:", log5);
log5 ||= "valor por defecto"; // Como log5 es truthy, NO asigna
console.log("log5 ||= 'valor por defecto':", log5); // "ya existe"

let config = {
  nombre: null,
  edad: 0,
  ciudad: "",
};
console.log("\nconfig inicial:", config);
config.nombre ||= "Anónimo";
config.edad ||= 18; // ⚠️ 0 es falsy, entonces asigna
config.ciudad ||= "Desconocida";
console.log("Después de ||=:", config);
console.log("⚠️  Nota: 0 es falsy, entonces se reemplaza");
console.log();

console.log("┌─ NULLISH COALESCING Y ASIGNA (??=) ───┐");
console.log("│ x ??= y  →  if (x == null) x = y       │");
console.log("│ Solo asigna si x es null o undefined   │");
console.log("│ NO considera falsy como 0 o ''          │");
console.log("└─────────────────────────────────────────┘");

let log6 = null;
console.log("log6 inicial:", log6);
log6 ??= "valor por defecto"; // null → asigna
console.log("log6 ??= 'valor por defecto':", log6); // "valor por defecto"

let log7 = 0;
console.log("log7 inicial:", log7);
log7 ??= 100; // 0 NO es null/undefined → NO asigna
console.log("log7 ??= 100:", log7); // 0 (mantiene el 0)

let log8 = "";
console.log("log8 inicial:", log8);
log8 ??= "texto"; // "" NO es null/undefined → NO asigna
console.log('log8 ??= "texto":', log8); // "" (mantiene string vacío)

let log9 = undefined;
console.log("log9 inicial:", log9);
log9 ??= "definido"; // undefined → asigna
console.log("log9 ??= 'definido':", log9); // "definido"

let config2 = {
  nombre: null,
  edad: 0,
  ciudad: "",
  pais: undefined,
};
console.log("\nconfig2 inicial:", config2);
config2.nombre ??= "Anónimo";
config2.edad ??= 18; // NO asigna (0 no es null/undefined)
config2.ciudad ??= "Desconocida"; // NO asigna ("" no es null/undefined)
config2.pais ??= "España"; // Asigna (undefined)
console.log("Después de ??=:", config2);
console.log("✅ ??= es mejor para valores por defecto");
console.log();

//==============================================================================
// 5. COMPARACIÓN: ||= vs ??=
//==============================================================================

console.log("\n═══ 5. COMPARACIÓN: ||= vs ??= ═══\n");

console.log("┌─ DIFERENCIAS CLAVE ────────────────────┐");
console.log("│ ||=  asigna si el valor es FALSY       │");
console.log("│      (false, 0, '', null, undefined)    │");
console.log("│                                         │");
console.log("│ ??=  asigna solo si es NULL/UNDEFINED   │");
console.log("│      (ignora 0, '', false)              │");
console.log("└─────────────────────────────────────────┘");
console.log();

console.log("EJEMPLO COMPARATIVO:\n");

// Con ||=
let contador1 = 0;
contador1 ||= 10;
console.log("||= con 0:", contador1); // 10 (0 es falsy)

let texto1 = "";
texto1 ||= "default";
console.log("||= con '':", texto1); // "default" ("" es falsy)

// Con ??=
let contador2 = 0;
contador2 ??= 10;
console.log("??= con 0:", contador2); // 0 (0 no es null/undefined)

let texto2 = "";
texto2 ??= "default";
console.log("??= con '':", texto2); // "" ("" no es null/undefined)

console.log("\n┌─ CUÁNDO USAR CADA UNO ─────────────────┐");
console.log("│ ||=  → Para cualquier valor falsy       │");
console.log("│ ??=  → Solo para null/undefined         │");
console.log("│         (mejor para valores por defecto)│");
console.log("└─────────────────────────────────────────┘");
console.log();

//==============================================================================
// 6. DESESTRUCTURACIÓN CON ASIGNACIÓN
//==============================================================================

console.log("\n═══ 6. DESESTRUCTURACIÓN CON ASIGNACIÓN ═══\n");

console.log("┌─ DESESTRUCTURACIÓN DE ARRAYS ──────────┐");
let [primero, segundo, tercero] = [10, 20, 30];
console.log("let [primero, segundo, tercero] = [10, 20, 30]");
console.log("primero:", primero); // 10
console.log("segundo:", segundo); // 20
console.log("tercero:", tercero); // 30
console.log();

// Con valores por defecto
let [d1 = 1, d2 = 2, d3 = 3] = [100, 200];
console.log("let [d1=1, d2=2, d3=3] = [100, 200]");
console.log("d1:", d1, "d2:", d2, "d3:", d3); // 100 200 3
console.log();

// Intercambiar variables
let v1 = 5,
  v2 = 10;
console.log("Antes del swap - v1:", v1, "v2:", v2);
[v1, v2] = [v2, v1];
console.log("Después del swap - v1:", v1, "v2:", v2);
console.log();

console.log("┌─ DESESTRUCTURACIÓN DE OBJETOS ─────────┐");
let {
  nombre2,
  edad,
  ciudad = "Desconocida",
} = {
  nombre2: "Ana",
  edad: 25,
};
console.log("let {nombre, edad, ciudad='Desconocida'} = {...}");
console.log("nombre:", nombre); // "Ana"
console.log("edad:", edad); // 25
console.log("ciudad:", ciudad); // "Desconocida" (valor por defecto)
console.log();

// Con renombrado
let { nombre: n, edad: e } = { nombre: "Carlos", edad: 30 };
console.log("let {nombre: n, edad: e} = {...}");
console.log("n:", n, "e:", e); // "Carlos" 30
console.log();

//==============================================================================
// 7. CASOS DE USO PRÁCTICOS
//==============================================================================

console.log("\n═══ 7. CASOS DE USO PRÁCTICOS ═══\n");

console.log("┌─ ACUMULADORES ─────────────────────────┐");
function calcularTotal(productos) {
  let total = 0;
  for (const prod of productos) {
    total += prod.precio;
  }
  return total;
}
const productos = [
  { nombre: "Libro", precio: 15 },
  { nombre: "Pluma", precio: 3 },
  { nombre: "Cuaderno", precio: 7 },
];
console.log("Total de productos:", calcularTotal(productos)); // 25
console.log();

console.log("┌─ CONTADORES ───────────────────────────┐");
function contarPares(numeros) {
  let contador = 0;
  for (const num of numeros) {
    if (num % 2 === 0) contador++;
  }
  return contador;
}
console.log("Pares en [1,2,3,4,5,6]:", contarPares([1, 2, 3, 4, 5, 6])); // 3
console.log();

console.log("┌─ CONCATENACIÓN DE STRINGS ─────────────┐");
function crearLista(items) {
  let resultado = "Lista de compras:\n";
  for (let i = 0; i < items.length; i++) {
    resultado += `${i + 1}. ${items[i]}\n`;
  }
  return resultado;
}
console.log(crearLista(["Pan", "Leche", "Huevos"]));

console.log("┌─ VALORES POR DEFECTO CON ??= ──────────┐");
function configurarUsuario(opciones) {
  opciones.tema ??= "claro";
  opciones.idioma ??= "es";
  opciones.notificaciones ??= true;
  return opciones;
}
let usuario1 = { tema: "oscuro" };
console.log("Usuario sin idioma:", configurarUsuario(usuario1));
// {tema: "oscuro", idioma: "es", notificaciones: true}
console.log();

console.log("┌─ APLICAR DESCUENTO ACUMULATIVO ───────┐");
let precio = 100;
console.log("Precio inicial:", precio);
precio *= 0.9; // 10% descuento
console.log("Después del 10% descuento:", precio);
precio *= 0.95; // 5% descuento adicional
console.log("Después del 5% descuento:", precio);
console.log();

console.log("┌─ DUPLICAR CAPACIDAD (BITWISE) ─────────┐");
let capacidad = 8;
console.log("Capacidad inicial:", capacidad);
capacidad <<= 1; // Equivale a capacidad *= 2
console.log("Después de duplicar (<<= 1):", capacidad); // 16
capacidad <<= 1;
console.log("Después de duplicar otra vez:", capacidad); // 32
console.log("✅ Más eficiente que *= 2 en operaciones de bajo nivel");
console.log();

console.log("┌─ REDUCIR A LA MITAD (BITWISE) ─────────┐");
let cantidad = 64;
console.log("Cantidad inicial:", cantidad);
cantidad >>= 1; // Equivale a Math.floor(cantidad / 2)
console.log("Después de reducir (>>= 1):", cantidad); // 32
cantidad >>= 1;
console.log("Después de reducir otra vez:", cantidad); // 16
console.log("✅ Más eficiente que /= 2 para división entera");
console.log();

console.log("┌─ TOGGLE DE FLAGS CON XOR (^=) ─────────┐");
let flag = 5; // 0101 en binario
console.log("flag inicial:", flag, "→", flag.toString(2));
flag ^= 1; // Toggle del bit menos significativo
console.log("flag ^= 1:", flag, "→", flag.toString(2)); // 4 → 0100
flag ^= 1;
console.log("flag ^= 1:", flag, "→", flag.toString(2)); // 5 → 0101
console.log("✅ XOR es útil para alternar bits específicos");
console.log();

//==============================================================================
// 8. COMBINACIÓN DE OPERADORES
//==============================================================================

console.log("\n═══ 8. COMBINACIÓN DE OPERADORES ═══\n");

console.log("┌─ OPERACIONES ENCADENADAS ──────────────┐");
let valor = 10;
console.log("valor inicial:", valor);
valor += 5; // 15
valor *= 2; // 30
valor -= 10; // 20
valor /= 4; // 5
console.log("valor después de +=5, *=2, -=10, /=4:", valor);
console.log();

console.log("┌─ ASIGNACIÓN CON EXPRESIONES ───────────┐");
let base = 5;
base += base * 2; // base = base + (base * 2) = 5 + 10 = 15
console.log("base += base * 2:", base);

let mult = 3;
mult *= mult + 1; // mult = mult * (mult + 1) = 3 * 4 = 12
console.log("mult *= mult + 1:", mult);
console.log();

console.log("┌─ ASIGNACIÓN EN CONDICIONES ────────────┐");
let puntos = 0;
let bonificacion = 10;
let gano = true;

if (gano) {
  puntos += bonificacion;
}
console.log("puntos:", puntos); // 10

// Versión con operador ternario
puntos = 0;
puntos += gano ? bonificacion : 0;
console.log("puntos (con ternario):", puntos); // 10
console.log();

//==============================================================================
// 9. ERRORES COMUNES Y MEJORES PRÁCTICAS
//==============================================================================

console.log("\n═══ 9. ERRORES COMUNES Y MEJORES PRÁCTICAS ═══\n");

console.log("┌─ ERROR: Confundir = con == o === ─────┐");
console.log("❌ if (x = 5) // Asignación, siempre true si 5 es truthy");
console.log("✅ if (x === 5) // Comparación");
console.log("⚠️  = asigna, === compara");
console.log();

console.log("┌─ ERROR: Operaciones con undefined ────┐");
let indefinido;
console.log("indefinido inicial:", indefinido);
// indefinido += 5; // ❌ NaN
console.log("❌ indefinido += 5 // Resultado: NaN");
indefinido = 0;
indefinido += 5;
console.log("✅ Inicializa primero:", indefinido); // 5
console.log();

console.log("┌─ ERROR: Modificar const ───────────────┐");
console.log("❌ const PI = 3.14;");
console.log("   PI += 1; // ERROR: Assignment to constant");
console.log("✅ Usa let o var para variables mutables");
console.log();

console.log("┌─ ERROR: Concatenación no deseada ─────┐");
let num = "5";
num += 3;
console.log("❌ let num = '5'; num += 3");
console.log("   Resultado:", num); // "53" (concatenación)
num = 5;
num += 3;
console.log("✅ let num = 5; num += 3");
console.log("   Resultado:", num); // 8 (suma)
console.log();

console.log("┌─ ERROR: Precedencia en asignación ────┐");
let res = 2;
// res *= 3 + 5; // res = res * (3 + 5) = 2 * 8 = 16
console.log("res *= 3 + 5 // res era 2");
res *= 3 + 5;
console.log("Resultado:", res); // 16 (no 11)
console.log("⚠️  Primero se evalúa 3 + 5, luego res * 8");
console.log();

console.log("┌─ MEJORES PRÁCTICAS ────────────────────┐");
console.log("│ ✓ Usa const por defecto, let si cambia │");
console.log("│ ✓ Prefiere += sobre x = x +            │");
console.log("│ ✓ Usa ??= para valores por defecto     │");
console.log("│ ✓ Evita asignaciones en condiciones    │");
console.log("│ ✓ Inicializa variables antes de +=     │");
console.log("│ ✓ Ten cuidado con tipos al usar +=     │");
console.log("│ ✓ Usa operadores bitwise con precaución│");
console.log("│ ✓ Documenta operaciones bitwise        │");
console.log("│ ✓ Prefiere claridad sobre brevedad     │");
console.log("└─────────────────────────────────────────┘");
console.log();

//==============================================================================
// 10. RENDIMIENTO: OPERADORES NORMALES vs COMPUESTOS
//==============================================================================

console.log("\n═══ 10. RENDIMIENTO ═══\n");

console.log("┌─ ¿HAY DIFERENCIA DE RENDIMIENTO? ─────┐");
console.log("│ En JavaScript moderno, NO hay          │");
console.log("│ diferencia significativa entre:        │");
console.log("│   x = x + 5   vs   x += 5              │");
console.log("│                                        │");
console.log("│ Los motores JS optimizan ambos casos  │");
console.log("│                                        │");
console.log("│ VENTAJAS de usar +=:                   │");
console.log("│ • Más conciso y legible                │");
console.log("│ • Menos propenso a errores tipográficos│");
console.log("│ • Convención estándar en programación │");
console.log("└────────────────────────────────────────┘");
console.log();

console.log("┌─ OPERADORES BITWISE: SÍ MÁS RÁPIDOS ──┐");
console.log("│ Los operadores bitwise (<<, >>, &, |)  │");
console.log("│ son MÁS RÁPIDOS que sus equivalentes:  │");
console.log("│                                        │");
console.log("│   x <<= 1  es más rápido que  x *= 2   │");
console.log("│   x >>= 1  es más rápido que  x /= 2   │");
console.log("│                                        │");
console.log("│ PERO: solo úsalos si:                  │");
console.log("│ • Trabajas con enteros                 │");
console.log("│ • Necesitas máximo rendimiento         │");
console.log("│ • El código sigue siendo legible       │");
console.log("└────────────────────────────────────────┘");
console.log();

//==============================================================================
// 11. TABLA COMPARATIVA COMPLETA
//==============================================================================

console.log("\n═══ 11. TABLA COMPARATIVA COMPLETA ═══\n");

const tablaOperadores = `
┌──────────────────────────────────────────────────────────────────┐
│                  OPERADORES DE ASIGNACIÓN                        │
├───────────┬──────────────────┬────────────────────────────────────┤
│ Operador  │ Equivalente a    │ Ejemplo                            │
├───────────┼──────────────────┼────────────────────────────────────┤
│ ARITMÉTICOS                                                       │
├───────────┼──────────────────┼────────────────────────────────────┤
│ =         │ Asignación       │ x = 5                              │
│ +=        │ x = x + y        │ x = 10; x += 5; // 15              │
│ -=        │ x = x - y        │ x = 10; x -= 3; // 7               │
│ *=        │ x = x * y        │ x = 10; x *= 2; // 20              │
│ /=        │ x = x / y        │ x = 10; x /= 2; // 5               │
│ %=        │ x = x % y        │ x = 10; x %= 3; // 1               │
│ **=       │ x = x ** y       │ x = 2; x **= 3; // 8               │
├───────────┼──────────────────┼────────────────────────────────────┤
│ BITWISE (A NIVEL DE BITS)                                         │
├───────────┼──────────────────┼────────────────────────────────────┤
│ &=        │ x = x & y        │ x = 12; x &= 10; // 8              │
│ |=        │ x = x | y        │ x = 12; x |= 3; // 15              │
│ ^=        │ x = x ^ y        │ x = 12; x ^= 10; // 6              │
│ <<=       │ x = x << y       │ x = 5; x <<= 1; // 10              │
│ >>=       │ x = x >> y       │ x = 10; x >>= 1; // 5              │
│ >>>=      │ x = x >>> y      │ x = -5; x >>>= 1; // gran número   │
├───────────┼──────────────────┼────────────────────────────────────┤
│ LÓGICOS (ES2021+)                                                 │
├───────────┼──────────────────┼────────────────────────────────────┤
│ &&=       │ if (x) x = y     │ x = true; x &&= 5; // 5            │
│ ||=       │ if (!x) x = y    │ x = null; x ||= 5; // 5            │
│ ??=       │ if (x==null)x=y  │ x = 0; x ??= 5; // 0               │
└───────────┴──────────────────┴────────────────────────────────────┘
`;

console.log(tablaOperadores);

//==============================================================================
// 12. EJERCICIOS PRÁCTICOS
//==============================================================================

console.log("\n═══ 12. EJERCICIOS PRÁCTICOS ═══\n");

console.log("┌─ EJERCICIO 1: Calculadora de propinas ┐");
function calcularPropina(cuenta, porcentaje = 15) {
  cuenta *= (100 + porcentaje) / 100;
  return cuenta.toFixed(2);
}
console.log("Cuenta de $50 con 15% propina:", calcularPropina(50));
console.log("Cuenta de $100 con 20% propina:", calcularPropina(100, 20));
console.log();

console.log("┌─ EJERCICIO 2: Contador de palabras ───┐");
function contarPalabras(texto) {
  let contador = 0;
  const palabras = texto.trim().split(/\s+/);
  contador += palabras.length;
  return contador;
}
console.log(
  "Palabras en 'Hola mundo JavaScript':",
  contarPalabras("Hola mundo JavaScript")
);
console.log();

console.log("┌─ EJERCICIO 3: Aplicar múltiples desc. ┐");
function aplicarDescuentos(precio, descuentos) {
  for (const desc of descuentos) {
    precio *= (100 - desc) / 100;
  }
  return precio.toFixed(2);
}
console.log(
  "$100 con descuentos [10, 20, 5]%:",
  aplicarDescuentos(100, [10, 20, 5])
);
console.log();

console.log("┌─ EJERCICIO 4: Construir URL ──────────┐");
function construirURL(base, params = {}) {
  let url = base;
  let primerParam = true;

  for (const [clave, valor] of Object.entries(params)) {
    url += primerParam ? "?" : "&";
    url += `${clave}=${valor}`;
    primerParam = false;
  }

  return url;
}
console.log(
  construirURL("https://api.ejemplo.com/buscar", {
    q: "javascript",
    page: 1,
    limit: 10,
  })
);
console.log();

console.log("┌─ EJERCICIO 5: Sistema de puntos ──────┐");
function calcularPuntaje(acciones) {
  let puntos = 0;

  for (const accion of acciones) {
    switch (accion) {
      case "ganar":
        puntos += 100;
        break;
      case "empatar":
        puntos += 50;
        break;
      case "perder":
        puntos -= 25;
        break;
      case "bonus":
        puntos *= 1.5;
        break;
    }
  }

  return Math.floor(puntos);
}
console.log("Puntaje:", calcularPuntaje(["ganar", "ganar", "bonus", "perder"]));
// (100 + 100) * 1.5 - 25 = 275
console.log();

console.log("┌─ EJERCICIO 6: Comprimir número ───────┐");
function comprimirNumero(num) {
  // Reduce el número a la mitad usando bitwise
  let pasos = 0;
  while (num > 1) {
    num >>= 1;
    pasos++;
  }
  return pasos;
}
console.log("Pasos para comprimir 16 a 1:", comprimirNumero(16)); // 4
console.log("Pasos para comprimir 100 a 1:", comprimirNumero(100)); // 6
console.log();

//==============================================================================
// 13. RESUMEN FINAL
//==============================================================================

console.log("\n╔════════════════════════════════════════════════════════════╗");
console.log("║                    RESUMEN FINAL                           ║");
console.log("╚════════════════════════════════════════════════════════════╝\n");

const resumenFinal = `
┌─────────────────────────────────────────────────────────────────┐
│ CONCEPTOS CLAVE                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 1. OPERADOR BÁSICO DE ASIGNACIÓN (=)                            │
│    • Asigna un valor a una variable                             │
│    • Se evalúa de derecha a izquierda                           │
│    • a = b = c = 5  →  todos valen 5                            │
│                                                                 │
│ 2. OPERADORES ARITMÉTICOS COMPUESTOS                            │
│    • +=  -=  *=  /=  %=  **=                                    │
│    • Más concisos que x = x + y                                 │
│    • Menos propensos a errores                                  │
│                                                                 │
│ 3. OPERADORES BITWISE                                           │
│    • &=  |=  ^=  <<=  >>=  >>>=                                 │
│    • Trabajan a nivel de bits                                   │
│    • Muy eficientes para ciertas operaciones                    │
│    • <<= multiplica por potencias de 2                          │
│    • >>= divide por potencias de 2                              │
│                                                                 │
│ 4. OPERADORES LÓGICOS (ES2021+)                                 │
│    • &&=  →  Asigna solo si es truthy                           │
│    • ||=  →  Asigna solo si es falsy                            │
│    • ??=  →  Asigna solo si es null/undefined                   │
│    • ??= es el mejor para valores por defecto                   │
│                                                                 │
│ 5. DIFERENCIAS IMPORTANTES                                      │
│    • ||= trata 0, "", false como valores a reemplazar           │
│    • ??= solo trata null/undefined como valores a reemplazar    │
│    • Ejemplo: x = 0; x ||= 5 → x es 5                           │
│    •          x = 0; x ??= 5 → x es 0                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ CUÁNDO USAR CADA OPERADOR                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ +=    Acumular, sumar, concatenar strings                       │
│ -=    Restar, decrementar contadores                            │
│ *=    Multiplicar, aplicar factores                             │
│ /=    Dividir, promediar                                        │
│ %=    Operaciones cíclicas, módulo                              │
│ **=   Potencias, crecimiento exponencial                        │
│                                                                 │
│ <<=   Duplicar (multiplicar por 2^n)                            │
│ >>=   Reducir a la mitad (dividir por 2^n)                      │
│ &=    Máscaras de bits, filtros                                 │
│ |=    Combinar flags                                            │
│ ^=    Toggle de bits                                            │
│                                                                 │
│ ??=   Valores por defecto (recomendado)                         │
│ ||=   Valores por defecto (incluye falsy)                       │
│ &&=   Asignación condicional                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ ERRORES A EVITAR                                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ❌ Confundir = (asignación) con === (comparación)               │
│ ❌ Usar += con variables undefined                              │
│ ❌ Concatenación no deseada: "5" + 3 = "53"                     │
│ ❌ Modificar constantes                                         │
│ ❌ No inicializar acumuladores (let total;)                     │
│ ❌ Usar ||= cuando quieres mantener 0 o ""                      │
│                                                                 │
│ ✅ Inicializa siempre: let total = 0;                           │
│ ✅ Usa const si no vas a reasignar                              │
│ ✅ Convierte tipos: Number(x) += 5                              │
│ ✅ Prefiere ??= para valores por defecto                        │
│ ✅ Usa bitwise solo con enteros                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ MEJORES PRÁCTICAS                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 1. Usa const por defecto, let solo si la variable cambia       │
│ 2. Prefiere operadores compuestos (+=) sobre x = x +           │
│ 3. Inicializa variables antes de usar +=, *=, etc.             │
│ 4. Usa ??= para establecer valores por defecto                  │
│ 5. Documenta operaciones bitwise (no son obvias)               │
│ 6. Ten cuidado con tipos al usar += (string vs número)         │
│ 7. Evita asignaciones dentro de condiciones if                 │
│ 8. Usa nombres descriptivos para variables                     │
│ 9. Agrupa operaciones relacionadas                             │
│ 10. Prueba siempre con valores límite (0, null, undefined)     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
`;

console.log(resumenFinal);

console.log("\n╔════════════════════════════════════════════════════════════╗");
console.log("║              ¡FIN DE LA GUÍA COMPLETA!                     ║");
console.log("║                                                            ║");
console.log("║  Ahora dominas todos los operadores de asignación de JS   ║");
console.log("║  Practica con los ejercicios para consolidar el aprendizaje║");
console.log("╚════════════════════════════════════════════════════════════╝\n");
