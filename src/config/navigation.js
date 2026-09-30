import { siteConfig } from './site';

// Enlaces entre páginas (los usan ambos navbars)
export const pageLinks = [
  { name: 'Inicio', path: '/', icon: 'home' },
  { name: 'Edición', path: '/edicion', icon: 'video' },
  { name: 'Web', path: '/web', icon: 'code' },
  ...(siteConfig.showPortfolio ? [{ name: 'Portafolio', path: '/portafolio', icon: 'grid' }] : []),
];

// Enlaces a secciones de la página actual (solo navbar de escritorio)
const servicePageSections = [
  { name: 'Servicios', target: 'services' },
  { name: 'Metodología', target: 'methodologies' },
  ...(siteConfig.showPortfolio ? [{ name: 'Trabajos', target: 'works' }] : []),
  { name: 'Dudas', target: 'faq' },
];

export const sectionLinksByPath = {
  '/': [
    { name: 'Nosotros', target: 'about' },
    { name: 'Servicios', target: 'services' },
    { name: 'Contacto', target: 'contact' },
  ],
  '/edicion': servicePageSections,
  '/web': servicePageSections,
  '/portafolio': [{ name: 'Proyectos', target: 'projects' }],
};
