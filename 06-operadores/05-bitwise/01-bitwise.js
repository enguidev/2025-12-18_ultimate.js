// ============================================================
// 🔢 OPERADORES BITWISE EN JAVASCRIPT - EXPLICADO PARA TONTOS
// ============================================================

// ============================================================
// PARTE 1: ¿QUÉ DIABLOS ES TODO ESTO? 🤔
// ============================================================

/*
OK, EMPECEMOS DESDE CERO, PERO DE VERDAD DESDE CERO:

Imagina que solo puedes contar con los dedos de UNA mano, y que solo tienes 2 dedos.
- Dedo arriba = 1
- Dedo abajo = 0

Eso es binario. Solo hay 1s y 0s. Nada más.

EJEMPLO VISUAL:
Tu dedo índice abajo, pulgar arriba:  0 1  → Esto es el número 1
Ambos dedos arriba:                   1 1  → Esto es el número 3
Índice arriba, pulgar abajo:          1 0  → Esto es el número 2

¿Confundido? Normal. Vamos paso a paso...
*/

console.log("============ ¿CÓMO FUNCIONA EL BINARIO? ============");
console.log("\nEn DECIMAL (el que usamos normalmente):");
console.log("Tenemos 10 dígitos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9");
console.log("Cuando llegamos a 9, pasamos a 10");
console.log("");
console.log("En BINARIO (solo 2 dígitos):");
console.log("Tenemos 2 dígitos: 0, 1");
console.log("Cuando llegamos a 1, pasamos a 10");
console.log("");
console.log("CONTANDO EN BINARIO:");
console.log("0 = 0");
console.log("1 = 1");
console.log("2 = 10  (se nos acabaron los dígitos, pasamos al siguiente)");
console.log("3 = 11  (uno y uno)");
console.log("4 = 100 (se nos acabó de nuevo, siguiente nivel)");
console.log("5 = 101");
console.log("6 = 110");
console.log("7 = 111");
console.log("8 = 1000");

/*
PIÉNSALO ASÍ:

En decimal: 
  325 = 3×100 + 2×10 + 1×1
  (cada posición vale 10 veces más que la anterior)

En binario:
  101 = 1×4 + 0×2 + 1×1 = 5
  (cada posición vale 2 veces más que la anterior)

Posiciones en binario (de derecha a izquierda):
Posición:  ...  7    6    5    4    3    2    1    0
Valor:     ... 128  64   32   16   8    4    2    1
*/

console.log("\n============ CONVERSIÓN: DECIMAL ↔ BINARIO ============");
// JavaScript tiene una función mágica para esto:
console.log("5 en binario:", (5).toString(2));
console.log("10 en binario:", (10).toString(2));
console.log("255 en binario:", (255).toString(2));

// Para hacerlo bonito con 8 dígitos (un byte):
console.log("\n5 en un byte completo:", (5).toString(2).padStart(8, "0"));
console.log("10 en un byte completo:", (10).toString(2).padStart(8, "0"));

/*
OK, AHORA VIENE LO BUENO...

Los operadores bitwise son como hacer operaciones matemáticas,
pero con estos números binarios. Es como si compararas dedo por dedo.

METÁFORAS PARA CADA OPERADOR:
*/

// ============================================================
// PARTE 2: LOS OPERADORES (EXPLICADOS COMO SI TUVIERAS 5 AÑOS)
// ============================================================

console.log("\n\n============ OPERADOR OR ( | ) ============");
console.log("PIÉNSALO ASÍ: ¿Hay LUZ en esta posición?");
console.log("Si CUALQUIERA de los dos tiene luz (1), pones luz (1)");
console.log("");

/*
METÁFORA: Tienes dos interruptores para la misma bombilla
- Si AL MENOS UNO está encendido → HAY LUZ (1)
- Solo si AMBOS están apagados → NO HAY LUZ (0)
*/

console.log("Ejemplo visual:");
console.log("  00000101  (5) - Tengo luces en las posiciones 0 y 2");
console.log("| 00000011  (3) - Tengo luces en las posiciones 0 y 1");
console.log("  --------");
console.log("  00000111  (7) - Resultado: luz en posiciones 0, 1 y 2");
console.log("");
console.log("En código: 5 | 3 =", 5 | 3);

console.log("\nMás ejemplos:");
console.log("1 | 3 =", 1 | 3, "→", (1 | 3).toString(2).padStart(8, "0"));
console.log("1 | 4 =", 1 | 4, "→", (1 | 4).toString(2).padStart(8, "0"));
console.log("2 | 8 =", 2 | 8, "→", (2 | 8).toString(2).padStart(8, "0"));

