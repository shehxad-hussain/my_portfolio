import Isotope from 'isotope-layout';
import { useEffect, useRef, useState } from 'react';

const useIsotope = () => {
  const isotope = useRef<Isotope>();
  const [filterKey, setFilterKey] = useState('*');

  useEffect(() => {
    if (typeof window === undefined) return;

    (async function () {
      const Isotope = (await import('isotope-layout')).default;
      const grids = document.querySelectorAll('.grid');

      if (grids !== null) {
        grids.forEach((g) => {
          const grid = g.querySelector('.isotope') as HTMLElement;

          isotope.current = new Isotope(grid, {
            itemSelector: '.item',
            layoutMode: 'masonry',
            masonry: { columnWidth: grid.offsetWidth / 12 },
            percentPosition: true,
            transitionDuration: '0.7s'
          });
        });
      }
    })();

    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    const filtered = filterKey === '*' ? { filter: '*' } : { filter: filterKey };
    isotope.current?.arrange(filtered);
  }, [filterKey]);

  // change filter item
  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

  return { handleFilterKeyChange, filterKey };
};

export default useIsotope;
