/*
El localStorage es una parte del almacenamiento web que permite a las aplicaciones web 
almacenar datos de manera persistente en el navegador del usuario (en el cliente y no en 
el servidor como suelen hacer las empresas actualmente ya que si inicias sesión en la misma 
página pero en otro navegador u ordenador necesitarías disponer de estos datos que desde 
cliente ya no tendrías). 
Los datos almacenados en localStorage se mantienen incluso si el navegador se cierra y se 
vuelve a abrir.

Si queremos algo temporal que se borre cuando cierre el navegador usaríamos sessionStorage
y se usa de la misma forma que localStorage pero con esa diferencia
*/

// *** Propiedades y Métodos de localStorage *** //

// ** 3 formas de almacenar Datos ** //

// 1. Usando el método setItem
localStorage.setItem("clave", "valor");

// 2. Usando notación de punto (este no permite claves con espacios y es menos explícito que los otros)
localStorage.clave = "valor";
console.log(valor); // "valor"

// 3. Usando notación de corchetes
localStorage["clave"] = "valor";

// *** 3 formas de Recuperar Datos *** //

// 1. Usar el método getItem
valor = localStorage.getItem("clave");

// 2. Usar la notación de punto
valor = localStorage.clave;
console.log(valor); // "valor"

// Usando notación de corchetes
valor2 = localStorage["clave"];
console.log(valor2); // "valor"

// Ejemplo
nombre = prompt("Por favor, inserte su nombre");

localStorage.nombre = nombre;
localStorage.setItem("nombre", nombre);

document.write(localStorage.nombre);

// *** Eliminar Datos ***//

// Puedes eliminar un par clave-valor específico usando el método removeItem
localStorage.removeItem("clave");

// *** Limpiar Todo el localStorage ***//

// Para eliminar todos los datos del localStorage, usa el método clear
localStorage.clear();

// *** Longitud del localStorage *** //

// Puedes obtener el número de elementos almacenados en localStorage usando la propiedad length
let longitud = localStorage.length;
console.log(longitud);

// *** Acceder a las Claves ***//

// Puedes acceder a una clave específica almacenada en localStorage usando el método key
let primeraClave = localStorage.key(0);
console.log(primeraClave);

// **** Guardar un Objeto en localStorage ***//

// Para guardar un objeto, primero necesitas convertirlo en una cadena JSON usando JSON.stringify
let usuario = {
  nombre: "Juan",
  edad: 30,
};

// Guardar el objeto
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar el objeto
let usuarioGuardado = localStorage.getItem("usuario");
let usuarioObj = JSON.parse(usuarioGuardado);
console.log(usuarioObj.nombre); // "Juan"
console.log(usuarioObj.edad); // 30

// *** Contador de Visitas *** //

// Podrías usar localStorage para llevar un contador de visitas a una página web
// Obtener el contador actual
let contador = localStorage.getItem("visitas");
if (contador === null) {
  contador = 0;
} else {
  contador = parseInt(contador);
}

// Incrementar el contador
contador += 1;

// Guardar el nuevo valor en localStorage
localStorage.setItem("visitas", contador);

// Mostrar el contador
console.log(`Número de visitas: ${contador}`);
