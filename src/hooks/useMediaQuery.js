import { useSyncExternalStore } from 'react';

/** Punto de quiebre entre navbar de escritorio y navbar móvil. */
export const MOBILE_QUERY = '(max-width: 767px)';

export const useMediaQuery = (query) =>
  useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
