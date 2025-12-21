# 📚 ÍNDICE - OBJETOS EN JAVASCRIPT

> Guía completa de navegación para aprender objetos en JavaScript desde cero hasta avanzado

---

## 🗺️ MAPA DE CONTENIDOS

```
02-OBJETOS/
├── 📂 00-indice-objetos/               ← Estás aquí
├── 📂 01-metodos_objeto_console/       → Console API
├── 📂 02-desestructuracion-en-objetos/ → Extraer propiedades
├── 📂 03-Objeto_literal/               → Objetos básicos ⭐
└── 📂 04-objetos/                      → Objetos integrados
    ├── 01-objeto_window/
    ├── 02_objeto_localStorage_y_sessioStorage/
    ├── 03_objeto_date/
    ├── 04_objeto_Number/
    ├── 05_objeto_Math/
    └── 06_String/
```

---

## 🎯 RUTA DE APRENDIZAJE RECOMENDADA

### 🟢 NIVEL 1: FUNDAMENTOS (Empezar aquí)

#### 1. **03-Objeto_literal/** ⭐ COMENZAR AQUÍ

- **¿Qué aprenderás?**

  - Crear objetos literales
  - Acceder y modificar propiedades
  - Métodos dentro de objetos
  - La palabra clave `this`
  - Copiar y combinar objetos
  - Desestructuración básica

- **Archivos principales:**

  - `01_Objeto_literal.js` - Todo sobre objetos básicos

- **Tiempo estimado:** 2-3 horas
- **Prerequisitos:** Variables, funciones básicas
- **Siguiente paso:** `02-desestructuracion-en-objetos/`

**Ejemplo de lo que harás:**

```javascript
let persona = {
  nombre: "Ana",
  edad: 25,
  saludar() {
    return `Hola, soy ${this.nombre}`;
  },
};
```

---

#### 2. **02-desestructuracion-en-objetos/**

- **¿Qué aprenderás?**

  - Extraer propiedades de objetos
  - Renombrar propiedades
  - Valores por defecto
  - Desestructuración anidada
  - Rest operator en objetos

- **Archivos principales:**

  - `ejercicio_1_desestructuracion_de_objeto.js`

- **Tiempo estimado:** 1-2 horas
- **Prerequisitos:** Objetos literales
- **Siguiente paso:** `01-metodos_objeto_console/`

**Ejemplo de lo que harás:**

```javascript
const { nombre, edad, ciudad = "Madrid" } = persona;
const {
  direccion: { calle },
} = usuario;
```

---

### 🟡 NIVEL 2: HERRAMIENTAS DEL NAVEGADOR

#### 3. **01-metodos_objeto_console/** 🛠️

- **¿Qué aprenderás?**

  - `console.log()`, `console.table()`
  - `console.group()`, `console.time()`
  - Debugging efectivo
  - Formateo de mensajes

- **Carpetas:**

  - `01-metodos_objeto_console/` - Teoría completa
  - `02-ejercicios_console_solucionados/` - Práctica

- **Tiempo estimado:** 1-2 horas
- **Prerequisitos:** Objetos literales
- **Siguiente paso:** `04-objetos/01-objeto_window/`

**Ejemplo de lo que harás:**

```javascript
console.table([{ nombre: "Ana", edad: 25 }]);
console.time("operacion");
// ... código ...
console.timeEnd("operacion");
```

---

### 🔵 NIVEL 3: OBJETOS INTEGRADOS DEL NAVEGADOR

#### 4. **04-objetos/01-objeto_window/** 🌐

- **¿Qué aprenderás?**

  - `window.alert()`, `window.confirm()`
  - `setTimeout()`, `setInterval()`
  - `window.location`, `window.history`
  - Geolocalización
  - APIs modernas del navegador

- **Archivos principales (8 archivos + ejercicios):**

  - `00-resumen_window.js` - Índice y guía
  - `01-interaccion_usuario.js` - alert, prompt, confirm
  - `02-temporizadores.js` - setTimeout, setInterval
  - `03-ventanas_navegacion.js` - location, history
  - `04-propiedades_ventana.js` - dimensiones, screen
  - `05-geolocation.js` - Ubicación del usuario
  - `06-apis_modernas.js` - Clipboard, Notifications, etc.
  - `07-eventos_window.js` - resize, scroll, etc.
  - `08-ejercicios_window.js` - 13 ejercicios completos

