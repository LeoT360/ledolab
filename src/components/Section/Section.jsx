import ShapeDivider from '../ShapeDivider/ShapeDivider';
import './Section.css';

const toneFill = {
  light: 'var(--color-bg-light)',
  dark: 'var(--color-bg-dark)',
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
};

/**
 * Sección con fondo por tono. `divider` dibuja la ola inferior:
 * { type: 'soft' | 'wave' | 'curve' | 'arch' | 'double', next: tono de la sección siguiente, flip }
 */
export const Section = ({ tone = 'light', id, divider, className = '', children }) => (
  <section
    id={id}
    className={`section tone-${tone}${divider ? ' section--divider' : ''} ${className}`.trim()}
  >
    <div className="content-width">{children}</div>
    {divider && <ShapeDivider type={divider.type} fillColor={toneFill[divider.next]} flip={divider.flip} />}
  </section>
);

/** Título de sección: `title` + `highlight` (segunda línea en color de acento). */
export const SectionHeading = ({ title, highlight, split = false, children }) => (
  <div className={`section-heading${split ? ' section-heading--split' : ''}`}>
    <h2>
      {title}
      {highlight && <span>{highlight}</span>}
    </h2>
    {children}
  </div>
);

export default Section;
