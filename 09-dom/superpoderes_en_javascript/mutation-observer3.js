class MutationObserverExample {
  mutationContainer = document.getElementById("mutation");
  addElementButton = document.getElementById("addElementButton");
  stopObservationButton = document.getElementById("stopObservationButton");
  mutationResults = document.getElementById("mutationResults");
  constructor() {
    this.bindAddElement();
    this.bindStopObservation();
    this.initMutationObserver();
  }
  mutationsNumber = 1;
  mutationObserver = new MutationObserver((mutations) => {
    console.log(mutations);
    this.mutationResults.innerText = this.mutationsNumber++;
  });
  bindAddElement = () => {
    this.addElementButton.addEventListener("click", () => {
      const appendElement = document.createElement("div");
      appendElement.innerText = "Elemento añadido!";
      this.mutationContainer.appendChild(appendElement);
    });
  };
  bindStopObservation = () => {
    this.stopObservationButton.addEventListener("click", () =>
      this.closeMutationObserver()
    );
  };
  initMutationObserver = () => {
    this.mutationObserver.observe(this.mutationContainer, {
      subtree: true,
      childList: true,
    });
  };
  closeMutationObserver = () => {
    this.mutationObserver.disconnect();
  };
}
document.addEventListener("DOMContentLoaded", () => {
  new MutationObserverExample();
});
