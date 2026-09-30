import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { pageLinks, sectionLinksByPath } from '../../config/navigation';
import { scrollToSection, scrollToTop } from '../../utils/scroll';
import Icon from '../Icon/Icon';
import './DesktopNavbar.css';

/** Navbar superior para tablet y escritorio: páginas a la izquierda, secciones a la derecha. */
const DesktopNavbar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionLinks = sectionLinksByPath[pathname] ?? sectionLinksByPath['/'];

  useEffect(() => {
    // Histéresis: se compacta al pasar 80px y se expande al volver bajo 20px
    const update = () => setIsScrolled((current) => window.scrollY > (current ? 20 : 80));
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`navbar-wrapper${isScrolled ? ' is-scrolled' : ''}`}>
      <nav className={`navbar${isScrolled ? ' is-scrolled' : ' is-at-top'}`} aria-label="Navegación principal">
        <div className="nav-section nav-left">
          {pageLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === '/'} className="nav-link" onClick={scrollToTop}>
              <Icon name={link.icon} size={18} />
              {link.name}
            </NavLink>
          ))}
        </div>

        <Link to="/" className="navbar-logo" aria-label="Ledo Lab, ir al inicio" onClick={scrollToTop}>
          <img src="/assets/icon-outline-ledolab.svg" alt="" aria-hidden="true" />
        </Link>

        <div className="nav-section nav-right">
          <div className="desktop-sections" aria-label="Secciones de esta página">
            {sectionLinks.map((link) => (
              <button
                key={link.target}
                type="button"
                className="nav-sublink"
                aria-controls={link.target}
                onClick={() => scrollToSection(link.target)}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavbar;
