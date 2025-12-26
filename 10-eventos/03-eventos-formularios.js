//======================================================//
// EVENTOS DE FORMULARIOS - VALIDACIÓN COMPLETA
//======================================================//

/*
Los formularios tienen eventos específicos para validación y manejo de datos.

EVENTOS PRINCIPALES:
  - submit: formulario enviado
  - input: valor cambia (en tiempo real)
  - change: valor cambia Y pierde foco
  - focus: elemento recibe foco
  - blur: elemento pierde foco
  - reset: formulario reseteado
  - invalid: campo no válido (HTML5)
  - focusin/focusout: como focus/blur pero hacen bubbling

ELEMENTOS DE FORMULARIO:
  - <input>: text, email, password, number, tel, url, etc.
  - <textarea>: área de texto multilínea
  - <select>: lista desplegable
  - <input type="checkbox">: casillas de verificación
  - <input type="radio">: botones de opción
  - <button>: botones (submit, reset, button)
*/

//------------------------------------------------------//
// ⏳ ESPERAR A QUE EL DOM ESTÉ LISTO
//------------------------------------------------------//

/*
OPCIONES PARA ESPERAR:

1. window.addEventListener('load', ...)
   Espera a que TODO cargue (imágenes, CSS, etc.)

2. document.addEventListener('DOMContentLoaded', ...)
   Espera solo a que el DOM esté listo (más rápido)

3. <script defer> en HTML
   Ejecuta el script después de parsear el HTML
*/

