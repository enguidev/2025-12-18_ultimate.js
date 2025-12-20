/*
🔹 Podemos usar Spread en desestructuración para **excluir propiedades** de un objeto
y obtener el resto en una nueva variable. Muy útil para limpiar datos antes de enviarlos
a una API o para separar información sensible.
*/

const usuario = {
  nombre: "Carlos",
  email: "carlos@example.com",
  password: "1234",
};

// Excluimos la propiedad 'password' y agrupamos el resto en 'usuarioSinPassword'
const { password, ...usuarioSinPassword } = usuario;

console.log(usuarioSinPassword); // { nombre: "Carlos", email: "carlos@example.com" }

/*
✅ Técnica común en desarrollo moderno para evitar enviar datos sensibles.
🔍 También se puede usar en arrays con desestructuración:
*/
const [primero, ...resto] = [1, 2, 3, 4];
console.log(resto); // [2, 3, 4]
