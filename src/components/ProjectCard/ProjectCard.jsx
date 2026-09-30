import { categoryLabels } from '../../data/projects';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const external = project.link?.startsWith('http');
  const Wrapper = project.link ? 'a' : 'div';
  const linkProps = project.link
    ? { href: project.link, ...(external && { target: '_blank', rel: 'noopener noreferrer' }) }
    : {};

  return (
    <Wrapper className={`project-card project-card--${project.category}`} {...linkProps}>
      <div className="project-card__visual">
        {project.image ? <img src={project.image} alt={project.title} /> : <span>{categoryLabels[project.category]}</span>}
      </div>
      <div className="project-card__info">
        <h3>{project.title}</h3>
        {project.description && <p>{project.description}</p>}
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
