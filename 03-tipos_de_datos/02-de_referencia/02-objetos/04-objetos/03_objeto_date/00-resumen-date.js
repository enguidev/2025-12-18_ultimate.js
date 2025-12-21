//--------------------------------------------------------------------------------------
// OBJETO DATE - RESUMEN Y GUÍA COMPLETA
//--------------------------------------------------------------------------------------

/*
📅 OBJETO DATE

El objeto Date permite trabajar con fechas y horas en JavaScript.
Representa un momento específico en el tiempo con precisión de milisegundos.

⚠️ PUNTOS IMPORTANTES:
- Los meses empiezan en 0 (enero = 0, diciembre = 11)
- getDay() devuelve 0-6 (domingo = 0, sábado = 6)
- Internamente almacena milisegundos desde 1 enero 1970 (Unix Epoch)
- Las fechas son MUTABLES (se modifican al usar set)
- Tiene auto-corrección (new Date(2024, 1, 31) → 2 de marzo)
*/

//--------------------------------------------------------------------------------------
// 📚 CONTENIDO DE ESTA CARPETA
//--------------------------------------------------------------------------------------

/*
Esta carpeta contiene archivos organizados por temas:

📄 00-resumen_date.js (ESTE ARCHIVO)
   - Índice y guía rápida de referencia
   - Tablas comparativas
   - Cheat sheet completo

📄 01-creacion_fechas.js
   - new Date() en todas sus formas
   - Date.parse(), Date.UTC(), Date.now()
   - Timestamps y conversiones

📄 02_objeto_date.js
   - Archivo principal con ejemplos del profe
   - Conceptos básicos integrados

📄 03-metodos_get.js
   - getFullYear(), getMonth(), getDate()
   - getDay(), getHours(), getMinutes()
   - getTime() y métodos UTC

📄 04-metodos_set_calculos.js
   - setFullYear(), setMonth(), setDate()
   - setHours(), setMinutes(), setSeconds()
   - Auto-corrección de fechas
   - Cálculos entre fechas

📄 05-formato_comparacion.js
   - toString(), toLocaleString()
   - toISOString(), toJSON()
   - Formatos personalizados
   - Comparar y ordenar fechas

📄 06-zonas_horarias.js
   - UTC vs Local time
   - getTimezoneOffset()
   - Intl.DateTimeFormat

📄 07-utilidades_fechas.js
   - Clase DateUtils completa
   - Validaciones útiles
   - Helpers prácticos

📄 08-ejercicios_date.js
   - 15 ejercicios prácticos con soluciones
   - Proyectos reales

📄 09-alternativas_date.js
   - Limitaciones de Date nativo
   - date-fns, Luxon, Day.js
   - Cuándo usar cada librería
*/

//--------------------------------------------------------------------------------------
// 🗺️ MAPA MENTAL DEL OBJETO DATE
//--------------------------------------------------------------------------------------

/*
Date
├── Creación
│   ├── new Date()
│   ├── new Date(timestamp)
│   ├── new Date(string)
│   ├── new Date(year, month, ...)
│   ├── Date.now()
│   ├── Date.parse()
│   └── Date.UTC()
│
├── Métodos GET (obtener)
│   ├── Fecha
│   │   ├── getFullYear()
│   │   ├── getMonth() (0-11)
│   │   ├── getDate() (1-31)
│   │   └── getDay() (0-6)
│   ├── Hora
│   │   ├── getHours() (0-23)
│   │   ├── getMinutes() (0-59)
│   │   ├── getSeconds() (0-59)
│   │   └── getMilliseconds() (0-999)
│   ├── Timestamp
│   │   └── getTime()
│   └── UTC
│       ├── getUTCFullYear()
│       ├── getUTCMonth()
│       └── ...
│
├── Métodos SET (modificar)
│   ├── setFullYear()
│   ├── setMonth()
│   ├── setDate()
│   ├── setHours()
│   ├── setMinutes()
│   ├── setSeconds()
│   └── setMilliseconds()
│
├── Formato
│   ├── toString()
│   ├── toDateString()
│   ├── toTimeString()
│   ├── toLocaleDateString()
│   ├── toLocaleTimeString()
│   ├── toLocaleString()
│   ├── toISOString()
│   └── toJSON()
│
└── Otros
    ├── getTimezoneOffset()
    └── valueOf()
*/

