import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ 
  children, 
  to, 
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  type = 'button',
  onClick,
  className = '' 
}) => {
  const buttonContent = <span>{children}</span>;

  const combinedClasses = `btn-ledo btn-${variant} ${className}`;

  if (to) {
    if (to.startsWith('#')) {
      return (
        <a href={to} className={combinedClasses} onClick={onClick}>
          {buttonContent}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {buttonContent}
    </button>
  );
};

export default Button;