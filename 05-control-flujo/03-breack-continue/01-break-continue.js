//======================================
// BREAK Y CONTINUE EN JAVASCRIPT
// Control de flujo en bucles
//======================================

//======================================
// 1. BREAK - Salir del bucle completamente
//======================================

console.log("=== 1. BREAK ===\n");

// BREAK en FOR
console.log("--- Break en FOR ---");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("¡Encontré el 5! Saliendo del bucle...");
    break; // Sale del bucle completamente
  }
  console.log("Número:", i);
}
console.log("Bucle terminado\n");
// Output: 0, 1, 2, 3, 4, mensaje, "Bucle terminado"

// BREAK en WHILE
console.log("--- Break en WHILE ---");
let contador = 0;
while (true) {
  // Bucle infinito controlado
  console.log("Contador:", contador);
  contador++;

  if (contador === 3) {
    console.log("Llegamos a 3, saliendo...");
    break;
  }
}
console.log("While terminado\n");

// BREAK en DO-WHILE
console.log("--- Break en DO-WHILE ---");
let numero = 0;
do {
  console.log("Número:", numero);
  numero++;

  if (numero === 2) {
    console.log("Saliendo del do-while");
    break;
  }
} while (numero < 10);
console.log("Do-while terminado\n");

// BREAK en FOR...OF
console.log("--- Break en FOR...OF ---");
const frutas = ["manzana", "plátano", "naranja", "uva", "pera"];

for (const fruta of frutas) {
  if (fruta === "naranja") {
    console.log("Encontré naranja, deteniendo búsqueda");
    break;
  }
  console.log("Fruta:", fruta);
}
console.log();

// BREAK en FOR...IN
console.log("--- Break en FOR...IN ---");
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  profesion: "Developer",
};

for (const clave in persona) {
  if (clave === "ciudad") {
    console.log("Llegué a ciudad, terminando");
    break;
  }
  console.log(`${clave}: ${persona[clave]}`);
}
console.log();

//======================================
// 2. CONTINUE - Saltar a la siguiente iteración
//======================================

console.log("\n=== 2. CONTINUE ===\n");

// CONTINUE en FOR
console.log("--- Continue en FOR ---");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta los pares
  }
  console.log("Impar:", i);
}
console.log();
// Output: 1, 3, 5, 7, 9

// CONTINUE en WHILE
console.log("--- Continue en WHILE ---");
let n = 0;
while (n < 5) {
  n++;
  if (n === 3) {
    console.log("Saltando el 3");
    continue; // Salta al siguiente ciclo
  }
  console.log("Número:", n);
}
console.log();

// CONTINUE en FOR...OF
console.log("--- Continue en FOR...OF ---");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of numeros) {
  if (num % 2 === 0) {
    continue; // Salta los pares
  }
  console.log("Impar:", num);
}
console.log();

//======================================
// 3. DIFERENCIA ENTRE BREAK Y CONTINUE
//======================================

console.log("\n=== 3. BREAK vs CONTINUE ===\n");

// Con BREAK
console.log("--- Con BREAK ---");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Break en 5 - TERMINA TODO");
    break;
  }
  console.log(i);
}
// Output: 1, 2, 3, 4, mensaje

console.log();

// Con CONTINUE
console.log("--- Con CONTINUE ---");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Continue en 5 - SALTA SOLO ESTE");
    continue;
  }
  console.log(i);
}
// Output: 1, 2, 3, 4, mensaje, 6, 7, 8, 9, 10

//======================================
// 4. CASOS DE USO PRÁCTICOS
//======================================

console.log("\n\n=== 4. CASOS DE USO PRÁCTICOS ===\n");

// BREAK: Buscar un elemento
console.log("--- Buscar elemento con BREAK ---");
function buscarUsuario(usuarios, id) {
  for (const usuario of usuarios) {
    if (usuario.id === id) {
      console.log("Usuario encontrado:", usuario.nombre);
      return usuario; // break implícito
    }
  }
  console.log("Usuario no encontrado");
  return null;
}

const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "María" },
];

buscarUsuario(usuarios, 2);
console.log();

// CONTINUE: Filtrar elementos
console.log("--- Filtrar con CONTINUE ---");
function procesarPedidos(pedidos) {
  const procesados = [];

  for (const pedido of pedidos) {
    // Saltar pedidos cancelados
    if (pedido.estado === "cancelado") {
      console.log(`Pedido ${pedido.id} cancelado, saltando...`);
      continue;
    }

    // Saltar pedidos sin items
    if (!pedido.items || pedido.items.length === 0) {
      console.log(`Pedido ${pedido.id} vacío, saltando...`);
      continue;
    }

    // Procesar pedido válido
    console.log(`Procesando pedido ${pedido.id}`);
    procesados.push(pedido);
  }

  return procesados;
}

