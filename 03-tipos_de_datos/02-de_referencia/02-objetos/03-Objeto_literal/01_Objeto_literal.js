//--------------------------------------------------------------------------------------
// OBJETOS LITERALES EN JAVASCRIPT
//--------------------------------------------------------------------------------------

/*
🎯 Un objeto literal es una colección de pares clave-valor (key-value pairs)
   También conocidos como propiedades del objeto.

Sintaxis básica:
  let objeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    metodo: function() { }
  };
*/

//--------------------------------------------------------------------------------------
// 1. CREACIÓN DE OBJETOS LITERALES
//--------------------------------------------------------------------------------------

// Objeto vacío (dos formas)
let objetoVacio1 = {};
let objetoVacio2 = new Object();

console.log(objetoVacio1); // {}
console.log(objetoVacio2); // {}

// Objeto con propiedades
let persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Madrid",
  activo: true,
};

console.log(persona);
/*
{
  nombre: "Juan",
  edad: 25,
  ciudad: "Madrid",
  activo: true
}
*/

// Objeto con diferentes tipos de datos
let producto = {
  id: 1,
  nombre: "Laptop",
  precio: 1200,
  disponible: true,
  tags: ["electrónica", "computadoras"],
  especificaciones: {
    ram: "16GB",
    cpu: "Intel i7",
  },
};

console.log(producto);

//--------------------------------------------------------------------------------------
// 2. ACCEDER A PROPIEDADES
//--------------------------------------------------------------------------------------

// Notación de punto (más común)
console.log(persona.nombre); // "Juan"
console.log(persona.edad); // 25

// Notación de corchetes (útil para propiedades dinámicas)
console.log(persona["nombre"]); // "Juan"
console.log(persona["edad"]); // 25

// Acceder a propiedades anidadas
console.log(producto.especificaciones.ram); // "16GB"
console.log(producto.especificaciones["cpu"]); // "Intel i7"

// Acceder a elementos de arrays dentro de objetos
console.log(producto.tags[0]); // "electrónica"
console.log(producto.tags[1]); // "computadoras"

//--------------------------------------------------------------------------------------
// 3. PROPIEDADES CALCULADAS (Computed Properties)
//--------------------------------------------------------------------------------------

// Usar variables como nombres de propiedades
let propiedad = "nombre";
console.log(persona[propiedad]); // "Juan"

let campo = "edad";
console.log(persona[campo]); // 25

// ⚠️ IMPORTANTE: No funciona con notación de punto
// console.log(persona.propiedad); // undefined (busca literal "propiedad")

// Crear objeto con propiedades calculadas (ES6+)
let clave = "nacionalidad";
let valor = "Española";

let usuario = {
  nombre: "Ana",
  [clave]: valor, // Propiedad calculada
  [`${clave}_codigo`]: "ES", // También con template literals
};

console.log(usuario);
/*
{
  nombre: "Ana",
  nacionalidad: "Española",
  nacionalidad_codigo: "ES"
}
*/

//--------------------------------------------------------------------------------------
// 4. MODIFICAR PROPIEDADES
//--------------------------------------------------------------------------------------

let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
};

// Modificar propiedad existente
coche.año = 2021;
console.log(coche.año); // 2021

// También con corchetes
coche["modelo"] = "Camry";
console.log(coche.modelo); // "Camry"

//--------------------------------------------------------------------------------------
// 5. AÑADIR PROPIEDADES
//--------------------------------------------------------------------------------------

// Añadir nueva propiedad con punto
coche.color = "Rojo";
console.log(coche);
/*
{
  marca: "Toyota",
  modelo: "Camry",
  año: 2021,
  color: "Rojo"
}
*/

// Añadir con corchetes
coche["puertas"] = 4;
console.log(coche.puertas); // 4

//--------------------------------------------------------------------------------------
// 6. ELIMINAR PROPIEDADES
//--------------------------------------------------------------------------------------

let animal = {
  tipo: "Perro",
  nombre: "Max",
  edad: 3,
  raza: "Labrador",
};

// Eliminar propiedad con delete
delete animal.raza;
console.log(animal);
/*
{
  tipo: "Perro",
  nombre: "Max",
  edad: 3
}
*/

// Verificar si se eliminó
console.log(animal.raza); // undefined

//--------------------------------------------------------------------------------------
// 7. MÉTODOS EN OBJETOS
//--------------------------------------------------------------------------------------

