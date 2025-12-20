// ================================
// 05 - FORMATO Y COMPARACIÓN
// ================================

const fecha = new Date(2024, 0, 15, 14, 30, 45, 500);

console.log("=== MÉTODOS DE FORMATO ===\n");

console.log("📄 toString()");
console.log("  ", fecha.toString());
console.log("  → Formato completo, incluye zona horaria");

console.log("\n📅 toDateString()");
console.log("  ", fecha.toDateString());
console.log("  → Solo la fecha (día, mes, año)");

console.log("\n⏰ toTimeString()");
console.log("  ", fecha.toTimeString());
console.log("  → Solo la hora con zona horaria");

console.log("\n🌐 toISOString()");
console.log("  ", fecha.toISOString());
console.log("  → Formato ISO 8601 (estándar internacional)");
console.log("  → Siempre en UTC (termina en Z)");
console.log("  → Perfecto para APIs y bases de datos");

console.log("\n📋 toJSON()");
console.log("  ", fecha.toJSON());
console.log("  → Igual que toISOString()");
console.log("  → Usado por JSON.stringify()");

console.log("\n🇪🇸 toLocaleDateString()");
console.log("  ", fecha.toLocaleDateString());
console.log("  → Fecha en formato local del navegador/sistema");
console.log("  En España:", fecha.toLocaleDateString("es-ES"));
console.log("  En USA:", fecha.toLocaleDateString("en-US"));
console.log("  En Japón:", fecha.toLocaleDateString("ja-JP"));

console.log("\n🇪🇸 toLocaleTimeString()");
console.log("  ", fecha.toLocaleTimeString());
console.log("  → Hora en formato local");
console.log("  En España:", fecha.toLocaleTimeString("es-ES"));
console.log("  En USA:", fecha.toLocaleTimeString("en-US"));

console.log("\n🇪🇸 toLocaleString()");
console.log("  ", fecha.toLocaleString());
console.log("  → Fecha Y hora en formato local");
console.log("  En España:", fecha.toLocaleString("es-ES"));

console.log("\n=== FORMATO PERSONALIZADO CON INTL ===\n");

