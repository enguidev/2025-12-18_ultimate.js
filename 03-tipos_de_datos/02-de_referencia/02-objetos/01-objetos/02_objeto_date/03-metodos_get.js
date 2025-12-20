// ================================
// 03 - MÉTODOS GET (OBTENER)
// ================================

// Fecha de ejemplo: Lunes 15 de Enero 2024, 14:30:45.500
const fecha = new Date(2024, 0, 15, 14, 30, 45, 500);

console.log("=== FECHA DE EJEMPLO ===");
console.log(fecha.toString());
console.log("");

console.log("=== COMPONENTES DE FECHA ===\n");

// 📅 getFullYear() - Año completo (4 dígitos)
console.log("getFullYear():", fecha.getFullYear()); // 2024
console.log("  → Siempre usar getFullYear(), NO getYear() (obsoleto)");

// 📅 getMonth() - Mes (0-11)
console.log("\ngetMonth():", fecha.getMonth()); // 0
console.log("  → 0=enero, 1=febrero, ..., 11=diciembre");
console.log("  → Para mostrar: mes + 1 =", fecha.getMonth() + 1);

// Arrays helper para nombres
const MESES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
console.log("  → Nombre del mes:", MESES[fecha.getMonth()]);

// 📅 getDate() - Día del mes (1-31)
console.log("\ngetDate():", fecha.getDate()); // 15
console.log("  → Día del mes, de 1 a 31");

// 📅 getDay() - Día de la semana (0-6)
console.log("\ngetDay():", fecha.getDay()); // 1
console.log("  → 0=domingo, 1=lunes, ..., 6=sábado");

const DIAS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
console.log("  → Nombre del día:", DIAS[fecha.getDay()]);

console.log("\n⚠️ CONFUSIÓN COMÚN:");
console.log("  getDate() = día del mes (15)");
console.log("  getDay() = día de la semana (1=lunes)");

console.log("\n=== COMPONENTES DE HORA ===\n");

// ⏰ getHours() - Horas (0-23)
console.log("getHours():", fecha.getHours()); // 14
console.log("  → Formato 24 horas (0-23)");
console.log(
  "  → Formato 12h:",
  fecha.getHours() % 12 || 12,
  fecha.getHours() >= 12 ? "PM" : "AM"
);

// ⏰ getMinutes() - Minutos (0-59)
console.log("\ngetMinutes():", fecha.getMinutes()); // 30

// ⏰ getSeconds() - Segundos (0-59)
console.log("\ngetSeconds():", fecha.getSeconds()); // 45

// ⏰ getMilliseconds() - Milisegundos (0-999)
console.log("\ngetMilliseconds():", fecha.getMilliseconds()); // 500

console.log("\n=== TIMESTAMP ===\n");

// 🔢 getTime() - Milisegundos desde 1/1/1970
console.log("getTime():", fecha.getTime());
console.log("  → Milisegundos desde Unix Epoch (1 enero 1970)");
console.log("  → Útil para calcular diferencias entre fechas");

// valueOf() - Igual que getTime()
console.log("\nvalueOf():", fecha.valueOf());
console.log("  → Igual que getTime()");

console.log("\n=== MÉTODOS UTC ===\n");

// Todos los métodos tienen versión UTC
const fechaLocal = new Date();
console.log("Hora local:", fechaLocal.getHours());
console.log("Hora UTC:", fechaLocal.getUTCHours());
console.log("");

console.log("getUTCFullYear():", fecha.getUTCFullYear());
console.log("getUTCMonth():", fecha.getUTCMonth());
console.log("getUTCDate():", fecha.getUTCDate());
console.log("getUTCDay():", fecha.getUTCDay());
console.log("getUTCHours():", fecha.getUTCHours());
console.log("getUTCMinutes():", fecha.getUTCMinutes());
console.log("getUTCSeconds():", fecha.getUTCSeconds());
console.log("getUTCMilliseconds():", fecha.getUTCMilliseconds());

console.log("\n=== ZONA HORARIA ===\n");

// getTimezoneOffset() - Diferencia con UTC en MINUTOS
const offset = fechaLocal.getTimezoneOffset();
console.log("getTimezoneOffset():", offset, "minutos");
console.log("  → Diferencia entre hora local y UTC");
console.log("  → Valor negativo = adelantado a UTC");
console.log("  → Valor positivo = atrasado a UTC");
console.log("  → En horas:", offset / 60);

console.log("\n=== EJEMPLO PRÁCTICO: FORMATEAR FECHA ===\n");

function formatearFecha(fecha) {
  const dia = String(fecha.getDate()).padStart(2, "0");
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const año = fecha.getFullYear();
  const horas = String(fecha.getHours()).padStart(2, "0");
  const minutos = String(fecha.getMinutes()).padStart(2, "0");
  const segundos = String(fecha.getSeconds()).padStart(2, "0");

  return `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
}

console.log("Formato personalizado:", formatearFecha(fecha));

console.log("\n=== EJEMPLO: EXTRAER COMPONENTES ===\n");

function analizarFecha(f) {
  return {
    año: f.getFullYear(),
    mes: f.getMonth() + 1,
    mesNombre: MESES[f.getMonth()],
    dia: f.getDate(),
    diaSemana: f.getDay(),
    diaSemaNombre: DIAS[f.getDay()],
    hora: f.getHours(),
    minuto: f.getMinutes(),
    segundo: f.getSeconds(),
    timestamp: f.getTime(),
  };
}

console.table(analizarFecha(fecha));

console.log("\n=== TABLA RESUMEN ===\n");

const resumen = {
  "getFullYear()": {
    Valor: fecha.getFullYear(),
    Rango: "Cualquiera",
    Nota: "Año completo",
  },
  "getMonth()": { Valor: fecha.getMonth(), Rango: "0-11", Nota: "0=enero" },
  "getDate()": { Valor: fecha.getDate(), Rango: "1-31", Nota: "Día del mes" },
  "getDay()": { Valor: fecha.getDay(), Rango: "0-6", Nota: "0=domingo" },
  "getHours()": { Valor: fecha.getHours(), Rango: "0-23", Nota: "Formato 24h" },
  "getMinutes()": { Valor: fecha.getMinutes(), Rango: "0-59", Nota: "Minutos" },
  "getSeconds()": {
    Valor: fecha.getSeconds(),
    Rango: "0-59",
    Nota: "Segundos",
  },
  "getMilliseconds()": {
    Valor: fecha.getMilliseconds(),
    Rango: "0-999",
    Nota: "Milisegundos",
  },
};

console.table(resumen);

console.log("\n=== RECORDATORIOS ===");
console.log("✅ getMonth() devuelve 0-11, sumar 1 para mostrar");
console.log("✅ getDay() devuelve día de semana (0=domingo)");
console.log("✅ getDate() devuelve día del mes (1-31)");
console.log("✅ Usar arrays para convertir números a nombres");
console.log("✅ Todos los get tienen versión UTC");
