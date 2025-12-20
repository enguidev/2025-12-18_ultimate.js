# 📚 Métodos de String en JavaScript

Esta guía modular presenta los principales métodos del objeto `String` en JavaScript, organizados por funcionalidad. Cada sección enlaza directamente al archivo `.js` correspondiente para facilitar la navegación y el estudio.

---

## 🧭 Índice de módulos

0. [📖 Fundamentos de String](../01-String.js)
1. [🔢 Propiedades y acceso](../02-string-propiedades.js)
2. [✂️ Extracción de subcadenas](01-string-extraccion.js)
3. [🔠 Transformación de texto](02-string-transformacion.js)
4. [🔍 Búsqueda y coincidencias](03-string-busqueda.js)
5. [🔄 Reemplazo y división](04-string-reemplazo.js)
6. [🧪 Comparación y conversión](05-string-comparacion.js)
7. [🔧 Métodos adicionales](06-string-metodos-adicionales.js) ✨ **NUEVO**
8. [🎯 Casos especiales y trucos](07-string-casos-especiales.js) ✨ **NUEVO**

---

## 📖 0. Fundamentos de String

Conceptos básicos sobre strings en JavaScript:

- Creación de strings: primitivos vs objetos
- Template literals y expresiones `${}`
- Caracteres de escape: `\n`, `\t`, `\\`, etc.
- Inmutabilidad de strings
- Concatenación: `+`, template literals, `concat()`

📄 Código fuente: [01-String.js](../01-String.js)

---

## 🔢 1. Propiedades y acceso a caracteres

Propiedades y métodos para acceder a caracteres:

- `length` - Longitud del string
- `[index]`, `charAt()`, `at()` - Acceso por índice
- `charCodeAt()`, `codePointAt()` - Códigos Unicode
- `String.fromCharCode()`, `String.fromCodePoint()`

⚠️ **Importante:** Los emojis pueden ocupar más de una unidad. Usa `[...string].length` para contarlos correctamente.

📄 Código fuente: [02-string-propiedades.js](../02-string-propiedades.js)

---

## ✂️ 2. Extracción de subcadenas

Métodos para extraer partes de un string:

- `slice(start, end)` - Extrae desde start hasta end (no incluido)
- `substring(start, end)` - Similar a slice, pero no acepta negativos
- `substr(start, length)` ⚠️ **Obsoleto** - No usar en nuevos proyectos

🔎 **Advertencia:** Evita `substr()` en nuevos proyectos. Usa `slice()` para mayor compatibilidad.

📄 Código fuente: [03-string-extraccion.js](01-string-extraccion.js)

---

## 🔠 3. Transformación de texto

Métodos para modificar el contenido textual:

- `toUpperCase()`, `toLowerCase()` - Cambiar a mayúsculas/minúsculas
- `trim()`, `trimStart()`, `trimEnd()` - Eliminar espacios
- `padStart()`, `padEnd()` - Rellenar con caracteres
- `normalize()` - Normalizar caracteres Unicode

🧠 **Tip:** Usa `normalize()` para comparar cadenas con acentos y evitar errores en búsquedas.

📄 Código fuente: [04-string-transformacion.js](02-string-transformacion.js)

---

## 🔍 4. Búsqueda y coincidencias

Métodos para buscar contenido dentro de strings:

- `indexOf()`, `lastIndexOf()` - Buscar posición de substring
- `includes()`, `startsWith()`, `endsWith()` - Verificar presencia
- `search()`, `match()`, `matchAll()` - Búsqueda con RegEx

💡 **Tip:** `search()` permite RegExp con flags como `/texto/i` (case-insensitive), mientras que `indexOf()` no.

📄 Código fuente: [05-string-busqueda.js](03-string-busqueda.js)

---

## 🔄 5. Reemplazo y división

Métodos para modificar y dividir strings:

- `replace()`, `replaceAll()` - Reemplazar texto
- `split()` - Dividir string en array

✨ **Nuevo:** Ejemplos con funciones callback en `replace()` para transformaciones complejas como:

- Capitalizar palabras
- Censurar contenido
- Transformar valores (ej: agregar IVA a precios)

📄 Código fuente: [06-string-reemplazo.js](04-string-reemplazo.js)

---

## 🧪 6. Comparación y conversión

Métodos para comparar strings y convertir tipos:

- `localeCompare()` - Comparación sensible al idioma
- `toString()`, `valueOf()` - Convertir a string primitivo

🌍 **Tip:** `localeCompare()` con `{ numeric: true }` ordena correctamente archivos como "archivo1", "archivo2", "archivo10".

