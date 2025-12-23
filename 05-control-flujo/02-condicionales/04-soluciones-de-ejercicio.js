//======================================
// SOLUCIONES - EJERCICIOS DE CONDICIONALES
//======================================

//------EJERCICIO 1------//
/**
 * Crea una función que determine si un número es par o impar
 */
function parOImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Impar";
}

// Pruebas
console.log("--- EJERCICIO 1 ---");
console.log(parOImpar(4)); // "Par"
console.log(parOImpar(7)); // "Impar"

//------EJERCICIO 2------//
/**
 * Crea una función que determine si un año es bisiesto
 */
function esBisiesto(año) {
  return (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
}

// Pruebas
console.log("--- EJERCICIO 2 ---");
console.log(esBisiesto(2024)); // true
console.log(esBisiesto(2023)); // false
console.log(esBisiesto(2000)); // true
console.log(esBisiesto(1900)); // false

//------EJERCICIO 3------//
/**
 * Crea una función que clasifique la edad de una persona
 */
function clasificarEdad(edad) {
  if (edad < 0) return "Edad inválida";
  if (edad <= 12) return "Niño";
  if (edad <= 17) return "Adolescente";
  if (edad <= 64) return "Adulto";
  return "Adulto mayor";
}

// Pruebas
console.log("--- EJERCICIO 3 ---");
console.log(clasificarEdad(10)); // "Niño"
console.log(clasificarEdad(15)); // "Adolescente"
console.log(clasificarEdad(30)); // "Adulto"
console.log(clasificarEdad(70)); // "Adulto mayor"
console.log(clasificarEdad(-5)); // "Edad inválida"

//------EJERCICIO 4------//
/**
 * Crea una función que calcule el precio final con descuento
 */
function calcularPrecioFinal(precio) {
  let descuento = 0;

  if (precio > 100) {
    descuento = 0.1;
  } else if (precio > 50) {
    descuento = 0.05;
  }

  const precioFinal = precio * (1 - descuento);
  return Math.round(precioFinal * 100) / 100; // Redondear a 2 decimales
}

// Alternativa más concisa:
function calcularPrecioFinalV2(precio) {
  const descuento = precio > 100 ? 0.1 : precio > 50 ? 0.05 : 0;
  return Math.round(precio * (1 - descuento) * 100) / 100;
}

// Pruebas
console.log("--- EJERCICIO 4 ---");
console.log(calcularPrecioFinal(150)); // 135
console.log(calcularPrecioFinal(80)); // 76
console.log(calcularPrecioFinal(30)); // 30

//------EJERCICIO 5------//
/**
 * Crea una función que evalúe una contraseña
 */
function validarPassword(password) {
  if (password.length < 8) {
    return "Contraseña inválida: muy corta";
  }

  if (!/\d/.test(password)) {
    return "Contraseña inválida: sin números";
  }

  return "Contraseña válida";
}

// Pruebas
console.log("--- EJERCICIO 5 ---");
console.log(validarPassword("abc12345")); // "Contraseña válida"
console.log(validarPassword("abc")); // "Contraseña inválida: muy corta"
console.log(validarPassword("abcdefgh")); // "Contraseña inválida: sin números"

//------EJERCICIO 6------//
/**
 * Crea una función que determine el día de la semana y si hay descuento
 */
function descuentoPorDia(dia) {
  switch (dia.toLowerCase()) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
      return "Día normal, sin descuento";

    case "viernes":
      return "Día normal, descuento 5%";

    case "sábado":
    case "domingo":
      return "Fin de semana, descuento 10%";

    default:
      return "Día inválido";
  }
}

// Pruebas
console.log("--- EJERCICIO 6 ---");
console.log(descuentoPorDia("Lunes")); // "Día normal, sin descuento"
console.log(descuentoPorDia("Viernes")); // "Día normal, descuento 5%"
console.log(descuentoPorDia("Domingo")); // "Fin de semana, descuento 10%"

//------EJERCICIO 7------//
/**
 * Crea una función que determine si un estudiante aprobó
 */
function evaluarEstudiante(nota, asistencia) {
  if (nota == null || asistencia == null) {
    return "Datos incompletos";
  }

  if (nota >= 60 && asistencia >= 75) {
    return "Aprobado";
  }

  return "Reprobado";
}

// Alternativa más concisa:
function evaluarEstudianteV2(nota, asistencia) {
  if (nota == null || asistencia == null) return "Datos incompletos";
  return nota >= 60 && asistencia >= 75 ? "Aprobado" : "Reprobado";
}

// Pruebas
console.log("--- EJERCICIO 7 ---");
console.log(evaluarEstudiante(70, 80)); // "Aprobado"
console.log(evaluarEstudiante(70, 60)); // "Reprobado"
console.log(evaluarEstudiante(50, 80)); // "Reprobado"
console.log(evaluarEstudiante(null, 80)); // "Datos incompletos"

//------EJERCICIO 8------//
/**
 * Crea una función que convierta una calificación numérica a letra
 */
function notaALetra(calificacion) {
  return calificacion < 0 || calificacion > 100
    ? "Calificación inválida"
    : calificacion >= 90
    ? "A"
    : calificacion >= 80
    ? "B"
    : calificacion >= 70
    ? "C"
    : calificacion >= 60
    ? "D"
    : "F";
}

