// ================================
// 07 - UTILIDADES Y HELPERS
// ================================

console.log("=== CLASE DATEUTILS ===\n");

class DateUtils {
  // ========================
  // VALIDACIONES
  // ========================

  static esFechaValida(fecha) {
    return fecha instanceof Date && !isNaN(fecha.getTime());
  }

  static esAñoBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
  }

  static diasEnMes(año, mes) {
    return new Date(año, mes + 1, 0).getDate();
  }

  // ========================
  // COMPARACIONES
  // ========================

  static sonIguales(fecha1, fecha2) {
    return fecha1.getTime() === fecha2.getTime();
  }

  static esMismoDia(fecha1, fecha2) {
    return (
      fecha1.getFullYear() === fecha2.getFullYear() &&
      fecha1.getMonth() === fecha2.getMonth() &&
      fecha1.getDate() === fecha2.getDate()
    );
  }

  static esMismoMes(fecha1, fecha2) {
    return (
      fecha1.getFullYear() === fecha2.getFullYear() &&
      fecha1.getMonth() === fecha2.getMonth()
    );
  }

  static esMismoAño(fecha1, fecha2) {
    return fecha1.getFullYear() === fecha2.getFullYear();
  }

  static esHoy(fecha) {
    return this.esMismoDia(fecha, new Date());
  }

  static esAyer(fecha) {
    const ayer = new Date();
    ayer.setDate(ayer.getDate() - 1);
    return this.esMismoDia(fecha, ayer);
  }

  static esMañana(fecha) {
    const mañana = new Date();
    mañana.setDate(mañana.getDate() + 1);
    return this.esMismoDia(fecha, mañana);
  }

  static esPasado(fecha) {
    return fecha < new Date();
  }

  static esFuturo(fecha) {
    return fecha > new Date();
  }

  static estaEntre(fecha, inicio, fin) {
    return fecha >= inicio && fecha <= fin;
  }

  // ========================
  // MANIPULACIÓN
  // ========================

  static sumarDias(fecha, dias) {
    const resultado = new Date(fecha);
    resultado.setDate(resultado.getDate() + dias);
    return resultado;
  }

  static sumarMeses(fecha, meses) {
    const resultado = new Date(fecha);
    resultado.setMonth(resultado.getMonth() + meses);
    return resultado;
  }

  static sumarAños(fecha, años) {
    const resultado = new Date(fecha);
    resultado.setFullYear(resultado.getFullYear() + años);
    return resultado;
  }

  static restarDias(fecha, dias) {
    return this.sumarDias(fecha, -dias);
  }

  static restarMeses(fecha, meses) {
    return this.sumarMeses(fecha, -meses);
  }

  static restarAños(fecha, años) {
    return this.sumarAños(fecha, -años);
  }

  // ========================
  // INICIO Y FIN
  // ========================

  static inicioDia(fecha) {
    const resultado = new Date(fecha);
    resultado.setHours(0, 0, 0, 0);
    return resultado;
  }

  static finDia(fecha) {
    const resultado = new Date(fecha);
    resultado.setHours(23, 59, 59, 999);
    return resultado;
  }

  static inicioMes(fecha) {
    return new Date(fecha.getFullYear(), fecha.getMonth(), 1, 0, 0, 0, 0);
  }

  static finMes(fecha) {
    return new Date(
      fecha.getFullYear(),
      fecha.getMonth() + 1,
      0,
      23,
      59,
      59,
      999
    );
  }

  static inicioAño(fecha) {
    return new Date(fecha.getFullYear(), 0, 1, 0, 0, 0, 0);
  }

  static finAño(fecha) {
    return new Date(fecha.getFullYear(), 11, 31, 23, 59, 59, 999);
  }

  static inicioSemana(fecha) {
    const resultado = new Date(fecha);
    const dia = resultado.getDay();
    const diferencia = dia === 0 ? -6 : 1 - dia; // Lunes como inicio
    resultado.setDate(resultado.getDate() + diferencia);
    resultado.setHours(0, 0, 0, 0);
    return resultado;
  }

  static finSemana(fecha) {
    const resultado = this.inicioSemana(fecha);
    resultado.setDate(resultado.getDate() + 6);
    resultado.setHours(23, 59, 59, 999);
    return resultado;
  }

  // ========================
  // CÁLCULOS
  // ========================

  static diasEntreFechas(fecha1, fecha2) {
    const diferencia = Math.abs(fecha2 - fecha1);
    return Math.floor(diferencia / (1000 * 60 * 60 * 24));
  }

  static horasEntreFechas(fecha1, fecha2) {
    const diferencia = Math.abs(fecha2 - fecha1);
    return Math.floor(diferencia / (1000 * 60 * 60));
  }

  static minutosEntreFechas(fecha1, fecha2) {
    const diferencia = Math.abs(fecha2 - fecha1);
    return Math.floor(diferencia / (1000 * 60));
  }

  static calcularEdad(fechaNacimiento, fechaReferencia = new Date()) {
    let edad = fechaReferencia.getFullYear() - fechaNacimiento.getFullYear();
    const mes = fechaReferencia.getMonth() - fechaNacimiento.getMonth();

    if (
      mes < 0 ||
      (mes === 0 && fechaReferencia.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }

    return edad;
  }

  static diasLaborables(fechaInicio, fechaFin) {
    let dias = 0;
    const actual = new Date(fechaInicio);

    while (actual <= fechaFin) {
      const diaSemana = actual.getDay();
      if (diaSemana !== 0 && diaSemana !== 6) {
        dias++;
      }
      actual.setDate(actual.getDate() + 1);
    }

    return dias;
  }

  // ========================
  // FORMATO
  // ========================

  static formatear(fecha, formato) {
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
      .replace("YYYY", año)
      .replace("MM", mes)
      .replace("DD", dia)
      .replace("HH", hora)
      .replace("mm", minuto)
      .replace("ss", segundo)
      .replace("MMMM", MESES[fecha.getMonth()])
      .replace("DDDD", DIAS[fecha.getDay()]);
  }

  static tiempoRelativo(fecha) {
    const ahora = new Date();
    const diferencia = ahora - fecha;

    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30);
    const años = Math.floor(dias / 365);

    if (años > 0) return `hace ${años} año${años > 1 ? "s" : ""}`;
    if (meses > 0) return `hace ${meses} mes${meses > 1 ? "es" : ""}`;
    if (dias > 0) return `hace ${dias} día${dias > 1 ? "s" : ""}`;
    if (horas > 0) return `hace ${horas} hora${horas > 1 ? "s" : ""}`;
    if (minutos > 0) return `hace ${minutos} minuto${minutos > 1 ? "s" : ""}`;
    return `hace ${segundos} segundo${segundos !== 1 ? "s" : ""}`;
  }

  // ========================
  // ARRAYS
  // ========================

  static rangoFechas(inicio, fin) {
    const fechas = [];
    const actual = new Date(inicio);

    while (actual <= fin) {
      fechas.push(new Date(actual));
      actual.setDate(actual.getDate() + 1);
    }

    return fechas;
  }

  static fechaMinima(...fechas) {
    return new Date(Math.min(...fechas.map((f) => f.getTime())));
  }

  static fechaMaxima(...fechas) {
    return new Date(Math.max(...fechas.map((f) => f.getTime())));
  }

  // ========================
  // DÍA DE LA SEMANA
  // ========================

  static esFinDeSemana(fecha) {
    const dia = fecha.getDay();
    return dia === 0 || dia === 6;
  }

  static esLaborable(fecha) {
    return !this.esFinDeSemana(fecha);
  }

  static nombreDia(fecha) {
    const dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    return dias[fecha.getDay()];
  }

  static nombreMes(fecha) {
    const meses = [
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
    return meses[fecha.getMonth()];
  }
}

