//--------------------------------------------------------------------------------------
// SEPARADORES NUMÉRICOS (ES2021)
//--------------------------------------------------------------------------------------

/*
Los separadores numéricos permiten que los literales numéricos sean más legibles
utilizando guiones bajos '_' como separadores visuales entre dígitos.
El guión bajo NO afecta el valor, solo mejora la legibilidad del código.
*/

//--------------------------------------------------------------------------------------
// USO BÁSICO
//--------------------------------------------------------------------------------------

// Números grandes
const millon = 1_000_000;
console.log(millon); // 1000000

const billonEuropeo = 1_000_000_000_000;
console.log(billonEuropeo); // 1000000000000000

// Decimales
const pi = 3.1415_9265;
console.log(pi); // 3.14159265

const precio = 1_234.56;
console.log(precio); // 1234.56

//--------------------------------------------------------------------------------------
// DIFERENTES SISTEMAS NUMÉRICOS
//--------------------------------------------------------------------------------------

// Binario
const binario = 0b1010_1111;
console.log(binario); // 175

// Octal
const octal = 0o12_34;
console.log(octal); // 668

// Hexadecimal
const hexadecimal = 0xff_ff;
console.log(hexadecimal); // 65535

const color = 0xff_00_aa;
console.log(color.toString(16)); // "ff00aa"

//--------------------------------------------------------------------------------------
// CASOS DE USO PRÁCTICOS
//--------------------------------------------------------------------------------------

// Tarjetas de crédito
const tarjeta = 1234_5678_9012_3456;
console.log(tarjeta);

// Números de teléfono
const telefono = 34_678_123_456;
console.log(telefono);

// Constantes científicas
const velocidadLuz = 299_792_458; // m/s
const masaTierra = 5_972_000_000_000_000_000_000_000; // kg

// Cantidades financieras
const presupuesto = 1_500_000;
const salario = 45_000;

// Poblaciones
const poblacionMadrid = 3_223_334;
const poblacionEspana = 47_450_795;

//--------------------------------------------------------------------------------------
// REGLAS Y RESTRICCIONES
//--------------------------------------------------------------------------------------

/*
✅ PERMITIDO:
  - Entre dígitos: 1_000
  - Múltiples separadores: 1_000_000
  - En decimales: 3.14_15
  - En diferentes bases: 0b1010_1111, 0xff_ff

❌ NO PERMITIDO:
  - Al inicio: _1000
  - Al final: 1000_
  - Dos guiones seguidos: 1__000
  - Junto al punto decimal: 3._14 o 3_.14
  - En notación exponencial: 1e_3
  - Después del prefijo de base: 0x_ff, 0b_1010
*/

// ✅ Ejemplos correctos
const correcto1 = 1_000_000;
const correcto2 = 0b1111_0000;
const correcto3 = 3.14_15_92;
const correcto4 = 1_2_3; // Poco común pero válido

// ❌ Ejemplos incorrectos (comentados para evitar error)
// const mal1 = _1000;        // SyntaxError
// const mal2 = 1000_;        // SyntaxError
// const mal3 = 1__000;       // SyntaxError
// const mal4 = 3._14;        // SyntaxError
// const mal5 = 3_.14;        // SyntaxError
// const mal6 = 1e_3;         // SyntaxError
// const mal7 = 0x_ff;        // SyntaxError

//--------------------------------------------------------------------------------------
// COMPATIBILIDAD CON BigInt
//--------------------------------------------------------------------------------------

const bigNumber = 123_456_789_012_345_678_901_234_567_890n;
console.log(typeof bigNumber); // "bigint"

//--------------------------------------------------------------------------------------
// VENTAJAS
//--------------------------------------------------------------------------------------

/*
1. LEGIBILIDAD: Facilita leer números grandes
   - Antes: 1000000000
   - Ahora: 1_000_000_000

2. AGRUPACIÓN LÓGICA: Agrupa según el contexto
   - Tarjetas: 1234_5678_9012_3456
   - Bytes: 0xff_ff_ff_ff
   - Miles: 1_000_000

3. MANTENIBILIDAD: Menos errores al contar ceros
   - ¿10 o 11 ceros? 1_000_000_000_000 (12 ceros, más claro)

4. SIN IMPACTO EN RENDIMIENTO: Solo afecta al código fuente
*/

//--------------------------------------------------------------------------------------
// COMPARACIÓN
//--------------------------------------------------------------------------------------

// Los separadores no afectan la igualdad
console.log(1000000 === 1_000_000); // true
console.log(1_2_3 === 123); // true

// El valor almacenado es idéntico
const a = 1000000;
const b = 1_000_000;
console.log(a === b); // true
