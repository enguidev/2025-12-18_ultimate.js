//======================================
// ALTERNATIVAS COMPLETAS AL SWITCH EN JAVASCRIPT
// Guía definitiva con todas las opciones modernas
//======================================

//======================================
// 1. DICCIONARIOS DE VALORES (lo más simple)
//======================================

// Cuando solo necesitas mapear un valor a otro valor

// ❌ SWITCH tradicional
function obtenerPrecioSwitch(producto) {
  switch (producto) {
    case "manzana":
      return 2.5;
    case "plátano":
      return 1.8;
    case "naranja":
      return 3.0;
    case "uva":
      return 4.5;
    default:
      return 0;
  }
}

// ✅ DICCIONARIO (objeto literal simple)
const PRECIOS = {
  manzana: 2.5,
  plátano: 1.8,
  naranja: 3.0,
  uva: 4.5,
};

function obtenerPrecio(producto) {
  return PRECIOS[producto] ?? 0;
}

console.log("--- 1. DICCIONARIOS DE VALORES ---");
console.log("Precio manzana:", obtenerPrecio("manzana"));
console.log("Precio kiwi:", obtenerPrecio("kiwi"));

// Ventajas:
// ✅ Una línea vs múltiples cases
// ✅ Fácil de leer y mantener
// ✅ Muy rápido (O(1))
// ✅ Fácil de exportar/importar

//======================================
// 2. OBJETOS COMO MAPAS DE FUNCIONES
//======================================

// La alternativa MÁS LIMPIA cuando cada caso ejecuta lógica diferente

// ❌ SWITCH con lógica
function procesarOperacionSwitch(operacion, a, b) {
  switch (operacion) {
    case "suma":
      return a + b;
    case "resta":
      return a - b;
    case "multiplicacion":
      return a * b;
    case "division":
      if (b === 0) throw new Error("División por cero");
      return a / b;
    case "potencia":
      return Math.pow(a, b);
    default:
      throw new Error("Operación no válida");
  }
}

// ✅ OBJETO con funciones (Strategy Pattern)
const operaciones = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
  multiplicacion: (a, b) => a * b,
  division: (a, b) => {
    if (b === 0) throw new Error("División por cero");
    return a / b;
  },
  potencia: (a, b) => Math.pow(a, b),
};

function procesarOperacion(operacion, a, b) {
  const fn = operaciones[operacion];
  if (!fn) throw new Error("Operación no válida");
  return fn(a, b);
}

console.log("\n--- 2. OBJETOS COMO MAPAS DE FUNCIONES ---");
console.log("5 + 3 =", procesarOperacion("suma", 5, 3));
console.log("10 / 2 =", procesarOperacion("division", 10, 2));

// Ventajas:
// ✅ Cada función es independiente y testeable
// ✅ Fácil agregar nuevas operaciones
// ✅ Sin break ni fall-through
// ✅ Más funcional y declarativo

//======================================
// 3. MAP (cuando las claves NO son strings)
//======================================

// Map permite usar CUALQUIER tipo como clave (objetos, números, etc.)

// ❌ Con objetos normales solo puedes usar strings
const configObjeto = {
  1: "uno", // Se convierte a "1" (string)
  2: "dos",
};

// ✅ Map permite claves de cualquier tipo
const configuraciones = new Map([
  [1, { nivel: "básico", precio: 10 }],
  [2, { nivel: "intermedio", precio: 20 }],
  [3, { nivel: "avanzado", precio: 30 }],
  ["premium", { nivel: "premium", precio: 50 }],
  [true, { nivel: "activado", precio: 0 }],
]);

function obtenerConfig(clave) {
  return configuraciones.get(clave) ?? { nivel: "desconocido", precio: 0 };
}

console.log("\n--- 3. MAP ---");
console.log("Config 1:", obtenerConfig(1));
console.log("Config 'premium':", obtenerConfig("premium"));
console.log("Config true:", obtenerConfig(true));

// Map con objetos como claves (¡imposible con objetos normales!)
const usuario1 = { id: 1, nombre: "Ana" };
const usuario2 = { id: 2, nombre: "Luis" };

const permisos = new Map([
  [usuario1, ["leer", "escribir", "eliminar"]],
  [usuario2, ["leer"]],
]);

console.log("Permisos Ana:", permisos.get(usuario1));