//--------------------------------------------------------------------------------------
// PRUEBAS DE UTILIDADES
//--------------------------------------------------------------------------------------

console.log("=== PROBANDO DATEUTILS ===\n");

const hoy = new Date();
const ayer = DateUtils.sumarDias(hoy, -1);
const mañana = DateUtils.sumarDias(hoy, 1);

console.log("📅 COMPARACIONES:");
console.log("  ¿Es hoy?", DateUtils.esHoy(hoy));
console.log("  ¿Es ayer?", DateUtils.esAyer(ayer));
console.log("  ¿Es mañana?", DateUtils.esMañana(mañana));
console.log("  ¿Es fin de semana?", DateUtils.esFinDeSemana(hoy));

console.log("\n📅 INICIO Y FIN:");
console.log("  Inicio día:", DateUtils.inicioDia(hoy).toLocaleString());
console.log("  Fin día:", DateUtils.finDia(hoy).toLocaleString());
console.log("  Inicio mes:", DateUtils.inicioMes(hoy).toLocaleDateString());
console.log("  Fin mes:", DateUtils.finMes(hoy).toLocaleDateString());

console.log("\n📅 CÁLCULOS:");
const nacimiento = new Date(1990, 5, 15);
console.log("  Edad:", DateUtils.calcularEdad(nacimiento), "años");
console.log(
  "  Días hasta fin de año:",
  DateUtils.diasEntreFechas(hoy, DateUtils.finAño(hoy))
);

console.log("\n📅 FORMATO:");
console.log("  DD/MM/YYYY:", DateUtils.formatear(hoy, "DD/MM/YYYY"));
console.log(
  "  DDDD, DD de MMMM:",
  DateUtils.formatear(hoy, "DDDD, DD de MMMM")
);
console.log(
  "  Tiempo relativo:",
  DateUtils.tiempoRelativo(DateUtils.sumarDias(hoy, -5))
);

console.log("\n📅 VALIDACIONES:");
console.log("  ¿2024 es bisiesto?", DateUtils.esAñoBisiesto(2024));
console.log("  Días en febrero 2024:", DateUtils.diasEnMes(2024, 1));

console.log("\n✅ DateUtils listo para usar en tus proyectos!");
