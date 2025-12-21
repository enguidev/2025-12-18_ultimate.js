//--------------------------------------------------------------------------------------
// 🎯 SCOPE Y CONTEXTO (this)
//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
// 1️⃣ GLOBAL SCOPE (Ámbito Global)
//--------------------------------------------------------------------------------------

// Variables declaradas fuera de cualquier función
const colorGlobal = "azul";
var nombreGlobal = "Carlos";

function mostrarGlobal() {
  console.log(colorGlobal); // Accesible desde cualquier lugar
  console.log(nombreGlobal);
}

mostrarGlobal(); // azul, Carlos

console.log(colorGlobal); // azul (accesible también aquí)

// ⚠️ Variables sin declaración se vuelven globales (¡MAL!)
function crearGlobalMal() {
  edad = 25; // ❌ Sin var/let/const = global
}
crearGlobalMal();
console.log(edad); // 25 (accesible globalmente)

//--------------------------------------------------------------------------------------
// 2️⃣ FUNCTION SCOPE (Ámbito de Función)
//--------------------------------------------------------------------------------------

function miFuncion() {
  var dentroFuncion = "Solo aquí";
  let tambien = "También local";

  console.log(dentroFuncion); // ✅ Funciona
  console.log(tambien); // ✅ Funciona
}

miFuncion();
// console.log(dentroFuncion); // ❌ ReferenceError
// console.log(tambien); // ❌ ReferenceError

// var tiene function scope
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 - var ignora el bloque if
}
testVar();

//--------------------------------------------------------------------------------------
// 3️⃣ BLOCK SCOPE (Ámbito de Bloque)
//--------------------------------------------------------------------------------------

// let y const respetan bloques {}
if (true) {
  let dentroBloque = "Solo en este bloque";
  const tambienBloque = "Y también este";

  console.log(dentroBloque); // ✅ Funciona
}

// console.log(dentroBloque); // ❌ ReferenceError

// Bloques en bucles
for (let i = 0; i < 3; i++) {
  let dentroFor = "Solo en cada iteración";
  console.log(i, dentroFor);
}
// console.log(i); // ❌ ReferenceError
// console.log(dentroFor); // ❌ ReferenceError

//--------------------------------------------------------------------------------------
// 4️⃣ LEXICAL SCOPE (Ámbito Léxico)
//--------------------------------------------------------------------------------------

// Las funciones pueden acceder a variables de sus ámbitos exteriores

const exterior = "Soy exterior";

function funcion1() {
  const nivel1 = "Nivel 1";

  function funcion2() {
    const nivel2 = "Nivel 2";

    console.log(exterior); // ✅ Accesible
    console.log(nivel1); // ✅ Accesible
    console.log(nivel2); // ✅ Accesible
  }

  funcion2();
  // console.log(nivel2); // ❌ No accesible (está en funcion2)
}

funcion1();

//--------------------------------------------------------------------------------------
// 5️⃣ SCOPE CHAIN (Cadena de Ámbitos)
//--------------------------------------------------------------------------------------

const a = "global";

function primera() {
  const b = "primera";

  function segunda() {
    const c = "segunda";

    function tercera() {
      const d = "tercera";

      // Busca en: tercera → segunda → primera → global
      console.log(a, b, c, d); // Todos accesibles
    }

    tercera();
  }

  segunda();
}

primera();

//--------------------------------------------------------------------------------------
// 6️⃣ THIS - Contexto de Ejecución
//--------------------------------------------------------------------------------------

// 'this' depende de CÓMO se llama la función, no de dónde se define

// Caso 1: Global context
console.log(this); // Window (navegador) o global (Node.js)

function funcionGlobal() {
  console.log(this); // Window o global (en modo no estricto)
}

// Caso 2: Método de objeto
const persona = {
  nombre: "Ana",
  saludar() {
    console.log(this.nombre); // "Ana" - this es persona
  },
};

persona.saludar();

// Caso 3: Función perdida su contexto
const saludarSuelto = persona.saludar;
// saludarSuelto(); // undefined - this ya no es persona

//--------------------------------------------------------------------------------------
// 7️⃣ THIS EN ARROW FUNCTIONS
//--------------------------------------------------------------------------------------

// Arrow functions NO tienen su propio this
// Heredan this del contexto donde fueron DEFINIDAS

const objeto = {
  nombre: "Objeto",

  metodoNormal() {
    console.log("Normal:", this.nombre); // "Objeto"
  },

  metodoFlecha: () => {
    console.log("Flecha:", this.nombre); // undefined
  },

  metodoConCallback() {
    // Función tradicional
    setTimeout(function () {
      console.log("Callback normal:", this.nombre); // undefined
    }, 100);

    // Arrow function
    setTimeout(() => {
      console.log("Callback flecha:", this.nombre); // "Objeto"
    }, 200);
  },
};

objeto.metodoNormal();
objeto.metodoFlecha();
objeto.metodoConCallback();

//--------------------------------------------------------------------------------------
// 8️⃣ BIND, CALL Y APPLY
//--------------------------------------------------------------------------------------

function presentar(saludo, despedida) {
  return `${saludo}, soy ${this.nombre}. ${despedida}`;
}

const user = { nombre: "Carlos" };

// call: Invoca inmediatamente
console.log(presentar.call(user, "Hola", "Adiós"));
// "Hola, soy Carlos. Adiós"

