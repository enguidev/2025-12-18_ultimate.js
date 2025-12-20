//--------------------------------------------------------------------------------------
// EJERCICIO: DESESTRUCTURACIÓN DE OBJETOS
//--------------------------------------------------------------------------------------

/*
🎯 La desestructuración permite extraer propiedades de objetos de forma elegante
   y asignarlas directamente a variables.
*/

//--------------------------------------------------------------------------------------
// CASO 1: Extracción básica
//--------------------------------------------------------------------------------------

const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  color: "gris",
};

// 1.- Extrae marca y modelo en variables individuales
const { marca, modelo } = coche;
/* 
El motor de JavaScript busca esas propiedades en el objeto 
coche y las asigna a las variables marca y modelo.
*/
console.log("Marca:", marca); // "Toyota"
console.log("Modelo:", modelo); // "Corolla"

//--------------------------------------------------------------------------------------
// CASO 2: Renombrar propiedades
//--------------------------------------------------------------------------------------

// 2.- Renombra color como colorExterior
const { color: colorExterior } = coche;
/*
La clave original (color) sigue viniendo del objeto, pero ahora 
la almacenamos con otro nombre para usarla como nos convenga.

Sintaxis: { propiedadOriginal: nuevoNombre }
*/
console.log("Color exterior:", colorExterior); // "gris"

//--------------------------------------------------------------------------------------
// CASO 3: Valores por defecto
//--------------------------------------------------------------------------------------

// 3.- Asigna un valor por defecto a combustible como "gasolina"
const { combustible = "gasolina" } = coche;
/*
- El objeto coche no tiene una propiedad combustible.
- Usamos el operador = dentro de la desestructuración para decir: 
  "si esta propiedad no existe, usa este valor por defecto".
- Es una manera elegante de manejar valores opcionales sin tener que hacer condicionales.
*/
console.log("Combustible:", combustible); // "gasolina"

//--------------------------------------------------------------------------------------
// CASO 4: Combinar renombrado con valor por defecto
//--------------------------------------------------------------------------------------

const { transmision: tipoTransmision = "manual" } = coche;
/*
Combinamos ambas técnicas:
  1. Renombramos 'transmision' a 'tipoTransmision'
  2. Si no existe, usamos "manual" como valor por defecto
*/
console.log("Tipo de transmisión:", tipoTransmision); // "manual"

//--------------------------------------------------------------------------------------
// CASO 5: Desestructuración anidada
//--------------------------------------------------------------------------------------

const persona = {
  nombre: "Carlos",
  edad: 30,
  direccion: {
    calle: "Gran Vía",
    numero: 123,
    ciudad: "Madrid",
    pais: "España",
  },
  contacto: {
    email: "carlos@example.com",
    telefono: "123456789",
  },
};

// Extraer propiedades anidadas
const {
  nombre,
  direccion: { ciudad, pais },
  contacto: { email },
} = persona;

console.log("Nombre:", nombre); // "Carlos"
console.log("Ciudad:", ciudad); // "Madrid"
console.log("País:", pais); // "España"
console.log("Email:", email); // "carlos@example.com"

// ⚠️ IMPORTANTE: 'direccion' y 'contacto' NO se crean como variables
// Solo se usan como ruta para acceder a las propiedades internas
// console.log(direccion); // ❌ Error: direccion is not defined

// Si quieres también el objeto completo:
const {
  direccion,
  direccion: { ciudad: miCiudad },
} = persona;

console.log("Dirección completa:", direccion);
console.log("Mi ciudad:", miCiudad);

//--------------------------------------------------------------------------------------
// CASO 6: Rest operator en objetos
//--------------------------------------------------------------------------------------

const producto = {
  id: 1,
  nombre: "Laptop",
  precio: 1200,
  stock: 10,
  categoria: "Electrónica",
  marca: "Dell",
};

// Extraer algunas propiedades y agrupar el resto
const { id, nombre, ...otrosDatos } = producto;

