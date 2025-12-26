/*

Las expresiones regulares (regex o regexp) son una poderosa herramienta en JavaScript 
(y en muchos otros lenguajes de programación) para trabajar con cadenas de texto, 
permitiendo búsqueda, manipulación y validación de texto basado en patrones

Literal de Expresión Regular:
let regex = /patrón/;

Constructor del Objeto RegExp:
let regex = new RegExp('patrón');
*/
// *** Caracteres Especiales *** //

// .: Coincide con cualquier carácter excepto un salto de línea.
let regex = /./;

// ^: Coincide con el inicio de la cadena:
regex = /^Hola/;
// Cualquier carácter menos E
regex = /[^E]/;
regex = /[^aeiou]/; // Coincide con cualquier carácter que no sea una vocal

// $: Coincide con el final de la cadena
regex = /mundo!$/;

// *: Coincide con el carácter anterior 0 o más veces:
regex = /a*/; // Coincide con "a", "", "aa"

// +: Coincide con el carácter anterior 1 o más veces:
regex = /a+/; // Coincide con "a", "aa"

// ?: Coincide con el carácter anterior 0 o 1 vez:
regex = /a?/; // Coincide con "a", ""

// [caracteres_seguidos] Un texto entre corchetes se considera cada uno un carácter
regex = /[AEU12]/; // Se considera A o E o U o 1 o 3

// [carácter-carácter] Un guión entre los corchetes especifica un rango de caracteres
regex = /[F-I]/; // Se considera F, G, H o I
regex = /[A-Z0-9]/; // Se considera todas las letras (mayúsculas) y números
regex = /[a-z0-9]/; // Se considera todas las letras (minúsculas) y números
regex = /[AZa-z0-9]/; // Se considera todas las letras (mayúsculas o minúsculas) y números

// {n}: Coincide con el carácter anterior exactamente n veces:
regex = /a{3}/; // Coincide con "aaa"

// {n,m}: Coincide con el carácter anterior al menos n veces y no más de m veces
regex = /a{2,4}/; // Coincide con "aa", "aaa", "aaaa"

// |: Permite alternar entre varias opciones
regex = /gato|perro/; // Coincide con "gato" o "perro"

ó;

regex = /perro|gato/;
console.log("Tengo un perro".match(regex)); // ["perro"]
console.log("Tengo un gato".match(regex)); // ["gato"]

// /d: Simboliza cualquier dígito, como [0-9]
regex = /\d/; // Coincide con "1", "2", etc.

// /D: Simboliza cualquier carácter que no sea un dígito, como [^0-9]
regex = /\D/; // Coincide con "a", "B", etc.

// /w: Coincide con cualquier carácter alfanumérico y guion bajo (equivalente a [a-zA-Z0-9_])
regex = /\w/; // Coincide con "a", "1", "_", etc.

// \W: Coincide con cualquier carácter que no sea alfanumérico (equivalente a [^a-zA-Z0-9_])
regex = /\W/; // Coincide con "!", "@", etc.

// \s : Coincide con cualquier carácter de espacio en blanco (incluye espacio, tabulation, nueva línea, etc.)
regex = /\s/; // Coincide con " ", "\t", "\n", etc.

// \S: Coincide con cualquier carácter que no sea un espacio en blanco
regex = /\S/; // Coincide con "a", "1", "!", etc.

// \b: Coincide con un límite de palabra (posición entre una letra y un carácter no letra)
regex = /\bhello\b/; // Coincide con "hello" como una palabra completa

// En este ejemplo, \bcat\b coincide solo con la palabra "cat" aislada, y no con "catalog"
regex = /\bcat\b/;
texto = "The cat sat on the catalog.";
coincidencias = texto.match(regex);
console.log(coincidencias); // ["cat"]

// \B: Coincide con una posición que no sea un límite de palabra
regex = /\Bhello\B/; // Coincide con "hello" dentro de una palabra

