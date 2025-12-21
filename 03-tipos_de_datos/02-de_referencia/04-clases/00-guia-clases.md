# 📚 Guía Completa de Clases en JavaScript

## 📑 Índice

1. [Introducción](#introducción)
2. [Fundamentos](#fundamentos)
3. [Propiedades Privadas](#propiedades-privadas)
4. [Getters y Setters](#getters-setters)
5. [Métodos Estáticos](#métodos-estáticos)
6. [Herencia](#herencia)
7. [Conceptos Avanzados](#avanzados)
8. [Mejores Prácticas](#mejores-prácticas)

---

## 🎯 Introducción {#introducción}

### ¿Qué son las clases?

Las clases son **plantillas para crear objetos**. Encapsulan:

- **Datos** (propiedades/atributos)
- **Comportamiento** (métodos/funciones)

### Historia en JavaScript

| Año      | Versión | Característica           |
| -------- | ------- | ------------------------ |
| Pre-2015 | ES5     | Funciones constructoras  |
| 2015     | ES6     | Sintaxis `class`         |
| 2022     | ES13    | Propiedades privadas `#` |

### Sintaxis Básica

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

// Crear instancia
const persona = new Persona("Ana", 25);
persona.saludar(); // "Hola, soy Ana"
```

---

## 🏗️ Fundamentos {#fundamentos}

### 1. Constructor

El **constructor** es un método especial que se ejecuta automáticamente al crear una instancia.

```javascript
class Libro {
  constructor(titulo, autor, paginas) {
    // Validación
    if (!titulo || !autor) {
      throw new Error("Título y autor son obligatorios");
    }

    // Asignación
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.paginaActual = 0;
  }
}

const libro = new Libro("El Quijote", "Cervantes", 400);
```

**Características del constructor:**

- ✅ Solo puede haber **uno por clase**
- ✅ Se ejecuta automáticamente con `new`
- ✅ Ideal para inicializar propiedades
- ✅ Puede lanzar errores si los datos son inválidos

### 2. Métodos de Instancia

Son funciones que pertenecen a cada objeto creado.

```javascript
class Calculadora {
  constructor() {
    this.historial = [];
  }

  sumar(a, b) {
    const resultado = a + b;
    this.historial.push(`${a} + ${b} = ${resultado}`);
    return resultado;
  }

  verHistorial() {
    this.historial.forEach((op) => console.log(op));
  }
}

const calc = new Calculadora();
calc.sumar(5, 3); // 8
calc.sumar(10, 2); // 12
calc.verHistorial();
```

### 3. Propiedades

```javascript
class Coche {
  constructor(marca, modelo) {
    // Propiedades públicas
    this.marca = marca;
    this.modelo = modelo;
    this.kilometraje = 0;
  }

  conducir(km) {
    this.kilometraje += km;
  }
}
```

---

## 🔒 Propiedades Privadas {#propiedades-privadas}

### Problema: Todo es público por defecto

```javascript
class Usuario {
  constructor(nombre, password) {
    this.nombre = nombre;
    this.password = password; // ❌ Visible desde fuera
  }
}

const user = new Usuario("Ana", "secreto123");
console.log(user.password); // ❌ "secreto123" - Muy inseguro
```

### Solución 1: Convención con `_` (Compatible)

```javascript
class Usuario {
  constructor(nombre, password) {
    this._nombre = nombre;
    this._password = password; // Convención: "privado"
  }

  verificarPassword(pass) {
    return this._password === pass;
  }
}

const user = new Usuario("Ana", "secreto123");
// Por convención, NO deberías acceder a user._password
```

**⚠️ Nota:** El guión bajo `_` es solo una **convención**. Técnicamente sigue siendo accesible.

### Solución 2: Propiedades privadas con `#` (ES2022+)

```javascript
class Usuario {
  #password; // ✅ Verdaderamente privado

  constructor(nombre, password) {
    this.nombre = nombre;
    this.#password = password;
  }

  verificarPassword(pass) {
    return this.#password === pass;
  }
}

const user = new Usuario("Ana", "secreto123");
console.log(user.#password); // ❌ Error: Private field
```

### Métodos Privados

```javascript
class CuentaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  // Método privado
  #validarCantidad(cantidad) {
    return cantidad > 0 && cantidad <= this.#saldo;
  }

  // Método público
  retirar(cantidad) {
    if (this.#validarCantidad(cantidad)) {
      this.#saldo -= cantidad;
      return true;
    }
    return false;
  }
}
```

---

## 🎯 Getters y Setters {#getters-setters}

### ¿Para qué sirven?

- **Getters**: Acceder a propiedades (como si fueran propiedades, no métodos)
- **Setters**: Modificar propiedades con validación

### Sintaxis

```javascript
class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  // GETTER - se accede sin paréntesis
  get nombreCompleto() {
    return `${this._nombre} ${this._apellido}`;
  }

  // SETTER - se asigna como propiedad
  set nombre(nuevoNombre) {
    if (nuevoNombre.length < 2) {
      throw new Error("Nombre muy corto");
    }
    this._nombre = nuevoNombre;
  }
}

const persona = new Persona("Ana", "García");
console.log(persona.nombreCompleto); // "Ana García" (getter)
persona.nombre = "María"; // Usa el setter con validación
```

### Propiedades Calculadas

```javascript
class Rectangulo {
  constructor(ancho, alto) {
    this._ancho = ancho;
    this._alto = alto;
  }

  get area() {
    return this._ancho * this._alto;
  }

  get perimetro() {
    return 2 * (this._ancho + this._alto);
  }
}

const rect = new Rectangulo(5, 10);
console.log(rect.area); // 50
console.log(rect.perimetro); // 30
```

### Validación con Setters

```javascript
class Usuario {
  constructor(email) {
    this.email = email; // Usa el setter
  }

  set email(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(valor)) {
      throw new Error("Email no válido");
    }
    this._email = valor.toLowerCase();
  }

  get email() {
    return this._email;
  }
}

const user = new Usuario("ANA@EXAMPLE.COM");
console.log(user.email); // "ana@example.com"
```

---

## ⚡ Métodos Estáticos {#métodos-estáticos}

### ¿Qué son?

Métodos que pertenecen a la **clase**, no a las instancias.

```javascript
class Matematicas {
  // Método de INSTANCIA
  duplicar(n) {
    return n * 2;
  }

  // Método ESTÁTICO
  static sumar(a, b) {
    return a + b;
  }
}

// Instancia
const mat = new Matematicas();
mat.duplicar(5); // 10

// Estático
Matematicas.sumar(5, 3); // 8
```

### Uso común: Factory Methods

```javascript
class Usuario {
  constructor(nombre, email, rol) {
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;
  }

  static crearAdmin(nombre, email) {
    return new Usuario(nombre, email, "admin");
  }

  static crearInvitado(nombre) {
    return new Usuario(nombre, "temp@example.com", "invitado");
  }
}

const admin = Usuario.crearAdmin("Ana", "ana@admin.com");
const invitado = Usuario.crearInvitado("Pedro");
```

### Propiedades Estáticas

```javascript
class Contador {
  static total = 0;

  constructor() {
    Contador.total++;
    this.id = Contador.total;
  }

  static getTotalInstancias() {
    return Contador.total;
  }
}

const c1 = new Contador();
const c2 = new Contador();
console.log(Contador.getTotalInstancias()); // 2
```

---

## 🧬 Herencia {#herencia}

### Extends y Super

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log("Algún sonido...");
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llama al constructor padre
    this.raza = raza;
  }

  hacerSonido() {
    console.log("Guau guau!");
  }
}

const perro = new Perro("Rex", "Labrador");
perro.hacerSonido(); // "Guau guau!"
```

### Sobrescritura de Métodos

```javascript
class Vehiculo {
  arrancar() {
    console.log("El vehículo arranca");
  }
}

class Coche extends Vehiculo {
  arrancar() {
    super.arrancar(); // Llamar al método padre
    console.log("El motor ruge");
  }
}

const coche = new Coche();
coche.arrancar();
// "El vehículo arranca"
// "El motor ruge"
```

---

## 🚀 Conceptos Avanzados {#avanzados}

### Method Chaining (Encadenamiento)

```javascript
class StringBuilder {
  constructor() {
    this._texto = "";
  }

  agregar(str) {
    this._texto += str;
    return this; // ✅ Devuelve 'this'
  }

  mayusculas() {
    this._texto = this._texto.toUpperCase();
    return this;
  }

  toString() {
    return this._texto;
  }
}

const texto = new StringBuilder()
  .agregar("Hola ")
  .agregar("Mundo")
  .mayusculas()
  .toString();

console.log(texto); // "HOLA MUNDO"
```

### Patrón Singleton

```javascript
class BaseDatos {
  static _instancia = null;

  constructor() {
    if (BaseDatos._instancia) {
      return BaseDatos._instancia;
    }
    BaseDatos._instancia = this;
    this._conectada = true;
  }

  static getInstance() {
    if (!BaseDatos._instancia) {
      new BaseDatos();
    }
    return BaseDatos._instancia;
  }
}

const db1 = BaseDatos.getInstance();
const db2 = BaseDatos.getInstance();
console.log(db1 === db2); // true
```

---

## 💡 Mejores Prácticas {#mejores-prácticas}

### ✅ DO (Hacer)

```javascript
// 1. Nombres descriptivos y en PascalCase
class CuentaBancaria {}

// 2. Validar en el constructor
class Usuario {
  constructor(email) {
    if (!email) throw new Error("Email requerido");
    this.email = email;
  }
}

// 3. Usar getters para propiedades calculadas
class Rectangulo {
  get area() {
    return this.ancho * this.alto;
  }
}

// 4. Métodos estáticos para utilidades
class Validador {
  static esEmail(str) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  }
}

// 5. Encadenar métodos cuando tenga sentido
class Builder {
  setNombre(n) {
    this.nombre = n;
    return this;
  }
}
```

### ❌ DON'T (Evitar)

```javascript
// 1. No crear clases con un solo método
class Sumador {
  sumar(a, b) {
    return a + b;
  } // ❌ Usa función
}

// 2. No hacer métodos muy largos
class Usuario {
  procesarTodo() {
    // 200 líneas de código ❌
  }
}

// 3. No exponer todo como público
class Cuenta {
  constructor() {
    this.password = "123"; // ❌ Muy inseguro
  }
}

// 4. No hacer getters con lógica pesada
class Reporte {
  get datosComplejos() {
    // Consulta a BD que tarda 5 segundos ❌
  }
}
```

---

## 📊 Comparación Rápida

| Característica | ES5 (Función)        | ES6+ (Class)       |
| -------------- | -------------------- | ------------------ |
| Sintaxis       | `function Persona()` | `class Persona`    |
| Constructor    | Función misma        | `constructor()`    |
| Métodos        | En prototype         | Dentro de la clase |
| Herencia       | Prototype chain      | `extends`          |
| Privacidad     | Closures             | `#` (ES2022)       |
| Legibilidad    | 😐 Media             | 😊 Alta            |

---

## 🎓 Resumen

### Conceptos Clave

1. **Clases** = Plantillas para crear objetos
2. **Constructor** = Se ejecuta al crear instancia
3. **Métodos de instancia** = Funcionan con cada objeto
4. **Métodos estáticos** = Pertenecen a la clase
5. **Getters/Setters** = Control de acceso a propiedades
6. **Propiedades privadas** = Encapsulación real con `#`
7. **Herencia** = Reutilización de código con `extends`

### Cuándo usar Clases

✅ **SÍ usar clases cuando:**

- Necesitas crear múltiples objetos similares
- Hay comportamiento compartido
- Necesitas herencia
- Quieres organizar código relacionado

❌ **NO usar clases cuando:**

- Solo necesitas una función simple
- Un objeto literal es suficiente
- Estás haciendo programación funcional pura

---

## 📚 Recursos Adicionales

- [MDN: Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info: Classes](https://javascript.info/classes)
- [Exploring JS: Classes](https://exploringjs.com/es6/ch_classes.html)

---

**¡Feliz programación! 🚀**
