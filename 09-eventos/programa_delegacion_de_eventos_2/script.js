// ==========================================
// ELEMENTOS DEL DOM
// ==========================================
const contenedor = document.getElementById("contenedor");
const pie = document.getElementById("pie");
const btnBorrarPie = document.getElementById("btnBorrarPie");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const btnReiniciar = document.getElementById("btnReiniciar");

const statCuadrados = document.getElementById("statCuadrados");
const statClicks = document.getElementById("statClicks");

let contador = 11;
let totalClicks = 0;

// ==========================================
// 1. CREAR CUADRADOS INICIALES
// ==========================================
function crearCuadradosIniciales() {
  contenedor.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.className = "cuadrado";
    cuadrado.textContent = i;
    contenedor.appendChild(cuadrado);
  }
  actualizarEstadisticas();
}

// ==========================================
// 2. DELEGACIÓN DE EVENTOS (LO MÁS IMPORTANTE)
// ==========================================
// ✅ UN SOLO evento en el contenedor padre
// Funciona para todos los cuadrados (actuales y futuros)
contenedor.addEventListener("click", function (e) {
  // Verificar si el click fue en un cuadrado
  if (e.target.classList.contains("cuadrado")) {
    // Mostrar en el pie
    pie.textContent = "✅ Has clickeado el cuadrado: " + e.target.textContent;
    pie.classList.remove("vacio");

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
// 3. BOTÓN: BORRAR PIE
// ==========================================
btnBorrarPie.addEventListener("click", function () {
  pie.textContent = "👆 Haz click en un cuadrado para ver su número aquí";
  pie.classList.add("vacio");

  // Quitar selección visual
  document.querySelectorAll(".cuadrado.selected").forEach((c) => {
    c.classList.remove("selected");
  });
});

// ==========================================
// 4. BOTÓN: AGREGAR CUADRADO
// ==========================================
btnAgregar.addEventListener("click", function () {
  const nuevo = document.createElement("div");
  nuevo.className = "cuadrado";
  nuevo.textContent = contador++;

  // Animación de entrada
  nuevo.style.transform = "scale(0)";
  contenedor.appendChild(nuevo);

  setTimeout(() => {
    nuevo.style.transform = "scale(1)";
  }, 10);

  actualizarEstadisticas();
});

// ==========================================
// 5. BOTÓN: ELIMINAR ÚLTIMO
// ==========================================
btnEliminar.addEventListener("click", function () {
  const cuadrados = contenedor.querySelectorAll(".cuadrado");
  if (cuadrados.length > 0) {
    const ultimo = cuadrados[cuadrados.length - 1];
    ultimo.style.transform = "scale(0)";

    setTimeout(() => {
      ultimo.remove();
      actualizarEstadisticas();
    }, 300);
  }
});

// ==========================================
// 6. BOTÓN: REINICIAR TODO
// ==========================================
btnReiniciar.addEventListener("click", function () {
  // Resetear contador
  contador = 11;
  totalClicks = 0;
  statClicks.textContent = 0;

  // Recrear cuadrados iniciales
  crearCuadradosIniciales();

  // Limpiar pie
  btnBorrarPie.click();
});

// ==========================================
// 7. ACTUALIZAR ESTADÍSTICAS
// ==========================================
function actualizarEstadisticas() {
  const numCuadrados = contenedor.querySelectorAll(".cuadrado").length;
  statCuadrados.textContent = numCuadrados;
}

// ==========================================
// INICIALIZAR AL CARGAR
// ==========================================
crearCuadradosIniciales();
