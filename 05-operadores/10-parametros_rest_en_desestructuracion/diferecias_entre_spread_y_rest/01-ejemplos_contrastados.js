// ****** Rest en función (captura argumentos) ****** //

// Ejemplo 1
function sumar(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}
sumar(1, 2, 3); // ✅ [1, 2, 3] agrupado como array

// Ejemplo 2
function imprimirJugador(nombreJugador, tipoJugador, ...habilidadesJugador) {
  console.log(
    `${nombreJugador} es un ${tipoJugador}. Sus habilidades son: ${habilidadesJugador.join(
      ","
    )}`
  );
}
/*
El primer parámetro Carlos se guarda en nombreJugador.
El segundo monstruo en tipoJugador.
El resto de parámetros en ...habilidadesJugador.
*/
imprimirJugador("Carlos", "monstruo", "golpear fuerte"); // Carlos es un monstruo. Sus habilidades son: golpear fuerte
imprimirJugador("Carlos", "monstruo", "golpear fuerte", "Lanzar rayo"); // Carlos es un monstruo. Sus habilidades son: golpear fuerte, Lanzar rayo
imprimirJugador(
  "Carlos",
  "monstruo",
  "golpear fuerte",
  "lanzar rayo",
  "esconderse"
); // Carlos es un monstruo. Sus habilidades son: golpear fuerte, lanzar rayo, esconderse.

// ****** Spread en llamada (expande array) ****** //
const valores = [1, 2, 3];
sumar(...valores); // ✅ Equivalente a sumar(1, 2, 3)

// ****** Rest en desestructuración ****** //
// Ejemplo 1
const { nombre, ...resto } = {
  nombre: "Carlos",
  edad: 46,
  ciudad: "Murcia",
};
console.log(resto); // { edad: 46, ciudad: "Murcia" }

// Ejemplo 2
const alumno = {
  id: 1,
  nombre: "Jose",
  apellido: "Sanchez",
};
const { id, ...rest } = alumno;
console.log(rest);
/*
{
  nombre: "Jose",
  apellido: "Sanchez",
}
*/

// Ejemplo 3 (Parámetros Rest) añadiendo propiedades.

// Tenemos un objeto coche con 2 propiedades.
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
};

/*
En la primera desestructuración estamos inicializando la propiedad extras con un array vacío 
en caso que coche no tenga la propiedad extras.
En caso que tuviera la propiedad extras, tendríamos el valor del objeto.
El resto de propiedades de coche será almacenado en el objeto rest2.
*/
const { extras = [], ...rest2 } = coche;

/*
La definición del objeto cocheCompleto usa el operador Spread para reconstruir el objeto rest2 
y añadir la propiedad extras.
*/

const cocheCompleto = { ...rest2, extras };

// Si mostramos el objeto rest2, tendremos las 2 propiedades igual que el objeto coche.
console.log(rest2);
/*
{
  marca: "Toyota",
  modelo: "Corolla",
}
*/

/*
Si mostramos el objeto cocheCompleto, tendremos las 2 propiedades de rest2 + la propiedad extras 
que será la que tuviera rest2 o el valor por defecto (el array vacío).
*/
console.log(cocheCompleto);
/*
{
  marca: "Toyota",
  modelo: "Corolla",
  extras: [],
}
*/

// Extra

// Vemos que el array motos tiene 3 motos pero sólo la de marca Honda tiene la propiedad especificaciones.
const motos = [
  { marca: "Aprilia", tipo: "Cross" },
  {
    marca: "Honda",
    tipo: "Carretera",
    especificaciones: ["CBR", "1.100CC", "350Km/h"],
  },
  { marca: "Ducati", tipo: "Carretera" },
];

// Podemos hacer un método que asigne un array vacío a los objetos que no tengan la propiedad especificaciones:
function especificacionesPorDefecto(object) {
  const { especificaciones = [], ...restoDePropiedades } = object;
  return { ...restoDePropiedades, especificaciones };
}
/*
el método .map recorre el array motos y llama a la función especificacionesPorDefecto una vez por cada elemento, 
pasándole ese elemento como argumento.
Es equivalente a escribir:
    const normalizedMoto = motos.map((moto) => especificacionesPorDefecto(moto));
Así que sí se le pasa el parámetro, pero lo hace .map() por ti.
*/
const normalizedMoto = motos.map(especificacionesPorDefecto);
console.log(normalizedMoto);
/*
[
  { marca: "Aprilia", 
   tipo: "Cross" 
   especificaciones: [],
   },
  {
    marca: "Honda",
    tipo: "Carretera",
    especificaciones: ["CBR", "1.100CC", "350Km/h"],
  },
  { marca: "Ducati", 
   tipo: "Carretera" 
   especificaciones: [],
   },
]
*/

// ****** Spread en construcción ****** //
const base = { edad: 46 };
const perfil = { nombre: "Carlos", ...base };
console.log(perfil); // { nombre: "Carlos", edad: 46 }

/*
🧠 Regla didáctica
Rest = “recolectar lo que sobra”.
Spread = “repartir lo que tienes”.
*/

// ****** Resumen didáctico ****** //

/*
✅ Rest:
- Se usa en definiciones (funciones, desestructuración)
- Agrupa elementos restantes
- Sintaxis: ...nombre

✅ Spread:
- Se usa en llamadas o construcción
- Expande elementos existentes
- Sintaxis: ...nombre

🧠 Regla práctica:
Rest = “recolectar lo que sobra”
Spread = “repartir lo que tienes”
*/
