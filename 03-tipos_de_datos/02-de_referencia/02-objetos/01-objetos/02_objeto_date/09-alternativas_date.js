// ================================
// 09 - ALTERNATIVAS A DATE NATIVO
// ================================

console.log("=== LIMITACIONES DE DATE NATIVO ===\n");

/*
❌ PROBLEMAS DEL OBJETO DATE:

1. Mutable (se modifica al usar setters)
2. Meses empiezan en 0 (confuso)
3. Sin métodos de manipulación (sumar meses, etc.)
4. Parsear strings es inconsistente
5. Zona horaria puede ser problemática
6. No hay formato de fechas incorporado
7. No valida fechas automáticamente
8. API antigua y poco intuitiva
9. Aritmética de fechas manual
10. Sin soporte para duraciones
*/

console.log("❌ Ejemplo de problemas:\n");

// Problema 1: Mutabilidad
const fecha1 = new Date(2024, 0, 15);
const fecha2 = fecha1; // Solo copia referencia
fecha2.setMonth(11);
console.log("Problema mutabilidad:");
console.log("  fecha1:", fecha1.getMonth(), "(cambió sin querer)");

// Problema 2: Meses en 0
const confuso = new Date(2024, 12, 1); // ¿Diciembre? ¡No! Es enero 2025
console.log("\nProblema meses en 0:");
console.log("  new Date(2024, 12, 1):", confuso.toLocaleDateString());

// Problema 3: Sin métodos para sumar
console.log("\nProblema: No hay método directo para sumar meses");
console.log("  Hay que hacer: fecha.setMonth(fecha.getMonth() + 1)");

// Problema 4: Parsear strings
console.log("\nProblema parseo:");
const ambigua = new Date("01/02/2024"); // ¿1 feb o 2 ene?
console.log("  '01/02/2024' se interpreta como:", ambigua.toLocaleDateString());

console.log("\n=== LIBRERÍAS MODERNAS ===\n");

/*
✅ ALTERNATIVAS POPULARES:

1. date-fns (Más popular)
   - Funcional e inmutable
   - Tree-shakeable (solo importas lo que usas)
   - TypeScript nativo
   - ~200KB (completo), ~2-5KB por función

2. Luxon (Reemplazo de Moment)
   - Creado por el autor de Moment
   - Orientado a objetos
   - Soporte completo de zonas horarias
   - Inmutable
   - ~67KB

3. Day.js (Más ligero)
   - API similar a Moment
   - Solo 2KB
   - Extensible con plugins
   - Inmutable

4. Temporal (Futuro de JavaScript)
   - Nueva API nativa en desarrollo
   - Reemplazará a Date
   - Aún no disponible (propuesta Stage 3)
*/

console.log("📚 COMPARACIÓN DE LIBRERÍAS:\n");

const comparacion = {
  "date-fns": {
    Tamaño: "2-5KB por función",
    Estilo: "Funcional",
    Inmutable: "✅",
    TypeScript: "✅",
    Popularidad: "⭐⭐⭐⭐⭐",
  },
  Luxon: {
    Tamaño: "67KB",
    Estilo: "OOP",
    Inmutable: "✅",
    TypeScript: "✅",
    Popularidad: "⭐⭐⭐⭐",
  },
  "Day.js": {
    Tamaño: "2KB",
    Estilo: "OOP",
    Inmutable: "✅",
    TypeScript: "✅",
    Popularidad: "⭐⭐⭐⭐",
  },
  Moment: {
    Tamaño: "329KB",
    Estilo: "OOP",
    Inmutable: "❌",
    TypeScript: "Parcial",
    Popularidad: "⭐⭐⭐ (deprecated)",
  },
};

console.table(comparacion);

console.log("\n=== EJEMPLOS CON date-fns ===\n");

console.log("// Instalación: npm install date-fns\n");

