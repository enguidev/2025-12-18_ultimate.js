// short-circuit

//falso
// false
// 0
// ''
// null
// undefined
// NaN

// Si el nombre es una cadena vacía
let nombre = "";
/*
Le decimos que username será el valor de la variable nombre, si tiene algún valor,
y si no lo tiene, será Anónimo
*/
let username = nombre || "Anónimo";
console.log(username); // Caso que nombre no tenga un valor

let nombre2 = "Cristian feliz";
let username2 = nombre2 || "Anónimo";
console.log(username2); // Caso que nombre2 si tenga un valor

function fn1() {
  console.log("Soy función 1");

  return false;
}

function fn2() {
  console.log("Soy función 2");

  return true;
}

let x = fn1() && fn2();
