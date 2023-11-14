import { FC } from 'react';
import Typewriter from 'typewriter-effect';
import { slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero9: FC = () => {
  // typewriter options
  const OPTIONS = {
    loop: true,
    autoStart: true,
    strings: ['easy usage', 'fast transactions', 'secure payments']
  };

  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-12 pt-md-14 pb-md-17">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 mt-lg-n2 text-center text-lg-start order-2 order-lg-0">
            <h1 className="display-1 mb-5 mx-md-10 mx-lg-0" style={slideInDownAnimate('600ms')}>
              Sandbox is effortless and powerful with <br />
              <span className="typer text-primary text-nowrap">
                <Typewriter options={OPTIONS} />
              </span>
            </h1>

            <p className="lead fs-lg mb-7" style={slideInDownAnimate('900ms')}>
              Achieve your saving goals. Have all your recurring and one time expenses and incomes in one place.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink title="Get Started" href="#" className="btn btn-lg btn-primary rounded me-2" />
              </span>

              <span style={slideInDownAnimate('1500ms')}>
                <NextLink title="Free Trial" href="#" className="btn btn-lg btn-green rounded" />
              </span>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-3 offset-1 offset-lg-0 col-lg-4 d-flex flex-column">
                <div className="ms-auto mt-auto" style={zoomInAnimate('300ms')}>
                  <img
                    className="img-fluid rounded shadow-lg"
                    src="/img/photos/sa20.jpg"
                    srcSet="/img/photos/sa20@2x.jpg 2x"
                    alt="demo"
                  />
                </div>

                <div className="ms-auto mt-5 mb-10" style={zoomInAnimate('600ms')}>
                  <img
                    className="img-fluid rounded shadow-lg"
                    src="/img/photos/sa18.jpg"
                    srcSet="/img/photos/sa18@2x.jpg 2x"
                    alt="demo"
                  />
                </div>
              </div>

              <div className="col-4 col-lg-5" style={zoomInAnimate('0ms')}>
                <div>
                  <img
                    className="w-100 img-fluid rounded shadow-lg"
                    src="/img/photos/sa16.jpg"
                    srcSet="/img/photos/sa16@2x.jpg 2x"
                    alt="demo"
                  />
                </div>
              </div>

              <div className="col-3 d-flex flex-column">
                <div className="mt-auto" style={zoomInAnimate('300ms')}>
                  <img
                    alt="demo"
                    src="/img/photos/sa21.jpg"
                    srcSet="/img/photos/sa21@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>

                <div className="mt-5" style={zoomInAnimate('600ms')}>
                  <img
                    alt="demo"
                    src="/img/photos/sa19.jpg"
                    srcSet="/img/photos/sa19@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>

                <div className="mt-5 mb-10" style={zoomInAnimate('900ms')}>
                  <img
                    alt="demo"
                    src="/img/photos/sa17.jpg"
                    srcSet="/img/photos/sa17@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero9;
