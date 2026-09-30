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
import { mediaCategories, mediaFaqs, mediaSteps } from '../../data/media';
import './MediaEditing.css';
import { usePageMeta } from '../../hooks/usePageMeta';

const MediaEditing = () => {
  usePageMeta(
    'Edición de video y diseño publicitario | Ledo Lab',
    'Videos promocionales, videos para redes, flyers y publicaciones para que tu negocio se vea y se recuerde.'
  );

  const [selectedService, setSelectedService] = useState(null);
  const showWorks = hasWorks(['video', 'image']);

  return (
    <div className="media-page">
      {/* ===== HERO · Edición y diseño =====
          Este bloque es solo de esta página: cambia el texto aquí y sus estilos en MediaEditing.css (.media-hero). */}
      <section className="media-hero">
        <div className="media-hero__inner content-width">
          <div className="media-hero__copy">
            <p className="media-hero__kicker">Edición y diseño</p>
            <h1>
              Haz que tu <span>negocio se vea.</span>
            </h1>
            <p className="media-hero__text">
              Edito videos y diseño piezas gráficas para que lo que publicas llame la atención.
            </p>
            <div className="media-hero__actions">
              <Button
                href={whatsappLink('Hola, quiero cotizar una pieza de video o diseño.')}
                variant="accent"
                arrow
              >
                Cotizar por WhatsApp
              </Button>
              <Button to="#services" variant="outline">Ver servicios</Button>
            </div>
          </div>

          {/* Zona de decoración: figuras, imágenes o video de este hero */}
          <div className="media-hero__art" aria-hidden="true"></div>
        </div>
        <ShapeDivider type="soft" fillColor="var(--color-bg-light)" />
      </section>

      <Section tone="light" id="services" divider={{ type: 'curve', next: 'dark' }}>
        <SectionHeading title="¿Qué quieres" highlight="crear?" />
        <div className="media-categories">
          {mediaCategories.map((category) => (
            <div key={category.title} className={`media-category media-category--${category.tone}`}>
              <h3>{category.title}</h3>
              <div className="media-category__list">
                {category.services.map((service) => (
                  <ServiceCard key={service.title} service={service} onOpen={setSelectedService} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark" id="methodologies" divider={{ type: 'wave', next: showWorks ? 'primary' : 'light' }}>
        <SectionHeading title="Del concepto" highlight="al resultado." />
        <Steps items={mediaSteps} />
      </Section>

      <WorksSection categories={['video', 'image']} next="light" />

      <Section tone="light" id="faq" divider={{ type: 'soft', next: 'primary' }}>
        <Faq items={mediaFaqs} />
      </Section>

      <CtaSection
        tone="primary"
        title="¿Tienes algo"
        highlight="en mente?"
        text="Cuéntame qué necesitas y lo hablamos por WhatsApp."
        message="Hola, quiero cotizar un proyecto de video o diseño."
      />

      {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
    </div>
  );
};

export default MediaEditing;