// Ventajas:
// ✅ Claves de cualquier tipo
// ✅ Mantiene el tipo original (1 !== "1")
// ✅ Tiene métodos útiles: size, has, delete, clear
// ✅ Mejor rendimiento para muchas operaciones

//======================================
// 4. WEAKMAP (para referencias a objetos)
//======================================

// WeakMap es como Map pero:
// - Solo acepta objetos como claves
// - No previene garbage collection
// - Útil para metadata privada

const metadataPrivada = new WeakMap();

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
    // Datos privados en WeakMap
    metadataPrivada.set(this, {
      creadoEn: new Date(),
      intentosLogin: 0,
    });
  }

  login() {
    const metadata = metadataPrivada.get(this);
    metadata.intentosLogin++;
    console.log(
      `${this.nombre} ha iniciado sesión ${metadata.intentosLogin} veces`
    );
  }
}

console.log("\n--- 4. WEAKMAP ---");
const user = new Usuario("Carlos");
user.login();
user.login();

// Ventajas:
// ✅ Datos privados sin contaminar el objeto
// ✅ Permite garbage collection automático
// ✅ Perfecto para caches y metadata

//======================================
// 5. PATTERN STRATEGY (funciones puras)
//======================================

// Cuando necesitas intercambiar algoritmos completos

// ✅ Cada estrategia es una clase/función independiente
class EstrategiaEnvioEstandar {
  calcular(peso, distancia) {
    return peso * 2 + distancia * 0.5;
  }

  tiempoEstimado() {
    return "3-5 días";
  }
}

class EstrategiaEnvioExpress {
  calcular(peso, distancia) {
    return peso * 5 + distancia * 1.5;
  }

  tiempoEstimado() {
    return "24 horas";
  }
}

class EstrategiaEnvioEconomico {
  calcular(peso, distancia) {
    return peso * 1 + distancia * 0.2;
  }

  tiempoEstimado() {
    return "7-10 días";
  }
}

// Contenedor de estrategias
const estrategiasEnvio = {
  estandar: new EstrategiaEnvioEstandar(),
  express: new EstrategiaEnvioExpress(),
  economico: new EstrategiaEnvioEconomico(),
};

function calcularEnvio(tipo, peso, distancia) {
  const estrategia = estrategiasEnvio[tipo];
  if (!estrategia) return { error: "Tipo de envío no válido" };

  return {
    costo: estrategia.calcular(peso, distancia),
    tiempo: estrategia.tiempoEstimado(),
  };
}

console.log("\n--- 5. PATTERN STRATEGY ---");
console.log("Envío express:", calcularEnvio("express", 2, 100));
console.log("Envío económico:", calcularEnvio("economico", 2, 100));

// Ventajas:
// ✅ Cada estrategia es completamente independiente
// ✅ Fácil testear cada estrategia por separado
// ✅ Open/Closed principle (abierto a extensión, cerrado a modificación)
// ✅ Muy mantenible en proyectos grandes

//======================================
// 6. IF/ELSE (para rangos y condiciones complejas)
//======================================

// Switch NO es bueno para rangos o condiciones complejas
// En estos casos, if/else es la mejor opción

// ❌ SWITCH con switch(true) es feo
function clasificarTemperaturaSwitch(temp) {
  switch (true) {
    case temp < -10:
      return "Congelante";
    case temp < 0:
      return "Muy frío";
    case temp < 10:
      return "Frío";
    case temp < 20:
      return "Templado";
    case temp < 30:
      return "Cálido";
    default:
      return "Muy caliente";
  }
}

// ✅ IF/ELSE es más natural para rangos
function clasificarTemperatura(temp) {
  if (temp < -10) return "Congelante";
  if (temp < 0) return "Muy frío";
  if (temp < 10) return "Frío";
  if (temp < 20) return "Templado";
  if (temp < 30) return "Cálido";
  return "Muy caliente";
}

console.log("\n--- 6. IF/ELSE PARA RANGOS ---");
console.log("15°C es:", clasificarTemperatura(15));
console.log("35°C es:", clasificarTemperatura(35));

// ✅ IF/ELSE para condiciones múltiples
function puedeAcceder(usuario) {
  if (!usuario) return false;
  if (!usuario.activo) return false;
  if (usuario.edad < 18) return false;
  if (!usuario.emailVerificado) return false;
  if (usuario.rol !== "admin" && usuario.rol !== "moderador") return false;
  return true;
}

