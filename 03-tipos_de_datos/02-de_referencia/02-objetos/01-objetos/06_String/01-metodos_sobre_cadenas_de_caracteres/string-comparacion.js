// 🧪 Métodos para comparar y convertir cadenas

const a = "manzana";
console.log("\nvalor variable a: ", a, "\n");

const b = "Manzana";
console.log("valor variable b: ", b, "\n");

// localeCompare()
// 🌍 Tip: localeCompare() permite ordenación alfabética sensible al idioma. Útil para listas.
/*
localeCompare()
Compara dos cadenas según las reglas del idioma local. Devuelve:

  -1 si la primera cadena va antes.

  0 si son iguales.

  1 si la primera va después.
*/
console.log("localeCompare(b): ", a.localeCompare(b), "\n"); // -1, 0 o 1 según el idioma
// Puedes especificar el idioma, aunque por defecto usa el idioma del navegador o sistema operativo:
console.log(
  'localeCompare(b, "es", { sensitivity: "base" }): ',
  a.localeCompare(b, "es", { sensitivity: "base" }),
  "\n"
); // Ignora mayúsculas y acentos

const cadena = new String("texto");
// toString() - Convierte el objeto en su representación textual:
console.log("toString(): ", cadena.toString(), "\n"); // "texto"

// valueOf() - Devuelve el valor primitivo del objeto:
console.log("valueOf()", cadena.valueOf(), "\n"); // "texto"
// En el caso de String, ambos devuelven lo mismo. Pero en otros objetos (como Date), valueOf() puede devolver un número.

// 📌 Advertencia: Evita usar new String() salvo que necesites un objeto explícito. Las cadenas primitivas ("texto") son más ligeras y seguras.
