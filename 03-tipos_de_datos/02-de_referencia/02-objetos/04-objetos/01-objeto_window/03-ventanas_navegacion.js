//--------------------------------------------------------------------------------------
// VENTANAS Y NAVEGACIÓN - window.open(), location, history
//--------------------------------------------------------------------------------------

/*
🎯 En este archivo aprenderás:
- Abrir y controlar ventanas/pestañas
- Manipular la URL (location)
- Navegar por el historial (history)
- Trabajar con parámetros URL (URLSearchParams)
*/

//--------------------------------------------------------------------------------------
// 1. WINDOW.OPEN() - ABRIR NUEVAS VENTANAS/PESTAÑAS
//--------------------------------------------------------------------------------------

/*
⚠️ IMPORTANTE:
- Los navegadores modernos BLOQUEAN ventanas emergentes por defecto
- Solo funcionan cuando son resultado de una acción del usuario (click)
- Los usuarios encuentran molestas las ventanas emergentes
- Usar con moderación

Sintaxis:
window.open(url, target, windowFeatures, replace)
*/

// Abrir nueva pestaña (comportamiento por defecto)
function abrirNuevaPestana() {
  const nuevaVentana = window.open("https://www.google.com", "_blank");

  if (nuevaVentana) {
    console.log("✅ Nueva pestaña abierta");
  } else {
    console.log("❌ Ventana bloqueada por el navegador");
    alert("Por favor, permite ventanas emergentes para este sitio");
  }
}

// Abrir ventana con dimensiones específicas
function abrirVentanaPersonalizada() {
  const caracteristicas = [
    "width=800",
    "height=600",
    "left=100",
    "top=100",
    "menubar=yes",
    "toolbar=yes",
    "location=yes",
    "resizable=yes",
    "scrollbars=yes",
    "status=yes",
  ].join(",");

  const ventana = window.open(
    "https://www.mozilla.org",
    "ventanaMozilla",
    caracteristicas
  );

  if (ventana) {
    console.log("✅ Ventana personalizada abierta");

    // Enfocar la ventana
    ventana.focus();
  }
}

