//======================================
// EJERCICIOS DE CONDICIONALES
// Resuelve cada ejercicio siguiendo las instrucciones
//======================================

//------EJERCICIO 1------//
/**
 * Crea una función que determine si un número es par o impar
 * @param {number} numero
 * @returns {string} "Par" o "Impar"
 */
function parOImpar(numero) {
  // Tu código aquí
}

// Pruebas
console.log("--- EJERCICIO 1 ---");
console.log(parOImpar(4)); // Debe mostrar: "Par"
console.log(parOImpar(7)); // Debe mostrar: "Impar"

//------EJERCICIO 2------//
/**
 * Crea una función que determine si un año es bisiesto
 * Un año es bisiesto si:
 * - Es divisible por 4 Y
 * - NO es divisible por 100, O es divisible por 400
 * @param {number} año
 * @returns {boolean}
 */
function esBisiesto(año) {
  // Tu código aquí
}

// Pruebas
console.log("--- EJERCICIO 2 ---");
console.log(esBisiesto(2024)); // true
console.log(esBisiesto(2023)); // false
console.log(esBisiesto(2000)); // true
console.log(esBisiesto(1900)); // false

//------EJERCICIO 3------//
/**
 * Crea una función que clasifique la edad de una persona:
 * - 0-12: "Niño"
 * - 13-17: "Adolescente"
 * - 18-64: "Adulto"
 * - 65+: "Adulto mayor"
 * - Si la edad es negativa: "Edad inválida"
 * @param {number} edad
 * @returns {string}
 */
function clasificarEdad(edad) {
  // Tu código aquí
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
 * Crea una función que calcule el precio final con descuento:
 * - Si el precio es mayor a 100: 10% descuento
 * - Si el precio es mayor a 50: 5% descuento
 * - Si no: sin descuento
 * @param {number} precio
 * @returns {number} precio final redondeado a 2 decimales
 */
function calcularPrecioFinal(precio) {
  // Tu código aquí
}

// Pruebas
console.log("--- EJERCICIO 4 ---");
console.log(calcularPrecioFinal(150)); // 135
console.log(calcularPrecioFinal(80)); // 76
console.log(calcularPrecioFinal(30)); // 30

//------EJERCICIO 5------//
/**
 * Crea una función que evalúe una contraseña:
 * - Debe tener al menos 8 caracteres
 * - Debe contener al menos un número
 * - Si cumple ambas: "Contraseña válida"
 * - Si no: "Contraseña inválida: [razón]"
 * @param {string} password
 * @returns {string}
 */
function validarPassword(password) {
  // Tu código aquí
  // Pista: usa password.length y /\d/.test(password) para verificar números
}

// Pruebas
console.log("--- EJERCICIO 5 ---");
console.log(validarPassword("abc12345")); // "Contraseña válida"
console.log(validarPassword("abc")); // "Contraseña inválida: muy corta"
console.log(validarPassword("abcdefgh")); // "Contraseña inválida: sin números"

//------EJERCICIO 6------//
/**
 * Crea una función que determine el día de la semana y si hay descuento:
 * - Lunes a Jueves: "Día normal, sin descuento"
 * - Viernes: "Día normal, descuento 5%"
 * - Sábado y Domingo: "Fin de semana, descuento 10%"
 * - Otro valor: "Día inválido"
 * Usa SWITCH
 * @param {string} dia
 * @returns {string}
 */
function descuentoPorDia(dia) {
  // Tu código aquí usando switch
}

// Pruebas
console.log("--- EJERCICIO 6 ---");
console.log(descuentoPorDia("Lunes")); // "Día normal, sin descuento"
console.log(descuentoPorDia("Viernes")); // "Día normal, descuento 5%"
console.log(descuentoPorDia("Domingo")); // "Fin de semana, descuento 10%"

//------EJERCICIO 7------//
/**
 * Crea una función que determine si un estudiante aprobó:
 * - Necesita nota >= 60 Y asistencia >= 75%
 * - Retorna: "Aprobado" o "Reprobado"
 * - Si falta nota o asistencia: "Datos incompletos"
 * @param {number} nota
 * @param {number} asistencia
 * @returns {string}
 */
function evaluarEstudiante(nota, asistencia) {
  // Tu código aquí
}

// Pruebas
console.log("--- EJERCICIO 7 ---");
console.log(evaluarEstudiante(70, 80)); // "Aprobado"
console.log(evaluarEstudiante(70, 60)); // "Reprobado"
console.log(evaluarEstudiante(50, 80)); // "Reprobado"
console.log(evaluarEstudiante(null, 80)); // "Datos incompletos"

//------EJERCICIO 8------//
/**
 * Crea una función que convierta una calificación numérica a letra:
 * - 90-100: "A"
 * - 80-89: "B"
 * - 70-79: "C"
 * - 60-69: "D"
 * - 0-59: "F"
 * - Fuera de rango: "Calificación inválida"
 * Usa operador ternario anidado
 * @param {number} calificacion
 * @returns {string}
 */
function notaALetra(calificacion) {
  // Tu código aquí usando ternario
}

// Pruebas
console.log("--- EJERCICIO 8 ---");
console.log(notaALetra(95)); // "A"
console.log(notaALetra(85)); // "B"
console.log(notaALetra(55)); // "F"
console.log(notaALetra(105)); // "Calificación inválida"

//------EJERCICIO 9 (DESAFÍO)------//
/**
 * Crea una función que simule el acceso a un sistema:
 * - Necesita: username, password y rol
 * - Username no puede estar vacío
 * - Password debe tener al menos 6 caracteres
 * - Rol debe ser "admin" o "user"
 * - Si todo es correcto: "Acceso concedido como [rol]"
 * - Si algo falla: "Acceso denegado: [razón]"
 * @param {string} username
 * @param {string} password
 * @param {string} rol
 * @returns {string}
 */
function validarAcceso(username, password, rol) {
  // Tu código aquí
}

// Pruebas
console.log("--- EJERCICIO 9 ---");
console.log(validarAcceso("juan", "123456", "admin")); // "Acceso concedido como admin"
console.log(validarAcceso("", "123456", "admin")); // "Acceso denegado: username vacío"
console.log(validarAcceso("juan", "123", "admin")); // "Acceso denegado: password muy corta"
console.log(validarAcceso("juan", "123456", "guest")); // "Acceso denegado: rol inválido"

//------EJERCICIO 10 (DESAFÍO)------//
/**
 * Crea una función que calcule el costo de envío:
 * - Peso <= 1kg: $5
 * - Peso <= 5kg: $10
 * - Peso > 5kg: $15
 * - Si es express: añade $10 extra
 * - Si el destino es "internacional": multiplica el costo por 2
 * @param {number} peso (en kg)
 * @param {boolean} express
 * @param {string} destino ("nacional" o "internacional")
 * @returns {number}
 */
function calcularEnvio(peso, express, destino) {
  // Tu código aquí
}

// Pruebas
console.log("--- EJERCICIO 10 ---");
console.log(calcularEnvio(0.5, false, "nacional")); // 5
console.log(calcularEnvio(3, true, "nacional")); // 20 (10 + 10 express)
console.log(calcularEnvio(6, false, "internacional")); // 30 (15 * 2)
console.log(calcularEnvio(3, true, "internacional")); // 40 ((10 + 10) * 2)

//======================================
// ¡Completa todos los ejercicios!
// Empieza por los más fáciles y avanza
//======================================
