# COINCIDE — Sitio web

Sitio web de una sola página para **COINCIDE**, centro integral de coworking, capacitación y convergencia profesional en Antigua Guatemala, Sacatepéquez.

Proyecto académico del curso *Fundamentos de Administración*, CUNSAC, Universidad de San Carlos de Guatemala.

## Stack

- HTML5 semántico
- CSS3 (variables, flexbox, grid) — `assets/css/styles.css`
- JavaScript vanilla (ES6, sin dependencias) — `assets/js/main.js`
- Tipografías de Google Fonts (Fraunces + Work Sans)

No requiere build step ni framework. Es un sitio estático listo para GitHub Pages.

## Estructura

```
coincide-website/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── images/
│       ├── logo.svg
│       └── croquis-planta.svg
├── README.md
└── .gitignore
```

## Cómo verlo localmente

Al ser un sitio estático, basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor local, por ejemplo:

```bash
python3 -m http.server 8000
```

y visitar `http://localhost:8000`.

## Publicar en GitHub Pages

1. Sube el repositorio a GitHub (rama `main`).
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda y espera a que se publique el enlace público.

## Pendientes antes de publicar

- **Imágenes:** `assets/images/logo.svg` y `assets/images/croquis-planta.svg` son ilustraciones de marcador de posición generadas a partir de la descripción de la especificación. Sustitúyelas por el logotipo oficial y el croquis fotográfico real de las instalaciones (pueden mantenerse en `.svg` o convertirse a `.jpg`; solo hay que actualizar la referencia en `index.html` si cambia la extensión).
- **Datos de contacto:** reemplaza los marcadores `[correo@coincide.gt]`, `[Dirección del inmueble]` y `[Teléfono de contacto]` en `index.html` por los datos reales antes de publicar.

## Accesibilidad

El sitio incluye enlace "Saltar al contenido", landmarks semánticos, foco visible solo por teclado, menú móvil accesible (`aria-expanded`, `aria-controls`), formulario con `<label>` asociados y mensajes de error con `role="alert"`, y respeto a `prefers-reduced-motion`.