console.log("// Ejemplo 1: Formatear fecha");
console.log(`import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const fecha = new Date();
format(fecha, 'dd/MM/yyyy'); // "15/01/2024"
format(fecha, "d 'de' MMMM 'de' yyyy", { locale: es }); // "15 de enero de 2024"
`);

console.log("// Ejemplo 2: Sumar/restar tiempo");
console.log(`import { addDays, addMonths, subYears } from 'date-fns';

const hoy = new Date();
addDays(hoy, 7); // +7 días
addMonths(hoy, 3); // +3 meses
subYears(hoy, 1); // -1 año
`);

console.log("// Ejemplo 3: Diferencias");
console.log(`import { differenceInDays, differenceInMonths } from 'date-fns';

const fecha1 = new Date(2024, 0, 1);
const fecha2 = new Date(2024, 11, 31);
differenceInDays(fecha2, fecha1); // 365
differenceInMonths(fecha2, fecha1); // 11
`);

console.log("// Ejemplo 4: Comparaciones");
console.log(`import { isAfter, isBefore, isEqual, isSameDay } from 'date-fns';

isAfter(fecha1, fecha2); // false
isSameDay(fecha1, fecha2); // false
`);

console.log("// Ejemplo 5: Validaciones");
console.log(`import { isValid, isWeekend, isPast, isFuture } from 'date-fns';

isValid(new Date('invalid')); // false
isWeekend(new Date()); // true/false
isPast(fecha); // true/false
`);

console.log("\n=== EJEMPLOS CON Luxon ===\n");

console.log("// Instalación: npm install luxon\n");

console.log("// Ejemplo 1: Crear y formatear");
console.log(`import { DateTime } from 'luxon';

const dt = DateTime.now();
dt.toLocaleString(DateTime.DATE_FULL); // "15 de enero de 2024"
dt.toISO(); // "2024-01-15T14:30:00.000+01:00"
`);

console.log("// Ejemplo 2: Manipulación");
console.log(`const dt = DateTime.now();
dt.plus({ days: 7 }); // +7 días
dt.minus({ months: 2 }); // -2 meses
dt.startOf('month'); // Inicio del mes
dt.endOf('week'); // Fin de la semana
`);

console.log("// Ejemplo 3: Zonas horarias");
console.log(`const dt = DateTime.now();
dt.setZone('America/New_York');
dt.zoneName; // "America/New_York"
dt.offset; // -300 (minutos)
`);

console.log("// Ejemplo 4: Parsear");
console.log(`DateTime.fromISO('2024-01-15T14:30:00');
DateTime.fromFormat('15/01/2024', 'dd/MM/yyyy');
DateTime.fromSQL('2024-01-15 14:30:00');
`);

console.log("\n=== EJEMPLOS CON Day.js ===\n");

console.log("// Instalación: npm install dayjs\n");

console.log("// Ejemplo 1: Básico");
console.log(`import dayjs from 'dayjs';

const fecha = dayjs();
fecha.format('DD/MM/YYYY'); // "15/01/2024"
fecha.format('DD [de] MMMM [de] YYYY'); // "15 de enero de 2024"
`);

console.log("// Ejemplo 2: Manipulación");
console.log(`const fecha = dayjs();
fecha.add(7, 'day'); // +7 días
fecha.subtract(1, 'month'); // -1 mes
fecha.startOf('month'); // Inicio del mes
`);

console.log("// Ejemplo 3: Comparaciones");
console.log(`const fecha1 = dayjs('2024-01-01');
const fecha2 = dayjs('2024-12-31');

fecha1.isBefore(fecha2); // true
fecha1.isSame(fecha2, 'year'); // true
fecha1.diff(fecha2, 'day'); // -365
`);

console.log("// Ejemplo 4: Plugins");
console.log(`import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';

dayjs.extend(relativeTime);
dayjs.locale('es');

dayjs('2024-01-01').fromNow(); // "hace 14 días"
`);

console.log("\n=== TEMPORAL API (FUTURO) ===\n");

