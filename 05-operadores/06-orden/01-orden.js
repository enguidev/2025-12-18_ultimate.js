// ============================================================
// 🎯 PRIORIDAD DE OPERADORES EN JAVASCRIPT - PARA TONTOS
// ============================================================

/*
============================================================
PARTE 1: ¿QUÉ ES LA PRIORIDAD DE OPERADORES? 🤔
============================================================

IMAGINA QUE ESTÁS EN MATEMÁTICAS:
¿Cuánto es 2 + 3 × 4?

Respuesta INCORRECTA: (2 + 3) × 4 = 5 × 4 = 20
Respuesta CORRECTA: 2 + (3 × 4) = 2 + 12 = 14

¿Por qué? Porque la MULTIPLICACIÓN tiene más PRIORIDAD que la SUMA.

En JavaScript pasa exactamente lo mismo, pero con MUCHOS más operadores.
La prioridad decide QUÉ SE HACE PRIMERO.
*/

console.log("============ CONCEPTO BÁSICO ============\n");

// Ejemplo simple:
console.log("2 + 3 * 4 =", 2 + 3 * 4); // 14 (primero 3*4, luego +2)
console.log("(2 + 3) * 4 =", (2 + 3) * 4); // 20 (primero suma, luego multiplica)

console.log("\n¿Ves? Los paréntesis CAMBIAN el orden!");

/*
============================================================
PARTE 2: LA TABLA DE PRIORIDADES (DE MAYOR A MENOR)
============================================================

PIÉNSALO COMO UN RANKING DE "QUIÉN VA PRIMERO EN LA FILA"

1° = VA PRIMERO (mayor prioridad)
21° = VA AL FINAL (menor prioridad)

REGLA DE ORO: Si no sabes el orden, USA PARÉNTESIS () 
              ¡Son tu mejor amigo!
*/

console.log("\n\n============ TABLA DE PRIORIDADES ============\n");

console.log(`
📊 RANKING DE PRIORIDAD (de mayor a menor):

1°  ()                    → Paréntesis - SIEMPRE VAN PRIMERO
2°  new Cosa()            → Crear objetos con argumentos
3°  . [] () ?.            → Acceder a propiedades, arrays, funciones
4°  new Cosa              → Crear objetos sin argumentos
5°  ++ --                 → Incremento/Decremento
6°  ! ~ + - typeof delete → Operadores unarios (un solo valor)
7°  **                    → Potencia
8°  * / %                 → Multiplicación, División, Módulo
9°  + -                   → Suma y Resta
10° << >> >>>             → Desplazamientos bitwise
11° < <= > >= in          → Comparaciones
12° == != === !==         → Igualdad
13° &                     → AND bitwise
14° ^                     → XOR bitwise
15° |                     → OR bitwise
16° &&                    → AND lógico
17° ||                    → OR lógico
18° ??                    → Nullish coalescing
19° ? :                   → Operador ternario (if de una línea)
20° = += -= *= /=         → Asignación
21° ,                     → Operador de coma (el último de todos)
`);

/*
============================================================
PARTE 3: EJEMPLOS PRÁCTICOS POR CATEGORÍA
============================================================
*/

console.log("\n\n============ CATEGORÍA 1: PARÉNTESIS () ============");
console.log("👑 SIEMPRE tienen la máxima prioridad\n");

let resultado1 = 5 + 10 * 2;
let resultado2 = (5 + 10) * 2;

console.log("Sin paréntesis: 5 + 10 * 2 =", resultado1); // 25 (primero 10*2, luego +5)
console.log("Con paréntesis: (5 + 10) * 2 =", resultado2); // 30 (primero suma, luego multiplica)

console.log("\n💡 TIP: ¿Dudas del orden? ¡Usa paréntesis!");

console.log("\n\n============ CATEGORÍA 2: POTENCIA (**) ============");
console.log("Más prioridad que multiplicación\n");

console.log("2 * 3 ** 2 =", 2 * 3 ** 2); // 18 (primero 3², luego *2)
console.log("(2 * 3) ** 2 =", (2 * 3) ** 2); // 36 (primero multiplica, luego potencia)

