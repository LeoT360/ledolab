import { useEffect } from 'react';

/** Actualiza el título de la pestaña y la descripción para buscadores en cada página. */
export const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
};
