// 📝 Modificación de contenido textual y HTML

const titulo = document.getElementById("titulo");

// Cambia el texto plano del elemento (sin interpretar HTML)
titulo.textContent = "Nuevo título dinámico";

// Cambia el contenido HTML interno (interpreta etiquetas)
titulo.innerHTML = "<strong>Título en negrita</strong>";