console.log("\n\n============ OPERADOR AND ( & ) ============");
console.log("PIÉNSALO ASÍ: ¿AMBOS tienen esto?");
console.log("Solo pones 1 si AMBOS tienen 1");
console.log("");

/*
METÁFORA: Dos amigos votando
- Solo si AMBOS votan SÍ → Se hace (1)
- Si uno vota NO → No se hace (0)
*/

console.log("Ejemplo visual:");
console.log("  00000101  (5) - Tengo cosas en posiciones 0 y 2");
console.log("& 00000011  (3) - Tengo cosas en posiciones 0 y 1");
console.log("  --------");
console.log("  00000001  (1) - Solo comparten la posición 0");
console.log("");
console.log("En código: 5 & 3 =", 5 & 3);

console.log("\nMás ejemplos:");
console.log("1 & 3 =", 1 & 3, "→", (1 & 3).toString(2).padStart(8, "0"));
console.log("1 & 4 =", 1 & 4, "→", (1 & 4).toString(2).padStart(8, "0"));
console.log("7 & 3 =", 7 & 3, "→", (7 & 3).toString(2).padStart(8, "0"));

console.log("\n\n============ OPERADOR XOR ( ^ ) ============");
console.log("PIÉNSALO ASÍ: ¿Son DIFERENTES?");
console.log("Solo pones 1 si son DIFERENTES");
console.log("");

/*
METÁFORA: Detector de diferencias
- Si uno tiene 1 y el otro 0 → ¡Son diferentes! (1)
- Si ambos tienen lo mismo → Son iguales (0)
*/

console.log("Ejemplo visual:");
console.log("  00000101  (5)");
console.log("^ 00000011  (3)");
console.log("  --------");
console.log("  00000110  (6) - Solo donde son diferentes");
console.log("");
console.log("En código: 5 ^ 3 =", 5 ^ 3);

console.log("\nMás ejemplos:");
console.log("5 ^ 3 =", 5 ^ 3, "→", (5 ^ 3).toString(2).padStart(8, "0"));
console.log(
  "7 ^ 7 =",
  7 ^ 7,
  "→",
  (7 ^ 7).toString(2).padStart(8, "0"),
  "(iguales = 0)"
);
console.log("15 ^ 3 =", 15 ^ 3, "→", (15 ^ 3).toString(2).padStart(8, "0"));

console.log("\n\n============ OPERADOR NOT ( ~ ) ============");
console.log("PIÉNSALO ASÍ: Voltea TODO al revés");
console.log("Todos los 0s se vuelven 1s, todos los 1s se vuelven 0s");
console.log("");

/*
METÁFORA: Imagen negativa de una foto
Todo lo blanco se vuelve negro y viceversa

NOTA TÉCNICA: Por cómo funciona JavaScript con números negativos,
~n siempre da -(n+1). No te preocupes mucho por esto ahora.
*/

console.log("Ejemplos:");
console.log("~5 =", ~5); // -6
console.log("~0 =", ~0); // -1
console.log("~10 =", ~10); // -11
console.log("\nFórmula mágica: ~n = -(n+1)");

console.log("\n\n============ LEFT SHIFT ( << ) ============");
console.log("PIÉNSALO ASÍ: Mueve todos los dígitos a la IZQUIERDA");
console.log("Es como multiplicar por 2 cada vez que desplazas");
console.log("");

/*
METÁFORA: Tren que avanza
Cada vagón (bit) se mueve una posición a la izquierda
Los nuevos espacios se rellenan con 0s
*/

console.log("Ejemplo visual:");
console.log("     00000101  (5)");
console.log("<< 1");
console.log("     00001010  (10) - Se duplica!");
console.log("");
console.log("En código: 5 << 1 =", 5 << 1);

console.log("\nMás ejemplos:");
console.log("5 << 1 =", 5 << 1, "(5 × 2)");
console.log("5 << 2 =", 5 << 2, "(5 × 4)");
console.log("5 << 3 =", 5 << 3, "(5 × 8)");
console.log("3 << 2 =", 3 << 2, "(3 × 4)");
console.log("\nTruco: n << 1 = multiplicar por 2");
console.log("       n << 2 = multiplicar por 4");
console.log("       n << 3 = multiplicar por 8");

console.log("\n\n============ RIGHT SHIFT ( >> ) ============");
console.log("PIÉNSALO ASÍ: Mueve todos los dígitos a la DERECHA");
console.log("Es como dividir entre 2 cada vez que desplazas");
console.log("");