// En este ejemplo, \Bcat\B no coincide con "cat" aislada, pero sí con "cat" dentro de la palabra "catalog"
regex = /\Bcat\B/;
texto = "The cat sat on the catalog.";
coincidencias = texto.match(regex);
console.log(coincidencias); // ["cat"]

// Ejemplo Combinado /b y /B------------------------------------
texto = "Word boundary, words, and boundless.";

// \b al inicio y al final asegura que "bound" está en el límite de una palabra
// \w* coincide con cualquier número de caracteres alfanuméricos después de "bound"
// Coincide con palabras como "boundary" y "boundless"
regexBorde = /\bbound\w*\b/g;

// \B asegura que "bound" no está en el límite de una palabra
// Coincide con "bound" dentro de otra palabra, como "boundless"
regexNoBorde = /\Bbound\w*\B/g;

let coincidenciasBorde = texto.match(regexBorde);
let coincidenciasNoBorde = texto.match(regexNoBorde);

console.log("Coincidencias con \\b:");
console.log(coincidenciasBorde); // ["boundary", "boundless"]

console.log("Coincidencias con \\B:");
console.log(coincidenciasNoBorde); // ["boundless"]

//------------------------------------------------------------

// *?: Coincide con la menor cantidad de caracteres posible
regex = /".*?"/; // Coincide con la menor cantidad de caracteres posible entre comillas
texto = 'Ella dijo "hola" y luego "adiós"';
console.log(texto.match(regex)); // ["\"hola\""]

// +?:
regex = /o+?/; // Coincide con el menor número de "o"s posible
texto = "hoooola";
console.log(texto.match(regex)); // ["o"]

// ??:
regex = /ho??/; // Coincide con "h" o "ho", prefiriendo "h"
texto = "ho";
console.log(texto.match(regex)); // ["h"]

// (): Grupos de captura. Se usan para agrupar patrones y crear subpatrones que pueden ser referenciados posteriormente
regex = /(ab)+/; // Coincide con una o más ocurrencias de "ab"
console.log("abab".match(regex)); // ["abab"]

/*Referencias de Grupos
Puedes referenciar grupos capturados utilizando la notación \n, donde n es el número del grupo
*/
regex = /(\d{3})-(\d{3})-(\d{4})/;
texto = "Mi número es 123-456-7890";
let match = texto.match(regex);
console.log(match[1]); // "123"
console.log(match[2]); // "456"
console.log(match[3]); // "7890"

/*
Usando Modificadores:

    Modificadores como g, i, y m alteran el comportamiento de las expresiones regulares:

        g (búsqueda global): Encuentra todas las coincidencias en lugar de parar en la primera.

        i (insensible a mayúsculas/minúsculas): Coincide sin diferenciar entre mayúsculas y minúsculas.

        m (multilínea): Permite que ^ y $ coincidan al principio y al final de cada línea.
*/
regex = /hola/gi;
texto = "Hola, hola, HOLA";
console.log(texto.match(regex)); // ["Hola", "hola", "HOLA"]

// *** Métodos del Objeto RegExp *** //

// test: Devuelve true o false si hay una coincidencia en la cadena
regex = /mundo/;
console.log(regex.test("Hola, mundo!")); // true

// exec: Devuelve un array que contiene todas las coincidencias o null si no hay coincidencias
regex = /(\d+)/;
let result = regex.exec("El precio es 100 dólares");
console.log(result[0]); // "100"

// *** Métodos del Objeto String que Aceptan Expresiones Regulares *** //

// match: Devuelve las coincidencias de una cadena con una expresión regular
let texto = "Hola, mundo!";
let coincidencias = texto.match(/o/g);
console.log(coincidencias); // ["o", "o"]

// replace: Reemplaza las coincidencias de una cadena con otra cadena
texto = "Hola, mundo!";
let nuevoTexto = texto.replace(/mundo/, "JavaScript");
console.log(nuevoTexto); // "Hola, JavaScript!"

