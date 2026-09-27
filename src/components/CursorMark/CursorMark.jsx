const CursorMark = ({ size = 18, rotate = 0, className = '', style = {} }) => (
  <svg
    viewBox="0 0 101 109"
    width={size}
    height={Math.round(size * (109 / 101))}
    fill="currentColor"
    aria-hidden="true"
    className={`cursor-mark ${className}`.trim()}
    style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined, ...style }}
  >
    <path d="M79.0251 0.601945C87.9805 -1.79696 97.2793 3.18907 99.7929 11.7378C102.306 20.2873 97.0835 29.1643 88.1277 31.5633L53.2193 40.9109L92.603 69.5801C99.9992 74.9645 101.424 85.0542 95.7834 92.115C90.1432 99.1754 79.5737 100.535 72.1773 95.1511L36.7266 69.3404L33.5684 94.1532C32.4458 102.968 24.0477 109.247 14.8141 108.176C5.58034 107.104 -0.997821 99.0874 0.124761 90.2727L7.42674 32.9342C7.5934 31.6256 7.9431 30.3793 8.4093 29.1983C9.42939 23.2134 13.9545 18.0331 20.4727 16.287L79.0251 0.601945Z" />
  </svg>
);

export default CursorMark;
