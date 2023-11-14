import { FC } from 'react';
import { fadeInAnimate } from 'utils/animation';

// ====================================================
type Tiles8Props = { hiddenShape?: boolean };
// ====================================================

const Tiles8: FC<Tiles8Props> = ({ hiddenShape }) => {
  return (
    <div className="col-lg-6 position-relative order-lg-2">
      {!hiddenShape && (
        <div
          className="shape rounded bg-pale-green rellax d-block"
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

      <div className="row gx-md-5 gy-5 position-relative">
        <div className="col-5">
          <img
            alt="demo"
            src="/img/photos/sa9.jpg"
            srcSet="/img/photos/sa9@2x.jpg 2x"
            className="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
            style={fadeInAnimate('300ms')}
          />
          <img
            alt=""
            src="/img/photos/sa10.jpg"
            srcSet="/img/photos/sa10@2x.jpg 2x"
            className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
            style={fadeInAnimate('600ms')}
          />
        </div>

        <div className="col-7">
          <img
            alt="demo"
            src="/img/photos/sa11.jpg"
            srcSet="/img/photos/sa11@2x.jpg 2x"
            className="img-fluid rounded shadow-lg mb-5"
            style={fadeInAnimate('900ms')}
          />
          <img
            alt="demo"
            src="/img/photos/sa12.jpg"
            srcSet="/img/photos/sa12@2x.jpg 2x"
            className="img-fluid rounded shadow-lg d-flex col-11"
            style={fadeInAnimate('1200ms')}
          />
        </div>
      </div>
    </div>
  );
};

export default Tiles8;