// Usaremos DOMContentLoaded (más común)
document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  console.log("=== FORMULARIO INICIADO ===\n");

  // Verificar que los elementos existan
  const elementos = {
    nombre: document.querySelector("#nombre"),
    email: document.querySelector("#email"),
    telefono: document.querySelector("#telefono"),
    provincia: document.querySelector("#provincia"),
    mensaje: document.querySelector("#mensaje"),
    deportes: document.querySelector("#deportes"),
    lectura: document.querySelector("#lectura"),
    musica: document.querySelector("#musica"),
    hombre: document.querySelector("#hombre"),
    mujer: document.querySelector("#mujer"),
    otro: document.querySelector("#otro"),
    formulario: document.querySelector("#formulario"),
    resultado: document.querySelector("#resultado"),
  };

  // Si algún elemento no existe, salir
  if (!elementos.formulario) {
    console.warn("⚠️ Formulario no encontrado en el DOM");
    return;
  }

  //------------------------------------------------------------------------------------
  // 📝 EVENTO INPUT - Se dispara cada vez que el valor cambia (tiempo real)
  //------------------------------------------------------------------------------------

  /*
  El evento 'input' ocurre CADA VEZ que escribes un carácter.
  
  ÚTIL PARA:
    - Validación en tiempo real
    - Contadores de caracteres
    - Búsquedas en vivo
    - Formateo automático
  */

  if (elementos.nombre) {
    elementos.nombre.addEventListener("input", function (e) {
      const longitud = e.target.value.length;
      console.log(`Caracteres en nombre: ${longitud}`);

      // Mostrar contador de caracteres
      let contador = document.querySelector("#contador-nombre");
      if (!contador) {
        contador = document.createElement("span");
        contador.id = "contador-nombre";
        contador.style.cssText =
          "font-size: 0.9em; color: #666; margin-left: 10px;";
        e.target.after(contador);
      }
      contador.textContent = `${longitud} caracteres`;
    });
  }

  //------------------------------------------------------------------------------------
  // 🔄 EVENTO CHANGE - Se dispara cuando el valor cambia Y pierde el foco
  //------------------------------------------------------------------------------------

  /*
  El evento 'change' ocurre cuando:
    - El valor cambia Y el elemento pierde el foco (input, textarea)
    - Se selecciona una opción diferente (select)
    - Se marca/desmarca (checkbox, radio)
  
  DIFERENCIA con 'input':
    - 'input': cada carácter que escribes
    - 'change': cuando terminas de escribir y sales del campo
  */

  if (elementos.provincia) {
    elementos.provincia.addEventListener("change", function (e) {
      if (elementos.resultado) {
        elementos.resultado.textContent = `Provincia seleccionada: ${e.target.value}`;
        elementos.resultado.style.color = "#667eea";
      }
      console.log("Provincia cambiada:", e.target.value);
    });
  }

  //------------------------------------------------------------------------------------
  // 👁️ EVENTO FOCUS - Elemento recibe el foco
  //------------------------------------------------------------------------------------

  /*
  El evento 'focus' ocurre cuando un elemento recibe el foco:
    - Click en el campo
    - Tab para navegar
    - Llamada a elemento.focus()
  */

  if (elementos.email) {
    elementos.email.addEventListener("focus", function (e) {
      e.target.style.backgroundColor = "#fff3cd";
      e.target.style.borderColor = "#667eea";
      console.log("Email recibió el foco");
    });
  }

  //------------------------------------------------------------------------------------
  // 😶‍🌫️ EVENTO BLUR - Elemento pierde el foco
  //------------------------------------------------------------------------------------

  /*
  El evento 'blur' ocurre cuando sales de un campo:
    - Click fuera del campo
    - Tab para ir al siguiente campo
    - Esc en algunos casos
  
  ÚTIL PARA:
    - Validar después de que el usuario termine
    - Formatear datos (ej: teléfono, fecha)
    - Guardar cambios automáticamente
  */

  if (elementos.nombre) {
    elementos.nombre.addEventListener("blur", function (e) {
      e.target.style.backgroundColor = "";

      const valor = e.target.value.trim();

      if (valor === "") {
        mostrarError(e.target, "El nombre es obligatorio");
        if (elementos.resultado) {
          elementos.resultado.textContent = "⚠️ El nombre es obligatorio";
          elementos.resultado.style.color = "red";
        }
      } else {
        quitarError(e.target);
        if (elementos.resultado) {
          elementos.resultado.textContent = `Nombre válido: ${valor}`;
          elementos.resultado.style.color = "green";
        }
      }
    });
  }

  //------------------------------------------------------------------------------------
  // ✅ CHECKBOXES - Obtener valores seleccionados
  //------------------------------------------------------------------------------------

  /*
  Para checkboxes:
    - Usar .checked para verificar si está marcado (true/false)
    - Usar .value para obtener el valor
    - Pueden estar múltiples marcados a la vez
  */

  function mostrarAficiones() {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name="aficiones"]'
    );
    const seleccionadas = [];

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        seleccionadas.push(checkbox.value);
      }
    });

    if (elementos.resultado) {
      if (seleccionadas.length > 0) {
        elementos.resultado.textContent = `Aficiones: ${seleccionadas.join(
          ", "
        )}`;
        elementos.resultado.style.color = "#667eea";
      } else {
        elementos.resultado.textContent = "No has seleccionado aficiones";
        elementos.resultado.style.color = "#999";
      }
    }

    console.log("Aficiones seleccionadas:", seleccionadas);
  }

  // Añadir listener a cada checkbox
  if (elementos.deportes)
    elementos.deportes.addEventListener("change", mostrarAficiones);
  if (elementos.lectura)
    elementos.lectura.addEventListener("change", mostrarAficiones);
  if (elementos.musica)
    elementos.musica.addEventListener("change", mostrarAficiones);

  //------------------------------------------------------------------------------------
  // 🔘 RADIO BUTTONS - Obtener valor seleccionado
  //------------------------------------------------------------------------------------

  /*
  Para radio buttons:
    - Solo UNO puede estar seleccionado a la vez
    - Todos deben tener el mismo atributo 'name'
    - Usar .checked para saber cuál está seleccionado
  */

  function mostrarSexo(e) {
    if (e.target.checked) {
      if (elementos.resultado) {
        elementos.resultado.textContent = `Sexo seleccionado: ${e.target.value}`;
        elementos.resultado.style.color = "#667eea";
      }
      console.log("Sexo:", e.target.value);
    }
  }

  if (elementos.hombre)
    elementos.hombre.addEventListener("change", mostrarSexo);
  if (elementos.mujer) elementos.mujer.addEventListener("change", mostrarSexo);
  if (elementos.otro) elementos.otro.addEventListener("change", mostrarSexo);

  //------------------------------------------------------------------------------------
  // 📧 VALIDACIÓN DE EMAIL
  //------------------------------------------------------------------------------------

  if (elementos.email) {
    elementos.email.addEventListener("blur", function (e) {
      e.target.style.backgroundColor = "";

      const valor = e.target.value.trim();

      // Regex simple para email
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (valor === "") {
        mostrarError(e.target, "El email es obligatorio");
      } else if (!regexEmail.test(valor)) {
        mostrarError(e.target, "Email no válido");
      } else {
        quitarError(e.target);
        if (elementos.resultado) {
          elementos.resultado.textContent = `Email válido: ${valor}`;
          elementos.resultado.style.color = "green";
        }
      }
    });
  }

  //------------------------------------------------------------------------------------
  // 📱 VALIDACIÓN DE TELÉFONO (solo números)
  //------------------------------------------------------------------------------------

  if (elementos.telefono) {
    // Validar mientras escribe: solo números
    elementos.telefono.addEventListener("input", function (e) {
      // Eliminar cualquier carácter que NO sea número
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });

    // Validar al salir: mínimo 9 dígitos
    elementos.telefono.addEventListener("blur", function (e) {
      const valor = e.target.value;

      if (valor === "") {
        quitarError(e.target); // Opcional, no obligatorio
      } else if (valor.length < 9) {
        mostrarError(e.target, "Teléfono debe tener al menos 9 dígitos");
      } else {
        quitarError(e.target);
        if (elementos.resultado) {
          elementos.resultado.textContent = `Teléfono válido: ${valor}`;
          elementos.resultado.style.color = "green";
        }
      }
    });
  }

  //------------------------------------------------------------------------------------
  // 📝 VALIDACIÓN DE TEXTAREA (contador de caracteres)
  //------------------------------------------------------------------------------------

  if (elementos.mensaje) {
    const MAX_CHARS = 500;

    elementos.mensaje.addEventListener("input", function (e) {
      const longitud = e.target.value.length;
      const restante = MAX_CHARS - longitud;

      let contador = document.querySelector("#contador-mensaje");
      if (!contador) {
        contador = document.createElement("div");
        contador.id = "contador-mensaje";
        contador.style.cssText = "font-size: 0.9em; margin-top: 5px;";
        e.target.after(contador);
      }

      contador.textContent = `${longitud} / ${MAX_CHARS} caracteres`;
      contador.style.color = restante < 50 ? "red" : "#666";

      // Limitar caracteres
      if (longitud > MAX_CHARS) {
        e.target.value = e.target.value.substring(0, MAX_CHARS);
      }
    });
  }

  //------------------------------------------------------------------------------------
  // 📋 VALIDACIÓN DEL FORMULARIO COMPLETO (submit)
  //------------------------------------------------------------------------------------

  if (elementos.formulario) {
    elementos.formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // ⚠️ IMPORTANTE: Prevenir envío por defecto

      console.log("\n=== VALIDANDO FORMULARIO ===\n");

      const errores = [];

      // Validar nombre
      const nombreValor = elementos.nombre ? elementos.nombre.value.trim() : "";
      if (nombreValor === "") {
        errores.push("El nombre es obligatorio");
        if (elementos.nombre) mostrarError(elementos.nombre, "Obligatorio");
      } else {
        if (elementos.nombre) quitarError(elementos.nombre);
      }

      // Validar email
      const emailValor = elementos.email ? elementos.email.value.trim() : "";
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailValor === "") {
        errores.push("El email es obligatorio");
        if (elementos.email) mostrarError(elementos.email, "Obligatorio");
      } else if (!regexEmail.test(emailValor)) {
        errores.push("El email no es válido");
        if (elementos.email) mostrarError(elementos.email, "Email no válido");
      } else {
        if (elementos.email) quitarError(elementos.email);
      }

      // Validar provincia
      const provinciaValor = elementos.provincia
        ? elementos.provincia.value
        : "";
      if (provinciaValor === "") {
        errores.push("Debe seleccionar una provincia");
        if (elementos.provincia)
          mostrarError(elementos.provincia, "Obligatorio");
      } else {
        if (elementos.provincia) quitarError(elementos.provincia);
      }

      // Validar al menos una afición
      const checkboxes = document.querySelectorAll(
        'input[type="checkbox"][name="aficiones"]'
      );
      const algunaAficion = Array.from(checkboxes).some((cb) => cb.checked);
      if (!algunaAficion) {
        errores.push("Debe seleccionar al menos una afición");
      }

      // Validar sexo
      const radios = document.querySelectorAll(
        'input[type="radio"][name="sexo"]'
      );
      const sexoSeleccionado = Array.from(radios).some((r) => r.checked);
      if (!sexoSeleccionado) {
        errores.push("Debe seleccionar el sexo");
      }

      // Mostrar resultado
      if (elementos.resultado) {
        if (errores.length > 0) {
          elementos.resultado.innerHTML = `
            <div style="color: red;">
              <strong>❌ Errores encontrados:</strong>
              <ul style="text-align: left; margin-top: 10px;">
                ${errores.map((err) => `<li>${err}</li>`).join("")}
              </ul>
            </div>
          `;

          // Enfocar el primer campo con error
          const primerError = elementos.formulario.querySelector(".error");
          if (primerError) {
            primerError.focus();
            primerError.scrollIntoView({ behavior: "smooth", block: "center" });
          }

          console.log("❌ Formulario con errores:", errores);
        } else {
          elementos.resultado.innerHTML = `
            <div style="color: green;">
              <strong>✅ Formulario válido</strong>
              <p style="margin-top: 10px;">Datos enviados:</p>
              <ul style="text-align: left; margin-top: 5px;">
                <li>Nombre: ${nombreValor}</li>
                <li>Email: ${emailValor}</li>
                <li>Provincia: ${provinciaValor}</li>
                <li>Aficiones: ${obtenerAficiones()}</li>
                <li>Sexo: ${obtenerSexo()}</li>
              </ul>
            </div>
          `;

          console.log("✅ Formulario válido");
          console.log("Datos:", {
            nombre: nombreValor,
            email: emailValor,
            provincia: provinciaValor,
            aficiones: obtenerAficiones(),
            sexo: obtenerSexo(),
          });

          // Aquí enviarías los datos al servidor
          // fetch('/api/formulario', { method: 'POST', body: JSON.stringify(datos) })
        }
      }
    });
  }

  //------------------------------------------------------------------------------------
  // 🔄 EVENTO RESET - Limpiar formulario
  //------------------------------------------------------------------------------------

  if (elementos.formulario) {
    elementos.formulario.addEventListener("reset", function (e) {
      console.log("Formulario reseteado");

      // Limpiar mensajes de error
      document
        .querySelectorAll(".mensaje-error")
        .forEach((msg) => msg.remove());
      document.querySelectorAll(".error").forEach((elem) => {
        elem.classList.remove("error");
        elem.style.borderColor = "";
        elem.style.backgroundColor = "";
      });

      // Limpiar contadores
      const contadores = document.querySelectorAll("[id^='contador-']");
      contadores.forEach((c) => c.remove());

      // Limpiar resultado
      if (elementos.resultado) {
        elementos.resultado.textContent = "";
        elementos.resultado.style.color = "black";
      }
    });
  }

  //------------------------------------------------------------------------------------
  // 🛠️ FUNCIONES AUXILIARES
  //------------------------------------------------------------------------------------

  function mostrarError(elemento, mensaje) {
    // Añadir clase de error
    elemento.classList.add("error");
    elemento.style.borderColor = "#dc3545";
    elemento.style.backgroundColor = "#fff5f5";

    // Eliminar mensaje anterior si existe
    const avisoId = `aviso-${elemento.id}`;
    const avisoAnterior = document.querySelector(`#${avisoId}`);
    if (avisoAnterior) avisoAnterior.remove();

    // Crear nuevo mensaje
    const aviso = document.createElement("span");
    aviso.id = avisoId;
    aviso.className = "mensaje-error";
    aviso.textContent = ` ${mensaje}`;
    aviso.style.cssText =
      "color: #dc3545; font-size: 0.9em; display: block; margin-top: 3px;";
    elemento.after(aviso);
  }

  function quitarError(elemento) {
    elemento.classList.remove("error");
    elemento.style.borderColor = "";
    elemento.style.backgroundColor = "";

    const avisoId = `aviso-${elemento.id}`;
    const aviso = document.querySelector(`#${avisoId}`);
    if (aviso) aviso.remove();
  }

  function obtenerAficiones() {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name="aficiones"]'
    );
    const seleccionadas = [];
    checkboxes.forEach((cb) => {
      if (cb.checked) seleccionadas.push(cb.value);
    });
    return seleccionadas.length > 0 ? seleccionadas.join(", ") : "Ninguna";
  }

  function obtenerSexo() {
    const radios = document.querySelectorAll(
      'input[type="radio"][name="sexo"]'
    );
    const seleccionado = Array.from(radios).find((r) => r.checked);
    return seleccionado ? seleccionado.value : "No especificado";
  }
}

