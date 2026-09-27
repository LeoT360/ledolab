import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShapeDivider from '../../components/ShapeDivider/ShapeDivider';
import CursorMark from '../../components/CursorMark/CursorMark';
import ServiceModal from '../../components/ServiceModal/ServiceModal';
import './MediaEditing.css';

const serviceCategories = [
  {
    number: '01',
    category: 'VIDEO',
    title: 'Edición de video',
    description:
      'Contenido audiovisual pensado para promocionar tu negocio, comunicar una idea y captar atención.',
    tone: 'orange',
    services: [
      {
        number: '01',
        title: 'Video promocional',
        description:
          'Videos para presentar productos, servicios o promociones de tu negocio.',
        price: 'Desde $XX.XXX',
        details: {
          idealFor:
            'Negocios que necesitan mostrar un producto, servicio o promoción de forma atractiva.',
          includes: [
            'Edición y montaje',
            'Música y sincronización',
            'Textos y elementos gráficos',
            'Transiciones y efectos',
          ],
          formats:
            'Formato adaptable para Instagram, TikTok, YouTube y otras plataformas.',
        },
      },
      {
        number: '02',
        title: 'Video para redes',
        description:
          'Edición de contenido vertical pensado para conectar con tu audiencia en redes sociales.',
        price: 'Desde $XX.XXX',
        details: {
          idealFor:
            'Marcas y negocios que publican contenido constantemente en redes sociales.',
          includes: [
            'Edición dinámica',
            'Subtítulos y textos',
            'Música y efectos',
            'Formato vertical',
          ],
          formats: 'Principalmente 9:16 para Reels, TikTok y Shorts.',
        },
      },
      {
        number: '03',
        title: 'Video publicitario',
        description:
          'Piezas audiovisuales enfocadas en comunicar una campaña, producto o servicio.',
        price: 'Desde $XX.XXX',
        details: {
          idealFor:
            'Negocios que quieren una pieza audiovisual para promocionar una oferta o campaña.',
          includes: [
            'Edición completa',
            'Diseño de textos',
            'Animaciones básicas',
            'Corrección de color',
          ],
          formats:
            'Adaptable a diferentes formatos según el medio donde será publicado.',
        },
      },
    ],
  },
  {
    number: '02',
    category: 'IMAGEN',
    title: 'Edición de imágenes',
    description:
      'Piezas gráficas diseñadas para comunicar promociones, productos e ideas de manera visual.',
    tone: 'blue',
    services: [
      {
        number: '01',
        title: 'Flyer publicitario',
        description:
          'Diseño gráfico para promocionar productos, servicios, eventos u ofertas.',
        price: 'Desde $XX.XXX',
        details: {
          idealFor:
            'Negocios que necesitan una pieza visual para promocionar algo específico.',
          includes: [
            'Diseño de la composición',
            'Tipografía y jerarquía visual',
            'Integración de imágenes',
            'Preparación para publicación',
          ],
          formats:
            'Formato digital para redes sociales, WhatsApp y otros medios.',
        },
      },
      {
        number: '02',
        title: 'Publicación para redes',
        description:
          'Diseños pensados para mantener una comunicación visual atractiva en redes sociales.',
        price: 'Desde $XX.XXX',
        details: {
          idealFor:
            'Marcas que quieren mejorar la presentación visual de sus publicaciones.',
          includes: [
            'Diseño gráfico',
            'Composición visual',
            'Textos y elementos gráficos',
            'Adaptación al formato solicitado',
          ],
          formats:
            'Formatos adaptados a Instagram, Facebook y otras plataformas.',
        },
      },
      {
        number: '03',
        title: 'Pieza publicitaria',
        description:
          'Diseños personalizados para comunicar una promoción, campaña o mensaje específico.',
        price: 'Desde $XX.XXX',
        details: {
          idealFor:
            'Negocios que necesitan una pieza gráfica diferente a un formato tradicional.',
          includes: [
            'Concepto visual',
            'Diseño personalizado',
            'Composición de elementos',
            'Archivo final listo para publicar',
          ],
          formats: 'El formato se define según el uso final de la pieza.',
        },
      },
    ],
  },
];