const pedidos = [
  { id: 1, items: ["producto1"], estado: "activo" },
  { id: 2, items: [], estado: "activo" },
  { id: 3, items: ["producto2"], estado: "cancelado" },
  { id: 4, items: ["producto3"], estado: "activo" },
];

procesarPedidos(pedidos);
console.log();

// BREAK: Validación con múltiples condiciones
console.log("--- Validación con BREAK ---");
function validarFormulario(datos) {
  const errores = [];

  // Array de validaciones
  const validaciones = [
    { campo: "nombre", valido: datos.nombre && datos.nombre.length > 0 },
    { campo: "email", valido: datos.email && datos.email.includes("@") },
    { campo: "edad", valido: datos.edad && datos.edad >= 18 },
    { campo: "terminos", valido: datos.aceptaTerminos === true },
  ];

  for (const validacion of validaciones) {
    if (!validacion.valido) {
      errores.push(`Error en: ${validacion.campo}`);

      // Si es un error crítico, detener validación
      if (validacion.campo === "email") {
        console.log("Email inválido - Error crítico");
        break;
      }
    }
  }

  return errores;
}

const formulario = {
  nombre: "Juan",
  email: "invalido",
  edad: 25,
  aceptaTerminos: true,
};

console.log(validarFormulario(formulario));
console.log();

//======================================
// 5. BREAK Y CONTINUE EN BUCLES ANIDADOS
//======================================

console.log("\n=== 5. BUCLES ANIDADOS ===\n");

// BREAK solo sale del bucle inmediato
console.log("--- BREAK en bucle interno ---");
for (let i = 1; i <= 3; i++) {
  console.log(`Externo: ${i}`);

  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log("  Break en j=2");
      break; // Solo sale del bucle interno
    }
    console.log(`  Interno: ${j}`);
  }
}
console.log();

// CONTINUE en bucle interno
console.log("--- CONTINUE en bucle interno ---");
for (let i = 1; i <= 3; i++) {
  console.log(`Externo: ${i}`);

  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log("  Continue en j=2");
      continue; // Solo salta esta iteración del bucle interno
    }
    console.log(`  Interno: ${j}`);
  }
}
console.log();

//======================================
// 6. LABELS (etiquetas) - Control avanzado
//======================================

console.log("\n=== 6. LABELS (Etiquetas) ===\n");

// BREAK con label - salir de bucles anidados
console.log("--- BREAK con label ---");
bucleExterno: for (let i = 1; i <= 3; i++) {
  console.log(`Externo: ${i}`);

  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log("  Break bucleExterno en i=2, j=2");
      break bucleExterno; // Sale de AMBOS bucles
    }
    console.log(`  Interno: ${j}`);
  }
}
console.log("Terminado completamente\n");

// CONTINUE con label - saltar al bucle externo
console.log("--- CONTINUE con label ---");
bucleExterno2: for (let i = 1; i <= 3; i++) {
  console.log(`Externo: ${i}`);

  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log("  Continue al bucleExterno2");
      continue bucleExterno2; // Salta a la siguiente iteración del externo
    }
    console.log(`  Interno: ${j}`);
  }
  console.log("  Fin del interno"); // Esto no se ejecuta cuando j=2
}
console.log();

// Ejemplo práctico: buscar en matriz
console.log("--- Buscar en matriz con labels ---");
function buscarEnMatriz(matriz, valor) {
  busqueda: for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === valor) {
        console.log(`Encontrado en [${i}][${j}]`);
        return { fila: i, columna: j };
      }
    }
  }
  console.log("No encontrado");
  return null;
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

buscarEnMatriz(matriz, 5);
console.log();

//======================================
// 7. ALTERNATIVAS MODERNAS (sin break/continue)
//======================================

console.log("\n=== 7. ALTERNATIVAS MODERNAS ===\n");

// En lugar de break para buscar
console.log("--- Alternativa a BREAK: .find() ---");
const productos = [
  { id: 1, nombre: "Laptop" },
  { id: 2, nombre: "Mouse" },
  { id: 3, nombre: "Teclado" },
];

// ❌ Con break
function buscarConBreak(productos, id) {
  for (const producto of productos) {
    if (producto.id === id) {
      return producto;
    }
  }
  return null;
}

// ✅ Con .find()
const buscarConFind = (productos, id) => {
  return productos.find((p) => p.id === id) ?? null;
};

console.log(buscarConFind(productos, 2));
console.log();