let persona2 = {
  nombre: "Carlos",
  edad: 30,

  // Método tradicional
  saludar: function () {
    return "Hola, soy " + this.nombre;
  },

  // Método abreviado (ES6+) - RECOMENDADO
  despedir() {
    return `Adiós, soy ${this.nombre}`;
  },

  // Método con parámetros
  cumplirAños() {
    this.edad++;
    return `Ahora tengo ${this.edad} años`;
  },
};

console.log(persona2.saludar()); // "Hola, soy Carlos"
console.log(persona2.despedir()); // "Adiós, soy Carlos"
console.log(persona2.cumplirAños()); // "Ahora tengo 31 años"
console.log(persona2.edad); // 31

//--------------------------------------------------------------------------------------
// 8. LA PALABRA CLAVE 'this'
//--------------------------------------------------------------------------------------

/*
'this' se refiere al objeto actual
*/

let contador = {
  valor: 0,

  incrementar() {
    this.valor++; // 'this' hace referencia al objeto 'contador'
    return this.valor;
  },

  decrementar() {
    this.valor--;
    return this.valor;
  },

  reset() {
    this.valor = 0;
    return "Contador reseteado";
  },
};

console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.incrementar()); // 3
console.log(contador.decrementar()); // 2
console.log(contador.reset()); // "Contador reseteado"
console.log(contador.valor); // 0

//--------------------------------------------------------------------------------------
// 9. VERIFICAR SI EXISTE UNA PROPIEDAD
//--------------------------------------------------------------------------------------

let libro = {
  titulo: "El Quijote",
  autor: "Cervantes",
  año: 1605,
};

// Método 1: hasOwnProperty()
console.log(libro.hasOwnProperty("titulo")); // true
console.log(libro.hasOwnProperty("editorial")); // false

// Método 2: Operador 'in'
console.log("autor" in libro); // true
console.log("paginas" in libro); // false

// Método 3: Verificar si es undefined (menos confiable)
console.log(libro.titulo !== undefined); // true
console.log(libro.editorial !== undefined); // false

//--------------------------------------------------------------------------------------
// 10. OBTENER CLAVES, VALORES Y ENTRADAS
//--------------------------------------------------------------------------------------

let estudiante = {
  nombre: "María",
  edad: 22,
  carrera: "Ingeniería",
  promedio: 8.5,
};

// Object.keys() - Obtener array de claves
console.log(Object.keys(estudiante));
// ["nombre", "edad", "carrera", "promedio"]

// Object.values() - Obtener array de valores
console.log(Object.values(estudiante));
// ["María", 22, "Ingeniería", 8.5]

// Object.entries() - Obtener array de [clave, valor]
console.log(Object.entries(estudiante));
/*
[
  ["nombre", "María"],
  ["edad", 22],
  ["carrera", "Ingeniería"],
  ["promedio", 8.5]
]
*/

//--------------------------------------------------------------------------------------
// 11. RECORRER OBJETOS
//--------------------------------------------------------------------------------------

let curso = {
  nombre: "JavaScript Avanzado",
  duracion: "40 horas",
  nivel: "Intermedio",
  precio: 299,
};

// Método 1: for...in
console.log("--- For...in ---");
for (let clave in curso) {
  console.log(`${clave}: ${curso[clave]}`);
}
/*
nombre: JavaScript Avanzado
duracion: 40 horas
nivel: Intermedio
precio: 299
*/

// Método 2: Object.keys() + forEach
console.log("\n--- Object.keys ---");
Object.keys(curso).forEach((clave) => {
  console.log(`${clave}: ${curso[clave]}`);
});

// Método 3: Object.entries() (más moderno)
console.log("\n--- Object.entries ---");
Object.entries(curso).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});

//--------------------------------------------------------------------------------------
// 12. COPIAR OBJETOS
//--------------------------------------------------------------------------------------

let original = {
  nombre: "Ana",
  edad: 25,
};

// ❌ INCORRECTO: Copia por referencia (ambas variables apuntan al mismo objeto)
let copiaReferencia = original;
copiaReferencia.edad = 30;
console.log(original.edad); // 30 (¡se modificó el original!)

// ✅ CORRECTO: Copia superficial con Object.assign()
let copiaSuperficial1 = Object.assign({}, original);
copiaSuperficial1.edad = 26;
console.log(original.edad); // 30 (no se modifica)

