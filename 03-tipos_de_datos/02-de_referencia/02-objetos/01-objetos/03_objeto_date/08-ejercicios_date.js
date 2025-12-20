// ================================
// 08 - EJERCICIOS PRÁCTICOS
// ================================

console.log("=== 15 EJERCICIOS CON SOLUCIONES ===\n");

// ========================
// EJERCICIO 1: Días hasta tu cumpleaños
// ========================

console.log("📝 EJERCICIO 1: Días hasta tu cumpleaños");

function diasHastaCumpleaños(diaNacimiento, mesNacimiento) {
  const hoy = new Date();
  const cumpleaños = new Date(
    hoy.getFullYear(),
    mesNacimiento - 1,
    diaNacimiento
  );

  // Si ya pasó este año, calcular para el próximo
  if (cumpleaños < hoy) {
    cumpleaños.setFullYear(cumpleaños.getFullYear() + 1);
  }

  const diferencia = cumpleaños - hoy;
  return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
}

console.log(
  "Solución:",
  diasHastaCumpleaños(15, 6),
  "días hasta el 15 de junio"
);

// ========================
// EJERCICIO 2: Calcular edad exacta
// ========================

console.log("\n📝 EJERCICIO 2: Edad exacta en años, meses y días");

function edadExacta(fechaNacimiento) {
  const hoy = new Date();
  let años = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let meses = hoy.getMonth() - fechaNacimiento.getMonth();
  let dias = hoy.getDate() - fechaNacimiento.getDate();

  if (dias < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      0
    ).getDate();
    dias += ultimoDiaMesAnterior;
  }

  if (meses < 0) {
    años--;
    meses += 12;
  }

  return { años, meses, dias };
}

const nacimiento = new Date(1990, 5, 15);
const edad = edadExacta(nacimiento);
console.log(
  `Solución: ${edad.años} años, ${edad.meses} meses y ${edad.dias} días`
);

// ========================
// EJERCICIO 3: ¿Qué día de la semana fue?
// ========================

console.log("\n📝 EJERCICIO 3: ¿Qué día de la semana fue una fecha?");

function queDiaFue(fecha) {
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

const fecha1 = new Date(2024, 0, 1);
console.log("Solución: El 1 de enero de 2024 fue", queDiaFue(fecha1));

// ========================
// EJERCICIO 4: Sumar días hábiles
// ========================

console.log("\n📝 EJERCICIO 4: Sumar días hábiles (laborables)");

function sumarDiasHabiles(fecha, diasHabiles) {
  const resultado = new Date(fecha);
  let diasSumados = 0;

  while (diasSumados < diasHabiles) {
    resultado.setDate(resultado.getDate() + 1);
    const diaSemana = resultado.getDay();

    // Si no es fin de semana
    if (diaSemana !== 0 && diaSemana !== 6) {
      diasSumados++;
    }
  }

  return resultado;
}

const hoy = new Date();
console.log("Hoy:", hoy.toLocaleDateString());
console.log(
  "Solución: +5 días hábiles:",
  sumarDiasHabiles(hoy, 5).toLocaleDateString()
);

// ========================
// EJERCICIO 5: Formatear fecha relativa
// ========================

console.log(
  "\n📝 EJERCICIO 5: Formato relativo ('hace X tiempo' / 'en X tiempo')"
);

function formatoRelativo(fecha) {
  const ahora = new Date();
  const diferencia = fecha - ahora;
  const absDiferencia = Math.abs(diferencia);

  const segundos = Math.floor(absDiferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  const prefijo = diferencia < 0 ? "hace" : "en";

  if (dias > 0) return `${prefijo} ${dias} día${dias > 1 ? "s" : ""}`;
  if (horas > 0) return `${prefijo} ${horas} hora${horas > 1 ? "s" : ""}`;
  if (minutos > 0)
    return `${prefijo} ${minutos} minuto${minutos > 1 ? "s" : ""}`;
  return `${prefijo} ${segundos} segundo${segundos !== 1 ? "s" : ""}`;
}

const ayer = new Date(Date.now() - 24 * 60 * 60 * 1000);
const mañana = new Date(Date.now() + 24 * 60 * 60 * 1000);
console.log("Solución ayer:", formatoRelativo(ayer));
console.log("Solución mañana:", formatoRelativo(mañana));

// ========================
// EJERCICIO 6: Trimestre del año
// ========================

console.log("\n📝 EJERCICIO 6: ¿En qué trimestre estamos?");

function obtenerTrimestre(fecha) {
  return Math.floor(fecha.getMonth() / 3) + 1;
}

console.log(
  "Solución:",
  "Estamos en el trimestre",
  obtenerTrimestre(new Date())
);

// ========================
// EJERCICIO 7: Semanas entre fechas
// ========================

console.log("\n📝 EJERCICIO 7: Semanas completas entre dos fechas");

function semanasEntreFechas(fecha1, fecha2) {
  const diferencia = Math.abs(fecha2 - fecha1);
  return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 7));
}

const inicio = new Date(2024, 0, 1);
const fin = new Date(2024, 11, 31);
console.log("Solución:", semanasEntreFechas(inicio, fin), "semanas en 2024");

// ========================
// EJERCICIO 8: Validar fecha de nacimiento
// ========================

console.log("\n📝 EJERCICIO 8: Validar que alguien es mayor de edad");

function esMayorDeEdad(fechaNacimiento, edadMinima = 18) {
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth() - fechaNacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  return edad >= edadMinima;
}

