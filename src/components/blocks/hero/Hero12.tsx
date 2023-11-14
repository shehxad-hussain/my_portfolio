import { FC } from 'react';
import { slideInDownAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero12: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-15 pt-md-14 pb-md-20">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0">
            <h1 className="display-1 mb-5 mx-md-n5 mx-lg-0" style={slideInDownAnimate('600ms')}>
              Creative. Smart. Awesome.
            </h1>

            <p className="lead fs-lg mb-7" style={slideInDownAnimate('900ms')}>
              We specialize in web, mobile and identity design. We love to turn ideas into beautiful things.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink href="#" title="See Projects" className="btn btn-primary rounded me-2" />
              </span>

              <span style={slideInDownAnimate('1500ms')}>
                <NextLink href="#" title="Learn More" className="btn btn-yellow rounded" />
              </span>
            </div>
          </div>

          <div className="col-lg-7" style={slideInDownAnimate('0ms')}>
            <figure>
              <img className="w-auto" src="/img/illustrations/i6.png" srcSet="/img/illustrations/i6@2x.png 2x" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero12;
