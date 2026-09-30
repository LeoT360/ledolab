import { whatsappLink } from '../../config/site';
import Button from '../Button/Button';
import { Section, SectionHeading } from '../Section/Section';
import './CtaSection.css';

/** Cierre de página: título, frase corta y botón directo a WhatsApp. */
const CtaSection = ({ tone = 'primary', title, highlight, text, label = 'Escribir por WhatsApp', message }) => (
  <Section tone={tone} className="cta">
    <div className="cta__content">
      <SectionHeading title={title} highlight={highlight} />
      {text && <p>{text}</p>}
      <Button href={whatsappLink(message)} variant={tone === 'dark' ? 'primary' : 'dark'} arrow>
        {label}
      </Button>
    </div>
  </Section>
);

export default CtaSection;
