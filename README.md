# Invitación de Graduación Interactiva 🎓

Una invitación web moderna y elegante para tu ceremonia de graduación, con diseño premium, animaciones dinámicas y efectos interactivos.

## 🌟 Características

- **Diseño Premium**: Paleta de colores dorados y azul oscuro con efectos glassmorphism
- **Animaciones Modernas**: Efectos de fade-in, parallax y confetti
- **Contador Regresivo**: Cuenta atrás en tiempo real hasta el día del evento
- **Formulario RSVP**: Confirmación de asistencia con validación
- **Responsive**: Optimizado para móviles, tablets y desktop
- **Mapa Interactivo**: Ubicación del evento con Google Maps

## 📁 Estructura del Proyecto

```
invitacion/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # Interactividad y efectos
├── images/             # Assets visuales
│   ├── graduation-bg.png
│   └── decoration.png
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### Visualizar Localmente

1. Abre el archivo `index.html` en tu navegador web
2. ¡Listo! La invitación se mostrará con todas sus funcionalidades

### Personalizar la Invitación

Edita el archivo `index.html` para cambiar:

**Información del Graduado** (líneas 48-58):

```html
<h2>Tu Nombre Completo</h2>
<p>Tu Título o Carrera</p>
```

**Fecha del Evento** (línea 111):

```html
<div class="detail-value">11 de Diciembre, 2025</div>
```

**Hora del Evento** (línea 117):

```html
<div class="detail-value">6:00 PM</div>
```

**Lugar del Evento** (líneas 123-124):

```html
<div class="detail-value">Auditorio Principal<br />Universidad Nacional</div>
```

**Contador Regresivo**: Edita `script.js` línea 3:

```javascript
const countdownDate = new Date("December 11, 2025 18:00:00").getTime();
```

## 🌐 Publicar en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Ve a Settings → Pages
4. Selecciona la rama `main` como fuente
5. Guarda y espera unos minutos
6. Tu invitación estará disponible en: `https://tu-usuario.github.io/nombre-repo`

## 🎨 Personalización Avanzada

### Cambiar Colores

Edita las variables CSS en `styles.css` (líneas 2-14):

```css
:root {
  --color-primary: #1a1a2e; /* Color de fondo principal */
  --color-gold: #d4af37; /* Color dorado de acentos */
  --color-gold-light: #f4e4c1; /* Dorado claro */
  /* ... más colores ... */
}
```

### Modificar Animaciones

Las animaciones se encuentran en `styles.css`:

- Línea 374: `@keyframes fadeInUp`
- Línea 385: `@keyframes float`
- Línea 394: `@keyframes shimmer`

### Cambiar Fuentes

Las fuentes actuales son:

- **Títulos**: Playfair Display (serif elegante)
- **Texto**: Inter (sans-serif moderna)

Para cambiar, modifica el link de Google Fonts en `index.html` (línea 22-24)

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ Dispositivos móviles iOS y Android
- ✅ Tablets y pantallas grandes

## 🎯 Funcionalidades Interactivas

- **Scroll Reveal**: Los elementos aparecen al hacer scroll
- **Parallax**: Efecto de profundidad en el hero
- **Confetti**: Animación de confetti al enviar el formulario
- **Hover Effects**: Efectos al pasar el mouse sobre tarjetas
- **Smooth Scroll**: Navegación suave entre secciones

## 📝 Notas

- El formulario RSVP actualmente muestra un mensaje de confirmación local
- Para conectar con un backend, modifica la función `initForm()` en `script.js`
- Las imágenes son SVG vectoriales que se ven bien en cualquier resolución

## 💡 Tips

- Prueba la invitación en diferentes dispositivos antes de compartirla
- Personaliza el mensaje de la sección "Detalles del Evento"
- Puedes agregar más secciones copiando la estructura existente
- Los colores dorados pueden ajustarse para match con los colores de tu universidad

## 🤝 Soporte

Si necesitas ayuda para personalizar la invitación, revisa los comentarios en el código o consulta la documentación de HTML, CSS y JavaScript.

---

**¡Felicidades por tu graduación! 🎉🎓**
# Invitacion-Grado
