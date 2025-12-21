// ================================
// 01 - CREACIÓN DE FECHAS
// ================================

console.log("=== FORMAS DE CREAR FECHAS ===\n");

// 1️⃣ new Date() - Sin argumentos: fecha y hora actual
const ahoraCompleto = new Date();
console.log("1. new Date():", ahoraCompleto);

// 2️⃣ new Date(timestamp) - Desde milisegundos desde 1/1/1970
const desdeTimestamp = new Date(0); // Epoch
console.log("\n2. new Date(0):", desdeTimestamp);

const timestamp2024 = new Date(1704067200000); // 1 enero 2024
console.log("   new Date(timestamp 2024):", timestamp2024);

// 3️⃣ new Date(string) - Desde string (varios formatos)
console.log("\n3. Desde strings:");
const fechaISO = new Date("2024-01-15");
console.log("   ISO (YYYY-MM-DD):", fechaISO);

const fechaISOCompleta = new Date("2024-01-15T10:30:00");
console.log("   ISO completa:", fechaISOCompleta);

const fechaISOZ = new Date("2024-01-15T10:30:00Z"); // Z = UTC
console.log("   ISO con Z (UTC):", fechaISOZ);

// ⚠️ CUIDADO: Formatos ambiguos (evitar)
const fechaAmbigua = new Date("01/02/2024"); // ¿1 feb o 2 enero?
console.log("   ⚠️ Formato ambiguo:", fechaAmbigua);

// 4️⃣ new Date(year, month, date, hours, minutes, seconds, ms)
// ⚠️ IMPORTANTE: month va de 0-11 (0=enero, 11=diciembre)
console.log("\n4. Con parámetros numéricos:");

const soloAñoMes = new Date(2024, 0); // 1 enero 2024
console.log("   Año y mes:", soloAñoMes);

const conDia = new Date(2024, 0, 15); // 15 enero 2024
console.log("   Con día:", conDia);

const conHora = new Date(2024, 0, 15, 14, 30); // 15 ene 14:30
console.log("   Con hora:", conHora);

const completa = new Date(2024, 0, 15, 14, 30, 45, 500);
console.log("   Completa:", completa);

// 5️⃣ Date.now() - Timestamp actual (método estático)
console.log("\n5. Date.now():");
const timestampActual = Date.now();
console.log("   Timestamp actual (ms):", timestampActual);
console.log("   Equivalente a:", new Date().getTime());

// 6️⃣ Date.parse() - Parsear string a timestamp
console.log("\n6. Date.parse():");
const parsedTimestamp = Date.parse("2024-01-15");
console.log("   Timestamp de '2024-01-15':", parsedTimestamp);
console.log("   Convertido a Date:", new Date(parsedTimestamp));

// 7️⃣ Date.UTC() - Crear fecha en UTC
console.log("\n7. Date.UTC():");
const utcTimestamp = Date.UTC(2024, 0, 15, 12, 0, 0);
console.log("   UTC timestamp:", utcTimestamp);
console.log("   Como Date:", new Date(utcTimestamp));

console.log("\n=== AUTO-CORRECCIÓN DE FECHAS ===\n");

// JavaScript auto-corrige fechas inválidas
const febrero31 = new Date(2024, 1, 31); // No existe 31 feb
console.log("31 de febrero se corrige a:", febrero31);
// Se convierte en 2 de marzo

const hora25 = new Date(2024, 0, 1, 25, 0); // Hora 25 no existe
console.log("Hora 25 se corrige a:", hora25);
// Se convierte en 1:00 del día siguiente

const mes13 = new Date(2024, 13, 1); // Mes 13 no existe
console.log("Mes 13 se corrige a:", mes13);
// Se convierte en febrero 2025

console.log("\n=== COPIAR FECHAS ===\n");

const original = new Date(2024, 0, 15);
console.log("Fecha original:", original);

// ❌ INCORRECTO: Solo copia la referencia
const copiaReferencia = original;
copiaReferencia.setMonth(11);
console.log("❌ Original cambió:", original.getMonth()); // 11 - ¡cambió!

// ✅ CORRECTO: Crear nueva instancia
const original2 = new Date(2024, 0, 15);
const copiaReal = new Date(original2);
// O también: new Date(original2.getTime())
copiaReal.setMonth(11);
console.log("✅ Original intacto:", original2.getMonth()); // 0 - no cambió

console.log("\n=== FECHAS INVÁLIDAS ===\n");

const fechaInvalida = new Date("fecha inválida");
console.log("Fecha inválida:", fechaInvalida);
console.log("¿Es inválida?:", isNaN(fechaInvalida.getTime()));

// Función para validar fechas
function esFechaValida(fecha) {
  return fecha instanceof Date && !isNaN(fecha.getTime());
}

console.log("¿'2024-01-15' es válida?:", esFechaValida(new Date("2024-01-15")));
console.log("¿'abc' es válida?:", esFechaValida(new Date("abc")));

console.log("\n=== RESUMEN ===");
console.log("✅ new Date() → fecha actual");
console.log("✅ new Date(timestamp) → desde milisegundos");
console.log("✅ new Date('2024-01-15') → desde string ISO");
console.log("✅ new Date(2024, 0, 15) → con parámetros (mes 0-11)");
console.log("✅ Date.now() → timestamp actual");
console.log("⚠️ Siempre validar fechas del usuario");
console.log("⚠️ Usar formato ISO para evitar ambigüedad");
