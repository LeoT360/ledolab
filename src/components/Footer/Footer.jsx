import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const goToTop = (event) => {
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    navigate('/');
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      });
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-brand">
          <Link className="footer-logo" aria-label="Ledo Lab, ir al inicio" onClick={() => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
          }}>
            <img src="/assets/title-outline-2-ledolab.svg" alt="Ledo Lab" />
          </Link>
          <p className="footer-tagline">
            Diseño, edición y desarrollo web para marcas con algo que decir.
          </p>
        </div>

        <div className="footer-nav">
          <div className="footer-column">
            <h4>Navegación</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/edicion">Edición</Link></li>
              <li><Link to="/web">Desarrollo Web</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Servicios</h4>
            <ul>
              <li><Link to="/edicion#servicios">Diseño gráfico</Link></li>
              <li><Link to="/edicion#servicios">Edición de video</Link></li>
              <li><Link to="/web#planes">Desarrollo web</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contacto</h4>
            <ul>
              <li><span>hola@ledostudio.com</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ledo Lab. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;