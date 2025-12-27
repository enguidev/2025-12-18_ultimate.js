//======================================
// BUENAS PRÁCTICAS EN CONDICIONALES
// Cómo escribir código más limpio y mantenible
//======================================

//======================================
// 1. EVITAR IF ANIDADOS (Guard Clauses)
//======================================

// ❌ MAL: Pirámide de if anidados
function procesarPagoMal(usuario, monto, metodoPago) {
  if (usuario) {
    if (usuario.activo) {
      if (monto > 0) {
        if (metodoPago) {
          if (metodoPago === "tarjeta" || metodoPago === "efectivo") {
            return "Pago procesado correctamente";
          } else {
            return "Método de pago inválido";
          }
        } else {
          return "Método de pago requerido";
        }
      } else {
        return "El monto debe ser mayor a 0";
      }
    } else {
      return "Usuario inactivo";
    }
  } else {
    return "Usuario no encontrado";
  }
}

// ✅ BIEN: Guard clauses (retornos tempranos)
function procesarPagoBien(usuario, monto, metodoPago) {
  // Validaciones primero, salimos temprano si algo falla
  if (!usuario) return "Usuario no encontrado";
  if (!usuario.activo) return "Usuario inactivo";
  if (monto <= 0) return "El monto debe ser mayor a 0";
  if (!metodoPago) return "Método de pago requerido";
  if (metodoPago !== "tarjeta" && metodoPago !== "efectivo") {
    return "Método de pago inválido";
  }

  // Lógica principal al final, sin anidamiento
  return "Pago procesado correctamente";
}

console.log("--- GUARD CLAUSES ---");
console.log(procesarPagoBien({ activo: true }, 100, "tarjeta"));

//======================================
// 2. REEMPLAZAR ELSE IF CON OBJETOS
//======================================

// ❌ MAL: Muchos else if
function obtenerDescuentoMal(tipoCliente) {
  if (tipoCliente === "nuevo") {
    return 0.05;
  } else if (tipoCliente === "regular") {
    return 0.1;
  } else if (tipoCliente === "premium") {
    return 0.2;
  } else if (tipoCliente === "vip") {
    return 0.3;
  } else {
    return 0;
  }
}

// ✅ BIEN: Objeto como mapa de valores
function obtenerDescuentoBien(tipoCliente) {
  const descuentos = {
    nuevo: 0.05,
    regular: 0.1,
    premium: 0.2,
    vip: 0.3,
  };

  return descuentos[tipoCliente] || 0;
}

console.log("--- OBJETO COMO MAPA ---");
console.log("Descuento VIP:", obtenerDescuentoBien("vip"));
console.log("Descuento desconocido:", obtenerDescuentoBien("otro"));

//======================================
// 3. OBJETOS CON FUNCIONES
//======================================

// ❌ MAL: Switch gigante con lógica compleja
function calcularPrecioEnvioMal(tipo, peso) {
  switch (tipo) {
    case "express":
      if (peso <= 1) return 15;
      else if (peso <= 5) return 25;
      else return 40;
    case "normal":
      if (peso <= 1) return 5;
      else if (peso <= 5) return 10;
      else return 15;
    case "economico":
      if (peso <= 1) return 3;
      else if (peso <= 5) return 6;
      else return 10;
    default:
      return 0;
  }
}

// ✅ BIEN: Objeto con funciones
function calcularPrecioEnvioBien(tipo, peso) {
  const calculadores = {
    express: (peso) => (peso <= 1 ? 15 : peso <= 5 ? 25 : 40),
    normal: (peso) => (peso <= 1 ? 5 : peso <= 5 ? 10 : 15),
    economico: (peso) => (peso <= 1 ? 3 : peso <= 5 ? 6 : 10),
  };

  const calcular = calculadores[tipo];
  return calcular ? calcular(peso) : 0;
}

console.log("--- OBJETO CON FUNCIONES ---");
console.log("Express 2kg:", calcularPrecioEnvioBien("express", 2));
console.log("Normal 6kg:", calcularPrecioEnvioBien("normal", 6));

//======================================
// 4. EVITAR ELSE INNECESARIOS
//======================================

