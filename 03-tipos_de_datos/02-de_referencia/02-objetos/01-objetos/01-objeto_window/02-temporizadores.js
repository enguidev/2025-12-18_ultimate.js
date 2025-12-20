//--------------------------------------------------------------------------------------
// TEMPORIZADORES - setTimeout() y setInterval()
//--------------------------------------------------------------------------------------

/*
🎯 Los temporizadores permiten ejecutar código después de un tiempo o repetidamente.

Hay 4 métodos principales:
  - setTimeout()  → Ejecuta UNA VEZ después de X ms
  - setInterval() → Ejecuta REPETIDAMENTE cada X ms
  - clearTimeout()  → Cancela un setTimeout
  - clearInterval() → Cancela un setInterval
*/

//--------------------------------------------------------------------------------------
// 1. setTimeout() - Ejecutar una vez después de un tiempo
//--------------------------------------------------------------------------------------

// Sintaxis: setTimeout(función, milisegundos, ...argumentos)
// Devuelve: ID del temporizador (número)

// Ejemplo básico
setTimeout(() => {
  console.log("Este mensaje aparece después de 2 segundos");
}, 2000);

// Con función nombrada
function saludar() {
  console.log("¡Hola!");
}
setTimeout(saludar, 1000);

// Con argumentos
function saludarPersona(nombre, edad) {
  console.log(`Hola ${nombre}, tienes ${edad} años`);
}
setTimeout(saludarPersona, 1500, "Carlos", 30);

// Guardar el ID para poder cancelarlo
const timeoutId = setTimeout(() => {
  console.log("Esto no se ejecutará porque se cancela antes");
}, 5000);

// Cancelar el timeout (debe hacerse antes de que se cumpla el tiempo)
clearTimeout(timeoutId);

//--------------------------------------------------------------------------------------
// 2. setInterval() - Ejecutar repetidamente
//--------------------------------------------------------------------------------------

// Sintaxis: setInterval(función, milisegundos, ...argumentos)
// Devuelve: ID del intervalo (número)

// Ejemplo básico: ejecutar cada segundo
const intervaloId = setInterval(() => {
  console.log("Tick... (cada segundo)");
}, 1000);

// ⚠️ IMPORTANTE: Siempre guardar el ID y limpiarlo cuando ya no se necesite
// Si no, el intervalo seguirá ejecutándose indefinidamente

// Detener el intervalo después de 5 segundos
setTimeout(() => {
  clearInterval(intervaloId);
  console.log("Intervalo detenido");
}, 5000);

//--------------------------------------------------------------------------------------
// EJEMPLO 1: Reloj digital
//--------------------------------------------------------------------------------------

let relojInterval;

function iniciarReloj() {
  // Limpiar intervalo anterior si existe
  if (relojInterval) {
    clearInterval(relojInterval);
  }

  // Mostrar hora inmediatamente
  mostrarHora();

  // Actualizar cada segundo
  relojInterval = setInterval(mostrarHora, 1000);
  console.log("⏰ Reloj iniciado");
}

function mostrarHora() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");

  console.log(`🕐 ${horas}:${minutos}:${segundos}`);
}

function detenerReloj() {
  if (relojInterval) {
    clearInterval(relojInterval);
    relojInterval = null;
    console.log("⏸️ Reloj detenido");
  }
}

// Iniciar el reloj (descomenta para probar)
// iniciarReloj();

// Detener después de 10 segundos
// setTimeout(detenerReloj, 10000);

//--------------------------------------------------------------------------------------
// EJEMPLO 2: Cuenta atrás (countdown)
//--------------------------------------------------------------------------------------

function cuentaAtras(segundos, callback) {
  console.log(`⏳ Iniciando cuenta atrás desde ${segundos} segundos`);

  let restante = segundos;

  // Mostrar inmediatamente
  console.log(`⏱️ ${restante} segundos restantes`);

  const intervalo = setInterval(() => {
    restante--;

    if (restante > 0) {
      console.log(`⏱️ ${restante} segundos restantes`);
    } else {
      clearInterval(intervalo);
      console.log("🎉 ¡Tiempo terminado!");
      if (callback) callback();
    }
  }, 1000);

  return intervalo; // Devolver para poder cancelar si es necesario
}

// Usar la cuenta atrás
// cuentaAtras(5, () => {
//   console.log("Callback ejecutado después de la cuenta atrás");
// });

//--------------------------------------------------------------------------------------
// EJEMPLO 3: Temporizador con pausa/reanudar
//--------------------------------------------------------------------------------------