// Intl.DateTimeFormat para control total
const formatoES = new Intl.DateTimeFormat("es-ES", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log("Formato largo:", formatoES.format(fecha));

const formatoCorto = new Intl.DateTimeFormat("es-ES", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
console.log("Formato corto:", formatoCorto.format(fecha));

const formatoHora = new Intl.DateTimeFormat("es-ES", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
console.log("Solo hora:", formatoHora.format(fecha));

console.log("\n=== FORMATO MANUAL ===\n");

function formatearFechaCustom(fecha, formato) {
  const dia = String(fecha.getDate()).padStart(2, "0");
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const año = fecha.getFullYear();
  const hora = String(fecha.getHours()).padStart(2, "0");
  const minuto = String(fecha.getMinutes()).padStart(2, "0");
  const segundo = String(fecha.getSeconds()).padStart(2, "0");

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
  const DIAS = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  return formato
    .replace("DD", dia)
    .replace("MM", mes)
    .replace("YYYY", año)
    .replace("HH", hora)
    .replace("mm", minuto)
    .replace("ss", segundo)
    .replace("MMMM", MESES[fecha.getMonth()])
    .replace("DDDD", DIAS[fecha.getDay()]);
}

console.log("DD/MM/YYYY:", formatearFechaCustom(fecha, "DD/MM/YYYY"));
console.log("YYYY-MM-DD:", formatearFechaCustom(fecha, "YYYY-MM-DD"));
console.log(
  "DD/MM/YYYY HH:mm:",
  formatearFechaCustom(fecha, "DD/MM/YYYY HH:mm")
);
console.log(
  "DDDD, DD de MMMM de YYYY:",
  formatearFechaCustom(fecha, "DDDD, DD de MMMM de YYYY")
);

console.log("\n=== COMPARACIÓN DE FECHAS ===\n");

const fecha1 = new Date(2024, 0, 15);
const fecha2 = new Date(2024, 0, 20);
const fecha3 = new Date(2024, 0, 15);

console.log("Fecha 1:", fecha1.toLocaleDateString());
console.log("Fecha 2:", fecha2.toLocaleDateString());
console.log("Fecha 3:", fecha3.toLocaleDateString());

console.log("\n❌ Comparación con == o === (NO funciona):");
console.log("fecha1 == fecha3:", fecha1 == fecha3); // false
console.log("fecha1 === fecha3:", fecha1 === fecha3); // false
console.log("→ Compara referencias de objeto, no valores");

console.log("\n✅ Comparación con <, >, <=, >= (SÍ funciona):");
console.log("fecha1 < fecha2:", fecha1 < fecha2); // true
console.log("fecha2 > fecha1:", fecha2 > fecha1); // true
console.log("fecha1 <= fecha2:", fecha1 <= fecha2); // true

console.log("\n✅ Comparación de igualdad con getTime():");
console.log(
  "fecha1.getTime() === fecha3.getTime():",
  fecha1.getTime() === fecha3.getTime()
);

console.log("\n=== FUNCIONES DE COMPARACIÓN ===\n");

function sonIguales(fecha1, fecha2) {
  return fecha1.getTime() === fecha2.getTime();
}

function esMayor(fecha1, fecha2) {
  return fecha1 > fecha2;
}

function estaEntre(fecha, inicio, fin) {
  return fecha >= inicio && fecha <= fin;
}

function esMismoDia(fecha1, fecha2) {
  return (
    fecha1.getFullYear() === fecha2.getFullYear() &&
    fecha1.getMonth() === fecha2.getMonth() &&
    fecha1.getDate() === fecha2.getDate()
  );
}

console.log("¿Son iguales fecha1 y fecha3?", sonIguales(fecha1, fecha3));
console.log("¿Es fecha2 mayor que fecha1?", esMayor(fecha2, fecha1));
console.log(
  "¿Está fecha2 entre fecha1 y una semana después?",
  estaEntre(
    fecha2,
    fecha1,
    new Date(fecha1.getTime() + 7 * 24 * 60 * 60 * 1000)
  )
);

const hoy = new Date();
const otraFechaHoy = new Date();
console.log(
  "¿Son el mismo día hoy y otra fecha de hoy?",
  esMismoDia(hoy, otraFechaHoy)
);

console.log("\n=== ORDENAR ARRAY DE FECHAS ===\n");

const fechas = [
  new Date(2024, 5, 15),
  new Date(2024, 0, 1),
  new Date(2024, 11, 25),
  new Date(2024, 2, 10),
];

console.log("Fechas desordenadas:");
fechas.forEach((f) => console.log("  ", f.toLocaleDateString()));

// Ordenar de menor a mayor
fechas.sort((a, b) => a - b);
console.log("\nOrdenadas (ascendente):");
fechas.forEach((f) => console.log("  ", f.toLocaleDateString()));

// Ordenar de mayor a menor
fechas.sort((a, b) => b - a);
console.log("\nOrdenadas (descendente):");
fechas.forEach((f) => console.log("  ", f.toLocaleDateString()));

console.log("\n=== VALIDACIÓN DE RANGOS ===\n");

function validarRangoFechas(fecha, minima, maxima) {
  if (fecha < minima) {
    return { valida: false, mensaje: "Fecha anterior al mínimo" };
  }
  if (fecha > maxima) {
    return { valida: false, mensaje: "Fecha posterior al máximo" };
  }
  return { valida: true, mensaje: "Fecha válida" };
}

const fechaTest = new Date(2024, 6, 15);
const minima = new Date(2024, 0, 1);
const maxima = new Date(2024, 11, 31);

const resultado = validarRangoFechas(fechaTest, minima, maxima);
console.log("Validando", fechaTest.toLocaleDateString());
console.log(
  "Rango:",
  minima.toLocaleDateString(),
  "-",
  maxima.toLocaleDateString()
);
console.log("Resultado:", resultado);

console.log("\n=== FECHAS RELATIVAS (hace X tiempo) ===\n");

function tiempoRelativo(fecha) {
  const ahora = new Date();
  const diferencia = ahora - fecha;

  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  if (dias > 30) return `hace ${Math.floor(dias / 30)} meses`;
  if (dias > 0) return `hace ${dias} días`;
  if (horas > 0) return `hace ${horas} horas`;
  if (minutos > 0) return `hace ${minutos} minutos`;
  return `hace ${segundos} segundos`;
}

const hace5Min = new Date(Date.now() - 5 * 60 * 1000);
const hace2Horas = new Date(Date.now() - 2 * 60 * 60 * 1000);
const hace3Dias = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);

console.log("Fecha hace 5 min:", tiempoRelativo(hace5Min));
console.log("Fecha hace 2 horas:", tiempoRelativo(hace2Horas));
console.log("Fecha hace 3 días:", tiempoRelativo(hace3Dias));

console.log("\n=== RESUMEN ===");
console.log("✅ toISOString() → Formato estándar para APIs");
console.log("✅ toLocaleString() → Formato local automático");
console.log("✅ Intl.DateTimeFormat → Control total del formato");
console.log("✅ Comparar con <, >, >=, <=");
console.log("✅ Para igualdad: getTime() === getTime()");
console.log("✅ Ordenar arrays: .sort((a, b) => a - b)");
console.log("❌ NUNCA usar == o === para comparar fechas");
