import { FC } from 'react';
import GoogleAppBtn from 'components/common/GoogleAppBtn';

const Banner1: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-15 py-lg-17 py-xl-20 py-xxl-22 position-relative">
        <img
          alt=""
          src="/img/photos/devices2.png"
          srcSet="/img/photos/devices2@2x.png 2x"
          className="position-lg-absolute col-12 col-lg-12 mt-lg-n50p mb-3 mb-md-10 mb-lg-0"
          style={{ top: '50%', left: '-23%' }}
        />

        <div className="row gx-lg-8 gx-xl-12 align-items-center">
          <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-6 mt-md-n9 text-center text-lg-start">
            <h1 className="display-4 mb-4 px-md-10 px-lg-0">
              Get all of your steps, exercise, sleep and meds in one place.
            </h1>

            <p className="lead fs-lg mb-7 px-md-10 px-lg-0 pe-xxl-15">
              Sandbox is now available to download from both the App Store and Google Play Store.
            </p>

            <GoogleAppBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