// ✅ CORRECTO: Copia superficial con spread operator (ES6+) - RECOMENDADO
let copiaSuperficial2 = { ...original };
copiaSuperficial2.nombre = "Luis";
console.log(original.nombre); // "Ana" (no se modifica)

// ⚠️ PROBLEMA: Copia superficial con objetos anidados
let objetoAnidado = {
  nombre: "Carlos",
  direccion: {
    calle: "Gran Vía",
    numero: 123,
  },
};

let copiaAnidada = { ...objetoAnidado };
copiaAnidada.direccion.numero = 456;
console.log(objetoAnidado.direccion.numero); // 456 (¡se modificó!)
// Esto pasa porque solo se copió la referencia del objeto interno

// ✅ SOLUCIÓN: Copia profunda con JSON (simple pero limitada)
let copiaProfunda1 = JSON.parse(JSON.stringify(objetoAnidado));
copiaProfunda1.direccion.numero = 789;
console.log(objetoAnidado.direccion.numero); // 456 (no se modifica)

// ✅ SOLUCIÓN: Copia profunda con structuredClone() (moderno, Node 17+)
// let copiaProfunda2 = structuredClone(objetoAnidado);

//--------------------------------------------------------------------------------------
// 13. COMBINAR OBJETOS
//--------------------------------------------------------------------------------------

let datosBasicos = {
  nombre: "Juan",
  edad: 28,
};

let datosContacto = {
  email: "juan@example.com",
  telefono: "123456789",
};

// Método 1: Object.assign()
let persona3 = Object.assign({}, datosBasicos, datosContacto);
console.log(persona3);
/*
{
  nombre: "Juan",
  edad: 28,
  email: "juan@example.com",
  telefono: "123456789"
}
*/

// Método 2: Spread operator (más moderno)
let persona4 = { ...datosBasicos, ...datosContacto };
console.log(persona4);

// Si hay propiedades duplicadas, el último objeto tiene prioridad
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let combinado = { ...obj1, ...obj2 };
console.log(combinado); // { a: 1, b: 3, c: 4 } (b fue sobrescrito)

//--------------------------------------------------------------------------------------
// 14. SHORTHAND PROPERTIES (ES6+)
//--------------------------------------------------------------------------------------

// Cuando el nombre de la variable coincide con la clave
let nombre = "Pedro";
let edad = 40;

// ❌ Forma antigua
let usuario1 = {
  nombre: nombre,
  edad: edad,
};

// ✅ Forma abreviada (ES6+)
let usuario2 = {
  nombre, // Equivalente a nombre: nombre
  edad, // Equivalente a edad: edad
};

console.log(usuario2); // { nombre: "Pedro", edad: 40 }

//--------------------------------------------------------------------------------------
// 15. OBJECT DESTRUCTURING (Desestructuración)
//--------------------------------------------------------------------------------------

let empleado = {
  nombre: "Ana García",
  puesto: "Desarrolladora",
  salario: 45000,
  empresa: "TechCorp",
};

// Extraer propiedades en variables
const { nombre: nombreEmpleado, puesto, salario } = empleado;
console.log(nombreEmpleado); // "Ana García"
console.log(puesto); // "Desarrolladora"
console.log(salario); // 45000

// Con valores por defecto
const { nombre: nom, antiguedad = 1 } = empleado;
console.log(nom); // "Ana García"
console.log(antiguedad); // 1 (valor por defecto, no existía en el objeto)

//--------------------------------------------------------------------------------------
// 16. MÉTODOS ÚTILES DE Object
//--------------------------------------------------------------------------------------

let config = {
  tema: "oscuro",
  idioma: "es",
  notificaciones: true,
};

// Object.freeze() - Congela el objeto (no se puede modificar)
Object.freeze(config);
config.tema = "claro"; // No hace nada
console.log(config.tema); // "oscuro"

// Object.seal() - Sella el objeto (se pueden modificar valores, no añadir/eliminar)
let ajustes = { volumen: 50, brillo: 80 };
Object.seal(ajustes);
ajustes.volumen = 70; // ✅ Funciona
ajustes.contraste = 100; // ❌ No se añade
delete ajustes.brillo; // ❌ No se elimina
console.log(ajustes); // { volumen: 70, brillo: 80 }

// Object.isFrozen() / Object.isSealed()
console.log(Object.isFrozen(config)); // true
console.log(Object.isSealed(ajustes)); // true

//--------------------------------------------------------------------------------------
// 17. GETTERS Y SETTERS
//--------------------------------------------------------------------------------------

