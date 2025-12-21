//--------------------------------------------------------------------------------------
// 🎯 CALLBACKS (Funciones de Retrollamada)
//--------------------------------------------------------------------------------------
// Un callback es una función que se pasa como argumento a otra función
// y se ejecuta después de que ocurra algún evento o se complete una operación

//--------------------------------------------------------------------------------------
// 1️⃣ CALLBACKS SÍNCRONOS
//--------------------------------------------------------------------------------------

// Ejemplo básico
function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}`);
  callback();
}

function despedida() {
  console.log("Adiós!");
}

saludar("Carlos", despedida);
// Hola, Carlos
// Adiós!

// Con función anónima
saludar("Ana", function () {
  console.log("Hasta luego!");
});

// Con arrow function
saludar("Luis", () => console.log("Nos vemos!"));

//--------------------------------------------------------------------------------------
// 2️⃣ CALLBACKS EN ARRAY METHODS
//--------------------------------------------------------------------------------------

const numeros = [1, 2, 3, 4, 5];

// forEach - ejecuta callback por cada elemento
numeros.forEach((num, index) => {
  console.log(`Posición ${index}: ${num}`);
});

// map - transforma elementos
const dobles = numeros.map((num) => num * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

// filter - filtra elementos
const pares = numeros.filter((num) => num % 2 === 0);
console.log(pares); // [2, 4]

// reduce - reduce a un valor
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 15

//--------------------------------------------------------------------------------------
// 3️⃣ CALLBACKS ASÍNCRONOS
//--------------------------------------------------------------------------------------

// setTimeout - ejecuta después de un delay
console.log("Inicio");

setTimeout(() => {
  console.log("Ejecutado después de 1 segundo");
}, 1000);

console.log("Fin");
// Salida:
// Inicio
// Fin
// Ejecutado después de 1 segundo

// setInterval - ejecuta repetidamente
let contador = 0;
const intervalo = setInterval(() => {
  contador++;
  console.log(`Contador: ${contador}`);

  if (contador === 3) {
    clearInterval(intervalo);
    console.log("Intervalo detenido");
  }
}, 1000);

//--------------------------------------------------------------------------------------
// 4️⃣ CALLBACKS CON PARÁMETROS
//--------------------------------------------------------------------------------------

function procesarUsuario(id, callback) {
  // Simular obtención de datos
  const usuario = {
    id: id,
    nombre: "Carlos",
    edad: 25,
  };

  callback(usuario);
}

procesarUsuario(1, (usuario) => {
  console.log(`Usuario: ${usuario.nombre}, Edad: ${usuario.edad}`);
});

//--------------------------------------------------------------------------------------
// 5️⃣ ERROR-FIRST CALLBACKS (Patrón Node.js)
//--------------------------------------------------------------------------------------

function leerArchivo(ruta, callback) {
  // Simular lectura de archivo
  const error = Math.random() > 0.5 ? null : new Error("Archivo no encontrado");
  const datos = error ? null : "Contenido del archivo";

  // Patrón: callback(error, resultado)
  callback(error, datos);
}

leerArchivo("archivo.txt", (error, datos) => {
  if (error) {
    console.error("Error:", error.message);
    return;
  }

  console.log("Datos:", datos);
});

//--------------------------------------------------------------------------------------
// 6️⃣ CALLBACK HELL (Infierno de Callbacks)
//--------------------------------------------------------------------------------------

// ❌ PROBLEMA: Callbacks anidados difíciles de leer
function paso1(callback) {
  setTimeout(() => {
    console.log("Paso 1 completado");
    callback();
  }, 1000);
}

function paso2(callback) {
  setTimeout(() => {
    console.log("Paso 2 completado");
    callback();
  }, 1000);
}

function paso3(callback) {
  setTimeout(() => {
    console.log("Paso 3 completado");
    callback();
  }, 1000);
}

// Callback hell
paso1(() => {
  paso2(() => {
    paso3(() => {
      console.log("Todos los pasos completados");
    });
  });
});

//--------------------------------------------------------------------------------------
// 7️⃣ SOLUCIONES AL CALLBACK HELL
//--------------------------------------------------------------------------------------

// ✅ Solución 1: Funciones nombradas
function manejarPaso1() {
  console.log("Paso 1 OK");
  paso2(manejarPaso2);
}

function manejarPaso2() {
  console.log("Paso 2 OK");
  paso3(manejarPaso3);
}

function manejarPaso3() {
  console.log("Paso 3 OK");
  console.log("Completado");
}

paso1(manejarPaso1);

// ✅ Solución 2: Promesas (mejor opción - ver archivo de promesas)
// ✅ Solución 3: Async/Await (mejor opción - ver archivo de async/await)

//--------------------------------------------------------------------------------------
// 8️⃣ CALLBACKS PERSONALIZADOS
//--------------------------------------------------------------------------------------

function operacion(a, b, callback) {
  const resultado = callback(a, b);
  return resultado;
}

const suma2 = operacion(5, 3, (x, y) => x + y);
console.log("Suma:", suma2); // 8

const resta = operacion(5, 3, (x, y) => x - y);
console.log("Resta:", resta); // 2

const multiplicacion = operacion(5, 3, (x, y) => x * y);
console.log("Multiplicación:", multiplicacion); // 15

//--------------------------------------------------------------------------------------
// 9️⃣ CALLBACKS EN EVENTOS (Simulado)
//--------------------------------------------------------------------------------------

class EventEmitter {
  constructor() {
    this.eventos = {};
  }

  on(evento, callback) {
    if (!this.eventos[evento]) {
      this.eventos[evento] = [];
    }
    this.eventos[evento].push(callback);
  }

  emit(evento, datos) {
    if (this.eventos[evento]) {
      this.eventos[evento].forEach((callback) => callback(datos));
    }
  }
}

const emitter = new EventEmitter();

emitter.on("mensaje", (msg) => {
  console.log("Callback 1:", msg);
});

emitter.on("mensaje", (msg) => {
  console.log("Callback 2:", msg.toUpperCase());
});

emitter.emit("mensaje", "Hola Mundo");
// Callback 1: Hola Mundo
// Callback 2: HOLA MUNDO

//--------------------------------------------------------------------------------------
// 🔟 MANEJO DE ERRORES EN CALLBACKS
//--------------------------------------------------------------------------------------

function dividir(a, b, onSuccess, onError) {
  if (b === 0) {
    onError(new Error("División por cero"));
    return;
  }

  onSuccess(a / b);
}

dividir(
  10,
  2,
  (resultado) => console.log("Resultado:", resultado),
  (error) => console.error("Error:", error.message)
);

dividir(
  10,
  0,
  (resultado) => console.log("Resultado:", resultado),
  (error) => console.error("Error:", error.message)
);

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ CALLBACKS CON CONTEXTO (THIS)
//--------------------------------------------------------------------------------------

const objeto = {
  nombre: "Mi Objeto",
  metodo(callback) {
    callback();
  },
  metodoConBind(callback) {
    callback.call(this); // Pasa el contexto
  },
};

function mostrarNombre() {
  console.log(this.nombre);
}

// Sin contexto
objeto.metodo(mostrarNombre); // undefined

// Con contexto
objeto.metodoConBind(mostrarNombre); // "Mi Objeto"

// Con arrow function (mantiene contexto)
objeto.metodo(() => console.log(this)); // Contexto del scope externo

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ CALLBACKS MÚLTIPLES (WATERFALL)
//--------------------------------------------------------------------------------------

function ejecutarEnSecuencia(tareas, callback) {
  let index = 0;
  let resultados = [];

  function siguiente(resultado) {
    if (resultado !== undefined) {
      resultados.push(resultado);
    }

    if (index < tareas.length) {
      const tarea = tareas[index++];
      tarea(siguiente);
    } else {
      callback(resultados);
    }
  }

  siguiente();
}

ejecutarEnSecuencia(
  [
    (next) => {
      setTimeout(() => {
        console.log("Tarea 1");
        next("Resultado 1");
      }, 1000);
    },
    (next) => {
      setTimeout(() => {
        console.log("Tarea 2");
        next("Resultado 2");
      }, 500);
    },
    (next) => {
      setTimeout(() => {
        console.log("Tarea 3");
        next("Resultado 3");
      }, 300);
    },
  ],
  (resultados) => {
    console.log("Todos completados:", resultados);
  }
);

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ DEBOUNCE Y THROTTLE (Callbacks Controlados)
//--------------------------------------------------------------------------------------

// Ya visto en closures, pero importante para callbacks

function debounceCallback(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

const busqueda = debounceCallback((termino) => {
  console.log("Buscando:", termino);
}, 300);

// Solo ejecuta una vez después de 300ms de inactividad
busqueda("H");
busqueda("Ho");
busqueda("Hol");
busqueda("Hola");

//--------------------------------------------------------------------------------------
// 1️⃣4️⃣ CASOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// Caso 1: Validador con callback
function validarEmail(email, onValido, onInvalido) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    onValido(email);
  } else {
    onInvalido("Email inválido");
  }
}

validarEmail(
  "test@example.com",
  (email) => console.log("✓ Email válido:", email),
  (error) => console.error("✗", error)
);

// Caso 2: Cargar recursos en secuencia
function cargarRecurso(nombre, callback) {
  console.log(`Cargando ${nombre}...`);
  setTimeout(() => {
    console.log(`${nombre} cargado`);
    callback();
  }, Math.random() * 1000);
}

cargarRecurso("CSS", () => {
  cargarRecurso("JavaScript", () => {
    cargarRecurso("Imágenes", () => {
      console.log("Todos los recursos cargados");
    });
  });
});

// Caso 3: Retry con callback
function intentarOperacion(operacion, reintentos, callback) {
  operacion((error, resultado) => {
    if (error && reintentos > 0) {
      console.log(`Error. Reintentando... (${reintentos} intentos restantes)`);
      intentarOperacion(operacion, reintentos - 1, callback);
    } else {
      callback(error, resultado);
    }
  });
}

//--------------------------------------------------------------------------------------
// 1️⃣5️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:

1. Usa callbacks para operaciones asíncronas simples
2. Nombra funciones en lugar de funciones anónimas (mejor debugging)
3. Maneja errores siempre (error-first pattern)
4. Usa arrow functions para callbacks cortos
5. Considera promesas/async-await para operaciones complejas

❌ EVITAR:

1. Callback hell (más de 2-3 niveles de anidación)
2. No manejar errores en callbacks
3. Modificar parámetros del callback
4. Callbacks síncronos que parecen asíncronos
5. Olvidar return después de callback en condicionales
*/

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                   CALLBACKS - RESUMEN                     ║
╠═══════════════════════════════════════════════════════════╣
║ • Función pasada como argumento a otra función            ║
║ • Síncronos: forEach, map, filter                        ║
║ • Asíncronos: setTimeout, eventos                        ║
║ • Pattern error-first: callback(error, resultado)        ║
║ • Problema: Callback hell                                ║
║ • Solución: Promesas o Async/Await                       ║
╚═══════════════════════════════════════════════════════════╝
`);