console.log("\nExplicación:");
console.log("  2 * 3 ** 2 → 2 * 9 → 18");
console.log("  (2 * 3) ** 2 → 6 ** 2 → 36");

console.log(
  "\n\n============ CATEGORÍA 3: MULTIPLICACIÓN Y DIVISIÓN ============"
);
console.log("Más prioridad que suma y resta\n");

console.log("10 + 5 * 2 =", 10 + 5 * 2); // 20 (primero 5*2, luego +10)
console.log("10 - 8 / 4 =", 10 - 8 / 4); // 8 (primero 8/4, luego -2)
console.log("20 / 4 * 2 =", (20 / 4) * 2); // 10 (de izquierda a derecha)

console.log("\n⚠️ IMPORTANTE: Cuando tienen la misma prioridad,");
console.log("   se evalúan de IZQUIERDA a DERECHA");
console.log("   20 / 4 * 2 → (20 / 4) * 2 → 5 * 2 → 10");

console.log("\n\n============ CATEGORÍA 4: SUMA Y RESTA ============");
console.log("Menor prioridad que multiplicación\n");

let a = 5;
let b = 10;
let c = 15;

let res1 = a + b * c; // 5 + (10 * 15) = 155
let res2 = (a + b) * c; // (5 + 10) * 15 = 225

console.log("a + b * c =", res1);
console.log("(a + b) * c =", res2);

console.log("\n\n============ CATEGORÍA 5: COMPARACIONES ============");
console.log("Después de operaciones aritméticas\n");

console.log("5 + 3 > 10 - 2 =", 5 + 3 > 10 - 2); // false (8 > 8 = false)
console.log("2 * 3 === 6 =", 2 * 3 === 6); // true
console.log("10 / 2 < 3 + 3 =", 10 / 2 < 3 + 3); // true (5 < 6)

console.log("\nOrden de evaluación:");
console.log("  1. Operaciones aritméticas (* / + -)");
console.log("  2. Comparaciones (< > === !=)");

console.log("\n\n============ CATEGORÍA 6: OPERADORES LÓGICOS ============");
console.log("&& (AND) tiene MÁS prioridad que || (OR)\n");

console.log("true || false && false =", true || (false && false)); // true
console.log("(true || false) && false =", (true || false) && false); // false

console.log("\nExplicación:");
console.log("  true || false && false");
console.log("  → true || (false && false)  [primero el &&]");
console.log("  → true || false");
console.log("  → true");
console.log("");
console.log("  (true || false) && false");
console.log("  → true && false  [primero los paréntesis]");
console.log("  → false");

console.log(
  "\n\n============ CATEGORÍA 7: OPERADOR TERNARIO (? :) ============"
);
console.log("El 'if' de una línea\n");

let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

// Se puede anidar (pero cuidado, se vuelve confuso):
let nota = 85;
let calificacion = nota >= 90 ? "A" : nota >= 80 ? "B" : nota >= 70 ? "C" : "F";
console.log("Con nota de", nota, "tienes:", calificacion);

console.log("\n⚠️ TIP: No abuses de ternarios anidados, ¡pueden confundir!");

console.log("\n\n============ CATEGORÍA 8: ASIGNACIÓN (=) ============");
console.log("Casi la menor prioridad\n");

let x = 5 + 3 * 2; // Primero las operaciones, luego asigna
console.log("x = 5 + 3 * 2 → x =", x); // 11

// Asignaciones compuestas:
let y = 10;
y += 5; // y = y + 5
console.log("y += 5 → y =", y); // 15

y *= 2; // y = y * 2
console.log("y *= 2 → y =", y); // 30

/*
============================================================
PARTE 4: ASOCIATIVIDAD (¿IZQUIERDA O DERECHA?)
============================================================

Cuando varios operadores tienen LA MISMA prioridad,
¿en qué orden se evalúan?

HAY DOS TIPOS:
1. Izquierda a Derecha (la mayoría)
2. Derecha a Izquierda (pocos casos)
*/

console.log("\n\n============ ASOCIATIVIDAD ============\n");

console.log("--- IZQUIERDA A DERECHA (mayoría de operadores) ---\n");

// Suma y Resta (misma prioridad)
console.log("10 - 5 + 3 =", 10 - 5 + 3); // 8
console.log("  → (10 - 5) + 3");
console.log("  → 5 + 3");
console.log("  → 8");

