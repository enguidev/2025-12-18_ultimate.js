// 🔹 Fusionar Objetos con Spread

// Desde ES2018, puedes usar Spread para combinar objetos en uno nuevo.

// *** ✅ Ejemplo básico *** //
const datosPersonales = { nombre: "Carlos", edad: 46 };
const datosLaborales = { profesion: "Desarrollador", empresa: "TechCorp" };

const perfilCompleto = { ...datosPersonales, ...datosLaborales };

console.log(perfilCompleto);
// { nombre: "Carlos", edad: 46, profesion: "Desarrollador", empresa: "TechCorp" }

// 🔍 Las propiedades se combinan en orden. Si hay duplicados, la última sobrescribe.

// *** ✅ Fusionar con sobrescritura controlada *** //
const base = { rol: "usuario", activo: true };
const admin = { ...base, rol: "admin" };

console.log(admin); // { rol: "admin", activo: true }

// 🔹 El orden importa: rol: "admin" sobrescribe rol: "usuario".

// *** ✅ Fusionar objetos inline *** //
const usuario = {
  ...{ nombre: "Carlos", edad: 46 },
  ...{ ciudad: "Murcia", profesion: "Desarrollador" },
};

// 🔹 Útil para construir objetos dinámicos sin declarar variables intermedias.

// *** 🔄 Comparativa con Object.assign() *** //

/*
Antes de ES2018, la forma más común de fusionar objetos era usando Object.assign().
Ambos métodos hacen una copia superficial, pero Spread es más legible y menos propenso a errores.
*/

const original = { a: 1, b: 2 };
const copiaSpread = { ...original };
const copiaAssign = Object.assign({}, original);

console.log(copiaSpread); // { a: 1, b: 2 }
console.log(copiaAssign); // { a: 1, b: 2 }

/*
🔍 Diferencias clave:
- Object.assign() muta el primer argumento si no es un objeto vacío.
- Spread es más conciso y evita efectos secundarios si se usa correctamente.
- Ambos hacen copias superficiales (no clonan objetos anidados).
*/