// apply: Igual que call pero argumentos en array
console.log(presentar.apply(user, ["Hey", "Chao"]));
// "Hey, soy Carlos. Chao"

// bind: Crea nueva función con this fijo
const presentarCarlos = presentar.bind(user, "Buenos días");
console.log(presentarCarlos("Hasta luego"));
// "Buenos días, soy Carlos. Hasta luego"

//--------------------------------------------------------------------------------------
// 9️⃣ THIS EN CLASES
//--------------------------------------------------------------------------------------

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }

  saludarAsync() {
    setTimeout(() => {
      console.log(`Async: ${this.nombre}`); // Arrow mantiene this
    }, 100);
  }
}

const carlos = new Persona("Carlos");
carlos.saludar(); // "Hola, soy Carlos"
carlos.saludarAsync(); // "Async: Carlos"

//--------------------------------------------------------------------------------------
// 🔟 CLOSURE (Clausura) - Relacionado con Scope
//--------------------------------------------------------------------------------------

// Un closure es cuando una función "recuerda" las variables
// de su scope léxico incluso después de que la función externa haya terminado

function crearContador() {
  let contador = 0; // Variable privada

  return {
    incrementar() {
      contador++;
      return contador;
    },
    decrementar() {
      contador--;
      return contador;
    },
    obtener() {
      return contador;
    },
  };
}

const miContador = crearContador();
console.log(miContador.incrementar()); // 1
console.log(miContador.incrementar()); // 2
console.log(miContador.decrementar()); // 1
console.log(miContador.obtener()); // 1
// console.log(contador); // ❌ No accesible

//--------------------------------------------------------------------------------------
// 1️⃣1️⃣ PROBLEMAS COMUNES
//--------------------------------------------------------------------------------------

// Problema 1: Perder el contexto
const perro = {
  nombre: "Bobby",
  ladrar() {
    console.log(`${this.nombre} dice guau`);
  },
};

perro.ladrar(); // "Bobby dice guau"

const ladrarSolo = perro.ladrar;
// ladrarSolo(); // undefined dice guau

// ✅ Soluciones:
const ladrarBind = perro.ladrar.bind(perro);
ladrarBind(); // "Bobby dice guau"

// O con arrow function wrapper
const ladrarArrow = () => perro.ladrar();
ladrarArrow(); // "Bobby dice guau"

// Problema 2: this en eventos del DOM
const boton = {
  texto: "Clic aquí",
  manejarClick() {
    console.log(this.texto);
  },
};

// Si lo usaras en el DOM:
// elemento.addEventListener('click', boton.manejarClick); // ❌ this será el elemento
// elemento.addEventListener('click', () => boton.manejarClick()); // ✅ this correcto

//--------------------------------------------------------------------------------------
// 1️⃣2️⃣ MODO ESTRICTO
//--------------------------------------------------------------------------------------

("use strict");

function enModoEstricto() {
  console.log(this); // undefined (no Window)
}

enModoEstricto();

//--------------------------------------------------------------------------------------
// 1️⃣3️⃣ TABLA COMPARATIVA DE THIS
//--------------------------------------------------------------------------------------

console.log(`
╔═══════════════════════════╦═══════════════════════════════════╗
║ Contexto                  ║ Valor de 'this'                   ║
╠═══════════════════════════╬═══════════════════════════════════╣
║ Global                    ║ Window / global                   ║
║ Función normal (suelto)   ║ Window / undefined (strict)       ║
║ Método de objeto          ║ El objeto                         ║
║ Constructor (new)         ║ Nueva instancia                   ║
║ Arrow function            ║ Heredado del contexto externo     ║
║ call/apply/bind           ║ Especificado explícitamente       ║
║ Event handler (DOM)       ║ El elemento que disparó el evento ║
╚═══════════════════════════╩═══════════════════════════════════╝
`);

//--------------------------------------------------------------------------------------
// 1️⃣4️⃣ MEJORES PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ SCOPE:

1. Usa let y const (block scope)
2. Evita variables globales
3. Declara variables en el scope más pequeño posible
4. Usa IIFE para crear scopes privados
5. Aprovecha closures para encapsulación

✅ THIS:

1. Usa arrow functions para callbacks
2. Usa bind() para fijar contexto
3. Evita arrow functions como métodos de objeto
4. Usa arrow functions en clases para event handlers
5. En duda, usa arrow function o bind()

❌ EVITAR:

1. Variables sin declaración (globales accidentales)
2. var (usa let/const)
3. Arrow functions en métodos de objeto
4. Perder el contexto de this sin manejarlo
5. Modificar this manualmente (excepto con bind/call/apply)
*/

//--------------------------------------------------------------------------------------
// 1️⃣5️⃣ EJERCICIOS
//--------------------------------------------------------------------------------------

// Ejercicio 1: ¿Qué imprime?
const obj = {
  valor: 42,
  obtener() {
    return this.valor;
  },
};

const obtener = obj.obtener;
console.log(obj.obtener()); // ¿? → 42
// console.log(obtener()); // ¿? → undefined (o error)

// Ejercicio 2: ¿Qué imprime?
function externa() {
  const x = 10;

  return function interna() {
    console.log(x); // ¿? → 10
  };
}

const fn = externa();
fn();

// Ejercicio 3: ¿Qué imprime?
const animal = {
  tipo: "Perro",
  hablar: () => {
    console.log(this.tipo); // ¿? → undefined
  },
};

animal.hablar();
