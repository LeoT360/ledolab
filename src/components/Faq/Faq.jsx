import { whatsappLink } from '../../config/site';
import { SectionHeading } from '../Section/Section';
import './Faq.css';

const Faq = ({ items, title = 'Preguntas', highlight = 'frecuentes.' }) => (
  <div className="faq">
    <div>
      <SectionHeading title={title} highlight={highlight} />
      <p className="faq__note">
        ¿Otra duda?{' '}
        <a href={whatsappLink('Hola, tengo una pregunta sobre sus servicios.')} target="_blank" rel="noopener noreferrer">
          Escríbeme por WhatsApp
        </a>
        .
      </p>
    </div>

    <div className="faq__list">
      {items.map((item) => (
        <details className="faq__item" key={item.question}>
          <summary>
            <span>{item.question}</span>
            <b aria-hidden="true">+</b>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  </div>
);

export default Faq;
