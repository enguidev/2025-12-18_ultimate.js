//--------------------------------------------------------------------------------------
// 🎯 OPERADORES MODERNOS (ES2020+)
//--------------------------------------------------------------------------------------
// Optional Chaining, Nullish Coalescing y Logical Assignment

//--------------------------------------------------------------------------------------
// 1️⃣ OPTIONAL CHAINING (?.)
//--------------------------------------------------------------------------------------
// Acceso seguro a propiedades anidadas sin errores

const usuario = {
  nombre: "Carlos",
  direccion: {
    calle: "Principal",
    numero: 123,
  },
};

// ❌ PROBLEMA: Forma antigua (verbosa y propensa a errores)
console.log(usuario.direccion && usuario.direccion.ciudad); // undefined
console.log(usuario.contacto && usuario.contacto.email); // undefined

// ✅ SOLUCIÓN: Optional Chaining
console.log(usuario.direccion?.ciudad); // undefined (sin error)
console.log(usuario.contacto?.email); // undefined (sin error)

//--------------------------------------------------------------------------------------
// 2️⃣ OPTIONAL CHAINING CON FUNCIONES
//--------------------------------------------------------------------------------------

const api = {
  usuarios: {
    obtener: () => "Usuarios obtenidos",
  },
};

// ❌ Forma antigua
if (api.usuarios && api.usuarios.obtener) {
  console.log(api.usuarios.obtener());
}

// ✅ Con optional chaining
console.log(api.usuarios?.obtener?.()); // "Usuarios obtenidos"
console.log(api.productos?.listar?.()); // undefined (sin error)

//--------------------------------------------------------------------------------------
// 3️⃣ OPTIONAL CHAINING CON ARRAYS
//--------------------------------------------------------------------------------------

const datos = {
  items: [{ nombre: "Item 1" }, { nombre: "Item 2" }],
};

// ✅ Acceso seguro a elementos de array
console.log(datos.items?.[0]?.nombre); // "Item 1"
console.log(datos.items?.[10]?.nombre); // undefined
console.log(datos.otros?.[0]?.nombre); // undefined

//--------------------------------------------------------------------------------------
// 4️⃣ NULLISH COALESCING OPERATOR (??)
//--------------------------------------------------------------------------------------
// Diferencia CRUCIAL con || (OR lógico)

const config = {
  puerto: 0, // ¡0 es un valor VÁLIDO!
  debug: false, // ¡false es un valor VÁLIDO!
  timeout: null, // Este sí queremos reemplazar
  retries: undefined, // Este también
};

// ❌ PROBLEMA con || (trata 0, false, "" como "sin valor")
console.log(config.puerto || 3000); // 3000 ❌ (INCORRECTO - 0 es válido)
console.log(config.debug || true); // true ❌ (INCORRECTO - false es válido)

// ✅ SOLUCIÓN con ?? (solo null o undefined)
console.log(config.puerto ?? 3000); // 0 ✅ (CORRECTO)
console.log(config.debug ?? true); // false ✅ (CORRECTO)
console.log(config.timeout ?? 5000); // 5000 ✅ (null → usa default)
console.log(config.retries ?? 3); // 3 ✅ (undefined → usa default)

//--------------------------------------------------------------------------------------
// 5️⃣ COMPARACIÓN: || vs ??
//--------------------------------------------------------------------------------------

const valores = {
  a: 0,
  b: "",
  c: false,
  d: null,
  e: undefined,
};

console.log("=== Comparación || vs ?? ===");
console.log("valor: 0");
console.log("  con ||:", valores.a || 100); // 100
console.log("  con ??:", valores.a ?? 100); // 0 ✅

console.log("valor: ''");
console.log("  con ||:", valores.b || "default"); // "default"
console.log("  con ??:", valores.b ?? "default"); // "" ✅

console.log("valor: false");
console.log("  con ||:", valores.c || true); // true
console.log("  con ??:", valores.c ?? true); // false ✅

console.log("valor: null");
console.log("  con ||:", valores.d || 100); // 100 ✅
console.log("  con ??:", valores.d ?? 100); // 100 ✅

