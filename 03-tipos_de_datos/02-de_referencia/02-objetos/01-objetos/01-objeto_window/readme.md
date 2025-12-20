# 🪟 Ejercicios - Objeto Window

Esta carpeta contiene ejercicios prácticos sobre el objeto `window` de JavaScript.

## 📁 Archivos

```
01-objeto_window/
├── 📄 index.html              # Página principal de ejercicios
├── 📄 nueva.html              # Página de destino para navegación
├── 📄 00-resumen_window.js    # Resumen del objeto window
├── 📄 01-interaccion_usuario.js
├── 📄 02-temporizadores.js
├── 📄 03-ventanas_navegacion.js
├── 📄 04-propiedades_ventanas.js
├── 📄 05-geolocation.js
├── 📄 06-apis_modernas.js
├── 📄 07-eventos_window.js
├── 📄 08-ejercicios_window.js
└── 📄 README.md               # Este archivo
```

## 🚀 Cómo usar

### Opción 1: Abrir directamente

1. Abre `index.html` en tu navegador
2. Interactúa con los diferentes botones
3. Observa el comportamiento del objeto window

### Opción 2: Con Live Server (Recomendado)

1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"
3. Se abrirá automáticamente en el navegador
4. Los cambios se reflejarán en tiempo real

## 📚 Temas cubiertos

### 🔹 Navegación

- `window.open()` - Abrir nuevas ventanas/pestañas
- `window.location` - Manipular la URL
- `window.history` - Navegar por el historial

### 🔹 Información de la ventana

- `window.innerWidth/innerHeight` - Dimensiones del viewport
- `window.screenX/screenY` - Posición de la ventana
- `window.moveTo()` - Mover ventana
- `window.resizeTo()` - Redimensionar ventana

### 🔹 Interacción con el usuario

- `alert()` - Mostrar alertas
- `confirm()` - Cuadros de confirmación
- `prompt()` - Solicitar entrada del usuario

### 🔹 Temporizadores

- `setTimeout()` - Ejecutar código después de un tiempo
- `setInterval()` - Ejecutar código repetidamente
- `clearTimeout()` / `clearInterval()` - Detener temporizadores

### 🔹 Información del navegador

- `navigator.userAgent` - Información del navegador
- `navigator.language` - Idioma del navegador
- `navigator.onLine` - Estado de conexión
- `navigator.platform` - Plataforma del sistema

## 🎯 Ejercicios prácticos

### Ejercicio 1: Contador de tiempo

Crea un contador que muestre los segundos transcurridos desde que se cargó la página.

### Ejercicio 2: Información de pantalla

Muestra en tiempo real el tamaño de la ventana cuando el usuario la redimensiona.

### Ejercicio 3: Navegación inteligente

Implementa un sistema que detecte si el usuario puede ir atrás/adelante en el historial.

### Ejercicio 4: Alertas personalizadas

Crea un sistema de notificaciones más elegante que reemplace alert().

## 🔗 Recursos adicionales

- [MDN - Window](https://developer.mozilla.org/es/docs/Web/API/Window)
- [MDN - Navigator](https://developer.mozilla.org/es/docs/Web/API/Navigator)
- [JavaScript.info - Browser environment](https://javascript.info/browser-environment)

## ⚠️ Notas importantes

### Limitaciones de seguridad

Algunos métodos como `window.moveTo()` y `window.resizeTo()` pueden no funcionar en navegadores modernos por razones de seguridad, especialmente en:

- Ventanas principales (no abiertas por JavaScript)
- Ventanas maximizadas
- Navegadores con protección contra pop-ups

### Compatibilidad

Los ejercicios están probados en:

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)

### Buenas prácticas

- Evita usar `alert()` en producción (mala UX)
- Usa APIs modernas en lugar de métodos obsoletos
- Respeta las preferencias del usuario (no muevas/redimensiones ventanas sin permiso)

## 🐛 Problemas comunes

### window.close() no funciona

**Causa:** Solo puedes cerrar ventanas abiertas por JavaScript
**Solución:** Usa `window.open()` primero, luego cierra esa ventana

### moveTo/resizeTo no hace nada

**Causa:** Restricciones de seguridad del navegador
**Solución:** Solo funciona en ventanas abiertas por `window.open()`

### Prompt/Confirm bloqueados

**Causa:** El navegador puede bloquear diálogos si se usan en exceso
**Solución:** Usa modales personalizados con HTML/CSS

## 📝 Ejercicios adicionales

1. **Reloj en tiempo real** - Muestra hora actual actualizándose cada segundo
2. **Detector de idle** - Detecta cuando el usuario está inactivo
3. **Sistema de tabs** - Simula pestañas de navegador con localStorage
4. **Modal personalizado** - Crea alternativas a alert/confirm/prompt
5. **Fullscreen API** - Implementa modo pantalla completa

## ✅ Checklist de aprendizaje

- [ ] Entiendo la diferencia entre window, document y DOM
- [ ] Puedo crear y manipular ventanas emergentes
- [ ] Sé usar temporizadores correctamente
- [ ] Conozco las propiedades del objeto navigator
- [ ] Puedo manejar el historial de navegación
- [ ] Entiendo las limitaciones de seguridad
- [ ] Sé cuándo usar cada método de interacción
- [ ] Puedo implementar alternativas modernas a métodos antiguos

---

💡 **Tip:** Usa las DevTools del navegador (F12) para experimentar con el objeto window en la consola.

📚 **Siguiente tema:** Objeto Document y manipulación del DOM