- **Tiempo estimado:** 4-6 horas
- **Prerequisitos:** Objetos literales, console
- **Siguiente paso:** `02_objeto_localStorage_y_sessioStorage/`

**Ejemplo de lo que harás:**

```javascript
setTimeout(() => console.log("Hola"), 2000);
const coords = await navigator.geolocation.getCurrentPosition();
```

---

#### 5. **04-objetos/02_objeto_localStorage_y_sessioStorage/** 💾

- **¿Qué aprenderás?**

  - Guardar datos en el navegador
  - `localStorage` vs `sessionStorage`
  - Trabajar con JSON
  - Manejo de errores
  - Casos prácticos

- **Archivos principales:**

  - `01-storage_localstorage_y_sessionstorage.js` - Teoría
  - `02-ejercicios-storage.js` - Ejercicios

- **Tiempo estimado:** 2-3 horas
- **Prerequisitos:** window, objetos literales
- **Siguiente paso:** `03_objeto_date/`

**Ejemplo de lo que harás:**

```javascript
localStorage.setItem("usuario", JSON.stringify(persona));
const usuario = JSON.parse(localStorage.getItem("usuario"));
```

---

#### 6. **04-objetos/03_objeto_date/** 📅

- **¿Qué aprenderás?**

  - Crear y manipular fechas
  - Formatear fechas
  - Cálculos con fechas
  - Zonas horarias
  - Alternativas modernas (Intl.DateTimeFormat)

- **Archivos principales (9 archivos):**

  - `00-resumen-date.js` - Guía rápida
  - `01-creacion_fechas.js` - new Date()
  - `02_objeto_date.js` - Propiedades
  - `03-metodos_get.js` - Obtener valores
  - `04-metodos_set_calculos.js` - Modificar fechas
  - `05-formato_comparacion.js` - Formateo
  - `06-zonas_horarias.js` - Timezones
  - `07-utilidades_fechas.js` - Helpers
  - `08-ejercicios_date.js` - Práctica
  - `09-alternativas_date.js` - APIs modernas

- **Tiempo estimado:** 3-4 horas
- **Prerequisitos:** Objetos literales
- **Siguiente paso:** `04_objeto_Number/`

**Ejemplo de lo que harás:**

```javascript
const ahora = new Date();
const manana = new Date(ahora.getTime() + 86400000);
ahora.toLocaleDateString("es-ES");
```

---

#### 7. **04-objetos/04_objeto_Number/** 🔢

- **¿Qué aprenderás?**

  - Trabajar con números
  - Conversiones numéricas
  - Validación de números
  - Precisión decimal
  - Métodos útiles

- **Archivos principales:**

  - `01_objeto_Number.js` - Todo sobre Number

- **Tiempo estimado:** 1-2 horas
- **Prerequisitos:** Tipos de datos primitivos
- **Siguiente paso:** `05_objeto_Math/`

**Ejemplo de lo que harás:**

```javascript
Number.isInteger(5.0); // true
(3.14159).toFixed(2); // "3.14"
parseInt("42px"); // 42
```

---

#### 8. **04-objetos/05_objeto_Math/** 🧮

- **¿Qué aprenderás?**

  - Operaciones matemáticas
  - Generar números aleatorios
  - Redondeo (round, floor, ceil)
  - Constantes matemáticas
  - Trigonometría

- **Archivos principales:**

  - `01_objeto_Math.js` - Métodos de Math
  - `02-ejercicios_con_Math.js` - Práctica

- **Tiempo estimado:** 2 horas
- **Prerequisitos:** Number
- **Siguiente paso:** `06_String/`

**Ejemplo de lo que harás:**

```javascript
Math.random(); // 0.123456789
Math.floor(Math.random() * 10); // 0-9
Math.max(1, 5, 3); // 5
```

