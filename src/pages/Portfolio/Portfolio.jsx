import { useState } from 'react';
import { Link } from 'react-router-dom';
import CursorMark from '../../components/CursorMark/CursorMark';
import ShapeDivider from '../../components/ShapeDivider/ShapeDivider';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Proyecto audiovisual',
    category: 'video',
    label: 'VIDEO',
    link: '#',
  },
  {
    id: 2,
    title: 'Identidad visual',
    category: 'image',
    label: 'IMAGEN',
    link: '#',
  },
  {
    id: 3,
    title: 'Experiencia web',
    category: 'web',
    label: 'WEB',
    link: '#',
  },
  {
    id: 4,
    title: 'Contenido para marca',
    category: 'video',
    label: 'VIDEO',
    link: '#',
  },
  {
    id: 5,
    title: 'Diseño publicitario',
    category: 'image',
    label: 'IMAGEN',
    link: '#',
  },
  {
    id: 6,
    title: 'Página para negocio',
    category: 'web',
    label: 'WEB',
    link: '#',
  },
  {
    id: 7,
    title: 'Página para negocio',
    category: 'web',
    label: 'WEB',
    link: '#',
  },
  {
    id: 8,
    title: 'Página para negocio',
    category: 'web',
    label: 'WEB',
    link: '#',
  },
  {
    id: 9,
    title: 'Página para negocio',
    category: 'web',
    label: 'WEB',
    link: '#',
  },
];

const featuredProjects = [
  {
    id: 1,
    title: 'Proyecto audiovisual',
    category: 'VIDEO',
    link: '#',
  },
  {
    id: 2,
    title: 'Identidad visual',
    category: 'IMAGEN',
    link: '#',
  },
  {
    id: 3,
    title: 'Experiencia web',
    category: 'WEB',
    link: '#',
  },
];

const filters = [
  { label: 'TODO', value: 'all' },
  { label: 'VIDEO', value: 'video' },
  { label: 'IMAGEN', value: 'image' },
  { label: 'WEB', value: 'web' },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="portfolio-page">

      {/* Hero */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <span className="portfolio-kicker">
            PORTAFOLIO
          </span>

          <h1>
            LO QUE
            <br />
            <span>HEMOS CREADO.</span>
          </h1>

          <p>
            Una selección de trabajos hechos para comunicar,
            destacar y darle personalidad a diferentes marcas.
          </p>
        </div>

        <div className="portfolio-hero-mark">
          <CursorMark size={90} />
        </div>

        <ShapeDivider
          type="curve"
          fillColor="var(--color-primary)"
        />
      </section>

    {/* Featured */}
    <section className="portfolio-featured" id='featured'>
    <div className="portfolio-featured-header">
        <div>
        <span className="portfolio-section-kicker">
            DESTACADOS
        </span>

        <h2>
            LO MÁS
            <br />
            <span>RECIENTE.</span>
        </h2>
        </div>

        <p>
        Algunos proyectos que representan
        lo que hacemos en Ledo Lab.
        </p>
    </div>

    <div className="portfolio-featured-grid">
        {featuredProjects.map((project, index) => (
        <a
            key={project.id}
            href={project.link}
            className={`portfolio-featured-card portfolio-featured-card-${index + 1}`}
        >
            <div className="portfolio-featured-visual">
            <span>{project.category}</span>

            <div className="portfolio-card-placeholder">
                <CursorMark size={48} />
            </div>
            </div>

            <div className="portfolio-featured-info">
            <h3>{project.title}</h3>

            <span className="portfolio-card-arrow">
                ↗
            </span>
            </div>
        </a>
        ))}
    </div>

    <ShapeDivider
        type="soft"
        fillColor="var(--color-bg-light)"
    />
    </section>

      {/* Projects */}
      <section className="portfolio-projects" id='projects'>
        <div className="portfolio-projects-header">
          <div>
            <span className="portfolio-section-kicker">
              PROYECTOS
            </span>

            <h2>
              ALGUNAS
              <br />
              <span>IDEAS.</span>
            </h2>
          </div>

          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={
                  activeFilter === filter.value
                    ? 'portfolio-filter active'
                    : 'portfolio-filter'
                }
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <a
                href={project.link}
                className={`portfolio-card portfolio-card-${(index % 3) + 1}`}
                key={project.id}
                >
                <div className="portfolio-card-visual">
                    <span>{project.label}</span>

                    <div className="portfolio-card-placeholder">
                    <CursorMark size={42} />
                    </div>
                </div>

                <div className="portfolio-card-info">
                    <div>
                    <span>0{project.id}</span>
                    <h3>{project.title}</h3>
                    </div>

                    <span className="portfolio-card-arrow">
                    ↗
                    </span>
                </div>
            </a>
          ))}
        </div>

        <ShapeDivider
          type="soft"
          fillColor="var(--color-bg-dark)"
        />
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <span className="portfolio-section-kicker">
          SIGUIENTE PROYECTO
        </span>

        <h2>
          ¿HACEMOS
          <br />
          <span>EL SIGUIENTE?</span>
        </h2>

        <Link to="/#contact" className="portfolio-cta-link">
          EMPEZAR UN PROYECTO
          <CursorMark size={18} />
        </Link>
      </section>

    </main>
  );
};

export default Portfolio;