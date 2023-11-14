import { FC } from 'react';
import { fadeInAnimate } from 'utils/animation';

// ====================================================
type Tiles9Props = { hiddenShape?: boolean };
// ====================================================

const Tiles9: FC<Tiles9Props> = ({ hiddenShape }) => {
  return (
    <div className="col-lg-6 position-relative">
      {!hiddenShape && (
        <div
          className="shape rounded bg-pale-yellow rellax d-block"
          style={{
            zIndex: 0,
            top: '50%',
            left: '50%',
            width: '50%',
            height: '60%',
            transform: 'translate3d(0px, 0px, 0px) translate(-50%, -50%)'
          }}
        />
      )}

      <div className="row gx-md-5 gy-5 position-relative align-items-center">
        <div className="col-6">
          <img
            alt=""
            src="/img/photos/sa13.jpg"
            srcSet="/img/photos/sa13@2x.jpg 2x"
            className="img-fluid rounded shadow-lg d-flex ms-auto"
            style={fadeInAnimate('300ms')}
          />
        </div>

        <div className="col-6">
          <img
            alt=""
            src="/img/photos/sa14.jpg"
            srcSet="/img/photos/sa14@2x.jpg 2x"
            className="img-fluid rounded shadow-lg mb-5"
            style={fadeInAnimate('900ms')}
          />
          <img
            alt=""
            src="/img/photos/sa15.jpg"
            srcSet="/img/photos/sa15@2x.jpg 2x"
            className="img-fluid rounded shadow-lg d-flex col-10"
            style={fadeInAnimate('1200ms')}
          />
        </div>
      </div>
    </div>
  );
};

export default Tiles9;
