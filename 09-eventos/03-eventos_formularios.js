window.addEventListener("load", iniciar);

function iniciar() {
  let resultado = document.querySelector("#resultado");

  //Capturamos el evento blur de un campo de texto
  //y mostramos su valor.
  let nombre = document.querySelector("#nombre");
  nombre.addEventListener("blur", fvalor);

  //Capturamos el evento change de un select
  //y mostramos su valor
  let prov = document.querySelector("#prov");
  prov.addEventListener("change", fvalor);

  //Capturamos el evento change de los checked
  //y mostramos su valor
  let deportes = document.querySelector("#deportes");
  deportes.addEventListener("change", faficiones);
  let cine = document.querySelector("#cine");
  cine.addEventListener("change", faficiones);

  //Capturamos el evento click del botón de radio
  //y mostramos su valor
  let hombre = document.querySelector("#hombre");
  hombre.addEventListener("change", fsexo);
  let mujer = document.querySelector("#mujer");
  mujer.addEventListener("change", fsexo);

  //Creamos una funcion que muestra el atributo valor
  //de el elemento que recibe el evento
  function fvalor(e) {
    resultado.textContent = e.target.value;
  }

  function faficiones() {
    let aficiones = document.querySelectorAll("input[type=checkbox");
    resultado.textContent = "";
    for (let i of aficiones) {
      console.dir(i.checked + " " + i.value);
      if (i.checked) {
        resultado.textContent += i.value + " ";
      }
    }
  }

  function fsexo() {
    if (this.checked) {
      resultado.textContent = this.value;
    }
  }
}

// Ejecutar y entender el código.

// Ejercicio1: Poner un asterisco junto al nombre cuando lo dejen vacío
nombre.addEventListener("blur", function (e) {
  if (e.target.value.trim() === "") {
    // Campo vacío: mostrar asterisco
    e.target.classList.add("error");
    // Agregar asterisco visual (o mensaje)
    let aviso = document.querySelector("#aviso-nombre");
    if (!aviso) {
      aviso = document.createElement("span");
      aviso.id = "aviso-nombre";
      aviso.textContent = " *";
      aviso.style.color = "red";
      e.target.after(aviso);
    }
    // Devolver el foco al campo
    e.target.focus();
  } else {
    // Campo válido: quitar asterisco
    e.target.classList.remove("error");
    let aviso = document.querySelector("#aviso-nombre");
    if (aviso) aviso.remove();
  }
});

// ¿Cómo puedo poner el foco en el elemento que se ha producido el error?
// explicar evento y método focus.
// Con elemento.focus(); // Mueve el cursor al elemento

// Ejercicio2: Como vemos, este formulario se valida conforme van cumplimentando
// los campos, añade un botón, para realizar la validación, y crea una única función
// de validación.
// ¿Es necesario que sea un input type=submit?
/*
No es estrictamente necesario, pero tiene ventajas:

type="submit" dispara el evento submit del formulario automáticamente
Permite validación HTML5 nativa
Funciona con Enter dentro del formulario
Alternativa: usar <button> o <input type="button"> con evento click
*/
// Explicar preventDefault()
// Este método previene la acción por defecto de un evento:
formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe
  // Realizar validación personalizada
});
// Sin preventDefault(): el formulario se enviaría y la página se recargaría.