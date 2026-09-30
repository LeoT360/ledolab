import './ServiceCard.css';

/** Tarjeta de servicio. tone: 'light' | 'dark' | 'blue' | 'orange' */
const ServiceCard = ({ service, tone = 'light', onOpen }) => (
  <article className={`service-card service-card--${tone}`}>
    <div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>

    <div className="service-card__footer">
      <strong>{service.price}</strong>
      <button type="button" onClick={() => onOpen(service)}>
        Ver detalles <span aria-hidden="true">→</span>
      </button>
    </div>
  </article>
);

export default ServiceCard;
