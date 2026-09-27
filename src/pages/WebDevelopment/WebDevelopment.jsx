import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShapeDivider from '../../components/ShapeDivider/ShapeDivider';
import ServiceModal from '../../components/ServiceModal/ServiceModal';
import './WebDevelopment.css';

const services = [
  {
    title: 'Landing Page',
    price: 'Desde $XX.XXX',
    description:
      'Una página enfocada en presentar un producto, servicio o campaña de forma clara y atractiva.',
    details: {
      idealFor:
        'Negocios, productos o campañas que necesitan una presencia web enfocada en un objetivo concreto.',
      includes: [
        'Diseño personalizado',
        'Diseño responsive',
        'Secciones según el objetivo del proyecto',
        'Botones y llamados a la acción',
      ],
      formats: 'Adaptada para computadores, tablets y celulares.',
    },
  },
  {
    title: 'Página web para negocio',
    price: 'Desde $XX.XXX',
    description:
      'Una página completa para mostrar quién eres, qué haces y cómo pueden encontrarte.',
    details: {
      idealFor:
        'Negocios que necesitan presentar sus servicios, información y formas de contacto en internet.',
      includes: [
        'Diseño personalizado',
        'Estructura de varias secciones',
        'Diseño responsive',
        'Sección de contacto',
      ],
      formats: 'Adaptada para computadores, tablets y celulares.',
    },
  },
  {
    title: 'Portafolio web',
    price: 'Desde $XX.XXX',
    description:
      'Una web diseñada para mostrar tus proyectos, trabajos y experiencia.',
    details: {
      idealFor:
        'Creativos, profesionales, freelancers y marcas que quieren mostrar su trabajo de forma visual.',
      includes: [
        'Diseño personalizado',
        'Galería o presentación de proyectos',
        'Diseño responsive',
        'Secciones informativas',
      ],
      formats: 'Adaptada para computadores, tablets y celulares.',
    },
  },
  {
    title: 'Web personalizada',
    price: 'Desde $XX.XXX',
    description:
      'Una experiencia web diseñada alrededor de la identidad y necesidades de tu proyecto.',
    details: {
      idealFor:
        'Proyectos que necesitan una estructura o experiencia diferente a una página web convencional.',
      includes: [
        'Diseño personalizado',
        'Estructura planteada desde cero',
        'Diseño responsive',
        'Funcionalidades según el proyecto',
      ],
      formats: 'Adaptada a las necesidades del proyecto.',
    },
  },
  {
    title: 'Interfaz interactiva',
    price: 'Desde $XX.XXX',
    description:
      'Interfaces con movimiento e interacción para hacer que una web destaque.',
    details: {
      idealFor:
        'Marcas y proyectos que quieren una experiencia web más dinámica y visual.',
      includes: [
        'Diseño de interfaz',
        'Elementos interactivos',
        'Animaciones y transiciones',
        'Diseño responsive',
      ],
      formats: 'Adaptada para computadores y dispositivos móviles.',
    },
  },
  {
    title: 'Funcionalidad web',
    price: 'Desde $XX.XXX',
    description:
      'Desarrollo de funcionalidades específicas para complementar una página.',
    details: {
      idealFor:
        'Proyectos que necesitan una funcionalidad específica que no está contemplada dentro de una página convencional.',
      includes: [
        'Análisis de la necesidad',
        'Desarrollo de la funcionalidad',
        'Integración con la página',
        'Pruebas de funcionamiento',
      ],
      formats: 'Según las características de la funcionalidad.',
    },
  },
];

const methodologies = [
  {
    number: '01',
    title: 'Cuéntame tu idea',
    description:
      'Hablamos sobre tu negocio, lo que necesitas y qué quieres conseguir con tu página.',
  },
  {
    number: '02',
    title: 'Definimos la propuesta',
    description:
      'Organizamos la estructura, contenido, estilo visual y funcionalidades del proyecto.',
  },
  {
    number: '03',
    title: 'Construyo la web',
    description:
      'Transformo la propuesta en una experiencia web funcional, visual y adaptada a tu proyecto.',
  },
  {
    number: '04',
    title: 'Revisamos y entregamos',
    description:
      'Revisamos el resultado, hacemos los ajustes necesarios y dejamos todo listo.',
  },
];

const works = [
  {
    number: '01',
    title: 'Proyecto web',
    description: 'Diseño y desarrollo web.',
  },
  {
    number: '02',
    title: 'Proyecto web',
    description: 'Experiencia digital personalizada.',
  },
  {
    number: '03',
    title: 'Proyecto web',
    description: 'Landing page para negocio.',
  },
];

const faqs = [
  {
    question: '¿Tengo que tener claro cómo quiero mi página?',
    answer:
      'No necesariamente. Podemos partir de una idea general y definir juntos la estructura, contenido y estilo que mejor se adapte a tu proyecto.',
  },
  {
    question: '¿Puedo proporcionar mis propios textos e imágenes?',
    answer:
      'Sí. Puedes proporcionar los materiales que ya tengas y trabajamos a partir de ellos.',
  },
  {
    question: '¿La página se adapta a celulares?',
    answer:
      'Sí. La idea es que la experiencia funcione correctamente tanto en computadores como en dispositivos móviles.',
  },
  {
    question: '¿Puedo solicitar cambios?',
    answer:
      'Sí. Los ajustes se realizan durante la etapa de revisión según lo establecido en la propuesta del proyecto.',
  },
  {
    question: '¿Puedo pedir algo que no aparece en los servicios?',
    answer:
      'Sí. Si tienes una idea diferente, podemos revisar qué necesitas y definir una propuesta personalizada.',
  },
];

