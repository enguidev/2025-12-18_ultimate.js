# 📚 Métodos de String en JavaScript

Esta guía modular presenta los principales métodos del objeto `String` en JavaScript, organizados por funcionalidad. Cada sección enlaza directamente al archivo `.js` correspondiente para facilitar la navegación y el estudio.

---

## 🧭 Índice de módulos

1. [✂️ Extracción de subcadenas](./string-extraccion.js)
2. [🔠 Transformación de texto](./string-transformacion.js)
3. [🔍 Búsqueda y coincidencias](./string-busqueda.js)
4. [🔄 Reemplazo y división](./string-reemplazo.js)
5. [🧪 Comparación y conversión](./string-comparacion.js)

---

## ✂️ 1. Extracción de subcadenas

Métodos:

- `slice(start, end)`
- `substring(start, end)`
- `substr(start, length)` ⚠️ Obsoleto

📄 Código fuente: [string-extraccion.js](./string-extraccion.js)

---

## 🔠 2. Transformación de texto

Métodos:

- `toUpperCase()`, `toLowerCase()`
- `trim()`, `trimStart()`, `trimEnd()`
- `padStart()`, `padEnd()`
- `normalize()`

📄 Código fuente: [string-transformacion.js](./string-transformacion.js)

---

## 🔍 3. Búsqueda y coincidencias

Métodos:

- `indexOf()`, `lastIndexOf()`
- `includes()`, `startsWith()`, `endsWith()`
- `search()`, `match()`, `matchAll()`

📄 Código fuente: [string-busqueda.js](./string-busqueda.js)

---

## 🔄 4. Reemplazo y división

Métodos:

- `replace()`, `replaceAll()`
- `split()`

📄 Código fuente: [string-reemplazo.js](./string-reemplazo.js)

---

## 🧪 5. Comparación y conversión

Métodos:

- `localeCompare()`
- `toString()`, `valueOf()`

📄 Código fuente: [string-comparacion.js](./string-comparacion.js)

---

## 🧵 Recomendaciones

- Usa cadenas primitivas (`"texto"`) en lugar de objetos `String`.
- Evita `substr()` en nuevos proyectos.
- Usa `normalize()` para comparar cadenas con acentos.
- Prefiere `matchAll()` cuando necesites recorrer coincidencias con detalle.
