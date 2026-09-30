// TODO: reemplazar por los servicios y precios reales.
const PRICE = 'Desde $XX.XXX';

export const mediaCategories = [
  {
    title: 'Edición de video',
    tone: 'orange',
    services: [
      {
        title: 'Video promocional',
        description: 'Videos para presentar productos, servicios o promociones de tu negocio.',
        price: PRICE,
        details: {
          idealFor: 'Negocios que necesitan mostrar un producto, servicio o promoción de forma atractiva.',
          includes: ['Edición y montaje', 'Música y sincronización', 'Textos y elementos gráficos', 'Transiciones y efectos'],
          formats: 'Adaptable para Instagram, TikTok, YouTube y otras plataformas.',
        },
      },
      {
        title: 'Video para redes',
        description: 'Videos verticales y dinámicos para mantener activas las redes de tu negocio.',
        price: PRICE,
        details: {
          idealFor: 'Marcas y negocios que publican contenido constantemente en redes sociales.',
          includes: ['Edición dinámica', 'Subtítulos y textos', 'Música y efectos', 'Formato vertical'],
          formats: 'Principalmente 9:16 para Reels, TikTok y Shorts.',
        },
      },
      {
        title: 'Video publicitario',
        description: 'Piezas audiovisuales para comunicar una campaña, producto o servicio.',
        price: PRICE,
        details: {
          idealFor: 'Negocios que quieren una pieza audiovisual para promocionar una oferta o campaña.',
          includes: ['Edición completa', 'Diseño de textos', 'Animaciones básicas', 'Corrección de color'],
          formats: 'Adaptable al medio donde será publicado.',
        },
      },
    ],
  },
  {
    title: 'Diseño de imágenes',
    tone: 'blue',
    services: [
      {
        title: 'Flyer publicitario',
        description: 'Diseño para promocionar productos, servicios, eventos u ofertas.',
        price: PRICE,
        details: {
          idealFor: 'Negocios que necesitan una pieza visual para promocionar algo específico.',
          includes: ['Diseño de la composición', 'Tipografía y jerarquía visual', 'Integración de imágenes', 'Preparación para publicación'],
          formats: 'Formato digital para redes sociales, WhatsApp y otros medios.',
        },
      },
      {
        title: 'Publicación para redes',
        description: 'Diseños para mantener una comunicación visual atractiva en redes sociales.',
        price: PRICE,
        details: {
          idealFor: 'Marcas que quieren mejorar la presentación visual de sus publicaciones.',
          includes: ['Diseño gráfico', 'Composición visual', 'Textos y elementos gráficos', 'Adaptación al formato solicitado'],
          formats: 'Formatos adaptados a Instagram, Facebook y otras plataformas.',
        },
      },
      {
        title: 'Pieza publicitaria',
        description: 'Diseños personalizados para comunicar una promoción, campaña o mensaje.',
        price: PRICE,
        details: {
          idealFor: 'Negocios que necesitan una pieza gráfica diferente a un formato tradicional.',
          includes: ['Concepto visual', 'Diseño personalizado', 'Composición de elementos', 'Archivo final listo para publicar'],
          formats: 'El formato se define según el uso final de la pieza.',
        },
      },
    ],
  },
];

export const mediaSteps = [
  { title: 'Cuéntame tu idea', description: 'Hablamos de lo que quieres comunicar, el objetivo de la pieza y las necesidades de tu negocio.' },
  { title: 'Definimos la propuesta', description: 'Organizamos el contenido, el formato y la dirección visual antes de empezar.' },
  { title: 'Creo la pieza', description: 'Trabajo la edición y el diseño buscando que el resultado tenga intención y personalidad.' },
  { title: 'Revisamos y entregamos', description: 'Revisamos el resultado, hago los ajustes necesarios y preparo la entrega.' },
];

export const mediaFaqs = [
  { question: '¿Yo debo proporcionar el material?', answer: 'Sí. Puedes enviar los videos, imágenes, textos, logos y demás recursos que quieras usar. Si no sabes qué enviar, lo definimos juntos.' },
  { question: '¿Puedo solicitar modificaciones?', answer: 'Sí. El proceso incluye una etapa de revisión para hacer los ajustes necesarios antes de la entrega final.' },
  { question: '¿Cuánto tarda un proyecto?', answer: 'Depende del tipo de servicio, la cantidad de material y la complejidad. El plazo se define antes de comenzar.' },
  { question: '¿Puedes preparar contenido para redes sociales?', answer: 'Sí. Puedo adaptar las piezas a publicaciones, historias, Reels, TikTok y Shorts.' },
  { question: '¿Puedo pedir algo que no aparece en los servicios?', answer: 'Claro. Cuéntame qué necesitas y revisamos la propuesta.' },
];
