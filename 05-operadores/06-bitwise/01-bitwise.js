//Decimal --> representado por 10 dígitos
// Binario --> representado por 1 o 0
// 1 bit es un dígito en binario -> 0 1
// 1 Byte son 8 bits --> 00000000 corresponde al 0, 00000001 corresponde al 1, 00000010 corresponde al 2, ...

//Byte: 8 bits --> 00000000= 0
//Byte: 8 bits --> 00000001= 1
//Byte: 8 bits --> 00000010= 2
//Byte: 8 bits --> 00000011= 3
//Byte: 8 bits --> 00000100= 4
//Byte: 8 bits --> 00000101= 5
//Byte: 8 bits --> 00000110= 6
//Byte: 8 bits --> 00000111= 7

// Crea un nuevo Byte
// Con | pone los 1 de cada uno de ellos
console.log(1 | 3); // 00000011
/*
00000001
00000011
--------
00000011 --> 3
*/
console.log(1 | 4); // 00000101
/*
00000001
00000100
--------
00000101 --> 5
*/
console.log(3 | 5); // 00000111
/*
00000011
00000101
--------
00000111 --> 7
*/

// Con & pone los 1 que se comparta
console.log(1 & 3); // 00000001
/*
00000001
00000011
--------
00000001 --> 1
*/
console.log(1 & 4); // 00000000
/*
00000001
00000100
--------
00000000 --> 0
*/
console.log(3 & 5); // 00000001
/*
00000001
00000101
--------
00000001 --> 1
*/
