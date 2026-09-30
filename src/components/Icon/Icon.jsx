/**
 * Iconos del sitio (navbar de escritorio y de celular).
 * No son archivos de imagen: cada uno es el dibujo SVG escrito aquí mismo.
 * Para cambiar uno, edita su bloque; para agregar otro, añade una entrada nueva
 * y úsala con <Icon name="tu-nombre" />. El color lo toma del texto (currentColor).
 */
const icons = {
  // Casa
  home: <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,

  // Pantalla con botón de play
  video: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M10 9.5v5l4.5-2.5z" />
    </>
  ),

  // Código < / >
  code: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" />,

  // Cuadrícula de 4 cuadros
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="2" />
      <rect x="13" y="4" width="7" height="7" rx="2" />
      <rect x="4" y="13" width="7" height="7" rx="2" />
      <rect x="13" y="13" width="7" height="7" rx="2" />
    </>
  ),

  // Burbuja de chat
  chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.7A8 8 0 1 1 21 12z" />,
};

const Icon = ({ name, size = 22 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {icons[name]}
  </svg>
);

export default Icon;