📄 Código fuente: [07-string-comparacion.js](05-string-comparacion.js)

---

## 🔧 7. Métodos adicionales ✨ NUEVO

Métodos menos conocidos pero útiles:

- `repeat()` - Repetir string n veces
- `concat()` - Concatenar strings (preferir template literals)
- `String.raw()` - Strings sin procesar escapes
- Métodos HTML obsoletos: `bold()`, `link()`, etc. ⚠️ No usar

💡 **Casos prácticos:**

- Crear separadores visuales
- Cifrado César
- Generar rangos de letras
- Trabajar con emojis

📄 Código fuente: [08-string-metodos-adicionales.js](06-string-metodos-adicionales.js)

---

## 🎯 8. Casos especiales y trucos ✨ NUEVO

Casos que pueden sorprender y trucos útiles:

**Temas cubiertos:**

- Emojis y `length` (un emoji puede ocupar 2+ unidades)
- Strings vs Arrays (inmutabilidad)
- Comparación lexicográfica vs numérica
- String vacío vs espacios en blanco
- Coerción de tipos (`"5" + 3` vs `"5" - 3`)
- Unicode y caracteres especiales
- NaN y conversión fallida
- Escape de caracteres

**Trucos incluidos:**

- Verificar si string contiene solo números
- Invertir string (cuidado con emojis)
- Eliminar duplicados
- Contar vocales
- Verificar palíndromos

📄 Código fuente: [09-string-casos-especiales.js](07-string-casos-especiales.js)

---

## 📊 Tabla comparativa de métodos

| Método         | Mutable | Acepta negativos | Usa RegEx |
| -------------- | ------- | ---------------- | --------- |
| `slice()`      | ❌      | ✅               | ❌        |
| `substring()`  | ❌      | ❌               | ❌        |
| `replace()`    | ❌      | ❌               | ✅        |
| `replaceAll()` | ❌      | ❌               | ✅        |
| `search()`     | ❌      | ❌               | ✅        |
| `indexOf()`    | ❌      | ❌               | ❌        |

**Nota:** Ningún método de String es mutable. Todos devuelven un nuevo string.

---

## 🧵 Recomendaciones

### ✅ Hacer

- Usa cadenas primitivas (`"texto"`) en lugar de objetos `String`
- Prefiere template literals (`` `texto ${variable}` ``) sobre concatenación con `+`
- Usa `normalize()` para comparar cadenas con acentos
- Prefiere `matchAll()` cuando necesites recorrer coincidencias con detalle
- Para emojis, usa `[...string].length` en lugar de `string.length`
- Usa `localeCompare()` con `{ numeric: true }` para ordenar archivos

### ⚠️ Evitar

- No uses `new String()` (prefiere primitivos)
- Evita `substr()` en nuevos proyectos (usa `slice()`)
- No uses métodos HTML como `bold()`, `link()` (están obsoletos)
- No confíes en `string.length` para emojis compuestos

### 💡 Recuerda

- Los strings son **inmutables**: todos los métodos devuelven un nuevo string
- La comparación con `>`, `<` es **lexicográfica**, no numérica
- `"10" < "9"` es `true` (compara carácter por carácter)

---

## 🎓 Patrones comunes

```javascript
// Capitalizar primera letra
str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

// Truncar con elipsis
str.length > max ? str.slice(0, max - 3) + "..." : str

// Limpiar espacios múltiples
str.replace(/\s+/g, " ").trim()

// Snake_case a camelCase
str.replace(/_([a-z])/g, (_, letra) => letra.toUpperCase())

// Contar palabras
str.trim().split(/\s+/).length

// Verificar email (básico)
/\w+@\w+\.\w+/.test(str)

// Enmascarar datos sensibles
"*".repeat(str.length - 4) + str.slice(-4)
```

---

## 📚 Recursos adicionales

- [MDN Web Docs - String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JavaScript.info - Strings](https://javascript.info/string)
- [ECMAScript Specification - String Objects](https://tc39.es/ecma262/#sec-string-objects)

---

## 📝 Notas de versión

- **ES2021 (ES12):** `replaceAll()`
- **ES2020 (ES11):** `matchAll()`
- **ES2019 (ES10):** `trimStart()`, `trimEnd()`
- **ES2017 (ES8):** `padStart()`, `padEnd()`
- **ES2015 (ES6):** Template literals, `repeat()`, `startsWith()`, `endsWith()`, `includes()`

---

**Última actualización:** Diciembre 2024  
**Versión:** 2.0 - Ahora con casos especiales y métodos adicionales