class Temporizador {
  constructor() {
    this.segundos = 0;
    this.intervalo = null;
    this.activo = false;
  }

  iniciar() {
    if (this.activo) {
      console.log("⚠️ El temporizador ya está activo");
      return;
    }

    this.activo = true;
    this.intervalo = setInterval(() => {
      this.segundos++;
      console.log(`⏱️ Tiempo: ${this.formatearTiempo()}`);
    }, 1000);

    console.log("▶️ Temporizador iniciado");
  }

  pausar() {
    if (!this.activo) {
      console.log("⚠️ El temporizador no está activo");
      return;
    }

    clearInterval(this.intervalo);
    this.activo = false;
    console.log("⏸️ Temporizador pausado");
  }

  reanudar() {
    if (this.activo) {
      console.log("⚠️ El temporizador ya está activo");
      return;
    }

    this.iniciar();
  }

  reiniciar() {
    this.pausar();
    this.segundos = 0;
    console.log("🔄 Temporizador reiniciado");
  }

  formatearTiempo() {
    const horas = Math.floor(this.segundos / 3600);
    const minutos = Math.floor((this.segundos % 3600) / 60);
    const segundos = this.segundos % 60;

    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(
      2,
      "0"
    )}:${String(segundos).padStart(2, "0")}`;
  }

  obtenerTiempo() {
    return this.segundos;
  }
}

// Usar el temporizador
const miTemporizador = new Temporizador();
// miTemporizador.iniciar();
// setTimeout(() => miTemporizador.pausar(), 5000);
// setTimeout(() => miTemporizador.reanudar(), 8000);
// setTimeout(() => miTemporizador.reiniciar(), 12000);

//--------------------------------------------------------------------------------------
// EJEMPLO 4: Notificación después de tiempo
//--------------------------------------------------------------------------------------

function notificarDespuesDe(segundos, mensaje) {
  console.log(`⏳ Notificación programada en ${segundos} segundos`);

  setTimeout(() => {
    console.log(`🔔 NOTIFICACIÓN: ${mensaje}`);

    // Si el navegador soporta notificaciones
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Recordatorio", {
        body: mensaje,
        icon: "🔔",
      });
    }
  }, segundos * 1000);
}

// notificarDespuesDe(5, "¡No olvides guardar tu trabajo!");

//--------------------------------------------------------------------------------------
// EJEMPLO 5: Polling (consultar API periódicamente)
//--------------------------------------------------------------------------------------

function iniciarPolling(url, intervaloSegundos) {
  console.log(`🔄 Iniciando polling cada ${intervaloSegundos} segundos`);

  // Función para hacer la petición
  async function consultar() {
    try {
      console.log(`📡 Consultando: ${url}`);
      // Aquí iría tu lógica de fetch
      // const respuesta = await fetch(url);
      // const datos = await respuesta.json();
      console.log("✅ Datos obtenidos");
    } catch (error) {
      console.error("❌ Error en la consulta:", error);
    }
  }

  // Consultar inmediatamente
  consultar();

  // Después consultar periódicamente
  const intervalo = setInterval(consultar, intervaloSegundos * 1000);

  return {
    detener: () => {
      clearInterval(intervalo);
      console.log("🛑 Polling detenido");
    },
  };
}

// const polling = iniciarPolling("https://api.ejemplo.com/datos", 5);
// setTimeout(() => polling.detener(), 20000); // Detener después de 20s

//--------------------------------------------------------------------------------------
// EJEMPLO 6: Auto-save (guardar automáticamente)
//--------------------------------------------------------------------------------------

class AutoSave {
  constructor(intervaloSegundos = 30) {
    this.intervalo = null;
    this.intervaloSegundos = intervaloSegundos;
    this.cambiosSinGuardar = false;
  }

  iniciar(funcionGuardar) {
    this.intervalo = setInterval(() => {
      if (this.cambiosSinGuardar) {
        console.log("💾 Guardando automáticamente...");
        funcionGuardar();
        this.cambiosSinGuardar = false;
      } else {
        console.log("ℹ️ No hay cambios que guardar");
      }
    }, this.intervaloSegundos * 1000);

    console.log(`✅ Auto-save activado (cada ${this.intervaloSegundos}s)`);
  }

  marcarCambio() {
    this.cambiosSinGuardar = true;
  }

  detener() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
      console.log("🛑 Auto-save desactivado");
    }
  }
}

// Uso
const autoSave = new AutoSave(10); // Guardar cada 10 segundos
// autoSave.iniciar(() => {
//   console.log("Guardando en base de datos...");
// });
// autoSave.marcarCambio(); // Marcar que hay cambios

//--------------------------------------------------------------------------------------
// ⚠️ PROBLEMAS COMUNES Y SOLUCIONES
//--------------------------------------------------------------------------------------

// PROBLEMA 1: Pérdida de memoria por no limpiar intervalos
// ❌ MAL
function iniciarMal() {
  setInterval(() => console.log("Hola"), 1000);
  // El intervalo nunca se detiene = memory leak
}

// ✅ BIEN
let miIntervalo;
function iniciarBien() {
  miIntervalo = setInterval(() => console.log("Hola"), 1000);
}
function detener() {
  clearInterval(miIntervalo);
}

// PROBLEMA 2: Múltiples intervalos activos
// ❌ MAL
function iniciarReloj2() {
  setInterval(() => console.log("Tick"), 1000);
  // Si se llama múltiples veces, habrá múltiples intervalos
}

// ✅ BIEN
let relojId;
function iniciarReloj3() {
  if (relojId) {
    clearInterval(relojId); // Limpiar anterior
  }
  relojId = setInterval(() => console.log("Tick"), 1000);
}

// PROBLEMA 3: Confundir setTimeout con setInterval
// setTimeout ejecuta UNA VEZ
// setInterval ejecuta REPETIDAMENTE

//--------------------------------------------------------------------------------------
// 💡 BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
1. ✅ Siempre guardar el ID del temporizador
2. ✅ Limpiar temporizadores cuando ya no se necesiten
3. ✅ Verificar si ya existe un temporizador antes de crear otro
4. ✅ Usar clearTimeout/clearInterval en cleanup (React, Vue, etc.)
5. ✅ Considerar si realmente necesitas un intervalo o puedes usar eventos
6. ✅ Para animaciones, usa requestAnimationFrame en lugar de setInterval
7. ✅ No confíes en la precisión absoluta (los delays pueden variar)

8. ❌ No crear intervalos infinitos sin forma de detenerlos
9. ❌ No usar intervalos muy cortos (<16ms aprox)
10. ❌ No crear demasiados temporizadores simultáneos
*/

//--------------------------------------------------------------------------------------
// 🎯 ALTERNATIVAS MODERNAS
//--------------------------------------------------------------------------------------

// Para animaciones: requestAnimationFrame
function animarConRAF() {
  let frame = 0;

  function animar() {
    frame++;
    console.log(`Frame ${frame}`);

    if (frame < 60) {
      // Animar 60 frames
      requestAnimationFrame(animar);
    }
  }

  requestAnimationFrame(animar);
}

// Para delays más precisos: async/await con Promises
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ejemploConSleep() {
  console.log("Inicio");
  await sleep(2000);
  console.log("Después de 2 segundos");
  await sleep(1000);
  console.log("Después de 3 segundos total");
}

//--------------------------------------------------------------------------------------
// 📊 TABLA COMPARATIVA
//--------------------------------------------------------------------------------------

/*
┌─────────────────┬─────────────┬────────────────┬──────────────────┐
│ Método          │ Ejecución   │ Uso típico     │ Limpiar con      │
├─────────────────┼─────────────┼────────────────┼──────────────────┤
│ setTimeout      │ Una vez     │ Delays         │ clearTimeout     │
│ setInterval     │ Repetido    │ Relojes, polls │ clearInterval    │
│ requestAnimFrame│ Por frame   │ Animaciones    │ cancelAnimFrame  │
│ Promise+timeout │ Una vez     │ Async delays   │ AbortController  │
└─────────────────┴─────────────┴────────────────┴──────────────────┘
*/

//--------------------------------------------------------------------------------------
// 🧪 EJERCICIOS PROPUESTOS
//--------------------------------------------------------------------------------------

/*
1. Crea un cronómetro que muestre tiempo transcurrido en formato HH:MM:SS
2. Implementa un sistema de recordatorios con múltiples alertas
3. Crea un temporizador Pomodoro (25 min trabajo, 5 min descanso)
4. Implementa un sistema de auto-logout después de inactividad
5. Crea un carrusel de imágenes que cambie cada 3 segundos
*/

console.log("✅ Archivo 02-temporizadores.js cargado");
console.log("💡 Recuerda: Siempre limpia tus temporizadores con clear*");
