// Configuración central del sitio. Edita aquí en vez de buscar en cada página.
export const siteConfig = {
  name: 'Ledo Lab',
  whatsappNumber: '573052552215', // formato internacional, sin "+" ni espacios
  whatsappDisplay: '+57 305 255 2215',
  defaultMessage: 'Hola, quiero cotizar un proyecto con Ledo Lab.',

  // Cambia a true cuando ya tengas proyectos reales en src/data/projects.js.
  // Muestra la página /portafolio, sus enlaces y las secciones de trabajos.
  showPortfolio: false,
};

export const whatsappLink = (message = siteConfig.defaultMessage) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
