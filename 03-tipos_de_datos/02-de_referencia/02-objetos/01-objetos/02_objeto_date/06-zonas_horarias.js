// ================================
// 06 - ZONAS HORARIAS
// ================================

console.log("=== DIFERENCIA UTC vs LOCAL ===\n");

const ahora = new Date();

console.log("📍 HORA LOCAL:");
console.log("  Completa:", ahora.toString());
console.log("  Año:", ahora.getFullYear());
console.log("  Mes:", ahora.getMonth());
console.log("  Día:", ahora.getDate());
console.log("  Hora:", ahora.getHours());
console.log("  Minutos:", ahora.getMinutes());

console.log("\n🌍 HORA UTC:");
console.log("  Año UTC:", ahora.getUTCFullYear());
console.log("  Mes UTC:", ahora.getUTCMonth());
console.log("  Día UTC:", ahora.getUTCDate());
console.log("  Hora UTC:", ahora.getUTCHours());
console.log("  Minutos UTC:", ahora.getUTCMinutes());

console.log("\n=== TIMEZONE OFFSET ===\n");

// getTimezoneOffset() devuelve la diferencia en MINUTOS
const offset = ahora.getTimezoneOffset();
console.log("getTimezoneOffset():", offset, "minutos");
console.log("En horas:", offset / 60);

// ⚠️ IMPORTANTE: El offset es NEGATIVO si estás adelantado a UTC
// España (UTC+1 en invierno): offset = -60
// España (UTC+2 en verano): offset = -120
// Nueva York (UTC-5): offset = 300

if (offset < 0) {
  console.log(`Estás ${Math.abs(offset / 60)} horas ADELANTADO a UTC`);
} else if (offset > 0) {
  console.log(`Estás ${offset / 60} horas ATRASADO respecto a UTC`);
} else {
  console.log("Estás en UTC (GMT)");
}

console.log("\n=== CREAR FECHAS EN UTC ===\n");

// Date.UTC() crea un timestamp en UTC (NO un objeto Date)
const utcTimestamp = Date.UTC(2024, 0, 15, 12, 0, 0);
console.log("Date.UTC(2024, 0, 15, 12, 0, 0):", utcTimestamp);

// Convertir a Date
const fechaUTC = new Date(utcTimestamp);
console.log("Como Date:", fechaUTC.toString());
console.log("Hora local:", fechaUTC.getHours());
console.log("Hora UTC:", fechaUTC.getUTCHours());

console.log("\n=== FECHAS ISO (SIEMPRE UTC) ===\n");

// Strings ISO con Z al final son UTC
const fechaISOZ = new Date("2024-01-15T12:00:00Z");
console.log("'2024-01-15T12:00:00Z':");
console.log("  toString():", fechaISOZ.toString());
console.log("  Hora local:", fechaISOZ.getHours());
console.log("  Hora UTC:", fechaISOZ.getUTCHours());

// Sin Z, se interpreta como hora local
const fechaISOLocal = new Date("2024-01-15T12:00:00");
console.log("\n'2024-01-15T12:00:00' (sin Z):");
console.log("  toString():", fechaISOLocal.toString());
console.log("  Hora local:", fechaISOLocal.getHours());
console.log("  Hora UTC:", fechaISOLocal.getUTCHours());

console.log("\n=== CONVERTIR ENTRE UTC Y LOCAL ===\n");

// De local a UTC
const fechaLocal = new Date(2024, 0, 15, 14, 30);
console.log("Fecha local:", fechaLocal.toString());
console.log("Como ISO (UTC):", fechaLocal.toISOString());

// De UTC a local (automático al crear Date)
const timestampUTC = Date.UTC(2024, 0, 15, 14, 30);
const fechaDesdeUTC = new Date(timestampUTC);
console.log("\nDesde UTC:", fechaDesdeUTC.toString());

console.log("\n=== MÉTODOS SET EN UTC ===\n");

const fecha = new Date();
console.log("Fecha original:", fecha.toString());

// Modificar en UTC
fecha.setUTCHours(12, 0, 0, 0);
console.log("Después de setUTCHours(12):", fecha.toString());
console.log("  Hora local:", fecha.getHours());
console.log("  Hora UTC:", fecha.getUTCHours());

console.log("\n=== INTL.DATETIMEFORMAT (ZONAS PERSONALIZADAS) ===\n");

const fechaEjemplo = new Date(2024, 0, 15, 14, 30);

// Diferentes zonas horarias
const zonas = [
  "Europe/Madrid",
  "America/New_York",
  "Asia/Tokyo",
  "America/Los_Angeles",
  "Europe/London",
  "Australia/Sydney",
];

zonas.forEach((zona) => {
  const formatter = new Intl.DateTimeFormat("es-ES", {
    timeZone: zona,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });
  console.log(`${zona}:`, formatter.format(fechaEjemplo));
});

