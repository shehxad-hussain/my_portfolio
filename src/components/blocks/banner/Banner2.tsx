import { FC } from 'react';

const Banner2: FC = () => {
  return (
    <div
      className="wrapper image-wrapper bg-image bg-overlay text-white"
      style={{ backgroundImage: 'url(/img/photos/bg34.jpg)' }}
    >
      <div className="container py-16 py-md-19 text-center">
        <h2 className="display-1 text-white mb-0">
          I take photographs with <br className="d-none d-md-block" /> creativity, concept &amp; passion
        </h2>
      </div>
    </div>
  );
};

export default Banner2;
