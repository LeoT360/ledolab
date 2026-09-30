// TODO: reemplazar por los servicios y precios reales.
const PRICE = 'Desde $XX.XXX';
const DEVICES = 'Adaptada para computadores, tablets y celulares.';

export const webServices = [
  {
    title: 'Landing page',
    description: 'Una página enfocada en presentar un producto, servicio o campaña de forma clara y atractiva.',
    price: PRICE,
    details: {
      idealFor: 'Negocios, productos o campañas que necesitan una presencia web enfocada en un objetivo concreto.',
      includes: ['Diseño personalizado', 'Diseño responsive', 'Secciones según el objetivo del proyecto', 'Botones y llamados a la acción'],
      formats: DEVICES,
    },
  },
  {
    title: 'Página web para negocio',
    description: 'Una página completa para mostrar quién eres, qué haces y cómo pueden encontrarte.',
    price: PRICE,
    details: {
      idealFor: 'Negocios que necesitan presentar sus servicios, información y formas de contacto en internet.',
      includes: ['Diseño personalizado', 'Estructura de varias secciones', 'Diseño responsive', 'Sección de contacto'],
      formats: DEVICES,
    },
  },
  {
    title: 'Portafolio web',
    description: 'Una web para mostrar tus proyectos, trabajos y experiencia.',
    price: PRICE,
    details: {
      idealFor: 'Creativos, profesionales, freelancers y marcas que quieren mostrar su trabajo de forma visual.',
      includes: ['Diseño personalizado', 'Galería o presentación de proyectos', 'Diseño responsive', 'Secciones informativas'],
      formats: DEVICES,
    },
  },
  {
    title: 'Web personalizada',
    description: 'Una experiencia web diseñada alrededor de la identidad y necesidades de tu proyecto.',
    price: PRICE,
    details: {
      idealFor: 'Proyectos que necesitan una estructura o experiencia diferente a una página convencional.',
      includes: ['Diseño personalizado', 'Estructura planteada desde cero', 'Diseño responsive', 'Funcionalidades según el proyecto'],
      formats: 'Adaptada a las necesidades del proyecto.',
    },
  },
  {
    title: 'Interfaz interactiva',
    description: 'Interfaces con movimiento e interacción para que una web destaque.',
    price: PRICE,
    details: {
      idealFor: 'Marcas y proyectos que quieren una experiencia web más dinámica y visual.',
      includes: ['Diseño de interfaz', 'Elementos interactivos', 'Animaciones y transiciones', 'Diseño responsive'],
      formats: 'Adaptada para computadores y dispositivos móviles.',
    },
  },
  {
    title: 'Funcionalidad web',
    description: 'Desarrollo de funcionalidades específicas para complementar una página.',
    price: PRICE,
    details: {
      idealFor: 'Proyectos que necesitan algo específico que no está en una página convencional.',
      includes: ['Análisis de la necesidad', 'Desarrollo de la funcionalidad', 'Integración con la página', 'Pruebas de funcionamiento'],
      formats: 'Según las características de la funcionalidad.',
    },
  },
];

export const webSteps = [
  { title: 'Cuéntame tu idea', description: 'Hablamos de tu negocio, lo que necesitas y lo que quieres conseguir con tu página.' },
  { title: 'Definimos la propuesta', description: 'Organizamos la estructura, el contenido, el estilo visual y las funcionalidades.' },
  { title: 'Construyo la web', description: 'Convierto la propuesta en una página funcional, visual y adaptada a tu proyecto.' },
  { title: 'Revisamos y entregamos', description: 'Revisamos el resultado, hago los ajustes necesarios y dejo todo listo.' },
];

export const webFaqs = [
  { question: '¿Tengo que tener claro cómo quiero mi página?', answer: 'No necesariamente. Podemos partir de una idea general y definir juntos la estructura, el contenido y el estilo.' },
  { question: '¿Puedo proporcionar mis propios textos e imágenes?', answer: 'Sí. Trabajamos a partir del material que ya tengas.' },
  { question: '¿La página se adapta a celulares?', answer: 'Sí. La experiencia funciona tanto en computadores como en dispositivos móviles.' },
  { question: '¿Puedo solicitar cambios?', answer: 'Sí. Los ajustes se hacen durante la etapa de revisión, según lo acordado en la propuesta.' },
  { question: '¿Puedo pedir algo que no aparece en los servicios?', answer: 'Sí. Cuéntame tu idea y definimos una propuesta personalizada.' },
];
