//--------------------------------------------------------------------------------------
// MÉTODOS DE INTERACCIÓN CON EL USUARIO
//--------------------------------------------------------------------------------------

/*
🎯 Estos métodos permiten mostrar ventanas emergentes para interactuar con el usuario.

⚠️ IMPORTANTE:
- Son síncronos (bloquean la ejecución del código)
- Tienen mala UX (experiencia de usuario)
- No se pueden personalizar con CSS
- Recomendación: Usar modales HTML personalizados en producción
*/

//--------------------------------------------------------------------------------------
// 1. alert() - Mostrar un mensaje
//--------------------------------------------------------------------------------------

// Sintaxis: alert(mensaje)
// Devuelve: undefined

alert("¡Bienvenido a la aplicación!");

// Con template literals
const nombre = "Carlos";
alert(`Hola, ${nombre}!`);

// Con saltos de línea
alert("Línea 1\nLínea 2\nLínea 3");

// ✅ Cuándo usar:
// - Debugging rápido
// - Mensajes muy simples
// - Prototipos

// ❌ Evitar en producción:
// - Bloquea la página
// - No se puede cerrar programáticamente
// - Mala experiencia de usuario

//--------------------------------------------------------------------------------------
// 2. confirm() - Solicitar confirmación
//--------------------------------------------------------------------------------------

// Sintaxis: confirm(mensaje)
// Devuelve: true (Aceptar) o false (Cancelar)

const respuesta = confirm("¿Deseas continuar?");
console.log("Respuesta:", respuesta);

// Ejemplo práctico: Confirmar eliminación
function eliminarElemento(id) {
  const confirmar = confirm("¿Estás seguro de eliminar este elemento?");

  if (confirmar) {
    console.log(`Elemento ${id} eliminado`);
    // Aquí iría el código para eliminar
    return true;
  } else {
    console.log("Eliminación cancelada");
    return false;
  }
}

// Ejemplo: Confirmar salir sin guardar
window.addEventListener("beforeunload", (event) => {
  const cambiosSinGuardar = true; // Simular que hay cambios

  if (cambiosSinGuardar) {
    event.preventDefault();
    event.returnValue = ""; // Chrome requiere esto
    // Nota: El mensaje personalizado no se muestra en navegadores modernos
  }
});

//--------------------------------------------------------------------------------------
// 3. prompt() - Obtener entrada del usuario
//--------------------------------------------------------------------------------------

// Sintaxis: prompt(mensaje, valorPorDefecto)
// Devuelve: string con el texto ingresado, "" si está vacío, o null si se cancela

const nombreUsuario = prompt("¿Cuál es tu nombre?");
console.log("Nombre ingresado:", nombreUsuario);

// Con valor por defecto
const edad = prompt("¿Cuál es tu edad?", "18");
console.log("Edad:", edad);

// ⚠️ Valores posibles de retorno:
// - string: El usuario escribió algo y aceptó
// - "" (string vacío): El usuario no escribió nada y aceptó
// - null: El usuario canceló

//--------------------------------------------------------------------------------------
// VALIDACIÓN DE DATOS DE prompt()
//--------------------------------------------------------------------------------------

// Ejemplo 1: Validar que no esté vacío
function solicitarNombre() {
  const nombre = prompt("Introduce tu nombre:");

  if (nombre === null) {
    console.log("Usuario canceló");
    return null;
  }

  if (nombre.trim() === "") {
    alert("El nombre no puede estar vacío");
    return solicitarNombre(); // Recursivo: volver a pedir
  }

  return nombre;
}

// Ejemplo 2: Validar número
function solicitarEdad() {
  const entrada = prompt("Introduce tu edad:");

  if (entrada === null) {
    return null;
  }

  const edad = parseInt(entrada);

  if (isNaN(edad) || edad < 0 || edad > 120) {
    alert("Por favor, introduce una edad válida");
    return solicitarEdad();
  }

  return edad;
}

// Ejemplo 3: Validar email (básico)
function solicitarEmail() {
  const email = prompt("Introduce tu email:");

  if (email === null) {
    return null;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Email inválido");
    return solicitarEmail();
  }

  return email;
}

//--------------------------------------------------------------------------------------
// EJEMPLOS PRÁCTICOS COMBINADOS
//--------------------------------------------------------------------------------------

// Ejemplo 1: Sistema de login simple
function loginSimple() {
  const usuario = prompt("Usuario:");

  if (usuario === null) {
    alert("Login cancelado");
    return;
  }

  const password = prompt("Contraseña:");

  if (password === null) {
    alert("Login cancelado");
    return;
  }

  // Validación simple (en producción NUNCA así)
  if (usuario === "admin" && password === "1234") {
    alert("¡Login exitoso!");
    console.log("Usuario autenticado");
  } else {
    alert("Credenciales incorrectas");

    const reintentar = confirm("¿Quieres intentar de nuevo?");
    if (reintentar) {
      loginSimple();
    }
  }
}

// Ejemplo 2: Calculadora simple
function calculadoraSimple() {
  const num1 = parseFloat(prompt("Introduce el primer número:"));

  if (isNaN(num1)) {
    alert("No es un número válido");
    return;
  }

  const operacion = prompt("Operación (+, -, *, /):");

  const num2 = parseFloat(prompt("Introduce el segundo número:"));

  if (isNaN(num2)) {
    alert("No es un número válido");
    return;
  }

  let resultado;

  switch (operacion) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("No se puede dividir por cero");
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      alert("Operación no válida");
      return;
  }

  alert(`Resultado: ${num1} ${operacion} ${num2} = ${resultado}`);
}