const WebDevelopment = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main className="web-page">
      <section className="web-hero">
        <div className="web-hero-grid" />

        <div className="web-hero-window web-hero-window-one">
          <span />
          <span />
          <span />
        </div>

        <div className="web-hero-window web-hero-window-two">
          <span>WEB</span>
          <span>DEVELOPMENT</span>
        </div>

        <div className="web-hero-content">
          <div className="web-hero-copy">
            <p className="web-hero-kicker">DESARROLLO WEB</p>

            <h1>
              TU IDEA,
              <br />
              <span>EN INTERNET.</span>
            </h1>

            <p className="web-hero-description">
              Diseño y desarrollo páginas web que convierten la identidad de
              tu negocio en una experiencia digital.
            </p>

            <Link to="#web-services" className="web-hero-button">
              VER SERVICIOS <span>↗</span>
            </Link>
          </div>

          <div className="web-hero-visual">
            <div className="web-hero-browser">
              <div className="web-browser-bar">
                <div className="web-browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="web-browser-address">
                  ledolab.dev
                </div>
              </div>

              <div className="web-browser-content">
                <div className="web-browser-line web-browser-line-large" />
                <div className="web-browser-line" />
                <div className="web-browser-line web-browser-line-short" />

                <div className="web-browser-blocks">
                  <div />
                  <div />
                  <div />
                </div>

                <div className="web-browser-button">CLICK</div>
              </div>
            </div>

            <div className="web-hero-cursor">↖</div>
            <div className="web-hero-label">CREATIVE / CODE</div>
          </div>
        </div>

        <ShapeDivider
          type="curve"
          fillColor="var(--color-bg-light)"
        />
      </section>

      <section className="web-services" id="services">
        <div className="web-section-heading">
          <div>
            <p className="web-section-kicker">SERVICIOS</p>

            <h2>
              Una web que
              <br />
              <span>se sienta tuya.</span>
            </h2>
          </div>

          <p>
            Desde una landing page hasta una experiencia completamente
            personalizada. Cada proyecto se construye pensando en lo que
            realmente necesita tu negocio.
          </p>
        </div>

        <div className="web-services-grid">
          {services.map((service, index) => (
            <button
              type="button"
              className={`web-service-card web-service-card-${index + 1}`}
              key={service.title}
              onClick={() => setSelectedService(service)}
            >
              <div className="web-service-card-top">
                <span>0{index + 1}</span>
                <span>↗</span>
              </div>

              <div className="web-service-card-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="web-service-card-bottom">
                <strong>{service.price}</strong>
                <span>+</span>
              </div>
            </button>
          ))}
        </div>

        <ShapeDivider
          type="soft"
          fillColor="var(--color-bg-dark)"
        />
      </section>

      <section className="web-methodologies" id='methodologies'>
        <div className="web-methodologies-heading">
          <div>
            <p className="web-section-kicker">METODOLOGÍA</p>

            <h2>
              De la idea
              <br />
              <span>a la web.</span>
            </h2>
          </div>

          <p>
            Un proceso sencillo para convertir lo que tienes en mente en una
            experiencia digital real.
          </p>
        </div>

        <div className="web-methodologies-list">
          {methodologies.map((methodology) => (
            <article
              className="web-methodology-item"
              key={methodology.number}
            >
              <span className="web-methodology-number">
                {methodology.number}
              </span>

              <div>
                <h3>{methodology.title}</h3>
                <p>{methodology.description}</p>
              </div>

              <span className="web-methodology-arrow">↗</span>
            </article>
          ))}
        </div>

        <ShapeDivider
          type="wave"
          fillColor="var(--color-bg-light)"
          flip
        />
      </section>

      <section className="web-works" id='works'>
        <div className="web-works-heading">
          <div>
            <p className="web-section-kicker">TRABAJOS</p>

            <h2>
              Ideas que ya
              <br />
              <span>están tomando forma.</span>
            </h2>
          </div>

          <Link to="/portfolio" className="web-works-link">
            VER PORTFOLIO ↗
          </Link>
        </div>

        <div className="web-works-grid">
          {works.map((work) => (
            <Link
              to="/portfolio"
              className="web-work-card"
              key={work.number}
            >
              <div className="web-work-placeholder">
                <span>WEB / 0{work.number}</span>

                <div className="web-work-ui">
                  <div />
                  <div />
                  <div />
                </div>
              </div>

              <div className="web-work-info">
                <div>
                  <span>{work.number}</span>
                  <h3>{work.title}</h3>
                </div>

                <p>{work.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <ShapeDivider
          type="arch"
          fillColor="var(--color-primary)"
        />
      </section>

      <section className="web-faq" id='faq'>
        <div className="web-faq-layout">
          <div className="web-faq-heading">
            <p className="web-section-kicker">FAQ</p>

            <h2>
              Antes de
              <br />
              <span>empezar.</span>
            </h2>

            <p>
              Algunas preguntas que pueden aparecer antes de comenzar un
              proyecto web.
            </p>
          </div>

          <div className="web-faq-list">
            {faqs.map((faq, index) => (
              <details className="web-faq-item" key={faq.question}>
                <summary>
                  <span>0{index + 1}</span>
                  <strong>{faq.question}</strong>
                  <b>+</b>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <ShapeDivider
          type="double"
          fillColor="var(--color-bg-dark)"
        />
      </section>

      <section className="web-cta">
        <div className="web-cta-content">
          <p className="web-section-kicker">¿TIENES UNA IDEA?</p>

          <h2>
            Hagamos que
            <br />
            <span>pase de idea a web.</span>
          </h2>

          <Link to="/#contact" className="web-cta-button">
            EMPEZAR UN PROYECTO <span>→</span>
          </Link>
        </div>
      </section>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </main>
  );
};

export default WebDevelopment;