console.log("ID:", id); // 1
console.log("Nombre:", nombre); // "Laptop"
console.log("Otros datos:", otrosDatos);
/*
{
  precio: 1200,
  stock: 10,
  categoria: "Electrónica",
  marca: "Dell"
}
*/

//--------------------------------------------------------------------------------------
// CASO 7: Desestructuración en parámetros de función
//--------------------------------------------------------------------------------------

// En lugar de esto:
function mostrarCoche1(coche) {
  console.log(`${coche.marca} ${coche.modelo} (${coche.año})`);
}

// Podemos hacer esto:
function mostrarCoche2({ marca, modelo, año }) {
  console.log(`${marca} ${modelo} (${año})`);
}

mostrarCoche2(coche); // "Toyota Corolla (2020)"

// Con valores por defecto en parámetros
function crearUsuario({ nombre, rol = "usuario", activo = true }) {
  return {
    nombre,
    rol,
    activo,
    fechaCreacion: new Date(),
  };
}

console.log(crearUsuario({ nombre: "Ana" }));
// { nombre: "Ana", rol: "usuario", activo: true, fechaCreacion: ... }

console.log(crearUsuario({ nombre: "Luis", rol: "admin" }));
// { nombre: "Luis", rol: "admin", activo: true, fechaCreacion: ... }

//--------------------------------------------------------------------------------------
// CASO 8: Desestructuración con arrays dentro de objetos
//--------------------------------------------------------------------------------------

const usuario = {
  id: 123,
  nombre: "María",
  hobbies: ["leer", "correr", "viajar"],
  configuracion: {
    tema: "oscuro",
    idioma: "es",
    notificaciones: ["email", "push"],
  },
};

// Extraer primer hobby y primer tipo de notificación
const {
  nombre: nombreUsuario,
  hobbies: [primerHobby],
  configuracion: {
    notificaciones: [primeraNotificacion],
  },
} = usuario;

console.log("Usuario:", nombreUsuario); // "María"
console.log("Primer hobby:", primerHobby); // "leer"
console.log("Primera notificación:", primeraNotificacion); // "email"

//--------------------------------------------------------------------------------------
// CASO 9: Desestructuración de propiedades calculadas
//--------------------------------------------------------------------------------------

const campo = "nombre";
const valores = {
  nombre: "Pedro",
  edad: 25,
  ciudad: "Barcelona",
};

// Usar una variable como nombre de propiedad
const { [campo]: valorDinamico } = valores;
console.log("Valor dinámico:", valorDinamico); // "Pedro"

//--------------------------------------------------------------------------------------
// CASO 10: Evitar errores con objetos undefined/null
//--------------------------------------------------------------------------------------

const datos = {
  usuario: {
    nombre: "Ana",
  },
};

// ❌ Esto daría error si 'usuario' no existe
// const { usuario: { nombre: nombreUsuario } } = datos;

// ✅ SOLUCIÓN 1: Valor por defecto para el objeto
const datos2 = {};
const { usuario: { nombre: nombreUsuario2 } = {} } = datos2;
console.log(nombreUsuario2); // undefined (no da error)

// ✅ SOLUCIÓN 2: Optional chaining + desestructuración
const datos3 = null;
const nombreUsuario3 = datos3?.usuario?.nombre;
console.log(nombreUsuario3); // undefined

//--------------------------------------------------------------------------------------
// 🎯 COMPARATIVA: Con y sin desestructuración
//--------------------------------------------------------------------------------------

const empleado = {
  nombre: "Carlos",
  apellido: "García",
  edad: 35,
  puesto: "Desarrollador",
  departamento: "IT",
};

// ❌ SIN desestructuración (repetitivo)
function mostrarEmpleadoSin(emp) {
  console.log("Nombre:", emp.nombre);
  console.log("Apellido:", emp.apellido);
  console.log("Edad:", emp.edad);
  console.log("Puesto:", emp.puesto);
}

