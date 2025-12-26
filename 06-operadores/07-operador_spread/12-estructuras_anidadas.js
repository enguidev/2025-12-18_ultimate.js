// Estructuras anidadas

// ✅ Estructura original: usuario con datos anidados
const usuarioOriginal = {
  nombre: "Carlos",
  perfil: {
    edad: 35,
    ciudad: "Murcia",
    habilidades: ["JavaScript", "HTML", "CSS"],
  },
  preferencias: {
    tema: "oscuro",
    notificaciones: true,
  },
  historial: {
    sesiones: 120,
    últimaConexión: "2025-09-18",
  },
};

// ✅ Clonamos el objeto de forma segura usando Spread
// ⚠️ Esto solo hace una copia superficial (shallow copy)
const usuarioClonado = {
  ...usuarioOriginal,
  perfil: {
    ...usuarioOriginal.perfil, // Clonamos también el objeto anidado 'perfil'
    ciudad: "Cartagena", // Sobrescribimos la ciudad sin afectar el original
  },
  preferencias: {
    ...usuarioOriginal.preferencias,
    tema: "claro", // Cambiamos el tema manteniendo el resto
  },
};

// ✅ Añadimos una nueva habilidad sin mutar el array original
const usuarioConNuevaHabilidad = {
  ...usuarioClonado,
  perfil: {
    ...usuarioClonado.perfil, // Clonamos también el objeto anidado 'perfil'
    habilidades: [
      ...usuarioClonado.perfil.habilidades, // Copiamos el array original
      "TypeScript", // Añadimos una nueva habilidad
    ],
  },
};
// ✅ Mostramos resultados para comparar
console.log("🔵 Original:", usuarioOriginal);
console.log("🟢 Clonado:", usuarioClonado);
console.log("🟣 Con nueva habilidad:", usuarioConNuevaHabilidad);

/*
Esto no es una solución practica si hay muchas propiedades anidadas.
Para ello podemos usar una famosa biblioteca llamada Lodash (que veremos
en el siguiente punto 13 aunque este apartado es para el operador Spread)
que ofrece utilidades para trabajar con objetos, arrays, funciones, etc 
de forma más segura y legible.
Dentro del contexto de estructuras anidadas esta librería puede ayudarnos en:

  -Clonar objetos profundamente (_.cloneDeep).

  -Mezclar estructuras sin mutar el original (_.merge).

  -Acceder o modificar propiedades anidadas con precisión (_.get, _.set).

  Vemos el mismo ejemplo en el siguiente punto 13.
*/