// Cuándo usar if/else:
// ✅ Comparaciones con rangos (>, <, >=, <=)
// ✅ Condiciones complejas con && o ||
// ✅ Validaciones secuenciales (guard clauses)
// ✅ Cuando necesitas evaluar expresiones, no valores exactos

//======================================
// 7. ARRAY + FIND (para patrones complejos)
//======================================

// Cuando tienes condiciones complejas que evaluar en orden

const reglasDescuento = [
  {
    condicion: (cliente) => cliente.tipo === "vip",
    descuento: 0.3,
    mensaje: "Descuento VIP 30%",
  },
  {
    condicion: (cliente) => cliente.tipo === "premium",
    descuento: 0.2,
    mensaje: "Descuento Premium 20%",
  },
  {
    condicion: (cliente) => cliente.compras > 10,
    descuento: 0.15,
    mensaje: "Descuento por fidelidad 15%",
  },
  {
    condicion: (cliente) => cliente.compras > 5,
    descuento: 0.1,
    mensaje: "Descuento cliente frecuente 10%",
  },
  {
    condicion: () => true, // default
    descuento: 0.05,
    mensaje: "Descuento nuevo cliente 5%",
  },
];

function calcularDescuento(cliente) {
  const regla = reglasDescuento.find((r) => r.condicion(cliente));
  return {
    descuento: regla.descuento,
    mensaje: regla.mensaje,
  };
}

console.log("\n--- 7. ARRAY + FIND ---");
console.log(calcularDescuento({ tipo: "premium", compras: 3 }));
console.log(calcularDescuento({ tipo: "normal", compras: 12 }));

// Ventajas:
// ✅ Muy flexible para reglas complejas
// ✅ Fácil agregar/quitar reglas
// ✅ Evaluación en orden (primera coincidencia gana)
// ✅ Reglas como datos (se pueden cargar de BD)

//======================================
// 8. TABLA DE DECISIÓN (multidimensional)
//======================================

// Para decisiones que dependen de múltiples factores

// ❌ If/else anidado horrible
function calcularTarifaMal(edad, dia, esEstudiante) {
  if (edad < 12) {
    if (dia === "finde") return 8;
    else return 5;
  } else if (edad >= 65) {
    if (dia === "finde") return 10;
    else return 7;
  } else {
    if (esEstudiante) {
      if (dia === "finde") return 12;
      else return 9;
    } else {
      if (dia === "finde") return 18;
      else return 15;
    }
  }
}

// ✅ Tabla de decisión clara
function crearClave(edad, dia, esEstudiante) {
  const categoria =
    edad < 12
      ? "niño"
      : edad >= 65
      ? "senior"
      : esEstudiante
      ? "estudiante"
      : "adulto";
  const momento = dia === "finde" ? "finde" : "semana";
  return `${categoria}-${momento}`;
}

const tarifas = {
  "niño-semana": 5,
  "niño-finde": 8,
  "senior-semana": 7,
  "senior-finde": 10,
  "estudiante-semana": 9,
  "estudiante-finde": 12,
  "adulto-semana": 15,
  "adulto-finde": 18,
};

function calcularTarifa(edad, dia, esEstudiante) {
  const clave = crearClave(edad, dia, esEstudiante);
  return tarifas[clave] ?? 15;
}

console.log("\n--- 8. TABLA DE DECISIÓN ---");
console.log("Niño finde:", calcularTarifa(8, "finde", false));
console.log("Estudiante semana:", calcularTarifa(20, "semana", true));

// Ventajas:
// ✅ Muy clara para ver todas las combinaciones
// ✅ Fácil de modificar precios
// ✅ Sin anidamiento
// ✅ Tabla puede venir de configuración/BD

//======================================
// 9. FUNCIÓN FACTORY (crear comportamiento dinámico)
//======================================

// Crear funciones especializadas bajo demanda

function crearValidador(reglas) {
  return function (valor) {
    for (const [nombre, regla] of Object.entries(reglas)) {
      if (!regla.test(valor)) {
        return { valido: false, error: regla.mensaje };
      }
    }
    return { valido: true };
  };
}

const validarEmail = crearValidador({
  noVacio: {
    test: (v) => v.length > 0,
    mensaje: "Email requerido",
  },
  formato: {
    test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    mensaje: "Formato de email inválido",
  },
});