// search: Devuelve el índice de la primera coincidencia o -1 si no hay coincidencia
texto = "Hola, mundo!";
let indice = texto.search(/mundo/);
console.log(indice); // 6

// split: Divide una cadena en un array de subcadenas
texto = "uno, dos, tres";
let partes = texto.split(/, /);
console.log(partes); // ["uno", "dos", "tres"]

/* 
Páginas:
    Documentación oficial para expresiones regulares: 
   https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions

    Para comprobar expresiones regulares: https://www.regexpal.com/

    25 expresiones regulares más comunes:
    https://programacion.net/articulo/25_expresiones_regulares_que_todo_programador_deberia_conocer_1213
   
1. Contraseñas válidas
^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$

2. Color Hexadecimal
#([a-fA-F]|[0-9]){3, 6}

3. Validar dirección de email
/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm

4. Dirección IPv4
/b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)b/

5. Dirección IPv6
(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]
{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4})
{1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|
(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))

6. Separador de miles
/d{1,3}(?=(d{3})+(?!d))/g

7. Anteponer HTTP a enlace si no contiene http o https
if (!s.match(/^[a-zA-Z]+:///))
{
    s = 'http://' + s;
}

8. Obtener nombre de dominio
/https?://(?:[-w]+.)?([-w]+).w+(?:.w+)?/?.*/ i;
/*
9. Ordenar palabras clave por número de palabras
^[^s]*$        matches exactly 1-word keyword
^[^s]*s[^s]*$    matches exactly 2-word keyword
^[^s]*s[^s]*     matches keywords of at least 2 words (2 and more)
^([^s]*s){2}[^s]*$    matches exactly 3-word keyword
^([^s]*s){4}[^s]*$    matches 5-words-and-more keywords (longtail)
Los usuarios de Google Analytics y Webmaster Tools van a disfrutar con esta expresión regular. Puedes ordenar y organizar las palabras clave, basándote en el número de palabras 
que se utilizan en una búsqueda. Esto puede ser numéricamente específico (es decir, sólo 5 palabras) o puede coincidir con una serie de palabras (es decir, 2 o más palabras). 
Cuando se utiliza para ordenar los datos de análisis, se convierte en una poderosa expresión regular.

10. Encontrar una cadena Base64 en PHP
?php[ t]eval(base64_decode('(([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?){1}'));
Si eres desarrollador de PHP, en algún momento puede que tengas que parsear el código en busca de objetos binarios codificados en Base64. Este fragmento se puede aplicar 
a todo el código PHP y comprueba que no existan cadenas Base64.

11. Quitar espacios (muy útil de formatear los inputs para guardar en base de datos, hacer consultas o insertarlos dentro de un documento)
^[ s]+|[ s]+$

12. Extraer ruta de la imagen
< *[img][^>]*[src] *= *["']{0,1}([^"' >]*)

13. Validar fecha en formato dd/mm/YYYY
^(?:(?:31(/|-|.)(?:0?[13578]|1[02]))1|(?:(?:29|30)(/|-|.)(?:0?[1,3-9]|1[0-2])2))(?:(?:1[6-9]|[2-9]d)?d{2})$|^(?:29(/|-|.)0?23(?:(?:(?:1[6-9]|[2-9]d)?(?:0[48]|[2468][048]|[13579]
[26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1d|2[0-8])(/|-|.)(?:(?:0?[1-9])|(?:1[0-2]))4(?:(?:1[6-9]|[2-9]d)?d{2})$
Las fechas son datos difíciles, ya que pueden aparecer como texto + números, o simplemente como números con diferentes formatos. PHP tiene una función de fecha fantástica, 
pero no siempre es la mejor opción. Considera utilizar esta expresión regular desarrollada para esta sintaxis de fecha específica.

14. Extraer ID de vídeo de YouTube
/http://(?:youtu.be/|(?:[a-z]{2,3}.)?youtube.com/watch(?:?|#!)v=)([w-]{11}).*/ gi;
/*YouTube ha mantenido la misma estructura de URL durante años porque simplemente funciona. 
Es también el sitio más popular para compartir videos en la web, por lo que los vídeos de YouTube tienden a conducir más tráfico. 
Si necesita extraer el ID de un vídeo de YouTube desde una URL, este código regex es perfecto y debería funcionar perfectamente para todas las variantes de estructuras URL de YouTube.

15. Validar ISBN
/b(?:ISBN(?:: ?| ))?((?:97[89])?d{9}[dx])b/i
Los libros siguen un sistema numérico conocido como ISBN. A través de este regex puedes validar si un input de un usuario es válido como ISBN o no.

16. Comprobar Código Postal
^d{5}(?:[-s]d{4})?$
Pues creo que no hay nada más que explicar. Esta expresión regular comprueba si una cadena puede ser considerada como un código postal de USA.

17. Validar nombre de usuario de Twitter
/@([A-Za-z0-9_]{1,15})/
Imaginemos que solicitamos a través de un formulario a un usuario que nos ingrese su nombre de usuario en Twitter. Si queremos comprobar el dato dado es correcto como nombre de 
usuario en Twitter, podemos utilizar esta expresión regular.

18. Encontrar atributos CSS
^s*[a-zA-Z-]+s*[:]{1}s[a-zA-Z0-9s.#]+[;]{1}
Es raro ejecutar expresiones regulares sobre CSS, pero tampoco es una situación muy extraña. Este fragmento de código se puede utilizar para extraer todas las propiedades y valores CSS 
de selectores individuales. Se puede utilizar para un sinfín razones, posiblemente para ver fragmentos de CSS o eliminar propiedades duplicadas, por ejemplo.

19. Comprobar tarjeta de crédito
^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$
La validación de un número de tarjeta de crédito, a menudo requiere de una plataforma segura alojada en otros servidores. Pero las expresiones regulares también se pueden utilizar para 
validar los requisitos mínimos de un número típico de tarjeta de crédito.

20. Url de perfil de Facebook
/(?:http://)?(?:www.)?facebook.com/(?:(?:w)*#!/)?(?:pages/)?(?:[w-])*([w-]*)/    (sustituir (?:[w-]) por (?:[w-])/*))
Facebook es muy popular y ha pasado por muchos esquemas de URL diferentes. Este fragmento comprueba si una URL de usuario dada es correcta o no, en el momento actual que estamos, claro...

21. Comprobar la versión de Internet Explorer
^.*MSIE [5-8](?:.[0-9]+)?(?!.*Trident/[5-9].0).*$

22. Extraer precio
/($[0-9,]+(.[0-9]{2})?)/
Los precios vienen en una variedad de formatos que pueden contener decimales, comas y símbolos de moneda. Esta expresión regular puede comprobar todos estos diferentes formatos para sacar 
el precio de cualquier cadena.

23. Parsear cabeceras de email
/b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,6}b/i
Con esta sola línea de código puedes analizar a través de un encabezado de correo electrónico el campo "a:" de la información de la cabecera.

24. Encontrar una extensión específica
/^(.*.(?!(htm|html|class|js)$))?[^.]*$/i
Cuando trabajas con diferentes formatos de archivo como .xml, .html y .js, puedes comprobar los archivos tanto a nivel local como los subidos por los usuarios. Este fragmento extrae 
la extensión de un archivo para comprobar si es válida a partir de una serie de extensiones válidas que puedes cambiar según sea necesario.

25. Añadir rel="nofollow" a enlaces
(<as*(?!.*brel=)[^>]*)(href="https?://)((?!(?:(?:www.)?'.implode('|(?:www.)?', $follow_list).'))[^"]+)"((?!.*brel=)[^>]*)(?:[^>]*)>
Este regex puede comprobar todos los enlaces de un bloque de HTML y añadir el atributo rel = "nofollow" a cada elemento


*/