//--------------------------------------------------------------------------------------
// 6️⃣ COMBINAR ?. y ??
//--------------------------------------------------------------------------------------

const usuario2 = {
  nombre: "Ana",
  perfil: {
    avatar: null,
  },
};

// Combinar ambos operadores
const avatarUrl = usuario2.perfil?.avatar?.url ?? "/default-avatar.png";
console.log(avatarUrl); // "/default-avatar.png"

// Caso más complejo
const temaOscuro = usuario2.configuracion?.tema?.modo ?? "claro";
console.log(temaOscuro); // "claro"

//--------------------------------------------------------------------------------------
// 7️⃣ LOGICAL ASSIGNMENT OPERATORS (ES2021)
//--------------------------------------------------------------------------------------
// ||=, &&=, ??=

let configuracion = {
  tema: null,
  idioma: "es",
  notificaciones: undefined,
};

// ❌ Forma antigua
if (!configuracion.tema) {
  configuracion.tema = "oscuro";
}

// ✅ Forma moderna: ??= (asigna solo si null/undefined)
configuracion.tema ??= "oscuro";
console.log(configuracion.tema); // "oscuro"

configuracion.idioma ??= "en"; // No asigna (idioma ya tiene valor)
console.log(configuracion.idioma); // "es"

//--------------------------------------------------------------------------------------
// 8️⃣ OPERADOR ||= (OR Assignment)
//--------------------------------------------------------------------------------------

let options = {
  verbose: false,
  debug: 0,
};

// ||= asigna si el valor es falsy (0, false, "", null, undefined)
options.verbose ||= true;
console.log(options.verbose); // true (false es falsy)

options.debug ||= 5;
console.log(options.debug); // 5 (0 es falsy)

//--------------------------------------------------------------------------------------
// 9️⃣ OPERADOR &&= (AND Assignment)
//--------------------------------------------------------------------------------------

let estado = {
  usuario: { nombre: "Carlos", edad: 25 },
  datos: null,
};

// &&= asigna solo si el valor actual es truthy
estado.usuario &&= { ...estado.usuario, activo: true };
console.log(estado.usuario); // { nombre: "Carlos", edad: 25, activo: true }

estado.datos &&= { loaded: true }; // No asigna (datos es null)
console.log(estado.datos); // null

//--------------------------------------------------------------------------------------
// 🔟 CASOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// Caso 1: Configuración con valores por defecto
function crearConfiguracion(opciones = {}) {
  opciones.puerto ??= 3000;
  opciones.host ??= "localhost";
  opciones.debug ??= false;
  opciones.timeout ??= 5000;

  return opciones;
}

const config1 = crearConfiguracion({ puerto: 8080, debug: true });
console.log(config1);
// { puerto: 8080, host: "localhost", debug: true, timeout: 5000 }

// Caso 2: Acceso seguro a API response
const apiResponse = {
  data: {
    usuario: {
      perfil: {
        nombre: "Carlos",
      },
    },
  },
};

const nombreUsuario = apiResponse.data?.usuario?.perfil?.nombre ?? "Anónimo";
console.log(nombreUsuario); // "Carlos"

const emailUsuario = apiResponse.data?.usuario?.contacto?.email ?? "Sin email";
console.log(emailUsuario); // "Sin email"

// Caso 3: Validación de formulario
function validarFormulario(datos) {
  const errores = [];

  // Validar con optional chaining
  if (!datos.usuario?.nombre) {
    errores.push("Nombre requerido");
  }

  if (!datos.usuario?.email?.includes("@")) {
    errores.push("Email inválido");
  }

  // Edad por defecto con ??
  const edad = datos.usuario?.edad ?? 18;
  if (edad < 18) {
    errores.push("Debe ser mayor de edad");
  }

  return {
    valido: errores.length === 0,
    errores,
  };
}

// Caso 4: Cache con lazy initialization
class Cache {
  constructor() {
    this._data = null;
  }

  obtener(clave) {
    // Inicializar cache solo si es necesario
    this._data ??= new Map();
    return this._data.get(clave);
  }

