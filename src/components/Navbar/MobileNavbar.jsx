import { Link, NavLink, useLocation } from 'react-router-dom';
import { pageLinks } from '../../config/navigation';
import Icon from '../Icon/Icon';
import { siteConfig, whatsappLink } from '../../config/site';
import { scrollToTop } from '../../utils/scroll';
import './MobileNavbar.css';

const Tab = ({ icon, label }) => (
  <>
    <span className="tab__icon"><Icon name={icon} /></span>
    <span className="tab__label">{label}</span>
  </>
);

/** Navbar móvil estilo app: barra de marca arriba y pestañas flotantes abajo. */
const MobileNavbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="mobile-tabs" aria-label="Navegación principal">
        {pageLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className="tab"
            // Tocar la pestaña activa vuelve arriba, como en una app
            onClick={() => (pathname === link.path ? scrollToTop() : undefined)}
          >
            <Tab icon={link.icon} label={link.name} />
          </NavLink>
        ))}

        <a
          className="tab tab--action"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Escribir por WhatsApp al ${siteConfig.whatsappDisplay}`}
        >
          <Tab icon="chat" label="Contacto" />
        </a>
      </nav>
    </>
  );
};

export default MobileNavbar;