//--------------------------PROFE--------------------------//
/* 
Expresiones regulares
----------------------

Son patrones que describen como tiene que ser una cadena.

Ejemplo: "Que la cadena empiece por a"

Dos formas de definir:

let patron = new RegExp('expresión_regular','modificadores') //mod. opcionales (igm)
let patron = /expresión_regular/modificadores

Página para comprobar expresiones regulares:
https://www.regexpal.com/

    *** Trucos que puedes ver en esa página ***
        -----------------------------------
           . --> cualquier carácter excepto nueva línea
      \w\d\s --> palabra, dígito, espacio en blanco
    \W \D \S --> No es palabra, ni dígito, ni espacio en blanco
[abecedario] -->cualquiera de a, b o c
      [^abc] --> No es a, b o c
        [de] --> carácter entre a y g

        Anclas
        ------
      ^abc$ --> inicio/fin de la cadena
         \b --> límite de palabras

      Caracteres escapados
      --------------------
   \. \* \\ --> caracteres especiales escapados
   \t \n \r --> tabulación, salto de línea, retorno de carro
     \u00A9 --> Unicode escapado ©

        Grupos y Lookaround
        -------------------
  (abecedario) --> grupo de captura
            \1 --> referencia inversa al grupo n.° 1
(?:abecedario) --> grupo no capturador
       (?=abc) --> visión positiva hacia adelante
(?!abecedario) --> mirada anticipada negativa

     Cuantificadores y alternancia
     -----------------------------
 un* un+ un? --> 0 o más, 1 o más, 0 o 1
un{5} un{2,} --> exactamente cinco, dos o más
     un{1,3} --> Entre uno y tres
¿a+? ¿a{2,}? --> Coincidir con la menor cantidad posible
       ab|cd --> Coincide con ab o cd


*/