//--------------------------------------------------------------------------------------
// 📊 TABLA RESUMEN - MÉTODOS PRINCIPALES
//--------------------------------------------------------------------------------------

const METODOS_DATE = {
  "getFullYear()": "Año (4 dígitos) → 2024",
  "getMonth()": "Mes (0-11) → 0=enero, 11=diciembre",
  "getDate()": "Día del mes (1-31)",
  "getDay()": "Día de la semana (0-6) → 0=domingo",
  "getHours()": "Hora (0-23)",
  "getMinutes()": "Minutos (0-59)",
  "getSeconds()": "Segundos (0-59)",
  "getMilliseconds()": "Milisegundos (0-999)",
  "getTime()": "Timestamp en ms desde 1970",
  "setFullYear(year)": "Establecer año",
  "setMonth(month)": "Establecer mes (0-11)",
  "setDate(day)": "Establecer día (1-31)",
  "setHours(h)": "Establecer hora (0-23)",
  "toString()": "Fecha completa en string",
  "toLocaleDateString()": "Fecha en formato local",
  "toISOString()": "Formato ISO: 2024-01-15T10:30:00.000Z",
  "Date.now()": "Timestamp actual (estático)",
  "getTimezoneOffset()": "Diferencia con UTC en minutos",
};

console.log("📊 MÉTODOS PRINCIPALES DE DATE:");
console.table(METODOS_DATE);

//--------------------------------------------------------------------------------------
// ⚠️ PITFALLS COMUNES (ERRORES TÍPICOS)
//--------------------------------------------------------------------------------------

console.log("\n⚠️ ERRORES COMUNES:\n");

// ❌ ERROR 1: Olvidar que los meses empiezan en 0
const mal1 = new Date(2024, 12, 1); // ❌ Esto es enero 2025
const bien1 = new Date(2024, 11, 1); // ✅ Diciembre 2024
console.log("❌ new Date(2024, 12, 1):", mal1.toLocaleDateString());
console.log("✅ new Date(2024, 11, 1):", bien1.toLocaleDateString());

// ❌ ERROR 2: Confundir getDate() con getDay()
const fecha = new Date(2024, 0, 15);
console.log("\n❌ Confusión getDate() vs getDay():");
console.log("  getDate():", fecha.getDate(), "← día del mes");
console.log("  getDay():", fecha.getDay(), "← día de la semana");

// ❌ ERROR 3: Mutar fechas sin querer
console.log("\n❌ Mutar fechas accidentalmente:");
const fechaOriginal = new Date(2024, 0, 1);
const fechaCopia = fechaOriginal;
fechaCopia.setMonth(11);
console.log("  Original cambió:", fechaOriginal.getMonth());

// ✅ CORRECTO
const fechaOriginal2 = new Date(2024, 0, 1);
const fechaCopia2 = new Date(fechaOriginal2);
fechaCopia2.setMonth(11);
console.log("  ✅ Original intacto:", fechaOriginal2.getMonth());

// ❌ ERROR 4: Comparar con ==
const f1 = new Date(2024, 0, 1);
const f2 = new Date(2024, 0, 1);
console.log("\n❌ Comparar con ==:", f1 == f2);
console.log("✅ Comparar con getTime():", f1.getTime() === f2.getTime());

//--------------------------------------------------------------------------------------
// 🎯 GUÍA RÁPIDA DE DECISIÓN
//--------------------------------------------------------------------------------------

console.log("\n🎯 GUÍA RÁPIDA:\n");

const guia = `
¿QUÉ NECESITAS HACER?

📅 Obtener fecha/hora actual
   → const ahora = new Date();

🆕 Crear fecha específica
   → new Date(2024, 0, 15)

📖 Obtener componentes
   → fecha.getFullYear(), getMonth(), getDate()

✏️ Modificar fecha
   → fecha.setFullYear(2025)

📊 Calcular diferencia
   → const diff = fecha2 - fecha1; // ms

⚖️ Comparar fechas
   → if (fecha1 < fecha2) { ... }

🎨 Formatear fecha
   → fecha.toLocaleDateString('es-ES')

🌍 Zona horaria UTC
   → fecha.getUTCHours()
`;

