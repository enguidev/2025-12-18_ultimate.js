// ==========================================
// DELEGACIÓN DE EVENTOS - CÓDIGO PRINCIPAL
// ==========================================

const contenedor = document.getElementById("contenedor");
const pie = document.getElementById("pie");
const btnBorrarPie = document.getElementById("btnBorrarPie");
const btnAgregarCuadrado = document.getElementById("btnAgregarCuadrado");
const btnEliminarUltimo = document.getElementById("btnEliminarUltimo");
const btnReiniciar = document.getElementById("btnReiniciar");

const statCuadrados = document.getElementById("statCuadrados");
const statClicks = document.getElementById("statClicks");
const statEventListeners = document.getElementById("statEventListeners");

let contador = 11;
let totalClicks = 0;

// ==========================================
// 1. CREAR CUADRADOS INICIALES
// ==========================================
function crearCuadradosIniciales() {
  contenedor.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    let cuadrado = document.createElement("div");
    cuadrado.classList.add("cuadrado");
    cuadrado.textContent = i;
    contenedor.append(cuadrado);
  }
  actualizarEstadisticas();
}

// ==========================================
// 2. DELEGACIÓN DE EVENTOS
// ==========================================
// ✅ UN SOLO evento para TODOS los cuadrados
// Esto funciona porque aprovechamos la PROPAGACIÓN (burbujeo)
contenedor.addEventListener("click", function (e) {
  // Verificamos si el click fue en un cuadrado
  if (e.target.classList.contains("cuadrado")) {
    // e.target es el elemento que recibió el click
    pie.textContent = "Has clickeado el cuadrado: " + e.target.textContent;
    pie.classList.remove("empty");

    // Animación visual
    e.target.classList.add("selected");
    setTimeout(() => {
      e.target.classList.remove("selected");
    }, 500);

    // Actualizar estadísticas
    totalClicks++;
    statClicks.textContent = totalClicks;

    console.log("Click en cuadrado:", e.target.textContent);
  }
});

// ==========================================
// 3. BOTÓN PARA BORRAR EL PIE
// ==========================================
btnBorrarPie.addEventListener("click", function (e) {
  e.stopPropagation(); // Evitar que se propague el evento
  pie.textContent = "Haz click en un cuadrado para ver su contenido aquí";
  pie.classList.add("empty");

  // Quitar selección de todos los cuadrados
  document.querySelectorAll(".cuadrado").forEach((c) => {
    c.classList.remove("selected");
  });
});

// ==========================================
// 4. AGREGAR CUADRADO DINÁMICAMENTE
// ==========================================
// ¡La magia de la delegación! Los nuevos elementos
// funcionan automáticamente sin necesidad de
// asignarles eventos individualmente
btnAgregarCuadrado.addEventListener("click", function () {
  let nuevoCuadrado = document.createElement("div");
  nuevoCuadrado.classList.add("cuadrado");
  nuevoCuadrado.textContent = contador++;
  contenedor.append(nuevoCuadrado);

  actualizarEstadisticas();

  // Animación de entrada
  nuevoCuadrado.style.transform = "scale(0)";
  setTimeout(() => {
    nuevoCuadrado.style.transform = "scale(1)";
  }, 10);
});

// ==========================================
// 5. ELIMINAR ÚLTIMO CUADRADO
// ==========================================
btnEliminarUltimo.addEventListener("click", function () {
  let cuadrados = contenedor.querySelectorAll(".cuadrado");
  if (cuadrados.length > 0) {
    let ultimo = cuadrados[cuadrados.length - 1];
    ultimo.style.transform = "scale(0)";
    setTimeout(() => {
      ultimo.remove();
      actualizarEstadisticas();
    }, 300);
  }
});

// ==========================================
// 6. REINICIAR
// ==========================================
btnReiniciar.addEventListener("click", function () {
  contador = 11;
  totalClicks = 0;
  statClicks.textContent = 0;
  crearCuadradosIniciales();
  btnBorrarPie.click();
});

// ==========================================
// 7. ACTUALIZAR ESTADÍSTICAS
// ==========================================
function actualizarEstadisticas() {
  let numCuadrados = contenedor.querySelectorAll(".cuadrado").length;
  statCuadrados.textContent = numCuadrados;
}

// ==========================================
// INICIALIZAR
// ==========================================
crearCuadradosIniciales();

// ==========================================
// EJEMPLO ADICIONAL: DELEGACIÓN CON MÚLTIPLES TIPOS
// ==========================================
contenedor.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("cuadrado")) {
    e.target.style.opacity = "0.8";
  }
});

contenedor.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("cuadrado")) {
    e.target.style.opacity = "1";
  }
});