let persona5 = {
  nombre: "Carlos",
  apellido: "López",

  // Getter: se accede como propiedad, no como método
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },

  // Setter: se establece como propiedad
  set nombreCompleto(valor) {
    const partes = valor.split(" ");
    this.nombre = partes[0];
    this.apellido = partes[1];
  },
};

console.log(persona5.nombreCompleto); // "Carlos López" (getter)
persona5.nombreCompleto = "Ana Martínez"; // (setter)
console.log(persona5.nombre); // "Ana"
console.log(persona5.apellido); // "Martínez"

//--------------------------------------------------------------------------------------
// 18. COMPARACIÓN DE OBJETOS
//--------------------------------------------------------------------------------------

let obj3 = { a: 1, b: 2 };
let obj4 = { a: 1, b: 2 };
let obj5 = obj3;

// Comparación por referencia (compara direcciones de memoria)
console.log(obj3 === obj4); // false (diferentes objetos en memoria)
console.log(obj3 === obj5); // true (misma referencia)

// Para comparar valores, usar JSON.stringify() (simple pero limitado)
console.log(JSON.stringify(obj3) === JSON.stringify(obj4)); // true

//--------------------------------------------------------------------------------------
// 19. OPTIONAL CHAINING (?.) - ES2020
//--------------------------------------------------------------------------------------

let usuario3 = {
  nombre: "Pedro",
  direccion: {
    calle: "Mayor",
    ciudad: "Madrid",
  },
};

// Sin optional chaining (puede dar error)
// console.log(usuario3.telefono.numero); // ❌ Error: Cannot read property 'numero' of undefined

// Con optional chaining
console.log(usuario3.telefono?.numero); // undefined (no da error)
console.log(usuario3.direccion?.ciudad); // "Madrid"

//--------------------------------------------------------------------------------------
// 20. NULLISH COALESCING (??) - ES2020
//--------------------------------------------------------------------------------------

let configuracion = {
  tema: null,
  idioma: "es",
  notificaciones: undefined,
};

// Valores por defecto con || (problema: considera 0, "", false como falsy)
let idioma1 = configuracion.idioma || "en";
console.log(idioma1); // "es"

// Valores por defecto con ?? (solo null o undefined)
let tema = configuracion.tema ?? "claro";
let notif = configuracion.notificaciones ?? true;
console.log(tema); // "claro"
console.log(notif); // true

//--------------------------------------------------------------------------------------
// 📊 TABLA RESUMEN - MÉTODOS DE Object
//--------------------------------------------------------------------------------------

/*
┌──────────────────────┬────────────────────────────────────────────┐
│ Método               │ Descripción                                │
├──────────────────────┼────────────────────────────────────────────┤
│ Object.keys()        │ Array de claves                            │
│ Object.values()      │ Array de valores                           │
│ Object.entries()     │ Array de [clave, valor]                    │
│ Object.assign()      │ Combinar objetos (copia superficial)       │
│ Object.freeze()      │ Congela el objeto (inmutable)              │
│ Object.seal()        │ Sella (no añadir/eliminar propiedades)     │
│ Object.isFrozen()    │ Verifica si está congelado                 │
│ Object.isSealed()    │ Verifica si está sellado                   │
│ Object.hasOwnProperty│ Verifica si tiene la propiedad             │
└──────────────────────┴────────────────────────────────────────────┘
*/

//--------------------------------------------------------------------------------------
// 💡 BUENAS PRÁCTICAS
//--------------------------------------------------------------------------------------

/*
✅ HACER:
1. Usar const para objetos que no se reasignarán
2. Usar spread operator para copiar/combinar objetos
3. Usar shorthand properties cuando sea posible
4. Usar métodos abreviados (ES6+) en lugar de function
5. Verificar existencia de propiedades antes de acceder
6. Usar optional chaining (?.) para acceso seguro
7. Usar Object.entries() para iterar objetos
8. Nombrar propiedades con camelCase

❌ NO HACER:
1. Modificar objetos congelados (Object.freeze)
2. Comparar objetos con === (compara referencias)
3. Mutar objetos sin intención (hacer copias)
4. Usar for...in sin verificar hasOwnProperty
5. Asumir que propiedades existen sin verificar
6. Usar nombres de propiedades con espacios o caracteres especiales
7. Confundir copia superficial con copia profunda
*/

console.log("\n✅ Archivo de objetos literales completado");
console.log("📚 Conceptos cubiertos: 20 secciones con ejemplos prácticos");
