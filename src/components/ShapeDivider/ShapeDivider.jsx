import './ShapeDivider.css';

const shapes = {
  curve:
    'M0 78 C170 18 330 18 500 65 C690 115 900 115 1200 32 L1200 120 L0 120 Z',

  wave:
    'M0 65 C150 15 270 18 410 62 C560 110 690 110 830 62 C970 18 1080 22 1200 68 L1200 120 L0 120 Z',

  soft:
    'M0 52 C180 105 350 105 520 52 C690 5 850 5 1200 58 L1200 120 L0 120 Z',

  arch:
    'M0 78 C210 78 300 22 600 22 C900 22 990 78 1200 78 L1200 120 L0 120 Z',

  double:
    'M0 62 C110 22 215 22 330 60 C450 100 545 100 660 62 C775 22 870 22 990 60 C1080 88 1140 88 1200 66 L1200 120 L0 120 Z',
};

const ShapeDivider = ({
  type = 'curve',
  fillColor = 'var(--color-bg-dark)',
  flip = false,
  position = 'bottom', // 'bottom' | 'top' — which edge of the PARENT section it sits on
}) => {
  const path = shapes[type] || shapes.curve;

  return (
    <div
      className={`shape-divider shape-divider--${position} ${flip ? 'shape-flipped' : ''}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d={path} fill={fillColor} />
      </svg>
    </div>
  );
};

export default ShapeDivider;