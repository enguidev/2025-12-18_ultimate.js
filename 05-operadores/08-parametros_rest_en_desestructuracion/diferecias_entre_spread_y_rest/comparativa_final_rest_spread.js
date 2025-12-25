// ****** Comparativa final Rest vs Spread ****** //

/*
📊 Tabla comparativa por contexto

| Contexto         | Rest                          | Spread                        |
|------------------|-------------------------------|-------------------------------|
| Funciones        | Captura argumentos            | Expande argumentos            |
| Arrays           | Agrupa elementos restantes    | Expande elementos             |
| Objetos          | Agrupa propiedades restantes  | Copia o construye objetos     |
*/

// ✅ Casos de uso recomendados

/*
Rest:
- Capturar múltiples argumentos en una función.
- Extraer propiedades clave y agrupar el resto.
- Normalizar datos con desestructuración.

Spread:
- Pasar un array como argumentos individuales.
- Construir nuevos objetos o arrays a partir de otros.
- Clonar estructuras sin mutarlas.
*/

// ⚠️ Errores comunes

/*
❌ Usar Rest fuera de una desestructuración.
❌ Confundir Rest con Spread por tener la misma sintaxis.
❌ Olvidar devolver el objeto reconstruido al usar Rest en funciones de normalización.
*/

// 🧠 Regla práctica final

/*
Rest = “recolectar lo que sobra” (en definiciones).
Spread = “repartir lo que tienes” (en construcciones).
*/

// 📦 Este archivo cierra el módulo Rest vs Spread y puede integrarse como:
20 - comparativa_final_rest_spread.js;
