const cadenaCaracteres =
  "El coche de Paco tiene una avería pero, mi coche está en buenas condiciones";

console.log("\ncadena original: ", cadenaCaracteres, "\n");

// replace() reemplaza una palabra por otra en su primera aparición
console.log(
  "Replace normal: ",
  cadenaCaracteres.replace("coche", "barco"),
  "\n"
); // Reemplaza la primera aparición de coche por moto
// Uso de una expresión regular con el modificador global para que se cambie la palabra en todas las ocurrencias
console.log(
  "Replace con expresión regular y el modificador global: ",
  cadenaCaracteres.replace(/coche/g, "barco"),
  "\n"
); // Reemplaza en todas las ocurrencias coche por barco

// Si vemos, la variable string cadenaCaracteres sigue teniendo el mismo valor original
console.log("cadena original: ", cadenaCaracteres, "\n");

// replaceAll() (Desde ECMA SCRIPT 2021)
console.log(
  "Con replaceAll: ",
  cadenaCaracteres.replaceAll("coche", "barco"),
  "\n"
); // Mismo resultado que el anterior

// split() -- Separado por ', '
const separadoPorComas = cadenaCaracteres.split(", ");
console.log("cadena original: ", separadoPorComas, "\n");
