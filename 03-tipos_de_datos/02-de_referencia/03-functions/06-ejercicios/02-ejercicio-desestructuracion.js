//--------------------------------------------------------------------------------------
// 🎯 EJERCICIOS DE DESESTRUCTURACIÓN EN FUNCIONES
//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
// EJERCICIO 1: Desestructuración básica de objeto
//--------------------------------------------------------------------------------------

const producto = {
  nombre: "Laptop",
  precio: 1200,
  disponible: true,
  marca: "Dell",
};

// ❌ Sin desestructuración
function mostrarProductoSin(producto) {
  console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
}

// ✅ Con desestructuración en parámetros
function mostrarProducto({ nombre, precio }) {
  console.log(`Producto: ${nombre}, Precio: ${precio}`);
}

mostrarProducto(producto); // Producto: Laptop, Precio: 1200

//--------------------------------------------------------------------------------------
// EJERCICIO 2: Desestructuración con valores por defecto
//--------------------------------------------------------------------------------------

const productoSinStock = {
  nombre: "Mouse",
  precio: 25,
};

function mostrarProductoCompleto({ nombre, precio, disponible = false }) {
  const estado = disponible ? "Disponible" : "No disponible";
  console.log(`${nombre} - $${precio} - ${estado}`);
}

mostrarProductoCompleto(producto); // Laptop - $1200 - Disponible
mostrarProductoCompleto(productoSinStock); // Mouse - $25 - No disponible

//--------------------------------------------------------------------------------------
// EJERCICIO 3: Desestructuración con renombrado
//--------------------------------------------------------------------------------------

function mostrarProductoRenombrado({ nombre: n, precio: p }) {
  console.log(`El ${n} cuesta $${p}`);
}

mostrarProductoRenombrado(producto); // El Laptop cuesta $1200

//--------------------------------------------------------------------------------------
// EJERCICIO 4: Desestructuración de arrays
//--------------------------------------------------------------------------------------

const coordenadas = [10, 20, 30];

function mostrarCoordenadas([x, y, z = 0]) {
  console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
}

mostrarCoordenadas([100, 200]); // X: 100, Y: 200, Z: 0
mostrarCoordenadas([100, 200, 300]); // X: 100, Y: 200, Z: 300

//--------------------------------------------------------------------------------------
// EJERCICIO 5: Desestructuración anidada
//--------------------------------------------------------------------------------------

const usuario = {
  nombre: "Carlos",
  edad: 25,
  direccion: {
    calle: "Principal",
    numero: 123,
    ciudad: "Madrid",
  },
};

function mostrarDireccion({ nombre, direccion: { ciudad, calle } }) {
  console.log(`${nombre} vive en ${calle}, ${ciudad}`);
}

mostrarDireccion(usuario); // Carlos vive en Principal, Madrid

//--------------------------------------------------------------------------------------
// EJERCICIO 6: Rest en desestructuración
//--------------------------------------------------------------------------------------

const pedido = {
  id: 1,
  cliente: "Ana",
  producto: "Laptop",
  precio: 1200,
  envio: "Express",
  garantia: "2 años",
};

function procesarPedido({ id, cliente, ...detalles }) {
  console.log(`Pedido #${id} de ${cliente}`);
  console.log("Detalles:", detalles);
}

procesarPedido(pedido);
// Pedido #1 de Ana
// Detalles: { producto: 'Laptop', precio: 1200, envio: 'Express', garantia: '2 años' }

//--------------------------------------------------------------------------------------
// EJERCICIO 7: Desestructuración en arrow functions
//--------------------------------------------------------------------------------------

const usuarios = [
  { nombre: "Carlos", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Luis", edad: 22 },
];

// Desestructurar en map
const nombres = usuarios.map(({ nombre }) => nombre);
console.log(nombres); // ['Carlos', 'Ana', 'Luis']

// Desestructurar en filter
const mayores = usuarios.filter(({ edad }) => edad >= 25);
console.log(mayores); // [{ nombre: 'Carlos', edad: 25 }, { nombre: 'Ana', edad: 30 }]

//--------------------------------------------------------------------------------------
// EJERCICIO 8: Combinar desestructuración con valores calculados
//--------------------------------------------------------------------------------------

function calcularDescuento({ precio, descuento = 0 }) {
  const precioFinal = precio - precio * (descuento / 100);
  return {
    precioOriginal: precio,
    precioFinal,
    ahorrado: precio - precioFinal,
  };
}

console.log(calcularDescuento({ precio: 100, descuento: 20 }));
// { precioOriginal: 100, precioFinal: 80, ahorrado: 20 }

//--------------------------------------------------------------------------------------
// EJERCICIO 9: Desestructuración con múltiples parámetros
//--------------------------------------------------------------------------------------

function crearUsuario(
  { nombre, email },
  { rol = "usuario", activo = true } = {}
) {
  return {
    nombre,
    email,
    rol,
    activo,
    fechaCreacion: new Date(),
  };
}

const nuevoUsuario = crearUsuario(
  { nombre: "Pedro", email: "pedro@mail.com" },
  { rol: "admin" }
);

console.log(nuevoUsuario);

//--------------------------------------------------------------------------------------
// EJERCICIO 10: Swap de variables con desestructuración
//--------------------------------------------------------------------------------------

function intercambiar([a, b]) {
  return [b, a];
}

let x = 5,
  y = 10;
[x, y] = intercambiar([x, y]);
console.log(x, y); // 10 5

//--------------------------------------------------------------------------------------
// EJERCICIO 11: Ignorar valores con desestructuración
//--------------------------------------------------------------------------------------

const datos = [1, 2, 3, 4, 5];

function obtenerExtremos([primero, , , , ultimo]) {
  return { primero, ultimo };
}

console.log(obtenerExtremos(datos)); // { primero: 1, ultimo: 5 }

//--------------------------------------------------------------------------------------
// EJERCICIO 12: Desestructuración en bucles
//--------------------------------------------------------------------------------------

const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 75 },
];

