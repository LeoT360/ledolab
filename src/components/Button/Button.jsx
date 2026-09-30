import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Botón / enlace unificado.
 * - href: enlace externo (se abre en otra pestaña)
 * - to: ruta interna, o ancla si empieza con "#"
 * - variant: 'primary' | 'dark' | 'light' | 'outline' | 'outline-light'
 * - arrow: agrega una flecha de texto al final
 */
const Button = ({ children, to, href, variant = 'primary', arrow = false, className = '', ...rest }) => {
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  if (to?.startsWith('#')) {
    return <a href={to} className={classes} {...rest}>{content}</a>;
  }
  if (to) {
    return <Link to={to} className={classes} {...rest}>{content}</Link>;
  }
  return <button type="button" className={classes} {...rest}>{content}</button>;
};

export default Button;
