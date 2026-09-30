import './Steps.css';

/** Proceso paso a paso (los números sí importan aquí: es una secuencia). */
const Steps = ({ items }) => (
  <ol className="steps">
    {items.map((step, index) => (
      <li key={step.title}>
        <span className="steps__number">{String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      </li>
    ))}
  </ol>
);

export default Steps;
