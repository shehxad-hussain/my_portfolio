import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { fadeInAnimate, slideInDownAnimate } from 'utils/animation';

const Hero18: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container-card">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 mt-2 mb-5"
          style={{ backgroundImage: 'url(/img/photos/bg22.png)' }}
        >
          <div className="card-body py-14 px-0">
            <div className="container">
              <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start">
                <div className="col-lg-6">
                  <h1 className="display-2 mb-4 me-xl-5 me-xxl-0" style={slideInDownAnimate('900ms')}>
                    Networking <span className="text-gradient gradient-1">solutions</span> for worldwide communication
                  </h1>

                  <p className="lead fs-23 lh-sm mb-7 pe-xxl-15" style={slideInDownAnimate('1200ms')}>
                    We're a company that focuses on establishing long-term relationships with customers.
                  </p>

                  <div style={slideInDownAnimate('1500ms')}>
                    <NextLink title="Explore Now" href="#" className="btn btn-lg btn-gradient gradient-1 rounded" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <img
                    alt="demo"
                    className="img-fluid mb-n18"
                    src="/img/illustrations/3d6.png"
                    srcSet="/img/illustrations/3d6@2x.png 2x"
                    style={fadeInAnimate('300ms')}
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

export default Hero18;
