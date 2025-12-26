// Uso de FormData API
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formulario);

  console.log("📦 Datos del formulario:");
  for (let [key, value] of formData.entries()) {
    console.log(`  ${key}: ${value}`);
  }

  // Convertir a objeto
  const datos = Object.fromEntries(formData);
  console.log("🎯 Objeto:", datos);

  // Convertir a JSON
  console.log("📄 JSON:", JSON.stringify(datos));
});
