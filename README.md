# Ledo Lab · sitio web

React + Vite + React Router.

```bash
npm install
npm run dev      # desarrollo
npm run build    # producción (carpeta dist)
npm run lint
```

## Dónde editar cada cosa

| Qué | Dónde |
| --- | --- |
| WhatsApp, mensaje por defecto, activar el portafolio | `src/config/site.js` |
| Servicios, precios, pasos y preguntas de Edición | `src/data/media.js` |
| Servicios, precios, pasos y preguntas de Web | `src/data/web.js` |
| Proyectos del portafolio | `src/data/projects.js` |
| Colores, tamaños de letra y espacios | `src/styles/variables.css` |

## Portafolio

La página `/portafolio` está lista pero oculta. Cuando tengas proyectos reales,
agrégalos en `src/data/projects.js` y cambia `showPortfolio` a `true` en
`src/config/site.js`. Se activan solos el enlace del menú y el pie de página,
la ruta y las secciones de trabajos de Edición y Web.

## Cómo está organizado

**Cada página es dueña de su hero.** El hero de cada página está escrito directamente en su archivo
(`pages/<Página>/<Página>.jsx`) y sus estilos en el CSS de esa misma carpeta, con clases propias
(`.home-hero`, `.media-hero`, `.web-hero`, `.portfolio-hero`). Puedes cambiar colores, tamaños,
agregar imágenes o figuras en uno sin afectar a los otros.

**Componentes compartidos:** solo lo que debe verse igual en todo el sitio.
`Section` / `SectionHeading`, `Steps`, `Faq`, `CtaSection`, `ServiceCard`, `ServiceModal`,
`ProjectCard`, `WorksSection`, `Button`, `ShapeDivider` e `Icon`.
Si quieres que una sección tenga su propia personalidad, cambia su `<Section>` por un
`<section className="mi-clase">` y ponle su CSS en la página, igual que los heroes.

**Iconos:** `src/components/Icon/Icon.jsx`. No son imágenes: cada icono es un dibujo SVG escrito
en ese archivo. Los usan el navbar de escritorio y el de celular.

**Navbar:** `Navbar.jsx` elige entre `DesktopNavbar` y `MobileNavbar` según el ancho (767 px).
Los enlaces están en `src/config/navigation.js`.

## Publicar en Vercel

1. Sube el proyecto a GitHub.
2. En vercel.com: **Add New → Project**, elige el repositorio y pulsa **Deploy** (detecta Vite solo).
3. Cuando tengas la URL definitiva (o tu dominio), ponla en `VITE_SITE_URL`:
   en `.env` y también en Vercel → *Settings → Environment Variables*. Vuelve a desplegar.

`vercel.json` hace que `/web` y `/edicion` funcionen al abrirlos directamente.
En cada build se generan `sitemap.xml` y `robots.txt` con esa URL.

## Al compartir el enlace

La imagen que aparece en WhatsApp y redes es `public/og-image.png` (1200×630).
Los textos están en `index.html`. Las redes guardan una copia: si la cambias y no se actualiza,
prueba el enlace en el depurador de Facebook (developers.facebook.com/tools/debug).