// Crear ventana con contenido dinámico
function crearVentanaConContenido() {
  const ventana = window.open("", "_blank", "width=500,height=400");

  if (ventana) {
    ventana.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Ventana Dinámica</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          h1 { text-align: center; }
          button {
            background: white;
            color: #667eea;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            display: block;
            margin: 20px auto;
          }
        </style>
      </head>
      <body>
        <h1>🎉 ¡Ventana Dinámica!</h1>
        <p>Este contenido fue creado dinámicamente con JavaScript.</p>
        <button onclick="window.close()">Cerrar ventana</button>
      </body>
      </html>
    `);

    ventana.document.close(); // Finalizar escritura
  }
}

// Controlar ventana abierta
function controlarVentana() {
  const ventana = window.open(
    "https://www.example.com",
    "miVentana",
    "width=600,height=400"
  );

  if (ventana) {
    // Cambiar URL después de 3 segundos
    setTimeout(() => {
      ventana.location.href = "https://www.google.com";
    }, 3000);

    // Cerrar después de 6 segundos
    setTimeout(() => {
      ventana.close();
      console.log("Ventana cerrada");
    }, 6000);
  }
}

// Valores de target
const VALORES_TARGET = {
  _blank: "Nueva pestaña/ventana",
  _self: "Misma ventana (por defecto)",
  _parent: "Ventana padre",
  _top: "Ventana principal",
  nombre: "Ventana con nombre específico (reutilizable)",
};

console.log("🎯 Valores de target para window.open:");
console.table(VALORES_TARGET);

//--------------------------------------------------------------------------------------
// 2. LOCATION - INFORMACIÓN Y CONTROL DE LA URL
//--------------------------------------------------------------------------------------

/*
El objeto location proporciona información sobre la URL actual
y permite navegar a diferentes URLs.
*/

// Mostrar información de la URL actual
function mostrarInfoLocation() {
  console.log("🌐 INFORMACIÓN DE LA URL:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("href (completa):", location.href);
  console.log("protocol:", location.protocol); // "http:" o "https:"
  console.log("host:", location.host); // dominio + puerto
  console.log("hostname:", location.hostname); // solo dominio
  console.log("port:", location.port); // puerto (vacío si es 80/443)
  console.log("pathname:", location.pathname); // /ruta/archivo.html
  console.log("search:", location.search); // ?param=valor
  console.log("hash:", location.hash); // #seccion
  console.log("origin:", location.origin); // protocol + host
}

// mostrarInfoLocation();

// Ejemplo de URL y sus partes
/*
URL: https://www.ejemplo.com:8080/productos/categoria?id=123&color=rojo#comentarios

┌─────────────────────────────────────────────────────────────────────┐
│ protocol: "https:"                                                  │
│ hostname: "www.ejemplo.com"                                         │
│ port: "8080"                                                        │
│ host: "www.ejemplo.com:8080"                                        │
│ pathname: "/productos/categoria"                                    │
│ search: "?id=123&color=rojo"                                        │
│ hash: "#comentarios"                                                │
│ origin: "https://www.ejemplo.com:8080"                              │
│ href: (toda la URL completa)                                        │
└─────────────────────────────────────────────────────────────────────┘
*/

//--------------------------------------------------------------------------------------
// MÉTODOS DE LOCATION
//--------------------------------------------------------------------------------------

// 1. location.assign() - Navegar a una nueva URL (guarda en historial)
function irAGoogle() {
  location.assign("https://www.google.com");
  // Equivalente a: location.href = 'https://www.google.com';
}

// 2. location.replace() - Navegar SIN guardar en historial
function irAGoogleSinHistorial() {
  location.replace("https://www.google.com");
  // El usuario NO podrá volver atrás con el botón del navegador
}

// 3. location.reload() - Recargar la página
function recargarPagina() {
  location.reload();
  // location.reload(true); // Forzar recarga desde servidor (obsoleto)
}

// Diferencia entre assign() y replace()
const DIFERENCIAS_NAVEGACION = {
  "location.assign(url)": {
    historial: "✅ Sí guarda",
    botonAtras: "✅ Funciona",
    uso: "Navegación normal",
  },
  "location.replace(url)": {
    historial: "❌ No guarda",
    botonAtras: "❌ No funciona",
    uso: "Redirecciones, login, etc.",
  },
  "location.href = url": {
    historial: "✅ Sí guarda",
    botonAtras: "✅ Funciona",
    uso: "Igual que assign()",
  },
};

console.log("🔄 Diferencias entre métodos de navegación:");
console.table(DIFERENCIAS_NAVEGACION);

//--------------------------------------------------------------------------------------
// 3. TRABAJAR CON PARÁMETROS URL (QUERY STRING)
//--------------------------------------------------------------------------------------

// Leer parámetros de la URL actual
function leerParametrosURL() {
  // Ejemplo: si la URL es http://ejemplo.com?nombre=Ana&edad=25&ciudad=Madrid

  const params = new URLSearchParams(location.search);

  console.log("📋 Parámetros de la URL:");
  console.log("nombre:", params.get("nombre")); // "Ana"
  console.log("edad:", params.get("edad")); // "25"
  console.log("ciudad:", params.get("ciudad")); // "Madrid"

  // Verificar si existe un parámetro
  if (params.has("nombre")) {
    console.log('✅ El parámetro "nombre" existe');
  }

  // Obtener todos los parámetros
  console.log("Todos los parámetros:");
  params.forEach((valor, clave) => {
    console.log(`  ${clave}: ${valor}`);
  });

  // Convertir a objeto
  const objetoParams = Object.fromEntries(params);
  console.log("Objeto de parámetros:", objetoParams);
}

// Navegar a URL con parámetros
function irAPaginaConParametros(nombre, edad) {
  const params = new URLSearchParams({
    nombre: nombre,
    edad: edad,
    timestamp: Date.now(),
  });

  const nuevaURL = `pagina.html?${params.toString()}`;
  console.log("Navegando a:", nuevaURL);

  // location.href = nuevaURL; // Descomenta para navegar
}

// irAPaginaConParametros('Carlos', 30);

// Agregar/modificar parámetros sin recargar
function modificarParametrosSinRecargar(nuevoParametro, valor) {
  const params = new URLSearchParams(location.search);
  params.set(nuevoParametro, valor);

  const nuevaURL = `${location.pathname}?${params.toString()}${location.hash}`;

  // Cambiar URL sin recargar página (HTML5 History API)
  history.pushState(null, "", nuevaURL);

  console.log("✅ URL modificada sin recargar");
}

// Ejemplo: modificarParametrosSinRecargar('tema', 'oscuro');

//--------------------------------------------------------------------------------------
// 4. TRABAJAR CON HASH (ANCLAS)
//--------------------------------------------------------------------------------------

// Cambiar hash (navegar a sección)
function irASeccion(seccion) {
  location.hash = seccion;
  // Ejemplo: irASeccion('contacto') → URL terminará en #contacto
}

// Leer hash actual
function obtenerHashActual() {
  const hash = location.hash; // Ejemplo: "#contacto"
  const seccion = hash.replace("#", ""); // Ejemplo: "contacto"

  console.log("Hash actual:", hash);
  console.log("Sección:", seccion);

  return seccion;
}

// Detectar cambios en el hash
window.addEventListener("hashchange", (event) => {
  console.log("🔄 Hash cambió:");
  console.log("  Anterior:", event.oldURL);
  console.log("  Nueva:", event.newURL);
  console.log("  Hash actual:", location.hash);
});

// Remover hash
function limpiarHash() {
  history.pushState("", document.title, location.pathname + location.search);
}

//--------------------------------------------------------------------------------------
// 5. HISTORY - NAVEGACIÓN POR EL HISTORIAL
//--------------------------------------------------------------------------------------

/*
El objeto history permite navegar por el historial del navegador
*/

// Propiedades de history
console.log("📚 Historial:");
console.log("  length:", history.length); // Número de páginas en el historial
console.log("  state:", history.state); // Estado actual (si se usó pushState)

// Métodos básicos
const METODOS_HISTORY = {
  "history.back()": "Ir a página anterior (← atrás)",
  "history.forward()": "Ir a página siguiente (→ adelante)",
  "history.go(-1)": "Equivalente a back()",
  "history.go(1)": "Equivalente a forward()",
  "history.go(-2)": "Retroceder 2 páginas",
  "history.go(0)": "Recargar página actual",
};

console.log("🔙 Métodos de history:");
console.table(METODOS_HISTORY);

// Funciones de navegación
function irAtras() {
  history.back();
  console.log("← Atrás");
}

function irAdelante() {
  history.forward();
  console.log("→ Adelante");
}

function retrocederMultiplesPaginas(cantidad) {
  history.go(-cantidad);
  console.log(`← Retrocediendo ${cantidad} páginas`);
}

//--------------------------------------------------------------------------------------
// 6. HISTORY API AVANZADA (HTML5)
//--------------------------------------------------------------------------------------

/*
pushState() y replaceState() permiten modificar el historial
sin recargar la página (útil para SPAs)
*/

// pushState() - Agregar entrada al historial
function agregarEntradaHistorial(datos, titulo, url) {
  history.pushState(datos, titulo, url);
  console.log("✅ Nueva entrada en historial:", url);
}

// Ejemplo de SPA (Single Page Application)
function navegarSinRecargar(pagina) {
  // Cambiar URL sin recargar
  history.pushState({ pagina: pagina }, "", `/${pagina}`);

  // Actualizar contenido (simulado)
  console.log(`Cargando contenido de: ${pagina}`);

  // Aquí cargarías el contenido con AJAX/fetch
}

// Detectar navegación con botones atrás/adelante
window.addEventListener("popstate", (event) => {
  console.log("🔄 Usuario navegó con botones del navegador");
  console.log("Estado:", event.state);

  // Aquí actualizarías el contenido según el estado
  if (event.state && event.state.pagina) {
    console.log(`Cargar contenido de: ${event.state.pagina}`);
  }
});

// replaceState() - Reemplazar entrada actual (sin agregar al historial)
function reemplazarEstadoActual(datos, titulo, url) {
  history.replaceState(datos, titulo, url);
  console.log("✅ Estado actual reemplazado");
}

//--------------------------------------------------------------------------------------
// EJEMPLO PRÁCTICO 1: NAVEGADOR DE PESTAÑAS SIN RECARGAR
//--------------------------------------------------------------------------------------

class NavegadorSPA {
  constructor() {
    this.paginaActual = "inicio";
  }

  navegarA(pagina) {
    // Guardar en historial
    history.pushState(
      { pagina: pagina, timestamp: Date.now() },
      pagina,
      `/${pagina}`
    );

    this.paginaActual = pagina;
    this.renderizarPagina(pagina);
  }

  renderizarPagina(pagina) {
    console.log(`📄 Renderizando página: ${pagina}`);

    // Aquí irías el código para actualizar el DOM
    const contenidos = {
      inicio: "<h1>Inicio</h1><p>Bienvenido</p>",
      productos: "<h1>Productos</h1><p>Lista de productos</p>",
      contacto: "<h1>Contacto</h1><p>Formulario de contacto</p>",
    };

    console.log(contenidos[pagina] || "Página no encontrada");
  }

  manejarNavegacion() {
    window.addEventListener("popstate", (event) => {
      const pagina = event.state?.pagina || "inicio";
      this.paginaActual = pagina;
      this.renderizarPagina(pagina);
    });
  }
}

// Uso
const navegador = new NavegadorSPA();
navegador.manejarNavegacion();
// navegador.navegarA('productos');
// navegador.navegarA('contacto');

//--------------------------------------------------------------------------------------
// EJEMPLO PRÁCTICO 2: REDIRECCIÓN AUTOMÁTICA
//--------------------------------------------------------------------------------------

function redirigirDespuesDe(segundos, url, mensaje) {
  console.log(`⏳ Redirigiendo a ${url} en ${segundos} segundos...`);

  if (mensaje) {
    const contenedor = document.getElementById("mensaje");
    if (contenedor) {
      contenedor.innerHTML = `
        <div style="text-align: center; padding: 50px;">
          <h2>${mensaje}</h2>
          <p>Redirigiendo en <span id="contador">${segundos}</span> segundos...</p>
        </div>
      `;
    }
  }

  let contador = segundos;

  const intervalo = setInterval(() => {
    contador--;

    const elementoContador = document.getElementById("contador");
    if (elementoContador) {
      elementoContador.textContent = contador;
    }

    console.log(`⏳ ${contador}...`);

    if (contador === 0) {
      clearInterval(intervalo);
      location.href = url;
    }
  }, 1000);

  return intervalo; // Por si se quiere cancelar
}

// Ejemplo de uso
// redirigirDespuesDe(5, 'https://www.google.com', 'Sesión cerrada correctamente');

//--------------------------------------------------------------------------------------
// EJEMPLO PRÁCTICO 3: GESTOR DE PARÁMETROS URL
//--------------------------------------------------------------------------------------

class URLManager {
  constructor() {
    this.params = new URLSearchParams(location.search);
  }

  get(key, defaultValue = null) {
    return this.params.get(key) || defaultValue;
  }

  set(key, value) {
    this.params.set(key, value);
    this.actualizar();
  }

  remove(key) {
    this.params.delete(key);
    this.actualizar();
  }

  has(key) {
    return this.params.has(key);
  }

  getAll() {
    return Object.fromEntries(this.params);
  }

  clear() {
    this.params = new URLSearchParams();
    this.actualizar();
  }

  actualizar() {
    const nuevaURL = this.params.toString()
      ? `${location.pathname}?${this.params.toString()}${location.hash}`
      : `${location.pathname}${location.hash}`;

    history.pushState(null, "", nuevaURL);
  }
}

// Uso
const urlManager = new URLManager();
// urlManager.set('filtro', 'activos');
// urlManager.set('ordenar', 'fecha');
console.log("Parámetros actuales:", urlManager.getAll());

//--------------------------------------------------------------------------------------
// 💡 BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:
1. Verificar si window.open() fue bloqueado
2. Usar location.replace() para redirecciones post-login
3. Validar parámetros URL antes de usarlos
4. Usar history API para SPAs
5. Manejar evento popstate correctamente
6. Limpiar intervals de redirección si el usuario cancela
7. Usar URLSearchParams para trabajar con query strings
8. Proporcionar feedback al usuario durante redirecciones

❌ NO HACER:
1. Abrir ventanas emergentes sin interacción del usuario
2. Usar window.open() abusivamente
3. Confiar en parámetros URL sin validación
4. Olvidar manejar popstate en SPAs
5. Usar confirm() antes de redirecciones importantes
6. Modificar URL sin actualizar contenido (confunde al usuario)
7. Hacer redirecciones muy rápidas (dar tiempo al usuario)
8. Perder datos al navegar (guardar en localStorage si es necesario)
*/

console.log("✅ Archivo 03-ventanas_navegacion.js cargado");
console.log("🌐 Revisa location y history para controlar navegación");
