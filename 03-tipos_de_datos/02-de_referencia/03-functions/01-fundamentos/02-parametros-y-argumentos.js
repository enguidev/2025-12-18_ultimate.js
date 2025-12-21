//--------------------------------------------------------------------------------------
// 🎯 PARÁMETROS Y ARGUMENTOS
//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
// 1️⃣ DIFERENCIA ENTRE PARÁMETROS Y ARGUMENTOS
//--------------------------------------------------------------------------------------

// Parámetros: Variables en la DEFINICIÓN de la función
function saludar(nombre, edad) {
  // 'nombre' y 'edad' son PARÁMETROS
  console.log(`Hola ${nombre}, tienes ${edad} años`);
}

// Argumentos: Valores PASADOS al LLAMAR la función
saludar("Carlos", 25); // "Carlos" y 25 son ARGUMENTOS

//--------------------------------------------------------------------------------------
// 2️⃣ PARÁMETROS POR DEFECTO (ES6)
//--------------------------------------------------------------------------------------

// Forma moderna (ES6+)
function crearUsuario(nombre = "Anónimo", edad = 18) {
  return { nombre, edad };
}

console.log(crearUsuario()); // { nombre: 'Anónimo', edad: 18 }
console.log(crearUsuario("Ana")); // { nombre: 'Ana', edad: 18 }
console.log(crearUsuario("Ana", 25)); // { nombre: 'Ana', edad: 25 }

// Los valores por defecto pueden ser expresiones
function obtenerFecha(fecha = new Date()) {
  return fecha;
}

console.log(obtenerFecha()); // Fecha actual

// Valores por defecto basados en otros parámetros
function calcularPrecio(precio, impuesto = precio * 0.21) {
  return precio + impuesto;
}

console.log(calcularPrecio(100)); // 121 (100 + 21)
console.log(calcularPrecio(100, 10)); // 110 (100 + 10)

//--------------------------------------------------------------------------------------
// 3️⃣ PARÁMETROS REST (...args) - ES6
//--------------------------------------------------------------------------------------
// Captura un número indefinido de argumentos en un array

function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3)); // 6
console.log(sumar(1, 2, 3, 4, 5)); // 15

// Rest debe ser el ÚLTIMO parámetro
function registrarEvento(tipo, fecha, ...detalles) {
  console.log(`Tipo: ${tipo}`);
  console.log(`Fecha: ${fecha}`);
  console.log(`Detalles:`, detalles);
}

registrarEvento("click", "2024-12-20", "botón", "x: 100", "y: 200");
/*
Tipo: click
Fecha: 2024-12-20
Detalles: [ 'botón', 'x: 100', 'y: 200' ]
*/

//--------------------------------------------------------------------------------------
// 4️⃣ EL OBJETO ARGUMENTS (Legacy)
//--------------------------------------------------------------------------------------
// Objeto array-like disponible en funciones tradicionales

function mostrarArgumentos() {
  console.log(arguments); // No es un array real
  console.log(arguments.length);
  console.log(arguments[0]);

  // Convertir a array
  const args = Array.from(arguments);
  console.log(args);
}

mostrarArgumentos("a", "b", "c");
/*
[Arguments] { '0': 'a', '1': 'b', '2': 'c' }
3
a
[ 'a', 'b', 'c' ]
*/

// ⚠️ NO existe en arrow functions
const mostrarArgumentosFalla = () => {
  // console.log(arguments); // ReferenceError
};

// ✅ Solución moderna: usa rest parameters
const mostrarArgumentosModerno = (...args) => {
  console.log(args);
};

mostrarArgumentosModerno("a", "b", "c"); // [ 'a', 'b', 'c' ]

//--------------------------------------------------------------------------------------
// 5️⃣ DESESTRUCTURACIÓN EN PARÁMETROS
//--------------------------------------------------------------------------------------

// Desestructuración de objetos
function mostrarUsuario({ nombre, edad, ciudad = "Desconocida" }) {
  console.log(`${nombre}, ${edad} años, de ${ciudad}`);
}

const usuario = { nombre: "Ana", edad: 30, email: "ana@mail.com" };
mostrarUsuario(usuario); // Ana, 30 años, de Desconocida

// Desestructuración de arrays
function mostrarCoordenadas([x, y, z = 0]) {
  console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
}

