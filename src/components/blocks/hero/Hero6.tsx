import { FC } from 'react';
import { fadeInAnimate, slideInDownAnimate } from 'utils/animation';
import GoogleAppBtn from 'components/common/GoogleAppBtn';

const Hero6: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-5 pb-15 py-lg-17 py-xl-19 pb-xl-20 position-relative">
        <img
          alt="hero"
          src="/img/photos/devices.png"
          srcSet="/img/photos/devices@2x.png 2x"
          className="position-lg-absolute col-12 col-lg-10 col-xl-11 col-xxl-10 px-lg-5 px-xl-0 ms-n5 ms-sm-n8 ms-md-n10 ms-lg-0 mb-md-4 mb-lg-0"
          style={{ top: '-1%', left: '-21%', ...fadeInAnimate('0ms') }}
        />

        <div className="row gx-0 align-items-center">
          <div className="col-md-10 offset-md-1 col-lg-5 offset-lg-7 offset-xxl-6 ps-xxl-12 mt-md-n9 text-center text-lg-start">
            <h1 className="display-2 mb-4 mx-sm-n2 mx-md-0" style={slideInDownAnimate('600ms')}>
              Get all of your steps, exercise, sleep and meds in one place.
            </h1>

            <p className="lead fs-lg mb-7 px-md-10 px-lg-0" style={slideInDownAnimate('900ms')}>
              Sandbox is now available to download from both the App Store and Google Play Store.
            </p>

            <GoogleAppBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero6;
