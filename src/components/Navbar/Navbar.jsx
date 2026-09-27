import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const pageLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Edición', path: '/edicion' },
  { name: 'Web', path: '/web' },
  { name: 'Portafolio', path: '/portafolio' },
];

const sectionLinksByPath = {
  '/': [
    { name: 'Nosotros', target: 'about' },
    { name: 'Proyectos', target: 'projects' },
    { name: 'Servicios', target: 'services' },
    { name: 'Contacto', target: 'contact' },
  ],
  '/edicion': [
    { name: 'Servicios', target: 'services' },
    { name: 'Metodología', target: 'methodologies' },
    { name: 'Trabajos', target: 'works' },
    { name: 'Dudas', target: 'faq' },
  ],
  '/web': [
    { name: 'Servicios', target: 'services' },
    { name: 'Metodología', target: 'methodologies' },
    { name: 'Trabajos', target: 'works' },
    { name: 'Dudas', target: 'faq' },
  ],
  '/portafolio': [
    { name: 'Destacados', target: 'featured' },
    { name: 'Proyectos', target: 'projects' },
  ],
};

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionLinks =
    sectionLinksByPath[location.pathname] ?? sectionLinksByPath['/'];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateNavbar = () => {
      const mobile = mediaQuery.matches;

      setIsMobile(mobile);

      if (mobile) {
        setIsScrolled(false);
        return;
      }

      setIsScrolled((current) => {
        if (current) {
          return window.scrollY > 20;
        }

        return window.scrollY > 80;
      });
    };

    updateNavbar();

    const handleScroll = () => {
      if (mediaQuery.matches) {
        return;
      }

      setIsScrolled((current) => {
        if (current) {
          return window.scrollY > 20;
        }

        return window.scrollY > 80;
      });
    };

    const handleResize = () => {
      updateNavbar();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const scrollToSection = (event, target) => {
    event.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    document.getElementById(target)?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const renderPageLink = (link) => (
    <NavLink
      key={link.path}
      to={link.path}
      end={link.path === '/'}
      className="nav-link"
      onClick={scrollToTop}
    >
      {link.name}
    </NavLink>
  );

  return (
    <header
      className={`navbar-wrapper${isScrolled ? ' is-scrolled' : ''}${
        isMobile ? ' is-mobile' : ''
      }`}
    >
      <nav
        className={`navbar${isScrolled ? ' is-scrolled' : ' is-at-top'}`}
        aria-label="Navegación principal"
      >
        {/* Desktop y tablet */}
        <div className="nav-section nav-left desktop-pages" aria-label="Páginas">
          {pageLinks.map(renderPageLink)}
        </div>

        {/* Mobile */}
        <div
          className="mobile-page-group mobile-page-group-left"
          aria-label="Páginas"
        >
          {pageLinks.slice(0, 2).map(renderPageLink)}
        </div>

        <Link
          className="navbar-logo"
          aria-label="Ledo Lab, ir al inicio"
          onClick={scrollToTop}
        >
          <img
            src="/assets/icon-outline-ledolab.svg"
            alt=""
            aria-hidden="true"
          />
        </Link>

        {/* Desktop y tablet */}
        <div className="nav-section nav-right desktop-sections-wrapper">
          <div
            className="desktop-sections"
            aria-label="Secciones de esta página"
          >
            {sectionLinks.map((link) => (
              <button
                key={link.target}
                type="button"
                className="nav-sublink"
                aria-controls={link.target}
                onClick={(event) => scrollToSection(event, link.target)}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div
          className="mobile-page-group mobile-page-group-right"
          aria-label="Páginas"
        >
          {pageLinks.slice(2).map(renderPageLink)}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;