import { useState } from 'react';
import Button from '../../components/Button/Button';
import CtaSection from '../../components/CtaSection/CtaSection';
import Faq from '../../components/Faq/Faq';
import ShapeDivider from '../../components/ShapeDivider/ShapeDivider';
import { Section, SectionHeading } from '../../components/Section/Section';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ServiceModal from '../../components/ServiceModal/ServiceModal';
import Steps from '../../components/Steps/Steps';
import WorksSection, { hasWorks } from '../../components/WorksSection/WorksSection';
import { whatsappLink } from '../../config/site';
import { webFaqs, webServices, webSteps } from '../../data/web';
import './WebDevelopment.css';
import { usePageMeta } from '../../hooks/usePageMeta';

const cardTones = ['dark', 'blue', 'orange'];

const WebDevelopment = () => {
  usePageMeta(
    'Páginas web para negocios | Ledo Lab',
    'Landing pages, sitios para negocios y portafolios web, diseñados y programados para que te encuentren en internet.'
  );

  const [selectedService, setSelectedService] = useState(null);
  // Sin sección de trabajos, las preguntas cambian de color para no repetir fondos seguidos
  const showWorks = hasWorks(['web']);
  const faqTone = showWorks ? 'light' : 'primary';

  return (
    <div className="web-page">
      {/* ===== HERO · Desarrollo web =====
          Este bloque es solo de esta página: cambia el texto aquí y sus estilos en WebDevelopment.css (.web-hero). */}
      <section className="web-hero">
        <div className="web-hero__inner content-width">
          <div className="web-hero__copy">
            <p className="web-hero__kicker">Desarrollo web</p>
            <h1>
              Tu negocio, <span>en internet.</span>
            </h1>
            <p className="web-hero__text">
              Diseño y programo páginas web para que tu negocio se vea profesional y te encuentren fácil.
            </p>
            <div className="web-hero__actions">
              <Button href={whatsappLink('Hola, quiero cotizar una página web.')} arrow>
                Cotizar por WhatsApp
              </Button>
              <Button to="#services" variant="outline-light">Ver servicios</Button>
            </div>
          </div>

          {/* Zona de decoración: figuras, imágenes o animaciones de este hero */}
          <div className="web-hero__art" aria-hidden="true"></div>
        </div>
        <ShapeDivider type="soft" fillColor="var(--color-bg-light)" />
      </section>

      <Section tone="light" id="services" divider={{ type: 'soft', next: 'dark' }}>
        <SectionHeading title="Una web que" highlight="se sienta tuya." />
        <div className="web-services">
          {webServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              tone={cardTones[index % cardTones.length]}
              onOpen={setSelectedService}
            />
          ))}
        </div>
      </Section>

      <Section tone="dark" id="methodologies" divider={{ type: 'wave', next: showWorks ? 'primary' : faqTone }}>
        <SectionHeading title="De la idea" highlight="a la web." />
        <Steps items={webSteps} />
      </Section>

      <WorksSection categories={['web']} next={faqTone} />

      <Section tone={faqTone} id="faq" divider={{ type: 'soft', next: 'dark' }}>
        <Faq items={webFaqs} title="Antes de" highlight="empezar." />
      </Section>

      <CtaSection
        tone="dark"
        title="¿Hablamos de"
        highlight="tu página?"
        text="Cuéntame tu idea y lo hablamos por WhatsApp."
        message="Hola, quiero cotizar una página web."
      />

      {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
    </div>
  );
};

export default WebDevelopment;
