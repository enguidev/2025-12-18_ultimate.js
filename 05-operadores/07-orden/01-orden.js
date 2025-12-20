/*
Prioridad de operadores en JavaScript

Prioridad	    Operador	              Descripción
---------     --------                -----------
1	            ()	                    Agrupación (Paréntesis)
-----------------------------------------------------------------------------------------------------------
2	            new con argumentos	    Creación de instancias con argumentos
-----------------------------------------------------------------------------------------------------------
3	            . , [] , () , ?.	      Miembro, Miembro Array, Llamada a Función, Encadenamiento opcional
-----------------------------------------------------------------------------------------------------------
4	            new sin argumentos	    Creación de instancias sin argumentos
-----------------------------------------------------------------------------------------------------------
5	            ++, --	                Incremento y Decremento
-----------------------------------------------------------------------------------------------------------
6	            !, ~, +, -, typeof,     Negación lógica, Bit a bit NO, Unario positivo y negativo, tipo, 
              void, delete, await	    indefinido, eliminación, espera
-----------------------------------------------------------------------------------------------------------
7	            **	                    Exponenciación
-----------------------------------------------------------------------------------------------------------
8	            *, /, %	                Multiplicación, División, Módulo
-----------------------------------------------------------------------------------------------------------
9	            +, -	                  Adición, Sustracción
-----------------------------------------------------------------------------------------------------------
10	          <<, >>, >>>	            Desplazamiento bit a bit
-----------------------------------------------------------------------------------------------------------
11	          <, <=, >, >=, 	        Menor que, Menor o igual que, Mayor que, Mayor o igual que, 
              in, instanceof          Operador in, Operador instanceof
-----------------------------------------------------------------------------------------------------------
12	          ==, !=, ===, !==	      Igual, No igual, Estrictamente igual, Estrictamente no igual
-----------------------------------------------------------------------------------------------------------
13	          &	                      AND bit a bit
-----------------------------------------------------------------------------------------------------------
14	          ^	                      XOR bit a bit
-----------------------------------------------------------------------------------------------------------
15	          |                       OR bit a bit
-----------------------------------------------------------------------------------------------------------
16	          &&	                    AND lógico
-----------------------------------------------------------------------------------------------------------
17	          ||                      OR lógico
-----------------------------------------------------------------------------------------------------------
18	          ??	                    Operador de fusión de nulabilidad
-----------------------------------------------------------------------------------------------------------
19	          ? :	                    Operador condicional (ternario)
-----------------------------------------------------------------------------------------------------------
20	          = , +=, -=,             Asignación y Asignación compuesta
              *=, /=, %=          	
-----------------------------------------------------------------------------------------------------------
21	          ,	                      Operador de coma
-----------------------------------------------------------------------------------------------------------          
*/

/*
Prioridad:

  Agrupación (())

  Incremento (++) y Decremento (--)

  Exponenciación (**)

  Multiplicación (*), División (/), Módulo (%)

  Adición (+) y Sustracción (-)

  Asignación (= y variantes)

Nota sobre la Asociatividad:

  La asociatividad determina el orden en que los operadores del mismo nivel de prioridad se evalúan:

  Izquierda a Derecha: La mayoría de los operadores aritméticos y lógicos.

  Derecha a Izquierda: Asignación y Exponenciación.

  Operador de coma (,)
*/

//Ejemplo de Asociatividad:

// Asociatividad de izquierda a derecha
let x = 1 + 2 + 3; // ((1 + 2) + 3) = 6

// Asociatividad de derecha a izquierda
let y = 1;
let z = 2;
y = z = 3; // y = (z = 3) => y = 3, z = 3

// --------------------------------------

// Ejemplo práctico:
let a = 5;
let b = 10;
let c = 15;

// Sin paréntesis, la multiplicación se evalúa antes que la suma
let resultado1 = a + b * c; // 5 + (10 * 15) = 5 + 150 = 155

// Usando paréntesis para cambiar la prioridad
let resultado2 = (a + b) * c; // (5 + 10) * 15 = 15 * 15 = 225

console.log(resultado1); // 155
console.log(resultado2); // 225

// --------------------------------------

let resultado = (8 / 2) * (2 + 2);
console.log(resultado);

// --------------------------------------

/*
El operador de coma (,) en JavaScript se utiliza para evaluar múltiples expresiones, 
donde cada expresión se evalúa y se descarta, excepto la última, cuyo valor se devuelve

En este ejemplo, 1, 2 y 3 se evalúan, pero solo el valor de 3 se asigna a x
*/
let d = (1, 2, 3);
console.log(d); // 3
/*
El operador de coma también se puede usar para realizar varias 
operaciones dentro de una expresión de asignación o función.
*/
let e = 1;
let f = 2;
let g = ((e += 1), (f += 2), e + f);
console.log(g); // 6

/*
En funciones flecha, el operador de coma puede ser útil para combinar 
varias expresiones y devolver el último valor en expresiones cortas.

En este caso, x se multiplica por 2, y se incrementa en 3, 
y luego se suma x con y para devolver el resultado.
*/
const calcular = (x, y) => ((x *= 2), (y += 3), x + y);
console.log(calcular(2, 3)); // 10
