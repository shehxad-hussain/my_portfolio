import { useEffect } from 'react';

const useTooltip = () => {
  // added tooltip library
  useEffect(() => {
    (async function () {
      const iTooltip = require('itooltip');
      const tooltip = new iTooltip('.itooltip');
      tooltip.init({
        indentX: 15,
        indentY: 15,
        positionX: 'right',
        positionY: 'bottom',
        className: 'itooltip-inner'
      });
    })();
  }, []);

  return;
};

export default useTooltip;