console.log(guia);

//--------------------------------------------------------------------------------------
// 📋 CHEAT SHEET RÁPIDA
//--------------------------------------------------------------------------------------

console.log("\n📋 CHEAT SHEET:\n");

console.log("🆕 CREAR:");
console.log("  new Date()                 → Ahora");
console.log("  new Date(2024, 0, 15)      → 15 enero 2024");
console.log("  Date.now()                 → Timestamp actual");

console.log("\n📖 OBTENER:");
console.log("  .getFullYear()             → 2024");
console.log("  .getMonth()                → 0-11");
console.log("  .getDate()                 → 1-31");
console.log("  .getDay()                  → 0-6");

console.log("\n✏️ MODIFICAR:");
console.log("  .setFullYear(2025)         → Cambiar año");
console.log("  .setMonth(11)              → Diciembre");

console.log("\n🎨 FORMATEAR:");
console.log("  .toLocaleDateString()      → 15/1/2024");
console.log("  .toISOString()             → 2024-01-15T...");

console.log("\n📊 CÁLCULOS:");
console.log("  fecha2 - fecha1            → Diferencia en ms");

//--------------------------------------------------------------------------------------
// 🌐 DÍAS DE LA SEMANA Y MESES
//--------------------------------------------------------------------------------------

console.log("\n🌐 REFERENCIA:\n");

const DIAS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
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

console.log("Días de la semana (0-6):");
DIAS.forEach((dia, i) => console.log(`  ${i}: ${dia}`));

console.log("\nMeses del año (0-11):");
MESES.forEach((mes, i) => console.log(`  ${i}: ${mes}`));

//--------------------------------------------------------------------------------------
// 💡 BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

console.log("\n💡 BUENAS PRÁCTICAS:\n");

console.log("✅ HACER:");
console.log("  • Usar formato ISO: '2024-01-15'");
console.log("  • Copiar antes de modificar: new Date(fecha)");
console.log("  • Comparar con getTime()");
console.log("  • Validar fechas del usuario");
console.log("  • Usar UTC para cálculos precisos");

console.log("\n❌ NO HACER:");
console.log("  • Comparar con == o ===");
console.log("  • Olvidar que meses empiezan en 0");
console.log("  • Mutar fechas sin crear copia");
console.log("  • Usar getYear() (obsoleto)");

//--------------------------------------------------------------------------------------
// 📖 ORDEN DE ESTUDIO RECOMENDADO
//--------------------------------------------------------------------------------------

console.log("\n📖 ORDEN DE ESTUDIO:\n");

console.log("1. Básico:");
console.log("   01-creacion_fechas.js");
console.log("   02_objeto_date.js");
console.log("   03-metodos_get.js");
console.log("   04-metodos_set_calculos.js");

console.log("\n2. Intermedio:");
console.log("   05-formato_comparacion.js");
console.log("   06-zonas_horarias.js");

console.log("\n3. Avanzado:");
console.log("   07-utilidades_fechas.js");
console.log("   08-ejercicios_date.js");
console.log("   09-alternativas_date.js");

//--------------------------------------------------------------------------------------
// ✅ RESUMEN EJECUTIVO
//--------------------------------------------------------------------------------------

console.log("\n✅ RESUMEN EJECUTIVO:\n");
console.log("El objeto Date es fundamental para trabajar con fechas.");
console.log("\nConceptos clave:");
console.log("  • Los meses empiezan en 0 (enero=0)");
console.log("  • getDay() devuelve 0-6 (domingo=0)");
console.log("  • Las fechas son mutables");
console.log("  • Tiene auto-corrección automática");
console.log("\n🎯 Siguiente paso: Abre 01-creacion_fechas.js");

console.log("\n✅ Archivo 00-resumen_date.js cargado");
