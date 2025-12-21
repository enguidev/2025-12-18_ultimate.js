//--------------------------------------------------------------------------------------
// EJERCICIOS PRÁCTICOS - OBJETO MATH
//--------------------------------------------------------------------------------------

/*
🎯 Este archivo contiene 15 ejercicios prácticos con soluciones

Nivel:
⭐ = Básico
⭐⭐ = Intermedio
⭐⭐⭐ = Avanzado

Cada ejercicio incluye:
- Descripción del problema
- Pistas
- Solución completa
- Casos de prueba
*/

//--------------------------------------------------------------------------------------
// EJERCICIO 1: CALCULADORA DE PROPINAS ⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función que calcule la propina de un restaurante.
- Recibe: monto de la cuenta y porcentaje de propina
- Retorna: objeto con {subtotal, propina, total}
- Redondea a 2 decimales

💡 PISTAS:
- Usa Math.round() con multiplicación por 100
- O mejor: crea una función helper para redondear
*/

// SOLUCIÓN:
function calcularPropina(cuenta, porcentajePropina) {
  const redondear = (num) => Math.round(num * 100) / 100;

  const propina = redondear((cuenta * porcentajePropina) / 100);
  const total = redondear(cuenta + propina);

  return {
    subtotal: cuenta,
    propina: propina,
    total: total,
  };
}

