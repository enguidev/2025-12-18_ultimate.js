/*
VIDEO: https://www.youtube.com/watch?v=x15ztXIvq-o&list=PLcrGLrk890EF6bXNBt7y2Fg4_9IDwxp8m&index=6
CANAL: DotTech-ES
MINUTO: 2:13
TITULO: SuperPoderes en JavaScript | Observar y detectar cambios en el DOM sin PATRONES ni BIBLIOTECAS

/*
DETECTAR CIERTOS CAMBIOS EN EL DOM, EN VIVO DE FORMA ASÍNCRONA:

  -CLASE JAVASCRIPT INTERSECTIONOBSERVER:


  -CLASE MUTATIONOBSERVER:
    Establece un mecanismo para reaccionar antes cambios en el DOM,
    esto nos permite poder realizar una acción cuando el documento 
    o un nodo raíz sufre cambios en su interior como añadir un nuevo 
    hijo o eliminarlo.

    También podemos observar propiedades de elementos entre otras cosas.

Son implementaciones prácticas del patrón Observer.

Rol en el patrón	| Ejemplo en JS
Sujeto	          | Nodo del DOM
Observador	      | MutationObserver o IntersectionObserver
Evento observado	| Mutación o intersección
Notificación	    | Callback que se ejecuta
*/

/*
Esperamos a que el DOM esté completamente cargado antes de instanciar 
la clase (aunque ya usamos el defer para este script en el html capturamos
el evento DOMContentLoaded por si copiamos y pegamos este código en otro 
ejemplo que el html no tenga el defer)
*/

// Esperamos a que el DOM esté completamente cargado antes de instanciar la clase.
// Esto garantiza que los elementos con los que interactuamos ya existen.
document.addEventListener("DOMContentLoaded", () => {
  new MutationObserverExample();
});

/**
 * Clase que encapsula el uso de MutationObserver para detectar cambios en el DOM.
 * Observa el contenedor #mutation y actualiza el contador cada vez que se añade un hijo.
 */
class MutationObserverExample {
  // 🔹 Referencias directas a elementos del DOM, declaradas como propiedades públicas de clase.
  mutationContainer = document.getElementById("mutation"); // Contenedor que será observado
  addElementButton = document.getElementById("addElementButton"); // Botón para añadir elementos
  stopObservationButton = document.getElementById("stopObservationButton"); // Botón para detener la observación
  mutationResults = document.getElementById("mutationResults"); // Span que muestra el número de mutaciones

  /**
   * Constructor: se ejecuta al instanciar la clase.
   * Enlaza los eventos y activa el observador.
   */
  constructor() {
    this.bindAddElement(); // Enlaza el botón de añadir elementos
    this.bindStopObservation(); // Enlaza el botón de detener observación
    this.initMutationObserver(); // Inicia el observador de mutaciones
  }

  // 🔢 Contador de mutaciones detectadas
  mutationsNumber = 1;

  /**
   * Instancia de MutationObserver con función de callback.
   * Se ejecuta cada vez que se detecta una mutación en el DOM observado.
   */
  mutationObserver = new MutationObserver((mutations) => {
    console.log(mutations); // Muestra en consola los MutationRecord detectados
    this.mutationResults.innerText = this.mutationsNumber++; // Actualiza el contador visual
  });

  /**
   * Enlaza el evento click del botón "Añadir elementos".
   * Cada clic añade un nuevo <div> al contenedor observado.
   */
  bindAddElement = () => {
    this.addElementButton.addEventListener("click", () => {
      const appendElement = document.createElement("div");
      appendElement.innerText = "Elemento añadido!";
      this.mutationContainer.appendChild(appendElement); // Esto dispara una mutación
    });
  };

  /**
   * Enlaza el evento click del botón "Dejar de observar".
   * Al pulsarlo, se desconecta el observador.
   */
  bindStopObservation = () => {
    this.stopObservationButton.addEventListener("click", () =>
      this.closeMutationObserver()
    );
  };

  /**
   * Inicia la observación del contenedor #mutation.
   * Configuración:
   * - childList: observa adición/eliminación de hijos directos.
   * - subtree: observa también los descendientes.
   */
  initMutationObserver = () => {
    this.mutationObserver.observe(this.mutationContainer, {
      subtree: true,
      childList: true,
    });
  };

  /**
   * Detiene la observación de mutaciones.
   * Útil para evitar que se sigan registrando cambios.
   */
  closeMutationObserver = () => {
    this.mutationObserver.disconnect();
  };
}