//El objeto RegExp dispone de un método test para comprobar si una cadena cumple el patrón

let patron1 = /hola/;
let patron2 = /a/g; //modificador g: Devuelve todas las coincidencias del patrón
let cadenaAComprobar = "amapola";

console.log(patron1.test(cadenaAComprobar)); //false
console.log(patron2.test(cadenaAComprobar)); //true

//El objeto String también tiene métodos relacionados con la expresiones regulares

console.log(cadenaAComprobar.match(patron1)); //null
console.log(cadenaAComprobar.match(patron2)); // ['a','a','a']

console.log(cadenaAComprobar.replace(/a/g, "X")); //XmXpolX (Xmapola sin g)
console.log(cadenaAComprobar); //amapola (no modifica la cadena)

/* 
    Construcción EXPRESIONES REGULARES
*/

let cadena = "Desarrollo de aplicaciones web 2020";

/* 
    CLASES DE CARACTERES 
    \d Dígito
    \s Espacio
    \w Carácter (dígito, letra, guión bajo)
    .  Cualquier carácter
    Nota: Si ponemos la letra en mayúscula es la clase inversa
    */

let patron = /\d/g;

console.log(patron.test(cadena)); //true
console.log(cadena.match(patron)); //['2','0','2','0']

patron = /de\s/; //Podemos combinar caracteres normales on clases de caracteres.

console.log(patron.test(cadena)); //true

/* 
        INICIO  ^  Y FIN $ DE CADENA
    */

patron = /^D/;
console.log(patron.test(cadena)); //true

patron = /0$/;
console.log(patron.test(cadena)); //true

patron = /^D0$/;
console.log(patron.test(cadena)); //false ¿Reflexiona por que es falso

/* 
        Conjuntos [...] : Cualquier carácter de los que indica.
    */

patron = /[DXP]/;
console.log(patron.test(cadena)); //true : Suficiente con que coincida D

patron = /[0-5]/;
console.log(patron.test(cadena)); //true : El guión nos permite declarar rangos

