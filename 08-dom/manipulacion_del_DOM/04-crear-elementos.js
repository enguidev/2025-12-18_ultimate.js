// 🧱 Crear y añadir elementos al DOM

// Crea un nuevo párrafo
const nuevoParrafo = document.createElement("p");

// Añade contenido textual al párrafo
nuevoParrafo.textContent = "Este párrafo fue creado dinámicamente";

// Añade el párrafo al final del <body>
document.body.appendChild(nuevoParrafo);
