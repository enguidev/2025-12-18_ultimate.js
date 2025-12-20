// Las funciones flecha permiten escribir código más compacto y expresivo.
// Aquí se muestran patrones reales, útiles y avanzados.

//--------------------------------------------------------------------------------------
// ✅ Encadenamiento de métodos con callbacks flecha
//--------------------------------------------------------------------------------------
// Podemos encadenar métodos como map(), filter() y forEach usando funciones flecha.
// Esto permite escribir transformaciones de datos de forma concisa y expresiva.

[1, 2, 3, 4]
  .map((x) => x * 2) // [2, 4, 6, 8]
  .filter((x) => x > 4) // [6, 8]
  .forEach((x) => console.log(x)); // 6, 8

//--------------------------------------------------------------------------------------
// ✅ Uso en promesas
//--------------------------------------------------------------------------------------
// Las funciones flecha son ideales para manejar promesas de forma limpia y encadenada.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err));
/*
Cuando la resuelva, mostrará:
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
⚠️ Requiere entorno con soporte para fetch (navegador o Node 18+)
*/

//--------------------------------------------------------------------------------------
// ✅ Expresiones inmediatas (IIFE (Immediately Invoked Function Expression) con flecha)
//--------------------------------------------------------------------------------------
// Podemos ejecutar una función flecha inmediatamente envolviéndola entre paréntesis.

const resultado = ((a, b) => a * b)(5, 3);
console.log(resultado); // 15

//--------------------------------------------------------------------------------------
// ⚠️ Retorno de objetos literales en funciones flecha
//--------------------------------------------------------------------------------------
// Si queremos una función flecha que retorne un objeto, debemos envolver el objeto entre paréntesis.
// Como el bloque de una función flecha y los objetos literales usan llaves {}, JavaScript no los distingue correctamente.

// ❌ Esto no funciona como esperamos:
/*
const crearUsuarioMal = (nombre, edad, color) => {
  nombre,
  edad,
  colorFavorito: color
};
console.log(crearUsuarioMal("Ana", 30, "verde")); // undefined
*/

// ✅ Solución: agregar paréntesis al objeto literal
/*
JavaScript tiene una característica llamada shorthand de propiedades de objetos (abreviación de propiedades)
con la cual:
  
  -Si el nombre de la propiedad coincide con el nombre de la variable, puedes omitir la parte derecha 
  (nombre: nombre) y escribir solo nombre

  -Si quieres que la propiedad tenga un nombre distinto al de la variable, como colorFavorito: color, entonces 
   sí debes escribirlo completo
*/
const crearUsuario = (nombre, edad, color) => ({
  nombre, // equivale a nombre: nombre
  edad, // equivale a edad: edad
  colorFavorito: color, // aquí sí renombramos la propiedad
});
console.log(crearUsuario("Ana", 30, "verde")); // { nombre: 'Ana', edad: 30, colorFavorito: 'verde' }

//--------------------------------------------------------------------------------------
// ✅ Definiciones dinámicas en objetos (sin usar this)
//--------------------------------------------------------------------------------------
// Podemos definir funciones flecha dentro de objetos si no necesitamos acceder a this.

const operaciones = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
};
console.log(operaciones.suma(2, 3)); // 5

//--------------------------------------------------------------------------------------
// ⚠️ Advertencia: no usar como métodos si necesitas this
//--------------------------------------------------------------------------------------
// Las funciones flecha no tienen su propio this. Heredan el contexto donde fueron definidas.

const personaje = {
  nombre: "Carlos",
  saludar: () => `Hola, soy ${this.nombre}`, // ❌ this no apunta al objeto
};
console.log(personaje.saludar()); // Hola, soy undefined

//--------------------------------------------------------------------------------------
// ✅ Uso correcto en métodos que no requieren this
//--------------------------------------------------------------------------------------
// Si no necesitamos acceder a propiedades internas con this, podemos usar funciones flecha.

const logger = {
  mensajes: [],
  registrar: (msg) => logger.mensajes.push(msg),
};
logger.registrar("Inicio");
console.log(logger.mensajes); // [ 'Inicio' ]

//--------------------------------------------------------------------------------------
// ✅ Uso en reduce, map, filter, etc.
//--------------------------------------------------------------------------------------
// Las funciones flecha son ideales para métodos de arrays que reciben callbacks.

const palabras = ["hola", "mundo", "javascript"];
const totalLetras = palabras.reduce((acc, palabra) => acc + palabra.length, 0);
console.log(totalLetras); // 22

//--------------------------------------------------------------------------------------
// ✅ Uso en funciones anidadas
//--------------------------------------------------------------------------------------
// Podemos usar funciones flecha dentro de otras funciones para encapsular lógica.

function procesar(valor) {
  return (() => `Procesado: ${valor}`)();
}
console.log(procesar("dato")); // Procesado: dato

//--------------------------------------------------------------------------------------
// ✅ Uso en funciones de orden superior
//--------------------------------------------------------------------------------------
// Las funciones flecha son útiles para retornar otras funciones (funciones que generan funciones).

function aplicarOperacion(op) {
  return (a, b) => op(a, b);
}
const suma = aplicarOperacion((x, y) => x + y);
console.log(suma(4, 6)); // 10

//--------------------------------------------------------------------------------------
// ⚠️ Advertencia: no tienen propiedad prototype
//--------------------------------------------------------------------------------------
// Las funciones flecha no tienen la propiedad prototype, por lo tanto:
// - No pueden usarse como constructoras
// - No pueden participar en herencia basada en prototipos

const FuncionFlecha = () => {};
console.log(typeof FuncionFlecha.prototype); // undefined ❌

function FuncionNormal() {}
console.log(typeof FuncionNormal.prototype); // object ✅

//--------------------------------------------------------------------------------------
// 📊 Comparativa entre función tradicional y flecha
//--------------------------------------------------------------------------------------
/*
| Característica         | Función tradicional | Función flecha |
|------------------------|---------------------|----------------|
| Tiene this propio      | ✅ Sí               | ❌ No          |
| Tiene arguments        | ✅ Sí               | ❌ No          |
| Tiene prototype        | ✅ Sí               | ❌ No          |
| Se puede usar con new  | ✅ Sí               | ❌ No          |
| Puede usar yield       | ✅ Sí               | ❌ No          |
| Sintaxis concisa       | ❌ No               | ✅ Sí          |
| Ideal para callbacks   | ✅ Sí               | ✅ Sí          |
*/

//--------------------------------------------------------------------------------------
// 🧭 Resumen final
//--------------------------------------------------------------------------------------
/*
✅ Usos avanzados recomendados:
  - Encadenamiento de métodos
  - Callbacks en promesas
  - Expresiones inmediatas
  - Retorno directo de objetos literales
  - Definiciones funcionales en objetos
  - Funciones anidadas y de orden superior

⚠️ Evitar:
  - Métodos que dependan de this
  - Herencia o instanciación con new
  - Uso como generadores o constructores
  - Acceso a arguments o prototype
*/
