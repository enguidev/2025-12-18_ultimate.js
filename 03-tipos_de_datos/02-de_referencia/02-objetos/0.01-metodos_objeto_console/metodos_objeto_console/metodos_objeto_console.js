//--------------------------------------------------------------------------------------
// MÉTODOS DEL OBJETO CONSOLE - Guía Completa
//--------------------------------------------------------------------------------------

/*
🎯 El objeto console proporciona métodos para depurar y mostrar información
   en la consola del navegador o entorno de ejecución.
*/

//--------------------------------------------------------------------------------------
// 1. MÉTODOS BÁSICOS PARA MOSTRAR INFORMACIÓN
//--------------------------------------------------------------------------------------

console.log("Mensaje normal");
// Uso: Mensajes generales, debugging básico

console.info("Información importante");
// Uso: Similar a log, pero semánticamente para información relevante

console.warn("⚠️ Advertencia");
// Uso: Advertencias (color amarillo en consola)

console.error("❌ Error grave");
// Uso: Errores (color rojo en consola)

console.debug("🐛 Mensaje de depuración");
// Uso: Mensajes de depuración (puede estar oculto por defecto según configuración)

//--------------------------------------------------------------------------------------
// 2. MÉTODOS PARA INSPECCIÓN DE OBJETOS
//--------------------------------------------------------------------------------------

const persona = { nombre: "Carlos", edad: 30, activo: true, ciudad: "Madrid" };

// dir() - Muestra la estructura del objeto como árbol desplegable
console.dir(persona);
/*
{
  nombre: "Carlos",
  edad: 30,
  activo: true,
  ciudad: "Madrid"
}
*/

// table() - Muestra arrays u objetos como tabla (MUY ÚTIL para arrays de objetos)
const usuarios = [
  { nombre: "Carlos", edad: 30, ciudad: "Madrid" },
  { nombre: "Ana", edad: 25, ciudad: "Barcelona" },
  { nombre: "Luis", edad: 35, ciudad: "Valencia" },
];
console.table(usuarios);
/*
┌─────────┬──────────┬──────┬────────────┐
│ (index) │  nombre  │ edad │   ciudad   │
├─────────┼──────────┼──────┼────────────┤
│    0    │ 'Carlos' │  30  │  'Madrid'  │
│    1    │  'Ana'   │  25  │'Barcelona' │
│    2    │  'Luis'  │  35  │ 'Valencia' │
└─────────┴──────────┴──────┴────────────┘
*/

// También puedes limitar las columnas que se muestran
console.table(usuarios, ["nombre", "edad"]); // Solo muestra nombre y edad

//--------------------------------------------------------------------------------------
// 3. MÉTODOS PARA AGRUPAR MENSAJES
//--------------------------------------------------------------------------------------

// group() - Agrupa mensajes en bloque desplegable
console.group("📁 Grupo de mensajes");
console.log("Mensaje 1 dentro del grupo");
console.log("Mensaje 2 dentro del grupo");
console.warn("Advertencia dentro del grupo");
console.groupEnd(); // ⚠️ Importante: Siempre cerrar con groupEnd()

// groupCollapsed() - Igual que group(), pero colapsado por defecto
console.groupCollapsed("📁 Grupo colapsado");
console.log("Este mensaje está oculto hasta que expandas el grupo");
console.log("Útil para no saturar la consola");
console.groupEnd();

// Grupos anidados
console.group("📂 Grupo principal");
console.log("Mensaje en grupo principal");
console.group("📁 Subgrupo");
console.log("Mensaje en subgrupo");
console.groupEnd();
console.log("Vuelta al grupo principal");
console.groupEnd();

//--------------------------------------------------------------------------------------
// 4. MÉTODOS PARA MEDIR TIEMPO Y RENDIMIENTO
//--------------------------------------------------------------------------------------

// time() / timeLog() / timeEnd() - Temporizador con etiqueta
console.time("⏱️ Tiempo de carga");

// Simulamos una tarea que tarda tiempo
for (let i = 0; i < 1000000; i++) {
  // Operación costosa
}

console.timeLog("⏱️ Tiempo de carga"); // Muestra tiempo actual sin finalizar
// Más código...
for (let i = 0; i < 1000000; i++) {}

console.timeEnd("⏱️ Tiempo de carga"); // Finaliza y muestra duración total

// Alternativa con performance.now() para mayor precisión
const inicio = performance.now();
for (let i = 0; i < 1000000; i++) {
  // Operación
}
const fin = performance.now();
console.log(`⏱️ Tiempo de ejecución: ${(fin - inicio).toFixed(3)} ms`);

//--------------------------------------------------------------------------------------
// 5. MÉTODOS PARA CONTAR Y VERIFICAR
//--------------------------------------------------------------------------------------

// count() - Cuenta cuántas veces se llama con esa etiqueta
console.count("🔢 Repetición"); // Repetición: 1
console.count("🔢 Repetición"); // Repetición: 2
console.count("🔢 Repetición"); // Repetición: 3

// countReset() - Reinicia el contador
console.countReset("🔢 Repetición");
console.count("🔢 Repetición"); // Repetición: 1 (reiniciado)

// Ejemplo práctico: contar llamadas a una función
function procesarDatos(datos) {
  console.count("procesarDatos llamada");
  // ... lógica
}
procesarDatos([1, 2, 3]);
procesarDatos([4, 5, 6]);
procesarDatos([7, 8, 9]);

// assert() - Muestra error SOLO si la condición es falsa
const edad2 = 17;
console.assert(edad2 >= 18, "❌ Error: No eres mayor de edad");
// Si edad2 fuera >= 18, no mostraría nada

const usuario = { nombre: "Ana", rol: "admin" };
console.assert(usuario.rol === "admin", "Usuario no es administrador");
// No muestra nada porque la condición es verdadera