//--------------------------------------------------------------------------------------
// 📚 CONCEPTOS IMPORTANTES
//--------------------------------------------------------------------------------------

/*
1. DIFERENCIA: input vs change
   - input: se dispara mientras escribes (cada carácter)
   - change: se dispara al terminar de escribir y salir del campo

2. FOCUS Y BLUR
   - focus: elemento recibe el foco
   - blur: elemento pierde el foco
   - focusin/focusout: igual pero hacen bubbling

3. CHECKBOXES
   - Usar .checked para saber si está marcado (true/false)
   - Pueden estar múltiples marcados
   - Usar querySelectorAll para obtener todos

4. RADIO BUTTONS
   - Solo uno puede estar seleccionado a la vez
   - Todos deben tener el mismo atributo 'name'
   - Usar .checked para saber cuál está seleccionado

5. SELECT
   - Usar .value para obtener la opción seleccionada
   - Usar .selectedIndex para obtener el índice
   - Usar .options para acceder a todas las opciones

6. SUBMIT
   - Se dispara con Enter en un input
   - Se dispara con <button type="submit">
   - SIEMPRE usar e.preventDefault() si haces validación personalizada

7. VALIDACIÓN
   - Validar en 'blur' (cuando sale del campo)
   - Mostrar errores claros y específicos
   - Enfocar el primer campo con error
   - Validar también en el servidor (seguridad)
*/