---

#### 9. **04-objetos/06_String/** 📝

- **¿Qué aprenderás?**

  - Manipular cadenas de texto
  - Métodos de búsqueda
  - Transformaciones
  - Template literals
  - Expresiones regulares básicas

- **Estructura:**

  - `01-String.js` - Conceptos básicos
  - `02-string-propiedades.js` - Propiedades
  - `01-metodos_sobre_cadenas_de_caracteres/` - Métodos detallados
    - `01-string-extraccion.js`
    - `02-string-transformacion.js`
    - `string-busqueda.js`
    - `string-reemplazo.js`
    - `string-comparacion.js`
    - `string-casos-especiales.js`
    - `string-metodos-adicionales.js`

- **Tiempo estimado:** 3-4 horas
- **Prerequisitos:** Ninguno específico
- **Siguiente paso:** ¡Has completado los objetos integrados!

**Ejemplo de lo que harás:**

```javascript
"hola mundo".toUpperCase(); // "HOLA MUNDO"
"JavaScript".slice(0, 4); // "Java"
"ana, luis, carlos".split(", "); // ["ana", "luis", "carlos"]
```

---

## 📊 TABLA RESUMEN - ¿QUÉ ARCHIVO LEER?

| Quiero aprender...      | Ir a...                              | Tiempo | Dificultad |
| ----------------------- | ------------------------------------ | ------ | ---------- |
| Objetos desde cero      | `03-Objeto_literal/`                 | 2-3h   | 🟢 Fácil   |
| Extraer propiedades     | `02-desestructuracion-en-objetos/`   | 1-2h   | 🟢 Fácil   |
| Debug con console       | `01-metodos_objeto_console/`         | 1-2h   | 🟢 Fácil   |
| APIs del navegador      | `04-objetos/01-objeto_window/`       | 4-6h   | 🟡 Medio   |
| Guardar datos           | `04-objetos/02_objeto_localStorage/` | 2-3h   | 🟢 Fácil   |
| Trabajar con fechas     | `04-objetos/03_objeto_date/`         | 3-4h   | 🟡 Medio   |
| Números y decimales     | `04-objetos/04_objeto_Number/`       | 1-2h   | 🟢 Fácil   |
| Operaciones matemáticas | `04-objetos/05_objeto_Math/`         | 2h     | 🟢 Fácil   |
| Manipular textos        | `04-objetos/06_String/`              | 3-4h   | 🟢 Fácil   |

**Tiempo total estimado:** 20-30 horas

---

## 🎓 RUTAS DE APRENDIZAJE SEGÚN TU OBJETIVO

### 🚀 Ruta Express (Lo esencial - 8-10 horas)

```
1. 03-Objeto_literal/
2. 02-desestructuracion-en-objetos/
3. 04-objetos/01-objeto_window/ (archivos 1-4)
4. 04-objetos/02_objeto_localStorage/
```

### 🏃 Ruta Completa (Todo lo básico - 15-20 horas)

```
1. 03-Objeto_literal/
2. 02-desestructuracion-en-objetos/
3. 01-metodos_objeto_console/
4. 04-objetos/01-objeto_window/
5. 04-objetos/02_objeto_localStorage/
6. 04-objetos/05_objeto_Math/
7. 04-objetos/06_String/
```

### 🎯 Ruta Completa + Práctica (Todo - 25-30 horas)

```
Todos los archivos en orden + hacer TODOS los ejercicios
```

### 🌐 Ruta Desarrollo Web (Enfocado en navegador)

```
1. 03-Objeto_literal/
2. 01-metodos_objeto_console/
3. 04-objetos/01-objeto_window/ (completo)
4. 04-objetos/02_objeto_localStorage/
5. 04-objetos/03_objeto_date/
6. 04-objetos/06_String/
```

---

## 💡 CONSEJOS DE ESTUDIO

### ✅ Hacer:

1. **Seguir el orden recomendado** - Cada tema se basa en el anterior
2. **Escribir el código** - No solo leer, ¡practicar!
3. **Hacer los ejercicios** - Están ahí por algo
4. **Experimentar** - Modifica los ejemplos, rompe cosas
5. **Usar console.log()** - Para ver qué pasa en cada paso

