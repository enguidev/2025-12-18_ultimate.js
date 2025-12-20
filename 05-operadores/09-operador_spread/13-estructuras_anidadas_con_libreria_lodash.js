// Librería Lodash

/*
Dentro del contexto de estructuras anidadas esta librería puede ayudarnos en:

  -Clonar objetos profundamente (_.cloneDeep).

  -Mezclar estructuras sin mutar el original (_.merge).

  -Acceder o modificar propiedades anidadas con precisión (_.get, _.set).

Usamos el mismo ejemplo que el punto 12 peor con dicha librería:
*/
// ✅ Importamos Lodash usando require (compatible con Node.js sin módulos ES)
// ✅ Importamos Lodash usando require (compatible con Node.js sin módulos ES)
const _ = require("lodash");

// ✅ Estructura original
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

// ✅ Actualizaciones que queremos aplicar
const actualizaciones = {
  perfil: {
    ciudad: "Cartagena",
    habilidades: ["JavaScript", "HTML", "CSS", "TypeScript"],
  },
  preferencias: {
    tema: "claro",
  },
};

// ✅ Clonamos el original para mantener inmutabilidad
const usuarioFusionado = _.cloneDeep(usuarioOriginal);

// ✅ Fusionamos con _.merge (modifica el destino)
_.merge(usuarioFusionado, actualizaciones);

// ✅ Accedemos a propiedades anidadas con _.get
const ciudad = _.get(usuarioFusionado, "perfil.ciudad");
const habilidades = _.get(usuarioFusionado, "perfil.habilidades");
const tema = _.get(usuarioFusionado, "preferencias.tema");

// ✅ Mostramos resultados
console.log("🟢 Ciudad actualizada:", ciudad); // "Cartagena"
console.log("🟢 Habilidades:", habilidades); // ["JavaScript", "HTML", "CSS", "TypeScript"]
console.log("🟢 Tema de preferencias:", tema); // "claro"

/*
1. Abre Visual Studio Code en la carpeta de tu proyecto

2. Abre la terminal integrada (Ctrl + ñ) o si te deja ahí hazlo desde CMD de Windows
Y escribe esto para crear el archivo package.json:

  npm init -y

Esto configura tu proyecto para usar librerías como Lodash.

3. Instala Lodash
En la misma terminal:

  npm install lodash

Esto descarga Lodash y lo guarda en tu proyecto.

4. Corrige tu archivo .js
Abre tu archivo y asegúrate de que la primera línea sea:

const _ = require("lodash"); // ✅ forma correcta para Node.js
No uses import _ from "lodash" a menos que configures tu proyecto como módulo ES.

5. Ejecuta tu archivo.
*/
