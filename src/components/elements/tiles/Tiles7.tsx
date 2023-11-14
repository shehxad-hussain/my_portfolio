import { FC } from 'react';
import animation, { fadeInAnimate } from 'utils/animation';

const Tiles7: FC = () => {
  return (
    <div className="col-lg-6 position-relative">
      <div
        className="shape rounded bg-pale-red rellax d-block"
        style={{
          zIndex: 0,
          top: '50%',
          left: '50%',
          width: '50%',
          height: '60%',
          transform: 'translate3d(0px, 0px, 0px) translate(-50%, -50%)'
        }}
      />

      <div className="row gx-md-5 gy-5 position-relative">
        <div className="col-6">
          <img
            alt="demo"
            src="/img/photos/sa5.jpg"
            srcSet="/img/photos/sa5@2x.jpg 2x"
            className="img-fluid rounded shadow-lg mb-5"
            style={fadeInAnimate('300ms')}
          />
          <img
            alt="demo"
            src="/img/photos/sa6.jpg"
            srcSet="/img/photos/sa6@2x.jpg 2x"
            className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
            style={fadeInAnimate('600ms')}
          />
        </div>

        <div className="col-6">
          <img
            alt="demo"
            src="/img/photos/sa7.jpg"
            srcSet="/img/photos/sa7@2x.jpg 2x"
            className="img-fluid rounded shadow-lg my-5"
            style={fadeInAnimate('900ms')}
          />
          <img
            alt="demo"
            src="/img/photos/sa8.jpg"
            srcSet="/img/photos/sa8@2x.jpg 2x"
            className="img-fluid rounded shadow-lg d-flex col-10"
            style={fadeInAnimate('1200ms')}
          />
        </div>
      </div>
    </div>
  );
};

export default Tiles7;
