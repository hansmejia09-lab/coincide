# COINCIDE — Sitio web

Sitio web de una sola página para **COINCIDE**, centro integral de coworking, capacitación y convergencia profesional en Antigua Guatemala, Sacatepéquez.

Proyecto académico del curso *Fundamentos de Administración*, CUNSAC, Universidad de San Carlos de Guatemala.

## Stack

- HTML5 semántico
- CSS3 (variables, flexbox, grid) — `assets/css/styles.css`
- JavaScript vanilla (ES6, sin dependencias) — `assets/js/main.js`
- [Chart.js](https://www.chartjs.org/) (vía CDN de jsDelivr) — única dependencia externa, usada solo para las dos gráficas circulares de la sección Financiero (`assets/js/charts.js`)
- Tipografías de Google Fonts (Fraunces + Work Sans)

No requiere build step ni framework. Es un sitio estático listo para GitHub Pages.

## Estructura

```
coincide-website/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── charts.js
│   └── images/
│       ├── logo.png
│       ├── logo-icon.png
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

- `assets/images/logo.png` — logotipo oficial de COINCIDE (banner completo con emblema, wordmark y lema), usado en la sección de Identidad corporativa.
- `assets/images/logo-icon.png` — recorte cuadrado del emblema del logotipo oficial, usado como ícono en el encabezado.
- `assets/images/croquis-planta.svg` — plano ilustrativo de la planta baja con las 11 áreas numeradas. Sustitúyelo por el plano arquitectónico real cuando esté disponible.
- **Fotografías** (sección Servicios y Anexo A): al ser un proyecto universitario sin fotografías reales de un local, el sitio usa fotografías libres de [Wikimedia Commons](https://commons.wikimedia.org/), enlazadas directamente por URL (no se descargaron al repositorio) para mantenerlo liviano. Varias imágenes se reutilizan entre las tarjetas de Servicios y el recorrido fotográfico del Anexo A, ya que representan el mismo ambiente. Créditos:

| Imagen en el sitio | Archivo de origen | Licencia |
|---|---|---|
| Antigua Guatemala (sección Ubicación) | [Santa Catalina Arch - Antigua Guatemala Feb 2020.jpg](https://commons.wikimedia.org/wiki/File:Santa_Catalina_Arch_-_Antigua_Guatemala_Feb_2020.jpg) | Wikimedia Commons |
| Recepción (Anexo A) | [Doctor office waiting room.jpg](https://commons.wikimedia.org/wiki/File:Doctor_office_waiting_room.jpg) | Wikimedia Commons |
| Coworking (Servicios + Anexo A) | [Coworking Space in Berlin.jpg](https://commons.wikimedia.org/wiki/File:Coworking_Space_in_Berlin.jpg) | Wikimedia Commons |
| Centro de capacitadores / Salón de eventos (Servicios + Anexo A) | [Seminar room and mezzanine.jpg](https://commons.wikimedia.org/wiki/File:Seminar_room_and_mezzanine.jpg) | Wikimedia Commons |
| Salas de reuniones (Servicios + Anexo A) | [Large meeting room (Unsplash).jpg](https://commons.wikimedia.org/wiki/File:Large_meeting_room_(Unsplash).jpg) | Wikimedia Commons / Unsplash |
| Eventos corporativos (Servicios) | [Meeting room, table and paper board.jpg](https://commons.wikimedia.org/wiki/File:Meeting_room,_table_and_paper_board.jpg) | Wikimedia Commons |
| Programa de networking (Servicios) | [Man and Woman Shaking Hands.jpg](https://commons.wikimedia.org/wiki/File:Man_and_Woman_Shaking_Hands.jpg) | Wikimedia Commons |
| Estación de café / Coffee Station (Servicios + Anexo A) | [Interior Johnie's Coffee Shop 2021.jpg](https://commons.wikimedia.org/wiki/File:Interior_Johnie's_Coffee_Shop_2021.jpg) | Wikimedia Commons |
| Área infantil (Servicios + Anexo A) | [Kids at daycare.jpg](https://commons.wikimedia.org/wiki/File:Kids_at_daycare.jpg) | Wikimedia Commons (CC BY 2.0) |
| Oficinas administrativas (Anexo A) | [Desk-office-workspace-coworking (23699033283).jpg](https://commons.wikimedia.org/wiki/File:Desk-office-workspace-coworking_(23699033283).jpg) | Wikimedia Commons |
| Parqueo (Anexo A) | [Parking lot landscaped with trees.JPG](https://commons.wikimedia.org/wiki/File:Parking_lot_landscaped_with_trees.JPG) | Wikimedia Commons |

Verifica cada enlace antes de la entrega final: Wikimedia puede renombrar o mover archivos, y el entorno de desarrollo usado para este PR no tuvo salida a internet para comprobar la carga en vivo. Si algún enlace no carga, ábrelo en el navegador, confirma el nombre de archivo actual del lado de Wikimedia Commons y actualiza la URL `Special:FilePath/<archivo>?width=500` correspondiente en `index.html`. Todas son fotos referenciales para ambientar el proyecto académico; para un sitio real de producción, sustitúyelas por fotografías propias de las instalaciones.

> Nota: la foto anterior del área infantil (un parque exterior sin techar, en un entorno frío) se reemplazó por "Kids at daycare.jpg" — un espacio interior cálido y techado, más acorde al servicio real de cuidado infantil por horas.

## Fuente del contenido

Todo el texto del sitio se transcribió directamente de `Proyecto_COINCIDE.pdf` (documento "Proyecto Creación de una Empresa", Fundamentos de Administración, CUNSAC-USAC), sección por sección y sin resumir tablas ni listas. El croquis de planta (`assets/images/croquis-planta.svg`) es una ilustración propia referencial; todo lo demás —incluidas las 16 tablas numeradas, el Anexo A y el Anexo B— proviene del documento.

### Inconsistencias del documento original conservadas tal cual

Por instrucción explícita, el sitio **no corrige silenciosamente** el contenido del PDF. Se detectaron los siguientes puntos que probablemente sean errores de redacción o de copiado en el documento fuente; se muestran en el sitio exactamente como aparecen en el PDF:

- **Objetivo específico de Planeación:** "mediante una ocupación mínima del **0%** de la capacidad instalada" — el 0% parece un error de tipeo (posiblemente debía ser 65%, como en los Objetivos de la Empresa).
- **Tabla de incentivos variables:** "Bono por ocupación" tiene la condición de calificación (4.5/5) que lógicamente correspondería a "Bono por satisfacción del cliente", y esta última fila aparece **dos veces** con condiciones distintas (70% de ocupación y 4.5/5). Parece un error de copiado/mezcla de filas.
- **Tabla 6 (Factores motivacionales):** las filas "Autonomía operativa" y "Actividades de integración" tienen exactamente la misma descripción ("Convivencias, celebración de cumpleaños…"), que temáticamente encaja solo con la segunda.
- **Tabla 4 (Coordinador Comercial y de Marketing):** el campo "Experiencia" es idéntico al de la Tabla 2 (Coordinador Administrativo-Financiero) — "en áreas administrativas, financieras o de recursos humanos" — cuando lógicamente debería referirse a experiencia comercial o de mercadeo.
- **Aguinaldo:** el documento indica que el aguinaldo es "pagadero en julio", cuando en la legislación laboral guatemalteca el aguinaldo se paga en diciembre (julio corresponde al Bono 14). Se conserva tal como está escrito en el PDF.
- **Tramo de control vs. perfil de puesto:** el párrafo de "Tramo de Control" describe que cada coordinador supervisa a un solo colaborador directo, pero la Tabla 3 (perfil del Coordinador de Operaciones) le asigna dos ("Personal a cargo": Anfitrión de Recepción y de Coffee Station, y Auxiliar de Operaciones y Monitoreo de Eventos). El organigrama del sitio sigue la Tabla 3 por ser la fuente más específica; se aclara con una nota junto al organigrama.
- **Numeración de tablas:** el documento reutiliza el número "Tabla 7" tanto para la Escala Salarial Base como para la Estructura de Incentivos Variables, y salta directamente de "Tabla 7" a "Tabla 9" (no existe una "Tabla 8"). El sitio muestra ambos contenidos completos pero deja sin número la segunda para no inducir a error.
- Varias erratas menores de tipeo se mantuvieron tal cual (p. ej. "COICIDE" en la Tabla 5, "Coffe Station" sin la segunda "e" en el párrafo de Estructura Organizacional, "legalmente construido" en vez de "constituido" en la política de contrataciones externas, "Código en Comercio" en vez de "Código de Comercio").
- **Introducción:** la frase "que constituyen negocios dependientes, sino elementos que agregan valor…" parece faltarle un "no" (sentido probable: "que **no** constituyen negocios independientes, sino elementos…"). Se conserva tal como aparece extraída del PDF.
- Un párrafo del documento original en la sección de Control repetía literalmente la misma cláusula dos veces seguidas dentro de una sola oración ("...cuando la organización verifica que el trabajo realizado corresponde a lo planificado y, cuando la organización verifica que el trabajo realizado corresponde a lo planificado y, cuando existen desviaciones..."). En este caso sí se quitó la repetición literal en el sitio (dejando la oración una sola vez), porque reproducirla tal cual generaría exactamente el tipo de bloque de texto duplicado que este sitio busca evitar; se documenta aquí para que quede constancia del cambio.

Ninguna cifra, nombre ni afirmación de contenido fue inventada o alterada — solo se restauró la puntuación/formato donde el PDF tenía saltos de línea o separadores numéricos rotos por la extracción (por ejemplo, "Q 45,00" → "Q45,000", verificado porque la suma total de la Tabla 12 solo cuadra con ese valor).

## Gráficas financieras

La sección Financiero incluye dos gráficas circulares (Chart.js), justo después de la Tabla 16:

- **Estructura de financiamiento propuesto**: 60% aporte de socios (Q617,614) / 40% financiamiento bancario (Q411,743), tomado directo de la Tabla 15.
- **Proyección de ingresos mensuales por línea**: porcentajes calculados sobre la suma real de las seis líneas de la Tabla 16 (Q140,600), no sobre el total de Q147,100 que aparece en esa tabla. **Hay una diferencia de Q6,500 entre ambos números en el documento fuente original** (la suma de las seis líneas no cuadra con el total que el propio PDF declara); la gráfica lo señala en su leyenda para que quede visible, en vez de ocultar la discrepancia. Vale la pena revisarlo en el documento original antes de una exposición formal.

## Pendientes antes de publicar

- **Datos de contacto:** reemplaza los marcadores `[correo@coincide.gt]`, `[Dirección del inmueble]` y `[Teléfono de contacto]` en `index.html` por los datos reales antes de publicar.

## Accesibilidad

El sitio incluye enlace "Saltar al contenido", landmarks semánticos, foco visible solo por teclado, menú móvil accesible (`aria-expanded`, `aria-controls`), formulario con `<label>` asociados y mensajes de error con `role="alert"`, y respeto a `prefers-reduced-motion`.
