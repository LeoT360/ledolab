import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ShapeDivider from '../../components/ShapeDivider/ShapeDivider';
import { Section, SectionHeading } from '../../components/Section/Section';
import { siteConfig, whatsappLink } from '../../config/site';
import './Home.css';
import { usePageMeta } from '../../hooks/usePageMeta';

const services = [
  { title: 'Edición de video', description: 'Videos promocionales y para redes sociales.', to: '/edicion', tone: 'light' },
  { title: 'Diseño publicitario', description: 'Flyers y publicaciones para promocionar tu negocio.', to: '/edicion', tone: 'blue' },
  { title: 'Páginas web', description: 'Landing pages y sitios para que te encuentren en internet.', to: '/web', tone: 'dark' },
];

/** Tarjeta de contacto: al hacer clic o tocar, lanza una onda desde el punto de contacto. */
const ContactCard = () => {
  const [ripples, setRipples] = useState([]);

  const spawnRipple = (rect, clientX, clientY) => {
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { id, x: clientX - rect.left, y: clientY - rect.top }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
  };

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
      onClick={(e) => spawnRipple(e.currentTarget.getBoundingClientRect(), e.clientX, e.clientY)}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        if (touch) spawnRipple(e.currentTarget.getBoundingClientRect(), touch.clientX, touch.clientY);
      }}
    >
      <span className="contact-card__ripples" aria-hidden="true">
        {ripples.map((r) => (
          <span key={r.id} className="contact-card__ripple" style={{ left: r.x, top: r.y }} />
        ))}
      </span>

      <span className="contact-card__label">Escríbeme por WhatsApp</span>
      <span className="contact-card__number">
        {siteConfig.whatsappDisplay} <span aria-hidden="true">→</span>
      </span>
    </a>
  );
};

const Home = () => {
  usePageMeta(
    'Ledo Lab | Ideas que merecen un clic',
    'Edito videos, diseño piezas publicitarias y desarrollo páginas web para negocios. Ledo Lab, ideas que merecen un clic.'
  );

  return (
  <div className="home-page">
    {/* ===== HERO · Inicio =====
        Este bloque es solo de esta página: cambia el texto aquí y sus estilos en Home.css (.home-hero). */}
    <section className="home-hero">
      <div className="home-hero__content content-width">
        <h1 className="home-hero__logo">
          <img src="/assets/title-2-ledolab.svg" alt="Ledo Lab" />
        </h1>
        <p className="home-hero__tagline">Ideas que merecen un clic.</p>
        <p className="home-hero__text">
          Edito videos, diseño piezas publicitarias y desarrollo páginas web para que tu negocio se vea y se recuerde.
        </p>
        <div className="home-hero__actions">
          <Button href={whatsappLink()} arrow>Escríbeme por WhatsApp</Button>
          <Button to="#services" variant="outline">Ver servicios</Button>
        </div>

        {/* Aquí puedes agregar figuras o imágenes decorativas (ubícalas con position: absolute en Home.css) */}
      </div>
      <ShapeDivider type="soft" fillColor="var(--color-bg-dark)" />
    </section>

    <Section tone="dark" id="about" divider={{ type: 'wave', next: 'primary' }}>
      <div className="about">
        <SectionHeading title="Un estudio creativo" highlight="de una sola persona." />
        <div className="about__copy">
          <p>
            Ledo Lab es mi estudio. Edito los videos, diseño las piezas y programo las páginas yo mismo, así que
            hablas directamente conmigo desde la primera idea hasta la entrega.
          </p>
          <p>Puedes contratar un servicio por separado o combinarlos para que tu marca se vea igual en todas partes.</p>
        </div>
      </div>
    </Section>

    <Section tone="primary" id="services" divider={{ type: 'curve', next: 'light' }}>
      <SectionHeading title="¿Qué necesita" highlight="tu negocio?" />
      <div className="link-cards">
        {services.map((service) => (
          <Link key={service.title} to={service.to} className={`link-card link-card--${service.tone}`}>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <span className="link-card__cta">
              Ver servicios <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </Section>

    <Section tone="light" id="contact">
      <div className="contact">
        <div>
          <SectionHeading title="¿Qué vamos" highlight="a crear?" />
          <p className="contact__lead">
            Cuéntame qué necesitas —un video, una pieza gráfica o una web— y te respondo con una propuesta.
          </p>
        </div>
        <ContactCard />
      </div>
    </Section>
  </div>
);
};

export default Home;
