import { FC } from 'react';

const Hero1: FC = () => {
  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container pt-10 pt-md-14 pb-8 text-center">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <figure>
              <img
                alt="hero"
                className="w-auto"
                src="/img/illustrations/i2.png"
                srcSet="/img/illustrations/i2@2x.png 2x"
              />
            </figure>
          </div>

          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start">
            <h1 className="display-1 mb-5 mx-md-n5 mx-lg-0">Grow Your Business with Our Solutions.</h1>
            <p className="lead fs-lg mb-7">
              We help our clients to increase their website traffic, rankings and visibility in search results.
            </p>
            <a className="btn btn-primary rounded-pill me-2">Try It For Free</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