// ❌ MAL: Else innecesario
function esMayorDeEdadMal(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

// ✅ BIEN: Retornar directamente la condición
function esMayorDeEdadBien(edad) {
  return edad >= 18;
}

console.log("--- EVITAR ELSE INNECESARIO ---");
console.log("Es mayor de edad:", esMayorDeEdadBien(20));

//======================================
// 5. EXTRAER CONDICIONES COMPLEJAS
//======================================

// ❌ MAL: Condición difícil de leer
function puedeAccederAlSistema(usuario) {
  if (
    usuario &&
    usuario.activo &&
    usuario.emailVerificado &&
    (usuario.rol === "admin" || usuario.rol === "moderador") &&
    usuario.ultimoAcceso > Date.now() - 86400000
  ) {
    return true;
  }
  return false;
}

// ✅ BIEN: Extraer condiciones a variables con nombres descriptivos
function puedeAccederAlSistemaBien(usuario) {
  if (!usuario) return false;

  const tienePermisos = usuario.rol === "admin" || usuario.rol === "moderador";
  const cuentaValida = usuario.activo && usuario.emailVerificado;
  const sesionReciente = usuario.ultimoAcceso > Date.now() - 86400000;

  return tienePermisos && cuentaValida && sesionReciente;
}

console.log("--- CONDICIONES DESCRIPTIVAS ---");
const usuarioPrueba = {
  activo: true,
  emailVerificado: true,
  rol: "admin",
  ultimoAcceso: Date.now(),
};
console.log("Puede acceder:", puedeAccederAlSistemaBien(usuarioPrueba));

//======================================
// 6. USAR OPERADORES LÓGICOS PARA ASIGNACIONES
//======================================

// ❌ MAL: If para asignar valores por defecto
function saludarMal(nombre) {
  let nombreFinal;
  if (nombre) {
    nombreFinal = nombre;
  } else {
    nombreFinal = "Invitado";
  }
  return "Hola, " + nombreFinal;
}

// ✅ BIEN: Operador OR para valores por defecto
function saludarBien(nombre) {
  const nombreFinal = nombre || "Invitado";
  return `Hola, ${nombreFinal}`;
}

// ✅ MEJOR: Nullish coalescing para solo null/undefined
function saludarMejor(nombre) {
  const nombreFinal = nombre ?? "Invitado";
  return `Hola, ${nombreFinal}`;
}

console.log("--- VALORES POR DEFECTO ---");
console.log(saludarBien("")); // "Hola, Invitado"
console.log(saludarMejor("")); // "Hola, " (más preciso)
console.log(saludarMejor(null)); // "Hola, Invitado"

//======================================
// 7. POLIMORFISMO EN LUGAR DE IF/ELSE
//======================================

// ❌ MAL: Muchos if para diferentes tipos
function procesarPagoConTipoMal(pago) {
  if (pago.tipo === "tarjeta") {
    return `Procesando tarjeta ${pago.numero}`;
  } else if (pago.tipo === "efectivo") {
    return `Procesando efectivo ${pago.monto}`;
  } else if (pago.tipo === "transferencia") {
    return `Procesando transferencia ${pago.banco}`;
  }
}

// ✅ BIEN: Clases o objetos con métodos
const procesadoresDePago = {
  tarjeta: (datos) => `Procesando tarjeta ${datos.numero}`,
  efectivo: (datos) => `Procesando efectivo ${datos.monto}`,
  transferencia: (datos) => `Procesando transferencia ${datos.banco}`,
};

function procesarPagoConTipoBien(pago) {
  const procesador = procesadoresDePago[pago.tipo];
  return procesador ? procesador(pago) : "Tipo de pago no soportado";
}

console.log("--- POLIMORFISMO ---");
console.log(procesarPagoConTipoBien({ tipo: "tarjeta", numero: "****1234" }));

//======================================
// 8. TABLA DE DECISIÓN
//======================================

// ❌ MAL: Lógica compleja con múltiples condiciones
function calcularTarifaMal(edad, esEstudiante, esFinde) {
  if (edad < 12) {
    if (esFinde) return 5;
    else return 3;
  } else if (edad >= 12 && edad < 65) {
    if (esEstudiante) {
      if (esFinde) return 8;
      else return 6;
    } else {
      if (esFinde) return 12;
      else return 10;
    }
  } else {
    if (esFinde) return 7;
    else return 5;
  }
}

// ✅ BIEN: Tabla de decisión clara
function calcularTarifaBien(edad, esEstudiante, esFinde) {
  const tarifas = {
    "niño-semana": 3,
    "niño-finde": 5,
    "adulto-semana": 10,
    "adulto-finde": 12,
    "estudiante-semana": 6,
    "estudiante-finde": 8,
    "senior-semana": 5,
    "senior-finde": 7,
  };

  let categoria;
  if (edad < 12) categoria = "niño";
  else if (edad >= 65) categoria = "senior";
  else if (esEstudiante) categoria = "estudiante";
  else categoria = "adulto";

  const momento = esFinde ? "finde" : "semana";
  const clave = `${categoria}-${momento}`;

  return tarifas[clave] || 10;
}

console.log("--- TABLA DE DECISIÓN ---");
console.log("Estudiante fin de semana:", calcularTarifaBien(20, true, true));
console.log("Niño entre semana:", calcularTarifaBien(8, false, false));

//======================================
// 9. FUNCIÓN PEQUEÑA = FUNCIÓN CLARA
//======================================

// ❌ MAL: Función grande con muchas responsabilidades
function validarYProcesarPedidoMal(pedido) {
  if (!pedido) return "Pedido no válido";
  if (!pedido.items || pedido.items.length === 0) return "Sin items";
  if (pedido.total <= 0) return "Total inválido";
  if (!pedido.cliente) return "Sin cliente";
  if (!pedido.cliente.email) return "Sin email";

  // Calcular envío
  let envio = 0;
  if (pedido.total < 50) envio = 10;
  else if (pedido.total < 100) envio = 5;

  // Aplicar descuento
  let descuento = 0;
  if (pedido.cliente.tipo === "vip") descuento = 0.2;
  else if (pedido.cliente.tipo === "premium") descuento = 0.1;

  const subtotal = pedido.total * (1 - descuento) + envio;

  return { valido: true, total: subtotal };
}

// ✅ BIEN: Funciones pequeñas y especializadas
function validarPedido(pedido) {
  if (!pedido) return "Pedido no válido";
  if (!pedido.items?.length) return "Sin items";
  if (pedido.total <= 0) return "Total inválido";
  if (!pedido.cliente?.email) return "Sin email";
  return null; // null = válido
}

function calcularEnvio(total) {
  if (total >= 100) return 0;
  if (total >= 50) return 5;
  return 10;
}

function obtenerDescuento(tipoCliente) {
  const descuentos = {
    vip: 0.2,
    premium: 0.1,
  };
  return descuentos[tipoCliente] || 0;
}

function validarYProcesarPedidoBien(pedido) {
  const error = validarPedido(pedido);
  if (error) return error;

  const envio = calcularEnvio(pedido.total);
  const descuento = obtenerDescuento(pedido.cliente.tipo);
  const total = pedido.total * (1 - descuento) + envio;

  return { valido: true, total };
}

console.log("--- FUNCIONES PEQUEÑAS ---");
const pedidoPrueba = {
  items: [{ nombre: "Producto" }],
  total: 75,
  cliente: { email: "test@test.com", tipo: "premium" },
};
console.log(validarYProcesarPedidoBien(pedidoPrueba));

//======================================
// 10. RESUMEN DE BUENAS PRÁCTICAS
//======================================

/*
✅ USA GUARD CLAUSES
   - Valida y retorna temprano
   - Evita anidamiento

✅ REEMPLAZA IF/ELSE CON OBJETOS
   - Más escalable y mantenible
   - Fácil de extender

✅ EXTRAE CONDICIONES COMPLEJAS
   - Variables con nombres descriptivos
   - Código más legible

✅ EVITA ELSE INNECESARIOS
   - Retorna directamente cuando sea posible
   - Menos indentación

✅ FUNCIONES PEQUEÑAS
   - Una responsabilidad por función
   - Más fácil de testear y reutilizar

✅ USA OPERADORES MODERNOS
   - ?? para valores por defecto
   - ?. para acceso seguro
   - || y && para lógica concisa

❌ EVITA
   - Pirámides de if anidados
   - Condiciones muy largas sin nombres
   - Funciones gigantes que hacen muchas cosas
   - Switch con mucha lógica compleja
*/

//======================================
// EJERCICIO PRÁCTICO
//======================================

// Refactoriza esta función usando buenas prácticas:
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

// Tu solución aquí:
function procesarReservaBien(reserva) {
  // Aplica las buenas prácticas que aprendiste
}

console.log("--- EJERCICIO ---");
console.log("Intenta refactorizar procesarReservaMal usando guard clauses");