// Ejemplo 3: Quiz interactivo
function quizSimple() {
  let puntos = 0;

  // Pregunta 1
  const respuesta1 = prompt("¿Cuál es la capital de España?");
  if (respuesta1 && respuesta1.toLowerCase() === "madrid") {
    alert("¡Correcto! ✅");
    puntos++;
  } else {
    alert("Incorrecto. La respuesta era Madrid ❌");
  }

  // Pregunta 2
  const respuesta2 = prompt("¿Cuánto es 5 + 3?");
  if (respuesta2 === "8") {
    alert("¡Correcto! ✅");
    puntos++;
  } else {
    alert("Incorrecto. La respuesta era 8 ❌");
  }

  // Pregunta 3
  const respuesta3 = confirm("¿JavaScript es un lenguaje de programación?");
  if (respuesta3) {
    alert("¡Correcto! ✅");
    puntos++;
  } else {
    alert("Incorrecto ❌");
  }

  alert(`Quiz finalizado. Puntuación: ${puntos}/3`);
}

//--------------------------------------------------------------------------------------
// ALTERNATIVAS MODERNAS (RECOMENDADAS)
//--------------------------------------------------------------------------------------

/*
En lugar de alert/confirm/prompt, usa modales HTML personalizados:
*/

// Función helper para crear modales personalizados
function crearModal(tipo, mensaje, callback) {
  // Crear overlay
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;

  // Crear modal
  const modal = document.createElement("div");
  modal.style.cssText = `
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    min-width: 300px;
    max-width: 500px;
  `;

  // Contenido
  const contenido = document.createElement("p");
  contenido.textContent = mensaje;
  contenido.style.marginBottom = "20px";
  modal.appendChild(contenido);

  // Botones según el tipo
  const botones = document.createElement("div");
  botones.style.cssText =
    "display: flex; gap: 10px; justify-content: flex-end;";

  if (tipo === "alert") {
    const btnOk = document.createElement("button");
    btnOk.textContent = "Aceptar";
    btnOk.onclick = () => {
      document.body.removeChild(overlay);
      if (callback) callback();
    };
    botones.appendChild(btnOk);
  } else if (tipo === "confirm") {
    const btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.onclick = () => {
      document.body.removeChild(overlay);
      if (callback) callback(false);
    };

    const btnAceptar = document.createElement("button");
    btnAceptar.textContent = "Aceptar";
    btnAceptar.onclick = () => {
      document.body.removeChild(overlay);
      if (callback) callback(true);
    };

    botones.appendChild(btnCancelar);
    botones.appendChild(btnAceptar);
  }

  modal.appendChild(botones);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

// Uso de modales personalizados
function ejemploModalPersonalizado() {
  crearModal("alert", "Este es un modal personalizado", () => {
    console.log("Modal cerrado");
  });

  // Después de 2 segundos, mostrar confirm
  setTimeout(() => {
    crearModal("confirm", "¿Deseas continuar?", (respuesta) => {
      console.log("Respuesta:", respuesta);
    });
  }, 2000);
}

//--------------------------------------------------------------------------------------
// 📊 TABLA COMPARATIVA
//--------------------------------------------------------------------------------------

/*
┌──────────┬────────────┬────────────────────┬─────────────────────┐
│ Método   │ Devuelve   │ Casos de uso       │ Alternativa moderna │
├──────────┼────────────┼────────────────────┼─────────────────────┤
│ alert()  │ undefined  │ Mensajes simples   │ Toast/Snackbar      │
│ confirm()│ boolean    │ Confirmaciones     │ Modal con botones   │
│ prompt() │ string/null│ Input simple       │ Formulario HTML     │
└──────────┴────────────┴────────────────────┴─────────────────────┘

✅ Ventajas de métodos nativos:
  - Muy simples de usar
  - No requieren HTML/CSS
  - Útiles para prototipos

❌ Desventajas:
  - Bloquean la ejecución
  - No personalizables
  - Mala UX en producción
  - Pueden ser molestos
*/

//--------------------------------------------------------------------------------------
// 💡 BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
1. ✅ Usar solo para prototipos o debugging
2. ✅ Validar siempre la entrada de prompt()
3. ✅ Manejar el caso de cancelación (null)
4. ✅ Proporcionar valores por defecto en prompt()
5. ✅ Usar mensajes claros y concisos

6. ❌ No usar en producción para aplicaciones serias
7. ❌ No confiar en datos de prompt() sin validar
8. ❌ No encadenar muchos alert/prompt/confirm
9. ❌ No usar para mensajes críticos de seguridad
10. ❌ No asumir que el usuario leerá el mensaje completo
*/

//--------------------------------------------------------------------------------------
// 🧪 EJERCICIO PROPUESTO
//--------------------------------------------------------------------------------------

/*
Crea una función que:
1. Pida al usuario su nombre
2. Pida su edad
3. Si es mayor de edad, le pregunte si quiere continuar
4. Si acepta, muestre un mensaje de bienvenida
5. Valide todos los inputs

Bonus: Convierte esta función para usar modales personalizados
*/

console.log("✅ Archivo 01-interaccion_usuario.js cargado");
console.log(
  "💡 Recuerda: Usa modales HTML en producción, no alert/prompt/confirm"
);