// Alternativa con if para mayor claridad:
function notaALetraV2(calificacion) {
  if (calificacion < 0 || calificacion > 100) return "Calificación inválida";
  if (calificacion >= 90) return "A";
  if (calificacion >= 80) return "B";
  if (calificacion >= 70) return "C";
  if (calificacion >= 60) return "D";
  return "F";
}

// Pruebas
console.log("--- EJERCICIO 8 ---");
console.log(notaALetra(95)); // "A"
console.log(notaALetra(85)); // "B"
console.log(notaALetra(55)); // "F"
console.log(notaALetra(105)); // "Calificación inválida"

//------EJERCICIO 9 (DESAFÍO)------//
/**
 * Crea una función que simule el acceso a un sistema
 */
function validarAcceso(username, password, rol) {
  if (!username) return "Acceso denegado: username vacío";
  if (password.length < 6) return "Acceso denegado: password muy corta";
  if (rol !== "admin" && rol !== "user") return "Acceso denegado: rol inválido";

  return `Acceso concedido como ${rol}`;
}

// Pruebas
console.log("--- EJERCICIO 9 ---");
console.log(validarAcceso("juan", "123456", "admin")); // "Acceso concedido como admin"
console.log(validarAcceso("", "123456", "admin")); // "Acceso denegado: username vacío"
console.log(validarAcceso("juan", "123", "admin")); // "Acceso denegado: password muy corta"
console.log(validarAcceso("juan", "123456", "guest")); // "Acceso denegado: rol inválido"

//------EJERCICIO 10 (DESAFÍO)------//
/**
 * Crea una función que calcule el costo de envío
 */
function calcularEnvio(peso, express, destino) {
  // Calcular costo base según el peso
  let costoBase;
  if (peso <= 1) {
    costoBase = 5;
  } else if (peso <= 5) {
    costoBase = 10;
  } else {
    costoBase = 15;
  }

  // Añadir costo express si aplica
  if (express) {
    costoBase += 10;
  }

  // Multiplicar por 2 si es internacional
  if (destino === "internacional") {
    costoBase *= 2;
  }

  return costoBase;
}

// Alternativa más concisa:
function calcularEnvioV2(peso, express, destino) {
  const costoBase = peso <= 1 ? 5 : peso <= 5 ? 10 : 15;
  const conExpress = express ? costoBase + 10 : costoBase;
  return destino === "internacional" ? conExpress * 2 : conExpress;
}

// Pruebas
console.log("--- EJERCICIO 10 ---");
console.log(calcularEnvio(0.5, false, "nacional")); // 5
console.log(calcularEnvio(3, true, "nacional")); // 20 (10 + 10 express)
console.log(calcularEnvio(6, false, "internacional")); // 30 (15 * 2)
console.log(calcularEnvio(3, true, "internacional")); // 40 ((10 + 10) * 2)

//======================================
// SOLUCIÓN DEL EJERCICIO DE BUENAS PRÁCTICAS
//======================================

// Función original (MAL):
function procesarReservaMal(reserva) {
  if (reserva) {
    if (reserva.fecha) {
      if (reserva.personas > 0) {
        if (reserva.tipo === "cena" || reserva.tipo === "almuerzo") {
          if (reserva.personas <= 10) {
            return "Reserva confirmada";
          } else {
            if (reserva.tipo === "cena") {
              return "Requiere reserva especial";
            } else {
              return "Capacidad excedida";
            }
          }
        } else {
          return "Tipo de reserva inválido";
        }
      } else {
        return "Número de personas inválido";
      }
    } else {
      return "Fecha requerida";
    }
  } else {
    return "Reserva no válida";
  }
}

// Refactorizada con GUARD CLAUSES (BIEN):
function procesarReservaBien(reserva) {
  // Validaciones tempranas (Guard Clauses)
  if (!reserva) return "Reserva no válida";
  if (!reserva.fecha) return "Fecha requerida";
  if (reserva.personas <= 0) return "Número de personas inválido";
  if (reserva.tipo !== "cena" && reserva.tipo !== "almuerzo") {
    return "Tipo de reserva inválido";
  }

  // Lógica principal sin anidamiento
  if (reserva.personas <= 10) {
    return "Reserva confirmada";
  }

  return reserva.tipo === "cena"
    ? "Requiere reserva especial"
    : "Capacidad excedida";
}

console.log("--- EJERCICIO BUENAS PRÁCTICAS ---");
console.log(
  procesarReservaBien({
    fecha: "2024-12-25",
    personas: 6,
    tipo: "cena",
  })
); // "Reserva confirmada"

console.log(
  procesarReservaBien({
    fecha: "2024-12-25",
    personas: 15,
    tipo: "cena",
  })
); // "Requiere reserva especial"

//======================================
// COMPARACIÓN DE ESTILOS
//======================================

console.log("\n--- COMPARACIÓN DE ESTILOS ---");
console.log("Las soluciones V2 son más concisas pero menos legibles");
console.log("Usa el estilo que tu equipo prefiera y sea más mantenible");
console.log("La claridad siempre es más importante que la brevedad");