const methodologies = [
  {
    number: '01',
    title: 'Cuéntame tu idea',
    description:
      'Hablamos sobre lo que quieres comunicar, el objetivo de la pieza y las necesidades de tu negocio.',
  },
  {
    number: '02',
    title: 'Definimos la propuesta',
    description:
      'Organizamos el contenido, formato y dirección visual antes de comenzar a trabajar.',
  },
  {
    number: '03',
    title: 'Creo la pieza',
    description:
      'Trabajo en la edición y diseño buscando que el resultado tenga intención y personalidad.',
  },
  {
    number: '04',
    title: 'Revisamos y entregamos',
    description:
      'Revisamos el resultado final, realizamos los ajustes necesarios y preparo la entrega.',
  },
];

const works = [
  {
    number: '01',
    category: 'VIDEO',
    title: 'Proyecto audiovisual',
    description: 'Una muestra de edición y composición visual.',
  },
  {
    number: '02',
    category: 'DISEÑO',
    title: 'Pieza publicitaria',
    description: 'Una propuesta gráfica pensada para comunicar.',
  },
  {
    number: '03',
    category: 'VIDEO',
    title: 'Contenido para redes',
    description: 'Edición enfocada en contenido digital.',
  },
];

const faqItems = [
  {
    question: '¿Yo debo proporcionar el material?',
    answer:
      'Sí. Puedes proporcionar los videos, imágenes, textos, logos y demás recursos que quieras utilizar. Si necesitas orientación sobre qué material enviar, también podemos definirlo juntos.',
  },
  {
    question: '¿Puedo solicitar modificaciones?',
    answer:
      'Sí. El proceso contempla una etapa de revisión para realizar los ajustes necesarios antes de la entrega final.',
  },
  {
    question: '¿Cuánto tarda un proyecto?',
    answer:
      'El tiempo depende del tipo de servicio, cantidad de material y complejidad del proyecto. El plazo se define antes de comenzar.',
  },
  {
    question: '¿Puedes preparar contenido para redes sociales?',
    answer:
      'Sí. Los servicios pueden adaptarse a formatos como publicaciones, historias, Reels, TikTok y Shorts.',
  },
  {
    question: '¿Puedo solicitar algo diferente?',
    answer:
      'Claro. Si necesitas una pieza que no aparece entre los servicios, puedes contarme qué necesitas para revisar la propuesta.',
  },
];