/*
METÁFORA: Tren que retrocede
Cada vagón se mueve a la derecha
Los que se caen del final desaparecen
*/

console.log("Ejemplo visual:");
console.log("     00001010  (10)");
console.log(">> 1");
console.log("     00000101  (5) - Se divide entre 2!");
console.log("");
console.log("En código: 10 >> 1 =", 10 >> 1);

console.log("\nMás ejemplos:");
console.log("20 >> 1 =", 20 >> 1, "(20 ÷ 2)");
console.log("20 >> 2 =", 20 >> 2, "(20 ÷ 4)");
console.log("20 >> 3 =", 20 >> 3, "(20 ÷ 8)");
console.log("100 >> 2 =", 100 >> 2, "(100 ÷ 4)");
console.log("\nTruco: n >> 1 = dividir entre 2");
console.log("       n >> 2 = dividir entre 4");

// ============================================================
// PARTE 3: EJERCICIOS SÚPER SIMPLES
// ============================================================

console.log("\n\n============ EJERCICIO 1: ¿PAR O IMPAR? ============");

/*
¿CÓMO SABER SI UN NÚMERO ES PAR?

Truco: En binario, si el ÚLTIMO dígito es 0 → PAR
                    si el ÚLTIMO dígito es 1 → IMPAR

Ejemplos:
4 = 100 → último dígito es 0 → PAR
5 = 101 → último dígito es 1 → IMPAR
*/

function esPar(n) {
  // Hacemos AND con 1 para ver solo el último dígito
  return (n & 1) === 0;
}

console.log("¿4 es par?", esPar(4));
console.log("¿5 es par?", esPar(5));
console.log("¿100 es par?", esPar(100));
console.log("¿77 es par?", esPar(77));

console.log("\nExplicación visual:");
console.log("4 & 1:");
console.log("  00000100  (4)");
console.log("& 00000001  (1)");
console.log("  --------");
console.log("  00000000  (0) → Es par!");
console.log("");
console.log("5 & 1:");
console.log("  00000101  (5)");
console.log("& 00000001  (1)");
console.log("  --------");
console.log("  00000001  (1) → Es impar!");

console.log(
  "\n\n============ EJERCICIO 2: DUPLICAR Y DIVIDIR RÁPIDO ============"
);

/*
En vez de hacer 10 * 2, puedes hacer 10 << 1
En vez de hacer 10 / 2, puedes hacer 10 >> 1

Es más rápido para la computadora (pero solo funciona con potencias de 2)
*/

let num = 10;
console.log("Número original:", num);
console.log("");
console.log("DUPLICAR:");
console.log("  Forma normal:", num * 2);
console.log("  Con bitwise:", num << 1);
console.log("");
console.log("MULTIPLICAR POR 4:");
console.log("  Forma normal:", num * 4);
console.log("  Con bitwise:", num << 2);
console.log("");
console.log("DIVIDIR ENTRE 2:");
console.log("  Forma normal:", Math.floor(num / 2));
console.log("  Con bitwise:", num >> 1);
console.log("");
console.log("DIVIDIR ENTRE 4:");
console.log("  Forma normal:", Math.floor(num / 4));
console.log("  Con bitwise:", num >> 2);

console.log(
  "\n\n============ EJERCICIO 3: INTERCAMBIAR NÚMEROS (MAGIA) ============"
);

/*
TRUCO DE MAGIA: Intercambiar dos variables sin usar una tercera

Normalmente harías:
  temp = a;
  a = b;
  b = temp;

Pero con XOR puedes hacerlo sin "temp"!
*/

console.log("ANTES del intercambio:");
let a = 5;
let b = 3;
console.log("a =", a);
console.log("b =", b);

console.log("\nHaciendo la magia con XOR...");
a = a ^ b; // a ahora contiene "la diferencia"
b = a ^ b; // b se convierte en el a original
a = a ^ b; // a se convierte en el b original

console.log("\nDESPUÉS del intercambio:");
console.log("a =", a);
console.log("b =", b);

console.log("\n¿Por qué funciona? Porque x ^ y ^ y = x (se cancelan)");

console.log("\n\n============ EJERCICIO 4: SISTEMA DE PERMISOS ============");

/*
IMAGINA: Estás haciendo un juego y necesitas dar permisos a usuarios

Permisos:
- LEER = puede ver cosas
- ESCRIBIR = puede cambiar cosas
- BORRAR = puede eliminar cosas
- ADMIN = tiene todos los poderes

En vez de usar 4 variables booleanas, usa 1 solo número!
*/

