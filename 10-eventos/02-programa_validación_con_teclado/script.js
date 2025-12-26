// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Variables globales
  let modoValidacion = "tiempo-real";

  const telefono = document.getElementById("telefono");
  const dni = document.getElementById("dni");
  const email = document.getElementById("email");
  const edad = document.getElementById("edad");
  const comentario = document.getElementById("comentario");
  const charCount = document.getElementById("charCount");

  // Cambiar modo de validación
  document.querySelectorAll('input[name="validacion"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      modoValidacion = this.value;
      limpiarValidaciones();
    });
  });

  // ==========================================
  // FUNCIONES DE VALIDACIÓN
  // ==========================================

  function validarTelefono(valor) {
    return /^\d{9}$/.test(valor);
  }

  function validarDni(valor) {
    return /^\d{8}[A-Z]$/.test(valor);
  }

  function validarEmail(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  }

  function validarEdad(valor) {
    const edadNum = parseInt(valor);
    return !isNaN(edadNum) && edadNum >= 18 && edadNum <= 120;
  }

  function mostrarError(campo, errorElementId) {
    campo.classList.add("error");
    campo.classList.remove("success");
    document.getElementById(errorElementId).classList.add("show");
  }

  function mostrarExito(campo, errorElementId) {
    campo.classList.add("success");
    campo.classList.remove("error");
    document.getElementById(errorElementId).classList.remove("show");
  }

  function limpiarEstado(campo, errorElementId) {
    campo.classList.remove("error", "success");
    document.getElementById(errorElementId).classList.remove("show");
  }

  // ==========================================
  // VALIDACIÓN DE TELÉFONO
  // ==========================================
  telefono.addEventListener("input", function (e) {
    // En modo tiempo real, filtrar solo números
    if (modoValidacion === "tiempo-real") {
      this.value = this.value.replace(/[^\d]/g, "");

      if (this.value === "") {
        limpiarEstado(this, "errorTelefono");
      } else if (validarTelefono(this.value)) {
        mostrarExito(this, "errorTelefono");
      } else {
        mostrarError(this, "errorTelefono");
      }
    }
  });

  telefono.addEventListener("keypress", function (e) {
    // Solo bloquear en modo tiempo real
    if (modoValidacion === "tiempo-real") {
      if (e.key && !/^\d$/.test(e.key)) {
        e.preventDefault();
        this.classList.add("shake");
        setTimeout(() => this.classList.remove("shake"), 400);
      }
    }
  });

  // ==========================================
  // VALIDACIÓN DE DNI
  // ==========================================
  dni.addEventListener("input", function () {
    this.value = this.value.toUpperCase();

    if (modoValidacion === "tiempo-real") {
      if (this.value === "") {
        limpiarEstado(this, "errorDni");
      } else if (validarDni(this.value)) {
        mostrarExito(this, "errorDni");
      } else {
        mostrarError(this, "errorDni");
      }
    }
  });

  dni.addEventListener("keypress", function (e) {
    // Solo bloquear en modo tiempo real
    if (modoValidacion === "tiempo-real") {
      const posicion = this.selectionStart;

      // Primeros 8 caracteres deben ser números
      if (posicion < 8) {
        if (!/^\d$/.test(e.key)) {
          e.preventDefault();
          this.classList.add("shake");
          setTimeout(() => this.classList.remove("shake"), 400);
        }
      }
      // Posición 9 debe ser letra
      else if (posicion === 8) {
        if (!/^[A-Za-z]$/.test(e.key)) {
          e.preventDefault();
          this.classList.add("shake");
          setTimeout(() => this.classList.remove("shake"), 400);
        }
      }
    }
  });

  // ==========================================
  // VALIDACIÓN DE EMAIL
  // ==========================================
  email.addEventListener("input", function () {
    if (modoValidacion === "tiempo-real") {
      if (this.value === "") {
        limpiarEstado(this, "errorEmail");
      } else if (validarEmail(this.value)) {
        mostrarExito(this, "errorEmail");
      } else {
        mostrarError(this, "errorEmail");
      }
    }
  });

  // ==========================================
  // VALIDACIÓN DE EDAD
  // ==========================================
  edad.addEventListener("input", function () {
    // En modo tiempo real, filtrar solo números
    if (modoValidacion === "tiempo-real") {
      this.value = this.value.replace(/[^\d]/g, "");

      if (this.value === "") {
        limpiarEstado(this, "errorEdad");
      } else if (validarEdad(this.value)) {
        mostrarExito(this, "errorEdad");
      } else {
        mostrarError(this, "errorEdad");
      }
    }
  });

  edad.addEventListener("keypress", function (e) {
    // Solo bloquear en modo tiempo real
    if (modoValidacion === "tiempo-real") {
      if (e.key && !/^\d$/.test(e.key)) {
        e.preventDefault();
      }
    }
  });

  // ==========================================
  // CONTADOR DE CARACTERES
  // ==========================================
  comentario.addEventListener("input", function () {
    charCount.textContent = this.value.length;
    if (this.value.length > 180) {
      charCount.style.color = "#dc3545";
    } else {
      charCount.style.color = "#666";
    }
  });

  // ==========================================
  // ATAJOS DE TECLADO
  // ==========================================
  window.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      document.getElementById("formulario").dispatchEvent(new Event("submit"));
    }
    if (e.key === "Escape") {
      e.preventDefault();
      limpiarFormulario();
    }
  });

  // ==========================================
  // ENVÍO DEL FORMULARIO
  // ==========================================
  document
    .getElementById("formulario")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Validar todos los campos
      let errores = [];

      if (!telefono.value) {
        errores.push("Teléfono es obligatorio");
        mostrarError(telefono, "errorTelefono");
      } else if (!validarTelefono(telefono.value)) {
        errores.push("Teléfono inválido");
        mostrarError(telefono, "errorTelefono");
      } else {
        mostrarExito(telefono, "errorTelefono");
      }

      if (!dni.value) {
        errores.push("DNI es obligatorio");
        mostrarError(dni, "errorDni");
      } else if (!validarDni(dni.value)) {
        errores.push("DNI inválido");
        mostrarError(dni, "errorDni");
      } else {
        mostrarExito(dni, "errorDni");
      }

      if (!email.value) {
        errores.push("Email es obligatorio");
        mostrarError(email, "errorEmail");
      } else if (!validarEmail(email.value)) {
        errores.push("Email inválido");
        mostrarError(email, "errorEmail");
      } else {
        mostrarExito(email, "errorEmail");
      }

      if (!edad.value) {
        errores.push("Edad es obligatoria");
        mostrarError(edad, "errorEdad");
      } else if (!validarEdad(edad.value)) {
        errores.push("Edad inválida");
        mostrarError(edad, "errorEdad");
      } else {
        mostrarExito(edad, "errorEdad");
      }

      if (errores.length > 0) {
        alert("❌ Por favor, completa todos los campos correctamente");
        return;
      }

      // Mostrar resultado
      const result = document.getElementById("result");
      const resultContent = document.getElementById("resultContent");

      resultContent.innerHTML = `
                    <div class="result-item">
                        <span class="result-label">Teléfono:</span>
                        <span class="result-value">${telefono.value}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">DNI:</span>
                        <span class="result-value">${dni.value}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Email:</span>
                        <span class="result-value">${email.value}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Edad:</span>
                        <span class="result-value">${edad.value} años</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Comentario:</span>
                        <span class="result-value">${
                          comentario.value || "Sin comentario"
                        }</span>
                    </div>
                `;

      result.classList.add("show");
      result.scrollIntoView({ behavior: "smooth" });
      alert("✅ Formulario enviado correctamente!");
    });

  // ==========================================
  // LIMPIAR FORMULARIO
  // ==========================================
  function limpiarFormulario() {
    document.getElementById("formulario").reset();
    document.getElementById("result").classList.remove("show");
    charCount.textContent = "0";
    charCount.style.color = "#666";
    limpiarValidaciones();
  }

  function limpiarValidaciones() {
    [telefono, dni, email, edad].forEach((campo) => {
      campo.classList.remove("error", "success");
    });
    document.querySelectorAll(".error-message").forEach((msg) => {
      msg.classList.remove("show");
    });
  }

  document
    .getElementById("resetBtn")
    .addEventListener("click", limpiarFormulario);
});
