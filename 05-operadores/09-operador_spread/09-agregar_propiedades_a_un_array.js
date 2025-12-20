// 🔹 Agregar propiedades a un objeto con Spread

// Tenemos un objeto con dos propiedades
const persona = {
  nombre: "Carlos",
  edad: 46,
};

// Tenemos otras dos propiedades que queremos añadir
const ciudad = "Murcia";
const profesion = "Desarrollador";

// ✅ Añadir propiedades al final (el orden no afecta al comportamiento, pero puede influir en la visualización)
const personaExtendida = {
  ...persona,
  ciudad,
  profesion,
};

console.log(personaExtendida);
// {
//   nombre: "Carlos",
//   edad: 46,
//   ciudad: "Murcia",
//   profesion: "Desarrollador"
// }

// ✅ Añadir propiedades al principio (sobrescriben si hay duplicados)
const personaModificada = {
  ciudad,
  profesion,
  ...persona,
};

// O también podemos hacerlo in situ (sin declararlas en variables antes):
/*
const personaModificada = {
  ciudad: "Murcia",
  profesion: "Desarrollador",
  ...persona,
};
*/

console.log(personaModificada);
// {
//   ciudad: "Murcia",
//   profesion: "Desarrollador",
//   nombre: "Carlos",
//   edad: 46
// }

/*
🔍 En este caso no hay conflicto, pero si `persona` ya tuviera una propiedad 
`ciudad`, la última sobrescribiría a la anterior.
*/

// ✅ Añadir propiedades en medio (combinación controlada)
const datosParciales = {
  nombre: "Carlos",
  ...{ ciudad },
  edad: 46,
  ...{ profesion },
};

// O también podemos hacerlo con objetos literales inline:
/*
const datosParciales = {
  nombre: "Carlos",
  ...{ ciudad: "Murcia" },
  edad: 46,
  ...{ profesion: "Desarrollador" },
};
*/

console.log(datosParciales);
// {
//   nombre: "Carlos",
//   ciudad: "Murcia",
//   edad: 46,
//   profesion: "Desarrollador"
// }

/*
🧠 Nota importante:
En objetos, el orden de las propiedades no afecta al comportamiento,
pero sí importa cuando hay conflictos de nombres: la última propiedad
con el mismo nombre sobrescribe a las anteriores.
*/

/*
✅ En resumen:
El operador Spread permite componer objetos de forma clara y concisa,
favoreciendo la inmutabilidad y el control sobre la sobrescritura de propiedades.
Ideal para construir estructuras dinámicas sin modificar los originales.
*/
