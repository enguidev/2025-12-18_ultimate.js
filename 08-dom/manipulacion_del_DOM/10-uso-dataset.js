// 📦 Uso de atributos personalizados con dataset

// HTML: <button data-producto-id="123" data-nombre="Tomate">Comprar</button>
const boton = document.querySelector("button");

// Accede a los datos personalizados definidos en el HTML
console.log(boton.dataset.productoId); // "123"
console.log(boton.dataset.nombre); // "Tomate"