mostrarCoordenadas([10, 20]); // X: 10, Y: 20, Z: 0
mostrarCoordenadas([10, 20, 30]); // X: 10, Y: 20, Z: 30

// Desestructuración anidada
function mostrarDatos({ nombre, direccion: { ciudad, pais } }) {
  console.log(`${nombre} vive en ${ciudad}, ${pais}`);
}

const persona = {
  nombre: "Carlos",
  direccion: {
    ciudad: "Madrid",
    pais: "España",
  },
};

mostrarDatos(persona); // Carlos vive en Madrid, España

//--------------------------------------------------------------------------------------
// 6️⃣ COMBINANDO REST Y DESESTRUCTURACIÓN
//--------------------------------------------------------------------------------------

function procesarPedido({ id, cliente, ...otrosDatos }) {
  console.log(`Pedido #${id} de ${cliente}`);
  console.log("Otros datos:", otrosDatos);
}

procesarPedido({
  id: 123,
  cliente: "Ana",
  producto: "Laptop",
  precio: 999,
  envio: "Express",
});
/*
Pedido #123 de Ana
Otros datos: { producto: 'Laptop', precio: 999, envio: 'Express' }
*/

//--------------------------------------------------------------------------------------
// 7️⃣ ORDEN DE LOS PARÁMETROS
//--------------------------------------------------------------------------------------

// ❌ MAL: rest no es el último
// function mal(a, ...rest, b) {} // SyntaxError

// ✅ BIEN: rest siempre al final
function bien(a, b, ...rest) {
  console.log(a, b, rest);
}

bien(1, 2, 3, 4, 5); // 1 2 [ 3, 4, 5 ]

//--------------------------------------------------------------------------------------
// 8️⃣ NÚMERO VARIABLE DE ARGUMENTOS
//--------------------------------------------------------------------------------------

// Caso 1: Función que acepta 1 o más argumentos
function max(...nums) {
  if (nums.length === 0) return undefined;
  return Math.max(...nums);
}

console.log(max(1, 5, 3, 9, 2)); // 9
console.log(max()); // undefined

// Caso 2: Función con mínimo de argumentos requeridos
function crearMensaje(titulo, ...lineas) {
  return `${titulo}\n${lineas.join("\n")}`;
}

console.log(crearMensaje("Aviso", "Línea 1", "Línea 2", "Línea 3"));
/*
Aviso
Línea 1
Línea 2
Línea 3
*/

//--------------------------------------------------------------------------------------
// 9️⃣ PARÁMETROS NOMBRADOS (Named Parameters Pattern)
//--------------------------------------------------------------------------------------

// ❌ Problema: Muchos parámetros opcionales
function crearUsuarioMal(nombre, edad, email, telefono, direccion, ciudad) {
  // Difícil recordar el orden
  // Si quiero omitir uno, debo pasar undefined
}

// ✅ Solución: Objeto de opciones
function crearUsuarioBien({
  nombre,
  edad,
  email,
  telefono,
  direccion,
  ciudad,
}) {
  return { nombre, edad, email, telefono, direccion, ciudad };
}

// Mucho más legible
const nuevoUsuario = crearUsuarioBien({
  nombre: "Ana",
  email: "ana@mail.com",
  edad: 25,
});

console.log(nuevoUsuario);

// Con valores por defecto
function configurar({
  titulo = "Sin título",
  ancho = 800,
  alto = 600,
  color = "black",
} = {}) {
  console.log(`${titulo}: ${ancho}x${alto}, color ${color}`);
}

configurar(); // Sin título: 800x600, color black
configurar({ titulo: "Mi App", color: "blue" }); // Mi App: 800x600, color blue

//--------------------------------------------------------------------------------------
// 🔟 VALIDACIÓN DE ARGUMENTOS
//--------------------------------------------------------------------------------------

// Patrón para requerir argumentos
function requerido(parametro) {
  throw new Error(`El parámetro ${parametro} es obligatorio`);
}

function registrar(nombre = requerido("nombre"), edad = requerido("edad")) {
  console.log(`${nombre}, ${edad} años`);
}

registrar("Ana", 25); // Ana, 25 años
// registrar("Ana"); // Error: El parámetro edad es obligatorio

// Validación de tipos
function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Ambos argumentos deben ser números");
  }
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

