import { useEffect, useRef } from 'react';
import { whatsappLink } from '../../config/site';
import Button from '../Button/Button';
import './ServiceModal.css';

const ServiceModal = ({ service, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="modal__content">
        <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>

        <h2 id="modal-title">{service.title}</h2>
        <p className="modal__description">{service.description}</p>

        <div className="modal__price">
          <span>Precio</span>
          <strong>{service.price}</strong>
        </div>

        <div className="modal__block">
          <h3>Ideal para</h3>
          <p>{service.details.idealFor}</p>
        </div>

        <div className="modal__block">
          <h3>Incluye</h3>
          <ul>
            {service.details.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="modal__block">
          <h3>Formatos</h3>
          <p>{service.details.formats}</p>
        </div>

        <Button
          href={whatsappLink(`Hola, me interesa el servicio "${service.title}". ¿Podemos hablar?`)}
          variant="dark"
          arrow
          className="modal__action"
        >
          Cotizar por WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default ServiceModal;