// Multiplicación y División
console.log("\n20 / 4 * 2 =", (20 / 4) * 2); // 10
console.log("  → (20 / 4) * 2");
console.log("  → 5 * 2");
console.log("  → 10");

console.log("\n\n--- DERECHA A IZQUIERDA (casos especiales) ---\n");

// Asignación
let m = 1;
let n = 2;
let p;
p = m = n = 5; // Se evalúa de derecha a izquierda
console.log("p = m = n = 5");
console.log("  → p = m = (n = 5)  [primero n = 5]");
console.log("  → p = (m = 5)      [luego m = 5]");
console.log("  → p = 5            [finalmente p = 5]");
console.log("Resultado: p =", p, ", m =", m, ", n =", n);

// Potencia
console.log("\n2 ** 3 ** 2 =", 2 ** (3 ** 2)); // 512
console.log("  → 2 ** (3 ** 2)  [primero 3²]");
console.log("  → 2 ** 9");
console.log("  → 512");

/*
============================================================
PARTE 5: OPERADOR DE COMA (,) - EL MÁS RARO
============================================================

El operador de coma es el de MENOR prioridad de todos.
Evalúa varias expresiones pero SOLO devuelve la última.
*/

console.log("\n\n============ OPERADOR DE COMA (,) ============\n");

console.log("--- Ejemplo 1: Devuelve solo el último valor ---\n");
let resultado = (1, 2, 3, 4, 5);
console.log("let resultado = (1, 2, 3, 4, 5);");
console.log("resultado =", resultado); // 5
console.log("Evalúa todo, pero devuelve solo el 5\n");

console.log("--- Ejemplo 2: Múltiples operaciones ---\n");
let e = 1;
let f = 2;
let g = ((e += 1), (f += 2), e + f);
console.log("e inicial:", 1);
console.log("f inicial:", 2);
console.log("g = ((e += 1), (f += 2), e + f)");
console.log("  → e se vuelve 2");
console.log("  → f se vuelve 4");
console.log("  → devuelve e + f = 6");
console.log("g =", g, "\n");

console.log("--- Ejemplo 3: En funciones flecha ---");
const calcular = (x, y) => ((x *= 2), (y += 3), x + y);
console.log("const calcular = (x, y) => ((x *= 2), (y += 3), x + y);");
console.log("calcular(2, 3):");
console.log("  → x = 2 * 2 = 4");
console.log("  → y = 3 + 3 = 6");
console.log("  → devuelve x + y = 10");
console.log("Resultado:", calcular(2, 3));

console.log("\n⚠️ ADVERTENCIA: El operador de coma confunde.");
console.log("   Úsalo solo cuando sea realmente necesario.");

/*
============================================================
PARTE 6: EJERCICIOS PRÁCTICOS
============================================================
*/

console.log("\n\n============ EJERCICIOS PRÁCTICOS ============\n");

console.log("--- Ejercicio 1: ¿Cuál es el resultado? ---\n");
console.log("let r = 8 / 2 * (2 + 2);");
let r = (8 / 2) * (2 + 2);
console.log("Paso 1: Paréntesis → (2 + 2) = 4");
console.log("Paso 2: División → 8 / 2 = 4");
console.log("Paso 3: Multiplicación → 4 * 4 = 16");
console.log("Resultado:", r, "\n");

console.log("--- Ejercicio 2: ¿Y este? ---\n");
console.log("let s = 10 + 5 * 2 ** 3;");
let s = 10 + 5 * 2 ** 3;
console.log("Paso 1: Potencia → 2 ** 3 = 8");
console.log("Paso 2: Multiplicación → 5 * 8 = 40");
console.log("Paso 3: Suma → 10 + 40 = 50");
console.log("Resultado:", s, "\n");

console.log("--- Ejercicio 3: Comparaciones ---\n");
console.log("let t = 5 + 3 > 2 * 4 && 10 / 2 === 5;");
let t = 5 + 3 > 2 * 4 && 10 / 2 === 5;
console.log("Paso 1: Operaciones aritméticas");
console.log("  → 5 + 3 = 8");
console.log("  → 2 * 4 = 8");
console.log("  → 10 / 2 = 5");
console.log("Paso 2: Comparaciones");
console.log("  → 8 > 8 = false");
console.log("  → 5 === 5 = true");
console.log("Paso 3: Operador lógico");
console.log("  → false && true = false");
console.log("Resultado:", t, "\n");

