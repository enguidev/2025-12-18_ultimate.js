// Creo un elemento para los ejemplos.
let cuadrado1 = document.createElement("div"); // Creamos un elemento div y lo almacenamos en la constante cuadro1.
document.body.append(cuadrado1); // Añadimos el div creado al body del html (el método append puede añadir texto o nodos como último hijo).
cuadrado1.append("CUADRADO 1"); // Añadimos el texto "CUADRO 1"dentro del div creado
cuadrado1.classList.add("rojo", "cuadrado"); // Añadimos la clase rojo y cuadrado al div creado.

// Los eventos son "cosas que ocurren", durante la ejecución de una aplicación web

// Veremos que hay, eventos de ratón (click,...), teclado(keydown,...), de la página(load,...)..

// Para poder reaccionar a eventos tenemos que "capturar" el evento
// y asignar una función para tratarlo

// Existen tres formas de capturar eventos, las mostramos de más antigua
// a más actual, ésta última es la que usaremos nosotros

// Las más antigua ni la vamos a probar, es capturando el evento
// con un atributo de la etiqueta html
// <div id="cuadrado2" onclick="alert('CUADRADO 2')">CUADRADO 2</div>

// La segunda es usar una propiedad del elemento DOM

cuadrado1.onclick = function () {
  alert("CUADRADO 1");
};
// También podemos eliminarlo
cuadrado1.onclick = null;

// La tercera, que es la que usaremos nosotros es mediante el método
// addEventListener

cuadrado1.addEventListener("click", function () {
  alert("addEventListener en cuadrado1");
});

// Podemos eliminarlo con removeEventListener, aunque en este caso
// tendremos que usar los nombre de la función para asignar y eliminar.

// Dentro del código de la función la palabra reservada this
// hace referencia al elemento que ha generado el evento.

cuadrado1.addEventListener("click", function () {
  alert(this.innerText); //¿Por qué muestra alert 2 veces?
}); // Esta es una ventaja respecto a las anteriores formas

//Ejemplo de evento de teclado
window.addEventListener("keydown", function () {
  alert("HAS PULSADO UNA TECLA");
});

//OBJETO EVENT

// A veces necesitaremos obtener información del sobre el propio evento
// Ejemplo: ¿Qué teclas han pulsado?
// Ejemplo: ¿En que coordenadas ha hecho click?
// Ponemos un parámetro a la función que captura el evento (usualmente e o event)
// y éste parámetro contiene la información del evento dentro de la función.

// Creo un nuevo elemento para los ejemplos.
let cuadrado2 = document.createElement("div");
document.body.append(cuadrado2);
cuadrado2.append("CUADRADO 2");
cuadrado2.classList.add("azul", "cuadrado");

cuadrado2.addEventListener("click", function (e) {
  console.log(e); //Podemos ver toda la información
  alert("Coordenadas: " + e.clientX + " , " + e.clientY);
  // Las propiedades del evento pueden ser particulares de
  // ese tipo de evento o  genéricas
  alert("Contenido del elemento: " + e.target.innerText);
});

// Ejercicio: ¿Cómo saber que tecla han pulsado en el ejemplo de keydown?
// Resultado: Capturamos el evento keydown y usamos las propiedades del objeto evento
window.addEventListener("keydown", function (e) {
  // Método 1 (event.key): Muestra A, Enter, Escape, ArrowUp, etc.
  console.log("Tecla pulsada: " + e.key);

  // Método 2 (event.code): Muestra KeyA, Digit1, Enter, Space, etc.
  console.log("Código de tecla: " + e.code);
  alert("Código: " + e.code);

  // Método 3 (event.keyCode (OBSOLETO pero aún funciona): :Muestra el código numérico.
  console.log("Código numérico: " + e.keyCode);
  alert("KeyCode: " + e.keyCode);
});