console.log("// Propuesta Stage 3 - Próxima API nativa\n");

console.log("// Ejemplo de cómo será:");
console.log(`// Temporal.PlainDate - Solo fechas
const fecha = Temporal.PlainDate.from('2024-01-15');
fecha.year; // 2024
fecha.month; // 1 (¡ya no empieza en 0!)
fecha.day; // 15

// Temporal.PlainTime - Solo horas
const hora = Temporal.PlainTime.from('14:30:00');

// Temporal.ZonedDateTime - Con zona horaria
const dt = Temporal.ZonedDateTime.from('2024-01-15T14:30:00[Europe/Madrid]');

// Inmutable y con API moderna
fecha.add({ days: 7 }); // Devuelve nueva fecha
fecha.until(otraFecha); // Duración entre fechas
`);

console.log("\n=== GUÍA DE DECISIÓN ===\n");

console.log(`
📋 ¿CUÁNDO USAR QUÉ?

✅ Date nativo:
   • Proyectos simples
   • Solo necesitas mostrar fecha/hora actual
   • Operaciones básicas
   • No quieres dependencias

✅ date-fns:
   • Prefieres estilo funcional
   • Quieres tree-shaking
   • Necesitas TypeScript
   • Proyecto moderno

✅ Luxon:
   • Trabajas mucho con zonas horarias
   • Prefieres OOP
   • Migrando desde Moment
   • Necesitas parsing complejo

✅ Day.js:
   • Tamaño es crítico
   • API simple es suficiente
   • Migrando desde Moment
   • Proyecto pequeño

❌ NO usar Moment:
   • Está deprecated
   • Es muy pesado (329KB)
   • Es mutable
   • Usa alternativas modernas
`);

console.log("\n=== INSTALACIÓN ===\n");

console.log("npm:");
console.log("  npm install date-fns");
console.log("  npm install luxon");
console.log("  npm install dayjs");

console.log("\nyarn:");
console.log("  yarn add date-fns");
console.log("  yarn add luxon");
console.log("  yarn add dayjs");

console.log("\nCDN (solo para pruebas):");
console.log(
  "  <script src='https://cdn.jsdelivr.net/npm/date-fns@3.0.0/index.min.js'></script>"
);
console.log(
  "  <script src='https://cdn.jsdelivr.net/npm/luxon@3.4.0/build/global/luxon.min.js'></script>"
);
console.log(
  "  <script src='https://cdn.jsdelivr.net/npm/dayjs@1.11.10/dayjs.min.js'></script>"
);

console.log("\n=== MIGRACIÓN ===\n");

console.log("De Date nativo a date-fns:");
console.log(`
  // Antes (Date)
  const fecha = new Date();
  fecha.setDate(fecha.getDate() + 7);
  
  // Después (date-fns)
  import { addDays } from 'date-fns';
  const fecha = new Date();
  const nuevaFecha = addDays(fecha, 7);
`);

console.log("\nDe Moment a Luxon:");
console.log(`
  // Antes (Moment)
  moment().add(7, 'days').format('DD/MM/YYYY')
  
  // Después (Luxon)
  DateTime.now().plus({ days: 7 }).toFormat('dd/MM/yyyy')
`);

console.log("\n=== RECURSOS ===\n");

console.log("📖 Documentación:");
console.log("  date-fns: https://date-fns.org/");
console.log("  Luxon: https://moment.github.io/luxon/");
console.log("  Day.js: https://day.js.org/");
console.log("  Temporal: https://tc39.es/proposal-temporal/");

console.log("\n💡 RECOMENDACIÓN:");
console.log("  Para proyectos nuevos → date-fns o Luxon");
console.log("  Para proyectos pequeños → Day.js");
console.log("  Para el futuro → Temporal (cuando esté disponible)");
console.log("  Evitar → Moment.js (deprecated)");

console.log("\n✅ Ahora ya conoces las alternativas modernas!");