// ✅ CON desestructuración (limpio)
function mostrarEmpleadoCon({ nombre, apellido, edad, puesto }) {
  console.log("Nombre:", nombre);
  console.log("Apellido:", apellido);
  console.log("Edad:", edad);
  console.log("Puesto:", puesto);
}

//--------------------------------------------------------------------------------------
// 🧪 EJERCICIOS PROPUESTOS
//--------------------------------------------------------------------------------------

/*
1. Dado este objeto, extrae todas las propiedades relevantes:
*/
const libro = {
  titulo: "El Quijote",
  autor: {
    nombre: "Miguel",
    apellido: "de Cervantes",
    nacionalidad: "Española",
  },
  editorial: {
    nombre: "Editorial ABC",
    ciudad: "Madrid",
  },
  año: 1605,
  paginas: 863,
};

// Tu código aquí: extrae titulo, nombre del autor, ciudad de la editorial

/*
2. Crea una función que reciba un objeto de configuración y devuelva
   un mensaje personalizado. Usa valores por defecto.
*/
function generarMensaje({
  saludo = "Hola",
  nombre,
  despedida = "Hasta luego",
}) {
  // Completa esta función
}

/*
3. Dado un array de objetos de productos, usa desestructuración
   para extraer solo nombre y precio de cada producto
*/
const productos = [
  { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
  { id: 2, nombre: "Mouse", precio: 25, stock: 50 },
  { id: 3, nombre: "Teclado", precio: 80, stock: 30 },
];

// Tu código aquí: usa map con desestructuración

//--------------------------------------------------------------------------------------
// 💡 SOLUCIONES A LOS EJERCICIOS
//--------------------------------------------------------------------------------------

// Solución 1:
const {
  titulo: tituloLibro,
  autor: { nombre: nombreAutor, apellido: apellidoAutor },
  editorial: { ciudad: ciudadEditorial },
  año,
  paginas,
} = libro;

console.log("\n--- Solución Ejercicio 1 ---");
console.log("Título:", tituloLibro);
console.log("Autor:", nombreAutor, apellidoAutor);
console.log("Ciudad:", ciudadEditorial);
console.log("Año:", año);
console.log("Páginas:", paginas);

// Solución 2:
function generarMensajeCompleto({
  saludo = "Hola",
  nombre,
  despedida = "Hasta luego",
}) {
  return `${saludo}, ${nombre}. ${despedida}!`;
}

console.log("\n--- Solución Ejercicio 2 ---");
console.log(generarMensajeCompleto({ nombre: "Ana" }));
console.log(
  generarMensajeCompleto({
    saludo: "Buenos días",
    nombre: "Carlos",
    despedida: "Nos vemos",
  })
);

// Solución 3:
const productosSimplificados = productos.map(({ nombre, precio }) => ({
  nombre,
  precio,
}));

console.log("\n--- Solución Ejercicio 3 ---");
console.log(productosSimplificados);
/*
[
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 80 }
]
*/

//--------------------------------------------------------------------------------------
// 📊 TABLA RESUMEN
//--------------------------------------------------------------------------------------

/*
┌─────────────────────────┬───────────────────────────────────────────┐
│ Técnica                 │ Ejemplo                                   │
├─────────────────────────┼───────────────────────────────────────────┤
│ Básica                  │ const { x, y } = obj                      │
│ Renombrar               │ const { x: nuevoNombre } = obj            │
│ Valor por defecto       │ const { x = 10 } = obj                    │
│ Ambos                   │ const { x: y = 10 } = obj                 │
│ Anidada                 │ const { a: { b } } = obj                  │
│ Rest                    │ const { x, ...resto } = obj               │
│ En parámetros           │ function fn({ x, y }) { }                 │
│ Propiedad calculada     │ const { [key]: valor } = obj              │
└─────────────────────────┴───────────────────────────────────────────┘
*/

console.log("\n✅ Ejercicio de desestructuración completado");