//--------------------------------------------------------------------------------------
// 🎨 VALIDACIÓN HTML5 NATIVA
//--------------------------------------------------------------------------------------

/*
HTML5 tiene validación integrada que puedes usar:

ATRIBUTOS DE VALIDACIÓN:
  - required: campo obligatorio
  - pattern: expresión regular personalizada
  - min/max: valor mínimo/máximo (números, fechas)
  - minlength/maxlength: longitud mínima/máxima
  - type: email, url, tel, number, date, etc.

EJEMPLO:
  <input type="email" required>
  <input type="tel" pattern="[0-9]{9}" required>
  <input type="text" minlength="3" maxlength="20">
  <input type="number" min="0" max="100">

DESACTIVAR VALIDACIÓN HTML5:
  <form novalidate>
  
EVENTO 'invalid':
  Se dispara cuando un campo no es válido según HTML5

USO:
  input.addEventListener('invalid', function(e) {
    e.preventDefault();
    console.log('Campo no válido:', e.target.validationMessage);
  });
*/

//--------------------------------------------------------------------------------------
// ✅ BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
1. ✅ Valida en blur (cuando sale del campo)
   Razón: No interrumpe mientras el usuario escribe

2. ✅ Muestra errores claros y específicos
   Razón: El usuario sabe exactamente qué corregir