// Casos de prueba:
console.log("=== EJERCICIO 1: Calculadora de Propinas ===");
console.log(calcularPropina(50, 15)); // {subtotal: 50, propina: 7.5, total: 57.5}
console.log(calcularPropina(123.45, 20)); // {subtotal: 123.45, propina: 24.69, total: 148.14}
console.log("✅ Ejercicio 1 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 2: GENERADOR DE DADOS ⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función que simule lanzar N dados de 6 caras.
- Recibe: cantidad de dados
- Retorna: array con los resultados
- Cada dado debe mostrar un número del 1 al 6

💡 PISTAS:
- Math.random() * 6 da números de 0 a 5.999...
- Necesitas sumar 1 y usar Math.floor()
*/

// SOLUCIÓN:
function lanzarDados(cantidad) {
  const resultados = [];

  for (let i = 0; i < cantidad; i++) {
    const dado = Math.floor(Math.random() * 6) + 1;
    resultados.push(dado);
  }

  return resultados;
}

// Casos de prueba:
console.log("=== EJERCICIO 2: Generador de Dados ===");
console.log("3 dados:", lanzarDados(3));
console.log("5 dados:", lanzarDados(5));
console.log("✅ Ejercicio 2 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 3: CALCULADORA DE DISTANCIA ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función que calcule la distancia entre dos puntos en un plano 2D.
- Recibe: x1, y1, x2, y2
- Retorna: distancia (redondeada a 2 decimales)
- Usa el teorema de Pitágoras

💡 PISTAS:
- Distancia = √((x2-x1)² + (y2-y1)²)
- Usa Math.hypot() o Math.sqrt() con Math.pow()
*/

// SOLUCIÓN:
function calcularDistancia(x1, y1, x2, y2) {
  // Método 1: Usando Math.hypot() (más simple)
  const distancia = Math.hypot(x2 - x1, y2 - y1);

  // Método 2: Usando Pitágoras manualmente
  // const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  return Math.round(distancia * 100) / 100;
}

// Casos de prueba:
console.log("=== EJERCICIO 3: Calculadora de Distancia ===");
console.log("(0,0) a (3,4):", calcularDistancia(0, 0, 3, 4)); // 5
console.log("(1,1) a (4,5):", calcularDistancia(1, 1, 4, 5)); // 5
console.log("(0,0) a (5,12):", calcularDistancia(0, 0, 5, 12)); // 13
console.log("✅ Ejercicio 3 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 4: GENERADOR DE CONTRASEÑAS ALEATORIAS ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función que genere una contraseña aleatoria.
- Recibe: longitud deseada
- Retorna: string con caracteres aleatorios
- Usa letras (mayúsculas y minúsculas) y números

💡 PISTAS:
- Crea un string con todos los caracteres posibles
- Usa Math.random() para elegir índices aleatorios
*/

// SOLUCIÓN:
function generarPassword(longitud) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    password += caracteres[indiceAleatorio];
  }

  return password;
}

// Casos de prueba:
console.log("=== EJERCICIO 4: Generador de Contraseñas ===");
console.log("Password 8 caracteres:", generarPassword(8));
console.log("Password 12 caracteres:", generarPassword(12));
console.log("Password 16 caracteres:", generarPassword(16));
console.log("✅ Ejercicio 4 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 5: REDONDEO INTELIGENTE ⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea funciones para redondear de diferentes formas:
- redondearArriba(): siempre hacia arriba
- redondearAbajo(): siempre hacia abajo
- redondearCercano(): al más cercano
- redondearDecimales(num, decimales): a N decimales

💡 PISTAS:
- Math.ceil(), Math.floor(), Math.round()
- Para decimales: multiplica, redondea, divide
*/

// SOLUCIÓN:
const redondeo = {
  arriba: (num) => Math.ceil(num),
  abajo: (num) => Math.floor(num),
  cercano: (num) => Math.round(num),
  decimales: (num, cant) =>
    Math.round(num * Math.pow(10, cant)) / Math.pow(10, cant),
};

// Casos de prueba:
console.log("=== EJERCICIO 5: Redondeo Inteligente ===");
const testNum = 4.567;
console.log(`Número: ${testNum}`);
console.log("Arriba:", redondeo.arriba(testNum)); // 5
console.log("Abajo:", redondeo.abajo(testNum)); // 4
console.log("Cercano:", redondeo.cercano(testNum)); // 5
console.log("2 decimales:", redondeo.decimales(testNum, 2)); // 4.57
console.log("1 decimal:", redondeo.decimales(testNum, 1)); // 4.6
console.log("✅ Ejercicio 5 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 6: CALCULADORA DE IMC ⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función que calcule el Índice de Masa Corporal (IMC).
- Recibe: peso (kg) y altura (metros)
- Retorna: objeto con {imc, clasificacion}
- IMC = peso / (altura²)

Clasificación:
- Menor a 18.5: "Bajo peso"
- 18.5 - 24.9: "Normal"
- 25 - 29.9: "Sobrepeso"
- 30 o más: "Obesidad"

💡 PISTAS:
- Usa Math.pow() para elevar al cuadrado
- Redondea a 1 decimal
*/

// SOLUCIÓN:
function calcularIMC(peso, altura) {
  const imc = Math.round((peso / Math.pow(altura, 2)) * 10) / 10;

  let clasificacion;
  if (imc < 18.5) clasificacion = "Bajo peso";
  else if (imc < 25) clasificacion = "Normal";
  else if (imc < 30) clasificacion = "Sobrepeso";
  else clasificacion = "Obesidad";

  return { imc, clasificacion };
}

// Casos de prueba:
console.log("=== EJERCICIO 6: Calculadora de IMC ===");
console.log("70kg, 1.75m:", calcularIMC(70, 1.75)); // IMC 22.9 - Normal
console.log("85kg, 1.80m:", calcularIMC(85, 1.8)); // IMC 26.2 - Sobrepeso
console.log("55kg, 1.65m:", calcularIMC(55, 1.65)); // IMC 20.2 - Normal
console.log("✅ Ejercicio 6 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 7: JUEGO DE ADIVINANZA ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea un juego donde la computadora elige un número aleatorio.
- Genera número entre 1 y 100
- Función verificarIntento(intento) que retorne:
  - "¡Ganaste!" si acierta
  - "Muy alto" si el intento es mayor
  - "Muy bajo" si el intento es menor

💡 PISTAS:
- Genera el número al crear el juego
- Guarda el número secreto en una variable
*/

// SOLUCIÓN:
function crearJuego() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let intentos = 0;

  return {
    verificar: function (intento) {
      intentos++;

      if (intento === numeroSecreto) {
        return `¡Ganaste en ${intentos} intentos! El número era ${numeroSecreto}`;
      } else if (intento > numeroSecreto) {
        return "Muy alto. Intenta de nuevo.";
      } else {
        return "Muy bajo. Intenta de nuevo.";
      }
    },
    revelar: function () {
      return `El número secreto es ${numeroSecreto}`;
    },
  };
}

// Casos de prueba:
console.log("=== EJERCICIO 7: Juego de Adivinanza ===");
const juego = crearJuego();
console.log("Número secreto:", juego.revelar());
console.log("Intento 50:", juego.verificar(50));
console.log("✅ Ejercicio 7 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 8: CALCULADORA DE ÁREA Y PERÍMETRO ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea funciones para calcular área y perímetro de:
- Círculo (radio)
- Cuadrado (lado)
- Rectángulo (base, altura)
- Triángulo (base, altura para área; a, b, c para perímetro)

💡 PISTAS:
- Círculo: área = π * r², perímetro = 2 * π * r
- Cuadrado: área = l², perímetro = 4 * l
- Rectángulo: área = b * h, perímetro = 2 * (b + h)
*/

// SOLUCIÓN:
const geometria = {
  circulo: {
    area: (radio) => Math.round(Math.PI * Math.pow(radio, 2) * 100) / 100,
    perimetro: (radio) => Math.round(2 * Math.PI * radio * 100) / 100,
  },
  cuadrado: {
    area: (lado) => Math.pow(lado, 2),
    perimetro: (lado) => 4 * lado,
  },
  rectangulo: {
    area: (base, altura) => base * altura,
    perimetro: (base, altura) => 2 * (base + altura),
  },
  triangulo: {
    area: (base, altura) => (base * altura) / 2,
    perimetro: (a, b, c) => a + b + c,
  },
};

// Casos de prueba:
console.log("=== EJERCICIO 8: Calculadora Geométrica ===");
console.log("Círculo radio 5:");
console.log("  Área:", geometria.circulo.area(5)); // 78.54
console.log("  Perímetro:", geometria.circulo.perimetro(5)); // 31.42

console.log("Cuadrado lado 4:");
console.log("  Área:", geometria.cuadrado.area(4)); // 16
console.log("  Perímetro:", geometria.cuadrado.perimetro(4)); // 16

console.log("Rectángulo 5x3:");
console.log("  Área:", geometria.rectangulo.area(5, 3)); // 15
console.log("  Perímetro:", geometria.rectangulo.perimetro(5, 3)); // 16

console.log("Triángulo base 6, altura 4:");
console.log("  Área:", geometria.triangulo.area(6, 4)); // 12
console.log("✅ Ejercicio 8 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 9: CONVERSOR DE TEMPERATURAS ⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea funciones para convertir temperaturas:
- celsiusAFahrenheit(c)
- fahrenheitACelsius(f)
- celsiusAKelvin(c)
- kelvinACelsius(k)

Fórmulas:
- F = C * 9/5 + 32
- C = (F - 32) * 5/9
- K = C + 273.15
- C = K - 273.15

Redondea a 2 decimales.

💡 PISTAS:
- Usa Math.round() con multiplicación
- Crea una función helper para redondear
*/

// SOLUCIÓN:
const temperatura = {
  redondear: (num) => Math.round(num * 100) / 100,

  celsiusAFahrenheit: function (c) {
    return this.redondear((c * 9) / 5 + 32);
  },

  fahrenheitACelsius: function (f) {
    return this.redondear(((f - 32) * 5) / 9);
  },

  celsiusAKelvin: function (c) {
    return this.redondear(c + 273.15);
  },

  kelvinACelsius: function (k) {
    return this.redondear(k - 273.15);
  },
};

// Casos de prueba:
console.log("=== EJERCICIO 9: Conversor de Temperaturas ===");
console.log("0°C a Fahrenheit:", temperatura.celsiusAFahrenheit(0)); // 32
console.log("100°C a Fahrenheit:", temperatura.celsiusAFahrenheit(100)); // 212
console.log("32°F a Celsius:", temperatura.fahrenheitACelsius(32)); // 0
console.log("0°C a Kelvin:", temperatura.celsiusAKelvin(0)); // 273.15
console.log("273.15K a Celsius:", temperatura.kelvinACelsius(273.15)); // 0
console.log("✅ Ejercicio 9 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 10: SIMULADOR DE TIRADAS DE MONEDA ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función que simule lanzar una moneda N veces.
- Recibe: número de lanzamientos
- Retorna: objeto con {cara, cruz, total, porcentajeCara, porcentajeCruz}

💡 PISTAS:
- Math.random() < 0.5 puede ser "cara"
- Cuenta cada resultado
- Calcula porcentajes al final
*/

// SOLUCIÓN:
function simularMoneda(lanzamientos) {
  let cara = 0;
  let cruz = 0;

  for (let i = 0; i < lanzamientos; i++) {
    if (Math.random() < 0.5) {
      cara++;
    } else {
      cruz++;
    }
  }

  return {
    cara,
    cruz,
    total: lanzamientos,
    porcentajeCara: Math.round((cara / lanzamientos) * 100),
    porcentajeCruz: Math.round((cruz / lanzamientos) * 100),
  };
}

// Casos de prueba:
console.log("=== EJERCICIO 10: Simulador de Moneda ===");
console.log("10 lanzamientos:", simularMoneda(10));
console.log("100 lanzamientos:", simularMoneda(100));
console.log("1000 lanzamientos:", simularMoneda(1000));
console.log("✅ Ejercicio 10 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 11: FUNCIÓN CLAMP (LIMITAR VALOR) ⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función clamp() que limite un número a un rango.
- Recibe: numero, min, max
- Si numero < min, retorna min
- Si numero > max, retorna max
- Si está en el rango, retorna numero

💡 PISTAS:
- Usa Math.min() y Math.max()
- Math.max(numero, min) asegura que no sea menor a min
- Math.min(resultado, max) asegura que no sea mayor a max
*/

// SOLUCIÓN:
function clamp(numero, min, max) {
  return Math.min(Math.max(numero, min), max);
}

// Casos de prueba:
console.log("=== EJERCICIO 11: Función Clamp ===");
console.log("clamp(15, 0, 10):", clamp(15, 0, 10)); // 10 (muy alto)
console.log("clamp(-5, 0, 10):", clamp(-5, 0, 10)); // 0 (muy bajo)
console.log("clamp(5, 0, 10):", clamp(5, 0, 10)); // 5 (en rango)
console.log("clamp(7.5, 0, 10):", clamp(7.5, 0, 10)); // 7.5
console.log("✅ Ejercicio 11 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 12: GENERADOR DE COLORES ALEATORIOS ⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea funciones que generen colores aleatorios en diferentes formatos:
- RGB: rgb(r, g, b) donde cada valor es 0-255
- HEX: #RRGGBB en hexadecimal

💡 PISTAS:
- RGB: genera 3 números aleatorios entre 0-255
- HEX: convierte cada valor a hexadecimal con toString(16)
- Usa padStart(2, '0') para asegurar 2 dígitos
*/

// SOLUCIÓN:
const colores = {
  randomRGB: function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  },

  randomHEX: function () {
    const r = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const g = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const b = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    return `#${r}${g}${b}`;
  },
};

// Casos de prueba:
console.log("=== EJERCICIO 12: Generador de Colores ===");
console.log("Color RGB:", colores.randomRGB());
console.log("Color HEX:", colores.randomHEX());
console.log("Color RGB:", colores.randomRGB());
console.log("Color HEX:", colores.randomHEX());
console.log("✅ Ejercicio 12 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 13: CALCULADORA DE ESTADÍSTICAS ⭐⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una función que calcule estadísticas de un array de números:
- promedio
- mediana
- moda (valor más frecuente)
- rango (max - min)

💡 PISTAS:
- Promedio: suma / cantidad
- Mediana: valor del medio (ordenar array primero)
- Moda: contar frecuencias
- Rango: Math.max() - Math.min()
*/

// SOLUCIÓN:
function calcularEstadisticas(numeros) {
  // Promedio
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  const promedio = Math.round((suma / numeros.length) * 100) / 100;

  // Mediana
  const ordenados = [...numeros].sort((a, b) => a - b);
  const medio = Math.floor(ordenados.length / 2);
  const mediana =
    ordenados.length % 2 === 0
      ? (ordenados[medio - 1] + ordenados[medio]) / 2
      : ordenados[medio];

  // Moda
  const frecuencias = {};
  numeros.forEach((num) => {
    frecuencias[num] = (frecuencias[num] || 0) + 1;
  });
  let maxFrecuencia = 0;
  let moda = null;
  for (let num in frecuencias) {
    if (frecuencias[num] > maxFrecuencia) {
      maxFrecuencia = frecuencias[num];
      moda = Number(num);
    }
  }

  // Rango
  const rango = Math.max(...numeros) - Math.min(...numeros);

  return { promedio, mediana, moda, rango };
}

// Casos de prueba:
console.log("=== EJERCICIO 13: Calculadora de Estadísticas ===");
console.log("[1,2,3,4,5]:", calcularEstadisticas([1, 2, 3, 4, 5]));
console.log("[10,20,20,30,40]:", calcularEstadisticas([10, 20, 20, 30, 40]));
console.log("[5,5,5,10,15]:", calcularEstadisticas([5, 5, 5, 10, 15]));
console.log("✅ Ejercicio 13 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 14: SIMULADOR DE DADOS CON PROBABILIDAD ⭐⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Simula lanzar 2 dados 1000 veces y analiza:
- Frecuencia de cada suma (2-12)
- Suma más común
- Suma menos común
- Porcentaje de cada suma

💡 PISTAS:
- Lanza 2 dados y suma resultados
- Usa un objeto para contar frecuencias
- El 7 debería ser el más común (matemáticamente)
*/

// SOLUCIÓN:
function simularDosDados(lanzamientos = 1000) {
  const frecuencias = {};

  // Inicializar frecuencias (2-12)
  for (let i = 2; i <= 12; i++) {
    frecuencias[i] = 0;
  }

  // Simular lanzamientos
  for (let i = 0; i < lanzamientos; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;
    frecuencias[suma]++;
  }

  // Calcular porcentajes
  const porcentajes = {};
  for (let suma in frecuencias) {
    porcentajes[suma] = Math.round((frecuencias[suma] / lanzamientos) * 100);
  }

  // Encontrar más y menos común
  let masComun = { suma: null, cantidad: 0 };
  let menosComun = { suma: null, cantidad: Infinity };

  for (let suma in frecuencias) {
    if (frecuencias[suma] > masComun.cantidad) {
      masComun = { suma: Number(suma), cantidad: frecuencias[suma] };
    }
    if (frecuencias[suma] < menosComun.cantidad) {
      menosComun = { suma: Number(suma), cantidad: frecuencias[suma] };
    }
  }

  return {
    frecuencias,
    porcentajes,
    masComun,
    menosComun,
    total: lanzamientos,
  };
}

// Casos de prueba:
console.log("=== EJERCICIO 14: Simulador de Dos Dados ===");
const resultados = simularDosDados(1000);
console.log("Más común:", resultados.masComun);
console.log("Menos común:", resultados.menosComun);
console.log("Porcentajes:", resultados.porcentajes);
console.log("✅ Ejercicio 14 completado\n");

//--------------------------------------------------------------------------------------
// EJERCICIO 15: CALCULADORA CIENTÍFICA ⭐⭐⭐
//--------------------------------------------------------------------------------------

/*
📝 ENUNCIADO:
Crea una calculadora científica con las siguientes funciones:
- potencia(base, exponente)
- raizCuadrada(numero)
- raizCubica(numero)
- logaritmo(numero, base) - base opcional (default: e)
- seno(angulo) - angulo en grados
- coseno(angulo) - angulo en grados
- factorial(n)

💡 PISTAS:
- Convierte grados a radianes: radianes = grados * (π / 180)
- Factorial: 5! = 5 * 4 * 3 * 2 * 1
- Logaritmo en base cualquiera: log_b(x) = ln(x) / ln(b)
*/

// SOLUCIÓN:
const calculadoraCientifica = {
  potencia: (base, exponente) => Math.pow(base, exponente),

  raizCuadrada: (numero) => {
    if (numero < 0)
      return "Error: No se puede calcular raíz cuadrada de número negativo";
    return Math.sqrt(numero);
  },

  raizCubica: (numero) => Math.cbrt(numero),

  logaritmo: (numero, base = Math.E) => {
    if (numero <= 0) return "Error: El logaritmo solo acepta números positivos";
    return Math.log(numero) / Math.log(base);
  },

  gradosARadianes: (grados) => grados * (Math.PI / 180),

  seno: function (gradosAngle) {
    const radianes = this.gradosARadianes(gradosAngle);
    return Math.round(Math.sin(radianes) * 10000) / 10000;
  },

  coseno: function (gradosAngle) {
    const radianes = this.gradosARadianes(gradosAngle);
    return Math.round(Math.cos(radianes) * 10000) / 10000;
  },

  tangente: function (gradosAngle) {
    const radianes = this.gradosARadianes(gradosAngle);
    return Math.round(Math.tan(radianes) * 10000) / 10000;
  },

  factorial: (n) => {
    if (n < 0) return "Error: No existe factorial de números negativos";
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  },
};

// Casos de prueba:
console.log("=== EJERCICIO 15: Calculadora Científica ===");
console.log("2^10:", calculadoraCientifica.potencia(2, 10)); // 1024
console.log("√16:", calculadoraCientifica.raizCuadrada(16)); // 4
console.log("∛27:", calculadoraCientifica.raizCubica(27)); // 3
console.log("log₁₀(100):", calculadoraCientifica.logaritmo(100, 10)); // 2
console.log("sen(30°):", calculadoraCientifica.seno(30)); // 0.5
console.log("cos(60°):", calculadoraCientifica.coseno(60)); // 0.5
