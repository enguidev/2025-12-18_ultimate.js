// ==========================================
// EJEMPLO 1: LISTA DE TAREAS CON DELEGACIÓN
// ==========================================

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

let taskCounter = 0;

// Añadir nueva tarea
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  taskCounter++;
  const li = document.createElement("li");
  li.className = "task-item";
  li.dataset.id = taskCounter;
  li.innerHTML = `
                <span class="task-text">${taskText}</span>
                <div class="task-buttons">
                    <button class="btn-complete">✅ Completar</button>
                    <button class="btn-delete">🗑️ Eliminar</button>
                </div>
            `;

  taskList.appendChild(li);
  taskInput.value = "";
  updateStats();
}

// ✅ DELEGACIÓN DE EVENTOS: Un solo listener para todos los botones
taskList.addEventListener("click", function (e) {
  const target = e.target;

  // Si se hace click en el botón de completar
  if (target.classList.contains("btn-complete")) {
    const taskItem = target.closest(".task-item");
    taskItem.classList.toggle("completed");

    if (taskItem.classList.contains("completed")) {
      target.textContent = "↩️ Deshacer";
    } else {
      target.textContent = "✅ Completar";
    }

    updateStats();
  }

  // Si se hace click en el botón de eliminar
  if (target.classList.contains("btn-delete")) {
    const taskItem = target.closest(".task-item");
    taskItem.style.transform = "translateX(100%)";
    taskItem.style.opacity = "0";

    setTimeout(() => {
      taskItem.remove();
      updateStats();
    }, 300);
  }
});

function updateStats() {
  const total = taskList.querySelectorAll(".task-item").length;
  const completed = taskList.querySelectorAll(".task-item.completed").length;
  const pending = total - completed;

  document.getElementById("totalTasks").textContent = total;
  document.getElementById("completedTasks").textContent = completed;
  document.getElementById("pendingTasks").textContent = pending;
}

// ==========================================
// EJEMPLO 2: GALERÍA CON DELEGACIÓN
// ==========================================

const gallery = document.getElementById("gallery");
const emojiInput = document.getElementById("emojiInput");
const addImageBtn = document.getElementById("addImageBtn");

let imageCounter = 0;

// Añadir nueva imagen
addImageBtn.addEventListener("click", addImage);
emojiInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addImage();
});

function addImage() {
  const emoji = emojiInput.value.trim();
  if (!emoji) return;

  imageCounter++;
  const div = document.createElement("div");
  div.className = "gallery-item";
  div.dataset.id = imageCounter;
  div.innerHTML = `
                <div class="emoji-placeholder">${emoji}</div>
                <button class="delete-image">✕</button>
            `;

  gallery.appendChild(div);
  emojiInput.value = "";
}

// ✅ DELEGACIÓN DE EVENTOS: Un solo listener para toda la galería
gallery.addEventListener("click", function (e) {
  const target = e.target;

  // Si se hace click en el botón de eliminar
  if (target.classList.contains("delete-image")) {
    e.stopPropagation(); // Evitar que se propague al gallery-item
    const galleryItem = target.closest(".gallery-item");
    galleryItem.style.transform = "scale(0)";
    galleryItem.style.opacity = "0";

    setTimeout(() => {
      galleryItem.remove();
    }, 300);
  }
  // Si se hace click en la imagen (no en el botón)
  else if (target.closest(".gallery-item")) {
    const galleryItem = target.closest(".gallery-item");
    const emoji = galleryItem.querySelector(".emoji-placeholder").textContent;
    alert(
      `Has seleccionado: ${emoji}\n\n¡Esto podría abrir un modal o vista ampliada!`
    );
  }
});

// Añadir algunas tareas y elementos de ejemplo al cargar
window.addEventListener("load", function () {
  // Tareas de ejemplo
  const ejemplosTareas = [
    "Estudiar JavaScript",
    "Practicar delegación de eventos",
    "Hacer ejercicios",
  ];
  ejemplosTareas.forEach((tarea) => {
    taskInput.value = tarea;
    addTask();
  });

  // Imágenes de ejemplo
  const ejemplosEmojis = ["🎨", "🌟", "🚀", "🎭", "🎪", "🎯"];
  ejemplosEmojis.forEach((emoji) => {
    emojiInput.value = emoji;
    addImage();
  });
});
