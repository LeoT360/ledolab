const behavior = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: behavior() });

export const scrollToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: behavior(), block: 'start' });
