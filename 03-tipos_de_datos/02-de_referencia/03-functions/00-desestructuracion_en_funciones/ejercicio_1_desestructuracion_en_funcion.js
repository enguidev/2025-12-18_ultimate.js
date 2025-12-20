// Tenemos la siguiente función
function mostrarProducto(producto) {
  // usa destructuring aquí
}

// Y este objeto
const producto = {
  nombre: "Laptop",
  precio: 1200,
  disponible: true,
};

// 1.- Desestructura nombre y precio dentro de la función.
function mostrarProducto({ nombre, precio }) {
  console.log(`Producto: ${nombre}, Precio: ${precio}`);
}
// Esto es equivalente a:
function mostrarProducto(producto) {
  const { nombre, precio } = producto;
  //...
}
// pero lo anterior es mucho más conciso y elegante

// 2.- Muestra en consola: "Producto: Laptop, Precio: 1200".
mostrarProducto(producto);
// Salida: Producto: Laptop, Precio: 1200

/*
¿Quieres que te proponga una variante con valores por defecto o 
propiedades anidadas para subir el nivel? 🔥 También podríamos 
hacer que se detecte si el producto está disponible y mostrarlo 
en el mensaje. ¡Tú eliges!
*/