  guardar(clave, valor) {
    this._data ??= new Map();
    this._data.set(clave, valor);
  }
}

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ PATRONES ANTI-PATTERN
//--------------------------------------------------------------------------------------

// ❌ NO hagas esto
const valor1 = datos?.propiedad?.subpropiedad?.subsubpropiedad?.valor;
// Si tienes tantos niveles, reconsidera tu estructura de datos

// ❌ NO uses ?? cuando || es correcto
const mensaje = input ?? "Valor por defecto";
// Si input puede ser "", 0, false y quieres reemplazarlos, usa ||

// ✅ SÍ combina inteligentemente
const resultado = api.datos?.resultado ?? calcularPorDefecto();

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ COMPARATIVA DE OPERADORES
//--------------------------------------------------------------------------------------

console.log(`
╔═══════════════════════════════════════════════════════════╗
║           TABLA COMPARATIVA DE OPERADORES                 ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║ OPERADOR     │ QUÉ HACE              │ CUÁNDO USAR       ║
║──────────────┼───────────────────────┼───────────────────║
║ ?.           │ Acceso seguro         │ Props anidadas    ║
║ ??           │ Default para null/und │ Valores "falsy"   ║
║ ||           │ Default para falsy    │ Cualquier falsy   ║
║ ??=          │ Asignar si null/und   │ Init lazy         ║
║ ||=          │ Asignar si falsy      │ Defaults simples  ║
║ &&=          │ Asignar si truthy     │ Updates cond.     ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝

VALORES FALSY EN JAVASCRIPT:
  • false
  • 0, -0
  • "", '', ``
  • null
  • undefined
  • NaN

?? SOLO considera falsy:
  • null
  • undefined
`);

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:

1. Usa ?. para props anidadas de objetos externos (API, configs)
2. Usa ?? cuando 0, false, "" son valores válidos
3. Usa ||= para defaults simples
4. Usa ??= para lazy initialization
5. Combina ?. con ?? para código robusto

❌ EVITAR:

1. ?. excesivo (>3 niveles indica mal diseño)
2. ?? cuando || es suficiente
3. Mezclar || y ?? sin entender la diferencia
4. Optional chaining en código de alto rendimiento crítico
5. Usar ?. para ocultar errores de diseño
*/

//--------------------------------------------------------------------------------------
// 1️⃣4️⃣ SOPORTE DE NAVEGADORES
//--------------------------------------------------------------------------------------

/*
✅ SOPORTE ACTUAL (Diciembre 2024):

Optional Chaining (?.):
  • Chrome 80+ (Feb 2020)
  • Firefox 74+ (Mar 2020)
  • Safari 13.1+ (Mar 2020)
  • Edge 80+ (Feb 2020)
  • Node.js 14+

Nullish Coalescing (??):
  • Chrome 80+ (Feb 2020)
  • Firefox 72+ (Ene 2020)
  • Safari 13.1+ (Mar 2020)
  • Edge 80+ (Feb 2020)
  • Node.js 14+

Logical Assignment (||=, &&=, ??=):
  • Chrome 85+ (Ago 2020)
  • Firefox 79+ (Jul 2020)
  • Safari 14+ (Sep 2020)
  • Edge 85+ (Ago 2020)
  • Node.js 15+

⚠️ Para navegadores antiguos: Babel + polyfills
*/

console.log(`
╔═══════════════════════════════════════════════════════════╗
║         OPERADORES MODERNOS - RESUMEN                     ║
╠═══════════════════════════════════════════════════════════╣
║ • ?. (Optional Chaining): Acceso seguro                   ║
║ • ?? (Nullish Coalescing): Default solo para null/undef  ║
║ • ??= : Asigna solo si null/undefined                    ║
║ • ||= : Asigna si valor es falsy                         ║
║ • &&= : Asigna solo si valor es truthy                   ║
║                                                           ║
║ 🎯 Hacen el código más limpio y seguro                    ║
║ 🚀 Disponibles desde ES2020/ES2021                        ║
╚═══════════════════════════════════════════════════════════╝
`);
