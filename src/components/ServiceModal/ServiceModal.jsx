import { useEffect } from 'react';
import CursorMark from '../../components/CursorMark/CursorMark';

const ServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="media-service-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="media-service-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="media-service-modal-content">
        <button
          type="button"
          className="media-service-modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="media-service-modal-header">
          <span>SERVICIO</span>
          <CursorMark size={22} />
        </div>

        <h2 id="media-service-modal-title">{service.title}</h2>

        <p className="media-service-modal-description">
          {service.description}
        </p>

        <div className="media-service-modal-price">
          <span>PRECIO</span>
          <strong>{service.price}</strong>
        </div>

        <div className="media-service-modal-section">
          <span>IDEAL PARA</span>
          <p>{service.details.idealFor}</p>
        </div>

        <div className="media-service-modal-section">
          <span>INCLUYE</span>

          <ul>
            {service.details.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="media-service-modal-section">
          <span>FORMATOS</span>
          <p>{service.details.formats}</p>
        </div>

        <button
          type="button"
          className="media-service-modal-action"
          onClick={onClose}
        >
          EMPEZAR PROYECTO
          <CursorMark size={17} />
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;