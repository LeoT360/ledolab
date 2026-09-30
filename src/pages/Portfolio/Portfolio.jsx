import { useState } from 'react';
import CtaSection from '../../components/CtaSection/CtaSection';
import ShapeDivider from '../../components/ShapeDivider/ShapeDivider';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Section, SectionHeading } from '../../components/Section/Section';
import { categoryLabels, projects } from '../../data/projects';
import './Portfolio.css';
import { usePageMeta } from '../../hooks/usePageMeta';

const filters = [{ label: 'Todo', value: 'all' }, ...Object.entries(categoryLabels).map(([value, label]) => ({ label, value }))];

const Portfolio = () => {
  usePageMeta(
    'Portafolio | Ledo Lab',
    'Proyectos de video, diseño y desarrollo web hechos por Ledo Lab.'
  );

  const [activeFilter, setActiveFilter] = useState('all');
  const visible = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* ===== HERO · Portafolio =====
          Este bloque es solo de esta página: cambia el texto aquí y sus estilos en Portfolio.css (.portfolio-hero). */}
      <section className="portfolio-hero">
        <div className="portfolio-hero__inner content-width">
          <p className="portfolio-hero__kicker">Portafolio</p>
          <h1>
            Lo que <span>he creado.</span>
          </h1>
          <p className="portfolio-hero__text">Trabajos hechos para que negocios se vean y se recuerden.</p>

          {/* Zona de decoración: figuras o imágenes de este hero */}
        </div>
        <ShapeDivider type="soft" fillColor="var(--color-bg-light)" />
      </section>

      <Section tone="light" id="projects" divider={{ type: 'soft', next: 'dark' }}>
        <SectionHeading title="Algunos" highlight="proyectos." split>
          <div className="portfolio-filters" role="group" aria-label="Filtrar por tipo">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`portfolio-filter${activeFilter === filter.value ? ' is-active' : ''}`}
                aria-pressed={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </SectionHeading>

        {visible.length > 0 ? (
          <div className="project-grid">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="portfolio-empty">Pronto habrá proyectos en esta categoría.</p>
        )}
      </Section>

      <CtaSection
        tone="dark"
        title="¿Hacemos"
        highlight="el siguiente?"
        text="Cuéntame tu idea y lo hablamos por WhatsApp."
      />
    </div>
  );
};

export default Portfolio;