const MediaEditing = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="media-page">
      <section className="media-hero">
        <div className="media-hero-background" />

        <div className="media-hero-top">
          <span>LEDO LAB / SERVICIOS</span>
          <span>VIDEO + IMAGEN</span>
        </div>

        <div className="media-hero-content">
          <div className="media-hero-copy">
            <p className="media-hero-kicker">EDICIÓN & DISEÑO</p>

            <h1>
              Haz que tu
              <span> negocio se vea.</span>
            </h1>

            <p className="media-hero-description">
              Edición de video y diseño gráfico para transformar tus ideas
              en piezas visuales que llamen la atención.
            </p>

            <Link to="#services" className="media-hero-button">
              EXPLORAR SERVICIOS
              <CursorMark size={18} />
            </Link>
          </div>

          <div className="media-hero-visual">
            <div className="media-hero-circle" />

            <div className="media-hero-card media-hero-card-one">
              <span>VIDEO</span>
              <strong>01</strong>
            </div>

            <div className="media-hero-card media-hero-card-two">
              <span>DESIGN</span>
              <strong>02</strong>
            </div>

            <img
              src="/assets/title-outline-2-ledolab.svg"
              alt=""
              aria-hidden="true"
              className="media-hero-logo"
            />

            <img
              src="/assets/cursor-ledolab.svg"
              alt=""
              aria-hidden="true"
              className="media-hero-cursor"
            />
          </div>
        </div>

        <ShapeDivider type="soft" fillColor="var(--color-bg-light)" />
      </section>

      <section className="media-services" id="services">
        <div className="content-width">
          <div className="media-section-heading">
            <div>
              <p className="section-kicker">SERVICIOS</p>
              <h2>
                ¿Qué quieres
                <span> crear?</span>
              </h2>
            </div>

            <p>
              Elige el tipo de pieza que necesitas y descubre qué podemos
              construir juntos.
            </p>
          </div>

          <div className="media-service-categories">
            {serviceCategories.map((category) => (
              <div
                key={category.number}
                className={`media-service-category media-service-${category.tone}`}
              >
                <div className="media-service-category-header">
                  <div className="media-service-category-number">
                    {category.number}
                  </div>

                  <div>
                    <span>{category.category}</span>
                    <h3>{category.title}</h3>
                  </div>
                </div>

                <p className="media-service-category-description">
                  {category.description}
                </p>

                <div className="media-services-list">
                  {category.services.map((service) => (
                    <article
                      className="media-service-card"
                      key={service.number}
                    >
                      <div className="media-service-card-top">
                        <span>{service.number}</span>
                        <span>{category.category}</span>
                      </div>

                      <div className="media-service-card-main">
                        <div className="media-service-icon">
                          <CursorMark size={20} />
                        </div>

                        <div className="media-service-content">
                          <h4>{service.title}</h4>
                          <p>{service.description}</p>
                        </div>
                      </div>

                      <div className="media-service-card-bottom">
                        <span className="media-service-price">
                          {service.price}
                        </span>

                        <button
                          type="button"
                          className="media-service-button"
                          onClick={() => setSelectedService(service)}
                        >
                          VER DETALLES
                          <CursorMark size={15} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ShapeDivider
          type="curve"
          fillColor="var(--color-bg-dark)"
        />
      </section>

      <section className="media-methodologies" id='methodologies'>
        <div className="content-width">
          <div className="media-methodologies-heading">
            <div>
              <p className="section-kicker">METODOLOGÍA</p>
              <h2>
                Del concepto
                <span> al resultado.</span>
              </h2>
            </div>

            <p>
              Cada proyecto tiene sus particularidades, pero el proceso
              siempre parte de entender qué necesita tu negocio.
            </p>
          </div>

          <div className="media-methodologies-list">
            {methodologies.map((methodology) => (
              <article
                className="media-methodology-item"
                key={methodology.number}
              >
                <span className="media-methodology-number">
                  {methodology.number}
                </span>

                <div>
                  <h3>{methodology.title}</h3>
                  <p>{methodology.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <ShapeDivider
          type="wave"
          fillColor="var(--color-primary)"
        />
      </section>

      <section className="media-works" id='works'>
        <div className="content-width">
          <div className="media-works-heading">
            <div>
              <p className="section-kicker">TRABAJOS</p>
              <h2>
                Algunas cosas que
                <span> he creado.</span>
              </h2>
            </div>

            <Link to="/portfolio" className="media-works-link">
              VER PORTFOLIO
              <CursorMark size={17} />
            </Link>
          </div>

          <div className="media-works-grid">
            {works.map((work) => (
              <Link
                to="/portfolio"
                className="media-work-card"
                key={work.number}
              >
                <div className="media-work-placeholder">
                  <span>{work.number}</span>
                  <span>{work.category}</span>
                </div>

                <div className="media-work-info">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <ShapeDivider
          type="curve"
          fillColor="var(--color-bg-dark)"
        />
      </section>

      <section className="media-faq" id='faq'>
        <div className="content-width">
          <div className="media-faq-layout">
            <div className="media-faq-heading">
              <p className="section-kicker">FAQ</p>

              <h2>
                Algunas preguntas
                <span> frecuentes.</span>
              </h2>

              <p>
                Si tienes otra pregunta sobre un servicio o proyecto,
                simplemente puedes escribirme.
              </p>
            </div>

            <div className="media-faq-list">
              {faqItems.map((item, index) => (
                <div
                  className={`media-faq-item ${
                    openFaq === index ? 'media-faq-open' : ''
                  }`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="media-faq-question"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    aria-expanded={openFaq === index}
                  >
                    <span>{item.question}</span>
                    <span className="media-faq-icon">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>

                  {openFaq === index && (
                    <div className="media-faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <ShapeDivider
          type="soft"
          fillColor="var(--color-primary)"
          flip
        />
      </section>

      <section className="media-cta">
        <div className="content-width">
          <div className="media-cta-content">
            <p className="section-kicker">LEDO LAB</p>

            <h2>
              Haz que tu negocio
              <span> se vea.</span>
            </h2>

            <p>
              Cuéntame qué tienes en mente y encontremos la mejor forma
              de convertirlo en algo visual.
            </p>

            <Link to="/#contact" className="media-cta-button">
              EMPEZAR UN PROYECTO
              <CursorMark size={18} />
            </Link>
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default MediaEditing;