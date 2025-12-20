# 📚 Índice de métodos de arrays en JavaScript

Organizado por categorías funcionales. Cada archivo contiene ejemplos didácticos, advertencias y comparativas.

---

## 01 – Agregar y eliminar elementos

📂 [`01-agregar_eliminar_elementos.js`](./01-agregar_eliminar_elementos.js)  
Métodos que **modifican** el array original:

- `push()` – Añadir al final
- `unshift()` – Añadir al inicio
- `shift()` – Eliminar el primero
- `pop()` – Eliminar el último
- `splice()` – Añadir, eliminar o reemplazar en cualquier posición

---

## 02 – Búsqueda y acceso

📂 [`02-de_busqueda_y_acceso.js`](./02-de_busqueda_y_acceso.js)  
Métodos para **localizar** o **extraer** elementos:

- `includes()` – Verifica si contiene un valor
- `indexOf()` / `lastIndexOf()` – Índices del primer/último coincidente
- `find()` / `findIndex()` – Elemento o índice que cumple condición
- `findLast()` / `findLastIndex()` – Último elemento o índice que cumple condición (ES2023)
- `at()` – Acceso por índice (incluye negativos)
- `slice()` – Extrae parte del array sin modificar
- `hasDuplicate()` – Verifica si hay elementos repetidos (con `Set`)

---

## 03 – Iteración

📂 [`03-de_iteracion.js`](./03-de_iteracion.js)  
Métodos para **recorrer** y **evaluar** elementos:

- `forEach()` – Ejecuta función por cada elemento
- `map()` – Crea nuevo array transformado
- `filter()` – Filtra elementos que cumplen condición
- `reduce()` / `reduceRight()` – Reduce a un único valor
- `some()` / `every()` – Verifica si alguno/todos cumplen condición
- `for...of` – Bucle complementario para recorrer valores
- `entries()` / `keys()` / `values()` – Iteradores explícitos
- `with()` – Devuelve copia modificada en una posición (ES2023)

---

## 04 – Transformación y orden

📂 [`04-de_tranformacion_y_orden.js`](./04-de_tranformacion_y_orden.js)  
Métodos que **modifican** el contenido o el orden:

- `sort()` – Ordena elementos
- `reverse()` – Invierte el orden
- `fill()` – Rellena con un valor
- `copyWithin()` – Copia parte del array dentro de sí mismo

---

## 05 – Combinación y conversión

📂 [`05-de_combinacion_y_conversion.js`](./05-de_combinacion_y_conversion.js)  
Métodos que **unen** arrays o los **convierten** en strings:

- `concat()` – Une arrays
- `join()` – Convierte en string con separador
- `toString()` – Convierte en string con comas
- `toLocaleString()` – Convierte en string con formato regional
- `split()` – Convierte string en array (complemento externo)
- `Array.from()` – Crea array desde iterable o array-like
- `Array.of()` – Crea array con los argumentos dados

---

## 06 – Estructurales

📂 [`06-estructurales.js`](./06-estructurales.js)  
Métodos que afectan la **estructura interna** o verifican el tipo:

- `flat()` – Aplana arrays anidados
- `flatMap()` – Mapea y aplana en un solo paso
- `Array.isArray()` – Verifica si es un array

---

## 07 – Avanzados y utilidades (ES2023)

📂 [`07-avanzados_y_utilidades.js`](./07-avanzados_y_utilidades.js)  
Métodos modernos y técnicos, útiles para agrupación o manipulación avanzada:

- `group()` – Agrupa elementos por clave
- `groupToMap()` – Agrupa elementos en un `Map`
- ⚠️ Métodos recientes, aún no disponibles en todos los entornos

---

### 🧭 Navegación recomendada

- Métodos que **modifican** el array → `01`, `03`, `04`, `06`
- Métodos que **devuelven nuevo array** → `02`, `03`, `05`, `07`
- Métodos que **verifican o evalúan** → `02`, `03`, `06`
- Métodos que **requieren compatibilidad moderna** → `02`, `03`, `07`

---