console.log("--- Ejercicio 4: Con ternario ---\n");
let edad2 = 20;
let precio = edad2 >= 18 ? 10 + 5 : 5 * 2;
console.log("let precio = edad >= 18 ? 10 + 5 : 5 * 2;");
console.log("  → edad >= 18? true");
console.log("  → Evalúa 10 + 5 = 15");
console.log("precio =", precio, "\n");

/*
============================================================
PARTE 7: TRUCOS Y CONSEJOS
============================================================
*/

console.log("\n\n============ TRUCOS Y CONSEJOS ============\n");

console.log(`
💡 REGLAS DE ORO:

1. 📚 MEMORIZA SOLO LO BÁSICO:
   - Paréntesis () van primero SIEMPRE
   - Potencia ** antes que multiplicación
   - Multiplicación/División antes que suma/resta
   - Operaciones aritméticas antes que comparaciones
   - Comparaciones antes que operadores lógicos
   - Asignación va casi al final

2. 🛡️ CUANDO DUDES, USA PARÉNTESIS:
   Preferir: (a + b) * c
   A: a + b * c  (aunque funcione igual)
   
3. ⚠️ EVITA COMPLEJIDAD:
   Malo:  let x = a && b || c && d ? e + f * g : h;
   Bueno: let suma = e + (f * g);
          let x = (a && b) || (c && d) ? suma : h;

4. 🧪 SI NO ESTÁS SEGURO, PRUEBA:
   console.log() es tu amigo!

5. 📖 LEE CÓDIGO DE IZQUIERDA A DERECHA:
   (excepto asignación y potencia que van al revés)

6. 🚫 NO ABUSES DEL OPERADOR DE COMA:
   Es confuso y difícil de leer.
`);

/*
============================================================
PARTE 8: RESUMEN VISUAL
============================================================
*/

console.log("\n\n============ RESUMEN VISUAL ============\n");

console.log(`
🎯 ORDEN DE PRIORIDAD (lo que más importa):

NIVEL 1 - MÁXIMA PRIORIDAD:
  ()         ← Paréntesis

NIVEL 2 - OPERADORES ARITMÉTICOS:
  **         ← Potencia
  * / %      ← Multiplicar, Dividir, Módulo
  + -        ← Sumar, Restar

NIVEL 3 - COMPARACIONES:
  < > <= >=  ← Mayor que, menor que
  == === != !== ← Igualdad

NIVEL 4 - OPERADORES LÓGICOS:
  &&         ← AND
  ||         ← OR

NIVEL 5 - ASIGNACIÓN Y OTROS:
  ? :        ← Ternario
  =          ← Asignación
  ,          ← Coma (el último)

📊 RECORDATORIO DE ASOCIATIVIDAD:
  Izquierda → Derecha: + - * / < > && ||
  Derecha → Izquierda: = ** ? :
`);

console.log("\n\n============ CASO REAL COMPLEJO ============\n");

let valor = 5;
let multiplicador = 2;
let base = 10;
let esMayor = true;

let resultadoFinal =
  esMayor && valor + base * multiplicador ** 2 > 30 ? 100 : 50;

console.log("Expresión:");
console.log(
  "resultadoFinal = esMayor && valor + base * multiplicador ** 2 > 30 ? 100 : 50"
);
console.log("\nPaso a paso:");
console.log("1. Potencia: 2 ** 2 = 4");
console.log("2. Multiplicación: 10 * 4 = 40");
console.log("3. Suma: 5 + 40 = 45");
console.log("4. Comparación: 45 > 30 = true");
console.log("5. AND lógico: true && true = true");
console.log("6. Ternario: true ? 100 : 50 = 100");
console.log("\nResultado final:", resultadoFinal);

console.log("\n\n🎉 FIN DE LA GUÍA DE PRIORIDAD DE OPERADORES");
console.log("¡Ahora ya sabes por qué 2 + 3 * 4 no es 20! 🚀");
