/*
VIDEO: https://www.youtube.com/watch?v=x15ztXIvq-o&list=PLcrGLrk890EF6bXNBt7y2Fg4_9IDwxp8m&index=6
CANAL: DotTech-ES
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
document.addEventListener("DOMContentLoaded", () => {
  new MutationObserverExample();
});

/**
 * Clase que encapsula el uso de MutationObserver para detectar cambios en el DOM.
 * Observa el contenedor #mutation y actualiza el contador cada vez que se añade un hijo.
 */
class MutationObserverExample {
  constructor() {
    // Referencias a elementos del DOM
    this.mutationContainer = document.getElementById("mutation");
    this.addElementButton = document.getElementById("addElementButton");
    this.stopObservationButton = document.getElementById(
      "stopObservationButton"
    );
    this.mutationResults = document.getElementById("mutationResults");

    // Contador de mutaciones detectadas
    this.mutationsNumber = 1;

    // Instancia del observador con función de callback
    this.mutationObserver = new MutationObserver(this.handleMutations);

    // Enlazamos eventos y activamos el observador
    this.bindAddElement();
    this.bindStopObservation();
    this.initMutationObserver();
  }

  /**
   * Función que se ejecuta cada vez que se detecta una mutación.
   * Actualiza el contador y muestra las mutaciones en consola.
   */
  handleMutations = (mutations) => {
    console.log("Mutaciones detectadas:", mutations);
    this.mutationResults.innerText = this.mutationsNumber++;
  };

  /**
   * Añade un nuevo elemento al contenedor observado.
   * Esto dispara una mutación que será detectada por el observador.
   */
  bindAddElement = () => {
    this.addElementButton.addEventListener("click", () => {
      const appendElement = document.createElement("div");
      appendElement.innerText = "Elemento añadido!";
      this.mutationContainer.appendChild(appendElement);
    });
  };

  /**
   * Detiene la observación de mutaciones.
   * Útil para evitar que se sigan registrando cambios.
   */
  bindStopObservation = () => {
    this.stopObservationButton.addEventListener("click", () =>
      this.mutationObserver.disconnect()
    );
  };

  /**
   * Inicia la observación del contenedor.
   * Se observan cambios en los hijos y en todo el subárbol.
   */
  initMutationObserver = () => {
    this.mutationObserver.observe(this.mutationContainer, {
      childList: true, // observa adición/eliminación de hijos
      subtree: true, // observa también los descendientes
    });
  };
}