3. ✅ Usa preventDefault() en submit
   Razón: Previene recarga de página, permite validación personalizada

4. ✅ Enfoca el primer campo con error
   Razón: Mejora la experiencia de usuario

5. ✅ Valida TAMBIÉN en el servidor
   Razón: Seguridad - nunca confíes solo en validación del cliente

6. ✅ Usa aria-attributes para accesibilidad
   Razón: Ayuda a lectores de pantalla
   
7. ✅ Deshabilita el botón submit mientras procesas
   Razón: Evita envíos duplicados

8. ⚠️ NO uses alert() para errores
   Razón: Mala experiencia de usuario, usa mensajes inline

9. ✅ Limpia errores cuando el usuario corrija
   Razón: Feedback inmediato

10. ✅ Usa debounce para validación en input
    Razón: Mejor rendimiento, no valida cada carácter
*/

//--------------------------------------------------------------------------------------
// 🎯 RESUMEN
//--------------------------------------------------------------------------------------

/*
╔═══════════════════════════════════════════════════════════════════╗
║              EVENTOS DE FORMULARIOS                               ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║ EVENTOS PRINCIPALES:                                              ║
║   submit  → formulario enviado (usar preventDefault)             ║
║   input   → valor cambia en tiempo real                          ║
║   change  → valor cambia Y pierde foco                           ║
║   focus   → elemento recibe foco                                 ║
║   blur    → elemento pierde foco (ideal para validar)           ║
║   reset   → formulario reseteado                                 ║
║                                                                   ║
║ VALIDACIÓN:                                                       ║
║   • Validar en 'blur' para no interrumpir al usuario            ║
║   • Mostrar errores inline, no con alert()                      ║
║   • Usar e.preventDefault() en submit                           ║
║   • Enfocar primer campo con error                              ║
║   • Validar TAMBIÉN en el servidor                              ║
║                                                                   ║
║ ELEMENTOS:                                                        ║
║   Checkboxes → .checked (pueden ser múltiples)                  ║
║   Radios     → .checked (solo uno a la vez)                     ║
║   Select     → .value (opción seleccionada)                     ║
║   Input      → .value (texto ingresado)                         ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
*/
