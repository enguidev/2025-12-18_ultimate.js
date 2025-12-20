// Si queremos detener la ejecución de algún loop
// Esto se puede usar en for, dor in, for of, while y en do while
let i = 0;
while (i < 6) {
  i++;

  // Si i vale 2...
  if (i === 2) {
    continue; //...se salta el resto del código del while y pasa a la siguiente iteración
  }

  // Si i vale 4...
  if (i === 4) {
    break; // ...se sale del while
  }

  console.log(i);
}