for (const { nombre, precio } of productos) {
  console.log(`${nombre}: $${precio}`);
}

//--------------------------------------------------------------------------------------
// EJERCICIO 13: Validación con desestructuración
//--------------------------------------------------------------------------------------

function validarFormulario({ nombre = "", email = "", edad = 0 }) {
  const errores = [];

  if (nombre.length < 3) {
    errores.push("Nombre muy corto");
  }

  if (!email.includes("@")) {
    errores.push("Email inválido");
  }

  if (edad < 18) {
    errores.push("Debe ser mayor de edad");
  }

  return {
    valido: errores.length === 0,
    errores,
  };
}

console.log(
  validarFormulario({ nombre: "Carlos", email: "carlos@mail.com", edad: 25 })
);
// { valido: true, errores: [] }

console.log(validarFormulario({ nombre: "Lu", email: "invalido", edad: 15 }));
// { valido: false, errores: ['Nombre muy corto', 'Email inválido', 'Debe ser mayor de edad'] }

//--------------------------------------------------------------------------------------
// EJERCICIO 14: Configuración con desestructuración
//--------------------------------------------------------------------------------------

function configurarAplicacion({
  tema = "claro",
  idioma = "es",
  notificaciones = true,
  modo = "desarrollo",
} = {}) {
  console.log(`
╔════════════════════════════════════╗
║      Configuración de la App       ║
╠════════════════════════════════════╣
║ Tema: ${tema.padEnd(28)}║
║ Idioma: ${idioma.padEnd(26)}║
║ Notificaciones: ${String(notificaciones).padEnd(19)}║
║ Modo: ${modo.padEnd(28)}║
╚════════════════════════════════════╝
  `);

  return { tema, idioma, notificaciones, modo };
}

configurarAplicacion({ tema: "oscuro", modo: "producción" });
configurarAplicacion(); // Usa todos los valores por defecto

//--------------------------------------------------------------------------------------
// EJERCICIO 15: API Response con desestructuración
//--------------------------------------------------------------------------------------

// Simular respuesta de API
const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 1,
      name: "Carlos",
      email: "carlos@mail.com",
    },
    posts: [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ],
  },
  meta: {
    timestamp: Date.now(),
    version: "1.0",
  },
};

function procesarRespuesta({
  status,
  data: {
    user: { name, email },
    posts,
  },
  meta: { version },
}) {
  if (status === 200) {
    console.log(`Usuario: ${name} (${email})`);
    console.log(`Posts: ${posts.length}`);
    console.log(`API Version: ${version}`);
  }
}

procesarRespuesta(apiResponse);

//--------------------------------------------------------------------------------------
// EJERCICIO BONUS: Desestructuración compleja
//--------------------------------------------------------------------------------------

const datosComplejos = {
  empresa: "TechCorp",
  empleados: [
    {
      id: 1,
      nombre: "Carlos",
      departamento: "IT",
      proyectos: ["Web", "Mobile"],
    },
    {
      id: 2,
      nombre: "Ana",
      departamento: "Marketing",
      proyectos: ["Social Media"],
    },
  ],
  oficinas: {
    principal: {
      ciudad: "Madrid",
      direccion: "Calle Principal 123",
    },
    sucursal: {
      ciudad: "Barcelona",
      direccion: "Avenida Secundaria 456",
    },
  },
};

function analizarEmpresa({
  empresa,
  empleados: [primerEmpleado, segundoEmpleado],
  oficinas: {
    principal: { ciudad: ciudadPrincipal },
    sucursal: { ciudad: ciudadSucursal },
  },
}) {
  console.log(`Empresa: ${empresa}`);
  console.log(
    `Primer empleado: ${primerEmpleado.nombre} (${primerEmpleado.departamento})`
  );
  console.log(
    `Segundo empleado: ${segundoEmpleado.nombre} (${segundoEmpleado.departamento})`
  );
  console.log(`Oficinas en: ${ciudadPrincipal} y ${ciudadSucursal}`);
}

analizarEmpresa(datosComplejos);

console.log(`
╔═══════════════════════════════════════════════════════════╗
║    EJERCICIOS DE DESESTRUCTURACIÓN - COMPLETADOS ✅       ║
╠═══════════════════════════════════════════════════════════╣
║ Has practicado:                                           ║
║ ✅ Desestructuración básica                               ║
║ ✅ Valores por defecto                                    ║
║ ✅ Renombrado de variables                                ║
║ ✅ Desestructuración anidada                              ║
║ ✅ Rest en desestructuración                              ║
║ ✅ Desestructuración en arrow functions                   ║
║                                                           ║
║ Siguiente paso: 03-ejercicios-avanzados.js 🚀            ║
╚═══════════════════════════════════════════════════════════╝
`);
