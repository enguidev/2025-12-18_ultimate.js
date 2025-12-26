// 🔹 Resumen global del operador Spread en JavaScript

/*
📌 ¿Qué es el operador Spread?
Es una sintaxis moderna que permite expandir elementos de arrays, objetos o iterables en lugares donde se esperan múltiples elementos o propiedades.

✅ Usos principales:
- Expandir arrays en llamadas a funciones
- Clonar arrays y objetos (shallow copy)
- Fusionar arrays y objetos
- Excluir propiedades con desestructuración inversa
- Construir objetos con propiedades condicionales
- Manipular estructuras anidadas (con ayuda de Lodash)

🧠 Ventajas:
- Sintaxis concisa y legible
- Favorece la inmutabilidad
- Evita mutaciones y efectos secundarios
- Compatible con funciones modernas como Math.max(...valores)

🔍 Limitaciones:
- Solo copia propiedades enumerables propias
- No clona métodos ni prototipos
- No sirve para instancias complejas como Date o RegExp
- Requiere técnicas adicionales para clonación profunda (Lodash, structuredClone)

📦 Archivos incluidos en esta guía:
01-uso_basico.js  
02-convertir_estructuras_parecidas_a_array_en_array.js  
03-clonacion_de_arrays_y_objetos.js  
04-spread_en_funciones.js  
05-diferencia_entre_rest_y_spread.js  
06-destructuracion_inversa.js  
07-limitaciones_del_spread.js  
08-agregar_elementos_en_un_array.js  
09-agregar_propiedades_a_un_objeto.js  
10-fusionar_arrays.js  
11-fusionar_objetos.js  
12-estructuras_anidadas.js  
13-estructuras_anidadas_con_libreria_lodash.js  
14-propiedades_condicionales.js  
15-advertencias_comunes.js

✅ Recomendación final:
Si trabajas con estructuras complejas, considera usar Lodash o structuredClone para clonación profunda.
*/
