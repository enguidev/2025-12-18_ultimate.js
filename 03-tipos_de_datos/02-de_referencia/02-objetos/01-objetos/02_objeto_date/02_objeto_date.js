// ================================
// 02 - OBJETO DATE EN JAVASCRIPT
// ================================

console.log("=== CREACIÓN DE FECHAS ===\n");

// 1. Fecha actual
const ahora = new Date();
console.log("Fecha actual:", ahora);

// 2. Fecha específica (año, mes, día, hora, minuto, segundo, milisegundo)
// IMPORTANTE: Los meses van de 0-11 (0=enero, 11=diciembre)
const navidad2024 = new Date(2024, 11, 25, 0, 0, 0);
console.log("Navidad 2024:", navidad2024);

// 3. Fecha desde string
const fechaString = new Date("2024-06-15");
console.log("Desde string:", fechaString);

// 4. Fecha desde timestamp (milisegundos desde 1/1/1970)
const fechaTimestamp = new Date(1609459200000);
console.log("Desde timestamp:", fechaTimestamp);

// 5. Sin parámetros = fecha y hora actual
let fechaActual = new Date();
console.log("\n=== MOSTRANDO OBJETO FECHA ===");
console.log(fechaActual.toString());

// 6. Creando fecha específica del ejemplo del profe
let fecha = new Date(2020, 5, 10, 9);
console.log("\nFecha del ejemplo:", fecha);

// Con dir, vemos el prototipo y todos los métodos heredados
console.log("\n=== EXPLORANDO PROTOTIPO ===");
console.dir(fecha);

console.log("\n=== MÉTODOS GET (OBTENER) ===\n");

// Obtenemos componentes con métodos get
console.log("Año: " + fecha.getFullYear()); // 2020
console.log("Mes: " + fecha.getMonth()); // 5 (junio)
console.log("Día del mes: " + fecha.getDate()); // 10
console.log("Día de la semana: " + fecha.getDay()); // 3 (miércoles, 0=domingo)
console.log("Horas: " + fecha.getHours()); // 9
console.log("Minutos: " + fecha.getMinutes()); // 0
console.log("Segundos: " + fecha.getSeconds()); // 0

console.log("\n=== MÉTODOS SET (MODIFICAR) ===\n");

// Modificamos con métodos set
fecha.setHours(4);
console.log("Hora modificada: " + fecha.getHours()); // 4

console.log("\n=== TIMESTAMP ===\n");

/* Internamente la variable almacena los milisegundos 
   que han pasado desde 1 enero 1970 (Unix Epoch)
*/
console.log("Timestamp (ms desde 1970):", fecha.getTime());
console.log("Timestamp actual:", Date.now());

console.log("\n=== UTC vs LOCAL ===\n");

// Métodos UTC (hora universal) vs hora local
console.log("Hora UTC:", fechaActual.getUTCHours());
console.log("Hora Local:", fechaActual.getHours());
console.log("Diferencia horaria (minutos):", fechaActual.getTimezoneOffset());

console.log("\n=== CALCULAR DIFERENCIA ENTRE FECHAS ===\n");

/* Para ver la diferencia entre 2 fechas,
   restamos directamente (internamente resta timestamps)
*/
let diferencia = fechaActual - fecha;
console.log("Diferencia en milisegundos:", diferencia);

// Conversiones útiles
console.log("Diferencia en segundos:", Math.floor(diferencia / 1000));
console.log("Diferencia en minutos:", Math.floor(diferencia / (1000 * 60)));
console.log("Diferencia en horas:", Math.floor(diferencia / (1000 * 60 * 60)));
console.log(
  "Diferencia en días:",
  Math.floor(diferencia / (1000 * 60 * 60 * 24))
);

console.log("\n=== FORMATO DE FECHAS ===\n");

/* toLocaleDateString() muestra la fecha en formato local
   En España: dd/mm/YYYY
*/
console.log("Formato local:", fechaActual.toLocaleDateString());
console.log("Formato local completo:", fechaActual.toLocaleString());

// Construyendo formato manualmente (CORREGIDO del original)
console.log(
  "Formato manual:",
  fechaActual.getDate() +
    "/" +
    (fechaActual.getMonth() + 1) +
    "/" +
    fechaActual.getFullYear()
);

console.log("\n=== OTROS FORMATOS ÚTILES ===\n");

console.log("toString():", fechaActual.toString());
console.log("toDateString():", fechaActual.toDateString());
console.log("toTimeString():", fechaActual.toTimeString());
console.log("toISOString():", fechaActual.toISOString());
console.log("toJSON():", fechaActual.toJSON());

console.log("\n=== EJEMPLO PRÁCTICO: DÍAS HASTA NAVIDAD ===\n");

const hoy = new Date();
const navidad = new Date(hoy.getFullYear(), 11, 25);

// Si ya pasó la navidad de este año, calculamos para el próximo
if (hoy > navidad) {
  navidad.setFullYear(navidad.getFullYear() + 1);
}

const diasHastaNavidad = Math.ceil((navidad - hoy) / (1000 * 60 * 60 * 24));
console.log(`Faltan ${diasHastaNavidad} días para Navidad 🎄`);

console.log("\n=== RECORDATORIOS IMPORTANTES ===\n");
console.log("⚠️ Los meses empiezan en 0: enero=0, diciembre=11");
console.log("⚠️ getDay() devuelve día de la semana: domingo=0, sábado=6");
console.log("⚠️ getDate() devuelve día del mes: 1-31");
console.log("⚠️ Las fechas son MUTABLES, ¡cuidado al modificar!");
console.log("✅ Para copiar una fecha: new Date(fecha.getTime())");

console.log("\n=== FIN DEL EJEMPLO ===");