console.log(dividir(10, 2)); // 5
// console.log(dividir(10, 0)); // Error: No se puede dividir por cero
// console.log(dividir("10", 2)); // TypeError: Ambos argumentos deben ser números

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ ARGUMENTOS INMUTABLES
//--------------------------------------------------------------------------------------

// ⚠️ Los objetos y arrays se pasan por referencia
function modificarObjeto(obj) {
  obj.nombre = "Modificado"; // ¡Modifica el original!
}

const miObjeto = { nombre: "Original" };
modificarObjeto(miObjeto);
console.log(miObjeto.nombre); // "Modificado"

// ✅ Solución: Crear copia
function modificarObjetoSafe(obj) {
  const copia = { ...obj }; // Spread operator
  copia.nombre = "Modificado";
  return copia;
}

const miObjeto2 = { nombre: "Original" };
const resultado = modificarObjetoSafe(miObjeto2);
console.log(miObjeto2.nombre); // "Original"
console.log(resultado.nombre); // "Modificado"

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ CASOS PRÁCTICOS
//--------------------------------------------------------------------------------------

// Caso 1: Función de configuración flexible
function fetch(
  url,
  { method = "GET", headers = {}, body = null, timeout = 5000 } = {}
) {
  console.log(`Petición ${method} a ${url}`);
  console.log("Headers:", headers);
  console.log("Body:", body);
  console.log("Timeout:", timeout);
}

fetch("https://api.ejemplo.com/users");
fetch("https://api.ejemplo.com/users", {
  method: "POST",
  body: JSON.stringify({ nombre: "Ana" }),
});

// Caso 2: Constructor de HTML
function crearElemento(tag, { clase, id, texto, ...attrs } = {}) {
  let html = `<${tag}`;
  if (clase) html += ` class="${clase}"`;
  if (id) html += ` id="${id}"`;

  for (const [key, value] of Object.entries(attrs)) {
    html += ` ${key}="${value}"`;
  }

  html += `>${texto || ""}</${tag}>`;
  return html;
}

console.log(
  crearElemento("div", {
    clase: "container",
    id: "main",
    texto: "Contenido",
    "data-role": "principal",
  })
);
// <div class="container" id="main" data-role="principal">Contenido</div>

// Caso 3: Calculadora flexible
function calcular(operacion, ...numeros) {
  switch (operacion) {
    case "suma":
      return numeros.reduce((a, b) => a + b, 0);
    case "multiplicar":
      return numeros.reduce((a, b) => a * b, 1);
    case "promedio":
      return numeros.reduce((a, b) => a + b, 0) / numeros.length;
    default:
      throw new Error("Operación no válida");
  }
}

console.log(calcular("suma", 1, 2, 3, 4)); // 10
console.log(calcular("multiplicar", 2, 3, 4)); // 24
console.log(calcular("promedio", 10, 20, 30)); // 20

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ RESUMEN Y MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ MEJORES PRÁCTICAS:

1. Usa parámetros por defecto en lugar de || o comprobaciones manuales
2. Usa rest parameters (...args) en lugar de arguments
3. Usa desestructuración para funciones con muchos parámetros
4. Prefiere objetos para parámetros opcionales (named parameters)
5. Valida argumentos críticos al inicio de la función
6. No modifiques parámetros de entrada (inmutabilidad)
7. Ordena parámetros: requeridos → opcionales → rest
8. Mantén el número de parámetros bajo (idealmente ≤ 3)

❌ EVITAR:

1. Más de 3-4 parámetros posicionales
2. Modificar argumentos de entrada
3. Usar arguments en nuevo código
4. Parámetros booleanos (mejor: objetos de configuración)
5. Orden poco intuitivo de parámetros
*/

console.log(`
╔════════════════════════════════════════════════════════════════╗
║                   RESUMEN DE PARÁMETROS                        ║
╠════════════════════════════════════════════════════════════════╣
║ • Parámetros: Variables en la definición                      ║
║ • Argumentos: Valores al llamar                               ║
║ • Por defecto: param = valor                                  ║
║ • Rest: ...args (último parámetro)                            ║
║ • Desestructuración: { prop } o [item]                        ║
║ • Named parameters: Objeto de opciones                        ║
╚════════════════════════════════════════════════════════════════╝
`);
