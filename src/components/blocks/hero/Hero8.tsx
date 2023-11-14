import { FC } from 'react';
import CountUp from 'react-countup';
import animation, { fadeInAnimate, slideInDownAnimate } from 'utils/animation';
import IconBox from 'components/reuseable/IconBox';
import NextLink from 'components/reuseable/links/NextLink';

const Hero8: FC = () => {
  return (
    <div className="card bg-soft-primary rounded-4 mt-2 mb-13 mb-md-17">
      <div className="card-body p-md-10 py-xl-11 px-xl-15">
        <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center">
          <div className="col-lg-6 order-lg-2 d-flex position-relative">
            <img
              alt="demo"
              src="/img/photos/co3.png"
              srcSet="/img/photos/co3@2x.png 2x"
              className="img-fluid ms-auto mx-auto me-lg-8"
              style={fadeInAnimate('0ms')}
            />

            <div style={animation({ name: 'slideInRight', delay: '600ms' })}>
              <div className="card shadow-lg position-absolute" style={{ bottom: '10%', right: '-3%' }}>
                <div className="card-body py-4 px-5">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <IconBox
                        icon="uil-users-alt"
                        className="icon btn btn-circle btn-md btn-soft-primary pe-none mx-auto me-3"
                      />
                    </div>

                    <div>
                      <h3 className="counter mb-0 text-nowrap">
                        <CountUp end={25000} suffix="+" />
                      </h3>
                      <p className="fs-14 lh-sm mb-0 text-nowrap">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-2 mb-5" style={slideInDownAnimate('600ms')}>
              Crafting project specific solutions with expertise.
            </h1>

            <p className="lead fs-lg lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
              We're a company that focuses on establishing long-term relationships with customers.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink title="Explore Now" href="#" className="btn btn-lg btn-primary rounded-pill me-2" />
              </span>

              <span style={slideInDownAnimate('1500ms')}>
                <NextLink title="Contact Us" href="#" className="btn btn-lg btn-outline-primary rounded-pill" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero8;