window.addEventListener("keydown", function (e) {
  alert("Has pulsado la tecla: " + e.key);
  console.log("Información completa:", {
    key: e.key,
    code: e.code,
    keyCode: e.keyCode,
  });
});

// Ejemplos:
//Detectar teclas específicas:
window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log("Has pulsado Enter");
  }

  if (e.key === "Escape") {
    console.log("Has pulsado Escape");
  }

  if (e.key === "ArrowUp") {
    console.log("Flecha arriba");
  }
});

// Detectar combinaciones de teclas:
window.addEventListener("keydown", function (e) {
  // Ctrl + S
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault(); // Evita guardar la página
    alert("Guardar documento");
  }

  // Ctrl + C
  if (e.ctrlKey && e.key === "c") {
    console.log("Copiar");
  }

  // Shift + Enter
  if (e.shiftKey && e.key === "Enter") {
    console.log("Nueva línea");
  }
});

// Validar solo números:
let input = document.getElementById("telefono");

input.addEventListener("keydown", function (e) {
  // Permitir: backspace, delete, tab, escape, enter
  if ([8, 9, 27, 13, 46].includes(e.keyCode)) {
    return;
  }

  // Asegurar que sea un número
  if (
    (e.keyCode < 48 || e.keyCode > 57) &&
    (e.keyCode < 96 || e.keyCode > 105)
  ) {
    e.preventDefault();
  }
});

// PROPAGACIÓN DE EVENTOS

//  Los eventos recibidos por un elemento se propagan de un elemento hacia sus ancestros (padre,..)

//  Ejemplo: vamos a crear dos cuadros anidados.
let cuadradop = document.createElement("div");
cuadrado1.append(cuadradop);
cuadradop.append("CUADRADO P");
cuadradop.classList.add("azul", "cuadradop");
cuadradop.addEventListener("click", function () {
  alert("cuadrado P");
});

// Si hago click en cuadrado p,  se captura el click en cuadradop y en cuadrado1 ¿Por qué?
// Respuesta, por la propagación de eventos

// UTILIZACIÓN DE LA CAPTURA DE EVENTOS PARA DELEGAR LA CAPTURA DE EVENTOS (Realizar un ejemplo)

// También puedes crear y despachar tus propios eventos personalizados usando CustomEvent y dispatchEvent:
/*
const miEvento = new CustomEvent("miEventoPersonalizado", {
  detail: { nombre: "Ejemplo" },
});

document.addEventListener("miEventoPersonalizado", function (e) {
  console.log("Evento personalizado capturado:", e.detail);
});

// Despachar el evento
document.dispatchEvent(miEvento);
*/
//Para prevenir el comportamiento predeterminado de un evento, como el envío de un formulario, puedes usar preventDefault
/*  
const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Formulario no enviado");
  });
*/
/*
-Eventos de ratón:

  click: Ocurre cuando se hace clic en un elemento.

  dblclick: Ocurre cuando se hace doble clic en un elemento.

  mouseover: Ocurre cuando el ratón se mueve sobre un elemento.

  mouseout: Ocurre cuando el ratón se mueve fuera de un elemento.

  mousedown: Ocurre cuando se presiona un botón del ratón sobre un elemento.

  mouseup: Ocurre cuando se suelta el botón del ratón sobre un elemento.

-Eventos de teclado:

  keydown: Ocurre cuando se presiona una tecla.

  keyup: Ocurre cuando se suelta una tecla.

  keypress: Ocurre cuando se presiona una tecla, pero no distingue entre mayúsculas y minúsculas (considerado obsoleto).

-Eventos de formulario:

  submit: Ocurre cuando se envía un formulario.

  focus: Ocurre cuando un elemento obtiene el enfoque.

  blur: Ocurre cuando un elemento pierde el enfoque.

-Eventos de ventana:

  load: Ocurre cuando la página y todos sus recursos han sido cargados.

  resize: Ocurre cuando se redimensiona la ventana del navegador.

  scroll: Ocurre cuando se hace scroll en la página.
  */
