import { useEffect } from 'react';

const useReplaceMe = () => {
  useEffect(() => {
    let replace: any;
    const options = {
      speed: 2500,
      separator: ',',
      clickChange: false,
      loopCount: 'infinite'
    };

    (() => {
      const ReplaceMe = require('plugins/replaceme');

      if (document.querySelector('.rotator-zoom') !== null) {
        replace = new ReplaceMe(document.querySelector('.rotator-zoom'), {
          ...options,
          animation: 'animate__animated animate__zoomIn'
        });
      }
      if (document.querySelector('.rotator-fade') !== null) {
        replace = new ReplaceMe(document.querySelector('.rotator-fade'), {
          ...options,
          animation: 'animate__animated animate__fadeInDown'
        });
      }
    })();

    return () => replace?.stop();
  }, []);

  return;
};

export default useReplaceMe;
