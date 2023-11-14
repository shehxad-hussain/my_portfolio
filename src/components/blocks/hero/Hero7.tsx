import { FC } from 'react';
import { fadeInAnimate, slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero7: FC = () => {
  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container py-14 pt-md-15 pb-md-18">
        <div className="row text-center">
          <div className="col-lg-9 col-xxl-7 mx-auto">
            <h2 className="display-1 mb-4" style={zoomInAnimate('0ms')}>
              Creative. Smart. Awesome.
            </h2>

            <p className="lead fs-24 lh-sm px-md-5 px-xl-15 px-xxl-10 mb-7" style={zoomInAnimate('500ms')}>
              We are an award winning web &amp; mobile design agency that strongly believes in the power of creative
              ideas.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <span style={slideInDownAnimate('900ms')}>
            <NextLink href="#" title="See Projects" className="btn btn-lg btn-primary rounded-pill mx-1" />
          </span>

          <span style={slideInDownAnimate('1200ms')}>
            <NextLink href="#" title="Contact Us" className="btn btn-lg btn-outline-primary rounded-pill mx-1" />
          </span>
        </div>

        <div className="row mt-12" style={fadeInAnimate('1600ms')}>
          <div className="col-lg-8 mx-auto">
            <figure>
              <img
                alt=""
                className="img-fluid"
                src="/img/illustrations/i12.png"
                srcSet="/img/illustrations/i12@2x.png 2x"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero7;