console.log("\n=== OBTENER ZONA HORARIA DEL SISTEMA ===\n");

const zonaHoraria = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log("Tu zona horaria:", zonaHoraria);

console.log("\n=== TRABAJAR CON MEDIANOCHE UTC ===\n");

// Medianoche UTC (00:00)
function medianochteUTC(fecha) {
  return new Date(
    Date.UTC(
      fecha.getUTCFullYear(),
      fecha.getUTCMonth(),
      fecha.getUTCDate(),
      0,
      0,
      0,
      0
    )
  );
}

// Medianoche local
function medianocheLocal(fecha) {
  const resultado = new Date(fecha);
  resultado.setHours(0, 0, 0, 0);
  return resultado;
}

const hoy = new Date();
console.log("Ahora:", hoy.toString());
console.log("Medianoche local:", medianocheLocal(hoy).toString());
console.log("Medianoche UTC:", medianochteUTC(hoy).toString());

console.log("\n=== COMPARAR FECHAS IGNORANDO ZONA HORARIA ===\n");

function sonMismoDiaUTC(fecha1, fecha2) {
  return (
    fecha1.getUTCFullYear() === fecha2.getUTCFullYear() &&
    fecha1.getUTCMonth() === fecha2.getUTCMonth() &&
    fecha1.getUTCDate() === fecha2.getUTCDate()
  );
}

const fecha1 = new Date("2024-01-15T23:00:00Z");
const fecha2 = new Date("2024-01-16T01:00:00+02:00");

console.log("Fecha 1:", fecha1.toISOString());
console.log("Fecha 2:", fecha2.toISOString());
console.log("¿Mismo día UTC?", sonMismoDiaUTC(fecha1, fecha2));

console.log("\n=== HORARIO DE VERANO (DST) ===\n");

// El horario de verano puede causar problemas
const invierno = new Date(2024, 0, 15, 12, 0);
const verano = new Date(2024, 6, 15, 12, 0);

console.log("15 enero 12:00:", invierno.toString());
console.log("Offset invierno:", invierno.getTimezoneOffset(), "min");

console.log("\n15 julio 12:00:", verano.toString());
console.log("Offset verano:", verano.getTimezoneOffset(), "min");

console.log(
  "\nDiferencia offset:",
  Math.abs(invierno.getTimezoneOffset() - verano.getTimezoneOffset()),
  "min"
);

console.log("\n=== GUARDAR FECHAS EN BASE DE DATOS ===\n");

console.log("✅ RECOMENDACIONES:");
console.log("1. Siempre guardar en UTC");
console.log("2. Usar toISOString() para convertir a string");
console.log("3. Almacenar como timestamp (getTime()) o ISO string");
console.log("4. Convertir a zona local solo al mostrar");

const fechaGuardar = new Date();
console.log("\nEjemplo:");
console.log("  Timestamp:", fechaGuardar.getTime());
console.log("  ISO String:", fechaGuardar.toISOString());
console.log("  Para mostrar:", fechaGuardar.toLocaleString("es-ES"));

console.log("\n=== CALCULAR DIFERENCIAS ENTRE ZONAS ===\n");

function diferenciaHorariaEntre(zona1, zona2, fecha = new Date()) {
  const formatter1 = new Intl.DateTimeFormat("en-US", {
    timeZone: zona1,
    hour: "numeric",
    hour12: false,
  });

  const formatter2 = new Intl.DateTimeFormat("en-US", {
    timeZone: zona2,
    hour: "numeric",
    hour12: false,
  });

  const hora1 = parseInt(formatter1.format(fecha));
  const hora2 = parseInt(formatter2.format(fecha));

  let diferencia = hora2 - hora1;
  if (diferencia > 12) diferencia -= 24;
  if (diferencia < -12) diferencia += 24;

  return diferencia;
}

console.log(
  "Madrid vs Nueva York:",
  diferenciaHorariaEntre("Europe/Madrid", "America/New_York"),
  "horas"
);
console.log(
  "Madrid vs Tokio:",
  diferenciaHorariaEntre("Europe/Madrid", "Asia/Tokyo"),
  "horas"
);

console.log("\n=== RESUMEN ===");
console.log("✅ UTC = hora universal coordinada");
console.log("✅ getTimezoneOffset() devuelve minutos");
console.log("✅ Offset negativo = adelantado a UTC");
console.log("✅ Todos los métodos get/set tienen versión UTC");
console.log("✅ toISOString() siempre devuelve UTC");
console.log("✅ Usar Intl.DateTimeFormat para zonas específicas");
console.log("✅ Guardar siempre en UTC, mostrar en local");
console.log("⚠️ Cuidado con horario de verano (DST)");