const validarPassword = crearValidador({
  longitudMinima: {
    test: (v) => v.length >= 8,
    mensaje: "Mínimo 8 caracteres",
  },
  tieneNumero: {
    test: (v) => /\d/.test(v),
    mensaje: "Debe contener un número",
  },
  tieneMayuscula: {
    test: (v) => /[A-Z]/.test(v),
    mensaje: "Debe contener una mayúscula",
  },
});

console.log("\n--- 9. FUNCIÓN FACTORY ---");
console.log(validarEmail("test@example.com"));
console.log(validarPassword("Abc12345"));

// Ventajas:
// ✅ Reutilización de lógica
// ✅ Configuración flexible
// ✅ Cada validador es independiente

//======================================
// 10. PATTERN MATCHING (FUTURO - NO DISPONIBLE)
//======================================

// ⚠️ Esto NO funciona todavía, es una propuesta en Stage 1-2

/*
// Así se vería en el futuro:
function procesarRespuesta(response) {
  return match (response) {
    when { status: 200, data } -> `Success: ${data}`,
    when { status: 404 } -> "Not found",
    when { status: >= 500 } -> "Server error",
    when _ -> "Unknown response"
  };
}

// Características futuras:
✅ Matching estructural (destructuring automático)
✅ Guards (condiciones adicionales)
✅ Matching de arrays: [first, ...rest]
✅ Sin fall-through accidental
✅ Es una expresión (retorna valor)

// Estado actual: Stage 1-2 en TC39
// Podría llegar en: ES2026 o posterior (sin fecha confirmada)
*/

console.log("\n--- 10. PATTERN MATCHING ---");
console.log("⏳ Aún no disponible en JavaScript");
console.log("📚 Propuesta en etapas tempranas");
console.log("🔗 GitHub: https://github.com/tc39/proposal-pattern-matching");

//======================================
// RESUMEN Y CUÁNDO USAR CADA UNO
//======================================

console.log("\n=== RESUMEN COMPLETO ===\n");

const guiaUso = `
1️⃣  DICCIONARIOS DE VALORES
   Cuándo: Solo mapear valor → valor
   Ejemplo: colores, precios, traducciones
   Rendimiento: O(1) ⚡️

2️⃣  OBJETOS COMO MAPAS DE FUNCIONES ⭐ MÁS COMÚN
   Cuándo: Cada caso ejecuta lógica diferente
   Ejemplo: operaciones, comandos, handlers
   Ventaja: Más limpio que switch

3️⃣  MAP
   Cuándo: Claves NO son strings (números, objetos, etc)
   Ejemplo: configuraciones por ID, cache de objetos
   Ventaja: Mantiene tipos originales

4️⃣  WEAKMAP
   Cuándo: Metadata privada, caches temporales
   Ejemplo: datos privados de objetos
   Ventaja: Garbage collection automático

5️⃣  PATTERN STRATEGY
   Cuándo: Algoritmos intercambiables complejos
   Ejemplo: procesadores de pago, algoritmos de ordenamiento
   Ventaja: Muy mantenible y testeable

6️⃣  IF/ELSE ⭐ PARA RANGOS
   Cuándo: Comparaciones con <, >, rangos, condiciones complejas
   Ejemplo: clasificar temperaturas, validaciones
   Ventaja: Más natural que switch(true)

7️⃣  ARRAY + FIND
   Cuándo: Reglas complejas evaluadas en orden
   Ejemplo: descuentos por prioridad, validaciones secuenciales
   Ventaja: Reglas como datos

8️⃣  TABLA DE DECISIÓN
   Cuándo: Decisiones que dependen de múltiples factores
   Ejemplo: tarifas, precios dinámicos
   Ventaja: Sin anidamiento, muy clara

9️⃣  FUNCIÓN FACTORY
   Cuándo: Crear funciones especializadas dinámicamente
   Ejemplo: validadores, formateadores
   Ventaja: Reutilización máxima

🔟 PATTERN MATCHING
   Cuándo: En el futuro (no disponible aún)
   Estado: Propuesta Stage 1-2
   Estimado: ¿ES2026+?

❌ SWITCH
   Cuándo: Fall-through necesario, casos muy simples
   Problema: Propenso a errores, menos flexible
`;

console.log(guiaUso);

console.log("\n💡 RECOMENDACIÓN GENERAL:");
console.log("• Primera opción: Objetos como mapas de funciones (#2)");
console.log("• Para rangos: if/else (#6)");
console.log("• Para claves especiales: Map (#3)");
console.log("• Evita switch a menos que sea inevitable");
