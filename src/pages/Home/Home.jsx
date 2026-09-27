import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShapeDivider from '../../components/ShapeDivider/ShapeDivider';
import CursorMark from '../../components/CursorMark/CursorMark';
import './Home.css';

const projects = [
  {
    number: '01',
    category: 'VIDEO',
    title: 'Movimiento que comunica.',
    description:
      'Edición, ritmo y postproducción para convertir contenido en una experiencia visual.',
    href: '/edicion',
    tone: 'orange',
    asset: '/assets/title-outline-ledolab.svg',
  },
  {
    number: '02',
    category: 'DESIGN',
    title: 'Ideas que toman forma.',
    description:
      'Diseño gráfico y piezas visuales pensadas para hacer que una marca se note.',
    href: '/edicion',
    tone: 'blue',
    asset: '/assets/icon-outline-ledolab.svg',
  },
  {
    number: '03',
    category: 'WEB',
    title: 'Ideas que cobran vida.',
    description:
      'Diseño y desarrollo web para convertir una idea en una experiencia digital.',
    href: '/web',
    tone: 'dark',
    asset: '/assets/title-2-ledolab.svg',
  },
];

const Home = () => {
  const [ripples, setRipples] = useState([]);

  const spawnRipple = (rect, clientX, clientY) => {
    const id = Date.now() + Math.random();
    const ripple = {
      id,
      x: clientX - rect.left,
      y: clientY - rect.top,
    };

    setRipples((prev) => [...prev, ripple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
  };

  const handleContactClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spawnRipple(rect, e.clientX, e.clientY);
  };

  const handleContactTouch = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];

    if (touch) {
      spawnRipple(rect, touch.clientX, touch.clientY);
    }
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-background-shape" />

        <div className="hero-meta">
          <span>CREATIVE STUDIO</span>
        </div>

        <div className="hero-main">
          <div className="hero-brand">
            <span className="hero-intro">BIENVENIDO A</span>

            <img
              src="/assets/title-outline-2-ledolab.svg"
              alt="Ledo Lab"
              className="hero-title-logo"
            />
          </div>

          <div className="hero-decoration hero-decoration-one">
            <img
              src="/assets/icon-outline-ledolab.svg"
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="hero-decoration hero-decoration-two">
            <img
              src="/assets/cursor-ledolab.svg"
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="hero-sticker">
            <span>CLICK</span>
            <strong>
              <CursorMark size={20} />
            </strong>
          </div>
        </div>

        <ShapeDivider
          type="soft"
          fillColor="var(--color-bg-dark)"
        />
      </section>

      <section className="about-section" id="about">
        <div className="content-width">
          <div className="about-layout">
            <div className="about-heading">
              <p className="section-kicker">¿QUÉ ES LEDO LAB?</p>

              <h2>
                Un lugar para
                <span> experimentar.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                Ledo Lab es un estudio creativo independiente donde diseño,
                edición y desarrollo web se encuentran para transformar ideas
                en algo que pueda verse, sentirse y recordarse.
              </p>

              <p>
                No queremos hacer siempre lo mismo. El laboratorio cambia,
                prueba, aprende y evoluciona con cada proyecto.
              </p>

              <div className="about-mark">
                <img
                  src="/assets/icon-line-ledolab.svg"
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        <ShapeDivider
          type="wave"
          fillColor="var(--color-primary)"
          flip
        />
      </section>

      <section className="projects-section" id="projects">
        <div className="content-width">
          <div className="projects-header">
            <div>
              <p className="section-kicker">PROYECTOS</p>

              <h2>
                Tres formas de
                <span> crear.</span>
              </h2>
            </div>

            <p>
              Cada disciplina tiene su propio lenguaje. Aquí se mezclan para
              encontrar nuevas formas de comunicar.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <Link
                key={project.number}
                to={project.href}
                className={`project-card project-${project.tone}`}
              >
                <div className="project-card-top">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <div className="project-art">
                  <div className="art-grid" />

                  <img
                    src={project.asset}
                    alt=""
                    aria-hidden="true"
                    className="project-placeholder"
                  />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-link">
                  <span>EXPLORAR</span>
                  <strong>
                    <CursorMark size={17} />
                  </strong>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <ShapeDivider
          type="arch"
          fillColor="var(--color-secondary)"
        />
      </section>

      <section className="services-section" id="services">
        <div className="content-width">
          <div className="services-heading">
            <p className="section-kicker">SERVICIOS</p>

            <h2>
              Elige una opción.
              <span> ¿Qué quieres crear?</span>
            </h2>
          </div>

          <div className="services-list">
            <Link to="/edicion" className="service-item">
              <span className="service-number">01</span>

              <div className="service-icon service-icon-orange">
                <span>▶</span>
              </div>

              <div className="service-text">
                <h3>Edición</h3>
                <p>VIDEO · MOTION · RETOUCHING</p>
              </div>

              <span className="service-arrow">
                <CursorMark size={18} />
              </span>
            </Link>

            <Link to="/edicion" className="service-item">
              <span className="service-number">02</span>

              <div className="service-icon service-icon-blue">
                <span>✦</span>
              </div>

              <div className="service-text">
                <h3>Diseño</h3>
                <p>VISUAL · CONTENT · GRAPHICS</p>
              </div>

              <span className="service-arrow">
                <CursorMark size={18} />
              </span>
            </Link>

            <Link to="/web" className="service-item">
              <span className="service-number">03</span>

              <div className="service-icon service-icon-dark">
                <span>&lt;/&gt;</span>
              </div>

              <div className="service-text">
                <h3>Web</h3>
                <p>UI · UX · DEVELOPMENT</p>
              </div>

              <span className="service-arrow">
                <CursorMark size={18} />
              </span>
            </Link>
          </div>
        </div>

        <ShapeDivider
          type="curve"
          fillColor="var(--color-bg-light)"
        />
      </section>

      <section className="contact-section" id="contact">
        <div className="content-width">
          <div className="contact-layout">
            <div className="contact-copy">
              <p className="section-kicker">HABLEMOS</p>

              <h2>
                ¿Qué vamos
                <span> a crear?</span>
              </h2>

              <p className="contact-lead">
                Cuéntame en qué estás trabajando 'un video, unas piezas
                gráficas o una web' y veamos cómo convertirlo en tu clic
                asegurado.
              </p>
            </div>

            <a
              href="mailto:hola@ledolab.com"
              className="contact-card"
              onClick={handleContactClick}
              onTouchStart={handleContactTouch}
            >
              <span className="contact-card-ripples" aria-hidden="true">
                {ripples.map((r) => (
                  <span
                    key={r.id}
                    className="contact-ripple"
                    style={{ left: r.x, top: r.y }}
                  />
                ))}
              </span>

              <img
                src="/assets/cursor-ledolab.svg"
                alt=""
                aria-hidden="true"
                className="contact-cursor"
              />

              <span className="contact-card-label">Escríbeme directo</span>
              <span className="contact-card-email">hola@ledolab.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;