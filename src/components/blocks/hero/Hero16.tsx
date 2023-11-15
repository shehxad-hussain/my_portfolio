import { FC } from 'react';
import CountUp from 'react-countup';
import { slideInDownAnimate } from 'utils/animation';
// -------- custom component -------- //
import Check from 'icons/lineal/Check';
import NextLink from 'components/reuseable/links/NextLink';

const Hero16: FC = () => {
  return (
    <section className="wrapper bg-gray">
      <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
        <div className="row gy-10 gy-md-13 gy-lg-0 align-items-center">
          <div className="col-md-8 col-lg-5 d-flex position-relative mx-auto">
            <div className="img-mask mask-1" style={slideInDownAnimate('0ms')}>
              <img src="/img/photos/about17.jpg" srcSet="/img/photos/about17@2x.jpg 2x" alt="" />
            </div>

            <div
              className="card shadow-lg position-absolute"
              style={{ right: '2%', bottom: '10%', ...slideInDownAnimate('300ms') }}
            >
              <div className="card-body py-4 px-5">
                <div className="d-flex flex-row align-items-center">
                  <div>
                    <Check className="icon-svg-sm text-primary mx-auto me-3" />
                  </div>

                  <div>
                    <h3 className="counter mb-0 text-nowrap">
                      <CountUp end={250} suffix="+" />
                    </h3>
                    <p className="fs-14 lh-sm mb-0 text-nowrap">Projects Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-1 col-xxl-5 text-center text-lg-start">
            <h1 className="display-1 mb-5" style={slideInDownAnimate('600ms')}>
              I'm User Interface Designer &amp; Developer.
            </h1>

            <p className="lead fs-25 lh-sm mb-7 px-md-10 px-lg-0" style={slideInDownAnimate('900ms')}>
              Hello! I'm Julia, a freelance user interface designer &amp; developer based in London. I’m very passionate
              about the work that I do.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink title="See My Works" href="#" className="btn btn-lg btn-primary rounded-pill me-2" />
              </span>

              <span style={slideInDownAnimate('1500ms')}>
                <NextLink title="Contact Me" href="#" className="btn btn-lg btn-outline-primary rounded-pill" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero16;