const LEER = 1; // 0001
const ESCRIBIR = 2; // 0010
const BORRAR = 4; // 0100
const ADMIN = 8; // 1000

console.log("Creando un usuario con permisos de LEER y ESCRIBIR:");
let permisos = LEER | ESCRIBIR; // Combina con OR
console.log("Permisos:", permisos, "→", permisos.toString(2).padStart(4, "0"));

console.log("\n¿Tiene permiso de LEER?");
console.log("  ", (permisos & LEER) !== 0 ? "SÍ ✓" : "NO ✗");

console.log("\n¿Tiene permiso de BORRAR?");
console.log("  ", (permisos & BORRAR) !== 0 ? "SÍ ✓" : "NO ✗");

console.log("\nAhora le damos permiso de BORRAR:");
permisos = permisos | BORRAR;
console.log("Permisos:", permisos, "→", permisos.toString(2).padStart(4, "0"));

console.log("\n¿Tiene permiso de BORRAR ahora?");
console.log("  ", (permisos & BORRAR) !== 0 ? "SÍ ✓" : "NO ✗");

console.log("\nQuitándole el permiso de ESCRIBIR:");
permisos = permisos & ~ESCRIBIR;
console.log("Permisos:", permisos, "→", permisos.toString(2).padStart(4, "0"));

console.log("\n\n============ EJERCICIO 5: ¿ES POTENCIA DE 2? ============");

/*
TRUCO: Un número es potencia de 2 si solo tiene UN bit encendido

Ejemplos:
1  = 0001 → sí (2^0)
2  = 0010 → sí (2^1)
4  = 0100 → sí (2^2)
8  = 1000 → sí (2^3)
10 = 1010 → no (tiene DOS bits encendidos)

Magia: Si haces n & (n-1) y da 0, ¡es potencia de 2!
*/

function esPotenciaDeDos(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log("¿8 es potencia de 2?", esPotenciaDeDos(8));
console.log("¿10 es potencia de 2?", esPotenciaDeDos(10));
console.log("¿16 es potencia de 2?", esPotenciaDeDos(16));
console.log("¿100 es potencia de 2?", esPotenciaDeDos(100));

console.log("\nPor qué funciona:");
console.log("8 en binario:  1000");
console.log("7 en binario:  0111");
console.log("8 & 7:         0000 → ¡Da 0! Es potencia de 2");
console.log("");
console.log("10 en binario: 1010");
console.log("9 en binario:  1001");
console.log("10 & 9:        1000 → No da 0, NO es potencia de 2");

// ============================================================
// PARTE 4: RESUMEN PARA TONTOS
// ============================================================

console.log("\n\n============ RESUMEN FINAL ============");
console.log(`
📚 LO QUE APRENDIMOS:

1. BINARIO es contar solo con 0s y 1s
   - Es como tener solo 2 dedos para contar

2. OPERADORES:
   | (OR)    → "¿Tiene LUZ alguno?" → Enciende si hay al menos un 1
   & (AND)   → "¿Tienen AMBOS?" → Solo si ambos tienen 1
   ^ (XOR)   → "¿Son DIFERENTES?" → 1 si son distintos
   ~ (NOT)   → "Dale la VUELTA" → Invierte todo
   << (LSH)  → "MUEVE A LA IZQUIERDA" → Multiplica por 2
   >> (RSH)  → "MUEVE A LA DERECHA" → Divide entre 2

3. TRUCOS ÚTILES:
   ✓ n & 1           → Para saber si es impar
   ✓ n << 1          → Duplicar número
   ✓ n >> 1          → Dividir entre 2
   ✓ n & (n-1) === 0 → ¿Es potencia de 2?
   ✓ a ^ b ^ b       → Te devuelve a

4. USOS REALES:
   ✓ Sistemas de permisos (LEER, ESCRIBIR, BORRAR)
   ✓ Optimizar multiplicaciones y divisiones
   ✓ Detectar si un número es par
   ✓ Manipular colores (RGB)
   ✓ Hacer trucos de magia con números

🎯 REGLA DE ORO:
No uses bitwise solo porque puedes.
Úsalo cuando:
  - Necesites velocidad extrema
  - Trabajes con permisos/flags
  - Estés haciendo optimizaciones
  - Quieras impresionar a tus amigos programadores 😎

💡 PARA DEPURAR:
console.log((numero).toString(2).padStart(8, "0"));
Esto te muestra el número en binario con 8 dígitos
`);

console.log("\n🎉 FIN DE LA GUÍA PARA TONTOS");
console.log("Si llegaste hasta aquí, ¡ya NO eres un tonto en bitwise! 💪");
