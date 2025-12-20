//------IF------//

/*
    if permite la ejecución de código en dependiendo de una condición
    puede ir acompañado de else o no.
    Podemos usar switch cuando evaluemos varios valores.
*/

if (10 > 5) console.log("La condición es cierta");

if (10 < 5) console.log("La condición es cierta");
else console.log("La condición es falsa");

//------IF ELSE------//

//Si ejecutamos más de una instrucción las ponemos en un bloque de contenido {}
let edad = 20;
if (edad >= 18) {
  console.log("eres mayor de edad");
  console.log("ya puedes conducir");
} else {
  console.log("eres menor de edad");
  console.log("no puedes conducir");
}

//------IF, ELSE IF y ELSE------//

let edad2 = 15;

if (edad > 17) {
  console.log("Usuario mayor de edad");
} else if (edad > 13) {
  console.log("Usuario necesita entrar acompañado de sus padres");
} else {
  console.log("Usuario menor de edad");
}

//--------SWITCH--------//

let letra = "A";
switch (letra) {
  case "A":
    console.log("switch dice: la letra es A");
    break;
  case "B":
    console.log("switch dice: la letra es B");
    break;
  case "C":
    console.log("switch dice: la letra es B");
    break;
  default:
    console.log("switch dice: la letra no es ni A, ni B, ni C");
    break;
}
