import { Link } from 'react-router-dom';
import { siteConfig, whatsappLink } from '../../config/site';
import { scrollToTop } from '../../utils/scroll';
import './Footer.css';

const links = [
  { name: 'Inicio', path: '/' },
  { name: 'Edición y diseño', path: '/edicion' },
  { name: 'Desarrollo web', path: '/web' },
  ...(siteConfig.showPortfolio ? [{ name: 'Portafolio', path: '/portafolio' }] : []),
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__container content-width">
      <div>
        <Link to="/" className="footer__logo" aria-label="Ledo Lab, ir al inicio" onClick={scrollToTop}>
          <img src="/assets/title-outline-2-ledolab.svg" alt="Ledo Lab" />
        </Link>
        <p className="footer__tagline">Edición de video, diseño y páginas web para negocios.</p>
      </div>

      <nav aria-label="Pie de página">
        <h2>Navegación</h2>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <h2>Contacto</h2>
        <ul>
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp {siteConfig.whatsappDisplay}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <p className="footer__bottom">
      &copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
    </p>
  </footer>
);

export default Footer;
