type AnimationArgs = { name: string; delay: string };

const animation = ({ name, delay }: AnimationArgs) => {
  return {
    animationName: name,
    animationDelay: delay,
    animationFillMode: 'both',
    animationDuration: '700ms',
    animationDirection: 'normal',
    animationTimingFunction: 'ease'
  };
};

export const slideInDownAnimate = (delay: string) => animation({ name: 'slideInDown', delay });

export const zoomInAnimate = (delay: string) => animation({ name: 'zoomIn', delay });

export const fadeInAnimate = (delay: string) => animation({ name: 'fadeIn', delay });

export default animation;
