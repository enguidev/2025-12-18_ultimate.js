// ================================
// 04 - MÉTODOS SET Y CÁLCULOS
// ================================

console.log("=== MÉTODOS SET (MODIFICAR) ===\n");

// ⚠️ IMPORTANTE: Los métodos set MODIFICAN la fecha original
const fecha = new Date(2024, 0, 15, 14, 30, 45);
console.log("Fecha original:", fecha.toString());

console.log("\n📝 setFullYear(year, [month], [date])");
fecha.setFullYear(2025);
console.log("Después de setFullYear(2025):", fecha.toString());

// Resetear fecha
fecha.setFullYear(2024, 0, 15);

console.log("\n📝 setMonth(month, [date])");
console.log("Mes actual:", fecha.getMonth()); // 0 (enero)
fecha.setMonth(11); // Diciembre
console.log("Después de setMonth(11):", fecha.toString());

fecha.setMonth(0); // Volver a enero

console.log("\n📝 setDate(day)");
fecha.setDate(25);
console.log("Después de setDate(25):", fecha.toString());

fecha.setDate(15); // Volver

console.log("\n📝 setHours(hour, [min], [sec], [ms])");
fecha.setHours(20, 45, 30);
console.log("Después de setHours(20, 45, 30):", fecha.toString());

console.log("\n📝 setMinutes(min, [sec], [ms])");
fecha.setMinutes(15);
console.log("Después de setMinutes(15):", fecha.toString());

console.log("\n📝 setSeconds(sec, [ms])");
fecha.setSeconds(0);
console.log("Después de setSeconds(0):", fecha.toString());

console.log("\n📝 setMilliseconds(ms)");
fecha.setMilliseconds(500);
console.log("Después de setMilliseconds(500):", fecha.toString());

console.log("\n📝 setTime(timestamp)");
const timestamp = Date.parse("2024-06-15");
fecha.setTime(timestamp);
console.log("Después de setTime():", fecha.toString());

console.log("\n=== AUTO-CORRECCIÓN ===\n");

// JavaScript auto-corrige valores fuera de rango
const fecha2 = new Date(2024, 0, 15);

console.log("Fecha inicial:", fecha2.toString());

// Sumar 10 días (puede cambiar mes/año automáticamente)
fecha2.setDate(fecha2.getDate() + 10);
console.log("Sumar 10 días:", fecha2.toString());

// Establecer día 0 = último día del mes anterior
fecha2.setDate(0);
console.log("setDate(0) = último día mes anterior:", fecha2.toString());

// Establecer día negativo
const fecha3 = new Date(2024, 1, 1); // 1 febrero
fecha3.setDate(-1); // 2 días antes
console.log("setDate(-1):", fecha3.toString());

// Sumar meses
const fecha4 = new Date(2024, 0, 31); // 31 enero
fecha4.setMonth(fecha4.getMonth() + 1);
console.log("31 enero + 1 mes:", fecha4.toString()); // Se ajusta

console.log("\n=== CÁLCULOS CON FECHAS ===\n");

const hoy = new Date(2024, 0, 15);
const futuro = new Date(2024, 0, 20);

console.log("Fecha 1:", hoy.toString());
console.log("Fecha 2:", futuro.toString());

// Diferencia en milisegundos
const diferencia = futuro - hoy;
console.log("\nDiferencia en milisegundos:", diferencia);

// Constantes útiles
const MS_POR_SEGUNDO = 1000;
const MS_POR_MINUTO = 1000 * 60;
const MS_POR_HORA = 1000 * 60 * 60;
const MS_POR_DIA = 1000 * 60 * 60 * 24;

console.log("\n📊 Conversiones:");
console.log("En segundos:", diferencia / MS_POR_SEGUNDO);
console.log("En minutos:", diferencia / MS_POR_MINUTO);
console.log("En horas:", diferencia / MS_POR_HORA);
console.log("En días:", diferencia / MS_POR_DIA);

console.log("\n=== SUMAR/RESTAR TIEMPO ===\n");

function sumarDias(fecha, dias) {
  const resultado = new Date(fecha);
  resultado.setDate(resultado.getDate() + dias);
  return resultado;
}

function sumarMeses(fecha, meses) {
  const resultado = new Date(fecha);
  resultado.setMonth(resultado.getMonth() + meses);
  return resultado;
}

function sumarAños(fecha, años) {
  const resultado = new Date(fecha);
  resultado.setFullYear(resultado.getFullYear() + años);
  return resultado;
}

const fechaBase = new Date(2024, 0, 15);
console.log("Fecha base:", fechaBase.toString());
console.log("+ 7 días:", sumarDias(fechaBase, 7).toString());
console.log("+ 2 meses:", sumarMeses(fechaBase, 2).toString());
console.log("+ 1 año:", sumarAños(fechaBase, 1).toString());
console.log("- 5 días:", sumarDias(fechaBase, -5).toString());

console.log("\n=== CALCULAR EDAD ===\n");

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth() - fechaNacimiento.getMonth();

  // Si no ha llegado al cumpleaños este año, restar 1
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  return edad;
}

const nacimiento = new Date(1990, 5, 15); // 15 junio 1990
console.log("Fecha nacimiento:", nacimiento.toLocaleDateString());
console.log("Edad:", calcularEdad(nacimiento), "años");

console.log("\n=== DÍAS ENTRE DOS FECHAS ===\n");

function diasEntreFechas(fecha1, fecha2) {
  const diferencia = Math.abs(fecha2 - fecha1);
  return Math.floor(diferencia / MS_POR_DIA);
}

const inicio = new Date(2024, 0, 1);
const fin = new Date(2024, 11, 31);
console.log("Del", inicio.toLocaleDateString(), "al", fin.toLocaleDateString());
console.log("Hay", diasEntreFechas(inicio, fin), "días");

console.log("\n=== DÍAS LABORABLES ===\n");

function diasLaborables(fechaInicio, fechaFin) {
  let dias = 0;
  const actual = new Date(fechaInicio);

  while (actual <= fechaFin) {
    const diaSemana = actual.getDay();
    // 0=domingo, 6=sábado
    if (diaSemana !== 0 && diaSemana !== 6) {
      dias++;
    }
    actual.setDate(actual.getDate() + 1);
  }

  return dias;
}

const inicioMes = new Date(2024, 0, 1);
const finMes = new Date(2024, 0, 31);
console.log(
  "Días laborables en enero 2024:",
  diasLaborables(inicioMes, finMes)
);

console.log("\n=== INICIO Y FIN DE DÍA ===\n");

function inicioDia(fecha) {
  const resultado = new Date(fecha);
  resultado.setHours(0, 0, 0, 0);
  return resultado;
}

function finDia(fecha) {
  const resultado = new Date(fecha);
  resultado.setHours(23, 59, 59, 999);
  return resultado;
}

const fechaActual = new Date();
console.log("Fecha actual:", fechaActual.toString());
console.log("Inicio del día:", inicioDia(fechaActual).toString());
console.log("Fin del día:", finDia(fechaActual).toString());

console.log("\n=== RESUMEN ===");
console.log("✅ Métodos set MODIFICAN la fecha original");
console.log("✅ Crear copia antes de modificar: new Date(fecha)");
console.log("✅ Auto-corrección automática en valores fuera de rango");
console.log("✅ Restar fechas da diferencia en milisegundos");
console.log("✅ Usar constantes para conversiones de tiempo");
console.log("✅ setDate(0) = último día del mes anterior");