// En lugar de continue para filtrar
console.log("--- Alternativa a CONTINUE: .filter() ---");
const numerosConCeros = [1, 0, 2, 0, 3, 0, 4];

// ❌ Con continue
function filtrarConContinue(numeros) {
  const resultado = [];
  for (const num of numeros) {
    if (num === 0) continue;
    resultado.push(num);
  }
  return resultado;
}

// ✅ Con .filter()
const filtrarConFilter = (numeros) => numeros.filter((n) => n !== 0);

console.log(filtrarConFilter(numerosConCeros));
console.log();

// .some() para validar (alternativa a break)
console.log("--- Alternativa a BREAK: .some() ---");
const numeros2 = [1, 3, 5, 8, 9];

// ❌ Con break
function tieneParConBreak(numeros) {
  for (const num of numeros) {
    if (num % 2 === 0) {
      return true; // break implícito
    }
  }
  return false;
}

// ✅ Con .some()
const tieneParConSome = (numeros) => numeros.some((n) => n % 2 === 0);

console.log("¿Tiene números pares?", tieneParConSome(numeros2));
console.log();

// .every() para validar todo (alternativa a continue)
console.log("--- Alternativa a CONTINUE: .every() ---");
const edades = [25, 30, 19, 40];

// ❌ Con continue
function todosMayoresConContinue(edades) {
  for (const edad of edades) {
    if (edad < 18) return false;
  }
  return true;
}

// ✅ Con .every()
const todosMayoresConEvery = (edades) => edades.every((edad) => edad >= 18);

console.log("¿Todos mayores de edad?", todosMayoresConEvery(edades));
console.log();

//======================================
// 8. BUENAS PRÁCTICAS
//======================================

console.log("\n=== 8. BUENAS PRÁCTICAS ===\n");

// ✅ BIEN: Return temprano (mejor que break)
function validarUsuarioBien(usuario) {
  if (!usuario) return "Usuario no válido";
  if (!usuario.email) return "Email requerido";
  if (usuario.edad < 18) return "Menor de edad";
  return "Usuario válido";
}

// ❌ MAL: Usar break como control de flujo principal
function validarUsuarioMal(usuario) {
  let resultado = "";
  bucle: while (true) {
    if (!usuario) {
      resultado = "Usuario no válido";
      break;
    }
    if (!usuario.email) {
      resultado = "Email requerido";
      break;
    }
    if (usuario.edad < 18) {
      resultado = "Menor de edad";
      break;
    }
    resultado = "Usuario válido";
    break;
  }
  return resultado;
}

console.log(validarUsuarioBien({ email: "test@test.com", edad: 25 }));
console.log();

//======================================
// 9. CASOS DONDE NO FUNCIONAN
//======================================

console.log("\n=== 9. LIMITACIONES ===\n");

// ❌ BREAK/CONTINUE NO funcionan en forEach
console.log("--- NO funciona en forEach ---");
const nums = [1, 2, 3, 4, 5];

// Esto NO funciona (error de sintaxis)
// nums.forEach(num => {
//   if (num === 3) break; // ❌ Error!
// });

// ✅ Usa for...of si necesitas break/continue
for (const num of nums) {
  if (num === 3) {
    console.log("Break funciona en for...of");
    break;
  }
  console.log(num);
}
console.log();

//======================================
// RESUMEN COMPLETO
//======================================

console.log("\n=== RESUMEN ===\n");

const resumen = `
BREAK:
✅ Sale del bucle completamente
✅ Funciona en: for, while, do-while, for...of, for...in, switch
✅ Usa con labels para salir de bucles anidados
✅ NO funciona en: forEach, map, filter, etc.
❓ Cuándo usar: Buscar elementos, validación temprana
💡 Alternativa: .find(), .some(), return temprano

CONTINUE:
✅ Salta a la siguiente iteración
✅ Funciona en: for, while, do-while, for...of, for...in
✅ Usa con labels para controlar bucles externos
✅ NO funciona en: forEach, map, filter, etc.
❓ Cuándo usar: Filtrar elementos, saltar casos especiales
💡 Alternativa: .filter(), .map() con condiciones

LABELS:
✅ Permiten controlar bucles anidados
✅ Sintaxis: nombreLabel: for (...) { break nombreLabel; }
✅ Úsalos con moderación (pueden confundir)
💡 Alternativa: Extraer a funciones con return

MÉTODOS MODERNOS (preferidos):
✅ .find() en lugar de break para buscar
✅ .filter() en lugar de continue para filtrar
✅ .some() para validar si existe
✅ .every() para validar todos
✅ .map() para transformar
✅ return temprano en funciones
`;

console.log(resumen);
