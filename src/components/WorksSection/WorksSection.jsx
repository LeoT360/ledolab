import { siteConfig } from '../../config/site';
import { projects } from '../../data/projects';
import Button from '../Button/Button';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Section, SectionHeading } from '../Section/Section';

const getWorks = (categories) =>
  siteConfig.showPortfolio ? projects.filter((p) => categories.includes(p.category)).slice(0, 3) : [];

/** ¿Se dibujará la sección de trabajos? Sirve para elegir el color de las olas vecinas. */
export const hasWorks = (categories) => getWorks(categories).length > 0;

/** Muestra hasta 3 trabajos. No se dibuja si el portafolio está desactivado o no hay proyectos. */
const WorksSection = ({ categories, next }) => {
  const works = getWorks(categories);
  if (works.length === 0) return null;

  return (
    <Section tone="primary" id="works" divider={{ type: 'wave', next }}>
      <SectionHeading title="Algunos trabajos" highlight="recientes." split>
        <Button to="/portafolio" variant="dark" arrow>Ver portafolio</Button>
      </SectionHeading>
      <div className="project-grid">
        {works.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default WorksSection;
