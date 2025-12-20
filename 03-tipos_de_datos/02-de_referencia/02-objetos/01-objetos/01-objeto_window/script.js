// Funciones adicionales para la demostración
let intervalo = null;
let contador = 0;

function irAPagina() {
  window.open("nueva.html", "_blank");
}
function mostrarInfoVentana() {
  const info = `
          Ancho: ${window.innerWidth}px
          Alto: ${window.innerHeight}px
          Posición X: ${window.screenX}px
          Posición Y: ${window.screenY}px
          URL: ${window.location.href}
        `;
  document.getElementById("ventana").textContent = info;
}

function moverVentana() {
  window.moveTo(100, 100);
  mostrarInfoVentana();
}

function redimensionar() {
  window.resizeTo(800, 600);
  mostrarInfoVentana();
}

function mostrarInfoNavegador() {
  const info = `
          <p><strong>Navegador:</strong> ${navigator.userAgent}</p>
          <p><strong>Idioma:</strong> ${navigator.language}</p>
          <p><strong>Online:</strong> ${navigator.onLine ? "Sí" : "No"}</p>
          <p><strong>Plataforma:</strong> ${navigator.platform}</p>
        `;
  document.getElementById("elements").innerHTML = info;
}

function mostrarAlerta() {
  alert("¡Esto es una alerta!");
}

function mostrarConfirm() {
  const resultado = confirm("¿Estás seguro?");
  alert(resultado ? "Confirmado ✅" : "Cancelado ❌");
}

function mostrarPrompt() {
  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre) {
    alert(`¡Hola ${nombre}! 👋`);
  }
}

function iniciarTimeout() {
  document.getElementById("ventana").textContent = "Esperando 3 segundos...";
  setTimeout(() => {
    document.getElementById("ventana").textContent = "✅ ¡Timeout completado!";
  }, 3000);
}

function iniciarInterval() {
  if (intervalo) return;
  contador = 0;
  intervalo = setInterval(() => {
    contador++;
    document.getElementById("ventana").textContent = `Contador: ${contador}`;
  }, 1000);
}

function detenerInterval() {
  if (intervalo) {
    clearInterval(intervalo);
    intervalo = null;
    document.getElementById(
      "ventana"
    ).textContent = `⏹️ Detenido en: ${contador}`;
  }
}
