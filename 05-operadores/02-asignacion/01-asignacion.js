let a = 5;
console.log(a, "valor inicial");
a = a + 5;
console.log(a, "valor después de sumarle 5");

a += 5;
console.log(a, "valor después de sumarle de nuevo otros 5");

a -= 5;
console.log(a, "valor después de restarle 5");

a *= 5;
console.log(a, "valor después de multiplicarlo por 5");

a /= 5;
console.log(a, "valor después de dividirlo por 5");

a %= 5;
console.log(a, "reto de la división entre 5");

a **= 5;
console.log(a, "potencia al elevarlo a 5");

//--------------------------PROFE--------------------------//
/*
   Operador de asignación: =    
   Realizan la operación y después asignan +=    -=    *=    /=    %=   
   Realizan la operación (bits,poco utilizadas) <<=    >>= y después asignan
*/

let v1 = 2;
console.log(v1);

v1 += 2;
console.log(v1);

v1 *= 2;
console.log(v1);

v1 <<= 1; // Operación binaria 1000 -> 10000
console.log(v1);