const fechaNac = new Date(2000, 0, 1);
console.log(
  "Solución:",
  esMayorDeEdad(fechaNac) ? "Es mayor de edad" : "Es menor de edad"
);

// ========================
// EJERCICIO 9: Último día del mes
// ========================

console.log("\n📝 EJERCICIO 9: Obtener último día del mes");

function ultimoDiaDelMes(fecha) {
  return new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
}

console.log(
  "Solución: Febrero 2024 tiene",
  ultimoDiaDelMes(new Date(2024, 1, 1)),
  "días"
);
console.log(
  "Solución: Febrero 2023 tiene",
  ultimoDiaDelMes(new Date(2023, 1, 1)),
  "días"
);

// ========================
// EJERCICIO 10: Fechas en rango
// ========================

console.log("\n📝 EJERCICIO 10: Generar todas las fechas en un rango");

function generarRangoFechas(inicio, fin) {
  const fechas = [];
  const actual = new Date(inicio);

  while (actual <= fin) {
    fechas.push(new Date(actual));
    actual.setDate(actual.getDate() + 1);
  }

  return fechas;
}

const inicioRango = new Date(2024, 0, 1);
const finRango = new Date(2024, 0, 7);
const rango = generarRangoFechas(inicioRango, finRango);
console.log("Solución:", rango.length, "fechas generadas");

// ========================
// EJERCICIO 11: Formatear duración
// ========================

console.log("\n📝 EJERCICIO 11: Formatear duración (HH:MM:SS)");

function formatearDuracion(milisegundos) {
  const segundosTotales = Math.floor(milisegundos / 1000);
  const horas = Math.floor(segundosTotales / 3600);
  const minutos = Math.floor((segundosTotales % 3600) / 60);
  const segundos = segundosTotales % 60;

  return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(
    2,
    "0"
  )}:${String(segundos).padStart(2, "0")}`;
}

console.log("Solución:", formatearDuracion(3665000), "para 3665 segundos");

// ========================
// EJERCICIO 12: Ordenar eventos
// ========================

console.log("\n📝 EJERCICIO 12: Ordenar array de eventos por fecha");

const eventos = [
  { nombre: "Concierto", fecha: new Date(2024, 5, 15) },
  { nombre: "Cumpleaños", fecha: new Date(2024, 2, 10) },
  { nombre: "Viaje", fecha: new Date(2024, 7, 20) },
  { nombre: "Conferencia", fecha: new Date(2024, 0, 5) },
];

eventos.sort((a, b) => a.fecha - b.fecha);
console.log("Solución: Eventos ordenados:");
eventos.forEach((e) =>
  console.log(`  ${e.nombre}: ${e.fecha.toLocaleDateString()}`)
);

// ========================
// EJERCICIO 13: Calendario del mes
// ========================

console.log("\n📝 EJERCICIO 13: Generar calendario de un mes");

function calendarioMes(año, mes) {
  const primerDia = new Date(año, mes, 1);
  const ultimoDia = new Date(año, mes + 1, 0);
  const calendario = [];

  for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
    const fecha = new Date(año, mes, dia);
    calendario.push({
      dia: dia,
      diaSemana: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"][
        fecha.getDay()
      ],
      esFinDeSemana: fecha.getDay() === 0 || fecha.getDay() === 6,
    });
  }

  return calendario;
}

console.log("Solución: Primeros 7 días de enero 2024:");
calendarioMes(2024, 0)
  .slice(0, 7)
  .forEach((d) =>
    console.log(`  ${d.dia} ${d.diaSemana}${d.esFinDeSemana ? " 🎉" : ""}`)
  );

// ========================
// EJERCICIO 14: Tiempo de vida
// ========================

console.log(
  "\n📝 EJERCICIO 14: Calcular tiempo de vida en diferentes unidades"
);

function tiempoDeVida(fechaNacimiento) {
  const ahora = new Date();
  const diferencia = ahora - fechaNacimiento;

  return {
    años: Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365)),
    meses: Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30)),
    dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    horas: Math.floor(diferencia / (1000 * 60 * 60)),
    minutos: Math.floor(diferencia / (1000 * 60)),
    segundos: Math.floor(diferencia / 1000),
  };
}

const nacimiento2 = new Date(1990, 0, 1);
const vida = tiempoDeVida(nacimiento2);
console.log("Solución:");
console.log(`  ${vida.años} años o`);
console.log(`  ${vida.meses} meses o`);
console.log(`  ${vida.dias} días`);

// ========================
// EJERCICIO 15: Zona horaria amigable
// ========================

console.log("\n📝 EJERCICIO 15: Convertir fecha a diferentes zonas horarias");

function mostrarEnZonas(fecha) {
  const zonas = ["Europe/Madrid", "America/New_York", "Asia/Tokyo"];
  const resultado = {};

  zonas.forEach((zona) => {
    const formatter = new Intl.DateTimeFormat("es-ES", {
      timeZone: zona,
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
    resultado[zona] = formatter.format(fecha);
  });

  return resultado;
}

const fechaAhora = new Date();
const zonas = mostrarEnZonas(fechaAhora);
console.log("Solución:");
Object.entries(zonas).forEach(([zona, hora]) => {
  console.log(`  ${zona}: ${hora}`);
});

console.log("\n✅ ¡15 ejercicios completados!");
console.log("💡 Intenta modificarlos y crear variaciones");
