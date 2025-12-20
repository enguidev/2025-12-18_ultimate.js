//--------------------------------------------------------------------------------------
// MÉTODOS AVANZADOS (ES2024) – Object.groupBy() y Map.groupBy()
//--------------------------------------------------------------------------------------

/*
⚠️ IMPORTANTE: Los métodos group() y groupToMap() fueron renombrados en la especificación final.
Ahora se llaman:
  - Object.groupBy() → devuelve un objeto
  - Map.groupBy() → devuelve un Map

Estos métodos NO están en Array.prototype, sino que son métodos estáticos.
*/

//--------------------------------------------------------------------------------------
// Object.groupBy() – Agrupa elementos y devuelve un objeto
//--------------------------------------------------------------------------------------
// Ejemplo: agrupar por tipo, categoría, edad, etc.

let frutas = [
  { nombre: "manzana", tipo: "roja" },
  { nombre: "pera", tipo: "verde" },
  { nombre: "sandía", tipo: "roja" },
  { nombre: "kiwi", tipo: "verde" },
];

// ✅ FORMA CORRECTA: Object.groupBy()
let agrupadasPorTipo = Object.groupBy(frutas, (fruta) => fruta.tipo);
console.log("Object.groupBy por tipo:", agrupadasPorTipo);
/*
Resultado:
{
  roja: [
    { nombre: "manzana", tipo: "roja" },
    { nombre: "sandía", tipo: "roja" }
  ],
  verde: [
    { nombre: "pera", tipo: "verde" },
    { nombre: "kiwi", tipo: "verde" }
  ]
}
*/

//--------------------------------------------------------------------------------------
// Map.groupBy() – Agrupa elementos y devuelve un Map
//--------------------------------------------------------------------------------------
// La diferencia con Object.groupBy es que devuelve un Map en lugar de un objeto
// Útil cuando necesitas claves que no son strings o cuando necesitas métodos de Map

let agrupadasMap = Map.groupBy(frutas, (fruta) => fruta.tipo);
console.log("Map.groupBy por tipo:", agrupadasMap);
/*
Resultado: Map(2) {
  'roja' => [
    { nombre: "manzana", tipo: "roja" },
    { nombre: "sandía", tipo: "roja" }
  ],
  'verde' => [
    { nombre: "pera", tipo: "verde" },
    { nombre: "kiwi", tipo: "verde" }
  ]
}
*/

// Acceder a los grupos en un Map
console.log("Frutas rojas:", agrupadasMap.get("roja"));
console.log("Frutas verdes:", agrupadasMap.get("verde"));

//--------------------------------------------------------------------------------------
// 🧪 EJEMPLOS ADICIONALES
//--------------------------------------------------------------------------------------

// Ejemplo 1: Agrupar números por par/impar
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let paresImpares = Object.groupBy(numeros, (num) =>
  num % 2 === 0 ? "pares" : "impares"
);
console.log("Agrupación par/impar:", paresImpares);
/*
{
  impares: [1, 3, 5, 7, 9],
  pares: [2, 4, 6, 8]
}
*/

// Ejemplo 2: Agrupar personas por rango de edad
let personas = [
  { nombre: "Ana", edad: 15 },
  { nombre: "Luis", edad: 25 },
  { nombre: "María", edad: 17 },
  { nombre: "Carlos", edad: 35 },
  { nombre: "Sofía", edad: 12 },
];

let porRangoEdad = Object.groupBy(personas, (persona) => {
  if (persona.edad < 18) return "menor";
  if (persona.edad < 30) return "joven";
  return "adulto";
});
console.log("Por rango de edad:", porRangoEdad);
/*
{
  menor: [
    { nombre: "Ana", edad: 15 },
    { nombre: "María", edad: 17 },
    { nombre: "Sofía", edad: 12 }
  ],
  joven: [
    { nombre: "Luis", edad: 25 }
  ],
  adulto: [
    { nombre: "Carlos", edad: 35 }
  ]
}
*/

// Ejemplo 3: Usar Map.groupBy con claves numéricas
let productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 80 },
  { nombre: "Monitor", precio: 300 },
];

let porRangoPrecio = Map.groupBy(productos, (producto) => {
  if (producto.precio < 50) return 0; // económico
  if (producto.precio < 500) return 1; // medio
  return 2; // caro
});

console.log("Productos económicos:", porRangoPrecio.get(0));
console.log("Productos precio medio:", porRangoPrecio.get(1));
console.log("Productos caros:", porRangoPrecio.get(2));

//--------------------------------------------------------------------------------------
// 📊 COMPARATIVA: Object.groupBy vs Map.groupBy
//--------------------------------------------------------------------------------------
/*
┌─────────────────────┬─────────────────────┬─────────────────────┐
│ Característica      │ Object.groupBy      │ Map.groupBy         │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ Retorna             │ Objeto plano        │ Map                 │
│ Claves permitidas   │ Solo strings        │ Cualquier tipo      │
│ Acceso a grupos     │ obj["clave"]        │ map.get(clave)      │
│ Métodos disponibles │ Limitados           │ Muchos (size, etc)  │
│ Uso típico          │ Claves simples      │ Claves complejas    │
└─────────────────────┴─────────────────────┴─────────────────────┘

✅ Usa Object.groupBy cuando:
  - Las claves son strings simples
  - Necesitas un objeto JSON serializable
  - Prefieres la sintaxis de objetos

✅ Usa Map.groupBy cuando:
  - Las claves pueden ser números, objetos, etc.
  - Necesitas métodos de Map (size, has, delete, etc.)
  - Quieres mejor rendimiento con muchas claves
*/

//--------------------------------------------------------------------------------------
// ⚠️ COMPATIBILIDAD
//--------------------------------------------------------------------------------------
/*
Estos métodos están disponibles desde:
  - Chrome/Edge: v117+
  - Firefox: v119+
  - Safari: v17.4+
  - Node.js: v21.0+

Para navegadores antiguos, puedes usar un polyfill o implementar tu propia función:
*/

// Polyfill simple de Object.groupBy
if (!Object.groupBy) {
  Object.groupBy = function (array, callback) {
    return array.reduce((grupos, elemento, indice) => {
      const clave = callback(elemento, indice);
      if (!grupos[clave]) {
        grupos[clave] = [];
      }
      grupos[clave].push(elemento);
      return grupos;
    }, {});
  };
}

//--------------------------------------------------------------------------------------
// 💡 ALTERNATIVAS CLÁSICAS (si no tienes soporte ES2024)
//--------------------------------------------------------------------------------------

// Forma tradicional con reduce (compatible con todos los navegadores)
let agrupadasReduce = frutas.reduce((grupos, fruta) => {
  const tipo = fruta.tipo;
  if (!grupos[tipo]) {
    grupos[tipo] = [];
  }
  grupos[tipo].push(fruta);
  return grupos;
}, {});

console.log("Agrupación con reduce:", agrupadasReduce);

// Con Map (más flexible para claves no-string)
let agrupadasMapManual = frutas.reduce((mapa, fruta) => {
  const tipo = fruta.tipo;
  if (!mapa.has(tipo)) {
    mapa.set(tipo, []);
  }
  mapa.get(tipo).push(fruta);
  return mapa;
}, new Map());

console.log("Agrupación manual con Map:", agrupadasMapManual);
