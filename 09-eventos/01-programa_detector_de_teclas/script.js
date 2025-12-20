const keyDisplay = document.getElementById("keyDisplay");
const keyValue = document.getElementById("keyValue");
const details = document.getElementById("details");
const eventKey = document.getElementById("eventKey");
const eventCode = document.getElementById("eventCode");
const eventKeyCode = document.getElementById("eventKeyCode");
const specialKey = document.getElementById("specialKey");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearBtn");

let history = [];

// Evento principal: detectar tecla pulsada
window.addEventListener("keydown", function (e) {
  // Mostrar la tecla pulsada
  keyValue.textContent = e.key;

  // Mostrar detalles
  details.style.display = "block";
  eventKey.textContent = e.key;
  eventCode.textContent = e.code;
  eventKeyCode.textContent = e.keyCode + " (obsoleto)";

  // Detectar teclas especiales
  let special = [];
  if (e.ctrlKey) special.push("Ctrl");
  if (e.shiftKey) special.push("Shift");
  if (e.altKey) special.push("Alt");
  if (e.metaKey) special.push("Meta/Win");

  specialKey.textContent = special.length > 0 ? special.join(" + ") : "Ninguna";

  // Animación
  keyDisplay.classList.add("pressed");
  setTimeout(() => keyDisplay.classList.remove("pressed"), 200);

  // Agregar al historial
  addToHistory(e);

  // Consola para debug
  console.log("Tecla pulsada:", {
    key: e.key,
    code: e.code,
    keyCode: e.keyCode,
  });
});

// Función para agregar al historial
function addToHistory(e) {
  const time = new Date().toLocaleTimeString();
  const entry = `${time} - ${e.key} (${e.code})`;

  history.unshift(entry);
  if (history.length > 10) history.pop();

  updateHistoryDisplay();
}

// Actualizar vista del historial
function updateHistoryDisplay() {
  if (history.length === 0) {
    historyList.innerHTML =
      '<div style="text-align: center; color: #999;">Aún no has pulsado ninguna tecla</div>';
  } else {
    historyList.innerHTML = history
      .map((item) => `<div class="history-item">${item}</div>`)
      .join("");
  }
}

// Limpiar historial
clearBtn.addEventListener("click", function () {
  history = [];
  updateHistoryDisplay();
});

// Ejemplo adicional: detectar combinaciones específicas
window.addEventListener("keydown", function (e) {
  // Detectar Ctrl + S
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    alert("¡Has pulsado Ctrl + S!");
  }

  // Detectar Enter
  if (e.key === "Enter") {
    console.log("¡Enter pulsado!");
  }

  // Detectar Escape
  if (e.key === "Escape") {
    console.log("¡Escape pulsado!");
  }
});