### ❌ Evitar:

1. Saltarse `03-Objeto_literal/` - Es la base de TODO
2. Solo leer sin practicar
3. Pasar a temas avanzados sin dominar lo básico
4. Estudiar más de 2-3 horas seguidas sin descanso
5. No hacer los ejercicios

---

## 🔥 EJERCICIOS POR CARPETA

| Carpeta                              | Ejercicios disponibles       |
| ------------------------------------ | ---------------------------- |
| `01-metodos_objeto_console/`         | ✅ 5 ejercicios solucionados |
| `04-objetos/01-objeto_window/`       | ✅ 13 ejercicios completos   |
| `04-objetos/02_objeto_localStorage/` | ✅ Ejercicios prácticos      |
| `04-objetos/03_objeto_date/`         | ✅ 10+ ejercicios            |
| `04-objetos/05_objeto_Math/`         | ✅ Ejercicios variados       |

---

## 📖 GLOSARIO RÁPIDO

- **Objeto literal:** Forma básica de crear objetos `{}`
- **Propiedad:** Par clave-valor en un objeto
- **Método:** Función dentro de un objeto
- **Desestructuración:** Extraer propiedades de objetos
- **this:** Referencia al objeto actual
- **API:** Interfaz de programación de aplicaciones
- **localStorage:** Almacenamiento persistente en navegador
- **sessionStorage:** Almacenamiento temporal por sesión

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### "No sé por dónde empezar"

→ Empieza por `03-Objeto_literal/01_Objeto_literal.js`

### "Es muy difícil"

→ Retrocede un paso. Asegúrate de dominar variables y funciones primero.

### "Quiero ir más rápido"

→ Sigue la "Ruta Express" y solo lee los archivos marcados con ⭐

### "Ya sé objetos literales"

→ Ve directo a `04-objetos/01-objeto_window/`

### "Solo quiero usar localStorage"

→ Ve a `04-objetos/02_objeto_localStorage/` directamente

---

## 🎯 CHECKLIST DE PROGRESO

Marca lo que ya dominas:

### Fundamentos

- [ ] Crear objetos literales
- [ ] Acceder y modificar propiedades
- [ ] Crear métodos en objetos
- [ ] Entender `this`
- [ ] Desestructuración básica

### Herramientas

- [ ] Usar console efectivamente
- [ ] Debug con console.table(), console.time()
- [ ] Navegar APIs del navegador

### Objetos Integrados

- [ ] Usar window y sus métodos
- [ ] Guardar datos con localStorage
- [ ] Trabajar con fechas (Date)
- [ ] Operaciones con números (Number)
- [ ] Cálculos matemáticos (Math)
- [ ] Manipular strings (String)

---

## 📚 RECURSOS ADICIONALES

### Dentro de las carpetas encontrarás:

- 📄 Archivos `.js` con teoría y ejemplos
- 📄 Archivos `.md` con guías visuales
- 📄 Archivos `.html` para probar código
- 📄 README.md con información específica

### Documentación oficial:

- [MDN - JavaScript Objects](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN - Window](https://developer.mozilla.org/es/docs/Web/API/Window)
- [MDN - Web Storage API](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API)

---

## 🎉 ¡EMPECEMOS!

```javascript
// Tu viaje comienza aquí 👇
console.log("¡Hola, objetos de JavaScript!");

// Primer paso:
// Ve a: 03-Objeto_literal/01_Objeto_literal.js

const miPrimerObjeto = {
  estudiante: "Tú",
  objetivo: "Dominar objetos en JavaScript",
  motivacion: "¡Vamos a por ello! 🚀",
};

console.log(miPrimerObjeto);
```

---

**¿Listo para empezar?** 🚀  
**Ve a:** `03-Objeto_literal/01_Objeto_literal.js`

**¿Dudas?** Revisa la sección "Solución de problemas" arriba.

**¡Mucho éxito en tu aprendizaje!** 💪📚
