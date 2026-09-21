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

## Imágenes

- `assets/images/logo.svg` — logotipo ilustrativo generado a partir de la descripción de la especificación (siluetas de familia + taza de café dentro de un trazo en "C"). Es un diseño propio, no una foto; sustitúyelo por el logotipo oficial cuando exista.
- `assets/images/croquis-planta.svg` — plano ilustrativo de la planta baja con las 11 áreas numeradas. Sustitúyelo por el plano arquitectónico real cuando esté disponible.
- **Recorrido fotográfico** (sección Instalaciones): al ser un proyecto universitario sin fotografías reales de un local, el sitio usa fotografías libres de [Wikimedia Commons](https://commons.wikimedia.org/), enlazadas directamente por URL (no se descargaron al repositorio) para mantenerlo liviano. Créditos:

| Imagen en el sitio | Archivo de origen | Licencia |
|---|---|---|
| Antigua Guatemala (sección Ubicación) | [Santa Catalina Arch - Antigua Guatemala Feb 2020.jpg](https://commons.wikimedia.org/wiki/File:Santa_Catalina_Arch_-_Antigua_Guatemala_Feb_2020.jpg) | Wikimedia Commons |
| Recepción | [Doctor office waiting room.jpg](https://commons.wikimedia.org/wiki/File:Doctor_office_waiting_room.jpg) | Wikimedia Commons |
| Coworking | [Coworking Space in Berlin.jpg](https://commons.wikimedia.org/wiki/File:Coworking_Space_in_Berlin.jpg) | Wikimedia Commons |
| Salón de eventos | [Seminar room and mezzanine.jpg](https://commons.wikimedia.org/wiki/File:Seminar_room_and_mezzanine.jpg) | Wikimedia Commons |
| Sala de reuniones | [Large meeting room (Unsplash).jpg](https://commons.wikimedia.org/wiki/File:Large_meeting_room_(Unsplash).jpg) | Wikimedia Commons / Unsplash |
| Coffee Station | [Interior Johnie's Coffee Shop 2021.jpg](https://commons.wikimedia.org/wiki/File:Interior_Johnie's_Coffee_Shop_2021.jpg) | Wikimedia Commons |
| Área infantil | [Children's play area - geograph.org.uk - 7487942.jpg](https://commons.wikimedia.org/wiki/File:Children's_play_area_-_geograph.org.uk_-_7487942.jpg) | Wikimedia Commons |
| Oficinas administrativas | [Desk-office-workspace-coworking (23699033283).jpg](https://commons.wikimedia.org/wiki/File:Desk-office-workspace-coworking_(23699033283).jpg) | Wikimedia Commons |
| Parqueo | [Parking lot landscaped with trees.JPG](https://commons.wikimedia.org/wiki/File:Parking_lot_landscaped_with_trees.JPG) | Wikimedia Commons |

Verifica cada enlace antes de la entrega final: Wikimedia puede renombrar o mover archivos, y el entorno de desarrollo usado para este PR no tuvo salida a internet para comprobar la carga en vivo. Si algún enlace no carga, ábrelo en el navegador, confirma el nombre de archivo actual del lado de Wikimedia Commons y actualiza la URL `Special:FilePath/<archivo>?width=500` correspondiente en `index.html`. Todas son fotos referenciales para ambientar el proyecto académico; para un sitio real de producción, sustitúyelas por fotografías propias de las instalaciones.

## Pendientes antes de publicar

- **Datos de contacto:** reemplaza los marcadores `[correo@coincide.gt]`, `[Dirección del inmueble]` y `[Teléfono de contacto]` en `index.html` por los datos reales antes de publicar.

## Accesibilidad

El sitio incluye enlace "Saltar al contenido", landmarks semánticos, foco visible solo por teclado, menú móvil accesible (`aria-expanded`, `aria-controls`), formulario con `<label>` asociados y mensajes de error con `role="alert"`, y respeto a `prefers-reduced-motion`.