//--------------------------------------------------------------------------------------
// 6. MÉTODO PARA LIMPIAR LA CONSOLA
//--------------------------------------------------------------------------------------

// clear() - Limpia la consola (⚠️ descomenta para probar)
// console.clear();

//--------------------------------------------------------------------------------------
// 7. MÉTODO PARA MOSTRAR STACK TRACE
//--------------------------------------------------------------------------------------

// trace() - Muestra la pila de llamadas (stack trace)
function funcion1() {
  funcion2();
}

function funcion2() {
  funcion3();
}

function funcion3() {
  console.trace("📍 Stack trace desde aquí");
}

funcion1();
/*
Muestra algo como:
📍 Stack trace desde aquí
    funcion3 @ script.js:123
    funcion2 @ script.js:119
    funcion1 @ script.js:115
    (anonymous) @ script.js:127
*/

//--------------------------------------------------------------------------------------
// 8. FORMATO Y ESTILOS EN CONSOLE.LOG (AVANZADO)
//--------------------------------------------------------------------------------------

// Usando %c para aplicar estilos CSS
console.log(
  "%c¡Mensaje con estilo!",
  "color: white; background-color: blue; font-size: 20px; padding: 10px; border-radius: 5px;"
);

// Múltiples estilos en un mismo mensaje
console.log(
  "%cERROR%c El usuario no existe",
  "color: white; background-color: red; padding: 2px 5px; border-radius: 3px;",
  "color: red; font-weight: bold;"
);

// Placeholders útiles
const nombre = "Carlos";
const edad = 30;
console.log("Usuario: %s, Edad: %d", nombre, edad); // %s=string, %d=número

//--------------------------------------------------------------------------------------
// 9. CASOS DE USO PRÁCTICOS
//--------------------------------------------------------------------------------------

// Caso 1: Debugging de API
console.group("🌐 API Request");
console.log("URL:", "https://api.ejemplo.com/usuarios");
console.log("Método:", "GET");
console.time("⏱️ Duración petición");
// ... hacer fetch
console.timeEnd("⏱️ Duración petición");
console.table([
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
]);
console.groupEnd();

// Caso 2: Validación de datos
function validarUsuario(usuario) {
  console.group("✅ Validación de usuario");
  console.assert(usuario.nombre, "❌ Falta el nombre");
  console.assert(usuario.email, "❌ Falta el email");
  console.assert(usuario.edad >= 18, "❌ Debe ser mayor de edad");
  console.groupEnd();
}

validarUsuario({ nombre: "Carlos", email: "carlos@example.com", edad: 30 });

// Caso 3: Performance de funciones
function calcularFactorial(n) {
  console.time(`Factorial de ${n}`);
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  console.timeEnd(`Factorial de ${n}`);
  return resultado;
}

calcularFactorial(1000);

// Caso 4: Seguimiento de iteraciones
const productos = ["Laptop", "Mouse", "Teclado"];
console.group("🔄 Procesando productos");
productos.forEach((producto, index) => {
  console.count("Producto procesado");
  console.log(`${index + 1}. ${producto}`);
});
console.groupEnd();

//--------------------------------------------------------------------------------------
// 10. TABLA RESUMEN DE MÉTODOS
//--------------------------------------------------------------------------------------
/*
┌─────────────────┬────────────────────────────────────────────────────────┐
│ Método          │ Uso principal                                          │
├─────────────────┼────────────────────────────────────────────────────────┤
│ log()           │ Mensajes generales                                     │
│ info()          │ Información importante                                 │
│ warn()          │ Advertencias                                           │
│ error()         │ Errores                                                │
│ debug()         │ Mensajes de depuración                                 │
├─────────────────┼────────────────────────────────────────────────────────┤
│ dir()           │ Inspeccionar objetos                                   │
│ table()         │ Mostrar datos en tabla                                 │
├─────────────────┼────────────────────────────────────────────────────────┤
│ group()         │ Agrupar mensajes                                       │
│ groupCollapsed()│ Agrupar (colapsado)                                    │
│ groupEnd()      │ Cerrar grupo                                           │
├─────────────────┼────────────────────────────────────────────────────────┤
│ time()          │ Iniciar temporizador                                   │
│ timeLog()       │ Tiempo intermedio                                      │
│ timeEnd()       │ Finalizar temporizador                                 │
├─────────────────┼────────────────────────────────────────────────────────┤
│ count()         │ Contar llamadas                                        │
│ countReset()    │ Reiniciar contador                                     │
│ assert()        │ Verificar condiciones                                  │
├─────────────────┼────────────────────────────────────────────────────────┤
│ clear()         │ Limpiar consola                                        │
│ trace()         │ Mostrar stack trace                                    │
└─────────────────┴────────────────────────────────────────────────────────┘
*/

//--------------------------------------------------------------------------------------
// 💡 CONSEJOS Y BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------
/*
✅ BUENAS PRÁCTICAS:
  1. Usa console.table() para arrays de objetos (muy visual)
  2. Agrupa mensajes relacionados con group() para mantener orden
  3. Usa time() para medir rendimiento de código crítico
  4. Usa assert() para validaciones en desarrollo
  5. Quita los console.log() en producción (o usa herramientas como webpack)

⚠️ EVITA:
  1. Dejar console.log() en código de producción
  2. No cerrar grupos (siempre usa groupEnd())
  3. Usar console.log() para manejar errores reales (usa try/catch)
  4. Saturar la consola con demasiados mensajes

🎯 PARA PRODUCCIÓN:
  - Considera usar librerías de logging como Winston o Pino
  - Configura webpack para eliminar console.log() automáticamente
  - Usa herramientas de monitoring como Sentry o LogRocket
*/