patron = /^[0-5]/;
console.log(patron.test(cadena)); //false : ^ No Comienza con número.

// ^ También sirve para negar dentro de corchetes [^0-5]

/*
    CUANTIFICADORES : Se aplican al elemento que les precede
    {n} : n veces (también admite rangos)
    
    */

patron = /20{2}/;
console.log(patron.test(cadena)); //false. Reflexiona por qué

patron = /(20){2}/;
console.log(patron.test(cadena)); //true. Los paréntesis permiten agrupar

patron = /(20){3,5}/;
console.log(patron.test(cadena)); //false. Los rangos se ponen con comas

/*  Cuantificadores abreviados
    + : 1 o más {1,}
    * : 0 o más {0,}
    ? : 0 o 1   {0,1}
    */

/*
    GRUPOS . Hemos visto en el ejemplo anterior como crear un grupo (...),
    podemos hacer referencia a los grupos capturados con \1 \2 ...
    */

cadena = "3R5";
patron = /(\d)\w\1/;
console.log(patron.test(cadena)); //false. Reflexiona por que..

// Un número de 4 cifras que sea capicúa
cadena = "1221";
/* Que empiece por un dígito, le siga otro dígito, 
   le siga el mismo dígito del grupo 2 (el segundo (\d)) 
   y termine por el el mismo dígito del grupo 1
*/
patron = /^(\d)(\d)\2\1$/;
console.log(patron.test(cadena));

// Ejercicio de una matrícula de coche formato 1234ABC//

// Necesitamos que empiece por 4 números y 3 metras mayúsculas --> ^[0-9]{4}
// Necesitamos que termine por 3 letras mayúsculas --> [A-Z]{3}$

patron = /^[0-9]{4}[A-Z]{3}$/;
//patron = /^\d{4}[A-Z]{3}$/;
cadena = "9857DNK";
console.log(patron.test(cadena));

// Ejercicio de una matrícula de coche formato 1234ABC ó 1234-ABC//
//       ^ --> inicio de la cadena
//   \d{4} --> 4 dígitos
//      -? --> puede llevar un guión o no
//[A-Z]{3} --> 3 letras mayúsculas
//       $ --> final de la cadena
patron = /^\d{4}-?[A-Z]{3}$/;

cadena = "9857DNK";
console.log(patron.test(cadena)); // true

cadena = "9857-DNK";
console.log(patron.test(cadena)); // true

cadena = "9857-DNKj";
console.log(patron.test(cadena)); // false (porque empieza por más de 4 letras)

cadena = "98576-DNK";
console.log(patron.test(cadena)); // false (porque empieza por más de 4 dígitos)

cadena = "98576-DNKj";
console.log(patron.test(cadena)); // false (porque empieza por más de 4 dígitos y más de 3 letras)

cadena = "A985-DNK";
console.log(patron.test(cadena)); // false (porque no empieza por 4 dígitos)

//nota, si en alguna expresión regular queremos buscar alguno de los caracteres
//especiales utilizados para crearlas, utilizaremos el operador de escape \

// Ejemplo: Si queremos buscar un punto pondríamos \.

// Ejercicio propuesto. Describe un patrón para comprobar si una dirección
// IP es correcta


/*
Caracteres especiales más usados:

  Símbolo       Significado             Ejemplo
  -------       -----------             -------
    ^           Inicio de cadena        /^Hola/
    $           Final de cadena         /fin$/
    \d          Dígito (0-9)            /\d{3}/ = 3 dígitos
    \w          Letra, número o _       /\w+/
    \s          Espacio en blanco       /\s/
    +           1 o más veces           /a+/
    *           0 o más veces           /a*/
/*  ?           0 o 1 vez               /a?/
    {n}         Exactamente n veces     /\d{9}/
    {n,m}       Entre n y m veces       /\d{2,4}/
    [...]       Cualquiera de estos     /[abc]/
    .           Cualquier carácter      /a.e/
*/